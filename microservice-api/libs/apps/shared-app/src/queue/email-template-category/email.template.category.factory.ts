import { EmailTemplateCategoryEntity } from "./entities/email.template.category.entity";
import { Injectable } from "@nestjs/common";
import { DataSource, Repository } from "typeorm";
import { InjectRepository } from "@nestjs/typeorm";
import { ConfService, CreateCrudEngine, CrudFactory, DataValidationPipe, DeleteCrudEngine, FindCrudEngine, FindOutputPaginationDto, LibraryAppService, LogService, RemoveCrudEngine, UpdateCrudEngine, UploadCrudEngine, UpsertCrudEngine } from "@libs/library-app";
import { SelfGraphqlMicroserviceService } from '@libs/dynamic-app';
import { EmailTemplateCategoryCreateDto, EmailTemplateCategoryCreateInputDto, EmailTemplateCategoryCreateOutputDto, EmailTemplateCategoryDeleteDto, EmailTemplateCategoryDeleteInputDto, EmailTemplateCategoryDeleteInputWhereDto, EmailTemplateCategoryDeleteOutputDto, EmailTemplateCategoryFindDto, EmailTemplateCategoryFindInputDto, EmailTemplateCategoryFindInputGroupByDto, EmailTemplateCategoryFindInputSortOrderDto, EmailTemplateCategoryFindInputWhereDto, EmailTemplateCategoryFindOneByIdDto, EmailTemplateCategoryFindOneByIdInputDto, EmailTemplateCategoryFindOutputDto, EmailTemplateCategoryFindOutputRowsDto, EmailTemplateCategoryRecoverDto, EmailTemplateCategoryRecoverInputDto, EmailTemplateCategoryRecoverInputWhereDto, EmailTemplateCategoryRecoverOutputDto, EmailTemplateCategoryRecoverOutputAffectedRowsDto, EmailTemplateCategoryRemoveDto, EmailTemplateCategoryRemoveInputDto, EmailTemplateCategoryRemoveInputWhereDto, EmailTemplateCategoryRemoveOutputDto, EmailTemplateCategoryRemoveOutputAffectedRowsDto, EmailTemplateCategoryRestoreDto, EmailTemplateCategoryRestoreInputDto, EmailTemplateCategoryRestoreInputWhereDto, EmailTemplateCategoryRestoreOutputDto, EmailTemplateCategorySoftDeleteDto, EmailTemplateCategorySoftDeleteInputDto, EmailTemplateCategorySoftDeleteInputWhereDto, EmailTemplateCategorySoftDeleteOutputDto, EmailTemplateCategorySoftRemoveDto, EmailTemplateCategorySoftRemoveInputDto, EmailTemplateCategorySoftRemoveInputWhereDto, EmailTemplateCategorySoftRemoveOutputDto, EmailTemplateCategorySoftRemoveOutputAffectedRowsDto, EmailTemplateCategoryUpdateDto, EmailTemplateCategoryUpdateInputDto, EmailTemplateCategoryUpdateInputSetsDto, EmailTemplateCategoryUpdateInputWhereDto, EmailTemplateCategoryUpdateOutputDto, EmailTemplateCategoryUpdateOutputAffectedRowsDto, EmailTemplateCategoryUploadDeleteDto, EmailTemplateCategoryUploadDeleteInputDto, EmailTemplateCategoryUploadDeleteOutputDto, EmailTemplateCategoryUploadDto, EmailTemplateCategoryUploadInputDto, EmailTemplateCategoryUploadOutputDto, EmailTemplateCategoryUpsertDto, EmailTemplateCategoryUpsertInputDto, EmailTemplateCategoryUpsertOutputDto } from "./dto/email.template.category.dto";

