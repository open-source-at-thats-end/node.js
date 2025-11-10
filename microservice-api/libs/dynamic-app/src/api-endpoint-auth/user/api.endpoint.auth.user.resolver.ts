import { Resolver, Query, Mutation, Args, Int, GraphQLExecutionContext, Context } from '@nestjs/graphql';
import { ApiEndpointAuthUserService } from './api.endpoint.auth.user.service';
import { ApiEndpointAuthEntity } from '../entities/api.endpoint.auth.entity';
import { GraphSignupInputDto, GraphSignupOutputDto } from '../dto/api.endpoint.auth.signup.dto';
import { GraphLoginInputDto, GraphLoginOutputDto } from '../dto/api.endpoint.auth.login.dto';
import { GraphResetPasswordInputDto, GraphResetPasswordOutputDto } from '../dto/api.endpoint.auth.reset.password.dto';
import { CurrentApiUser, JWTAuthGuardApiEnpointAuthUserPayload } from '@libs/library-app';
import { formatDistanceToNow, formatDuration } from 'date-fns';
import { now } from 'lodash';

@Resolver(() => ApiEndpointAuthEntity)
export class ApiEndpointAuthUserResolver {
  constructor(private readonly service: ApiEndpointAuthUserService) {}

  @Query(() => String, {
    name: 'HelloGraph',
    description: 'Testing query' 
  })
  hello(): string {

    const result = new Date(now())
    return `Hello API user, this is the enterprise application, and you are using Graphql API service. Have a nice day! ${result}`;
  }

  @Mutation(() => GraphSignupOutputDto, {
    name: 'GraphSignup', 
    description: 'Signup to get access to the application data.'
  })
  signUp(@Args('input') input: GraphSignupInputDto): GraphSignupOutputDto {
    return this.service.signUp(input) as any as GraphSignupOutputDto;
  }

  @Mutation(() => GraphLoginOutputDto, {
    name: 'GraphSignin', 
    description: 'Signin to get JWT token and gain access to the application data.'
  })
  async signIn(@Args('input') input: GraphLoginInputDto): Promise<GraphLoginOutputDto> {
    return await this.service.signIn(input);
  }

  @Mutation(() => GraphLoginOutputDto, {
    name: 'GraphRefreshJWT', 
    description: 'Refresh JWT access token using refresh token.'
  })
  async jwtRefreshTokens(@Args('jwtRefreshToken') jwtRefreshToken: string):Promise<GraphLoginOutputDto> {
    return this.service.jwtRefreshTokens(jwtRefreshToken);
  }

  @Mutation(() => GraphResetPasswordOutputDto, {
    name: 'GraphResetPassword', 
    description: 'Reset your password using JWT refresh token.'
  })
  async resetPassword(@Args('input') input: GraphResetPasswordInputDto): Promise<GraphResetPasswordOutputDto> {
    return await this.service.resetPassword(input);
  }

  @Query(() => GraphSignupOutputDto, {
    name: 'GraphWhoAmI', 
    description: 'Get the current user info using JWT access token.'
  })
  whoAmI(
    @CurrentApiUser() user: JWTAuthGuardApiEnpointAuthUserPayload,
    @Context() context: GraphQLExecutionContext
  ): Promise<GraphSignupOutputDto> {
    return this.service.whoAmI(user, context);
  }

  @Mutation(() => Boolean, {
    name: 'GraphSignout', 
    description: 'Signout and remove JWT token for the current state. Next time login to regain access.'
  })
  signOut(
    @CurrentApiUser() user: JWTAuthGuardApiEnpointAuthUserPayload,
    @Context() context: GraphQLExecutionContext
  ): Promise<boolean> {
    return this.service.signOut(user, context);
  }
}