import { SettingCategoryEntity } from "./entities/category.entity";
import { Injectable } from "@nestjs/common";
import { DataSource, Repository } from "typeorm";
import { InjectRepository } from "@nestjs/typeorm";
import { ConfService, CreateCrudEngine, CrudFactory, DataValidationPipe, DeleteCrudEngine, FindCrudEngine, FindOutputPaginationDto, LibraryAppService, LogService, RemoveCrudEngine, UpdateCrudEngine, UploadCrudEngine, UpsertCrudEngine } from "@libs/library-app";
import { SelfGraphqlMicroserviceService } from "@libs/dynamic-app";
import { SettingCategoryCreateDto, SettingCategoryCreateInputDto, SettingCategoryCreateOutputDto, SettingCategoryDeleteDto, SettingCategoryDeleteInputDto, SettingCategoryDeleteInputWhereDto, SettingCategoryDeleteOutputDto, SettingCategoryFindDto, SettingCategoryFindInputDto, SettingCategoryFindInputGroupByDto, SettingCategoryFindInputSortOrderDto, SettingCategoryFindInputWhereDto, SettingCategoryFindOneByIdDto, SettingCategoryFindOneByIdInputDto, SettingCategoryFindOutputDto, SettingCategoryFindOutputRowsDto, SettingCategoryRecoverDto, SettingCategoryRecoverInputDto, SettingCategoryRecoverInputWhereDto, SettingCategoryRecoverOutputDto, SettingCategoryRecoverOutputAffectedRowsDto, SettingCategoryRemoveDto, SettingCategoryRemoveInputDto, SettingCategoryRemoveInputWhereDto, SettingCategoryRemoveOutputDto, SettingCategoryRemoveOutputAffectedRowsDto, SettingCategoryRestoreDto, SettingCategoryRestoreInputDto, SettingCategoryRestoreInputWhereDto, SettingCategoryRestoreOutputDto, SettingCategorySoftDeleteDto, SettingCategorySoftDeleteInputDto, SettingCategorySoftDeleteInputWhereDto, SettingCategorySoftDeleteOutputDto, SettingCategorySoftRemoveDto, SettingCategorySoftRemoveInputDto, SettingCategorySoftRemoveInputWhereDto, SettingCategorySoftRemoveOutputDto, SettingCategorySoftRemoveOutputAffectedRowsDto, SettingCategoryUpdateDto, SettingCategoryUpdateInputDto, SettingCategoryUpdateInputSetsDto, SettingCategoryUpdateInputWhereDto, SettingCategoryUpdateOutputDto, SettingCategoryUpdateOutputAffectedRowsDto, SettingCategoryUploadDeleteDto, SettingCategoryUploadDeleteInputDto, SettingCategoryUploadDeleteOutputDto, SettingCategoryUploadDto, SettingCategoryUploadInputDto, SettingCategoryUploadOutputDto, SettingCategoryUpsertDto, SettingCategoryUpsertInputDto, SettingCategoryUpsertOutputDto } from "./dto/category.dto";

