import { ThirdPartyPlatformEntity } from "./entities/third.party.platform.entity";
import { Injectable } from "@nestjs/common";
import { DataSource, Repository } from "typeorm";
import { InjectRepository } from "@nestjs/typeorm";
import { ConfService, CreateCrudEngine, CrudFactory, DataValidationPipe, DeleteCrudEngine, FindCrudEngine, FindOutputPaginationDto, LibraryAppService, LogService, RemoveCrudEngine, UpdateCrudEngine, UploadCrudEngine, UpsertCrudEngine } from "@libs/library-app";
import { ThirdPartyPlatformCreateDto, ThirdPartyPlatformCreateInputDto, ThirdPartyPlatformCreateOutputDto, ThirdPartyPlatformDeleteDto, ThirdPartyPlatformDeleteInputDto, ThirdPartyPlatformDeleteInputWhereDto, ThirdPartyPlatformDeleteOutputDto, ThirdPartyPlatformFindDto, ThirdPartyPlatformFindInputDto, ThirdPartyPlatformFindInputGroupByDto, ThirdPartyPlatformFindInputSortOrderDto, ThirdPartyPlatformFindInputWhereDto, ThirdPartyPlatformFindOneByIdDto, ThirdPartyPlatformFindOneByIdInputDto, ThirdPartyPlatformFindOutputDto, ThirdPartyPlatformFindOutputRowsDto, ThirdPartyPlatformRecoverDto, ThirdPartyPlatformRecoverInputDto, ThirdPartyPlatformRecoverInputWhereDto, ThirdPartyPlatformRecoverOutputDto, ThirdPartyPlatformRecoverOutputAffectedRowsDto, ThirdPartyPlatformRemoveDto, ThirdPartyPlatformRemoveInputDto, ThirdPartyPlatformRemoveInputWhereDto, ThirdPartyPlatformRemoveOutputDto, ThirdPartyPlatformRemoveOutputAffectedRowsDto, ThirdPartyPlatformRestoreDto, ThirdPartyPlatformRestoreInputDto, ThirdPartyPlatformRestoreInputWhereDto, ThirdPartyPlatformRestoreOutputDto, ThirdPartyPlatformSoftDeleteDto, ThirdPartyPlatformSoftDeleteInputDto, ThirdPartyPlatformSoftDeleteInputWhereDto, ThirdPartyPlatformSoftDeleteOutputDto, ThirdPartyPlatformSoftRemoveDto, ThirdPartyPlatformSoftRemoveInputDto, ThirdPartyPlatformSoftRemoveInputWhereDto, ThirdPartyPlatformSoftRemoveOutputDto, ThirdPartyPlatformSoftRemoveOutputAffectedRowsDto, ThirdPartyPlatformUpdateDto, ThirdPartyPlatformUpdateInputDto, ThirdPartyPlatformUpdateInputSetsDto, ThirdPartyPlatformUpdateInputWhereDto, ThirdPartyPlatformUpdateOutputDto, ThirdPartyPlatformUpdateOutputAffectedRowsDto, ThirdPartyPlatformUploadDeleteDto, ThirdPartyPlatformUploadDeleteInputDto, ThirdPartyPlatformUploadDeleteOutputDto, ThirdPartyPlatformUploadDto, ThirdPartyPlatformUploadInputDto, ThirdPartyPlatformUploadOutputDto, ThirdPartyPlatformUpsertDto, ThirdPartyPlatformUpsertInputDto, ThirdPartyPlatformUpsertOutputDto } from "./dto/third.party.platform.dto";
import { SelfGraphqlMicroserviceService } from "@libs/dynamic-app";

