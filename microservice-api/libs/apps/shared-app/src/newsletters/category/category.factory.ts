import { NewsLetterCategoryEntity } from "./entities/category.entity";
import { Injectable } from "@nestjs/common";
import { DataSource, Repository } from "typeorm";
import { InjectRepository } from "@nestjs/typeorm";
import { ConfService, CreateCrudEngine, CrudFactory, DataValidationPipe, DeleteCrudEngine, FindCrudEngine, FindOutputPaginationDto, LibraryAppService, LogService, RemoveCrudEngine, UpdateCrudEngine, UploadCrudEngine, UpsertCrudEngine } from "@libs/library-app";
import { SelfGraphqlMicroserviceService } from '@libs/dynamic-app';
import { NewsLetterCategoryCreateDto, NewsLetterCategoryCreateInputDto, NewsLetterCategoryCreateOutputDto, NewsLetterCategoryDeleteDto, NewsLetterCategoryDeleteInputDto, NewsLetterCategoryDeleteInputWhereDto, NewsLetterCategoryDeleteOutputDto, NewsLetterCategoryFindDto, NewsLetterCategoryFindInputDto, NewsLetterCategoryFindInputGroupByDto, NewsLetterCategoryFindInputSortOrderDto, NewsLetterCategoryFindInputWhereDto, NewsLetterCategoryFindOneByIdDto, NewsLetterCategoryFindOneByIdInputDto, NewsLetterCategoryFindOutputDto, NewsLetterCategoryFindOutputRowsDto, NewsLetterCategoryRecoverDto, NewsLetterCategoryRecoverInputDto, NewsLetterCategoryRecoverInputWhereDto, NewsLetterCategoryRecoverOutputDto, NewsLetterCategoryRecoverOutputAffectedRowsDto, NewsLetterCategoryRemoveDto, NewsLetterCategoryRemoveInputDto, NewsLetterCategoryRemoveInputWhereDto, NewsLetterCategoryRemoveOutputDto, NewsLetterCategoryRemoveOutputAffectedRowsDto, NewsLetterCategoryRestoreDto, NewsLetterCategoryRestoreInputDto, NewsLetterCategoryRestoreInputWhereDto, NewsLetterCategoryRestoreOutputDto, NewsLetterCategorySoftDeleteDto, NewsLetterCategorySoftDeleteInputDto, NewsLetterCategorySoftDeleteInputWhereDto, NewsLetterCategorySoftDeleteOutputDto, NewsLetterCategorySoftRemoveDto, NewsLetterCategorySoftRemoveInputDto, NewsLetterCategorySoftRemoveInputWhereDto, NewsLetterCategorySoftRemoveOutputDto, NewsLetterCategorySoftRemoveOutputAffectedRowsDto, NewsLetterCategoryUpdateDto, NewsLetterCategoryUpdateInputDto, NewsLetterCategoryUpdateInputSetsDto, NewsLetterCategoryUpdateInputWhereDto, NewsLetterCategoryUpdateOutputDto, NewsLetterCategoryUpdateOutputAffectedRowsDto, NewsLetterCategoryUploadDeleteDto, NewsLetterCategoryUploadDeleteInputDto, NewsLetterCategoryUploadDeleteOutputDto, NewsLetterCategoryUploadDto, NewsLetterCategoryUploadInputDto, NewsLetterCategoryUploadOutputDto, NewsLetterCategoryUpsertDto, NewsLetterCategoryUpsertInputDto, NewsLetterCategoryUpsertOutputDto } from "./dto/category.dto";

