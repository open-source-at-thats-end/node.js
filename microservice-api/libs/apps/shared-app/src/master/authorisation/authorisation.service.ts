import { ConfService, LibraryAppService, LogService } from '@libs/library-app';
import { Injectable } from '@nestjs/common';
import { AuthorisationEntity } from './entities/authorisation.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class AuthorisationService {
constructor(
    @InjectRepository(AuthorisationEntity)
    private readonly repository: Repository<AuthorisationEntity>,

    private readonly confService: ConfService,
    private readonly logService: LogService,
    private readonly libraryAppService: LibraryAppService
){
    this.logService.setContext(AuthorisationService.name);
}
async forceFindOneById(id: number): Promise<AuthorisationEntity> {
    const row = await this.repository.findOne({
        select: this.libraryAppService.entityFieldsArr<AuthorisationEntity>(this.repository.metadata.columns),
        where: { id: id },
        withDeleted: true
    });
    return row as AuthorisationEntity;
}
}
