import { RetsListingMetadataEntity } from "./entities/metadata.entity";
import { Injectable } from "@nestjs/common";
import { DataSource, Repository } from "typeorm";
import { InjectRepository } from "@nestjs/typeorm";
import { ConfService, CreateCrudEngine, CrudFactory, DataValidationPipe, DeleteCrudEngine, FindCrudEngine, FindOutputPaginationDto, LibraryAppService, LogService, RemoveCrudEngine, UpdateCrudEngine, UploadCrudEngine, UpsertCrudEngine  } from "@libs/library-app";
import { RetsListingMetadataCreateDto, RetsListingMetadataCreateInputDto, RetsListingMetadataCreateOutputDto, RetsListingMetadataDeleteDto, RetsListingMetadataDeleteInputDto, RetsListingMetadataDeleteInputWhereDto, RetsListingMetadataDeleteOutputDto, RetsListingMetadataFindDto, RetsListingMetadataFindInputDto, RetsListingMetadataFindInputGroupByDto, RetsListingMetadataFindInputSortOrderDto, RetsListingMetadataFindInputWhereDto, RetsListingMetadataFindOneByIdDto, RetsListingMetadataFindOneByIdInputDto, RetsListingMetadataFindOutputDto, RetsListingMetadataFindOutputRowsDto, RetsListingMetadataRecoverDto, RetsListingMetadataRecoverInputDto, RetsListingMetadataRecoverInputWhereDto, RetsListingMetadataRecoverOutputDto, RetsListingMetadataRecoverOutputAffectedRowsDto, RetsListingMetadataRemoveDto, RetsListingMetadataRemoveInputDto, RetsListingMetadataRemoveInputWhereDto, RetsListingMetadataRemoveOutputDto, RetsListingMetadataRemoveOutputAffectedRowsDto, RetsListingMetadataRestoreDto, RetsListingMetadataRestoreInputDto, RetsListingMetadataRestoreInputWhereDto, RetsListingMetadataRestoreOutputDto, RetsListingMetadataSoftDeleteDto, RetsListingMetadataSoftDeleteInputDto, RetsListingMetadataSoftDeleteInputWhereDto, RetsListingMetadataSoftDeleteOutputDto, RetsListingMetadataSoftRemoveDto, RetsListingMetadataSoftRemoveInputDto, RetsListingMetadataSoftRemoveInputWhereDto, RetsListingMetadataSoftRemoveOutputDto, RetsListingMetadataSoftRemoveOutputAffectedRowsDto, RetsListingMetadataUpdateDto, RetsListingMetadataUpdateInputDto, RetsListingMetadataUpdateInputSetsDto, RetsListingMetadataUpdateInputWhereDto, RetsListingMetadataUpdateOutputDto, RetsListingMetadataUpdateOutputAffectedRowsDto, RetsListingMetadataUploadDeleteDto, RetsListingMetadataUploadDeleteInputDto, RetsListingMetadataUploadDeleteOutputDto, RetsListingMetadataUploadDto, RetsListingMetadataUploadInputDto, RetsListingMetadataUploadOutputDto, RetsListingMetadataUpsertDto, RetsListingMetadataUpsertInputDto, RetsListingMetadataUpsertOutputDto } from "./dto/metadata.dto";
import { SelfGraphqlMicroserviceService } from "@libs/dynamic-app";

