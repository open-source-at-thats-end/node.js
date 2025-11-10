import { RetsListingOfficeEntity } from "./entities/office.entity";
import { Injectable } from "@nestjs/common";
import { DataSource, Repository } from "typeorm";
import { InjectRepository } from "@nestjs/typeorm";
import { ConfService, CreateCrudEngine, CrudFactory, DataValidationPipe, DeleteCrudEngine, FindCrudEngine, FindOutputPaginationDto, LibraryAppService, LogService, RemoveCrudEngine, UpdateCrudEngine, UploadCrudEngine, UpsertCrudEngine  } from "@libs/library-app";
import { RetsListingOfficeCreateDto, RetsListingOfficeCreateInputDto, RetsListingOfficeCreateOutputDto, RetsListingOfficeDeleteDto, RetsListingOfficeDeleteInputDto, RetsListingOfficeDeleteInputWhereDto, RetsListingOfficeDeleteOutputDto, RetsListingOfficeFindDto, RetsListingOfficeFindInputDto, RetsListingOfficeFindInputGroupByDto, RetsListingOfficeFindInputSortOrderDto, RetsListingOfficeFindInputWhereDto, RetsListingOfficeFindOneByIdDto, RetsListingOfficeFindOneByIdInputDto, RetsListingOfficeFindOutputDto, RetsListingOfficeFindOutputRowsDto, RetsListingOfficeRecoverDto, RetsListingOfficeRecoverInputDto, RetsListingOfficeRecoverInputWhereDto, RetsListingOfficeRecoverOutputDto, RetsListingOfficeRecoverOutputAffectedRowsDto, RetsListingOfficeRemoveDto, RetsListingOfficeRemoveInputDto, RetsListingOfficeRemoveInputWhereDto, RetsListingOfficeRemoveOutputDto, RetsListingOfficeRemoveOutputAffectedRowsDto, RetsListingOfficeRestoreDto, RetsListingOfficeRestoreInputDto, RetsListingOfficeRestoreInputWhereDto, RetsListingOfficeRestoreOutputDto, RetsListingOfficeSoftDeleteDto, RetsListingOfficeSoftDeleteInputDto, RetsListingOfficeSoftDeleteInputWhereDto, RetsListingOfficeSoftDeleteOutputDto, RetsListingOfficeSoftRemoveDto, RetsListingOfficeSoftRemoveInputDto, RetsListingOfficeSoftRemoveInputWhereDto, RetsListingOfficeSoftRemoveOutputDto, RetsListingOfficeSoftRemoveOutputAffectedRowsDto, RetsListingOfficeUpdateDto, RetsListingOfficeUpdateInputDto, RetsListingOfficeUpdateInputSetsDto, RetsListingOfficeUpdateInputWhereDto, RetsListingOfficeUpdateOutputDto, RetsListingOfficeUpdateOutputAffectedRowsDto, RetsListingOfficeUploadDeleteDto, RetsListingOfficeUploadDeleteInputDto, RetsListingOfficeUploadDeleteOutputDto, RetsListingOfficeUploadDto, RetsListingOfficeUploadInputDto, RetsListingOfficeUploadOutputDto, RetsListingOfficeUpsertDto, RetsListingOfficeUpsertInputDto, RetsListingOfficeUpsertOutputDto } from "./dto/office.dto";
import { SelfGraphqlMicroserviceService } from "@libs/dynamic-app";

