import { UserAuthorisationEntity } from "./entities/user.authorisation.entity";
import { Injectable } from "@nestjs/common";
import { DataSource, Repository } from "typeorm";
import { InjectRepository } from "@nestjs/typeorm";
import { ConfService, CreateCrudEngine, CrudFactory, DataValidationPipe, DeleteCrudEngine, FindCrudEngine, FindOutputPaginationDto, LibraryAppService, LogService, RemoveCrudEngine, UpdateCrudEngine, UploadCrudEngine, UpsertCrudEngine } from "@libs/library-app";
import { SelfGraphqlMicroserviceService } from "@libs/dynamic-app";
import { UserAuthorisationCreateDto, UserAuthorisationCreateInputDto, UserAuthorisationCreateOutputDto, UserAuthorisationDeleteDto, UserAuthorisationDeleteInputDto, UserAuthorisationDeleteInputWhereDto, UserAuthorisationDeleteOutputDto, UserAuthorisationFindDto, UserAuthorisationFindInputDto, UserAuthorisationFindInputGroupByDto, UserAuthorisationFindInputSortOrderDto, UserAuthorisationFindInputWhereDto, UserAuthorisationFindOneByIdDto, UserAuthorisationFindOneByIdInputDto, UserAuthorisationFindOutputDto, UserAuthorisationFindOutputRowsDto, UserAuthorisationRecoverDto, UserAuthorisationRecoverInputDto, UserAuthorisationRecoverInputWhereDto, UserAuthorisationRecoverOutputDto, UserAuthorisationRecoverOutputAffectedRowsDto, UserAuthorisationRemoveDto, UserAuthorisationRemoveInputDto, UserAuthorisationRemoveInputWhereDto, UserAuthorisationRemoveOutputDto, UserAuthorisationRemoveOutputAffectedRowsDto, UserAuthorisationRestoreDto, UserAuthorisationRestoreInputDto, UserAuthorisationRestoreInputWhereDto, UserAuthorisationRestoreOutputDto, UserAuthorisationSoftDeleteDto, UserAuthorisationSoftDeleteInputDto, UserAuthorisationSoftDeleteInputWhereDto, UserAuthorisationSoftDeleteOutputDto, UserAuthorisationSoftRemoveDto, UserAuthorisationSoftRemoveInputDto, UserAuthorisationSoftRemoveInputWhereDto, UserAuthorisationSoftRemoveOutputDto, UserAuthorisationSoftRemoveOutputAffectedRowsDto, UserAuthorisationUpdateDto, UserAuthorisationUpdateInputDto, UserAuthorisationUpdateInputSetsDto, UserAuthorisationUpdateInputWhereDto, UserAuthorisationUpdateOutputDto, UserAuthorisationUpdateOutputAffectedRowsDto, UserAuthorisationUploadDeleteDto, UserAuthorisationUploadDeleteInputDto, UserAuthorisationUploadDeleteOutputDto, UserAuthorisationUploadDto, UserAuthorisationUploadInputDto, UserAuthorisationUploadOutputDto, UserAuthorisationUpsertDto, UserAuthorisationUpsertInputDto, UserAuthorisationUpsertOutputDto } from "./dto/user.authorisation.dto";

