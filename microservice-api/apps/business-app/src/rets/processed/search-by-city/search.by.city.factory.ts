import { ProcessedSearchByCityEntity } from "./entities/search.by.city.entity";
import { Injectable } from "@nestjs/common";
import { DataSource, Repository } from "typeorm";
import { InjectRepository } from "@nestjs/typeorm";
import { ConfService, CreateCrudEngine, CrudFactory, DataValidationPipe, DeleteCrudEngine, FindCrudEngine, FindOutputPaginationDto, LibraryAppService, LogService, RemoveCrudEngine, UpdateCrudEngine, UploadCrudEngine, UpsertCrudEngine  } from "@libs/library-app";
import { ProcessedSearchByCityCreateDto, ProcessedSearchByCityCreateInputDto, ProcessedSearchByCityCreateOutputDto, ProcessedSearchByCityDeleteDto, ProcessedSearchByCityDeleteInputDto, ProcessedSearchByCityDeleteInputWhereDto, ProcessedSearchByCityDeleteOutputDto, ProcessedSearchByCityFindDto, ProcessedSearchByCityFindInputDto, ProcessedSearchByCityFindInputGroupByDto, ProcessedSearchByCityFindInputSortOrderDto, ProcessedSearchByCityFindInputWhereDto, ProcessedSearchByCityFindOneByIdDto, ProcessedSearchByCityFindOneByIdInputDto, ProcessedSearchByCityFindOutputDto, ProcessedSearchByCityFindOutputRowsDto, ProcessedSearchByCityRecoverDto, ProcessedSearchByCityRecoverInputDto, ProcessedSearchByCityRecoverInputWhereDto, ProcessedSearchByCityRecoverOutputDto, ProcessedSearchByCityRecoverOutputAffectedRowsDto, ProcessedSearchByCityRemoveDto, ProcessedSearchByCityRemoveInputDto, ProcessedSearchByCityRemoveInputWhereDto, ProcessedSearchByCityRemoveOutputDto, ProcessedSearchByCityRemoveOutputAffectedRowsDto, ProcessedSearchByCityRestoreDto, ProcessedSearchByCityRestoreInputDto, ProcessedSearchByCityRestoreInputWhereDto, ProcessedSearchByCityRestoreOutputDto, ProcessedSearchByCitySoftDeleteDto, ProcessedSearchByCitySoftDeleteInputDto, ProcessedSearchByCitySoftDeleteInputWhereDto, ProcessedSearchByCitySoftDeleteOutputDto, ProcessedSearchByCitySoftRemoveDto, ProcessedSearchByCitySoftRemoveInputDto, ProcessedSearchByCitySoftRemoveInputWhereDto, ProcessedSearchByCitySoftRemoveOutputDto, ProcessedSearchByCitySoftRemoveOutputAffectedRowsDto, ProcessedSearchByCityUpdateDto, ProcessedSearchByCityUpdateInputDto, ProcessedSearchByCityUpdateInputSetsDto, ProcessedSearchByCityUpdateInputWhereDto, ProcessedSearchByCityUpdateOutputDto, ProcessedSearchByCityUpdateOutputAffectedRowsDto, ProcessedSearchByCityUploadDeleteDto, ProcessedSearchByCityUploadDeleteInputDto, ProcessedSearchByCityUploadDeleteOutputDto, ProcessedSearchByCityUploadDto, ProcessedSearchByCityUploadInputDto, ProcessedSearchByCityUploadOutputDto, ProcessedSearchByCityUpsertDto, ProcessedSearchByCityUpsertInputDto, ProcessedSearchByCityUpsertOutputDto } from "./dto/search.by.city.dto";
import { SelfGraphqlMicroserviceService } from "@libs/dynamic-app";

