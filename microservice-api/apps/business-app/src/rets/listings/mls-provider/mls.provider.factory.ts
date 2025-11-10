import { RetsMlsProviderEntity } from "./entities/mls.provider.entity";
import { Injectable } from "@nestjs/common";
import { DataSource, Repository } from "typeorm";
import { InjectRepository } from "@nestjs/typeorm";
import { ConfService, CreateCrudEngine, CrudFactory, DataValidationPipe, DeleteCrudEngine, FindCrudEngine, FindOutputPaginationDto, LibraryAppService, LogService, RemoveCrudEngine, UpdateCrudEngine, UploadCrudEngine, UpsertCrudEngine  } from "@libs/library-app";
import { RetsMlsProviderCreateDto, RetsMlsProviderCreateInputDto, RetsMlsProviderCreateOutputDto, RetsMlsProviderDeleteDto, RetsMlsProviderDeleteInputDto, RetsMlsProviderDeleteInputWhereDto, RetsMlsProviderDeleteOutputDto, RetsMlsProviderFindDto, RetsMlsProviderFindInputDto, RetsMlsProviderFindInputGroupByDto, RetsMlsProviderFindInputSortOrderDto, RetsMlsProviderFindInputWhereDto, RetsMlsProviderFindOneByIdDto, RetsMlsProviderFindOneByIdInputDto, RetsMlsProviderFindOutputDto, RetsMlsProviderFindOutputRowsDto, RetsMlsProviderRecoverDto, RetsMlsProviderRecoverInputDto, RetsMlsProviderRecoverInputWhereDto, RetsMlsProviderRecoverOutputDto, RetsMlsProviderRecoverOutputAffectedRowsDto, RetsMlsProviderRemoveDto, RetsMlsProviderRemoveInputDto, RetsMlsProviderRemoveInputWhereDto, RetsMlsProviderRemoveOutputDto, RetsMlsProviderRemoveOutputAffectedRowsDto, RetsMlsProviderRestoreDto, RetsMlsProviderRestoreInputDto, RetsMlsProviderRestoreInputWhereDto, RetsMlsProviderRestoreOutputDto, RetsMlsProviderSoftDeleteDto, RetsMlsProviderSoftDeleteInputDto, RetsMlsProviderSoftDeleteInputWhereDto, RetsMlsProviderSoftDeleteOutputDto, RetsMlsProviderSoftRemoveDto, RetsMlsProviderSoftRemoveInputDto, RetsMlsProviderSoftRemoveInputWhereDto, RetsMlsProviderSoftRemoveOutputDto, RetsMlsProviderSoftRemoveOutputAffectedRowsDto, RetsMlsProviderUpdateDto, RetsMlsProviderUpdateInputDto, RetsMlsProviderUpdateInputSetsDto, RetsMlsProviderUpdateInputWhereDto, RetsMlsProviderUpdateOutputDto, RetsMlsProviderUpdateOutputAffectedRowsDto, RetsMlsProviderUploadDeleteDto, RetsMlsProviderUploadDeleteInputDto, RetsMlsProviderUploadDeleteOutputDto, RetsMlsProviderUploadDto, RetsMlsProviderUploadInputDto, RetsMlsProviderUploadOutputDto, RetsMlsProviderUpsertDto, RetsMlsProviderUpsertInputDto, RetsMlsProviderUpsertOutputDto } from "./dto/mls.provider.dto";
import { SelfGraphqlMicroserviceService } from "@libs/dynamic-app";