@Injectable()
export class RetsListingMetadataFactory extends CrudFactory<RetsListingMetadataEntity> {

// ████████ FindCrudEngine ████████████████████████████████████████
public declare readonly findEngine: FindCrudEngine<
// entity (1)
RetsListingMetadataEntity,

// find (8)
RetsListingMetadataFindDto,
RetsListingMetadataFindInputWhereDto,
RetsListingMetadataFindInputSortOrderDto,
RetsListingMetadataFindInputGroupByDto,
RetsListingMetadataFindInputDto,
RetsListingMetadataFindOutputRowsDto,
FindOutputPaginationDto,
RetsListingMetadataFindOutputDto,

// find_one_by_id (2)
RetsListingMetadataFindOneByIdDto,
RetsListingMetadataFindOneByIdInputDto
>;

// ████████ CreateCrudEngine ████████████████████████████████████████
public declare readonly createEngine: CreateCrudEngine<
// entity (1)
RetsListingMetadataEntity,

// create (3)
RetsListingMetadataCreateDto,
RetsListingMetadataCreateInputDto,
RetsListingMetadataCreateOutputDto
>;

// ████████ UpdateCrudEngine ████████████████████████████████████████
public declare readonly updateEngine: UpdateCrudEngine<
// entity (1)
RetsListingMetadataEntity,

// update (6)
RetsListingMetadataUpdateDto,
RetsListingMetadataUpdateInputWhereDto,
RetsListingMetadataUpdateInputSetsDto,
RetsListingMetadataUpdateInputDto,
RetsListingMetadataUpdateOutputAffectedRowsDto,
RetsListingMetadataUpdateOutputDto
>;

// ████████ DeleteCrudEngine ████████████████████████████████████████
public declare readonly deleteEngine: DeleteCrudEngine<
// entity (1)
RetsListingMetadataEntity,

// soft_delete (4)
RetsListingMetadataSoftDeleteDto,
RetsListingMetadataSoftDeleteInputWhereDto,
RetsListingMetadataSoftDeleteInputDto,
RetsListingMetadataSoftDeleteOutputDto,

// delete (4)
RetsListingMetadataDeleteDto,
RetsListingMetadataDeleteInputWhereDto,
RetsListingMetadataDeleteInputDto,
RetsListingMetadataDeleteOutputDto,

// restore (4)
RetsListingMetadataRestoreDto,
RetsListingMetadataRestoreInputWhereDto,
RetsListingMetadataRestoreInputDto,
RetsListingMetadataRestoreOutputDto
>;

// ████████ UpsertCrudEngine ████████████████████████████████████████
public declare readonly upsertEngine: UpsertCrudEngine<
// entity (1)
RetsListingMetadataEntity,

// upsert (3)
RetsListingMetadataUpsertDto,
RetsListingMetadataUpsertInputDto,
RetsListingMetadataUpsertOutputDto
>;

// ████████ RemoveCrudEngine ████████████████████████████████████████
public declare readonly removeEngine: RemoveCrudEngine<
// entity (1)
RetsListingMetadataEntity,

// soft_remove (5)
RetsListingMetadataSoftRemoveDto,
RetsListingMetadataSoftRemoveInputWhereDto,
RetsListingMetadataSoftRemoveInputDto,
RetsListingMetadataSoftRemoveOutputAffectedRowsDto,
RetsListingMetadataSoftRemoveOutputDto,

// remove (4)
RetsListingMetadataRemoveDto,
RetsListingMetadataRemoveInputWhereDto,
RetsListingMetadataRemoveInputDto,
RetsListingMetadataRemoveOutputAffectedRowsDto,
RetsListingMetadataRemoveOutputDto,

// recover (5)
RetsListingMetadataRecoverDto,
RetsListingMetadataRecoverInputWhereDto,
RetsListingMetadataRecoverInputDto,
RetsListingMetadataRecoverOutputAffectedRowsDto,
RetsListingMetadataRecoverOutputDto
>;

// ████████ UploadCrudEngine ████████████████████████████████████████
public declare readonly uploadEngine: UploadCrudEngine<
// entity (1)
RetsListingMetadataEntity,

// upload (3)
RetsListingMetadataUploadDto,
RetsListingMetadataUploadInputDto,
RetsListingMetadataUploadOutputDto,

// upload_delete (3)
RetsListingMetadataUploadDeleteDto,
RetsListingMetadataUploadDeleteInputDto,
RetsListingMetadataUploadDeleteOutputDto
>;

constructor(
// data source
protected readonly dataSource: DataSource,

@InjectRepository(RetsListingMetadataEntity)
protected readonly repository: Repository<RetsListingMetadataEntity>,

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
    RetsListingMetadataEntity,
);

this.logService.setContext(RetsListingMetadataFactory.name);

// ████████ initialize FindCrudEngine ██████████████████████████████████████
this.initFindEngine
<
// find (8)
RetsListingMetadataFindDto,
RetsListingMetadataFindInputWhereDto,
RetsListingMetadataFindInputSortOrderDto,
RetsListingMetadataFindInputGroupByDto,
RetsListingMetadataFindInputDto,
RetsListingMetadataFindOutputRowsDto,
FindOutputPaginationDto,
RetsListingMetadataFindOutputDto,

// find_one_by_id (2)
RetsListingMetadataFindOneByIdDto,
RetsListingMetadataFindOneByIdInputDto
>
(
// find (8)
RetsListingMetadataFindDto,
RetsListingMetadataFindInputWhereDto,
RetsListingMetadataFindInputSortOrderDto,
RetsListingMetadataFindInputGroupByDto,
RetsListingMetadataFindInputDto,
RetsListingMetadataFindOutputRowsDto,
FindOutputPaginationDto,
RetsListingMetadataFindOutputDto,

// find_one_by_id (2)
RetsListingMetadataFindOneByIdDto,
RetsListingMetadataFindOneByIdInputDto
);


// ████████ initialize CreateCrudEngine ███████████████████████████████████████
this.initCreateEngine
<
// create (3)
RetsListingMetadataCreateDto,
RetsListingMetadataCreateInputDto,
RetsListingMetadataCreateOutputDto
>
(
// create (3)
RetsListingMetadataCreateDto,
RetsListingMetadataCreateInputDto,
RetsListingMetadataCreateOutputDto
);

// ████████ initialize UpdateCrudEngine ████████████████████████████████████████
this.initUpdateEngine
<
// update (6)
RetsListingMetadataUpdateDto,
RetsListingMetadataUpdateInputWhereDto,
RetsListingMetadataUpdateInputSetsDto,
RetsListingMetadataUpdateInputDto,
RetsListingMetadataUpdateOutputAffectedRowsDto,
RetsListingMetadataUpdateOutputDto
>
(
// update (6)
RetsListingMetadataUpdateDto,
RetsListingMetadataUpdateInputWhereDto,
RetsListingMetadataUpdateInputSetsDto,
RetsListingMetadataUpdateInputDto,
RetsListingMetadataUpdateOutputAffectedRowsDto,
RetsListingMetadataUpdateOutputDto
);


// ████████ initialize DeleteCrudEngine ███████████████████████████████████████████
this.initDeleteEngine
<
// soft_delete (4)
RetsListingMetadataSoftDeleteDto,
RetsListingMetadataSoftDeleteInputWhereDto,
RetsListingMetadataSoftDeleteInputDto,
RetsListingMetadataSoftDeleteOutputDto,

// delete (4)
RetsListingMetadataDeleteDto,
RetsListingMetadataDeleteInputWhereDto,
RetsListingMetadataDeleteInputDto,
RetsListingMetadataDeleteOutputDto,

// restore (4)
RetsListingMetadataRestoreDto,
RetsListingMetadataRestoreInputWhereDto,
RetsListingMetadataRestoreInputDto,
RetsListingMetadataRestoreOutputDto
>
(
// soft_delete (4)
RetsListingMetadataSoftDeleteDto,
RetsListingMetadataSoftDeleteInputWhereDto,
RetsListingMetadataSoftDeleteInputDto,
RetsListingMetadataSoftDeleteOutputDto,

// delete (4)
RetsListingMetadataDeleteDto,
RetsListingMetadataDeleteInputWhereDto,
RetsListingMetadataDeleteInputDto,
RetsListingMetadataDeleteOutputDto,

// restore (4)
RetsListingMetadataRestoreDto,
RetsListingMetadataRestoreInputWhereDto,
RetsListingMetadataRestoreInputDto,
RetsListingMetadataRestoreOutputDto
);



// ████████ initialize UpsertCrudEngine ███████████████████████████████████████████
this.initUpsertEngine
<
// upsert (3)
RetsListingMetadataUpsertDto,
RetsListingMetadataUpsertInputDto,
RetsListingMetadataUpsertOutputDto
>
(
// upsert (3)
RetsListingMetadataUpsertDto,
RetsListingMetadataUpsertInputDto,
RetsListingMetadataUpsertOutputDto
);




// ████████ initialize RemoveCrudEngine ███████████████████████████████████████████
this.initRemoveEngine
<
// soft_remove (5)
RetsListingMetadataSoftRemoveDto,
RetsListingMetadataSoftRemoveInputWhereDto,
RetsListingMetadataSoftRemoveInputDto,
RetsListingMetadataSoftRemoveOutputAffectedRowsDto,
RetsListingMetadataSoftRemoveOutputDto,

// remove (4)
RetsListingMetadataRemoveDto,
RetsListingMetadataRemoveInputWhereDto,
RetsListingMetadataRemoveInputDto,
RetsListingMetadataRemoveOutputAffectedRowsDto,
RetsListingMetadataRemoveOutputDto,

// recover (5)
RetsListingMetadataRecoverDto,
RetsListingMetadataRecoverInputWhereDto,
RetsListingMetadataRecoverInputDto,
RetsListingMetadataRecoverOutputAffectedRowsDto,
RetsListingMetadataRecoverOutputDto
>
(
// soft_remove (5)
RetsListingMetadataSoftRemoveDto,
RetsListingMetadataSoftRemoveInputWhereDto,
RetsListingMetadataSoftRemoveInputDto,
RetsListingMetadataSoftRemoveOutputAffectedRowsDto,
RetsListingMetadataSoftRemoveOutputDto,

// remove (4)
RetsListingMetadataRemoveDto,
RetsListingMetadataRemoveInputWhereDto,
RetsListingMetadataRemoveInputDto,
RetsListingMetadataRemoveOutputAffectedRowsDto,
RetsListingMetadataRemoveOutputDto,

// recover (5)
RetsListingMetadataRecoverDto,
RetsListingMetadataRecoverInputWhereDto,
RetsListingMetadataRecoverInputDto,
RetsListingMetadataRecoverOutputAffectedRowsDto,
RetsListingMetadataRecoverOutputDto
);



// ████████ initialize UploadCrudEngine ███████████████████████████████████████████
this.initUploadEngine
<
// upload (3)
RetsListingMetadataUploadDto,
RetsListingMetadataUploadInputDto,
RetsListingMetadataUploadOutputDto,

// upload_delete (3)
RetsListingMetadataUploadDeleteDto,
RetsListingMetadataUploadDeleteInputDto,
RetsListingMetadataUploadDeleteOutputDto
>
(
// upload (3)
RetsListingMetadataUploadDto,
RetsListingMetadataUploadInputDto,
RetsListingMetadataUploadOutputDto,

// upload_delete (3)
RetsListingMetadataUploadDeleteDto,
RetsListingMetadataUploadDeleteInputDto,
RetsListingMetadataUploadDeleteOutputDto
);


// ████████ initialize ImportExportCrudEngine █████████████████████████████████████

}}