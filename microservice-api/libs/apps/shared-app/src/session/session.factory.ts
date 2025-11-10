import { SessionEntity } from "./entities/session.entity";
import { Injectable } from "@nestjs/common";
import { DataSource, Repository } from "typeorm";
import { InjectRepository } from "@nestjs/typeorm";
import { ConfService, CreateCrudEngine, CrudFactory, DataValidationPipe, DeleteCrudEngine, FindCrudEngine, FindOutputPaginationDto, LibraryAppService, LogService, RemoveCrudEngine, UpdateCrudEngine, UploadCrudEngine, UpsertCrudEngine } from "@libs/library-app";
import { SelfGraphqlMicroserviceService } from "@libs/dynamic-app";
import { SessionCreateDto, SessionCreateInputDto, SessionCreateOutputDto, SessionDeleteDto, SessionDeleteInputDto, SessionDeleteInputWhereDto, SessionDeleteOutputDto, SessionFindDto, SessionFindInputDto, SessionFindInputGroupByDto, SessionFindInputSortOrderDto, SessionFindInputWhereDto, SessionFindOneByIdDto, SessionFindOneByIdInputDto, SessionFindOutputDto, SessionFindOutputRowsDto, SessionRecoverDto, SessionRecoverInputDto, SessionRecoverInputWhereDto, SessionRecoverOutputDto, SessionRecoverOutputAffectedRowsDto, SessionRemoveDto, SessionRemoveInputDto, SessionRemoveInputWhereDto, SessionRemoveOutputDto, SessionRemoveOutputAffectedRowsDto, SessionRestoreDto, SessionRestoreInputDto, SessionRestoreInputWhereDto, SessionRestoreOutputDto, SessionSoftDeleteDto, SessionSoftDeleteInputDto, SessionSoftDeleteInputWhereDto, SessionSoftDeleteOutputDto, SessionSoftRemoveDto, SessionSoftRemoveInputDto, SessionSoftRemoveInputWhereDto, SessionSoftRemoveOutputDto, SessionSoftRemoveOutputAffectedRowsDto, SessionUpdateDto, SessionUpdateInputDto, SessionUpdateInputSetsDto, SessionUpdateInputWhereDto, SessionUpdateOutputDto, SessionUpdateOutputAffectedRowsDto, SessionUploadDeleteDto, SessionUploadDeleteInputDto, SessionUploadDeleteOutputDto, SessionUploadDto, SessionUploadInputDto, SessionUploadOutputDto, SessionUpsertDto, SessionUpsertInputDto, SessionUpsertOutputDto } from "./dto/session.dto";

