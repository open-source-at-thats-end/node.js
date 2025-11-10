import { SessionMetaEntity } from "./entities/session.meta.entity";
import { Injectable } from "@nestjs/common";
import { DataSource, Repository } from "typeorm";
import { InjectRepository } from "@nestjs/typeorm";
import { ConfService, CreateCrudEngine, CrudFactory, DataValidationPipe, DeleteCrudEngine, FindCrudEngine, FindOutputPaginationDto, LibraryAppService, LogService, RemoveCrudEngine, UpdateCrudEngine, UploadCrudEngine, UpsertCrudEngine } from "@libs/library-app";
import { SelfGraphqlMicroserviceService } from "@libs/dynamic-app";
import { SessionMetaCreateDto, SessionMetaCreateInputDto, SessionMetaCreateOutputDto, SessionMetaDeleteDto, SessionMetaDeleteInputDto, SessionMetaDeleteInputWhereDto, SessionMetaDeleteOutputDto, SessionMetaFindDto, SessionMetaFindInputDto, SessionMetaFindInputGroupByDto, SessionMetaFindInputSortOrderDto, SessionMetaFindInputWhereDto, SessionMetaFindOneByIdDto, SessionMetaFindOneByIdInputDto, SessionMetaFindOutputDto, SessionMetaFindOutputRowsDto, SessionMetaRecoverDto, SessionMetaRecoverInputDto, SessionMetaRecoverInputWhereDto, SessionMetaRecoverOutputDto, SessionMetaRecoverOutputAffectedRowsDto, SessionMetaRemoveDto, SessionMetaRemoveInputDto, SessionMetaRemoveInputWhereDto, SessionMetaRemoveOutputDto, SessionMetaRemoveOutputAffectedRowsDto, SessionMetaRestoreDto, SessionMetaRestoreInputDto, SessionMetaRestoreInputWhereDto, SessionMetaRestoreOutputDto, SessionMetaSoftDeleteDto, SessionMetaSoftDeleteInputDto, SessionMetaSoftDeleteInputWhereDto, SessionMetaSoftDeleteOutputDto, SessionMetaSoftRemoveDto, SessionMetaSoftRemoveInputDto, SessionMetaSoftRemoveInputWhereDto, SessionMetaSoftRemoveOutputDto, SessionMetaSoftRemoveOutputAffectedRowsDto, SessionMetaUpdateDto, SessionMetaUpdateInputDto, SessionMetaUpdateInputSetsDto, SessionMetaUpdateInputWhereDto, SessionMetaUpdateOutputDto, SessionMetaUpdateOutputAffectedRowsDto, SessionMetaUploadDeleteDto, SessionMetaUploadDeleteInputDto, SessionMetaUploadDeleteOutputDto, SessionMetaUploadDto, SessionMetaUploadInputDto, SessionMetaUploadOutputDto, SessionMetaUpsertDto, SessionMetaUpsertInputDto, SessionMetaUpsertOutputDto } from "./dto/session.meta.dto";

