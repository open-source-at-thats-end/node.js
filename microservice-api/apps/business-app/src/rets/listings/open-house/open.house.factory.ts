import { RetsListingOpenHouseEntity } from "./entities/open.house.entity";
import { Injectable } from "@nestjs/common";
import { DataSource, Repository } from "typeorm";
import { InjectRepository } from "@nestjs/typeorm";
import { ConfService, CreateCrudEngine, CrudFactory, DataValidationPipe, DeleteCrudEngine, FindCrudEngine, FindOutputPaginationDto, LibraryAppService, LogService, RemoveCrudEngine, UpdateCrudEngine, UploadCrudEngine, UpsertCrudEngine  } from "@libs/library-app";
import { RetsListingOpenHouseCreateDto, RetsListingOpenHouseCreateInputDto, RetsListingOpenHouseCreateOutputDto, RetsListingOpenHouseDeleteDto, RetsListingOpenHouseDeleteInputDto, RetsListingOpenHouseDeleteInputWhereDto, RetsListingOpenHouseDeleteOutputDto, RetsListingOpenHouseFindDto, RetsListingOpenHouseFindInputDto, RetsListingOpenHouseFindInputGroupByDto, RetsListingOpenHouseFindInputSortOrderDto, RetsListingOpenHouseFindInputWhereDto, RetsListingOpenHouseFindOneByIdDto, RetsListingOpenHouseFindOneByIdInputDto, RetsListingOpenHouseFindOutputDto, RetsListingOpenHouseFindOutputRowsDto, RetsListingOpenHouseRecoverDto, RetsListingOpenHouseRecoverInputDto, RetsListingOpenHouseRecoverInputWhereDto, RetsListingOpenHouseRecoverOutputDto, RetsListingOpenHouseRecoverOutputAffectedRowsDto, RetsListingOpenHouseRemoveDto, RetsListingOpenHouseRemoveInputDto, RetsListingOpenHouseRemoveInputWhereDto, RetsListingOpenHouseRemoveOutputDto, RetsListingOpenHouseRemoveOutputAffectedRowsDto, RetsListingOpenHouseRestoreDto, RetsListingOpenHouseRestoreInputDto, RetsListingOpenHouseRestoreInputWhereDto, RetsListingOpenHouseRestoreOutputDto, RetsListingOpenHouseSoftDeleteDto, RetsListingOpenHouseSoftDeleteInputDto, RetsListingOpenHouseSoftDeleteInputWhereDto, RetsListingOpenHouseSoftDeleteOutputDto, RetsListingOpenHouseSoftRemoveDto, RetsListingOpenHouseSoftRemoveInputDto, RetsListingOpenHouseSoftRemoveInputWhereDto, RetsListingOpenHouseSoftRemoveOutputDto, RetsListingOpenHouseSoftRemoveOutputAffectedRowsDto, RetsListingOpenHouseUpdateDto, RetsListingOpenHouseUpdateInputDto, RetsListingOpenHouseUpdateInputSetsDto, RetsListingOpenHouseUpdateInputWhereDto, RetsListingOpenHouseUpdateOutputDto, RetsListingOpenHouseUpdateOutputAffectedRowsDto, RetsListingOpenHouseUploadDeleteDto, RetsListingOpenHouseUploadDeleteInputDto, RetsListingOpenHouseUploadDeleteOutputDto, RetsListingOpenHouseUploadDto, RetsListingOpenHouseUploadInputDto, RetsListingOpenHouseUploadOutputDto, RetsListingOpenHouseUpsertDto, RetsListingOpenHouseUpsertInputDto, RetsListingOpenHouseUpsertOutputDto } from "./dto/open.house.dto";
import { SelfGraphqlMicroserviceService } from "@libs/dynamic-app";