@Injectable()
export class SessionFactory extends CrudFactory<SessionEntity> {

// ████████ FindCrudEngine ████████████████████████████████████████
public declare readonly findEngine: FindCrudEngine<
// entity (1)
SessionEntity,

// find (8)
SessionFindDto,
SessionFindInputWhereDto,
SessionFindInputSortOrderDto,
SessionFindInputGroupByDto,
SessionFindInputDto,
SessionFindOutputRowsDto,
FindOutputPaginationDto,
SessionFindOutputDto,

// find_one_by_id (2)
SessionFindOneByIdDto,
SessionFindOneByIdInputDto
>;

// ████████ CreateCrudEngine ████████████████████████████████████████
public declare readonly createEngine: CreateCrudEngine<
// entity (1)
SessionEntity,

// create (3)
SessionCreateDto,
SessionCreateInputDto,
SessionCreateOutputDto
>;

// ████████ UpdateCrudEngine ████████████████████████████████████████
public declare readonly updateEngine: UpdateCrudEngine<
// entity (1)
SessionEntity,

// update (6)
SessionUpdateDto,
SessionUpdateInputWhereDto,
SessionUpdateInputSetsDto,
SessionUpdateInputDto,
SessionUpdateOutputAffectedRowsDto,
SessionUpdateOutputDto
>;

// ████████ DeleteCrudEngine ████████████████████████████████████████
public declare readonly deleteEngine: DeleteCrudEngine<
// entity (1)
SessionEntity,

// soft_delete (4)
SessionSoftDeleteDto,
SessionSoftDeleteInputWhereDto,
SessionSoftDeleteInputDto,
SessionSoftDeleteOutputDto,

// delete (4)
SessionDeleteDto,
SessionDeleteInputWhereDto,
SessionDeleteInputDto,
SessionDeleteOutputDto,

// restore (4)
SessionRestoreDto,
SessionRestoreInputWhereDto,
SessionRestoreInputDto,
SessionRestoreOutputDto
>;

// ████████ UpsertCrudEngine ████████████████████████████████████████
public declare readonly upsertEngine: UpsertCrudEngine<
// entity (1)
SessionEntity,

// upsert (3)
SessionUpsertDto,
SessionUpsertInputDto,
SessionUpsertOutputDto
>;

// ████████ RemoveCrudEngine ████████████████████████████████████████
public declare readonly removeEngine: RemoveCrudEngine<
// entity (1)
SessionEntity,

// soft_remove (5)
SessionSoftRemoveDto,
SessionSoftRemoveInputWhereDto,
SessionSoftRemoveInputDto,
SessionSoftRemoveOutputAffectedRowsDto,
SessionSoftRemoveOutputDto,

// remove (4)
SessionRemoveDto,
SessionRemoveInputWhereDto,
SessionRemoveInputDto,
SessionRemoveOutputAffectedRowsDto,
SessionRemoveOutputDto,

// recover (5)
SessionRecoverDto,
SessionRecoverInputWhereDto,
SessionRecoverInputDto,
SessionRecoverOutputAffectedRowsDto,
SessionRecoverOutputDto
>;

// ████████ UploadCrudEngine ████████████████████████████████████████
public declare readonly uploadEngine: UploadCrudEngine<
// entity (1)
SessionEntity,

// upload (3)
SessionUploadDto,
SessionUploadInputDto,
SessionUploadOutputDto,

// upload_delete (3)
SessionUploadDeleteDto,
SessionUploadDeleteInputDto,
SessionUploadDeleteOutputDto
>;

constructor(
// data source
protected readonly dataSource: DataSource,

@InjectRepository(SessionEntity)
protected readonly repository: Repository<SessionEntity>,

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
    SessionEntity

);

this.logService.setContext(SessionFactory.name);

// ████████ initialize FindCrudEngine ██████████████████████████████████████
this.initFindEngine
<
// find (8)
SessionFindDto,
SessionFindInputWhereDto,
SessionFindInputSortOrderDto,
SessionFindInputGroupByDto,
SessionFindInputDto,
SessionFindOutputRowsDto,
FindOutputPaginationDto,
SessionFindOutputDto,

// find_one_by_id (2)
SessionFindOneByIdDto,
SessionFindOneByIdInputDto
>
(
// find (8)
SessionFindDto,
SessionFindInputWhereDto,
SessionFindInputSortOrderDto,
SessionFindInputGroupByDto,
SessionFindInputDto,
SessionFindOutputRowsDto,
FindOutputPaginationDto,
SessionFindOutputDto,

// find_one_by_id (2)
SessionFindOneByIdDto,
SessionFindOneByIdInputDto
);


// ████████ initialize CreateCrudEngine ███████████████████████████████████████
this.initCreateEngine
<
// create (3)
SessionCreateDto,
SessionCreateInputDto,
SessionCreateOutputDto
>
(
// create (3)
SessionCreateDto,
SessionCreateInputDto,
SessionCreateOutputDto
);

// ████████ initialize UpdateCrudEngine ████████████████████████████████████████
this.initUpdateEngine
<
// update (6)
SessionUpdateDto,
SessionUpdateInputWhereDto,
SessionUpdateInputSetsDto,
SessionUpdateInputDto,
SessionUpdateOutputAffectedRowsDto,
SessionUpdateOutputDto
>
(
// update (6)
SessionUpdateDto,
SessionUpdateInputWhereDto,
SessionUpdateInputSetsDto,
SessionUpdateInputDto,
SessionUpdateOutputAffectedRowsDto,
SessionUpdateOutputDto
);


// ████████ initialize DeleteCrudEngine ███████████████████████████████████████████
this.initDeleteEngine
<
// soft_delete (4)
SessionSoftDeleteDto,
SessionSoftDeleteInputWhereDto,
SessionSoftDeleteInputDto,
SessionSoftDeleteOutputDto,

// delete (4)
SessionDeleteDto,
SessionDeleteInputWhereDto,
SessionDeleteInputDto,
SessionDeleteOutputDto,

// restore (4)
SessionRestoreDto,
SessionRestoreInputWhereDto,
SessionRestoreInputDto,
SessionRestoreOutputDto
>
(
// soft_delete (4)
SessionSoftDeleteDto,
SessionSoftDeleteInputWhereDto,
SessionSoftDeleteInputDto,
SessionSoftDeleteOutputDto,

// delete (4)
SessionDeleteDto,
SessionDeleteInputWhereDto,
SessionDeleteInputDto,
SessionDeleteOutputDto,

// restore (4)
SessionRestoreDto,
SessionRestoreInputWhereDto,
SessionRestoreInputDto,
SessionRestoreOutputDto
);



// ████████ initialize UpsertCrudEngine ███████████████████████████████████████████
this.initUpsertEngine
<
// upsert (3)
SessionUpsertDto,
SessionUpsertInputDto,
SessionUpsertOutputDto
>
(
// upsert (3)
SessionUpsertDto,
SessionUpsertInputDto,
SessionUpsertOutputDto
);




// ████████ initialize RemoveCrudEngine ███████████████████████████████████████████
this.initRemoveEngine
<
// soft_remove (5)
SessionSoftRemoveDto,
SessionSoftRemoveInputWhereDto,
SessionSoftRemoveInputDto,
SessionSoftRemoveOutputAffectedRowsDto,
SessionSoftRemoveOutputDto,

// remove (4)
SessionRemoveDto,
SessionRemoveInputWhereDto,
SessionRemoveInputDto,
SessionRemoveOutputAffectedRowsDto,
SessionRemoveOutputDto,

// recover (5)
SessionRecoverDto,
SessionRecoverInputWhereDto,
SessionRecoverInputDto,
SessionRecoverOutputAffectedRowsDto,
SessionRecoverOutputDto
>
(
// soft_remove (5)
SessionSoftRemoveDto,
SessionSoftRemoveInputWhereDto,
SessionSoftRemoveInputDto,
SessionSoftRemoveOutputAffectedRowsDto,
SessionSoftRemoveOutputDto,

// remove (4)
SessionRemoveDto,
SessionRemoveInputWhereDto,
SessionRemoveInputDto,
SessionRemoveOutputAffectedRowsDto,
SessionRemoveOutputDto,

// recover (5)
SessionRecoverDto,
SessionRecoverInputWhereDto,
SessionRecoverInputDto,
SessionRecoverOutputAffectedRowsDto,
SessionRecoverOutputDto
);



// ████████ initialize UploadCrudEngine ███████████████████████████████████████████
this.initUploadEngine
<
// upload (3)
SessionUploadDto,
SessionUploadInputDto,
SessionUploadOutputDto,

// upload_delete (3)
SessionUploadDeleteDto,
SessionUploadDeleteInputDto,
SessionUploadDeleteOutputDto
>
(
// upload (3)
SessionUploadDto,
SessionUploadInputDto,
SessionUploadOutputDto,

// upload_delete (3)
SessionUploadDeleteDto,
SessionUploadDeleteInputDto,
SessionUploadDeleteOutputDto
);


// ████████ initialize ImportExportCrudEngine █████████████████████████████████████

}

}