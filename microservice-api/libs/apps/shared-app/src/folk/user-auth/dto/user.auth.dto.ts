import { UserAuthenticationEntityMeta as authMeta, UserAuthenticationEntity } from "../entities/user.auth.entity";
import { UserEntityMeta as userMeta, UserEntity } from "../../user/entities/user.entity";
import { SessionEntityMeta as userSessMeta, SessionEntity } from "../../../session/entities/session.entity";
import { Directive, Field, InputType, Int, IntersectionType, ObjectType, PickType } from "@nestjs/graphql";
import { AuthenticatedUserCRUDTypeDefinition, AuthenticatedUserInfoCRUDTypeDefinition, CrudAffectedDto, DateTime, IsSameAs, SnapshotListDto } from "@libs/library-app";
import { IsNotEmpty, Matches, MinLength, Validate } from "class-validator";
import { CrudSnapshotDto } from "@libs/library-app";
import { UserCreateInputDto } from "../../user/dto/user.dto";
import { UserAuthenticationCreateInputDto, UserAuthenticationFindOutputRowsDto } from "./user.auth.webmaster.dto";
import { UserDeviceCreateInputDto } from "../../user-device/dto/user.device.dto";
import { SessionCreateInputDto } from "apps/shared-app/src/session/dto/session.dto";
import { UserDeviceEntity } from "../../user-device/entities/user.device.entity";
import { DeviceEntity } from "apps/shared-app/src/master/device/entities/device.entity";
import { UserAuthorisationCreateInputDto } from "../../user-authorisation/dto/user.authorisation.dto";
import { UserAuthorisationEntity } from "../../user-authorisation/entities/user.authorisation.entity";
import { AuthorisationEntity } from "apps/shared-app/src/master/authorisation/entities/authorisation.entity";
import { IdentifyOrOtpFieldRequired } from "../user.auth.validation";
import { intersection } from "lodash";
import { string } from "joi";
/**
 * █████████████████████████████████████████████████████████████
 * █ SIGNUP DTO ████████████████████████████████████████████████
 * █████████████████████████████████████████████████████████████
**/

export class SignupDto {
    static metaname: string = `Signup`;
    static metadesc: string = `Signup to get access to your account.`;
}

// ████ SIGNUP INPUT DTO ████████████████████████████████████████████████
@InputType()
export class UserAuthorisationSignupInputDto extends PickType(UserAuthorisationCreateInputDto, ['ar_id']) {
    
}
@InputType()
export class AuthSignupInputDto extends IntersectionType (
        PickType(UserAuthenticationCreateInputDto, ['identify']),
        UserAuthorisationSignupInputDto
    )

{
    @Field(() => String, { nullable: true, description: authMeta?.identify_confirm.desc })
    @IsSameAs<AppSignupInputDto>('identify', { message: authMeta?.identify_confirm.validation?.isSameAs })
    declare identify_confirm: string;
}

@InputType()
export class UserSignupInputDto extends IntersectionType (
        PickType(UserCreateInputDto, ['primary_email', 'primary_mobile', 'primary_mobile_cc', 'connsrc_id', 'username']),
        AuthSignupInputDto
    )
{
    
}

@InputType()
export class AppSignupInputDto extends UserSignupInputDto {
    
}

// ████ SIGNUP OUTPUT DTO ████████████████████████████████████████████████

@ObjectType()
@Directive('@shareable')
export class AppSignupOutputDto extends UserEntity {

}

/**
 * █████████████████████████████████████████████████████████████
 * █ SIGNIN DTO ████████████████████████████████████████████████
 * █████████████████████████████████████████████████████████████
**/

export class SigninDto {
    static metaname: string = `Signin`;
    static metadesc: string = `Signin to get access to your account.`;
}

// ████ SIGNIN INPUT DTO ████████████████████████████████████████████████

@InputType()
export class UserAuthorisationSigninInputDto extends PickType(UserAuthorisationCreateInputDto, ['ar_id']) {
    
}

@InputType()
export class SessionSigninInputDto extends IntersectionType(UserAuthorisationSigninInputDto, PickType(SessionCreateInputDto, ['keep_logged'])) {

}

