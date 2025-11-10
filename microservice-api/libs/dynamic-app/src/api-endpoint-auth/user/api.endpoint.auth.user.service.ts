import { BadRequestException, Inject, Injectable, InternalServerErrorException, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ApiEndpointAuthEntity } from '../entities/api.endpoint.auth.entity';
import { DataSource, FindOptionsWhere, Repository } from 'typeorm';
import { GraphSignupInputDto, GraphSignupOutputDto } from '../dto/api.endpoint.auth.signup.dto';
import { GraphLoginInputDto, GraphLoginOutputDto } from '../dto/api.endpoint.auth.login.dto';
import { format } from 'date-fns';
import { GraphResetPasswordInputDto, GraphResetPasswordOutputDto } from '../dto/api.endpoint.auth.reset.password.dto';
import { GraphQLExecutionContext } from '@nestjs/graphql';
import { LogService, ConfService, LibraryAppService, JWTAuthGuardApiEnpointAuthUserPayload, JWTToken, JWTTokenPayload, ApiEndpointAuthJwtService, DataValidationPipe, MakeRequiredType } from '@libs/library-app';

@Injectable()
export class ApiEndpointAuthUserService {
  // this is independent class, and keep it as it is
  
  constructor(
    private dataSource: DataSource,

    @InjectRepository(ApiEndpointAuthEntity) 
    private readonly repository: Repository<ApiEndpointAuthEntity>,

    private readonly apiEndpointAuthJwt: ApiEndpointAuthJwtService,
    private readonly confService: ConfService,
    private readonly logService: LogService,
    private readonly DataValidationPipe: DataValidationPipe,
    private readonly libraryAppService: LibraryAppService,
  ){
    this.logService.setContext(ApiEndpointAuthUserService.name);
  }
  entityFields<E>(): (keyof E)[] {
    return (this.repository.metadata.columns.map(col => col.propertyName) as (keyof E)[]);
  }
  async findOneForceSelectAll(where: FindOptionsWhere<ApiEndpointAuthEntity>[] | FindOptionsWhere<ApiEndpointAuthEntity>): Promise<ApiEndpointAuthEntity> {
    // this method force selcet all fileds even if it's set [select: false] such as password field
    const cols = this.entityFields<ApiEndpointAuthEntity>();

    const row = await this.repository.findOne({
      where: where, 
      select: cols,
      withDeleted: true
    });

    return row as ApiEndpointAuthEntity;
  }
  /**
   * Retrieves an instance of `ApiEndpointAuthEntity` based on the provided identifier or username.
   *
   * @param {number | string} by - can be id or username - The identifier or username to search for.
   * @return {Promise<ApiEndpointAuthEntity>} A promise that resolves to the found `ApiEndpointAuthEntity` instance, or rejects with a `NotFoundException` if no matching instance is found.
   */
  private async findOneForAuth(by: number | string): Promise<ApiEndpointAuthEntity> {
    try {
      const where = (typeof by === 'number') ? { id: by } : { username: by };
      const user = await this.findOneForceSelectAll(where);

      if(user !== null) 
        return user;

      throw new NotFoundException(`Api endpoint authentication id or username not found.`);
    } catch (err: any) {
      this.logService.error(err, err.message);
      throw new BadRequestException(`Auth searching error. ${this.logService.redactSensitive(err.message)}`);
    }
  }

  private async updateJwtTokens(id: number, access_token: string, refresh_token: string): Promise<boolean> {
    try {
      // update jwt in database
      const resp = await this.repository.update(id, {
        jwt_access_token: access_token,
        jwt_refresh_token: refresh_token
      });

      if(resp.affected === 1)
        return true;

      throw new BadRequestException(`Unable to update jwt token for api endpoint authentication id '${LibraryAppService.base64Enc(id)}'`);
    } catch (err: any) {
      this.logService.error(err, err.message);
      throw new InternalServerErrorException(`JWT tokens update error. ${this.logService.redactSensitive(err.message)}`);
    }
  }

  private async verifyAuthPolicy(user: ApiEndpointAuthEntity): Promise<boolean> {
    // user should not be deleted
    if(user.deleted === null){
      // user should not be suspended
      if(user.suspended === null){
        // user should have password, account withouth password cannot be allowed to gain access of application
        if(user.identify){
          return true;
        }
        throw new NotFoundException(`Your account password is not set yet, please contact administrator.`);
      }
      throw new NotFoundException(`Your account is suspended on ${format(user.suspended as Date, this.confService.formatDateTime)}, please contact administrator.`);
    }
    throw new NotFoundException(`Account with username '${user.username}' no longer available, please signup`);
  }

