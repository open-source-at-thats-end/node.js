import { AuthorisationEntity } from "./entities/authorisation.entity";
import { Injectable } from "@nestjs/common";
import { DataSource, Repository } from "typeorm";
import { InjectRepository } from "@nestjs/typeorm";
import { ConfService, CreateCrudEngine, CrudFactory, DataValidationPipe, DeleteCrudEngine, FindCrudEngine, FindOutputPaginationDto, LibraryAppService, LogService, RemoveCrudEngine, UpdateCrudEngine, UploadCrudEngine, UpsertCrudEngine } from "@libs/library-app";
import { SelfGraphqlMicroserviceService } from "@libs/dynamic-app";
import { AuthorisationCreateDto, AuthorisationCreateInputDto, AuthorisationCreateOutputDto, AuthorisationDeleteDto, AuthorisationDeleteInputDto, AuthorisationDeleteInputWhereDto, AuthorisationDeleteOutputDto, AuthorisationFindDto, AuthorisationFindInputDto, AuthorisationFindInputGroupByDto, AuthorisationFindInputSortOrderDto, AuthorisationFindInputWhereDto, AuthorisationFindOneByIdDto, AuthorisationFindOneByIdInputDto, AuthorisationFindOutputDto, AuthorisationFindOutputRowsDto, AuthorisationRecoverDto, AuthorisationRecoverInputDto, AuthorisationRecoverInputWhereDto, AuthorisationRecoverOutputDto, AuthorisationRecoverOutputAffectedRowsDto, AuthorisationRemoveDto, AuthorisationRemoveInputDto, AuthorisationRemoveInputWhereDto, AuthorisationRemoveOutputDto, AuthorisationRemoveOutputAffectedRowsDto, AuthorisationRestoreDto, AuthorisationRestoreInputDto, AuthorisationRestoreInputWhereDto, AuthorisationRestoreOutputDto, AuthorisationSoftDeleteDto, AuthorisationSoftDeleteInputDto, AuthorisationSoftDeleteInputWhereDto, AuthorisationSoftDeleteOutputDto, AuthorisationSoftRemoveDto, AuthorisationSoftRemoveInputDto, AuthorisationSoftRemoveInputWhereDto, AuthorisationSoftRemoveOutputDto, AuthorisationSoftRemoveOutputAffectedRowsDto, AuthorisationUpdateDto, AuthorisationUpdateInputDto, AuthorisationUpdateInputSetsDto, AuthorisationUpdateInputWhereDto, AuthorisationUpdateOutputDto, AuthorisationUpdateOutputAffectedRowsDto, AuthorisationUploadDeleteDto, AuthorisationUploadDeleteInputDto, AuthorisationUploadDeleteOutputDto, AuthorisationUploadDto, AuthorisationUploadInputDto, AuthorisationUploadOutputDto, AuthorisationUpsertDto, AuthorisationUpsertInputDto, AuthorisationUpsertOutputDto } from "./dto/authorisation.dto";

