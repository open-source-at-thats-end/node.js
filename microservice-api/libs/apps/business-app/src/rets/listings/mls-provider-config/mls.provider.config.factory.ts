import { RetsMlsProviderConfigEntity } from "./entities/mls.provider.config.entity";
import { Injectable } from "@nestjs/common";
import { DataSource, Repository } from "typeorm";
import { InjectRepository } from "@nestjs/typeorm";
import { ConfService, CreateCrudEngine, CrudFactory, DataValidationPipe, DeleteCrudEngine, FindCrudEngine, FindOutputPaginationDto, LibraryAppService, LogService, RemoveCrudEngine, UpdateCrudEngine, UploadCrudEngine, UpsertCrudEngine  } from "@libs/library-app";
import { RetsMlsProviderConfigCreateDto, RetsMlsProviderConfigCreateInputDto, RetsMlsProviderConfigCreateOutputDto, RetsMlsProviderConfigDeleteDto, RetsMlsProviderConfigDeleteInputDto, RetsMlsProviderConfigDeleteInputWhereDto, RetsMlsProviderConfigDeleteOutputDto, RetsMlsProviderConfigFindDto, RetsMlsProviderConfigFindInputDto, RetsMlsProviderConfigFindInputGroupByDto, RetsMlsProviderConfigFindInputSortOrderDto, RetsMlsProviderConfigFindInputWhereDto, RetsMlsProviderConfigFindOneByIdDto, RetsMlsProviderConfigFindOneByIdInputDto, RetsMlsProviderConfigFindOutputDto, RetsMlsProviderConfigFindOutputRowsDto, RetsMlsProviderConfigRecoverDto, RetsMlsProviderConfigRecoverInputDto, RetsMlsProviderConfigRecoverInputWhereDto, RetsMlsProviderConfigRecoverOutputDto, RetsMlsProviderConfigRecoverOutputAffectedRowsDto, RetsMlsProviderConfigRemoveDto, RetsMlsProviderConfigRemoveInputDto, RetsMlsProviderConfigRemoveInputWhereDto, RetsMlsProviderConfigRemoveOutputDto, RetsMlsProviderConfigRemoveOutputAffectedRowsDto, RetsMlsProviderConfigRestoreDto, RetsMlsProviderConfigRestoreInputDto, RetsMlsProviderConfigRestoreInputWhereDto, RetsMlsProviderConfigRestoreOutputDto, RetsMlsProviderConfigSoftDeleteDto, RetsMlsProviderConfigSoftDeleteInputDto, RetsMlsProviderConfigSoftDeleteInputWhereDto, RetsMlsProviderConfigSoftDeleteOutputDto, RetsMlsProviderConfigSoftRemoveDto, RetsMlsProviderConfigSoftRemoveInputDto, RetsMlsProviderConfigSoftRemoveInputWhereDto, RetsMlsProviderConfigSoftRemoveOutputDto, RetsMlsProviderConfigSoftRemoveOutputAffectedRowsDto, RetsMlsProviderConfigUpdateDto, RetsMlsProviderConfigUpdateInputDto, RetsMlsProviderConfigUpdateInputSetsDto, RetsMlsProviderConfigUpdateInputWhereDto, RetsMlsProviderConfigUpdateOutputDto, RetsMlsProviderConfigUpdateOutputAffectedRowsDto, RetsMlsProviderConfigUploadDeleteDto, RetsMlsProviderConfigUploadDeleteInputDto, RetsMlsProviderConfigUploadDeleteOutputDto, RetsMlsProviderConfigUploadDto, RetsMlsProviderConfigUploadInputDto, RetsMlsProviderConfigUploadOutputDto, RetsMlsProviderConfigUpsertDto, RetsMlsProviderConfigUpsertInputDto, RetsMlsProviderConfigUpsertOutputDto } from "./dto/mls.provider.config.dto";
import { SelfGraphqlMicroserviceService } from "@libs/dynamic-app";

