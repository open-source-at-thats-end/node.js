import { ProcessedSearchByZipcodeEntity } from "./entities/search.by.zipcode.entity";
import { Injectable } from "@nestjs/common";
import { DataSource, Repository } from "typeorm";
import { InjectRepository } from "@nestjs/typeorm";
import { ConfService, CreateCrudEngine, CrudFactory, DataValidationPipe, DeleteCrudEngine, FindCrudEngine, FindOutputPaginationDto, LibraryAppService, LogService, RemoveCrudEngine, UpdateCrudEngine, UploadCrudEngine, UpsertCrudEngine  } from "@libs/library-app";
import { ProcessedSearchByZipcodeCreateDto, ProcessedSearchByZipcodeCreateInputDto, ProcessedSearchByZipcodeCreateOutputDto, ProcessedSearchByZipcodeDeleteDto, ProcessedSearchByZipcodeDeleteInputDto, ProcessedSearchByZipcodeDeleteInputWhereDto, ProcessedSearchByZipcodeDeleteOutputDto, ProcessedSearchByZipcodeFindDto, ProcessedSearchByZipcodeFindInputDto, ProcessedSearchByZipcodeFindInputGroupByDto, ProcessedSearchByZipcodeFindInputSortOrderDto, ProcessedSearchByZipcodeFindInputWhereDto, ProcessedSearchByZipcodeFindOneByIdDto, ProcessedSearchByZipcodeFindOneByIdInputDto, ProcessedSearchByZipcodeFindOutputDto, ProcessedSearchByZipcodeFindOutputRowsDto, ProcessedSearchByZipcodeRecoverDto, ProcessedSearchByZipcodeRecoverInputDto, ProcessedSearchByZipcodeRecoverInputWhereDto, ProcessedSearchByZipcodeRecoverOutputDto, ProcessedSearchByZipcodeRecoverOutputAffectedRowsDto, ProcessedSearchByZipcodeRemoveDto, ProcessedSearchByZipcodeRemoveInputDto, ProcessedSearchByZipcodeRemoveInputWhereDto, ProcessedSearchByZipcodeRemoveOutputDto, ProcessedSearchByZipcodeRemoveOutputAffectedRowsDto, ProcessedSearchByZipcodeRestoreDto, ProcessedSearchByZipcodeRestoreInputDto, ProcessedSearchByZipcodeRestoreInputWhereDto, ProcessedSearchByZipcodeRestoreOutputDto, ProcessedSearchByZipcodeSoftDeleteDto, ProcessedSearchByZipcodeSoftDeleteInputDto, ProcessedSearchByZipcodeSoftDeleteInputWhereDto, ProcessedSearchByZipcodeSoftDeleteOutputDto, ProcessedSearchByZipcodeSoftRemoveDto, ProcessedSearchByZipcodeSoftRemoveInputDto, ProcessedSearchByZipcodeSoftRemoveInputWhereDto, ProcessedSearchByZipcodeSoftRemoveOutputDto, ProcessedSearchByZipcodeSoftRemoveOutputAffectedRowsDto, ProcessedSearchByZipcodeUpdateDto, ProcessedSearchByZipcodeUpdateInputDto, ProcessedSearchByZipcodeUpdateInputSetsDto, ProcessedSearchByZipcodeUpdateInputWhereDto, ProcessedSearchByZipcodeUpdateOutputDto, ProcessedSearchByZipcodeUpdateOutputAffectedRowsDto, ProcessedSearchByZipcodeUploadDeleteDto, ProcessedSearchByZipcodeUploadDeleteInputDto, ProcessedSearchByZipcodeUploadDeleteOutputDto, ProcessedSearchByZipcodeUploadDto, ProcessedSearchByZipcodeUploadInputDto, ProcessedSearchByZipcodeUploadOutputDto, ProcessedSearchByZipcodeUpsertDto, ProcessedSearchByZipcodeUpsertInputDto, ProcessedSearchByZipcodeUpsertOutputDto } from "./dto/search.by.zipcode.dto";
import { SelfGraphqlMicroserviceService } from "@libs/dynamic-app";