@Injectable()
export class RetsListingOpenHouseFactory extends CrudFactory<RetsListingOpenHouseEntity> {

// ████████ FindCrudEngine ████████████████████████████████████████
public declare readonly findEngine: FindCrudEngine<
// entity (1)
RetsListingOpenHouseEntity,

// find (8)
RetsListingOpenHouseFindDto,
RetsListingOpenHouseFindInputWhereDto,
RetsListingOpenHouseFindInputSortOrderDto,
RetsListingOpenHouseFindInputGroupByDto,
RetsListingOpenHouseFindInputDto,
RetsListingOpenHouseFindOutputRowsDto,
FindOutputPaginationDto,
RetsListingOpenHouseFindOutputDto,

// find_one_by_id (2)
RetsListingOpenHouseFindOneByIdDto,
RetsListingOpenHouseFindOneByIdInputDto
>;

// ████████ CreateCrudEngine ████████████████████████████████████████
public declare readonly createEngine: CreateCrudEngine<
// entity (1)
RetsListingOpenHouseEntity,

// create (3)
RetsListingOpenHouseCreateDto,
RetsListingOpenHouseCreateInputDto,
RetsListingOpenHouseCreateOutputDto
>;

// ████████ UpdateCrudEngine ████████████████████████████████████████
public declare readonly updateEngine: UpdateCrudEngine<
// entity (1)
RetsListingOpenHouseEntity,

// update (6)
RetsListingOpenHouseUpdateDto,
RetsListingOpenHouseUpdateInputWhereDto,
RetsListingOpenHouseUpdateInputSetsDto,
RetsListingOpenHouseUpdateInputDto,
RetsListingOpenHouseUpdateOutputAffectedRowsDto,
RetsListingOpenHouseUpdateOutputDto
>;

// ████████ DeleteCrudEngine ████████████████████████████████████████
public declare readonly deleteEngine: DeleteCrudEngine<
// entity (1)
RetsListingOpenHouseEntity,

// soft_delete (4)
RetsListingOpenHouseSoftDeleteDto,
RetsListingOpenHouseSoftDeleteInputWhereDto,
RetsListingOpenHouseSoftDeleteInputDto,
RetsListingOpenHouseSoftDeleteOutputDto,

// delete (4)
RetsListingOpenHouseDeleteDto,
RetsListingOpenHouseDeleteInputWhereDto,
RetsListingOpenHouseDeleteInputDto,
RetsListingOpenHouseDeleteOutputDto,

// restore (4)
RetsListingOpenHouseRestoreDto,
RetsListingOpenHouseRestoreInputWhereDto,
RetsListingOpenHouseRestoreInputDto,
RetsListingOpenHouseRestoreOutputDto
>;

// ████████ UpsertCrudEngine ████████████████████████████████████████
public declare readonly upsertEngine: UpsertCrudEngine<
// entity (1)
RetsListingOpenHouseEntity,

// upsert (3)
RetsListingOpenHouseUpsertDto,
RetsListingOpenHouseUpsertInputDto,
RetsListingOpenHouseUpsertOutputDto
>;

// ████████ RemoveCrudEngine ████████████████████████████████████████
public declare readonly removeEngine: RemoveCrudEngine<
// entity (1)
RetsListingOpenHouseEntity,

// soft_remove (5)
RetsListingOpenHouseSoftRemoveDto,
RetsListingOpenHouseSoftRemoveInputWhereDto,
RetsListingOpenHouseSoftRemoveInputDto,
RetsListingOpenHouseSoftRemoveOutputAffectedRowsDto,
RetsListingOpenHouseSoftRemoveOutputDto,

// remove (4)
RetsListingOpenHouseRemoveDto,
RetsListingOpenHouseRemoveInputWhereDto,
RetsListingOpenHouseRemoveInputDto,
RetsListingOpenHouseRemoveOutputAffectedRowsDto,
RetsListingOpenHouseRemoveOutputDto,

// recover (5)
RetsListingOpenHouseRecoverDto,
RetsListingOpenHouseRecoverInputWhereDto,
RetsListingOpenHouseRecoverInputDto,
RetsListingOpenHouseRecoverOutputAffectedRowsDto,
RetsListingOpenHouseRecoverOutputDto
>;

// ████████ UploadCrudEngine ████████████████████████████████████████
public declare readonly uploadEngine: UploadCrudEngine<
// entity (1)
RetsListingOpenHouseEntity,

// upload (3)
RetsListingOpenHouseUploadDto,
RetsListingOpenHouseUploadInputDto,
RetsListingOpenHouseUploadOutputDto,

// upload_delete (3)
RetsListingOpenHouseUploadDeleteDto,
RetsListingOpenHouseUploadDeleteInputDto,
RetsListingOpenHouseUploadDeleteOutputDto
>;

constructor(
// data source
protected readonly dataSource: DataSource,

@InjectRepository(RetsListingOpenHouseEntity)
protected readonly repository: Repository<RetsListingOpenHouseEntity>,

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
    RetsListingOpenHouseEntity,
);

this.logService.setContext(RetsListingOpenHouseFactory.name);

// ████████ initialize FindCrudEngine ██████████████████████████████████████
this.initFindEngine
<
// find (8)
RetsListingOpenHouseFindDto,
RetsListingOpenHouseFindInputWhereDto,
RetsListingOpenHouseFindInputSortOrderDto,
RetsListingOpenHouseFindInputGroupByDto,
RetsListingOpenHouseFindInputDto,
RetsListingOpenHouseFindOutputRowsDto,
FindOutputPaginationDto,
RetsListingOpenHouseFindOutputDto,

// find_one_by_id (2)
RetsListingOpenHouseFindOneByIdDto,
RetsListingOpenHouseFindOneByIdInputDto
>
(
// find (8)
RetsListingOpenHouseFindDto,
RetsListingOpenHouseFindInputWhereDto,
RetsListingOpenHouseFindInputSortOrderDto,
RetsListingOpenHouseFindInputGroupByDto,
RetsListingOpenHouseFindInputDto,
RetsListingOpenHouseFindOutputRowsDto,
FindOutputPaginationDto,
RetsListingOpenHouseFindOutputDto,

// find_one_by_id (2)
RetsListingOpenHouseFindOneByIdDto,
RetsListingOpenHouseFindOneByIdInputDto
);


// ████████ initialize CreateCrudEngine ███████████████████████████████████████
this.initCreateEngine
<
// create (3)
RetsListingOpenHouseCreateDto,
RetsListingOpenHouseCreateInputDto,
RetsListingOpenHouseCreateOutputDto
>
(
// create (3)
RetsListingOpenHouseCreateDto,
RetsListingOpenHouseCreateInputDto,
RetsListingOpenHouseCreateOutputDto
);

// ████████ initialize UpdateCrudEngine ████████████████████████████████████████
this.initUpdateEngine
<
// update (6)
RetsListingOpenHouseUpdateDto,
RetsListingOpenHouseUpdateInputWhereDto,
RetsListingOpenHouseUpdateInputSetsDto,
RetsListingOpenHouseUpdateInputDto,
RetsListingOpenHouseUpdateOutputAffectedRowsDto,
RetsListingOpenHouseUpdateOutputDto
>
(
// update (6)
RetsListingOpenHouseUpdateDto,
RetsListingOpenHouseUpdateInputWhereDto,
RetsListingOpenHouseUpdateInputSetsDto,
RetsListingOpenHouseUpdateInputDto,
RetsListingOpenHouseUpdateOutputAffectedRowsDto,
RetsListingOpenHouseUpdateOutputDto
);


// ████████ initialize DeleteCrudEngine ███████████████████████████████████████████
this.initDeleteEngine
<
// soft_delete (4)
RetsListingOpenHouseSoftDeleteDto,
RetsListingOpenHouseSoftDeleteInputWhereDto,
RetsListingOpenHouseSoftDeleteInputDto,
RetsListingOpenHouseSoftDeleteOutputDto,

// delete (4)
RetsListingOpenHouseDeleteDto,
RetsListingOpenHouseDeleteInputWhereDto,
RetsListingOpenHouseDeleteInputDto,
RetsListingOpenHouseDeleteOutputDto,

// restore (4)
RetsListingOpenHouseRestoreDto,
RetsListingOpenHouseRestoreInputWhereDto,
RetsListingOpenHouseRestoreInputDto,
RetsListingOpenHouseRestoreOutputDto
>
(
// soft_delete (4)
RetsListingOpenHouseSoftDeleteDto,
RetsListingOpenHouseSoftDeleteInputWhereDto,
RetsListingOpenHouseSoftDeleteInputDto,
RetsListingOpenHouseSoftDeleteOutputDto,

// delete (4)
RetsListingOpenHouseDeleteDto,
RetsListingOpenHouseDeleteInputWhereDto,
RetsListingOpenHouseDeleteInputDto,
RetsListingOpenHouseDeleteOutputDto,

// restore (4)
RetsListingOpenHouseRestoreDto,
RetsListingOpenHouseRestoreInputWhereDto,
RetsListingOpenHouseRestoreInputDto,
RetsListingOpenHouseRestoreOutputDto
);



// ████████ initialize UpsertCrudEngine ███████████████████████████████████████████
this.initUpsertEngine
<
// upsert (3)
RetsListingOpenHouseUpsertDto,
RetsListingOpenHouseUpsertInputDto,
RetsListingOpenHouseUpsertOutputDto
>
(
// upsert (3)
RetsListingOpenHouseUpsertDto,
RetsListingOpenHouseUpsertInputDto,
RetsListingOpenHouseUpsertOutputDto
);




// ████████ initialize RemoveCrudEngine ███████████████████████████████████████████
this.initRemoveEngine
<
// soft_remove (5)
RetsListingOpenHouseSoftRemoveDto,
RetsListingOpenHouseSoftRemoveInputWhereDto,
RetsListingOpenHouseSoftRemoveInputDto,
RetsListingOpenHouseSoftRemoveOutputAffectedRowsDto,
RetsListingOpenHouseSoftRemoveOutputDto,

// remove (4)
RetsListingOpenHouseRemoveDto,
RetsListingOpenHouseRemoveInputWhereDto,
RetsListingOpenHouseRemoveInputDto,
RetsListingOpenHouseRemoveOutputAffectedRowsDto,
RetsListingOpenHouseRemoveOutputDto,

// recover (5)
RetsListingOpenHouseRecoverDto,
RetsListingOpenHouseRecoverInputWhereDto,
RetsListingOpenHouseRecoverInputDto,
RetsListingOpenHouseRecoverOutputAffectedRowsDto,
RetsListingOpenHouseRecoverOutputDto
>
(
// soft_remove (5)
RetsListingOpenHouseSoftRemoveDto,
RetsListingOpenHouseSoftRemoveInputWhereDto,
RetsListingOpenHouseSoftRemoveInputDto,
RetsListingOpenHouseSoftRemoveOutputAffectedRowsDto,
RetsListingOpenHouseSoftRemoveOutputDto,

// remove (4)
RetsListingOpenHouseRemoveDto,
RetsListingOpenHouseRemoveInputWhereDto,
RetsListingOpenHouseRemoveInputDto,
RetsListingOpenHouseRemoveOutputAffectedRowsDto,
RetsListingOpenHouseRemoveOutputDto,

// recover (5)
RetsListingOpenHouseRecoverDto,
RetsListingOpenHouseRecoverInputWhereDto,
RetsListingOpenHouseRecoverInputDto,
RetsListingOpenHouseRecoverOutputAffectedRowsDto,
RetsListingOpenHouseRecoverOutputDto
);



// ████████ initialize UploadCrudEngine ███████████████████████████████████████████
this.initUploadEngine
<
// upload (3)
RetsListingOpenHouseUploadDto,
RetsListingOpenHouseUploadInputDto,
RetsListingOpenHouseUploadOutputDto,

// upload_delete (3)
RetsListingOpenHouseUploadDeleteDto,
RetsListingOpenHouseUploadDeleteInputDto,
RetsListingOpenHouseUploadDeleteOutputDto
>
(
// upload (3)
RetsListingOpenHouseUploadDto,
RetsListingOpenHouseUploadInputDto,
RetsListingOpenHouseUploadOutputDto,

// upload_delete (3)
RetsListingOpenHouseUploadDeleteDto,
RetsListingOpenHouseUploadDeleteInputDto,
RetsListingOpenHouseUploadDeleteOutputDto
);


// ████████ initialize ImportExportCrudEngine █████████████████████████████████████

}}