@Injectable()
export class EmailTemplateCategoryFactory extends CrudFactory<EmailTemplateCategoryEntity> {

// ████████ FindCrudEngine ████████████████████████████████████████
public declare readonly findEngine: FindCrudEngine<
// entity (1)
EmailTemplateCategoryEntity,

// find (8)
EmailTemplateCategoryFindDto,
EmailTemplateCategoryFindInputWhereDto,
EmailTemplateCategoryFindInputSortOrderDto,
EmailTemplateCategoryFindInputGroupByDto,
EmailTemplateCategoryFindInputDto,
EmailTemplateCategoryFindOutputRowsDto,
FindOutputPaginationDto,
EmailTemplateCategoryFindOutputDto,

// find_one_by_id (2)
EmailTemplateCategoryFindOneByIdDto,
EmailTemplateCategoryFindOneByIdInputDto
>;

// ████████ CreateCrudEngine ████████████████████████████████████████
public declare readonly createEngine: CreateCrudEngine<
// entity (1)
EmailTemplateCategoryEntity,

// create (3)
EmailTemplateCategoryCreateDto,
EmailTemplateCategoryCreateInputDto,
EmailTemplateCategoryCreateOutputDto
>;

// ████████ UpdateCrudEngine ████████████████████████████████████████
public declare readonly updateEngine: UpdateCrudEngine<
// entity (1)
EmailTemplateCategoryEntity,

// update (6)
EmailTemplateCategoryUpdateDto,
EmailTemplateCategoryUpdateInputWhereDto,
EmailTemplateCategoryUpdateInputSetsDto,
EmailTemplateCategoryUpdateInputDto,
EmailTemplateCategoryUpdateOutputAffectedRowsDto,
EmailTemplateCategoryUpdateOutputDto
>;

// ████████ DeleteCrudEngine ████████████████████████████████████████
public declare readonly deleteEngine: DeleteCrudEngine<
// entity (1)
EmailTemplateCategoryEntity,

// soft_delete (4)
EmailTemplateCategorySoftDeleteDto,
EmailTemplateCategorySoftDeleteInputWhereDto,
EmailTemplateCategorySoftDeleteInputDto,
EmailTemplateCategorySoftDeleteOutputDto,

// delete (4)
EmailTemplateCategoryDeleteDto,
EmailTemplateCategoryDeleteInputWhereDto,
EmailTemplateCategoryDeleteInputDto,
EmailTemplateCategoryDeleteOutputDto,

// restore (4)
EmailTemplateCategoryRestoreDto,
EmailTemplateCategoryRestoreInputWhereDto,
EmailTemplateCategoryRestoreInputDto,
EmailTemplateCategoryRestoreOutputDto
>;

// ████████ UpsertCrudEngine ████████████████████████████████████████
public declare readonly upsertEngine: UpsertCrudEngine<
// entity (1)
EmailTemplateCategoryEntity,

// upsert (3)
EmailTemplateCategoryUpsertDto,
EmailTemplateCategoryUpsertInputDto,
EmailTemplateCategoryUpsertOutputDto
>;

// ████████ RemoveCrudEngine ████████████████████████████████████████
public declare readonly removeEngine: RemoveCrudEngine<
// entity (1)
EmailTemplateCategoryEntity,

// soft_remove (5)
EmailTemplateCategorySoftRemoveDto,
EmailTemplateCategorySoftRemoveInputWhereDto,
EmailTemplateCategorySoftRemoveInputDto,
EmailTemplateCategorySoftRemoveOutputAffectedRowsDto,
EmailTemplateCategorySoftRemoveOutputDto,

// remove (4)
EmailTemplateCategoryRemoveDto,
EmailTemplateCategoryRemoveInputWhereDto,
EmailTemplateCategoryRemoveInputDto,
EmailTemplateCategoryRemoveOutputAffectedRowsDto,
EmailTemplateCategoryRemoveOutputDto,

// recover (5)
EmailTemplateCategoryRecoverDto,
EmailTemplateCategoryRecoverInputWhereDto,
EmailTemplateCategoryRecoverInputDto,
EmailTemplateCategoryRecoverOutputAffectedRowsDto,
EmailTemplateCategoryRecoverOutputDto
>;

// ████████ UploadCrudEngine ████████████████████████████████████████
public declare readonly uploadEngine: UploadCrudEngine<
// entity (1)
EmailTemplateCategoryEntity,

// upload (3)
EmailTemplateCategoryUploadDto,
EmailTemplateCategoryUploadInputDto,
EmailTemplateCategoryUploadOutputDto,

// upload_delete (3)
EmailTemplateCategoryUploadDeleteDto,
EmailTemplateCategoryUploadDeleteInputDto,
EmailTemplateCategoryUploadDeleteOutputDto
>;

constructor(
// data source
protected readonly dataSource: DataSource,

@InjectRepository(EmailTemplateCategoryEntity)
protected readonly repository: Repository<EmailTemplateCategoryEntity>,

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
    EmailTemplateCategoryEntity,
);

this.logService.setContext(EmailTemplateCategoryFactory.name);

// ████████ initialize FindCrudEngine ██████████████████████████████████████
this.initFindEngine
<
// find (8)
EmailTemplateCategoryFindDto,
EmailTemplateCategoryFindInputWhereDto,
EmailTemplateCategoryFindInputSortOrderDto,
EmailTemplateCategoryFindInputGroupByDto,
EmailTemplateCategoryFindInputDto,
EmailTemplateCategoryFindOutputRowsDto,
FindOutputPaginationDto,
EmailTemplateCategoryFindOutputDto,

// find_one_by_id (2)
EmailTemplateCategoryFindOneByIdDto,
EmailTemplateCategoryFindOneByIdInputDto
>
(
// find (8)
EmailTemplateCategoryFindDto,
EmailTemplateCategoryFindInputWhereDto,
EmailTemplateCategoryFindInputSortOrderDto,
EmailTemplateCategoryFindInputGroupByDto,
EmailTemplateCategoryFindInputDto,
EmailTemplateCategoryFindOutputRowsDto,
FindOutputPaginationDto,
EmailTemplateCategoryFindOutputDto,

// find_one_by_id (2)
EmailTemplateCategoryFindOneByIdDto,
EmailTemplateCategoryFindOneByIdInputDto
);


// ████████ initialize CreateCrudEngine ███████████████████████████████████████
this.initCreateEngine
<
// create (3)
EmailTemplateCategoryCreateDto,
EmailTemplateCategoryCreateInputDto,
EmailTemplateCategoryCreateOutputDto
>
(
// create (3)
EmailTemplateCategoryCreateDto,
EmailTemplateCategoryCreateInputDto,
EmailTemplateCategoryCreateOutputDto
);

// ████████ initialize UpdateCrudEngine ████████████████████████████████████████
this.initUpdateEngine
<
// update (6)
EmailTemplateCategoryUpdateDto,
EmailTemplateCategoryUpdateInputWhereDto,
EmailTemplateCategoryUpdateInputSetsDto,
EmailTemplateCategoryUpdateInputDto,
EmailTemplateCategoryUpdateOutputAffectedRowsDto,
EmailTemplateCategoryUpdateOutputDto
>
(
// update (6)
EmailTemplateCategoryUpdateDto,
EmailTemplateCategoryUpdateInputWhereDto,
EmailTemplateCategoryUpdateInputSetsDto,
EmailTemplateCategoryUpdateInputDto,
EmailTemplateCategoryUpdateOutputAffectedRowsDto,
EmailTemplateCategoryUpdateOutputDto
);


// ████████ initialize DeleteCrudEngine ███████████████████████████████████████████
this.initDeleteEngine
<
// soft_delete (4)
EmailTemplateCategorySoftDeleteDto,
EmailTemplateCategorySoftDeleteInputWhereDto,
EmailTemplateCategorySoftDeleteInputDto,
EmailTemplateCategorySoftDeleteOutputDto,

// delete (4)
EmailTemplateCategoryDeleteDto,
EmailTemplateCategoryDeleteInputWhereDto,
EmailTemplateCategoryDeleteInputDto,
EmailTemplateCategoryDeleteOutputDto,

// restore (4)
EmailTemplateCategoryRestoreDto,
EmailTemplateCategoryRestoreInputWhereDto,
EmailTemplateCategoryRestoreInputDto,
EmailTemplateCategoryRestoreOutputDto
>
(
// soft_delete (4)
EmailTemplateCategorySoftDeleteDto,
EmailTemplateCategorySoftDeleteInputWhereDto,
EmailTemplateCategorySoftDeleteInputDto,
EmailTemplateCategorySoftDeleteOutputDto,

// delete (4)
EmailTemplateCategoryDeleteDto,
EmailTemplateCategoryDeleteInputWhereDto,
EmailTemplateCategoryDeleteInputDto,
EmailTemplateCategoryDeleteOutputDto,

// restore (4)
EmailTemplateCategoryRestoreDto,
EmailTemplateCategoryRestoreInputWhereDto,
EmailTemplateCategoryRestoreInputDto,
EmailTemplateCategoryRestoreOutputDto
);



// ████████ initialize UpsertCrudEngine ███████████████████████████████████████████
this.initUpsertEngine
<
// upsert (3)
EmailTemplateCategoryUpsertDto,
EmailTemplateCategoryUpsertInputDto,
EmailTemplateCategoryUpsertOutputDto
>
(
// upsert (3)
EmailTemplateCategoryUpsertDto,
EmailTemplateCategoryUpsertInputDto,
EmailTemplateCategoryUpsertOutputDto
);




// ████████ initialize RemoveCrudEngine ███████████████████████████████████████████
this.initRemoveEngine
<
// soft_remove (5)
EmailTemplateCategorySoftRemoveDto,
EmailTemplateCategorySoftRemoveInputWhereDto,
EmailTemplateCategorySoftRemoveInputDto,
EmailTemplateCategorySoftRemoveOutputAffectedRowsDto,
EmailTemplateCategorySoftRemoveOutputDto,

// remove (4)
EmailTemplateCategoryRemoveDto,
EmailTemplateCategoryRemoveInputWhereDto,
EmailTemplateCategoryRemoveInputDto,
EmailTemplateCategoryRemoveOutputAffectedRowsDto,
EmailTemplateCategoryRemoveOutputDto,

// recover (5)
EmailTemplateCategoryRecoverDto,
EmailTemplateCategoryRecoverInputWhereDto,
EmailTemplateCategoryRecoverInputDto,
EmailTemplateCategoryRecoverOutputAffectedRowsDto,
EmailTemplateCategoryRecoverOutputDto
>
(
// soft_remove (5)
EmailTemplateCategorySoftRemoveDto,
EmailTemplateCategorySoftRemoveInputWhereDto,
EmailTemplateCategorySoftRemoveInputDto,
EmailTemplateCategorySoftRemoveOutputAffectedRowsDto,
EmailTemplateCategorySoftRemoveOutputDto,

// remove (4)
EmailTemplateCategoryRemoveDto,
EmailTemplateCategoryRemoveInputWhereDto,
EmailTemplateCategoryRemoveInputDto,
EmailTemplateCategoryRemoveOutputAffectedRowsDto,
EmailTemplateCategoryRemoveOutputDto,

// recover (5)
EmailTemplateCategoryRecoverDto,
EmailTemplateCategoryRecoverInputWhereDto,
EmailTemplateCategoryRecoverInputDto,
EmailTemplateCategoryRecoverOutputAffectedRowsDto,
EmailTemplateCategoryRecoverOutputDto
);



// ████████ initialize UploadCrudEngine ███████████████████████████████████████████
this.initUploadEngine
<
// upload (3)
EmailTemplateCategoryUploadDto,
EmailTemplateCategoryUploadInputDto,
EmailTemplateCategoryUploadOutputDto,

// upload_delete (3)
EmailTemplateCategoryUploadDeleteDto,
EmailTemplateCategoryUploadDeleteInputDto,
EmailTemplateCategoryUploadDeleteOutputDto
>
(
// upload (3)
EmailTemplateCategoryUploadDto,
EmailTemplateCategoryUploadInputDto,
EmailTemplateCategoryUploadOutputDto,

// upload_delete (3)
EmailTemplateCategoryUploadDeleteDto,
EmailTemplateCategoryUploadDeleteInputDto,
EmailTemplateCategoryUploadDeleteOutputDto
);


// ████████ initialize ImportExportCrudEngine █████████████████████████████████████

}

}