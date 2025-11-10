import { UserSavedSearchEntity } from "./entities/user.saved.search.entity";
import { Injectable } from "@nestjs/common";
import { DataSource, Repository } from "typeorm";
import { InjectRepository } from "@nestjs/typeorm";
import { ConfService, CreateCrudEngine, CrudFactory, DataValidationPipe, DeleteCrudEngine, FindCrudEngine, FindOutputPaginationDto, LibraryAppService, LogService, RemoveCrudEngine, UpdateCrudEngine, UploadCrudEngine, UpsertCrudEngine  } from "@libs/library-app";
import { UserSavedSearchCreateDto, UserSavedSearchCreateInputDto, UserSavedSearchCreateOutputDto, UserSavedSearchDeleteDto, UserSavedSearchDeleteInputDto, UserSavedSearchDeleteInputWhereDto, UserSavedSearchDeleteOutputDto, UserSavedSearchFindDto, UserSavedSearchFindInputDto, UserSavedSearchFindInputGroupByDto, UserSavedSearchFindInputSortOrderDto, UserSavedSearchFindInputWhereDto, UserSavedSearchFindOneByIdDto, UserSavedSearchFindOneByIdInputDto, UserSavedSearchFindOutputDto, UserSavedSearchFindOutputRowsDto, UserSavedSearchRecoverDto, UserSavedSearchRecoverInputDto, UserSavedSearchRecoverInputWhereDto, UserSavedSearchRecoverOutputDto, UserSavedSearchRecoverOutputAffectedRowsDto, UserSavedSearchRemoveDto, UserSavedSearchRemoveInputDto, UserSavedSearchRemoveInputWhereDto, UserSavedSearchRemoveOutputDto, UserSavedSearchRemoveOutputAffectedRowsDto, UserSavedSearchRestoreDto, UserSavedSearchRestoreInputDto, UserSavedSearchRestoreInputWhereDto, UserSavedSearchRestoreOutputDto, UserSavedSearchSoftDeleteDto, UserSavedSearchSoftDeleteInputDto, UserSavedSearchSoftDeleteInputWhereDto, UserSavedSearchSoftDeleteOutputDto, UserSavedSearchSoftRemoveDto, UserSavedSearchSoftRemoveInputDto, UserSavedSearchSoftRemoveInputWhereDto, UserSavedSearchSoftRemoveOutputDto, UserSavedSearchSoftRemoveOutputAffectedRowsDto, UserSavedSearchUpdateDto, UserSavedSearchUpdateInputDto, UserSavedSearchUpdateInputSetsDto, UserSavedSearchUpdateInputWhereDto, UserSavedSearchUpdateOutputDto, UserSavedSearchUpdateOutputAffectedRowsDto, UserSavedSearchUploadDeleteDto, UserSavedSearchUploadDeleteInputDto, UserSavedSearchUploadDeleteOutputDto, UserSavedSearchUploadDto, UserSavedSearchUploadInputDto, UserSavedSearchUploadOutputDto, UserSavedSearchUpsertDto, UserSavedSearchUpsertInputDto, UserSavedSearchUpsertOutputDto } from "./dto/user.saved.search.dto";
import { SelfGraphqlMicroserviceService } from "@libs/dynamic-app";

