import { WebhookResponseDataEntity } from "./entities/response.data.entity";
import { Injectable } from "@nestjs/common";
import { DataSource, Repository } from "typeorm";
import { InjectRepository } from "@nestjs/typeorm";
import { ConfService, CreateCrudEngine, CrudFactory, DataValidationPipe, DeleteCrudEngine, FindCrudEngine, FindOutputPaginationDto, LibraryAppService, LogService, RemoveCrudEngine, UpdateCrudEngine, UploadCrudEngine, UpsertCrudEngine } from "@libs/library-app";
import { SelfGraphqlMicroserviceService } from "@libs/dynamic-app";
import { WebhookResponseDataCreateDto, WebhookResponseDataCreateInputDto, WebhookResponseDataCreateOutputDto, WebhookResponseDataDeleteDto, WebhookResponseDataDeleteInputDto, WebhookResponseDataDeleteInputWhereDto, WebhookResponseDataDeleteOutputDto, WebhookResponseDataFindDto, WebhookResponseDataFindInputDto, WebhookResponseDataFindInputGroupByDto, WebhookResponseDataFindInputSortOrderDto, WebhookResponseDataFindInputWhereDto, WebhookResponseDataFindOneByIdDto, WebhookResponseDataFindOneByIdInputDto, WebhookResponseDataFindOutputDto, WebhookResponseDataFindOutputRowsDto, WebhookResponseDataRecoverDto, WebhookResponseDataRecoverInputDto, WebhookResponseDataRecoverInputWhereDto, WebhookResponseDataRecoverOutputDto, WebhookResponseDataRecoverOutputAffectedRowsDto, WebhookResponseDataRemoveDto, WebhookResponseDataRemoveInputDto, WebhookResponseDataRemoveInputWhereDto, WebhookResponseDataRemoveOutputDto, WebhookResponseDataRemoveOutputAffectedRowsDto, WebhookResponseDataRestoreDto, WebhookResponseDataRestoreInputDto, WebhookResponseDataRestoreInputWhereDto, WebhookResponseDataRestoreOutputDto, WebhookResponseDataSoftDeleteDto, WebhookResponseDataSoftDeleteInputDto, WebhookResponseDataSoftDeleteInputWhereDto, WebhookResponseDataSoftDeleteOutputDto, WebhookResponseDataSoftRemoveDto, WebhookResponseDataSoftRemoveInputDto, WebhookResponseDataSoftRemoveInputWhereDto, WebhookResponseDataSoftRemoveOutputDto, WebhookResponseDataSoftRemoveOutputAffectedRowsDto, WebhookResponseDataUpdateDto, WebhookResponseDataUpdateInputDto, WebhookResponseDataUpdateInputSetsDto, WebhookResponseDataUpdateInputWhereDto, WebhookResponseDataUpdateOutputDto, WebhookResponseDataUpdateOutputAffectedRowsDto, WebhookResponseDataUploadDeleteDto, WebhookResponseDataUploadDeleteInputDto, WebhookResponseDataUploadDeleteOutputDto, WebhookResponseDataUploadDto, WebhookResponseDataUploadInputDto, WebhookResponseDataUploadOutputDto, WebhookResponseDataUpsertDto, WebhookResponseDataUpsertInputDto, WebhookResponseDataUpsertOutputDto } from "./dto/response.data.dto";

