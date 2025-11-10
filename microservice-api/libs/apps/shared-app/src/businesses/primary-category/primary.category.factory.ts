import { BusinessPrimaryCategoryEntity } from "./entities/primary.category.entity";
import { Injectable } from "@nestjs/common";
import { DataSource, Repository } from "typeorm";
import { InjectRepository } from "@nestjs/typeorm";
import { ConfService, CreateCrudEngine, CrudFactory, DataValidationPipe, DeleteCrudEngine, FindCrudEngine, FindOutputPaginationDto, LibraryAppService, LogService, RemoveCrudEngine, UpdateCrudEngine, UploadCrudEngine, UpsertCrudEngine } from "@libs/library-app";
import { SelfGraphqlMicroserviceService } from '@libs/dynamic-app';
import { BusinessPrimaryCategoryCreateDto, BusinessPrimaryCategoryCreateInputDto, BusinessPrimaryCategoryCreateOutputDto, BusinessPrimaryCategoryDeleteDto, BusinessPrimaryCategoryDeleteInputDto, BusinessPrimaryCategoryDeleteInputWhereDto, BusinessPrimaryCategoryDeleteOutputDto, BusinessPrimaryCategoryFindDto, BusinessPrimaryCategoryFindInputDto, BusinessPrimaryCategoryFindInputGroupByDto, BusinessPrimaryCategoryFindInputSortOrderDto, BusinessPrimaryCategoryFindInputWhereDto, BusinessPrimaryCategoryFindOneByIdDto, BusinessPrimaryCategoryFindOneByIdInputDto, BusinessPrimaryCategoryFindOutputDto, BusinessPrimaryCategoryFindOutputRowsDto, BusinessPrimaryCategoryRecoverDto, BusinessPrimaryCategoryRecoverInputDto, BusinessPrimaryCategoryRecoverInputWhereDto, BusinessPrimaryCategoryRecoverOutputDto, BusinessPrimaryCategoryRecoverOutputAffectedRowsDto, BusinessPrimaryCategoryRemoveDto, BusinessPrimaryCategoryRemoveInputDto, BusinessPrimaryCategoryRemoveInputWhereDto, BusinessPrimaryCategoryRemoveOutputDto, BusinessPrimaryCategoryRemoveOutputAffectedRowsDto, BusinessPrimaryCategoryRestoreDto, BusinessPrimaryCategoryRestoreInputDto, BusinessPrimaryCategoryRestoreInputWhereDto, BusinessPrimaryCategoryRestoreOutputDto, BusinessPrimaryCategorySoftDeleteDto, BusinessPrimaryCategorySoftDeleteInputDto, BusinessPrimaryCategorySoftDeleteInputWhereDto, BusinessPrimaryCategorySoftDeleteOutputDto, BusinessPrimaryCategorySoftRemoveDto, BusinessPrimaryCategorySoftRemoveInputDto, BusinessPrimaryCategorySoftRemoveInputWhereDto, BusinessPrimaryCategorySoftRemoveOutputDto, BusinessPrimaryCategorySoftRemoveOutputAffectedRowsDto, BusinessPrimaryCategoryUpdateDto, BusinessPrimaryCategoryUpdateInputDto, BusinessPrimaryCategoryUpdateInputSetsDto, BusinessPrimaryCategoryUpdateInputWhereDto, BusinessPrimaryCategoryUpdateOutputDto, BusinessPrimaryCategoryUpdateOutputAffectedRowsDto, BusinessPrimaryCategoryUploadDeleteDto, BusinessPrimaryCategoryUploadDeleteInputDto, BusinessPrimaryCategoryUploadDeleteOutputDto, BusinessPrimaryCategoryUploadDto, BusinessPrimaryCategoryUploadInputDto, BusinessPrimaryCategoryUploadOutputDto, BusinessPrimaryCategoryUpsertDto, BusinessPrimaryCategoryUpsertInputDto, BusinessPrimaryCategoryUpsertOutputDto } from "./dto/primary.category.dto";

