import { UserEntity } from "./entities/user.entity";
import { Injectable } from "@nestjs/common";
import { DataSource, Repository } from "typeorm";
import { InjectRepository } from "@nestjs/typeorm";
import { ConfService, CreateCrudEngine, CrudFactory, DataValidationPipe, DeleteCrudEngine, FindCrudEngine, FindOutputPaginationDto, ImageProcessingService, LibraryAppService, LogService, RemoveCrudEngine, UpdateCrudEngine, UploadCrudEngine, UpsertCrudEngine } from "@libs/library-app";
import { SelfGraphqlMicroserviceService } from "@libs/dynamic-app";
import { UserCreateDto, UserCreateInputDto, UserCreateOutputDto, UserDeleteDto, UserDeleteInputDto, UserDeleteInputWhereDto, UserDeleteOutputDto, UserFindDto, UserFindInputDto, UserFindInputGroupByDto, UserFindInputSortOrderDto, UserFindInputWhereDto, UserFindOneByIdDto, UserFindOneByIdInputDto, UserFindOutputDto, UserFindOutputRowsDto, UserRecoverDto, UserRecoverInputDto, UserRecoverInputWhereDto, UserRecoverOutputDto, UserRecoverOutputAffectedRowsDto, UserRemoveDto, UserRemoveInputDto, UserRemoveInputWhereDto, UserRemoveOutputDto, UserRemoveOutputAffectedRowsDto, UserRestoreDto, UserRestoreInputDto, UserRestoreInputWhereDto, UserRestoreOutputDto, UserSoftDeleteDto, UserSoftDeleteInputDto, UserSoftDeleteInputWhereDto, UserSoftDeleteOutputDto, UserSoftRemoveDto, UserSoftRemoveInputDto, UserSoftRemoveInputWhereDto, UserSoftRemoveOutputDto, UserSoftRemoveOutputAffectedRowsDto, UserUpdateDto, UserUpdateInputDto, UserUpdateInputSetsDto, UserUpdateInputWhereDto, UserUpdateOutputDto, UserUpdateOutputAffectedRowsDto, UserUploadDeleteDto, UserUploadDeleteInputDto, UserUploadDeleteOutputDto, UserUploadDto, UserUploadInputDto, UserUploadOutputDto, UserUpsertDto, UserUpsertInputDto, UserUpsertOutputDto } from "./dto/user.dto";

