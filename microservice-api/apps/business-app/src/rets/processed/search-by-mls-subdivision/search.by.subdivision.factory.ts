import { ProcessedSearchBySubdivisionEntity } from "./entities/search.by.subdivision.entity";
import { Injectable } from "@nestjs/common";
import { DataSource, Repository } from "typeorm";
import { InjectRepository } from "@nestjs/typeorm";
import { ConfService, CreateCrudEngine, CrudFactory, DataValidationPipe, DeleteCrudEngine, FindCrudEngine, FindOutputPaginationDto, LibraryAppService, LogService, RemoveCrudEngine, UpdateCrudEngine, UploadCrudEngine, UpsertCrudEngine  } from "@libs/library-app";
import { ProcessedSearchBySubdivisionCreateDto, ProcessedSearchBySubdivisionCreateInputDto, ProcessedSearchBySubdivisionCreateOutputDto, ProcessedSearchBySubdivisionDeleteDto, ProcessedSearchBySubdivisionDeleteInputDto, ProcessedSearchBySubdivisionDeleteInputWhereDto, ProcessedSearchBySubdivisionDeleteOutputDto, ProcessedSearchBySubdivisionFindDto, ProcessedSearchBySubdivisionFindInputDto, ProcessedSearchBySubdivisionFindInputGroupByDto, ProcessedSearchBySubdivisionFindInputSortOrderDto, ProcessedSearchBySubdivisionFindInputWhereDto, ProcessedSearchBySubdivisionFindOneByIdDto, ProcessedSearchBySubdivisionFindOneByIdInputDto, ProcessedSearchBySubdivisionFindOutputDto, ProcessedSearchBySubdivisionFindOutputRowsDto, ProcessedSearchBySubdivisionRecoverDto, ProcessedSearchBySubdivisionRecoverInputDto, ProcessedSearchBySubdivisionRecoverInputWhereDto, ProcessedSearchBySubdivisionRecoverOutputDto, ProcessedSearchBySubdivisionRecoverOutputAffectedRowsDto, ProcessedSearchBySubdivisionRemoveDto, ProcessedSearchBySubdivisionRemoveInputDto, ProcessedSearchBySubdivisionRemoveInputWhereDto, ProcessedSearchBySubdivisionRemoveOutputDto, ProcessedSearchBySubdivisionRemoveOutputAffectedRowsDto, ProcessedSearchBySubdivisionRestoreDto, ProcessedSearchBySubdivisionRestoreInputDto, ProcessedSearchBySubdivisionRestoreInputWhereDto, ProcessedSearchBySubdivisionRestoreOutputDto, ProcessedSearchBySubdivisionSoftDeleteDto, ProcessedSearchBySubdivisionSoftDeleteInputDto, ProcessedSearchBySubdivisionSoftDeleteInputWhereDto, ProcessedSearchBySubdivisionSoftDeleteOutputDto, ProcessedSearchBySubdivisionSoftRemoveDto, ProcessedSearchBySubdivisionSoftRemoveInputDto, ProcessedSearchBySubdivisionSoftRemoveInputWhereDto, ProcessedSearchBySubdivisionSoftRemoveOutputDto, ProcessedSearchBySubdivisionSoftRemoveOutputAffectedRowsDto, ProcessedSearchBySubdivisionUpdateDto, ProcessedSearchBySubdivisionUpdateInputDto, ProcessedSearchBySubdivisionUpdateInputSetsDto, ProcessedSearchBySubdivisionUpdateInputWhereDto, ProcessedSearchBySubdivisionUpdateOutputDto, ProcessedSearchBySubdivisionUpdateOutputAffectedRowsDto, ProcessedSearchBySubdivisionUploadDeleteDto, ProcessedSearchBySubdivisionUploadDeleteInputDto, ProcessedSearchBySubdivisionUploadDeleteOutputDto, ProcessedSearchBySubdivisionUploadDto, ProcessedSearchBySubdivisionUploadInputDto, ProcessedSearchBySubdivisionUploadOutputDto, ProcessedSearchBySubdivisionUpsertDto, ProcessedSearchBySubdivisionUpsertInputDto, ProcessedSearchBySubdivisionUpsertOutputDto } from "./dto/search.by.subdivision.dto";
import { SelfGraphqlMicroserviceService } from "@libs/dynamic-app";

