import { UserDeviceEntity } from "./entities/user.device.entity";
import { Injectable } from "@nestjs/common";
import { DataSource, Repository } from "typeorm";
import { InjectRepository } from "@nestjs/typeorm";
import { ConfService, CreateCrudEngine, CrudFactory, DataValidationPipe, DeleteCrudEngine, FindCrudEngine, FindOutputPaginationDto, LibraryAppService, LogService, RemoveCrudEngine, UpdateCrudEngine, UploadCrudEngine, UpsertCrudEngine } from "@libs/library-app";
import { SelfGraphqlMicroserviceService } from "@libs/dynamic-app";
import { UserDeviceCreateDto, UserDeviceCreateInputDto, UserDeviceCreateOutputDto, UserDeviceDeleteDto, UserDeviceDeleteInputDto, UserDeviceDeleteInputWhereDto, UserDeviceDeleteOutputDto, UserDeviceFindDto, UserDeviceFindInputDto, UserDeviceFindInputGroupByDto, UserDeviceFindInputSortOrderDto, UserDeviceFindInputWhereDto, UserDeviceFindOneByIdDto, UserDeviceFindOneByIdInputDto, UserDeviceFindOutputDto, UserDeviceFindOutputRowsDto, UserDeviceRecoverDto, UserDeviceRecoverInputDto, UserDeviceRecoverInputWhereDto, UserDeviceRecoverOutputDto, UserDeviceRecoverOutputAffectedRowsDto, UserDeviceRemoveDto, UserDeviceRemoveInputDto, UserDeviceRemoveInputWhereDto, UserDeviceRemoveOutputDto, UserDeviceRemoveOutputAffectedRowsDto, UserDeviceRestoreDto, UserDeviceRestoreInputDto, UserDeviceRestoreInputWhereDto, UserDeviceRestoreOutputDto, UserDeviceSoftDeleteDto, UserDeviceSoftDeleteInputDto, UserDeviceSoftDeleteInputWhereDto, UserDeviceSoftDeleteOutputDto, UserDeviceSoftRemoveDto, UserDeviceSoftRemoveInputDto, UserDeviceSoftRemoveInputWhereDto, UserDeviceSoftRemoveOutputDto, UserDeviceSoftRemoveOutputAffectedRowsDto, UserDeviceUpdateDto, UserDeviceUpdateInputDto, UserDeviceUpdateInputSetsDto, UserDeviceUpdateInputWhereDto, UserDeviceUpdateOutputDto, UserDeviceUpdateOutputAffectedRowsDto, UserDeviceUploadDeleteDto, UserDeviceUploadDeleteInputDto, UserDeviceUploadDeleteOutputDto, UserDeviceUploadDto, UserDeviceUploadInputDto, UserDeviceUploadOutputDto, UserDeviceUpsertDto, UserDeviceUpsertInputDto, UserDeviceUpsertOutputDto } from "./dto/user.device.dto";