@Injectable()
export class NewsLetterCategoryFactory extends CrudFactory<NewsLetterCategoryEntity> {

// ████████ FindCrudEngine ████████████████████████████████████████
public declare readonly findEngine: FindCrudEngine<
// entity (1)
NewsLetterCategoryEntity,

// find (8)
NewsLetterCategoryFindDto,
NewsLetterCategoryFindInputWhereDto,
NewsLetterCategoryFindInputSortOrderDto,
NewsLetterCategoryFindInputGroupByDto,
NewsLetterCategoryFindInputDto,
NewsLetterCategoryFindOutputRowsDto,
FindOutputPaginationDto,
NewsLetterCategoryFindOutputDto,

// find_one_by_id (2)
NewsLetterCategoryFindOneByIdDto,
NewsLetterCategoryFindOneByIdInputDto
>;

// ████████ CreateCrudEngine ████████████████████████████████████████
public declare readonly createEngine: CreateCrudEngine<
// entity (1)
NewsLetterCategoryEntity,

// create (3)
NewsLetterCategoryCreateDto,
NewsLetterCategoryCreateInputDto,
NewsLetterCategoryCreateOutputDto
>;

// ████████ UpdateCrudEngine ████████████████████████████████████████
public declare readonly updateEngine: UpdateCrudEngine<
// entity (1)
NewsLetterCategoryEntity,

// update (6)
NewsLetterCategoryUpdateDto,
NewsLetterCategoryUpdateInputWhereDto,
NewsLetterCategoryUpdateInputSetsDto,
NewsLetterCategoryUpdateInputDto,
NewsLetterCategoryUpdateOutputAffectedRowsDto,
NewsLetterCategoryUpdateOutputDto
>;

// ████████ DeleteCrudEngine ████████████████████████████████████████
public declare readonly deleteEngine: DeleteCrudEngine<
// entity (1)
NewsLetterCategoryEntity,

// soft_delete (4)
NewsLetterCategorySoftDeleteDto,
NewsLetterCategorySoftDeleteInputWhereDto,
NewsLetterCategorySoftDeleteInputDto,
NewsLetterCategorySoftDeleteOutputDto,

// delete (4)
NewsLetterCategoryDeleteDto,
NewsLetterCategoryDeleteInputWhereDto,
NewsLetterCategoryDeleteInputDto,
NewsLetterCategoryDeleteOutputDto,

// restore (4)
NewsLetterCategoryRestoreDto,
NewsLetterCategoryRestoreInputWhereDto,
NewsLetterCategoryRestoreInputDto,
NewsLetterCategoryRestoreOutputDto
>;

// ████████ UpsertCrudEngine ████████████████████████████████████████
public declare readonly upsertEngine: UpsertCrudEngine<
// entity (1)
NewsLetterCategoryEntity,

// upsert (3)
NewsLetterCategoryUpsertDto,
NewsLetterCategoryUpsertInputDto,
NewsLetterCategoryUpsertOutputDto
>;

// ████████ RemoveCrudEngine ████████████████████████████████████████
public declare readonly removeEngine: RemoveCrudEngine<
// entity (1)
NewsLetterCategoryEntity,

// soft_remove (5)
NewsLetterCategorySoftRemoveDto,
NewsLetterCategorySoftRemoveInputWhereDto,
NewsLetterCategorySoftRemoveInputDto,
NewsLetterCategorySoftRemoveOutputAffectedRowsDto,
NewsLetterCategorySoftRemoveOutputDto,

// remove (4)
NewsLetterCategoryRemoveDto,
NewsLetterCategoryRemoveInputWhereDto,
NewsLetterCategoryRemoveInputDto,
NewsLetterCategoryRemoveOutputAffectedRowsDto,
NewsLetterCategoryRemoveOutputDto,

// recover (5)
NewsLetterCategoryRecoverDto,
NewsLetterCategoryRecoverInputWhereDto,
NewsLetterCategoryRecoverInputDto,
NewsLetterCategoryRecoverOutputAffectedRowsDto,
NewsLetterCategoryRecoverOutputDto
>;

// ████████ UploadCrudEngine ████████████████████████████████████████
public declare readonly uploadEngine: UploadCrudEngine<
// entity (1)
NewsLetterCategoryEntity,

// upload (3)
NewsLetterCategoryUploadDto,
NewsLetterCategoryUploadInputDto,
NewsLetterCategoryUploadOutputDto,

// upload_delete (3)
NewsLetterCategoryUploadDeleteDto,
NewsLetterCategoryUploadDeleteInputDto,
NewsLetterCategoryUploadDeleteOutputDto
>;

constructor(
// data source
protected readonly dataSource: DataSource,

@InjectRepository(NewsLetterCategoryEntity)
protected readonly repository: Repository<NewsLetterCategoryEntity>,

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
    NewsLetterCategoryEntity,
);

this.logService.setContext(NewsLetterCategoryFactory.name);

// ████████ initialize FindCrudEngine ██████████████████████████████████████
this.initFindEngine
<
// find (8)
NewsLetterCategoryFindDto,
NewsLetterCategoryFindInputWhereDto,
NewsLetterCategoryFindInputSortOrderDto,
NewsLetterCategoryFindInputGroupByDto,
NewsLetterCategoryFindInputDto,
NewsLetterCategoryFindOutputRowsDto,
FindOutputPaginationDto,
NewsLetterCategoryFindOutputDto,

// find_one_by_id (2)
NewsLetterCategoryFindOneByIdDto,
NewsLetterCategoryFindOneByIdInputDto
>
(
// find (8)
NewsLetterCategoryFindDto,
NewsLetterCategoryFindInputWhereDto,
NewsLetterCategoryFindInputSortOrderDto,
NewsLetterCategoryFindInputGroupByDto,
NewsLetterCategoryFindInputDto,
NewsLetterCategoryFindOutputRowsDto,
FindOutputPaginationDto,
NewsLetterCategoryFindOutputDto,

// find_one_by_id (2)
NewsLetterCategoryFindOneByIdDto,
NewsLetterCategoryFindOneByIdInputDto
);


// ████████ initialize CreateCrudEngine ███████████████████████████████████████
this.initCreateEngine
<
// create (3)
NewsLetterCategoryCreateDto,
NewsLetterCategoryCreateInputDto,
NewsLetterCategoryCreateOutputDto
>
(
// create (3)
NewsLetterCategoryCreateDto,
NewsLetterCategoryCreateInputDto,
NewsLetterCategoryCreateOutputDto
);

// ████████ initialize UpdateCrudEngine ████████████████████████████████████████
this.initUpdateEngine
<
// update (6)
NewsLetterCategoryUpdateDto,
NewsLetterCategoryUpdateInputWhereDto,
NewsLetterCategoryUpdateInputSetsDto,
NewsLetterCategoryUpdateInputDto,
NewsLetterCategoryUpdateOutputAffectedRowsDto,
NewsLetterCategoryUpdateOutputDto
>
(
// update (6)
NewsLetterCategoryUpdateDto,
NewsLetterCategoryUpdateInputWhereDto,
NewsLetterCategoryUpdateInputSetsDto,
NewsLetterCategoryUpdateInputDto,
NewsLetterCategoryUpdateOutputAffectedRowsDto,
NewsLetterCategoryUpdateOutputDto
);


// ████████ initialize DeleteCrudEngine ███████████████████████████████████████████
this.initDeleteEngine
<
// soft_delete (4)
NewsLetterCategorySoftDeleteDto,
NewsLetterCategorySoftDeleteInputWhereDto,
NewsLetterCategorySoftDeleteInputDto,
NewsLetterCategorySoftDeleteOutputDto,

// delete (4)
NewsLetterCategoryDeleteDto,
NewsLetterCategoryDeleteInputWhereDto,
NewsLetterCategoryDeleteInputDto,
NewsLetterCategoryDeleteOutputDto,

// restore (4)
NewsLetterCategoryRestoreDto,
NewsLetterCategoryRestoreInputWhereDto,
NewsLetterCategoryRestoreInputDto,
NewsLetterCategoryRestoreOutputDto
>
(
// soft_delete (4)
NewsLetterCategorySoftDeleteDto,
NewsLetterCategorySoftDeleteInputWhereDto,
NewsLetterCategorySoftDeleteInputDto,
NewsLetterCategorySoftDeleteOutputDto,

// delete (4)
NewsLetterCategoryDeleteDto,
NewsLetterCategoryDeleteInputWhereDto,
NewsLetterCategoryDeleteInputDto,
NewsLetterCategoryDeleteOutputDto,

// restore (4)
NewsLetterCategoryRestoreDto,
NewsLetterCategoryRestoreInputWhereDto,
NewsLetterCategoryRestoreInputDto,
NewsLetterCategoryRestoreOutputDto
);



// ████████ initialize UpsertCrudEngine ███████████████████████████████████████████
this.initUpsertEngine
<
// upsert (3)
NewsLetterCategoryUpsertDto,
NewsLetterCategoryUpsertInputDto,
NewsLetterCategoryUpsertOutputDto
>
(
// upsert (3)
NewsLetterCategoryUpsertDto,
NewsLetterCategoryUpsertInputDto,
NewsLetterCategoryUpsertOutputDto
);




// ████████ initialize RemoveCrudEngine ███████████████████████████████████████████
this.initRemoveEngine
<
// soft_remove (5)
NewsLetterCategorySoftRemoveDto,
NewsLetterCategorySoftRemoveInputWhereDto,
NewsLetterCategorySoftRemoveInputDto,
NewsLetterCategorySoftRemoveOutputAffectedRowsDto,
NewsLetterCategorySoftRemoveOutputDto,

// remove (4)
NewsLetterCategoryRemoveDto,
NewsLetterCategoryRemoveInputWhereDto,
NewsLetterCategoryRemoveInputDto,
NewsLetterCategoryRemoveOutputAffectedRowsDto,
NewsLetterCategoryRemoveOutputDto,

// recover (5)
NewsLetterCategoryRecoverDto,
NewsLetterCategoryRecoverInputWhereDto,
NewsLetterCategoryRecoverInputDto,
NewsLetterCategoryRecoverOutputAffectedRowsDto,
NewsLetterCategoryRecoverOutputDto
>
(
// soft_remove (5)
NewsLetterCategorySoftRemoveDto,
NewsLetterCategorySoftRemoveInputWhereDto,
NewsLetterCategorySoftRemoveInputDto,
NewsLetterCategorySoftRemoveOutputAffectedRowsDto,
NewsLetterCategorySoftRemoveOutputDto,

// remove (4)
NewsLetterCategoryRemoveDto,
NewsLetterCategoryRemoveInputWhereDto,
NewsLetterCategoryRemoveInputDto,
NewsLetterCategoryRemoveOutputAffectedRowsDto,
NewsLetterCategoryRemoveOutputDto,

// recover (5)
NewsLetterCategoryRecoverDto,
NewsLetterCategoryRecoverInputWhereDto,
NewsLetterCategoryRecoverInputDto,
NewsLetterCategoryRecoverOutputAffectedRowsDto,
NewsLetterCategoryRecoverOutputDto
);



// ████████ initialize UploadCrudEngine ███████████████████████████████████████████
this.initUploadEngine
<
// upload (3)
NewsLetterCategoryUploadDto,
NewsLetterCategoryUploadInputDto,
NewsLetterCategoryUploadOutputDto,

// upload_delete (3)
NewsLetterCategoryUploadDeleteDto,
NewsLetterCategoryUploadDeleteInputDto,
NewsLetterCategoryUploadDeleteOutputDto
>
(
// upload (3)
NewsLetterCategoryUploadDto,
NewsLetterCategoryUploadInputDto,
NewsLetterCategoryUploadOutputDto,

// upload_delete (3)
NewsLetterCategoryUploadDeleteDto,
NewsLetterCategoryUploadDeleteInputDto,
NewsLetterCategoryUploadDeleteOutputDto
);


// ████████ initialize ImportExportCrudEngine █████████████████████████████████████

}

}