@Injectable()
export class BusinessPrimaryCategoryFactory extends CrudFactory<BusinessPrimaryCategoryEntity> {

// ████████ FindCrudEngine ████████████████████████████████████████
public declare readonly findEngine: FindCrudEngine<
// entity (1)
BusinessPrimaryCategoryEntity,

// find (8)
BusinessPrimaryCategoryFindDto,
BusinessPrimaryCategoryFindInputWhereDto,
BusinessPrimaryCategoryFindInputSortOrderDto,
BusinessPrimaryCategoryFindInputGroupByDto,
BusinessPrimaryCategoryFindInputDto,
BusinessPrimaryCategoryFindOutputRowsDto,
FindOutputPaginationDto,
BusinessPrimaryCategoryFindOutputDto,

// find_one_by_id (2)
BusinessPrimaryCategoryFindOneByIdDto,
BusinessPrimaryCategoryFindOneByIdInputDto
>;

// ████████ CreateCrudEngine ████████████████████████████████████████
public declare readonly createEngine: CreateCrudEngine<
// entity (1)
BusinessPrimaryCategoryEntity,

// create (3)
BusinessPrimaryCategoryCreateDto,
BusinessPrimaryCategoryCreateInputDto,
BusinessPrimaryCategoryCreateOutputDto
>;

// ████████ UpdateCrudEngine ████████████████████████████████████████
public declare readonly updateEngine: UpdateCrudEngine<
// entity (1)
BusinessPrimaryCategoryEntity,

// update (6)
BusinessPrimaryCategoryUpdateDto,
BusinessPrimaryCategoryUpdateInputWhereDto,
BusinessPrimaryCategoryUpdateInputSetsDto,
BusinessPrimaryCategoryUpdateInputDto,
BusinessPrimaryCategoryUpdateOutputAffectedRowsDto,
BusinessPrimaryCategoryUpdateOutputDto
>;

// ████████ DeleteCrudEngine ████████████████████████████████████████
public declare readonly deleteEngine: DeleteCrudEngine<
// entity (1)
BusinessPrimaryCategoryEntity,

// soft_delete (4)
BusinessPrimaryCategorySoftDeleteDto,
BusinessPrimaryCategorySoftDeleteInputWhereDto,
BusinessPrimaryCategorySoftDeleteInputDto,
BusinessPrimaryCategorySoftDeleteOutputDto,

// delete (4)
BusinessPrimaryCategoryDeleteDto,
BusinessPrimaryCategoryDeleteInputWhereDto,
BusinessPrimaryCategoryDeleteInputDto,
BusinessPrimaryCategoryDeleteOutputDto,

// restore (4)
BusinessPrimaryCategoryRestoreDto,
BusinessPrimaryCategoryRestoreInputWhereDto,
BusinessPrimaryCategoryRestoreInputDto,
BusinessPrimaryCategoryRestoreOutputDto
>;

// ████████ UpsertCrudEngine ████████████████████████████████████████
public declare readonly upsertEngine: UpsertCrudEngine<
// entity (1)
BusinessPrimaryCategoryEntity,

// upsert (3)
BusinessPrimaryCategoryUpsertDto,
BusinessPrimaryCategoryUpsertInputDto,
BusinessPrimaryCategoryUpsertOutputDto
>;

// ████████ RemoveCrudEngine ████████████████████████████████████████
public declare readonly removeEngine: RemoveCrudEngine<
// entity (1)
BusinessPrimaryCategoryEntity,

// soft_remove (5)
BusinessPrimaryCategorySoftRemoveDto,
BusinessPrimaryCategorySoftRemoveInputWhereDto,
BusinessPrimaryCategorySoftRemoveInputDto,
BusinessPrimaryCategorySoftRemoveOutputAffectedRowsDto,
BusinessPrimaryCategorySoftRemoveOutputDto,

// remove (4)
BusinessPrimaryCategoryRemoveDto,
BusinessPrimaryCategoryRemoveInputWhereDto,
BusinessPrimaryCategoryRemoveInputDto,
BusinessPrimaryCategoryRemoveOutputAffectedRowsDto,
BusinessPrimaryCategoryRemoveOutputDto,

// recover (5)
BusinessPrimaryCategoryRecoverDto,
BusinessPrimaryCategoryRecoverInputWhereDto,
BusinessPrimaryCategoryRecoverInputDto,
BusinessPrimaryCategoryRecoverOutputAffectedRowsDto,
BusinessPrimaryCategoryRecoverOutputDto
>;

// ████████ UploadCrudEngine ████████████████████████████████████████
public declare readonly uploadEngine: UploadCrudEngine<
// entity (1)
BusinessPrimaryCategoryEntity,

// upload (3)
BusinessPrimaryCategoryUploadDto,
BusinessPrimaryCategoryUploadInputDto,
BusinessPrimaryCategoryUploadOutputDto,

// upload_delete (3)
BusinessPrimaryCategoryUploadDeleteDto,
BusinessPrimaryCategoryUploadDeleteInputDto,
BusinessPrimaryCategoryUploadDeleteOutputDto
>;

constructor(
// data source
protected readonly dataSource: DataSource,

@InjectRepository(BusinessPrimaryCategoryEntity)
protected readonly repository: Repository<BusinessPrimaryCategoryEntity>,

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
    BusinessPrimaryCategoryEntity,
);

this.logService.setContext(BusinessPrimaryCategoryFactory.name);

// ████████ initialize FindCrudEngine ██████████████████████████████████████
this.initFindEngine
<
// find (8)
BusinessPrimaryCategoryFindDto,
BusinessPrimaryCategoryFindInputWhereDto,
BusinessPrimaryCategoryFindInputSortOrderDto,
BusinessPrimaryCategoryFindInputGroupByDto,
BusinessPrimaryCategoryFindInputDto,
BusinessPrimaryCategoryFindOutputRowsDto,
FindOutputPaginationDto,
BusinessPrimaryCategoryFindOutputDto,

// find_one_by_id (2)
BusinessPrimaryCategoryFindOneByIdDto,
BusinessPrimaryCategoryFindOneByIdInputDto
>
(
// find (8)
BusinessPrimaryCategoryFindDto,
BusinessPrimaryCategoryFindInputWhereDto,
BusinessPrimaryCategoryFindInputSortOrderDto,
BusinessPrimaryCategoryFindInputGroupByDto,
BusinessPrimaryCategoryFindInputDto,
BusinessPrimaryCategoryFindOutputRowsDto,
FindOutputPaginationDto,
BusinessPrimaryCategoryFindOutputDto,

// find_one_by_id (2)
BusinessPrimaryCategoryFindOneByIdDto,
BusinessPrimaryCategoryFindOneByIdInputDto
);


// ████████ initialize CreateCrudEngine ███████████████████████████████████████
this.initCreateEngine
<
// create (3)
BusinessPrimaryCategoryCreateDto,
BusinessPrimaryCategoryCreateInputDto,
BusinessPrimaryCategoryCreateOutputDto
>
(
// create (3)
BusinessPrimaryCategoryCreateDto,
BusinessPrimaryCategoryCreateInputDto,
BusinessPrimaryCategoryCreateOutputDto
);

// ████████ initialize UpdateCrudEngine ████████████████████████████████████████
this.initUpdateEngine
<
// update (6)
BusinessPrimaryCategoryUpdateDto,
BusinessPrimaryCategoryUpdateInputWhereDto,
BusinessPrimaryCategoryUpdateInputSetsDto,
BusinessPrimaryCategoryUpdateInputDto,
BusinessPrimaryCategoryUpdateOutputAffectedRowsDto,
BusinessPrimaryCategoryUpdateOutputDto
>
(
// update (6)
BusinessPrimaryCategoryUpdateDto,
BusinessPrimaryCategoryUpdateInputWhereDto,
BusinessPrimaryCategoryUpdateInputSetsDto,
BusinessPrimaryCategoryUpdateInputDto,
BusinessPrimaryCategoryUpdateOutputAffectedRowsDto,
BusinessPrimaryCategoryUpdateOutputDto
);


// ████████ initialize DeleteCrudEngine ███████████████████████████████████████████
this.initDeleteEngine
<
// soft_delete (4)
BusinessPrimaryCategorySoftDeleteDto,
BusinessPrimaryCategorySoftDeleteInputWhereDto,
BusinessPrimaryCategorySoftDeleteInputDto,
BusinessPrimaryCategorySoftDeleteOutputDto,

// delete (4)
BusinessPrimaryCategoryDeleteDto,
BusinessPrimaryCategoryDeleteInputWhereDto,
BusinessPrimaryCategoryDeleteInputDto,
BusinessPrimaryCategoryDeleteOutputDto,

// restore (4)
BusinessPrimaryCategoryRestoreDto,
BusinessPrimaryCategoryRestoreInputWhereDto,
BusinessPrimaryCategoryRestoreInputDto,
BusinessPrimaryCategoryRestoreOutputDto
>
(
// soft_delete (4)
BusinessPrimaryCategorySoftDeleteDto,
BusinessPrimaryCategorySoftDeleteInputWhereDto,
BusinessPrimaryCategorySoftDeleteInputDto,
BusinessPrimaryCategorySoftDeleteOutputDto,

// delete (4)
BusinessPrimaryCategoryDeleteDto,
BusinessPrimaryCategoryDeleteInputWhereDto,
BusinessPrimaryCategoryDeleteInputDto,
BusinessPrimaryCategoryDeleteOutputDto,

// restore (4)
BusinessPrimaryCategoryRestoreDto,
BusinessPrimaryCategoryRestoreInputWhereDto,
BusinessPrimaryCategoryRestoreInputDto,
BusinessPrimaryCategoryRestoreOutputDto
);



// ████████ initialize UpsertCrudEngine ███████████████████████████████████████████
this.initUpsertEngine
<
// upsert (3)
BusinessPrimaryCategoryUpsertDto,
BusinessPrimaryCategoryUpsertInputDto,
BusinessPrimaryCategoryUpsertOutputDto
>
(
// upsert (3)
BusinessPrimaryCategoryUpsertDto,
BusinessPrimaryCategoryUpsertInputDto,
BusinessPrimaryCategoryUpsertOutputDto
);




// ████████ initialize RemoveCrudEngine ███████████████████████████████████████████
this.initRemoveEngine
<
// soft_remove (5)
BusinessPrimaryCategorySoftRemoveDto,
BusinessPrimaryCategorySoftRemoveInputWhereDto,
BusinessPrimaryCategorySoftRemoveInputDto,
BusinessPrimaryCategorySoftRemoveOutputAffectedRowsDto,
BusinessPrimaryCategorySoftRemoveOutputDto,

// remove (4)
BusinessPrimaryCategoryRemoveDto,
BusinessPrimaryCategoryRemoveInputWhereDto,
BusinessPrimaryCategoryRemoveInputDto,
BusinessPrimaryCategoryRemoveOutputAffectedRowsDto,
BusinessPrimaryCategoryRemoveOutputDto,

// recover (5)
BusinessPrimaryCategoryRecoverDto,
BusinessPrimaryCategoryRecoverInputWhereDto,
BusinessPrimaryCategoryRecoverInputDto,
BusinessPrimaryCategoryRecoverOutputAffectedRowsDto,
BusinessPrimaryCategoryRecoverOutputDto
>
(
// soft_remove (5)
BusinessPrimaryCategorySoftRemoveDto,
BusinessPrimaryCategorySoftRemoveInputWhereDto,
BusinessPrimaryCategorySoftRemoveInputDto,
BusinessPrimaryCategorySoftRemoveOutputAffectedRowsDto,
BusinessPrimaryCategorySoftRemoveOutputDto,

// remove (4)
BusinessPrimaryCategoryRemoveDto,
BusinessPrimaryCategoryRemoveInputWhereDto,
BusinessPrimaryCategoryRemoveInputDto,
BusinessPrimaryCategoryRemoveOutputAffectedRowsDto,
BusinessPrimaryCategoryRemoveOutputDto,

// recover (5)
BusinessPrimaryCategoryRecoverDto,
BusinessPrimaryCategoryRecoverInputWhereDto,
BusinessPrimaryCategoryRecoverInputDto,
BusinessPrimaryCategoryRecoverOutputAffectedRowsDto,
BusinessPrimaryCategoryRecoverOutputDto
);



// ████████ initialize UploadCrudEngine ███████████████████████████████████████████
this.initUploadEngine
<
// upload (3)
BusinessPrimaryCategoryUploadDto,
BusinessPrimaryCategoryUploadInputDto,
BusinessPrimaryCategoryUploadOutputDto,

// upload_delete (3)
BusinessPrimaryCategoryUploadDeleteDto,
BusinessPrimaryCategoryUploadDeleteInputDto,
BusinessPrimaryCategoryUploadDeleteOutputDto
>
(
// upload (3)
BusinessPrimaryCategoryUploadDto,
BusinessPrimaryCategoryUploadInputDto,
BusinessPrimaryCategoryUploadOutputDto,

// upload_delete (3)
BusinessPrimaryCategoryUploadDeleteDto,
BusinessPrimaryCategoryUploadDeleteInputDto,
BusinessPrimaryCategoryUploadDeleteOutputDto
);


// ████████ initialize ImportExportCrudEngine █████████████████████████████████████

}

}