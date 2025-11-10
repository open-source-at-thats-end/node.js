import { RetsListingAdditionalInfoEntity } from "./entities/additional.info.entity";
import { Injectable } from "@nestjs/common";
import { DataSource, Repository } from "typeorm";
import { InjectRepository } from "@nestjs/typeorm";
import { ConfService, CreateCrudEngine, CrudFactory, DataValidationPipe, DeleteCrudEngine, FindCrudEngine, FindOutputPaginationDto, LibraryAppService, LogService, RemoveCrudEngine, UpdateCrudEngine, UploadCrudEngine, UpsertCrudEngine  } from "@libs/library-app";
import { RetsListingAdditionalInfoCreateDto, RetsListingAdditionalInfoCreateInputDto, RetsListingAdditionalInfoCreateOutputDto, RetsListingAdditionalInfoDeleteDto, RetsListingAdditionalInfoDeleteInputDto, RetsListingAdditionalInfoDeleteInputWhereDto, RetsListingAdditionalInfoDeleteOutputDto, RetsListingAdditionalInfoFindDto, RetsListingAdditionalInfoFindInputDto, RetsListingAdditionalInfoFindInputGroupByDto, RetsListingAdditionalInfoFindInputSortOrderDto, RetsListingAdditionalInfoFindInputWhereDto, RetsListingAdditionalInfoFindOneByIdDto, RetsListingAdditionalInfoFindOneByIdInputDto, RetsListingAdditionalInfoFindOutputDto, RetsListingAdditionalInfoFindOutputRowsDto, RetsListingAdditionalInfoRecoverDto, RetsListingAdditionalInfoRecoverInputDto, RetsListingAdditionalInfoRecoverInputWhereDto, RetsListingAdditionalInfoRecoverOutputDto, RetsListingAdditionalInfoRecoverOutputAffectedRowsDto, RetsListingAdditionalInfoRemoveDto, RetsListingAdditionalInfoRemoveInputDto, RetsListingAdditionalInfoRemoveInputWhereDto, RetsListingAdditionalInfoRemoveOutputDto, RetsListingAdditionalInfoRemoveOutputAffectedRowsDto, RetsListingAdditionalInfoRestoreDto, RetsListingAdditionalInfoRestoreInputDto, RetsListingAdditionalInfoRestoreInputWhereDto, RetsListingAdditionalInfoRestoreOutputDto, RetsListingAdditionalInfoSoftDeleteDto, RetsListingAdditionalInfoSoftDeleteInputDto, RetsListingAdditionalInfoSoftDeleteInputWhereDto, RetsListingAdditionalInfoSoftDeleteOutputDto, RetsListingAdditionalInfoSoftRemoveDto, RetsListingAdditionalInfoSoftRemoveInputDto, RetsListingAdditionalInfoSoftRemoveInputWhereDto, RetsListingAdditionalInfoSoftRemoveOutputDto, RetsListingAdditionalInfoSoftRemoveOutputAffectedRowsDto, RetsListingAdditionalInfoUpdateDto, RetsListingAdditionalInfoUpdateInputDto, RetsListingAdditionalInfoUpdateInputSetsDto, RetsListingAdditionalInfoUpdateInputWhereDto, RetsListingAdditionalInfoUpdateOutputDto, RetsListingAdditionalInfoUpdateOutputAffectedRowsDto, RetsListingAdditionalInfoUploadDeleteDto, RetsListingAdditionalInfoUploadDeleteInputDto, RetsListingAdditionalInfoUploadDeleteOutputDto, RetsListingAdditionalInfoUploadDto, RetsListingAdditionalInfoUploadInputDto, RetsListingAdditionalInfoUploadOutputDto, RetsListingAdditionalInfoUpsertDto, RetsListingAdditionalInfoUpsertInputDto, RetsListingAdditionalInfoUpsertOutputDto } from "./dto/additional.info.dto";
import { SelfGraphqlMicroserviceService } from "@libs/dynamic-app";

