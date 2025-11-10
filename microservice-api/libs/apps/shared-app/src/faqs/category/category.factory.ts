import { FaqCategoryEntity } from "./entities/category.entity";
import { Injectable } from "@nestjs/common";
import { DataSource, Repository } from "typeorm";
import { InjectRepository } from "@nestjs/typeorm";
import { ConfService, CreateCrudEngine, CrudFactory, DataValidationPipe, DeleteCrudEngine, FindCrudEngine, FindOutputPaginationDto, LibraryAppService, LogService, RemoveCrudEngine, UpdateCrudEngine, UploadCrudEngine, UpsertCrudEngine } from "@libs/library-app";
import { SelfGraphqlMicroserviceService } from '@libs/dynamic-app';
import { FaqCategoryCreateDto, FaqCategoryCreateInputDto, FaqCategoryCreateOutputDto, FaqCategoryDeleteDto, FaqCategoryDeleteInputDto, FaqCategoryDeleteInputWhereDto, FaqCategoryDeleteOutputDto, FaqCategoryFindDto, FaqCategoryFindInputDto, FaqCategoryFindInputGroupByDto, FaqCategoryFindInputSortOrderDto, FaqCategoryFindInputWhereDto, FaqCategoryFindOneByIdDto, FaqCategoryFindOneByIdInputDto, FaqCategoryFindOutputDto, FaqCategoryFindOutputRowsDto, FaqCategoryRecoverDto, FaqCategoryRecoverInputDto, FaqCategoryRecoverInputWhereDto, FaqCategoryRecoverOutputDto, FaqCategoryRecoverOutputAffectedRowsDto, FaqCategoryRemoveDto, FaqCategoryRemoveInputDto, FaqCategoryRemoveInputWhereDto, FaqCategoryRemoveOutputDto, FaqCategoryRemoveOutputAffectedRowsDto, FaqCategoryRestoreDto, FaqCategoryRestoreInputDto, FaqCategoryRestoreInputWhereDto, FaqCategoryRestoreOutputDto, FaqCategorySoftDeleteDto, FaqCategorySoftDeleteInputDto, FaqCategorySoftDeleteInputWhereDto, FaqCategorySoftDeleteOutputDto, FaqCategorySoftRemoveDto, FaqCategorySoftRemoveInputDto, FaqCategorySoftRemoveInputWhereDto, FaqCategorySoftRemoveOutputDto, FaqCategorySoftRemoveOutputAffectedRowsDto, FaqCategoryUpdateDto, FaqCategoryUpdateInputDto, FaqCategoryUpdateInputSetsDto, FaqCategoryUpdateInputWhereDto, FaqCategoryUpdateOutputDto, FaqCategoryUpdateOutputAffectedRowsDto, FaqCategoryUploadDeleteDto, FaqCategoryUploadDeleteInputDto, FaqCategoryUploadDeleteOutputDto, FaqCategoryUploadDto, FaqCategoryUploadInputDto, FaqCategoryUploadOutputDto, FaqCategoryUpsertDto, FaqCategoryUpsertInputDto, FaqCategoryUpsertOutputDto } from "./dto/category.dto";

