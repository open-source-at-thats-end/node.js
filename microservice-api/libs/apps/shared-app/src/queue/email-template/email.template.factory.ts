import { EmailTemplateEntity } from "./entities/email.template.entity";
import { Injectable } from "@nestjs/common";
import { DataSource, Repository } from "typeorm";
import { InjectRepository } from "@nestjs/typeorm";
import { ConfService, CreateCrudEngine, CrudFactory, DataValidationPipe, DeleteCrudEngine, FindCrudEngine, FindOutputPaginationDto, LibraryAppService, LogService, RemoveCrudEngine, UpdateCrudEngine, UploadCrudEngine, UpsertCrudEngine } from "@libs/library-app";
import { SelfGraphqlMicroserviceService } from '@libs/dynamic-app';
import { EmailTemplateCreateDto, EmailTemplateCreateInputDto, EmailTemplateCreateOutputDto, EmailTemplateDeleteDto, EmailTemplateDeleteInputDto, EmailTemplateDeleteInputWhereDto, EmailTemplateDeleteOutputDto, EmailTemplateFindDto, EmailTemplateFindInputDto, EmailTemplateFindInputGroupByDto, EmailTemplateFindInputSortOrderDto, EmailTemplateFindInputWhereDto, EmailTemplateFindOneByIdDto, EmailTemplateFindOneByIdInputDto, EmailTemplateFindOutputDto, EmailTemplateFindOutputRowsDto, EmailTemplateRecoverDto, EmailTemplateRecoverInputDto, EmailTemplateRecoverInputWhereDto, EmailTemplateRecoverOutputDto, EmailTemplateRecoverOutputAffectedRowsDto, EmailTemplateRemoveDto, EmailTemplateRemoveInputDto, EmailTemplateRemoveInputWhereDto, EmailTemplateRemoveOutputDto, EmailTemplateRemoveOutputAffectedRowsDto, EmailTemplateRestoreDto, EmailTemplateRestoreInputDto, EmailTemplateRestoreInputWhereDto, EmailTemplateRestoreOutputDto, EmailTemplateSoftDeleteDto, EmailTemplateSoftDeleteInputDto, EmailTemplateSoftDeleteInputWhereDto, EmailTemplateSoftDeleteOutputDto, EmailTemplateSoftRemoveDto, EmailTemplateSoftRemoveInputDto, EmailTemplateSoftRemoveInputWhereDto, EmailTemplateSoftRemoveOutputDto, EmailTemplateSoftRemoveOutputAffectedRowsDto, EmailTemplateUpdateDto, EmailTemplateUpdateInputDto, EmailTemplateUpdateInputSetsDto, EmailTemplateUpdateInputWhereDto, EmailTemplateUpdateOutputDto, EmailTemplateUpdateOutputAffectedRowsDto, EmailTemplateUploadDeleteDto, EmailTemplateUploadDeleteInputDto, EmailTemplateUploadDeleteOutputDto, EmailTemplateUploadDto, EmailTemplateUploadInputDto, EmailTemplateUploadOutputDto, EmailTemplateUpsertDto, EmailTemplateUpsertInputDto, EmailTemplateUpsertOutputDto } from "./dto/email.template.dto";

