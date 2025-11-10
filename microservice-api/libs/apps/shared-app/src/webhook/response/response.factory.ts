import { WebhookResponseEntity } from "./entities/response.entity";
import { Injectable } from "@nestjs/common";
import { DataSource, Repository } from "typeorm";
import { InjectRepository } from "@nestjs/typeorm";
import { ConfService, CreateCrudEngine, CrudFactory, DataValidationPipe, DeleteCrudEngine, FindCrudEngine, FindOutputPaginationDto, LibraryAppService, LogService, RemoveCrudEngine, UpdateCrudEngine, UploadCrudEngine, UpsertCrudEngine } from "@libs/library-app";
import { SelfGraphqlMicroserviceService } from "@libs/dynamic-app";
import { WebhookResponseCreateDto, WebhookResponseCreateInputDto, WebhookResponseCreateOutputDto, WebhookResponseDeleteDto, WebhookResponseDeleteInputDto, WebhookResponseDeleteInputWhereDto, WebhookResponseDeleteOutputDto, WebhookResponseFindDto, WebhookResponseFindInputDto, WebhookResponseFindInputGroupByDto, WebhookResponseFindInputSortOrderDto, WebhookResponseFindInputWhereDto, WebhookResponseFindOneByIdDto, WebhookResponseFindOneByIdInputDto, WebhookResponseFindOutputDto, WebhookResponseFindOutputRowsDto, WebhookResponseRecoverDto, WebhookResponseRecoverInputDto, WebhookResponseRecoverInputWhereDto, WebhookResponseRecoverOutputDto, WebhookResponseRecoverOutputAffectedRowsDto, WebhookResponseRemoveDto, WebhookResponseRemoveInputDto, WebhookResponseRemoveInputWhereDto, WebhookResponseRemoveOutputDto, WebhookResponseRemoveOutputAffectedRowsDto, WebhookResponseRestoreDto, WebhookResponseRestoreInputDto, WebhookResponseRestoreInputWhereDto, WebhookResponseRestoreOutputDto, WebhookResponseSoftDeleteDto, WebhookResponseSoftDeleteInputDto, WebhookResponseSoftDeleteInputWhereDto, WebhookResponseSoftDeleteOutputDto, WebhookResponseSoftRemoveDto, WebhookResponseSoftRemoveInputDto, WebhookResponseSoftRemoveInputWhereDto, WebhookResponseSoftRemoveOutputDto, WebhookResponseSoftRemoveOutputAffectedRowsDto, WebhookResponseUpdateDto, WebhookResponseUpdateInputDto, WebhookResponseUpdateInputSetsDto, WebhookResponseUpdateInputWhereDto, WebhookResponseUpdateOutputDto, WebhookResponseUpdateOutputAffectedRowsDto, WebhookResponseUploadDeleteDto, WebhookResponseUploadDeleteInputDto, WebhookResponseUploadDeleteOutputDto, WebhookResponseUploadDto, WebhookResponseUploadInputDto, WebhookResponseUploadOutputDto, WebhookResponseUpsertDto, WebhookResponseUpsertInputDto, WebhookResponseUpsertOutputDto } from "./dto/response.dto";

