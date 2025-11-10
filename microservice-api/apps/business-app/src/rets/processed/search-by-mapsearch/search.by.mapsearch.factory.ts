import { ProcessedSearchByMapSearchEntity } from "./entities/search.by.mapsearch.entity";
import { Injectable } from "@nestjs/common";
import { DataSource, Repository } from "typeorm";
import { InjectRepository } from "@nestjs/typeorm";
import { ConfService, CreateCrudEngine, CrudFactory, DataValidationPipe, DeleteCrudEngine, FindCrudEngine, FindOutputPaginationDto, LibraryAppService, LogService, RemoveCrudEngine, UpdateCrudEngine, UploadCrudEngine, UpsertCrudEngine  } from "@libs/library-app";
import { ProcessedSearchByMapSearchCreateDto, ProcessedSearchByMapSearchCreateInputDto, ProcessedSearchByMapSearchCreateOutputDto, ProcessedSearchByMapSearchDeleteDto, ProcessedSearchByMapSearchDeleteInputDto, ProcessedSearchByMapSearchDeleteInputWhereDto, ProcessedSearchByMapSearchDeleteOutputDto, ProcessedSearchByMapSearchFindDto, ProcessedSearchByMapSearchFindInputDto, ProcessedSearchByMapSearchFindInputGroupByDto, ProcessedSearchByMapSearchFindInputSortOrderDto, ProcessedSearchByMapSearchFindInputWhereDto, ProcessedSearchByMapSearchFindOneByIdDto, ProcessedSearchByMapSearchFindOneByIdInputDto, ProcessedSearchByMapSearchFindOutputDto, ProcessedSearchByMapSearchFindOutputRowsDto, ProcessedSearchByMapSearchRecoverDto, ProcessedSearchByMapSearchRecoverInputDto, ProcessedSearchByMapSearchRecoverInputWhereDto, ProcessedSearchByMapSearchRecoverOutputDto, ProcessedSearchByMapSearchRecoverOutputAffectedRowsDto, ProcessedSearchByMapSearchRemoveDto, ProcessedSearchByMapSearchRemoveInputDto, ProcessedSearchByMapSearchRemoveInputWhereDto, ProcessedSearchByMapSearchRemoveOutputDto, ProcessedSearchByMapSearchRemoveOutputAffectedRowsDto, ProcessedSearchByMapSearchRestoreDto, ProcessedSearchByMapSearchRestoreInputDto, ProcessedSearchByMapSearchRestoreInputWhereDto, ProcessedSearchByMapSearchRestoreOutputDto, ProcessedSearchByMapSearchSoftDeleteDto, ProcessedSearchByMapSearchSoftDeleteInputDto, ProcessedSearchByMapSearchSoftDeleteInputWhereDto, ProcessedSearchByMapSearchSoftDeleteOutputDto, ProcessedSearchByMapSearchSoftRemoveDto, ProcessedSearchByMapSearchSoftRemoveInputDto, ProcessedSearchByMapSearchSoftRemoveInputWhereDto, ProcessedSearchByMapSearchSoftRemoveOutputDto, ProcessedSearchByMapSearchSoftRemoveOutputAffectedRowsDto, ProcessedSearchByMapSearchUpdateDto, ProcessedSearchByMapSearchUpdateInputDto, ProcessedSearchByMapSearchUpdateInputSetsDto, ProcessedSearchByMapSearchUpdateInputWhereDto, ProcessedSearchByMapSearchUpdateOutputDto, ProcessedSearchByMapSearchUpdateOutputAffectedRowsDto, ProcessedSearchByMapSearchUploadDeleteDto, ProcessedSearchByMapSearchUploadDeleteInputDto, ProcessedSearchByMapSearchUploadDeleteOutputDto, ProcessedSearchByMapSearchUploadDto, ProcessedSearchByMapSearchUploadInputDto, ProcessedSearchByMapSearchUploadOutputDto, ProcessedSearchByMapSearchUpsertDto, ProcessedSearchByMapSearchUpsertInputDto, ProcessedSearchByMapSearchUpsertOutputDto } from "./dto/search.by.mapsearch.dto";
import { SelfGraphqlMicroserviceService } from "@libs/dynamic-app";