@Injectable()
export class UserAuthorisationFactory extends CrudFactory<UserAuthorisationEntity> {

// ████████ FindCrudEngine ████████████████████████████████████████
public declare readonly findEngine: FindCrudEngine<
// entity (1)
UserAuthorisationEntity,

// find (8)
UserAuthorisationFindDto,
UserAuthorisationFindInputWhereDto,
UserAuthorisationFindInputSortOrderDto,
UserAuthorisationFindInputGroupByDto,
UserAuthorisationFindInputDto,
UserAuthorisationFindOutputRowsDto,
FindOutputPaginationDto,
UserAuthorisationFindOutputDto,

// find_one_by_id (2)
UserAuthorisationFindOneByIdDto,
UserAuthorisationFindOneByIdInputDto
>;

// ████████ CreateCrudEngine ████████████████████████████████████████
public declare readonly createEngine: CreateCrudEngine<
// entity (1)
UserAuthorisationEntity,

// create (3)
UserAuthorisationCreateDto,
UserAuthorisationCreateInputDto,
UserAuthorisationCreateOutputDto
>;

// ████████ UpdateCrudEngine ████████████████████████████████████████
public declare readonly updateEngine: UpdateCrudEngine<
// entity (1)
UserAuthorisationEntity,

// update (6)
UserAuthorisationUpdateDto,
UserAuthorisationUpdateInputWhereDto,
UserAuthorisationUpdateInputSetsDto,
UserAuthorisationUpdateInputDto,
UserAuthorisationUpdateOutputAffectedRowsDto,
UserAuthorisationUpdateOutputDto
>;

// ████████ DeleteCrudEngine ████████████████████████████████████████
public declare readonly deleteEngine: DeleteCrudEngine<
// entity (1)
UserAuthorisationEntity,

// soft_delete (4)
UserAuthorisationSoftDeleteDto,
UserAuthorisationSoftDeleteInputWhereDto,
UserAuthorisationSoftDeleteInputDto,
UserAuthorisationSoftDeleteOutputDto,

// delete (4)
UserAuthorisationDeleteDto,
UserAuthorisationDeleteInputWhereDto,
UserAuthorisationDeleteInputDto,
UserAuthorisationDeleteOutputDto,

// restore (4)
UserAuthorisationRestoreDto,
UserAuthorisationRestoreInputWhereDto,
UserAuthorisationRestoreInputDto,
UserAuthorisationRestoreOutputDto
>;

// ████████ UpsertCrudEngine ████████████████████████████████████████
public declare readonly upsertEngine: UpsertCrudEngine<
// entity (1)
UserAuthorisationEntity,

// upsert (3)
UserAuthorisationUpsertDto,
UserAuthorisationUpsertInputDto,
UserAuthorisationUpsertOutputDto
>;

// ████████ RemoveCrudEngine ████████████████████████████████████████
public declare readonly removeEngine: RemoveCrudEngine<
// entity (1)
UserAuthorisationEntity,

// soft_remove (5)
UserAuthorisationSoftRemoveDto,
UserAuthorisationSoftRemoveInputWhereDto,
UserAuthorisationSoftRemoveInputDto,
UserAuthorisationSoftRemoveOutputAffectedRowsDto,
UserAuthorisationSoftRemoveOutputDto,

// remove (4)
UserAuthorisationRemoveDto,
UserAuthorisationRemoveInputWhereDto,
UserAuthorisationRemoveInputDto,
UserAuthorisationRemoveOutputAffectedRowsDto,
UserAuthorisationRemoveOutputDto,

// recover (5)
UserAuthorisationRecoverDto,
UserAuthorisationRecoverInputWhereDto,
UserAuthorisationRecoverInputDto,
UserAuthorisationRecoverOutputAffectedRowsDto,
UserAuthorisationRecoverOutputDto
>;

// ████████ UploadCrudEngine ████████████████████████████████████████
public declare readonly uploadEngine: UploadCrudEngine<
// entity (1)
UserAuthorisationEntity,

// upload (3)
UserAuthorisationUploadDto,
UserAuthorisationUploadInputDto,
UserAuthorisationUploadOutputDto,

// upload_delete (3)
UserAuthorisationUploadDeleteDto,
UserAuthorisationUploadDeleteInputDto,
UserAuthorisationUploadDeleteOutputDto
>;

constructor(
// data source
protected readonly dataSource: DataSource,

@InjectRepository(UserAuthorisationEntity)
protected readonly repository: Repository<UserAuthorisationEntity>,

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
    UserAuthorisationEntity,
);

this.logService.setContext(UserAuthorisationFactory.name);

// ████████ initialize FindCrudEngine ██████████████████████████████████████
this.initFindEngine
<
// find (8)
UserAuthorisationFindDto,
UserAuthorisationFindInputWhereDto,
UserAuthorisationFindInputSortOrderDto,
UserAuthorisationFindInputGroupByDto,
UserAuthorisationFindInputDto,
UserAuthorisationFindOutputRowsDto,
FindOutputPaginationDto,
UserAuthorisationFindOutputDto,

// find_one_by_id (2)
UserAuthorisationFindOneByIdDto,
UserAuthorisationFindOneByIdInputDto
>
(
// find (8)
UserAuthorisationFindDto,
UserAuthorisationFindInputWhereDto,
UserAuthorisationFindInputSortOrderDto,
UserAuthorisationFindInputGroupByDto,
UserAuthorisationFindInputDto,
UserAuthorisationFindOutputRowsDto,
FindOutputPaginationDto,
UserAuthorisationFindOutputDto,

// find_one_by_id (2)
UserAuthorisationFindOneByIdDto,
UserAuthorisationFindOneByIdInputDto
);


// ████████ initialize CreateCrudEngine ███████████████████████████████████████
this.initCreateEngine
<
// create (3)
UserAuthorisationCreateDto,
UserAuthorisationCreateInputDto,
UserAuthorisationCreateOutputDto
>
(
// create (3)
UserAuthorisationCreateDto,
UserAuthorisationCreateInputDto,
UserAuthorisationCreateOutputDto
);

// ████████ initialize UpdateCrudEngine ████████████████████████████████████████
this.initUpdateEngine
<
// update (6)
UserAuthorisationUpdateDto,
UserAuthorisationUpdateInputWhereDto,
UserAuthorisationUpdateInputSetsDto,
UserAuthorisationUpdateInputDto,
UserAuthorisationUpdateOutputAffectedRowsDto,
UserAuthorisationUpdateOutputDto
>
(
// update (6)
UserAuthorisationUpdateDto,
UserAuthorisationUpdateInputWhereDto,
UserAuthorisationUpdateInputSetsDto,
UserAuthorisationUpdateInputDto,
UserAuthorisationUpdateOutputAffectedRowsDto,
UserAuthorisationUpdateOutputDto
);


// ████████ initialize DeleteCrudEngine ███████████████████████████████████████████
this.initDeleteEngine
<
// soft_delete (4)
UserAuthorisationSoftDeleteDto,
UserAuthorisationSoftDeleteInputWhereDto,
UserAuthorisationSoftDeleteInputDto,
UserAuthorisationSoftDeleteOutputDto,

// delete (4)
UserAuthorisationDeleteDto,
UserAuthorisationDeleteInputWhereDto,
UserAuthorisationDeleteInputDto,
UserAuthorisationDeleteOutputDto,

// restore (4)
UserAuthorisationRestoreDto,
UserAuthorisationRestoreInputWhereDto,
UserAuthorisationRestoreInputDto,
UserAuthorisationRestoreOutputDto
>
(
// soft_delete (4)
UserAuthorisationSoftDeleteDto,
UserAuthorisationSoftDeleteInputWhereDto,
UserAuthorisationSoftDeleteInputDto,
UserAuthorisationSoftDeleteOutputDto,

// delete (4)
UserAuthorisationDeleteDto,
UserAuthorisationDeleteInputWhereDto,
UserAuthorisationDeleteInputDto,
UserAuthorisationDeleteOutputDto,

// restore (4)
UserAuthorisationRestoreDto,
UserAuthorisationRestoreInputWhereDto,
UserAuthorisationRestoreInputDto,
UserAuthorisationRestoreOutputDto
);



// ████████ initialize UpsertCrudEngine ███████████████████████████████████████████
this.initUpsertEngine
<
// upsert (3)
UserAuthorisationUpsertDto,
UserAuthorisationUpsertInputDto,
UserAuthorisationUpsertOutputDto
>
(
// upsert (3)
UserAuthorisationUpsertDto,
UserAuthorisationUpsertInputDto,
UserAuthorisationUpsertOutputDto
);




// ████████ initialize RemoveCrudEngine ███████████████████████████████████████████
this.initRemoveEngine
<
// soft_remove (5)
UserAuthorisationSoftRemoveDto,
UserAuthorisationSoftRemoveInputWhereDto,
UserAuthorisationSoftRemoveInputDto,
UserAuthorisationSoftRemoveOutputAffectedRowsDto,
UserAuthorisationSoftRemoveOutputDto,

// remove (4)
UserAuthorisationRemoveDto,
UserAuthorisationRemoveInputWhereDto,
UserAuthorisationRemoveInputDto,
UserAuthorisationRemoveOutputAffectedRowsDto,
UserAuthorisationRemoveOutputDto,

// recover (5)
UserAuthorisationRecoverDto,
UserAuthorisationRecoverInputWhereDto,
UserAuthorisationRecoverInputDto,
UserAuthorisationRecoverOutputAffectedRowsDto,
UserAuthorisationRecoverOutputDto
>
(
// soft_remove (5)
UserAuthorisationSoftRemoveDto,
UserAuthorisationSoftRemoveInputWhereDto,
UserAuthorisationSoftRemoveInputDto,
UserAuthorisationSoftRemoveOutputAffectedRowsDto,
UserAuthorisationSoftRemoveOutputDto,

// remove (4)
UserAuthorisationRemoveDto,
UserAuthorisationRemoveInputWhereDto,
UserAuthorisationRemoveInputDto,
UserAuthorisationRemoveOutputAffectedRowsDto,
UserAuthorisationRemoveOutputDto,

// recover (5)
UserAuthorisationRecoverDto,
UserAuthorisationRecoverInputWhereDto,
UserAuthorisationRecoverInputDto,
UserAuthorisationRecoverOutputAffectedRowsDto,
UserAuthorisationRecoverOutputDto
);



// ████████ initialize UploadCrudEngine ███████████████████████████████████████████
this.initUploadEngine
<
// upload (3)
UserAuthorisationUploadDto,
UserAuthorisationUploadInputDto,
UserAuthorisationUploadOutputDto,

// upload_delete (3)
UserAuthorisationUploadDeleteDto,
UserAuthorisationUploadDeleteInputDto,
UserAuthorisationUploadDeleteOutputDto
>
(
// upload (3)
UserAuthorisationUploadDto,
UserAuthorisationUploadInputDto,
UserAuthorisationUploadOutputDto,

// upload_delete (3)
UserAuthorisationUploadDeleteDto,
UserAuthorisationUploadDeleteInputDto,
UserAuthorisationUploadDeleteOutputDto
);


// ████████ initialize ImportExportCrudEngine █████████████████████████████████████

}

}