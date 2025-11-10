import { RetsListingEntity } from "./entities/listing.entity";
import { Injectable } from "@nestjs/common";
import { DataSource, Repository } from "typeorm";
import { InjectRepository } from "@nestjs/typeorm";
import { ConfService, CreateCrudEngine, CrudFactory, DataValidationPipe, DeleteCrudEngine, FindCrudEngine, FindOutputPaginationDto, LibraryAppService, LogService, RemoveCrudEngine, UpdateCrudEngine, UploadCrudEngine, UpsertCrudEngine  } from "@libs/library-app";
import { RetsListingCreateDto, RetsListingCreateInputDto, RetsListingCreateOutputDto, RetsListingDeleteDto, RetsListingDeleteInputDto, RetsListingDeleteInputWhereDto, RetsListingDeleteOutputDto, RetsListingFindDto, RetsListingFindInputDto, RetsListingFindInputGroupByDto, RetsListingFindInputSortOrderDto, RetsListingFindInputWhereDto, RetsListingFindOneByIdDto, RetsListingFindOneByIdInputDto, RetsListingFindOutputDto, RetsListingFindOutputRowsDto, RetsListingRecoverDto, RetsListingRecoverInputDto, RetsListingRecoverInputWhereDto, RetsListingRecoverOutputDto, RetsListingRecoverOutputAffectedRowsDto, RetsListingRemoveDto, RetsListingRemoveInputDto, RetsListingRemoveInputWhereDto, RetsListingRemoveOutputDto, RetsListingRemoveOutputAffectedRowsDto, RetsListingRestoreDto, RetsListingRestoreInputDto, RetsListingRestoreInputWhereDto, RetsListingRestoreOutputDto, RetsListingSoftDeleteDto, RetsListingSoftDeleteInputDto, RetsListingSoftDeleteInputWhereDto, RetsListingSoftDeleteOutputDto, RetsListingSoftRemoveDto, RetsListingSoftRemoveInputDto, RetsListingSoftRemoveInputWhereDto, RetsListingSoftRemoveOutputDto, RetsListingSoftRemoveOutputAffectedRowsDto, RetsListingUpdateDto, RetsListingUpdateInputDto, RetsListingUpdateInputSetsDto, RetsListingUpdateInputWhereDto, RetsListingUpdateOutputDto, RetsListingUpdateOutputAffectedRowsDto, RetsListingUploadDeleteDto, RetsListingUploadDeleteInputDto, RetsListingUploadDeleteOutputDto, RetsListingUploadDto, RetsListingUploadInputDto, RetsListingUploadOutputDto, RetsListingUpsertDto, RetsListingUpsertInputDto, RetsListingUpsertOutputDto } from "./dto/listing.dto";
import { SelfGraphqlMicroserviceService } from "@libs/dynamic-app";

