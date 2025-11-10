import { ProcessedSearchByMlsEntity } from "./entities/search.by.mls.entity";
import { Injectable } from "@nestjs/common";
import { DataSource, Repository } from "typeorm";
import { InjectRepository } from "@nestjs/typeorm";
import { ConfService, CreateCrudEngine, CrudFactory, DataValidationPipe, DeleteCrudEngine, FindCrudEngine, FindOutputPaginationDto, LibraryAppService, LogService, RemoveCrudEngine, UpdateCrudEngine, UploadCrudEngine, UpsertCrudEngine  } from "@libs/library-app";
import { ProcessedSearchByMlsCreateDto, ProcessedSearchByMlsCreateInputDto, ProcessedSearchByMlsCreateOutputDto, ProcessedSearchByMlsDeleteDto, ProcessedSearchByMlsDeleteInputDto, ProcessedSearchByMlsDeleteInputWhereDto, ProcessedSearchByMlsDeleteOutputDto, ProcessedSearchByMlsFindDto, ProcessedSearchByMlsFindInputDto, ProcessedSearchByMlsFindInputGroupByDto, ProcessedSearchByMlsFindInputSortOrderDto, ProcessedSearchByMlsFindInputWhereDto, ProcessedSearchByMlsFindOneByIdDto, ProcessedSearchByMlsFindOneByIdInputDto, ProcessedSearchByMlsFindOutputDto, ProcessedSearchByMlsFindOutputRowsDto, ProcessedSearchByMlsRecoverDto, ProcessedSearchByMlsRecoverInputDto, ProcessedSearchByMlsRecoverInputWhereDto, ProcessedSearchByMlsRecoverOutputDto, ProcessedSearchByMlsRecoverOutputAffectedRowsDto, ProcessedSearchByMlsRemoveDto, ProcessedSearchByMlsRemoveInputDto, ProcessedSearchByMlsRemoveInputWhereDto, ProcessedSearchByMlsRemoveOutputDto, ProcessedSearchByMlsRemoveOutputAffectedRowsDto, ProcessedSearchByMlsRestoreDto, ProcessedSearchByMlsRestoreInputDto, ProcessedSearchByMlsRestoreInputWhereDto, ProcessedSearchByMlsRestoreOutputDto, ProcessedSearchByMlsSoftDeleteDto, ProcessedSearchByMlsSoftDeleteInputDto, ProcessedSearchByMlsSoftDeleteInputWhereDto, ProcessedSearchByMlsSoftDeleteOutputDto, ProcessedSearchByMlsSoftRemoveDto, ProcessedSearchByMlsSoftRemoveInputDto, ProcessedSearchByMlsSoftRemoveInputWhereDto, ProcessedSearchByMlsSoftRemoveOutputDto, ProcessedSearchByMlsSoftRemoveOutputAffectedRowsDto, ProcessedSearchByMlsUpdateDto, ProcessedSearchByMlsUpdateInputDto, ProcessedSearchByMlsUpdateInputSetsDto, ProcessedSearchByMlsUpdateInputWhereDto, ProcessedSearchByMlsUpdateOutputDto, ProcessedSearchByMlsUpdateOutputAffectedRowsDto, ProcessedSearchByMlsUploadDeleteDto, ProcessedSearchByMlsUploadDeleteInputDto, ProcessedSearchByMlsUploadDeleteOutputDto, ProcessedSearchByMlsUploadDto, ProcessedSearchByMlsUploadInputDto, ProcessedSearchByMlsUploadOutputDto, ProcessedSearchByMlsUpsertDto, ProcessedSearchByMlsUpsertInputDto, ProcessedSearchByMlsUpsertOutputDto } from "./dto/search.by.mls.dto";
import { SelfGraphqlMicroserviceService } from "@libs/dynamic-app";