@Injectable()
export class ProcessedSearchByMapSearchFactory extends CrudFactory<ProcessedSearchByMapSearchEntity> {

// ████████ FindCrudEngine ████████████████████████████████████████
public declare readonly findEngine: FindCrudEngine<
// entity (1)
ProcessedSearchByMapSearchEntity,

// find (8)
ProcessedSearchByMapSearchFindDto,
ProcessedSearchByMapSearchFindInputWhereDto,
ProcessedSearchByMapSearchFindInputSortOrderDto,
ProcessedSearchByMapSearchFindInputGroupByDto,
ProcessedSearchByMapSearchFindInputDto,
ProcessedSearchByMapSearchFindOutputRowsDto,
FindOutputPaginationDto,
ProcessedSearchByMapSearchFindOutputDto,

// find_one_by_id (2)
ProcessedSearchByMapSearchFindOneByIdDto,
ProcessedSearchByMapSearchFindOneByIdInputDto
>;

// ████████ CreateCrudEngine ████████████████████████████████████████
public declare readonly createEngine: CreateCrudEngine<
// entity (1)
ProcessedSearchByMapSearchEntity,

// create (3)
ProcessedSearchByMapSearchCreateDto,
ProcessedSearchByMapSearchCreateInputDto,
ProcessedSearchByMapSearchCreateOutputDto
>;

// ████████ UpdateCrudEngine ████████████████████████████████████████
public declare readonly updateEngine: UpdateCrudEngine<
// entity (1)
ProcessedSearchByMapSearchEntity,

// update (6)
ProcessedSearchByMapSearchUpdateDto,
ProcessedSearchByMapSearchUpdateInputWhereDto,
ProcessedSearchByMapSearchUpdateInputSetsDto,
ProcessedSearchByMapSearchUpdateInputDto,
ProcessedSearchByMapSearchUpdateOutputAffectedRowsDto,
ProcessedSearchByMapSearchUpdateOutputDto
>;

// ████████ DeleteCrudEngine ████████████████████████████████████████
public declare readonly deleteEngine: DeleteCrudEngine<
// entity (1)
ProcessedSearchByMapSearchEntity,

// soft_delete (4)
ProcessedSearchByMapSearchSoftDeleteDto,
ProcessedSearchByMapSearchSoftDeleteInputWhereDto,
ProcessedSearchByMapSearchSoftDeleteInputDto,
ProcessedSearchByMapSearchSoftDeleteOutputDto,

// delete (4)
ProcessedSearchByMapSearchDeleteDto,
ProcessedSearchByMapSearchDeleteInputWhereDto,
ProcessedSearchByMapSearchDeleteInputDto,
ProcessedSearchByMapSearchDeleteOutputDto,

// restore (4)
ProcessedSearchByMapSearchRestoreDto,
ProcessedSearchByMapSearchRestoreInputWhereDto,
ProcessedSearchByMapSearchRestoreInputDto,
ProcessedSearchByMapSearchRestoreOutputDto
>;

// ████████ UpsertCrudEngine ████████████████████████████████████████
public declare readonly upsertEngine: UpsertCrudEngine<
// entity (1)
ProcessedSearchByMapSearchEntity,

// upsert (3)
ProcessedSearchByMapSearchUpsertDto,
ProcessedSearchByMapSearchUpsertInputDto,
ProcessedSearchByMapSearchUpsertOutputDto
>;

// ████████ RemoveCrudEngine ████████████████████████████████████████
public declare readonly removeEngine: RemoveCrudEngine<
// entity (1)
ProcessedSearchByMapSearchEntity,

// soft_remove (5)
ProcessedSearchByMapSearchSoftRemoveDto,
ProcessedSearchByMapSearchSoftRemoveInputWhereDto,
ProcessedSearchByMapSearchSoftRemoveInputDto,
ProcessedSearchByMapSearchSoftRemoveOutputAffectedRowsDto,
ProcessedSearchByMapSearchSoftRemoveOutputDto,

// remove (4)
ProcessedSearchByMapSearchRemoveDto,
ProcessedSearchByMapSearchRemoveInputWhereDto,
ProcessedSearchByMapSearchRemoveInputDto,
ProcessedSearchByMapSearchRemoveOutputAffectedRowsDto,
ProcessedSearchByMapSearchRemoveOutputDto,

// recover (5)
ProcessedSearchByMapSearchRecoverDto,
ProcessedSearchByMapSearchRecoverInputWhereDto,
ProcessedSearchByMapSearchRecoverInputDto,
ProcessedSearchByMapSearchRecoverOutputAffectedRowsDto,
ProcessedSearchByMapSearchRecoverOutputDto
>;

// ████████ UploadCrudEngine ████████████████████████████████████████
public declare readonly uploadEngine: UploadCrudEngine<
// entity (1)
ProcessedSearchByMapSearchEntity,

// upload (3)
ProcessedSearchByMapSearchUploadDto,
ProcessedSearchByMapSearchUploadInputDto,
ProcessedSearchByMapSearchUploadOutputDto,

// upload_delete (3)
ProcessedSearchByMapSearchUploadDeleteDto,
ProcessedSearchByMapSearchUploadDeleteInputDto,
ProcessedSearchByMapSearchUploadDeleteOutputDto
>;

constructor(
// data source
protected readonly dataSource: DataSource,

@InjectRepository(ProcessedSearchByMapSearchEntity)
protected readonly repository: Repository<ProcessedSearchByMapSearchEntity>,

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
    ProcessedSearchByMapSearchEntity,
);

this.logService.setContext(ProcessedSearchByMapSearchFactory.name);

// ████████ initialize FindCrudEngine ██████████████████████████████████████
this.initFindEngine
<
// find (8)
ProcessedSearchByMapSearchFindDto,
ProcessedSearchByMapSearchFindInputWhereDto,
ProcessedSearchByMapSearchFindInputSortOrderDto,
ProcessedSearchByMapSearchFindInputGroupByDto,
ProcessedSearchByMapSearchFindInputDto,
ProcessedSearchByMapSearchFindOutputRowsDto,
FindOutputPaginationDto,
ProcessedSearchByMapSearchFindOutputDto,

// find_one_by_id (2)
ProcessedSearchByMapSearchFindOneByIdDto,
ProcessedSearchByMapSearchFindOneByIdInputDto
>
(
// find (8)
ProcessedSearchByMapSearchFindDto,
ProcessedSearchByMapSearchFindInputWhereDto,
ProcessedSearchByMapSearchFindInputSortOrderDto,
ProcessedSearchByMapSearchFindInputGroupByDto,
ProcessedSearchByMapSearchFindInputDto,
ProcessedSearchByMapSearchFindOutputRowsDto,
FindOutputPaginationDto,
ProcessedSearchByMapSearchFindOutputDto,

// find_one_by_id (2)
ProcessedSearchByMapSearchFindOneByIdDto,
ProcessedSearchByMapSearchFindOneByIdInputDto
);


// ████████ initialize CreateCrudEngine ███████████████████████████████████████
this.initCreateEngine
<
// create (3)
ProcessedSearchByMapSearchCreateDto,
ProcessedSearchByMapSearchCreateInputDto,
ProcessedSearchByMapSearchCreateOutputDto
>
(
// create (3)
ProcessedSearchByMapSearchCreateDto,
ProcessedSearchByMapSearchCreateInputDto,
ProcessedSearchByMapSearchCreateOutputDto
);

// ████████ initialize UpdateCrudEngine ████████████████████████████████████████
this.initUpdateEngine
<
// update (6)
ProcessedSearchByMapSearchUpdateDto,
ProcessedSearchByMapSearchUpdateInputWhereDto,
ProcessedSearchByMapSearchUpdateInputSetsDto,
ProcessedSearchByMapSearchUpdateInputDto,
ProcessedSearchByMapSearchUpdateOutputAffectedRowsDto,
ProcessedSearchByMapSearchUpdateOutputDto
>
(
// update (6)
ProcessedSearchByMapSearchUpdateDto,
ProcessedSearchByMapSearchUpdateInputWhereDto,
ProcessedSearchByMapSearchUpdateInputSetsDto,
ProcessedSearchByMapSearchUpdateInputDto,
ProcessedSearchByMapSearchUpdateOutputAffectedRowsDto,
ProcessedSearchByMapSearchUpdateOutputDto
);


// ████████ initialize DeleteCrudEngine ███████████████████████████████████████████
this.initDeleteEngine
<
// soft_delete (4)
ProcessedSearchByMapSearchSoftDeleteDto,
ProcessedSearchByMapSearchSoftDeleteInputWhereDto,
ProcessedSearchByMapSearchSoftDeleteInputDto,
ProcessedSearchByMapSearchSoftDeleteOutputDto,

// delete (4)
ProcessedSearchByMapSearchDeleteDto,
ProcessedSearchByMapSearchDeleteInputWhereDto,
ProcessedSearchByMapSearchDeleteInputDto,
ProcessedSearchByMapSearchDeleteOutputDto,

// restore (4)
ProcessedSearchByMapSearchRestoreDto,
ProcessedSearchByMapSearchRestoreInputWhereDto,
ProcessedSearchByMapSearchRestoreInputDto,
ProcessedSearchByMapSearchRestoreOutputDto
>
(
// soft_delete (4)
ProcessedSearchByMapSearchSoftDeleteDto,
ProcessedSearchByMapSearchSoftDeleteInputWhereDto,
ProcessedSearchByMapSearchSoftDeleteInputDto,
ProcessedSearchByMapSearchSoftDeleteOutputDto,

// delete (4)
ProcessedSearchByMapSearchDeleteDto,
ProcessedSearchByMapSearchDeleteInputWhereDto,
ProcessedSearchByMapSearchDeleteInputDto,
ProcessedSearchByMapSearchDeleteOutputDto,

// restore (4)
ProcessedSearchByMapSearchRestoreDto,
ProcessedSearchByMapSearchRestoreInputWhereDto,
ProcessedSearchByMapSearchRestoreInputDto,
ProcessedSearchByMapSearchRestoreOutputDto
);



// ████████ initialize UpsertCrudEngine ███████████████████████████████████████████
this.initUpsertEngine
<
// upsert (3)
ProcessedSearchByMapSearchUpsertDto,
ProcessedSearchByMapSearchUpsertInputDto,
ProcessedSearchByMapSearchUpsertOutputDto
>
(
// upsert (3)
ProcessedSearchByMapSearchUpsertDto,
ProcessedSearchByMapSearchUpsertInputDto,
ProcessedSearchByMapSearchUpsertOutputDto
);




// ████████ initialize RemoveCrudEngine ███████████████████████████████████████████
this.initRemoveEngine
<
// soft_remove (5)
ProcessedSearchByMapSearchSoftRemoveDto,
ProcessedSearchByMapSearchSoftRemoveInputWhereDto,
ProcessedSearchByMapSearchSoftRemoveInputDto,
ProcessedSearchByMapSearchSoftRemoveOutputAffectedRowsDto,
ProcessedSearchByMapSearchSoftRemoveOutputDto,

// remove (4)
ProcessedSearchByMapSearchRemoveDto,
ProcessedSearchByMapSearchRemoveInputWhereDto,
ProcessedSearchByMapSearchRemoveInputDto,
ProcessedSearchByMapSearchRemoveOutputAffectedRowsDto,
ProcessedSearchByMapSearchRemoveOutputDto,

// recover (5)
ProcessedSearchByMapSearchRecoverDto,
ProcessedSearchByMapSearchRecoverInputWhereDto,
ProcessedSearchByMapSearchRecoverInputDto,
ProcessedSearchByMapSearchRecoverOutputAffectedRowsDto,
ProcessedSearchByMapSearchRecoverOutputDto
>
(
// soft_remove (5)
ProcessedSearchByMapSearchSoftRemoveDto,
ProcessedSearchByMapSearchSoftRemoveInputWhereDto,
ProcessedSearchByMapSearchSoftRemoveInputDto,
ProcessedSearchByMapSearchSoftRemoveOutputAffectedRowsDto,
ProcessedSearchByMapSearchSoftRemoveOutputDto,

// remove (4)
ProcessedSearchByMapSearchRemoveDto,
ProcessedSearchByMapSearchRemoveInputWhereDto,
ProcessedSearchByMapSearchRemoveInputDto,
ProcessedSearchByMapSearchRemoveOutputAffectedRowsDto,
ProcessedSearchByMapSearchRemoveOutputDto,

// recover (5)
ProcessedSearchByMapSearchRecoverDto,
ProcessedSearchByMapSearchRecoverInputWhereDto,
ProcessedSearchByMapSearchRecoverInputDto,
ProcessedSearchByMapSearchRecoverOutputAffectedRowsDto,
ProcessedSearchByMapSearchRecoverOutputDto
);



// ████████ initialize UploadCrudEngine ███████████████████████████████████████████
this.initUploadEngine
<
// upload (3)
ProcessedSearchByMapSearchUploadDto,
ProcessedSearchByMapSearchUploadInputDto,
ProcessedSearchByMapSearchUploadOutputDto,

// upload_delete (3)
ProcessedSearchByMapSearchUploadDeleteDto,
ProcessedSearchByMapSearchUploadDeleteInputDto,
ProcessedSearchByMapSearchUploadDeleteOutputDto
>
(
// upload (3)
ProcessedSearchByMapSearchUploadDto,
ProcessedSearchByMapSearchUploadInputDto,
ProcessedSearchByMapSearchUploadOutputDto,

// upload_delete (3)
ProcessedSearchByMapSearchUploadDeleteDto,
ProcessedSearchByMapSearchUploadDeleteInputDto,
ProcessedSearchByMapSearchUploadDeleteOutputDto
);


// ████████ initialize ImportExportCrudEngine █████████████████████████████████████

}}