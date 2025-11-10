import { UserIdentityCardEntity } from "./entities/user.identity.card.entity";
import { Injectable } from "@nestjs/common";
import { DataSource, Repository } from "typeorm";
import { InjectRepository } from "@nestjs/typeorm";
import { ConfService, CreateCrudEngine, CrudFactory, DataValidationPipe, DeleteCrudEngine, FindCrudEngine, FindOutputPaginationDto, LibraryAppService, LogService, RemoveCrudEngine, UpdateCrudEngine, UploadCrudEngine, UpsertCrudEngine } from "@libs/library-app";
import { SelfGraphqlMicroserviceService } from "@libs/dynamic-app";
import { UserIdentityCardCreateDto, UserIdentityCardCreateInputDto, UserIdentityCardCreateOutputDto, UserIdentityCardDeleteDto, UserIdentityCardDeleteInputDto, UserIdentityCardDeleteInputWhereDto, UserIdentityCardDeleteOutputDto, UserIdentityCardFindDto, UserIdentityCardFindInputDto, UserIdentityCardFindInputGroupByDto, UserIdentityCardFindInputSortOrderDto, UserIdentityCardFindInputWhereDto, UserIdentityCardFindOneByIdDto, UserIdentityCardFindOneByIdInputDto, UserIdentityCardFindOutputDto, UserIdentityCardFindOutputRowsDto, UserIdentityCardRecoverDto, UserIdentityCardRecoverInputDto, UserIdentityCardRecoverInputWhereDto, UserIdentityCardRecoverOutputDto, UserIdentityCardRecoverOutputAffectedRowsDto, UserIdentityCardRemoveDto, UserIdentityCardRemoveInputDto, UserIdentityCardRemoveInputWhereDto, UserIdentityCardRemoveOutputDto, UserIdentityCardRemoveOutputAffectedRowsDto, UserIdentityCardRestoreDto, UserIdentityCardRestoreInputDto, UserIdentityCardRestoreInputWhereDto, UserIdentityCardRestoreOutputDto, UserIdentityCardSoftDeleteDto, UserIdentityCardSoftDeleteInputDto, UserIdentityCardSoftDeleteInputWhereDto, UserIdentityCardSoftDeleteOutputDto, UserIdentityCardSoftRemoveDto, UserIdentityCardSoftRemoveInputDto, UserIdentityCardSoftRemoveInputWhereDto, UserIdentityCardSoftRemoveOutputDto, UserIdentityCardSoftRemoveOutputAffectedRowsDto, UserIdentityCardUpdateDto, UserIdentityCardUpdateInputDto, UserIdentityCardUpdateInputSetsDto, UserIdentityCardUpdateInputWhereDto, UserIdentityCardUpdateOutputDto, UserIdentityCardUpdateOutputAffectedRowsDto, UserIdentityCardUploadDeleteDto, UserIdentityCardUploadDeleteInputDto, UserIdentityCardUploadDeleteOutputDto, UserIdentityCardUploadDto, UserIdentityCardUploadInputDto, UserIdentityCardUploadOutputDto, UserIdentityCardUpsertDto, UserIdentityCardUpsertInputDto, UserIdentityCardUpsertOutputDto } from "./dto/user.identity.card.dto";

