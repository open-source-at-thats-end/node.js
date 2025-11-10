import { UserFavEntity } from "./entities/user.fav.entity";
import { Injectable } from "@nestjs/common";
import { DataSource, Repository } from "typeorm";
import { InjectRepository } from "@nestjs/typeorm";
import { ConfService, CreateCrudEngine, CrudFactory, DataValidationPipe, DeleteCrudEngine, FindCrudEngine, FindOutputPaginationDto, LibraryAppService, LogService, RemoveCrudEngine, UpdateCrudEngine, UploadCrudEngine, UpsertCrudEngine } from "@libs/library-app";
import { SelfGraphqlMicroserviceService } from '@libs/dynamic-app';
import { UserFavCreateDto, UserFavCreateInputDto, UserFavCreateOutputDto, UserFavDeleteDto, UserFavDeleteInputDto, UserFavDeleteInputWhereDto, UserFavDeleteOutputDto, UserFavFindDto, UserFavFindInputDto, UserFavFindInputGroupByDto, UserFavFindInputSortOrderDto, UserFavFindInputWhereDto, UserFavFindOneByIdDto, UserFavFindOneByIdInputDto, UserFavFindOutputDto, UserFavFindOutputRowsDto, UserFavRecoverDto, UserFavRecoverInputDto, UserFavRecoverInputWhereDto, UserFavRecoverOutputDto, UserFavRecoverOutputAffectedRowsDto, UserFavRemoveDto, UserFavRemoveInputDto, UserFavRemoveInputWhereDto, UserFavRemoveOutputDto, UserFavRemoveOutputAffectedRowsDto, UserFavRestoreDto, UserFavRestoreInputDto, UserFavRestoreInputWhereDto, UserFavRestoreOutputDto, UserFavSoftDeleteDto, UserFavSoftDeleteInputDto, UserFavSoftDeleteInputWhereDto, UserFavSoftDeleteOutputDto, UserFavSoftRemoveDto, UserFavSoftRemoveInputDto, UserFavSoftRemoveInputWhereDto, UserFavSoftRemoveOutputDto, UserFavSoftRemoveOutputAffectedRowsDto, UserFavUpdateDto, UserFavUpdateInputDto, UserFavUpdateInputSetsDto, UserFavUpdateInputWhereDto, UserFavUpdateOutputDto, UserFavUpdateOutputAffectedRowsDto, UserFavUploadDeleteDto, UserFavUploadDeleteInputDto, UserFavUploadDeleteOutputDto, UserFavUploadDto, UserFavUploadInputDto, UserFavUploadOutputDto, UserFavUpsertDto, UserFavUpsertInputDto, UserFavUpsertOutputDto } from "./dto/user.fav.dto";

