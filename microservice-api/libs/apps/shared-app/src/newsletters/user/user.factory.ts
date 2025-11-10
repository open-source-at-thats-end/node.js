import { NewsLetterUserEntity } from "./entities/user.entity";
import { Injectable } from "@nestjs/common";
import { DataSource, Repository } from "typeorm";
import { InjectRepository } from "@nestjs/typeorm";
import { ConfService, CreateCrudEngine, CrudFactory, DataValidationPipe, DeleteCrudEngine, FindCrudEngine, FindOutputPaginationDto, LibraryAppService, LogService, RemoveCrudEngine, UpdateCrudEngine, UploadCrudEngine, UpsertCrudEngine } from "@libs/library-app";
import { SelfGraphqlMicroserviceService } from '@libs/dynamic-app';
import { NewsLetterUserCreateDto, NewsLetterUserCreateInputDto, NewsLetterUserCreateOutputDto, NewsLetterUserDeleteDto, NewsLetterUserDeleteInputDto, NewsLetterUserDeleteInputWhereDto, NewsLetterUserDeleteOutputDto, NewsLetterUserFindDto, NewsLetterUserFindInputDto, NewsLetterUserFindInputGroupByDto, NewsLetterUserFindInputSortOrderDto, NewsLetterUserFindInputWhereDto, NewsLetterUserFindOneByIdDto, NewsLetterUserFindOneByIdInputDto, NewsLetterUserFindOutputDto, NewsLetterUserFindOutputRowsDto, NewsLetterUserRecoverDto, NewsLetterUserRecoverInputDto, NewsLetterUserRecoverInputWhereDto, NewsLetterUserRecoverOutputDto, NewsLetterUserRecoverOutputAffectedRowsDto, NewsLetterUserRemoveDto, NewsLetterUserRemoveInputDto, NewsLetterUserRemoveInputWhereDto, NewsLetterUserRemoveOutputDto, NewsLetterUserRemoveOutputAffectedRowsDto, NewsLetterUserRestoreDto, NewsLetterUserRestoreInputDto, NewsLetterUserRestoreInputWhereDto, NewsLetterUserRestoreOutputDto, NewsLetterUserSoftDeleteDto, NewsLetterUserSoftDeleteInputDto, NewsLetterUserSoftDeleteInputWhereDto, NewsLetterUserSoftDeleteOutputDto, NewsLetterUserSoftRemoveDto, NewsLetterUserSoftRemoveInputDto, NewsLetterUserSoftRemoveInputWhereDto, NewsLetterUserSoftRemoveOutputDto, NewsLetterUserSoftRemoveOutputAffectedRowsDto, NewsLetterUserUpdateDto, NewsLetterUserUpdateInputDto, NewsLetterUserUpdateInputSetsDto, NewsLetterUserUpdateInputWhereDto, NewsLetterUserUpdateOutputDto, NewsLetterUserUpdateOutputAffectedRowsDto, NewsLetterUserUploadDeleteDto, NewsLetterUserUploadDeleteInputDto, NewsLetterUserUploadDeleteOutputDto, NewsLetterUserUploadDto, NewsLetterUserUploadInputDto, NewsLetterUserUploadOutputDto, NewsLetterUserUpsertDto, NewsLetterUserUpsertInputDto, NewsLetterUserUpsertOutputDto } from "./dto/user.dto";

