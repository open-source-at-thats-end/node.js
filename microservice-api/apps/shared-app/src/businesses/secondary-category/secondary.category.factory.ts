import { BusinessSecondaryCategoryEntity } from "./entities/secondary.category.entity";
import { Injectable } from "@nestjs/common";
import { DataSource, Repository } from "typeorm";
import { InjectRepository } from "@nestjs/typeorm";
import { ConfService, CreateCrudEngine, CrudFactory, DataValidationPipe, DeleteCrudEngine, FindCrudEngine, FindOutputPaginationDto, LibraryAppService, LogService, RemoveCrudEngine, UpdateCrudEngine, UploadCrudEngine, UpsertCrudEngine } from "@libs/library-app";
import { SelfGraphqlMicroserviceService } from '@libs/dynamic-app';
import { BusinessSecondaryCategoryCreateDto, BusinessSecondaryCategoryCreateInputDto, BusinessSecondaryCategoryCreateOutputDto, BusinessSecondaryCategoryDeleteDto, BusinessSecondaryCategoryDeleteInputDto, BusinessSecondaryCategoryDeleteInputWhereDto, BusinessSecondaryCategoryDeleteOutputDto, BusinessSecondaryCategoryFindDto, BusinessSecondaryCategoryFindInputDto, BusinessSecondaryCategoryFindInputGroupByDto, BusinessSecondaryCategoryFindInputSortOrderDto, BusinessSecondaryCategoryFindInputWhereDto, BusinessSecondaryCategoryFindOneByIdDto, BusinessSecondaryCategoryFindOneByIdInputDto, BusinessSecondaryCategoryFindOutputDto, BusinessSecondaryCategoryFindOutputRowsDto, BusinessSecondaryCategoryRecoverDto, BusinessSecondaryCategoryRecoverInputDto, BusinessSecondaryCategoryRecoverInputWhereDto, BusinessSecondaryCategoryRecoverOutputDto, BusinessSecondaryCategoryRecoverOutputAffectedRowsDto, BusinessSecondaryCategoryRemoveDto, BusinessSecondaryCategoryRemoveInputDto, BusinessSecondaryCategoryRemoveInputWhereDto, BusinessSecondaryCategoryRemoveOutputDto, BusinessSecondaryCategoryRemoveOutputAffectedRowsDto, BusinessSecondaryCategoryRestoreDto, BusinessSecondaryCategoryRestoreInputDto, BusinessSecondaryCategoryRestoreInputWhereDto, BusinessSecondaryCategoryRestoreOutputDto, BusinessSecondaryCategorySoftDeleteDto, BusinessSecondaryCategorySoftDeleteInputDto, BusinessSecondaryCategorySoftDeleteInputWhereDto, BusinessSecondaryCategorySoftDeleteOutputDto, BusinessSecondaryCategorySoftRemoveDto, BusinessSecondaryCategorySoftRemoveInputDto, BusinessSecondaryCategorySoftRemoveInputWhereDto, BusinessSecondaryCategorySoftRemoveOutputDto, BusinessSecondaryCategorySoftRemoveOutputAffectedRowsDto, BusinessSecondaryCategoryUpdateDto, BusinessSecondaryCategoryUpdateInputDto, BusinessSecondaryCategoryUpdateInputSetsDto, BusinessSecondaryCategoryUpdateInputWhereDto, BusinessSecondaryCategoryUpdateOutputDto, BusinessSecondaryCategoryUpdateOutputAffectedRowsDto, BusinessSecondaryCategoryUploadDeleteDto, BusinessSecondaryCategoryUploadDeleteInputDto, BusinessSecondaryCategoryUploadDeleteOutputDto, BusinessSecondaryCategoryUploadDto, BusinessSecondaryCategoryUploadInputDto, BusinessSecondaryCategoryUploadOutputDto, BusinessSecondaryCategoryUpsertDto, BusinessSecondaryCategoryUpsertInputDto, BusinessSecondaryCategoryUpsertOutputDto } from "./dto/secondary.category.dto";

