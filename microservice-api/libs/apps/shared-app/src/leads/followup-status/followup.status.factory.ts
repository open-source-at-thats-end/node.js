import { LeadFollowupStatusEntity } from "./entities/followup.status.entity";
import { Injectable } from "@nestjs/common";
import { DataSource, Repository } from "typeorm";
import { InjectRepository } from "@nestjs/typeorm";
import { ConfService, CreateCrudEngine, CrudFactory, DataValidationPipe, DeleteCrudEngine, FindCrudEngine, FindOutputPaginationDto, LibraryAppService, LogService, RemoveCrudEngine, UpdateCrudEngine, UploadCrudEngine, UpsertCrudEngine } from "@libs/library-app";
import { SelfGraphqlMicroserviceService } from '@libs/dynamic-app';
import { LeadFollowupStatusCreateDto, LeadFollowupStatusCreateInputDto, LeadFollowupStatusCreateOutputDto, LeadFollowupStatusDeleteDto, LeadFollowupStatusDeleteInputDto, LeadFollowupStatusDeleteInputWhereDto, LeadFollowupStatusDeleteOutputDto, LeadFollowupStatusFindDto, LeadFollowupStatusFindInputDto, LeadFollowupStatusFindInputGroupByDto, LeadFollowupStatusFindInputSortOrderDto, LeadFollowupStatusFindInputWhereDto, LeadFollowupStatusFindOneByIdDto, LeadFollowupStatusFindOneByIdInputDto, LeadFollowupStatusFindOutputDto, LeadFollowupStatusFindOutputRowsDto, LeadFollowupStatusRecoverDto, LeadFollowupStatusRecoverInputDto, LeadFollowupStatusRecoverInputWhereDto, LeadFollowupStatusRecoverOutputDto, LeadFollowupStatusRecoverOutputAffectedRowsDto, LeadFollowupStatusRemoveDto, LeadFollowupStatusRemoveInputDto, LeadFollowupStatusRemoveInputWhereDto, LeadFollowupStatusRemoveOutputDto, LeadFollowupStatusRemoveOutputAffectedRowsDto, LeadFollowupStatusRestoreDto, LeadFollowupStatusRestoreInputDto, LeadFollowupStatusRestoreInputWhereDto, LeadFollowupStatusRestoreOutputDto, LeadFollowupStatusSoftDeleteDto, LeadFollowupStatusSoftDeleteInputDto, LeadFollowupStatusSoftDeleteInputWhereDto, LeadFollowupStatusSoftDeleteOutputDto, LeadFollowupStatusSoftRemoveDto, LeadFollowupStatusSoftRemoveInputDto, LeadFollowupStatusSoftRemoveInputWhereDto, LeadFollowupStatusSoftRemoveOutputDto, LeadFollowupStatusSoftRemoveOutputAffectedRowsDto, LeadFollowupStatusUpdateDto, LeadFollowupStatusUpdateInputDto, LeadFollowupStatusUpdateInputSetsDto, LeadFollowupStatusUpdateInputWhereDto, LeadFollowupStatusUpdateOutputDto, LeadFollowupStatusUpdateOutputAffectedRowsDto, LeadFollowupStatusUploadDeleteDto, LeadFollowupStatusUploadDeleteInputDto, LeadFollowupStatusUploadDeleteOutputDto, LeadFollowupStatusUploadDto, LeadFollowupStatusUploadInputDto, LeadFollowupStatusUploadOutputDto, LeadFollowupStatusUpsertDto, LeadFollowupStatusUpsertInputDto, LeadFollowupStatusUpsertOutputDto } from "./dto/followup.status.dto";

