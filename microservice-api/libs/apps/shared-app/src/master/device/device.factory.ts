import { DeviceEntity } from "./entities/device.entity";
import { Injectable } from "@nestjs/common";
import { DataSource, Repository } from "typeorm";
import { InjectRepository } from "@nestjs/typeorm";
import { ConfService, CreateCrudEngine, CrudFactory, DataValidationPipe, DeleteCrudEngine, FindCrudEngine, FindOutputPaginationDto, LibraryAppService, LogService, RemoveCrudEngine, UpdateCrudEngine, UploadCrudEngine, UpsertCrudEngine } from "@libs/library-app";
import { SelfGraphqlMicroserviceService } from "@libs/dynamic-app";
import { DeviceCreateDto, DeviceCreateInputDto, DeviceCreateOutputDto, DeviceDeleteDto, DeviceDeleteInputDto, DeviceDeleteInputWhereDto, DeviceDeleteOutputDto, DeviceFindDto, DeviceFindInputDto, DeviceFindInputGroupByDto, DeviceFindInputSortOrderDto, DeviceFindInputWhereDto, DeviceFindOneByIdDto, DeviceFindOneByIdInputDto, DeviceFindOutputDto, DeviceFindOutputRowsDto, DeviceRecoverDto, DeviceRecoverInputDto, DeviceRecoverInputWhereDto, DeviceRecoverOutputDto, DeviceRecoverOutputAffectedRowsDto, DeviceRemoveDto, DeviceRemoveInputDto, DeviceRemoveInputWhereDto, DeviceRemoveOutputDto, DeviceRemoveOutputAffectedRowsDto, DeviceRestoreDto, DeviceRestoreInputDto, DeviceRestoreInputWhereDto, DeviceRestoreOutputDto, DeviceSoftDeleteDto, DeviceSoftDeleteInputDto, DeviceSoftDeleteInputWhereDto, DeviceSoftDeleteOutputDto, DeviceSoftRemoveDto, DeviceSoftRemoveInputDto, DeviceSoftRemoveInputWhereDto, DeviceSoftRemoveOutputDto, DeviceSoftRemoveOutputAffectedRowsDto, DeviceUpdateDto, DeviceUpdateInputDto, DeviceUpdateInputSetsDto, DeviceUpdateInputWhereDto, DeviceUpdateOutputDto, DeviceUpdateOutputAffectedRowsDto, DeviceUploadDeleteDto, DeviceUploadDeleteInputDto, DeviceUploadDeleteOutputDto, DeviceUploadDto, DeviceUploadInputDto, DeviceUploadOutputDto, DeviceUpsertDto, DeviceUpsertInputDto, DeviceUpsertOutputDto } from "./dto/device.dto";