@Injectable()
export class RetsMlsProviderFactory extends CrudFactory<RetsMlsProviderEntity> {

// ████████ FindCrudEngine ████████████████████████████████████████
public declare readonly findEngine: FindCrudEngine<
// entity (1)
RetsMlsProviderEntity,

// find (8)
RetsMlsProviderFindDto,
RetsMlsProviderFindInputWhereDto,
RetsMlsProviderFindInputSortOrderDto,
RetsMlsProviderFindInputGroupByDto,
RetsMlsProviderFindInputDto,
RetsMlsProviderFindOutputRowsDto,
FindOutputPaginationDto,
RetsMlsProviderFindOutputDto,

// find_one_by_id (2)
RetsMlsProviderFindOneByIdDto,
RetsMlsProviderFindOneByIdInputDto
>;

// ████████ CreateCrudEngine ████████████████████████████████████████
public declare readonly createEngine: CreateCrudEngine<
// entity (1)
RetsMlsProviderEntity,

// create (3)
RetsMlsProviderCreateDto,
RetsMlsProviderCreateInputDto,
RetsMlsProviderCreateOutputDto
>;

// ████████ UpdateCrudEngine ████████████████████████████████████████
public declare readonly updateEngine: UpdateCrudEngine<
// entity (1)
RetsMlsProviderEntity,

// update (6)
RetsMlsProviderUpdateDto,
RetsMlsProviderUpdateInputWhereDto,
RetsMlsProviderUpdateInputSetsDto,
RetsMlsProviderUpdateInputDto,
RetsMlsProviderUpdateOutputAffectedRowsDto,
RetsMlsProviderUpdateOutputDto
>;

// ████████ DeleteCrudEngine ████████████████████████████████████████
public declare readonly deleteEngine: DeleteCrudEngine<
// entity (1)
RetsMlsProviderEntity,

// soft_delete (4)
RetsMlsProviderSoftDeleteDto,
RetsMlsProviderSoftDeleteInputWhereDto,
RetsMlsProviderSoftDeleteInputDto,
RetsMlsProviderSoftDeleteOutputDto,

// delete (4)
RetsMlsProviderDeleteDto,
RetsMlsProviderDeleteInputWhereDto,
RetsMlsProviderDeleteInputDto,
RetsMlsProviderDeleteOutputDto,

// restore (4)
RetsMlsProviderRestoreDto,
RetsMlsProviderRestoreInputWhereDto,
RetsMlsProviderRestoreInputDto,
RetsMlsProviderRestoreOutputDto
>;

// ████████ UpsertCrudEngine ████████████████████████████████████████
public declare readonly upsertEngine: UpsertCrudEngine<
// entity (1)
RetsMlsProviderEntity,

// upsert (3)
RetsMlsProviderUpsertDto,
RetsMlsProviderUpsertInputDto,
RetsMlsProviderUpsertOutputDto
>;

// ████████ RemoveCrudEngine ████████████████████████████████████████
public declare readonly removeEngine: RemoveCrudEngine<
// entity (1)
RetsMlsProviderEntity,

// soft_remove (5)
RetsMlsProviderSoftRemoveDto,
RetsMlsProviderSoftRemoveInputWhereDto,
RetsMlsProviderSoftRemoveInputDto,
RetsMlsProviderSoftRemoveOutputAffectedRowsDto,
RetsMlsProviderSoftRemoveOutputDto,

// remove (4)
RetsMlsProviderRemoveDto,
RetsMlsProviderRemoveInputWhereDto,
RetsMlsProviderRemoveInputDto,
RetsMlsProviderRemoveOutputAffectedRowsDto,
RetsMlsProviderRemoveOutputDto,

// recover (5)
RetsMlsProviderRecoverDto,
RetsMlsProviderRecoverInputWhereDto,
RetsMlsProviderRecoverInputDto,
RetsMlsProviderRecoverOutputAffectedRowsDto,
RetsMlsProviderRecoverOutputDto
>;

// ████████ UploadCrudEngine ████████████████████████████████████████
public declare readonly uploadEngine: UploadCrudEngine<
// entity (1)
RetsMlsProviderEntity,

// upload (3)
RetsMlsProviderUploadDto,
RetsMlsProviderUploadInputDto,
RetsMlsProviderUploadOutputDto,

// upload_delete (3)
RetsMlsProviderUploadDeleteDto,
RetsMlsProviderUploadDeleteInputDto,
RetsMlsProviderUploadDeleteOutputDto
>;

constructor(
// data source
protected readonly dataSource: DataSource,

@InjectRepository(RetsMlsProviderEntity)
protected readonly repository: Repository<RetsMlsProviderEntity>,

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
    RetsMlsProviderEntity,
);

this.logService.setContext(RetsMlsProviderFactory.name);

// ████████ initialize FindCrudEngine ██████████████████████████████████████
this.initFindEngine
<
// find (8)
RetsMlsProviderFindDto,
RetsMlsProviderFindInputWhereDto,
RetsMlsProviderFindInputSortOrderDto,
RetsMlsProviderFindInputGroupByDto,
RetsMlsProviderFindInputDto,
RetsMlsProviderFindOutputRowsDto,
FindOutputPaginationDto,
RetsMlsProviderFindOutputDto,

// find_one_by_id (2)
RetsMlsProviderFindOneByIdDto,
RetsMlsProviderFindOneByIdInputDto
>
(
// find (8)
RetsMlsProviderFindDto,
RetsMlsProviderFindInputWhereDto,
RetsMlsProviderFindInputSortOrderDto,
RetsMlsProviderFindInputGroupByDto,
RetsMlsProviderFindInputDto,
RetsMlsProviderFindOutputRowsDto,
FindOutputPaginationDto,
RetsMlsProviderFindOutputDto,

// find_one_by_id (2)
RetsMlsProviderFindOneByIdDto,
RetsMlsProviderFindOneByIdInputDto
);


// ████████ initialize CreateCrudEngine ███████████████████████████████████████
this.initCreateEngine
<
// create (3)
RetsMlsProviderCreateDto,
RetsMlsProviderCreateInputDto,
RetsMlsProviderCreateOutputDto
>
(
// create (3)
RetsMlsProviderCreateDto,
RetsMlsProviderCreateInputDto,
RetsMlsProviderCreateOutputDto
);

// ████████ initialize UpdateCrudEngine ████████████████████████████████████████
this.initUpdateEngine
<
// update (6)
RetsMlsProviderUpdateDto,
RetsMlsProviderUpdateInputWhereDto,
RetsMlsProviderUpdateInputSetsDto,
RetsMlsProviderUpdateInputDto,
RetsMlsProviderUpdateOutputAffectedRowsDto,
RetsMlsProviderUpdateOutputDto
>
(
// update (6)
RetsMlsProviderUpdateDto,
RetsMlsProviderUpdateInputWhereDto,
RetsMlsProviderUpdateInputSetsDto,
RetsMlsProviderUpdateInputDto,
RetsMlsProviderUpdateOutputAffectedRowsDto,
RetsMlsProviderUpdateOutputDto
);


// ████████ initialize DeleteCrudEngine ███████████████████████████████████████████
this.initDeleteEngine
<
// soft_delete (4)
RetsMlsProviderSoftDeleteDto,
RetsMlsProviderSoftDeleteInputWhereDto,
RetsMlsProviderSoftDeleteInputDto,
RetsMlsProviderSoftDeleteOutputDto,

// delete (4)
RetsMlsProviderDeleteDto,
RetsMlsProviderDeleteInputWhereDto,
RetsMlsProviderDeleteInputDto,
RetsMlsProviderDeleteOutputDto,

// restore (4)
RetsMlsProviderRestoreDto,
RetsMlsProviderRestoreInputWhereDto,
RetsMlsProviderRestoreInputDto,
RetsMlsProviderRestoreOutputDto
>
(
// soft_delete (4)
RetsMlsProviderSoftDeleteDto,
RetsMlsProviderSoftDeleteInputWhereDto,
RetsMlsProviderSoftDeleteInputDto,
RetsMlsProviderSoftDeleteOutputDto,

// delete (4)
RetsMlsProviderDeleteDto,
RetsMlsProviderDeleteInputWhereDto,
RetsMlsProviderDeleteInputDto,
RetsMlsProviderDeleteOutputDto,

// restore (4)
RetsMlsProviderRestoreDto,
RetsMlsProviderRestoreInputWhereDto,
RetsMlsProviderRestoreInputDto,
RetsMlsProviderRestoreOutputDto
);



// ████████ initialize UpsertCrudEngine ███████████████████████████████████████████
this.initUpsertEngine
<
// upsert (3)
RetsMlsProviderUpsertDto,
RetsMlsProviderUpsertInputDto,
RetsMlsProviderUpsertOutputDto
>
(
// upsert (3)
RetsMlsProviderUpsertDto,
RetsMlsProviderUpsertInputDto,
RetsMlsProviderUpsertOutputDto
);




// ████████ initialize RemoveCrudEngine ███████████████████████████████████████████
this.initRemoveEngine
<
// soft_remove (5)
RetsMlsProviderSoftRemoveDto,
RetsMlsProviderSoftRemoveInputWhereDto,
RetsMlsProviderSoftRemoveInputDto,
RetsMlsProviderSoftRemoveOutputAffectedRowsDto,
RetsMlsProviderSoftRemoveOutputDto,

// remove (4)
RetsMlsProviderRemoveDto,
RetsMlsProviderRemoveInputWhereDto,
RetsMlsProviderRemoveInputDto,
RetsMlsProviderRemoveOutputAffectedRowsDto,
RetsMlsProviderRemoveOutputDto,

// recover (5)
RetsMlsProviderRecoverDto,
RetsMlsProviderRecoverInputWhereDto,
RetsMlsProviderRecoverInputDto,
RetsMlsProviderRecoverOutputAffectedRowsDto,
RetsMlsProviderRecoverOutputDto
>
(
// soft_remove (5)
RetsMlsProviderSoftRemoveDto,
RetsMlsProviderSoftRemoveInputWhereDto,
RetsMlsProviderSoftRemoveInputDto,
RetsMlsProviderSoftRemoveOutputAffectedRowsDto,
RetsMlsProviderSoftRemoveOutputDto,

// remove (4)
RetsMlsProviderRemoveDto,
RetsMlsProviderRemoveInputWhereDto,
RetsMlsProviderRemoveInputDto,
RetsMlsProviderRemoveOutputAffectedRowsDto,
RetsMlsProviderRemoveOutputDto,

// recover (5)
RetsMlsProviderRecoverDto,
RetsMlsProviderRecoverInputWhereDto,
RetsMlsProviderRecoverInputDto,
RetsMlsProviderRecoverOutputAffectedRowsDto,
RetsMlsProviderRecoverOutputDto
);



// ████████ initialize UploadCrudEngine ███████████████████████████████████████████
this.initUploadEngine
<
// upload (3)
RetsMlsProviderUploadDto,
RetsMlsProviderUploadInputDto,
RetsMlsProviderUploadOutputDto,

// upload_delete (3)
RetsMlsProviderUploadDeleteDto,
RetsMlsProviderUploadDeleteInputDto,
RetsMlsProviderUploadDeleteOutputDto
>
(
// upload (3)
RetsMlsProviderUploadDto,
RetsMlsProviderUploadInputDto,
RetsMlsProviderUploadOutputDto,

// upload_delete (3)
RetsMlsProviderUploadDeleteDto,
RetsMlsProviderUploadDeleteInputDto,
RetsMlsProviderUploadDeleteOutputDto
);


// ████████ initialize ImportExportCrudEngine █████████████████████████████████████

}}