@InputType()
export class UserDeviceSigninInputDto extends IntersectionType( SessionSigninInputDto, PickType(UserDeviceCreateInputDto, ['device_token']) ) {

}

@InputType()
export class AuthSigninInputDto extends IntersectionType( UserDeviceSigninInputDto, PickType(UserAuthenticationCreateInputDto, ['identify', 'otp']) ){
    
}

@InputType()
export class AppSigninInputDto extends AuthSigninInputDto {
    @Field(() => String, {nullable: false, description: authMeta?.un_pe_pm.desc})
    @IsNotEmpty()
    declare un_pe_pm: string;

    // take dummy field to apply class level validation
    @Validate(IdentifyOrOtpFieldRequired, { message: authMeta.at_least_one_field_required.desc }) // class-level validation to check that at least one of the fields is present
    identify_or_otp?: any;
}


// ████ SIGNIN OUTPUT DTO ████████████████████████████████████████████████

@ObjectType()
@Directive('@shareable')
export class AuthenticatedSigninOutputDto implements AuthenticatedUserInfoCRUDTypeDefinition {
    @Field(() => SessionEntity, {nullable: true, description: authMeta?.session.desc})
    session?: SessionEntity;

    @Field(() => UserDeviceEntity, {nullable: true, description: authMeta?.udevice.desc})
    udevice?: UserDeviceEntity;

    @Field(() => DeviceEntity, {nullable: true, description: authMeta?.device.desc})
    device?: DeviceEntity;

    @Field(() => UserAuthorisationEntity, {nullable: true, description: authMeta?.uauthorisation.desc})
    uauthorisation?: UserAuthorisationEntity;

    @Field(() => AuthorisationEntity, {nullable: true, description: authMeta?.authorisation.desc})
    authorisation?: AuthorisationEntity;
}
@ObjectType()
@Directive('@shareable')
export class AppSigninOutputDto extends IntersectionType(UserEntity, CrudSnapshotDto) implements AuthenticatedUserCRUDTypeDefinition {
    @Field(() => AuthenticatedSigninOutputDto, {nullable: true, description: authMeta.authenticated.desc})
    declare authenticated?: AuthenticatedSigninOutputDto;
}

/**
 * █████████████████████████████████████████████████████████████
 * █ OTP SIGNIN DTO ████████████████████████████████████████████
 * █████████████████████████████████████████████████████████████
**/

// ████ OTP SIGNIN INPUT DTO █████████████████████████████████████████████
@InputType()
export class AppOtpSigninInputDto extends PickType(AppSigninInputDto, ['un_pe_pm']) {
    
}
// ████ OTP SIGNIN OUTPUT DTO █████████████████████████████████████████████
@ObjectType()
@Directive('@shareable')
export class AppOtpSigninOutputDto extends IntersectionType(CrudSnapshotDto, PickType(UserAuthenticationFindOutputRowsDto, ['id', 'otp', 'otp_expiry'])) {
    
}


/**
 * █████████████████████████████████████████████████████████████
 * █ RESET PASSWORD DTO ████████████████████████████████████████
 * █████████████████████████████████████████████████████████████
**/

export class ResetPasswordDto extends UserEntity {
    static metaname: string = `ResetPassword`;
    static metadesc: string = `Reset your password  on time interval for security.`;
}
// ████ RESET PASSWORD INPUT DTO ████████████████████████████████████████████████

@InputType()
export class AuthResetPasswordInputDto extends AuthSignupInputDto{

}
@InputType()
export class UserResetPasswordInputDto extends IntersectionType(
        PickType(UserCreateInputDto, ['primary_email', 'primary_mobile', 'primary_mobile_cc', 'recovery_email', 'recovery_mobile', 'recovery_mobile_cc']),
        AuthResetPasswordInputDto
) {
    @Field(() => String, {nullable: false, description: userMeta?.recovery_email.desc})
    declare recovery_email?: string;

    @Field(() => String, {nullable: false, description: userMeta?.recovery_mobile.desc})
    declare recovery_mobile?: string;

    @Field(() => String, {nullable: false, description: userMeta?.recovery_mobile_cc.desc})
    declare recovery_mobile_cc?: string;
}

