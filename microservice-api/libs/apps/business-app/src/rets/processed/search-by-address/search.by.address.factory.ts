import { ProcessedSearchByAddressEntity } from "./entities/search.by.address.entity";
import { Injectable } from "@nestjs/common";
import { DataSource, Repository } from "typeorm";
import { InjectRepository } from "@nestjs/typeorm";
import { ConfService, CreateCrudEngine, CrudFactory, DataValidationPipe, DeleteCrudEngine, FindCrudEngine, FindOutputPaginationDto, LibraryAppService, LogService, RemoveCrudEngine, UpdateCrudEngine, UploadCrudEngine, UpsertCrudEngine  } from "@libs/library-app";
import { ProcessedSearchByAddressCreateDto, ProcessedSearchByAddressCreateInputDto, ProcessedSearchByAddressCreateOutputDto, ProcessedSearchByAddressDeleteDto, ProcessedSearchByAddressDeleteInputDto, ProcessedSearchByAddressDeleteInputWhereDto, ProcessedSearchByAddressDeleteOutputDto, ProcessedSearchByAddressFindDto, ProcessedSearchByAddressFindInputDto, ProcessedSearchByAddressFindInputGroupByDto, ProcessedSearchByAddressFindInputSortOrderDto, ProcessedSearchByAddressFindInputWhereDto, ProcessedSearchByAddressFindOneByIdDto, ProcessedSearchByAddressFindOneByIdInputDto, ProcessedSearchByAddressFindOutputDto, ProcessedSearchByAddressFindOutputRowsDto, ProcessedSearchByAddressRecoverDto, ProcessedSearchByAddressRecoverInputDto, ProcessedSearchByAddressRecoverInputWhereDto, ProcessedSearchByAddressRecoverOutputDto, ProcessedSearchByAddressRecoverOutputAffectedRowsDto, ProcessedSearchByAddressRemoveDto, ProcessedSearchByAddressRemoveInputDto, ProcessedSearchByAddressRemoveInputWhereDto, ProcessedSearchByAddressRemoveOutputDto, ProcessedSearchByAddressRemoveOutputAffectedRowsDto, ProcessedSearchByAddressRestoreDto, ProcessedSearchByAddressRestoreInputDto, ProcessedSearchByAddressRestoreInputWhereDto, ProcessedSearchByAddressRestoreOutputDto, ProcessedSearchByAddressSoftDeleteDto, ProcessedSearchByAddressSoftDeleteInputDto, ProcessedSearchByAddressSoftDeleteInputWhereDto, ProcessedSearchByAddressSoftDeleteOutputDto, ProcessedSearchByAddressSoftRemoveDto, ProcessedSearchByAddressSoftRemoveInputDto, ProcessedSearchByAddressSoftRemoveInputWhereDto, ProcessedSearchByAddressSoftRemoveOutputDto, ProcessedSearchByAddressSoftRemoveOutputAffectedRowsDto, ProcessedSearchByAddressUpdateDto, ProcessedSearchByAddressUpdateInputDto, ProcessedSearchByAddressUpdateInputSetsDto, ProcessedSearchByAddressUpdateInputWhereDto, ProcessedSearchByAddressUpdateOutputDto, ProcessedSearchByAddressUpdateOutputAffectedRowsDto, ProcessedSearchByAddressUploadDeleteDto, ProcessedSearchByAddressUploadDeleteInputDto, ProcessedSearchByAddressUploadDeleteOutputDto, ProcessedSearchByAddressUploadDto, ProcessedSearchByAddressUploadInputDto, ProcessedSearchByAddressUploadOutputDto, ProcessedSearchByAddressUpsertDto, ProcessedSearchByAddressUpsertInputDto, ProcessedSearchByAddressUpsertOutputDto } from "./dto/search.by.address.dto";
import { SelfGraphqlMicroserviceService } from "@libs/dynamic-app";

