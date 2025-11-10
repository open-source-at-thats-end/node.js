import { UserAuthenticationEntity } from "./entities/user.auth.entity";
import { Injectable } from "@nestjs/common";
import { DataSource, Repository } from "typeorm";
import { InjectRepository } from "@nestjs/typeorm";
import { ConfService, CreateCrudEngine, CrudFactory, DataValidationPipe, DeleteCrudEngine, FindCrudEngine, FindOutputPaginationDto, LibraryAppService, LogService, RemoveCrudEngine, UpdateCrudEngine, UploadCrudEngine, UpsertCrudEngine } from "@libs/library-app";
import { SelfGraphqlMicroserviceService } from "@libs/dynamic-app";
import { UserAuthenticationCreateDto, UserAuthenticationCreateInputDto, UserAuthenticationCreateOutputDto, UserAuthenticationDeleteDto, UserAuthenticationDeleteInputDto, UserAuthenticationDeleteInputWhereDto, UserAuthenticationDeleteOutputDto, UserAuthenticationFindDto, UserAuthenticationFindInputDto, UserAuthenticationFindInputGroupByDto, UserAuthenticationFindInputSortOrderDto, UserAuthenticationFindInputWhereDto, UserAuthenticationFindOneByIdDto, UserAuthenticationFindOneByIdInputDto, UserAuthenticationFindOutputDto, UserAuthenticationFindOutputRowsDto, UserAuthenticationRecoverDto, UserAuthenticationRecoverInputDto, UserAuthenticationRecoverInputWhereDto, UserAuthenticationRecoverOutputDto, UserAuthenticationRecoverOutputAffectedRowsDto, UserAuthenticationRemoveDto, UserAuthenticationRemoveInputDto, UserAuthenticationRemoveInputWhereDto, UserAuthenticationRemoveOutputDto, UserAuthenticationRemoveOutputAffectedRowsDto, UserAuthenticationRestoreDto, UserAuthenticationRestoreInputDto, UserAuthenticationRestoreInputWhereDto, UserAuthenticationRestoreOutputDto, UserAuthenticationSoftDeleteDto, UserAuthenticationSoftDeleteInputDto, UserAuthenticationSoftDeleteInputWhereDto, UserAuthenticationSoftDeleteOutputDto, UserAuthenticationSoftRemoveDto, UserAuthenticationSoftRemoveInputDto, UserAuthenticationSoftRemoveInputWhereDto, UserAuthenticationSoftRemoveOutputDto, UserAuthenticationSoftRemoveOutputAffectedRowsDto, UserAuthenticationUpdateDto, UserAuthenticationUpdateInputDto, UserAuthenticationUpdateInputSetsDto, UserAuthenticationUpdateInputWhereDto, UserAuthenticationUpdateOutputDto, UserAuthenticationUpdateOutputAffectedRowsDto, UserAuthenticationUploadDeleteDto, UserAuthenticationUploadDeleteInputDto, UserAuthenticationUploadDeleteOutputDto, UserAuthenticationUploadDto, UserAuthenticationUploadInputDto, UserAuthenticationUploadOutputDto, UserAuthenticationUpsertDto, UserAuthenticationUpsertInputDto, UserAuthenticationUpsertOutputDto } from "./dto/user.auth.webmaster.dto";

