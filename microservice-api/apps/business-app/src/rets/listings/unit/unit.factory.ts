import { RetsListingUnitEntity } from "./entities/unit.entity";
import { Injectable } from "@nestjs/common";
import { DataSource, Repository } from "typeorm";
import { InjectRepository } from "@nestjs/typeorm";
import { ConfService, CreateCrudEngine, CrudFactory, DataValidationPipe, DeleteCrudEngine, FindCrudEngine, FindOutputPaginationDto, LibraryAppService, LogService, RemoveCrudEngine, UpdateCrudEngine, UploadCrudEngine, UpsertCrudEngine  } from "@libs/library-app";
import { RetsListingUnitCreateDto, RetsListingUnitCreateInputDto, RetsListingUnitCreateOutputDto, RetsListingUnitDeleteDto, RetsListingUnitDeleteInputDto, RetsListingUnitDeleteInputWhereDto, RetsListingUnitDeleteOutputDto, RetsListingUnitFindDto, RetsListingUnitFindInputDto, RetsListingUnitFindInputGroupByDto, RetsListingUnitFindInputSortOrderDto, RetsListingUnitFindInputWhereDto, RetsListingUnitFindOneByIdDto, RetsListingUnitFindOneByIdInputDto, RetsListingUnitFindOutputDto, RetsListingUnitFindOutputRowsDto, RetsListingUnitRecoverDto, RetsListingUnitRecoverInputDto, RetsListingUnitRecoverInputWhereDto, RetsListingUnitRecoverOutputDto, RetsListingUnitRecoverOutputAffectedRowsDto, RetsListingUnitRemoveDto, RetsListingUnitRemoveInputDto, RetsListingUnitRemoveInputWhereDto, RetsListingUnitRemoveOutputDto, RetsListingUnitRemoveOutputAffectedRowsDto, RetsListingUnitRestoreDto, RetsListingUnitRestoreInputDto, RetsListingUnitRestoreInputWhereDto, RetsListingUnitRestoreOutputDto, RetsListingUnitSoftDeleteDto, RetsListingUnitSoftDeleteInputDto, RetsListingUnitSoftDeleteInputWhereDto, RetsListingUnitSoftDeleteOutputDto, RetsListingUnitSoftRemoveDto, RetsListingUnitSoftRemoveInputDto, RetsListingUnitSoftRemoveInputWhereDto, RetsListingUnitSoftRemoveOutputDto, RetsListingUnitSoftRemoveOutputAffectedRowsDto, RetsListingUnitUpdateDto, RetsListingUnitUpdateInputDto, RetsListingUnitUpdateInputSetsDto, RetsListingUnitUpdateInputWhereDto, RetsListingUnitUpdateOutputDto, RetsListingUnitUpdateOutputAffectedRowsDto, RetsListingUnitUploadDeleteDto, RetsListingUnitUploadDeleteInputDto, RetsListingUnitUploadDeleteOutputDto, RetsListingUnitUploadDto, RetsListingUnitUploadInputDto, RetsListingUnitUploadOutputDto, RetsListingUnitUpsertDto, RetsListingUnitUpsertInputDto, RetsListingUnitUpsertOutputDto } from "./dto/unit.dto";
import { SelfGraphqlMicroserviceService } from "@libs/dynamic-app";