  async authCreate(input: GraphSignupInputDto | GraphSignupInputDto[]): Promise<GraphSignupOutputDto | GraphSignupOutputDto[]> {
    if (Array.isArray(input)) {
      const post = [];
      for(let i = 0; i < input.length; i++){
        post.push(this.repository.create(input[i]));
      }
      return (await this.repository.save(post)) as GraphSignupOutputDto[];
    } else {
      const post = this.repository.create(input);
      return (await this.repository.save(post)) as GraphSignupOutputDto;
    }
  }
  async signUp(input: GraphSignupInputDto | GraphSignupInputDto[]): Promise<GraphSignupOutputDto | GraphSignupOutputDto[]> {
    try{
      const row = await this.authCreate(input);
      
      // set some jwt token related notice in respected field
      const aNotice = `Login to get JWT access token`;
      const rNotice = `Login to get JWT refresh token`;
      if(Array.isArray(row)) {
        for(let i = 0; i < row.length; i++){
          row[i].jwt_access_token = aNotice;
          row[i].jwt_refresh_token = rNotice;
        }
      } else {
        row.jwt_access_token = aNotice;
        row.jwt_refresh_token = rNotice;
      }
      return row;
    } catch (err: any) {
      this.logService.error(err, err.message);
      throw new BadRequestException(`Signup error. ${this.logService.redactSensitive(err.message)}`);
    }
  }

  async signIn(input: GraphLoginInputDto): Promise<GraphLoginOutputDto> {
    try{
      // get the user for authentication, , if not found then it will throw exception
      const user = await this.findOneForAuth(input.username);
      
      // verify user auth policy to process further, if not valid then it will throw exception
      await this.verifyAuthPolicy(user);
      
      // check if password match
      const match = await LibraryAppService.matchHash(user.identify as string, input.identify as string);
      if(match === true) {
        // check if currect JWT is expired or not, if it's active then use it and do not generate new
        let tokens: JWTToken = await this.apiEndpointAuthJwt.verifyTokens(user.jwt_access_token, user.jwt_refresh_token);
        
        // if tokes are really expired then create new one
        if(!tokens.access_token || tokens.access_token === null || !tokens.refresh_token ||tokens.refresh_token === null) {
          // create new strict type and generate new tokens
          type RT = MakeRequiredType<ApiEndpointAuthEntity>;
          tokens = await this.apiEndpointAuthJwt.generateTokens<RT>(user as RT) as any as JWTToken;  

          user.jwt_access_token = tokens.access_token;
          user.jwt_refresh_token = tokens.refresh_token;

          // update jwt in database
          await this.updateJwtTokens(
            user.id as any as number,
            user.jwt_access_token,
            user.jwt_refresh_token
          );
        }
        
        // remove some sensitive data fields
        delete user.identify;
        delete user.suspended;
        delete user.deleted;

        // we need to return user profile also from UserService
        return user as GraphLoginOutputDto;
      } 
      throw new BadRequestException(`Email and password does not match, try agian.`);
    } catch(err: any) {
      this.logService.error(err, err.message);
      throw new BadRequestException(`Login error. ${this.logService.redactSensitive(err.message)}`);
    }
  }

