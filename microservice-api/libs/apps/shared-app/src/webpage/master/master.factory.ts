import { WebPageMasterEntity } from "./entities/master.entity";
import { Injectable } from "@nestjs/common";
import { DataSource, Repository } from "typeorm";
import { InjectRepository } from "@nestjs/typeorm";
import { ConfService, CreateCrudEngine, CrudFactory, DataValidationPipe, DeleteCrudEngine, FindCrudEngine, FindOutputPaginationDto, LibraryAppService, LogService, RemoveCrudEngine, UpdateCrudEngine, UploadCrudEngine, UpsertCrudEngine } from "@libs/library-app";
import { SelfGraphqlMicroserviceService } from '@libs/dynamic-app';
import { WebPageMasterCreateDto, WebPageMasterCreateInputDto, WebPageMasterCreateOutputDto, WebPageMasterDeleteDto, WebPageMasterDeleteInputDto, WebPageMasterDeleteInputWhereDto, WebPageMasterDeleteOutputDto, WebPageMasterFindDto, WebPageMasterFindInputDto, WebPageMasterFindInputGroupByDto, WebPageMasterFindInputSortOrderDto, WebPageMasterFindInputWhereDto, WebPageMasterFindOneByIdDto, WebPageMasterFindOneByIdInputDto, WebPageMasterFindOutputDto, WebPageMasterFindOutputRowsDto, WebPageMasterRecoverDto, WebPageMasterRecoverInputDto, WebPageMasterRecoverInputWhereDto, WebPageMasterRecoverOutputDto, WebPageMasterRecoverOutputAffectedRowsDto, WebPageMasterRemoveDto, WebPageMasterRemoveInputDto, WebPageMasterRemoveInputWhereDto, WebPageMasterRemoveOutputDto, WebPageMasterRemoveOutputAffectedRowsDto, WebPageMasterRestoreDto, WebPageMasterRestoreInputDto, WebPageMasterRestoreInputWhereDto, WebPageMasterRestoreOutputDto, WebPageMasterSoftDeleteDto, WebPageMasterSoftDeleteInputDto, WebPageMasterSoftDeleteInputWhereDto, WebPageMasterSoftDeleteOutputDto, WebPageMasterSoftRemoveDto, WebPageMasterSoftRemoveInputDto, WebPageMasterSoftRemoveInputWhereDto, WebPageMasterSoftRemoveOutputDto, WebPageMasterSoftRemoveOutputAffectedRowsDto, WebPageMasterUpdateDto, WebPageMasterUpdateInputDto, WebPageMasterUpdateInputSetsDto, WebPageMasterUpdateInputWhereDto, WebPageMasterUpdateOutputDto, WebPageMasterUpdateOutputAffectedRowsDto, WebPageMasterUploadDeleteDto, WebPageMasterUploadDeleteInputDto, WebPageMasterUploadDeleteOutputDto, WebPageMasterUploadDto, WebPageMasterUploadInputDto, WebPageMasterUploadOutputDto, WebPageMasterUpsertDto, WebPageMasterUpsertInputDto, WebPageMasterUpsertOutputDto } from "./dto/master.dto";

