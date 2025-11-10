import { SettingTypeEntity } from "./entities/type.entity";
import { Injectable } from "@nestjs/common";
import { DataSource, Repository } from "typeorm";
import { InjectRepository } from "@nestjs/typeorm";
import { ConfService, CreateCrudEngine, CrudFactory, DataValidationPipe, DeleteCrudEngine, FindCrudEngine, FindOutputPaginationDto, LibraryAppService, LogService, RemoveCrudEngine, UpdateCrudEngine, UploadCrudEngine, UpsertCrudEngine } from "@libs/library-app";
import { SelfGraphqlMicroserviceService } from "@libs/dynamic-app";
import { SettingTypeCreateDto, SettingTypeCreateInputDto, SettingTypeCreateOutputDto, SettingTypeDeleteDto, SettingTypeDeleteInputDto, SettingTypeDeleteInputWhereDto, SettingTypeDeleteOutputDto, SettingTypeFindDto, SettingTypeFindInputDto, SettingTypeFindInputGroupByDto, SettingTypeFindInputSortOrderDto, SettingTypeFindInputWhereDto, SettingTypeFindOneByIdDto, SettingTypeFindOneByIdInputDto, SettingTypeFindOutputDto, SettingTypeFindOutputRowsDto, SettingTypeRecoverDto, SettingTypeRecoverInputDto, SettingTypeRecoverInputWhereDto, SettingTypeRecoverOutputDto, SettingTypeRecoverOutputAffectedRowsDto, SettingTypeRemoveDto, SettingTypeRemoveInputDto, SettingTypeRemoveInputWhereDto, SettingTypeRemoveOutputDto, SettingTypeRemoveOutputAffectedRowsDto, SettingTypeRestoreDto, SettingTypeRestoreInputDto, SettingTypeRestoreInputWhereDto, SettingTypeRestoreOutputDto, SettingTypeSoftDeleteDto, SettingTypeSoftDeleteInputDto, SettingTypeSoftDeleteInputWhereDto, SettingTypeSoftDeleteOutputDto, SettingTypeSoftRemoveDto, SettingTypeSoftRemoveInputDto, SettingTypeSoftRemoveInputWhereDto, SettingTypeSoftRemoveOutputDto, SettingTypeSoftRemoveOutputAffectedRowsDto, SettingTypeUpdateDto, SettingTypeUpdateInputDto, SettingTypeUpdateInputSetsDto, SettingTypeUpdateInputWhereDto, SettingTypeUpdateOutputDto, SettingTypeUpdateOutputAffectedRowsDto, SettingTypeUploadDeleteDto, SettingTypeUploadDeleteInputDto, SettingTypeUploadDeleteOutputDto, SettingTypeUploadDto, SettingTypeUploadInputDto, SettingTypeUploadOutputDto, SettingTypeUpsertDto, SettingTypeUpsertInputDto, SettingTypeUpsertOutputDto } from "./dto/type.dto";