@Injectable()
export class WebhookResponseDataFactory extends CrudFactory<WebhookResponseDataEntity> {

// ████████ FindCrudEngine ████████████████████████████████████████
public declare readonly findEngine: FindCrudEngine<
// entity (1)
WebhookResponseDataEntity,

// find (8)
WebhookResponseDataFindDto,
WebhookResponseDataFindInputWhereDto,
WebhookResponseDataFindInputSortOrderDto,
WebhookResponseDataFindInputGroupByDto,
WebhookResponseDataFindInputDto,
WebhookResponseDataFindOutputRowsDto,
FindOutputPaginationDto,
WebhookResponseDataFindOutputDto,

// find_one_by_id (2)
WebhookResponseDataFindOneByIdDto,
WebhookResponseDataFindOneByIdInputDto
>;

// ████████ CreateCrudEngine ████████████████████████████████████████
public declare readonly createEngine: CreateCrudEngine<
// entity (1)
WebhookResponseDataEntity,

// create (3)
WebhookResponseDataCreateDto,
WebhookResponseDataCreateInputDto,
WebhookResponseDataCreateOutputDto
>;

// ████████ UpdateCrudEngine ████████████████████████████████████████
public declare readonly updateEngine: UpdateCrudEngine<
// entity (1)
WebhookResponseDataEntity,

// update (6)
WebhookResponseDataUpdateDto,
WebhookResponseDataUpdateInputWhereDto,
WebhookResponseDataUpdateInputSetsDto,
WebhookResponseDataUpdateInputDto,
WebhookResponseDataUpdateOutputAffectedRowsDto,
WebhookResponseDataUpdateOutputDto
>;

// ████████ DeleteCrudEngine ████████████████████████████████████████
public declare readonly deleteEngine: DeleteCrudEngine<
// entity (1)
WebhookResponseDataEntity,

// soft_delete (4)
WebhookResponseDataSoftDeleteDto,
WebhookResponseDataSoftDeleteInputWhereDto,
WebhookResponseDataSoftDeleteInputDto,
WebhookResponseDataSoftDeleteOutputDto,

// delete (4)
WebhookResponseDataDeleteDto,
WebhookResponseDataDeleteInputWhereDto,
WebhookResponseDataDeleteInputDto,
WebhookResponseDataDeleteOutputDto,

// restore (4)
WebhookResponseDataRestoreDto,
WebhookResponseDataRestoreInputWhereDto,
WebhookResponseDataRestoreInputDto,
WebhookResponseDataRestoreOutputDto
>;

// ████████ UpsertCrudEngine ████████████████████████████████████████
public declare readonly upsertEngine: UpsertCrudEngine<
// entity (1)
WebhookResponseDataEntity,

// upsert (3)
WebhookResponseDataUpsertDto,
WebhookResponseDataUpsertInputDto,
WebhookResponseDataUpsertOutputDto
>;

// ████████ RemoveCrudEngine ████████████████████████████████████████
public declare readonly removeEngine: RemoveCrudEngine<
// entity (1)
WebhookResponseDataEntity,

// soft_remove (5)
WebhookResponseDataSoftRemoveDto,
WebhookResponseDataSoftRemoveInputWhereDto,
WebhookResponseDataSoftRemoveInputDto,
WebhookResponseDataSoftRemoveOutputAffectedRowsDto,
WebhookResponseDataSoftRemoveOutputDto,

// remove (4)
WebhookResponseDataRemoveDto,
WebhookResponseDataRemoveInputWhereDto,
WebhookResponseDataRemoveInputDto,
WebhookResponseDataRemoveOutputAffectedRowsDto,
WebhookResponseDataRemoveOutputDto,

// recover (5)
WebhookResponseDataRecoverDto,
WebhookResponseDataRecoverInputWhereDto,
WebhookResponseDataRecoverInputDto,
WebhookResponseDataRecoverOutputAffectedRowsDto,
WebhookResponseDataRecoverOutputDto
>;

// ████████ UploadCrudEngine ████████████████████████████████████████
public declare readonly uploadEngine: UploadCrudEngine<
// entity (1)
WebhookResponseDataEntity,

// upload (3)
WebhookResponseDataUploadDto,
WebhookResponseDataUploadInputDto,
WebhookResponseDataUploadOutputDto,

// upload_delete (3)
WebhookResponseDataUploadDeleteDto,
WebhookResponseDataUploadDeleteInputDto,
WebhookResponseDataUploadDeleteOutputDto
>;

constructor(
// data source
protected readonly dataSource: DataSource,

@InjectRepository(WebhookResponseDataEntity)
protected readonly repository: Repository<WebhookResponseDataEntity>,

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
    WebhookResponseDataEntity
);

this.logService.setContext(WebhookResponseDataFactory.name);

// ████████ initialize FindCrudEngine ██████████████████████████████████████
this.initFindEngine
<
// find (8)
WebhookResponseDataFindDto,
WebhookResponseDataFindInputWhereDto,
WebhookResponseDataFindInputSortOrderDto,
WebhookResponseDataFindInputGroupByDto,
WebhookResponseDataFindInputDto,
WebhookResponseDataFindOutputRowsDto,
FindOutputPaginationDto,
WebhookResponseDataFindOutputDto,

// find_one_by_id (2)
WebhookResponseDataFindOneByIdDto,
WebhookResponseDataFindOneByIdInputDto
>
(
// find (8)
WebhookResponseDataFindDto,
WebhookResponseDataFindInputWhereDto,
WebhookResponseDataFindInputSortOrderDto,
WebhookResponseDataFindInputGroupByDto,
WebhookResponseDataFindInputDto,
WebhookResponseDataFindOutputRowsDto,
FindOutputPaginationDto,
WebhookResponseDataFindOutputDto,

// find_one_by_id (2)
WebhookResponseDataFindOneByIdDto,
WebhookResponseDataFindOneByIdInputDto
);


// ████████ initialize CreateCrudEngine ███████████████████████████████████████
this.initCreateEngine
<
// create (3)
WebhookResponseDataCreateDto,
WebhookResponseDataCreateInputDto,
WebhookResponseDataCreateOutputDto
>
(
// create (3)
WebhookResponseDataCreateDto,
WebhookResponseDataCreateInputDto,
WebhookResponseDataCreateOutputDto
);

// ████████ initialize UpdateCrudEngine ████████████████████████████████████████
this.initUpdateEngine
<
// update (6)
WebhookResponseDataUpdateDto,
WebhookResponseDataUpdateInputWhereDto,
WebhookResponseDataUpdateInputSetsDto,
WebhookResponseDataUpdateInputDto,
WebhookResponseDataUpdateOutputAffectedRowsDto,
WebhookResponseDataUpdateOutputDto
>
(
// update (6)
WebhookResponseDataUpdateDto,
WebhookResponseDataUpdateInputWhereDto,
WebhookResponseDataUpdateInputSetsDto,
WebhookResponseDataUpdateInputDto,
WebhookResponseDataUpdateOutputAffectedRowsDto,
WebhookResponseDataUpdateOutputDto
);


// ████████ initialize DeleteCrudEngine ███████████████████████████████████████████
this.initDeleteEngine
<
// soft_delete (4)
WebhookResponseDataSoftDeleteDto,
WebhookResponseDataSoftDeleteInputWhereDto,
WebhookResponseDataSoftDeleteInputDto,
WebhookResponseDataSoftDeleteOutputDto,

// delete (4)
WebhookResponseDataDeleteDto,
WebhookResponseDataDeleteInputWhereDto,
WebhookResponseDataDeleteInputDto,
WebhookResponseDataDeleteOutputDto,

// restore (4)
WebhookResponseDataRestoreDto,
WebhookResponseDataRestoreInputWhereDto,
WebhookResponseDataRestoreInputDto,
WebhookResponseDataRestoreOutputDto
>
(
// soft_delete (4)
WebhookResponseDataSoftDeleteDto,
WebhookResponseDataSoftDeleteInputWhereDto,
WebhookResponseDataSoftDeleteInputDto,
WebhookResponseDataSoftDeleteOutputDto,

// delete (4)
WebhookResponseDataDeleteDto,
WebhookResponseDataDeleteInputWhereDto,
WebhookResponseDataDeleteInputDto,
WebhookResponseDataDeleteOutputDto,

// restore (4)
WebhookResponseDataRestoreDto,
WebhookResponseDataRestoreInputWhereDto,
WebhookResponseDataRestoreInputDto,
WebhookResponseDataRestoreOutputDto
);



// ████████ initialize UpsertCrudEngine ███████████████████████████████████████████
this.initUpsertEngine
<
// upsert (3)
WebhookResponseDataUpsertDto,
WebhookResponseDataUpsertInputDto,
WebhookResponseDataUpsertOutputDto
>
(
// upsert (3)
WebhookResponseDataUpsertDto,
WebhookResponseDataUpsertInputDto,
WebhookResponseDataUpsertOutputDto
);




// ████████ initialize RemoveCrudEngine ███████████████████████████████████████████
this.initRemoveEngine
<
// soft_remove (5)
WebhookResponseDataSoftRemoveDto,
WebhookResponseDataSoftRemoveInputWhereDto,
WebhookResponseDataSoftRemoveInputDto,
WebhookResponseDataSoftRemoveOutputAffectedRowsDto,
WebhookResponseDataSoftRemoveOutputDto,

// remove (4)
WebhookResponseDataRemoveDto,
WebhookResponseDataRemoveInputWhereDto,
WebhookResponseDataRemoveInputDto,
WebhookResponseDataRemoveOutputAffectedRowsDto,
WebhookResponseDataRemoveOutputDto,

// recover (5)
WebhookResponseDataRecoverDto,
WebhookResponseDataRecoverInputWhereDto,
WebhookResponseDataRecoverInputDto,
WebhookResponseDataRecoverOutputAffectedRowsDto,
WebhookResponseDataRecoverOutputDto
>
(
// soft_remove (5)
WebhookResponseDataSoftRemoveDto,
WebhookResponseDataSoftRemoveInputWhereDto,
WebhookResponseDataSoftRemoveInputDto,
WebhookResponseDataSoftRemoveOutputAffectedRowsDto,
WebhookResponseDataSoftRemoveOutputDto,

// remove (4)
WebhookResponseDataRemoveDto,
WebhookResponseDataRemoveInputWhereDto,
WebhookResponseDataRemoveInputDto,
WebhookResponseDataRemoveOutputAffectedRowsDto,
WebhookResponseDataRemoveOutputDto,

// recover (5)
WebhookResponseDataRecoverDto,
WebhookResponseDataRecoverInputWhereDto,
WebhookResponseDataRecoverInputDto,
WebhookResponseDataRecoverOutputAffectedRowsDto,
WebhookResponseDataRecoverOutputDto
);



// ████████ initialize UploadCrudEngine ███████████████████████████████████████████
this.initUploadEngine
<
// upload (3)
WebhookResponseDataUploadDto,
WebhookResponseDataUploadInputDto,
WebhookResponseDataUploadOutputDto,

// upload_delete (3)
WebhookResponseDataUploadDeleteDto,
WebhookResponseDataUploadDeleteInputDto,
WebhookResponseDataUploadDeleteOutputDto
>
(
// upload (3)
WebhookResponseDataUploadDto,
WebhookResponseDataUploadInputDto,
WebhookResponseDataUploadOutputDto,

// upload_delete (3)
WebhookResponseDataUploadDeleteDto,
WebhookResponseDataUploadDeleteInputDto,
WebhookResponseDataUploadDeleteOutputDto
);


// ████████ initialize ImportExportCrudEngine █████████████████████████████████████

}

}