@Injectable()
export class RetsMlsProviderConfigFactory extends CrudFactory<RetsMlsProviderConfigEntity> {

// ████████ FindCrudEngine ████████████████████████████████████████
public declare readonly findEngine: FindCrudEngine<
// entity (1)
RetsMlsProviderConfigEntity,

// find (8)
RetsMlsProviderConfigFindDto,
RetsMlsProviderConfigFindInputWhereDto,
RetsMlsProviderConfigFindInputSortOrderDto,
RetsMlsProviderConfigFindInputGroupByDto,
RetsMlsProviderConfigFindInputDto,
RetsMlsProviderConfigFindOutputRowsDto,
FindOutputPaginationDto,
RetsMlsProviderConfigFindOutputDto,

// find_one_by_id (2)
RetsMlsProviderConfigFindOneByIdDto,
RetsMlsProviderConfigFindOneByIdInputDto
>;

// ████████ CreateCrudEngine ████████████████████████████████████████
public declare readonly createEngine: CreateCrudEngine<
// entity (1)
RetsMlsProviderConfigEntity,

// create (3)
RetsMlsProviderConfigCreateDto,
RetsMlsProviderConfigCreateInputDto,
RetsMlsProviderConfigCreateOutputDto
>;

// ████████ UpdateCrudEngine ████████████████████████████████████████
public declare readonly updateEngine: UpdateCrudEngine<
// entity (1)
RetsMlsProviderConfigEntity,

// update (6)
RetsMlsProviderConfigUpdateDto,
RetsMlsProviderConfigUpdateInputWhereDto,
RetsMlsProviderConfigUpdateInputSetsDto,
RetsMlsProviderConfigUpdateInputDto,
RetsMlsProviderConfigUpdateOutputAffectedRowsDto,
RetsMlsProviderConfigUpdateOutputDto
>;

// ████████ DeleteCrudEngine ████████████████████████████████████████
public declare readonly deleteEngine: DeleteCrudEngine<
// entity (1)
RetsMlsProviderConfigEntity,

// soft_delete (4)
RetsMlsProviderConfigSoftDeleteDto,
RetsMlsProviderConfigSoftDeleteInputWhereDto,
RetsMlsProviderConfigSoftDeleteInputDto,
RetsMlsProviderConfigSoftDeleteOutputDto,

// delete (4)
RetsMlsProviderConfigDeleteDto,
RetsMlsProviderConfigDeleteInputWhereDto,
RetsMlsProviderConfigDeleteInputDto,
RetsMlsProviderConfigDeleteOutputDto,

// restore (4)
RetsMlsProviderConfigRestoreDto,
RetsMlsProviderConfigRestoreInputWhereDto,
RetsMlsProviderConfigRestoreInputDto,
RetsMlsProviderConfigRestoreOutputDto
>;

// ████████ UpsertCrudEngine ████████████████████████████████████████
public declare readonly upsertEngine: UpsertCrudEngine<
// entity (1)
RetsMlsProviderConfigEntity,

// upsert (3)
RetsMlsProviderConfigUpsertDto,
RetsMlsProviderConfigUpsertInputDto,
RetsMlsProviderConfigUpsertOutputDto
>;

// ████████ RemoveCrudEngine ████████████████████████████████████████
public declare readonly removeEngine: RemoveCrudEngine<
// entity (1)
RetsMlsProviderConfigEntity,

// soft_remove (5)
RetsMlsProviderConfigSoftRemoveDto,
RetsMlsProviderConfigSoftRemoveInputWhereDto,
RetsMlsProviderConfigSoftRemoveInputDto,
RetsMlsProviderConfigSoftRemoveOutputAffectedRowsDto,
RetsMlsProviderConfigSoftRemoveOutputDto,

// remove (4)
RetsMlsProviderConfigRemoveDto,
RetsMlsProviderConfigRemoveInputWhereDto,
RetsMlsProviderConfigRemoveInputDto,
RetsMlsProviderConfigRemoveOutputAffectedRowsDto,
RetsMlsProviderConfigRemoveOutputDto,

// recover (5)
RetsMlsProviderConfigRecoverDto,
RetsMlsProviderConfigRecoverInputWhereDto,
RetsMlsProviderConfigRecoverInputDto,
RetsMlsProviderConfigRecoverOutputAffectedRowsDto,
RetsMlsProviderConfigRecoverOutputDto
>;

// ████████ UploadCrudEngine ████████████████████████████████████████
public declare readonly uploadEngine: UploadCrudEngine<
// entity (1)
RetsMlsProviderConfigEntity,

// upload (3)
RetsMlsProviderConfigUploadDto,
RetsMlsProviderConfigUploadInputDto,
RetsMlsProviderConfigUploadOutputDto,

// upload_delete (3)
RetsMlsProviderConfigUploadDeleteDto,
RetsMlsProviderConfigUploadDeleteInputDto,
RetsMlsProviderConfigUploadDeleteOutputDto
>;

constructor(
// data source
protected readonly dataSource: DataSource,

@InjectRepository(RetsMlsProviderConfigEntity)
protected readonly repository: Repository<RetsMlsProviderConfigEntity>,

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
    RetsMlsProviderConfigEntity,
);

this.logService.setContext(RetsMlsProviderConfigFactory.name);

// ████████ initialize FindCrudEngine ██████████████████████████████████████
this.initFindEngine
<
// find (8)
RetsMlsProviderConfigFindDto,
RetsMlsProviderConfigFindInputWhereDto,
RetsMlsProviderConfigFindInputSortOrderDto,
RetsMlsProviderConfigFindInputGroupByDto,
RetsMlsProviderConfigFindInputDto,
RetsMlsProviderConfigFindOutputRowsDto,
FindOutputPaginationDto,
RetsMlsProviderConfigFindOutputDto,

// find_one_by_id (2)
RetsMlsProviderConfigFindOneByIdDto,
RetsMlsProviderConfigFindOneByIdInputDto
>
(
// find (8)
RetsMlsProviderConfigFindDto,
RetsMlsProviderConfigFindInputWhereDto,
RetsMlsProviderConfigFindInputSortOrderDto,
RetsMlsProviderConfigFindInputGroupByDto,
RetsMlsProviderConfigFindInputDto,
RetsMlsProviderConfigFindOutputRowsDto,
FindOutputPaginationDto,
RetsMlsProviderConfigFindOutputDto,

// find_one_by_id (2)
RetsMlsProviderConfigFindOneByIdDto,
RetsMlsProviderConfigFindOneByIdInputDto
);


// ████████ initialize CreateCrudEngine ███████████████████████████████████████
this.initCreateEngine
<
// create (3)
RetsMlsProviderConfigCreateDto,
RetsMlsProviderConfigCreateInputDto,
RetsMlsProviderConfigCreateOutputDto
>
(
// create (3)
RetsMlsProviderConfigCreateDto,
RetsMlsProviderConfigCreateInputDto,
RetsMlsProviderConfigCreateOutputDto
);

// ████████ initialize UpdateCrudEngine ████████████████████████████████████████
this.initUpdateEngine
<
// update (6)
RetsMlsProviderConfigUpdateDto,
RetsMlsProviderConfigUpdateInputWhereDto,
RetsMlsProviderConfigUpdateInputSetsDto,
RetsMlsProviderConfigUpdateInputDto,
RetsMlsProviderConfigUpdateOutputAffectedRowsDto,
RetsMlsProviderConfigUpdateOutputDto
>
(
// update (6)
RetsMlsProviderConfigUpdateDto,
RetsMlsProviderConfigUpdateInputWhereDto,
RetsMlsProviderConfigUpdateInputSetsDto,
RetsMlsProviderConfigUpdateInputDto,
RetsMlsProviderConfigUpdateOutputAffectedRowsDto,
RetsMlsProviderConfigUpdateOutputDto
);


// ████████ initialize DeleteCrudEngine ███████████████████████████████████████████
this.initDeleteEngine
<
// soft_delete (4)
RetsMlsProviderConfigSoftDeleteDto,
RetsMlsProviderConfigSoftDeleteInputWhereDto,
RetsMlsProviderConfigSoftDeleteInputDto,
RetsMlsProviderConfigSoftDeleteOutputDto,

// delete (4)
RetsMlsProviderConfigDeleteDto,
RetsMlsProviderConfigDeleteInputWhereDto,
RetsMlsProviderConfigDeleteInputDto,
RetsMlsProviderConfigDeleteOutputDto,

// restore (4)
RetsMlsProviderConfigRestoreDto,
RetsMlsProviderConfigRestoreInputWhereDto,
RetsMlsProviderConfigRestoreInputDto,
RetsMlsProviderConfigRestoreOutputDto
>
(
// soft_delete (4)
RetsMlsProviderConfigSoftDeleteDto,
RetsMlsProviderConfigSoftDeleteInputWhereDto,
RetsMlsProviderConfigSoftDeleteInputDto,
RetsMlsProviderConfigSoftDeleteOutputDto,

// delete (4)
RetsMlsProviderConfigDeleteDto,
RetsMlsProviderConfigDeleteInputWhereDto,
RetsMlsProviderConfigDeleteInputDto,
RetsMlsProviderConfigDeleteOutputDto,

// restore (4)
RetsMlsProviderConfigRestoreDto,
RetsMlsProviderConfigRestoreInputWhereDto,
RetsMlsProviderConfigRestoreInputDto,
RetsMlsProviderConfigRestoreOutputDto
);



// ████████ initialize UpsertCrudEngine ███████████████████████████████████████████
this.initUpsertEngine
<
// upsert (3)
RetsMlsProviderConfigUpsertDto,
RetsMlsProviderConfigUpsertInputDto,
RetsMlsProviderConfigUpsertOutputDto
>
(
// upsert (3)
RetsMlsProviderConfigUpsertDto,
RetsMlsProviderConfigUpsertInputDto,
RetsMlsProviderConfigUpsertOutputDto
);




// ████████ initialize RemoveCrudEngine ███████████████████████████████████████████
this.initRemoveEngine
<
// soft_remove (5)
RetsMlsProviderConfigSoftRemoveDto,
RetsMlsProviderConfigSoftRemoveInputWhereDto,
RetsMlsProviderConfigSoftRemoveInputDto,
RetsMlsProviderConfigSoftRemoveOutputAffectedRowsDto,
RetsMlsProviderConfigSoftRemoveOutputDto,

// remove (4)
RetsMlsProviderConfigRemoveDto,
RetsMlsProviderConfigRemoveInputWhereDto,
RetsMlsProviderConfigRemoveInputDto,
RetsMlsProviderConfigRemoveOutputAffectedRowsDto,
RetsMlsProviderConfigRemoveOutputDto,

// recover (5)
RetsMlsProviderConfigRecoverDto,
RetsMlsProviderConfigRecoverInputWhereDto,
RetsMlsProviderConfigRecoverInputDto,
RetsMlsProviderConfigRecoverOutputAffectedRowsDto,
RetsMlsProviderConfigRecoverOutputDto
>
(
// soft_remove (5)
RetsMlsProviderConfigSoftRemoveDto,
RetsMlsProviderConfigSoftRemoveInputWhereDto,
RetsMlsProviderConfigSoftRemoveInputDto,
RetsMlsProviderConfigSoftRemoveOutputAffectedRowsDto,
RetsMlsProviderConfigSoftRemoveOutputDto,

// remove (4)
RetsMlsProviderConfigRemoveDto,
RetsMlsProviderConfigRemoveInputWhereDto,
RetsMlsProviderConfigRemoveInputDto,
RetsMlsProviderConfigRemoveOutputAffectedRowsDto,
RetsMlsProviderConfigRemoveOutputDto,

// recover (5)
RetsMlsProviderConfigRecoverDto,
RetsMlsProviderConfigRecoverInputWhereDto,
RetsMlsProviderConfigRecoverInputDto,
RetsMlsProviderConfigRecoverOutputAffectedRowsDto,
RetsMlsProviderConfigRecoverOutputDto
);



// ████████ initialize UploadCrudEngine ███████████████████████████████████████████
this.initUploadEngine
<
// upload (3)
RetsMlsProviderConfigUploadDto,
RetsMlsProviderConfigUploadInputDto,
RetsMlsProviderConfigUploadOutputDto,

// upload_delete (3)
RetsMlsProviderConfigUploadDeleteDto,
RetsMlsProviderConfigUploadDeleteInputDto,
RetsMlsProviderConfigUploadDeleteOutputDto
>
(
// upload (3)
RetsMlsProviderConfigUploadDto,
RetsMlsProviderConfigUploadInputDto,
RetsMlsProviderConfigUploadOutputDto,

// upload_delete (3)
RetsMlsProviderConfigUploadDeleteDto,
RetsMlsProviderConfigUploadDeleteInputDto,
RetsMlsProviderConfigUploadDeleteOutputDto
);


// ████████ initialize ImportExportCrudEngine █████████████████████████████████████

}}