@Injectable()
export class NewsLetterUserFactory extends CrudFactory<NewsLetterUserEntity> {

// ████████ FindCrudEngine ████████████████████████████████████████
public declare readonly findEngine: FindCrudEngine<
// entity (1)
NewsLetterUserEntity,

// find (8)
NewsLetterUserFindDto,
NewsLetterUserFindInputWhereDto,
NewsLetterUserFindInputSortOrderDto,
NewsLetterUserFindInputGroupByDto,
NewsLetterUserFindInputDto,
NewsLetterUserFindOutputRowsDto,
FindOutputPaginationDto,
NewsLetterUserFindOutputDto,

// find_one_by_id (2)
NewsLetterUserFindOneByIdDto,
NewsLetterUserFindOneByIdInputDto
>;

// ████████ CreateCrudEngine ████████████████████████████████████████
public declare readonly createEngine: CreateCrudEngine<
// entity (1)
NewsLetterUserEntity,

// create (3)
NewsLetterUserCreateDto,
NewsLetterUserCreateInputDto,
NewsLetterUserCreateOutputDto
>;

// ████████ UpdateCrudEngine ████████████████████████████████████████
public declare readonly updateEngine: UpdateCrudEngine<
// entity (1)
NewsLetterUserEntity,

// update (6)
NewsLetterUserUpdateDto,
NewsLetterUserUpdateInputWhereDto,
NewsLetterUserUpdateInputSetsDto,
NewsLetterUserUpdateInputDto,
NewsLetterUserUpdateOutputAffectedRowsDto,
NewsLetterUserUpdateOutputDto
>;

// ████████ DeleteCrudEngine ████████████████████████████████████████
public declare readonly deleteEngine: DeleteCrudEngine<
// entity (1)
NewsLetterUserEntity,

// soft_delete (4)
NewsLetterUserSoftDeleteDto,
NewsLetterUserSoftDeleteInputWhereDto,
NewsLetterUserSoftDeleteInputDto,
NewsLetterUserSoftDeleteOutputDto,

// delete (4)
NewsLetterUserDeleteDto,
NewsLetterUserDeleteInputWhereDto,
NewsLetterUserDeleteInputDto,
NewsLetterUserDeleteOutputDto,

// restore (4)
NewsLetterUserRestoreDto,
NewsLetterUserRestoreInputWhereDto,
NewsLetterUserRestoreInputDto,
NewsLetterUserRestoreOutputDto
>;

// ████████ UpsertCrudEngine ████████████████████████████████████████
public declare readonly upsertEngine: UpsertCrudEngine<
// entity (1)
NewsLetterUserEntity,

// upsert (3)
NewsLetterUserUpsertDto,
NewsLetterUserUpsertInputDto,
NewsLetterUserUpsertOutputDto
>;

// ████████ RemoveCrudEngine ████████████████████████████████████████
public declare readonly removeEngine: RemoveCrudEngine<
// entity (1)
NewsLetterUserEntity,

// soft_remove (5)
NewsLetterUserSoftRemoveDto,
NewsLetterUserSoftRemoveInputWhereDto,
NewsLetterUserSoftRemoveInputDto,
NewsLetterUserSoftRemoveOutputAffectedRowsDto,
NewsLetterUserSoftRemoveOutputDto,

// remove (4)
NewsLetterUserRemoveDto,
NewsLetterUserRemoveInputWhereDto,
NewsLetterUserRemoveInputDto,
NewsLetterUserRemoveOutputAffectedRowsDto,
NewsLetterUserRemoveOutputDto,

// recover (5)
NewsLetterUserRecoverDto,
NewsLetterUserRecoverInputWhereDto,
NewsLetterUserRecoverInputDto,
NewsLetterUserRecoverOutputAffectedRowsDto,
NewsLetterUserRecoverOutputDto
>;

// ████████ UploadCrudEngine ████████████████████████████████████████
public declare readonly uploadEngine: UploadCrudEngine<
// entity (1)
NewsLetterUserEntity,

// upload (3)
NewsLetterUserUploadDto,
NewsLetterUserUploadInputDto,
NewsLetterUserUploadOutputDto,

// upload_delete (3)
NewsLetterUserUploadDeleteDto,
NewsLetterUserUploadDeleteInputDto,
NewsLetterUserUploadDeleteOutputDto
>;

constructor(
// data source
protected readonly dataSource: DataSource,

@InjectRepository(NewsLetterUserEntity)
protected readonly repository: Repository<NewsLetterUserEntity>,

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
    NewsLetterUserEntity,
);

this.logService.setContext(NewsLetterUserFactory.name);

// ████████ initialize FindCrudEngine ██████████████████████████████████████
this.initFindEngine
<
// find (8)
NewsLetterUserFindDto,
NewsLetterUserFindInputWhereDto,
NewsLetterUserFindInputSortOrderDto,
NewsLetterUserFindInputGroupByDto,
NewsLetterUserFindInputDto,
NewsLetterUserFindOutputRowsDto,
FindOutputPaginationDto,
NewsLetterUserFindOutputDto,

// find_one_by_id (2)
NewsLetterUserFindOneByIdDto,
NewsLetterUserFindOneByIdInputDto
>
(
// find (8)
NewsLetterUserFindDto,
NewsLetterUserFindInputWhereDto,
NewsLetterUserFindInputSortOrderDto,
NewsLetterUserFindInputGroupByDto,
NewsLetterUserFindInputDto,
NewsLetterUserFindOutputRowsDto,
FindOutputPaginationDto,
NewsLetterUserFindOutputDto,

// find_one_by_id (2)
NewsLetterUserFindOneByIdDto,
NewsLetterUserFindOneByIdInputDto
);


// ████████ initialize CreateCrudEngine ███████████████████████████████████████
this.initCreateEngine
<
// create (3)
NewsLetterUserCreateDto,
NewsLetterUserCreateInputDto,
NewsLetterUserCreateOutputDto
>
(
// create (3)
NewsLetterUserCreateDto,
NewsLetterUserCreateInputDto,
NewsLetterUserCreateOutputDto
);

// ████████ initialize UpdateCrudEngine ████████████████████████████████████████
this.initUpdateEngine
<
// update (6)
NewsLetterUserUpdateDto,
NewsLetterUserUpdateInputWhereDto,
NewsLetterUserUpdateInputSetsDto,
NewsLetterUserUpdateInputDto,
NewsLetterUserUpdateOutputAffectedRowsDto,
NewsLetterUserUpdateOutputDto
>
(
// update (6)
NewsLetterUserUpdateDto,
NewsLetterUserUpdateInputWhereDto,
NewsLetterUserUpdateInputSetsDto,
NewsLetterUserUpdateInputDto,
NewsLetterUserUpdateOutputAffectedRowsDto,
NewsLetterUserUpdateOutputDto
);


// ████████ initialize DeleteCrudEngine ███████████████████████████████████████████
this.initDeleteEngine
<
// soft_delete (4)
NewsLetterUserSoftDeleteDto,
NewsLetterUserSoftDeleteInputWhereDto,
NewsLetterUserSoftDeleteInputDto,
NewsLetterUserSoftDeleteOutputDto,

// delete (4)
NewsLetterUserDeleteDto,
NewsLetterUserDeleteInputWhereDto,
NewsLetterUserDeleteInputDto,
NewsLetterUserDeleteOutputDto,

// restore (4)
NewsLetterUserRestoreDto,
NewsLetterUserRestoreInputWhereDto,
NewsLetterUserRestoreInputDto,
NewsLetterUserRestoreOutputDto
>
(
// soft_delete (4)
NewsLetterUserSoftDeleteDto,
NewsLetterUserSoftDeleteInputWhereDto,
NewsLetterUserSoftDeleteInputDto,
NewsLetterUserSoftDeleteOutputDto,

// delete (4)
NewsLetterUserDeleteDto,
NewsLetterUserDeleteInputWhereDto,
NewsLetterUserDeleteInputDto,
NewsLetterUserDeleteOutputDto,

// restore (4)
NewsLetterUserRestoreDto,
NewsLetterUserRestoreInputWhereDto,
NewsLetterUserRestoreInputDto,
NewsLetterUserRestoreOutputDto
);



// ████████ initialize UpsertCrudEngine ███████████████████████████████████████████
this.initUpsertEngine
<
// upsert (3)
NewsLetterUserUpsertDto,
NewsLetterUserUpsertInputDto,
NewsLetterUserUpsertOutputDto
>
(
// upsert (3)
NewsLetterUserUpsertDto,
NewsLetterUserUpsertInputDto,
NewsLetterUserUpsertOutputDto
);




// ████████ initialize RemoveCrudEngine ███████████████████████████████████████████
this.initRemoveEngine
<
// soft_remove (5)
NewsLetterUserSoftRemoveDto,
NewsLetterUserSoftRemoveInputWhereDto,
NewsLetterUserSoftRemoveInputDto,
NewsLetterUserSoftRemoveOutputAffectedRowsDto,
NewsLetterUserSoftRemoveOutputDto,

// remove (4)
NewsLetterUserRemoveDto,
NewsLetterUserRemoveInputWhereDto,
NewsLetterUserRemoveInputDto,
NewsLetterUserRemoveOutputAffectedRowsDto,
NewsLetterUserRemoveOutputDto,

// recover (5)
NewsLetterUserRecoverDto,
NewsLetterUserRecoverInputWhereDto,
NewsLetterUserRecoverInputDto,
NewsLetterUserRecoverOutputAffectedRowsDto,
NewsLetterUserRecoverOutputDto
>
(
// soft_remove (5)
NewsLetterUserSoftRemoveDto,
NewsLetterUserSoftRemoveInputWhereDto,
NewsLetterUserSoftRemoveInputDto,
NewsLetterUserSoftRemoveOutputAffectedRowsDto,
NewsLetterUserSoftRemoveOutputDto,

// remove (4)
NewsLetterUserRemoveDto,
NewsLetterUserRemoveInputWhereDto,
NewsLetterUserRemoveInputDto,
NewsLetterUserRemoveOutputAffectedRowsDto,
NewsLetterUserRemoveOutputDto,

// recover (5)
NewsLetterUserRecoverDto,
NewsLetterUserRecoverInputWhereDto,
NewsLetterUserRecoverInputDto,
NewsLetterUserRecoverOutputAffectedRowsDto,
NewsLetterUserRecoverOutputDto
);



// ████████ initialize UploadCrudEngine ███████████████████████████████████████████
this.initUploadEngine
<
// upload (3)
NewsLetterUserUploadDto,
NewsLetterUserUploadInputDto,
NewsLetterUserUploadOutputDto,

// upload_delete (3)
NewsLetterUserUploadDeleteDto,
NewsLetterUserUploadDeleteInputDto,
NewsLetterUserUploadDeleteOutputDto
>
(
// upload (3)
NewsLetterUserUploadDto,
NewsLetterUserUploadInputDto,
NewsLetterUserUploadOutputDto,

// upload_delete (3)
NewsLetterUserUploadDeleteDto,
NewsLetterUserUploadDeleteInputDto,
NewsLetterUserUploadDeleteOutputDto
);


// ████████ initialize ImportExportCrudEngine █████████████████████████████████████

}

}