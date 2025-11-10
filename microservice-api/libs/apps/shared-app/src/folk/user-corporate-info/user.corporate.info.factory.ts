import { UserCorporateInfoEntity } from "./entities/user.corporate.info.entity";
import { Injectable } from "@nestjs/common";
import { DataSource, Repository } from "typeorm";
import { InjectRepository } from "@nestjs/typeorm";
import { ConfService, CreateCrudEngine, CrudFactory, DataValidationPipe, DeleteCrudEngine, FindCrudEngine, FindOutputPaginationDto, ImageProcessingService, LibraryAppService, LogService, RemoveCrudEngine, UpdateCrudEngine, UploadCrudEngine, UpsertCrudEngine } from "@libs/library-app";
import { SelfGraphqlMicroserviceService } from "@libs/dynamic-app";
import { UserCorporateInfoCreateDto, UserCorporateInfoCreateInputDto, UserCorporateInfoCreateOutputDto, UserCorporateInfoDeleteDto, UserCorporateInfoDeleteInputDto, UserCorporateInfoDeleteInputWhereDto, UserCorporateInfoDeleteOutputDto, UserCorporateInfoFindDto, UserCorporateInfoFindInputDto, UserCorporateInfoFindInputGroupByDto, UserCorporateInfoFindInputSortOrderDto, UserCorporateInfoFindInputWhereDto, UserCorporateInfoFindOneByIdDto, UserCorporateInfoFindOneByIdInputDto, UserCorporateInfoFindOutputDto, UserCorporateInfoFindOutputRowsDto, UserCorporateInfoRecoverDto, UserCorporateInfoRecoverInputDto, UserCorporateInfoRecoverInputWhereDto, UserCorporateInfoRecoverOutputDto, UserCorporateInfoRecoverOutputAffectedRowsDto, UserCorporateInfoRemoveDto, UserCorporateInfoRemoveInputDto, UserCorporateInfoRemoveInputWhereDto, UserCorporateInfoRemoveOutputDto, UserCorporateInfoRemoveOutputAffectedRowsDto, UserCorporateInfoRestoreDto, UserCorporateInfoRestoreInputDto, UserCorporateInfoRestoreInputWhereDto, UserCorporateInfoRestoreOutputDto, UserCorporateInfoSoftDeleteDto, UserCorporateInfoSoftDeleteInputDto, UserCorporateInfoSoftDeleteInputWhereDto, UserCorporateInfoSoftDeleteOutputDto, UserCorporateInfoSoftRemoveDto, UserCorporateInfoSoftRemoveInputDto, UserCorporateInfoSoftRemoveInputWhereDto, UserCorporateInfoSoftRemoveOutputDto, UserCorporateInfoSoftRemoveOutputAffectedRowsDto, UserCorporateInfoUpdateDto, UserCorporateInfoUpdateInputDto, UserCorporateInfoUpdateInputSetsDto, UserCorporateInfoUpdateInputWhereDto, UserCorporateInfoUpdateOutputDto, UserCorporateInfoUpdateOutputAffectedRowsDto, UserCorporateInfoUploadDeleteDto, UserCorporateInfoUploadDeleteInputDto, UserCorporateInfoUploadDeleteOutputDto, UserCorporateInfoUploadDto, UserCorporateInfoUploadInputDto, UserCorporateInfoUploadOutputDto, UserCorporateInfoUpsertDto, UserCorporateInfoUpsertInputDto, UserCorporateInfoUpsertOutputDto } from "./dto/user.corporate.info.dto";