@Injectable()
export class ProcessedSearchByCityFactory extends CrudFactory<ProcessedSearchByCityEntity> {

// ████████ FindCrudEngine ████████████████████████████████████████
public declare readonly findEngine: FindCrudEngine<
// entity (1)
ProcessedSearchByCityEntity,

// find (8)
ProcessedSearchByCityFindDto,
ProcessedSearchByCityFindInputWhereDto,
ProcessedSearchByCityFindInputSortOrderDto,
ProcessedSearchByCityFindInputGroupByDto,
ProcessedSearchByCityFindInputDto,
ProcessedSearchByCityFindOutputRowsDto,
FindOutputPaginationDto,
ProcessedSearchByCityFindOutputDto,

// find_one_by_id (2)
ProcessedSearchByCityFindOneByIdDto,
ProcessedSearchByCityFindOneByIdInputDto
>;

// ████████ CreateCrudEngine ████████████████████████████████████████
public declare readonly createEngine: CreateCrudEngine<
// entity (1)
ProcessedSearchByCityEntity,

// create (3)
ProcessedSearchByCityCreateDto,
ProcessedSearchByCityCreateInputDto,
ProcessedSearchByCityCreateOutputDto
>;

// ████████ UpdateCrudEngine ████████████████████████████████████████
public declare readonly updateEngine: UpdateCrudEngine<
// entity (1)
ProcessedSearchByCityEntity,

// update (6)
ProcessedSearchByCityUpdateDto,
ProcessedSearchByCityUpdateInputWhereDto,
ProcessedSearchByCityUpdateInputSetsDto,
ProcessedSearchByCityUpdateInputDto,
ProcessedSearchByCityUpdateOutputAffectedRowsDto,
ProcessedSearchByCityUpdateOutputDto
>;

// ████████ DeleteCrudEngine ████████████████████████████████████████
public declare readonly deleteEngine: DeleteCrudEngine<
// entity (1)
ProcessedSearchByCityEntity,

// soft_delete (4)
ProcessedSearchByCitySoftDeleteDto,
ProcessedSearchByCitySoftDeleteInputWhereDto,
ProcessedSearchByCitySoftDeleteInputDto,
ProcessedSearchByCitySoftDeleteOutputDto,

// delete (4)
ProcessedSearchByCityDeleteDto,
ProcessedSearchByCityDeleteInputWhereDto,
ProcessedSearchByCityDeleteInputDto,
ProcessedSearchByCityDeleteOutputDto,

// restore (4)
ProcessedSearchByCityRestoreDto,
ProcessedSearchByCityRestoreInputWhereDto,
ProcessedSearchByCityRestoreInputDto,
ProcessedSearchByCityRestoreOutputDto
>;

// ████████ UpsertCrudEngine ████████████████████████████████████████
public declare readonly upsertEngine: UpsertCrudEngine<
// entity (1)
ProcessedSearchByCityEntity,

// upsert (3)
ProcessedSearchByCityUpsertDto,
ProcessedSearchByCityUpsertInputDto,
ProcessedSearchByCityUpsertOutputDto
>;

// ████████ RemoveCrudEngine ████████████████████████████████████████
public declare readonly removeEngine: RemoveCrudEngine<
// entity (1)
ProcessedSearchByCityEntity,

// soft_remove (5)
ProcessedSearchByCitySoftRemoveDto,
ProcessedSearchByCitySoftRemoveInputWhereDto,
ProcessedSearchByCitySoftRemoveInputDto,
ProcessedSearchByCitySoftRemoveOutputAffectedRowsDto,
ProcessedSearchByCitySoftRemoveOutputDto,

// remove (4)
ProcessedSearchByCityRemoveDto,
ProcessedSearchByCityRemoveInputWhereDto,
ProcessedSearchByCityRemoveInputDto,
ProcessedSearchByCityRemoveOutputAffectedRowsDto,
ProcessedSearchByCityRemoveOutputDto,

// recover (5)
ProcessedSearchByCityRecoverDto,
ProcessedSearchByCityRecoverInputWhereDto,
ProcessedSearchByCityRecoverInputDto,
ProcessedSearchByCityRecoverOutputAffectedRowsDto,
ProcessedSearchByCityRecoverOutputDto
>;

// ████████ UploadCrudEngine ████████████████████████████████████████
public declare readonly uploadEngine: UploadCrudEngine<
// entity (1)
ProcessedSearchByCityEntity,

// upload (3)
ProcessedSearchByCityUploadDto,
ProcessedSearchByCityUploadInputDto,
ProcessedSearchByCityUploadOutputDto,

// upload_delete (3)
ProcessedSearchByCityUploadDeleteDto,
ProcessedSearchByCityUploadDeleteInputDto,
ProcessedSearchByCityUploadDeleteOutputDto
>;

constructor(
// data source
protected readonly dataSource: DataSource,

@InjectRepository(ProcessedSearchByCityEntity)
protected readonly repository: Repository<ProcessedSearchByCityEntity>,

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
    ProcessedSearchByCityEntity,
);

this.logService.setContext(ProcessedSearchByCityFactory.name);

// ████████ initialize FindCrudEngine ██████████████████████████████████████
this.initFindEngine
<
// find (8)
ProcessedSearchByCityFindDto,
ProcessedSearchByCityFindInputWhereDto,
ProcessedSearchByCityFindInputSortOrderDto,
ProcessedSearchByCityFindInputGroupByDto,
ProcessedSearchByCityFindInputDto,
ProcessedSearchByCityFindOutputRowsDto,
FindOutputPaginationDto,
ProcessedSearchByCityFindOutputDto,

// find_one_by_id (2)
ProcessedSearchByCityFindOneByIdDto,
ProcessedSearchByCityFindOneByIdInputDto
>
(
// find (8)
ProcessedSearchByCityFindDto,
ProcessedSearchByCityFindInputWhereDto,
ProcessedSearchByCityFindInputSortOrderDto,
ProcessedSearchByCityFindInputGroupByDto,
ProcessedSearchByCityFindInputDto,
ProcessedSearchByCityFindOutputRowsDto,
FindOutputPaginationDto,
ProcessedSearchByCityFindOutputDto,

// find_one_by_id (2)
ProcessedSearchByCityFindOneByIdDto,
ProcessedSearchByCityFindOneByIdInputDto
);


// ████████ initialize CreateCrudEngine ███████████████████████████████████████
this.initCreateEngine
<
// create (3)
ProcessedSearchByCityCreateDto,
ProcessedSearchByCityCreateInputDto,
ProcessedSearchByCityCreateOutputDto
>
(
// create (3)
ProcessedSearchByCityCreateDto,
ProcessedSearchByCityCreateInputDto,
ProcessedSearchByCityCreateOutputDto
);

// ████████ initialize UpdateCrudEngine ████████████████████████████████████████
this.initUpdateEngine
<
// update (6)
ProcessedSearchByCityUpdateDto,
ProcessedSearchByCityUpdateInputWhereDto,
ProcessedSearchByCityUpdateInputSetsDto,
ProcessedSearchByCityUpdateInputDto,
ProcessedSearchByCityUpdateOutputAffectedRowsDto,
ProcessedSearchByCityUpdateOutputDto
>
(
// update (6)
ProcessedSearchByCityUpdateDto,
ProcessedSearchByCityUpdateInputWhereDto,
ProcessedSearchByCityUpdateInputSetsDto,
ProcessedSearchByCityUpdateInputDto,
ProcessedSearchByCityUpdateOutputAffectedRowsDto,
ProcessedSearchByCityUpdateOutputDto
);


// ████████ initialize DeleteCrudEngine ███████████████████████████████████████████
this.initDeleteEngine
<
// soft_delete (4)
ProcessedSearchByCitySoftDeleteDto,
ProcessedSearchByCitySoftDeleteInputWhereDto,
ProcessedSearchByCitySoftDeleteInputDto,
ProcessedSearchByCitySoftDeleteOutputDto,

// delete (4)
ProcessedSearchByCityDeleteDto,
ProcessedSearchByCityDeleteInputWhereDto,
ProcessedSearchByCityDeleteInputDto,
ProcessedSearchByCityDeleteOutputDto,

// restore (4)
ProcessedSearchByCityRestoreDto,
ProcessedSearchByCityRestoreInputWhereDto,
ProcessedSearchByCityRestoreInputDto,
ProcessedSearchByCityRestoreOutputDto
>
(
// soft_delete (4)
ProcessedSearchByCitySoftDeleteDto,
ProcessedSearchByCitySoftDeleteInputWhereDto,
ProcessedSearchByCitySoftDeleteInputDto,
ProcessedSearchByCitySoftDeleteOutputDto,

// delete (4)
ProcessedSearchByCityDeleteDto,
ProcessedSearchByCityDeleteInputWhereDto,
ProcessedSearchByCityDeleteInputDto,
ProcessedSearchByCityDeleteOutputDto,

// restore (4)
ProcessedSearchByCityRestoreDto,
ProcessedSearchByCityRestoreInputWhereDto,
ProcessedSearchByCityRestoreInputDto,
ProcessedSearchByCityRestoreOutputDto
);



// ████████ initialize UpsertCrudEngine ███████████████████████████████████████████
this.initUpsertEngine
<
// upsert (3)
ProcessedSearchByCityUpsertDto,
ProcessedSearchByCityUpsertInputDto,
ProcessedSearchByCityUpsertOutputDto
>
(
// upsert (3)
ProcessedSearchByCityUpsertDto,
ProcessedSearchByCityUpsertInputDto,
ProcessedSearchByCityUpsertOutputDto
);




// ████████ initialize RemoveCrudEngine ███████████████████████████████████████████
this.initRemoveEngine
<
// soft_remove (5)
ProcessedSearchByCitySoftRemoveDto,
ProcessedSearchByCitySoftRemoveInputWhereDto,
ProcessedSearchByCitySoftRemoveInputDto,
ProcessedSearchByCitySoftRemoveOutputAffectedRowsDto,
ProcessedSearchByCitySoftRemoveOutputDto,

// remove (4)
ProcessedSearchByCityRemoveDto,
ProcessedSearchByCityRemoveInputWhereDto,
ProcessedSearchByCityRemoveInputDto,
ProcessedSearchByCityRemoveOutputAffectedRowsDto,
ProcessedSearchByCityRemoveOutputDto,

// recover (5)
ProcessedSearchByCityRecoverDto,
ProcessedSearchByCityRecoverInputWhereDto,
ProcessedSearchByCityRecoverInputDto,
ProcessedSearchByCityRecoverOutputAffectedRowsDto,
ProcessedSearchByCityRecoverOutputDto
>
(
// soft_remove (5)
ProcessedSearchByCitySoftRemoveDto,
ProcessedSearchByCitySoftRemoveInputWhereDto,
ProcessedSearchByCitySoftRemoveInputDto,
ProcessedSearchByCitySoftRemoveOutputAffectedRowsDto,
ProcessedSearchByCitySoftRemoveOutputDto,

// remove (4)
ProcessedSearchByCityRemoveDto,
ProcessedSearchByCityRemoveInputWhereDto,
ProcessedSearchByCityRemoveInputDto,
ProcessedSearchByCityRemoveOutputAffectedRowsDto,
ProcessedSearchByCityRemoveOutputDto,

// recover (5)
ProcessedSearchByCityRecoverDto,
ProcessedSearchByCityRecoverInputWhereDto,
ProcessedSearchByCityRecoverInputDto,
ProcessedSearchByCityRecoverOutputAffectedRowsDto,
ProcessedSearchByCityRecoverOutputDto
);



// ████████ initialize UploadCrudEngine ███████████████████████████████████████████
this.initUploadEngine
<
// upload (3)
ProcessedSearchByCityUploadDto,
ProcessedSearchByCityUploadInputDto,
ProcessedSearchByCityUploadOutputDto,

// upload_delete (3)
ProcessedSearchByCityUploadDeleteDto,
ProcessedSearchByCityUploadDeleteInputDto,
ProcessedSearchByCityUploadDeleteOutputDto
>
(
// upload (3)
ProcessedSearchByCityUploadDto,
ProcessedSearchByCityUploadInputDto,
ProcessedSearchByCityUploadOutputDto,

// upload_delete (3)
ProcessedSearchByCityUploadDeleteDto,
ProcessedSearchByCityUploadDeleteInputDto,
ProcessedSearchByCityUploadDeleteOutputDto
);


// ████████ initialize ImportExportCrudEngine █████████████████████████████████████

}}