@Injectable()
export class RetsListingAdditionalInfoFactory extends CrudFactory<RetsListingAdditionalInfoEntity> {

// ████████ FindCrudEngine ████████████████████████████████████████
public declare readonly findEngine: FindCrudEngine<
// entity (1)
RetsListingAdditionalInfoEntity,

// find (8)
RetsListingAdditionalInfoFindDto,
RetsListingAdditionalInfoFindInputWhereDto,
RetsListingAdditionalInfoFindInputSortOrderDto,
RetsListingAdditionalInfoFindInputGroupByDto,
RetsListingAdditionalInfoFindInputDto,
RetsListingAdditionalInfoFindOutputRowsDto,
FindOutputPaginationDto,
RetsListingAdditionalInfoFindOutputDto,

// find_one_by_id (2)
RetsListingAdditionalInfoFindOneByIdDto,
RetsListingAdditionalInfoFindOneByIdInputDto
>;

// ████████ CreateCrudEngine ████████████████████████████████████████
public declare readonly createEngine: CreateCrudEngine<
// entity (1)
RetsListingAdditionalInfoEntity,

// create (3)
RetsListingAdditionalInfoCreateDto,
RetsListingAdditionalInfoCreateInputDto,
RetsListingAdditionalInfoCreateOutputDto
>;

// ████████ UpdateCrudEngine ████████████████████████████████████████
public declare readonly updateEngine: UpdateCrudEngine<
// entity (1)
RetsListingAdditionalInfoEntity,

// update (6)
RetsListingAdditionalInfoUpdateDto,
RetsListingAdditionalInfoUpdateInputWhereDto,
RetsListingAdditionalInfoUpdateInputSetsDto,
RetsListingAdditionalInfoUpdateInputDto,
RetsListingAdditionalInfoUpdateOutputAffectedRowsDto,
RetsListingAdditionalInfoUpdateOutputDto
>;

// ████████ DeleteCrudEngine ████████████████████████████████████████
public declare readonly deleteEngine: DeleteCrudEngine<
// entity (1)
RetsListingAdditionalInfoEntity,

// soft_delete (4)
RetsListingAdditionalInfoSoftDeleteDto,
RetsListingAdditionalInfoSoftDeleteInputWhereDto,
RetsListingAdditionalInfoSoftDeleteInputDto,
RetsListingAdditionalInfoSoftDeleteOutputDto,

// delete (4)
RetsListingAdditionalInfoDeleteDto,
RetsListingAdditionalInfoDeleteInputWhereDto,
RetsListingAdditionalInfoDeleteInputDto,
RetsListingAdditionalInfoDeleteOutputDto,

// restore (4)
RetsListingAdditionalInfoRestoreDto,
RetsListingAdditionalInfoRestoreInputWhereDto,
RetsListingAdditionalInfoRestoreInputDto,
RetsListingAdditionalInfoRestoreOutputDto
>;

// ████████ UpsertCrudEngine ████████████████████████████████████████
public declare readonly upsertEngine: UpsertCrudEngine<
// entity (1)
RetsListingAdditionalInfoEntity,

// upsert (3)
RetsListingAdditionalInfoUpsertDto,
RetsListingAdditionalInfoUpsertInputDto,
RetsListingAdditionalInfoUpsertOutputDto
>;

// ████████ RemoveCrudEngine ████████████████████████████████████████
public declare readonly removeEngine: RemoveCrudEngine<
// entity (1)
RetsListingAdditionalInfoEntity,

// soft_remove (5)
RetsListingAdditionalInfoSoftRemoveDto,
RetsListingAdditionalInfoSoftRemoveInputWhereDto,
RetsListingAdditionalInfoSoftRemoveInputDto,
RetsListingAdditionalInfoSoftRemoveOutputAffectedRowsDto,
RetsListingAdditionalInfoSoftRemoveOutputDto,

// remove (4)
RetsListingAdditionalInfoRemoveDto,
RetsListingAdditionalInfoRemoveInputWhereDto,
RetsListingAdditionalInfoRemoveInputDto,
RetsListingAdditionalInfoRemoveOutputAffectedRowsDto,
RetsListingAdditionalInfoRemoveOutputDto,

// recover (5)
RetsListingAdditionalInfoRecoverDto,
RetsListingAdditionalInfoRecoverInputWhereDto,
RetsListingAdditionalInfoRecoverInputDto,
RetsListingAdditionalInfoRecoverOutputAffectedRowsDto,
RetsListingAdditionalInfoRecoverOutputDto
>;

// ████████ UploadCrudEngine ████████████████████████████████████████
public declare readonly uploadEngine: UploadCrudEngine<
// entity (1)
RetsListingAdditionalInfoEntity,

// upload (3)
RetsListingAdditionalInfoUploadDto,
RetsListingAdditionalInfoUploadInputDto,
RetsListingAdditionalInfoUploadOutputDto,

// upload_delete (3)
RetsListingAdditionalInfoUploadDeleteDto,
RetsListingAdditionalInfoUploadDeleteInputDto,
RetsListingAdditionalInfoUploadDeleteOutputDto
>;

constructor(
// data source
protected readonly dataSource: DataSource,

@InjectRepository(RetsListingAdditionalInfoEntity)
protected readonly repository: Repository<RetsListingAdditionalInfoEntity>,

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
    RetsListingAdditionalInfoEntity,
);

this.logService.setContext(RetsListingAdditionalInfoFactory.name);

// ████████ initialize FindCrudEngine ██████████████████████████████████████
this.initFindEngine
<
// find (8)
RetsListingAdditionalInfoFindDto,
RetsListingAdditionalInfoFindInputWhereDto,
RetsListingAdditionalInfoFindInputSortOrderDto,
RetsListingAdditionalInfoFindInputGroupByDto,
RetsListingAdditionalInfoFindInputDto,
RetsListingAdditionalInfoFindOutputRowsDto,
FindOutputPaginationDto,
RetsListingAdditionalInfoFindOutputDto,

// find_one_by_id (2)
RetsListingAdditionalInfoFindOneByIdDto,
RetsListingAdditionalInfoFindOneByIdInputDto
>
(
// find (8)
RetsListingAdditionalInfoFindDto,
RetsListingAdditionalInfoFindInputWhereDto,
RetsListingAdditionalInfoFindInputSortOrderDto,
RetsListingAdditionalInfoFindInputGroupByDto,
RetsListingAdditionalInfoFindInputDto,
RetsListingAdditionalInfoFindOutputRowsDto,
FindOutputPaginationDto,
RetsListingAdditionalInfoFindOutputDto,

// find_one_by_id (2)
RetsListingAdditionalInfoFindOneByIdDto,
RetsListingAdditionalInfoFindOneByIdInputDto
);


// ████████ initialize CreateCrudEngine ███████████████████████████████████████
this.initCreateEngine
<
// create (3)
RetsListingAdditionalInfoCreateDto,
RetsListingAdditionalInfoCreateInputDto,
RetsListingAdditionalInfoCreateOutputDto
>
(
// create (3)
RetsListingAdditionalInfoCreateDto,
RetsListingAdditionalInfoCreateInputDto,
RetsListingAdditionalInfoCreateOutputDto
);

// ████████ initialize UpdateCrudEngine ████████████████████████████████████████
this.initUpdateEngine
<
// update (6)
RetsListingAdditionalInfoUpdateDto,
RetsListingAdditionalInfoUpdateInputWhereDto,
RetsListingAdditionalInfoUpdateInputSetsDto,
RetsListingAdditionalInfoUpdateInputDto,
RetsListingAdditionalInfoUpdateOutputAffectedRowsDto,
RetsListingAdditionalInfoUpdateOutputDto
>
(
// update (6)
RetsListingAdditionalInfoUpdateDto,
RetsListingAdditionalInfoUpdateInputWhereDto,
RetsListingAdditionalInfoUpdateInputSetsDto,
RetsListingAdditionalInfoUpdateInputDto,
RetsListingAdditionalInfoUpdateOutputAffectedRowsDto,
RetsListingAdditionalInfoUpdateOutputDto
);


// ████████ initialize DeleteCrudEngine ███████████████████████████████████████████
this.initDeleteEngine
<
// soft_delete (4)
RetsListingAdditionalInfoSoftDeleteDto,
RetsListingAdditionalInfoSoftDeleteInputWhereDto,
RetsListingAdditionalInfoSoftDeleteInputDto,
RetsListingAdditionalInfoSoftDeleteOutputDto,

// delete (4)
RetsListingAdditionalInfoDeleteDto,
RetsListingAdditionalInfoDeleteInputWhereDto,
RetsListingAdditionalInfoDeleteInputDto,
RetsListingAdditionalInfoDeleteOutputDto,

// restore (4)
RetsListingAdditionalInfoRestoreDto,
RetsListingAdditionalInfoRestoreInputWhereDto,
RetsListingAdditionalInfoRestoreInputDto,
RetsListingAdditionalInfoRestoreOutputDto
>
(
// soft_delete (4)
RetsListingAdditionalInfoSoftDeleteDto,
RetsListingAdditionalInfoSoftDeleteInputWhereDto,
RetsListingAdditionalInfoSoftDeleteInputDto,
RetsListingAdditionalInfoSoftDeleteOutputDto,

// delete (4)
RetsListingAdditionalInfoDeleteDto,
RetsListingAdditionalInfoDeleteInputWhereDto,
RetsListingAdditionalInfoDeleteInputDto,
RetsListingAdditionalInfoDeleteOutputDto,

// restore (4)
RetsListingAdditionalInfoRestoreDto,
RetsListingAdditionalInfoRestoreInputWhereDto,
RetsListingAdditionalInfoRestoreInputDto,
RetsListingAdditionalInfoRestoreOutputDto
);



// ████████ initialize UpsertCrudEngine ███████████████████████████████████████████
this.initUpsertEngine
<
// upsert (3)
RetsListingAdditionalInfoUpsertDto,
RetsListingAdditionalInfoUpsertInputDto,
RetsListingAdditionalInfoUpsertOutputDto
>
(
// upsert (3)
RetsListingAdditionalInfoUpsertDto,
RetsListingAdditionalInfoUpsertInputDto,
RetsListingAdditionalInfoUpsertOutputDto
);




// ████████ initialize RemoveCrudEngine ███████████████████████████████████████████
this.initRemoveEngine
<
// soft_remove (5)
RetsListingAdditionalInfoSoftRemoveDto,
RetsListingAdditionalInfoSoftRemoveInputWhereDto,
RetsListingAdditionalInfoSoftRemoveInputDto,
RetsListingAdditionalInfoSoftRemoveOutputAffectedRowsDto,
RetsListingAdditionalInfoSoftRemoveOutputDto,

// remove (4)
RetsListingAdditionalInfoRemoveDto,
RetsListingAdditionalInfoRemoveInputWhereDto,
RetsListingAdditionalInfoRemoveInputDto,
RetsListingAdditionalInfoRemoveOutputAffectedRowsDto,
RetsListingAdditionalInfoRemoveOutputDto,

// recover (5)
RetsListingAdditionalInfoRecoverDto,
RetsListingAdditionalInfoRecoverInputWhereDto,
RetsListingAdditionalInfoRecoverInputDto,
RetsListingAdditionalInfoRecoverOutputAffectedRowsDto,
RetsListingAdditionalInfoRecoverOutputDto
>
(
// soft_remove (5)
RetsListingAdditionalInfoSoftRemoveDto,
RetsListingAdditionalInfoSoftRemoveInputWhereDto,
RetsListingAdditionalInfoSoftRemoveInputDto,
RetsListingAdditionalInfoSoftRemoveOutputAffectedRowsDto,
RetsListingAdditionalInfoSoftRemoveOutputDto,

// remove (4)
RetsListingAdditionalInfoRemoveDto,
RetsListingAdditionalInfoRemoveInputWhereDto,
RetsListingAdditionalInfoRemoveInputDto,
RetsListingAdditionalInfoRemoveOutputAffectedRowsDto,
RetsListingAdditionalInfoRemoveOutputDto,

// recover (5)
RetsListingAdditionalInfoRecoverDto,
RetsListingAdditionalInfoRecoverInputWhereDto,
RetsListingAdditionalInfoRecoverInputDto,
RetsListingAdditionalInfoRecoverOutputAffectedRowsDto,
RetsListingAdditionalInfoRecoverOutputDto
);



// ████████ initialize UploadCrudEngine ███████████████████████████████████████████
this.initUploadEngine
<
// upload (3)
RetsListingAdditionalInfoUploadDto,
RetsListingAdditionalInfoUploadInputDto,
RetsListingAdditionalInfoUploadOutputDto,

// upload_delete (3)
RetsListingAdditionalInfoUploadDeleteDto,
RetsListingAdditionalInfoUploadDeleteInputDto,
RetsListingAdditionalInfoUploadDeleteOutputDto
>
(
// upload (3)
RetsListingAdditionalInfoUploadDto,
RetsListingAdditionalInfoUploadInputDto,
RetsListingAdditionalInfoUploadOutputDto,

// upload_delete (3)
RetsListingAdditionalInfoUploadDeleteDto,
RetsListingAdditionalInfoUploadDeleteInputDto,
RetsListingAdditionalInfoUploadDeleteOutputDto
);


// ████████ initialize ImportExportCrudEngine █████████████████████████████████████

}}