@Injectable()
export class RetsListingFactory extends CrudFactory<RetsListingEntity> {

// ████████ FindCrudEngine ████████████████████████████████████████
public declare readonly findEngine: FindCrudEngine<
// entity (1)
RetsListingEntity,

// find (8)
RetsListingFindDto,
RetsListingFindInputWhereDto,
RetsListingFindInputSortOrderDto,
RetsListingFindInputGroupByDto,
RetsListingFindInputDto,
RetsListingFindOutputRowsDto,
FindOutputPaginationDto,
RetsListingFindOutputDto,

// find_one_by_id (2)
RetsListingFindOneByIdDto,
RetsListingFindOneByIdInputDto
>;

// ████████ CreateCrudEngine ████████████████████████████████████████
public declare readonly createEngine: CreateCrudEngine<
// entity (1)
RetsListingEntity,

// create (3)
RetsListingCreateDto,
RetsListingCreateInputDto,
RetsListingCreateOutputDto
>;

// ████████ UpdateCrudEngine ████████████████████████████████████████
public declare readonly updateEngine: UpdateCrudEngine<
// entity (1)
RetsListingEntity,

// update (6)
RetsListingUpdateDto,
RetsListingUpdateInputWhereDto,
RetsListingUpdateInputSetsDto,
RetsListingUpdateInputDto,
RetsListingUpdateOutputAffectedRowsDto,
RetsListingUpdateOutputDto
>;

// ████████ DeleteCrudEngine ████████████████████████████████████████
public declare readonly deleteEngine: DeleteCrudEngine<
// entity (1)
RetsListingEntity,

// soft_delete (4)
RetsListingSoftDeleteDto,
RetsListingSoftDeleteInputWhereDto,
RetsListingSoftDeleteInputDto,
RetsListingSoftDeleteOutputDto,

// delete (4)
RetsListingDeleteDto,
RetsListingDeleteInputWhereDto,
RetsListingDeleteInputDto,
RetsListingDeleteOutputDto,

// restore (4)
RetsListingRestoreDto,
RetsListingRestoreInputWhereDto,
RetsListingRestoreInputDto,
RetsListingRestoreOutputDto
>;

// ████████ UpsertCrudEngine ████████████████████████████████████████
public declare readonly upsertEngine: UpsertCrudEngine<
// entity (1)
RetsListingEntity,

// upsert (3)
RetsListingUpsertDto,
RetsListingUpsertInputDto,
RetsListingUpsertOutputDto
>;

// ████████ RemoveCrudEngine ████████████████████████████████████████
public declare readonly removeEngine: RemoveCrudEngine<
// entity (1)
RetsListingEntity,

// soft_remove (5)
RetsListingSoftRemoveDto,
RetsListingSoftRemoveInputWhereDto,
RetsListingSoftRemoveInputDto,
RetsListingSoftRemoveOutputAffectedRowsDto,
RetsListingSoftRemoveOutputDto,

// remove (4)
RetsListingRemoveDto,
RetsListingRemoveInputWhereDto,
RetsListingRemoveInputDto,
RetsListingRemoveOutputAffectedRowsDto,
RetsListingRemoveOutputDto,

// recover (5)
RetsListingRecoverDto,
RetsListingRecoverInputWhereDto,
RetsListingRecoverInputDto,
RetsListingRecoverOutputAffectedRowsDto,
RetsListingRecoverOutputDto
>;

// ████████ UploadCrudEngine ████████████████████████████████████████
public declare readonly uploadEngine: UploadCrudEngine<
// entity (1)
RetsListingEntity,

// upload (3)
RetsListingUploadDto,
RetsListingUploadInputDto,
RetsListingUploadOutputDto,

// upload_delete (3)
RetsListingUploadDeleteDto,
RetsListingUploadDeleteInputDto,
RetsListingUploadDeleteOutputDto
>;

constructor(
// data source
protected readonly dataSource: DataSource,

@InjectRepository(RetsListingEntity)
protected readonly repository: Repository<RetsListingEntity>,

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
    RetsListingEntity,
);

this.logService.setContext(RetsListingFactory.name);

// ████████ initialize FindCrudEngine ██████████████████████████████████████
this.initFindEngine
<
// find (8)
RetsListingFindDto,
RetsListingFindInputWhereDto,
RetsListingFindInputSortOrderDto,
RetsListingFindInputGroupByDto,
RetsListingFindInputDto,
RetsListingFindOutputRowsDto,
FindOutputPaginationDto,
RetsListingFindOutputDto,

// find_one_by_id (2)
RetsListingFindOneByIdDto,
RetsListingFindOneByIdInputDto
>
(
// find (8)
RetsListingFindDto,
RetsListingFindInputWhereDto,
RetsListingFindInputSortOrderDto,
RetsListingFindInputGroupByDto,
RetsListingFindInputDto,
RetsListingFindOutputRowsDto,
FindOutputPaginationDto,
RetsListingFindOutputDto,

// find_one_by_id (2)
RetsListingFindOneByIdDto,
RetsListingFindOneByIdInputDto
);


// ████████ initialize CreateCrudEngine ███████████████████████████████████████
this.initCreateEngine
<
// create (3)
RetsListingCreateDto,
RetsListingCreateInputDto,
RetsListingCreateOutputDto
>
(
// create (3)
RetsListingCreateDto,
RetsListingCreateInputDto,
RetsListingCreateOutputDto
);

// ████████ initialize UpdateCrudEngine ████████████████████████████████████████
this.initUpdateEngine
<
// update (6)
RetsListingUpdateDto,
RetsListingUpdateInputWhereDto,
RetsListingUpdateInputSetsDto,
RetsListingUpdateInputDto,
RetsListingUpdateOutputAffectedRowsDto,
RetsListingUpdateOutputDto
>
(
// update (6)
RetsListingUpdateDto,
RetsListingUpdateInputWhereDto,
RetsListingUpdateInputSetsDto,
RetsListingUpdateInputDto,
RetsListingUpdateOutputAffectedRowsDto,
RetsListingUpdateOutputDto
);


// ████████ initialize DeleteCrudEngine ███████████████████████████████████████████
this.initDeleteEngine
<
// soft_delete (4)
RetsListingSoftDeleteDto,
RetsListingSoftDeleteInputWhereDto,
RetsListingSoftDeleteInputDto,
RetsListingSoftDeleteOutputDto,

// delete (4)
RetsListingDeleteDto,
RetsListingDeleteInputWhereDto,
RetsListingDeleteInputDto,
RetsListingDeleteOutputDto,

// restore (4)
RetsListingRestoreDto,
RetsListingRestoreInputWhereDto,
RetsListingRestoreInputDto,
RetsListingRestoreOutputDto
>
(
// soft_delete (4)
RetsListingSoftDeleteDto,
RetsListingSoftDeleteInputWhereDto,
RetsListingSoftDeleteInputDto,
RetsListingSoftDeleteOutputDto,

// delete (4)
RetsListingDeleteDto,
RetsListingDeleteInputWhereDto,
RetsListingDeleteInputDto,
RetsListingDeleteOutputDto,

// restore (4)
RetsListingRestoreDto,
RetsListingRestoreInputWhereDto,
RetsListingRestoreInputDto,
RetsListingRestoreOutputDto
);



// ████████ initialize UpsertCrudEngine ███████████████████████████████████████████
this.initUpsertEngine
<
// upsert (3)
RetsListingUpsertDto,
RetsListingUpsertInputDto,
RetsListingUpsertOutputDto
>
(
// upsert (3)
RetsListingUpsertDto,
RetsListingUpsertInputDto,
RetsListingUpsertOutputDto
);




// ████████ initialize RemoveCrudEngine ███████████████████████████████████████████
this.initRemoveEngine
<
// soft_remove (5)
RetsListingSoftRemoveDto,
RetsListingSoftRemoveInputWhereDto,
RetsListingSoftRemoveInputDto,
RetsListingSoftRemoveOutputAffectedRowsDto,
RetsListingSoftRemoveOutputDto,

// remove (4)
RetsListingRemoveDto,
RetsListingRemoveInputWhereDto,
RetsListingRemoveInputDto,
RetsListingRemoveOutputAffectedRowsDto,
RetsListingRemoveOutputDto,

// recover (5)
RetsListingRecoverDto,
RetsListingRecoverInputWhereDto,
RetsListingRecoverInputDto,
RetsListingRecoverOutputAffectedRowsDto,
RetsListingRecoverOutputDto
>
(
// soft_remove (5)
RetsListingSoftRemoveDto,
RetsListingSoftRemoveInputWhereDto,
RetsListingSoftRemoveInputDto,
RetsListingSoftRemoveOutputAffectedRowsDto,
RetsListingSoftRemoveOutputDto,

// remove (4)
RetsListingRemoveDto,
RetsListingRemoveInputWhereDto,
RetsListingRemoveInputDto,
RetsListingRemoveOutputAffectedRowsDto,
RetsListingRemoveOutputDto,

// recover (5)
RetsListingRecoverDto,
RetsListingRecoverInputWhereDto,
RetsListingRecoverInputDto,
RetsListingRecoverOutputAffectedRowsDto,
RetsListingRecoverOutputDto
);



// ████████ initialize UploadCrudEngine ███████████████████████████████████████████
this.initUploadEngine
<
// upload (3)
RetsListingUploadDto,
RetsListingUploadInputDto,
RetsListingUploadOutputDto,

// upload_delete (3)
RetsListingUploadDeleteDto,
RetsListingUploadDeleteInputDto,
RetsListingUploadDeleteOutputDto
>
(
// upload (3)
RetsListingUploadDto,
RetsListingUploadInputDto,
RetsListingUploadOutputDto,

// upload_delete (3)
RetsListingUploadDeleteDto,
RetsListingUploadDeleteInputDto,
RetsListingUploadDeleteOutputDto
);


// ████████ initialize ImportExportCrudEngine █████████████████████████████████████

}}