@Injectable()
export class UserSavedSearchFactory extends CrudFactory<UserSavedSearchEntity> {

// ████████ FindCrudEngine ████████████████████████████████████████
public declare readonly findEngine: FindCrudEngine<
// entity (1)
UserSavedSearchEntity,

// find (8)
UserSavedSearchFindDto,
UserSavedSearchFindInputWhereDto,
UserSavedSearchFindInputSortOrderDto,
UserSavedSearchFindInputGroupByDto,
UserSavedSearchFindInputDto,
UserSavedSearchFindOutputRowsDto,
FindOutputPaginationDto,
UserSavedSearchFindOutputDto,

// find_one_by_id (2)
UserSavedSearchFindOneByIdDto,
UserSavedSearchFindOneByIdInputDto
>;

// ████████ CreateCrudEngine ████████████████████████████████████████
public declare readonly createEngine: CreateCrudEngine<
// entity (1)
UserSavedSearchEntity,

// create (3)
UserSavedSearchCreateDto,
UserSavedSearchCreateInputDto,
UserSavedSearchCreateOutputDto
>;

// ████████ UpdateCrudEngine ████████████████████████████████████████
public declare readonly updateEngine: UpdateCrudEngine<
// entity (1)
UserSavedSearchEntity,

// update (6)
UserSavedSearchUpdateDto,
UserSavedSearchUpdateInputWhereDto,
UserSavedSearchUpdateInputSetsDto,
UserSavedSearchUpdateInputDto,
UserSavedSearchUpdateOutputAffectedRowsDto,
UserSavedSearchUpdateOutputDto
>;

// ████████ DeleteCrudEngine ████████████████████████████████████████
public declare readonly deleteEngine: DeleteCrudEngine<
// entity (1)
UserSavedSearchEntity,

// soft_delete (4)
UserSavedSearchSoftDeleteDto,
UserSavedSearchSoftDeleteInputWhereDto,
UserSavedSearchSoftDeleteInputDto,
UserSavedSearchSoftDeleteOutputDto,

// delete (4)
UserSavedSearchDeleteDto,
UserSavedSearchDeleteInputWhereDto,
UserSavedSearchDeleteInputDto,
UserSavedSearchDeleteOutputDto,

// restore (4)
UserSavedSearchRestoreDto,
UserSavedSearchRestoreInputWhereDto,
UserSavedSearchRestoreInputDto,
UserSavedSearchRestoreOutputDto
>;

// ████████ UpsertCrudEngine ████████████████████████████████████████
public declare readonly upsertEngine: UpsertCrudEngine<
// entity (1)
UserSavedSearchEntity,

// upsert (3)
UserSavedSearchUpsertDto,
UserSavedSearchUpsertInputDto,
UserSavedSearchUpsertOutputDto
>;

// ████████ RemoveCrudEngine ████████████████████████████████████████
public declare readonly removeEngine: RemoveCrudEngine<
// entity (1)
UserSavedSearchEntity,

// soft_remove (5)
UserSavedSearchSoftRemoveDto,
UserSavedSearchSoftRemoveInputWhereDto,
UserSavedSearchSoftRemoveInputDto,
UserSavedSearchSoftRemoveOutputAffectedRowsDto,
UserSavedSearchSoftRemoveOutputDto,

// remove (4)
UserSavedSearchRemoveDto,
UserSavedSearchRemoveInputWhereDto,
UserSavedSearchRemoveInputDto,
UserSavedSearchRemoveOutputAffectedRowsDto,
UserSavedSearchRemoveOutputDto,

// recover (5)
UserSavedSearchRecoverDto,
UserSavedSearchRecoverInputWhereDto,
UserSavedSearchRecoverInputDto,
UserSavedSearchRecoverOutputAffectedRowsDto,
UserSavedSearchRecoverOutputDto
>;

// ████████ UploadCrudEngine ████████████████████████████████████████
public declare readonly uploadEngine: UploadCrudEngine<
// entity (1)
UserSavedSearchEntity,

// upload (3)
UserSavedSearchUploadDto,
UserSavedSearchUploadInputDto,
UserSavedSearchUploadOutputDto,

// upload_delete (3)
UserSavedSearchUploadDeleteDto,
UserSavedSearchUploadDeleteInputDto,
UserSavedSearchUploadDeleteOutputDto
>;

constructor(
// data source
protected readonly dataSource: DataSource,

@InjectRepository(UserSavedSearchEntity)
protected readonly repository: Repository<UserSavedSearchEntity>,

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
    UserSavedSearchEntity,
);

this.logService.setContext(UserSavedSearchFactory.name);

// ████████ initialize FindCrudEngine ██████████████████████████████████████
this.initFindEngine
<
// find (8)
UserSavedSearchFindDto,
UserSavedSearchFindInputWhereDto,
UserSavedSearchFindInputSortOrderDto,
UserSavedSearchFindInputGroupByDto,
UserSavedSearchFindInputDto,
UserSavedSearchFindOutputRowsDto,
FindOutputPaginationDto,
UserSavedSearchFindOutputDto,

// find_one_by_id (2)
UserSavedSearchFindOneByIdDto,
UserSavedSearchFindOneByIdInputDto
>
(
// find (8)
UserSavedSearchFindDto,
UserSavedSearchFindInputWhereDto,
UserSavedSearchFindInputSortOrderDto,
UserSavedSearchFindInputGroupByDto,
UserSavedSearchFindInputDto,
UserSavedSearchFindOutputRowsDto,
FindOutputPaginationDto,
UserSavedSearchFindOutputDto,

// find_one_by_id (2)
UserSavedSearchFindOneByIdDto,
UserSavedSearchFindOneByIdInputDto
);


// ████████ initialize CreateCrudEngine ███████████████████████████████████████
this.initCreateEngine
<
// create (3)
UserSavedSearchCreateDto,
UserSavedSearchCreateInputDto,
UserSavedSearchCreateOutputDto
>
(
// create (3)
UserSavedSearchCreateDto,
UserSavedSearchCreateInputDto,
UserSavedSearchCreateOutputDto
);

// ████████ initialize UpdateCrudEngine ████████████████████████████████████████
this.initUpdateEngine
<
// update (6)
UserSavedSearchUpdateDto,
UserSavedSearchUpdateInputWhereDto,
UserSavedSearchUpdateInputSetsDto,
UserSavedSearchUpdateInputDto,
UserSavedSearchUpdateOutputAffectedRowsDto,
UserSavedSearchUpdateOutputDto
>
(
// update (6)
UserSavedSearchUpdateDto,
UserSavedSearchUpdateInputWhereDto,
UserSavedSearchUpdateInputSetsDto,
UserSavedSearchUpdateInputDto,
UserSavedSearchUpdateOutputAffectedRowsDto,
UserSavedSearchUpdateOutputDto
);


// ████████ initialize DeleteCrudEngine ███████████████████████████████████████████
this.initDeleteEngine
<
// soft_delete (4)
UserSavedSearchSoftDeleteDto,
UserSavedSearchSoftDeleteInputWhereDto,
UserSavedSearchSoftDeleteInputDto,
UserSavedSearchSoftDeleteOutputDto,

// delete (4)
UserSavedSearchDeleteDto,
UserSavedSearchDeleteInputWhereDto,
UserSavedSearchDeleteInputDto,
UserSavedSearchDeleteOutputDto,

// restore (4)
UserSavedSearchRestoreDto,
UserSavedSearchRestoreInputWhereDto,
UserSavedSearchRestoreInputDto,
UserSavedSearchRestoreOutputDto
>
(
// soft_delete (4)
UserSavedSearchSoftDeleteDto,
UserSavedSearchSoftDeleteInputWhereDto,
UserSavedSearchSoftDeleteInputDto,
UserSavedSearchSoftDeleteOutputDto,

// delete (4)
UserSavedSearchDeleteDto,
UserSavedSearchDeleteInputWhereDto,
UserSavedSearchDeleteInputDto,
UserSavedSearchDeleteOutputDto,

// restore (4)
UserSavedSearchRestoreDto,
UserSavedSearchRestoreInputWhereDto,
UserSavedSearchRestoreInputDto,
UserSavedSearchRestoreOutputDto
);



// ████████ initialize UpsertCrudEngine ███████████████████████████████████████████
this.initUpsertEngine
<
// upsert (3)
UserSavedSearchUpsertDto,
UserSavedSearchUpsertInputDto,
UserSavedSearchUpsertOutputDto
>
(
// upsert (3)
UserSavedSearchUpsertDto,
UserSavedSearchUpsertInputDto,
UserSavedSearchUpsertOutputDto
);




// ████████ initialize RemoveCrudEngine ███████████████████████████████████████████
this.initRemoveEngine
<
// soft_remove (5)
UserSavedSearchSoftRemoveDto,
UserSavedSearchSoftRemoveInputWhereDto,
UserSavedSearchSoftRemoveInputDto,
UserSavedSearchSoftRemoveOutputAffectedRowsDto,
UserSavedSearchSoftRemoveOutputDto,

// remove (4)
UserSavedSearchRemoveDto,
UserSavedSearchRemoveInputWhereDto,
UserSavedSearchRemoveInputDto,
UserSavedSearchRemoveOutputAffectedRowsDto,
UserSavedSearchRemoveOutputDto,

// recover (5)
UserSavedSearchRecoverDto,
UserSavedSearchRecoverInputWhereDto,
UserSavedSearchRecoverInputDto,
UserSavedSearchRecoverOutputAffectedRowsDto,
UserSavedSearchRecoverOutputDto
>
(
// soft_remove (5)
UserSavedSearchSoftRemoveDto,
UserSavedSearchSoftRemoveInputWhereDto,
UserSavedSearchSoftRemoveInputDto,
UserSavedSearchSoftRemoveOutputAffectedRowsDto,
UserSavedSearchSoftRemoveOutputDto,

// remove (4)
UserSavedSearchRemoveDto,
UserSavedSearchRemoveInputWhereDto,
UserSavedSearchRemoveInputDto,
UserSavedSearchRemoveOutputAffectedRowsDto,
UserSavedSearchRemoveOutputDto,

// recover (5)
UserSavedSearchRecoverDto,
UserSavedSearchRecoverInputWhereDto,
UserSavedSearchRecoverInputDto,
UserSavedSearchRecoverOutputAffectedRowsDto,
UserSavedSearchRecoverOutputDto
);



// ████████ initialize UploadCrudEngine ███████████████████████████████████████████
this.initUploadEngine
<
// upload (3)
UserSavedSearchUploadDto,
UserSavedSearchUploadInputDto,
UserSavedSearchUploadOutputDto,

// upload_delete (3)
UserSavedSearchUploadDeleteDto,
UserSavedSearchUploadDeleteInputDto,
UserSavedSearchUploadDeleteOutputDto
>
(
// upload (3)
UserSavedSearchUploadDto,
UserSavedSearchUploadInputDto,
UserSavedSearchUploadOutputDto,

// upload_delete (3)
UserSavedSearchUploadDeleteDto,
UserSavedSearchUploadDeleteInputDto,
UserSavedSearchUploadDeleteOutputDto
);


// ████████ initialize ImportExportCrudEngine █████████████████████████████████████

}}