@Injectable()
export class WebhookResponseFactory extends CrudFactory<WebhookResponseEntity> {

// ████████ FindCrudEngine ████████████████████████████████████████
public declare readonly findEngine: FindCrudEngine<
// entity (1)
WebhookResponseEntity,

// find (8)
WebhookResponseFindDto,
WebhookResponseFindInputWhereDto,
WebhookResponseFindInputSortOrderDto,
WebhookResponseFindInputGroupByDto,
WebhookResponseFindInputDto,
WebhookResponseFindOutputRowsDto,
FindOutputPaginationDto,
WebhookResponseFindOutputDto,

// find_one_by_id (2)
WebhookResponseFindOneByIdDto,
WebhookResponseFindOneByIdInputDto
>;

// ████████ CreateCrudEngine ████████████████████████████████████████
public declare readonly createEngine: CreateCrudEngine<
// entity (1)
WebhookResponseEntity,

// create (3)
WebhookResponseCreateDto,
WebhookResponseCreateInputDto,
WebhookResponseCreateOutputDto
>;

// ████████ UpdateCrudEngine ████████████████████████████████████████
public declare readonly updateEngine: UpdateCrudEngine<
// entity (1)
WebhookResponseEntity,

// update (6)
WebhookResponseUpdateDto,
WebhookResponseUpdateInputWhereDto,
WebhookResponseUpdateInputSetsDto,
WebhookResponseUpdateInputDto,
WebhookResponseUpdateOutputAffectedRowsDto,
WebhookResponseUpdateOutputDto
>;

// ████████ DeleteCrudEngine ████████████████████████████████████████
public declare readonly deleteEngine: DeleteCrudEngine<
// entity (1)
WebhookResponseEntity,

// soft_delete (4)
WebhookResponseSoftDeleteDto,
WebhookResponseSoftDeleteInputWhereDto,
WebhookResponseSoftDeleteInputDto,
WebhookResponseSoftDeleteOutputDto,

// delete (4)
WebhookResponseDeleteDto,
WebhookResponseDeleteInputWhereDto,
WebhookResponseDeleteInputDto,
WebhookResponseDeleteOutputDto,

// restore (4)
WebhookResponseRestoreDto,
WebhookResponseRestoreInputWhereDto,
WebhookResponseRestoreInputDto,
WebhookResponseRestoreOutputDto
>;

// ████████ UpsertCrudEngine ████████████████████████████████████████
public declare readonly upsertEngine: UpsertCrudEngine<
// entity (1)
WebhookResponseEntity,

// upsert (3)
WebhookResponseUpsertDto,
WebhookResponseUpsertInputDto,
WebhookResponseUpsertOutputDto
>;

// ████████ RemoveCrudEngine ████████████████████████████████████████
public declare readonly removeEngine: RemoveCrudEngine<
// entity (1)
WebhookResponseEntity,

// soft_remove (5)
WebhookResponseSoftRemoveDto,
WebhookResponseSoftRemoveInputWhereDto,
WebhookResponseSoftRemoveInputDto,
WebhookResponseSoftRemoveOutputAffectedRowsDto,
WebhookResponseSoftRemoveOutputDto,

// remove (4)
WebhookResponseRemoveDto,
WebhookResponseRemoveInputWhereDto,
WebhookResponseRemoveInputDto,
WebhookResponseRemoveOutputAffectedRowsDto,
WebhookResponseRemoveOutputDto,

// recover (5)
WebhookResponseRecoverDto,
WebhookResponseRecoverInputWhereDto,
WebhookResponseRecoverInputDto,
WebhookResponseRecoverOutputAffectedRowsDto,
WebhookResponseRecoverOutputDto
>;

// ████████ UploadCrudEngine ████████████████████████████████████████
public declare readonly uploadEngine: UploadCrudEngine<
// entity (1)
WebhookResponseEntity,

// upload (3)
WebhookResponseUploadDto,
WebhookResponseUploadInputDto,
WebhookResponseUploadOutputDto,

// upload_delete (3)
WebhookResponseUploadDeleteDto,
WebhookResponseUploadDeleteInputDto,
WebhookResponseUploadDeleteOutputDto
>;

constructor(
// data source
protected readonly dataSource: DataSource,

@InjectRepository(WebhookResponseEntity)
protected readonly repository: Repository<WebhookResponseEntity>,

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
    WebhookResponseEntity
);

this.logService.setContext(WebhookResponseFactory.name);

// ████████ initialize FindCrudEngine ██████████████████████████████████████
this.initFindEngine
<
// find (8)
WebhookResponseFindDto,
WebhookResponseFindInputWhereDto,
WebhookResponseFindInputSortOrderDto,
WebhookResponseFindInputGroupByDto,
WebhookResponseFindInputDto,
WebhookResponseFindOutputRowsDto,
FindOutputPaginationDto,
WebhookResponseFindOutputDto,

// find_one_by_id (2)
WebhookResponseFindOneByIdDto,
WebhookResponseFindOneByIdInputDto
>
(
// find (8)
WebhookResponseFindDto,
WebhookResponseFindInputWhereDto,
WebhookResponseFindInputSortOrderDto,
WebhookResponseFindInputGroupByDto,
WebhookResponseFindInputDto,
WebhookResponseFindOutputRowsDto,
FindOutputPaginationDto,
WebhookResponseFindOutputDto,

// find_one_by_id (2)
WebhookResponseFindOneByIdDto,
WebhookResponseFindOneByIdInputDto
);


// ████████ initialize CreateCrudEngine ███████████████████████████████████████
this.initCreateEngine
<
// create (3)
WebhookResponseCreateDto,
WebhookResponseCreateInputDto,
WebhookResponseCreateOutputDto
>
(
// create (3)
WebhookResponseCreateDto,
WebhookResponseCreateInputDto,
WebhookResponseCreateOutputDto
);

// ████████ initialize UpdateCrudEngine ████████████████████████████████████████
this.initUpdateEngine
<
// update (6)
WebhookResponseUpdateDto,
WebhookResponseUpdateInputWhereDto,
WebhookResponseUpdateInputSetsDto,
WebhookResponseUpdateInputDto,
WebhookResponseUpdateOutputAffectedRowsDto,
WebhookResponseUpdateOutputDto
>
(
// update (6)
WebhookResponseUpdateDto,
WebhookResponseUpdateInputWhereDto,
WebhookResponseUpdateInputSetsDto,
WebhookResponseUpdateInputDto,
WebhookResponseUpdateOutputAffectedRowsDto,
WebhookResponseUpdateOutputDto
);


// ████████ initialize DeleteCrudEngine ███████████████████████████████████████████
this.initDeleteEngine
<
// soft_delete (4)
WebhookResponseSoftDeleteDto,
WebhookResponseSoftDeleteInputWhereDto,
WebhookResponseSoftDeleteInputDto,
WebhookResponseSoftDeleteOutputDto,

// delete (4)
WebhookResponseDeleteDto,
WebhookResponseDeleteInputWhereDto,
WebhookResponseDeleteInputDto,
WebhookResponseDeleteOutputDto,

// restore (4)
WebhookResponseRestoreDto,
WebhookResponseRestoreInputWhereDto,
WebhookResponseRestoreInputDto,
WebhookResponseRestoreOutputDto
>
(
// soft_delete (4)
WebhookResponseSoftDeleteDto,
WebhookResponseSoftDeleteInputWhereDto,
WebhookResponseSoftDeleteInputDto,
WebhookResponseSoftDeleteOutputDto,

// delete (4)
WebhookResponseDeleteDto,
WebhookResponseDeleteInputWhereDto,
WebhookResponseDeleteInputDto,
WebhookResponseDeleteOutputDto,

// restore (4)
WebhookResponseRestoreDto,
WebhookResponseRestoreInputWhereDto,
WebhookResponseRestoreInputDto,
WebhookResponseRestoreOutputDto
);



// ████████ initialize UpsertCrudEngine ███████████████████████████████████████████
this.initUpsertEngine
<
// upsert (3)
WebhookResponseUpsertDto,
WebhookResponseUpsertInputDto,
WebhookResponseUpsertOutputDto
>
(
// upsert (3)
WebhookResponseUpsertDto,
WebhookResponseUpsertInputDto,
WebhookResponseUpsertOutputDto
);




// ████████ initialize RemoveCrudEngine ███████████████████████████████████████████
this.initRemoveEngine
<
// soft_remove (5)
WebhookResponseSoftRemoveDto,
WebhookResponseSoftRemoveInputWhereDto,
WebhookResponseSoftRemoveInputDto,
WebhookResponseSoftRemoveOutputAffectedRowsDto,
WebhookResponseSoftRemoveOutputDto,

// remove (4)
WebhookResponseRemoveDto,
WebhookResponseRemoveInputWhereDto,
WebhookResponseRemoveInputDto,
WebhookResponseRemoveOutputAffectedRowsDto,
WebhookResponseRemoveOutputDto,

// recover (5)
WebhookResponseRecoverDto,
WebhookResponseRecoverInputWhereDto,
WebhookResponseRecoverInputDto,
WebhookResponseRecoverOutputAffectedRowsDto,
WebhookResponseRecoverOutputDto
>
(
// soft_remove (5)
WebhookResponseSoftRemoveDto,
WebhookResponseSoftRemoveInputWhereDto,
WebhookResponseSoftRemoveInputDto,
WebhookResponseSoftRemoveOutputAffectedRowsDto,
WebhookResponseSoftRemoveOutputDto,

// remove (4)
WebhookResponseRemoveDto,
WebhookResponseRemoveInputWhereDto,
WebhookResponseRemoveInputDto,
WebhookResponseRemoveOutputAffectedRowsDto,
WebhookResponseRemoveOutputDto,

// recover (5)
WebhookResponseRecoverDto,
WebhookResponseRecoverInputWhereDto,
WebhookResponseRecoverInputDto,
WebhookResponseRecoverOutputAffectedRowsDto,
WebhookResponseRecoverOutputDto
);



// ████████ initialize UploadCrudEngine ███████████████████████████████████████████
this.initUploadEngine
<
// upload (3)
WebhookResponseUploadDto,
WebhookResponseUploadInputDto,
WebhookResponseUploadOutputDto,

// upload_delete (3)
WebhookResponseUploadDeleteDto,
WebhookResponseUploadDeleteInputDto,
WebhookResponseUploadDeleteOutputDto
>
(
// upload (3)
WebhookResponseUploadDto,
WebhookResponseUploadInputDto,
WebhookResponseUploadOutputDto,

// upload_delete (3)
WebhookResponseUploadDeleteDto,
WebhookResponseUploadDeleteInputDto,
WebhookResponseUploadDeleteOutputDto
);


// ████████ initialize ImportExportCrudEngine █████████████████████████████████████

}

}