@Injectable()
export class BusinessSecondaryCategoryFactory extends CrudFactory<BusinessSecondaryCategoryEntity> {

// ████████ FindCrudEngine ████████████████████████████████████████
public declare readonly findEngine: FindCrudEngine<
// entity (1)
BusinessSecondaryCategoryEntity,

// find (8)
BusinessSecondaryCategoryFindDto,
BusinessSecondaryCategoryFindInputWhereDto,
BusinessSecondaryCategoryFindInputSortOrderDto,
BusinessSecondaryCategoryFindInputGroupByDto,
BusinessSecondaryCategoryFindInputDto,
BusinessSecondaryCategoryFindOutputRowsDto,
FindOutputPaginationDto,
BusinessSecondaryCategoryFindOutputDto,

// find_one_by_id (2)
BusinessSecondaryCategoryFindOneByIdDto,
BusinessSecondaryCategoryFindOneByIdInputDto
>;

// ████████ CreateCrudEngine ████████████████████████████████████████
public declare readonly createEngine: CreateCrudEngine<
// entity (1)
BusinessSecondaryCategoryEntity,

// create (3)
BusinessSecondaryCategoryCreateDto,
BusinessSecondaryCategoryCreateInputDto,
BusinessSecondaryCategoryCreateOutputDto
>;

// ████████ UpdateCrudEngine ████████████████████████████████████████
public declare readonly updateEngine: UpdateCrudEngine<
// entity (1)
BusinessSecondaryCategoryEntity,

// update (6)
BusinessSecondaryCategoryUpdateDto,
BusinessSecondaryCategoryUpdateInputWhereDto,
BusinessSecondaryCategoryUpdateInputSetsDto,
BusinessSecondaryCategoryUpdateInputDto,
BusinessSecondaryCategoryUpdateOutputAffectedRowsDto,
BusinessSecondaryCategoryUpdateOutputDto
>;

// ████████ DeleteCrudEngine ████████████████████████████████████████
public declare readonly deleteEngine: DeleteCrudEngine<
// entity (1)
BusinessSecondaryCategoryEntity,

// soft_delete (4)
BusinessSecondaryCategorySoftDeleteDto,
BusinessSecondaryCategorySoftDeleteInputWhereDto,
BusinessSecondaryCategorySoftDeleteInputDto,
BusinessSecondaryCategorySoftDeleteOutputDto,

// delete (4)
BusinessSecondaryCategoryDeleteDto,
BusinessSecondaryCategoryDeleteInputWhereDto,
BusinessSecondaryCategoryDeleteInputDto,
BusinessSecondaryCategoryDeleteOutputDto,

// restore (4)
BusinessSecondaryCategoryRestoreDto,
BusinessSecondaryCategoryRestoreInputWhereDto,
BusinessSecondaryCategoryRestoreInputDto,
BusinessSecondaryCategoryRestoreOutputDto
>;

// ████████ UpsertCrudEngine ████████████████████████████████████████
public declare readonly upsertEngine: UpsertCrudEngine<
// entity (1)
BusinessSecondaryCategoryEntity,

// upsert (3)
BusinessSecondaryCategoryUpsertDto,
BusinessSecondaryCategoryUpsertInputDto,
BusinessSecondaryCategoryUpsertOutputDto
>;

// ████████ RemoveCrudEngine ████████████████████████████████████████
public declare readonly removeEngine: RemoveCrudEngine<
// entity (1)
BusinessSecondaryCategoryEntity,

// soft_remove (5)
BusinessSecondaryCategorySoftRemoveDto,
BusinessSecondaryCategorySoftRemoveInputWhereDto,
BusinessSecondaryCategorySoftRemoveInputDto,
BusinessSecondaryCategorySoftRemoveOutputAffectedRowsDto,
BusinessSecondaryCategorySoftRemoveOutputDto,

// remove (4)
BusinessSecondaryCategoryRemoveDto,
BusinessSecondaryCategoryRemoveInputWhereDto,
BusinessSecondaryCategoryRemoveInputDto,
BusinessSecondaryCategoryRemoveOutputAffectedRowsDto,
BusinessSecondaryCategoryRemoveOutputDto,

// recover (5)
BusinessSecondaryCategoryRecoverDto,
BusinessSecondaryCategoryRecoverInputWhereDto,
BusinessSecondaryCategoryRecoverInputDto,
BusinessSecondaryCategoryRecoverOutputAffectedRowsDto,
BusinessSecondaryCategoryRecoverOutputDto
>;

// ████████ UploadCrudEngine ████████████████████████████████████████
public declare readonly uploadEngine: UploadCrudEngine<
// entity (1)
BusinessSecondaryCategoryEntity,

// upload (3)
BusinessSecondaryCategoryUploadDto,
BusinessSecondaryCategoryUploadInputDto,
BusinessSecondaryCategoryUploadOutputDto,

// upload_delete (3)
BusinessSecondaryCategoryUploadDeleteDto,
BusinessSecondaryCategoryUploadDeleteInputDto,
BusinessSecondaryCategoryUploadDeleteOutputDto
>;

constructor(
// data source
protected readonly dataSource: DataSource,

@InjectRepository(BusinessSecondaryCategoryEntity)
protected readonly repository: Repository<BusinessSecondaryCategoryEntity>,

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
    BusinessSecondaryCategoryEntity,
);

this.logService.setContext(BusinessSecondaryCategoryFactory.name);

// ████████ initialize FindCrudEngine ██████████████████████████████████████
this.initFindEngine
<
// find (8)
BusinessSecondaryCategoryFindDto,
BusinessSecondaryCategoryFindInputWhereDto,
BusinessSecondaryCategoryFindInputSortOrderDto,
BusinessSecondaryCategoryFindInputGroupByDto,
BusinessSecondaryCategoryFindInputDto,
BusinessSecondaryCategoryFindOutputRowsDto,
FindOutputPaginationDto,
BusinessSecondaryCategoryFindOutputDto,

// find_one_by_id (2)
BusinessSecondaryCategoryFindOneByIdDto,
BusinessSecondaryCategoryFindOneByIdInputDto
>
(
// find (8)
BusinessSecondaryCategoryFindDto,
BusinessSecondaryCategoryFindInputWhereDto,
BusinessSecondaryCategoryFindInputSortOrderDto,
BusinessSecondaryCategoryFindInputGroupByDto,
BusinessSecondaryCategoryFindInputDto,
BusinessSecondaryCategoryFindOutputRowsDto,
FindOutputPaginationDto,
BusinessSecondaryCategoryFindOutputDto,

// find_one_by_id (2)
BusinessSecondaryCategoryFindOneByIdDto,
BusinessSecondaryCategoryFindOneByIdInputDto
);


// ████████ initialize CreateCrudEngine ███████████████████████████████████████
this.initCreateEngine
<
// create (3)
BusinessSecondaryCategoryCreateDto,
BusinessSecondaryCategoryCreateInputDto,
BusinessSecondaryCategoryCreateOutputDto
>
(
// create (3)
BusinessSecondaryCategoryCreateDto,
BusinessSecondaryCategoryCreateInputDto,
BusinessSecondaryCategoryCreateOutputDto
);

// ████████ initialize UpdateCrudEngine ████████████████████████████████████████
this.initUpdateEngine
<
// update (6)
BusinessSecondaryCategoryUpdateDto,
BusinessSecondaryCategoryUpdateInputWhereDto,
BusinessSecondaryCategoryUpdateInputSetsDto,
BusinessSecondaryCategoryUpdateInputDto,
BusinessSecondaryCategoryUpdateOutputAffectedRowsDto,
BusinessSecondaryCategoryUpdateOutputDto
>
(
// update (6)
BusinessSecondaryCategoryUpdateDto,
BusinessSecondaryCategoryUpdateInputWhereDto,
BusinessSecondaryCategoryUpdateInputSetsDto,
BusinessSecondaryCategoryUpdateInputDto,
BusinessSecondaryCategoryUpdateOutputAffectedRowsDto,
BusinessSecondaryCategoryUpdateOutputDto
);


// ████████ initialize DeleteCrudEngine ███████████████████████████████████████████
this.initDeleteEngine
<
// soft_delete (4)
BusinessSecondaryCategorySoftDeleteDto,
BusinessSecondaryCategorySoftDeleteInputWhereDto,
BusinessSecondaryCategorySoftDeleteInputDto,
BusinessSecondaryCategorySoftDeleteOutputDto,

// delete (4)
BusinessSecondaryCategoryDeleteDto,
BusinessSecondaryCategoryDeleteInputWhereDto,
BusinessSecondaryCategoryDeleteInputDto,
BusinessSecondaryCategoryDeleteOutputDto,

// restore (4)
BusinessSecondaryCategoryRestoreDto,
BusinessSecondaryCategoryRestoreInputWhereDto,
BusinessSecondaryCategoryRestoreInputDto,
BusinessSecondaryCategoryRestoreOutputDto
>
(
// soft_delete (4)
BusinessSecondaryCategorySoftDeleteDto,
BusinessSecondaryCategorySoftDeleteInputWhereDto,
BusinessSecondaryCategorySoftDeleteInputDto,
BusinessSecondaryCategorySoftDeleteOutputDto,

// delete (4)
BusinessSecondaryCategoryDeleteDto,
BusinessSecondaryCategoryDeleteInputWhereDto,
BusinessSecondaryCategoryDeleteInputDto,
BusinessSecondaryCategoryDeleteOutputDto,

// restore (4)
BusinessSecondaryCategoryRestoreDto,
BusinessSecondaryCategoryRestoreInputWhereDto,
BusinessSecondaryCategoryRestoreInputDto,
BusinessSecondaryCategoryRestoreOutputDto
);



// ████████ initialize UpsertCrudEngine ███████████████████████████████████████████
this.initUpsertEngine
<
// upsert (3)
BusinessSecondaryCategoryUpsertDto,
BusinessSecondaryCategoryUpsertInputDto,
BusinessSecondaryCategoryUpsertOutputDto
>
(
// upsert (3)
BusinessSecondaryCategoryUpsertDto,
BusinessSecondaryCategoryUpsertInputDto,
BusinessSecondaryCategoryUpsertOutputDto
);




// ████████ initialize RemoveCrudEngine ███████████████████████████████████████████
this.initRemoveEngine
<
// soft_remove (5)
BusinessSecondaryCategorySoftRemoveDto,
BusinessSecondaryCategorySoftRemoveInputWhereDto,
BusinessSecondaryCategorySoftRemoveInputDto,
BusinessSecondaryCategorySoftRemoveOutputAffectedRowsDto,
BusinessSecondaryCategorySoftRemoveOutputDto,

// remove (4)
BusinessSecondaryCategoryRemoveDto,
BusinessSecondaryCategoryRemoveInputWhereDto,
BusinessSecondaryCategoryRemoveInputDto,
BusinessSecondaryCategoryRemoveOutputAffectedRowsDto,
BusinessSecondaryCategoryRemoveOutputDto,

// recover (5)
BusinessSecondaryCategoryRecoverDto,
BusinessSecondaryCategoryRecoverInputWhereDto,
BusinessSecondaryCategoryRecoverInputDto,
BusinessSecondaryCategoryRecoverOutputAffectedRowsDto,
BusinessSecondaryCategoryRecoverOutputDto
>
(
// soft_remove (5)
BusinessSecondaryCategorySoftRemoveDto,
BusinessSecondaryCategorySoftRemoveInputWhereDto,
BusinessSecondaryCategorySoftRemoveInputDto,
BusinessSecondaryCategorySoftRemoveOutputAffectedRowsDto,
BusinessSecondaryCategorySoftRemoveOutputDto,

// remove (4)
BusinessSecondaryCategoryRemoveDto,
BusinessSecondaryCategoryRemoveInputWhereDto,
BusinessSecondaryCategoryRemoveInputDto,
BusinessSecondaryCategoryRemoveOutputAffectedRowsDto,
BusinessSecondaryCategoryRemoveOutputDto,

// recover (5)
BusinessSecondaryCategoryRecoverDto,
BusinessSecondaryCategoryRecoverInputWhereDto,
BusinessSecondaryCategoryRecoverInputDto,
BusinessSecondaryCategoryRecoverOutputAffectedRowsDto,
BusinessSecondaryCategoryRecoverOutputDto
);



// ████████ initialize UploadCrudEngine ███████████████████████████████████████████
this.initUploadEngine
<
// upload (3)
BusinessSecondaryCategoryUploadDto,
BusinessSecondaryCategoryUploadInputDto,
BusinessSecondaryCategoryUploadOutputDto,

// upload_delete (3)
BusinessSecondaryCategoryUploadDeleteDto,
BusinessSecondaryCategoryUploadDeleteInputDto,
BusinessSecondaryCategoryUploadDeleteOutputDto
>
(
// upload (3)
BusinessSecondaryCategoryUploadDto,
BusinessSecondaryCategoryUploadInputDto,
BusinessSecondaryCategoryUploadOutputDto,

// upload_delete (3)
BusinessSecondaryCategoryUploadDeleteDto,
BusinessSecondaryCategoryUploadDeleteInputDto,
BusinessSecondaryCategoryUploadDeleteOutputDto
);


// ████████ initialize ImportExportCrudEngine █████████████████████████████████████

}

}