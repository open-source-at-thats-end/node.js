import { RetsListingAgentEntity } from "./entities/agent.entity";
import { Injectable } from "@nestjs/common";
import { DataSource, Repository } from "typeorm";
import { InjectRepository } from "@nestjs/typeorm";
import { ConfService, CreateCrudEngine, CrudFactory, DataValidationPipe, DeleteCrudEngine, FindCrudEngine, FindOutputPaginationDto, LibraryAppService, LogService, RemoveCrudEngine, UpdateCrudEngine, UploadCrudEngine, UpsertCrudEngine  } from "@libs/library-app";
import { RetsListingAgentCreateDto, RetsListingAgentCreateInputDto, RetsListingAgentCreateOutputDto, RetsListingAgentDeleteDto, RetsListingAgentDeleteInputDto, RetsListingAgentDeleteInputWhereDto, RetsListingAgentDeleteOutputDto, RetsListingAgentFindDto, RetsListingAgentFindInputDto, RetsListingAgentFindInputGroupByDto, RetsListingAgentFindInputSortOrderDto, RetsListingAgentFindInputWhereDto, RetsListingAgentFindOneByIdDto, RetsListingAgentFindOneByIdInputDto, RetsListingAgentFindOutputDto, RetsListingAgentFindOutputRowsDto, RetsListingAgentRecoverDto, RetsListingAgentRecoverInputDto, RetsListingAgentRecoverInputWhereDto, RetsListingAgentRecoverOutputDto, RetsListingAgentRecoverOutputAffectedRowsDto, RetsListingAgentRemoveDto, RetsListingAgentRemoveInputDto, RetsListingAgentRemoveInputWhereDto, RetsListingAgentRemoveOutputDto, RetsListingAgentRemoveOutputAffectedRowsDto, RetsListingAgentRestoreDto, RetsListingAgentRestoreInputDto, RetsListingAgentRestoreInputWhereDto, RetsListingAgentRestoreOutputDto, RetsListingAgentSoftDeleteDto, RetsListingAgentSoftDeleteInputDto, RetsListingAgentSoftDeleteInputWhereDto, RetsListingAgentSoftDeleteOutputDto, RetsListingAgentSoftRemoveDto, RetsListingAgentSoftRemoveInputDto, RetsListingAgentSoftRemoveInputWhereDto, RetsListingAgentSoftRemoveOutputDto, RetsListingAgentSoftRemoveOutputAffectedRowsDto, RetsListingAgentUpdateDto, RetsListingAgentUpdateInputDto, RetsListingAgentUpdateInputSetsDto, RetsListingAgentUpdateInputWhereDto, RetsListingAgentUpdateOutputDto, RetsListingAgentUpdateOutputAffectedRowsDto, RetsListingAgentUploadDeleteDto, RetsListingAgentUploadDeleteInputDto, RetsListingAgentUploadDeleteOutputDto, RetsListingAgentUploadDto, RetsListingAgentUploadInputDto, RetsListingAgentUploadOutputDto, RetsListingAgentUpsertDto, RetsListingAgentUpsertInputDto, RetsListingAgentUpsertOutputDto } from "./dto/agent.dto";
import { SelfGraphqlMicroserviceService } from "@libs/dynamic-app";