@Injectable()
export class RetsListingUnitFactory extends CrudFactory<RetsListingUnitEntity> {

// ████████ FindCrudEngine ████████████████████████████████████████
public declare readonly findEngine: FindCrudEngine<
// entity (1)
RetsListingUnitEntity,

// find (8)
RetsListingUnitFindDto,
RetsListingUnitFindInputWhereDto,
RetsListingUnitFindInputSortOrderDto,
RetsListingUnitFindInputGroupByDto,
RetsListingUnitFindInputDto,
RetsListingUnitFindOutputRowsDto,
FindOutputPaginationDto,
RetsListingUnitFindOutputDto,

// find_one_by_id (2)
RetsListingUnitFindOneByIdDto,
RetsListingUnitFindOneByIdInputDto
>;

// ████████ CreateCrudEngine ████████████████████████████████████████
public declare readonly createEngine: CreateCrudEngine<
// entity (1)
RetsListingUnitEntity,

// create (3)
RetsListingUnitCreateDto,
RetsListingUnitCreateInputDto,
RetsListingUnitCreateOutputDto
>;

// ████████ UpdateCrudEngine ████████████████████████████████████████
public declare readonly updateEngine: UpdateCrudEngine<
// entity (1)
RetsListingUnitEntity,

// update (6)
RetsListingUnitUpdateDto,
RetsListingUnitUpdateInputWhereDto,
RetsListingUnitUpdateInputSetsDto,
RetsListingUnitUpdateInputDto,
RetsListingUnitUpdateOutputAffectedRowsDto,
RetsListingUnitUpdateOutputDto
>;

// ████████ DeleteCrudEngine ████████████████████████████████████████
public declare readonly deleteEngine: DeleteCrudEngine<
// entity (1)
RetsListingUnitEntity,

// soft_delete (4)
RetsListingUnitSoftDeleteDto,
RetsListingUnitSoftDeleteInputWhereDto,
RetsListingUnitSoftDeleteInputDto,
RetsListingUnitSoftDeleteOutputDto,

// delete (4)
RetsListingUnitDeleteDto,
RetsListingUnitDeleteInputWhereDto,
RetsListingUnitDeleteInputDto,
RetsListingUnitDeleteOutputDto,

// restore (4)
RetsListingUnitRestoreDto,
RetsListingUnitRestoreInputWhereDto,
RetsListingUnitRestoreInputDto,
RetsListingUnitRestoreOutputDto
>;

// ████████ UpsertCrudEngine ████████████████████████████████████████
public declare readonly upsertEngine: UpsertCrudEngine<
// entity (1)
RetsListingUnitEntity,

// upsert (3)
RetsListingUnitUpsertDto,
RetsListingUnitUpsertInputDto,
RetsListingUnitUpsertOutputDto
>;

// ████████ RemoveCrudEngine ████████████████████████████████████████
public declare readonly removeEngine: RemoveCrudEngine<
// entity (1)
RetsListingUnitEntity,

// soft_remove (5)
RetsListingUnitSoftRemoveDto,
RetsListingUnitSoftRemoveInputWhereDto,
RetsListingUnitSoftRemoveInputDto,
RetsListingUnitSoftRemoveOutputAffectedRowsDto,
RetsListingUnitSoftRemoveOutputDto,

// remove (4)
RetsListingUnitRemoveDto,
RetsListingUnitRemoveInputWhereDto,
RetsListingUnitRemoveInputDto,
RetsListingUnitRemoveOutputAffectedRowsDto,
RetsListingUnitRemoveOutputDto,

// recover (5)
RetsListingUnitRecoverDto,
RetsListingUnitRecoverInputWhereDto,
RetsListingUnitRecoverInputDto,
RetsListingUnitRecoverOutputAffectedRowsDto,
RetsListingUnitRecoverOutputDto
>;

// ████████ UploadCrudEngine ████████████████████████████████████████
public declare readonly uploadEngine: UploadCrudEngine<
// entity (1)
RetsListingUnitEntity,

// upload (3)
RetsListingUnitUploadDto,
RetsListingUnitUploadInputDto,
RetsListingUnitUploadOutputDto,

// upload_delete (3)
RetsListingUnitUploadDeleteDto,
RetsListingUnitUploadDeleteInputDto,
RetsListingUnitUploadDeleteOutputDto
>;

constructor(
// data source
protected readonly dataSource: DataSource,

@InjectRepository(RetsListingUnitEntity)
protected readonly repository: Repository<RetsListingUnitEntity>,

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
    RetsListingUnitEntity,
);

this.logService.setContext(RetsListingUnitFactory.name);

// ████████ initialize FindCrudEngine ██████████████████████████████████████
this.initFindEngine
<
// find (8)
RetsListingUnitFindDto,
RetsListingUnitFindInputWhereDto,
RetsListingUnitFindInputSortOrderDto,
RetsListingUnitFindInputGroupByDto,
RetsListingUnitFindInputDto,
RetsListingUnitFindOutputRowsDto,
FindOutputPaginationDto,
RetsListingUnitFindOutputDto,

// find_one_by_id (2)
RetsListingUnitFindOneByIdDto,
RetsListingUnitFindOneByIdInputDto
>
(
// find (8)
RetsListingUnitFindDto,
RetsListingUnitFindInputWhereDto,
RetsListingUnitFindInputSortOrderDto,
RetsListingUnitFindInputGroupByDto,
RetsListingUnitFindInputDto,
RetsListingUnitFindOutputRowsDto,
FindOutputPaginationDto,
RetsListingUnitFindOutputDto,

// find_one_by_id (2)
RetsListingUnitFindOneByIdDto,
RetsListingUnitFindOneByIdInputDto
);


// ████████ initialize CreateCrudEngine ███████████████████████████████████████
this.initCreateEngine
<
// create (3)
RetsListingUnitCreateDto,
RetsListingUnitCreateInputDto,
RetsListingUnitCreateOutputDto
>
(
// create (3)
RetsListingUnitCreateDto,
RetsListingUnitCreateInputDto,
RetsListingUnitCreateOutputDto
);

// ████████ initialize UpdateCrudEngine ████████████████████████████████████████
this.initUpdateEngine
<
// update (6)
RetsListingUnitUpdateDto,
RetsListingUnitUpdateInputWhereDto,
RetsListingUnitUpdateInputSetsDto,
RetsListingUnitUpdateInputDto,
RetsListingUnitUpdateOutputAffectedRowsDto,
RetsListingUnitUpdateOutputDto
>
(
// update (6)
RetsListingUnitUpdateDto,
RetsListingUnitUpdateInputWhereDto,
RetsListingUnitUpdateInputSetsDto,
RetsListingUnitUpdateInputDto,
RetsListingUnitUpdateOutputAffectedRowsDto,
RetsListingUnitUpdateOutputDto
);


// ████████ initialize DeleteCrudEngine ███████████████████████████████████████████
this.initDeleteEngine
<
// soft_delete (4)
RetsListingUnitSoftDeleteDto,
RetsListingUnitSoftDeleteInputWhereDto,
RetsListingUnitSoftDeleteInputDto,
RetsListingUnitSoftDeleteOutputDto,

// delete (4)
RetsListingUnitDeleteDto,
RetsListingUnitDeleteInputWhereDto,
RetsListingUnitDeleteInputDto,
RetsListingUnitDeleteOutputDto,

// restore (4)
RetsListingUnitRestoreDto,
RetsListingUnitRestoreInputWhereDto,
RetsListingUnitRestoreInputDto,
RetsListingUnitRestoreOutputDto
>
(
// soft_delete (4)
RetsListingUnitSoftDeleteDto,
RetsListingUnitSoftDeleteInputWhereDto,
RetsListingUnitSoftDeleteInputDto,
RetsListingUnitSoftDeleteOutputDto,

// delete (4)
RetsListingUnitDeleteDto,
RetsListingUnitDeleteInputWhereDto,
RetsListingUnitDeleteInputDto,
RetsListingUnitDeleteOutputDto,

// restore (4)
RetsListingUnitRestoreDto,
RetsListingUnitRestoreInputWhereDto,
RetsListingUnitRestoreInputDto,
RetsListingUnitRestoreOutputDto
);



// ████████ initialize UpsertCrudEngine ███████████████████████████████████████████
this.initUpsertEngine
<
// upsert (3)
RetsListingUnitUpsertDto,
RetsListingUnitUpsertInputDto,
RetsListingUnitUpsertOutputDto
>
(
// upsert (3)
RetsListingUnitUpsertDto,
RetsListingUnitUpsertInputDto,
RetsListingUnitUpsertOutputDto
);




// ████████ initialize RemoveCrudEngine ███████████████████████████████████████████
this.initRemoveEngine
<
// soft_remove (5)
RetsListingUnitSoftRemoveDto,
RetsListingUnitSoftRemoveInputWhereDto,
RetsListingUnitSoftRemoveInputDto,
RetsListingUnitSoftRemoveOutputAffectedRowsDto,
RetsListingUnitSoftRemoveOutputDto,

// remove (4)
RetsListingUnitRemoveDto,
RetsListingUnitRemoveInputWhereDto,
RetsListingUnitRemoveInputDto,
RetsListingUnitRemoveOutputAffectedRowsDto,
RetsListingUnitRemoveOutputDto,

// recover (5)
RetsListingUnitRecoverDto,
RetsListingUnitRecoverInputWhereDto,
RetsListingUnitRecoverInputDto,
RetsListingUnitRecoverOutputAffectedRowsDto,
RetsListingUnitRecoverOutputDto
>
(
// soft_remove (5)
RetsListingUnitSoftRemoveDto,
RetsListingUnitSoftRemoveInputWhereDto,
RetsListingUnitSoftRemoveInputDto,
RetsListingUnitSoftRemoveOutputAffectedRowsDto,
RetsListingUnitSoftRemoveOutputDto,

// remove (4)
RetsListingUnitRemoveDto,
RetsListingUnitRemoveInputWhereDto,
RetsListingUnitRemoveInputDto,
RetsListingUnitRemoveOutputAffectedRowsDto,
RetsListingUnitRemoveOutputDto,

// recover (5)
RetsListingUnitRecoverDto,
RetsListingUnitRecoverInputWhereDto,
RetsListingUnitRecoverInputDto,
RetsListingUnitRecoverOutputAffectedRowsDto,
RetsListingUnitRecoverOutputDto
);



// ████████ initialize UploadCrudEngine ███████████████████████████████████████████
this.initUploadEngine
<
// upload (3)
RetsListingUnitUploadDto,
RetsListingUnitUploadInputDto,
RetsListingUnitUploadOutputDto,

// upload_delete (3)
RetsListingUnitUploadDeleteDto,
RetsListingUnitUploadDeleteInputDto,
RetsListingUnitUploadDeleteOutputDto
>
(
// upload (3)
RetsListingUnitUploadDto,
RetsListingUnitUploadInputDto,
RetsListingUnitUploadOutputDto,

// upload_delete (3)
RetsListingUnitUploadDeleteDto,
RetsListingUnitUploadDeleteInputDto,
RetsListingUnitUploadDeleteOutputDto
);


// ████████ initialize ImportExportCrudEngine █████████████████████████████████████

}}