@Injectable()
export class SessionMetaFactory extends CrudFactory<SessionMetaEntity> {

// ████████ FindCrudEngine ████████████████████████████████████████
public declare readonly findEngine: FindCrudEngine<
// entity (1)
SessionMetaEntity,

// find (8)
SessionMetaFindDto,
SessionMetaFindInputWhereDto,
SessionMetaFindInputSortOrderDto,
SessionMetaFindInputGroupByDto,
SessionMetaFindInputDto,
SessionMetaFindOutputRowsDto,
FindOutputPaginationDto,
SessionMetaFindOutputDto,

// find_one_by_id (2)
SessionMetaFindOneByIdDto,
SessionMetaFindOneByIdInputDto
>;

// ████████ CreateCrudEngine ████████████████████████████████████████
public declare readonly createEngine: CreateCrudEngine<
// entity (1)
SessionMetaEntity,

// create (3)
SessionMetaCreateDto,
SessionMetaCreateInputDto,
SessionMetaCreateOutputDto
>;

// ████████ UpdateCrudEngine ████████████████████████████████████████
public declare readonly updateEngine: UpdateCrudEngine<
// entity (1)
SessionMetaEntity,

// update (6)
SessionMetaUpdateDto,
SessionMetaUpdateInputWhereDto,
SessionMetaUpdateInputSetsDto,
SessionMetaUpdateInputDto,
SessionMetaUpdateOutputAffectedRowsDto,
SessionMetaUpdateOutputDto
>;

// ████████ DeleteCrudEngine ████████████████████████████████████████
public declare readonly deleteEngine: DeleteCrudEngine<
// entity (1)
SessionMetaEntity,

// soft_delete (4)
SessionMetaSoftDeleteDto,
SessionMetaSoftDeleteInputWhereDto,
SessionMetaSoftDeleteInputDto,
SessionMetaSoftDeleteOutputDto,

// delete (4)
SessionMetaDeleteDto,
SessionMetaDeleteInputWhereDto,
SessionMetaDeleteInputDto,
SessionMetaDeleteOutputDto,

// restore (4)
SessionMetaRestoreDto,
SessionMetaRestoreInputWhereDto,
SessionMetaRestoreInputDto,
SessionMetaRestoreOutputDto
>;

// ████████ UpsertCrudEngine ████████████████████████████████████████
public declare readonly upsertEngine: UpsertCrudEngine<
// entity (1)
SessionMetaEntity,

// upsert (3)
SessionMetaUpsertDto,
SessionMetaUpsertInputDto,
SessionMetaUpsertOutputDto
>;

// ████████ RemoveCrudEngine ████████████████████████████████████████
public declare readonly removeEngine: RemoveCrudEngine<
// entity (1)
SessionMetaEntity,

// soft_remove (5)
SessionMetaSoftRemoveDto,
SessionMetaSoftRemoveInputWhereDto,
SessionMetaSoftRemoveInputDto,
SessionMetaSoftRemoveOutputAffectedRowsDto,
SessionMetaSoftRemoveOutputDto,

// remove (4)
SessionMetaRemoveDto,
SessionMetaRemoveInputWhereDto,
SessionMetaRemoveInputDto,
SessionMetaRemoveOutputAffectedRowsDto,
SessionMetaRemoveOutputDto,

// recover (5)
SessionMetaRecoverDto,
SessionMetaRecoverInputWhereDto,
SessionMetaRecoverInputDto,
SessionMetaRecoverOutputAffectedRowsDto,
SessionMetaRecoverOutputDto
>;

// ████████ UploadCrudEngine ████████████████████████████████████████
public declare readonly uploadEngine: UploadCrudEngine<
// entity (1)
SessionMetaEntity,

// upload (3)
SessionMetaUploadDto,
SessionMetaUploadInputDto,
SessionMetaUploadOutputDto,

// upload_delete (3)
SessionMetaUploadDeleteDto,
SessionMetaUploadDeleteInputDto,
SessionMetaUploadDeleteOutputDto
>;

constructor(
// data source
protected readonly dataSource: DataSource,

@InjectRepository(SessionMetaEntity)
protected readonly repository: Repository<SessionMetaEntity>,

// dependecy services
protected readonly confService: ConfService,
protected readonly logService: LogService,
protected readonly validationPipe: DataValidationPipe,
protected readonly libraryAppService: LibraryAppService,
protected readonly selfGraphqlMicroserviceService: SelfGraphqlMicroserviceService,
) 
{
super(
    // data source
    dataSource,
    repository,

    // dependecy services
    confService,
    logService,
    validationPipe,
    libraryAppService,
    selfGraphqlMicroserviceService,

    // entity(1)
    SessionMetaEntity
);

this.logService.setContext(SessionMetaFactory.name);

// ████████ initialize FindCrudEngine ██████████████████████████████████████
this.initFindEngine
<
// find (8)
SessionMetaFindDto,
SessionMetaFindInputWhereDto,
SessionMetaFindInputSortOrderDto,
SessionMetaFindInputGroupByDto,
SessionMetaFindInputDto,
SessionMetaFindOutputRowsDto,
FindOutputPaginationDto,
SessionMetaFindOutputDto,

// find_one_by_id (2)
SessionMetaFindOneByIdDto,
SessionMetaFindOneByIdInputDto
>
(
// find (8)
SessionMetaFindDto,
SessionMetaFindInputWhereDto,
SessionMetaFindInputSortOrderDto,
SessionMetaFindInputGroupByDto,
SessionMetaFindInputDto,
SessionMetaFindOutputRowsDto,
FindOutputPaginationDto,
SessionMetaFindOutputDto,

// find_one_by_id (2)
SessionMetaFindOneByIdDto,
SessionMetaFindOneByIdInputDto
);


// ████████ initialize CreateCrudEngine ███████████████████████████████████████
this.initCreateEngine
<
// create (3)
SessionMetaCreateDto,
SessionMetaCreateInputDto,
SessionMetaCreateOutputDto
>
(
// create (3)
SessionMetaCreateDto,
SessionMetaCreateInputDto,
SessionMetaCreateOutputDto
);

// ████████ initialize UpdateCrudEngine ████████████████████████████████████████
this.initUpdateEngine
<
// update (6)
SessionMetaUpdateDto,
SessionMetaUpdateInputWhereDto,
SessionMetaUpdateInputSetsDto,
SessionMetaUpdateInputDto,
SessionMetaUpdateOutputAffectedRowsDto,
SessionMetaUpdateOutputDto
>
(
// update (6)
SessionMetaUpdateDto,
SessionMetaUpdateInputWhereDto,
SessionMetaUpdateInputSetsDto,
SessionMetaUpdateInputDto,
SessionMetaUpdateOutputAffectedRowsDto,
SessionMetaUpdateOutputDto
);


// ████████ initialize DeleteCrudEngine ███████████████████████████████████████████
this.initDeleteEngine
<
// soft_delete (4)
SessionMetaSoftDeleteDto,
SessionMetaSoftDeleteInputWhereDto,
SessionMetaSoftDeleteInputDto,
SessionMetaSoftDeleteOutputDto,

// delete (4)
SessionMetaDeleteDto,
SessionMetaDeleteInputWhereDto,
SessionMetaDeleteInputDto,
SessionMetaDeleteOutputDto,

// restore (4)
SessionMetaRestoreDto,
SessionMetaRestoreInputWhereDto,
SessionMetaRestoreInputDto,
SessionMetaRestoreOutputDto
>
(
// soft_delete (4)
SessionMetaSoftDeleteDto,
SessionMetaSoftDeleteInputWhereDto,
SessionMetaSoftDeleteInputDto,
SessionMetaSoftDeleteOutputDto,

// delete (4)
SessionMetaDeleteDto,
SessionMetaDeleteInputWhereDto,
SessionMetaDeleteInputDto,
SessionMetaDeleteOutputDto,

// restore (4)
SessionMetaRestoreDto,
SessionMetaRestoreInputWhereDto,
SessionMetaRestoreInputDto,
SessionMetaRestoreOutputDto
);



// ████████ initialize UpsertCrudEngine ███████████████████████████████████████████
this.initUpsertEngine
<
// upsert (3)
SessionMetaUpsertDto,
SessionMetaUpsertInputDto,
SessionMetaUpsertOutputDto
>
(
// upsert (3)
SessionMetaUpsertDto,
SessionMetaUpsertInputDto,
SessionMetaUpsertOutputDto
);




// ████████ initialize RemoveCrudEngine ███████████████████████████████████████████
this.initRemoveEngine
<
// soft_remove (5)
SessionMetaSoftRemoveDto,
SessionMetaSoftRemoveInputWhereDto,
SessionMetaSoftRemoveInputDto,
SessionMetaSoftRemoveOutputAffectedRowsDto,
SessionMetaSoftRemoveOutputDto,

// remove (4)
SessionMetaRemoveDto,
SessionMetaRemoveInputWhereDto,
SessionMetaRemoveInputDto,
SessionMetaRemoveOutputAffectedRowsDto,
SessionMetaRemoveOutputDto,

// recover (5)
SessionMetaRecoverDto,
SessionMetaRecoverInputWhereDto,
SessionMetaRecoverInputDto,
SessionMetaRecoverOutputAffectedRowsDto,
SessionMetaRecoverOutputDto
>
(
// soft_remove (5)
SessionMetaSoftRemoveDto,
SessionMetaSoftRemoveInputWhereDto,
SessionMetaSoftRemoveInputDto,
SessionMetaSoftRemoveOutputAffectedRowsDto,
SessionMetaSoftRemoveOutputDto,

// remove (4)
SessionMetaRemoveDto,
SessionMetaRemoveInputWhereDto,
SessionMetaRemoveInputDto,
SessionMetaRemoveOutputAffectedRowsDto,
SessionMetaRemoveOutputDto,

// recover (5)
SessionMetaRecoverDto,
SessionMetaRecoverInputWhereDto,
SessionMetaRecoverInputDto,
SessionMetaRecoverOutputAffectedRowsDto,
SessionMetaRecoverOutputDto
);



// ████████ initialize UploadCrudEngine ███████████████████████████████████████████
this.initUploadEngine
<
// upload (3)
SessionMetaUploadDto,
SessionMetaUploadInputDto,
SessionMetaUploadOutputDto,

// upload_delete (3)
SessionMetaUploadDeleteDto,
SessionMetaUploadDeleteInputDto,
SessionMetaUploadDeleteOutputDto
>
(
// upload (3)
SessionMetaUploadDto,
SessionMetaUploadInputDto,
SessionMetaUploadOutputDto,

// upload_delete (3)
SessionMetaUploadDeleteDto,
SessionMetaUploadDeleteInputDto,
SessionMetaUploadDeleteOutputDto
);


// ████████ initialize ImportExportCrudEngine █████████████████████████████████████

}

}