import { QueueTypeEntity } from "./entities/type.entity";
import { Injectable } from "@nestjs/common";
import { DataSource, Repository } from "typeorm";
import { InjectRepository } from "@nestjs/typeorm";
import { ConfService, CreateCrudEngine, CrudFactory, DataValidationPipe, DeleteCrudEngine, FindCrudEngine, FindOutputPaginationDto, LibraryAppService, LogService, RemoveCrudEngine, UpdateCrudEngine, UploadCrudEngine, UpsertCrudEngine } from "@libs/library-app";
import { SelfGraphqlMicroserviceService } from "@libs/dynamic-app";
import { QueueTypeCreateDto, QueueTypeCreateInputDto, QueueTypeCreateOutputDto, QueueTypeDeleteDto, QueueTypeDeleteInputDto, QueueTypeDeleteInputWhereDto, QueueTypeDeleteOutputDto, QueueTypeFindDto, QueueTypeFindInputDto, QueueTypeFindInputGroupByDto, QueueTypeFindInputSortOrderDto, QueueTypeFindInputWhereDto, QueueTypeFindOneByIdDto, QueueTypeFindOneByIdInputDto, QueueTypeFindOutputDto, QueueTypeFindOutputRowsDto, QueueTypeRecoverDto, QueueTypeRecoverInputDto, QueueTypeRecoverInputWhereDto, QueueTypeRecoverOutputDto, QueueTypeRecoverOutputAffectedRowsDto, QueueTypeRemoveDto, QueueTypeRemoveInputDto, QueueTypeRemoveInputWhereDto, QueueTypeRemoveOutputDto, QueueTypeRemoveOutputAffectedRowsDto, QueueTypeRestoreDto, QueueTypeRestoreInputDto, QueueTypeRestoreInputWhereDto, QueueTypeRestoreOutputDto, QueueTypeSoftDeleteDto, QueueTypeSoftDeleteInputDto, QueueTypeSoftDeleteInputWhereDto, QueueTypeSoftDeleteOutputDto, QueueTypeSoftRemoveDto, QueueTypeSoftRemoveInputDto, QueueTypeSoftRemoveInputWhereDto, QueueTypeSoftRemoveOutputDto, QueueTypeSoftRemoveOutputAffectedRowsDto, QueueTypeUpdateDto, QueueTypeUpdateInputDto, QueueTypeUpdateInputSetsDto, QueueTypeUpdateInputWhereDto, QueueTypeUpdateOutputDto, QueueTypeUpdateOutputAffectedRowsDto, QueueTypeUploadDeleteDto, QueueTypeUploadDeleteInputDto, QueueTypeUploadDeleteOutputDto, QueueTypeUploadDto, QueueTypeUploadInputDto, QueueTypeUploadOutputDto, QueueTypeUpsertDto, QueueTypeUpsertInputDto, QueueTypeUpsertOutputDto } from "./dto/type.dto";