@Injectable()
export class RetsListingOfficeFactory extends CrudFactory<RetsListingOfficeEntity> {

// ████████ FindCrudEngine ████████████████████████████████████████
public declare readonly findEngine: FindCrudEngine<
// entity (1)
RetsListingOfficeEntity,

// find (8)
RetsListingOfficeFindDto,
RetsListingOfficeFindInputWhereDto,
RetsListingOfficeFindInputSortOrderDto,
RetsListingOfficeFindInputGroupByDto,
RetsListingOfficeFindInputDto,
RetsListingOfficeFindOutputRowsDto,
FindOutputPaginationDto,
RetsListingOfficeFindOutputDto,

// find_one_by_id (2)
RetsListingOfficeFindOneByIdDto,
RetsListingOfficeFindOneByIdInputDto
>;

// ████████ CreateCrudEngine ████████████████████████████████████████
public declare readonly createEngine: CreateCrudEngine<
// entity (1)
RetsListingOfficeEntity,

// create (3)
RetsListingOfficeCreateDto,
RetsListingOfficeCreateInputDto,
RetsListingOfficeCreateOutputDto
>;

// ████████ UpdateCrudEngine ████████████████████████████████████████
public declare readonly updateEngine: UpdateCrudEngine<
// entity (1)
RetsListingOfficeEntity,

// update (6)
RetsListingOfficeUpdateDto,
RetsListingOfficeUpdateInputWhereDto,
RetsListingOfficeUpdateInputSetsDto,
RetsListingOfficeUpdateInputDto,
RetsListingOfficeUpdateOutputAffectedRowsDto,
RetsListingOfficeUpdateOutputDto
>;

// ████████ DeleteCrudEngine ████████████████████████████████████████
public declare readonly deleteEngine: DeleteCrudEngine<
// entity (1)
RetsListingOfficeEntity,

// soft_delete (4)
RetsListingOfficeSoftDeleteDto,
RetsListingOfficeSoftDeleteInputWhereDto,
RetsListingOfficeSoftDeleteInputDto,
RetsListingOfficeSoftDeleteOutputDto,

// delete (4)
RetsListingOfficeDeleteDto,
RetsListingOfficeDeleteInputWhereDto,
RetsListingOfficeDeleteInputDto,
RetsListingOfficeDeleteOutputDto,

// restore (4)
RetsListingOfficeRestoreDto,
RetsListingOfficeRestoreInputWhereDto,
RetsListingOfficeRestoreInputDto,
RetsListingOfficeRestoreOutputDto
>;

// ████████ UpsertCrudEngine ████████████████████████████████████████
public declare readonly upsertEngine: UpsertCrudEngine<
// entity (1)
RetsListingOfficeEntity,

// upsert (3)
RetsListingOfficeUpsertDto,
RetsListingOfficeUpsertInputDto,
RetsListingOfficeUpsertOutputDto
>;

// ████████ RemoveCrudEngine ████████████████████████████████████████
public declare readonly removeEngine: RemoveCrudEngine<
// entity (1)
RetsListingOfficeEntity,

// soft_remove (5)
RetsListingOfficeSoftRemoveDto,
RetsListingOfficeSoftRemoveInputWhereDto,
RetsListingOfficeSoftRemoveInputDto,
RetsListingOfficeSoftRemoveOutputAffectedRowsDto,
RetsListingOfficeSoftRemoveOutputDto,

// remove (4)
RetsListingOfficeRemoveDto,
RetsListingOfficeRemoveInputWhereDto,
RetsListingOfficeRemoveInputDto,
RetsListingOfficeRemoveOutputAffectedRowsDto,
RetsListingOfficeRemoveOutputDto,

// recover (5)
RetsListingOfficeRecoverDto,
RetsListingOfficeRecoverInputWhereDto,
RetsListingOfficeRecoverInputDto,
RetsListingOfficeRecoverOutputAffectedRowsDto,
RetsListingOfficeRecoverOutputDto
>;

// ████████ UploadCrudEngine ████████████████████████████████████████
public declare readonly uploadEngine: UploadCrudEngine<
// entity (1)
RetsListingOfficeEntity,

// upload (3)
RetsListingOfficeUploadDto,
RetsListingOfficeUploadInputDto,
RetsListingOfficeUploadOutputDto,

// upload_delete (3)
RetsListingOfficeUploadDeleteDto,
RetsListingOfficeUploadDeleteInputDto,
RetsListingOfficeUploadDeleteOutputDto
>;

constructor(
// data source
protected readonly dataSource: DataSource,

@InjectRepository(RetsListingOfficeEntity)
protected readonly repository: Repository<RetsListingOfficeEntity>,

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
    RetsListingOfficeEntity,
);

this.logService.setContext(RetsListingOfficeFactory.name);

// ████████ initialize FindCrudEngine ██████████████████████████████████████
this.initFindEngine
<
// find (8)
RetsListingOfficeFindDto,
RetsListingOfficeFindInputWhereDto,
RetsListingOfficeFindInputSortOrderDto,
RetsListingOfficeFindInputGroupByDto,
RetsListingOfficeFindInputDto,
RetsListingOfficeFindOutputRowsDto,
FindOutputPaginationDto,
RetsListingOfficeFindOutputDto,

// find_one_by_id (2)
RetsListingOfficeFindOneByIdDto,
RetsListingOfficeFindOneByIdInputDto
>
(
// find (8)
RetsListingOfficeFindDto,
RetsListingOfficeFindInputWhereDto,
RetsListingOfficeFindInputSortOrderDto,
RetsListingOfficeFindInputGroupByDto,
RetsListingOfficeFindInputDto,
RetsListingOfficeFindOutputRowsDto,
FindOutputPaginationDto,
RetsListingOfficeFindOutputDto,

// find_one_by_id (2)
RetsListingOfficeFindOneByIdDto,
RetsListingOfficeFindOneByIdInputDto
);


// ████████ initialize CreateCrudEngine ███████████████████████████████████████
this.initCreateEngine
<
// create (3)
RetsListingOfficeCreateDto,
RetsListingOfficeCreateInputDto,
RetsListingOfficeCreateOutputDto
>
(
// create (3)
RetsListingOfficeCreateDto,
RetsListingOfficeCreateInputDto,
RetsListingOfficeCreateOutputDto
);

// ████████ initialize UpdateCrudEngine ████████████████████████████████████████
this.initUpdateEngine
<
// update (6)
RetsListingOfficeUpdateDto,
RetsListingOfficeUpdateInputWhereDto,
RetsListingOfficeUpdateInputSetsDto,
RetsListingOfficeUpdateInputDto,
RetsListingOfficeUpdateOutputAffectedRowsDto,
RetsListingOfficeUpdateOutputDto
>
(
// update (6)
RetsListingOfficeUpdateDto,
RetsListingOfficeUpdateInputWhereDto,
RetsListingOfficeUpdateInputSetsDto,
RetsListingOfficeUpdateInputDto,
RetsListingOfficeUpdateOutputAffectedRowsDto,
RetsListingOfficeUpdateOutputDto
);


// ████████ initialize DeleteCrudEngine ███████████████████████████████████████████
this.initDeleteEngine
<
// soft_delete (4)
RetsListingOfficeSoftDeleteDto,
RetsListingOfficeSoftDeleteInputWhereDto,
RetsListingOfficeSoftDeleteInputDto,
RetsListingOfficeSoftDeleteOutputDto,

// delete (4)
RetsListingOfficeDeleteDto,
RetsListingOfficeDeleteInputWhereDto,
RetsListingOfficeDeleteInputDto,
RetsListingOfficeDeleteOutputDto,

// restore (4)
RetsListingOfficeRestoreDto,
RetsListingOfficeRestoreInputWhereDto,
RetsListingOfficeRestoreInputDto,
RetsListingOfficeRestoreOutputDto
>
(
// soft_delete (4)
RetsListingOfficeSoftDeleteDto,
RetsListingOfficeSoftDeleteInputWhereDto,
RetsListingOfficeSoftDeleteInputDto,
RetsListingOfficeSoftDeleteOutputDto,

// delete (4)
RetsListingOfficeDeleteDto,
RetsListingOfficeDeleteInputWhereDto,
RetsListingOfficeDeleteInputDto,
RetsListingOfficeDeleteOutputDto,

// restore (4)
RetsListingOfficeRestoreDto,
RetsListingOfficeRestoreInputWhereDto,
RetsListingOfficeRestoreInputDto,
RetsListingOfficeRestoreOutputDto
);



// ████████ initialize UpsertCrudEngine ███████████████████████████████████████████
this.initUpsertEngine
<
// upsert (3)
RetsListingOfficeUpsertDto,
RetsListingOfficeUpsertInputDto,
RetsListingOfficeUpsertOutputDto
>
(
// upsert (3)
RetsListingOfficeUpsertDto,
RetsListingOfficeUpsertInputDto,
RetsListingOfficeUpsertOutputDto
);




// ████████ initialize RemoveCrudEngine ███████████████████████████████████████████
this.initRemoveEngine
<
// soft_remove (5)
RetsListingOfficeSoftRemoveDto,
RetsListingOfficeSoftRemoveInputWhereDto,
RetsListingOfficeSoftRemoveInputDto,
RetsListingOfficeSoftRemoveOutputAffectedRowsDto,
RetsListingOfficeSoftRemoveOutputDto,

// remove (4)
RetsListingOfficeRemoveDto,
RetsListingOfficeRemoveInputWhereDto,
RetsListingOfficeRemoveInputDto,
RetsListingOfficeRemoveOutputAffectedRowsDto,
RetsListingOfficeRemoveOutputDto,

// recover (5)
RetsListingOfficeRecoverDto,
RetsListingOfficeRecoverInputWhereDto,
RetsListingOfficeRecoverInputDto,
RetsListingOfficeRecoverOutputAffectedRowsDto,
RetsListingOfficeRecoverOutputDto
>
(
// soft_remove (5)
RetsListingOfficeSoftRemoveDto,
RetsListingOfficeSoftRemoveInputWhereDto,
RetsListingOfficeSoftRemoveInputDto,
RetsListingOfficeSoftRemoveOutputAffectedRowsDto,
RetsListingOfficeSoftRemoveOutputDto,

// remove (4)
RetsListingOfficeRemoveDto,
RetsListingOfficeRemoveInputWhereDto,
RetsListingOfficeRemoveInputDto,
RetsListingOfficeRemoveOutputAffectedRowsDto,
RetsListingOfficeRemoveOutputDto,

// recover (5)
RetsListingOfficeRecoverDto,
RetsListingOfficeRecoverInputWhereDto,
RetsListingOfficeRecoverInputDto,
RetsListingOfficeRecoverOutputAffectedRowsDto,
RetsListingOfficeRecoverOutputDto
);



// ████████ initialize UploadCrudEngine ███████████████████████████████████████████
this.initUploadEngine
<
// upload (3)
RetsListingOfficeUploadDto,
RetsListingOfficeUploadInputDto,
RetsListingOfficeUploadOutputDto,

// upload_delete (3)
RetsListingOfficeUploadDeleteDto,
RetsListingOfficeUploadDeleteInputDto,
RetsListingOfficeUploadDeleteOutputDto
>
(
// upload (3)
RetsListingOfficeUploadDto,
RetsListingOfficeUploadInputDto,
RetsListingOfficeUploadOutputDto,

// upload_delete (3)
RetsListingOfficeUploadDeleteDto,
RetsListingOfficeUploadDeleteInputDto,
RetsListingOfficeUploadDeleteOutputDto
);


// ████████ initialize ImportExportCrudEngine █████████████████████████████████████

}}