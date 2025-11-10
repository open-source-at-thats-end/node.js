import { StaticDataValueEntity } from "./entities/value.entity";
import { Injectable } from "@nestjs/common";
import { DataSource, Repository } from "typeorm";
import { InjectRepository } from "@nestjs/typeorm";
import { ConfService, CreateCrudEngine, CrudFactory, DataValidationPipe, DeleteCrudEngine, FindCrudEngine, FindOutputPaginationDto, LibraryAppService, LogService, RemoveCrudEngine, UpdateCrudEngine, UploadCrudEngine, UpsertCrudEngine } from "@libs/library-app";
import { SelfGraphqlMicroserviceService } from "@libs/dynamic-app";
import { StaticDataValueCreateDto, StaticDataValueCreateInputDto, StaticDataValueCreateOutputDto, StaticDataValueDeleteDto, StaticDataValueDeleteInputDto, StaticDataValueDeleteInputWhereDto, StaticDataValueDeleteOutputDto, StaticDataValueFindDto, StaticDataValueFindInputDto, StaticDataValueFindInputGroupByDto, StaticDataValueFindInputSortOrderDto, StaticDataValueFindInputWhereDto, StaticDataValueFindOneByIdDto, StaticDataValueFindOneByIdInputDto, StaticDataValueFindOutputDto, StaticDataValueFindOutputRowsDto, StaticDataValueRecoverDto, StaticDataValueRecoverInputDto, StaticDataValueRecoverInputWhereDto, StaticDataValueRecoverOutputDto, StaticDataValueRecoverOutputAffectedRowsDto, StaticDataValueRemoveDto, StaticDataValueRemoveInputDto, StaticDataValueRemoveInputWhereDto, StaticDataValueRemoveOutputDto, StaticDataValueRemoveOutputAffectedRowsDto, StaticDataValueRestoreDto, StaticDataValueRestoreInputDto, StaticDataValueRestoreInputWhereDto, StaticDataValueRestoreOutputDto, StaticDataValueSoftDeleteDto, StaticDataValueSoftDeleteInputDto, StaticDataValueSoftDeleteInputWhereDto, StaticDataValueSoftDeleteOutputDto, StaticDataValueSoftRemoveDto, StaticDataValueSoftRemoveInputDto, StaticDataValueSoftRemoveInputWhereDto, StaticDataValueSoftRemoveOutputDto, StaticDataValueSoftRemoveOutputAffectedRowsDto, StaticDataValueUpdateDto, StaticDataValueUpdateInputDto, StaticDataValueUpdateInputSetsDto, StaticDataValueUpdateInputWhereDto, StaticDataValueUpdateOutputDto, StaticDataValueUpdateOutputAffectedRowsDto, StaticDataValueUploadDeleteDto, StaticDataValueUploadDeleteInputDto, StaticDataValueUploadDeleteOutputDto, StaticDataValueUploadDto, StaticDataValueUploadInputDto, StaticDataValueUploadOutputDto, StaticDataValueUpsertDto, StaticDataValueUpsertInputDto, StaticDataValueUpsertOutputDto } from "./dto/value.dto";