@Injectable()
export class ProcessedSearchByZipcodeFactory extends CrudFactory<ProcessedSearchByZipcodeEntity> {

// ████████ FindCrudEngine ████████████████████████████████████████
public declare readonly findEngine: FindCrudEngine<
// entity (1)
ProcessedSearchByZipcodeEntity,

// find (8)
ProcessedSearchByZipcodeFindDto,
ProcessedSearchByZipcodeFindInputWhereDto,
ProcessedSearchByZipcodeFindInputSortOrderDto,
ProcessedSearchByZipcodeFindInputGroupByDto,
ProcessedSearchByZipcodeFindInputDto,
ProcessedSearchByZipcodeFindOutputRowsDto,
FindOutputPaginationDto,
ProcessedSearchByZipcodeFindOutputDto,

// find_one_by_id (2)
ProcessedSearchByZipcodeFindOneByIdDto,
ProcessedSearchByZipcodeFindOneByIdInputDto
>;

// ████████ CreateCrudEngine ████████████████████████████████████████
public declare readonly createEngine: CreateCrudEngine<
// entity (1)
ProcessedSearchByZipcodeEntity,

// create (3)
ProcessedSearchByZipcodeCreateDto,
ProcessedSearchByZipcodeCreateInputDto,
ProcessedSearchByZipcodeCreateOutputDto
>;

// ████████ UpdateCrudEngine ████████████████████████████████████████
public declare readonly updateEngine: UpdateCrudEngine<
// entity (1)
ProcessedSearchByZipcodeEntity,

// update (6)
ProcessedSearchByZipcodeUpdateDto,
ProcessedSearchByZipcodeUpdateInputWhereDto,
ProcessedSearchByZipcodeUpdateInputSetsDto,
ProcessedSearchByZipcodeUpdateInputDto,
ProcessedSearchByZipcodeUpdateOutputAffectedRowsDto,
ProcessedSearchByZipcodeUpdateOutputDto
>;

// ████████ DeleteCrudEngine ████████████████████████████████████████
public declare readonly deleteEngine: DeleteCrudEngine<
// entity (1)
ProcessedSearchByZipcodeEntity,

// soft_delete (4)
ProcessedSearchByZipcodeSoftDeleteDto,
ProcessedSearchByZipcodeSoftDeleteInputWhereDto,
ProcessedSearchByZipcodeSoftDeleteInputDto,
ProcessedSearchByZipcodeSoftDeleteOutputDto,

// delete (4)
ProcessedSearchByZipcodeDeleteDto,
ProcessedSearchByZipcodeDeleteInputWhereDto,
ProcessedSearchByZipcodeDeleteInputDto,
ProcessedSearchByZipcodeDeleteOutputDto,

// restore (4)
ProcessedSearchByZipcodeRestoreDto,
ProcessedSearchByZipcodeRestoreInputWhereDto,
ProcessedSearchByZipcodeRestoreInputDto,
ProcessedSearchByZipcodeRestoreOutputDto
>;

// ████████ UpsertCrudEngine ████████████████████████████████████████
public declare readonly upsertEngine: UpsertCrudEngine<
// entity (1)
ProcessedSearchByZipcodeEntity,

// upsert (3)
ProcessedSearchByZipcodeUpsertDto,
ProcessedSearchByZipcodeUpsertInputDto,
ProcessedSearchByZipcodeUpsertOutputDto
>;

// ████████ RemoveCrudEngine ████████████████████████████████████████
public declare readonly removeEngine: RemoveCrudEngine<
// entity (1)
ProcessedSearchByZipcodeEntity,

// soft_remove (5)
ProcessedSearchByZipcodeSoftRemoveDto,
ProcessedSearchByZipcodeSoftRemoveInputWhereDto,
ProcessedSearchByZipcodeSoftRemoveInputDto,
ProcessedSearchByZipcodeSoftRemoveOutputAffectedRowsDto,
ProcessedSearchByZipcodeSoftRemoveOutputDto,

// remove (4)
ProcessedSearchByZipcodeRemoveDto,
ProcessedSearchByZipcodeRemoveInputWhereDto,
ProcessedSearchByZipcodeRemoveInputDto,
ProcessedSearchByZipcodeRemoveOutputAffectedRowsDto,
ProcessedSearchByZipcodeRemoveOutputDto,

// recover (5)
ProcessedSearchByZipcodeRecoverDto,
ProcessedSearchByZipcodeRecoverInputWhereDto,
ProcessedSearchByZipcodeRecoverInputDto,
ProcessedSearchByZipcodeRecoverOutputAffectedRowsDto,
ProcessedSearchByZipcodeRecoverOutputDto
>;

// ████████ UploadCrudEngine ████████████████████████████████████████
public declare readonly uploadEngine: UploadCrudEngine<
// entity (1)
ProcessedSearchByZipcodeEntity,

// upload (3)
ProcessedSearchByZipcodeUploadDto,
ProcessedSearchByZipcodeUploadInputDto,
ProcessedSearchByZipcodeUploadOutputDto,

// upload_delete (3)
ProcessedSearchByZipcodeUploadDeleteDto,
ProcessedSearchByZipcodeUploadDeleteInputDto,
ProcessedSearchByZipcodeUploadDeleteOutputDto
>;

constructor(
// data source
protected readonly dataSource: DataSource,

@InjectRepository(ProcessedSearchByZipcodeEntity)
protected readonly repository: Repository<ProcessedSearchByZipcodeEntity>,

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
    ProcessedSearchByZipcodeEntity,
);

this.logService.setContext(ProcessedSearchByZipcodeFactory.name);

// ████████ initialize FindCrudEngine ██████████████████████████████████████
this.initFindEngine
<
// find (8)
ProcessedSearchByZipcodeFindDto,
ProcessedSearchByZipcodeFindInputWhereDto,
ProcessedSearchByZipcodeFindInputSortOrderDto,
ProcessedSearchByZipcodeFindInputGroupByDto,
ProcessedSearchByZipcodeFindInputDto,
ProcessedSearchByZipcodeFindOutputRowsDto,
FindOutputPaginationDto,
ProcessedSearchByZipcodeFindOutputDto,

// find_one_by_id (2)
ProcessedSearchByZipcodeFindOneByIdDto,
ProcessedSearchByZipcodeFindOneByIdInputDto
>
(
// find (8)
ProcessedSearchByZipcodeFindDto,
ProcessedSearchByZipcodeFindInputWhereDto,
ProcessedSearchByZipcodeFindInputSortOrderDto,
ProcessedSearchByZipcodeFindInputGroupByDto,
ProcessedSearchByZipcodeFindInputDto,
ProcessedSearchByZipcodeFindOutputRowsDto,
FindOutputPaginationDto,
ProcessedSearchByZipcodeFindOutputDto,

// find_one_by_id (2)
ProcessedSearchByZipcodeFindOneByIdDto,
ProcessedSearchByZipcodeFindOneByIdInputDto
);


// ████████ initialize CreateCrudEngine ███████████████████████████████████████
this.initCreateEngine
<
// create (3)
ProcessedSearchByZipcodeCreateDto,
ProcessedSearchByZipcodeCreateInputDto,
ProcessedSearchByZipcodeCreateOutputDto
>
(
// create (3)
ProcessedSearchByZipcodeCreateDto,
ProcessedSearchByZipcodeCreateInputDto,
ProcessedSearchByZipcodeCreateOutputDto
);

// ████████ initialize UpdateCrudEngine ████████████████████████████████████████
this.initUpdateEngine
<
// update (6)
ProcessedSearchByZipcodeUpdateDto,
ProcessedSearchByZipcodeUpdateInputWhereDto,
ProcessedSearchByZipcodeUpdateInputSetsDto,
ProcessedSearchByZipcodeUpdateInputDto,
ProcessedSearchByZipcodeUpdateOutputAffectedRowsDto,
ProcessedSearchByZipcodeUpdateOutputDto
>
(
// update (6)
ProcessedSearchByZipcodeUpdateDto,
ProcessedSearchByZipcodeUpdateInputWhereDto,
ProcessedSearchByZipcodeUpdateInputSetsDto,
ProcessedSearchByZipcodeUpdateInputDto,
ProcessedSearchByZipcodeUpdateOutputAffectedRowsDto,
ProcessedSearchByZipcodeUpdateOutputDto
);


// ████████ initialize DeleteCrudEngine ███████████████████████████████████████████
this.initDeleteEngine
<
// soft_delete (4)
ProcessedSearchByZipcodeSoftDeleteDto,
ProcessedSearchByZipcodeSoftDeleteInputWhereDto,
ProcessedSearchByZipcodeSoftDeleteInputDto,
ProcessedSearchByZipcodeSoftDeleteOutputDto,

// delete (4)
ProcessedSearchByZipcodeDeleteDto,
ProcessedSearchByZipcodeDeleteInputWhereDto,
ProcessedSearchByZipcodeDeleteInputDto,
ProcessedSearchByZipcodeDeleteOutputDto,

// restore (4)
ProcessedSearchByZipcodeRestoreDto,
ProcessedSearchByZipcodeRestoreInputWhereDto,
ProcessedSearchByZipcodeRestoreInputDto,
ProcessedSearchByZipcodeRestoreOutputDto
>
(
// soft_delete (4)
ProcessedSearchByZipcodeSoftDeleteDto,
ProcessedSearchByZipcodeSoftDeleteInputWhereDto,
ProcessedSearchByZipcodeSoftDeleteInputDto,
ProcessedSearchByZipcodeSoftDeleteOutputDto,

// delete (4)
ProcessedSearchByZipcodeDeleteDto,
ProcessedSearchByZipcodeDeleteInputWhereDto,
ProcessedSearchByZipcodeDeleteInputDto,
ProcessedSearchByZipcodeDeleteOutputDto,

// restore (4)
ProcessedSearchByZipcodeRestoreDto,
ProcessedSearchByZipcodeRestoreInputWhereDto,
ProcessedSearchByZipcodeRestoreInputDto,
ProcessedSearchByZipcodeRestoreOutputDto
);



// ████████ initialize UpsertCrudEngine ███████████████████████████████████████████
this.initUpsertEngine
<
// upsert (3)
ProcessedSearchByZipcodeUpsertDto,
ProcessedSearchByZipcodeUpsertInputDto,
ProcessedSearchByZipcodeUpsertOutputDto
>
(
// upsert (3)
ProcessedSearchByZipcodeUpsertDto,
ProcessedSearchByZipcodeUpsertInputDto,
ProcessedSearchByZipcodeUpsertOutputDto
);




// ████████ initialize RemoveCrudEngine ███████████████████████████████████████████
this.initRemoveEngine
<
// soft_remove (5)
ProcessedSearchByZipcodeSoftRemoveDto,
ProcessedSearchByZipcodeSoftRemoveInputWhereDto,
ProcessedSearchByZipcodeSoftRemoveInputDto,
ProcessedSearchByZipcodeSoftRemoveOutputAffectedRowsDto,
ProcessedSearchByZipcodeSoftRemoveOutputDto,

// remove (4)
ProcessedSearchByZipcodeRemoveDto,
ProcessedSearchByZipcodeRemoveInputWhereDto,
ProcessedSearchByZipcodeRemoveInputDto,
ProcessedSearchByZipcodeRemoveOutputAffectedRowsDto,
ProcessedSearchByZipcodeRemoveOutputDto,

// recover (5)
ProcessedSearchByZipcodeRecoverDto,
ProcessedSearchByZipcodeRecoverInputWhereDto,
ProcessedSearchByZipcodeRecoverInputDto,
ProcessedSearchByZipcodeRecoverOutputAffectedRowsDto,
ProcessedSearchByZipcodeRecoverOutputDto
>
(
// soft_remove (5)
ProcessedSearchByZipcodeSoftRemoveDto,
ProcessedSearchByZipcodeSoftRemoveInputWhereDto,
ProcessedSearchByZipcodeSoftRemoveInputDto,
ProcessedSearchByZipcodeSoftRemoveOutputAffectedRowsDto,
ProcessedSearchByZipcodeSoftRemoveOutputDto,

// remove (4)
ProcessedSearchByZipcodeRemoveDto,
ProcessedSearchByZipcodeRemoveInputWhereDto,
ProcessedSearchByZipcodeRemoveInputDto,
ProcessedSearchByZipcodeRemoveOutputAffectedRowsDto,
ProcessedSearchByZipcodeRemoveOutputDto,

// recover (5)
ProcessedSearchByZipcodeRecoverDto,
ProcessedSearchByZipcodeRecoverInputWhereDto,
ProcessedSearchByZipcodeRecoverInputDto,
ProcessedSearchByZipcodeRecoverOutputAffectedRowsDto,
ProcessedSearchByZipcodeRecoverOutputDto
);



// ████████ initialize UploadCrudEngine ███████████████████████████████████████████
this.initUploadEngine
<
// upload (3)
ProcessedSearchByZipcodeUploadDto,
ProcessedSearchByZipcodeUploadInputDto,
ProcessedSearchByZipcodeUploadOutputDto,

// upload_delete (3)
ProcessedSearchByZipcodeUploadDeleteDto,
ProcessedSearchByZipcodeUploadDeleteInputDto,
ProcessedSearchByZipcodeUploadDeleteOutputDto
>
(
// upload (3)
ProcessedSearchByZipcodeUploadDto,
ProcessedSearchByZipcodeUploadInputDto,
ProcessedSearchByZipcodeUploadOutputDto,

// upload_delete (3)
ProcessedSearchByZipcodeUploadDeleteDto,
ProcessedSearchByZipcodeUploadDeleteInputDto,
ProcessedSearchByZipcodeUploadDeleteOutputDto
);


// ████████ initialize ImportExportCrudEngine █████████████████████████████████████

}}