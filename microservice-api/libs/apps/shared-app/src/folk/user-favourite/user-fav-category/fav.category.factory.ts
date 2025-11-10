import { UserFavCategoryEntity } from "./entities/fav.category.entity";
import { Injectable } from "@nestjs/common";
import { DataSource, Repository } from "typeorm";
import { InjectRepository } from "@nestjs/typeorm";
import { ConfService, CreateCrudEngine, CrudFactory, DataValidationPipe, DeleteCrudEngine, FindCrudEngine, FindOutputPaginationDto, LibraryAppService, LogService, RemoveCrudEngine, UpdateCrudEngine, UploadCrudEngine, UpsertCrudEngine } from "@libs/library-app";
import { SelfGraphqlMicroserviceService } from '@libs/dynamic-app';
import { UserFavCategoryCreateDto, UserFavCategoryCreateInputDto, UserFavCategoryCreateOutputDto, UserFavCategoryDeleteDto, UserFavCategoryDeleteInputDto, UserFavCategoryDeleteInputWhereDto, UserFavCategoryDeleteOutputDto, UserFavCategoryFindDto, UserFavCategoryFindInputDto, UserFavCategoryFindInputGroupByDto, UserFavCategoryFindInputSortOrderDto, UserFavCategoryFindInputWhereDto, UserFavCategoryFindOneByIdDto, UserFavCategoryFindOneByIdInputDto, UserFavCategoryFindOutputDto, UserFavCategoryFindOutputRowsDto, UserFavCategoryRecoverDto, UserFavCategoryRecoverInputDto, UserFavCategoryRecoverInputWhereDto, UserFavCategoryRecoverOutputDto, UserFavCategoryRecoverOutputAffectedRowsDto, UserFavCategoryRemoveDto, UserFavCategoryRemoveInputDto, UserFavCategoryRemoveInputWhereDto, UserFavCategoryRemoveOutputDto, UserFavCategoryRemoveOutputAffectedRowsDto, UserFavCategoryRestoreDto, UserFavCategoryRestoreInputDto, UserFavCategoryRestoreInputWhereDto, UserFavCategoryRestoreOutputDto, UserFavCategorySoftDeleteDto, UserFavCategorySoftDeleteInputDto, UserFavCategorySoftDeleteInputWhereDto, UserFavCategorySoftDeleteOutputDto, UserFavCategorySoftRemoveDto, UserFavCategorySoftRemoveInputDto, UserFavCategorySoftRemoveInputWhereDto, UserFavCategorySoftRemoveOutputDto, UserFavCategorySoftRemoveOutputAffectedRowsDto, UserFavCategoryUpdateDto, UserFavCategoryUpdateInputDto, UserFavCategoryUpdateInputSetsDto, UserFavCategoryUpdateInputWhereDto, UserFavCategoryUpdateOutputDto, UserFavCategoryUpdateOutputAffectedRowsDto, UserFavCategoryUploadDeleteDto, UserFavCategoryUploadDeleteInputDto, UserFavCategoryUploadDeleteOutputDto, UserFavCategoryUploadDto, UserFavCategoryUploadInputDto, UserFavCategoryUploadOutputDto, UserFavCategoryUpsertDto, UserFavCategoryUpsertInputDto, UserFavCategoryUpsertOutputDto } from "./dto/fav.category.dto";