@Injectable()
export class StaticDataValueFactory extends CrudFactory<StaticDataValueEntity> {

// ████████ FindCrudEngine ████████████████████████████████████████
public declare readonly findEngine: FindCrudEngine<
// entity (1)
StaticDataValueEntity,

// find (8)
StaticDataValueFindDto,
StaticDataValueFindInputWhereDto,
StaticDataValueFindInputSortOrderDto,
StaticDataValueFindInputGroupByDto,
StaticDataValueFindInputDto,
StaticDataValueFindOutputRowsDto,
FindOutputPaginationDto,
StaticDataValueFindOutputDto,

// find_one_by_id (2)
StaticDataValueFindOneByIdDto,
StaticDataValueFindOneByIdInputDto
>;

// ████████ CreateCrudEngine ████████████████████████████████████████
public declare readonly createEngine: CreateCrudEngine<
// entity (1)
StaticDataValueEntity,

// create (3)
StaticDataValueCreateDto,
StaticDataValueCreateInputDto,
StaticDataValueCreateOutputDto
>;

// ████████ UpdateCrudEngine ████████████████████████████████████████
public declare readonly updateEngine: UpdateCrudEngine<
// entity (1)
StaticDataValueEntity,

// update (6)
StaticDataValueUpdateDto,
StaticDataValueUpdateInputWhereDto,
StaticDataValueUpdateInputSetsDto,
StaticDataValueUpdateInputDto,
StaticDataValueUpdateOutputAffectedRowsDto,
StaticDataValueUpdateOutputDto
>;

// ████████ DeleteCrudEngine ████████████████████████████████████████
public declare readonly deleteEngine: DeleteCrudEngine<
// entity (1)
StaticDataValueEntity,

// soft_delete (4)
StaticDataValueSoftDeleteDto,
StaticDataValueSoftDeleteInputWhereDto,
StaticDataValueSoftDeleteInputDto,
StaticDataValueSoftDeleteOutputDto,

// delete (4)
StaticDataValueDeleteDto,
StaticDataValueDeleteInputWhereDto,
StaticDataValueDeleteInputDto,
StaticDataValueDeleteOutputDto,

// restore (4)
StaticDataValueRestoreDto,
StaticDataValueRestoreInputWhereDto,
StaticDataValueRestoreInputDto,
StaticDataValueRestoreOutputDto
>;

// ████████ UpsertCrudEngine ████████████████████████████████████████
public declare readonly upsertEngine: UpsertCrudEngine<
// entity (1)
StaticDataValueEntity,

// upsert (3)
StaticDataValueUpsertDto,
StaticDataValueUpsertInputDto,
StaticDataValueUpsertOutputDto
>;

// ████████ RemoveCrudEngine ████████████████████████████████████████
public declare readonly removeEngine: RemoveCrudEngine<
// entity (1)
StaticDataValueEntity,

// soft_remove (5)
StaticDataValueSoftRemoveDto,
StaticDataValueSoftRemoveInputWhereDto,
StaticDataValueSoftRemoveInputDto,
StaticDataValueSoftRemoveOutputAffectedRowsDto,
StaticDataValueSoftRemoveOutputDto,

// remove (4)
StaticDataValueRemoveDto,
StaticDataValueRemoveInputWhereDto,
StaticDataValueRemoveInputDto,
StaticDataValueRemoveOutputAffectedRowsDto,
StaticDataValueRemoveOutputDto,

// recover (5)
StaticDataValueRecoverDto,
StaticDataValueRecoverInputWhereDto,
StaticDataValueRecoverInputDto,
StaticDataValueRecoverOutputAffectedRowsDto,
StaticDataValueRecoverOutputDto
>;

// ████████ UploadCrudEngine ████████████████████████████████████████
public declare readonly uploadEngine: UploadCrudEngine<
// entity (1)
StaticDataValueEntity,

// upload (3)
StaticDataValueUploadDto,
StaticDataValueUploadInputDto,
StaticDataValueUploadOutputDto,

// upload_delete (3)
StaticDataValueUploadDeleteDto,
StaticDataValueUploadDeleteInputDto,
StaticDataValueUploadDeleteOutputDto
>;

constructor(
// data source
protected readonly dataSource: DataSource,

@InjectRepository(StaticDataValueEntity)
protected readonly repository: Repository<StaticDataValueEntity>,

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
    StaticDataValueEntity,
);

this.logService.setContext(StaticDataValueFactory.name);

// ████████ initialize FindCrudEngine ██████████████████████████████████████
this.initFindEngine
<
// find (8)
StaticDataValueFindDto,
StaticDataValueFindInputWhereDto,
StaticDataValueFindInputSortOrderDto,
StaticDataValueFindInputGroupByDto,
StaticDataValueFindInputDto,
StaticDataValueFindOutputRowsDto,
FindOutputPaginationDto,
StaticDataValueFindOutputDto,

// find_one_by_id (2)
StaticDataValueFindOneByIdDto,
StaticDataValueFindOneByIdInputDto
>
(
// find (8)
StaticDataValueFindDto,
StaticDataValueFindInputWhereDto,
StaticDataValueFindInputSortOrderDto,
StaticDataValueFindInputGroupByDto,
StaticDataValueFindInputDto,
StaticDataValueFindOutputRowsDto,
FindOutputPaginationDto,
StaticDataValueFindOutputDto,

// find_one_by_id (2)
StaticDataValueFindOneByIdDto,
StaticDataValueFindOneByIdInputDto
);


// ████████ initialize CreateCrudEngine ███████████████████████████████████████
this.initCreateEngine
<
// create (3)
StaticDataValueCreateDto,
StaticDataValueCreateInputDto,
StaticDataValueCreateOutputDto
>
(
// create (3)
StaticDataValueCreateDto,
StaticDataValueCreateInputDto,
StaticDataValueCreateOutputDto
);

// ████████ initialize UpdateCrudEngine ████████████████████████████████████████
this.initUpdateEngine
<
// update (6)
StaticDataValueUpdateDto,
StaticDataValueUpdateInputWhereDto,
StaticDataValueUpdateInputSetsDto,
StaticDataValueUpdateInputDto,
StaticDataValueUpdateOutputAffectedRowsDto,
StaticDataValueUpdateOutputDto
>
(
// update (6)
StaticDataValueUpdateDto,
StaticDataValueUpdateInputWhereDto,
StaticDataValueUpdateInputSetsDto,
StaticDataValueUpdateInputDto,
StaticDataValueUpdateOutputAffectedRowsDto,
StaticDataValueUpdateOutputDto
);


// ████████ initialize DeleteCrudEngine ███████████████████████████████████████████
this.initDeleteEngine
<
// soft_delete (4)
StaticDataValueSoftDeleteDto,
StaticDataValueSoftDeleteInputWhereDto,
StaticDataValueSoftDeleteInputDto,
StaticDataValueSoftDeleteOutputDto,

// delete (4)
StaticDataValueDeleteDto,
StaticDataValueDeleteInputWhereDto,
StaticDataValueDeleteInputDto,
StaticDataValueDeleteOutputDto,

// restore (4)
StaticDataValueRestoreDto,
StaticDataValueRestoreInputWhereDto,
StaticDataValueRestoreInputDto,
StaticDataValueRestoreOutputDto
>
(
// soft_delete (4)
StaticDataValueSoftDeleteDto,
StaticDataValueSoftDeleteInputWhereDto,
StaticDataValueSoftDeleteInputDto,
StaticDataValueSoftDeleteOutputDto,

// delete (4)
StaticDataValueDeleteDto,
StaticDataValueDeleteInputWhereDto,
StaticDataValueDeleteInputDto,
StaticDataValueDeleteOutputDto,

// restore (4)
StaticDataValueRestoreDto,
StaticDataValueRestoreInputWhereDto,
StaticDataValueRestoreInputDto,
StaticDataValueRestoreOutputDto
);



// ████████ initialize UpsertCrudEngine ███████████████████████████████████████████
this.initUpsertEngine
<
// upsert (3)
StaticDataValueUpsertDto,
StaticDataValueUpsertInputDto,
StaticDataValueUpsertOutputDto
>
(
// upsert (3)
StaticDataValueUpsertDto,
StaticDataValueUpsertInputDto,
StaticDataValueUpsertOutputDto
);




// ████████ initialize RemoveCrudEngine ███████████████████████████████████████████
this.initRemoveEngine
<
// soft_remove (5)
StaticDataValueSoftRemoveDto,
StaticDataValueSoftRemoveInputWhereDto,
StaticDataValueSoftRemoveInputDto,
StaticDataValueSoftRemoveOutputAffectedRowsDto,
StaticDataValueSoftRemoveOutputDto,

// remove (4)
StaticDataValueRemoveDto,
StaticDataValueRemoveInputWhereDto,
StaticDataValueRemoveInputDto,
StaticDataValueRemoveOutputAffectedRowsDto,
StaticDataValueRemoveOutputDto,

// recover (5)
StaticDataValueRecoverDto,
StaticDataValueRecoverInputWhereDto,
StaticDataValueRecoverInputDto,
StaticDataValueRecoverOutputAffectedRowsDto,
StaticDataValueRecoverOutputDto
>
(
// soft_remove (5)
StaticDataValueSoftRemoveDto,
StaticDataValueSoftRemoveInputWhereDto,
StaticDataValueSoftRemoveInputDto,
StaticDataValueSoftRemoveOutputAffectedRowsDto,
StaticDataValueSoftRemoveOutputDto,

// remove (4)
StaticDataValueRemoveDto,
StaticDataValueRemoveInputWhereDto,
StaticDataValueRemoveInputDto,
StaticDataValueRemoveOutputAffectedRowsDto,
StaticDataValueRemoveOutputDto,

// recover (5)
StaticDataValueRecoverDto,
StaticDataValueRecoverInputWhereDto,
StaticDataValueRecoverInputDto,
StaticDataValueRecoverOutputAffectedRowsDto,
StaticDataValueRecoverOutputDto
);



// ████████ initialize UploadCrudEngine ███████████████████████████████████████████
this.initUploadEngine
<
// upload (3)
StaticDataValueUploadDto,
StaticDataValueUploadInputDto,
StaticDataValueUploadOutputDto,

// upload_delete (3)
StaticDataValueUploadDeleteDto,
StaticDataValueUploadDeleteInputDto,
StaticDataValueUploadDeleteOutputDto
>
(
// upload (3)
StaticDataValueUploadDto,
StaticDataValueUploadInputDto,
StaticDataValueUploadOutputDto,

// upload_delete (3)
StaticDataValueUploadDeleteDto,
StaticDataValueUploadDeleteInputDto,
StaticDataValueUploadDeleteOutputDto
);


// ████████ initialize ImportExportCrudEngine █████████████████████████████████████

}

}