@Injectable()
export class UserAuthenticationWebmasterFactory extends CrudFactory<UserAuthenticationEntity> {

// ████████ FindCrudEngine ████████████████████████████████████████
public declare readonly findEngine: FindCrudEngine<
// entity (1)
UserAuthenticationEntity,

// find (8)
UserAuthenticationFindDto,
UserAuthenticationFindInputWhereDto,
UserAuthenticationFindInputSortOrderDto,
UserAuthenticationFindInputGroupByDto,
UserAuthenticationFindInputDto,
UserAuthenticationFindOutputRowsDto,
FindOutputPaginationDto,
UserAuthenticationFindOutputDto,

// find_one_by_id (2)
UserAuthenticationFindOneByIdDto,
UserAuthenticationFindOneByIdInputDto
>;

// ████████ CreateCrudEngine ████████████████████████████████████████
public declare readonly createEngine: CreateCrudEngine<
// entity (1)
UserAuthenticationEntity,

// create (3)
UserAuthenticationCreateDto,
UserAuthenticationCreateInputDto,
UserAuthenticationCreateOutputDto
>;

// ████████ UpdateCrudEngine ████████████████████████████████████████
public declare readonly updateEngine: UpdateCrudEngine<
// entity (1)
UserAuthenticationEntity,

// update (6)
UserAuthenticationUpdateDto,
UserAuthenticationUpdateInputWhereDto,
UserAuthenticationUpdateInputSetsDto,
UserAuthenticationUpdateInputDto,
UserAuthenticationUpdateOutputAffectedRowsDto,
UserAuthenticationUpdateOutputDto
>;

// ████████ DeleteCrudEngine ████████████████████████████████████████
public declare readonly deleteEngine: DeleteCrudEngine<
// entity (1)
UserAuthenticationEntity,

// soft_delete (4)
UserAuthenticationSoftDeleteDto,
UserAuthenticationSoftDeleteInputWhereDto,
UserAuthenticationSoftDeleteInputDto,
UserAuthenticationSoftDeleteOutputDto,

// delete (4)
UserAuthenticationDeleteDto,
UserAuthenticationDeleteInputWhereDto,
UserAuthenticationDeleteInputDto,
UserAuthenticationDeleteOutputDto,

// restore (4)
UserAuthenticationRestoreDto,
UserAuthenticationRestoreInputWhereDto,
UserAuthenticationRestoreInputDto,
UserAuthenticationRestoreOutputDto
>;

// ████████ UpsertCrudEngine ████████████████████████████████████████
public declare readonly upsertEngine: UpsertCrudEngine<
// entity (1)
UserAuthenticationEntity,

// upsert (3)
UserAuthenticationUpsertDto,
UserAuthenticationUpsertInputDto,
UserAuthenticationUpsertOutputDto
>;

// ████████ RemoveCrudEngine ████████████████████████████████████████
public declare readonly removeEngine: RemoveCrudEngine<
// entity (1)
UserAuthenticationEntity,

// soft_remove (5)
UserAuthenticationSoftRemoveDto,
UserAuthenticationSoftRemoveInputWhereDto,
UserAuthenticationSoftRemoveInputDto,
UserAuthenticationSoftRemoveOutputAffectedRowsDto,
UserAuthenticationSoftRemoveOutputDto,

// remove (4)
UserAuthenticationRemoveDto,
UserAuthenticationRemoveInputWhereDto,
UserAuthenticationRemoveInputDto,
UserAuthenticationRemoveOutputAffectedRowsDto,
UserAuthenticationRemoveOutputDto,

// recover (5)
UserAuthenticationRecoverDto,
UserAuthenticationRecoverInputWhereDto,
UserAuthenticationRecoverInputDto,
UserAuthenticationRecoverOutputAffectedRowsDto,
UserAuthenticationRecoverOutputDto
>;

// ████████ UploadCrudEngine ████████████████████████████████████████
public declare readonly uploadEngine: UploadCrudEngine<
// entity (1)
UserAuthenticationEntity,

// upload (3)
UserAuthenticationUploadDto,
UserAuthenticationUploadInputDto,
UserAuthenticationUploadOutputDto,

// upload_delete (3)
UserAuthenticationUploadDeleteDto,
UserAuthenticationUploadDeleteInputDto,
UserAuthenticationUploadDeleteOutputDto
>;

constructor(
// data source
protected readonly dataSource: DataSource,

@InjectRepository(UserAuthenticationEntity)
protected readonly repository: Repository<UserAuthenticationEntity>,

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
    UserAuthenticationEntity,
);

this.logService.setContext(UserAuthenticationWebmasterFactory.name);

// ████████ initialize FindCrudEngine ██████████████████████████████████████
this.initFindEngine
<
// find (8)
UserAuthenticationFindDto,
UserAuthenticationFindInputWhereDto,
UserAuthenticationFindInputSortOrderDto,
UserAuthenticationFindInputGroupByDto,
UserAuthenticationFindInputDto,
UserAuthenticationFindOutputRowsDto,
FindOutputPaginationDto,
UserAuthenticationFindOutputDto,

// find_one_by_id (2)
UserAuthenticationFindOneByIdDto,
UserAuthenticationFindOneByIdInputDto
>
(
// find (8)
UserAuthenticationFindDto,
UserAuthenticationFindInputWhereDto,
UserAuthenticationFindInputSortOrderDto,
UserAuthenticationFindInputGroupByDto,
UserAuthenticationFindInputDto,
UserAuthenticationFindOutputRowsDto,
FindOutputPaginationDto,
UserAuthenticationFindOutputDto,

// find_one_by_id (2)
UserAuthenticationFindOneByIdDto,
UserAuthenticationFindOneByIdInputDto
);


// ████████ initialize CreateCrudEngine ███████████████████████████████████████
this.initCreateEngine
<
// create (3)
UserAuthenticationCreateDto,
UserAuthenticationCreateInputDto,
UserAuthenticationCreateOutputDto
>
(
// create (3)
UserAuthenticationCreateDto,
UserAuthenticationCreateInputDto,
UserAuthenticationCreateOutputDto
);

// ████████ initialize UpdateCrudEngine ████████████████████████████████████████
this.initUpdateEngine
<
// update (6)
UserAuthenticationUpdateDto,
UserAuthenticationUpdateInputWhereDto,
UserAuthenticationUpdateInputSetsDto,
UserAuthenticationUpdateInputDto,
UserAuthenticationUpdateOutputAffectedRowsDto,
UserAuthenticationUpdateOutputDto
>
(
// update (6)
UserAuthenticationUpdateDto,
UserAuthenticationUpdateInputWhereDto,
UserAuthenticationUpdateInputSetsDto,
UserAuthenticationUpdateInputDto,
UserAuthenticationUpdateOutputAffectedRowsDto,
UserAuthenticationUpdateOutputDto
);


// ████████ initialize DeleteCrudEngine ███████████████████████████████████████████
this.initDeleteEngine
<
// soft_delete (4)
UserAuthenticationSoftDeleteDto,
UserAuthenticationSoftDeleteInputWhereDto,
UserAuthenticationSoftDeleteInputDto,
UserAuthenticationSoftDeleteOutputDto,

// delete (4)
UserAuthenticationDeleteDto,
UserAuthenticationDeleteInputWhereDto,
UserAuthenticationDeleteInputDto,
UserAuthenticationDeleteOutputDto,

// restore (4)
UserAuthenticationRestoreDto,
UserAuthenticationRestoreInputWhereDto,
UserAuthenticationRestoreInputDto,
UserAuthenticationRestoreOutputDto
>
(
// soft_delete (4)
UserAuthenticationSoftDeleteDto,
UserAuthenticationSoftDeleteInputWhereDto,
UserAuthenticationSoftDeleteInputDto,
UserAuthenticationSoftDeleteOutputDto,

// delete (4)
UserAuthenticationDeleteDto,
UserAuthenticationDeleteInputWhereDto,
UserAuthenticationDeleteInputDto,
UserAuthenticationDeleteOutputDto,

// restore (4)
UserAuthenticationRestoreDto,
UserAuthenticationRestoreInputWhereDto,
UserAuthenticationRestoreInputDto,
UserAuthenticationRestoreOutputDto
);



// ████████ initialize UpsertCrudEngine ███████████████████████████████████████████
this.initUpsertEngine
<
// upsert (3)
UserAuthenticationUpsertDto,
UserAuthenticationUpsertInputDto,
UserAuthenticationUpsertOutputDto
>
(
// upsert (3)
UserAuthenticationUpsertDto,
UserAuthenticationUpsertInputDto,
UserAuthenticationUpsertOutputDto
);




// ████████ initialize RemoveCrudEngine ███████████████████████████████████████████
this.initRemoveEngine
<
// soft_remove (5)
UserAuthenticationSoftRemoveDto,
UserAuthenticationSoftRemoveInputWhereDto,
UserAuthenticationSoftRemoveInputDto,
UserAuthenticationSoftRemoveOutputAffectedRowsDto,
UserAuthenticationSoftRemoveOutputDto,

// remove (4)
UserAuthenticationRemoveDto,
UserAuthenticationRemoveInputWhereDto,
UserAuthenticationRemoveInputDto,
UserAuthenticationRemoveOutputAffectedRowsDto,
UserAuthenticationRemoveOutputDto,

// recover (5)
UserAuthenticationRecoverDto,
UserAuthenticationRecoverInputWhereDto,
UserAuthenticationRecoverInputDto,
UserAuthenticationRecoverOutputAffectedRowsDto,
UserAuthenticationRecoverOutputDto
>
(
// soft_remove (5)
UserAuthenticationSoftRemoveDto,
UserAuthenticationSoftRemoveInputWhereDto,
UserAuthenticationSoftRemoveInputDto,
UserAuthenticationSoftRemoveOutputAffectedRowsDto,
UserAuthenticationSoftRemoveOutputDto,

// remove (4)
UserAuthenticationRemoveDto,
UserAuthenticationRemoveInputWhereDto,
UserAuthenticationRemoveInputDto,
UserAuthenticationRemoveOutputAffectedRowsDto,
UserAuthenticationRemoveOutputDto,

// recover (5)
UserAuthenticationRecoverDto,
UserAuthenticationRecoverInputWhereDto,
UserAuthenticationRecoverInputDto,
UserAuthenticationRecoverOutputAffectedRowsDto,
UserAuthenticationRecoverOutputDto
);



// ████████ initialize UploadCrudEngine ███████████████████████████████████████████
this.initUploadEngine
<
// upload (3)
UserAuthenticationUploadDto,
UserAuthenticationUploadInputDto,
UserAuthenticationUploadOutputDto,

// upload_delete (3)
UserAuthenticationUploadDeleteDto,
UserAuthenticationUploadDeleteInputDto,
UserAuthenticationUploadDeleteOutputDto
>
(
// upload (3)
UserAuthenticationUploadDto,
UserAuthenticationUploadInputDto,
UserAuthenticationUploadOutputDto,

// upload_delete (3)
UserAuthenticationUploadDeleteDto,
UserAuthenticationUploadDeleteInputDto,
UserAuthenticationUploadDeleteOutputDto
);


// ████████ initialize ImportExportCrudEngine █████████████████████████████████████

}

}