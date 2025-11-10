import { BadRequestException, Injectable, InternalServerErrorException, NotFoundException, UnauthorizedException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DataSource, FindManyOptions, Repository, UpdateResult } from 'typeorm';
import { UserAuthenticationEntity } from './entities/user.auth.entity';
import { ConfService, DataValidationPipe, EtcCRUDTypeDefinition, LibraryAppService, LogService, OtpService, OTPType, SnapshotListDto, YesNoEnum, SendEmailInputType, EmailService, TemplateEngineService, ModuleConfigCRUDTypeDefinition } from '@libs/library-app';
import { JWTTokenUserDataType, JWTUserAuthToken, JWTUserAuthTokenPayload } from '@libs/library-app';
import { AppForgotPasswordInputDto, AppForgotPasswordOutputDto, AppGrantSignupInputDto, AppGrantSignupOutputDto, AppOtpSigninInputDto, AppOtpSigninOutputDto, AppRecoverForgotPasswordInputDto, AppRecoverForgotPasswordOutputDto, AppResetPasswordInputDto, AppResetPasswordOutputDto, AppSigninInputDto, AppSigninOutputDto, AppSignupInputDto, AppSignupOutputDto } from './dto/user.auth.dto';
import { UserService } from '../user/user.service';
import { SessionService } from '../../session/session.service';
import { UserEntity } from '../user/entities/user.entity';
import { differenceInDays, format, addMinutes, addHours } from 'date-fns';
import { UserAuthorisationService } from '../user-authorisation/user.authorisation.service';
import { UserAuthorisationEntity } from '../user-authorisation/entities/user.authorisation.entity';
import { UserDeviceService } from '../user-device/user.device.service';
import { GraphQLResolveInfo } from 'graphql';
import { UserFindOneByIdInputDto, UserFindOutputDto, UserFindOutputRowsDto } from '../user/dto/user.dto';
import { DeviceService } from '../../master/device/device.service';
import { DeviceEntity } from '../../master/device/entities/device.entity';
import { UserDeviceEntity } from '../user-device/entities/user.device.entity';
import { UserAuthenticationJwtService } from '../../../../../libs/library-app/src/jwt/user.auth.jwt.service';
import { SessionEntity } from '../../session/entities/session.entity';
import { AuthorisationEntity } from '../../master/authorisation/entities/authorisation.entity';
import { AuthorisationService } from '../../master/authorisation/authorisation.service';
import { QueueSmsService } from '../../queue/sms/sms.service';
import { QueueSmsCreateInputDto, QueueSmsCreateOutputDto } from '../../queue/sms/dto/sms.dto';
import { snakeCase } from 'lodash';
import { BulkSmsService, BulkSmsReqType, QueueTypeEnum } from "@libs/dynamic-app";
import { QueueEmailCreateInputDto, QueueEmailCreateOutputDto } from '../../queue/email/dto/email.dto';
import { QueueEmailService } from '../../queue/email/email.service';
import path, { join } from 'path';
import { RecoverForgotPasswordTokenType } from './user.auth.type';
import { AuthorisationRoleEnum } from '../../master/authorisation/authorisation.enum';
import { UserAuthorisationCreateInputDto, UserAuthorisationCreateOutputDto } from '../user-authorisation/dto/user.authorisation.dto';
import { UserAuthorisationFactory } from '../user-authorisation/user.authorisation.factory';
import { number } from 'joi';

