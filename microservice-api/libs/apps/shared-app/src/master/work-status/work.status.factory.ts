import { WorkStatusEntity } from "./entities/work.status.entity";
import { Injectable } from "@nestjs/common";
import { DataSource, Repository } from "typeorm";
import { InjectRepository } from "@nestjs/typeorm";
import { ConfService, CreateCrudEngine, CrudFactory, DataValidationPipe, DeleteCrudEngine, FindCrudEngine, FindOutputPaginationDto, LibraryAppService, LogService, RemoveCrudEngine, UpdateCrudEngine, UploadCrudEngine, UpsertCrudEngine } from "@libs/library-app";
import { SelfGraphqlMicroserviceService } from '@libs/dynamic-app';
import { WorkStatusCreateDto, WorkStatusCreateInputDto, WorkStatusCreateOutputDto, WorkStatusDeleteDto, WorkStatusDeleteInputDto, WorkStatusDeleteInputWhereDto, WorkStatusDeleteOutputDto, WorkStatusFindDto, WorkStatusFindInputDto, WorkStatusFindInputGroupByDto, WorkStatusFindInputSortOrderDto, WorkStatusFindInputWhereDto, WorkStatusFindOneByIdDto, WorkStatusFindOneByIdInputDto, WorkStatusFindOutputDto, WorkStatusFindOutputRowsDto, WorkStatusRecoverDto, WorkStatusRecoverInputDto, WorkStatusRecoverInputWhereDto, WorkStatusRecoverOutputDto, WorkStatusRecoverOutputAffectedRowsDto, WorkStatusRemoveDto, WorkStatusRemoveInputDto, WorkStatusRemoveInputWhereDto, WorkStatusRemoveOutputDto, WorkStatusRemoveOutputAffectedRowsDto, WorkStatusRestoreDto, WorkStatusRestoreInputDto, WorkStatusRestoreInputWhereDto, WorkStatusRestoreOutputDto, WorkStatusSoftDeleteDto, WorkStatusSoftDeleteInputDto, WorkStatusSoftDeleteInputWhereDto, WorkStatusSoftDeleteOutputDto, WorkStatusSoftRemoveDto, WorkStatusSoftRemoveInputDto, WorkStatusSoftRemoveInputWhereDto, WorkStatusSoftRemoveOutputDto, WorkStatusSoftRemoveOutputAffectedRowsDto, WorkStatusUpdateDto, WorkStatusUpdateInputDto, WorkStatusUpdateInputSetsDto, WorkStatusUpdateInputWhereDto, WorkStatusUpdateOutputDto, WorkStatusUpdateOutputAffectedRowsDto, WorkStatusUploadDeleteDto, WorkStatusUploadDeleteInputDto, WorkStatusUploadDeleteOutputDto, WorkStatusUploadDto, WorkStatusUploadInputDto, WorkStatusUploadOutputDto, WorkStatusUpsertDto, WorkStatusUpsertInputDto, WorkStatusUpsertOutputDto } from "./dto/work.status.dto";

