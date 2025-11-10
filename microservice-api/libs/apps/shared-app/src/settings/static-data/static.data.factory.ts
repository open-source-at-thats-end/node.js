import { StaticDataEntity } from "./entities/static.data.entity";
import { Injectable } from "@nestjs/common";
import { DataSource, Repository } from "typeorm";
import { InjectRepository } from "@nestjs/typeorm";
import { ConfService, CreateCrudEngine, CrudFactory, DataValidationPipe, DeleteCrudEngine, FindCrudEngine, FindOutputPaginationDto, LibraryAppService, LogService, RemoveCrudEngine, UpdateCrudEngine, UploadCrudEngine, UpsertCrudEngine } from "@libs/library-app";
import { SelfGraphqlMicroserviceService } from "@libs/dynamic-app";
import { StaticDataCreateDto, StaticDataCreateInputDto, StaticDataCreateOutputDto, StaticDataDeleteDto, StaticDataDeleteInputDto, StaticDataDeleteInputWhereDto, StaticDataDeleteOutputDto, StaticDataFindDto, StaticDataFindInputDto, StaticDataFindInputGroupByDto, StaticDataFindInputSortOrderDto, StaticDataFindInputWhereDto, StaticDataFindOneByIdDto, StaticDataFindOneByIdInputDto, StaticDataFindOutputDto, StaticDataFindOutputRowsDto, StaticDataRecoverDto, StaticDataRecoverInputDto, StaticDataRecoverInputWhereDto, StaticDataRecoverOutputDto, StaticDataRecoverOutputAffectedRowsDto, StaticDataRemoveDto, StaticDataRemoveInputDto, StaticDataRemoveInputWhereDto, StaticDataRemoveOutputDto, StaticDataRemoveOutputAffectedRowsDto, StaticDataRestoreDto, StaticDataRestoreInputDto, StaticDataRestoreInputWhereDto, StaticDataRestoreOutputDto, StaticDataSoftDeleteDto, StaticDataSoftDeleteInputDto, StaticDataSoftDeleteInputWhereDto, StaticDataSoftDeleteOutputDto, StaticDataSoftRemoveDto, StaticDataSoftRemoveInputDto, StaticDataSoftRemoveInputWhereDto, StaticDataSoftRemoveOutputDto, StaticDataSoftRemoveOutputAffectedRowsDto, StaticDataUpdateDto, StaticDataUpdateInputDto, StaticDataUpdateInputSetsDto, StaticDataUpdateInputWhereDto, StaticDataUpdateOutputDto, StaticDataUpdateOutputAffectedRowsDto, StaticDataUploadDeleteDto, StaticDataUploadDeleteInputDto, StaticDataUploadDeleteOutputDto, StaticDataUploadDto, StaticDataUploadInputDto, StaticDataUploadOutputDto, StaticDataUpsertDto, StaticDataUpsertInputDto, StaticDataUpsertOutputDto } from "./dto/static.data.dto";