@Injectable()
export class ThirdPartyPlatformFactory extends CrudFactory<ThirdPartyPlatformEntity> {

// ████████ FindCrudEngine ████████████████████████████████████████
public declare readonly findEngine: FindCrudEngine<
// entity (1)
ThirdPartyPlatformEntity,

// find (8)
ThirdPartyPlatformFindDto,
ThirdPartyPlatformFindInputWhereDto,
ThirdPartyPlatformFindInputSortOrderDto,
ThirdPartyPlatformFindInputGroupByDto,
ThirdPartyPlatformFindInputDto,
ThirdPartyPlatformFindOutputRowsDto,
FindOutputPaginationDto,
ThirdPartyPlatformFindOutputDto,

// find_one_by_id (2)
ThirdPartyPlatformFindOneByIdDto,
ThirdPartyPlatformFindOneByIdInputDto
>;

// ████████ CreateCrudEngine ████████████████████████████████████████
public declare readonly createEngine: CreateCrudEngine<
// entity (1)
ThirdPartyPlatformEntity,

// create (3)
ThirdPartyPlatformCreateDto,
ThirdPartyPlatformCreateInputDto,
ThirdPartyPlatformCreateOutputDto
>;

// ████████ UpdateCrudEngine ████████████████████████████████████████
public declare readonly updateEngine: UpdateCrudEngine<
// entity (1)
ThirdPartyPlatformEntity,

// update (6)
ThirdPartyPlatformUpdateDto,
ThirdPartyPlatformUpdateInputWhereDto,
ThirdPartyPlatformUpdateInputSetsDto,
ThirdPartyPlatformUpdateInputDto,
ThirdPartyPlatformUpdateOutputAffectedRowsDto,
ThirdPartyPlatformUpdateOutputDto
>;

// ████████ DeleteCrudEngine ████████████████████████████████████████
public declare readonly deleteEngine: DeleteCrudEngine<
// entity (1)
ThirdPartyPlatformEntity,

// soft_delete (4)
ThirdPartyPlatformSoftDeleteDto,
ThirdPartyPlatformSoftDeleteInputWhereDto,
ThirdPartyPlatformSoftDeleteInputDto,
ThirdPartyPlatformSoftDeleteOutputDto,

// delete (4)
ThirdPartyPlatformDeleteDto,
ThirdPartyPlatformDeleteInputWhereDto,
ThirdPartyPlatformDeleteInputDto,
ThirdPartyPlatformDeleteOutputDto,

// restore (4)
ThirdPartyPlatformRestoreDto,
ThirdPartyPlatformRestoreInputWhereDto,
ThirdPartyPlatformRestoreInputDto,
ThirdPartyPlatformRestoreOutputDto
>;

// ████████ UpsertCrudEngine ████████████████████████████████████████
public declare readonly upsertEngine: UpsertCrudEngine<
// entity (1)
ThirdPartyPlatformEntity,

// upsert (3)
ThirdPartyPlatformUpsertDto,
ThirdPartyPlatformUpsertInputDto,
ThirdPartyPlatformUpsertOutputDto
>;

// ████████ RemoveCrudEngine ████████████████████████████████████████
public declare readonly removeEngine: RemoveCrudEngine<
// entity (1)
ThirdPartyPlatformEntity,

// soft_remove (5)
ThirdPartyPlatformSoftRemoveDto,
ThirdPartyPlatformSoftRemoveInputWhereDto,
ThirdPartyPlatformSoftRemoveInputDto,
ThirdPartyPlatformSoftRemoveOutputAffectedRowsDto,
ThirdPartyPlatformSoftRemoveOutputDto,

// remove (4)
ThirdPartyPlatformRemoveDto,
ThirdPartyPlatformRemoveInputWhereDto,
ThirdPartyPlatformRemoveInputDto,
ThirdPartyPlatformRemoveOutputAffectedRowsDto,
ThirdPartyPlatformRemoveOutputDto,

// recover (5)
ThirdPartyPlatformRecoverDto,
ThirdPartyPlatformRecoverInputWhereDto,
ThirdPartyPlatformRecoverInputDto,
ThirdPartyPlatformRecoverOutputAffectedRowsDto,
ThirdPartyPlatformRecoverOutputDto
>;

// ████████ UploadCrudEngine ████████████████████████████████████████
public declare readonly uploadEngine: UploadCrudEngine<
// entity (1)
ThirdPartyPlatformEntity,

// upload (3)
ThirdPartyPlatformUploadDto,
ThirdPartyPlatformUploadInputDto,
ThirdPartyPlatformUploadOutputDto,

// upload_delete (3)
ThirdPartyPlatformUploadDeleteDto,
ThirdPartyPlatformUploadDeleteInputDto,
ThirdPartyPlatformUploadDeleteOutputDto
>;

constructor(
// data source
protected readonly dataSource: DataSource,

@InjectRepository(ThirdPartyPlatformEntity)
protected readonly repository: Repository<ThirdPartyPlatformEntity>,

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
    ThirdPartyPlatformEntity,
);

this.logService.setContext(ThirdPartyPlatformFactory.name);

// ████████ initialize FindCrudEngine ██████████████████████████████████████
this.initFindEngine
<
// find (8)
ThirdPartyPlatformFindDto,
ThirdPartyPlatformFindInputWhereDto,
ThirdPartyPlatformFindInputSortOrderDto,
ThirdPartyPlatformFindInputGroupByDto,
ThirdPartyPlatformFindInputDto,
ThirdPartyPlatformFindOutputRowsDto,
FindOutputPaginationDto,
ThirdPartyPlatformFindOutputDto,

// find_one_by_id (2)
ThirdPartyPlatformFindOneByIdDto,
ThirdPartyPlatformFindOneByIdInputDto
>
(
// find (8)
ThirdPartyPlatformFindDto,
ThirdPartyPlatformFindInputWhereDto,
ThirdPartyPlatformFindInputSortOrderDto,
ThirdPartyPlatformFindInputGroupByDto,
ThirdPartyPlatformFindInputDto,
ThirdPartyPlatformFindOutputRowsDto,
FindOutputPaginationDto,
ThirdPartyPlatformFindOutputDto,

// find_one_by_id (2)
ThirdPartyPlatformFindOneByIdDto,
ThirdPartyPlatformFindOneByIdInputDto
);


// ████████ initialize CreateCrudEngine ███████████████████████████████████████
this.initCreateEngine
<
// create (3)
ThirdPartyPlatformCreateDto,
ThirdPartyPlatformCreateInputDto,
ThirdPartyPlatformCreateOutputDto
>
(
// create (3)
ThirdPartyPlatformCreateDto,
ThirdPartyPlatformCreateInputDto,
ThirdPartyPlatformCreateOutputDto
);

// ████████ initialize UpdateCrudEngine ████████████████████████████████████████
this.initUpdateEngine
<
// update (6)
ThirdPartyPlatformUpdateDto,
ThirdPartyPlatformUpdateInputWhereDto,
ThirdPartyPlatformUpdateInputSetsDto,
ThirdPartyPlatformUpdateInputDto,
ThirdPartyPlatformUpdateOutputAffectedRowsDto,
ThirdPartyPlatformUpdateOutputDto
>
(
// update (6)
ThirdPartyPlatformUpdateDto,
ThirdPartyPlatformUpdateInputWhereDto,
ThirdPartyPlatformUpdateInputSetsDto,
ThirdPartyPlatformUpdateInputDto,
ThirdPartyPlatformUpdateOutputAffectedRowsDto,
ThirdPartyPlatformUpdateOutputDto
);


// ████████ initialize DeleteCrudEngine ███████████████████████████████████████████
this.initDeleteEngine
<
// soft_delete (4)
ThirdPartyPlatformSoftDeleteDto,
ThirdPartyPlatformSoftDeleteInputWhereDto,
ThirdPartyPlatformSoftDeleteInputDto,
ThirdPartyPlatformSoftDeleteOutputDto,

// delete (4)
ThirdPartyPlatformDeleteDto,
ThirdPartyPlatformDeleteInputWhereDto,
ThirdPartyPlatformDeleteInputDto,
ThirdPartyPlatformDeleteOutputDto,

// restore (4)
ThirdPartyPlatformRestoreDto,
ThirdPartyPlatformRestoreInputWhereDto,
ThirdPartyPlatformRestoreInputDto,
ThirdPartyPlatformRestoreOutputDto
>
(
// soft_delete (4)
ThirdPartyPlatformSoftDeleteDto,
ThirdPartyPlatformSoftDeleteInputWhereDto,
ThirdPartyPlatformSoftDeleteInputDto,
ThirdPartyPlatformSoftDeleteOutputDto,

// delete (4)
ThirdPartyPlatformDeleteDto,
ThirdPartyPlatformDeleteInputWhereDto,
ThirdPartyPlatformDeleteInputDto,
ThirdPartyPlatformDeleteOutputDto,

// restore (4)
ThirdPartyPlatformRestoreDto,
ThirdPartyPlatformRestoreInputWhereDto,
ThirdPartyPlatformRestoreInputDto,
ThirdPartyPlatformRestoreOutputDto
);



// ████████ initialize UpsertCrudEngine ███████████████████████████████████████████
this.initUpsertEngine
<
// upsert (3)
ThirdPartyPlatformUpsertDto,
ThirdPartyPlatformUpsertInputDto,
ThirdPartyPlatformUpsertOutputDto
>
(
// upsert (3)
ThirdPartyPlatformUpsertDto,
ThirdPartyPlatformUpsertInputDto,
ThirdPartyPlatformUpsertOutputDto
);




// ████████ initialize RemoveCrudEngine ███████████████████████████████████████████
this.initRemoveEngine
<
// soft_remove (5)
ThirdPartyPlatformSoftRemoveDto,
ThirdPartyPlatformSoftRemoveInputWhereDto,
ThirdPartyPlatformSoftRemoveInputDto,
ThirdPartyPlatformSoftRemoveOutputAffectedRowsDto,
ThirdPartyPlatformSoftRemoveOutputDto,

// remove (4)
ThirdPartyPlatformRemoveDto,
ThirdPartyPlatformRemoveInputWhereDto,
ThirdPartyPlatformRemoveInputDto,
ThirdPartyPlatformRemoveOutputAffectedRowsDto,
ThirdPartyPlatformRemoveOutputDto,

// recover (5)
ThirdPartyPlatformRecoverDto,
ThirdPartyPlatformRecoverInputWhereDto,
ThirdPartyPlatformRecoverInputDto,
ThirdPartyPlatformRecoverOutputAffectedRowsDto,
ThirdPartyPlatformRecoverOutputDto
>
(
// soft_remove (5)
ThirdPartyPlatformSoftRemoveDto,
ThirdPartyPlatformSoftRemoveInputWhereDto,
ThirdPartyPlatformSoftRemoveInputDto,
ThirdPartyPlatformSoftRemoveOutputAffectedRowsDto,
ThirdPartyPlatformSoftRemoveOutputDto,

// remove (4)
ThirdPartyPlatformRemoveDto,
ThirdPartyPlatformRemoveInputWhereDto,
ThirdPartyPlatformRemoveInputDto,
ThirdPartyPlatformRemoveOutputAffectedRowsDto,
ThirdPartyPlatformRemoveOutputDto,

// recover (5)
ThirdPartyPlatformRecoverDto,
ThirdPartyPlatformRecoverInputWhereDto,
ThirdPartyPlatformRecoverInputDto,
ThirdPartyPlatformRecoverOutputAffectedRowsDto,
ThirdPartyPlatformRecoverOutputDto
);



// ████████ initialize UploadCrudEngine ███████████████████████████████████████████
this.initUploadEngine
<
// upload (3)
ThirdPartyPlatformUploadDto,
ThirdPartyPlatformUploadInputDto,
ThirdPartyPlatformUploadOutputDto,

// upload_delete (3)
ThirdPartyPlatformUploadDeleteDto,
ThirdPartyPlatformUploadDeleteInputDto,
ThirdPartyPlatformUploadDeleteOutputDto
>
(
// upload (3)
ThirdPartyPlatformUploadDto,
ThirdPartyPlatformUploadInputDto,
ThirdPartyPlatformUploadOutputDto,

// upload_delete (3)
ThirdPartyPlatformUploadDeleteDto,
ThirdPartyPlatformUploadDeleteInputDto,
ThirdPartyPlatformUploadDeleteOutputDto
);


// ████████ initialize ImportExportCrudEngine █████████████████████████████████████

}

}