@Injectable()
export class QueueTypeFactory extends CrudFactory<QueueTypeEntity> {

// ████████ FindCrudEngine ████████████████████████████████████████
public declare readonly findEngine: FindCrudEngine<
// entity (1)
QueueTypeEntity,

// find (8)
QueueTypeFindDto,
QueueTypeFindInputWhereDto,
QueueTypeFindInputSortOrderDto,
QueueTypeFindInputGroupByDto,
QueueTypeFindInputDto,
QueueTypeFindOutputRowsDto,
FindOutputPaginationDto,
QueueTypeFindOutputDto,

// find_one_by_id (2)
QueueTypeFindOneByIdDto,
QueueTypeFindOneByIdInputDto
>;

// ████████ CreateCrudEngine ████████████████████████████████████████
public declare readonly createEngine: CreateCrudEngine<
// entity (1)
QueueTypeEntity,

// create (3)
QueueTypeCreateDto,
QueueTypeCreateInputDto,
QueueTypeCreateOutputDto
>;

// ████████ UpdateCrudEngine ████████████████████████████████████████
public declare readonly updateEngine: UpdateCrudEngine<
// entity (1)
QueueTypeEntity,

// update (6)
QueueTypeUpdateDto,
QueueTypeUpdateInputWhereDto,
QueueTypeUpdateInputSetsDto,
QueueTypeUpdateInputDto,
QueueTypeUpdateOutputAffectedRowsDto,
QueueTypeUpdateOutputDto
>;

// ████████ DeleteCrudEngine ████████████████████████████████████████
public declare readonly deleteEngine: DeleteCrudEngine<
// entity (1)
QueueTypeEntity,

// soft_delete (4)
QueueTypeSoftDeleteDto,
QueueTypeSoftDeleteInputWhereDto,
QueueTypeSoftDeleteInputDto,
QueueTypeSoftDeleteOutputDto,

// delete (4)
QueueTypeDeleteDto,
QueueTypeDeleteInputWhereDto,
QueueTypeDeleteInputDto,
QueueTypeDeleteOutputDto,

// restore (4)
QueueTypeRestoreDto,
QueueTypeRestoreInputWhereDto,
QueueTypeRestoreInputDto,
QueueTypeRestoreOutputDto
>;

// ████████ UpsertCrudEngine ████████████████████████████████████████
public declare readonly upsertEngine: UpsertCrudEngine<
// entity (1)
QueueTypeEntity,

// upsert (3)
QueueTypeUpsertDto,
QueueTypeUpsertInputDto,
QueueTypeUpsertOutputDto
>;

// ████████ RemoveCrudEngine ████████████████████████████████████████
public declare readonly removeEngine: RemoveCrudEngine<
// entity (1)
QueueTypeEntity,

// soft_remove (5)
QueueTypeSoftRemoveDto,
QueueTypeSoftRemoveInputWhereDto,
QueueTypeSoftRemoveInputDto,
QueueTypeSoftRemoveOutputAffectedRowsDto,
QueueTypeSoftRemoveOutputDto,

// remove (4)
QueueTypeRemoveDto,
QueueTypeRemoveInputWhereDto,
QueueTypeRemoveInputDto,
QueueTypeRemoveOutputAffectedRowsDto,
QueueTypeRemoveOutputDto,

// recover (5)
QueueTypeRecoverDto,
QueueTypeRecoverInputWhereDto,
QueueTypeRecoverInputDto,
QueueTypeRecoverOutputAffectedRowsDto,
QueueTypeRecoverOutputDto
>;

// ████████ UploadCrudEngine ████████████████████████████████████████
public declare readonly uploadEngine: UploadCrudEngine<
// entity (1)
QueueTypeEntity,

// upload (3)
QueueTypeUploadDto,
QueueTypeUploadInputDto,
QueueTypeUploadOutputDto,

// upload_delete (3)
QueueTypeUploadDeleteDto,
QueueTypeUploadDeleteInputDto,
QueueTypeUploadDeleteOutputDto
>;

constructor(
// data source
protected readonly dataSource: DataSource,

@InjectRepository(QueueTypeEntity)
protected readonly repository: Repository<QueueTypeEntity>,

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
    QueueTypeEntity,
);

this.logService.setContext(QueueTypeFactory.name);

// ████████ initialize FindCrudEngine ██████████████████████████████████████
this.initFindEngine
<
// find (8)
QueueTypeFindDto,
QueueTypeFindInputWhereDto,
QueueTypeFindInputSortOrderDto,
QueueTypeFindInputGroupByDto,
QueueTypeFindInputDto,
QueueTypeFindOutputRowsDto,
FindOutputPaginationDto,
QueueTypeFindOutputDto,

// find_one_by_id (2)
QueueTypeFindOneByIdDto,
QueueTypeFindOneByIdInputDto
>
(
// find (8)
QueueTypeFindDto,
QueueTypeFindInputWhereDto,
QueueTypeFindInputSortOrderDto,
QueueTypeFindInputGroupByDto,
QueueTypeFindInputDto,
QueueTypeFindOutputRowsDto,
FindOutputPaginationDto,
QueueTypeFindOutputDto,

// find_one_by_id (2)
QueueTypeFindOneByIdDto,
QueueTypeFindOneByIdInputDto
);


// ████████ initialize CreateCrudEngine ███████████████████████████████████████
this.initCreateEngine
<
// create (3)
QueueTypeCreateDto,
QueueTypeCreateInputDto,
QueueTypeCreateOutputDto
>
(
// create (3)
QueueTypeCreateDto,
QueueTypeCreateInputDto,
QueueTypeCreateOutputDto
);

// ████████ initialize UpdateCrudEngine ████████████████████████████████████████
this.initUpdateEngine
<
// update (6)
QueueTypeUpdateDto,
QueueTypeUpdateInputWhereDto,
QueueTypeUpdateInputSetsDto,
QueueTypeUpdateInputDto,
QueueTypeUpdateOutputAffectedRowsDto,
QueueTypeUpdateOutputDto
>
(
// update (6)
QueueTypeUpdateDto,
QueueTypeUpdateInputWhereDto,
QueueTypeUpdateInputSetsDto,
QueueTypeUpdateInputDto,
QueueTypeUpdateOutputAffectedRowsDto,
QueueTypeUpdateOutputDto
);


// ████████ initialize DeleteCrudEngine ███████████████████████████████████████████
this.initDeleteEngine
<
// soft_delete (4)
QueueTypeSoftDeleteDto,
QueueTypeSoftDeleteInputWhereDto,
QueueTypeSoftDeleteInputDto,
QueueTypeSoftDeleteOutputDto,

// delete (4)
QueueTypeDeleteDto,
QueueTypeDeleteInputWhereDto,
QueueTypeDeleteInputDto,
QueueTypeDeleteOutputDto,

// restore (4)
QueueTypeRestoreDto,
QueueTypeRestoreInputWhereDto,
QueueTypeRestoreInputDto,
QueueTypeRestoreOutputDto
>
(
// soft_delete (4)
QueueTypeSoftDeleteDto,
QueueTypeSoftDeleteInputWhereDto,
QueueTypeSoftDeleteInputDto,
QueueTypeSoftDeleteOutputDto,

// delete (4)
QueueTypeDeleteDto,
QueueTypeDeleteInputWhereDto,
QueueTypeDeleteInputDto,
QueueTypeDeleteOutputDto,

// restore (4)
QueueTypeRestoreDto,
QueueTypeRestoreInputWhereDto,
QueueTypeRestoreInputDto,
QueueTypeRestoreOutputDto
);



// ████████ initialize UpsertCrudEngine ███████████████████████████████████████████
this.initUpsertEngine
<
// upsert (3)
QueueTypeUpsertDto,
QueueTypeUpsertInputDto,
QueueTypeUpsertOutputDto
>
(
// upsert (3)
QueueTypeUpsertDto,
QueueTypeUpsertInputDto,
QueueTypeUpsertOutputDto
);




// ████████ initialize RemoveCrudEngine ███████████████████████████████████████████
this.initRemoveEngine
<
// soft_remove (5)
QueueTypeSoftRemoveDto,
QueueTypeSoftRemoveInputWhereDto,
QueueTypeSoftRemoveInputDto,
QueueTypeSoftRemoveOutputAffectedRowsDto,
QueueTypeSoftRemoveOutputDto,

// remove (4)
QueueTypeRemoveDto,
QueueTypeRemoveInputWhereDto,
QueueTypeRemoveInputDto,
QueueTypeRemoveOutputAffectedRowsDto,
QueueTypeRemoveOutputDto,

// recover (5)
QueueTypeRecoverDto,
QueueTypeRecoverInputWhereDto,
QueueTypeRecoverInputDto,
QueueTypeRecoverOutputAffectedRowsDto,
QueueTypeRecoverOutputDto
>
(
// soft_remove (5)
QueueTypeSoftRemoveDto,
QueueTypeSoftRemoveInputWhereDto,
QueueTypeSoftRemoveInputDto,
QueueTypeSoftRemoveOutputAffectedRowsDto,
QueueTypeSoftRemoveOutputDto,

// remove (4)
QueueTypeRemoveDto,
QueueTypeRemoveInputWhereDto,
QueueTypeRemoveInputDto,
QueueTypeRemoveOutputAffectedRowsDto,
QueueTypeRemoveOutputDto,

// recover (5)
QueueTypeRecoverDto,
QueueTypeRecoverInputWhereDto,
QueueTypeRecoverInputDto,
QueueTypeRecoverOutputAffectedRowsDto,
QueueTypeRecoverOutputDto
);



// ████████ initialize UploadCrudEngine ███████████████████████████████████████████
this.initUploadEngine
<
// upload (3)
QueueTypeUploadDto,
QueueTypeUploadInputDto,
QueueTypeUploadOutputDto,

// upload_delete (3)
QueueTypeUploadDeleteDto,
QueueTypeUploadDeleteInputDto,
QueueTypeUploadDeleteOutputDto
>
(
// upload (3)
QueueTypeUploadDto,
QueueTypeUploadInputDto,
QueueTypeUploadOutputDto,

// upload_delete (3)
QueueTypeUploadDeleteDto,
QueueTypeUploadDeleteInputDto,
QueueTypeUploadDeleteOutputDto
);


// ████████ initialize ImportExportCrudEngine █████████████████████████████████████

}

}