@Injectable()
export class StaticDataFactory extends CrudFactory<StaticDataEntity> {

// ████████ FindCrudEngine ████████████████████████████████████████
public declare readonly findEngine: FindCrudEngine<
// entity (1)
StaticDataEntity,

// find (8)
StaticDataFindDto,
StaticDataFindInputWhereDto,
StaticDataFindInputSortOrderDto,
StaticDataFindInputGroupByDto,
StaticDataFindInputDto,
StaticDataFindOutputRowsDto,
FindOutputPaginationDto,
StaticDataFindOutputDto,

// find_one_by_id (2)
StaticDataFindOneByIdDto,
StaticDataFindOneByIdInputDto
>;

// ████████ CreateCrudEngine ████████████████████████████████████████
public declare readonly createEngine: CreateCrudEngine<
// entity (1)
StaticDataEntity,

// create (3)
StaticDataCreateDto,
StaticDataCreateInputDto,
StaticDataCreateOutputDto
>;

// ████████ UpdateCrudEngine ████████████████████████████████████████
public declare readonly updateEngine: UpdateCrudEngine<
// entity (1)
StaticDataEntity,

// update (6)
StaticDataUpdateDto,
StaticDataUpdateInputWhereDto,
StaticDataUpdateInputSetsDto,
StaticDataUpdateInputDto,
StaticDataUpdateOutputAffectedRowsDto,
StaticDataUpdateOutputDto
>;

// ████████ DeleteCrudEngine ████████████████████████████████████████
public declare readonly deleteEngine: DeleteCrudEngine<
// entity (1)
StaticDataEntity,

// soft_delete (4)
StaticDataSoftDeleteDto,
StaticDataSoftDeleteInputWhereDto,
StaticDataSoftDeleteInputDto,
StaticDataSoftDeleteOutputDto,

// delete (4)
StaticDataDeleteDto,
StaticDataDeleteInputWhereDto,
StaticDataDeleteInputDto,
StaticDataDeleteOutputDto,

// restore (4)
StaticDataRestoreDto,
StaticDataRestoreInputWhereDto,
StaticDataRestoreInputDto,
StaticDataRestoreOutputDto
>;

// ████████ UpsertCrudEngine ████████████████████████████████████████
public declare readonly upsertEngine: UpsertCrudEngine<
// entity (1)
StaticDataEntity,

// upsert (3)
StaticDataUpsertDto,
StaticDataUpsertInputDto,
StaticDataUpsertOutputDto
>;

// ████████ RemoveCrudEngine ████████████████████████████████████████
public declare readonly removeEngine: RemoveCrudEngine<
// entity (1)
StaticDataEntity,

// soft_remove (5)
StaticDataSoftRemoveDto,
StaticDataSoftRemoveInputWhereDto,
StaticDataSoftRemoveInputDto,
StaticDataSoftRemoveOutputAffectedRowsDto,
StaticDataSoftRemoveOutputDto,

// remove (4)
StaticDataRemoveDto,
StaticDataRemoveInputWhereDto,
StaticDataRemoveInputDto,
StaticDataRemoveOutputAffectedRowsDto,
StaticDataRemoveOutputDto,

// recover (5)
StaticDataRecoverDto,
StaticDataRecoverInputWhereDto,
StaticDataRecoverInputDto,
StaticDataRecoverOutputAffectedRowsDto,
StaticDataRecoverOutputDto
>;

// ████████ UploadCrudEngine ████████████████████████████████████████
public declare readonly uploadEngine: UploadCrudEngine<
// entity (1)
StaticDataEntity,

// upload (3)
StaticDataUploadDto,
StaticDataUploadInputDto,
StaticDataUploadOutputDto,

// upload_delete (3)
StaticDataUploadDeleteDto,
StaticDataUploadDeleteInputDto,
StaticDataUploadDeleteOutputDto
>;

constructor(
// data source
protected readonly dataSource: DataSource,

@InjectRepository(StaticDataEntity)
protected readonly repository: Repository<StaticDataEntity>,

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
    StaticDataEntity,
);

this.logService.setContext(StaticDataFactory.name);

// ████████ initialize FindCrudEngine ██████████████████████████████████████
this.initFindEngine
<
// find (8)
StaticDataFindDto,
StaticDataFindInputWhereDto,
StaticDataFindInputSortOrderDto,
StaticDataFindInputGroupByDto,
StaticDataFindInputDto,
StaticDataFindOutputRowsDto,
FindOutputPaginationDto,
StaticDataFindOutputDto,

// find_one_by_id (2)
StaticDataFindOneByIdDto,
StaticDataFindOneByIdInputDto
>
(
// find (8)
StaticDataFindDto,
StaticDataFindInputWhereDto,
StaticDataFindInputSortOrderDto,
StaticDataFindInputGroupByDto,
StaticDataFindInputDto,
StaticDataFindOutputRowsDto,
FindOutputPaginationDto,
StaticDataFindOutputDto,

// find_one_by_id (2)
StaticDataFindOneByIdDto,
StaticDataFindOneByIdInputDto
);


// ████████ initialize CreateCrudEngine ███████████████████████████████████████
this.initCreateEngine
<
// create (3)
StaticDataCreateDto,
StaticDataCreateInputDto,
StaticDataCreateOutputDto
>
(
// create (3)
StaticDataCreateDto,
StaticDataCreateInputDto,
StaticDataCreateOutputDto
);

// ████████ initialize UpdateCrudEngine ████████████████████████████████████████
this.initUpdateEngine
<
// update (6)
StaticDataUpdateDto,
StaticDataUpdateInputWhereDto,
StaticDataUpdateInputSetsDto,
StaticDataUpdateInputDto,
StaticDataUpdateOutputAffectedRowsDto,
StaticDataUpdateOutputDto
>
(
// update (6)
StaticDataUpdateDto,
StaticDataUpdateInputWhereDto,
StaticDataUpdateInputSetsDto,
StaticDataUpdateInputDto,
StaticDataUpdateOutputAffectedRowsDto,
StaticDataUpdateOutputDto
);


// ████████ initialize DeleteCrudEngine ███████████████████████████████████████████
this.initDeleteEngine
<
// soft_delete (4)
StaticDataSoftDeleteDto,
StaticDataSoftDeleteInputWhereDto,
StaticDataSoftDeleteInputDto,
StaticDataSoftDeleteOutputDto,

// delete (4)
StaticDataDeleteDto,
StaticDataDeleteInputWhereDto,
StaticDataDeleteInputDto,
StaticDataDeleteOutputDto,

// restore (4)
StaticDataRestoreDto,
StaticDataRestoreInputWhereDto,
StaticDataRestoreInputDto,
StaticDataRestoreOutputDto
>
(
// soft_delete (4)
StaticDataSoftDeleteDto,
StaticDataSoftDeleteInputWhereDto,
StaticDataSoftDeleteInputDto,
StaticDataSoftDeleteOutputDto,

// delete (4)
StaticDataDeleteDto,
StaticDataDeleteInputWhereDto,
StaticDataDeleteInputDto,
StaticDataDeleteOutputDto,

// restore (4)
StaticDataRestoreDto,
StaticDataRestoreInputWhereDto,
StaticDataRestoreInputDto,
StaticDataRestoreOutputDto
);



// ████████ initialize UpsertCrudEngine ███████████████████████████████████████████
this.initUpsertEngine
<
// upsert (3)
StaticDataUpsertDto,
StaticDataUpsertInputDto,
StaticDataUpsertOutputDto
>
(
// upsert (3)
StaticDataUpsertDto,
StaticDataUpsertInputDto,
StaticDataUpsertOutputDto
);




// ████████ initialize RemoveCrudEngine ███████████████████████████████████████████
this.initRemoveEngine
<
// soft_remove (5)
StaticDataSoftRemoveDto,
StaticDataSoftRemoveInputWhereDto,
StaticDataSoftRemoveInputDto,
StaticDataSoftRemoveOutputAffectedRowsDto,
StaticDataSoftRemoveOutputDto,

// remove (4)
StaticDataRemoveDto,
StaticDataRemoveInputWhereDto,
StaticDataRemoveInputDto,
StaticDataRemoveOutputAffectedRowsDto,
StaticDataRemoveOutputDto,

// recover (5)
StaticDataRecoverDto,
StaticDataRecoverInputWhereDto,
StaticDataRecoverInputDto,
StaticDataRecoverOutputAffectedRowsDto,
StaticDataRecoverOutputDto
>
(
// soft_remove (5)
StaticDataSoftRemoveDto,
StaticDataSoftRemoveInputWhereDto,
StaticDataSoftRemoveInputDto,
StaticDataSoftRemoveOutputAffectedRowsDto,
StaticDataSoftRemoveOutputDto,

// remove (4)
StaticDataRemoveDto,
StaticDataRemoveInputWhereDto,
StaticDataRemoveInputDto,
StaticDataRemoveOutputAffectedRowsDto,
StaticDataRemoveOutputDto,

// recover (5)
StaticDataRecoverDto,
StaticDataRecoverInputWhereDto,
StaticDataRecoverInputDto,
StaticDataRecoverOutputAffectedRowsDto,
StaticDataRecoverOutputDto
);



// ████████ initialize UploadCrudEngine ███████████████████████████████████████████
this.initUploadEngine
<
// upload (3)
StaticDataUploadDto,
StaticDataUploadInputDto,
StaticDataUploadOutputDto,

// upload_delete (3)
StaticDataUploadDeleteDto,
StaticDataUploadDeleteInputDto,
StaticDataUploadDeleteOutputDto
>
(
// upload (3)
StaticDataUploadDto,
StaticDataUploadInputDto,
StaticDataUploadOutputDto,

// upload_delete (3)
StaticDataUploadDeleteDto,
StaticDataUploadDeleteInputDto,
StaticDataUploadDeleteOutputDto
);


// ████████ initialize ImportExportCrudEngine █████████████████████████████████████

}

}