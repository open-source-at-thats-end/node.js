import { AcademicFieldEntity } from "./entities/field.entity";
import { Injectable } from "@nestjs/common";
import { DataSource, Repository } from "typeorm";
import { InjectRepository } from "@nestjs/typeorm";
import { ConfService, CreateCrudEngine, CrudFactory, DataValidationPipe, DeleteCrudEngine, FindCrudEngine, FindOutputPaginationDto, LibraryAppService, LogService, RemoveCrudEngine, UpdateCrudEngine, UploadCrudEngine, UpsertCrudEngine } from "@libs/library-app";
import { SelfGraphqlMicroserviceService } from "@libs/dynamic-app";
import { AcademicFieldCreateDto, AcademicFieldCreateInputDto, AcademicFieldCreateOutputDto, AcademicFieldDeleteDto, AcademicFieldDeleteInputDto, AcademicFieldDeleteInputWhereDto, AcademicFieldDeleteOutputDto, AcademicFieldFindDto, AcademicFieldFindInputDto, AcademicFieldFindInputGroupByDto, AcademicFieldFindInputSortOrderDto, AcademicFieldFindInputWhereDto, AcademicFieldFindOneByIdDto, AcademicFieldFindOneByIdInputDto, AcademicFieldFindOutputDto, AcademicFieldFindOutputRowsDto, AcademicFieldRecoverDto, AcademicFieldRecoverInputDto, AcademicFieldRecoverInputWhereDto, AcademicFieldRecoverOutputDto, AcademicFieldRecoverOutputAffectedRowsDto, AcademicFieldRemoveDto, AcademicFieldRemoveInputDto, AcademicFieldRemoveInputWhereDto, AcademicFieldRemoveOutputDto, AcademicFieldRemoveOutputAffectedRowsDto, AcademicFieldRestoreDto, AcademicFieldRestoreInputDto, AcademicFieldRestoreInputWhereDto, AcademicFieldRestoreOutputDto, AcademicFieldSoftDeleteDto, AcademicFieldSoftDeleteInputDto, AcademicFieldSoftDeleteInputWhereDto, AcademicFieldSoftDeleteOutputDto, AcademicFieldSoftRemoveDto, AcademicFieldSoftRemoveInputDto, AcademicFieldSoftRemoveInputWhereDto, AcademicFieldSoftRemoveOutputDto, AcademicFieldSoftRemoveOutputAffectedRowsDto, AcademicFieldUpdateDto, AcademicFieldUpdateInputDto, AcademicFieldUpdateInputSetsDto, AcademicFieldUpdateInputWhereDto, AcademicFieldUpdateOutputDto, AcademicFieldUpdateOutputAffectedRowsDto, AcademicFieldUploadDeleteDto, AcademicFieldUploadDeleteInputDto, AcademicFieldUploadDeleteOutputDto, AcademicFieldUploadDto, AcademicFieldUploadInputDto, AcademicFieldUploadOutputDto, AcademicFieldUpsertDto, AcademicFieldUpsertInputDto, AcademicFieldUpsertOutputDto } from "./dto/field.dto";

