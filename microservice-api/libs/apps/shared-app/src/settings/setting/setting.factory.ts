import { SettingEntity } from "./entities/setting.entity";
import { Injectable } from "@nestjs/common";
import { DataSource, Repository } from "typeorm";
import { InjectRepository } from "@nestjs/typeorm";
import { ConfService, CreateCrudEngine, CrudFactory, DataValidationPipe, DeleteCrudEngine, FindCrudEngine, FindOutputPaginationDto, LibraryAppService, LogService, RemoveCrudEngine, UpdateCrudEngine, UploadCrudEngine, UpsertCrudEngine } from "@libs/library-app";
import { SelfGraphqlMicroserviceService } from "@libs/dynamic-app";
import { SettingCreateDto, SettingCreateInputDto, SettingCreateOutputDto, SettingDeleteDto, SettingDeleteInputDto, SettingDeleteInputWhereDto, SettingDeleteOutputDto, SettingFindDto, SettingFindInputDto, SettingFindInputGroupByDto, SettingFindInputSortOrderDto, SettingFindInputWhereDto, SettingFindOneByIdDto, SettingFindOneByIdInputDto, SettingFindOutputDto, SettingFindOutputRowsDto, SettingRecoverDto, SettingRecoverInputDto, SettingRecoverInputWhereDto, SettingRecoverOutputDto, SettingRecoverOutputAffectedRowsDto, SettingRemoveDto, SettingRemoveInputDto, SettingRemoveInputWhereDto, SettingRemoveOutputDto, SettingRemoveOutputAffectedRowsDto, SettingRestoreDto, SettingRestoreInputDto, SettingRestoreInputWhereDto, SettingRestoreOutputDto, SettingSoftDeleteDto, SettingSoftDeleteInputDto, SettingSoftDeleteInputWhereDto, SettingSoftDeleteOutputDto, SettingSoftRemoveDto, SettingSoftRemoveInputDto, SettingSoftRemoveInputWhereDto, SettingSoftRemoveOutputDto, SettingSoftRemoveOutputAffectedRowsDto, SettingUpdateDto, SettingUpdateInputDto, SettingUpdateInputSetsDto, SettingUpdateInputWhereDto, SettingUpdateOutputDto, SettingUpdateOutputAffectedRowsDto, SettingUploadDeleteDto, SettingUploadDeleteInputDto, SettingUploadDeleteOutputDto, SettingUploadDto, SettingUploadInputDto, SettingUploadOutputDto, SettingUpsertDto, SettingUpsertInputDto, SettingUpsertOutputDto } from "./dto/setting.dto";

