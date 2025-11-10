import { UserNewsLetterSubscriptionEntity } from "./entities/user.subscription.entity";
import { Injectable } from "@nestjs/common";
import { DataSource, Repository } from "typeorm";
import { InjectRepository } from "@nestjs/typeorm";
import { ConfService, CreateCrudEngine, CrudFactory, DataValidationPipe, DeleteCrudEngine, FindCrudEngine, FindOutputPaginationDto, LibraryAppService, LogService, RemoveCrudEngine, UpdateCrudEngine, UploadCrudEngine, UpsertCrudEngine } from "@libs/library-app";
import { SelfGraphqlMicroserviceService } from '@libs/dynamic-app';
import { UserNewsLetterSubscriptionCreateDto, UserNewsLetterSubscriptionCreateInputDto, UserNewsLetterSubscriptionCreateOutputDto, UserNewsLetterSubscriptionDeleteDto, UserNewsLetterSubscriptionDeleteInputDto, UserNewsLetterSubscriptionDeleteInputWhereDto, UserNewsLetterSubscriptionDeleteOutputDto, UserNewsLetterSubscriptionFindDto, UserNewsLetterSubscriptionFindInputDto, UserNewsLetterSubscriptionFindInputGroupByDto, UserNewsLetterSubscriptionFindInputSortOrderDto, UserNewsLetterSubscriptionFindInputWhereDto, UserNewsLetterSubscriptionFindOneByIdDto, UserNewsLetterSubscriptionFindOneByIdInputDto, UserNewsLetterSubscriptionFindOutputDto, UserNewsLetterSubscriptionFindOutputRowsDto, UserNewsLetterSubscriptionRecoverDto, UserNewsLetterSubscriptionRecoverInputDto, UserNewsLetterSubscriptionRecoverInputWhereDto, UserNewsLetterSubscriptionRecoverOutputDto, UserNewsLetterSubscriptionRecoverOutputAffectedRowsDto, UserNewsLetterSubscriptionRemoveDto, UserNewsLetterSubscriptionRemoveInputDto, UserNewsLetterSubscriptionRemoveInputWhereDto, UserNewsLetterSubscriptionRemoveOutputDto, UserNewsLetterSubscriptionRemoveOutputAffectedRowsDto, UserNewsLetterSubscriptionRestoreDto, UserNewsLetterSubscriptionRestoreInputDto, UserNewsLetterSubscriptionRestoreInputWhereDto, UserNewsLetterSubscriptionRestoreOutputDto, UserNewsLetterSubscriptionSoftDeleteDto, UserNewsLetterSubscriptionSoftDeleteInputDto, UserNewsLetterSubscriptionSoftDeleteInputWhereDto, UserNewsLetterSubscriptionSoftDeleteOutputDto, UserNewsLetterSubscriptionSoftRemoveDto, UserNewsLetterSubscriptionSoftRemoveInputDto, UserNewsLetterSubscriptionSoftRemoveInputWhereDto, UserNewsLetterSubscriptionSoftRemoveOutputDto, UserNewsLetterSubscriptionSoftRemoveOutputAffectedRowsDto, UserNewsLetterSubscriptionUpdateDto, UserNewsLetterSubscriptionUpdateInputDto, UserNewsLetterSubscriptionUpdateInputSetsDto, UserNewsLetterSubscriptionUpdateInputWhereDto, UserNewsLetterSubscriptionUpdateOutputDto, UserNewsLetterSubscriptionUpdateOutputAffectedRowsDto, UserNewsLetterSubscriptionUploadDeleteDto, UserNewsLetterSubscriptionUploadDeleteInputDto, UserNewsLetterSubscriptionUploadDeleteOutputDto, UserNewsLetterSubscriptionUploadDto, UserNewsLetterSubscriptionUploadInputDto, UserNewsLetterSubscriptionUploadOutputDto, UserNewsLetterSubscriptionUpsertDto, UserNewsLetterSubscriptionUpsertInputDto, UserNewsLetterSubscriptionUpsertOutputDto } from "./dto/user.subscription.dto";