@Injectable()
export class UserFactory extends CrudFactory<UserEntity> {

// ████████ FindCrudEngine ████████████████████████████████████████
public declare readonly findEngine: FindCrudEngine<
// entity (1)
UserEntity,

// find (8)
UserFindDto,
UserFindInputWhereDto,
UserFindInputSortOrderDto,
UserFindInputGroupByDto,
UserFindInputDto,
UserFindOutputRowsDto,
FindOutputPaginationDto,
UserFindOutputDto,

// find_one_by_id (2)
UserFindOneByIdDto,
UserFindOneByIdInputDto
>;

// ████████ CreateCrudEngine ████████████████████████████████████████
public declare readonly createEngine: CreateCrudEngine<
// entity (1)
UserEntity,

// create (3)
UserCreateDto,
UserCreateInputDto,
UserCreateOutputDto
>;

// ████████ UpdateCrudEngine ████████████████████████████████████████
public declare readonly updateEngine: UpdateCrudEngine<
// entity (1)
UserEntity,

// update (6)
UserUpdateDto,
UserUpdateInputWhereDto,
UserUpdateInputSetsDto,
UserUpdateInputDto,
UserUpdateOutputAffectedRowsDto,
UserUpdateOutputDto
>;

// ████████ DeleteCrudEngine ████████████████████████████████████████
public declare readonly deleteEngine: DeleteCrudEngine<
// entity (1)
UserEntity,

// soft_delete (4)
UserSoftDeleteDto,
UserSoftDeleteInputWhereDto,
UserSoftDeleteInputDto,
UserSoftDeleteOutputDto,

// delete (4)
UserDeleteDto,
UserDeleteInputWhereDto,
UserDeleteInputDto,
UserDeleteOutputDto,

// restore (4)
UserRestoreDto,
UserRestoreInputWhereDto,
UserRestoreInputDto,
UserRestoreOutputDto
>;

// ████████ UpsertCrudEngine ████████████████████████████████████████
public declare readonly upsertEngine: UpsertCrudEngine<
// entity (1)
UserEntity,

// upsert (3)
UserUpsertDto,
UserUpsertInputDto,
UserUpsertOutputDto
>;

// ████████ RemoveCrudEngine ████████████████████████████████████████
public declare readonly removeEngine: RemoveCrudEngine<
// entity (1)
UserEntity,

// soft_remove (5)
UserSoftRemoveDto,
UserSoftRemoveInputWhereDto,
UserSoftRemoveInputDto,
UserSoftRemoveOutputAffectedRowsDto,
UserSoftRemoveOutputDto,

// remove (4)
UserRemoveDto,
UserRemoveInputWhereDto,
UserRemoveInputDto,
UserRemoveOutputAffectedRowsDto,
UserRemoveOutputDto,

// recover (5)
UserRecoverDto,
UserRecoverInputWhereDto,
UserRecoverInputDto,
UserRecoverOutputAffectedRowsDto,
UserRecoverOutputDto
>;

// ████████ UploadCrudEngine ████████████████████████████████████████
public declare readonly uploadEngine: UploadCrudEngine<
// entity (1)
UserEntity,

// upload (3)
UserUploadDto,
UserUploadInputDto,
UserUploadOutputDto,

// upload_delete (3)
UserUploadDeleteDto,
UserUploadDeleteInputDto,
UserUploadDeleteOutputDto
>;

constructor(
// data source
protected readonly dataSource: DataSource,

@InjectRepository(UserEntity)
protected readonly repository: Repository<UserEntity>,

// dependecy services
protected readonly confService: ConfService,
protected readonly logService: LogService,
protected readonly validationPipe: DataValidationPipe,
protected readonly libraryAppService: LibraryAppService,
protected readonly selfGraphqlMicroserviceService: SelfGraphqlMicroserviceService,
protected readonly imageProcessingService: ImageProcessingService,
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
    UserEntity,
);

this.logService.setContext(UserFactory.name);

// set image processing service object to factory
this.imageProcessingService = imageProcessingService;

// ████████ initialize FindCrudEngine ██████████████████████████████████████
this.initFindEngine
<
// find (8)
UserFindDto,
UserFindInputWhereDto,
UserFindInputSortOrderDto,
UserFindInputGroupByDto,
UserFindInputDto,
UserFindOutputRowsDto,
FindOutputPaginationDto,
UserFindOutputDto,

// find_one_by_id (2)
UserFindOneByIdDto,
UserFindOneByIdInputDto
>
(
// find (8)
UserFindDto,
UserFindInputWhereDto,
UserFindInputSortOrderDto,
UserFindInputGroupByDto,
UserFindInputDto,
UserFindOutputRowsDto,
FindOutputPaginationDto,
UserFindOutputDto,

// find_one_by_id (2)
UserFindOneByIdDto,
UserFindOneByIdInputDto
);


// ████████ initialize CreateCrudEngine ███████████████████████████████████████
this.initCreateEngine
<
// create (3)
UserCreateDto,
UserCreateInputDto,
UserCreateOutputDto
>
(
// create (3)
UserCreateDto,
UserCreateInputDto,
UserCreateOutputDto
);

// ████████ initialize UpdateCrudEngine ████████████████████████████████████████
this.initUpdateEngine
<
// update (6)
UserUpdateDto,
UserUpdateInputWhereDto,
UserUpdateInputSetsDto,
UserUpdateInputDto,
UserUpdateOutputAffectedRowsDto,
UserUpdateOutputDto
>
(
// update (6)
UserUpdateDto,
UserUpdateInputWhereDto,
UserUpdateInputSetsDto,
UserUpdateInputDto,
UserUpdateOutputAffectedRowsDto,
UserUpdateOutputDto
);


// ████████ initialize DeleteCrudEngine ███████████████████████████████████████████
this.initDeleteEngine
<
// soft_delete (4)
UserSoftDeleteDto,
UserSoftDeleteInputWhereDto,
UserSoftDeleteInputDto,
UserSoftDeleteOutputDto,

// delete (4)
UserDeleteDto,
UserDeleteInputWhereDto,
UserDeleteInputDto,
UserDeleteOutputDto,

// restore (4)
UserRestoreDto,
UserRestoreInputWhereDto,
UserRestoreInputDto,
UserRestoreOutputDto
>
(
// soft_delete (4)
UserSoftDeleteDto,
UserSoftDeleteInputWhereDto,
UserSoftDeleteInputDto,
UserSoftDeleteOutputDto,

// delete (4)
UserDeleteDto,
UserDeleteInputWhereDto,
UserDeleteInputDto,
UserDeleteOutputDto,

// restore (4)
UserRestoreDto,
UserRestoreInputWhereDto,
UserRestoreInputDto,
UserRestoreOutputDto
);



// ████████ initialize UpsertCrudEngine ███████████████████████████████████████████
this.initUpsertEngine
<
// upsert (3)
UserUpsertDto,
UserUpsertInputDto,
UserUpsertOutputDto
>
(
// upsert (3)
UserUpsertDto,
UserUpsertInputDto,
UserUpsertOutputDto
);




// ████████ initialize RemoveCrudEngine ███████████████████████████████████████████
this.initRemoveEngine
<
// soft_remove (5)
UserSoftRemoveDto,
UserSoftRemoveInputWhereDto,
UserSoftRemoveInputDto,
UserSoftRemoveOutputAffectedRowsDto,
UserSoftRemoveOutputDto,

// remove (4)
UserRemoveDto,
UserRemoveInputWhereDto,
UserRemoveInputDto,
UserRemoveOutputAffectedRowsDto,
UserRemoveOutputDto,

// recover (5)
UserRecoverDto,
UserRecoverInputWhereDto,
UserRecoverInputDto,
UserRecoverOutputAffectedRowsDto,
UserRecoverOutputDto
>
(
// soft_remove (5)
UserSoftRemoveDto,
UserSoftRemoveInputWhereDto,
UserSoftRemoveInputDto,
UserSoftRemoveOutputAffectedRowsDto,
UserSoftRemoveOutputDto,

// remove (4)
UserRemoveDto,
UserRemoveInputWhereDto,
UserRemoveInputDto,
UserRemoveOutputAffectedRowsDto,
UserRemoveOutputDto,

// recover (5)
UserRecoverDto,
UserRecoverInputWhereDto,
UserRecoverInputDto,
UserRecoverOutputAffectedRowsDto,
UserRecoverOutputDto
);



// ████████ initialize UploadCrudEngine ███████████████████████████████████████████
this.initUploadEngine
<
// upload (3)
UserUploadDto,
UserUploadInputDto,
UserUploadOutputDto,

// upload_delete (3)
UserUploadDeleteDto,
UserUploadDeleteInputDto,
UserUploadDeleteOutputDto
>
(
// upload (3)
UserUploadDto,
UserUploadInputDto,
UserUploadOutputDto,

// upload_delete (3)
UserUploadDeleteDto,
UserUploadDeleteInputDto,
UserUploadDeleteOutputDto
);


// ████████ initialize ImportExportCrudEngine █████████████████████████████████████

}

}