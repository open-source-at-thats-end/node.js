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
      return new GraphSignupOutputDto(); // code removed
    } else {
      const post = this.repository.create(input);
      return new GraphSignupOutputDto(); // code removed
    }
  }
  async signUp(input: GraphSignupInputDto | GraphSignupInputDto[]): Promise<GraphSignupOutputDto | GraphSignupOutputDto[]> {
    try{
      const row = await this.authCreate(input);
      
       // code removed for security reason

      return row;
    } catch (err: any) {
      this.logService.error(err, err.message);
      throw new BadRequestException(`Signup error. ${this.logService.redactSensitive(err.message)}`);
    }
  }

  async signIn(input: GraphLoginInputDto): Promise<GraphLoginOutputDto> {
    try{
        // code removed for security reason
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
          // code removed for security reason

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
        // code removed for security reason

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

      throw new NotFoundException(`Api endpoint authentication id '${i}' not found.`);
    } catch (err: any) {
      this.logService.error(err, err.message);
      throw new BadRequestException(`Who am I error. ${this.logService.redactSensitive(err.message)}`);
    }
  }

  async signOut(user: JWTAuthGuardApiEnpointAuthUserPayload, context: GraphQLExecutionContext): Promise<boolean> {
    try {
      // code removed for security reason
      throw new NotFoundException(`Signout failed. Api endpoint authentication id '${i}' not found. Invalid JWT token.`);
    } catch (err: any) {
      this.logService.error(err, err.message);
      throw new BadRequestException(`Signout error. ${this.logService.redactSensitive(err.message)}`);
    }
  }
}