import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DataSource, Repository } from 'typeorm';
import { SessionMetaEntity } from './entities/session.meta.entity';
import { ConfService, DataValidationPipe, LibraryAppService, LogService } from '@libs/library-app';

@Injectable()
export class SessionMetaService {

constructor(
    private dataSource: DataSource,

    @InjectRepository(SessionMetaEntity) 
    private readonly repository: Repository<SessionMetaEntity>,

    private readonly confService: ConfService,
    private readonly logService: LogService,
    private readonly DataValidationPipe: DataValidationPipe,
    private readonly libraryAppService: LibraryAppService,
){
    this.logService.setContext(SessionMetaService.name);
}
entityFields(): (keyof SessionMetaEntity)[] {
    return (this.repository.metadata.columns.map(col => col.propertyName) as (keyof SessionMetaEntity)[]);
}


}