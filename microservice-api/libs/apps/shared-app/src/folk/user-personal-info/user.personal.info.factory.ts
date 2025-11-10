import { UserPersonalInfoEntity } from "./entities/user.personal.info.entity";
import { Injectable } from "@nestjs/common";
import { DataSource, Repository } from "typeorm";
import { InjectRepository } from "@nestjs/typeorm";
import { ConfService, CreateCrudEngine, CrudFactory, DataValidationPipe, DeleteCrudEngine, FindCrudEngine, FindOutputPaginationDto, LibraryAppService, LogService, RemoveCrudEngine, UpdateCrudEngine, UploadCrudEngine, UpsertCrudEngine } from "@libs/library-app";
import { SelfGraphqlMicroserviceService } from "@libs/dynamic-app";
import { UserPersonalInfoCreateDto, UserPersonalInfoCreateInputDto, UserPersonalInfoCreateOutputDto, UserPersonalInfoDeleteDto, UserPersonalInfoDeleteInputDto, UserPersonalInfoDeleteInputWhereDto, UserPersonalInfoDeleteOutputDto, UserPersonalInfoFindDto, UserPersonalInfoFindInputDto, UserPersonalInfoFindInputGroupByDto, UserPersonalInfoFindInputSortOrderDto, UserPersonalInfoFindInputWhereDto, UserPersonalInfoFindOneByIdDto, UserPersonalInfoFindOneByIdInputDto, UserPersonalInfoFindOutputDto, UserPersonalInfoFindOutputRowsDto, UserPersonalInfoRecoverDto, UserPersonalInfoRecoverInputDto, UserPersonalInfoRecoverInputWhereDto, UserPersonalInfoRecoverOutputDto, UserPersonalInfoRecoverOutputAffectedRowsDto, UserPersonalInfoRemoveDto, UserPersonalInfoRemoveInputDto, UserPersonalInfoRemoveInputWhereDto, UserPersonalInfoRemoveOutputDto, UserPersonalInfoRemoveOutputAffectedRowsDto, UserPersonalInfoRestoreDto, UserPersonalInfoRestoreInputDto, UserPersonalInfoRestoreInputWhereDto, UserPersonalInfoRestoreOutputDto, UserPersonalInfoSoftDeleteDto, UserPersonalInfoSoftDeleteInputDto, UserPersonalInfoSoftDeleteInputWhereDto, UserPersonalInfoSoftDeleteOutputDto, UserPersonalInfoSoftRemoveDto, UserPersonalInfoSoftRemoveInputDto, UserPersonalInfoSoftRemoveInputWhereDto, UserPersonalInfoSoftRemoveOutputDto, UserPersonalInfoSoftRemoveOutputAffectedRowsDto, UserPersonalInfoUpdateDto, UserPersonalInfoUpdateInputDto, UserPersonalInfoUpdateInputSetsDto, UserPersonalInfoUpdateInputWhereDto, UserPersonalInfoUpdateOutputDto, UserPersonalInfoUpdateOutputAffectedRowsDto, UserPersonalInfoUploadDeleteDto, UserPersonalInfoUploadDeleteInputDto, UserPersonalInfoUploadDeleteOutputDto, UserPersonalInfoUploadDto, UserPersonalInfoUploadInputDto, UserPersonalInfoUploadOutputDto, UserPersonalInfoUpsertDto, UserPersonalInfoUpsertInputDto, UserPersonalInfoUpsertOutputDto } from "./dto/user.personal.info.dto";