@Injectable()
export class UserFavFactory extends CrudFactory<UserFavEntity> {

// ████████ FindCrudEngine ████████████████████████████████████████
public declare readonly findEngine: FindCrudEngine<
// entity (1)
UserFavEntity,

// find (8)
UserFavFindDto,
UserFavFindInputWhereDto,
UserFavFindInputSortOrderDto,
UserFavFindInputGroupByDto,
UserFavFindInputDto,
UserFavFindOutputRowsDto,
FindOutputPaginationDto,
UserFavFindOutputDto,

// find_one_by_id (2)
UserFavFindOneByIdDto,
UserFavFindOneByIdInputDto
>;

// ████████ CreateCrudEngine ████████████████████████████████████████
public declare readonly createEngine: CreateCrudEngine<
// entity (1)
UserFavEntity,

// create (3)
UserFavCreateDto,
UserFavCreateInputDto,
UserFavCreateOutputDto
>;

// ████████ UpdateCrudEngine ████████████████████████████████████████
public declare readonly updateEngine: UpdateCrudEngine<
// entity (1)
UserFavEntity,

// update (6)
UserFavUpdateDto,
UserFavUpdateInputWhereDto,
UserFavUpdateInputSetsDto,
UserFavUpdateInputDto,
UserFavUpdateOutputAffectedRowsDto,
UserFavUpdateOutputDto
>;

// ████████ DeleteCrudEngine ████████████████████████████████████████
public declare readonly deleteEngine: DeleteCrudEngine<
// entity (1)
UserFavEntity,

// soft_delete (4)
UserFavSoftDeleteDto,
UserFavSoftDeleteInputWhereDto,
UserFavSoftDeleteInputDto,
UserFavSoftDeleteOutputDto,

// delete (4)
UserFavDeleteDto,
UserFavDeleteInputWhereDto,
UserFavDeleteInputDto,
UserFavDeleteOutputDto,

// restore (4)
UserFavRestoreDto,
UserFavRestoreInputWhereDto,
UserFavRestoreInputDto,
UserFavRestoreOutputDto
>;

// ████████ UpsertCrudEngine ████████████████████████████████████████
public declare readonly upsertEngine: UpsertCrudEngine<
// entity (1)
UserFavEntity,

// upsert (3)
UserFavUpsertDto,
UserFavUpsertInputDto,
UserFavUpsertOutputDto
>;

// ████████ RemoveCrudEngine ████████████████████████████████████████
public declare readonly removeEngine: RemoveCrudEngine<
// entity (1)
UserFavEntity,

// soft_remove (5)
UserFavSoftRemoveDto,
UserFavSoftRemoveInputWhereDto,
UserFavSoftRemoveInputDto,
UserFavSoftRemoveOutputAffectedRowsDto,
UserFavSoftRemoveOutputDto,

// remove (4)
UserFavRemoveDto,
UserFavRemoveInputWhereDto,
UserFavRemoveInputDto,
UserFavRemoveOutputAffectedRowsDto,
UserFavRemoveOutputDto,

// recover (5)
UserFavRecoverDto,
UserFavRecoverInputWhereDto,
UserFavRecoverInputDto,
UserFavRecoverOutputAffectedRowsDto,
UserFavRecoverOutputDto
>;

// ████████ UploadCrudEngine ████████████████████████████████████████
public declare readonly uploadEngine: UploadCrudEngine<
// entity (1)
UserFavEntity,

// upload (3)
UserFavUploadDto,
UserFavUploadInputDto,
UserFavUploadOutputDto,

// upload_delete (3)
UserFavUploadDeleteDto,
UserFavUploadDeleteInputDto,
UserFavUploadDeleteOutputDto
>;

constructor(
// data source
protected readonly dataSource: DataSource,

@InjectRepository(UserFavEntity)
protected readonly repository: Repository<UserFavEntity>,

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
    UserFavEntity,
);

this.logService.setContext(UserFavFactory.name);

// ████████ initialize FindCrudEngine ██████████████████████████████████████
this.initFindEngine
<
// find (8)
UserFavFindDto,
UserFavFindInputWhereDto,
UserFavFindInputSortOrderDto,
UserFavFindInputGroupByDto,
UserFavFindInputDto,
UserFavFindOutputRowsDto,
FindOutputPaginationDto,
UserFavFindOutputDto,

// find_one_by_id (2)
UserFavFindOneByIdDto,
UserFavFindOneByIdInputDto
>
(
// find (8)
UserFavFindDto,
UserFavFindInputWhereDto,
UserFavFindInputSortOrderDto,
UserFavFindInputGroupByDto,
UserFavFindInputDto,
UserFavFindOutputRowsDto,
FindOutputPaginationDto,
UserFavFindOutputDto,

// find_one_by_id (2)
UserFavFindOneByIdDto,
UserFavFindOneByIdInputDto
);


// ████████ initialize CreateCrudEngine ███████████████████████████████████████
this.initCreateEngine
<
// create (3)
UserFavCreateDto,
UserFavCreateInputDto,
UserFavCreateOutputDto
>
(
// create (3)
UserFavCreateDto,
UserFavCreateInputDto,
UserFavCreateOutputDto
);

// ████████ initialize UpdateCrudEngine ████████████████████████████████████████
this.initUpdateEngine
<
// update (6)
UserFavUpdateDto,
UserFavUpdateInputWhereDto,
UserFavUpdateInputSetsDto,
UserFavUpdateInputDto,
UserFavUpdateOutputAffectedRowsDto,
UserFavUpdateOutputDto
>
(
// update (6)
UserFavUpdateDto,
UserFavUpdateInputWhereDto,
UserFavUpdateInputSetsDto,
UserFavUpdateInputDto,
UserFavUpdateOutputAffectedRowsDto,
UserFavUpdateOutputDto
);


// ████████ initialize DeleteCrudEngine ███████████████████████████████████████████
this.initDeleteEngine
<
// soft_delete (4)
UserFavSoftDeleteDto,
UserFavSoftDeleteInputWhereDto,
UserFavSoftDeleteInputDto,
UserFavSoftDeleteOutputDto,

// delete (4)
UserFavDeleteDto,
UserFavDeleteInputWhereDto,
UserFavDeleteInputDto,
UserFavDeleteOutputDto,

// restore (4)
UserFavRestoreDto,
UserFavRestoreInputWhereDto,
UserFavRestoreInputDto,
UserFavRestoreOutputDto
>
(
// soft_delete (4)
UserFavSoftDeleteDto,
UserFavSoftDeleteInputWhereDto,
UserFavSoftDeleteInputDto,
UserFavSoftDeleteOutputDto,

// delete (4)
UserFavDeleteDto,
UserFavDeleteInputWhereDto,
UserFavDeleteInputDto,
UserFavDeleteOutputDto,

// restore (4)
UserFavRestoreDto,
UserFavRestoreInputWhereDto,
UserFavRestoreInputDto,
UserFavRestoreOutputDto
);



// ████████ initialize UpsertCrudEngine ███████████████████████████████████████████
this.initUpsertEngine
<
// upsert (3)
UserFavUpsertDto,
UserFavUpsertInputDto,
UserFavUpsertOutputDto
>
(
// upsert (3)
UserFavUpsertDto,
UserFavUpsertInputDto,
UserFavUpsertOutputDto
);




// ████████ initialize RemoveCrudEngine ███████████████████████████████████████████
this.initRemoveEngine
<
// soft_remove (5)
UserFavSoftRemoveDto,
UserFavSoftRemoveInputWhereDto,
UserFavSoftRemoveInputDto,
UserFavSoftRemoveOutputAffectedRowsDto,
UserFavSoftRemoveOutputDto,

// remove (4)
UserFavRemoveDto,
UserFavRemoveInputWhereDto,
UserFavRemoveInputDto,
UserFavRemoveOutputAffectedRowsDto,
UserFavRemoveOutputDto,

// recover (5)
UserFavRecoverDto,
UserFavRecoverInputWhereDto,
UserFavRecoverInputDto,
UserFavRecoverOutputAffectedRowsDto,
UserFavRecoverOutputDto
>
(
// soft_remove (5)
UserFavSoftRemoveDto,
UserFavSoftRemoveInputWhereDto,
UserFavSoftRemoveInputDto,
UserFavSoftRemoveOutputAffectedRowsDto,
UserFavSoftRemoveOutputDto,

// remove (4)
UserFavRemoveDto,
UserFavRemoveInputWhereDto,
UserFavRemoveInputDto,
UserFavRemoveOutputAffectedRowsDto,
UserFavRemoveOutputDto,

// recover (5)
UserFavRecoverDto,
UserFavRecoverInputWhereDto,
UserFavRecoverInputDto,
UserFavRecoverOutputAffectedRowsDto,
UserFavRecoverOutputDto
);



// ████████ initialize UploadCrudEngine ███████████████████████████████████████████
this.initUploadEngine
<
// upload (3)
UserFavUploadDto,
UserFavUploadInputDto,
UserFavUploadOutputDto,

// upload_delete (3)
UserFavUploadDeleteDto,
UserFavUploadDeleteInputDto,
UserFavUploadDeleteOutputDto
>
(
// upload (3)
UserFavUploadDto,
UserFavUploadInputDto,
UserFavUploadOutputDto,

// upload_delete (3)
UserFavUploadDeleteDto,
UserFavUploadDeleteInputDto,
UserFavUploadDeleteOutputDto
);


// ████████ initialize ImportExportCrudEngine █████████████████████████████████████

}

}