@Injectable()
export class WorkStatusFactory extends CrudFactory<WorkStatusEntity> {

// ████████ FindCrudEngine ████████████████████████████████████████
public declare readonly findEngine: FindCrudEngine<
// entity (1)
WorkStatusEntity,

// find (8)
WorkStatusFindDto,
WorkStatusFindInputWhereDto,
WorkStatusFindInputSortOrderDto,
WorkStatusFindInputGroupByDto,
WorkStatusFindInputDto,
WorkStatusFindOutputRowsDto,
FindOutputPaginationDto,
WorkStatusFindOutputDto,

// find_one_by_id (2)
WorkStatusFindOneByIdDto,
WorkStatusFindOneByIdInputDto
>;

// ████████ CreateCrudEngine ████████████████████████████████████████
public declare readonly createEngine: CreateCrudEngine<
// entity (1)
WorkStatusEntity,

// create (3)
WorkStatusCreateDto,
WorkStatusCreateInputDto,
WorkStatusCreateOutputDto
>;

// ████████ UpdateCrudEngine ████████████████████████████████████████
public declare readonly updateEngine: UpdateCrudEngine<
// entity (1)
WorkStatusEntity,

// update (6)
WorkStatusUpdateDto,
WorkStatusUpdateInputWhereDto,
WorkStatusUpdateInputSetsDto,
WorkStatusUpdateInputDto,
WorkStatusUpdateOutputAffectedRowsDto,
WorkStatusUpdateOutputDto
>;

// ████████ DeleteCrudEngine ████████████████████████████████████████
public declare readonly deleteEngine: DeleteCrudEngine<
// entity (1)
WorkStatusEntity,

// soft_delete (4)
WorkStatusSoftDeleteDto,
WorkStatusSoftDeleteInputWhereDto,
WorkStatusSoftDeleteInputDto,
WorkStatusSoftDeleteOutputDto,

// delete (4)
WorkStatusDeleteDto,
WorkStatusDeleteInputWhereDto,
WorkStatusDeleteInputDto,
WorkStatusDeleteOutputDto,

// restore (4)
WorkStatusRestoreDto,
WorkStatusRestoreInputWhereDto,
WorkStatusRestoreInputDto,
WorkStatusRestoreOutputDto
>;

// ████████ UpsertCrudEngine ████████████████████████████████████████
public declare readonly upsertEngine: UpsertCrudEngine<
// entity (1)
WorkStatusEntity,

// upsert (3)
WorkStatusUpsertDto,
WorkStatusUpsertInputDto,
WorkStatusUpsertOutputDto
>;

// ████████ RemoveCrudEngine ████████████████████████████████████████
public declare readonly removeEngine: RemoveCrudEngine<
// entity (1)
WorkStatusEntity,

// soft_remove (5)
WorkStatusSoftRemoveDto,
WorkStatusSoftRemoveInputWhereDto,
WorkStatusSoftRemoveInputDto,
WorkStatusSoftRemoveOutputAffectedRowsDto,
WorkStatusSoftRemoveOutputDto,

// remove (4)
WorkStatusRemoveDto,
WorkStatusRemoveInputWhereDto,
WorkStatusRemoveInputDto,
WorkStatusRemoveOutputAffectedRowsDto,
WorkStatusRemoveOutputDto,

// recover (5)
WorkStatusRecoverDto,
WorkStatusRecoverInputWhereDto,
WorkStatusRecoverInputDto,
WorkStatusRecoverOutputAffectedRowsDto,
WorkStatusRecoverOutputDto
>;

// ████████ UploadCrudEngine ████████████████████████████████████████
public declare readonly uploadEngine: UploadCrudEngine<
// entity (1)
WorkStatusEntity,

// upload (3)
WorkStatusUploadDto,
WorkStatusUploadInputDto,
WorkStatusUploadOutputDto,

// upload_delete (3)
WorkStatusUploadDeleteDto,
WorkStatusUploadDeleteInputDto,
WorkStatusUploadDeleteOutputDto
>;

constructor(
// data source
protected readonly dataSource: DataSource,

@InjectRepository(WorkStatusEntity)
protected readonly repository: Repository<WorkStatusEntity>,

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
    WorkStatusEntity,
);

this.logService.setContext(WorkStatusFactory.name);

// ████████ initialize FindCrudEngine ██████████████████████████████████████
this.initFindEngine
<
// find (8)
WorkStatusFindDto,
WorkStatusFindInputWhereDto,
WorkStatusFindInputSortOrderDto,
WorkStatusFindInputGroupByDto,
WorkStatusFindInputDto,
WorkStatusFindOutputRowsDto,
FindOutputPaginationDto,
WorkStatusFindOutputDto,

// find_one_by_id (2)
WorkStatusFindOneByIdDto,
WorkStatusFindOneByIdInputDto
>
(
// find (8)
WorkStatusFindDto,
WorkStatusFindInputWhereDto,
WorkStatusFindInputSortOrderDto,
WorkStatusFindInputGroupByDto,
WorkStatusFindInputDto,
WorkStatusFindOutputRowsDto,
FindOutputPaginationDto,
WorkStatusFindOutputDto,

// find_one_by_id (2)
WorkStatusFindOneByIdDto,
WorkStatusFindOneByIdInputDto
);


// ████████ initialize CreateCrudEngine ███████████████████████████████████████
this.initCreateEngine
<
// create (3)
WorkStatusCreateDto,
WorkStatusCreateInputDto,
WorkStatusCreateOutputDto
>
(
// create (3)
WorkStatusCreateDto,
WorkStatusCreateInputDto,
WorkStatusCreateOutputDto
);

// ████████ initialize UpdateCrudEngine ████████████████████████████████████████
this.initUpdateEngine
<
// update (6)
WorkStatusUpdateDto,
WorkStatusUpdateInputWhereDto,
WorkStatusUpdateInputSetsDto,
WorkStatusUpdateInputDto,
WorkStatusUpdateOutputAffectedRowsDto,
WorkStatusUpdateOutputDto
>
(
// update (6)
WorkStatusUpdateDto,
WorkStatusUpdateInputWhereDto,
WorkStatusUpdateInputSetsDto,
WorkStatusUpdateInputDto,
WorkStatusUpdateOutputAffectedRowsDto,
WorkStatusUpdateOutputDto
);


// ████████ initialize DeleteCrudEngine ███████████████████████████████████████████
this.initDeleteEngine
<
// soft_delete (4)
WorkStatusSoftDeleteDto,
WorkStatusSoftDeleteInputWhereDto,
WorkStatusSoftDeleteInputDto,
WorkStatusSoftDeleteOutputDto,

// delete (4)
WorkStatusDeleteDto,
WorkStatusDeleteInputWhereDto,
WorkStatusDeleteInputDto,
WorkStatusDeleteOutputDto,

// restore (4)
WorkStatusRestoreDto,
WorkStatusRestoreInputWhereDto,
WorkStatusRestoreInputDto,
WorkStatusRestoreOutputDto
>
(
// soft_delete (4)
WorkStatusSoftDeleteDto,
WorkStatusSoftDeleteInputWhereDto,
WorkStatusSoftDeleteInputDto,
WorkStatusSoftDeleteOutputDto,

// delete (4)
WorkStatusDeleteDto,
WorkStatusDeleteInputWhereDto,
WorkStatusDeleteInputDto,
WorkStatusDeleteOutputDto,

// restore (4)
WorkStatusRestoreDto,
WorkStatusRestoreInputWhereDto,
WorkStatusRestoreInputDto,
WorkStatusRestoreOutputDto
);



// ████████ initialize UpsertCrudEngine ███████████████████████████████████████████
this.initUpsertEngine
<
// upsert (3)
WorkStatusUpsertDto,
WorkStatusUpsertInputDto,
WorkStatusUpsertOutputDto
>
(
// upsert (3)
WorkStatusUpsertDto,
WorkStatusUpsertInputDto,
WorkStatusUpsertOutputDto
);




// ████████ initialize RemoveCrudEngine ███████████████████████████████████████████
this.initRemoveEngine
<
// soft_remove (5)
WorkStatusSoftRemoveDto,
WorkStatusSoftRemoveInputWhereDto,
WorkStatusSoftRemoveInputDto,
WorkStatusSoftRemoveOutputAffectedRowsDto,
WorkStatusSoftRemoveOutputDto,

// remove (4)
WorkStatusRemoveDto,
WorkStatusRemoveInputWhereDto,
WorkStatusRemoveInputDto,
WorkStatusRemoveOutputAffectedRowsDto,
WorkStatusRemoveOutputDto,

// recover (5)
WorkStatusRecoverDto,
WorkStatusRecoverInputWhereDto,
WorkStatusRecoverInputDto,
WorkStatusRecoverOutputAffectedRowsDto,
WorkStatusRecoverOutputDto
>
(
// soft_remove (5)
WorkStatusSoftRemoveDto,
WorkStatusSoftRemoveInputWhereDto,
WorkStatusSoftRemoveInputDto,
WorkStatusSoftRemoveOutputAffectedRowsDto,
WorkStatusSoftRemoveOutputDto,

// remove (4)
WorkStatusRemoveDto,
WorkStatusRemoveInputWhereDto,
WorkStatusRemoveInputDto,
WorkStatusRemoveOutputAffectedRowsDto,
WorkStatusRemoveOutputDto,

// recover (5)
WorkStatusRecoverDto,
WorkStatusRecoverInputWhereDto,
WorkStatusRecoverInputDto,
WorkStatusRecoverOutputAffectedRowsDto,
WorkStatusRecoverOutputDto
);



// ████████ initialize UploadCrudEngine ███████████████████████████████████████████
this.initUploadEngine
<
// upload (3)
WorkStatusUploadDto,
WorkStatusUploadInputDto,
WorkStatusUploadOutputDto,

// upload_delete (3)
WorkStatusUploadDeleteDto,
WorkStatusUploadDeleteInputDto,
WorkStatusUploadDeleteOutputDto
>
(
// upload (3)
WorkStatusUploadDto,
WorkStatusUploadInputDto,
WorkStatusUploadOutputDto,

// upload_delete (3)
WorkStatusUploadDeleteDto,
WorkStatusUploadDeleteInputDto,
WorkStatusUploadDeleteOutputDto
);


// ████████ initialize ImportExportCrudEngine █████████████████████████████████████

}

}