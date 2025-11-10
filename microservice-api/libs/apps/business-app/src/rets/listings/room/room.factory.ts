import { RetsListingRoomEntity } from "./entities/room.entity";
import { Injectable } from "@nestjs/common";
import { DataSource, Repository } from "typeorm";
import { InjectRepository } from "@nestjs/typeorm";
import { ConfService, CreateCrudEngine, CrudFactory, DataValidationPipe, DeleteCrudEngine, FindCrudEngine, FindOutputPaginationDto, LibraryAppService, LogService, RemoveCrudEngine, UpdateCrudEngine, UploadCrudEngine, UpsertCrudEngine  } from "@libs/library-app";
import { RetsListingRoomCreateDto, RetsListingRoomCreateInputDto, RetsListingRoomCreateOutputDto, RetsListingRoomDeleteDto, RetsListingRoomDeleteInputDto, RetsListingRoomDeleteInputWhereDto, RetsListingRoomDeleteOutputDto, RetsListingRoomFindDto, RetsListingRoomFindInputDto, RetsListingRoomFindInputGroupByDto, RetsListingRoomFindInputSortOrderDto, RetsListingRoomFindInputWhereDto, RetsListingRoomFindOneByIdDto, RetsListingRoomFindOneByIdInputDto, RetsListingRoomFindOutputDto, RetsListingRoomFindOutputRowsDto, RetsListingRoomRecoverDto, RetsListingRoomRecoverInputDto, RetsListingRoomRecoverInputWhereDto, RetsListingRoomRecoverOutputDto, RetsListingRoomRecoverOutputAffectedRowsDto, RetsListingRoomRemoveDto, RetsListingRoomRemoveInputDto, RetsListingRoomRemoveInputWhereDto, RetsListingRoomRemoveOutputDto, RetsListingRoomRemoveOutputAffectedRowsDto, RetsListingRoomRestoreDto, RetsListingRoomRestoreInputDto, RetsListingRoomRestoreInputWhereDto, RetsListingRoomRestoreOutputDto, RetsListingRoomSoftDeleteDto, RetsListingRoomSoftDeleteInputDto, RetsListingRoomSoftDeleteInputWhereDto, RetsListingRoomSoftDeleteOutputDto, RetsListingRoomSoftRemoveDto, RetsListingRoomSoftRemoveInputDto, RetsListingRoomSoftRemoveInputWhereDto, RetsListingRoomSoftRemoveOutputDto, RetsListingRoomSoftRemoveOutputAffectedRowsDto, RetsListingRoomUpdateDto, RetsListingRoomUpdateInputDto, RetsListingRoomUpdateInputSetsDto, RetsListingRoomUpdateInputWhereDto, RetsListingRoomUpdateOutputDto, RetsListingRoomUpdateOutputAffectedRowsDto, RetsListingRoomUploadDeleteDto, RetsListingRoomUploadDeleteInputDto, RetsListingRoomUploadDeleteOutputDto, RetsListingRoomUploadDto, RetsListingRoomUploadInputDto, RetsListingRoomUploadOutputDto, RetsListingRoomUpsertDto, RetsListingRoomUpsertInputDto, RetsListingRoomUpsertOutputDto } from "./dto/room.dto";
import { SelfGraphqlMicroserviceService } from "@libs/dynamic-app";