  async jwtRefreshTokens(jwtRefreshToken: string): Promise<GraphLoginOutputDto> {
    try {
      const refreshTokePayload: JWTTokenPayload = await this.apiEndpointAuthJwt.getRefreshTokePayload(jwtRefreshToken);
      if(refreshTokePayload.sub){
        const subid = await ApiEndpointAuthJwtService.decSubId(refreshTokePayload.sub);
        
        // get the user for authentication, , if not found then it will throw exception
        const user = await this.findOneForAuth(parseInt(subid, 10));

        // verify user auth policy to process further, if not valid then it will throw exception
        await this.verifyAuthPolicy(user);

        // check if currect JWT is expired or not, if it's active then use it and do not generate new
        let tokens: JWTToken = await this.apiEndpointAuthJwt.verifyTokens(user.jwt_access_token, user.jwt_refresh_token);

        // if tokes are really expired then create new one
        if(!tokens.access_token || tokens.access_token === null || !tokens.refresh_token ||tokens.refresh_token === null) {
          // create new strict type and generate tokens
          type RT = MakeRequiredType<ApiEndpointAuthEntity>;
          tokens = await this.apiEndpointAuthJwt.refreshTokens<RT>(refreshTokePayload, user as RT) as any as JWTToken;

          user.jwt_access_token = tokens.access_token;
          user.jwt_refresh_token = tokens.refresh_token;

          // update jwt in database
          await this.updateJwtTokens(
            user.id as any as number,
            user.jwt_access_token,
            user.jwt_refresh_token
          );
        }

        // this is possible that user has old refresh JWT and at this time new is found in database but in any case id will be there in token
        if(user.id === parseInt(subid, 10)) {
          // remove some sensitive data fields
          delete user.identify;
          delete user.suspended;
          delete user.deleted;

          // we need to return user profile also from UserService
          return user as GraphLoginOutputDto;
        }
        throw new BadRequestException('User and refresh token does not match.');
      }
      throw new BadRequestException('Invalid refresh token. Refresh token sub is not found or corrupted.');
    } catch (err: any) {
      this.logService.error(err, err.message);
      throw new BadRequestException(`JWT Refresh token error. ${this.logService.redactSensitive(err.message)}`);
    }
  }

  async resetPassword(input: GraphResetPasswordInputDto): Promise<GraphResetPasswordOutputDto> {
    try{
      // check if refresh token is valid
      const refreshTokePayload: JWTTokenPayload = await this.apiEndpointAuthJwt.getRefreshTokePayload(input.jwt_refresh_token);
      
      const jwt_subid = await ApiEndpointAuthJwtService.decSubId(refreshTokePayload.sub);
      const jwt_username = refreshTokePayload.username;

      // get the user for authentication, , if not found then it will throw exception
      const user = await this.findOneForAuth(parseInt(jwt_subid, 10));

      // check if user is valid for reset password
      if(
          user.jwt_refresh_token === input.jwt_refresh_token && 
          user.id === parseInt(jwt_subid, 10) &&
          user.username === jwt_username &&
          user.username === input.username
        ) {
        
        // verify user auth policy to process further, if not valid then it will throw exception
        await this.verifyAuthPolicy(user);

        // perform password update
        const resp = await this.repository.update({id: user.id}, {identify: input.identify})

        if(resp.affected === 1){
          return await this.repository.findOneBy({id: user.id}) as any as GraphResetPasswordOutputDto
        }

        throw new InternalServerErrorException(`Unable to reset password for username ${user.username}. Please try again or contact administrator.`);
      }
      throw new BadRequestException('User identity does not match with refresh token.');
    } catch (err: any) {
      this.logService.error(err, err.message);
      throw new BadRequestException(`Reset password error. ${this.logService.redactSensitive(err.message)}`);
    }
  }
  
  async whoAmI(user: JWTAuthGuardApiEnpointAuthUserPayload, context: GraphQLExecutionContext): Promise<GraphSignupOutputDto> {
    try{
      const resp = await this.repository.findOneBy({id: user.id as any as number}) as GraphSignupOutputDto;
      
      if(resp !== null)
        return resp;

      const i = await LibraryAppService.base64Enc(user.id);
      throw new NotFoundException(`Api endpoint authentication id '${i}' not found.`);
    } catch (err: any) {
      this.logService.error(err, err.message);
      throw new BadRequestException(`Who am I error. ${this.logService.redactSensitive(err.message)}`);
    }
  }

  async signOut(user: JWTAuthGuardApiEnpointAuthUserPayload, context: GraphQLExecutionContext): Promise<boolean> {
    try {
      const resp = await this.repository.update({id: user.id as any as number}, {jwt_access_token: null, jwt_refresh_token: null});
    
      if(resp.affected === 1)
        return true;
      
      const i = await LibraryAppService.base64Enc(user.id);
      throw new NotFoundException(`Signout failed. Api endpoint authentication id '${i}' not found. Invalid JWT token.`);
    } catch (err: any) {
      this.logService.error(err, err.message);
      throw new BadRequestException(`Signout error. ${this.logService.redactSensitive(err.message)}`);
    }
  }
}