@Injectable()
export class UserFavCategoryFactory extends CrudFactory<UserFavCategoryEntity> {

// ████████ FindCrudEngine ████████████████████████████████████████
public declare readonly findEngine: FindCrudEngine<
// entity (1)
UserFavCategoryEntity,

// find (8)
UserFavCategoryFindDto,
UserFavCategoryFindInputWhereDto,
UserFavCategoryFindInputSortOrderDto,
UserFavCategoryFindInputGroupByDto,
UserFavCategoryFindInputDto,
UserFavCategoryFindOutputRowsDto,
FindOutputPaginationDto,
UserFavCategoryFindOutputDto,

// find_one_by_id (2)
UserFavCategoryFindOneByIdDto,
UserFavCategoryFindOneByIdInputDto
>;

// ████████ CreateCrudEngine ████████████████████████████████████████
public declare readonly createEngine: CreateCrudEngine<
// entity (1)
UserFavCategoryEntity,

// create (3)
UserFavCategoryCreateDto,
UserFavCategoryCreateInputDto,
UserFavCategoryCreateOutputDto
>;

// ████████ UpdateCrudEngine ████████████████████████████████████████
public declare readonly updateEngine: UpdateCrudEngine<
// entity (1)
UserFavCategoryEntity,

// update (6)
UserFavCategoryUpdateDto,
UserFavCategoryUpdateInputWhereDto,
UserFavCategoryUpdateInputSetsDto,
UserFavCategoryUpdateInputDto,
UserFavCategoryUpdateOutputAffectedRowsDto,
UserFavCategoryUpdateOutputDto
>;

// ████████ DeleteCrudEngine ████████████████████████████████████████
public declare readonly deleteEngine: DeleteCrudEngine<
// entity (1)
UserFavCategoryEntity,

// soft_delete (4)
UserFavCategorySoftDeleteDto,
UserFavCategorySoftDeleteInputWhereDto,
UserFavCategorySoftDeleteInputDto,
UserFavCategorySoftDeleteOutputDto,

// delete (4)
UserFavCategoryDeleteDto,
UserFavCategoryDeleteInputWhereDto,
UserFavCategoryDeleteInputDto,
UserFavCategoryDeleteOutputDto,

// restore (4)
UserFavCategoryRestoreDto,
UserFavCategoryRestoreInputWhereDto,
UserFavCategoryRestoreInputDto,
UserFavCategoryRestoreOutputDto
>;

// ████████ UpsertCrudEngine ████████████████████████████████████████
public declare readonly upsertEngine: UpsertCrudEngine<
// entity (1)
UserFavCategoryEntity,

// upsert (3)
UserFavCategoryUpsertDto,
UserFavCategoryUpsertInputDto,
UserFavCategoryUpsertOutputDto
>;

// ████████ RemoveCrudEngine ████████████████████████████████████████
public declare readonly removeEngine: RemoveCrudEngine<
// entity (1)
UserFavCategoryEntity,

// soft_remove (5)
UserFavCategorySoftRemoveDto,
UserFavCategorySoftRemoveInputWhereDto,
UserFavCategorySoftRemoveInputDto,
UserFavCategorySoftRemoveOutputAffectedRowsDto,
UserFavCategorySoftRemoveOutputDto,

// remove (4)
UserFavCategoryRemoveDto,
UserFavCategoryRemoveInputWhereDto,
UserFavCategoryRemoveInputDto,
UserFavCategoryRemoveOutputAffectedRowsDto,
UserFavCategoryRemoveOutputDto,

// recover (5)
UserFavCategoryRecoverDto,
UserFavCategoryRecoverInputWhereDto,
UserFavCategoryRecoverInputDto,
UserFavCategoryRecoverOutputAffectedRowsDto,
UserFavCategoryRecoverOutputDto
>;

// ████████ UploadCrudEngine ████████████████████████████████████████
public declare readonly uploadEngine: UploadCrudEngine<
// entity (1)
UserFavCategoryEntity,

// upload (3)
UserFavCategoryUploadDto,
UserFavCategoryUploadInputDto,
UserFavCategoryUploadOutputDto,

// upload_delete (3)
UserFavCategoryUploadDeleteDto,
UserFavCategoryUploadDeleteInputDto,
UserFavCategoryUploadDeleteOutputDto
>;

constructor(
// data source
protected readonly dataSource: DataSource,

@InjectRepository(UserFavCategoryEntity)
protected readonly repository: Repository<UserFavCategoryEntity>,

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
    UserFavCategoryEntity,
);

this.logService.setContext(UserFavCategoryFactory.name);

// ████████ initialize FindCrudEngine ██████████████████████████████████████
this.initFindEngine
<
// find (8)
UserFavCategoryFindDto,
UserFavCategoryFindInputWhereDto,
UserFavCategoryFindInputSortOrderDto,
UserFavCategoryFindInputGroupByDto,
UserFavCategoryFindInputDto,
UserFavCategoryFindOutputRowsDto,
FindOutputPaginationDto,
UserFavCategoryFindOutputDto,

// find_one_by_id (2)
UserFavCategoryFindOneByIdDto,
UserFavCategoryFindOneByIdInputDto
>
(
// find (8)
UserFavCategoryFindDto,
UserFavCategoryFindInputWhereDto,
UserFavCategoryFindInputSortOrderDto,
UserFavCategoryFindInputGroupByDto,
UserFavCategoryFindInputDto,
UserFavCategoryFindOutputRowsDto,
FindOutputPaginationDto,
UserFavCategoryFindOutputDto,

// find_one_by_id (2)
UserFavCategoryFindOneByIdDto,
UserFavCategoryFindOneByIdInputDto
);


// ████████ initialize CreateCrudEngine ███████████████████████████████████████
this.initCreateEngine
<
// create (3)
UserFavCategoryCreateDto,
UserFavCategoryCreateInputDto,
UserFavCategoryCreateOutputDto
>
(
// create (3)
UserFavCategoryCreateDto,
UserFavCategoryCreateInputDto,
UserFavCategoryCreateOutputDto
);

// ████████ initialize UpdateCrudEngine ████████████████████████████████████████
this.initUpdateEngine
<
// update (6)
UserFavCategoryUpdateDto,
UserFavCategoryUpdateInputWhereDto,
UserFavCategoryUpdateInputSetsDto,
UserFavCategoryUpdateInputDto,
UserFavCategoryUpdateOutputAffectedRowsDto,
UserFavCategoryUpdateOutputDto
>
(
// update (6)
UserFavCategoryUpdateDto,
UserFavCategoryUpdateInputWhereDto,
UserFavCategoryUpdateInputSetsDto,
UserFavCategoryUpdateInputDto,
UserFavCategoryUpdateOutputAffectedRowsDto,
UserFavCategoryUpdateOutputDto
);


// ████████ initialize DeleteCrudEngine ███████████████████████████████████████████
this.initDeleteEngine
<
// soft_delete (4)
UserFavCategorySoftDeleteDto,
UserFavCategorySoftDeleteInputWhereDto,
UserFavCategorySoftDeleteInputDto,
UserFavCategorySoftDeleteOutputDto,

// delete (4)
UserFavCategoryDeleteDto,
UserFavCategoryDeleteInputWhereDto,
UserFavCategoryDeleteInputDto,
UserFavCategoryDeleteOutputDto,

// restore (4)
UserFavCategoryRestoreDto,
UserFavCategoryRestoreInputWhereDto,
UserFavCategoryRestoreInputDto,
UserFavCategoryRestoreOutputDto
>
(
// soft_delete (4)
UserFavCategorySoftDeleteDto,
UserFavCategorySoftDeleteInputWhereDto,
UserFavCategorySoftDeleteInputDto,
UserFavCategorySoftDeleteOutputDto,

// delete (4)
UserFavCategoryDeleteDto,
UserFavCategoryDeleteInputWhereDto,
UserFavCategoryDeleteInputDto,
UserFavCategoryDeleteOutputDto,

// restore (4)
UserFavCategoryRestoreDto,
UserFavCategoryRestoreInputWhereDto,
UserFavCategoryRestoreInputDto,
UserFavCategoryRestoreOutputDto
);



// ████████ initialize UpsertCrudEngine ███████████████████████████████████████████
this.initUpsertEngine
<
// upsert (3)
UserFavCategoryUpsertDto,
UserFavCategoryUpsertInputDto,
UserFavCategoryUpsertOutputDto
>
(
// upsert (3)
UserFavCategoryUpsertDto,
UserFavCategoryUpsertInputDto,
UserFavCategoryUpsertOutputDto
);




// ████████ initialize RemoveCrudEngine ███████████████████████████████████████████
this.initRemoveEngine
<
// soft_remove (5)
UserFavCategorySoftRemoveDto,
UserFavCategorySoftRemoveInputWhereDto,
UserFavCategorySoftRemoveInputDto,
UserFavCategorySoftRemoveOutputAffectedRowsDto,
UserFavCategorySoftRemoveOutputDto,

// remove (4)
UserFavCategoryRemoveDto,
UserFavCategoryRemoveInputWhereDto,
UserFavCategoryRemoveInputDto,
UserFavCategoryRemoveOutputAffectedRowsDto,
UserFavCategoryRemoveOutputDto,

// recover (5)
UserFavCategoryRecoverDto,
UserFavCategoryRecoverInputWhereDto,
UserFavCategoryRecoverInputDto,
UserFavCategoryRecoverOutputAffectedRowsDto,
UserFavCategoryRecoverOutputDto
>
(
// soft_remove (5)
UserFavCategorySoftRemoveDto,
UserFavCategorySoftRemoveInputWhereDto,
UserFavCategorySoftRemoveInputDto,
UserFavCategorySoftRemoveOutputAffectedRowsDto,
UserFavCategorySoftRemoveOutputDto,

// remove (4)
UserFavCategoryRemoveDto,
UserFavCategoryRemoveInputWhereDto,
UserFavCategoryRemoveInputDto,
UserFavCategoryRemoveOutputAffectedRowsDto,
UserFavCategoryRemoveOutputDto,

// recover (5)
UserFavCategoryRecoverDto,
UserFavCategoryRecoverInputWhereDto,
UserFavCategoryRecoverInputDto,
UserFavCategoryRecoverOutputAffectedRowsDto,
UserFavCategoryRecoverOutputDto
);



// ████████ initialize UploadCrudEngine ███████████████████████████████████████████
this.initUploadEngine
<
// upload (3)
UserFavCategoryUploadDto,
UserFavCategoryUploadInputDto,
UserFavCategoryUploadOutputDto,

// upload_delete (3)
UserFavCategoryUploadDeleteDto,
UserFavCategoryUploadDeleteInputDto,
UserFavCategoryUploadDeleteOutputDto
>
(
// upload (3)
UserFavCategoryUploadDto,
UserFavCategoryUploadInputDto,
UserFavCategoryUploadOutputDto,

// upload_delete (3)
UserFavCategoryUploadDeleteDto,
UserFavCategoryUploadDeleteInputDto,
UserFavCategoryUploadDeleteOutputDto
);


// ████████ initialize ImportExportCrudEngine █████████████████████████████████████

}

}