@Injectable()
export class AcademicFieldFactory extends CrudFactory<AcademicFieldEntity> {

// ████████ FindCrudEngine ████████████████████████████████████████
public declare readonly findEngine: FindCrudEngine<
// entity (1)
AcademicFieldEntity,

// find (8)
AcademicFieldFindDto,
AcademicFieldFindInputWhereDto,
AcademicFieldFindInputSortOrderDto,
AcademicFieldFindInputGroupByDto,
AcademicFieldFindInputDto,
AcademicFieldFindOutputRowsDto,
FindOutputPaginationDto,
AcademicFieldFindOutputDto,

// find_one_by_id (2)
AcademicFieldFindOneByIdDto,
AcademicFieldFindOneByIdInputDto
>;

// ████████ CreateCrudEngine ████████████████████████████████████████
public declare readonly createEngine: CreateCrudEngine<
// entity (1)
AcademicFieldEntity,

// create (3)
AcademicFieldCreateDto,
AcademicFieldCreateInputDto,
AcademicFieldCreateOutputDto
>;

// ████████ UpdateCrudEngine ████████████████████████████████████████
public declare readonly updateEngine: UpdateCrudEngine<
// entity (1)
AcademicFieldEntity,

// update (6)
AcademicFieldUpdateDto,
AcademicFieldUpdateInputWhereDto,
AcademicFieldUpdateInputSetsDto,
AcademicFieldUpdateInputDto,
AcademicFieldUpdateOutputAffectedRowsDto,
AcademicFieldUpdateOutputDto
>;

// ████████ DeleteCrudEngine ████████████████████████████████████████
public declare readonly deleteEngine: DeleteCrudEngine<
// entity (1)
AcademicFieldEntity,

// soft_delete (4)
AcademicFieldSoftDeleteDto,
AcademicFieldSoftDeleteInputWhereDto,
AcademicFieldSoftDeleteInputDto,
AcademicFieldSoftDeleteOutputDto,

// delete (4)
AcademicFieldDeleteDto,
AcademicFieldDeleteInputWhereDto,
AcademicFieldDeleteInputDto,
AcademicFieldDeleteOutputDto,

// restore (4)
AcademicFieldRestoreDto,
AcademicFieldRestoreInputWhereDto,
AcademicFieldRestoreInputDto,
AcademicFieldRestoreOutputDto
>;

// ████████ UpsertCrudEngine ████████████████████████████████████████
public declare readonly upsertEngine: UpsertCrudEngine<
// entity (1)
AcademicFieldEntity,

// upsert (3)
AcademicFieldUpsertDto,
AcademicFieldUpsertInputDto,
AcademicFieldUpsertOutputDto
>;

// ████████ RemoveCrudEngine ████████████████████████████████████████
public declare readonly removeEngine: RemoveCrudEngine<
// entity (1)
AcademicFieldEntity,

// soft_remove (5)
AcademicFieldSoftRemoveDto,
AcademicFieldSoftRemoveInputWhereDto,
AcademicFieldSoftRemoveInputDto,
AcademicFieldSoftRemoveOutputAffectedRowsDto,
AcademicFieldSoftRemoveOutputDto,

// remove (4)
AcademicFieldRemoveDto,
AcademicFieldRemoveInputWhereDto,
AcademicFieldRemoveInputDto,
AcademicFieldRemoveOutputAffectedRowsDto,
AcademicFieldRemoveOutputDto,

// recover (5)
AcademicFieldRecoverDto,
AcademicFieldRecoverInputWhereDto,
AcademicFieldRecoverInputDto,
AcademicFieldRecoverOutputAffectedRowsDto,
AcademicFieldRecoverOutputDto
>;

// ████████ UploadCrudEngine ████████████████████████████████████████
public declare readonly uploadEngine: UploadCrudEngine<
// entity (1)
AcademicFieldEntity,

// upload (3)
AcademicFieldUploadDto,
AcademicFieldUploadInputDto,
AcademicFieldUploadOutputDto,

// upload_delete (3)
AcademicFieldUploadDeleteDto,
AcademicFieldUploadDeleteInputDto,
AcademicFieldUploadDeleteOutputDto
>;

constructor(
// data source
protected readonly dataSource: DataSource,

@InjectRepository(AcademicFieldEntity)
protected readonly repository: Repository<AcademicFieldEntity>,

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
    AcademicFieldEntity,
);

this.logService.setContext(AcademicFieldFactory.name);

// ████████ initialize FindCrudEngine ██████████████████████████████████████
this.initFindEngine
<
// find (8)
AcademicFieldFindDto,
AcademicFieldFindInputWhereDto,
AcademicFieldFindInputSortOrderDto,
AcademicFieldFindInputGroupByDto,
AcademicFieldFindInputDto,
AcademicFieldFindOutputRowsDto,
FindOutputPaginationDto,
AcademicFieldFindOutputDto,

// find_one_by_id (2)
AcademicFieldFindOneByIdDto,
AcademicFieldFindOneByIdInputDto
>
(
// find (8)
AcademicFieldFindDto,
AcademicFieldFindInputWhereDto,
AcademicFieldFindInputSortOrderDto,
AcademicFieldFindInputGroupByDto,
AcademicFieldFindInputDto,
AcademicFieldFindOutputRowsDto,
FindOutputPaginationDto,
AcademicFieldFindOutputDto,

// find_one_by_id (2)
AcademicFieldFindOneByIdDto,
AcademicFieldFindOneByIdInputDto
);


// ████████ initialize CreateCrudEngine ███████████████████████████████████████
this.initCreateEngine
<
// create (3)
AcademicFieldCreateDto,
AcademicFieldCreateInputDto,
AcademicFieldCreateOutputDto
>
(
// create (3)
AcademicFieldCreateDto,
AcademicFieldCreateInputDto,
AcademicFieldCreateOutputDto
);

// ████████ initialize UpdateCrudEngine ████████████████████████████████████████
this.initUpdateEngine
<
// update (6)
AcademicFieldUpdateDto,
AcademicFieldUpdateInputWhereDto,
AcademicFieldUpdateInputSetsDto,
AcademicFieldUpdateInputDto,
AcademicFieldUpdateOutputAffectedRowsDto,
AcademicFieldUpdateOutputDto
>
(
// update (6)
AcademicFieldUpdateDto,
AcademicFieldUpdateInputWhereDto,
AcademicFieldUpdateInputSetsDto,
AcademicFieldUpdateInputDto,
AcademicFieldUpdateOutputAffectedRowsDto,
AcademicFieldUpdateOutputDto
);


// ████████ initialize DeleteCrudEngine ███████████████████████████████████████████
this.initDeleteEngine
<
// soft_delete (4)
AcademicFieldSoftDeleteDto,
AcademicFieldSoftDeleteInputWhereDto,
AcademicFieldSoftDeleteInputDto,
AcademicFieldSoftDeleteOutputDto,

// delete (4)
AcademicFieldDeleteDto,
AcademicFieldDeleteInputWhereDto,
AcademicFieldDeleteInputDto,
AcademicFieldDeleteOutputDto,

// restore (4)
AcademicFieldRestoreDto,
AcademicFieldRestoreInputWhereDto,
AcademicFieldRestoreInputDto,
AcademicFieldRestoreOutputDto
>
(
// soft_delete (4)
AcademicFieldSoftDeleteDto,
AcademicFieldSoftDeleteInputWhereDto,
AcademicFieldSoftDeleteInputDto,
AcademicFieldSoftDeleteOutputDto,

// delete (4)
AcademicFieldDeleteDto,
AcademicFieldDeleteInputWhereDto,
AcademicFieldDeleteInputDto,
AcademicFieldDeleteOutputDto,

// restore (4)
AcademicFieldRestoreDto,
AcademicFieldRestoreInputWhereDto,
AcademicFieldRestoreInputDto,
AcademicFieldRestoreOutputDto
);



// ████████ initialize UpsertCrudEngine ███████████████████████████████████████████
this.initUpsertEngine
<
// upsert (3)
AcademicFieldUpsertDto,
AcademicFieldUpsertInputDto,
AcademicFieldUpsertOutputDto
>
(
// upsert (3)
AcademicFieldUpsertDto,
AcademicFieldUpsertInputDto,
AcademicFieldUpsertOutputDto
);




// ████████ initialize RemoveCrudEngine ███████████████████████████████████████████
this.initRemoveEngine
<
// soft_remove (5)
AcademicFieldSoftRemoveDto,
AcademicFieldSoftRemoveInputWhereDto,
AcademicFieldSoftRemoveInputDto,
AcademicFieldSoftRemoveOutputAffectedRowsDto,
AcademicFieldSoftRemoveOutputDto,

// remove (4)
AcademicFieldRemoveDto,
AcademicFieldRemoveInputWhereDto,
AcademicFieldRemoveInputDto,
AcademicFieldRemoveOutputAffectedRowsDto,
AcademicFieldRemoveOutputDto,

// recover (5)
AcademicFieldRecoverDto,
AcademicFieldRecoverInputWhereDto,
AcademicFieldRecoverInputDto,
AcademicFieldRecoverOutputAffectedRowsDto,
AcademicFieldRecoverOutputDto
>
(
// soft_remove (5)
AcademicFieldSoftRemoveDto,
AcademicFieldSoftRemoveInputWhereDto,
AcademicFieldSoftRemoveInputDto,
AcademicFieldSoftRemoveOutputAffectedRowsDto,
AcademicFieldSoftRemoveOutputDto,

// remove (4)
AcademicFieldRemoveDto,
AcademicFieldRemoveInputWhereDto,
AcademicFieldRemoveInputDto,
AcademicFieldRemoveOutputAffectedRowsDto,
AcademicFieldRemoveOutputDto,

// recover (5)
AcademicFieldRecoverDto,
AcademicFieldRecoverInputWhereDto,
AcademicFieldRecoverInputDto,
AcademicFieldRecoverOutputAffectedRowsDto,
AcademicFieldRecoverOutputDto
);



// ████████ initialize UploadCrudEngine ███████████████████████████████████████████
this.initUploadEngine
<
// upload (3)
AcademicFieldUploadDto,
AcademicFieldUploadInputDto,
AcademicFieldUploadOutputDto,

// upload_delete (3)
AcademicFieldUploadDeleteDto,
AcademicFieldUploadDeleteInputDto,
AcademicFieldUploadDeleteOutputDto
>
(
// upload (3)
AcademicFieldUploadDto,
AcademicFieldUploadInputDto,
AcademicFieldUploadOutputDto,

// upload_delete (3)
AcademicFieldUploadDeleteDto,
AcademicFieldUploadDeleteInputDto,
AcademicFieldUploadDeleteOutputDto
);


// ████████ initialize ImportExportCrudEngine █████████████████████████████████████

}

}