import { MeasurementCategoryEntity } from "./entities/measurement.category.entity";
import { Injectable } from "@nestjs/common";
import { DataSource, Repository } from "typeorm";
import { InjectRepository } from "@nestjs/typeorm";
import { ConfService, CreateCrudEngine, CrudFactory, DataValidationPipe, DeleteCrudEngine, FindCrudEngine, FindOutputPaginationDto, LibraryAppService, LogService, RemoveCrudEngine, UpdateCrudEngine, UploadCrudEngine, UpsertCrudEngine } from "@libs/library-app";
import { SelfGraphqlMicroserviceService } from '@libs/dynamic-app';
import { MeasurementCategoryCreateDto, MeasurementCategoryCreateInputDto, MeasurementCategoryCreateOutputDto, MeasurementCategoryDeleteDto, MeasurementCategoryDeleteInputDto, MeasurementCategoryDeleteInputWhereDto, MeasurementCategoryDeleteOutputDto, MeasurementCategoryFindDto, MeasurementCategoryFindInputDto, MeasurementCategoryFindInputGroupByDto, MeasurementCategoryFindInputSortOrderDto, MeasurementCategoryFindInputWhereDto, MeasurementCategoryFindOneByIdDto, MeasurementCategoryFindOneByIdInputDto, MeasurementCategoryFindOutputDto, MeasurementCategoryFindOutputRowsDto, MeasurementCategoryRecoverDto, MeasurementCategoryRecoverInputDto, MeasurementCategoryRecoverInputWhereDto, MeasurementCategoryRecoverOutputDto, MeasurementCategoryRecoverOutputAffectedRowsDto, MeasurementCategoryRemoveDto, MeasurementCategoryRemoveInputDto, MeasurementCategoryRemoveInputWhereDto, MeasurementCategoryRemoveOutputDto, MeasurementCategoryRemoveOutputAffectedRowsDto, MeasurementCategoryRestoreDto, MeasurementCategoryRestoreInputDto, MeasurementCategoryRestoreInputWhereDto, MeasurementCategoryRestoreOutputDto, MeasurementCategorySoftDeleteDto, MeasurementCategorySoftDeleteInputDto, MeasurementCategorySoftDeleteInputWhereDto, MeasurementCategorySoftDeleteOutputDto, MeasurementCategorySoftRemoveDto, MeasurementCategorySoftRemoveInputDto, MeasurementCategorySoftRemoveInputWhereDto, MeasurementCategorySoftRemoveOutputDto, MeasurementCategorySoftRemoveOutputAffectedRowsDto, MeasurementCategoryUpdateDto, MeasurementCategoryUpdateInputDto, MeasurementCategoryUpdateInputSetsDto, MeasurementCategoryUpdateInputWhereDto, MeasurementCategoryUpdateOutputDto, MeasurementCategoryUpdateOutputAffectedRowsDto, MeasurementCategoryUploadDeleteDto, MeasurementCategoryUploadDeleteInputDto, MeasurementCategoryUploadDeleteOutputDto, MeasurementCategoryUploadDto, MeasurementCategoryUploadInputDto, MeasurementCategoryUploadOutputDto, MeasurementCategoryUpsertDto, MeasurementCategoryUpsertInputDto, MeasurementCategoryUpsertOutputDto } from "./dto/category.dto";

