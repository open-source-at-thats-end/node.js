import { ProcessedSearchByCountyEntity } from "./entities/search.by.county.entity";
import { Injectable } from "@nestjs/common";
import { DataSource, Repository } from "typeorm";
import { InjectRepository } from "@nestjs/typeorm";
import { ConfService, CreateCrudEngine, CrudFactory, DataValidationPipe, DeleteCrudEngine, FindCrudEngine, FindOutputPaginationDto, LibraryAppService, LogService, RemoveCrudEngine, UpdateCrudEngine, UploadCrudEngine, UpsertCrudEngine  } from "@libs/library-app";
import { ProcessedSearchByCountyCreateDto, ProcessedSearchByCountyCreateInputDto, ProcessedSearchByCountyCreateOutputDto, ProcessedSearchByCountyDeleteDto, ProcessedSearchByCountyDeleteInputDto, ProcessedSearchByCountyDeleteInputWhereDto, ProcessedSearchByCountyDeleteOutputDto, ProcessedSearchByCountyFindDto, ProcessedSearchByCountyFindInputDto, ProcessedSearchByCountyFindInputGroupByDto, ProcessedSearchByCountyFindInputSortOrderDto, ProcessedSearchByCountyFindInputWhereDto, ProcessedSearchByCountyFindOneByIdDto, ProcessedSearchByCountyFindOneByIdInputDto, ProcessedSearchByCountyFindOutputDto, ProcessedSearchByCountyFindOutputRowsDto, ProcessedSearchByCountyRecoverDto, ProcessedSearchByCountyRecoverInputDto, ProcessedSearchByCountyRecoverInputWhereDto, ProcessedSearchByCountyRecoverOutputDto, ProcessedSearchByCountyRecoverOutputAffectedRowsDto, ProcessedSearchByCountyRemoveDto, ProcessedSearchByCountyRemoveInputDto, ProcessedSearchByCountyRemoveInputWhereDto, ProcessedSearchByCountyRemoveOutputDto, ProcessedSearchByCountyRemoveOutputAffectedRowsDto, ProcessedSearchByCountyRestoreDto, ProcessedSearchByCountyRestoreInputDto, ProcessedSearchByCountyRestoreInputWhereDto, ProcessedSearchByCountyRestoreOutputDto, ProcessedSearchByCountySoftDeleteDto, ProcessedSearchByCountySoftDeleteInputDto, ProcessedSearchByCountySoftDeleteInputWhereDto, ProcessedSearchByCountySoftDeleteOutputDto, ProcessedSearchByCountySoftRemoveDto, ProcessedSearchByCountySoftRemoveInputDto, ProcessedSearchByCountySoftRemoveInputWhereDto, ProcessedSearchByCountySoftRemoveOutputDto, ProcessedSearchByCountySoftRemoveOutputAffectedRowsDto, ProcessedSearchByCountyUpdateDto, ProcessedSearchByCountyUpdateInputDto, ProcessedSearchByCountyUpdateInputSetsDto, ProcessedSearchByCountyUpdateInputWhereDto, ProcessedSearchByCountyUpdateOutputDto, ProcessedSearchByCountyUpdateOutputAffectedRowsDto, ProcessedSearchByCountyUploadDeleteDto, ProcessedSearchByCountyUploadDeleteInputDto, ProcessedSearchByCountyUploadDeleteOutputDto, ProcessedSearchByCountyUploadDto, ProcessedSearchByCountyUploadInputDto, ProcessedSearchByCountyUploadOutputDto, ProcessedSearchByCountyUpsertDto, ProcessedSearchByCountyUpsertInputDto, ProcessedSearchByCountyUpsertOutputDto } from "./dto/search.by.county.dto";
import { SelfGraphqlMicroserviceService } from "@libs/dynamic-app";