@Injectable()
export class ProcessedSearchBySubdivisionFactory extends CrudFactory<ProcessedSearchBySubdivisionEntity> {

// ████████ FindCrudEngine ████████████████████████████████████████
public declare readonly findEngine: FindCrudEngine<
// entity (1)
ProcessedSearchBySubdivisionEntity,

// find (8)
ProcessedSearchBySubdivisionFindDto,
ProcessedSearchBySubdivisionFindInputWhereDto,
ProcessedSearchBySubdivisionFindInputSortOrderDto,
ProcessedSearchBySubdivisionFindInputGroupByDto,
ProcessedSearchBySubdivisionFindInputDto,
ProcessedSearchBySubdivisionFindOutputRowsDto,
FindOutputPaginationDto,
ProcessedSearchBySubdivisionFindOutputDto,

// find_one_by_id (2)
ProcessedSearchBySubdivisionFindOneByIdDto,
ProcessedSearchBySubdivisionFindOneByIdInputDto
>;

// ████████ CreateCrudEngine ████████████████████████████████████████
public declare readonly createEngine: CreateCrudEngine<
// entity (1)
ProcessedSearchBySubdivisionEntity,

// create (3)
ProcessedSearchBySubdivisionCreateDto,
ProcessedSearchBySubdivisionCreateInputDto,
ProcessedSearchBySubdivisionCreateOutputDto
>;

// ████████ UpdateCrudEngine ████████████████████████████████████████
public declare readonly updateEngine: UpdateCrudEngine<
// entity (1)
ProcessedSearchBySubdivisionEntity,

// update (6)
ProcessedSearchBySubdivisionUpdateDto,
ProcessedSearchBySubdivisionUpdateInputWhereDto,
ProcessedSearchBySubdivisionUpdateInputSetsDto,
ProcessedSearchBySubdivisionUpdateInputDto,
ProcessedSearchBySubdivisionUpdateOutputAffectedRowsDto,
ProcessedSearchBySubdivisionUpdateOutputDto
>;

// ████████ DeleteCrudEngine ████████████████████████████████████████
public declare readonly deleteEngine: DeleteCrudEngine<
// entity (1)
ProcessedSearchBySubdivisionEntity,

// soft_delete (4)
ProcessedSearchBySubdivisionSoftDeleteDto,
ProcessedSearchBySubdivisionSoftDeleteInputWhereDto,
ProcessedSearchBySubdivisionSoftDeleteInputDto,
ProcessedSearchBySubdivisionSoftDeleteOutputDto,

// delete (4)
ProcessedSearchBySubdivisionDeleteDto,
ProcessedSearchBySubdivisionDeleteInputWhereDto,
ProcessedSearchBySubdivisionDeleteInputDto,
ProcessedSearchBySubdivisionDeleteOutputDto,

// restore (4)
ProcessedSearchBySubdivisionRestoreDto,
ProcessedSearchBySubdivisionRestoreInputWhereDto,
ProcessedSearchBySubdivisionRestoreInputDto,
ProcessedSearchBySubdivisionRestoreOutputDto
>;

// ████████ UpsertCrudEngine ████████████████████████████████████████
public declare readonly upsertEngine: UpsertCrudEngine<
// entity (1)
ProcessedSearchBySubdivisionEntity,

// upsert (3)
ProcessedSearchBySubdivisionUpsertDto,
ProcessedSearchBySubdivisionUpsertInputDto,
ProcessedSearchBySubdivisionUpsertOutputDto
>;

// ████████ RemoveCrudEngine ████████████████████████████████████████
public declare readonly removeEngine: RemoveCrudEngine<
// entity (1)
ProcessedSearchBySubdivisionEntity,

// soft_remove (5)
ProcessedSearchBySubdivisionSoftRemoveDto,
ProcessedSearchBySubdivisionSoftRemoveInputWhereDto,
ProcessedSearchBySubdivisionSoftRemoveInputDto,
ProcessedSearchBySubdivisionSoftRemoveOutputAffectedRowsDto,
ProcessedSearchBySubdivisionSoftRemoveOutputDto,

// remove (4)
ProcessedSearchBySubdivisionRemoveDto,
ProcessedSearchBySubdivisionRemoveInputWhereDto,
ProcessedSearchBySubdivisionRemoveInputDto,
ProcessedSearchBySubdivisionRemoveOutputAffectedRowsDto,
ProcessedSearchBySubdivisionRemoveOutputDto,

// recover (5)
ProcessedSearchBySubdivisionRecoverDto,
ProcessedSearchBySubdivisionRecoverInputWhereDto,
ProcessedSearchBySubdivisionRecoverInputDto,
ProcessedSearchBySubdivisionRecoverOutputAffectedRowsDto,
ProcessedSearchBySubdivisionRecoverOutputDto
>;

// ████████ UploadCrudEngine ████████████████████████████████████████
public declare readonly uploadEngine: UploadCrudEngine<
// entity (1)
ProcessedSearchBySubdivisionEntity,

// upload (3)
ProcessedSearchBySubdivisionUploadDto,
ProcessedSearchBySubdivisionUploadInputDto,
ProcessedSearchBySubdivisionUploadOutputDto,

// upload_delete (3)
ProcessedSearchBySubdivisionUploadDeleteDto,
ProcessedSearchBySubdivisionUploadDeleteInputDto,
ProcessedSearchBySubdivisionUploadDeleteOutputDto
>;

constructor(
// data source
protected readonly dataSource: DataSource,

@InjectRepository(ProcessedSearchBySubdivisionEntity)
protected readonly repository: Repository<ProcessedSearchBySubdivisionEntity>,

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
    ProcessedSearchBySubdivisionEntity,
);

this.logService.setContext(ProcessedSearchBySubdivisionFactory.name);

// ████████ initialize FindCrudEngine ██████████████████████████████████████
this.initFindEngine
<
// find (8)
ProcessedSearchBySubdivisionFindDto,
ProcessedSearchBySubdivisionFindInputWhereDto,
ProcessedSearchBySubdivisionFindInputSortOrderDto,
ProcessedSearchBySubdivisionFindInputGroupByDto,
ProcessedSearchBySubdivisionFindInputDto,
ProcessedSearchBySubdivisionFindOutputRowsDto,
FindOutputPaginationDto,
ProcessedSearchBySubdivisionFindOutputDto,

// find_one_by_id (2)
ProcessedSearchBySubdivisionFindOneByIdDto,
ProcessedSearchBySubdivisionFindOneByIdInputDto
>
(
// find (8)
ProcessedSearchBySubdivisionFindDto,
ProcessedSearchBySubdivisionFindInputWhereDto,
ProcessedSearchBySubdivisionFindInputSortOrderDto,
ProcessedSearchBySubdivisionFindInputGroupByDto,
ProcessedSearchBySubdivisionFindInputDto,
ProcessedSearchBySubdivisionFindOutputRowsDto,
FindOutputPaginationDto,
ProcessedSearchBySubdivisionFindOutputDto,

// find_one_by_id (2)
ProcessedSearchBySubdivisionFindOneByIdDto,
ProcessedSearchBySubdivisionFindOneByIdInputDto
);


// ████████ initialize CreateCrudEngine ███████████████████████████████████████
this.initCreateEngine
<
// create (3)
ProcessedSearchBySubdivisionCreateDto,
ProcessedSearchBySubdivisionCreateInputDto,
ProcessedSearchBySubdivisionCreateOutputDto
>
(
// create (3)
ProcessedSearchBySubdivisionCreateDto,
ProcessedSearchBySubdivisionCreateInputDto,
ProcessedSearchBySubdivisionCreateOutputDto
);

// ████████ initialize UpdateCrudEngine ████████████████████████████████████████
this.initUpdateEngine
<
// update (6)
ProcessedSearchBySubdivisionUpdateDto,
ProcessedSearchBySubdivisionUpdateInputWhereDto,
ProcessedSearchBySubdivisionUpdateInputSetsDto,
ProcessedSearchBySubdivisionUpdateInputDto,
ProcessedSearchBySubdivisionUpdateOutputAffectedRowsDto,
ProcessedSearchBySubdivisionUpdateOutputDto
>
(
// update (6)
ProcessedSearchBySubdivisionUpdateDto,
ProcessedSearchBySubdivisionUpdateInputWhereDto,
ProcessedSearchBySubdivisionUpdateInputSetsDto,
ProcessedSearchBySubdivisionUpdateInputDto,
ProcessedSearchBySubdivisionUpdateOutputAffectedRowsDto,
ProcessedSearchBySubdivisionUpdateOutputDto
);


// ████████ initialize DeleteCrudEngine ███████████████████████████████████████████
this.initDeleteEngine
<
// soft_delete (4)
ProcessedSearchBySubdivisionSoftDeleteDto,
ProcessedSearchBySubdivisionSoftDeleteInputWhereDto,
ProcessedSearchBySubdivisionSoftDeleteInputDto,
ProcessedSearchBySubdivisionSoftDeleteOutputDto,

// delete (4)
ProcessedSearchBySubdivisionDeleteDto,
ProcessedSearchBySubdivisionDeleteInputWhereDto,
ProcessedSearchBySubdivisionDeleteInputDto,
ProcessedSearchBySubdivisionDeleteOutputDto,

// restore (4)
ProcessedSearchBySubdivisionRestoreDto,
ProcessedSearchBySubdivisionRestoreInputWhereDto,
ProcessedSearchBySubdivisionRestoreInputDto,
ProcessedSearchBySubdivisionRestoreOutputDto
>
(
// soft_delete (4)
ProcessedSearchBySubdivisionSoftDeleteDto,
ProcessedSearchBySubdivisionSoftDeleteInputWhereDto,
ProcessedSearchBySubdivisionSoftDeleteInputDto,
ProcessedSearchBySubdivisionSoftDeleteOutputDto,

// delete (4)
ProcessedSearchBySubdivisionDeleteDto,
ProcessedSearchBySubdivisionDeleteInputWhereDto,
ProcessedSearchBySubdivisionDeleteInputDto,
ProcessedSearchBySubdivisionDeleteOutputDto,

// restore (4)
ProcessedSearchBySubdivisionRestoreDto,
ProcessedSearchBySubdivisionRestoreInputWhereDto,
ProcessedSearchBySubdivisionRestoreInputDto,
ProcessedSearchBySubdivisionRestoreOutputDto
);



// ████████ initialize UpsertCrudEngine ███████████████████████████████████████████
this.initUpsertEngine
<
// upsert (3)
ProcessedSearchBySubdivisionUpsertDto,
ProcessedSearchBySubdivisionUpsertInputDto,
ProcessedSearchBySubdivisionUpsertOutputDto
>
(
// upsert (3)
ProcessedSearchBySubdivisionUpsertDto,
ProcessedSearchBySubdivisionUpsertInputDto,
ProcessedSearchBySubdivisionUpsertOutputDto
);




// ████████ initialize RemoveCrudEngine ███████████████████████████████████████████
this.initRemoveEngine
<
// soft_remove (5)
ProcessedSearchBySubdivisionSoftRemoveDto,
ProcessedSearchBySubdivisionSoftRemoveInputWhereDto,
ProcessedSearchBySubdivisionSoftRemoveInputDto,
ProcessedSearchBySubdivisionSoftRemoveOutputAffectedRowsDto,
ProcessedSearchBySubdivisionSoftRemoveOutputDto,

// remove (4)
ProcessedSearchBySubdivisionRemoveDto,
ProcessedSearchBySubdivisionRemoveInputWhereDto,
ProcessedSearchBySubdivisionRemoveInputDto,
ProcessedSearchBySubdivisionRemoveOutputAffectedRowsDto,
ProcessedSearchBySubdivisionRemoveOutputDto,

// recover (5)
ProcessedSearchBySubdivisionRecoverDto,
ProcessedSearchBySubdivisionRecoverInputWhereDto,
ProcessedSearchBySubdivisionRecoverInputDto,
ProcessedSearchBySubdivisionRecoverOutputAffectedRowsDto,
ProcessedSearchBySubdivisionRecoverOutputDto
>
(
// soft_remove (5)
ProcessedSearchBySubdivisionSoftRemoveDto,
ProcessedSearchBySubdivisionSoftRemoveInputWhereDto,
ProcessedSearchBySubdivisionSoftRemoveInputDto,
ProcessedSearchBySubdivisionSoftRemoveOutputAffectedRowsDto,
ProcessedSearchBySubdivisionSoftRemoveOutputDto,

// remove (4)
ProcessedSearchBySubdivisionRemoveDto,
ProcessedSearchBySubdivisionRemoveInputWhereDto,
ProcessedSearchBySubdivisionRemoveInputDto,
ProcessedSearchBySubdivisionRemoveOutputAffectedRowsDto,
ProcessedSearchBySubdivisionRemoveOutputDto,

// recover (5)
ProcessedSearchBySubdivisionRecoverDto,
ProcessedSearchBySubdivisionRecoverInputWhereDto,
ProcessedSearchBySubdivisionRecoverInputDto,
ProcessedSearchBySubdivisionRecoverOutputAffectedRowsDto,
ProcessedSearchBySubdivisionRecoverOutputDto
);



// ████████ initialize UploadCrudEngine ███████████████████████████████████████████
this.initUploadEngine
<
// upload (3)
ProcessedSearchBySubdivisionUploadDto,
ProcessedSearchBySubdivisionUploadInputDto,
ProcessedSearchBySubdivisionUploadOutputDto,

// upload_delete (3)
ProcessedSearchBySubdivisionUploadDeleteDto,
ProcessedSearchBySubdivisionUploadDeleteInputDto,
ProcessedSearchBySubdivisionUploadDeleteOutputDto
>
(
// upload (3)
ProcessedSearchBySubdivisionUploadDto,
ProcessedSearchBySubdivisionUploadInputDto,
ProcessedSearchBySubdivisionUploadOutputDto,

// upload_delete (3)
ProcessedSearchBySubdivisionUploadDeleteDto,
ProcessedSearchBySubdivisionUploadDeleteInputDto,
ProcessedSearchBySubdivisionUploadDeleteOutputDto
);


// ████████ initialize ImportExportCrudEngine █████████████████████████████████████

}}