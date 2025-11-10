import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DataSource, FindOptionsWhere, Repository } from 'typeorm';
import { UserFileEntity } from './entities/user.file.entity';
import { ConfService, DataValidationPipe, ImageProcessingService, LibraryAppService, LogService } from '@libs/library-app';
import { SelfGraphqlMicroserviceService } from "@libs/dynamic-app";
import { UserFileFactory } from './user.file.factory';

@Injectable()
export class UserFileService extends UserFileFactory {
constructor(
    protected dataSource: DataSource,

    @InjectRepository(UserFileEntity) 
    protected readonly repository: Repository<UserFileEntity>,

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
    this.logService.setContext(UserFileService.name);
}
}