@Injectable()
export class MeasurementCategoryFactory extends CrudFactory<MeasurementCategoryEntity> {

// ████████ FindCrudEngine ████████████████████████████████████████
public declare readonly findEngine: FindCrudEngine<
// entity (1)
MeasurementCategoryEntity,

// find (8)
MeasurementCategoryFindDto,
MeasurementCategoryFindInputWhereDto,
MeasurementCategoryFindInputSortOrderDto,
MeasurementCategoryFindInputGroupByDto,
MeasurementCategoryFindInputDto,
MeasurementCategoryFindOutputRowsDto,
FindOutputPaginationDto,
MeasurementCategoryFindOutputDto,

// find_one_by_id (2)
MeasurementCategoryFindOneByIdDto,
MeasurementCategoryFindOneByIdInputDto
>;

// ████████ CreateCrudEngine ████████████████████████████████████████
public declare readonly createEngine: CreateCrudEngine<
// entity (1)
MeasurementCategoryEntity,

// create (3)
MeasurementCategoryCreateDto,
MeasurementCategoryCreateInputDto,
MeasurementCategoryCreateOutputDto
>;

// ████████ UpdateCrudEngine ████████████████████████████████████████
public declare readonly updateEngine: UpdateCrudEngine<
// entity (1)
MeasurementCategoryEntity,

// update (6)
MeasurementCategoryUpdateDto,
MeasurementCategoryUpdateInputWhereDto,
MeasurementCategoryUpdateInputSetsDto,
MeasurementCategoryUpdateInputDto,
MeasurementCategoryUpdateOutputAffectedRowsDto,
MeasurementCategoryUpdateOutputDto
>;

// ████████ DeleteCrudEngine ████████████████████████████████████████
public declare readonly deleteEngine: DeleteCrudEngine<
// entity (1)
MeasurementCategoryEntity,

// soft_delete (4)
MeasurementCategorySoftDeleteDto,
MeasurementCategorySoftDeleteInputWhereDto,
MeasurementCategorySoftDeleteInputDto,
MeasurementCategorySoftDeleteOutputDto,

// delete (4)
MeasurementCategoryDeleteDto,
MeasurementCategoryDeleteInputWhereDto,
MeasurementCategoryDeleteInputDto,
MeasurementCategoryDeleteOutputDto,

// restore (4)
MeasurementCategoryRestoreDto,
MeasurementCategoryRestoreInputWhereDto,
MeasurementCategoryRestoreInputDto,
MeasurementCategoryRestoreOutputDto
>;

// ████████ UpsertCrudEngine ████████████████████████████████████████
public declare readonly upsertEngine: UpsertCrudEngine<
// entity (1)
MeasurementCategoryEntity,

// upsert (3)
MeasurementCategoryUpsertDto,
MeasurementCategoryUpsertInputDto,
MeasurementCategoryUpsertOutputDto
>;

// ████████ RemoveCrudEngine ████████████████████████████████████████
public declare readonly removeEngine: RemoveCrudEngine<
// entity (1)
MeasurementCategoryEntity,

// soft_remove (5)
MeasurementCategorySoftRemoveDto,
MeasurementCategorySoftRemoveInputWhereDto,
MeasurementCategorySoftRemoveInputDto,
MeasurementCategorySoftRemoveOutputAffectedRowsDto,
MeasurementCategorySoftRemoveOutputDto,

// remove (4)
MeasurementCategoryRemoveDto,
MeasurementCategoryRemoveInputWhereDto,
MeasurementCategoryRemoveInputDto,
MeasurementCategoryRemoveOutputAffectedRowsDto,
MeasurementCategoryRemoveOutputDto,

// recover (5)
MeasurementCategoryRecoverDto,
MeasurementCategoryRecoverInputWhereDto,
MeasurementCategoryRecoverInputDto,
MeasurementCategoryRecoverOutputAffectedRowsDto,
MeasurementCategoryRecoverOutputDto
>;

// ████████ UploadCrudEngine ████████████████████████████████████████
public declare readonly uploadEngine: UploadCrudEngine<
// entity (1)
MeasurementCategoryEntity,

// upload (3)
MeasurementCategoryUploadDto,
MeasurementCategoryUploadInputDto,
MeasurementCategoryUploadOutputDto,

// upload_delete (3)
MeasurementCategoryUploadDeleteDto,
MeasurementCategoryUploadDeleteInputDto,
MeasurementCategoryUploadDeleteOutputDto
>;

constructor(
// data source
protected readonly dataSource: DataSource,

@InjectRepository(MeasurementCategoryEntity)
protected readonly repository: Repository<MeasurementCategoryEntity>,

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
    MeasurementCategoryEntity,
);

this.logService.setContext(MeasurementCategoryFactory.name);

// ████████ initialize FindCrudEngine ██████████████████████████████████████
this.initFindEngine
<
// find (8)
MeasurementCategoryFindDto,
MeasurementCategoryFindInputWhereDto,
MeasurementCategoryFindInputSortOrderDto,
MeasurementCategoryFindInputGroupByDto,
MeasurementCategoryFindInputDto,
MeasurementCategoryFindOutputRowsDto,
FindOutputPaginationDto,
MeasurementCategoryFindOutputDto,

// find_one_by_id (2)
MeasurementCategoryFindOneByIdDto,
MeasurementCategoryFindOneByIdInputDto
>
(
// find (8)
MeasurementCategoryFindDto,
MeasurementCategoryFindInputWhereDto,
MeasurementCategoryFindInputSortOrderDto,
MeasurementCategoryFindInputGroupByDto,
MeasurementCategoryFindInputDto,
MeasurementCategoryFindOutputRowsDto,
FindOutputPaginationDto,
MeasurementCategoryFindOutputDto,

// find_one_by_id (2)
MeasurementCategoryFindOneByIdDto,
MeasurementCategoryFindOneByIdInputDto
);


// ████████ initialize CreateCrudEngine ███████████████████████████████████████
this.initCreateEngine
<
// create (3)
MeasurementCategoryCreateDto,
MeasurementCategoryCreateInputDto,
MeasurementCategoryCreateOutputDto
>
(
// create (3)
MeasurementCategoryCreateDto,
MeasurementCategoryCreateInputDto,
MeasurementCategoryCreateOutputDto
);

// ████████ initialize UpdateCrudEngine ████████████████████████████████████████
this.initUpdateEngine
<
// update (6)
MeasurementCategoryUpdateDto,
MeasurementCategoryUpdateInputWhereDto,
MeasurementCategoryUpdateInputSetsDto,
MeasurementCategoryUpdateInputDto,
MeasurementCategoryUpdateOutputAffectedRowsDto,
MeasurementCategoryUpdateOutputDto
>
(
// update (6)
MeasurementCategoryUpdateDto,
MeasurementCategoryUpdateInputWhereDto,
MeasurementCategoryUpdateInputSetsDto,
MeasurementCategoryUpdateInputDto,
MeasurementCategoryUpdateOutputAffectedRowsDto,
MeasurementCategoryUpdateOutputDto
);


// ████████ initialize DeleteCrudEngine ███████████████████████████████████████████
this.initDeleteEngine
<
// soft_delete (4)
MeasurementCategorySoftDeleteDto,
MeasurementCategorySoftDeleteInputWhereDto,
MeasurementCategorySoftDeleteInputDto,
MeasurementCategorySoftDeleteOutputDto,

// delete (4)
MeasurementCategoryDeleteDto,
MeasurementCategoryDeleteInputWhereDto,
MeasurementCategoryDeleteInputDto,
MeasurementCategoryDeleteOutputDto,

// restore (4)
MeasurementCategoryRestoreDto,
MeasurementCategoryRestoreInputWhereDto,
MeasurementCategoryRestoreInputDto,
MeasurementCategoryRestoreOutputDto
>
(
// soft_delete (4)
MeasurementCategorySoftDeleteDto,
MeasurementCategorySoftDeleteInputWhereDto,
MeasurementCategorySoftDeleteInputDto,
MeasurementCategorySoftDeleteOutputDto,

// delete (4)
MeasurementCategoryDeleteDto,
MeasurementCategoryDeleteInputWhereDto,
MeasurementCategoryDeleteInputDto,
MeasurementCategoryDeleteOutputDto,

// restore (4)
MeasurementCategoryRestoreDto,
MeasurementCategoryRestoreInputWhereDto,
MeasurementCategoryRestoreInputDto,
MeasurementCategoryRestoreOutputDto
);



// ████████ initialize UpsertCrudEngine ███████████████████████████████████████████
this.initUpsertEngine
<
// upsert (3)
MeasurementCategoryUpsertDto,
MeasurementCategoryUpsertInputDto,
MeasurementCategoryUpsertOutputDto
>
(
// upsert (3)
MeasurementCategoryUpsertDto,
MeasurementCategoryUpsertInputDto,
MeasurementCategoryUpsertOutputDto
);




// ████████ initialize RemoveCrudEngine ███████████████████████████████████████████
this.initRemoveEngine
<
// soft_remove (5)
MeasurementCategorySoftRemoveDto,
MeasurementCategorySoftRemoveInputWhereDto,
MeasurementCategorySoftRemoveInputDto,
MeasurementCategorySoftRemoveOutputAffectedRowsDto,
MeasurementCategorySoftRemoveOutputDto,

// remove (4)
MeasurementCategoryRemoveDto,
MeasurementCategoryRemoveInputWhereDto,
MeasurementCategoryRemoveInputDto,
MeasurementCategoryRemoveOutputAffectedRowsDto,
MeasurementCategoryRemoveOutputDto,

// recover (5)
MeasurementCategoryRecoverDto,
MeasurementCategoryRecoverInputWhereDto,
MeasurementCategoryRecoverInputDto,
MeasurementCategoryRecoverOutputAffectedRowsDto,
MeasurementCategoryRecoverOutputDto
>
(
// soft_remove (5)
MeasurementCategorySoftRemoveDto,
MeasurementCategorySoftRemoveInputWhereDto,
MeasurementCategorySoftRemoveInputDto,
MeasurementCategorySoftRemoveOutputAffectedRowsDto,
MeasurementCategorySoftRemoveOutputDto,

// remove (4)
MeasurementCategoryRemoveDto,
MeasurementCategoryRemoveInputWhereDto,
MeasurementCategoryRemoveInputDto,
MeasurementCategoryRemoveOutputAffectedRowsDto,
MeasurementCategoryRemoveOutputDto,

// recover (5)
MeasurementCategoryRecoverDto,
MeasurementCategoryRecoverInputWhereDto,
MeasurementCategoryRecoverInputDto,
MeasurementCategoryRecoverOutputAffectedRowsDto,
MeasurementCategoryRecoverOutputDto
);



// ████████ initialize UploadCrudEngine ███████████████████████████████████████████
this.initUploadEngine
<
// upload (3)
MeasurementCategoryUploadDto,
MeasurementCategoryUploadInputDto,
MeasurementCategoryUploadOutputDto,

// upload_delete (3)
MeasurementCategoryUploadDeleteDto,
MeasurementCategoryUploadDeleteInputDto,
MeasurementCategoryUploadDeleteOutputDto
>
(
// upload (3)
MeasurementCategoryUploadDto,
MeasurementCategoryUploadInputDto,
MeasurementCategoryUploadOutputDto,

// upload_delete (3)
MeasurementCategoryUploadDeleteDto,
MeasurementCategoryUploadDeleteInputDto,
MeasurementCategoryUploadDeleteOutputDto
);


// ████████ initialize ImportExportCrudEngine █████████████████████████████████████

}

}