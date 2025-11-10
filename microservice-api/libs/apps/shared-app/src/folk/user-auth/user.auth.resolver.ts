import { CurrectStatefulAuthUser, CurrentApiUser, DataValidationPipe, GraphQLBodyContext, JWTTokenUserDataType } from "@libs/library-app";
import { UserAuthenticationService } from "./user.auth.service";
import { UserAuthenticationEntity } from "./entities/user.auth.entity";
import { Query, Args, Context, GraphQLExecutionContext, Mutation, Resolver, Info } from "@nestjs/graphql";
import { AppForgotPasswordInputDto, AppForgotPasswordOutputDto, AppGrantSignupInputDto, AppGrantSignupOutputDto, AppOtpSigninInputDto, AppOtpSigninOutputDto, AppRecoverForgotPasswordInputDto, AppRecoverForgotPasswordOutputDto, AppResetPasswordInputDto, AppResetPasswordOutputDto, AppSigninInputDto, AppSigninOutputDto, AppSignupInputDto, AppSignupOutputDto } from "./dto/user.auth.dto";
import { GraphQLResolveInfo } from "graphql";
import { SelfGraphqlMicroserviceService } from "@libs/dynamic-app";
import { UserAuthorisationCreateInputDto, UserAuthorisationCreateOutputDto } from "../user-authorisation/dto/user.authorisation.dto";

@Resolver(() => UserAuthenticationEntity)
export class UserAuthenticationResolver{

constructor(
    private readonly service: UserAuthenticationService,
    private readonly validation: DataValidationPipe,
) {}

  @Mutation(() => AppSignupOutputDto, {
    name: 'AppSignup', 
    description: 'Signup to get access restricted area. Required any one username or primary_email or primary_mobile.'
  })
  async signUp(
    @Context() ctx: any,

    @Args('input') 
    input: AppSignupInputDto,

    @GraphQLBodyContext() selection: AppSignupOutputDto,
    @Info() info: GraphQLResolveInfo 
  ): Promise<AppSignupOutputDto> {
    const resp =  this.service.signUp(input, selection, info, ctx) as any as AppSignupOutputDto;
    
    return resp;
  }

  @Mutation(() => AppGrantSignupOutputDto, {
    name: 'AppGrantSignup', 
    description: 'Grant Signup to get access restricted area. Required any one username or primary_email or primary_mobile.'
  })
  async grantSignUp(
    @Context() ctx: any,

    @Args('input') 
    input: AppGrantSignupInputDto,

    @GraphQLBodyContext() selection: AppGrantSignupOutputDto,
    @Info() info: GraphQLResolveInfo 
  ): Promise<AppGrantSignupOutputDto> {
    const resp =  this.service.grantSignUp(input, selection, info, ctx) as any as AppGrantSignupOutputDto;
    
    return resp;
  }

  // ████ GrantRole() ██████████████████████████████████████
  
  @Mutation(() => [UserAuthorisationCreateOutputDto], {
    name:  `AppGrantRole`, 
    description: `Grants a new role to an existing user.`
  })
  async create(
    @Context() ctx: any,

    @Args('input')
    input: UserAuthorisationCreateInputDto,

    @GraphQLBodyContext() selection: UserAuthorisationCreateOutputDto,
    @Info() info: GraphQLResolveInfo 
  ): Promise<UserAuthorisationCreateOutputDto[]> {
    
    return this.service.grantRole(input, selection, info, ctx);
  }

  @Mutation(() => AppSigninOutputDto, {
    name: 'AppSignin', 
    description: 'Signin to get your account access.'
  })
  async signIn(
    @Context() ctx: any,

    @Args('input') 
    input: AppSigninInputDto,

    @GraphQLBodyContext() selection: AppSigninOutputDto,
    @Info() info: GraphQLResolveInfo 
  ): Promise<AppSigninOutputDto> {
    return await this.service.signIn(input, selection, info, ctx);
  }

  @Mutation(() => AppOtpSigninOutputDto, {
    name: 'AppOtpSignin', 
    description: 'Signin using OTP to get your account access.'
  })
  async otpSignIn(
    @Context() ctx: any,

    @Args('input') 
    input: AppOtpSigninInputDto,

    @GraphQLBodyContext() selection: AppOtpSigninOutputDto,
    @Info() info: GraphQLResolveInfo 
  ): Promise<AppOtpSigninOutputDto> {
    return await this.service.otpSignIn(input, selection, info, ctx);
  }

  @Mutation(() => AppResetPasswordOutputDto, {
    name: 'AppResetPassword', 
    description: 'Reset your password.'
  })
  async resetPassword(
    @Context() ctx: any,

    @Args('input') 
    input: AppResetPasswordInputDto,

    @GraphQLBodyContext() selection: AppResetPasswordOutputDto,
    @Info() info: GraphQLResolveInfo 
  ): Promise<AppResetPasswordOutputDto> {
    return await this.service.resetPassword(input, selection, info, ctx);
  }

  @Mutation(() => AppForgotPasswordOutputDto, {
    name: 'AppForgotPassword', 
    description: 'Forgot password.'
  })
  async forgotPassword(
    @Context() ctx: any,

    @Args('input') 
    input: AppForgotPasswordInputDto,

    @GraphQLBodyContext() selection: AppForgotPasswordOutputDto,
    @Info() info: GraphQLResolveInfo 
  ): Promise<AppForgotPasswordOutputDto> {
    return await this.service.forgotPassword(input, selection, info, ctx);
  }

  @Mutation(() => AppRecoverForgotPasswordOutputDto, {
    name: 'AppRecoverForgotPassword', 
    description: 'Recover Forgot password.'
  })
  async recoverForgotPassword(
    @Context() ctx: any,

    @Args('input') 
    input: AppRecoverForgotPasswordInputDto,

    @GraphQLBodyContext() selection: AppRecoverForgotPasswordOutputDto,
    @Info() info: GraphQLResolveInfo 
  ): Promise<AppRecoverForgotPasswordOutputDto> {
    return await this.service.recoverForgotPassword(input, selection, info, ctx);
  }

  @Mutation(() => Boolean, {
    name: 'AppSignout', 
    description: 'Signout and remove session for the current state. Next time login to regain access.'
  })
  signOut(
    @Context() ctx: any,
    
    // stateful session user info
    @CurrectStatefulAuthUser() csauser: JWTTokenUserDataType,

    @GraphQLBodyContext() selection: any,
    @Info() info: GraphQLResolveInfo
  ): Promise<boolean> {
    return this.service.signOut(csauser, selection, info, ctx);
  }

  @Query(() => AppSigninOutputDto, {
    name: 'AppWhoAmI', 
    description: 'Get the current user info fron session.'
  })
  async whoAmI(
    @Context() ctx: any,
    
    // stateful session user info
    @CurrectStatefulAuthUser() csauser: JWTTokenUserDataType,
    
    @GraphQLBodyContext() selection: any,
    @Info() info: GraphQLResolveInfo
  ): Promise<AppSigninOutputDto> {
    return await this.service.whoAmI(csauser, selection, info, ctx);
  }
}