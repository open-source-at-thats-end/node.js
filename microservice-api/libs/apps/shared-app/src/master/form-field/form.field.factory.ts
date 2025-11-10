import { FormFieldEntity } from "./entities/form.field.entity";
import { Injectable } from "@nestjs/common";
import { DataSource, Repository } from "typeorm";
import { InjectRepository } from "@nestjs/typeorm";
import { ConfService, CreateCrudEngine, CrudFactory, DataValidationPipe, DeleteCrudEngine, FindCrudEngine, FindOutputPaginationDto, LibraryAppService, LogService, RemoveCrudEngine, UpdateCrudEngine, UploadCrudEngine, UpsertCrudEngine } from "@libs/library-app";
import { SelfGraphqlMicroserviceService } from "@libs/dynamic-app";
import { FormFieldCreateDto, FormFieldCreateInputDto, FormFieldCreateOutputDto, FormFieldDeleteDto, FormFieldDeleteInputDto, FormFieldDeleteInputWhereDto, FormFieldDeleteOutputDto, FormFieldFindDto, FormFieldFindInputDto, FormFieldFindInputGroupByDto, FormFieldFindInputSortOrderDto, FormFieldFindInputWhereDto, FormFieldFindOneByIdDto, FormFieldFindOneByIdInputDto, FormFieldFindOutputDto, FormFieldFindOutputRowsDto, FormFieldRecoverDto, FormFieldRecoverInputDto, FormFieldRecoverInputWhereDto, FormFieldRecoverOutputDto, FormFieldRecoverOutputAffectedRowsDto, FormFieldRemoveDto, FormFieldRemoveInputDto, FormFieldRemoveInputWhereDto, FormFieldRemoveOutputDto, FormFieldRemoveOutputAffectedRowsDto, FormFieldRestoreDto, FormFieldRestoreInputDto, FormFieldRestoreInputWhereDto, FormFieldRestoreOutputDto, FormFieldSoftDeleteDto, FormFieldSoftDeleteInputDto, FormFieldSoftDeleteInputWhereDto, FormFieldSoftDeleteOutputDto, FormFieldSoftRemoveDto, FormFieldSoftRemoveInputDto, FormFieldSoftRemoveInputWhereDto, FormFieldSoftRemoveOutputDto, FormFieldSoftRemoveOutputAffectedRowsDto, FormFieldUpdateDto, FormFieldUpdateInputDto, FormFieldUpdateInputSetsDto, FormFieldUpdateInputWhereDto, FormFieldUpdateOutputDto, FormFieldUpdateOutputAffectedRowsDto, FormFieldUploadDeleteDto, FormFieldUploadDeleteInputDto, FormFieldUploadDeleteOutputDto, FormFieldUploadDto, FormFieldUploadInputDto, FormFieldUploadOutputDto, FormFieldUpsertDto, FormFieldUpsertInputDto, FormFieldUpsertOutputDto } from "./dto/form.field.dto";