@Injectable()
export class RetsListingRoomFactory extends CrudFactory<RetsListingRoomEntity> {

// ████████ FindCrudEngine ████████████████████████████████████████
public declare readonly findEngine: FindCrudEngine<
// entity (1)
RetsListingRoomEntity,

// find (8)
RetsListingRoomFindDto,
RetsListingRoomFindInputWhereDto,
RetsListingRoomFindInputSortOrderDto,
RetsListingRoomFindInputGroupByDto,
RetsListingRoomFindInputDto,
RetsListingRoomFindOutputRowsDto,
FindOutputPaginationDto,
RetsListingRoomFindOutputDto,

// find_one_by_id (2)
RetsListingRoomFindOneByIdDto,
RetsListingRoomFindOneByIdInputDto
>;

// ████████ CreateCrudEngine ████████████████████████████████████████
public declare readonly createEngine: CreateCrudEngine<
// entity (1)
RetsListingRoomEntity,

// create (3)
RetsListingRoomCreateDto,
RetsListingRoomCreateInputDto,
RetsListingRoomCreateOutputDto
>;

// ████████ UpdateCrudEngine ████████████████████████████████████████
public declare readonly updateEngine: UpdateCrudEngine<
// entity (1)
RetsListingRoomEntity,

// update (6)
RetsListingRoomUpdateDto,
RetsListingRoomUpdateInputWhereDto,
RetsListingRoomUpdateInputSetsDto,
RetsListingRoomUpdateInputDto,
RetsListingRoomUpdateOutputAffectedRowsDto,
RetsListingRoomUpdateOutputDto
>;

// ████████ DeleteCrudEngine ████████████████████████████████████████
public declare readonly deleteEngine: DeleteCrudEngine<
// entity (1)
RetsListingRoomEntity,

// soft_delete (4)
RetsListingRoomSoftDeleteDto,
RetsListingRoomSoftDeleteInputWhereDto,
RetsListingRoomSoftDeleteInputDto,
RetsListingRoomSoftDeleteOutputDto,

// delete (4)
RetsListingRoomDeleteDto,
RetsListingRoomDeleteInputWhereDto,
RetsListingRoomDeleteInputDto,
RetsListingRoomDeleteOutputDto,

// restore (4)
RetsListingRoomRestoreDto,
RetsListingRoomRestoreInputWhereDto,
RetsListingRoomRestoreInputDto,
RetsListingRoomRestoreOutputDto
>;

// ████████ UpsertCrudEngine ████████████████████████████████████████
public declare readonly upsertEngine: UpsertCrudEngine<
// entity (1)
RetsListingRoomEntity,

// upsert (3)
RetsListingRoomUpsertDto,
RetsListingRoomUpsertInputDto,
RetsListingRoomUpsertOutputDto
>;

// ████████ RemoveCrudEngine ████████████████████████████████████████
public declare readonly removeEngine: RemoveCrudEngine<
// entity (1)
RetsListingRoomEntity,

// soft_remove (5)
RetsListingRoomSoftRemoveDto,
RetsListingRoomSoftRemoveInputWhereDto,
RetsListingRoomSoftRemoveInputDto,
RetsListingRoomSoftRemoveOutputAffectedRowsDto,
RetsListingRoomSoftRemoveOutputDto,

// remove (4)
RetsListingRoomRemoveDto,
RetsListingRoomRemoveInputWhereDto,
RetsListingRoomRemoveInputDto,
RetsListingRoomRemoveOutputAffectedRowsDto,
RetsListingRoomRemoveOutputDto,

// recover (5)
RetsListingRoomRecoverDto,
RetsListingRoomRecoverInputWhereDto,
RetsListingRoomRecoverInputDto,
RetsListingRoomRecoverOutputAffectedRowsDto,
RetsListingRoomRecoverOutputDto
>;

// ████████ UploadCrudEngine ████████████████████████████████████████
public declare readonly uploadEngine: UploadCrudEngine<
// entity (1)
RetsListingRoomEntity,

// upload (3)
RetsListingRoomUploadDto,
RetsListingRoomUploadInputDto,
RetsListingRoomUploadOutputDto,

// upload_delete (3)
RetsListingRoomUploadDeleteDto,
RetsListingRoomUploadDeleteInputDto,
RetsListingRoomUploadDeleteOutputDto
>;

constructor(
// data source
protected readonly dataSource: DataSource,

@InjectRepository(RetsListingRoomEntity)
protected readonly repository: Repository<RetsListingRoomEntity>,

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
    RetsListingRoomEntity,
);

this.logService.setContext(RetsListingRoomFactory.name);

// ████████ initialize FindCrudEngine ██████████████████████████████████████
this.initFindEngine
<
// find (8)
RetsListingRoomFindDto,
RetsListingRoomFindInputWhereDto,
RetsListingRoomFindInputSortOrderDto,
RetsListingRoomFindInputGroupByDto,
RetsListingRoomFindInputDto,
RetsListingRoomFindOutputRowsDto,
FindOutputPaginationDto,
RetsListingRoomFindOutputDto,

// find_one_by_id (2)
RetsListingRoomFindOneByIdDto,
RetsListingRoomFindOneByIdInputDto
>
(
// find (8)
RetsListingRoomFindDto,
RetsListingRoomFindInputWhereDto,
RetsListingRoomFindInputSortOrderDto,
RetsListingRoomFindInputGroupByDto,
RetsListingRoomFindInputDto,
RetsListingRoomFindOutputRowsDto,
FindOutputPaginationDto,
RetsListingRoomFindOutputDto,

// find_one_by_id (2)
RetsListingRoomFindOneByIdDto,
RetsListingRoomFindOneByIdInputDto
);


// ████████ initialize CreateCrudEngine ███████████████████████████████████████
this.initCreateEngine
<
// create (3)
RetsListingRoomCreateDto,
RetsListingRoomCreateInputDto,
RetsListingRoomCreateOutputDto
>
(
// create (3)
RetsListingRoomCreateDto,
RetsListingRoomCreateInputDto,
RetsListingRoomCreateOutputDto
);

// ████████ initialize UpdateCrudEngine ████████████████████████████████████████
this.initUpdateEngine
<
// update (6)
RetsListingRoomUpdateDto,
RetsListingRoomUpdateInputWhereDto,
RetsListingRoomUpdateInputSetsDto,
RetsListingRoomUpdateInputDto,
RetsListingRoomUpdateOutputAffectedRowsDto,
RetsListingRoomUpdateOutputDto
>
(
// update (6)
RetsListingRoomUpdateDto,
RetsListingRoomUpdateInputWhereDto,
RetsListingRoomUpdateInputSetsDto,
RetsListingRoomUpdateInputDto,
RetsListingRoomUpdateOutputAffectedRowsDto,
RetsListingRoomUpdateOutputDto
);


// ████████ initialize DeleteCrudEngine ███████████████████████████████████████████
this.initDeleteEngine
<
// soft_delete (4)
RetsListingRoomSoftDeleteDto,
RetsListingRoomSoftDeleteInputWhereDto,
RetsListingRoomSoftDeleteInputDto,
RetsListingRoomSoftDeleteOutputDto,

// delete (4)
RetsListingRoomDeleteDto,
RetsListingRoomDeleteInputWhereDto,
RetsListingRoomDeleteInputDto,
RetsListingRoomDeleteOutputDto,

// restore (4)
RetsListingRoomRestoreDto,
RetsListingRoomRestoreInputWhereDto,
RetsListingRoomRestoreInputDto,
RetsListingRoomRestoreOutputDto
>
(
// soft_delete (4)
RetsListingRoomSoftDeleteDto,
RetsListingRoomSoftDeleteInputWhereDto,
RetsListingRoomSoftDeleteInputDto,
RetsListingRoomSoftDeleteOutputDto,

// delete (4)
RetsListingRoomDeleteDto,
RetsListingRoomDeleteInputWhereDto,
RetsListingRoomDeleteInputDto,
RetsListingRoomDeleteOutputDto,

// restore (4)
RetsListingRoomRestoreDto,
RetsListingRoomRestoreInputWhereDto,
RetsListingRoomRestoreInputDto,
RetsListingRoomRestoreOutputDto
);



// ████████ initialize UpsertCrudEngine ███████████████████████████████████████████
this.initUpsertEngine
<
// upsert (3)
RetsListingRoomUpsertDto,
RetsListingRoomUpsertInputDto,
RetsListingRoomUpsertOutputDto
>
(
// upsert (3)
RetsListingRoomUpsertDto,
RetsListingRoomUpsertInputDto,
RetsListingRoomUpsertOutputDto
);




// ████████ initialize RemoveCrudEngine ███████████████████████████████████████████
this.initRemoveEngine
<
// soft_remove (5)
RetsListingRoomSoftRemoveDto,
RetsListingRoomSoftRemoveInputWhereDto,
RetsListingRoomSoftRemoveInputDto,
RetsListingRoomSoftRemoveOutputAffectedRowsDto,
RetsListingRoomSoftRemoveOutputDto,

// remove (4)
RetsListingRoomRemoveDto,
RetsListingRoomRemoveInputWhereDto,
RetsListingRoomRemoveInputDto,
RetsListingRoomRemoveOutputAffectedRowsDto,
RetsListingRoomRemoveOutputDto,

// recover (5)
RetsListingRoomRecoverDto,
RetsListingRoomRecoverInputWhereDto,
RetsListingRoomRecoverInputDto,
RetsListingRoomRecoverOutputAffectedRowsDto,
RetsListingRoomRecoverOutputDto
>
(
// soft_remove (5)
RetsListingRoomSoftRemoveDto,
RetsListingRoomSoftRemoveInputWhereDto,
RetsListingRoomSoftRemoveInputDto,
RetsListingRoomSoftRemoveOutputAffectedRowsDto,
RetsListingRoomSoftRemoveOutputDto,

// remove (4)
RetsListingRoomRemoveDto,
RetsListingRoomRemoveInputWhereDto,
RetsListingRoomRemoveInputDto,
RetsListingRoomRemoveOutputAffectedRowsDto,
RetsListingRoomRemoveOutputDto,

// recover (5)
RetsListingRoomRecoverDto,
RetsListingRoomRecoverInputWhereDto,
RetsListingRoomRecoverInputDto,
RetsListingRoomRecoverOutputAffectedRowsDto,
RetsListingRoomRecoverOutputDto
);



// ████████ initialize UploadCrudEngine ███████████████████████████████████████████
this.initUploadEngine
<
// upload (3)
RetsListingRoomUploadDto,
RetsListingRoomUploadInputDto,
RetsListingRoomUploadOutputDto,

// upload_delete (3)
RetsListingRoomUploadDeleteDto,
RetsListingRoomUploadDeleteInputDto,
RetsListingRoomUploadDeleteOutputDto
>
(
// upload (3)
RetsListingRoomUploadDto,
RetsListingRoomUploadInputDto,
RetsListingRoomUploadOutputDto,

// upload_delete (3)
RetsListingRoomUploadDeleteDto,
RetsListingRoomUploadDeleteInputDto,
RetsListingRoomUploadDeleteOutputDto
);


// ████████ initialize ImportExportCrudEngine █████████████████████████████████████

}}