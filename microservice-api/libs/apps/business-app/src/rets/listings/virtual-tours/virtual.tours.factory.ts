import { RetsListingVirtualToursEntity } from "./entities/virtual.tours.entity";
import { Injectable } from "@nestjs/common";
import { DataSource, Repository } from "typeorm";
import { InjectRepository } from "@nestjs/typeorm";
import { ConfService, CreateCrudEngine, CrudFactory, DataValidationPipe, DeleteCrudEngine, FindCrudEngine, FindOutputPaginationDto, LibraryAppService, LogService, RemoveCrudEngine, UpdateCrudEngine, UploadCrudEngine, UpsertCrudEngine  } from "@libs/library-app";
import { RetsListingVirtualToursCreateDto, RetsListingVirtualToursCreateInputDto, RetsListingVirtualToursCreateOutputDto, RetsListingVirtualToursDeleteDto, RetsListingVirtualToursDeleteInputDto, RetsListingVirtualToursDeleteInputWhereDto, RetsListingVirtualToursDeleteOutputDto, RetsListingVirtualToursFindDto, RetsListingVirtualToursFindInputDto, RetsListingVirtualToursFindInputGroupByDto, RetsListingVirtualToursFindInputSortOrderDto, RetsListingVirtualToursFindInputWhereDto, RetsListingVirtualToursFindOneByIdDto, RetsListingVirtualToursFindOneByIdInputDto, RetsListingVirtualToursFindOutputDto, RetsListingVirtualToursFindOutputRowsDto, RetsListingVirtualToursRecoverDto, RetsListingVirtualToursRecoverInputDto, RetsListingVirtualToursRecoverInputWhereDto, RetsListingVirtualToursRecoverOutputDto, RetsListingVirtualToursRecoverOutputAffectedRowsDto, RetsListingVirtualToursRemoveDto, RetsListingVirtualToursRemoveInputDto, RetsListingVirtualToursRemoveInputWhereDto, RetsListingVirtualToursRemoveOutputDto, RetsListingVirtualToursRemoveOutputAffectedRowsDto, RetsListingVirtualToursRestoreDto, RetsListingVirtualToursRestoreInputDto, RetsListingVirtualToursRestoreInputWhereDto, RetsListingVirtualToursRestoreOutputDto, RetsListingVirtualToursSoftDeleteDto, RetsListingVirtualToursSoftDeleteInputDto, RetsListingVirtualToursSoftDeleteInputWhereDto, RetsListingVirtualToursSoftDeleteOutputDto, RetsListingVirtualToursSoftRemoveDto, RetsListingVirtualToursSoftRemoveInputDto, RetsListingVirtualToursSoftRemoveInputWhereDto, RetsListingVirtualToursSoftRemoveOutputDto, RetsListingVirtualToursSoftRemoveOutputAffectedRowsDto, RetsListingVirtualToursUpdateDto, RetsListingVirtualToursUpdateInputDto, RetsListingVirtualToursUpdateInputSetsDto, RetsListingVirtualToursUpdateInputWhereDto, RetsListingVirtualToursUpdateOutputDto, RetsListingVirtualToursUpdateOutputAffectedRowsDto, RetsListingVirtualToursUploadDeleteDto, RetsListingVirtualToursUploadDeleteInputDto, RetsListingVirtualToursUploadDeleteOutputDto, RetsListingVirtualToursUploadDto, RetsListingVirtualToursUploadInputDto, RetsListingVirtualToursUploadOutputDto, RetsListingVirtualToursUpsertDto, RetsListingVirtualToursUpsertInputDto, RetsListingVirtualToursUpsertOutputDto } from "./dto/virtual.tours.dto";
import { SelfGraphqlMicroserviceService } from "@libs/dynamic-app";