@Injectable()
export class FaqCategoryFactory extends CrudFactory<FaqCategoryEntity> {

// ████████ FindCrudEngine ████████████████████████████████████████
public declare readonly findEngine: FindCrudEngine<
// entity (1)
FaqCategoryEntity,

// find (8)
FaqCategoryFindDto,
FaqCategoryFindInputWhereDto,
FaqCategoryFindInputSortOrderDto,
FaqCategoryFindInputGroupByDto,
FaqCategoryFindInputDto,
FaqCategoryFindOutputRowsDto,
FindOutputPaginationDto,
FaqCategoryFindOutputDto,

// find_one_by_id (2)
FaqCategoryFindOneByIdDto,
FaqCategoryFindOneByIdInputDto
>;

// ████████ CreateCrudEngine ████████████████████████████████████████
public declare readonly createEngine: CreateCrudEngine<
// entity (1)
FaqCategoryEntity,

// create (3)
FaqCategoryCreateDto,
FaqCategoryCreateInputDto,
FaqCategoryCreateOutputDto
>;

// ████████ UpdateCrudEngine ████████████████████████████████████████
public declare readonly updateEngine: UpdateCrudEngine<
// entity (1)
FaqCategoryEntity,

// update (6)
FaqCategoryUpdateDto,
FaqCategoryUpdateInputWhereDto,
FaqCategoryUpdateInputSetsDto,
FaqCategoryUpdateInputDto,
FaqCategoryUpdateOutputAffectedRowsDto,
FaqCategoryUpdateOutputDto
>;

// ████████ DeleteCrudEngine ████████████████████████████████████████
public declare readonly deleteEngine: DeleteCrudEngine<
// entity (1)
FaqCategoryEntity,

// soft_delete (4)
FaqCategorySoftDeleteDto,
FaqCategorySoftDeleteInputWhereDto,
FaqCategorySoftDeleteInputDto,
FaqCategorySoftDeleteOutputDto,

// delete (4)
FaqCategoryDeleteDto,
FaqCategoryDeleteInputWhereDto,
FaqCategoryDeleteInputDto,
FaqCategoryDeleteOutputDto,

// restore (4)
FaqCategoryRestoreDto,
FaqCategoryRestoreInputWhereDto,
FaqCategoryRestoreInputDto,
FaqCategoryRestoreOutputDto
>;

// ████████ UpsertCrudEngine ████████████████████████████████████████
public declare readonly upsertEngine: UpsertCrudEngine<
// entity (1)
FaqCategoryEntity,

// upsert (3)
FaqCategoryUpsertDto,
FaqCategoryUpsertInputDto,
FaqCategoryUpsertOutputDto
>;

// ████████ RemoveCrudEngine ████████████████████████████████████████
public declare readonly removeEngine: RemoveCrudEngine<
// entity (1)
FaqCategoryEntity,

// soft_remove (5)
FaqCategorySoftRemoveDto,
FaqCategorySoftRemoveInputWhereDto,
FaqCategorySoftRemoveInputDto,
FaqCategorySoftRemoveOutputAffectedRowsDto,
FaqCategorySoftRemoveOutputDto,

// remove (4)
FaqCategoryRemoveDto,
FaqCategoryRemoveInputWhereDto,
FaqCategoryRemoveInputDto,
FaqCategoryRemoveOutputAffectedRowsDto,
FaqCategoryRemoveOutputDto,

// recover (5)
FaqCategoryRecoverDto,
FaqCategoryRecoverInputWhereDto,
FaqCategoryRecoverInputDto,
FaqCategoryRecoverOutputAffectedRowsDto,
FaqCategoryRecoverOutputDto
>;

// ████████ UploadCrudEngine ████████████████████████████████████████
public declare readonly uploadEngine: UploadCrudEngine<
// entity (1)
FaqCategoryEntity,

// upload (3)
FaqCategoryUploadDto,
FaqCategoryUploadInputDto,
FaqCategoryUploadOutputDto,

// upload_delete (3)
FaqCategoryUploadDeleteDto,
FaqCategoryUploadDeleteInputDto,
FaqCategoryUploadDeleteOutputDto
>;

constructor(
// data source
protected readonly dataSource: DataSource,

@InjectRepository(FaqCategoryEntity)
protected readonly repository: Repository<FaqCategoryEntity>,

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
    FaqCategoryEntity,
);

this.logService.setContext(FaqCategoryFactory.name);

// ████████ initialize FindCrudEngine ██████████████████████████████████████
this.initFindEngine
<
// find (8)
FaqCategoryFindDto,
FaqCategoryFindInputWhereDto,
FaqCategoryFindInputSortOrderDto,
FaqCategoryFindInputGroupByDto,
FaqCategoryFindInputDto,
FaqCategoryFindOutputRowsDto,
FindOutputPaginationDto,
FaqCategoryFindOutputDto,

// find_one_by_id (2)
FaqCategoryFindOneByIdDto,
FaqCategoryFindOneByIdInputDto
>
(
// find (8)
FaqCategoryFindDto,
FaqCategoryFindInputWhereDto,
FaqCategoryFindInputSortOrderDto,
FaqCategoryFindInputGroupByDto,
FaqCategoryFindInputDto,
FaqCategoryFindOutputRowsDto,
FindOutputPaginationDto,
FaqCategoryFindOutputDto,

// find_one_by_id (2)
FaqCategoryFindOneByIdDto,
FaqCategoryFindOneByIdInputDto
);


// ████████ initialize CreateCrudEngine ███████████████████████████████████████
this.initCreateEngine
<
// create (3)
FaqCategoryCreateDto,
FaqCategoryCreateInputDto,
FaqCategoryCreateOutputDto
>
(
// create (3)
FaqCategoryCreateDto,
FaqCategoryCreateInputDto,
FaqCategoryCreateOutputDto
);

// ████████ initialize UpdateCrudEngine ████████████████████████████████████████
this.initUpdateEngine
<
// update (6)
FaqCategoryUpdateDto,
FaqCategoryUpdateInputWhereDto,
FaqCategoryUpdateInputSetsDto,
FaqCategoryUpdateInputDto,
FaqCategoryUpdateOutputAffectedRowsDto,
FaqCategoryUpdateOutputDto
>
(
// update (6)
FaqCategoryUpdateDto,
FaqCategoryUpdateInputWhereDto,
FaqCategoryUpdateInputSetsDto,
FaqCategoryUpdateInputDto,
FaqCategoryUpdateOutputAffectedRowsDto,
FaqCategoryUpdateOutputDto
);


// ████████ initialize DeleteCrudEngine ███████████████████████████████████████████
this.initDeleteEngine
<
// soft_delete (4)
FaqCategorySoftDeleteDto,
FaqCategorySoftDeleteInputWhereDto,
FaqCategorySoftDeleteInputDto,
FaqCategorySoftDeleteOutputDto,

// delete (4)
FaqCategoryDeleteDto,
FaqCategoryDeleteInputWhereDto,
FaqCategoryDeleteInputDto,
FaqCategoryDeleteOutputDto,

// restore (4)
FaqCategoryRestoreDto,
FaqCategoryRestoreInputWhereDto,
FaqCategoryRestoreInputDto,
FaqCategoryRestoreOutputDto
>
(
// soft_delete (4)
FaqCategorySoftDeleteDto,
FaqCategorySoftDeleteInputWhereDto,
FaqCategorySoftDeleteInputDto,
FaqCategorySoftDeleteOutputDto,

// delete (4)
FaqCategoryDeleteDto,
FaqCategoryDeleteInputWhereDto,
FaqCategoryDeleteInputDto,
FaqCategoryDeleteOutputDto,

// restore (4)
FaqCategoryRestoreDto,
FaqCategoryRestoreInputWhereDto,
FaqCategoryRestoreInputDto,
FaqCategoryRestoreOutputDto
);



// ████████ initialize UpsertCrudEngine ███████████████████████████████████████████
this.initUpsertEngine
<
// upsert (3)
FaqCategoryUpsertDto,
FaqCategoryUpsertInputDto,
FaqCategoryUpsertOutputDto
>
(
// upsert (3)
FaqCategoryUpsertDto,
FaqCategoryUpsertInputDto,
FaqCategoryUpsertOutputDto
);




// ████████ initialize RemoveCrudEngine ███████████████████████████████████████████
this.initRemoveEngine
<
// soft_remove (5)
FaqCategorySoftRemoveDto,
FaqCategorySoftRemoveInputWhereDto,
FaqCategorySoftRemoveInputDto,
FaqCategorySoftRemoveOutputAffectedRowsDto,
FaqCategorySoftRemoveOutputDto,

// remove (4)
FaqCategoryRemoveDto,
FaqCategoryRemoveInputWhereDto,
FaqCategoryRemoveInputDto,
FaqCategoryRemoveOutputAffectedRowsDto,
FaqCategoryRemoveOutputDto,

// recover (5)
FaqCategoryRecoverDto,
FaqCategoryRecoverInputWhereDto,
FaqCategoryRecoverInputDto,
FaqCategoryRecoverOutputAffectedRowsDto,
FaqCategoryRecoverOutputDto
>
(
// soft_remove (5)
FaqCategorySoftRemoveDto,
FaqCategorySoftRemoveInputWhereDto,
FaqCategorySoftRemoveInputDto,
FaqCategorySoftRemoveOutputAffectedRowsDto,
FaqCategorySoftRemoveOutputDto,

// remove (4)
FaqCategoryRemoveDto,
FaqCategoryRemoveInputWhereDto,
FaqCategoryRemoveInputDto,
FaqCategoryRemoveOutputAffectedRowsDto,
FaqCategoryRemoveOutputDto,

// recover (5)
FaqCategoryRecoverDto,
FaqCategoryRecoverInputWhereDto,
FaqCategoryRecoverInputDto,
FaqCategoryRecoverOutputAffectedRowsDto,
FaqCategoryRecoverOutputDto
);



// ████████ initialize UploadCrudEngine ███████████████████████████████████████████
this.initUploadEngine
<
// upload (3)
FaqCategoryUploadDto,
FaqCategoryUploadInputDto,
FaqCategoryUploadOutputDto,

// upload_delete (3)
FaqCategoryUploadDeleteDto,
FaqCategoryUploadDeleteInputDto,
FaqCategoryUploadDeleteOutputDto
>
(
// upload (3)
FaqCategoryUploadDto,
FaqCategoryUploadInputDto,
FaqCategoryUploadOutputDto,

// upload_delete (3)
FaqCategoryUploadDeleteDto,
FaqCategoryUploadDeleteInputDto,
FaqCategoryUploadDeleteOutputDto
);


// ████████ initialize ImportExportCrudEngine █████████████████████████████████████

}

}