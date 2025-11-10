import { UserFavouritePropertyEntity } from "./entities/user.favourite.property.entity";
import { Injectable } from "@nestjs/common";
import { DataSource, Repository } from "typeorm";
import { InjectRepository } from "@nestjs/typeorm";
import { ConfService, CreateCrudEngine, CrudFactory, DataValidationPipe, DeleteCrudEngine, FindCrudEngine, FindOutputPaginationDto, LibraryAppService, LogService, RemoveCrudEngine, UpdateCrudEngine, UploadCrudEngine, UpsertCrudEngine  } from "@libs/library-app";
import { UserFavouritePropertyCreateDto, UserFavouritePropertyCreateInputDto, UserFavouritePropertyCreateOutputDto, UserFavouritePropertyDeleteDto, UserFavouritePropertyDeleteInputDto, UserFavouritePropertyDeleteInputWhereDto, UserFavouritePropertyDeleteOutputDto, UserFavouritePropertyFindDto, UserFavouritePropertyFindInputDto, UserFavouritePropertyFindInputGroupByDto, UserFavouritePropertyFindInputSortOrderDto, UserFavouritePropertyFindInputWhereDto, UserFavouritePropertyFindOneByIdDto, UserFavouritePropertyFindOneByIdInputDto, UserFavouritePropertyFindOutputDto, UserFavouritePropertyFindOutputRowsDto, UserFavouritePropertyRecoverDto, UserFavouritePropertyRecoverInputDto, UserFavouritePropertyRecoverInputWhereDto, UserFavouritePropertyRecoverOutputDto, UserFavouritePropertyRecoverOutputAffectedRowsDto, UserFavouritePropertyRemoveDto, UserFavouritePropertyRemoveInputDto, UserFavouritePropertyRemoveInputWhereDto, UserFavouritePropertyRemoveOutputDto, UserFavouritePropertyRemoveOutputAffectedRowsDto, UserFavouritePropertyRestoreDto, UserFavouritePropertyRestoreInputDto, UserFavouritePropertyRestoreInputWhereDto, UserFavouritePropertyRestoreOutputDto, UserFavouritePropertySoftDeleteDto, UserFavouritePropertySoftDeleteInputDto, UserFavouritePropertySoftDeleteInputWhereDto, UserFavouritePropertySoftDeleteOutputDto, UserFavouritePropertySoftRemoveDto, UserFavouritePropertySoftRemoveInputDto, UserFavouritePropertySoftRemoveInputWhereDto, UserFavouritePropertySoftRemoveOutputDto, UserFavouritePropertySoftRemoveOutputAffectedRowsDto, UserFavouritePropertyUpdateDto, UserFavouritePropertyUpdateInputDto, UserFavouritePropertyUpdateInputSetsDto, UserFavouritePropertyUpdateInputWhereDto, UserFavouritePropertyUpdateOutputDto, UserFavouritePropertyUpdateOutputAffectedRowsDto, UserFavouritePropertyUploadDeleteDto, UserFavouritePropertyUploadDeleteInputDto, UserFavouritePropertyUploadDeleteOutputDto, UserFavouritePropertyUploadDto, UserFavouritePropertyUploadInputDto, UserFavouritePropertyUploadOutputDto, UserFavouritePropertyUpsertDto, UserFavouritePropertyUpsertInputDto, UserFavouritePropertyUpsertOutputDto } from "./dto/user.favourite.property.dto";
import { SelfGraphqlMicroserviceService } from "@libs/dynamic-app";