@Injectable()
export class SettingTypeFactory extends CrudFactory<SettingTypeEntity> {

// ████████ FindCrudEngine ████████████████████████████████████████
public declare readonly findEngine: FindCrudEngine<
// entity (1)
SettingTypeEntity,

// find (8)
SettingTypeFindDto,
SettingTypeFindInputWhereDto,
SettingTypeFindInputSortOrderDto,
SettingTypeFindInputGroupByDto,
SettingTypeFindInputDto,
SettingTypeFindOutputRowsDto,
FindOutputPaginationDto,
SettingTypeFindOutputDto,

// find_one_by_id (2)
SettingTypeFindOneByIdDto,
SettingTypeFindOneByIdInputDto
>;

// ████████ CreateCrudEngine ████████████████████████████████████████
public declare readonly createEngine: CreateCrudEngine<
// entity (1)
SettingTypeEntity,

// create (3)
SettingTypeCreateDto,
SettingTypeCreateInputDto,
SettingTypeCreateOutputDto
>;

// ████████ UpdateCrudEngine ████████████████████████████████████████
public declare readonly updateEngine: UpdateCrudEngine<
// entity (1)
SettingTypeEntity,

// update (6)
SettingTypeUpdateDto,
SettingTypeUpdateInputWhereDto,
SettingTypeUpdateInputSetsDto,
SettingTypeUpdateInputDto,
SettingTypeUpdateOutputAffectedRowsDto,
SettingTypeUpdateOutputDto
>;

// ████████ DeleteCrudEngine ████████████████████████████████████████
public declare readonly deleteEngine: DeleteCrudEngine<
// entity (1)
SettingTypeEntity,

// soft_delete (4)
SettingTypeSoftDeleteDto,
SettingTypeSoftDeleteInputWhereDto,
SettingTypeSoftDeleteInputDto,
SettingTypeSoftDeleteOutputDto,

// delete (4)
SettingTypeDeleteDto,
SettingTypeDeleteInputWhereDto,
SettingTypeDeleteInputDto,
SettingTypeDeleteOutputDto,

// restore (4)
SettingTypeRestoreDto,
SettingTypeRestoreInputWhereDto,
SettingTypeRestoreInputDto,
SettingTypeRestoreOutputDto
>;

// ████████ UpsertCrudEngine ████████████████████████████████████████
public declare readonly upsertEngine: UpsertCrudEngine<
// entity (1)
SettingTypeEntity,

// upsert (3)
SettingTypeUpsertDto,
SettingTypeUpsertInputDto,
SettingTypeUpsertOutputDto
>;

// ████████ RemoveCrudEngine ████████████████████████████████████████
public declare readonly removeEngine: RemoveCrudEngine<
// entity (1)
SettingTypeEntity,

// soft_remove (5)
SettingTypeSoftRemoveDto,
SettingTypeSoftRemoveInputWhereDto,
SettingTypeSoftRemoveInputDto,
SettingTypeSoftRemoveOutputAffectedRowsDto,
SettingTypeSoftRemoveOutputDto,

// remove (4)
SettingTypeRemoveDto,
SettingTypeRemoveInputWhereDto,
SettingTypeRemoveInputDto,
SettingTypeRemoveOutputAffectedRowsDto,
SettingTypeRemoveOutputDto,

// recover (5)
SettingTypeRecoverDto,
SettingTypeRecoverInputWhereDto,
SettingTypeRecoverInputDto,
SettingTypeRecoverOutputAffectedRowsDto,
SettingTypeRecoverOutputDto
>;

// ████████ UploadCrudEngine ████████████████████████████████████████
public declare readonly uploadEngine: UploadCrudEngine<
// entity (1)
SettingTypeEntity,

// upload (3)
SettingTypeUploadDto,
SettingTypeUploadInputDto,
SettingTypeUploadOutputDto,

// upload_delete (3)
SettingTypeUploadDeleteDto,
SettingTypeUploadDeleteInputDto,
SettingTypeUploadDeleteOutputDto
>;

constructor(
// data source
protected readonly dataSource: DataSource,

@InjectRepository(SettingTypeEntity)
protected readonly repository: Repository<SettingTypeEntity>,

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
    SettingTypeEntity,
);

this.logService.setContext(SettingTypeFactory.name);

// ████████ initialize FindCrudEngine ██████████████████████████████████████
this.initFindEngine
<
// find (8)
SettingTypeFindDto,
SettingTypeFindInputWhereDto,
SettingTypeFindInputSortOrderDto,
SettingTypeFindInputGroupByDto,
SettingTypeFindInputDto,
SettingTypeFindOutputRowsDto,
FindOutputPaginationDto,
SettingTypeFindOutputDto,

// find_one_by_id (2)
SettingTypeFindOneByIdDto,
SettingTypeFindOneByIdInputDto
>
(
// find (8)
SettingTypeFindDto,
SettingTypeFindInputWhereDto,
SettingTypeFindInputSortOrderDto,
SettingTypeFindInputGroupByDto,
SettingTypeFindInputDto,
SettingTypeFindOutputRowsDto,
FindOutputPaginationDto,
SettingTypeFindOutputDto,

// find_one_by_id (2)
SettingTypeFindOneByIdDto,
SettingTypeFindOneByIdInputDto
);


// ████████ initialize CreateCrudEngine ███████████████████████████████████████
this.initCreateEngine
<
// create (3)
SettingTypeCreateDto,
SettingTypeCreateInputDto,
SettingTypeCreateOutputDto
>
(
// create (3)
SettingTypeCreateDto,
SettingTypeCreateInputDto,
SettingTypeCreateOutputDto
);

// ████████ initialize UpdateCrudEngine ████████████████████████████████████████
this.initUpdateEngine
<
// update (6)
SettingTypeUpdateDto,
SettingTypeUpdateInputWhereDto,
SettingTypeUpdateInputSetsDto,
SettingTypeUpdateInputDto,
SettingTypeUpdateOutputAffectedRowsDto,
SettingTypeUpdateOutputDto
>
(
// update (6)
SettingTypeUpdateDto,
SettingTypeUpdateInputWhereDto,
SettingTypeUpdateInputSetsDto,
SettingTypeUpdateInputDto,
SettingTypeUpdateOutputAffectedRowsDto,
SettingTypeUpdateOutputDto
);


// ████████ initialize DeleteCrudEngine ███████████████████████████████████████████
this.initDeleteEngine
<
// soft_delete (4)
SettingTypeSoftDeleteDto,
SettingTypeSoftDeleteInputWhereDto,
SettingTypeSoftDeleteInputDto,
SettingTypeSoftDeleteOutputDto,

// delete (4)
SettingTypeDeleteDto,
SettingTypeDeleteInputWhereDto,
SettingTypeDeleteInputDto,
SettingTypeDeleteOutputDto,

// restore (4)
SettingTypeRestoreDto,
SettingTypeRestoreInputWhereDto,
SettingTypeRestoreInputDto,
SettingTypeRestoreOutputDto
>
(
// soft_delete (4)
SettingTypeSoftDeleteDto,
SettingTypeSoftDeleteInputWhereDto,
SettingTypeSoftDeleteInputDto,
SettingTypeSoftDeleteOutputDto,

// delete (4)
SettingTypeDeleteDto,
SettingTypeDeleteInputWhereDto,
SettingTypeDeleteInputDto,
SettingTypeDeleteOutputDto,

// restore (4)
SettingTypeRestoreDto,
SettingTypeRestoreInputWhereDto,
SettingTypeRestoreInputDto,
SettingTypeRestoreOutputDto
);



// ████████ initialize UpsertCrudEngine ███████████████████████████████████████████
this.initUpsertEngine
<
// upsert (3)
SettingTypeUpsertDto,
SettingTypeUpsertInputDto,
SettingTypeUpsertOutputDto
>
(
// upsert (3)
SettingTypeUpsertDto,
SettingTypeUpsertInputDto,
SettingTypeUpsertOutputDto
);




// ████████ initialize RemoveCrudEngine ███████████████████████████████████████████
this.initRemoveEngine
<
// soft_remove (5)
SettingTypeSoftRemoveDto,
SettingTypeSoftRemoveInputWhereDto,
SettingTypeSoftRemoveInputDto,
SettingTypeSoftRemoveOutputAffectedRowsDto,
SettingTypeSoftRemoveOutputDto,

// remove (4)
SettingTypeRemoveDto,
SettingTypeRemoveInputWhereDto,
SettingTypeRemoveInputDto,
SettingTypeRemoveOutputAffectedRowsDto,
SettingTypeRemoveOutputDto,

// recover (5)
SettingTypeRecoverDto,
SettingTypeRecoverInputWhereDto,
SettingTypeRecoverInputDto,
SettingTypeRecoverOutputAffectedRowsDto,
SettingTypeRecoverOutputDto
>
(
// soft_remove (5)
SettingTypeSoftRemoveDto,
SettingTypeSoftRemoveInputWhereDto,
SettingTypeSoftRemoveInputDto,
SettingTypeSoftRemoveOutputAffectedRowsDto,
SettingTypeSoftRemoveOutputDto,

// remove (4)
SettingTypeRemoveDto,
SettingTypeRemoveInputWhereDto,
SettingTypeRemoveInputDto,
SettingTypeRemoveOutputAffectedRowsDto,
SettingTypeRemoveOutputDto,

// recover (5)
SettingTypeRecoverDto,
SettingTypeRecoverInputWhereDto,
SettingTypeRecoverInputDto,
SettingTypeRecoverOutputAffectedRowsDto,
SettingTypeRecoverOutputDto
);



// ████████ initialize UploadCrudEngine ███████████████████████████████████████████
this.initUploadEngine
<
// upload (3)
SettingTypeUploadDto,
SettingTypeUploadInputDto,
SettingTypeUploadOutputDto,

// upload_delete (3)
SettingTypeUploadDeleteDto,
SettingTypeUploadDeleteInputDto,
SettingTypeUploadDeleteOutputDto
>
(
// upload (3)
SettingTypeUploadDto,
SettingTypeUploadInputDto,
SettingTypeUploadOutputDto,

// upload_delete (3)
SettingTypeUploadDeleteDto,
SettingTypeUploadDeleteInputDto,
SettingTypeUploadDeleteOutputDto
);


// ████████ initialize ImportExportCrudEngine █████████████████████████████████████

}

}