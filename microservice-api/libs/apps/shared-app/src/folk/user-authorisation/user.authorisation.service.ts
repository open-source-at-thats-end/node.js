import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DataSource, Repository } from 'typeorm';
import { UserAuthorisationEntity } from './entities/user.authorisation.entity';
import { ConfService, DataValidationPipe, LibraryAppService, LogService } from '@libs/library-app';
import { UserAuthorisationFactory } from './user.authorisation.factory';
import { SelfGraphqlMicroserviceService } from '@libs/dynamic-app';

@Injectable()
export class UserAuthorisationService extends UserAuthorisationFactory {

constructor(
    protected dataSource: DataSource,

    @InjectRepository(UserAuthorisationEntity) 
    protected readonly repository: Repository<UserAuthorisationEntity>,

    protected readonly confService: ConfService,
    protected readonly logService: LogService,
    protected readonly DataValidationPipe: DataValidationPipe,
    protected readonly libraryAppService: LibraryAppService,
    protected readonly selfGraphqlMicroserviceService: SelfGraphqlMicroserviceService,
){
     super(
        dataSource,
        repository,
        confService,
        logService,
        DataValidationPipe,
        libraryAppService,
        selfGraphqlMicroserviceService,
    );
    this.logService.setContext(UserAuthorisationService.name);
}
public async createSingle(input: any): Promise<UserAuthorisationEntity> {
    const role: UserAuthorisationEntity = this.repository.create(input) as UserAuthorisationEntity;

    // perform process if any

    return role;
}
public async forceFindByUserAndRoleId(au_id: number, ar_id: number): Promise<UserAuthorisationEntity> {
    const row = await this.repository.findOne({
        select: this.libraryAppService.entityFieldsArr<UserAuthorisationEntity>(this.repository.metadata.columns),
        where: { au_id: au_id, ar_id: ar_id },
        withDeleted: true
    });
    return row as UserAuthorisationEntity;
}
public async isAuthorisationExists(au_id: number, ar_id: number): Promise<UserAuthorisationEntity | null> {
    const resp = await this.repository.findOne({
        where: { au_id: au_id, ar_id: ar_id },
        withDeleted: true
    });
    return resp;
}

}