@Injectable()
export class ProcessedSearchByCountyFactory extends CrudFactory<ProcessedSearchByCountyEntity> {

// ████████ FindCrudEngine ████████████████████████████████████████
public declare readonly findEngine: FindCrudEngine<
// entity (1)
ProcessedSearchByCountyEntity,

// find (8)
ProcessedSearchByCountyFindDto,
ProcessedSearchByCountyFindInputWhereDto,
ProcessedSearchByCountyFindInputSortOrderDto,
ProcessedSearchByCountyFindInputGroupByDto,
ProcessedSearchByCountyFindInputDto,
ProcessedSearchByCountyFindOutputRowsDto,
FindOutputPaginationDto,
ProcessedSearchByCountyFindOutputDto,

// find_one_by_id (2)
ProcessedSearchByCountyFindOneByIdDto,
ProcessedSearchByCountyFindOneByIdInputDto
>;

// ████████ CreateCrudEngine ████████████████████████████████████████
public declare readonly createEngine: CreateCrudEngine<
// entity (1)
ProcessedSearchByCountyEntity,

// create (3)
ProcessedSearchByCountyCreateDto,
ProcessedSearchByCountyCreateInputDto,
ProcessedSearchByCountyCreateOutputDto
>;

// ████████ UpdateCrudEngine ████████████████████████████████████████
public declare readonly updateEngine: UpdateCrudEngine<
// entity (1)
ProcessedSearchByCountyEntity,

// update (6)
ProcessedSearchByCountyUpdateDto,
ProcessedSearchByCountyUpdateInputWhereDto,
ProcessedSearchByCountyUpdateInputSetsDto,
ProcessedSearchByCountyUpdateInputDto,
ProcessedSearchByCountyUpdateOutputAffectedRowsDto,
ProcessedSearchByCountyUpdateOutputDto
>;

// ████████ DeleteCrudEngine ████████████████████████████████████████
public declare readonly deleteEngine: DeleteCrudEngine<
// entity (1)
ProcessedSearchByCountyEntity,

// soft_delete (4)
ProcessedSearchByCountySoftDeleteDto,
ProcessedSearchByCountySoftDeleteInputWhereDto,
ProcessedSearchByCountySoftDeleteInputDto,
ProcessedSearchByCountySoftDeleteOutputDto,

// delete (4)
ProcessedSearchByCountyDeleteDto,
ProcessedSearchByCountyDeleteInputWhereDto,
ProcessedSearchByCountyDeleteInputDto,
ProcessedSearchByCountyDeleteOutputDto,

// restore (4)
ProcessedSearchByCountyRestoreDto,
ProcessedSearchByCountyRestoreInputWhereDto,
ProcessedSearchByCountyRestoreInputDto,
ProcessedSearchByCountyRestoreOutputDto
>;

// ████████ UpsertCrudEngine ████████████████████████████████████████
public declare readonly upsertEngine: UpsertCrudEngine<
// entity (1)
ProcessedSearchByCountyEntity,

// upsert (3)
ProcessedSearchByCountyUpsertDto,
ProcessedSearchByCountyUpsertInputDto,
ProcessedSearchByCountyUpsertOutputDto
>;

// ████████ RemoveCrudEngine ████████████████████████████████████████
public declare readonly removeEngine: RemoveCrudEngine<
// entity (1)
ProcessedSearchByCountyEntity,

// soft_remove (5)
ProcessedSearchByCountySoftRemoveDto,
ProcessedSearchByCountySoftRemoveInputWhereDto,
ProcessedSearchByCountySoftRemoveInputDto,
ProcessedSearchByCountySoftRemoveOutputAffectedRowsDto,
ProcessedSearchByCountySoftRemoveOutputDto,

// remove (4)
ProcessedSearchByCountyRemoveDto,
ProcessedSearchByCountyRemoveInputWhereDto,
ProcessedSearchByCountyRemoveInputDto,
ProcessedSearchByCountyRemoveOutputAffectedRowsDto,
ProcessedSearchByCountyRemoveOutputDto,

// recover (5)
ProcessedSearchByCountyRecoverDto,
ProcessedSearchByCountyRecoverInputWhereDto,
ProcessedSearchByCountyRecoverInputDto,
ProcessedSearchByCountyRecoverOutputAffectedRowsDto,
ProcessedSearchByCountyRecoverOutputDto
>;

// ████████ UploadCrudEngine ████████████████████████████████████████
public declare readonly uploadEngine: UploadCrudEngine<
// entity (1)
ProcessedSearchByCountyEntity,

// upload (3)
ProcessedSearchByCountyUploadDto,
ProcessedSearchByCountyUploadInputDto,
ProcessedSearchByCountyUploadOutputDto,

// upload_delete (3)
ProcessedSearchByCountyUploadDeleteDto,
ProcessedSearchByCountyUploadDeleteInputDto,
ProcessedSearchByCountyUploadDeleteOutputDto
>;

constructor(
// data source
protected readonly dataSource: DataSource,

@InjectRepository(ProcessedSearchByCountyEntity)
protected readonly repository: Repository<ProcessedSearchByCountyEntity>,

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
    ProcessedSearchByCountyEntity,
);

this.logService.setContext(ProcessedSearchByCountyFactory.name);

// ████████ initialize FindCrudEngine ██████████████████████████████████████
this.initFindEngine
<
// find (8)
ProcessedSearchByCountyFindDto,
ProcessedSearchByCountyFindInputWhereDto,
ProcessedSearchByCountyFindInputSortOrderDto,
ProcessedSearchByCountyFindInputGroupByDto,
ProcessedSearchByCountyFindInputDto,
ProcessedSearchByCountyFindOutputRowsDto,
FindOutputPaginationDto,
ProcessedSearchByCountyFindOutputDto,

// find_one_by_id (2)
ProcessedSearchByCountyFindOneByIdDto,
ProcessedSearchByCountyFindOneByIdInputDto
>
(
// find (8)
ProcessedSearchByCountyFindDto,
ProcessedSearchByCountyFindInputWhereDto,
ProcessedSearchByCountyFindInputSortOrderDto,
ProcessedSearchByCountyFindInputGroupByDto,
ProcessedSearchByCountyFindInputDto,
ProcessedSearchByCountyFindOutputRowsDto,
FindOutputPaginationDto,
ProcessedSearchByCountyFindOutputDto,

// find_one_by_id (2)
ProcessedSearchByCountyFindOneByIdDto,
ProcessedSearchByCountyFindOneByIdInputDto
);


// ████████ initialize CreateCrudEngine ███████████████████████████████████████
this.initCreateEngine
<
// create (3)
ProcessedSearchByCountyCreateDto,
ProcessedSearchByCountyCreateInputDto,
ProcessedSearchByCountyCreateOutputDto
>
(
// create (3)
ProcessedSearchByCountyCreateDto,
ProcessedSearchByCountyCreateInputDto,
ProcessedSearchByCountyCreateOutputDto
);

// ████████ initialize UpdateCrudEngine ████████████████████████████████████████
this.initUpdateEngine
<
// update (6)
ProcessedSearchByCountyUpdateDto,
ProcessedSearchByCountyUpdateInputWhereDto,
ProcessedSearchByCountyUpdateInputSetsDto,
ProcessedSearchByCountyUpdateInputDto,
ProcessedSearchByCountyUpdateOutputAffectedRowsDto,
ProcessedSearchByCountyUpdateOutputDto
>
(
// update (6)
ProcessedSearchByCountyUpdateDto,
ProcessedSearchByCountyUpdateInputWhereDto,
ProcessedSearchByCountyUpdateInputSetsDto,
ProcessedSearchByCountyUpdateInputDto,
ProcessedSearchByCountyUpdateOutputAffectedRowsDto,
ProcessedSearchByCountyUpdateOutputDto
);


// ████████ initialize DeleteCrudEngine ███████████████████████████████████████████
this.initDeleteEngine
<
// soft_delete (4)
ProcessedSearchByCountySoftDeleteDto,
ProcessedSearchByCountySoftDeleteInputWhereDto,
ProcessedSearchByCountySoftDeleteInputDto,
ProcessedSearchByCountySoftDeleteOutputDto,

// delete (4)
ProcessedSearchByCountyDeleteDto,
ProcessedSearchByCountyDeleteInputWhereDto,
ProcessedSearchByCountyDeleteInputDto,
ProcessedSearchByCountyDeleteOutputDto,

// restore (4)
ProcessedSearchByCountyRestoreDto,
ProcessedSearchByCountyRestoreInputWhereDto,
ProcessedSearchByCountyRestoreInputDto,
ProcessedSearchByCountyRestoreOutputDto
>
(
// soft_delete (4)
ProcessedSearchByCountySoftDeleteDto,
ProcessedSearchByCountySoftDeleteInputWhereDto,
ProcessedSearchByCountySoftDeleteInputDto,
ProcessedSearchByCountySoftDeleteOutputDto,

// delete (4)
ProcessedSearchByCountyDeleteDto,
ProcessedSearchByCountyDeleteInputWhereDto,
ProcessedSearchByCountyDeleteInputDto,
ProcessedSearchByCountyDeleteOutputDto,

// restore (4)
ProcessedSearchByCountyRestoreDto,
ProcessedSearchByCountyRestoreInputWhereDto,
ProcessedSearchByCountyRestoreInputDto,
ProcessedSearchByCountyRestoreOutputDto
);



// ████████ initialize UpsertCrudEngine ███████████████████████████████████████████
this.initUpsertEngine
<
// upsert (3)
ProcessedSearchByCountyUpsertDto,
ProcessedSearchByCountyUpsertInputDto,
ProcessedSearchByCountyUpsertOutputDto
>
(
// upsert (3)
ProcessedSearchByCountyUpsertDto,
ProcessedSearchByCountyUpsertInputDto,
ProcessedSearchByCountyUpsertOutputDto
);




// ████████ initialize RemoveCrudEngine ███████████████████████████████████████████
this.initRemoveEngine
<
// soft_remove (5)
ProcessedSearchByCountySoftRemoveDto,
ProcessedSearchByCountySoftRemoveInputWhereDto,
ProcessedSearchByCountySoftRemoveInputDto,
ProcessedSearchByCountySoftRemoveOutputAffectedRowsDto,
ProcessedSearchByCountySoftRemoveOutputDto,

// remove (4)
ProcessedSearchByCountyRemoveDto,
ProcessedSearchByCountyRemoveInputWhereDto,
ProcessedSearchByCountyRemoveInputDto,
ProcessedSearchByCountyRemoveOutputAffectedRowsDto,
ProcessedSearchByCountyRemoveOutputDto,

// recover (5)
ProcessedSearchByCountyRecoverDto,
ProcessedSearchByCountyRecoverInputWhereDto,
ProcessedSearchByCountyRecoverInputDto,
ProcessedSearchByCountyRecoverOutputAffectedRowsDto,
ProcessedSearchByCountyRecoverOutputDto
>
(
// soft_remove (5)
ProcessedSearchByCountySoftRemoveDto,
ProcessedSearchByCountySoftRemoveInputWhereDto,
ProcessedSearchByCountySoftRemoveInputDto,
ProcessedSearchByCountySoftRemoveOutputAffectedRowsDto,
ProcessedSearchByCountySoftRemoveOutputDto,

// remove (4)
ProcessedSearchByCountyRemoveDto,
ProcessedSearchByCountyRemoveInputWhereDto,
ProcessedSearchByCountyRemoveInputDto,
ProcessedSearchByCountyRemoveOutputAffectedRowsDto,
ProcessedSearchByCountyRemoveOutputDto,

// recover (5)
ProcessedSearchByCountyRecoverDto,
ProcessedSearchByCountyRecoverInputWhereDto,
ProcessedSearchByCountyRecoverInputDto,
ProcessedSearchByCountyRecoverOutputAffectedRowsDto,
ProcessedSearchByCountyRecoverOutputDto
);



// ████████ initialize UploadCrudEngine ███████████████████████████████████████████
this.initUploadEngine
<
// upload (3)
ProcessedSearchByCountyUploadDto,
ProcessedSearchByCountyUploadInputDto,
ProcessedSearchByCountyUploadOutputDto,

// upload_delete (3)
ProcessedSearchByCountyUploadDeleteDto,
ProcessedSearchByCountyUploadDeleteInputDto,
ProcessedSearchByCountyUploadDeleteOutputDto
>
(
// upload (3)
ProcessedSearchByCountyUploadDto,
ProcessedSearchByCountyUploadInputDto,
ProcessedSearchByCountyUploadOutputDto,

// upload_delete (3)
ProcessedSearchByCountyUploadDeleteDto,
ProcessedSearchByCountyUploadDeleteInputDto,
ProcessedSearchByCountyUploadDeleteOutputDto
);


// ████████ initialize ImportExportCrudEngine █████████████████████████████████████

}}