@Injectable()
export class FormFieldFactory extends CrudFactory<FormFieldEntity> {

// ████████ FindCrudEngine ████████████████████████████████████████
public declare readonly findEngine: FindCrudEngine<
// entity (1)
FormFieldEntity,

// find (8)
FormFieldFindDto,
FormFieldFindInputWhereDto,
FormFieldFindInputSortOrderDto,
FormFieldFindInputGroupByDto,
FormFieldFindInputDto,
FormFieldFindOutputRowsDto,
FindOutputPaginationDto,
FormFieldFindOutputDto,

// find_one_by_id (2)
FormFieldFindOneByIdDto,
FormFieldFindOneByIdInputDto
>;

// ████████ CreateCrudEngine ████████████████████████████████████████
public declare readonly createEngine: CreateCrudEngine<
// entity (1)
FormFieldEntity,

// create (3)
FormFieldCreateDto,
FormFieldCreateInputDto,
FormFieldCreateOutputDto
>;

// ████████ UpdateCrudEngine ████████████████████████████████████████
public declare readonly updateEngine: UpdateCrudEngine<
// entity (1)
FormFieldEntity,

// update (6)
FormFieldUpdateDto,
FormFieldUpdateInputWhereDto,
FormFieldUpdateInputSetsDto,
FormFieldUpdateInputDto,
FormFieldUpdateOutputAffectedRowsDto,
FormFieldUpdateOutputDto
>;

// ████████ DeleteCrudEngine ████████████████████████████████████████
public declare readonly deleteEngine: DeleteCrudEngine<
// entity (1)
FormFieldEntity,

// soft_delete (4)
FormFieldSoftDeleteDto,
FormFieldSoftDeleteInputWhereDto,
FormFieldSoftDeleteInputDto,
FormFieldSoftDeleteOutputDto,

// delete (4)
FormFieldDeleteDto,
FormFieldDeleteInputWhereDto,
FormFieldDeleteInputDto,
FormFieldDeleteOutputDto,

// restore (4)
FormFieldRestoreDto,
FormFieldRestoreInputWhereDto,
FormFieldRestoreInputDto,
FormFieldRestoreOutputDto
>;

// ████████ UpsertCrudEngine ████████████████████████████████████████
public declare readonly upsertEngine: UpsertCrudEngine<
// entity (1)
FormFieldEntity,

// upsert (3)
FormFieldUpsertDto,
FormFieldUpsertInputDto,
FormFieldUpsertOutputDto
>;

// ████████ RemoveCrudEngine ████████████████████████████████████████
public declare readonly removeEngine: RemoveCrudEngine<
// entity (1)
FormFieldEntity,

// soft_remove (5)
FormFieldSoftRemoveDto,
FormFieldSoftRemoveInputWhereDto,
FormFieldSoftRemoveInputDto,
FormFieldSoftRemoveOutputAffectedRowsDto,
FormFieldSoftRemoveOutputDto,

// remove (4)
FormFieldRemoveDto,
FormFieldRemoveInputWhereDto,
FormFieldRemoveInputDto,
FormFieldRemoveOutputAffectedRowsDto,
FormFieldRemoveOutputDto,

// recover (5)
FormFieldRecoverDto,
FormFieldRecoverInputWhereDto,
FormFieldRecoverInputDto,
FormFieldRecoverOutputAffectedRowsDto,
FormFieldRecoverOutputDto
>;

// ████████ UploadCrudEngine ████████████████████████████████████████
public declare readonly uploadEngine: UploadCrudEngine<
// entity (1)
FormFieldEntity,

// upload (3)
FormFieldUploadDto,
FormFieldUploadInputDto,
FormFieldUploadOutputDto,

// upload_delete (3)
FormFieldUploadDeleteDto,
FormFieldUploadDeleteInputDto,
FormFieldUploadDeleteOutputDto
>;

constructor(
// data source
protected readonly dataSource: DataSource,

@InjectRepository(FormFieldEntity)
protected readonly repository: Repository<FormFieldEntity>,

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
    FormFieldEntity,
);

this.logService.setContext(FormFieldFactory.name);

// ████████ initialize FindCrudEngine ██████████████████████████████████████
this.initFindEngine
<
// find (8)
FormFieldFindDto,
FormFieldFindInputWhereDto,
FormFieldFindInputSortOrderDto,
FormFieldFindInputGroupByDto,
FormFieldFindInputDto,
FormFieldFindOutputRowsDto,
FindOutputPaginationDto,
FormFieldFindOutputDto,

// find_one_by_id (2)
FormFieldFindOneByIdDto,
FormFieldFindOneByIdInputDto
>
(
// find (8)
FormFieldFindDto,
FormFieldFindInputWhereDto,
FormFieldFindInputSortOrderDto,
FormFieldFindInputGroupByDto,
FormFieldFindInputDto,
FormFieldFindOutputRowsDto,
FindOutputPaginationDto,
FormFieldFindOutputDto,

// find_one_by_id (2)
FormFieldFindOneByIdDto,
FormFieldFindOneByIdInputDto
);


// ████████ initialize CreateCrudEngine ███████████████████████████████████████
this.initCreateEngine
<
// create (3)
FormFieldCreateDto,
FormFieldCreateInputDto,
FormFieldCreateOutputDto
>
(
// create (3)
FormFieldCreateDto,
FormFieldCreateInputDto,
FormFieldCreateOutputDto
);

// ████████ initialize UpdateCrudEngine ████████████████████████████████████████
this.initUpdateEngine
<
// update (6)
FormFieldUpdateDto,
FormFieldUpdateInputWhereDto,
FormFieldUpdateInputSetsDto,
FormFieldUpdateInputDto,
FormFieldUpdateOutputAffectedRowsDto,
FormFieldUpdateOutputDto
>
(
// update (6)
FormFieldUpdateDto,
FormFieldUpdateInputWhereDto,
FormFieldUpdateInputSetsDto,
FormFieldUpdateInputDto,
FormFieldUpdateOutputAffectedRowsDto,
FormFieldUpdateOutputDto
);


// ████████ initialize DeleteCrudEngine ███████████████████████████████████████████
this.initDeleteEngine
<
// soft_delete (4)
FormFieldSoftDeleteDto,
FormFieldSoftDeleteInputWhereDto,
FormFieldSoftDeleteInputDto,
FormFieldSoftDeleteOutputDto,

// delete (4)
FormFieldDeleteDto,
FormFieldDeleteInputWhereDto,
FormFieldDeleteInputDto,
FormFieldDeleteOutputDto,

// restore (4)
FormFieldRestoreDto,
FormFieldRestoreInputWhereDto,
FormFieldRestoreInputDto,
FormFieldRestoreOutputDto
>
(
// soft_delete (4)
FormFieldSoftDeleteDto,
FormFieldSoftDeleteInputWhereDto,
FormFieldSoftDeleteInputDto,
FormFieldSoftDeleteOutputDto,

// delete (4)
FormFieldDeleteDto,
FormFieldDeleteInputWhereDto,
FormFieldDeleteInputDto,
FormFieldDeleteOutputDto,

// restore (4)
FormFieldRestoreDto,
FormFieldRestoreInputWhereDto,
FormFieldRestoreInputDto,
FormFieldRestoreOutputDto
);



// ████████ initialize UpsertCrudEngine ███████████████████████████████████████████
this.initUpsertEngine
<
// upsert (3)
FormFieldUpsertDto,
FormFieldUpsertInputDto,
FormFieldUpsertOutputDto
>
(
// upsert (3)
FormFieldUpsertDto,
FormFieldUpsertInputDto,
FormFieldUpsertOutputDto
);




// ████████ initialize RemoveCrudEngine ███████████████████████████████████████████
this.initRemoveEngine
<
// soft_remove (5)
FormFieldSoftRemoveDto,
FormFieldSoftRemoveInputWhereDto,
FormFieldSoftRemoveInputDto,
FormFieldSoftRemoveOutputAffectedRowsDto,
FormFieldSoftRemoveOutputDto,

// remove (4)
FormFieldRemoveDto,
FormFieldRemoveInputWhereDto,
FormFieldRemoveInputDto,
FormFieldRemoveOutputAffectedRowsDto,
FormFieldRemoveOutputDto,

// recover (5)
FormFieldRecoverDto,
FormFieldRecoverInputWhereDto,
FormFieldRecoverInputDto,
FormFieldRecoverOutputAffectedRowsDto,
FormFieldRecoverOutputDto
>
(
// soft_remove (5)
FormFieldSoftRemoveDto,
FormFieldSoftRemoveInputWhereDto,
FormFieldSoftRemoveInputDto,
FormFieldSoftRemoveOutputAffectedRowsDto,
FormFieldSoftRemoveOutputDto,

// remove (4)
FormFieldRemoveDto,
FormFieldRemoveInputWhereDto,
FormFieldRemoveInputDto,
FormFieldRemoveOutputAffectedRowsDto,
FormFieldRemoveOutputDto,

// recover (5)
FormFieldRecoverDto,
FormFieldRecoverInputWhereDto,
FormFieldRecoverInputDto,
FormFieldRecoverOutputAffectedRowsDto,
FormFieldRecoverOutputDto
);



// ████████ initialize UploadCrudEngine ███████████████████████████████████████████
this.initUploadEngine
<
// upload (3)
FormFieldUploadDto,
FormFieldUploadInputDto,
FormFieldUploadOutputDto,

// upload_delete (3)
FormFieldUploadDeleteDto,
FormFieldUploadDeleteInputDto,
FormFieldUploadDeleteOutputDto
>
(
// upload (3)
FormFieldUploadDto,
FormFieldUploadInputDto,
FormFieldUploadOutputDto,

// upload_delete (3)
FormFieldUploadDeleteDto,
FormFieldUploadDeleteInputDto,
FormFieldUploadDeleteOutputDto
);


// ████████ initialize ImportExportCrudEngine █████████████████████████████████████

}

}