@Injectable()
export class DeviceFactory extends CrudFactory<DeviceEntity> {

// ████████ FindCrudEngine ████████████████████████████████████████
public declare readonly findEngine: FindCrudEngine<
// entity (1)
DeviceEntity,

// find (8)
DeviceFindDto,
DeviceFindInputWhereDto,
DeviceFindInputSortOrderDto,
DeviceFindInputGroupByDto,
DeviceFindInputDto,
DeviceFindOutputRowsDto,
FindOutputPaginationDto,
DeviceFindOutputDto,

// find_one_by_id (2)
DeviceFindOneByIdDto,
DeviceFindOneByIdInputDto
>;

// ████████ CreateCrudEngine ████████████████████████████████████████
public declare readonly createEngine: CreateCrudEngine<
// entity (1)
DeviceEntity,

// create (3)
DeviceCreateDto,
DeviceCreateInputDto,
DeviceCreateOutputDto
>;

// ████████ UpdateCrudEngine ████████████████████████████████████████
public declare readonly updateEngine: UpdateCrudEngine<
// entity (1)
DeviceEntity,

// update (6)
DeviceUpdateDto,
DeviceUpdateInputWhereDto,
DeviceUpdateInputSetsDto,
DeviceUpdateInputDto,
DeviceUpdateOutputAffectedRowsDto,
DeviceUpdateOutputDto
>;

// ████████ DeleteCrudEngine ████████████████████████████████████████
public declare readonly deleteEngine: DeleteCrudEngine<
// entity (1)
DeviceEntity,

// soft_delete (4)
DeviceSoftDeleteDto,
DeviceSoftDeleteInputWhereDto,
DeviceSoftDeleteInputDto,
DeviceSoftDeleteOutputDto,

// delete (4)
DeviceDeleteDto,
DeviceDeleteInputWhereDto,
DeviceDeleteInputDto,
DeviceDeleteOutputDto,

// restore (4)
DeviceRestoreDto,
DeviceRestoreInputWhereDto,
DeviceRestoreInputDto,
DeviceRestoreOutputDto
>;

// ████████ UpsertCrudEngine ████████████████████████████████████████
public declare readonly upsertEngine: UpsertCrudEngine<
// entity (1)
DeviceEntity,

// upsert (3)
DeviceUpsertDto,
DeviceUpsertInputDto,
DeviceUpsertOutputDto
>;

// ████████ RemoveCrudEngine ████████████████████████████████████████
public declare readonly removeEngine: RemoveCrudEngine<
// entity (1)
DeviceEntity,

// soft_remove (5)
DeviceSoftRemoveDto,
DeviceSoftRemoveInputWhereDto,
DeviceSoftRemoveInputDto,
DeviceSoftRemoveOutputAffectedRowsDto,
DeviceSoftRemoveOutputDto,

// remove (4)
DeviceRemoveDto,
DeviceRemoveInputWhereDto,
DeviceRemoveInputDto,
DeviceRemoveOutputAffectedRowsDto,
DeviceRemoveOutputDto,

// recover (5)
DeviceRecoverDto,
DeviceRecoverInputWhereDto,
DeviceRecoverInputDto,
DeviceRecoverOutputAffectedRowsDto,
DeviceRecoverOutputDto
>;

// ████████ UploadCrudEngine ████████████████████████████████████████
public declare readonly uploadEngine: UploadCrudEngine<
// entity (1)
DeviceEntity,

// upload (3)
DeviceUploadDto,
DeviceUploadInputDto,
DeviceUploadOutputDto,

// upload_delete (3)
DeviceUploadDeleteDto,
DeviceUploadDeleteInputDto,
DeviceUploadDeleteOutputDto
>;

constructor(
// data source
protected readonly dataSource: DataSource,

@InjectRepository(DeviceEntity)
protected readonly repository: Repository<DeviceEntity>,

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
    DeviceEntity,
);

this.logService.setContext(DeviceFactory.name);

// ████████ initialize FindCrudEngine ██████████████████████████████████████
this.initFindEngine
<
// find (8)
DeviceFindDto,
DeviceFindInputWhereDto,
DeviceFindInputSortOrderDto,
DeviceFindInputGroupByDto,
DeviceFindInputDto,
DeviceFindOutputRowsDto,
FindOutputPaginationDto,
DeviceFindOutputDto,

// find_one_by_id (2)
DeviceFindOneByIdDto,
DeviceFindOneByIdInputDto
>
(
// find (8)
DeviceFindDto,
DeviceFindInputWhereDto,
DeviceFindInputSortOrderDto,
DeviceFindInputGroupByDto,
DeviceFindInputDto,
DeviceFindOutputRowsDto,
FindOutputPaginationDto,
DeviceFindOutputDto,

// find_one_by_id (2)
DeviceFindOneByIdDto,
DeviceFindOneByIdInputDto
);


// ████████ initialize CreateCrudEngine ███████████████████████████████████████
this.initCreateEngine
<
// create (3)
DeviceCreateDto,
DeviceCreateInputDto,
DeviceCreateOutputDto
>
(
// create (3)
DeviceCreateDto,
DeviceCreateInputDto,
DeviceCreateOutputDto
);

// ████████ initialize UpdateCrudEngine ████████████████████████████████████████
this.initUpdateEngine
<
// update (6)
DeviceUpdateDto,
DeviceUpdateInputWhereDto,
DeviceUpdateInputSetsDto,
DeviceUpdateInputDto,
DeviceUpdateOutputAffectedRowsDto,
DeviceUpdateOutputDto
>
(
// update (6)
DeviceUpdateDto,
DeviceUpdateInputWhereDto,
DeviceUpdateInputSetsDto,
DeviceUpdateInputDto,
DeviceUpdateOutputAffectedRowsDto,
DeviceUpdateOutputDto
);


// ████████ initialize DeleteCrudEngine ███████████████████████████████████████████
this.initDeleteEngine
<
// soft_delete (4)
DeviceSoftDeleteDto,
DeviceSoftDeleteInputWhereDto,
DeviceSoftDeleteInputDto,
DeviceSoftDeleteOutputDto,

// delete (4)
DeviceDeleteDto,
DeviceDeleteInputWhereDto,
DeviceDeleteInputDto,
DeviceDeleteOutputDto,

// restore (4)
DeviceRestoreDto,
DeviceRestoreInputWhereDto,
DeviceRestoreInputDto,
DeviceRestoreOutputDto
>
(
// soft_delete (4)
DeviceSoftDeleteDto,
DeviceSoftDeleteInputWhereDto,
DeviceSoftDeleteInputDto,
DeviceSoftDeleteOutputDto,

// delete (4)
DeviceDeleteDto,
DeviceDeleteInputWhereDto,
DeviceDeleteInputDto,
DeviceDeleteOutputDto,

// restore (4)
DeviceRestoreDto,
DeviceRestoreInputWhereDto,
DeviceRestoreInputDto,
DeviceRestoreOutputDto
);



// ████████ initialize UpsertCrudEngine ███████████████████████████████████████████
this.initUpsertEngine
<
// upsert (3)
DeviceUpsertDto,
DeviceUpsertInputDto,
DeviceUpsertOutputDto
>
(
// upsert (3)
DeviceUpsertDto,
DeviceUpsertInputDto,
DeviceUpsertOutputDto
);




// ████████ initialize RemoveCrudEngine ███████████████████████████████████████████
this.initRemoveEngine
<
// soft_remove (5)
DeviceSoftRemoveDto,
DeviceSoftRemoveInputWhereDto,
DeviceSoftRemoveInputDto,
DeviceSoftRemoveOutputAffectedRowsDto,
DeviceSoftRemoveOutputDto,

// remove (4)
DeviceRemoveDto,
DeviceRemoveInputWhereDto,
DeviceRemoveInputDto,
DeviceRemoveOutputAffectedRowsDto,
DeviceRemoveOutputDto,

// recover (5)
DeviceRecoverDto,
DeviceRecoverInputWhereDto,
DeviceRecoverInputDto,
DeviceRecoverOutputAffectedRowsDto,
DeviceRecoverOutputDto
>
(
// soft_remove (5)
DeviceSoftRemoveDto,
DeviceSoftRemoveInputWhereDto,
DeviceSoftRemoveInputDto,
DeviceSoftRemoveOutputAffectedRowsDto,
DeviceSoftRemoveOutputDto,

// remove (4)
DeviceRemoveDto,
DeviceRemoveInputWhereDto,
DeviceRemoveInputDto,
DeviceRemoveOutputAffectedRowsDto,
DeviceRemoveOutputDto,

// recover (5)
DeviceRecoverDto,
DeviceRecoverInputWhereDto,
DeviceRecoverInputDto,
DeviceRecoverOutputAffectedRowsDto,
DeviceRecoverOutputDto
);



// ████████ initialize UploadCrudEngine ███████████████████████████████████████████
this.initUploadEngine
<
// upload (3)
DeviceUploadDto,
DeviceUploadInputDto,
DeviceUploadOutputDto,

// upload_delete (3)
DeviceUploadDeleteDto,
DeviceUploadDeleteInputDto,
DeviceUploadDeleteOutputDto
>
(
// upload (3)
DeviceUploadDto,
DeviceUploadInputDto,
DeviceUploadOutputDto,

// upload_delete (3)
DeviceUploadDeleteDto,
DeviceUploadDeleteInputDto,
DeviceUploadDeleteOutputDto
);


// ████████ initialize ImportExportCrudEngine █████████████████████████████████████

}

}