@Injectable()
export class WebPageMasterFactory extends CrudFactory<WebPageMasterEntity> {

// ████████ FindCrudEngine ████████████████████████████████████████
public declare readonly findEngine: FindCrudEngine<
// entity (1)
WebPageMasterEntity,

// find (8)
WebPageMasterFindDto,
WebPageMasterFindInputWhereDto,
WebPageMasterFindInputSortOrderDto,
WebPageMasterFindInputGroupByDto,
WebPageMasterFindInputDto,
WebPageMasterFindOutputRowsDto,
FindOutputPaginationDto,
WebPageMasterFindOutputDto,

// find_one_by_id (2)
WebPageMasterFindOneByIdDto,
WebPageMasterFindOneByIdInputDto
>;

// ████████ CreateCrudEngine ████████████████████████████████████████
public declare readonly createEngine: CreateCrudEngine<
// entity (1)
WebPageMasterEntity,

// create (3)
WebPageMasterCreateDto,
WebPageMasterCreateInputDto,
WebPageMasterCreateOutputDto
>;

// ████████ UpdateCrudEngine ████████████████████████████████████████
public declare readonly updateEngine: UpdateCrudEngine<
// entity (1)
WebPageMasterEntity,

// update (6)
WebPageMasterUpdateDto,
WebPageMasterUpdateInputWhereDto,
WebPageMasterUpdateInputSetsDto,
WebPageMasterUpdateInputDto,
WebPageMasterUpdateOutputAffectedRowsDto,
WebPageMasterUpdateOutputDto
>;

// ████████ DeleteCrudEngine ████████████████████████████████████████
public declare readonly deleteEngine: DeleteCrudEngine<
// entity (1)
WebPageMasterEntity,

// soft_delete (4)
WebPageMasterSoftDeleteDto,
WebPageMasterSoftDeleteInputWhereDto,
WebPageMasterSoftDeleteInputDto,
WebPageMasterSoftDeleteOutputDto,

// delete (4)
WebPageMasterDeleteDto,
WebPageMasterDeleteInputWhereDto,
WebPageMasterDeleteInputDto,
WebPageMasterDeleteOutputDto,

// restore (4)
WebPageMasterRestoreDto,
WebPageMasterRestoreInputWhereDto,
WebPageMasterRestoreInputDto,
WebPageMasterRestoreOutputDto
>;

// ████████ UpsertCrudEngine ████████████████████████████████████████
public declare readonly upsertEngine: UpsertCrudEngine<
// entity (1)
WebPageMasterEntity,

// upsert (3)
WebPageMasterUpsertDto,
WebPageMasterUpsertInputDto,
WebPageMasterUpsertOutputDto
>;

// ████████ RemoveCrudEngine ████████████████████████████████████████
public declare readonly removeEngine: RemoveCrudEngine<
// entity (1)
WebPageMasterEntity,

// soft_remove (5)
WebPageMasterSoftRemoveDto,
WebPageMasterSoftRemoveInputWhereDto,
WebPageMasterSoftRemoveInputDto,
WebPageMasterSoftRemoveOutputAffectedRowsDto,
WebPageMasterSoftRemoveOutputDto,

// remove (4)
WebPageMasterRemoveDto,
WebPageMasterRemoveInputWhereDto,
WebPageMasterRemoveInputDto,
WebPageMasterRemoveOutputAffectedRowsDto,
WebPageMasterRemoveOutputDto,

// recover (5)
WebPageMasterRecoverDto,
WebPageMasterRecoverInputWhereDto,
WebPageMasterRecoverInputDto,
WebPageMasterRecoverOutputAffectedRowsDto,
WebPageMasterRecoverOutputDto
>;

// ████████ UploadCrudEngine ████████████████████████████████████████
public declare readonly uploadEngine: UploadCrudEngine<
// entity (1)
WebPageMasterEntity,

// upload (3)
WebPageMasterUploadDto,
WebPageMasterUploadInputDto,
WebPageMasterUploadOutputDto,

// upload_delete (3)
WebPageMasterUploadDeleteDto,
WebPageMasterUploadDeleteInputDto,
WebPageMasterUploadDeleteOutputDto
>;

constructor(
// data source
protected readonly dataSource: DataSource,

@InjectRepository(WebPageMasterEntity)
protected readonly repository: Repository<WebPageMasterEntity>,

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
    WebPageMasterEntity,
);

this.logService.setContext(WebPageMasterFactory.name);

// ████████ initialize FindCrudEngine ██████████████████████████████████████
this.initFindEngine
<
// find (8)
WebPageMasterFindDto,
WebPageMasterFindInputWhereDto,
WebPageMasterFindInputSortOrderDto,
WebPageMasterFindInputGroupByDto,
WebPageMasterFindInputDto,
WebPageMasterFindOutputRowsDto,
FindOutputPaginationDto,
WebPageMasterFindOutputDto,

// find_one_by_id (2)
WebPageMasterFindOneByIdDto,
WebPageMasterFindOneByIdInputDto
>
(
// find (8)
WebPageMasterFindDto,
WebPageMasterFindInputWhereDto,
WebPageMasterFindInputSortOrderDto,
WebPageMasterFindInputGroupByDto,
WebPageMasterFindInputDto,
WebPageMasterFindOutputRowsDto,
FindOutputPaginationDto,
WebPageMasterFindOutputDto,

// find_one_by_id (2)
WebPageMasterFindOneByIdDto,
WebPageMasterFindOneByIdInputDto
);


// ████████ initialize CreateCrudEngine ███████████████████████████████████████
this.initCreateEngine
<
// create (3)
WebPageMasterCreateDto,
WebPageMasterCreateInputDto,
WebPageMasterCreateOutputDto
>
(
// create (3)
WebPageMasterCreateDto,
WebPageMasterCreateInputDto,
WebPageMasterCreateOutputDto
);

// ████████ initialize UpdateCrudEngine ████████████████████████████████████████
this.initUpdateEngine
<
// update (6)
WebPageMasterUpdateDto,
WebPageMasterUpdateInputWhereDto,
WebPageMasterUpdateInputSetsDto,
WebPageMasterUpdateInputDto,
WebPageMasterUpdateOutputAffectedRowsDto,
WebPageMasterUpdateOutputDto
>
(
// update (6)
WebPageMasterUpdateDto,
WebPageMasterUpdateInputWhereDto,
WebPageMasterUpdateInputSetsDto,
WebPageMasterUpdateInputDto,
WebPageMasterUpdateOutputAffectedRowsDto,
WebPageMasterUpdateOutputDto
);


// ████████ initialize DeleteCrudEngine ███████████████████████████████████████████
this.initDeleteEngine
<
// soft_delete (4)
WebPageMasterSoftDeleteDto,
WebPageMasterSoftDeleteInputWhereDto,
WebPageMasterSoftDeleteInputDto,
WebPageMasterSoftDeleteOutputDto,

// delete (4)
WebPageMasterDeleteDto,
WebPageMasterDeleteInputWhereDto,
WebPageMasterDeleteInputDto,
WebPageMasterDeleteOutputDto,

// restore (4)
WebPageMasterRestoreDto,
WebPageMasterRestoreInputWhereDto,
WebPageMasterRestoreInputDto,
WebPageMasterRestoreOutputDto
>
(
// soft_delete (4)
WebPageMasterSoftDeleteDto,
WebPageMasterSoftDeleteInputWhereDto,
WebPageMasterSoftDeleteInputDto,
WebPageMasterSoftDeleteOutputDto,

// delete (4)
WebPageMasterDeleteDto,
WebPageMasterDeleteInputWhereDto,
WebPageMasterDeleteInputDto,
WebPageMasterDeleteOutputDto,

// restore (4)
WebPageMasterRestoreDto,
WebPageMasterRestoreInputWhereDto,
WebPageMasterRestoreInputDto,
WebPageMasterRestoreOutputDto
);



// ████████ initialize UpsertCrudEngine ███████████████████████████████████████████
this.initUpsertEngine
<
// upsert (3)
WebPageMasterUpsertDto,
WebPageMasterUpsertInputDto,
WebPageMasterUpsertOutputDto
>
(
// upsert (3)
WebPageMasterUpsertDto,
WebPageMasterUpsertInputDto,
WebPageMasterUpsertOutputDto
);




// ████████ initialize RemoveCrudEngine ███████████████████████████████████████████
this.initRemoveEngine
<
// soft_remove (5)
WebPageMasterSoftRemoveDto,
WebPageMasterSoftRemoveInputWhereDto,
WebPageMasterSoftRemoveInputDto,
WebPageMasterSoftRemoveOutputAffectedRowsDto,
WebPageMasterSoftRemoveOutputDto,

// remove (4)
WebPageMasterRemoveDto,
WebPageMasterRemoveInputWhereDto,
WebPageMasterRemoveInputDto,
WebPageMasterRemoveOutputAffectedRowsDto,
WebPageMasterRemoveOutputDto,

// recover (5)
WebPageMasterRecoverDto,
WebPageMasterRecoverInputWhereDto,
WebPageMasterRecoverInputDto,
WebPageMasterRecoverOutputAffectedRowsDto,
WebPageMasterRecoverOutputDto
>
(
// soft_remove (5)
WebPageMasterSoftRemoveDto,
WebPageMasterSoftRemoveInputWhereDto,
WebPageMasterSoftRemoveInputDto,
WebPageMasterSoftRemoveOutputAffectedRowsDto,
WebPageMasterSoftRemoveOutputDto,

// remove (4)
WebPageMasterRemoveDto,
WebPageMasterRemoveInputWhereDto,
WebPageMasterRemoveInputDto,
WebPageMasterRemoveOutputAffectedRowsDto,
WebPageMasterRemoveOutputDto,

// recover (5)
WebPageMasterRecoverDto,
WebPageMasterRecoverInputWhereDto,
WebPageMasterRecoverInputDto,
WebPageMasterRecoverOutputAffectedRowsDto,
WebPageMasterRecoverOutputDto
);



// ████████ initialize UploadCrudEngine ███████████████████████████████████████████
this.initUploadEngine
<
// upload (3)
WebPageMasterUploadDto,
WebPageMasterUploadInputDto,
WebPageMasterUploadOutputDto,

// upload_delete (3)
WebPageMasterUploadDeleteDto,
WebPageMasterUploadDeleteInputDto,
WebPageMasterUploadDeleteOutputDto
>
(
// upload (3)
WebPageMasterUploadDto,
WebPageMasterUploadInputDto,
WebPageMasterUploadOutputDto,

// upload_delete (3)
WebPageMasterUploadDeleteDto,
WebPageMasterUploadDeleteInputDto,
WebPageMasterUploadDeleteOutputDto
);


// ████████ initialize ImportExportCrudEngine █████████████████████████████████████

}

}