@Injectable()
export class UserPersonalInfoFactory extends CrudFactory<UserPersonalInfoEntity> {

// ████████ FindCrudEngine ████████████████████████████████████████
public declare readonly findEngine: FindCrudEngine<
// entity (1)
UserPersonalInfoEntity,

// find (8)
UserPersonalInfoFindDto,
UserPersonalInfoFindInputWhereDto,
UserPersonalInfoFindInputSortOrderDto,
UserPersonalInfoFindInputGroupByDto,
UserPersonalInfoFindInputDto,
UserPersonalInfoFindOutputRowsDto,
FindOutputPaginationDto,
UserPersonalInfoFindOutputDto,

// find_one_by_id (2)
UserPersonalInfoFindOneByIdDto,
UserPersonalInfoFindOneByIdInputDto
>;

// ████████ CreateCrudEngine ████████████████████████████████████████
public declare readonly createEngine: CreateCrudEngine<
// entity (1)
UserPersonalInfoEntity,

// create (3)
UserPersonalInfoCreateDto,
UserPersonalInfoCreateInputDto,
UserPersonalInfoCreateOutputDto
>;

// ████████ UpdateCrudEngine ████████████████████████████████████████
public declare readonly updateEngine: UpdateCrudEngine<
// entity (1)
UserPersonalInfoEntity,

// update (6)
UserPersonalInfoUpdateDto,
UserPersonalInfoUpdateInputWhereDto,
UserPersonalInfoUpdateInputSetsDto,
UserPersonalInfoUpdateInputDto,
UserPersonalInfoUpdateOutputAffectedRowsDto,
UserPersonalInfoUpdateOutputDto
>;

// ████████ DeleteCrudEngine ████████████████████████████████████████
public declare readonly deleteEngine: DeleteCrudEngine<
// entity (1)
UserPersonalInfoEntity,

// soft_delete (4)
UserPersonalInfoSoftDeleteDto,
UserPersonalInfoSoftDeleteInputWhereDto,
UserPersonalInfoSoftDeleteInputDto,
UserPersonalInfoSoftDeleteOutputDto,

// delete (4)
UserPersonalInfoDeleteDto,
UserPersonalInfoDeleteInputWhereDto,
UserPersonalInfoDeleteInputDto,
UserPersonalInfoDeleteOutputDto,

// restore (4)
UserPersonalInfoRestoreDto,
UserPersonalInfoRestoreInputWhereDto,
UserPersonalInfoRestoreInputDto,
UserPersonalInfoRestoreOutputDto
>;

// ████████ UpsertCrudEngine ████████████████████████████████████████
public declare readonly upsertEngine: UpsertCrudEngine<
// entity (1)
UserPersonalInfoEntity,

// upsert (3)
UserPersonalInfoUpsertDto,
UserPersonalInfoUpsertInputDto,
UserPersonalInfoUpsertOutputDto
>;

// ████████ RemoveCrudEngine ████████████████████████████████████████
public declare readonly removeEngine: RemoveCrudEngine<
// entity (1)
UserPersonalInfoEntity,

// soft_remove (5)
UserPersonalInfoSoftRemoveDto,
UserPersonalInfoSoftRemoveInputWhereDto,
UserPersonalInfoSoftRemoveInputDto,
UserPersonalInfoSoftRemoveOutputAffectedRowsDto,
UserPersonalInfoSoftRemoveOutputDto,

// remove (4)
UserPersonalInfoRemoveDto,
UserPersonalInfoRemoveInputWhereDto,
UserPersonalInfoRemoveInputDto,
UserPersonalInfoRemoveOutputAffectedRowsDto,
UserPersonalInfoRemoveOutputDto,

// recover (5)
UserPersonalInfoRecoverDto,
UserPersonalInfoRecoverInputWhereDto,
UserPersonalInfoRecoverInputDto,
UserPersonalInfoRecoverOutputAffectedRowsDto,
UserPersonalInfoRecoverOutputDto
>;

// ████████ UploadCrudEngine ████████████████████████████████████████
public declare readonly uploadEngine: UploadCrudEngine<
// entity (1)
UserPersonalInfoEntity,

// upload (3)
UserPersonalInfoUploadDto,
UserPersonalInfoUploadInputDto,
UserPersonalInfoUploadOutputDto,

// upload_delete (3)
UserPersonalInfoUploadDeleteDto,
UserPersonalInfoUploadDeleteInputDto,
UserPersonalInfoUploadDeleteOutputDto
>;

constructor(
// data source
protected readonly dataSource: DataSource,

@InjectRepository(UserPersonalInfoEntity)
protected readonly repository: Repository<UserPersonalInfoEntity>,

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
    UserPersonalInfoEntity,
);

this.logService.setContext(UserPersonalInfoFactory.name);

// ████████ initialize FindCrudEngine ██████████████████████████████████████
this.initFindEngine
<
// find (8)
UserPersonalInfoFindDto,
UserPersonalInfoFindInputWhereDto,
UserPersonalInfoFindInputSortOrderDto,
UserPersonalInfoFindInputGroupByDto,
UserPersonalInfoFindInputDto,
UserPersonalInfoFindOutputRowsDto,
FindOutputPaginationDto,
UserPersonalInfoFindOutputDto,

// find_one_by_id (2)
UserPersonalInfoFindOneByIdDto,
UserPersonalInfoFindOneByIdInputDto
>
(
// find (8)
UserPersonalInfoFindDto,
UserPersonalInfoFindInputWhereDto,
UserPersonalInfoFindInputSortOrderDto,
UserPersonalInfoFindInputGroupByDto,
UserPersonalInfoFindInputDto,
UserPersonalInfoFindOutputRowsDto,
FindOutputPaginationDto,
UserPersonalInfoFindOutputDto,

// find_one_by_id (2)
UserPersonalInfoFindOneByIdDto,
UserPersonalInfoFindOneByIdInputDto
);


// ████████ initialize CreateCrudEngine ███████████████████████████████████████
this.initCreateEngine
<
// create (3)
UserPersonalInfoCreateDto,
UserPersonalInfoCreateInputDto,
UserPersonalInfoCreateOutputDto
>
(
// create (3)
UserPersonalInfoCreateDto,
UserPersonalInfoCreateInputDto,
UserPersonalInfoCreateOutputDto
);

// ████████ initialize UpdateCrudEngine ████████████████████████████████████████
this.initUpdateEngine
<
// update (6)
UserPersonalInfoUpdateDto,
UserPersonalInfoUpdateInputWhereDto,
UserPersonalInfoUpdateInputSetsDto,
UserPersonalInfoUpdateInputDto,
UserPersonalInfoUpdateOutputAffectedRowsDto,
UserPersonalInfoUpdateOutputDto
>
(
// update (6)
UserPersonalInfoUpdateDto,
UserPersonalInfoUpdateInputWhereDto,
UserPersonalInfoUpdateInputSetsDto,
UserPersonalInfoUpdateInputDto,
UserPersonalInfoUpdateOutputAffectedRowsDto,
UserPersonalInfoUpdateOutputDto
);


// ████████ initialize DeleteCrudEngine ███████████████████████████████████████████
this.initDeleteEngine
<
// soft_delete (4)
UserPersonalInfoSoftDeleteDto,
UserPersonalInfoSoftDeleteInputWhereDto,
UserPersonalInfoSoftDeleteInputDto,
UserPersonalInfoSoftDeleteOutputDto,

// delete (4)
UserPersonalInfoDeleteDto,
UserPersonalInfoDeleteInputWhereDto,
UserPersonalInfoDeleteInputDto,
UserPersonalInfoDeleteOutputDto,

// restore (4)
UserPersonalInfoRestoreDto,
UserPersonalInfoRestoreInputWhereDto,
UserPersonalInfoRestoreInputDto,
UserPersonalInfoRestoreOutputDto
>
(
// soft_delete (4)
UserPersonalInfoSoftDeleteDto,
UserPersonalInfoSoftDeleteInputWhereDto,
UserPersonalInfoSoftDeleteInputDto,
UserPersonalInfoSoftDeleteOutputDto,

// delete (4)
UserPersonalInfoDeleteDto,
UserPersonalInfoDeleteInputWhereDto,
UserPersonalInfoDeleteInputDto,
UserPersonalInfoDeleteOutputDto,

// restore (4)
UserPersonalInfoRestoreDto,
UserPersonalInfoRestoreInputWhereDto,
UserPersonalInfoRestoreInputDto,
UserPersonalInfoRestoreOutputDto
);



// ████████ initialize UpsertCrudEngine ███████████████████████████████████████████
this.initUpsertEngine
<
// upsert (3)
UserPersonalInfoUpsertDto,
UserPersonalInfoUpsertInputDto,
UserPersonalInfoUpsertOutputDto
>
(
// upsert (3)
UserPersonalInfoUpsertDto,
UserPersonalInfoUpsertInputDto,
UserPersonalInfoUpsertOutputDto
);




// ████████ initialize RemoveCrudEngine ███████████████████████████████████████████
this.initRemoveEngine
<
// soft_remove (5)
UserPersonalInfoSoftRemoveDto,
UserPersonalInfoSoftRemoveInputWhereDto,
UserPersonalInfoSoftRemoveInputDto,
UserPersonalInfoSoftRemoveOutputAffectedRowsDto,
UserPersonalInfoSoftRemoveOutputDto,

// remove (4)
UserPersonalInfoRemoveDto,
UserPersonalInfoRemoveInputWhereDto,
UserPersonalInfoRemoveInputDto,
UserPersonalInfoRemoveOutputAffectedRowsDto,
UserPersonalInfoRemoveOutputDto,

// recover (5)
UserPersonalInfoRecoverDto,
UserPersonalInfoRecoverInputWhereDto,
UserPersonalInfoRecoverInputDto,
UserPersonalInfoRecoverOutputAffectedRowsDto,
UserPersonalInfoRecoverOutputDto
>
(
// soft_remove (5)
UserPersonalInfoSoftRemoveDto,
UserPersonalInfoSoftRemoveInputWhereDto,
UserPersonalInfoSoftRemoveInputDto,
UserPersonalInfoSoftRemoveOutputAffectedRowsDto,
UserPersonalInfoSoftRemoveOutputDto,

// remove (4)
UserPersonalInfoRemoveDto,
UserPersonalInfoRemoveInputWhereDto,
UserPersonalInfoRemoveInputDto,
UserPersonalInfoRemoveOutputAffectedRowsDto,
UserPersonalInfoRemoveOutputDto,

// recover (5)
UserPersonalInfoRecoverDto,
UserPersonalInfoRecoverInputWhereDto,
UserPersonalInfoRecoverInputDto,
UserPersonalInfoRecoverOutputAffectedRowsDto,
UserPersonalInfoRecoverOutputDto
);



// ████████ initialize UploadCrudEngine ███████████████████████████████████████████
this.initUploadEngine
<
// upload (3)
UserPersonalInfoUploadDto,
UserPersonalInfoUploadInputDto,
UserPersonalInfoUploadOutputDto,

// upload_delete (3)
UserPersonalInfoUploadDeleteDto,
UserPersonalInfoUploadDeleteInputDto,
UserPersonalInfoUploadDeleteOutputDto
>
(
// upload (3)
UserPersonalInfoUploadDto,
UserPersonalInfoUploadInputDto,
UserPersonalInfoUploadOutputDto,

// upload_delete (3)
UserPersonalInfoUploadDeleteDto,
UserPersonalInfoUploadDeleteInputDto,
UserPersonalInfoUploadDeleteOutputDto
);


// ████████ initialize ImportExportCrudEngine █████████████████████████████████████

}

}