@Injectable()
export class RetsListingVirtualToursFactory extends CrudFactory<RetsListingVirtualToursEntity> {

// ████████ FindCrudEngine ████████████████████████████████████████
public declare readonly findEngine: FindCrudEngine<
// entity (1)
RetsListingVirtualToursEntity,

// find (8)
RetsListingVirtualToursFindDto,
RetsListingVirtualToursFindInputWhereDto,
RetsListingVirtualToursFindInputSortOrderDto,
RetsListingVirtualToursFindInputGroupByDto,
RetsListingVirtualToursFindInputDto,
RetsListingVirtualToursFindOutputRowsDto,
FindOutputPaginationDto,
RetsListingVirtualToursFindOutputDto,

// find_one_by_id (2)
RetsListingVirtualToursFindOneByIdDto,
RetsListingVirtualToursFindOneByIdInputDto
>;

// ████████ CreateCrudEngine ████████████████████████████████████████
public declare readonly createEngine: CreateCrudEngine<
// entity (1)
RetsListingVirtualToursEntity,

// create (3)
RetsListingVirtualToursCreateDto,
RetsListingVirtualToursCreateInputDto,
RetsListingVirtualToursCreateOutputDto
>;

// ████████ UpdateCrudEngine ████████████████████████████████████████
public declare readonly updateEngine: UpdateCrudEngine<
// entity (1)
RetsListingVirtualToursEntity,

// update (6)
RetsListingVirtualToursUpdateDto,
RetsListingVirtualToursUpdateInputWhereDto,
RetsListingVirtualToursUpdateInputSetsDto,
RetsListingVirtualToursUpdateInputDto,
RetsListingVirtualToursUpdateOutputAffectedRowsDto,
RetsListingVirtualToursUpdateOutputDto
>;

// ████████ DeleteCrudEngine ████████████████████████████████████████
public declare readonly deleteEngine: DeleteCrudEngine<
// entity (1)
RetsListingVirtualToursEntity,

// soft_delete (4)
RetsListingVirtualToursSoftDeleteDto,
RetsListingVirtualToursSoftDeleteInputWhereDto,
RetsListingVirtualToursSoftDeleteInputDto,
RetsListingVirtualToursSoftDeleteOutputDto,

// delete (4)
RetsListingVirtualToursDeleteDto,
RetsListingVirtualToursDeleteInputWhereDto,
RetsListingVirtualToursDeleteInputDto,
RetsListingVirtualToursDeleteOutputDto,

// restore (4)
RetsListingVirtualToursRestoreDto,
RetsListingVirtualToursRestoreInputWhereDto,
RetsListingVirtualToursRestoreInputDto,
RetsListingVirtualToursRestoreOutputDto
>;

// ████████ UpsertCrudEngine ████████████████████████████████████████
public declare readonly upsertEngine: UpsertCrudEngine<
// entity (1)
RetsListingVirtualToursEntity,

// upsert (3)
RetsListingVirtualToursUpsertDto,
RetsListingVirtualToursUpsertInputDto,
RetsListingVirtualToursUpsertOutputDto
>;

// ████████ RemoveCrudEngine ████████████████████████████████████████
public declare readonly removeEngine: RemoveCrudEngine<
// entity (1)
RetsListingVirtualToursEntity,

// soft_remove (5)
RetsListingVirtualToursSoftRemoveDto,
RetsListingVirtualToursSoftRemoveInputWhereDto,
RetsListingVirtualToursSoftRemoveInputDto,
RetsListingVirtualToursSoftRemoveOutputAffectedRowsDto,
RetsListingVirtualToursSoftRemoveOutputDto,

// remove (4)
RetsListingVirtualToursRemoveDto,
RetsListingVirtualToursRemoveInputWhereDto,
RetsListingVirtualToursRemoveInputDto,
RetsListingVirtualToursRemoveOutputAffectedRowsDto,
RetsListingVirtualToursRemoveOutputDto,

// recover (5)
RetsListingVirtualToursRecoverDto,
RetsListingVirtualToursRecoverInputWhereDto,
RetsListingVirtualToursRecoverInputDto,
RetsListingVirtualToursRecoverOutputAffectedRowsDto,
RetsListingVirtualToursRecoverOutputDto
>;

// ████████ UploadCrudEngine ████████████████████████████████████████
public declare readonly uploadEngine: UploadCrudEngine<
// entity (1)
RetsListingVirtualToursEntity,

// upload (3)
RetsListingVirtualToursUploadDto,
RetsListingVirtualToursUploadInputDto,
RetsListingVirtualToursUploadOutputDto,

// upload_delete (3)
RetsListingVirtualToursUploadDeleteDto,
RetsListingVirtualToursUploadDeleteInputDto,
RetsListingVirtualToursUploadDeleteOutputDto
>;

constructor(
// data source
protected readonly dataSource: DataSource,

@InjectRepository(RetsListingVirtualToursEntity)
protected readonly repository: Repository<RetsListingVirtualToursEntity>,

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
    RetsListingVirtualToursEntity,
);

this.logService.setContext(RetsListingVirtualToursFactory.name);

// ████████ initialize FindCrudEngine ██████████████████████████████████████
this.initFindEngine
<
// find (8)
RetsListingVirtualToursFindDto,
RetsListingVirtualToursFindInputWhereDto,
RetsListingVirtualToursFindInputSortOrderDto,
RetsListingVirtualToursFindInputGroupByDto,
RetsListingVirtualToursFindInputDto,
RetsListingVirtualToursFindOutputRowsDto,
FindOutputPaginationDto,
RetsListingVirtualToursFindOutputDto,

// find_one_by_id (2)
RetsListingVirtualToursFindOneByIdDto,
RetsListingVirtualToursFindOneByIdInputDto
>
(
// find (8)
RetsListingVirtualToursFindDto,
RetsListingVirtualToursFindInputWhereDto,
RetsListingVirtualToursFindInputSortOrderDto,
RetsListingVirtualToursFindInputGroupByDto,
RetsListingVirtualToursFindInputDto,
RetsListingVirtualToursFindOutputRowsDto,
FindOutputPaginationDto,
RetsListingVirtualToursFindOutputDto,

// find_one_by_id (2)
RetsListingVirtualToursFindOneByIdDto,
RetsListingVirtualToursFindOneByIdInputDto
);


// ████████ initialize CreateCrudEngine ███████████████████████████████████████
this.initCreateEngine
<
// create (3)
RetsListingVirtualToursCreateDto,
RetsListingVirtualToursCreateInputDto,
RetsListingVirtualToursCreateOutputDto
>
(
// create (3)
RetsListingVirtualToursCreateDto,
RetsListingVirtualToursCreateInputDto,
RetsListingVirtualToursCreateOutputDto
);

// ████████ initialize UpdateCrudEngine ████████████████████████████████████████
this.initUpdateEngine
<
// update (6)
RetsListingVirtualToursUpdateDto,
RetsListingVirtualToursUpdateInputWhereDto,
RetsListingVirtualToursUpdateInputSetsDto,
RetsListingVirtualToursUpdateInputDto,
RetsListingVirtualToursUpdateOutputAffectedRowsDto,
RetsListingVirtualToursUpdateOutputDto
>
(
// update (6)
RetsListingVirtualToursUpdateDto,
RetsListingVirtualToursUpdateInputWhereDto,
RetsListingVirtualToursUpdateInputSetsDto,
RetsListingVirtualToursUpdateInputDto,
RetsListingVirtualToursUpdateOutputAffectedRowsDto,
RetsListingVirtualToursUpdateOutputDto
);


// ████████ initialize DeleteCrudEngine ███████████████████████████████████████████
this.initDeleteEngine
<
// soft_delete (4)
RetsListingVirtualToursSoftDeleteDto,
RetsListingVirtualToursSoftDeleteInputWhereDto,
RetsListingVirtualToursSoftDeleteInputDto,
RetsListingVirtualToursSoftDeleteOutputDto,

// delete (4)
RetsListingVirtualToursDeleteDto,
RetsListingVirtualToursDeleteInputWhereDto,
RetsListingVirtualToursDeleteInputDto,
RetsListingVirtualToursDeleteOutputDto,

// restore (4)
RetsListingVirtualToursRestoreDto,
RetsListingVirtualToursRestoreInputWhereDto,
RetsListingVirtualToursRestoreInputDto,
RetsListingVirtualToursRestoreOutputDto
>
(
// soft_delete (4)
RetsListingVirtualToursSoftDeleteDto,
RetsListingVirtualToursSoftDeleteInputWhereDto,
RetsListingVirtualToursSoftDeleteInputDto,
RetsListingVirtualToursSoftDeleteOutputDto,

// delete (4)
RetsListingVirtualToursDeleteDto,
RetsListingVirtualToursDeleteInputWhereDto,
RetsListingVirtualToursDeleteInputDto,
RetsListingVirtualToursDeleteOutputDto,

// restore (4)
RetsListingVirtualToursRestoreDto,
RetsListingVirtualToursRestoreInputWhereDto,
RetsListingVirtualToursRestoreInputDto,
RetsListingVirtualToursRestoreOutputDto
);



// ████████ initialize UpsertCrudEngine ███████████████████████████████████████████
this.initUpsertEngine
<
// upsert (3)
RetsListingVirtualToursUpsertDto,
RetsListingVirtualToursUpsertInputDto,
RetsListingVirtualToursUpsertOutputDto
>
(
// upsert (3)
RetsListingVirtualToursUpsertDto,
RetsListingVirtualToursUpsertInputDto,
RetsListingVirtualToursUpsertOutputDto
);




// ████████ initialize RemoveCrudEngine ███████████████████████████████████████████
this.initRemoveEngine
<
// soft_remove (5)
RetsListingVirtualToursSoftRemoveDto,
RetsListingVirtualToursSoftRemoveInputWhereDto,
RetsListingVirtualToursSoftRemoveInputDto,
RetsListingVirtualToursSoftRemoveOutputAffectedRowsDto,
RetsListingVirtualToursSoftRemoveOutputDto,

// remove (4)
RetsListingVirtualToursRemoveDto,
RetsListingVirtualToursRemoveInputWhereDto,
RetsListingVirtualToursRemoveInputDto,
RetsListingVirtualToursRemoveOutputAffectedRowsDto,
RetsListingVirtualToursRemoveOutputDto,

// recover (5)
RetsListingVirtualToursRecoverDto,
RetsListingVirtualToursRecoverInputWhereDto,
RetsListingVirtualToursRecoverInputDto,
RetsListingVirtualToursRecoverOutputAffectedRowsDto,
RetsListingVirtualToursRecoverOutputDto
>
(
// soft_remove (5)
RetsListingVirtualToursSoftRemoveDto,
RetsListingVirtualToursSoftRemoveInputWhereDto,
RetsListingVirtualToursSoftRemoveInputDto,
RetsListingVirtualToursSoftRemoveOutputAffectedRowsDto,
RetsListingVirtualToursSoftRemoveOutputDto,

// remove (4)
RetsListingVirtualToursRemoveDto,
RetsListingVirtualToursRemoveInputWhereDto,
RetsListingVirtualToursRemoveInputDto,
RetsListingVirtualToursRemoveOutputAffectedRowsDto,
RetsListingVirtualToursRemoveOutputDto,

// recover (5)
RetsListingVirtualToursRecoverDto,
RetsListingVirtualToursRecoverInputWhereDto,
RetsListingVirtualToursRecoverInputDto,
RetsListingVirtualToursRecoverOutputAffectedRowsDto,
RetsListingVirtualToursRecoverOutputDto
);



// ████████ initialize UploadCrudEngine ███████████████████████████████████████████
this.initUploadEngine
<
// upload (3)
RetsListingVirtualToursUploadDto,
RetsListingVirtualToursUploadInputDto,
RetsListingVirtualToursUploadOutputDto,

// upload_delete (3)
RetsListingVirtualToursUploadDeleteDto,
RetsListingVirtualToursUploadDeleteInputDto,
RetsListingVirtualToursUploadDeleteOutputDto
>
(
// upload (3)
RetsListingVirtualToursUploadDto,
RetsListingVirtualToursUploadInputDto,
RetsListingVirtualToursUploadOutputDto,

// upload_delete (3)
RetsListingVirtualToursUploadDeleteDto,
RetsListingVirtualToursUploadDeleteInputDto,
RetsListingVirtualToursUploadDeleteOutputDto
);


// ████████ initialize ImportExportCrudEngine █████████████████████████████████████

}}