@Injectable()
export class RetsListingAgentFactory extends CrudFactory<RetsListingAgentEntity> {

// ████████ FindCrudEngine ████████████████████████████████████████
public declare readonly findEngine: FindCrudEngine<
// entity (1)
RetsListingAgentEntity,

// find (8)
RetsListingAgentFindDto,
RetsListingAgentFindInputWhereDto,
RetsListingAgentFindInputSortOrderDto,
RetsListingAgentFindInputGroupByDto,
RetsListingAgentFindInputDto,
RetsListingAgentFindOutputRowsDto,
FindOutputPaginationDto,
RetsListingAgentFindOutputDto,

// find_one_by_id (2)
RetsListingAgentFindOneByIdDto,
RetsListingAgentFindOneByIdInputDto
>;

// ████████ CreateCrudEngine ████████████████████████████████████████
public declare readonly createEngine: CreateCrudEngine<
// entity (1)
RetsListingAgentEntity,

// create (3)
RetsListingAgentCreateDto,
RetsListingAgentCreateInputDto,
RetsListingAgentCreateOutputDto
>;

// ████████ UpdateCrudEngine ████████████████████████████████████████
public declare readonly updateEngine: UpdateCrudEngine<
// entity (1)
RetsListingAgentEntity,

// update (6)
RetsListingAgentUpdateDto,
RetsListingAgentUpdateInputWhereDto,
RetsListingAgentUpdateInputSetsDto,
RetsListingAgentUpdateInputDto,
RetsListingAgentUpdateOutputAffectedRowsDto,
RetsListingAgentUpdateOutputDto
>;

// ████████ DeleteCrudEngine ████████████████████████████████████████
public declare readonly deleteEngine: DeleteCrudEngine<
// entity (1)
RetsListingAgentEntity,

// soft_delete (4)
RetsListingAgentSoftDeleteDto,
RetsListingAgentSoftDeleteInputWhereDto,
RetsListingAgentSoftDeleteInputDto,
RetsListingAgentSoftDeleteOutputDto,

// delete (4)
RetsListingAgentDeleteDto,
RetsListingAgentDeleteInputWhereDto,
RetsListingAgentDeleteInputDto,
RetsListingAgentDeleteOutputDto,

// restore (4)
RetsListingAgentRestoreDto,
RetsListingAgentRestoreInputWhereDto,
RetsListingAgentRestoreInputDto,
RetsListingAgentRestoreOutputDto
>;

// ████████ UpsertCrudEngine ████████████████████████████████████████
public declare readonly upsertEngine: UpsertCrudEngine<
// entity (1)
RetsListingAgentEntity,

// upsert (3)
RetsListingAgentUpsertDto,
RetsListingAgentUpsertInputDto,
RetsListingAgentUpsertOutputDto
>;

// ████████ RemoveCrudEngine ████████████████████████████████████████
public declare readonly removeEngine: RemoveCrudEngine<
// entity (1)
RetsListingAgentEntity,

// soft_remove (5)
RetsListingAgentSoftRemoveDto,
RetsListingAgentSoftRemoveInputWhereDto,
RetsListingAgentSoftRemoveInputDto,
RetsListingAgentSoftRemoveOutputAffectedRowsDto,
RetsListingAgentSoftRemoveOutputDto,

// remove (4)
RetsListingAgentRemoveDto,
RetsListingAgentRemoveInputWhereDto,
RetsListingAgentRemoveInputDto,
RetsListingAgentRemoveOutputAffectedRowsDto,
RetsListingAgentRemoveOutputDto,

// recover (5)
RetsListingAgentRecoverDto,
RetsListingAgentRecoverInputWhereDto,
RetsListingAgentRecoverInputDto,
RetsListingAgentRecoverOutputAffectedRowsDto,
RetsListingAgentRecoverOutputDto
>;

// ████████ UploadCrudEngine ████████████████████████████████████████
public declare readonly uploadEngine: UploadCrudEngine<
// entity (1)
RetsListingAgentEntity,

// upload (3)
RetsListingAgentUploadDto,
RetsListingAgentUploadInputDto,
RetsListingAgentUploadOutputDto,

// upload_delete (3)
RetsListingAgentUploadDeleteDto,
RetsListingAgentUploadDeleteInputDto,
RetsListingAgentUploadDeleteOutputDto
>;

constructor(
// data source
protected readonly dataSource: DataSource,

@InjectRepository(RetsListingAgentEntity)
protected readonly repository: Repository<RetsListingAgentEntity>,

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

    // entity (1)
    RetsListingAgentEntity,
);

this.logService.setContext(RetsListingAgentFactory.name);

// ████████ initialize FindCrudEngine ██████████████████████████████████████
this.initFindEngine
<
// find (8)
RetsListingAgentFindDto,
RetsListingAgentFindInputWhereDto,
RetsListingAgentFindInputSortOrderDto,
RetsListingAgentFindInputGroupByDto,
RetsListingAgentFindInputDto,
RetsListingAgentFindOutputRowsDto,
FindOutputPaginationDto,
RetsListingAgentFindOutputDto,

// find_one_by_id (2)
RetsListingAgentFindOneByIdDto,
RetsListingAgentFindOneByIdInputDto
>
(
// find (8)
RetsListingAgentFindDto,
RetsListingAgentFindInputWhereDto,
RetsListingAgentFindInputSortOrderDto,
RetsListingAgentFindInputGroupByDto,
RetsListingAgentFindInputDto,
RetsListingAgentFindOutputRowsDto,
FindOutputPaginationDto,
RetsListingAgentFindOutputDto,

// find_one_by_id (2)
RetsListingAgentFindOneByIdDto,
RetsListingAgentFindOneByIdInputDto
);


// ████████ initialize CreateCrudEngine ███████████████████████████████████████
this.initCreateEngine
<
// create (3)
RetsListingAgentCreateDto,
RetsListingAgentCreateInputDto,
RetsListingAgentCreateOutputDto
>
(
// create (3)
RetsListingAgentCreateDto,
RetsListingAgentCreateInputDto,
RetsListingAgentCreateOutputDto
);

// ████████ initialize UpdateCrudEngine ████████████████████████████████████████
this.initUpdateEngine
<
// update (6)
RetsListingAgentUpdateDto,
RetsListingAgentUpdateInputWhereDto,
RetsListingAgentUpdateInputSetsDto,
RetsListingAgentUpdateInputDto,
RetsListingAgentUpdateOutputAffectedRowsDto,
RetsListingAgentUpdateOutputDto
>
(
// update (6)
RetsListingAgentUpdateDto,
RetsListingAgentUpdateInputWhereDto,
RetsListingAgentUpdateInputSetsDto,
RetsListingAgentUpdateInputDto,
RetsListingAgentUpdateOutputAffectedRowsDto,
RetsListingAgentUpdateOutputDto
);


// ████████ initialize DeleteCrudEngine ███████████████████████████████████████████
this.initDeleteEngine
<
// soft_delete (4)
RetsListingAgentSoftDeleteDto,
RetsListingAgentSoftDeleteInputWhereDto,
RetsListingAgentSoftDeleteInputDto,
RetsListingAgentSoftDeleteOutputDto,

// delete (4)
RetsListingAgentDeleteDto,
RetsListingAgentDeleteInputWhereDto,
RetsListingAgentDeleteInputDto,
RetsListingAgentDeleteOutputDto,

// restore (4)
RetsListingAgentRestoreDto,
RetsListingAgentRestoreInputWhereDto,
RetsListingAgentRestoreInputDto,
RetsListingAgentRestoreOutputDto
>
(
// soft_delete (4)
RetsListingAgentSoftDeleteDto,
RetsListingAgentSoftDeleteInputWhereDto,
RetsListingAgentSoftDeleteInputDto,
RetsListingAgentSoftDeleteOutputDto,

// delete (4)
RetsListingAgentDeleteDto,
RetsListingAgentDeleteInputWhereDto,
RetsListingAgentDeleteInputDto,
RetsListingAgentDeleteOutputDto,

// restore (4)
RetsListingAgentRestoreDto,
RetsListingAgentRestoreInputWhereDto,
RetsListingAgentRestoreInputDto,
RetsListingAgentRestoreOutputDto
);



// ████████ initialize UpsertCrudEngine ███████████████████████████████████████████
this.initUpsertEngine
<
// upsert (3)
RetsListingAgentUpsertDto,
RetsListingAgentUpsertInputDto,
RetsListingAgentUpsertOutputDto
>
(
// upsert (3)
RetsListingAgentUpsertDto,
RetsListingAgentUpsertInputDto,
RetsListingAgentUpsertOutputDto
);




// ████████ initialize RemoveCrudEngine ███████████████████████████████████████████
this.initRemoveEngine
<
// soft_remove (5)
RetsListingAgentSoftRemoveDto,
RetsListingAgentSoftRemoveInputWhereDto,
RetsListingAgentSoftRemoveInputDto,
RetsListingAgentSoftRemoveOutputAffectedRowsDto,
RetsListingAgentSoftRemoveOutputDto,

// remove (4)
RetsListingAgentRemoveDto,
RetsListingAgentRemoveInputWhereDto,
RetsListingAgentRemoveInputDto,
RetsListingAgentRemoveOutputAffectedRowsDto,
RetsListingAgentRemoveOutputDto,

// recover (5)
RetsListingAgentRecoverDto,
RetsListingAgentRecoverInputWhereDto,
RetsListingAgentRecoverInputDto,
RetsListingAgentRecoverOutputAffectedRowsDto,
RetsListingAgentRecoverOutputDto
>
(
// soft_remove (5)
RetsListingAgentSoftRemoveDto,
RetsListingAgentSoftRemoveInputWhereDto,
RetsListingAgentSoftRemoveInputDto,
RetsListingAgentSoftRemoveOutputAffectedRowsDto,
RetsListingAgentSoftRemoveOutputDto,

// remove (4)
RetsListingAgentRemoveDto,
RetsListingAgentRemoveInputWhereDto,
RetsListingAgentRemoveInputDto,
RetsListingAgentRemoveOutputAffectedRowsDto,
RetsListingAgentRemoveOutputDto,

// recover (5)
RetsListingAgentRecoverDto,
RetsListingAgentRecoverInputWhereDto,
RetsListingAgentRecoverInputDto,
RetsListingAgentRecoverOutputAffectedRowsDto,
RetsListingAgentRecoverOutputDto
);



// ████████ initialize UploadCrudEngine ███████████████████████████████████████████
this.initUploadEngine
<
// upload (3)
RetsListingAgentUploadDto,
RetsListingAgentUploadInputDto,
RetsListingAgentUploadOutputDto,

// upload_delete (3)
RetsListingAgentUploadDeleteDto,
RetsListingAgentUploadDeleteInputDto,
RetsListingAgentUploadDeleteOutputDto
>
(
// upload (3)
RetsListingAgentUploadDto,
RetsListingAgentUploadInputDto,
RetsListingAgentUploadOutputDto,

// upload_delete (3)
RetsListingAgentUploadDeleteDto,
RetsListingAgentUploadDeleteInputDto,
RetsListingAgentUploadDeleteOutputDto
);


// ████████ initialize ImportExportCrudEngine █████████████████████████████████████

}}