@Injectable()
export class SettingFactory extends CrudFactory<SettingEntity> {

// ████████ FindCrudEngine ████████████████████████████████████████
public declare readonly findEngine: FindCrudEngine<
// entity (1)
SettingEntity,

// find (8)
SettingFindDto,
SettingFindInputWhereDto,
SettingFindInputSortOrderDto,
SettingFindInputGroupByDto,
SettingFindInputDto,
SettingFindOutputRowsDto,
FindOutputPaginationDto,
SettingFindOutputDto,

// find_one_by_id (2)
SettingFindOneByIdDto,
SettingFindOneByIdInputDto
>;

// ████████ CreateCrudEngine ████████████████████████████████████████
public declare readonly createEngine: CreateCrudEngine<
// entity (1)
SettingEntity,

// create (3)
SettingCreateDto,
SettingCreateInputDto,
SettingCreateOutputDto
>;

// ████████ UpdateCrudEngine ████████████████████████████████████████
public declare readonly updateEngine: UpdateCrudEngine<
// entity (1)
SettingEntity,

// update (6)
SettingUpdateDto,
SettingUpdateInputWhereDto,
SettingUpdateInputSetsDto,
SettingUpdateInputDto,
SettingUpdateOutputAffectedRowsDto,
SettingUpdateOutputDto
>;

// ████████ DeleteCrudEngine ████████████████████████████████████████
public declare readonly deleteEngine: DeleteCrudEngine<
// entity (1)
SettingEntity,

// soft_delete (4)
SettingSoftDeleteDto,
SettingSoftDeleteInputWhereDto,
SettingSoftDeleteInputDto,
SettingSoftDeleteOutputDto,

// delete (4)
SettingDeleteDto,
SettingDeleteInputWhereDto,
SettingDeleteInputDto,
SettingDeleteOutputDto,

// restore (4)
SettingRestoreDto,
SettingRestoreInputWhereDto,
SettingRestoreInputDto,
SettingRestoreOutputDto
>;

// ████████ UpsertCrudEngine ████████████████████████████████████████
public declare readonly upsertEngine: UpsertCrudEngine<
// entity (1)
SettingEntity,

// upsert (3)
SettingUpsertDto,
SettingUpsertInputDto,
SettingUpsertOutputDto
>;

// ████████ RemoveCrudEngine ████████████████████████████████████████
public declare readonly removeEngine: RemoveCrudEngine<
// entity (1)
SettingEntity,

// soft_remove (5)
SettingSoftRemoveDto,
SettingSoftRemoveInputWhereDto,
SettingSoftRemoveInputDto,
SettingSoftRemoveOutputAffectedRowsDto,
SettingSoftRemoveOutputDto,

// remove (4)
SettingRemoveDto,
SettingRemoveInputWhereDto,
SettingRemoveInputDto,
SettingRemoveOutputAffectedRowsDto,
SettingRemoveOutputDto,

// recover (5)
SettingRecoverDto,
SettingRecoverInputWhereDto,
SettingRecoverInputDto,
SettingRecoverOutputAffectedRowsDto,
SettingRecoverOutputDto
>;

// ████████ UploadCrudEngine ████████████████████████████████████████
public declare readonly uploadEngine: UploadCrudEngine<
// entity (1)
SettingEntity,

// upload (3)
SettingUploadDto,
SettingUploadInputDto,
SettingUploadOutputDto,

// upload_delete (3)
SettingUploadDeleteDto,
SettingUploadDeleteInputDto,
SettingUploadDeleteOutputDto
>;

constructor(
// data source
protected readonly dataSource: DataSource,

@InjectRepository(SettingEntity)
protected readonly repository: Repository<SettingEntity>,

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
    SettingEntity,
);

this.logService.setContext(SettingFactory.name);

// ████████ initialize FindCrudEngine ██████████████████████████████████████
this.initFindEngine
<
// find (8)
SettingFindDto,
SettingFindInputWhereDto,
SettingFindInputSortOrderDto,
SettingFindInputGroupByDto,
SettingFindInputDto,
SettingFindOutputRowsDto,
FindOutputPaginationDto,
SettingFindOutputDto,

// find_one_by_id (2)
SettingFindOneByIdDto,
SettingFindOneByIdInputDto
>
(
// find (8)
SettingFindDto,
SettingFindInputWhereDto,
SettingFindInputSortOrderDto,
SettingFindInputGroupByDto,
SettingFindInputDto,
SettingFindOutputRowsDto,
FindOutputPaginationDto,
SettingFindOutputDto,

// find_one_by_id (2)
SettingFindOneByIdDto,
SettingFindOneByIdInputDto
);


// ████████ initialize CreateCrudEngine ███████████████████████████████████████
this.initCreateEngine
<
// create (3)
SettingCreateDto,
SettingCreateInputDto,
SettingCreateOutputDto
>
(
// create (3)
SettingCreateDto,
SettingCreateInputDto,
SettingCreateOutputDto
);

// ████████ initialize UpdateCrudEngine ████████████████████████████████████████
this.initUpdateEngine
<
// update (6)
SettingUpdateDto,
SettingUpdateInputWhereDto,
SettingUpdateInputSetsDto,
SettingUpdateInputDto,
SettingUpdateOutputAffectedRowsDto,
SettingUpdateOutputDto
>
(
// update (6)
SettingUpdateDto,
SettingUpdateInputWhereDto,
SettingUpdateInputSetsDto,
SettingUpdateInputDto,
SettingUpdateOutputAffectedRowsDto,
SettingUpdateOutputDto
);


// ████████ initialize DeleteCrudEngine ███████████████████████████████████████████
this.initDeleteEngine
<
// soft_delete (4)
SettingSoftDeleteDto,
SettingSoftDeleteInputWhereDto,
SettingSoftDeleteInputDto,
SettingSoftDeleteOutputDto,

// delete (4)
SettingDeleteDto,
SettingDeleteInputWhereDto,
SettingDeleteInputDto,
SettingDeleteOutputDto,

// restore (4)
SettingRestoreDto,
SettingRestoreInputWhereDto,
SettingRestoreInputDto,
SettingRestoreOutputDto
>
(
// soft_delete (4)
SettingSoftDeleteDto,
SettingSoftDeleteInputWhereDto,
SettingSoftDeleteInputDto,
SettingSoftDeleteOutputDto,

// delete (4)
SettingDeleteDto,
SettingDeleteInputWhereDto,
SettingDeleteInputDto,
SettingDeleteOutputDto,

// restore (4)
SettingRestoreDto,
SettingRestoreInputWhereDto,
SettingRestoreInputDto,
SettingRestoreOutputDto
);



// ████████ initialize UpsertCrudEngine ███████████████████████████████████████████
this.initUpsertEngine
<
// upsert (3)
SettingUpsertDto,
SettingUpsertInputDto,
SettingUpsertOutputDto
>
(
// upsert (3)
SettingUpsertDto,
SettingUpsertInputDto,
SettingUpsertOutputDto
);




// ████████ initialize RemoveCrudEngine ███████████████████████████████████████████
this.initRemoveEngine
<
// soft_remove (5)
SettingSoftRemoveDto,
SettingSoftRemoveInputWhereDto,
SettingSoftRemoveInputDto,
SettingSoftRemoveOutputAffectedRowsDto,
SettingSoftRemoveOutputDto,

// remove (4)
SettingRemoveDto,
SettingRemoveInputWhereDto,
SettingRemoveInputDto,
SettingRemoveOutputAffectedRowsDto,
SettingRemoveOutputDto,

// recover (5)
SettingRecoverDto,
SettingRecoverInputWhereDto,
SettingRecoverInputDto,
SettingRecoverOutputAffectedRowsDto,
SettingRecoverOutputDto
>
(
// soft_remove (5)
SettingSoftRemoveDto,
SettingSoftRemoveInputWhereDto,
SettingSoftRemoveInputDto,
SettingSoftRemoveOutputAffectedRowsDto,
SettingSoftRemoveOutputDto,

// remove (4)
SettingRemoveDto,
SettingRemoveInputWhereDto,
SettingRemoveInputDto,
SettingRemoveOutputAffectedRowsDto,
SettingRemoveOutputDto,

// recover (5)
SettingRecoverDto,
SettingRecoverInputWhereDto,
SettingRecoverInputDto,
SettingRecoverOutputAffectedRowsDto,
SettingRecoverOutputDto
);



// ████████ initialize UploadCrudEngine ███████████████████████████████████████████
this.initUploadEngine
<
// upload (3)
SettingUploadDto,
SettingUploadInputDto,
SettingUploadOutputDto,

// upload_delete (3)
SettingUploadDeleteDto,
SettingUploadDeleteInputDto,
SettingUploadDeleteOutputDto
>
(
// upload (3)
SettingUploadDto,
SettingUploadInputDto,
SettingUploadOutputDto,

// upload_delete (3)
SettingUploadDeleteDto,
SettingUploadDeleteInputDto,
SettingUploadDeleteOutputDto
);


// ████████ initialize ImportExportCrudEngine █████████████████████████████████████

}

}