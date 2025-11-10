import { ProcessedSearchByNeighbourhoodEntity } from "./entities/search.by.neighbourhood.entity";
import { Injectable } from "@nestjs/common";
import { DataSource, Repository } from "typeorm";
import { InjectRepository } from "@nestjs/typeorm";
import { ConfService, CreateCrudEngine, CrudFactory, DataValidationPipe, DeleteCrudEngine, FindCrudEngine, FindOutputPaginationDto, LibraryAppService, LogService, RemoveCrudEngine, UpdateCrudEngine, UploadCrudEngine, UpsertCrudEngine  } from "@libs/library-app";
import { ProcessedSearchByNeighbourhoodCreateDto, ProcessedSearchByNeighbourhoodCreateInputDto, ProcessedSearchByNeighbourhoodCreateOutputDto, ProcessedSearchByNeighbourhoodDeleteDto, ProcessedSearchByNeighbourhoodDeleteInputDto, ProcessedSearchByNeighbourhoodDeleteInputWhereDto, ProcessedSearchByNeighbourhoodDeleteOutputDto, ProcessedSearchByNeighbourhoodFindDto, ProcessedSearchByNeighbourhoodFindInputDto, ProcessedSearchByNeighbourhoodFindInputGroupByDto, ProcessedSearchByNeighbourhoodFindInputSortOrderDto, ProcessedSearchByNeighbourhoodFindInputWhereDto, ProcessedSearchByNeighbourhoodFindOneByIdDto, ProcessedSearchByNeighbourhoodFindOneByIdInputDto, ProcessedSearchByNeighbourhoodFindOutputDto, ProcessedSearchByNeighbourhoodFindOutputRowsDto, ProcessedSearchByNeighbourhoodRecoverDto, ProcessedSearchByNeighbourhoodRecoverInputDto, ProcessedSearchByNeighbourhoodRecoverInputWhereDto, ProcessedSearchByNeighbourhoodRecoverOutputDto, ProcessedSearchByNeighbourhoodRecoverOutputAffectedRowsDto, ProcessedSearchByNeighbourhoodRemoveDto, ProcessedSearchByNeighbourhoodRemoveInputDto, ProcessedSearchByNeighbourhoodRemoveInputWhereDto, ProcessedSearchByNeighbourhoodRemoveOutputDto, ProcessedSearchByNeighbourhoodRemoveOutputAffectedRowsDto, ProcessedSearchByNeighbourhoodRestoreDto, ProcessedSearchByNeighbourhoodRestoreInputDto, ProcessedSearchByNeighbourhoodRestoreInputWhereDto, ProcessedSearchByNeighbourhoodRestoreOutputDto, ProcessedSearchByNeighbourhoodSoftDeleteDto, ProcessedSearchByNeighbourhoodSoftDeleteInputDto, ProcessedSearchByNeighbourhoodSoftDeleteInputWhereDto, ProcessedSearchByNeighbourhoodSoftDeleteOutputDto, ProcessedSearchByNeighbourhoodSoftRemoveDto, ProcessedSearchByNeighbourhoodSoftRemoveInputDto, ProcessedSearchByNeighbourhoodSoftRemoveInputWhereDto, ProcessedSearchByNeighbourhoodSoftRemoveOutputDto, ProcessedSearchByNeighbourhoodSoftRemoveOutputAffectedRowsDto, ProcessedSearchByNeighbourhoodUpdateDto, ProcessedSearchByNeighbourhoodUpdateInputDto, ProcessedSearchByNeighbourhoodUpdateInputSetsDto, ProcessedSearchByNeighbourhoodUpdateInputWhereDto, ProcessedSearchByNeighbourhoodUpdateOutputDto, ProcessedSearchByNeighbourhoodUpdateOutputAffectedRowsDto, ProcessedSearchByNeighbourhoodUploadDeleteDto, ProcessedSearchByNeighbourhoodUploadDeleteInputDto, ProcessedSearchByNeighbourhoodUploadDeleteOutputDto, ProcessedSearchByNeighbourhoodUploadDto, ProcessedSearchByNeighbourhoodUploadInputDto, ProcessedSearchByNeighbourhoodUploadOutputDto, ProcessedSearchByNeighbourhoodUpsertDto, ProcessedSearchByNeighbourhoodUpsertInputDto, ProcessedSearchByNeighbourhoodUpsertOutputDto } from "./dto/search.by.neighbourhood.dto";
import { SelfGraphqlMicroserviceService } from "@libs/dynamic-app";