@Injectable()
export class UserCorporateInfoFactory extends CrudFactory<UserCorporateInfoEntity> {

// ████████ FindCrudEngine ████████████████████████████████████████
public declare readonly findEngine: FindCrudEngine<
// entity (1)
UserCorporateInfoEntity,

// find (8)
UserCorporateInfoFindDto,
UserCorporateInfoFindInputWhereDto,
UserCorporateInfoFindInputSortOrderDto,
UserCorporateInfoFindInputGroupByDto,
UserCorporateInfoFindInputDto,
UserCorporateInfoFindOutputRowsDto,
FindOutputPaginationDto,
UserCorporateInfoFindOutputDto,

// find_one_by_id (2)
UserCorporateInfoFindOneByIdDto,
UserCorporateInfoFindOneByIdInputDto
>;

// ████████ CreateCrudEngine ████████████████████████████████████████
public declare readonly createEngine: CreateCrudEngine<
// entity (1)
UserCorporateInfoEntity,

// create (3)
UserCorporateInfoCreateDto,
UserCorporateInfoCreateInputDto,
UserCorporateInfoCreateOutputDto
>;

// ████████ UpdateCrudEngine ████████████████████████████████████████
public declare readonly updateEngine: UpdateCrudEngine<
// entity (1)
UserCorporateInfoEntity,

// update (6)
UserCorporateInfoUpdateDto,
UserCorporateInfoUpdateInputWhereDto,
UserCorporateInfoUpdateInputSetsDto,
UserCorporateInfoUpdateInputDto,
UserCorporateInfoUpdateOutputAffectedRowsDto,
UserCorporateInfoUpdateOutputDto
>;

// ████████ DeleteCrudEngine ████████████████████████████████████████
public declare readonly deleteEngine: DeleteCrudEngine<
// entity (1)
UserCorporateInfoEntity,

// soft_delete (4)
UserCorporateInfoSoftDeleteDto,
UserCorporateInfoSoftDeleteInputWhereDto,
UserCorporateInfoSoftDeleteInputDto,
UserCorporateInfoSoftDeleteOutputDto,

// delete (4)
UserCorporateInfoDeleteDto,
UserCorporateInfoDeleteInputWhereDto,
UserCorporateInfoDeleteInputDto,
UserCorporateInfoDeleteOutputDto,

// restore (4)
UserCorporateInfoRestoreDto,
UserCorporateInfoRestoreInputWhereDto,
UserCorporateInfoRestoreInputDto,
UserCorporateInfoRestoreOutputDto
>;

// ████████ UpsertCrudEngine ████████████████████████████████████████
public declare readonly upsertEngine: UpsertCrudEngine<
// entity (1)
UserCorporateInfoEntity,

// upsert (3)
UserCorporateInfoUpsertDto,
UserCorporateInfoUpsertInputDto,
UserCorporateInfoUpsertOutputDto
>;

// ████████ RemoveCrudEngine ████████████████████████████████████████
public declare readonly removeEngine: RemoveCrudEngine<
// entity (1)
UserCorporateInfoEntity,

// soft_remove (5)
UserCorporateInfoSoftRemoveDto,
UserCorporateInfoSoftRemoveInputWhereDto,
UserCorporateInfoSoftRemoveInputDto,
UserCorporateInfoSoftRemoveOutputAffectedRowsDto,
UserCorporateInfoSoftRemoveOutputDto,

// remove (4)
UserCorporateInfoRemoveDto,
UserCorporateInfoRemoveInputWhereDto,
UserCorporateInfoRemoveInputDto,
UserCorporateInfoRemoveOutputAffectedRowsDto,
UserCorporateInfoRemoveOutputDto,

// recover (5)
UserCorporateInfoRecoverDto,
UserCorporateInfoRecoverInputWhereDto,
UserCorporateInfoRecoverInputDto,
UserCorporateInfoRecoverOutputAffectedRowsDto,
UserCorporateInfoRecoverOutputDto
>;

// ████████ UploadCrudEngine ████████████████████████████████████████
public declare readonly uploadEngine: UploadCrudEngine<
// entity (1)
UserCorporateInfoEntity,

// upload (3)
UserCorporateInfoUploadDto,
UserCorporateInfoUploadInputDto,
UserCorporateInfoUploadOutputDto,

// upload_delete (3)
UserCorporateInfoUploadDeleteDto,
UserCorporateInfoUploadDeleteInputDto,
UserCorporateInfoUploadDeleteOutputDto
>;

constructor(
// data source
protected readonly dataSource: DataSource,

@InjectRepository(UserCorporateInfoEntity)
protected readonly repository: Repository<UserCorporateInfoEntity>,

// dependecy services
protected readonly confService: ConfService,
protected readonly logService: LogService,
protected readonly validationPipe: DataValidationPipe,
protected readonly libraryAppService: LibraryAppService,
protected readonly selfGraphqlMicroserviceService: SelfGraphqlMicroserviceService,
protected readonly imageProcessingService: ImageProcessingService,
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
    UserCorporateInfoEntity,
);

this.logService.setContext(UserCorporateInfoFactory.name);

// set image processing service object to factory
this.imageProcessingService = imageProcessingService;

// ████████ initialize FindCrudEngine ██████████████████████████████████████
this.initFindEngine
<
// find (8)
UserCorporateInfoFindDto,
UserCorporateInfoFindInputWhereDto,
UserCorporateInfoFindInputSortOrderDto,
UserCorporateInfoFindInputGroupByDto,
UserCorporateInfoFindInputDto,
UserCorporateInfoFindOutputRowsDto,
FindOutputPaginationDto,
UserCorporateInfoFindOutputDto,

// find_one_by_id (2)
UserCorporateInfoFindOneByIdDto,
UserCorporateInfoFindOneByIdInputDto
>
(
// find (8)
UserCorporateInfoFindDto,
UserCorporateInfoFindInputWhereDto,
UserCorporateInfoFindInputSortOrderDto,
UserCorporateInfoFindInputGroupByDto,
UserCorporateInfoFindInputDto,
UserCorporateInfoFindOutputRowsDto,
FindOutputPaginationDto,
UserCorporateInfoFindOutputDto,

// find_one_by_id (2)
UserCorporateInfoFindOneByIdDto,
UserCorporateInfoFindOneByIdInputDto
);


// ████████ initialize CreateCrudEngine ███████████████████████████████████████
this.initCreateEngine
<
// create (3)
UserCorporateInfoCreateDto,
UserCorporateInfoCreateInputDto,
UserCorporateInfoCreateOutputDto
>
(
// create (3)
UserCorporateInfoCreateDto,
UserCorporateInfoCreateInputDto,
UserCorporateInfoCreateOutputDto
);

// ████████ initialize UpdateCrudEngine ████████████████████████████████████████
this.initUpdateEngine
<
// update (6)
UserCorporateInfoUpdateDto,
UserCorporateInfoUpdateInputWhereDto,
UserCorporateInfoUpdateInputSetsDto,
UserCorporateInfoUpdateInputDto,
UserCorporateInfoUpdateOutputAffectedRowsDto,
UserCorporateInfoUpdateOutputDto
>
(
// update (6)
UserCorporateInfoUpdateDto,
UserCorporateInfoUpdateInputWhereDto,
UserCorporateInfoUpdateInputSetsDto,
UserCorporateInfoUpdateInputDto,
UserCorporateInfoUpdateOutputAffectedRowsDto,
UserCorporateInfoUpdateOutputDto
);


// ████████ initialize DeleteCrudEngine ███████████████████████████████████████████
this.initDeleteEngine
<
// soft_delete (4)
UserCorporateInfoSoftDeleteDto,
UserCorporateInfoSoftDeleteInputWhereDto,
UserCorporateInfoSoftDeleteInputDto,
UserCorporateInfoSoftDeleteOutputDto,

// delete (4)
UserCorporateInfoDeleteDto,
UserCorporateInfoDeleteInputWhereDto,
UserCorporateInfoDeleteInputDto,
UserCorporateInfoDeleteOutputDto,

// restore (4)
UserCorporateInfoRestoreDto,
UserCorporateInfoRestoreInputWhereDto,
UserCorporateInfoRestoreInputDto,
UserCorporateInfoRestoreOutputDto
>
(
// soft_delete (4)
UserCorporateInfoSoftDeleteDto,
UserCorporateInfoSoftDeleteInputWhereDto,
UserCorporateInfoSoftDeleteInputDto,
UserCorporateInfoSoftDeleteOutputDto,

// delete (4)
UserCorporateInfoDeleteDto,
UserCorporateInfoDeleteInputWhereDto,
UserCorporateInfoDeleteInputDto,
UserCorporateInfoDeleteOutputDto,

// restore (4)
UserCorporateInfoRestoreDto,
UserCorporateInfoRestoreInputWhereDto,
UserCorporateInfoRestoreInputDto,
UserCorporateInfoRestoreOutputDto
);



// ████████ initialize UpsertCrudEngine ███████████████████████████████████████████
this.initUpsertEngine
<
// upsert (3)
UserCorporateInfoUpsertDto,
UserCorporateInfoUpsertInputDto,
UserCorporateInfoUpsertOutputDto
>
(
// upsert (3)
UserCorporateInfoUpsertDto,
UserCorporateInfoUpsertInputDto,
UserCorporateInfoUpsertOutputDto
);




// ████████ initialize RemoveCrudEngine ███████████████████████████████████████████
this.initRemoveEngine
<
// soft_remove (5)
UserCorporateInfoSoftRemoveDto,
UserCorporateInfoSoftRemoveInputWhereDto,
UserCorporateInfoSoftRemoveInputDto,
UserCorporateInfoSoftRemoveOutputAffectedRowsDto,
UserCorporateInfoSoftRemoveOutputDto,

// remove (4)
UserCorporateInfoRemoveDto,
UserCorporateInfoRemoveInputWhereDto,
UserCorporateInfoRemoveInputDto,
UserCorporateInfoRemoveOutputAffectedRowsDto,
UserCorporateInfoRemoveOutputDto,

// recover (5)
UserCorporateInfoRecoverDto,
UserCorporateInfoRecoverInputWhereDto,
UserCorporateInfoRecoverInputDto,
UserCorporateInfoRecoverOutputAffectedRowsDto,
UserCorporateInfoRecoverOutputDto
>
(
// soft_remove (5)
UserCorporateInfoSoftRemoveDto,
UserCorporateInfoSoftRemoveInputWhereDto,
UserCorporateInfoSoftRemoveInputDto,
UserCorporateInfoSoftRemoveOutputAffectedRowsDto,
UserCorporateInfoSoftRemoveOutputDto,

// remove (4)
UserCorporateInfoRemoveDto,
UserCorporateInfoRemoveInputWhereDto,
UserCorporateInfoRemoveInputDto,
UserCorporateInfoRemoveOutputAffectedRowsDto,
UserCorporateInfoRemoveOutputDto,

// recover (5)
UserCorporateInfoRecoverDto,
UserCorporateInfoRecoverInputWhereDto,
UserCorporateInfoRecoverInputDto,
UserCorporateInfoRecoverOutputAffectedRowsDto,
UserCorporateInfoRecoverOutputDto
);



// ████████ initialize UploadCrudEngine ███████████████████████████████████████████
this.initUploadEngine
<
// upload (3)
UserCorporateInfoUploadDto,
UserCorporateInfoUploadInputDto,
UserCorporateInfoUploadOutputDto,

// upload_delete (3)
UserCorporateInfoUploadDeleteDto,
UserCorporateInfoUploadDeleteInputDto,
UserCorporateInfoUploadDeleteOutputDto
>
(
// upload (3)
UserCorporateInfoUploadDto,
UserCorporateInfoUploadInputDto,
UserCorporateInfoUploadOutputDto,

// upload_delete (3)
UserCorporateInfoUploadDeleteDto,
UserCorporateInfoUploadDeleteInputDto,
UserCorporateInfoUploadDeleteOutputDto
);


// ████████ initialize ImportExportCrudEngine █████████████████████████████████████

}

}