@Injectable()
export class UserFavouritePropertyFactory extends CrudFactory<UserFavouritePropertyEntity> {

// ████████ FindCrudEngine ████████████████████████████████████████
public declare readonly findEngine: FindCrudEngine<
// entity (1)
UserFavouritePropertyEntity,

// find (8)
UserFavouritePropertyFindDto,
UserFavouritePropertyFindInputWhereDto,
UserFavouritePropertyFindInputSortOrderDto,
UserFavouritePropertyFindInputGroupByDto,
UserFavouritePropertyFindInputDto,
UserFavouritePropertyFindOutputRowsDto,
FindOutputPaginationDto,
UserFavouritePropertyFindOutputDto,

// find_one_by_id (2)
UserFavouritePropertyFindOneByIdDto,
UserFavouritePropertyFindOneByIdInputDto
>;

// ████████ CreateCrudEngine ████████████████████████████████████████
public declare readonly createEngine: CreateCrudEngine<
// entity (1)
UserFavouritePropertyEntity,

// create (3)
UserFavouritePropertyCreateDto,
UserFavouritePropertyCreateInputDto,
UserFavouritePropertyCreateOutputDto
>;

// ████████ UpdateCrudEngine ████████████████████████████████████████
public declare readonly updateEngine: UpdateCrudEngine<
// entity (1)
UserFavouritePropertyEntity,

// update (6)
UserFavouritePropertyUpdateDto,
UserFavouritePropertyUpdateInputWhereDto,
UserFavouritePropertyUpdateInputSetsDto,
UserFavouritePropertyUpdateInputDto,
UserFavouritePropertyUpdateOutputAffectedRowsDto,
UserFavouritePropertyUpdateOutputDto
>;

// ████████ DeleteCrudEngine ████████████████████████████████████████
public declare readonly deleteEngine: DeleteCrudEngine<
// entity (1)
UserFavouritePropertyEntity,

// soft_delete (4)
UserFavouritePropertySoftDeleteDto,
UserFavouritePropertySoftDeleteInputWhereDto,
UserFavouritePropertySoftDeleteInputDto,
UserFavouritePropertySoftDeleteOutputDto,

// delete (4)
UserFavouritePropertyDeleteDto,
UserFavouritePropertyDeleteInputWhereDto,
UserFavouritePropertyDeleteInputDto,
UserFavouritePropertyDeleteOutputDto,

// restore (4)
UserFavouritePropertyRestoreDto,
UserFavouritePropertyRestoreInputWhereDto,
UserFavouritePropertyRestoreInputDto,
UserFavouritePropertyRestoreOutputDto
>;

// ████████ UpsertCrudEngine ████████████████████████████████████████
public declare readonly upsertEngine: UpsertCrudEngine<
// entity (1)
UserFavouritePropertyEntity,

// upsert (3)
UserFavouritePropertyUpsertDto,
UserFavouritePropertyUpsertInputDto,
UserFavouritePropertyUpsertOutputDto
>;

// ████████ RemoveCrudEngine ████████████████████████████████████████
public declare readonly removeEngine: RemoveCrudEngine<
// entity (1)
UserFavouritePropertyEntity,

// soft_remove (5)
UserFavouritePropertySoftRemoveDto,
UserFavouritePropertySoftRemoveInputWhereDto,
UserFavouritePropertySoftRemoveInputDto,
UserFavouritePropertySoftRemoveOutputAffectedRowsDto,
UserFavouritePropertySoftRemoveOutputDto,

// remove (4)
UserFavouritePropertyRemoveDto,
UserFavouritePropertyRemoveInputWhereDto,
UserFavouritePropertyRemoveInputDto,
UserFavouritePropertyRemoveOutputAffectedRowsDto,
UserFavouritePropertyRemoveOutputDto,

// recover (5)
UserFavouritePropertyRecoverDto,
UserFavouritePropertyRecoverInputWhereDto,
UserFavouritePropertyRecoverInputDto,
UserFavouritePropertyRecoverOutputAffectedRowsDto,
UserFavouritePropertyRecoverOutputDto
>;

// ████████ UploadCrudEngine ████████████████████████████████████████
public declare readonly uploadEngine: UploadCrudEngine<
// entity (1)
UserFavouritePropertyEntity,

// upload (3)
UserFavouritePropertyUploadDto,
UserFavouritePropertyUploadInputDto,
UserFavouritePropertyUploadOutputDto,

// upload_delete (3)
UserFavouritePropertyUploadDeleteDto,
UserFavouritePropertyUploadDeleteInputDto,
UserFavouritePropertyUploadDeleteOutputDto
>;

constructor(
// data source
protected readonly dataSource: DataSource,

@InjectRepository(UserFavouritePropertyEntity)
protected readonly repository: Repository<UserFavouritePropertyEntity>,

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

    // entity (1)
    UserFavouritePropertyEntity,
);

this.logService.setContext(UserFavouritePropertyFactory.name);

// ████████ initialize FindCrudEngine ██████████████████████████████████████
this.initFindEngine
<
// find (8)
UserFavouritePropertyFindDto,
UserFavouritePropertyFindInputWhereDto,
UserFavouritePropertyFindInputSortOrderDto,
UserFavouritePropertyFindInputGroupByDto,
UserFavouritePropertyFindInputDto,
UserFavouritePropertyFindOutputRowsDto,
FindOutputPaginationDto,
UserFavouritePropertyFindOutputDto,

// find_one_by_id (2)
UserFavouritePropertyFindOneByIdDto,
UserFavouritePropertyFindOneByIdInputDto
>
(
// find (8)
UserFavouritePropertyFindDto,
UserFavouritePropertyFindInputWhereDto,
UserFavouritePropertyFindInputSortOrderDto,
UserFavouritePropertyFindInputGroupByDto,
UserFavouritePropertyFindInputDto,
UserFavouritePropertyFindOutputRowsDto,
FindOutputPaginationDto,
UserFavouritePropertyFindOutputDto,

// find_one_by_id (2)
UserFavouritePropertyFindOneByIdDto,
UserFavouritePropertyFindOneByIdInputDto
);


// ████████ initialize CreateCrudEngine ███████████████████████████████████████
this.initCreateEngine
<
// create (3)
UserFavouritePropertyCreateDto,
UserFavouritePropertyCreateInputDto,
UserFavouritePropertyCreateOutputDto
>
(
// create (3)
UserFavouritePropertyCreateDto,
UserFavouritePropertyCreateInputDto,
UserFavouritePropertyCreateOutputDto
);

// ████████ initialize UpdateCrudEngine ████████████████████████████████████████
this.initUpdateEngine
<
// update (6)
UserFavouritePropertyUpdateDto,
UserFavouritePropertyUpdateInputWhereDto,
UserFavouritePropertyUpdateInputSetsDto,
UserFavouritePropertyUpdateInputDto,
UserFavouritePropertyUpdateOutputAffectedRowsDto,
UserFavouritePropertyUpdateOutputDto
>
(
// update (6)
UserFavouritePropertyUpdateDto,
UserFavouritePropertyUpdateInputWhereDto,
UserFavouritePropertyUpdateInputSetsDto,
UserFavouritePropertyUpdateInputDto,
UserFavouritePropertyUpdateOutputAffectedRowsDto,
UserFavouritePropertyUpdateOutputDto
);


// ████████ initialize DeleteCrudEngine ███████████████████████████████████████████
this.initDeleteEngine
<
// soft_delete (4)
UserFavouritePropertySoftDeleteDto,
UserFavouritePropertySoftDeleteInputWhereDto,
UserFavouritePropertySoftDeleteInputDto,
UserFavouritePropertySoftDeleteOutputDto,

// delete (4)
UserFavouritePropertyDeleteDto,
UserFavouritePropertyDeleteInputWhereDto,
UserFavouritePropertyDeleteInputDto,
UserFavouritePropertyDeleteOutputDto,

// restore (4)
UserFavouritePropertyRestoreDto,
UserFavouritePropertyRestoreInputWhereDto,
UserFavouritePropertyRestoreInputDto,
UserFavouritePropertyRestoreOutputDto
>
(
// soft_delete (4)
UserFavouritePropertySoftDeleteDto,
UserFavouritePropertySoftDeleteInputWhereDto,
UserFavouritePropertySoftDeleteInputDto,
UserFavouritePropertySoftDeleteOutputDto,

// delete (4)
UserFavouritePropertyDeleteDto,
UserFavouritePropertyDeleteInputWhereDto,
UserFavouritePropertyDeleteInputDto,
UserFavouritePropertyDeleteOutputDto,

// restore (4)
UserFavouritePropertyRestoreDto,
UserFavouritePropertyRestoreInputWhereDto,
UserFavouritePropertyRestoreInputDto,
UserFavouritePropertyRestoreOutputDto
);



// ████████ initialize UpsertCrudEngine ███████████████████████████████████████████
this.initUpsertEngine
<
// upsert (3)
UserFavouritePropertyUpsertDto,
UserFavouritePropertyUpsertInputDto,
UserFavouritePropertyUpsertOutputDto
>
(
// upsert (3)
UserFavouritePropertyUpsertDto,
UserFavouritePropertyUpsertInputDto,
UserFavouritePropertyUpsertOutputDto
);




// ████████ initialize RemoveCrudEngine ███████████████████████████████████████████
this.initRemoveEngine
<
// soft_remove (5)
UserFavouritePropertySoftRemoveDto,
UserFavouritePropertySoftRemoveInputWhereDto,
UserFavouritePropertySoftRemoveInputDto,
UserFavouritePropertySoftRemoveOutputAffectedRowsDto,
UserFavouritePropertySoftRemoveOutputDto,

// remove (4)
UserFavouritePropertyRemoveDto,
UserFavouritePropertyRemoveInputWhereDto,
UserFavouritePropertyRemoveInputDto,
UserFavouritePropertyRemoveOutputAffectedRowsDto,
UserFavouritePropertyRemoveOutputDto,

// recover (5)
UserFavouritePropertyRecoverDto,
UserFavouritePropertyRecoverInputWhereDto,
UserFavouritePropertyRecoverInputDto,
UserFavouritePropertyRecoverOutputAffectedRowsDto,
UserFavouritePropertyRecoverOutputDto
>
(
// soft_remove (5)
UserFavouritePropertySoftRemoveDto,
UserFavouritePropertySoftRemoveInputWhereDto,
UserFavouritePropertySoftRemoveInputDto,
UserFavouritePropertySoftRemoveOutputAffectedRowsDto,
UserFavouritePropertySoftRemoveOutputDto,

// remove (4)
UserFavouritePropertyRemoveDto,
UserFavouritePropertyRemoveInputWhereDto,
UserFavouritePropertyRemoveInputDto,
UserFavouritePropertyRemoveOutputAffectedRowsDto,
UserFavouritePropertyRemoveOutputDto,

// recover (5)
UserFavouritePropertyRecoverDto,
UserFavouritePropertyRecoverInputWhereDto,
UserFavouritePropertyRecoverInputDto,
UserFavouritePropertyRecoverOutputAffectedRowsDto,
UserFavouritePropertyRecoverOutputDto
);



// ████████ initialize UploadCrudEngine ███████████████████████████████████████████
this.initUploadEngine
<
// upload (3)
UserFavouritePropertyUploadDto,
UserFavouritePropertyUploadInputDto,
UserFavouritePropertyUploadOutputDto,

// upload_delete (3)
UserFavouritePropertyUploadDeleteDto,
UserFavouritePropertyUploadDeleteInputDto,
UserFavouritePropertyUploadDeleteOutputDto
>
(
// upload (3)
UserFavouritePropertyUploadDto,
UserFavouritePropertyUploadInputDto,
UserFavouritePropertyUploadOutputDto,

// upload_delete (3)
UserFavouritePropertyUploadDeleteDto,
UserFavouritePropertyUploadDeleteInputDto,
UserFavouritePropertyUploadDeleteOutputDto
);


// ████████ initialize ImportExportCrudEngine █████████████████████████████████████

}}