@Injectable()
export class SettingCategoryFactory extends CrudFactory<SettingCategoryEntity> {

// ████████ FindCrudEngine ████████████████████████████████████████
public declare readonly findEngine: FindCrudEngine<
// entity (1)
SettingCategoryEntity,

// find (8)
SettingCategoryFindDto,
SettingCategoryFindInputWhereDto,
SettingCategoryFindInputSortOrderDto,
SettingCategoryFindInputGroupByDto,
SettingCategoryFindInputDto,
SettingCategoryFindOutputRowsDto,
FindOutputPaginationDto,
SettingCategoryFindOutputDto,

// find_one_by_id (2)
SettingCategoryFindOneByIdDto,
SettingCategoryFindOneByIdInputDto
>;

// ████████ CreateCrudEngine ████████████████████████████████████████
public declare readonly createEngine: CreateCrudEngine<
// entity (1)
SettingCategoryEntity,

// create (3)
SettingCategoryCreateDto,
SettingCategoryCreateInputDto,
SettingCategoryCreateOutputDto
>;

// ████████ UpdateCrudEngine ████████████████████████████████████████
public declare readonly updateEngine: UpdateCrudEngine<
// entity (1)
SettingCategoryEntity,

// update (6)
SettingCategoryUpdateDto,
SettingCategoryUpdateInputWhereDto,
SettingCategoryUpdateInputSetsDto,
SettingCategoryUpdateInputDto,
SettingCategoryUpdateOutputAffectedRowsDto,
SettingCategoryUpdateOutputDto
>;

// ████████ DeleteCrudEngine ████████████████████████████████████████
public declare readonly deleteEngine: DeleteCrudEngine<
// entity (1)
SettingCategoryEntity,

// soft_delete (4)
SettingCategorySoftDeleteDto,
SettingCategorySoftDeleteInputWhereDto,
SettingCategorySoftDeleteInputDto,
SettingCategorySoftDeleteOutputDto,

// delete (4)
SettingCategoryDeleteDto,
SettingCategoryDeleteInputWhereDto,
SettingCategoryDeleteInputDto,
SettingCategoryDeleteOutputDto,

// restore (4)
SettingCategoryRestoreDto,
SettingCategoryRestoreInputWhereDto,
SettingCategoryRestoreInputDto,
SettingCategoryRestoreOutputDto
>;

// ████████ UpsertCrudEngine ████████████████████████████████████████
public declare readonly upsertEngine: UpsertCrudEngine<
// entity (1)
SettingCategoryEntity,

// upsert (3)
SettingCategoryUpsertDto,
SettingCategoryUpsertInputDto,
SettingCategoryUpsertOutputDto
>;

// ████████ RemoveCrudEngine ████████████████████████████████████████
public declare readonly removeEngine: RemoveCrudEngine<
// entity (1)
SettingCategoryEntity,

// soft_remove (5)
SettingCategorySoftRemoveDto,
SettingCategorySoftRemoveInputWhereDto,
SettingCategorySoftRemoveInputDto,
SettingCategorySoftRemoveOutputAffectedRowsDto,
SettingCategorySoftRemoveOutputDto,

// remove (4)
SettingCategoryRemoveDto,
SettingCategoryRemoveInputWhereDto,
SettingCategoryRemoveInputDto,
SettingCategoryRemoveOutputAffectedRowsDto,
SettingCategoryRemoveOutputDto,

// recover (5)
SettingCategoryRecoverDto,
SettingCategoryRecoverInputWhereDto,
SettingCategoryRecoverInputDto,
SettingCategoryRecoverOutputAffectedRowsDto,
SettingCategoryRecoverOutputDto
>;

// ████████ UploadCrudEngine ████████████████████████████████████████
public declare readonly uploadEngine: UploadCrudEngine<
// entity (1)
SettingCategoryEntity,

// upload (3)
SettingCategoryUploadDto,
SettingCategoryUploadInputDto,
SettingCategoryUploadOutputDto,

// upload_delete (3)
SettingCategoryUploadDeleteDto,
SettingCategoryUploadDeleteInputDto,
SettingCategoryUploadDeleteOutputDto
>;

constructor(
// data source
protected readonly dataSource: DataSource,

@InjectRepository(SettingCategoryEntity)
protected readonly repository: Repository<SettingCategoryEntity>,

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
    SettingCategoryEntity,
);

this.logService.setContext(SettingCategoryFactory.name);

// ████████ initialize FindCrudEngine ██████████████████████████████████████
this.initFindEngine
<
// find (8)
SettingCategoryFindDto,
SettingCategoryFindInputWhereDto,
SettingCategoryFindInputSortOrderDto,
SettingCategoryFindInputGroupByDto,
SettingCategoryFindInputDto,
SettingCategoryFindOutputRowsDto,
FindOutputPaginationDto,
SettingCategoryFindOutputDto,

// find_one_by_id (2)
SettingCategoryFindOneByIdDto,
SettingCategoryFindOneByIdInputDto
>
(
// find (8)
SettingCategoryFindDto,
SettingCategoryFindInputWhereDto,
SettingCategoryFindInputSortOrderDto,
SettingCategoryFindInputGroupByDto,
SettingCategoryFindInputDto,
SettingCategoryFindOutputRowsDto,
FindOutputPaginationDto,
SettingCategoryFindOutputDto,

// find_one_by_id (2)
SettingCategoryFindOneByIdDto,
SettingCategoryFindOneByIdInputDto
);


// ████████ initialize CreateCrudEngine ███████████████████████████████████████
this.initCreateEngine
<
// create (3)
SettingCategoryCreateDto,
SettingCategoryCreateInputDto,
SettingCategoryCreateOutputDto
>
(
// create (3)
SettingCategoryCreateDto,
SettingCategoryCreateInputDto,
SettingCategoryCreateOutputDto
);

// ████████ initialize UpdateCrudEngine ████████████████████████████████████████
this.initUpdateEngine
<
// update (6)
SettingCategoryUpdateDto,
SettingCategoryUpdateInputWhereDto,
SettingCategoryUpdateInputSetsDto,
SettingCategoryUpdateInputDto,
SettingCategoryUpdateOutputAffectedRowsDto,
SettingCategoryUpdateOutputDto
>
(
// update (6)
SettingCategoryUpdateDto,
SettingCategoryUpdateInputWhereDto,
SettingCategoryUpdateInputSetsDto,
SettingCategoryUpdateInputDto,
SettingCategoryUpdateOutputAffectedRowsDto,
SettingCategoryUpdateOutputDto
);


// ████████ initialize DeleteCrudEngine ███████████████████████████████████████████
this.initDeleteEngine
<
// soft_delete (4)
SettingCategorySoftDeleteDto,
SettingCategorySoftDeleteInputWhereDto,
SettingCategorySoftDeleteInputDto,
SettingCategorySoftDeleteOutputDto,

// delete (4)
SettingCategoryDeleteDto,
SettingCategoryDeleteInputWhereDto,
SettingCategoryDeleteInputDto,
SettingCategoryDeleteOutputDto,

// restore (4)
SettingCategoryRestoreDto,
SettingCategoryRestoreInputWhereDto,
SettingCategoryRestoreInputDto,
SettingCategoryRestoreOutputDto
>
(
// soft_delete (4)
SettingCategorySoftDeleteDto,
SettingCategorySoftDeleteInputWhereDto,
SettingCategorySoftDeleteInputDto,
SettingCategorySoftDeleteOutputDto,

// delete (4)
SettingCategoryDeleteDto,
SettingCategoryDeleteInputWhereDto,
SettingCategoryDeleteInputDto,
SettingCategoryDeleteOutputDto,

// restore (4)
SettingCategoryRestoreDto,
SettingCategoryRestoreInputWhereDto,
SettingCategoryRestoreInputDto,
SettingCategoryRestoreOutputDto
);



// ████████ initialize UpsertCrudEngine ███████████████████████████████████████████
this.initUpsertEngine
<
// upsert (3)
SettingCategoryUpsertDto,
SettingCategoryUpsertInputDto,
SettingCategoryUpsertOutputDto
>
(
// upsert (3)
SettingCategoryUpsertDto,
SettingCategoryUpsertInputDto,
SettingCategoryUpsertOutputDto
);




// ████████ initialize RemoveCrudEngine ███████████████████████████████████████████
this.initRemoveEngine
<
// soft_remove (5)
SettingCategorySoftRemoveDto,
SettingCategorySoftRemoveInputWhereDto,
SettingCategorySoftRemoveInputDto,
SettingCategorySoftRemoveOutputAffectedRowsDto,
SettingCategorySoftRemoveOutputDto,

// remove (4)
SettingCategoryRemoveDto,
SettingCategoryRemoveInputWhereDto,
SettingCategoryRemoveInputDto,
SettingCategoryRemoveOutputAffectedRowsDto,
SettingCategoryRemoveOutputDto,

// recover (5)
SettingCategoryRecoverDto,
SettingCategoryRecoverInputWhereDto,
SettingCategoryRecoverInputDto,
SettingCategoryRecoverOutputAffectedRowsDto,
SettingCategoryRecoverOutputDto
>
(
// soft_remove (5)
SettingCategorySoftRemoveDto,
SettingCategorySoftRemoveInputWhereDto,
SettingCategorySoftRemoveInputDto,
SettingCategorySoftRemoveOutputAffectedRowsDto,
SettingCategorySoftRemoveOutputDto,

// remove (4)
SettingCategoryRemoveDto,
SettingCategoryRemoveInputWhereDto,
SettingCategoryRemoveInputDto,
SettingCategoryRemoveOutputAffectedRowsDto,
SettingCategoryRemoveOutputDto,

// recover (5)
SettingCategoryRecoverDto,
SettingCategoryRecoverInputWhereDto,
SettingCategoryRecoverInputDto,
SettingCategoryRecoverOutputAffectedRowsDto,
SettingCategoryRecoverOutputDto
);



// ████████ initialize UploadCrudEngine ███████████████████████████████████████████
this.initUploadEngine
<
// upload (3)
SettingCategoryUploadDto,
SettingCategoryUploadInputDto,
SettingCategoryUploadOutputDto,

// upload_delete (3)
SettingCategoryUploadDeleteDto,
SettingCategoryUploadDeleteInputDto,
SettingCategoryUploadDeleteOutputDto
>
(
// upload (3)
SettingCategoryUploadDto,
SettingCategoryUploadInputDto,
SettingCategoryUploadOutputDto,

// upload_delete (3)
SettingCategoryUploadDeleteDto,
SettingCategoryUploadDeleteInputDto,
SettingCategoryUploadDeleteOutputDto
);


// ████████ initialize ImportExportCrudEngine █████████████████████████████████████

}

}