@Injectable()
export class UserDeviceFactory extends CrudFactory<UserDeviceEntity> {

// ████████ FindCrudEngine ████████████████████████████████████████
public declare readonly findEngine: FindCrudEngine<
// entity (1)
UserDeviceEntity,

// find (8)
UserDeviceFindDto,
UserDeviceFindInputWhereDto,
UserDeviceFindInputSortOrderDto,
UserDeviceFindInputGroupByDto,
UserDeviceFindInputDto,
UserDeviceFindOutputRowsDto,
FindOutputPaginationDto,
UserDeviceFindOutputDto,

// find_one_by_id (2)
UserDeviceFindOneByIdDto,
UserDeviceFindOneByIdInputDto
>;

// ████████ CreateCrudEngine ████████████████████████████████████████
public declare readonly createEngine: CreateCrudEngine<
// entity (1)
UserDeviceEntity,

// create (3)
UserDeviceCreateDto,
UserDeviceCreateInputDto,
UserDeviceCreateOutputDto
>;

// ████████ UpdateCrudEngine ████████████████████████████████████████
public declare readonly updateEngine: UpdateCrudEngine<
// entity (1)
UserDeviceEntity,

// update (6)
UserDeviceUpdateDto,
UserDeviceUpdateInputWhereDto,
UserDeviceUpdateInputSetsDto,
UserDeviceUpdateInputDto,
UserDeviceUpdateOutputAffectedRowsDto,
UserDeviceUpdateOutputDto
>;

// ████████ DeleteCrudEngine ████████████████████████████████████████
public declare readonly deleteEngine: DeleteCrudEngine<
// entity (1)
UserDeviceEntity,

// soft_delete (4)
UserDeviceSoftDeleteDto,
UserDeviceSoftDeleteInputWhereDto,
UserDeviceSoftDeleteInputDto,
UserDeviceSoftDeleteOutputDto,

// delete (4)
UserDeviceDeleteDto,
UserDeviceDeleteInputWhereDto,
UserDeviceDeleteInputDto,
UserDeviceDeleteOutputDto,

// restore (4)
UserDeviceRestoreDto,
UserDeviceRestoreInputWhereDto,
UserDeviceRestoreInputDto,
UserDeviceRestoreOutputDto
>;

// ████████ UpsertCrudEngine ████████████████████████████████████████
public declare readonly upsertEngine: UpsertCrudEngine<
// entity (1)
UserDeviceEntity,

// upsert (3)
UserDeviceUpsertDto,
UserDeviceUpsertInputDto,
UserDeviceUpsertOutputDto
>;

// ████████ RemoveCrudEngine ████████████████████████████████████████
public declare readonly removeEngine: RemoveCrudEngine<
// entity (1)
UserDeviceEntity,

// soft_remove (5)
UserDeviceSoftRemoveDto,
UserDeviceSoftRemoveInputWhereDto,
UserDeviceSoftRemoveInputDto,
UserDeviceSoftRemoveOutputAffectedRowsDto,
UserDeviceSoftRemoveOutputDto,

// remove (4)
UserDeviceRemoveDto,
UserDeviceRemoveInputWhereDto,
UserDeviceRemoveInputDto,
UserDeviceRemoveOutputAffectedRowsDto,
UserDeviceRemoveOutputDto,

// recover (5)
UserDeviceRecoverDto,
UserDeviceRecoverInputWhereDto,
UserDeviceRecoverInputDto,
UserDeviceRecoverOutputAffectedRowsDto,
UserDeviceRecoverOutputDto
>;

// ████████ UploadCrudEngine ████████████████████████████████████████
public declare readonly uploadEngine: UploadCrudEngine<
// entity (1)
UserDeviceEntity,

// upload (3)
UserDeviceUploadDto,
UserDeviceUploadInputDto,
UserDeviceUploadOutputDto,

// upload_delete (3)
UserDeviceUploadDeleteDto,
UserDeviceUploadDeleteInputDto,
UserDeviceUploadDeleteOutputDto
>;

constructor(
// data source
protected readonly dataSource: DataSource,

@InjectRepository(UserDeviceEntity)
protected readonly repository: Repository<UserDeviceEntity>,

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
    UserDeviceEntity,
);

this.logService.setContext(UserDeviceFactory.name);

// ████████ initialize FindCrudEngine ██████████████████████████████████████
this.initFindEngine
<
// find (8)
UserDeviceFindDto,
UserDeviceFindInputWhereDto,
UserDeviceFindInputSortOrderDto,
UserDeviceFindInputGroupByDto,
UserDeviceFindInputDto,
UserDeviceFindOutputRowsDto,
FindOutputPaginationDto,
UserDeviceFindOutputDto,

// find_one_by_id (2)
UserDeviceFindOneByIdDto,
UserDeviceFindOneByIdInputDto
>
(
// find (8)
UserDeviceFindDto,
UserDeviceFindInputWhereDto,
UserDeviceFindInputSortOrderDto,
UserDeviceFindInputGroupByDto,
UserDeviceFindInputDto,
UserDeviceFindOutputRowsDto,
FindOutputPaginationDto,
UserDeviceFindOutputDto,

// find_one_by_id (2)
UserDeviceFindOneByIdDto,
UserDeviceFindOneByIdInputDto
);


// ████████ initialize CreateCrudEngine ███████████████████████████████████████
this.initCreateEngine
<
// create (3)
UserDeviceCreateDto,
UserDeviceCreateInputDto,
UserDeviceCreateOutputDto
>
(
// create (3)
UserDeviceCreateDto,
UserDeviceCreateInputDto,
UserDeviceCreateOutputDto
);

// ████████ initialize UpdateCrudEngine ████████████████████████████████████████
this.initUpdateEngine
<
// update (6)
UserDeviceUpdateDto,
UserDeviceUpdateInputWhereDto,
UserDeviceUpdateInputSetsDto,
UserDeviceUpdateInputDto,
UserDeviceUpdateOutputAffectedRowsDto,
UserDeviceUpdateOutputDto
>
(
// update (6)
UserDeviceUpdateDto,
UserDeviceUpdateInputWhereDto,
UserDeviceUpdateInputSetsDto,
UserDeviceUpdateInputDto,
UserDeviceUpdateOutputAffectedRowsDto,
UserDeviceUpdateOutputDto
);


// ████████ initialize DeleteCrudEngine ███████████████████████████████████████████
this.initDeleteEngine
<
// soft_delete (4)
UserDeviceSoftDeleteDto,
UserDeviceSoftDeleteInputWhereDto,
UserDeviceSoftDeleteInputDto,
UserDeviceSoftDeleteOutputDto,

// delete (4)
UserDeviceDeleteDto,
UserDeviceDeleteInputWhereDto,
UserDeviceDeleteInputDto,
UserDeviceDeleteOutputDto,

// restore (4)
UserDeviceRestoreDto,
UserDeviceRestoreInputWhereDto,
UserDeviceRestoreInputDto,
UserDeviceRestoreOutputDto
>
(
// soft_delete (4)
UserDeviceSoftDeleteDto,
UserDeviceSoftDeleteInputWhereDto,
UserDeviceSoftDeleteInputDto,
UserDeviceSoftDeleteOutputDto,

// delete (4)
UserDeviceDeleteDto,
UserDeviceDeleteInputWhereDto,
UserDeviceDeleteInputDto,
UserDeviceDeleteOutputDto,

// restore (4)
UserDeviceRestoreDto,
UserDeviceRestoreInputWhereDto,
UserDeviceRestoreInputDto,
UserDeviceRestoreOutputDto
);



// ████████ initialize UpsertCrudEngine ███████████████████████████████████████████
this.initUpsertEngine
<
// upsert (3)
UserDeviceUpsertDto,
UserDeviceUpsertInputDto,
UserDeviceUpsertOutputDto
>
(
// upsert (3)
UserDeviceUpsertDto,
UserDeviceUpsertInputDto,
UserDeviceUpsertOutputDto
);




// ████████ initialize RemoveCrudEngine ███████████████████████████████████████████
this.initRemoveEngine
<
// soft_remove (5)
UserDeviceSoftRemoveDto,
UserDeviceSoftRemoveInputWhereDto,
UserDeviceSoftRemoveInputDto,
UserDeviceSoftRemoveOutputAffectedRowsDto,
UserDeviceSoftRemoveOutputDto,

// remove (4)
UserDeviceRemoveDto,
UserDeviceRemoveInputWhereDto,
UserDeviceRemoveInputDto,
UserDeviceRemoveOutputAffectedRowsDto,
UserDeviceRemoveOutputDto,

// recover (5)
UserDeviceRecoverDto,
UserDeviceRecoverInputWhereDto,
UserDeviceRecoverInputDto,
UserDeviceRecoverOutputAffectedRowsDto,
UserDeviceRecoverOutputDto
>
(
// soft_remove (5)
UserDeviceSoftRemoveDto,
UserDeviceSoftRemoveInputWhereDto,
UserDeviceSoftRemoveInputDto,
UserDeviceSoftRemoveOutputAffectedRowsDto,
UserDeviceSoftRemoveOutputDto,

// remove (4)
UserDeviceRemoveDto,
UserDeviceRemoveInputWhereDto,
UserDeviceRemoveInputDto,
UserDeviceRemoveOutputAffectedRowsDto,
UserDeviceRemoveOutputDto,

// recover (5)
UserDeviceRecoverDto,
UserDeviceRecoverInputWhereDto,
UserDeviceRecoverInputDto,
UserDeviceRecoverOutputAffectedRowsDto,
UserDeviceRecoverOutputDto
);



// ████████ initialize UploadCrudEngine ███████████████████████████████████████████
this.initUploadEngine
<
// upload (3)
UserDeviceUploadDto,
UserDeviceUploadInputDto,
UserDeviceUploadOutputDto,

// upload_delete (3)
UserDeviceUploadDeleteDto,
UserDeviceUploadDeleteInputDto,
UserDeviceUploadDeleteOutputDto
>
(
// upload (3)
UserDeviceUploadDto,
UserDeviceUploadInputDto,
UserDeviceUploadOutputDto,

// upload_delete (3)
UserDeviceUploadDeleteDto,
UserDeviceUploadDeleteInputDto,
UserDeviceUploadDeleteOutputDto
);


// ████████ initialize ImportExportCrudEngine █████████████████████████████████████

}

}