@Injectable()
export class ProcessedSearchByMlsFactory extends CrudFactory<ProcessedSearchByMlsEntity> {

// ████████ FindCrudEngine ████████████████████████████████████████
public declare readonly findEngine: FindCrudEngine<
// entity (1)
ProcessedSearchByMlsEntity,

// find (8)
ProcessedSearchByMlsFindDto,
ProcessedSearchByMlsFindInputWhereDto,
ProcessedSearchByMlsFindInputSortOrderDto,
ProcessedSearchByMlsFindInputGroupByDto,
ProcessedSearchByMlsFindInputDto,
ProcessedSearchByMlsFindOutputRowsDto,
FindOutputPaginationDto,
ProcessedSearchByMlsFindOutputDto,

// find_one_by_id (2)
ProcessedSearchByMlsFindOneByIdDto,
ProcessedSearchByMlsFindOneByIdInputDto
>;

// ████████ CreateCrudEngine ████████████████████████████████████████
public declare readonly createEngine: CreateCrudEngine<
// entity (1)
ProcessedSearchByMlsEntity,

// create (3)
ProcessedSearchByMlsCreateDto,
ProcessedSearchByMlsCreateInputDto,
ProcessedSearchByMlsCreateOutputDto
>;

// ████████ UpdateCrudEngine ████████████████████████████████████████
public declare readonly updateEngine: UpdateCrudEngine<
// entity (1)
ProcessedSearchByMlsEntity,

// update (6)
ProcessedSearchByMlsUpdateDto,
ProcessedSearchByMlsUpdateInputWhereDto,
ProcessedSearchByMlsUpdateInputSetsDto,
ProcessedSearchByMlsUpdateInputDto,
ProcessedSearchByMlsUpdateOutputAffectedRowsDto,
ProcessedSearchByMlsUpdateOutputDto
>;

// ████████ DeleteCrudEngine ████████████████████████████████████████
public declare readonly deleteEngine: DeleteCrudEngine<
// entity (1)
ProcessedSearchByMlsEntity,

// soft_delete (4)
ProcessedSearchByMlsSoftDeleteDto,
ProcessedSearchByMlsSoftDeleteInputWhereDto,
ProcessedSearchByMlsSoftDeleteInputDto,
ProcessedSearchByMlsSoftDeleteOutputDto,

// delete (4)
ProcessedSearchByMlsDeleteDto,
ProcessedSearchByMlsDeleteInputWhereDto,
ProcessedSearchByMlsDeleteInputDto,
ProcessedSearchByMlsDeleteOutputDto,

// restore (4)
ProcessedSearchByMlsRestoreDto,
ProcessedSearchByMlsRestoreInputWhereDto,
ProcessedSearchByMlsRestoreInputDto,
ProcessedSearchByMlsRestoreOutputDto
>;

// ████████ UpsertCrudEngine ████████████████████████████████████████
public declare readonly upsertEngine: UpsertCrudEngine<
// entity (1)
ProcessedSearchByMlsEntity,

// upsert (3)
ProcessedSearchByMlsUpsertDto,
ProcessedSearchByMlsUpsertInputDto,
ProcessedSearchByMlsUpsertOutputDto
>;

// ████████ RemoveCrudEngine ████████████████████████████████████████
public declare readonly removeEngine: RemoveCrudEngine<
// entity (1)
ProcessedSearchByMlsEntity,

// soft_remove (5)
ProcessedSearchByMlsSoftRemoveDto,
ProcessedSearchByMlsSoftRemoveInputWhereDto,
ProcessedSearchByMlsSoftRemoveInputDto,
ProcessedSearchByMlsSoftRemoveOutputAffectedRowsDto,
ProcessedSearchByMlsSoftRemoveOutputDto,

// remove (4)
ProcessedSearchByMlsRemoveDto,
ProcessedSearchByMlsRemoveInputWhereDto,
ProcessedSearchByMlsRemoveInputDto,
ProcessedSearchByMlsRemoveOutputAffectedRowsDto,
ProcessedSearchByMlsRemoveOutputDto,

// recover (5)
ProcessedSearchByMlsRecoverDto,
ProcessedSearchByMlsRecoverInputWhereDto,
ProcessedSearchByMlsRecoverInputDto,
ProcessedSearchByMlsRecoverOutputAffectedRowsDto,
ProcessedSearchByMlsRecoverOutputDto
>;

// ████████ UploadCrudEngine ████████████████████████████████████████
public declare readonly uploadEngine: UploadCrudEngine<
// entity (1)
ProcessedSearchByMlsEntity,

// upload (3)
ProcessedSearchByMlsUploadDto,
ProcessedSearchByMlsUploadInputDto,
ProcessedSearchByMlsUploadOutputDto,

// upload_delete (3)
ProcessedSearchByMlsUploadDeleteDto,
ProcessedSearchByMlsUploadDeleteInputDto,
ProcessedSearchByMlsUploadDeleteOutputDto
>;

constructor(
// data source
protected readonly dataSource: DataSource,

@InjectRepository(ProcessedSearchByMlsEntity)
protected readonly repository: Repository<ProcessedSearchByMlsEntity>,

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
    ProcessedSearchByMlsEntity,
);

this.logService.setContext(ProcessedSearchByMlsFactory.name);

// ████████ initialize FindCrudEngine ██████████████████████████████████████
this.initFindEngine
<
// find (8)
ProcessedSearchByMlsFindDto,
ProcessedSearchByMlsFindInputWhereDto,
ProcessedSearchByMlsFindInputSortOrderDto,
ProcessedSearchByMlsFindInputGroupByDto,
ProcessedSearchByMlsFindInputDto,
ProcessedSearchByMlsFindOutputRowsDto,
FindOutputPaginationDto,
ProcessedSearchByMlsFindOutputDto,

// find_one_by_id (2)
ProcessedSearchByMlsFindOneByIdDto,
ProcessedSearchByMlsFindOneByIdInputDto
>
(
// find (8)
ProcessedSearchByMlsFindDto,
ProcessedSearchByMlsFindInputWhereDto,
ProcessedSearchByMlsFindInputSortOrderDto,
ProcessedSearchByMlsFindInputGroupByDto,
ProcessedSearchByMlsFindInputDto,
ProcessedSearchByMlsFindOutputRowsDto,
FindOutputPaginationDto,
ProcessedSearchByMlsFindOutputDto,

// find_one_by_id (2)
ProcessedSearchByMlsFindOneByIdDto,
ProcessedSearchByMlsFindOneByIdInputDto
);


// ████████ initialize CreateCrudEngine ███████████████████████████████████████
this.initCreateEngine
<
// create (3)
ProcessedSearchByMlsCreateDto,
ProcessedSearchByMlsCreateInputDto,
ProcessedSearchByMlsCreateOutputDto
>
(
// create (3)
ProcessedSearchByMlsCreateDto,
ProcessedSearchByMlsCreateInputDto,
ProcessedSearchByMlsCreateOutputDto
);

// ████████ initialize UpdateCrudEngine ████████████████████████████████████████
this.initUpdateEngine
<
// update (6)
ProcessedSearchByMlsUpdateDto,
ProcessedSearchByMlsUpdateInputWhereDto,
ProcessedSearchByMlsUpdateInputSetsDto,
ProcessedSearchByMlsUpdateInputDto,
ProcessedSearchByMlsUpdateOutputAffectedRowsDto,
ProcessedSearchByMlsUpdateOutputDto
>
(
// update (6)
ProcessedSearchByMlsUpdateDto,
ProcessedSearchByMlsUpdateInputWhereDto,
ProcessedSearchByMlsUpdateInputSetsDto,
ProcessedSearchByMlsUpdateInputDto,
ProcessedSearchByMlsUpdateOutputAffectedRowsDto,
ProcessedSearchByMlsUpdateOutputDto
);


// ████████ initialize DeleteCrudEngine ███████████████████████████████████████████
this.initDeleteEngine
<
// soft_delete (4)
ProcessedSearchByMlsSoftDeleteDto,
ProcessedSearchByMlsSoftDeleteInputWhereDto,
ProcessedSearchByMlsSoftDeleteInputDto,
ProcessedSearchByMlsSoftDeleteOutputDto,

// delete (4)
ProcessedSearchByMlsDeleteDto,
ProcessedSearchByMlsDeleteInputWhereDto,
ProcessedSearchByMlsDeleteInputDto,
ProcessedSearchByMlsDeleteOutputDto,

// restore (4)
ProcessedSearchByMlsRestoreDto,
ProcessedSearchByMlsRestoreInputWhereDto,
ProcessedSearchByMlsRestoreInputDto,
ProcessedSearchByMlsRestoreOutputDto
>
(
// soft_delete (4)
ProcessedSearchByMlsSoftDeleteDto,
ProcessedSearchByMlsSoftDeleteInputWhereDto,
ProcessedSearchByMlsSoftDeleteInputDto,
ProcessedSearchByMlsSoftDeleteOutputDto,

// delete (4)
ProcessedSearchByMlsDeleteDto,
ProcessedSearchByMlsDeleteInputWhereDto,
ProcessedSearchByMlsDeleteInputDto,
ProcessedSearchByMlsDeleteOutputDto,

// restore (4)
ProcessedSearchByMlsRestoreDto,
ProcessedSearchByMlsRestoreInputWhereDto,
ProcessedSearchByMlsRestoreInputDto,
ProcessedSearchByMlsRestoreOutputDto
);



// ████████ initialize UpsertCrudEngine ███████████████████████████████████████████
this.initUpsertEngine
<
// upsert (3)
ProcessedSearchByMlsUpsertDto,
ProcessedSearchByMlsUpsertInputDto,
ProcessedSearchByMlsUpsertOutputDto
>
(
// upsert (3)
ProcessedSearchByMlsUpsertDto,
ProcessedSearchByMlsUpsertInputDto,
ProcessedSearchByMlsUpsertOutputDto
);




// ████████ initialize RemoveCrudEngine ███████████████████████████████████████████
this.initRemoveEngine
<
// soft_remove (5)
ProcessedSearchByMlsSoftRemoveDto,
ProcessedSearchByMlsSoftRemoveInputWhereDto,
ProcessedSearchByMlsSoftRemoveInputDto,
ProcessedSearchByMlsSoftRemoveOutputAffectedRowsDto,
ProcessedSearchByMlsSoftRemoveOutputDto,

// remove (4)
ProcessedSearchByMlsRemoveDto,
ProcessedSearchByMlsRemoveInputWhereDto,
ProcessedSearchByMlsRemoveInputDto,
ProcessedSearchByMlsRemoveOutputAffectedRowsDto,
ProcessedSearchByMlsRemoveOutputDto,

// recover (5)
ProcessedSearchByMlsRecoverDto,
ProcessedSearchByMlsRecoverInputWhereDto,
ProcessedSearchByMlsRecoverInputDto,
ProcessedSearchByMlsRecoverOutputAffectedRowsDto,
ProcessedSearchByMlsRecoverOutputDto
>
(
// soft_remove (5)
ProcessedSearchByMlsSoftRemoveDto,
ProcessedSearchByMlsSoftRemoveInputWhereDto,
ProcessedSearchByMlsSoftRemoveInputDto,
ProcessedSearchByMlsSoftRemoveOutputAffectedRowsDto,
ProcessedSearchByMlsSoftRemoveOutputDto,

// remove (4)
ProcessedSearchByMlsRemoveDto,
ProcessedSearchByMlsRemoveInputWhereDto,
ProcessedSearchByMlsRemoveInputDto,
ProcessedSearchByMlsRemoveOutputAffectedRowsDto,
ProcessedSearchByMlsRemoveOutputDto,

// recover (5)
ProcessedSearchByMlsRecoverDto,
ProcessedSearchByMlsRecoverInputWhereDto,
ProcessedSearchByMlsRecoverInputDto,
ProcessedSearchByMlsRecoverOutputAffectedRowsDto,
ProcessedSearchByMlsRecoverOutputDto
);



// ████████ initialize UploadCrudEngine ███████████████████████████████████████████
this.initUploadEngine
<
// upload (3)
ProcessedSearchByMlsUploadDto,
ProcessedSearchByMlsUploadInputDto,
ProcessedSearchByMlsUploadOutputDto,

// upload_delete (3)
ProcessedSearchByMlsUploadDeleteDto,
ProcessedSearchByMlsUploadDeleteInputDto,
ProcessedSearchByMlsUploadDeleteOutputDto
>
(
// upload (3)
ProcessedSearchByMlsUploadDto,
ProcessedSearchByMlsUploadInputDto,
ProcessedSearchByMlsUploadOutputDto,

// upload_delete (3)
ProcessedSearchByMlsUploadDeleteDto,
ProcessedSearchByMlsUploadDeleteInputDto,
ProcessedSearchByMlsUploadDeleteOutputDto
);


// ████████ initialize ImportExportCrudEngine █████████████████████████████████████

}}