@Injectable()
export class UserNewsLetterSubscriptionFactory extends CrudFactory<UserNewsLetterSubscriptionEntity> {

// ████████ FindCrudEngine ████████████████████████████████████████
public declare readonly findEngine: FindCrudEngine<
// entity (1)
UserNewsLetterSubscriptionEntity,

// find (8)
UserNewsLetterSubscriptionFindDto,
UserNewsLetterSubscriptionFindInputWhereDto,
UserNewsLetterSubscriptionFindInputSortOrderDto,
UserNewsLetterSubscriptionFindInputGroupByDto,
UserNewsLetterSubscriptionFindInputDto,
UserNewsLetterSubscriptionFindOutputRowsDto,
FindOutputPaginationDto,
UserNewsLetterSubscriptionFindOutputDto,

// find_one_by_id (2)
UserNewsLetterSubscriptionFindOneByIdDto,
UserNewsLetterSubscriptionFindOneByIdInputDto
>;

// ████████ CreateCrudEngine ████████████████████████████████████████
public declare readonly createEngine: CreateCrudEngine<
// entity (1)
UserNewsLetterSubscriptionEntity,

// create (3)
UserNewsLetterSubscriptionCreateDto,
UserNewsLetterSubscriptionCreateInputDto,
UserNewsLetterSubscriptionCreateOutputDto
>;

// ████████ UpdateCrudEngine ████████████████████████████████████████
public declare readonly updateEngine: UpdateCrudEngine<
// entity (1)
UserNewsLetterSubscriptionEntity,

// update (6)
UserNewsLetterSubscriptionUpdateDto,
UserNewsLetterSubscriptionUpdateInputWhereDto,
UserNewsLetterSubscriptionUpdateInputSetsDto,
UserNewsLetterSubscriptionUpdateInputDto,
UserNewsLetterSubscriptionUpdateOutputAffectedRowsDto,
UserNewsLetterSubscriptionUpdateOutputDto
>;

// ████████ DeleteCrudEngine ████████████████████████████████████████
public declare readonly deleteEngine: DeleteCrudEngine<
// entity (1)
UserNewsLetterSubscriptionEntity,

// soft_delete (4)
UserNewsLetterSubscriptionSoftDeleteDto,
UserNewsLetterSubscriptionSoftDeleteInputWhereDto,
UserNewsLetterSubscriptionSoftDeleteInputDto,
UserNewsLetterSubscriptionSoftDeleteOutputDto,

// delete (4)
UserNewsLetterSubscriptionDeleteDto,
UserNewsLetterSubscriptionDeleteInputWhereDto,
UserNewsLetterSubscriptionDeleteInputDto,
UserNewsLetterSubscriptionDeleteOutputDto,

// restore (4)
UserNewsLetterSubscriptionRestoreDto,
UserNewsLetterSubscriptionRestoreInputWhereDto,
UserNewsLetterSubscriptionRestoreInputDto,
UserNewsLetterSubscriptionRestoreOutputDto
>;

// ████████ UpsertCrudEngine ████████████████████████████████████████
public declare readonly upsertEngine: UpsertCrudEngine<
// entity (1)
UserNewsLetterSubscriptionEntity,

// upsert (3)
UserNewsLetterSubscriptionUpsertDto,
UserNewsLetterSubscriptionUpsertInputDto,
UserNewsLetterSubscriptionUpsertOutputDto
>;

// ████████ RemoveCrudEngine ████████████████████████████████████████
public declare readonly removeEngine: RemoveCrudEngine<
// entity (1)
UserNewsLetterSubscriptionEntity,

// soft_remove (5)
UserNewsLetterSubscriptionSoftRemoveDto,
UserNewsLetterSubscriptionSoftRemoveInputWhereDto,
UserNewsLetterSubscriptionSoftRemoveInputDto,
UserNewsLetterSubscriptionSoftRemoveOutputAffectedRowsDto,
UserNewsLetterSubscriptionSoftRemoveOutputDto,

// remove (4)
UserNewsLetterSubscriptionRemoveDto,
UserNewsLetterSubscriptionRemoveInputWhereDto,
UserNewsLetterSubscriptionRemoveInputDto,
UserNewsLetterSubscriptionRemoveOutputAffectedRowsDto,
UserNewsLetterSubscriptionRemoveOutputDto,

// recover (5)
UserNewsLetterSubscriptionRecoverDto,
UserNewsLetterSubscriptionRecoverInputWhereDto,
UserNewsLetterSubscriptionRecoverInputDto,
UserNewsLetterSubscriptionRecoverOutputAffectedRowsDto,
UserNewsLetterSubscriptionRecoverOutputDto
>;

// ████████ UploadCrudEngine ████████████████████████████████████████
public declare readonly uploadEngine: UploadCrudEngine<
// entity (1)
UserNewsLetterSubscriptionEntity,

// upload (3)
UserNewsLetterSubscriptionUploadDto,
UserNewsLetterSubscriptionUploadInputDto,
UserNewsLetterSubscriptionUploadOutputDto,

// upload_delete (3)
UserNewsLetterSubscriptionUploadDeleteDto,
UserNewsLetterSubscriptionUploadDeleteInputDto,
UserNewsLetterSubscriptionUploadDeleteOutputDto
>;

constructor(
// data source
protected readonly dataSource: DataSource,

@InjectRepository(UserNewsLetterSubscriptionEntity)
protected readonly repository: Repository<UserNewsLetterSubscriptionEntity>,

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
    UserNewsLetterSubscriptionEntity,
);

this.logService.setContext(UserNewsLetterSubscriptionFactory.name);

// ████████ initialize FindCrudEngine ██████████████████████████████████████
this.initFindEngine
<
// find (8)
UserNewsLetterSubscriptionFindDto,
UserNewsLetterSubscriptionFindInputWhereDto,
UserNewsLetterSubscriptionFindInputSortOrderDto,
UserNewsLetterSubscriptionFindInputGroupByDto,
UserNewsLetterSubscriptionFindInputDto,
UserNewsLetterSubscriptionFindOutputRowsDto,
FindOutputPaginationDto,
UserNewsLetterSubscriptionFindOutputDto,

// find_one_by_id (2)
UserNewsLetterSubscriptionFindOneByIdDto,
UserNewsLetterSubscriptionFindOneByIdInputDto
>
(
// find (8)
UserNewsLetterSubscriptionFindDto,
UserNewsLetterSubscriptionFindInputWhereDto,
UserNewsLetterSubscriptionFindInputSortOrderDto,
UserNewsLetterSubscriptionFindInputGroupByDto,
UserNewsLetterSubscriptionFindInputDto,
UserNewsLetterSubscriptionFindOutputRowsDto,
FindOutputPaginationDto,
UserNewsLetterSubscriptionFindOutputDto,

// find_one_by_id (2)
UserNewsLetterSubscriptionFindOneByIdDto,
UserNewsLetterSubscriptionFindOneByIdInputDto
);


// ████████ initialize CreateCrudEngine ███████████████████████████████████████
this.initCreateEngine
<
// create (3)
UserNewsLetterSubscriptionCreateDto,
UserNewsLetterSubscriptionCreateInputDto,
UserNewsLetterSubscriptionCreateOutputDto
>
(
// create (3)
UserNewsLetterSubscriptionCreateDto,
UserNewsLetterSubscriptionCreateInputDto,
UserNewsLetterSubscriptionCreateOutputDto
);

// ████████ initialize UpdateCrudEngine ████████████████████████████████████████
this.initUpdateEngine
<
// update (6)
UserNewsLetterSubscriptionUpdateDto,
UserNewsLetterSubscriptionUpdateInputWhereDto,
UserNewsLetterSubscriptionUpdateInputSetsDto,
UserNewsLetterSubscriptionUpdateInputDto,
UserNewsLetterSubscriptionUpdateOutputAffectedRowsDto,
UserNewsLetterSubscriptionUpdateOutputDto
>
(
// update (6)
UserNewsLetterSubscriptionUpdateDto,
UserNewsLetterSubscriptionUpdateInputWhereDto,
UserNewsLetterSubscriptionUpdateInputSetsDto,
UserNewsLetterSubscriptionUpdateInputDto,
UserNewsLetterSubscriptionUpdateOutputAffectedRowsDto,
UserNewsLetterSubscriptionUpdateOutputDto
);


// ████████ initialize DeleteCrudEngine ███████████████████████████████████████████
this.initDeleteEngine
<
// soft_delete (4)
UserNewsLetterSubscriptionSoftDeleteDto,
UserNewsLetterSubscriptionSoftDeleteInputWhereDto,
UserNewsLetterSubscriptionSoftDeleteInputDto,
UserNewsLetterSubscriptionSoftDeleteOutputDto,

// delete (4)
UserNewsLetterSubscriptionDeleteDto,
UserNewsLetterSubscriptionDeleteInputWhereDto,
UserNewsLetterSubscriptionDeleteInputDto,
UserNewsLetterSubscriptionDeleteOutputDto,

// restore (4)
UserNewsLetterSubscriptionRestoreDto,
UserNewsLetterSubscriptionRestoreInputWhereDto,
UserNewsLetterSubscriptionRestoreInputDto,
UserNewsLetterSubscriptionRestoreOutputDto
>
(
// soft_delete (4)
UserNewsLetterSubscriptionSoftDeleteDto,
UserNewsLetterSubscriptionSoftDeleteInputWhereDto,
UserNewsLetterSubscriptionSoftDeleteInputDto,
UserNewsLetterSubscriptionSoftDeleteOutputDto,

// delete (4)
UserNewsLetterSubscriptionDeleteDto,
UserNewsLetterSubscriptionDeleteInputWhereDto,
UserNewsLetterSubscriptionDeleteInputDto,
UserNewsLetterSubscriptionDeleteOutputDto,

// restore (4)
UserNewsLetterSubscriptionRestoreDto,
UserNewsLetterSubscriptionRestoreInputWhereDto,
UserNewsLetterSubscriptionRestoreInputDto,
UserNewsLetterSubscriptionRestoreOutputDto
);



// ████████ initialize UpsertCrudEngine ███████████████████████████████████████████
this.initUpsertEngine
<
// upsert (3)
UserNewsLetterSubscriptionUpsertDto,
UserNewsLetterSubscriptionUpsertInputDto,
UserNewsLetterSubscriptionUpsertOutputDto
>
(
// upsert (3)
UserNewsLetterSubscriptionUpsertDto,
UserNewsLetterSubscriptionUpsertInputDto,
UserNewsLetterSubscriptionUpsertOutputDto
);




// ████████ initialize RemoveCrudEngine ███████████████████████████████████████████
this.initRemoveEngine
<
// soft_remove (5)
UserNewsLetterSubscriptionSoftRemoveDto,
UserNewsLetterSubscriptionSoftRemoveInputWhereDto,
UserNewsLetterSubscriptionSoftRemoveInputDto,
UserNewsLetterSubscriptionSoftRemoveOutputAffectedRowsDto,
UserNewsLetterSubscriptionSoftRemoveOutputDto,

// remove (4)
UserNewsLetterSubscriptionRemoveDto,
UserNewsLetterSubscriptionRemoveInputWhereDto,
UserNewsLetterSubscriptionRemoveInputDto,
UserNewsLetterSubscriptionRemoveOutputAffectedRowsDto,
UserNewsLetterSubscriptionRemoveOutputDto,

// recover (5)
UserNewsLetterSubscriptionRecoverDto,
UserNewsLetterSubscriptionRecoverInputWhereDto,
UserNewsLetterSubscriptionRecoverInputDto,
UserNewsLetterSubscriptionRecoverOutputAffectedRowsDto,
UserNewsLetterSubscriptionRecoverOutputDto
>
(
// soft_remove (5)
UserNewsLetterSubscriptionSoftRemoveDto,
UserNewsLetterSubscriptionSoftRemoveInputWhereDto,
UserNewsLetterSubscriptionSoftRemoveInputDto,
UserNewsLetterSubscriptionSoftRemoveOutputAffectedRowsDto,
UserNewsLetterSubscriptionSoftRemoveOutputDto,

// remove (4)
UserNewsLetterSubscriptionRemoveDto,
UserNewsLetterSubscriptionRemoveInputWhereDto,
UserNewsLetterSubscriptionRemoveInputDto,
UserNewsLetterSubscriptionRemoveOutputAffectedRowsDto,
UserNewsLetterSubscriptionRemoveOutputDto,

// recover (5)
UserNewsLetterSubscriptionRecoverDto,
UserNewsLetterSubscriptionRecoverInputWhereDto,
UserNewsLetterSubscriptionRecoverInputDto,
UserNewsLetterSubscriptionRecoverOutputAffectedRowsDto,
UserNewsLetterSubscriptionRecoverOutputDto
);



// ████████ initialize UploadCrudEngine ███████████████████████████████████████████
this.initUploadEngine
<
// upload (3)
UserNewsLetterSubscriptionUploadDto,
UserNewsLetterSubscriptionUploadInputDto,
UserNewsLetterSubscriptionUploadOutputDto,

// upload_delete (3)
UserNewsLetterSubscriptionUploadDeleteDto,
UserNewsLetterSubscriptionUploadDeleteInputDto,
UserNewsLetterSubscriptionUploadDeleteOutputDto
>
(
// upload (3)
UserNewsLetterSubscriptionUploadDto,
UserNewsLetterSubscriptionUploadInputDto,
UserNewsLetterSubscriptionUploadOutputDto,

// upload_delete (3)
UserNewsLetterSubscriptionUploadDeleteDto,
UserNewsLetterSubscriptionUploadDeleteInputDto,
UserNewsLetterSubscriptionUploadDeleteOutputDto
);


// ████████ initialize ImportExportCrudEngine █████████████████████████████████████

}

}