@Injectable()
export class ProcessedSearchByAddressFactory extends CrudFactory<ProcessedSearchByAddressEntity> {

// ████████ FindCrudEngine ████████████████████████████████████████
public declare readonly findEngine: FindCrudEngine<
// entity (1)
ProcessedSearchByAddressEntity,

// find (8)
ProcessedSearchByAddressFindDto,
ProcessedSearchByAddressFindInputWhereDto,
ProcessedSearchByAddressFindInputSortOrderDto,
ProcessedSearchByAddressFindInputGroupByDto,
ProcessedSearchByAddressFindInputDto,
ProcessedSearchByAddressFindOutputRowsDto,
FindOutputPaginationDto,
ProcessedSearchByAddressFindOutputDto,

// find_one_by_id (2)
ProcessedSearchByAddressFindOneByIdDto,
ProcessedSearchByAddressFindOneByIdInputDto
>;

// ████████ CreateCrudEngine ████████████████████████████████████████
public declare readonly createEngine: CreateCrudEngine<
// entity (1)
ProcessedSearchByAddressEntity,

// create (3)
ProcessedSearchByAddressCreateDto,
ProcessedSearchByAddressCreateInputDto,
ProcessedSearchByAddressCreateOutputDto
>;

// ████████ UpdateCrudEngine ████████████████████████████████████████
public declare readonly updateEngine: UpdateCrudEngine<
// entity (1)
ProcessedSearchByAddressEntity,

// update (6)
ProcessedSearchByAddressUpdateDto,
ProcessedSearchByAddressUpdateInputWhereDto,
ProcessedSearchByAddressUpdateInputSetsDto,
ProcessedSearchByAddressUpdateInputDto,
ProcessedSearchByAddressUpdateOutputAffectedRowsDto,
ProcessedSearchByAddressUpdateOutputDto
>;

// ████████ DeleteCrudEngine ████████████████████████████████████████
public declare readonly deleteEngine: DeleteCrudEngine<
// entity (1)
ProcessedSearchByAddressEntity,

// soft_delete (4)
ProcessedSearchByAddressSoftDeleteDto,
ProcessedSearchByAddressSoftDeleteInputWhereDto,
ProcessedSearchByAddressSoftDeleteInputDto,
ProcessedSearchByAddressSoftDeleteOutputDto,

// delete (4)
ProcessedSearchByAddressDeleteDto,
ProcessedSearchByAddressDeleteInputWhereDto,
ProcessedSearchByAddressDeleteInputDto,
ProcessedSearchByAddressDeleteOutputDto,

// restore (4)
ProcessedSearchByAddressRestoreDto,
ProcessedSearchByAddressRestoreInputWhereDto,
ProcessedSearchByAddressRestoreInputDto,
ProcessedSearchByAddressRestoreOutputDto
>;

// ████████ UpsertCrudEngine ████████████████████████████████████████
public declare readonly upsertEngine: UpsertCrudEngine<
// entity (1)
ProcessedSearchByAddressEntity,

// upsert (3)
ProcessedSearchByAddressUpsertDto,
ProcessedSearchByAddressUpsertInputDto,
ProcessedSearchByAddressUpsertOutputDto
>;

// ████████ RemoveCrudEngine ████████████████████████████████████████
public declare readonly removeEngine: RemoveCrudEngine<
// entity (1)
ProcessedSearchByAddressEntity,

// soft_remove (5)
ProcessedSearchByAddressSoftRemoveDto,
ProcessedSearchByAddressSoftRemoveInputWhereDto,
ProcessedSearchByAddressSoftRemoveInputDto,
ProcessedSearchByAddressSoftRemoveOutputAffectedRowsDto,
ProcessedSearchByAddressSoftRemoveOutputDto,

// remove (4)
ProcessedSearchByAddressRemoveDto,
ProcessedSearchByAddressRemoveInputWhereDto,
ProcessedSearchByAddressRemoveInputDto,
ProcessedSearchByAddressRemoveOutputAffectedRowsDto,
ProcessedSearchByAddressRemoveOutputDto,

// recover (5)
ProcessedSearchByAddressRecoverDto,
ProcessedSearchByAddressRecoverInputWhereDto,
ProcessedSearchByAddressRecoverInputDto,
ProcessedSearchByAddressRecoverOutputAffectedRowsDto,
ProcessedSearchByAddressRecoverOutputDto
>;

// ████████ UploadCrudEngine ████████████████████████████████████████
public declare readonly uploadEngine: UploadCrudEngine<
// entity (1)
ProcessedSearchByAddressEntity,

// upload (3)
ProcessedSearchByAddressUploadDto,
ProcessedSearchByAddressUploadInputDto,
ProcessedSearchByAddressUploadOutputDto,

// upload_delete (3)
ProcessedSearchByAddressUploadDeleteDto,
ProcessedSearchByAddressUploadDeleteInputDto,
ProcessedSearchByAddressUploadDeleteOutputDto
>;

constructor(
// data source
protected readonly dataSource: DataSource,

@InjectRepository(ProcessedSearchByAddressEntity)
protected readonly repository: Repository<ProcessedSearchByAddressEntity>,

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
    ProcessedSearchByAddressEntity,
);

this.logService.setContext(ProcessedSearchByAddressFactory.name);

// ████████ initialize FindCrudEngine ██████████████████████████████████████
this.initFindEngine
<
// find (8)
ProcessedSearchByAddressFindDto,
ProcessedSearchByAddressFindInputWhereDto,
ProcessedSearchByAddressFindInputSortOrderDto,
ProcessedSearchByAddressFindInputGroupByDto,
ProcessedSearchByAddressFindInputDto,
ProcessedSearchByAddressFindOutputRowsDto,
FindOutputPaginationDto,
ProcessedSearchByAddressFindOutputDto,

// find_one_by_id (2)
ProcessedSearchByAddressFindOneByIdDto,
ProcessedSearchByAddressFindOneByIdInputDto
>
(
// find (8)
ProcessedSearchByAddressFindDto,
ProcessedSearchByAddressFindInputWhereDto,
ProcessedSearchByAddressFindInputSortOrderDto,
ProcessedSearchByAddressFindInputGroupByDto,
ProcessedSearchByAddressFindInputDto,
ProcessedSearchByAddressFindOutputRowsDto,
FindOutputPaginationDto,
ProcessedSearchByAddressFindOutputDto,

// find_one_by_id (2)
ProcessedSearchByAddressFindOneByIdDto,
ProcessedSearchByAddressFindOneByIdInputDto
);


// ████████ initialize CreateCrudEngine ███████████████████████████████████████
this.initCreateEngine
<
// create (3)
ProcessedSearchByAddressCreateDto,
ProcessedSearchByAddressCreateInputDto,
ProcessedSearchByAddressCreateOutputDto
>
(
// create (3)
ProcessedSearchByAddressCreateDto,
ProcessedSearchByAddressCreateInputDto,
ProcessedSearchByAddressCreateOutputDto
);

// ████████ initialize UpdateCrudEngine ████████████████████████████████████████
this.initUpdateEngine
<
// update (6)
ProcessedSearchByAddressUpdateDto,
ProcessedSearchByAddressUpdateInputWhereDto,
ProcessedSearchByAddressUpdateInputSetsDto,
ProcessedSearchByAddressUpdateInputDto,
ProcessedSearchByAddressUpdateOutputAffectedRowsDto,
ProcessedSearchByAddressUpdateOutputDto
>
(
// update (6)
ProcessedSearchByAddressUpdateDto,
ProcessedSearchByAddressUpdateInputWhereDto,
ProcessedSearchByAddressUpdateInputSetsDto,
ProcessedSearchByAddressUpdateInputDto,
ProcessedSearchByAddressUpdateOutputAffectedRowsDto,
ProcessedSearchByAddressUpdateOutputDto
);


// ████████ initialize DeleteCrudEngine ███████████████████████████████████████████
this.initDeleteEngine
<
// soft_delete (4)
ProcessedSearchByAddressSoftDeleteDto,
ProcessedSearchByAddressSoftDeleteInputWhereDto,
ProcessedSearchByAddressSoftDeleteInputDto,
ProcessedSearchByAddressSoftDeleteOutputDto,

// delete (4)
ProcessedSearchByAddressDeleteDto,
ProcessedSearchByAddressDeleteInputWhereDto,
ProcessedSearchByAddressDeleteInputDto,
ProcessedSearchByAddressDeleteOutputDto,

// restore (4)
ProcessedSearchByAddressRestoreDto,
ProcessedSearchByAddressRestoreInputWhereDto,
ProcessedSearchByAddressRestoreInputDto,
ProcessedSearchByAddressRestoreOutputDto
>
(
// soft_delete (4)
ProcessedSearchByAddressSoftDeleteDto,
ProcessedSearchByAddressSoftDeleteInputWhereDto,
ProcessedSearchByAddressSoftDeleteInputDto,
ProcessedSearchByAddressSoftDeleteOutputDto,

// delete (4)
ProcessedSearchByAddressDeleteDto,
ProcessedSearchByAddressDeleteInputWhereDto,
ProcessedSearchByAddressDeleteInputDto,
ProcessedSearchByAddressDeleteOutputDto,

// restore (4)
ProcessedSearchByAddressRestoreDto,
ProcessedSearchByAddressRestoreInputWhereDto,
ProcessedSearchByAddressRestoreInputDto,
ProcessedSearchByAddressRestoreOutputDto
);



// ████████ initialize UpsertCrudEngine ███████████████████████████████████████████
this.initUpsertEngine
<
// upsert (3)
ProcessedSearchByAddressUpsertDto,
ProcessedSearchByAddressUpsertInputDto,
ProcessedSearchByAddressUpsertOutputDto
>
(
// upsert (3)
ProcessedSearchByAddressUpsertDto,
ProcessedSearchByAddressUpsertInputDto,
ProcessedSearchByAddressUpsertOutputDto
);




// ████████ initialize RemoveCrudEngine ███████████████████████████████████████████
this.initRemoveEngine
<
// soft_remove (5)
ProcessedSearchByAddressSoftRemoveDto,
ProcessedSearchByAddressSoftRemoveInputWhereDto,
ProcessedSearchByAddressSoftRemoveInputDto,
ProcessedSearchByAddressSoftRemoveOutputAffectedRowsDto,
ProcessedSearchByAddressSoftRemoveOutputDto,

// remove (4)
ProcessedSearchByAddressRemoveDto,
ProcessedSearchByAddressRemoveInputWhereDto,
ProcessedSearchByAddressRemoveInputDto,
ProcessedSearchByAddressRemoveOutputAffectedRowsDto,
ProcessedSearchByAddressRemoveOutputDto,

// recover (5)
ProcessedSearchByAddressRecoverDto,
ProcessedSearchByAddressRecoverInputWhereDto,
ProcessedSearchByAddressRecoverInputDto,
ProcessedSearchByAddressRecoverOutputAffectedRowsDto,
ProcessedSearchByAddressRecoverOutputDto
>
(
// soft_remove (5)
ProcessedSearchByAddressSoftRemoveDto,
ProcessedSearchByAddressSoftRemoveInputWhereDto,
ProcessedSearchByAddressSoftRemoveInputDto,
ProcessedSearchByAddressSoftRemoveOutputAffectedRowsDto,
ProcessedSearchByAddressSoftRemoveOutputDto,

// remove (4)
ProcessedSearchByAddressRemoveDto,
ProcessedSearchByAddressRemoveInputWhereDto,
ProcessedSearchByAddressRemoveInputDto,
ProcessedSearchByAddressRemoveOutputAffectedRowsDto,
ProcessedSearchByAddressRemoveOutputDto,

// recover (5)
ProcessedSearchByAddressRecoverDto,
ProcessedSearchByAddressRecoverInputWhereDto,
ProcessedSearchByAddressRecoverInputDto,
ProcessedSearchByAddressRecoverOutputAffectedRowsDto,
ProcessedSearchByAddressRecoverOutputDto
);



// ████████ initialize UploadCrudEngine ███████████████████████████████████████████
this.initUploadEngine
<
// upload (3)
ProcessedSearchByAddressUploadDto,
ProcessedSearchByAddressUploadInputDto,
ProcessedSearchByAddressUploadOutputDto,

// upload_delete (3)
ProcessedSearchByAddressUploadDeleteDto,
ProcessedSearchByAddressUploadDeleteInputDto,
ProcessedSearchByAddressUploadDeleteOutputDto
>
(
// upload (3)
ProcessedSearchByAddressUploadDto,
ProcessedSearchByAddressUploadInputDto,
ProcessedSearchByAddressUploadOutputDto,

// upload_delete (3)
ProcessedSearchByAddressUploadDeleteDto,
ProcessedSearchByAddressUploadDeleteInputDto,
ProcessedSearchByAddressUploadDeleteOutputDto
);


// ████████ initialize ImportExportCrudEngine █████████████████████████████████████

}}