@Injectable()
export class UserIdentityCardFactory extends CrudFactory<UserIdentityCardEntity> {

// ████████ FindCrudEngine ████████████████████████████████████████
public declare readonly findEngine: FindCrudEngine<
// entity (1)
UserIdentityCardEntity,

// find (8)
UserIdentityCardFindDto,
UserIdentityCardFindInputWhereDto,
UserIdentityCardFindInputSortOrderDto,
UserIdentityCardFindInputGroupByDto,
UserIdentityCardFindInputDto,
UserIdentityCardFindOutputRowsDto,
FindOutputPaginationDto,
UserIdentityCardFindOutputDto,

// find_one_by_id (2)
UserIdentityCardFindOneByIdDto,
UserIdentityCardFindOneByIdInputDto
>;

// ████████ CreateCrudEngine ████████████████████████████████████████
public declare readonly createEngine: CreateCrudEngine<
// entity (1)
UserIdentityCardEntity,

// create (3)
UserIdentityCardCreateDto,
UserIdentityCardCreateInputDto,
UserIdentityCardCreateOutputDto
>;

// ████████ UpdateCrudEngine ████████████████████████████████████████
public declare readonly updateEngine: UpdateCrudEngine<
// entity (1)
UserIdentityCardEntity,

// update (6)
UserIdentityCardUpdateDto,
UserIdentityCardUpdateInputWhereDto,
UserIdentityCardUpdateInputSetsDto,
UserIdentityCardUpdateInputDto,
UserIdentityCardUpdateOutputAffectedRowsDto,
UserIdentityCardUpdateOutputDto
>;

// ████████ DeleteCrudEngine ████████████████████████████████████████
public declare readonly deleteEngine: DeleteCrudEngine<
// entity (1)
UserIdentityCardEntity,

// soft_delete (4)
UserIdentityCardSoftDeleteDto,
UserIdentityCardSoftDeleteInputWhereDto,
UserIdentityCardSoftDeleteInputDto,
UserIdentityCardSoftDeleteOutputDto,

// delete (4)
UserIdentityCardDeleteDto,
UserIdentityCardDeleteInputWhereDto,
UserIdentityCardDeleteInputDto,
UserIdentityCardDeleteOutputDto,

// restore (4)
UserIdentityCardRestoreDto,
UserIdentityCardRestoreInputWhereDto,
UserIdentityCardRestoreInputDto,
UserIdentityCardRestoreOutputDto
>;

// ████████ UpsertCrudEngine ████████████████████████████████████████
public declare readonly upsertEngine: UpsertCrudEngine<
// entity (1)
UserIdentityCardEntity,

// upsert (3)
UserIdentityCardUpsertDto,
UserIdentityCardUpsertInputDto,
UserIdentityCardUpsertOutputDto
>;

// ████████ RemoveCrudEngine ████████████████████████████████████████
public declare readonly removeEngine: RemoveCrudEngine<
// entity (1)
UserIdentityCardEntity,

// soft_remove (5)
UserIdentityCardSoftRemoveDto,
UserIdentityCardSoftRemoveInputWhereDto,
UserIdentityCardSoftRemoveInputDto,
UserIdentityCardSoftRemoveOutputAffectedRowsDto,
UserIdentityCardSoftRemoveOutputDto,

// remove (4)
UserIdentityCardRemoveDto,
UserIdentityCardRemoveInputWhereDto,
UserIdentityCardRemoveInputDto,
UserIdentityCardRemoveOutputAffectedRowsDto,
UserIdentityCardRemoveOutputDto,

// recover (5)
UserIdentityCardRecoverDto,
UserIdentityCardRecoverInputWhereDto,
UserIdentityCardRecoverInputDto,
UserIdentityCardRecoverOutputAffectedRowsDto,
UserIdentityCardRecoverOutputDto
>;

// ████████ UploadCrudEngine ████████████████████████████████████████
public declare readonly uploadEngine: UploadCrudEngine<
// entity (1)
UserIdentityCardEntity,

// upload (3)
UserIdentityCardUploadDto,
UserIdentityCardUploadInputDto,
UserIdentityCardUploadOutputDto,

// upload_delete (3)
UserIdentityCardUploadDeleteDto,
UserIdentityCardUploadDeleteInputDto,
UserIdentityCardUploadDeleteOutputDto
>;

constructor(
// data source
protected readonly dataSource: DataSource,

@InjectRepository(UserIdentityCardEntity)
protected readonly repository: Repository<UserIdentityCardEntity>,

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
    UserIdentityCardEntity,
);

this.logService.setContext(UserIdentityCardFactory.name);

// ████████ initialize FindCrudEngine ██████████████████████████████████████
this.initFindEngine
<
// find (8)
UserIdentityCardFindDto,
UserIdentityCardFindInputWhereDto,
UserIdentityCardFindInputSortOrderDto,
UserIdentityCardFindInputGroupByDto,
UserIdentityCardFindInputDto,
UserIdentityCardFindOutputRowsDto,
FindOutputPaginationDto,
UserIdentityCardFindOutputDto,

// find_one_by_id (2)
UserIdentityCardFindOneByIdDto,
UserIdentityCardFindOneByIdInputDto
>
(
// find (8)
UserIdentityCardFindDto,
UserIdentityCardFindInputWhereDto,
UserIdentityCardFindInputSortOrderDto,
UserIdentityCardFindInputGroupByDto,
UserIdentityCardFindInputDto,
UserIdentityCardFindOutputRowsDto,
FindOutputPaginationDto,
UserIdentityCardFindOutputDto,

// find_one_by_id (2)
UserIdentityCardFindOneByIdDto,
UserIdentityCardFindOneByIdInputDto
);


// ████████ initialize CreateCrudEngine ███████████████████████████████████████
this.initCreateEngine
<
// create (3)
UserIdentityCardCreateDto,
UserIdentityCardCreateInputDto,
UserIdentityCardCreateOutputDto
>
(
// create (3)
UserIdentityCardCreateDto,
UserIdentityCardCreateInputDto,
UserIdentityCardCreateOutputDto
);

// ████████ initialize UpdateCrudEngine ████████████████████████████████████████
this.initUpdateEngine
<
// update (6)
UserIdentityCardUpdateDto,
UserIdentityCardUpdateInputWhereDto,
UserIdentityCardUpdateInputSetsDto,
UserIdentityCardUpdateInputDto,
UserIdentityCardUpdateOutputAffectedRowsDto,
UserIdentityCardUpdateOutputDto
>
(
// update (6)
UserIdentityCardUpdateDto,
UserIdentityCardUpdateInputWhereDto,
UserIdentityCardUpdateInputSetsDto,
UserIdentityCardUpdateInputDto,
UserIdentityCardUpdateOutputAffectedRowsDto,
UserIdentityCardUpdateOutputDto
);


// ████████ initialize DeleteCrudEngine ███████████████████████████████████████████
this.initDeleteEngine
<
// soft_delete (4)
UserIdentityCardSoftDeleteDto,
UserIdentityCardSoftDeleteInputWhereDto,
UserIdentityCardSoftDeleteInputDto,
UserIdentityCardSoftDeleteOutputDto,

// delete (4)
UserIdentityCardDeleteDto,
UserIdentityCardDeleteInputWhereDto,
UserIdentityCardDeleteInputDto,
UserIdentityCardDeleteOutputDto,

// restore (4)
UserIdentityCardRestoreDto,
UserIdentityCardRestoreInputWhereDto,
UserIdentityCardRestoreInputDto,
UserIdentityCardRestoreOutputDto
>
(
// soft_delete (4)
UserIdentityCardSoftDeleteDto,
UserIdentityCardSoftDeleteInputWhereDto,
UserIdentityCardSoftDeleteInputDto,
UserIdentityCardSoftDeleteOutputDto,

// delete (4)
UserIdentityCardDeleteDto,
UserIdentityCardDeleteInputWhereDto,
UserIdentityCardDeleteInputDto,
UserIdentityCardDeleteOutputDto,

// restore (4)
UserIdentityCardRestoreDto,
UserIdentityCardRestoreInputWhereDto,
UserIdentityCardRestoreInputDto,
UserIdentityCardRestoreOutputDto
);



// ████████ initialize UpsertCrudEngine ███████████████████████████████████████████
this.initUpsertEngine
<
// upsert (3)
UserIdentityCardUpsertDto,
UserIdentityCardUpsertInputDto,
UserIdentityCardUpsertOutputDto
>
(
// upsert (3)
UserIdentityCardUpsertDto,
UserIdentityCardUpsertInputDto,
UserIdentityCardUpsertOutputDto
);




// ████████ initialize RemoveCrudEngine ███████████████████████████████████████████
this.initRemoveEngine
<
// soft_remove (5)
UserIdentityCardSoftRemoveDto,
UserIdentityCardSoftRemoveInputWhereDto,
UserIdentityCardSoftRemoveInputDto,
UserIdentityCardSoftRemoveOutputAffectedRowsDto,
UserIdentityCardSoftRemoveOutputDto,

// remove (4)
UserIdentityCardRemoveDto,
UserIdentityCardRemoveInputWhereDto,
UserIdentityCardRemoveInputDto,
UserIdentityCardRemoveOutputAffectedRowsDto,
UserIdentityCardRemoveOutputDto,

// recover (5)
UserIdentityCardRecoverDto,
UserIdentityCardRecoverInputWhereDto,
UserIdentityCardRecoverInputDto,
UserIdentityCardRecoverOutputAffectedRowsDto,
UserIdentityCardRecoverOutputDto
>
(
// soft_remove (5)
UserIdentityCardSoftRemoveDto,
UserIdentityCardSoftRemoveInputWhereDto,
UserIdentityCardSoftRemoveInputDto,
UserIdentityCardSoftRemoveOutputAffectedRowsDto,
UserIdentityCardSoftRemoveOutputDto,

// remove (4)
UserIdentityCardRemoveDto,
UserIdentityCardRemoveInputWhereDto,
UserIdentityCardRemoveInputDto,
UserIdentityCardRemoveOutputAffectedRowsDto,
UserIdentityCardRemoveOutputDto,

// recover (5)
UserIdentityCardRecoverDto,
UserIdentityCardRecoverInputWhereDto,
UserIdentityCardRecoverInputDto,
UserIdentityCardRecoverOutputAffectedRowsDto,
UserIdentityCardRecoverOutputDto
);



// ████████ initialize UploadCrudEngine ███████████████████████████████████████████
this.initUploadEngine
<
// upload (3)
UserIdentityCardUploadDto,
UserIdentityCardUploadInputDto,
UserIdentityCardUploadOutputDto,

// upload_delete (3)
UserIdentityCardUploadDeleteDto,
UserIdentityCardUploadDeleteInputDto,
UserIdentityCardUploadDeleteOutputDto
>
(
// upload (3)
UserIdentityCardUploadDto,
UserIdentityCardUploadInputDto,
UserIdentityCardUploadOutputDto,

// upload_delete (3)
UserIdentityCardUploadDeleteDto,
UserIdentityCardUploadDeleteInputDto,
UserIdentityCardUploadDeleteOutputDto
);


// ████████ initialize ImportExportCrudEngine █████████████████████████████████████

}

}