@Injectable()
export class ProcessedSearchByNeighbourhoodFactory extends CrudFactory<ProcessedSearchByNeighbourhoodEntity> {

// ████████ FindCrudEngine ████████████████████████████████████████
public declare readonly findEngine: FindCrudEngine<
// entity (1)
ProcessedSearchByNeighbourhoodEntity,

// find (8)
ProcessedSearchByNeighbourhoodFindDto,
ProcessedSearchByNeighbourhoodFindInputWhereDto,
ProcessedSearchByNeighbourhoodFindInputSortOrderDto,
ProcessedSearchByNeighbourhoodFindInputGroupByDto,
ProcessedSearchByNeighbourhoodFindInputDto,
ProcessedSearchByNeighbourhoodFindOutputRowsDto,
FindOutputPaginationDto,
ProcessedSearchByNeighbourhoodFindOutputDto,

// find_one_by_id (2)
ProcessedSearchByNeighbourhoodFindOneByIdDto,
ProcessedSearchByNeighbourhoodFindOneByIdInputDto
>;

// ████████ CreateCrudEngine ████████████████████████████████████████
public declare readonly createEngine: CreateCrudEngine<
// entity (1)
ProcessedSearchByNeighbourhoodEntity,

// create (3)
ProcessedSearchByNeighbourhoodCreateDto,
ProcessedSearchByNeighbourhoodCreateInputDto,
ProcessedSearchByNeighbourhoodCreateOutputDto
>;

// ████████ UpdateCrudEngine ████████████████████████████████████████
public declare readonly updateEngine: UpdateCrudEngine<
// entity (1)
ProcessedSearchByNeighbourhoodEntity,

// update (6)
ProcessedSearchByNeighbourhoodUpdateDto,
ProcessedSearchByNeighbourhoodUpdateInputWhereDto,
ProcessedSearchByNeighbourhoodUpdateInputSetsDto,
ProcessedSearchByNeighbourhoodUpdateInputDto,
ProcessedSearchByNeighbourhoodUpdateOutputAffectedRowsDto,
ProcessedSearchByNeighbourhoodUpdateOutputDto
>;

// ████████ DeleteCrudEngine ████████████████████████████████████████
public declare readonly deleteEngine: DeleteCrudEngine<
// entity (1)
ProcessedSearchByNeighbourhoodEntity,

// soft_delete (4)
ProcessedSearchByNeighbourhoodSoftDeleteDto,
ProcessedSearchByNeighbourhoodSoftDeleteInputWhereDto,
ProcessedSearchByNeighbourhoodSoftDeleteInputDto,
ProcessedSearchByNeighbourhoodSoftDeleteOutputDto,

// delete (4)
ProcessedSearchByNeighbourhoodDeleteDto,
ProcessedSearchByNeighbourhoodDeleteInputWhereDto,
ProcessedSearchByNeighbourhoodDeleteInputDto,
ProcessedSearchByNeighbourhoodDeleteOutputDto,

// restore (4)
ProcessedSearchByNeighbourhoodRestoreDto,
ProcessedSearchByNeighbourhoodRestoreInputWhereDto,
ProcessedSearchByNeighbourhoodRestoreInputDto,
ProcessedSearchByNeighbourhoodRestoreOutputDto
>;

// ████████ UpsertCrudEngine ████████████████████████████████████████
public declare readonly upsertEngine: UpsertCrudEngine<
// entity (1)
ProcessedSearchByNeighbourhoodEntity,

// upsert (3)
ProcessedSearchByNeighbourhoodUpsertDto,
ProcessedSearchByNeighbourhoodUpsertInputDto,
ProcessedSearchByNeighbourhoodUpsertOutputDto
>;

// ████████ RemoveCrudEngine ████████████████████████████████████████
public declare readonly removeEngine: RemoveCrudEngine<
// entity (1)
ProcessedSearchByNeighbourhoodEntity,

// soft_remove (5)
ProcessedSearchByNeighbourhoodSoftRemoveDto,
ProcessedSearchByNeighbourhoodSoftRemoveInputWhereDto,
ProcessedSearchByNeighbourhoodSoftRemoveInputDto,
ProcessedSearchByNeighbourhoodSoftRemoveOutputAffectedRowsDto,
ProcessedSearchByNeighbourhoodSoftRemoveOutputDto,

// remove (4)
ProcessedSearchByNeighbourhoodRemoveDto,
ProcessedSearchByNeighbourhoodRemoveInputWhereDto,
ProcessedSearchByNeighbourhoodRemoveInputDto,
ProcessedSearchByNeighbourhoodRemoveOutputAffectedRowsDto,
ProcessedSearchByNeighbourhoodRemoveOutputDto,

// recover (5)
ProcessedSearchByNeighbourhoodRecoverDto,
ProcessedSearchByNeighbourhoodRecoverInputWhereDto,
ProcessedSearchByNeighbourhoodRecoverInputDto,
ProcessedSearchByNeighbourhoodRecoverOutputAffectedRowsDto,
ProcessedSearchByNeighbourhoodRecoverOutputDto
>;

// ████████ UploadCrudEngine ████████████████████████████████████████
public declare readonly uploadEngine: UploadCrudEngine<
// entity (1)
ProcessedSearchByNeighbourhoodEntity,

// upload (3)
ProcessedSearchByNeighbourhoodUploadDto,
ProcessedSearchByNeighbourhoodUploadInputDto,
ProcessedSearchByNeighbourhoodUploadOutputDto,

// upload_delete (3)
ProcessedSearchByNeighbourhoodUploadDeleteDto,
ProcessedSearchByNeighbourhoodUploadDeleteInputDto,
ProcessedSearchByNeighbourhoodUploadDeleteOutputDto
>;

constructor(
// data source
protected readonly dataSource: DataSource,

@InjectRepository(ProcessedSearchByNeighbourhoodEntity)
protected readonly repository: Repository<ProcessedSearchByNeighbourhoodEntity>,

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
    ProcessedSearchByNeighbourhoodEntity,
);

this.logService.setContext(ProcessedSearchByNeighbourhoodFactory.name);

// ████████ initialize FindCrudEngine ██████████████████████████████████████
this.initFindEngine
<
// find (8)
ProcessedSearchByNeighbourhoodFindDto,
ProcessedSearchByNeighbourhoodFindInputWhereDto,
ProcessedSearchByNeighbourhoodFindInputSortOrderDto,
ProcessedSearchByNeighbourhoodFindInputGroupByDto,
ProcessedSearchByNeighbourhoodFindInputDto,
ProcessedSearchByNeighbourhoodFindOutputRowsDto,
FindOutputPaginationDto,
ProcessedSearchByNeighbourhoodFindOutputDto,

// find_one_by_id (2)
ProcessedSearchByNeighbourhoodFindOneByIdDto,
ProcessedSearchByNeighbourhoodFindOneByIdInputDto
>
(
// find (8)
ProcessedSearchByNeighbourhoodFindDto,
ProcessedSearchByNeighbourhoodFindInputWhereDto,
ProcessedSearchByNeighbourhoodFindInputSortOrderDto,
ProcessedSearchByNeighbourhoodFindInputGroupByDto,
ProcessedSearchByNeighbourhoodFindInputDto,
ProcessedSearchByNeighbourhoodFindOutputRowsDto,
FindOutputPaginationDto,
ProcessedSearchByNeighbourhoodFindOutputDto,

// find_one_by_id (2)
ProcessedSearchByNeighbourhoodFindOneByIdDto,
ProcessedSearchByNeighbourhoodFindOneByIdInputDto
);


// ████████ initialize CreateCrudEngine ███████████████████████████████████████
this.initCreateEngine
<
// create (3)
ProcessedSearchByNeighbourhoodCreateDto,
ProcessedSearchByNeighbourhoodCreateInputDto,
ProcessedSearchByNeighbourhoodCreateOutputDto
>
(
// create (3)
ProcessedSearchByNeighbourhoodCreateDto,
ProcessedSearchByNeighbourhoodCreateInputDto,
ProcessedSearchByNeighbourhoodCreateOutputDto
);

// ████████ initialize UpdateCrudEngine ████████████████████████████████████████
this.initUpdateEngine
<
// update (6)
ProcessedSearchByNeighbourhoodUpdateDto,
ProcessedSearchByNeighbourhoodUpdateInputWhereDto,
ProcessedSearchByNeighbourhoodUpdateInputSetsDto,
ProcessedSearchByNeighbourhoodUpdateInputDto,
ProcessedSearchByNeighbourhoodUpdateOutputAffectedRowsDto,
ProcessedSearchByNeighbourhoodUpdateOutputDto
>
(
// update (6)
ProcessedSearchByNeighbourhoodUpdateDto,
ProcessedSearchByNeighbourhoodUpdateInputWhereDto,
ProcessedSearchByNeighbourhoodUpdateInputSetsDto,
ProcessedSearchByNeighbourhoodUpdateInputDto,
ProcessedSearchByNeighbourhoodUpdateOutputAffectedRowsDto,
ProcessedSearchByNeighbourhoodUpdateOutputDto
);


// ████████ initialize DeleteCrudEngine ███████████████████████████████████████████
this.initDeleteEngine
<
// soft_delete (4)
ProcessedSearchByNeighbourhoodSoftDeleteDto,
ProcessedSearchByNeighbourhoodSoftDeleteInputWhereDto,
ProcessedSearchByNeighbourhoodSoftDeleteInputDto,
ProcessedSearchByNeighbourhoodSoftDeleteOutputDto,

// delete (4)
ProcessedSearchByNeighbourhoodDeleteDto,
ProcessedSearchByNeighbourhoodDeleteInputWhereDto,
ProcessedSearchByNeighbourhoodDeleteInputDto,
ProcessedSearchByNeighbourhoodDeleteOutputDto,

// restore (4)
ProcessedSearchByNeighbourhoodRestoreDto,
ProcessedSearchByNeighbourhoodRestoreInputWhereDto,
ProcessedSearchByNeighbourhoodRestoreInputDto,
ProcessedSearchByNeighbourhoodRestoreOutputDto
>
(
// soft_delete (4)
ProcessedSearchByNeighbourhoodSoftDeleteDto,
ProcessedSearchByNeighbourhoodSoftDeleteInputWhereDto,
ProcessedSearchByNeighbourhoodSoftDeleteInputDto,
ProcessedSearchByNeighbourhoodSoftDeleteOutputDto,

// delete (4)
ProcessedSearchByNeighbourhoodDeleteDto,
ProcessedSearchByNeighbourhoodDeleteInputWhereDto,
ProcessedSearchByNeighbourhoodDeleteInputDto,
ProcessedSearchByNeighbourhoodDeleteOutputDto,

// restore (4)
ProcessedSearchByNeighbourhoodRestoreDto,
ProcessedSearchByNeighbourhoodRestoreInputWhereDto,
ProcessedSearchByNeighbourhoodRestoreInputDto,
ProcessedSearchByNeighbourhoodRestoreOutputDto
);



// ████████ initialize UpsertCrudEngine ███████████████████████████████████████████
this.initUpsertEngine
<
// upsert (3)
ProcessedSearchByNeighbourhoodUpsertDto,
ProcessedSearchByNeighbourhoodUpsertInputDto,
ProcessedSearchByNeighbourhoodUpsertOutputDto
>
(
// upsert (3)
ProcessedSearchByNeighbourhoodUpsertDto,
ProcessedSearchByNeighbourhoodUpsertInputDto,
ProcessedSearchByNeighbourhoodUpsertOutputDto
);




// ████████ initialize RemoveCrudEngine ███████████████████████████████████████████
this.initRemoveEngine
<
// soft_remove (5)
ProcessedSearchByNeighbourhoodSoftRemoveDto,
ProcessedSearchByNeighbourhoodSoftRemoveInputWhereDto,
ProcessedSearchByNeighbourhoodSoftRemoveInputDto,
ProcessedSearchByNeighbourhoodSoftRemoveOutputAffectedRowsDto,
ProcessedSearchByNeighbourhoodSoftRemoveOutputDto,

// remove (4)
ProcessedSearchByNeighbourhoodRemoveDto,
ProcessedSearchByNeighbourhoodRemoveInputWhereDto,
ProcessedSearchByNeighbourhoodRemoveInputDto,
ProcessedSearchByNeighbourhoodRemoveOutputAffectedRowsDto,
ProcessedSearchByNeighbourhoodRemoveOutputDto,

// recover (5)
ProcessedSearchByNeighbourhoodRecoverDto,
ProcessedSearchByNeighbourhoodRecoverInputWhereDto,
ProcessedSearchByNeighbourhoodRecoverInputDto,
ProcessedSearchByNeighbourhoodRecoverOutputAffectedRowsDto,
ProcessedSearchByNeighbourhoodRecoverOutputDto
>
(
// soft_remove (5)
ProcessedSearchByNeighbourhoodSoftRemoveDto,
ProcessedSearchByNeighbourhoodSoftRemoveInputWhereDto,
ProcessedSearchByNeighbourhoodSoftRemoveInputDto,
ProcessedSearchByNeighbourhoodSoftRemoveOutputAffectedRowsDto,
ProcessedSearchByNeighbourhoodSoftRemoveOutputDto,

// remove (4)
ProcessedSearchByNeighbourhoodRemoveDto,
ProcessedSearchByNeighbourhoodRemoveInputWhereDto,
ProcessedSearchByNeighbourhoodRemoveInputDto,
ProcessedSearchByNeighbourhoodRemoveOutputAffectedRowsDto,
ProcessedSearchByNeighbourhoodRemoveOutputDto,

// recover (5)
ProcessedSearchByNeighbourhoodRecoverDto,
ProcessedSearchByNeighbourhoodRecoverInputWhereDto,
ProcessedSearchByNeighbourhoodRecoverInputDto,
ProcessedSearchByNeighbourhoodRecoverOutputAffectedRowsDto,
ProcessedSearchByNeighbourhoodRecoverOutputDto
);



// ████████ initialize UploadCrudEngine ███████████████████████████████████████████
this.initUploadEngine
<
// upload (3)
ProcessedSearchByNeighbourhoodUploadDto,
ProcessedSearchByNeighbourhoodUploadInputDto,
ProcessedSearchByNeighbourhoodUploadOutputDto,

// upload_delete (3)
ProcessedSearchByNeighbourhoodUploadDeleteDto,
ProcessedSearchByNeighbourhoodUploadDeleteInputDto,
ProcessedSearchByNeighbourhoodUploadDeleteOutputDto
>
(
// upload (3)
ProcessedSearchByNeighbourhoodUploadDto,
ProcessedSearchByNeighbourhoodUploadInputDto,
ProcessedSearchByNeighbourhoodUploadOutputDto,

// upload_delete (3)
ProcessedSearchByNeighbourhoodUploadDeleteDto,
ProcessedSearchByNeighbourhoodUploadDeleteInputDto,
ProcessedSearchByNeighbourhoodUploadDeleteOutputDto
);


// ████████ initialize ImportExportCrudEngine █████████████████████████████████████

}}