@InputType()
export class AppResetPasswordInputDto extends UserResetPasswordInputDto {
    
}

// ████ RESET PASSWORD OUTPUT DTO ████████████████████████████████████████████████

@ObjectType()
@Directive('@shareable')
export class AppResetPasswordOutputDto extends CrudAffectedDto {

}

/**
 * █████████████████████████████████████████████████████████████
 * █ FORGOT PASSWORD DTO ████████████████████████████████████████
 * █████████████████████████████████████████████████████████████
**/

export class ForgotPasswordDto extends UserEntity {
    static metaname: string = `ForgotPassword`;
    static metadesc: string = `Proceed for forgot password to recover your password.`;
}

// ████ FORGOT PASSWORD INPUT DTO ████████████████████████████████████████████████
@InputType()
export class AppForgotPasswordInputDto {
    @Field(() => String, { nullable: false, description: authMeta?.un_pe_pm.desc })
    @IsNotEmpty({ message: 'The email or phone number or username is required.' })
    un_pe_pm!: string;

    @Field(() => String, { nullable: false, description: authMeta?.pass_recover_url.desc })
    @IsNotEmpty({ message: 'The pass_recover_url is required.' })
    pass_recover_url!: string; 
}


// ████ FORGOT PASSWORD OUTPUT DTO ████████████████████████████████████████████████
@ObjectType()
@Directive('@shareable')
export class AppForgotPasswordOutputDto extends CrudSnapshotDto {
    @Field(() => String, { nullable: true, description: authMeta?.pass_recover_token.desc })
    declare pass_recover_token?: string;
}

/**
 * █████████████████████████████████████████████████████████████
 * █ RECOVER FORGOT PASSWORD DTO ████████████████████████████████████████
 * █████████████████████████████████████████████████████████████
**/

export class RecoverForgotPasswordDto extends UserEntity {
    static metaname: string = `RecoverForgotPassword`;
    static metadesc: string = `Recover forgot password from the link sent to your email.`;
}

// ████ RECOVER FORGOT PASSWORD INPUT DTO ████████████████████████████████████████████████
@InputType()
export class AppRecoverForgotPasswordInputDto extends IntersectionType(PickType(AppSigninInputDto, ['un_pe_pm']),  PickType(UserAuthenticationCreateInputDto, ['identify'])) {
    @Field(() => String, { nullable: true, description: authMeta?.identify_confirm.desc })
    @IsSameAs<AppRecoverForgotPasswordInputDto>('identify', { message: authMeta?.identify_confirm.validation?.isSameAs })
    declare identify_confirm: string;

    @Field(() => String, { nullable: false, description: authMeta?.pass_recover_token.desc })
    @IsNotEmpty({ message: 'Forgot password token is required' })
    declare pass_recover_token: string;
}

// ████ RECOVER FORGOT PASSWORD OUTPUT DTO ████████████████████████████████████████████████
@ObjectType()
@Directive('@shareable')
export class AppRecoverForgotPasswordOutputDto extends CrudAffectedDto {

}

/**
 * █████████████████████████████████████████████████████████████
 * █ APPGRANTSIGNUP DTO ████████████████████████████████████████████████
 * █████████████████████████████████████████████████████████████
**/

export class AppGrantSignupDto {
    static metaname: string = `App Grant Signup`;
    static metadesc: string = `Give permission to user for signup to access account`;
}

// ████ GRANT SIGNUP INPUT DTO ████████████████████████████████████████████████


@InputType()
export class AppGrantSignupInputDto extends IntersectionType(PickType(AppSigninInputDto, ['un_pe_pm']), AuthSignupInputDto) {
    @Field(() => Int, { nullable: false, description: authMeta?.u_id.desc })
    @IsNotEmpty({ message: 'user id is required.' })
    declare u_id: number;
}

// ████ GRANT SIGNUP OUTPUT DTO ████████████████████████████████████████████████

@ObjectType()
@Directive('@shareable')
export class AppGrantSignupOutputDto extends IntersectionType(UserEntity,CrudSnapshotDto) {

}