@Injectable()
export class UserAuthenticationService implements ModuleConfigCRUDTypeDefinition {

constructor(
    private dataSource: DataSource,

    @InjectRepository(UserAuthenticationEntity) 
    private readonly repository: Repository<UserAuthenticationEntity>,

    private readonly jwtService: UserAuthenticationJwtService,
    private readonly uService: UserService,
    private readonly uAuthorisation: UserAuthorisationService,
    private readonly uDevice: UserDeviceService,
    
    private readonly session: SessionService,
    private readonly device: DeviceService,
    private readonly authorisation: AuthorisationService,
    private readonly queueSmsService: QueueSmsService,
    private readonly queueEmailService: QueueEmailService,
    private readonly emailService: EmailService,
    private readonly templateEngineService: TemplateEngineService,

    private readonly bulkSmsService: BulkSmsService,

    private readonly otpService: OtpService,
    private readonly confService: ConfService,
    private readonly logService: LogService,
    private readonly DataValidationPipe: DataValidationPipe,
    private readonly libraryAppService: LibraryAppService,
 
){
    this.logService.setContext(UserAuthenticationService.name);
}
get templateDirPath(): string {
    return path.join(__dirname, 'folk', 'user-auth', 'templates');
}
protected async generateRecoverForgotPasswordToken(auth:UserAuthenticationEntity): Promise<RecoverForgotPasswordTokenType> {

    const otp = await this.otpService.generateAlphaNumericOtp(6) as any;
    const otpHash = await this.otpService.hashOtp(otp);
    
    // set expiry and also convert to base64 encode
    const expiry = addHours(new Date(), this.confService.forgotPasswordLinkExpireHours);
    const expiryHash = await LibraryAppService.base64Enc(String(expiry));

    // convert auth id to base64 encode
    const authHash = await LibraryAppService.base64Enc(String(auth.id));

    // reset password token: authId, otpHash and otpExpiry to base64 encode
    const token = await LibraryAppService.base64Enc(`${authHash}|${otpHash}|${expiryHash}`);

    const resp: RecoverForgotPasswordTokenType = {
        auth_id: auth.id as number,
        auth_hash: authHash,
        otp: otp,
        otp_hash: otpHash,
        expiry: expiry,
        expiry_hash: expiryHash,
        token: token
    };
    return resp;
}

protected async decodeRecoverForgotPasswordToken(token: string): Promise<RecoverForgotPasswordTokenType> {

    // decode token to get data
    const decToken = await LibraryAppService.base64Dec(token);
    const tokenArr = decToken.split('|');

    if(Array.isArray(tokenArr) && tokenArr.length == 3) {
        // sperate the data of token
        const authHash = tokenArr[0];
        const otpHash = tokenArr[1];
        const expiryHash = tokenArr[2];

        // decode all seperated data
        const authId = await LibraryAppService.base64Dec(authHash) as any as number;
        const expiry = await LibraryAppService.base64Dec(expiryHash) as any as Date;

        if(authId !== null && expiry !== null && authId > 0) {
            // set response
            const resp: RecoverForgotPasswordTokenType = {
                auth_id: authId,
                auth_hash: authHash,
                otp: otpHash,
                otp_hash: otpHash,
                expiry: expiry,
                expiry_hash: expiryHash,
                token: token
            };
            return resp;
        }
        throw new BadRequestException(`User not found for provided reset password token.`);
    }
    throw new BadRequestException(`Invalid reset pasword token.`);
}
public async updateAuthOtp(id: number, otpHash: string | null, expiry: Date | null): Promise<boolean> {
    const resp = await this.repository.update({ id: id }, { otp: otpHash, otp_expiry: expiry });
    if(resp.affected === 1) {
        return true;
    }
    return false;
}
public async forceFindOneById(id: number): Promise<UserAuthenticationEntity> {
    const row = await this.repository.findOne({
        select: this.libraryAppService.entityFieldsArr<UserAuthenticationEntity>(this.repository.metadata.columns),
        where: { id: id },
        withDeleted: true
    });
    return row as UserAuthenticationEntity;
}
public async createSingle(input: any): Promise<UserAuthenticationEntity> {
    const auth: UserAuthenticationEntity = this.repository.create(input) as UserAuthenticationEntity;
    return auth;
}
private async AuthorisationRoleVerificationPolicy(userAuthRole: UserAuthorisationEntity, authRole: AuthorisationEntity): Promise<[boolean, SnapshotListDto]> {
    // we need to check whether user role is restricted or not
    if(userAuthRole && Object.keys(userAuthRole).length > 0 && userAuthRole.id !== undefined && authRole && Object.keys(authRole).length > 0 && authRole.id !== undefined) {
        // define blank snapshot
        const snapshot: SnapshotListDto = new SnapshotListDto();
        // check if role is soft deleted or not
        if(userAuthRole.deleted === null && authRole.deleted === null){
            // check if both role are same no ambiguity
            if(userAuthRole.ar_id === authRole.id){

                // check required privileges of master role
                if(authRole.privileges !== null){
                    // future implementation
                }

                // check required privileges of user role (modified for specific user)
                if(userAuthRole.privileges !== null){
                    // future implementation
                }

                return [true, snapshot] as [boolean, SnapshotListDto];    
            }
            throw new UnauthorizedException(`Access permission mismatch. Please contact adminstrator.`);
        }
        throw new UnauthorizedException(`Access permission revoked due to suspicious activity. Please try after some time or contact adminstrator.`);
    }
    throw new UnauthorizedException(`Access permission not found, try new signup.`);
}
private async sessionVerificationPolicy(session: SessionEntity): Promise<[boolean, SnapshotListDto]>{
    // we need to check whether user session is restricted or not
    if(session && Object.keys(session).length > 0 && session.id !== undefined ) {
        // define blank snapshot
        const snapshot: SnapshotListDto = new SnapshotListDto();
        // check if session is soft deleted or not
        if(session.deleted === null){
            return [true, snapshot] as [boolean, SnapshotListDto];
        }
        throw new UnauthorizedException(`Access denied due to suspicious activity. Please try after some time or contact adminstrator.`);
    }
    throw new UnauthorizedException(`Access denied, try again.`);
}
private async deviceVerificationPolicy(userDevice: UserDeviceEntity, device: DeviceEntity): Promise<[boolean, SnapshotListDto]> {
    // we need user device info and also need master device info 
    // master is required if some global settings applied such as some devices are restricted 
    // so, we need to check 2 settings here
    if(userDevice && Object.keys(userDevice).length > 0 && userDevice.id !== undefined && device && Object.keys(device).length > 0 && device.id !== undefined) {
        // define blank snapshot
        const snapshot: SnapshotListDto = new SnapshotListDto();
        // check if device is soft deleted or not
        if(device.deleted === null && userDevice.deleted === null){
            // check if user device is suspended or not
            if(userDevice.suspended === null ){
                // all clear return true for green signal
                return [true, snapshot] as [boolean, SnapshotListDto];        
            }
            throw new UnauthorizedException(`Your device is suspended due to suspicious activity, please contact adminstrator.`);
        }
        throw new UnauthorizedException(`Your device is temporarily restricted, please check back later.`);
    }
    throw new BadRequestException(`Access restricted, malicious device request.`);
}
private async authVerificationPolicy(auth: UserAuthenticationEntity, identify?: any, otp?: any): Promise<[boolean | null, SnapshotListDto]> {
    // define blank snapshot
    const snapshot: SnapshotListDto = new SnapshotListDto();

    // make sure identify or otp any one is passed
    if(identify === undefined && otp === undefined) {
        throw new UnauthorizedException(`Invalid signin credentials, identify or otp any one is required.`);
    }

    // auth must have id
    if(auth && Object.keys(auth).length > 0 && auth.id !== undefined) {
        // check if account is soft deleted or not
        if(auth.deleted === null){
            // as no password and no OTP supplied then return null
            if(identify === null && otp === null){
                // this is special condition, no need to check further
                return [null, snapshot] as [null, SnapshotListDto];
            }

            // if it is OTP based signin then match with database OTP
            let otpMatch = false;
            if(otp && otp !== null && (typeof otp === 'string' || typeof otp === 'number') && auth.otp_expiry && auth.otp_expiry != null) {
                // true or throw an error
                otpMatch = await this.otpService.validateOtp(Number(otp), auth.otp as string, auth.otp_expiry) as any as boolean;
            }

            // check if force password reset is turn on or otp is verified
            if(auth.force_reset === null || otpMatch === true) {
                // if password is given then match with database password
                let identifyMatch = false;
                if(typeof identify === 'string') {
                    identifyMatch = await LibraryAppService.matchHash(auth.identify as string, identify as string);

                    if(identifyMatch !== true){
                        // check if user is using old password
                        if(auth.identify_last !== null){
                            const oldMatch = await LibraryAppService.matchHash(auth.identify_last as string, identify as string);
                            if(oldMatch === true){
                                throw new BadRequestException(`Account credentials does not match. You might be using your old credentials.`);
                            }
                        }
                        // as credentials does not match throw error
                        throw new BadRequestException(`Account credentials does not match, please try agian.`);
                    }
                }

                // verify last changed date for security, and if too old password force to reset
                let lastChanged = auth.last_changed;
                if(lastChanged === null)
                    lastChanged = auth.created; // never reset since account created, so use created date

                // check if last changed date is too long then suggest to reset for security purpose
                const lastChangedDays = differenceInDays(new Date(), lastChanged as Date);

                // any password is valid for # days only (as per configuration)
                if(lastChangedDays <= this.confService.passwordLifeSpanDays  || otpMatch === true){
                    // show notice to user if last password change was 4 months ago
                    if(lastChangedDays > this.confService.passwordResetWarningDays){
                        snapshot.imp.push(`Please set or reset your password for security purpose. Last activity on ${format(lastChanged as Date, this.confService.formatDate)} and since, it has been ${lastChangedDays} days.`);
                    }

                    // finally all security checks are completed, so return true
                    return [true, snapshot] as [boolean, SnapshotListDto];
                }
                // TODO: in future need to update database for force reset flag to turn on as password is expired
                // CODE IMPLEMENTATION GO HERE FOR UPDATE PROCESS
                
                throw new UnauthorizedException(`Your password is expired. Last changed on ${format(lastChanged as Date, this.confService.formatDate)}.`);
            }
            throw new NotFoundException(`Please reset your password due to suspicious activity on your account on ${format(auth.force_reset as any as Date, this.confService.formatDate)}. ${auth.last_changed ? `Last reset on ${format(auth.last_changed as Date, this.confService.formatDate)}.` : ``}`);
        }
        throw new NotFoundException(`Your account is temporarily restricted or removed on ${format(auth.deleted as Date, this.confService.formatDate)}, please contact administrator.`);
    }
    throw new NotFoundException(`You have no permission for authentication.`);
}
private async userVerificationPolicy(user: UserEntity): Promise<[boolean, SnapshotListDto]> {
    if(user && Object.keys(user).length > 0 && user.id !== undefined) {
        const snapshot: SnapshotListDto = new SnapshotListDto();
        if(user.deleted === null){
            if(user.suspended === null){
                
                // check if primary info is verified or not
                let primaryWarning = [];
                if(user.pemail_verified  === null)
                    primaryWarning.push(`email`);

                if(user.pmobile_verified === null)
                    primaryWarning.push(`mobile`);

                if(primaryWarning.length > 0){
                    snapshot.warning.push(`Please verify your primary ${primaryWarning.join(' & ')}.`);
                }

                // check if recovery info is set or not
                let recoveryAlert = [];
                if(user.recovery_email === null)
                    recoveryAlert.push(`email`);

                if(user.recovery_mobile === null)
                    recoveryAlert.push(`mobile`);

                if(recoveryAlert.length > 0){
                    snapshot.alert.push(`Please update your recovery ${recoveryAlert.join(' & ')}.`);
                }

                return [true, snapshot] as [boolean, SnapshotListDto];
            }
            throw new NotFoundException(`Your account is suspended on ${format(user.suspended as Date, this.confService.formatDate)}, please contact administrator.`);
        }
        throw new NotFoundException(`Account with username '${user.username}' no longer available or blocked.`);
    }
    throw new NotFoundException(`User not found.`);
}
public async signUp(input: AppSignupInputDto, selection: AppSignupOutputDto, info: GraphQLResolveInfo, ctx: any, etc?: EtcCRUDTypeDefinition): Promise<AppSignupOutputDto> {
    // check at least one preset userame, email or mobile
    const qRunner = this.dataSource.createQueryRunner(); // Create a new query runner from the DataSource
    await qRunner.connect(); // Establish database connection
    await qRunner.startTransaction(); // Start the transaction
    
    try{
        let isUserExist: any = null, isUserAuthExist: any = null, isUserRoleExist: any = null;
        let user: any, auth: any, role: any;

        // first check if user is already exist or not
        isUserExist = await this.uService.isSignUpExists(input);

        // if user is already exist then check auth details
        if(isUserExist && isUserExist.id !== undefined) {
            isUserAuthExist = await this.repository.findOne({
                where: { id: isUserExist.id },
                withDeleted: true
            });

            // if user auth is already exist then check authorisation/role details
            if(isUserAuthExist && isUserAuthExist.id !== undefined) {
                isUserRoleExist = await this.uAuthorisation.isAuthorisationExists(isUserAuthExist.id, input.ar_id);
            }
        }

        // check if user is already exist but due to some reason it is soft deleted or removed
        if((isUserExist && isUserExist.deleted !== null) || (isUserAuthExist && isUserAuthExist.deleted !== null) || (isUserRoleExist && isUserRoleExist.deleted !== null)) {
            throw new UnauthorizedException(`Your account has been suspended or removed due to suspicious activity. Please contact administrator.`);
        }

        if(isUserExist === null) {
            // save user basic info using query runner
            const userPost: UserEntity = await this.uService.createSingle(input);
            user = await qRunner.manager.save(UserEntity, userPost);
        } else {
            user = isUserExist;
        }

        if(isUserAuthExist === null) {
            // save user authentication
            const authIn: any = input; authIn.id = user.id;
            const authPost: UserAuthenticationEntity = await this.createSingle(authIn);
            auth = await qRunner.manager.save(UserAuthenticationEntity, authPost);    
        } else {
            auth = isUserAuthExist;
        }

        if(isUserRoleExist === null) {
            // save user authorisation role (need at least one role which is end user)
        const roleIn: any = input; roleIn.au_id = auth.id; roleIn.u_id = user.id; delete roleIn.id; 
        const rolePost: UserAuthorisationEntity = await this.uAuthorisation.createSingle(roleIn)
        role = await qRunner.manager.save(UserAuthorisationEntity, rolePost);
        } else {
            role = isUserRoleExist;
        }

        // let user logged in directly : future implementation 

        /**
         * change `role` with tha most last process as this is running in transaction
         * up to this point below processes are completed
         * 
         * 1. Create: User
         * 2. Create: UserAuthentication
         * 3. Create: UserAuthorisation (user role)
         * 4. might come in future
         * 
         * this part will stay here for commit transcation
         **/
        if(Object.keys(role).length > 0 && role.id) {
            await qRunner.commitTransaction();
            return user as AppSignupOutputDto;
        }
        throw new InternalServerErrorException(`Signup process incomplete.`);
    } catch (err: any) {
        await qRunner.rollbackTransaction(); // Rollback the transaction
        this.logService.error(err, err.message);
        throw new BadRequestException(`Signup faild. ${this.logService.redactSensitive(err.message)}`);
    } finally {
        await qRunner.release();
    }
}
public async grantSignUp(input: AppGrantSignupInputDto, selection: AppGrantSignupOutputDto, info: GraphQLResolveInfo, ctx: any, etc?: EtcCRUDTypeDefinition): Promise<AppGrantSignupOutputDto> {
    
    const qRunner = this.dataSource.createQueryRunner(); // Create a new query runner from the DataSource
    await qRunner.connect(); // Establish database connection
    await qRunner.startTransaction(); // Start the transaction

    try{

         // # set blank snapshot
        const snapshot: SnapshotListDto = new SnapshotListDto();
        let isUserExist:any = null; let userAuthRole:any = null; 

        // check user exist using id
        if(input.u_id == undefined || input.u_id == null)
            throw new BadRequestException(`Please provide user id to grant signup for security purpose`);

        isUserExist = await qRunner.manager.findOne(UserEntity, { where: { id: input.u_id }, withDeleted: true });

        const [userVerified, userSnap] = await this.userVerificationPolicy(isUserExist);
        
        if(userVerified === true && isUserExist.id !== undefined){
            if(isUserExist.primary_email == input.un_pe_pm || isUserExist.primary_mobile == input.un_pe_pm || isUserExist.username == input.un_pe_pm){
                
                // get user auth
                const isUserAuthExist = await qRunner.manager.findOne(UserAuthenticationEntity, {
                    where: { id: isUserExist.id },
                    withDeleted: true,
                });

                if(isUserAuthExist == null){
                    // save user authentication
                    const authIn: UserAuthenticationEntity = {...input, id: input.u_id};
                    const authPost: UserAuthenticationEntity = await this.createSingle(authIn);
                    const auth = await qRunner.manager.save(UserAuthenticationEntity, authPost);

                    // get user authorization of requested role
                    const userAuthRole = await qRunner.manager.findOne(UserAuthorisationEntity,{  
                        where: { u_id: isUserExist.id, ar_id:input.ar_id },
                        withDeleted: true,
                    })

                    if(userAuthRole !== null){
                        if(userAuthRole.deleted === null){
                            await qRunner.manager.update(
                                UserAuthorisationEntity,
                                { u_id: isUserExist.id, ar_id: input.ar_id }, // WHERE condition
                                { au_id: auth.id }              // Fields to update
                            );
                        } else {
                            throw new UnauthorizedException(`Unable to assign the user role due to suspicious activity. Please contact administrator.`);
                        }
                    }
                    else{
                        // create user authorization for requested role
                        const roleInput: UserAuthorisationEntity = { ...input, au_id: auth.id };
                        const rolePost: UserAuthorisationEntity  = await this.uAuthorisation.createSingle(roleInput);
                        const userAuthRole = await qRunner.manager.save(UserAuthorisationEntity, rolePost);
                    }

                    // delete users role: lead, perform withouth check for quick process
                    const delLeadRole = await qRunner.manager.delete(UserAuthorisationEntity,{
                        u_id: isUserExist.id,
                        ar_id: AuthorisationRoleEnum.LEAD
                    });
                }
                else{
                    if(isUserAuthExist.deleted !== null)
                        throw new UnauthorizedException(`Cannot assign access. Try again after some time.`);
                    else{
                        snapshot.success.push(`User login is already granted. For additional user authorisation please use grant authorisation api.`);
                    }
                }
                const resp = isUserExist as AppGrantSignupOutputDto;
                snapshot.success.push(`The user has successfully obtained login access.`);
                resp.snapshot = snapshot;

                return resp as AppGrantSignupOutputDto;
            }
            throw new NotFoundException(`User detail does not match.`);
        }
        else{
            const resp = isUserExist as AppGrantSignupOutputDto;
            snapshot.error.push(`Suspicious activity detected, unable to grant the access. Please contact administrator.`);
            resp.snapshot = snapshot;
            return resp as AppGrantSignupOutputDto;
        }
    }
    catch (err: any){
        await qRunner.rollbackTransaction(); // Rollback the transaction
        this.logService.error(err, err.message);
        throw new BadRequestException(`Grant Signup failed. ${this.logService.redactSensitive(err.message)}`);
    }
    finally{
         await qRunner.release();
    }
    
}
public async grantRole(input: UserAuthorisationCreateInputDto, selection: UserAuthorisationCreateOutputDto, info: GraphQLResolveInfo, ctx: any, etc?: EtcCRUDTypeDefinition): Promise<UserAuthorisationCreateOutputDto[]> {
    try{

         // check user exist using id
        if(input.u_id == undefined || input.u_id == null)
            throw new BadRequestException(`Please provide user id to grant signup for security purpose`);

        if(input.au_id == undefined || input.au_id == null)
            throw new BadRequestException(`Auth id is required to grant role`);
        
        const isUserExist = await this.uService.findSingleById(input.u_id);

        if(isUserExist !== null){
            const [userVerified, userSnap] = await this.userVerificationPolicy(isUserExist);
        
            if(userVerified === true && isUserExist.id !== undefined){

                // # get and check authetication and it's policy
                const auth = await this.forceFindOneById(input.au_id);
                const [authVerified, authSnap] = await this.authVerificationPolicy(auth, null, null); // as null passed full policy will not be checked

                if(authVerified === null && auth.id !== undefined) {
                    return await this.uAuthorisation.createEngine.create(input, selection, info, ctx);
                }
            }
            else{
                throw new BadRequestException(`Suspicious activity detected, unable to grant the role. Please contact administrator.`);
            }
        }
        throw new BadRequestException(`User not found`);
    }
    catch(err:any){
        this.logService.error(err, err.message);
        throw new BadRequestException(`Grant role failed. ${this.logService.redactSensitive(err.message)}`);
    }
}
public async signIn(input: AppSigninInputDto, selection: AppSigninOutputDto, info: GraphQLResolveInfo, ctx: any, etc?: EtcCRUDTypeDefinition): Promise<AppSigninOutputDto> {
    // make sure identify or otp any one is passed
    if((input.identify === undefined || input.identify === null) && (input.otp === undefined || input.otp === null)) {
        throw new UnauthorizedException(`Please provide identify or otp any one for authentication.`);
    }

    // # set blank snapshot
    let snapshot: SnapshotListDto = new SnapshotListDto();

    // # get user info as per input.un_pe_pm
    const [user, using] = await this.uService.getByUsernameOrEmailOrMobile(input.un_pe_pm);

    // # check user verification policy
    const [userVerified, userSnap] = await this.userVerificationPolicy(user);
    if(userVerified === true && user.id !== undefined) {
        // as user is verified, merge snapshot with existing
        snapshot = this.libraryAppService.mergeSnapshot(snapshot, userSnap);

        // # get and check authetication and it's policy
        const auth = await this.forceFindOneById(user.id);
        const [authVerified, authSnap] = await this.authVerificationPolicy(auth, input.identify, input.otp);

        if(authVerified === true && auth.id !== undefined) {
            // as auth is verified, merge snapshot with existing
            snapshot = this.libraryAppService.mergeSnapshot(snapshot, authSnap);
            
            // # remove used otp from user auth detail for security reason
            /*
            // at this moment do ot remove otp after use, everything will be processed based on expiry date time
            if(input.otp !== undefined && input.otp !== null) {
                this.updateAuthOtp(auth.id, null, null);
            }
            */

            // get master authorisation (role)
            const authRole = await this.authorisation.forceFindOneById(input.ar_id);

            // # get and check authorisation (role) and it's policy
            const userAuthRole = await this.uAuthorisation.forceFindByUserAndRoleId(auth.id, input.ar_id);
            const [userAuthRoleVerified, userAuthRoleSnap] = await this.AuthorisationRoleVerificationPolicy(userAuthRole, authRole);

            if(userAuthRoleVerified === true && userAuthRole.ar_id !== undefined && userAuthRole.ar_id === input.ar_id) {
                // as auth is verified, merge snapshot with existing
                snapshot = { ...snapshot, ...userAuthRoleSnap };
                snapshot = this.libraryAppService.mergeSnapshot(snapshot, userAuthRoleSnap);

                // # first step is to check inside device master data
                // get device info from request and match with master data
                const req = ctx.req;
                const userAgent = req.headers['user-agent'] || null;
                const remoteAddress = req.headers['x-forwarded-for'] || req.connection.remoteAddress || null;
                const device = await this.device.identifyDevice(userAgent, remoteAddress) as DeviceEntity;

                // second step is to check inside user device data
                // verify device, with user
                const tmp = new UserDeviceEntity();
                tmp.u_id = user.id;
                tmp.device_id = device.id;
                tmp.device_token = input.device_token;
                tmp.device_user_agent = userAgent;
                tmp.from_ip_address = remoteAddress;
                tmp.device_name = device.name;
                const userDevice = await this.uDevice.verifyUserDeviceIsExist(tmp) as UserDeviceEntity;
                
                // # now we have device info so check device policy
                const [deviceVerified, deviceSnap] = await this.deviceVerificationPolicy(userDevice, device);
                if(deviceVerified === true && userDevice.id !== undefined) {
                    // as device is verified, merge snapshot with existing
                    snapshot = this.libraryAppService.mergeSnapshot(snapshot, authSnap);
                    
                    /**
                     * Device and auth is verified, so process further for session and JWT
                     * first generate session and later need to update with it's JWT for user
                     * this is because JWT require SessionClientEntuty id
                     **/
                    const session = new SessionEntity();
                    session.auth_id = auth.id;
                    session.device_id = device.id;
                    session.keep_logged = input.keep_logged;
                    session.logged_in = YesNoEnum.YES;

                    // # now we have session info so check session policy
                    const sessionInit = await this.session.init(session);
                    const [sessionVerified, sessionSnap] = await this.sessionVerificationPolicy(sessionInit);

                    if(sessionVerified === true && sessionInit.id !== undefined){
                        // as session is verified, merge snapshot with existing
                        snapshot = this.libraryAppService.mergeSnapshot(snapshot, sessionSnap);
                    
                        // # now need to generate JWT token
                        const userPayload: JWTTokenUserDataType = {
                            email: user.primary_email as string,
                            sub: user.id,
                            au: auth.id,
                            udvc: userDevice.id,
                            sess: sessionInit.id,
                            group: auth.id
                        };
                        const token: JWTUserAuthToken = await this.jwtService.generateAuthToken(userPayload);
                        
                        if(token.uajwt !== undefined) {
                            // # update session with new jwt
                            const sessUpdate = await this.session.renewSessionJwt(sessionInit.id, token.uajwt);
                            
                            if(sessUpdate.id !== undefined && sessUpdate.jwt === token.uajwt) {
                                
                                // token has been updated in database and it's confirmed now
                                // set jwt in sessioni init, as jwt was not there or old jwt which required renewal
                                sessionInit.jwt = token.uajwt;

                                /**
                                 * #######################################################
                                 * As all process completed now get the logged in user data and return to client
                                 * IT'S IMPORTANT TO GET DATA AND SEND rather then sending [const user] above
                                 * this is because output must be as per selection by client and there might be relations requested
                                 **/

                                // # set input to get logged in user info
                                const findByID: UserFindOneByIdInputDto = new UserFindOneByIdInputDto();
                                findByID.id = user.id;

                                // get user data as per client request
                                // it is must to use .findOneById() from user.crud.factory.ts as here need to manage relations
                                
                                // delete unwated fields from user selection
                                delete selection.snapshot;
                                delete selection.authenticated;
                                const loggedinUser = await this.uService.findEngine.findOneById(findByID, selection, info, ctx, etc);
                                
                                // assign snapshot of entire process
                                const resp: AppSigninOutputDto = loggedinUser as AppSigninOutputDto;
                                resp.snapshot = snapshot;

                                // # set current signed in user info in response
                                resp.authenticated = {
                                    session: sessionInit,
                                    udevice: userDevice,
                                    device: device,
                                    uauthorisation: userAuthRole,
                                    authorisation: authRole,
                                }

                                return resp;

                                // END #######################################################
                            }
                            throw new InternalServerErrorException(`JWT token update failed.`);
                        }
                        throw new BadRequestException(`Unable to generate JWT token.`);
                    }
                    throw new BadRequestException(`Session varification faild.`);
                }
                throw new BadRequestException(`Unknown device, varification faild.`);
            }
            throw new BadRequestException(`Authorization faild.`);
        }
        throw new BadRequestException(`Authentication faild.`);
    }
    throw new BadRequestException(`Signin faild.`);
}

public async otpSignIn(input: AppOtpSigninInputDto, selection: AppOtpSigninOutputDto, info: GraphQLResolveInfo, ctx: any, etc?: EtcCRUDTypeDefinition): Promise<AppOtpSigninOutputDto> {
    // # set blank snapshot
    let snapshot: SnapshotListDto = new SnapshotListDto();

    // # get user info as per input.un_pe_pm
    const [user, using] = await this.uService.getByUsernameOrEmailOrMobile(input.un_pe_pm);

    // # check user verification policy
    const [userVerified, userSnap] = await this.userVerificationPolicy(user);
    if(userVerified === true && user.id !== undefined) {
        if((user.primary_email === null && user.primary_mobile === null) || (user.primary_email === '' && user.primary_mobile === '')) {
            throw new BadRequestException(`No primary email or mobile registered with your account, unable to send OTP.`);
        }
        
        // as user is verified, merge snapshot with existing
        snapshot = this.libraryAppService.mergeSnapshot(snapshot, userSnap);
        
        // # get and check authetication and it's policy
        const auth = await this.forceFindOneById(user.id);
        const [authVerified, authSnap] = await this.authVerificationPolicy(auth, null, null); // as null passed full policy will not be checked

        if(authVerified === null && auth.id !== undefined) {
            // as auth is verified, merge snapshot with existing
            snapshot = this.libraryAppService.mergeSnapshot(snapshot, authSnap);

            // # as auth is verified, need to generate OTP and send it to user
            // generate 6 digit otp and it's sms message
            const otp =  await this.otpService.generateNumberOtp(6) as any as number;
            const otpExpiryTime = this.libraryAppService.formatTime(this.confService.signinOtpExpireMinutes * 60)
            const msg = `Your ${this.confService.projectName} signin OTP: ${otp}. Valid for next ${otpExpiryTime}`;

            // # get the reference number for OTP to pass with SMS request
            const post: QueueSmsCreateInputDto = {
                from_u_id: 0, // TODO: need to some standard logic for what to use here
                to_u_id: user.id,
                quetype_id: QueueTypeEnum.SIGNIN_OTP,
                ref_id: `${auth.id}`,
                ref_type: snakeCase(UserAuthenticationEntity.metaname),
                from_mobile: '9999999999', // TODO: need to some standard logic for what to use here
                from_mobile_cc: '1', // TODO: need to some standard logic for what to use here
                to_mobile: user.primary_mobile,
                to_mobile_cc: user.primary_mobile_cc,
                msg: msg,
            };
            const queueSms = await this.queueSmsService.createEngine.create(post, {}, info, ctx, etc) as QueueSmsCreateOutputDto;

            // # send otp to user primary mobile number
            if(this.confService.bulkSmsTokenId !== 'false') {
                const smsPayload: BulkSmsReqType = {
                    to: `+${user.primary_mobile_cc}${user.primary_mobile}`,
                    body: msg.trim(),
                    userSuppliedId: `${queueSms.id}`, // primary key of queue sms entity
                }; 
                const sms = await this.bulkSmsService.sendUniqueMessage(smsPayload);
                
                // update raw data in queue sms for future reference
                this.queueSmsService.updateRawData(queueSms.id as number, JSON.stringify(sms) as any as JSON);    
            }
            
            const emailTemplateVar = {
                userName: user.fname 
                ? user.lname 
                  ? `${user.fname} ${user.lname}` 
                  : `${user.fname}`
                : user.lname 
                  ? `${user.lname}`
                  : `${input.un_pe_pm}`,
                otp:otp,
                loginUser: `${input.un_pe_pm}`,
                websiteURL: this.confService.appHostWebDomain,
                expiryTime: this.libraryAppService.formatTime(this.confService.signinOtpExpireMinutes*60)
            }
            const emailBodyPath = join(this.templateDirPath,'email.body.send.login.otp.hbs');
            const email_template = await this.templateEngineService.generateEmail(emailTemplateVar,emailBodyPath,false,false);
            
            // create input post to add email data in queue email
            const email_post: QueueEmailCreateInputDto = {
                from_u_id: 0, // TODO: need to some standard logic for what to use here
                to_u_id: user.id,
                quetype_id: QueueTypeEnum.SIGNIN_OTP,
                ref_id: `${auth.id}`,
                ref_type: snakeCase(UserAuthenticationEntity.metaname),
                from_email: this.confService.smtpFromEmail,
                to_email: user.primary_email,
                subject: 'One-Time Password (OTP) for your Account',
                body: email_template
            };
            const queueEmail = await this.queueEmailService.createEngine.create(email_post, {}, info, ctx, etc) as QueueEmailCreateOutputDto;
            
            // send email to primary email
            const emailreq: SendEmailInputType = {
                from: `${this.confService.smtpFromEmail}`,  // Sender's email and name
                to:   `${user.primary_email}`,
                subject: 'One-Time Password (OTP) for your Account',
                template:{
                  "filePath": emailBodyPath,
                  "fileVar":emailTemplateVar
                }
              };
            const email_resp = await this.emailService.nodeMailer.send(emailreq);
            
            if(Array.isArray(queueEmail)  && queueEmail.length > 0 && queueEmail[0].id !== null) {
                // update raw data in queue email for future reference
                await this.queueSmsService.updateRawDataAndSentStatus(queueEmail[0].id as number, new Date(), JSON.stringify(email_resp) as any as JSON);
            }
            
            // # encrypt the opt and save in user auth to be used for validation for given time period
            // set expire in next XX minutes form now as per set value in .env 
            const otpHash = await this.otpService.hashOtp(otp);
            const expiry = addMinutes(new Date(), this.confService.signinOtpExpireMinutes);

            // save otpHash and exiry in user auth
            await this.updateAuthOtp(auth.id, otpHash, expiry);

            // # set snapshot for response
            snapshot.success.push(`OTP has been sent to your registered email ${LibraryAppService.maskEmail(user.primary_email as string)} and mobile ${LibraryAppService.maskMobileNumber(user.primary_mobile as string)}.`);

            const resp: AppOtpSigninOutputDto = {
                id: auth.id,
                otp: String(otp),
                otp_expiry: expiry,
                snapshot: snapshot
            };

            return resp;
        }
        throw new BadRequestException(`Authentication faild.`);
    }
    throw new BadRequestException(`Signin faild.`);
}

public async resetPassword(input: AppResetPasswordInputDto, selection: AppResetPasswordOutputDto, info: GraphQLResolveInfo, ctx: any, etc?: EtcCRUDTypeDefinition): Promise<AppResetPasswordOutputDto> {
    const user = await this.uService.getUserForPasswordReset(input) as UserEntity;
    if(user !== null && user.id !== undefined) {
        if(user.suspended === null){
            // perform password update
            if(input.identify === input.identify_confirm){
                // get existing auth information
                const auth = await this.repository.findOne({
                    select: {id: true, identify: true},
                    where: {id: user.id}
                });
                if(auth !== null && auth.id !== undefined){
                    // set what to update and erform real time update
                    const update = await this.repository.update(
                        {id: auth.id},
                        {
                            identify: input.identify_confirm, 
                            identify_last: auth.identify,
                            last_changed: new Date(),
                            force_reset: null
                        }
                    );
                    
                    // check the update status and responde to request
                    if(update.affected === 1){
                        const resp = new AppResetPasswordOutputDto();
                        resp.affected = update.affected;
                        
                        const snapshot: SnapshotListDto = new SnapshotListDto();
                        snapshot.success.push(`Password reset successfully completed.`);
                        resp.snapshot = snapshot;
        
                        return resp;
                    }
                    throw new InternalServerErrorException(`Password update failed, please try again.`);
                }
                throw new NotFoundException(`Account with recovery email [${input.recovery_email}] is not eligible for password reset.`);
            }
            throw new BadRequestException(`Identify does not match with [confirm_identify].`);    
        }
        throw new BadRequestException(`Account with recovery email [${input.recovery_email}] is suspended.`);
    }
    throw new NotFoundException(`Recovery email [${input.recovery_email}] is not found.`);
}

public async forgotPassword(input: AppForgotPasswordInputDto, selection: AppForgotPasswordOutputDto, info: GraphQLResolveInfo, ctx: any, etc?: EtcCRUDTypeDefinition): Promise<AppForgotPasswordOutputDto> {
    const [user, using] = await this.uService.getByUsernameOrEmailOrMobile(input.un_pe_pm);
    
    if(user !== null && user.id !== undefined) {
        if(user.suspended === null){
            
            // get last changed  date
            const auth = await this.repository.findOne({
                select: {last_changed: true, id: true},
                where: {id: user.id}
            });

            // check if user authentication details is found or not
            if(auth === null)
                throw new NotFoundException(`User account not found for ${input.un_pe_pm}.`);

            // check last changed date is within 2 hours
            if(auth !== null && auth.last_changed !== undefined && auth.last_changed !== null && auth.last_changed >= addHours(new Date(), -this.confService.forgotPasswordLinkExpireHours)){
                throw new BadRequestException(`Your password has been updated recently. Please again request the forgot password request after ${this.confService.forgotPasswordLinkExpireHours} hours for security reasons.`);
            }

            // get forgot password recover token
            const recoverToken = await this.generateRecoverForgotPasswordToken(auth);

            let to_send_email = user.primary_email
            if(this.confService.forgotPasswordLinkSendToRecoveryEmail === true && user.recovery_email != null){
                to_send_email = user.recovery_email
            }
            
            // initialize a URL for recorver password webpage and add query parameters for token
            const url = new URL(input.pass_recover_url);
            url.searchParams.append(`pass_recover_token`, recoverToken.token);
            const newUrl = url.toString();

            // send email
            const emailTemplateVar = {
                userName: user.fname 
                ? user.lname 
                  ? `${user.fname} ${user.lname}` 
                  : `${user.fname}`
                : user.lname 
                  ? `${user.lname}`
                  : `${input.un_pe_pm}`,
                pass_recover_url: newUrl,
                expiryTime: this.confService.forgotPasswordLinkExpireHours,
            }
            const emailBodyPath = join(this.templateDirPath,'email.body.send.forgot.password.hbs');

            const email_template = await this.templateEngineService.generateEmail(emailTemplateVar,emailBodyPath,false,false);

            // create input post to add email data in queue email
            const email_post: QueueEmailCreateInputDto = {
                from_u_id: 0, // TODO: need to some standard logic for what to use here
                to_u_id: user.id,
                quetype_id: QueueTypeEnum.FORGOT_PASSWORD,
                ref_id: '',
                ref_type: '',
                from_email: this.confService.smtpFromEmail,
                to_email: to_send_email,
                subject: 'Password Reset Request',
                body: email_template
            };
            const queueEmail = await this.queueEmailService.createEngine.create(email_post, {}, info, ctx, etc) as QueueEmailCreateOutputDto;
            
            // send email to primary email
            const emailreq: SendEmailInputType = {
                from: `Uklix <${this.confService.smtpFromEmail}>`,  // Sender's email and name
                to:   `${to_send_email}`,
                subject: 'Password Reset Request',
                template:{
                  "filePath": emailBodyPath,
                  "fileVar":emailTemplateVar
                }
              };
            const email_resp = await this.emailService.nodeMailer.send(emailreq);
            
            if(Array.isArray(queueEmail)  && queueEmail.length > 0 && queueEmail[0].id !== null) {
                // update raw data in queue email for future reference
                await this.queueSmsService.updateRawDataAndSentStatus(queueEmail[0].id as number, new Date(), JSON.stringify(email_resp) as any as JSON);
            }

            // save otpHash and exiry in user auth
            await this.updateAuthOtp(recoverToken.auth_id, recoverToken.otp_hash, recoverToken.expiry);

            const resp = new AppForgotPasswordOutputDto();
            
            resp.pass_recover_token = recoverToken.token;

            const snapshot: SnapshotListDto = new SnapshotListDto();
            snapshot.success.push(`Your password reset link has been sent successfully to your email address ${to_send_email}. Please check your inbox or spam folder. The link will expire in ${this.confService.forgotPasswordLinkExpireHours} hours.`); 
            resp.snapshot = snapshot;

            return resp;
            
        }
        throw new BadRequestException(`Account with email [${user.primary_email}] is suspended.`);
    }
    throw new NotFoundException(`User [${input.un_pe_pm}] is not found.`);
}
public async recoverForgotPassword(input: AppRecoverForgotPasswordInputDto, selection: AppRecoverForgotPasswordOutputDto, info: GraphQLResolveInfo, ctx: any, etc?: EtcCRUDTypeDefinition): Promise<AppRecoverForgotPasswordOutputDto> {
    const [user, using] = await this.uService.getByUsernameOrEmailOrMobile(input.un_pe_pm);
    
    if(user !== null && user.id !== undefined) {
        if(user.suspended === null){

            // decode recover password token
            const token: RecoverForgotPasswordTokenType = await this.decodeRecoverForgotPasswordToken(input.pass_recover_token);
            
            if(new Date(token.expiry) > new Date()){

                // get existing auth information
                const auth = await this.repository.findOne({
                    select: {id: true, identify: true, last_changed: true, otp_expiry: true},
                    where: {
                        id: token.auth_id,
                        otp: token.otp_hash,
                    }
                });
                if(auth !== null && auth.id !== null){

                    if(auth.otp_expiry && auth.otp_expiry !== null && new Date(auth.otp_expiry) < new Date())
                            throw new BadRequestException(`Recover password link is expired`);

                    if(auth.last_changed !== undefined && auth.last_changed !== null && auth.last_changed >= addHours(new Date(), -this.confService.forgotPasswordLinkExpireHours)){
                        throw new BadRequestException(`Your password has been updated recently. Please again request the forgot password request after ${this.confService.forgotPasswordLinkExpireHours} hours for security reasons.`);
                    }
                    if(user.id === auth.id){ 

                        //check identify and identify_confirm is matching
                        if(input.identify === input.identify_confirm){
                                // set what to update and erform real time update
                            const update = await this.repository.update(
                                {id: auth.id},
                                {
                                    identify: input.identify_confirm, 
                                    identify_last: auth.identify,
                                    last_changed: new Date(),
                                    force_reset: null
                                }
                            );
                            // check the update status and responde to request
                            if(update.affected === 1){
                                const resp = new AppRecoverForgotPasswordOutputDto();
                                resp.affected = update.affected;
                                
                                const snapshot: SnapshotListDto = new SnapshotListDto();
                                snapshot.success.push(`Password reset successfully completed.`);
                                resp.snapshot = snapshot;
                
                                return resp;
                            }
                            throw new InternalServerErrorException(`Password update failed, please try again.`);
                        }
                        throw new BadRequestException(`Identify does not match with [confirm_identify].`); 
                    }
                    throw new BadRequestException(`Invalid Token. Please re-send the forgot password request with your details.`);
                
                }
                throw new BadRequestException(`You are not eligible to reset your password. Please contact support.`);
            }
            throw new BadRequestException(`Token is expired. Please re-send the forgot password request.`);
        }
        throw new BadRequestException(`Account with email [${user.primary_email}] is suspended.`);
    }
    throw new NotFoundException(`user [${input.un_pe_pm}] is not found.`);
}
public async whoAmI(csauser: JWTTokenUserDataType, selection: AppSigninOutputDto, info: GraphQLResolveInfo, ctx: any, etc?: EtcCRUDTypeDefinition): Promise<AppSigninOutputDto> { 


    //const resp = await this.bulkSmsService.sendMessage('+918759008990', `This is test SMS from GraphQLApi [${csauser.sub}]`);

    /*
    // Expired JWT for testing purpose which has right signature just expired or not found in database

    eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0eXBlIjoiYXV0aCIsImVtYWlsIjoiMzU0NDQzMjFjdXNlckBkb21haW4uY29tIiwic3ViIjoiTWpZPSIsImF1IjoiTWpZPSIsInVkdmMiOiJNUT09Iiwic2VzcyI6Ik1nPT0iLCJpYXQiOjE3MjM3ODE3ODEsImV4cCI6MTc1NTMxNzc4MSwiYXVkIjoiQXBwbGljYXRpb24iLCJpc3MiOiJUSEFUU0VORCJ9.7inAOljK8jAxT0xln32UUgyycg-4B5Fp71dES_nz3p4
    */
    if(csauser !== null && csauser.sub !== undefined){
        const bearer = csauser.uajwt ?? '';
        const [type, token] = bearer.split(' ') ?? [];

        const curSession = await this.session.findByJwtToken(token) as SessionEntity;
        
        // first need to check if session is valid or not
        if(curSession !== null && curSession.id !== undefined && curSession.logged_in === YesNoEnum.YES){

            // check if JWT is valid or expired. this is double checking only
            const payload = await this.jwtService.getAuthTokePayload(curSession.jwt as string) as any as JWTUserAuthTokenPayload;
            const sessid = parseInt(await UserAuthenticationJwtService.descData(payload.sess), 10);
            
            // make sure passed jwt is not from some other user, it must be for session user, closing loop hole
            if(sessid === csauser.sess){
                // get logged in user data with relation
                // set input to get logged in user info
                const findByID: UserFindOneByIdInputDto = new UserFindOneByIdInputDto();
                findByID.id = csauser.sub as number;

                // delete unwated fields from user selection
                delete selection.snapshot;
                delete selection.authenticated;

                // get the currect user info
                const loggedinUser = await this.uService.findEngine.findOneById(findByID, selection, info, ctx, etc);

                if(loggedinUser && loggedinUser.id !== undefined) {
                    // assign snapshot of entire process, in this case not applicable just do type cast
                    const resp: AppSigninOutputDto = loggedinUser as AppSigninOutputDto;

                    // get current info for authenticated state 
                    const curUserDevice = await this.uDevice.findOneById(csauser.udvc as number) as UserDeviceEntity;
                    const curDevice = this.device.findOneById(curUserDevice?.device_id as number) as DeviceEntity;

                    // set current signed in user info in response
                    resp.authenticated = {
                        session: curSession,
                        udevice: curUserDevice,
                        device: curDevice,
                        //authorisation: // need to pass logged in user logged in as which role, future implementation,
                    }
                    return resp;
                }
            }
            throw new UnauthorizedException(`Invalid or expired JWT.`);
        }
        throw new NotFoundException(`Session not found or JWT expired.`);
    }
    throw new BadRequestException(`Stateful authentication not found or invalid. Please add header [statefulauthorization] with valid stateful jwt auth token.`);
}

public async signOut(csauser: JWTTokenUserDataType, selection: any, info: GraphQLResolveInfo, ctx: any, etc?: EtcCRUDTypeDefinition): Promise<boolean> {
    return await this.session.close(csauser.sess as number, csauser.au as number);
}

}