@Injectable()
export class AuthorisationFactory extends CrudFactory<AuthorisationEntity> {

// ████████ FindCrudEngine ████████████████████████████████████████
public declare readonly findEngine: FindCrudEngine<
// entity (1)
AuthorisationEntity,

// find (8)
AuthorisationFindDto,
AuthorisationFindInputWhereDto,
AuthorisationFindInputSortOrderDto,
AuthorisationFindInputGroupByDto,
AuthorisationFindInputDto,
AuthorisationFindOutputRowsDto,
FindOutputPaginationDto,
AuthorisationFindOutputDto,

// find_one_by_id (2)
AuthorisationFindOneByIdDto,
AuthorisationFindOneByIdInputDto
>;

// ████████ CreateCrudEngine ████████████████████████████████████████
public declare readonly createEngine: CreateCrudEngine<
// entity (1)
AuthorisationEntity,

// create (3)
AuthorisationCreateDto,
AuthorisationCreateInputDto,
AuthorisationCreateOutputDto
>;

// ████████ UpdateCrudEngine ████████████████████████████████████████
public declare readonly updateEngine: UpdateCrudEngine<
// entity (1)
AuthorisationEntity,

// update (6)
AuthorisationUpdateDto,
AuthorisationUpdateInputWhereDto,
AuthorisationUpdateInputSetsDto,
AuthorisationUpdateInputDto,
AuthorisationUpdateOutputAffectedRowsDto,
AuthorisationUpdateOutputDto
>;

// ████████ DeleteCrudEngine ████████████████████████████████████████
public declare readonly deleteEngine: DeleteCrudEngine<
// entity (1)
AuthorisationEntity,

// soft_delete (4)
AuthorisationSoftDeleteDto,
AuthorisationSoftDeleteInputWhereDto,
AuthorisationSoftDeleteInputDto,
AuthorisationSoftDeleteOutputDto,

// delete (4)
AuthorisationDeleteDto,
AuthorisationDeleteInputWhereDto,
AuthorisationDeleteInputDto,
AuthorisationDeleteOutputDto,

// restore (4)
AuthorisationRestoreDto,
AuthorisationRestoreInputWhereDto,
AuthorisationRestoreInputDto,
AuthorisationRestoreOutputDto
>;

// ████████ UpsertCrudEngine ████████████████████████████████████████
public declare readonly upsertEngine: UpsertCrudEngine<
// entity (1)
AuthorisationEntity,

// upsert (3)
AuthorisationUpsertDto,
AuthorisationUpsertInputDto,
AuthorisationUpsertOutputDto
>;

// ████████ RemoveCrudEngine ████████████████████████████████████████
public declare readonly removeEngine: RemoveCrudEngine<
// entity (1)
AuthorisationEntity,

// soft_remove (5)
AuthorisationSoftRemoveDto,
AuthorisationSoftRemoveInputWhereDto,
AuthorisationSoftRemoveInputDto,
AuthorisationSoftRemoveOutputAffectedRowsDto,
AuthorisationSoftRemoveOutputDto,

// remove (4)
AuthorisationRemoveDto,
AuthorisationRemoveInputWhereDto,
AuthorisationRemoveInputDto,
AuthorisationRemoveOutputAffectedRowsDto,
AuthorisationRemoveOutputDto,

// recover (5)
AuthorisationRecoverDto,
AuthorisationRecoverInputWhereDto,
AuthorisationRecoverInputDto,
AuthorisationRecoverOutputAffectedRowsDto,
AuthorisationRecoverOutputDto
>;

// ████████ UploadCrudEngine ████████████████████████████████████████
public declare readonly uploadEngine: UploadCrudEngine<
// entity (1)
AuthorisationEntity,

// upload (3)
AuthorisationUploadDto,
AuthorisationUploadInputDto,
AuthorisationUploadOutputDto,

// upload_delete (3)
AuthorisationUploadDeleteDto,
AuthorisationUploadDeleteInputDto,
AuthorisationUploadDeleteOutputDto
>;

constructor(
// data source
protected readonly dataSource: DataSource,

@InjectRepository(AuthorisationEntity)
protected readonly repository: Repository<AuthorisationEntity>,

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
    AuthorisationEntity,
);

this.logService.setContext(AuthorisationFactory.name);

// ████████ initialize FindCrudEngine ██████████████████████████████████████
this.initFindEngine
<
// find (8)
AuthorisationFindDto,
AuthorisationFindInputWhereDto,
AuthorisationFindInputSortOrderDto,
AuthorisationFindInputGroupByDto,
AuthorisationFindInputDto,
AuthorisationFindOutputRowsDto,
FindOutputPaginationDto,
AuthorisationFindOutputDto,

// find_one_by_id (2)
AuthorisationFindOneByIdDto,
AuthorisationFindOneByIdInputDto
>
(
// find (8)
AuthorisationFindDto,
AuthorisationFindInputWhereDto,
AuthorisationFindInputSortOrderDto,
AuthorisationFindInputGroupByDto,
AuthorisationFindInputDto,
AuthorisationFindOutputRowsDto,
FindOutputPaginationDto,
AuthorisationFindOutputDto,

// find_one_by_id (2)
AuthorisationFindOneByIdDto,
AuthorisationFindOneByIdInputDto
);


// ████████ initialize CreateCrudEngine ███████████████████████████████████████
this.initCreateEngine
<
// create (3)
AuthorisationCreateDto,
AuthorisationCreateInputDto,
AuthorisationCreateOutputDto
>
(
// create (3)
AuthorisationCreateDto,
AuthorisationCreateInputDto,
AuthorisationCreateOutputDto
);

// ████████ initialize UpdateCrudEngine ████████████████████████████████████████
this.initUpdateEngine
<
// update (6)
AuthorisationUpdateDto,
AuthorisationUpdateInputWhereDto,
AuthorisationUpdateInputSetsDto,
AuthorisationUpdateInputDto,
AuthorisationUpdateOutputAffectedRowsDto,
AuthorisationUpdateOutputDto
>
(
// update (6)
AuthorisationUpdateDto,
AuthorisationUpdateInputWhereDto,
AuthorisationUpdateInputSetsDto,
AuthorisationUpdateInputDto,
AuthorisationUpdateOutputAffectedRowsDto,
AuthorisationUpdateOutputDto
);


// ████████ initialize DeleteCrudEngine ███████████████████████████████████████████
this.initDeleteEngine
<
// soft_delete (4)
AuthorisationSoftDeleteDto,
AuthorisationSoftDeleteInputWhereDto,
AuthorisationSoftDeleteInputDto,
AuthorisationSoftDeleteOutputDto,

// delete (4)
AuthorisationDeleteDto,
AuthorisationDeleteInputWhereDto,
AuthorisationDeleteInputDto,
AuthorisationDeleteOutputDto,

// restore (4)
AuthorisationRestoreDto,
AuthorisationRestoreInputWhereDto,
AuthorisationRestoreInputDto,
AuthorisationRestoreOutputDto
>
(
// soft_delete (4)
AuthorisationSoftDeleteDto,
AuthorisationSoftDeleteInputWhereDto,
AuthorisationSoftDeleteInputDto,
AuthorisationSoftDeleteOutputDto,

// delete (4)
AuthorisationDeleteDto,
AuthorisationDeleteInputWhereDto,
AuthorisationDeleteInputDto,
AuthorisationDeleteOutputDto,

// restore (4)
AuthorisationRestoreDto,
AuthorisationRestoreInputWhereDto,
AuthorisationRestoreInputDto,
AuthorisationRestoreOutputDto
);



// ████████ initialize UpsertCrudEngine ███████████████████████████████████████████
this.initUpsertEngine
<
// upsert (3)
AuthorisationUpsertDto,
AuthorisationUpsertInputDto,
AuthorisationUpsertOutputDto
>
(
// upsert (3)
AuthorisationUpsertDto,
AuthorisationUpsertInputDto,
AuthorisationUpsertOutputDto
);




// ████████ initialize RemoveCrudEngine ███████████████████████████████████████████
this.initRemoveEngine
<
// soft_remove (5)
AuthorisationSoftRemoveDto,
AuthorisationSoftRemoveInputWhereDto,
AuthorisationSoftRemoveInputDto,
AuthorisationSoftRemoveOutputAffectedRowsDto,
AuthorisationSoftRemoveOutputDto,

// remove (4)
AuthorisationRemoveDto,
AuthorisationRemoveInputWhereDto,
AuthorisationRemoveInputDto,
AuthorisationRemoveOutputAffectedRowsDto,
AuthorisationRemoveOutputDto,

// recover (5)
AuthorisationRecoverDto,
AuthorisationRecoverInputWhereDto,
AuthorisationRecoverInputDto,
AuthorisationRecoverOutputAffectedRowsDto,
AuthorisationRecoverOutputDto
>
(
// soft_remove (5)
AuthorisationSoftRemoveDto,
AuthorisationSoftRemoveInputWhereDto,
AuthorisationSoftRemoveInputDto,
AuthorisationSoftRemoveOutputAffectedRowsDto,
AuthorisationSoftRemoveOutputDto,

// remove (4)
AuthorisationRemoveDto,
AuthorisationRemoveInputWhereDto,
AuthorisationRemoveInputDto,
AuthorisationRemoveOutputAffectedRowsDto,
AuthorisationRemoveOutputDto,

// recover (5)
AuthorisationRecoverDto,
AuthorisationRecoverInputWhereDto,
AuthorisationRecoverInputDto,
AuthorisationRecoverOutputAffectedRowsDto,
AuthorisationRecoverOutputDto
);



// ████████ initialize UploadCrudEngine ███████████████████████████████████████████
this.initUploadEngine
<
// upload (3)
AuthorisationUploadDto,
AuthorisationUploadInputDto,
AuthorisationUploadOutputDto,

// upload_delete (3)
AuthorisationUploadDeleteDto,
AuthorisationUploadDeleteInputDto,
AuthorisationUploadDeleteOutputDto
>
(
// upload (3)
AuthorisationUploadDto,
AuthorisationUploadInputDto,
AuthorisationUploadOutputDto,

// upload_delete (3)
AuthorisationUploadDeleteDto,
AuthorisationUploadDeleteInputDto,
AuthorisationUploadDeleteOutputDto
);


// ████████ initialize ImportExportCrudEngine █████████████████████████████████████

}

}