@Injectable()
export class LeadFollowupStatusFactory extends CrudFactory<LeadFollowupStatusEntity> {

// ████████ FindCrudEngine ████████████████████████████████████████
public declare readonly findEngine: FindCrudEngine<
// entity (1)
LeadFollowupStatusEntity,

// find (8)
LeadFollowupStatusFindDto,
LeadFollowupStatusFindInputWhereDto,
LeadFollowupStatusFindInputSortOrderDto,
LeadFollowupStatusFindInputGroupByDto,
LeadFollowupStatusFindInputDto,
LeadFollowupStatusFindOutputRowsDto,
FindOutputPaginationDto,
LeadFollowupStatusFindOutputDto,

// find_one_by_id (2)
LeadFollowupStatusFindOneByIdDto,
LeadFollowupStatusFindOneByIdInputDto
>;

// ████████ CreateCrudEngine ████████████████████████████████████████
public declare readonly createEngine: CreateCrudEngine<
// entity (1)
LeadFollowupStatusEntity,

// create (3)
LeadFollowupStatusCreateDto,
LeadFollowupStatusCreateInputDto,
LeadFollowupStatusCreateOutputDto
>;

// ████████ UpdateCrudEngine ████████████████████████████████████████
public declare readonly updateEngine: UpdateCrudEngine<
// entity (1)
LeadFollowupStatusEntity,

// update (6)
LeadFollowupStatusUpdateDto,
LeadFollowupStatusUpdateInputWhereDto,
LeadFollowupStatusUpdateInputSetsDto,
LeadFollowupStatusUpdateInputDto,
LeadFollowupStatusUpdateOutputAffectedRowsDto,
LeadFollowupStatusUpdateOutputDto
>;

// ████████ DeleteCrudEngine ████████████████████████████████████████
public declare readonly deleteEngine: DeleteCrudEngine<
// entity (1)
LeadFollowupStatusEntity,

// soft_delete (4)
LeadFollowupStatusSoftDeleteDto,
LeadFollowupStatusSoftDeleteInputWhereDto,
LeadFollowupStatusSoftDeleteInputDto,
LeadFollowupStatusSoftDeleteOutputDto,

// delete (4)
LeadFollowupStatusDeleteDto,
LeadFollowupStatusDeleteInputWhereDto,
LeadFollowupStatusDeleteInputDto,
LeadFollowupStatusDeleteOutputDto,

// restore (4)
LeadFollowupStatusRestoreDto,
LeadFollowupStatusRestoreInputWhereDto,
LeadFollowupStatusRestoreInputDto,
LeadFollowupStatusRestoreOutputDto
>;

// ████████ UpsertCrudEngine ████████████████████████████████████████
public declare readonly upsertEngine: UpsertCrudEngine<
// entity (1)
LeadFollowupStatusEntity,

// upsert (3)
LeadFollowupStatusUpsertDto,
LeadFollowupStatusUpsertInputDto,
LeadFollowupStatusUpsertOutputDto
>;

// ████████ RemoveCrudEngine ████████████████████████████████████████
public declare readonly removeEngine: RemoveCrudEngine<
// entity (1)
LeadFollowupStatusEntity,

// soft_remove (5)
LeadFollowupStatusSoftRemoveDto,
LeadFollowupStatusSoftRemoveInputWhereDto,
LeadFollowupStatusSoftRemoveInputDto,
LeadFollowupStatusSoftRemoveOutputAffectedRowsDto,
LeadFollowupStatusSoftRemoveOutputDto,

// remove (4)
LeadFollowupStatusRemoveDto,
LeadFollowupStatusRemoveInputWhereDto,
LeadFollowupStatusRemoveInputDto,
LeadFollowupStatusRemoveOutputAffectedRowsDto,
LeadFollowupStatusRemoveOutputDto,

// recover (5)
LeadFollowupStatusRecoverDto,
LeadFollowupStatusRecoverInputWhereDto,
LeadFollowupStatusRecoverInputDto,
LeadFollowupStatusRecoverOutputAffectedRowsDto,
LeadFollowupStatusRecoverOutputDto
>;

// ████████ UploadCrudEngine ████████████████████████████████████████
public declare readonly uploadEngine: UploadCrudEngine<
// entity (1)
LeadFollowupStatusEntity,

// upload (3)
LeadFollowupStatusUploadDto,
LeadFollowupStatusUploadInputDto,
LeadFollowupStatusUploadOutputDto,

// upload_delete (3)
LeadFollowupStatusUploadDeleteDto,
LeadFollowupStatusUploadDeleteInputDto,
LeadFollowupStatusUploadDeleteOutputDto
>;

constructor(
// data source
protected readonly dataSource: DataSource,

@InjectRepository(LeadFollowupStatusEntity)
protected readonly repository: Repository<LeadFollowupStatusEntity>,

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
    LeadFollowupStatusEntity,
);

this.logService.setContext(LeadFollowupStatusFactory.name);

// ████████ initialize FindCrudEngine ██████████████████████████████████████
this.initFindEngine
<
// find (8)
LeadFollowupStatusFindDto,
LeadFollowupStatusFindInputWhereDto,
LeadFollowupStatusFindInputSortOrderDto,
LeadFollowupStatusFindInputGroupByDto,
LeadFollowupStatusFindInputDto,
LeadFollowupStatusFindOutputRowsDto,
FindOutputPaginationDto,
LeadFollowupStatusFindOutputDto,

// find_one_by_id (2)
LeadFollowupStatusFindOneByIdDto,
LeadFollowupStatusFindOneByIdInputDto
>
(
// find (8)
LeadFollowupStatusFindDto,
LeadFollowupStatusFindInputWhereDto,
LeadFollowupStatusFindInputSortOrderDto,
LeadFollowupStatusFindInputGroupByDto,
LeadFollowupStatusFindInputDto,
LeadFollowupStatusFindOutputRowsDto,
FindOutputPaginationDto,
LeadFollowupStatusFindOutputDto,

// find_one_by_id (2)
LeadFollowupStatusFindOneByIdDto,
LeadFollowupStatusFindOneByIdInputDto
);


// ████████ initialize CreateCrudEngine ███████████████████████████████████████
this.initCreateEngine
<
// create (3)
LeadFollowupStatusCreateDto,
LeadFollowupStatusCreateInputDto,
LeadFollowupStatusCreateOutputDto
>
(
// create (3)
LeadFollowupStatusCreateDto,
LeadFollowupStatusCreateInputDto,
LeadFollowupStatusCreateOutputDto
);

// ████████ initialize UpdateCrudEngine ████████████████████████████████████████
this.initUpdateEngine
<
// update (6)
LeadFollowupStatusUpdateDto,
LeadFollowupStatusUpdateInputWhereDto,
LeadFollowupStatusUpdateInputSetsDto,
LeadFollowupStatusUpdateInputDto,
LeadFollowupStatusUpdateOutputAffectedRowsDto,
LeadFollowupStatusUpdateOutputDto
>
(
// update (6)
LeadFollowupStatusUpdateDto,
LeadFollowupStatusUpdateInputWhereDto,
LeadFollowupStatusUpdateInputSetsDto,
LeadFollowupStatusUpdateInputDto,
LeadFollowupStatusUpdateOutputAffectedRowsDto,
LeadFollowupStatusUpdateOutputDto
);


// ████████ initialize DeleteCrudEngine ███████████████████████████████████████████
this.initDeleteEngine
<
// soft_delete (4)
LeadFollowupStatusSoftDeleteDto,
LeadFollowupStatusSoftDeleteInputWhereDto,
LeadFollowupStatusSoftDeleteInputDto,
LeadFollowupStatusSoftDeleteOutputDto,

// delete (4)
LeadFollowupStatusDeleteDto,
LeadFollowupStatusDeleteInputWhereDto,
LeadFollowupStatusDeleteInputDto,
LeadFollowupStatusDeleteOutputDto,

// restore (4)
LeadFollowupStatusRestoreDto,
LeadFollowupStatusRestoreInputWhereDto,
LeadFollowupStatusRestoreInputDto,
LeadFollowupStatusRestoreOutputDto
>
(
// soft_delete (4)
LeadFollowupStatusSoftDeleteDto,
LeadFollowupStatusSoftDeleteInputWhereDto,
LeadFollowupStatusSoftDeleteInputDto,
LeadFollowupStatusSoftDeleteOutputDto,

// delete (4)
LeadFollowupStatusDeleteDto,
LeadFollowupStatusDeleteInputWhereDto,
LeadFollowupStatusDeleteInputDto,
LeadFollowupStatusDeleteOutputDto,

// restore (4)
LeadFollowupStatusRestoreDto,
LeadFollowupStatusRestoreInputWhereDto,
LeadFollowupStatusRestoreInputDto,
LeadFollowupStatusRestoreOutputDto
);



// ████████ initialize UpsertCrudEngine ███████████████████████████████████████████
this.initUpsertEngine
<
// upsert (3)
LeadFollowupStatusUpsertDto,
LeadFollowupStatusUpsertInputDto,
LeadFollowupStatusUpsertOutputDto
>
(
// upsert (3)
LeadFollowupStatusUpsertDto,
LeadFollowupStatusUpsertInputDto,
LeadFollowupStatusUpsertOutputDto
);




// ████████ initialize RemoveCrudEngine ███████████████████████████████████████████
this.initRemoveEngine
<
// soft_remove (5)
LeadFollowupStatusSoftRemoveDto,
LeadFollowupStatusSoftRemoveInputWhereDto,
LeadFollowupStatusSoftRemoveInputDto,
LeadFollowupStatusSoftRemoveOutputAffectedRowsDto,
LeadFollowupStatusSoftRemoveOutputDto,

// remove (4)
LeadFollowupStatusRemoveDto,
LeadFollowupStatusRemoveInputWhereDto,
LeadFollowupStatusRemoveInputDto,
LeadFollowupStatusRemoveOutputAffectedRowsDto,
LeadFollowupStatusRemoveOutputDto,

// recover (5)
LeadFollowupStatusRecoverDto,
LeadFollowupStatusRecoverInputWhereDto,
LeadFollowupStatusRecoverInputDto,
LeadFollowupStatusRecoverOutputAffectedRowsDto,
LeadFollowupStatusRecoverOutputDto
>
(
// soft_remove (5)
LeadFollowupStatusSoftRemoveDto,
LeadFollowupStatusSoftRemoveInputWhereDto,
LeadFollowupStatusSoftRemoveInputDto,
LeadFollowupStatusSoftRemoveOutputAffectedRowsDto,
LeadFollowupStatusSoftRemoveOutputDto,

// remove (4)
LeadFollowupStatusRemoveDto,
LeadFollowupStatusRemoveInputWhereDto,
LeadFollowupStatusRemoveInputDto,
LeadFollowupStatusRemoveOutputAffectedRowsDto,
LeadFollowupStatusRemoveOutputDto,

// recover (5)
LeadFollowupStatusRecoverDto,
LeadFollowupStatusRecoverInputWhereDto,
LeadFollowupStatusRecoverInputDto,
LeadFollowupStatusRecoverOutputAffectedRowsDto,
LeadFollowupStatusRecoverOutputDto
);



// ████████ initialize UploadCrudEngine ███████████████████████████████████████████
this.initUploadEngine
<
// upload (3)
LeadFollowupStatusUploadDto,
LeadFollowupStatusUploadInputDto,
LeadFollowupStatusUploadOutputDto,

// upload_delete (3)
LeadFollowupStatusUploadDeleteDto,
LeadFollowupStatusUploadDeleteInputDto,
LeadFollowupStatusUploadDeleteOutputDto
>
(
// upload (3)
LeadFollowupStatusUploadDto,
LeadFollowupStatusUploadInputDto,
LeadFollowupStatusUploadOutputDto,

// upload_delete (3)
LeadFollowupStatusUploadDeleteDto,
LeadFollowupStatusUploadDeleteInputDto,
LeadFollowupStatusUploadDeleteOutputDto
);


// ████████ initialize ImportExportCrudEngine █████████████████████████████████████

}

}