@Injectable()
export class EmailTemplateFactory extends CrudFactory<EmailTemplateEntity> {

// ████████ FindCrudEngine ████████████████████████████████████████
public declare readonly findEngine: FindCrudEngine<
// entity (1)
EmailTemplateEntity,

// find (8)
EmailTemplateFindDto,
EmailTemplateFindInputWhereDto,
EmailTemplateFindInputSortOrderDto,
EmailTemplateFindInputGroupByDto,
EmailTemplateFindInputDto,
EmailTemplateFindOutputRowsDto,
FindOutputPaginationDto,
EmailTemplateFindOutputDto,

// find_one_by_id (2)
EmailTemplateFindOneByIdDto,
EmailTemplateFindOneByIdInputDto
>;

// ████████ CreateCrudEngine ████████████████████████████████████████
public declare readonly createEngine: CreateCrudEngine<
// entity (1)
EmailTemplateEntity,

// create (3)
EmailTemplateCreateDto,
EmailTemplateCreateInputDto,
EmailTemplateCreateOutputDto
>;

// ████████ UpdateCrudEngine ████████████████████████████████████████
public declare readonly updateEngine: UpdateCrudEngine<
// entity (1)
EmailTemplateEntity,

// update (6)
EmailTemplateUpdateDto,
EmailTemplateUpdateInputWhereDto,
EmailTemplateUpdateInputSetsDto,
EmailTemplateUpdateInputDto,
EmailTemplateUpdateOutputAffectedRowsDto,
EmailTemplateUpdateOutputDto
>;

// ████████ DeleteCrudEngine ████████████████████████████████████████
public declare readonly deleteEngine: DeleteCrudEngine<
// entity (1)
EmailTemplateEntity,

// soft_delete (4)
EmailTemplateSoftDeleteDto,
EmailTemplateSoftDeleteInputWhereDto,
EmailTemplateSoftDeleteInputDto,
EmailTemplateSoftDeleteOutputDto,

// delete (4)
EmailTemplateDeleteDto,
EmailTemplateDeleteInputWhereDto,
EmailTemplateDeleteInputDto,
EmailTemplateDeleteOutputDto,

// restore (4)
EmailTemplateRestoreDto,
EmailTemplateRestoreInputWhereDto,
EmailTemplateRestoreInputDto,
EmailTemplateRestoreOutputDto
>;

// ████████ UpsertCrudEngine ████████████████████████████████████████
public declare readonly upsertEngine: UpsertCrudEngine<
// entity (1)
EmailTemplateEntity,

// upsert (3)
EmailTemplateUpsertDto,
EmailTemplateUpsertInputDto,
EmailTemplateUpsertOutputDto
>;

// ████████ RemoveCrudEngine ████████████████████████████████████████
public declare readonly removeEngine: RemoveCrudEngine<
// entity (1)
EmailTemplateEntity,

// soft_remove (5)
EmailTemplateSoftRemoveDto,
EmailTemplateSoftRemoveInputWhereDto,
EmailTemplateSoftRemoveInputDto,
EmailTemplateSoftRemoveOutputAffectedRowsDto,
EmailTemplateSoftRemoveOutputDto,

// remove (4)
EmailTemplateRemoveDto,
EmailTemplateRemoveInputWhereDto,
EmailTemplateRemoveInputDto,
EmailTemplateRemoveOutputAffectedRowsDto,
EmailTemplateRemoveOutputDto,

// recover (5)
EmailTemplateRecoverDto,
EmailTemplateRecoverInputWhereDto,
EmailTemplateRecoverInputDto,
EmailTemplateRecoverOutputAffectedRowsDto,
EmailTemplateRecoverOutputDto
>;

// ████████ UploadCrudEngine ████████████████████████████████████████
public declare readonly uploadEngine: UploadCrudEngine<
// entity (1)
EmailTemplateEntity,

// upload (3)
EmailTemplateUploadDto,
EmailTemplateUploadInputDto,
EmailTemplateUploadOutputDto,

// upload_delete (3)
EmailTemplateUploadDeleteDto,
EmailTemplateUploadDeleteInputDto,
EmailTemplateUploadDeleteOutputDto
>;

constructor(
// data source
protected readonly dataSource: DataSource,

@InjectRepository(EmailTemplateEntity)
protected readonly repository: Repository<EmailTemplateEntity>,

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
    EmailTemplateEntity,
);

this.logService.setContext(EmailTemplateFactory.name);

// ████████ initialize FindCrudEngine ██████████████████████████████████████
this.initFindEngine
<
// find (8)
EmailTemplateFindDto,
EmailTemplateFindInputWhereDto,
EmailTemplateFindInputSortOrderDto,
EmailTemplateFindInputGroupByDto,
EmailTemplateFindInputDto,
EmailTemplateFindOutputRowsDto,
FindOutputPaginationDto,
EmailTemplateFindOutputDto,

// find_one_by_id (2)
EmailTemplateFindOneByIdDto,
EmailTemplateFindOneByIdInputDto
>
(
// find (8)
EmailTemplateFindDto,
EmailTemplateFindInputWhereDto,
EmailTemplateFindInputSortOrderDto,
EmailTemplateFindInputGroupByDto,
EmailTemplateFindInputDto,
EmailTemplateFindOutputRowsDto,
FindOutputPaginationDto,
EmailTemplateFindOutputDto,

// find_one_by_id (2)
EmailTemplateFindOneByIdDto,
EmailTemplateFindOneByIdInputDto
);


// ████████ initialize CreateCrudEngine ███████████████████████████████████████
this.initCreateEngine
<
// create (3)
EmailTemplateCreateDto,
EmailTemplateCreateInputDto,
EmailTemplateCreateOutputDto
>
(
// create (3)
EmailTemplateCreateDto,
EmailTemplateCreateInputDto,
EmailTemplateCreateOutputDto
);

// ████████ initialize UpdateCrudEngine ████████████████████████████████████████
this.initUpdateEngine
<
// update (6)
EmailTemplateUpdateDto,
EmailTemplateUpdateInputWhereDto,
EmailTemplateUpdateInputSetsDto,
EmailTemplateUpdateInputDto,
EmailTemplateUpdateOutputAffectedRowsDto,
EmailTemplateUpdateOutputDto
>
(
// update (6)
EmailTemplateUpdateDto,
EmailTemplateUpdateInputWhereDto,
EmailTemplateUpdateInputSetsDto,
EmailTemplateUpdateInputDto,
EmailTemplateUpdateOutputAffectedRowsDto,
EmailTemplateUpdateOutputDto
);


// ████████ initialize DeleteCrudEngine ███████████████████████████████████████████
this.initDeleteEngine
<
// soft_delete (4)
EmailTemplateSoftDeleteDto,
EmailTemplateSoftDeleteInputWhereDto,
EmailTemplateSoftDeleteInputDto,
EmailTemplateSoftDeleteOutputDto,

// delete (4)
EmailTemplateDeleteDto,
EmailTemplateDeleteInputWhereDto,
EmailTemplateDeleteInputDto,
EmailTemplateDeleteOutputDto,

// restore (4)
EmailTemplateRestoreDto,
EmailTemplateRestoreInputWhereDto,
EmailTemplateRestoreInputDto,
EmailTemplateRestoreOutputDto
>
(
// soft_delete (4)
EmailTemplateSoftDeleteDto,
EmailTemplateSoftDeleteInputWhereDto,
EmailTemplateSoftDeleteInputDto,
EmailTemplateSoftDeleteOutputDto,

// delete (4)
EmailTemplateDeleteDto,
EmailTemplateDeleteInputWhereDto,
EmailTemplateDeleteInputDto,
EmailTemplateDeleteOutputDto,

// restore (4)
EmailTemplateRestoreDto,
EmailTemplateRestoreInputWhereDto,
EmailTemplateRestoreInputDto,
EmailTemplateRestoreOutputDto
);



// ████████ initialize UpsertCrudEngine ███████████████████████████████████████████
this.initUpsertEngine
<
// upsert (3)
EmailTemplateUpsertDto,
EmailTemplateUpsertInputDto,
EmailTemplateUpsertOutputDto
>
(
// upsert (3)
EmailTemplateUpsertDto,
EmailTemplateUpsertInputDto,
EmailTemplateUpsertOutputDto
);




// ████████ initialize RemoveCrudEngine ███████████████████████████████████████████
this.initRemoveEngine
<
// soft_remove (5)
EmailTemplateSoftRemoveDto,
EmailTemplateSoftRemoveInputWhereDto,
EmailTemplateSoftRemoveInputDto,
EmailTemplateSoftRemoveOutputAffectedRowsDto,
EmailTemplateSoftRemoveOutputDto,

// remove (4)
EmailTemplateRemoveDto,
EmailTemplateRemoveInputWhereDto,
EmailTemplateRemoveInputDto,
EmailTemplateRemoveOutputAffectedRowsDto,
EmailTemplateRemoveOutputDto,

// recover (5)
EmailTemplateRecoverDto,
EmailTemplateRecoverInputWhereDto,
EmailTemplateRecoverInputDto,
EmailTemplateRecoverOutputAffectedRowsDto,
EmailTemplateRecoverOutputDto
>
(
// soft_remove (5)
EmailTemplateSoftRemoveDto,
EmailTemplateSoftRemoveInputWhereDto,
EmailTemplateSoftRemoveInputDto,
EmailTemplateSoftRemoveOutputAffectedRowsDto,
EmailTemplateSoftRemoveOutputDto,

// remove (4)
EmailTemplateRemoveDto,
EmailTemplateRemoveInputWhereDto,
EmailTemplateRemoveInputDto,
EmailTemplateRemoveOutputAffectedRowsDto,
EmailTemplateRemoveOutputDto,

// recover (5)
EmailTemplateRecoverDto,
EmailTemplateRecoverInputWhereDto,
EmailTemplateRecoverInputDto,
EmailTemplateRecoverOutputAffectedRowsDto,
EmailTemplateRecoverOutputDto
);



// ████████ initialize UploadCrudEngine ███████████████████████████████████████████
this.initUploadEngine
<
// upload (3)
EmailTemplateUploadDto,
EmailTemplateUploadInputDto,
EmailTemplateUploadOutputDto,

// upload_delete (3)
EmailTemplateUploadDeleteDto,
EmailTemplateUploadDeleteInputDto,
EmailTemplateUploadDeleteOutputDto
>
(
// upload (3)
EmailTemplateUploadDto,
EmailTemplateUploadInputDto,
EmailTemplateUploadOutputDto,

// upload_delete (3)
EmailTemplateUploadDeleteDto,
EmailTemplateUploadDeleteInputDto,
EmailTemplateUploadDeleteOutputDto
);


// ████████ initialize ImportExportCrudEngine █████████████████████████████████████

}

}