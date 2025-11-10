import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DataSource, FindOptionsWhere, Repository } from 'typeorm';
import { UserEntity } from './entities/user.entity';
import { ConfService, DataValidationPipe, ImageProcessingService, LibraryAppService, LogService } from '@libs/library-app';
import { SelfGraphqlMicroserviceService } from "@libs/dynamic-app";
import { UserFactory } from './user.factory';
import { AppResetPasswordInputDto, AppSignupInputDto } from '../user-auth/dto/user.auth.dto';

@Injectable()
export class UserService extends UserFactory {
constructor(
    protected dataSource: DataSource,

    @InjectRepository(UserEntity) 
    protected readonly repository: Repository<UserEntity>,

    protected readonly confService: ConfService,
    protected readonly logService: LogService,
    protected readonly dataValidationPipe: DataValidationPipe,
    protected readonly libraryAppService: LibraryAppService,
    protected readonly selfGraphqlMicroserviceService: SelfGraphqlMicroserviceService,
    protected readonly imageProcessingService: ImageProcessingService,
    
){
    super(
        dataSource,
        repository,
        confService,
        logService,
        dataValidationPipe,
        libraryAppService,
        selfGraphqlMicroserviceService,
        imageProcessingService,
    );
    this.logService.setContext(UserService.name);
}
public async isSignUpExists(input: AppSignupInputDto): Promise<UserEntity | null> {

    const where: any = {};
    if(input.username){
        where.username = input.username;
    }
    if(input.primary_email){
        where.primary_email = input.primary_email;
    }
    if(input.primary_mobile){
        where.primary_mobile = input.primary_mobile;
    }

    const resp = await this.repository.findOne({
        where: where,
        withDeleted: true
    });

    return resp;
}
public async generateUsername(): Promise<string> {

    const randNum = Math.floor(999999 + Math.random() * 895634);
    const randString = Math.random().toString(36).slice(-6);
    const reference = `${randNum}${randString}`;

    const ref = reference.replace(/[^a-zA-Z0-9\s]/g, '');
    const rand = (Math.random() + 1).toString(36).substring(2);
    return (`.${ref}.${rand}.`); // we have pattern [ . <reference> . <random> . ] so we can identify if it's auto generated or not
}
public async createSingle(input: any): Promise<UserEntity> {
    const user: UserEntity = this.repository.create(input) as UserEntity;
    
    // set auto generated username if not found in response
    if(Object.keys(user).length > 0 && !user.hasOwnProperty('username') || (user.username === null || user.username === undefined)) {
        user.username = await this.generateUsername();
    }
    return user;
}
public async getByUsernameOrEmailOrMobile(un_pe_pm: any): Promise<[UserEntity, string]> {
    // this method force selcet all fileds even if it's set [select: false] such as password field
    const cols = this._entityFieldsArr();

    // set where condition and find the user
    const row = await this.repository.findOne({
        select: cols,
        withDeleted: true, // we need to make sure for deleted user so turn on
        where: [
            {username: un_pe_pm},
            {primary_email: un_pe_pm},
            {primary_mobile: un_pe_pm}
        ]
    });

    const user = row as UserEntity;

    if(user !== null){
        let using = null;
        // check what has been passed
        if(user.username === un_pe_pm)
            using = 'username';
        else if(user.primary_email === un_pe_pm)
            using = 'email';
        else if(user.primary_mobile === un_pe_pm)
            using = 'mobile';

        if(using !== null) {
            return [user, using];
        }
    }

    // if not found anything, then throw error
    throw new NotFoundException(`User not found for [un_pe_pm: ${un_pe_pm}].`);
}
public async getUserForPasswordReset(input: AppResetPasswordInputDto): Promise<UserEntity | null> {
    const where = this.repository.create(input);
    const cols = this._entityFieldsArr();
    const user = await this.repository.findOne({
        select: cols, 
        where: where
    });
    return user;
}
public async findSingleById(id: number): Promise<UserEntity | null> {
    const user = await this.repository.findOneBy({ id: id });
    return user;
}
}
