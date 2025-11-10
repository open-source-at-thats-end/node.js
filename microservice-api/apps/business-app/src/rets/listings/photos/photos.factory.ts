import { RetsListingPhotosEntity } from "./entities/photos.entity";
import { Injectable } from "@nestjs/common";
import { DataSource, Repository } from "typeorm";
import { InjectRepository } from "@nestjs/typeorm";
import { ConfService, CreateCrudEngine, CrudFactory, DataValidationPipe, DeleteCrudEngine, FindCrudEngine, FindOutputPaginationDto, LibraryAppService, LogService, RemoveCrudEngine, UpdateCrudEngine, UploadCrudEngine, UpsertCrudEngine  } from "@libs/library-app";
import { RetsListingPhotosCreateDto, RetsListingPhotosCreateInputDto, RetsListingPhotosCreateOutputDto, RetsListingPhotosDeleteDto, RetsListingPhotosDeleteInputDto, RetsListingPhotosDeleteInputWhereDto, RetsListingPhotosDeleteOutputDto, RetsListingPhotosFindDto, RetsListingPhotosFindInputDto, RetsListingPhotosFindInputGroupByDto, RetsListingPhotosFindInputSortOrderDto, RetsListingPhotosFindInputWhereDto, RetsListingPhotosFindOneByIdDto, RetsListingPhotosFindOneByIdInputDto, RetsListingPhotosFindOutputDto, RetsListingPhotosFindOutputRowsDto, RetsListingPhotosRecoverDto, RetsListingPhotosRecoverInputDto, RetsListingPhotosRecoverInputWhereDto, RetsListingPhotosRecoverOutputDto, RetsListingPhotosRecoverOutputAffectedRowsDto, RetsListingPhotosRemoveDto, RetsListingPhotosRemoveInputDto, RetsListingPhotosRemoveInputWhereDto, RetsListingPhotosRemoveOutputDto, RetsListingPhotosRemoveOutputAffectedRowsDto, RetsListingPhotosRestoreDto, RetsListingPhotosRestoreInputDto, RetsListingPhotosRestoreInputWhereDto, RetsListingPhotosRestoreOutputDto, RetsListingPhotosSoftDeleteDto, RetsListingPhotosSoftDeleteInputDto, RetsListingPhotosSoftDeleteInputWhereDto, RetsListingPhotosSoftDeleteOutputDto, RetsListingPhotosSoftRemoveDto, RetsListingPhotosSoftRemoveInputDto, RetsListingPhotosSoftRemoveInputWhereDto, RetsListingPhotosSoftRemoveOutputDto, RetsListingPhotosSoftRemoveOutputAffectedRowsDto, RetsListingPhotosUpdateDto, RetsListingPhotosUpdateInputDto, RetsListingPhotosUpdateInputSetsDto, RetsListingPhotosUpdateInputWhereDto, RetsListingPhotosUpdateOutputDto, RetsListingPhotosUpdateOutputAffectedRowsDto, RetsListingPhotosUploadDeleteDto, RetsListingPhotosUploadDeleteInputDto, RetsListingPhotosUploadDeleteOutputDto, RetsListingPhotosUploadDto, RetsListingPhotosUploadInputDto, RetsListingPhotosUploadOutputDto, RetsListingPhotosUpsertDto, RetsListingPhotosUpsertInputDto, RetsListingPhotosUpsertOutputDto } from "./dto/photos.dto";
import { SelfGraphqlMicroserviceService } from "@libs/dynamic-app";

@Injectable()
export class RetsListingPhotosFactory extends CrudFactory<RetsListingPhotosEntity> {

// ████████ FindCrudEngine ████████████████████████████████████████
public declare readonly findEngine: FindCrudEngine<
// entity (1)
RetsListingPhotosEntity,

// find (8)
RetsListingPhotosFindDto,
RetsListingPhotosFindInputWhereDto,
RetsListingPhotosFindInputSortOrderDto,
RetsListingPhotosFindInputGroupByDto,
RetsListingPhotosFindInputDto,
RetsListingPhotosFindOutputRowsDto,
FindOutputPaginationDto,
RetsListingPhotosFindOutputDto,

// find_one_by_id (2)
RetsListingPhotosFindOneByIdDto,
RetsListingPhotosFindOneByIdInputDto
>;

// ████████ CreateCrudEngine ████████████████████████████████████████
public declare readonly createEngine: CreateCrudEngine<
// entity (1)
RetsListingPhotosEntity,

// create (3)
RetsListingPhotosCreateDto,
RetsListingPhotosCreateInputDto,
RetsListingPhotosCreateOutputDto
>;

// ████████ UpdateCrudEngine ████████████████████████████████████████
public declare readonly updateEngine: UpdateCrudEngine<
// entity (1)
RetsListingPhotosEntity,

// update (6)
RetsListingPhotosUpdateDto,
RetsListingPhotosUpdateInputWhereDto,
RetsListingPhotosUpdateInputSetsDto,
RetsListingPhotosUpdateInputDto,
RetsListingPhotosUpdateOutputAffectedRowsDto,
RetsListingPhotosUpdateOutputDto
>;

// ████████ DeleteCrudEngine ████████████████████████████████████████
public declare readonly deleteEngine: DeleteCrudEngine<
// entity (1)
RetsListingPhotosEntity,

// soft_delete (4)
RetsListingPhotosSoftDeleteDto,
RetsListingPhotosSoftDeleteInputWhereDto,
RetsListingPhotosSoftDeleteInputDto,
RetsListingPhotosSoftDeleteOutputDto,

// delete (4)
RetsListingPhotosDeleteDto,
RetsListingPhotosDeleteInputWhereDto,
RetsListingPhotosDeleteInputDto,
RetsListingPhotosDeleteOutputDto,

// restore (4)
RetsListingPhotosRestoreDto,
RetsListingPhotosRestoreInputWhereDto,
RetsListingPhotosRestoreInputDto,
RetsListingPhotosRestoreOutputDto
>;

// ████████ UpsertCrudEngine ████████████████████████████████████████
public declare readonly upsertEngine: UpsertCrudEngine<
// entity (1)
RetsListingPhotosEntity,

// upsert (3)
RetsListingPhotosUpsertDto,
RetsListingPhotosUpsertInputDto,
RetsListingPhotosUpsertOutputDto
>;

// ████████ RemoveCrudEngine ████████████████████████████████████████
public declare readonly removeEngine: RemoveCrudEngine<
// entity (1)
RetsListingPhotosEntity,

// soft_remove (5)
RetsListingPhotosSoftRemoveDto,
RetsListingPhotosSoftRemoveInputWhereDto,
RetsListingPhotosSoftRemoveInputDto,
RetsListingPhotosSoftRemoveOutputAffectedRowsDto,
RetsListingPhotosSoftRemoveOutputDto,

// remove (4)
RetsListingPhotosRemoveDto,
RetsListingPhotosRemoveInputWhereDto,
RetsListingPhotosRemoveInputDto,
RetsListingPhotosRemoveOutputAffectedRowsDto,
RetsListingPhotosRemoveOutputDto,

// recover (5)
RetsListingPhotosRecoverDto,
RetsListingPhotosRecoverInputWhereDto,
RetsListingPhotosRecoverInputDto,
RetsListingPhotosRecoverOutputAffectedRowsDto,
RetsListingPhotosRecoverOutputDto
>;

// ████████ UploadCrudEngine ████████████████████████████████████████
public declare readonly uploadEngine: UploadCrudEngine<
// entity (1)
RetsListingPhotosEntity,

// upload (3)
RetsListingPhotosUploadDto,
RetsListingPhotosUploadInputDto,
RetsListingPhotosUploadOutputDto,

// upload_delete (3)
RetsListingPhotosUploadDeleteDto,
RetsListingPhotosUploadDeleteInputDto,
RetsListingPhotosUploadDeleteOutputDto
>;

constructor(
// data source
protected readonly dataSource: DataSource,

@InjectRepository(RetsListingPhotosEntity)
protected readonly repository: Repository<RetsListingPhotosEntity>,

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
    RetsListingPhotosEntity,
);

this.logService.setContext(RetsListingPhotosFactory.name);

// ████████ initialize FindCrudEngine ██████████████████████████████████████
this.initFindEngine
<
// find (8)
RetsListingPhotosFindDto,
RetsListingPhotosFindInputWhereDto,
RetsListingPhotosFindInputSortOrderDto,
RetsListingPhotosFindInputGroupByDto,
RetsListingPhotosFindInputDto,
RetsListingPhotosFindOutputRowsDto,
FindOutputPaginationDto,
RetsListingPhotosFindOutputDto,

// find_one_by_id (2)
RetsListingPhotosFindOneByIdDto,
RetsListingPhotosFindOneByIdInputDto
>
(
// find (8)
RetsListingPhotosFindDto,
RetsListingPhotosFindInputWhereDto,
RetsListingPhotosFindInputSortOrderDto,
RetsListingPhotosFindInputGroupByDto,
RetsListingPhotosFindInputDto,
RetsListingPhotosFindOutputRowsDto,
FindOutputPaginationDto,
RetsListingPhotosFindOutputDto,

// find_one_by_id (2)
RetsListingPhotosFindOneByIdDto,
RetsListingPhotosFindOneByIdInputDto
);


// ████████ initialize CreateCrudEngine ███████████████████████████████████████
this.initCreateEngine
<
// create (3)
RetsListingPhotosCreateDto,
RetsListingPhotosCreateInputDto,
RetsListingPhotosCreateOutputDto
>
(
// create (3)
RetsListingPhotosCreateDto,
RetsListingPhotosCreateInputDto,
RetsListingPhotosCreateOutputDto
);

// ████████ initialize UpdateCrudEngine ████████████████████████████████████████
this.initUpdateEngine
<
// update (6)
RetsListingPhotosUpdateDto,
RetsListingPhotosUpdateInputWhereDto,
RetsListingPhotosUpdateInputSetsDto,
RetsListingPhotosUpdateInputDto,
RetsListingPhotosUpdateOutputAffectedRowsDto,
RetsListingPhotosUpdateOutputDto
>
(
// update (6)
RetsListingPhotosUpdateDto,
RetsListingPhotosUpdateInputWhereDto,
RetsListingPhotosUpdateInputSetsDto,
RetsListingPhotosUpdateInputDto,
RetsListingPhotosUpdateOutputAffectedRowsDto,
RetsListingPhotosUpdateOutputDto
);


// ████████ initialize DeleteCrudEngine ███████████████████████████████████████████
this.initDeleteEngine
<
// soft_delete (4)
RetsListingPhotosSoftDeleteDto,
RetsListingPhotosSoftDeleteInputWhereDto,
RetsListingPhotosSoftDeleteInputDto,
RetsListingPhotosSoftDeleteOutputDto,

// delete (4)
RetsListingPhotosDeleteDto,
RetsListingPhotosDeleteInputWhereDto,
RetsListingPhotosDeleteInputDto,
RetsListingPhotosDeleteOutputDto,

// restore (4)
RetsListingPhotosRestoreDto,
RetsListingPhotosRestoreInputWhereDto,
RetsListingPhotosRestoreInputDto,
RetsListingPhotosRestoreOutputDto
>
(
// soft_delete (4)
RetsListingPhotosSoftDeleteDto,
RetsListingPhotosSoftDeleteInputWhereDto,
RetsListingPhotosSoftDeleteInputDto,
RetsListingPhotosSoftDeleteOutputDto,

// delete (4)
RetsListingPhotosDeleteDto,
RetsListingPhotosDeleteInputWhereDto,
RetsListingPhotosDeleteInputDto,
RetsListingPhotosDeleteOutputDto,

// restore (4)
RetsListingPhotosRestoreDto,
RetsListingPhotosRestoreInputWhereDto,
RetsListingPhotosRestoreInputDto,
RetsListingPhotosRestoreOutputDto
);



// ████████ initialize UpsertCrudEngine ███████████████████████████████████████████
this.initUpsertEngine
<
// upsert (3)
RetsListingPhotosUpsertDto,
RetsListingPhotosUpsertInputDto,
RetsListingPhotosUpsertOutputDto
>
(
// upsert (3)
RetsListingPhotosUpsertDto,
RetsListingPhotosUpsertInputDto,
RetsListingPhotosUpsertOutputDto
);




// ████████ initialize RemoveCrudEngine ███████████████████████████████████████████
this.initRemoveEngine
<
// soft_remove (5)
RetsListingPhotosSoftRemoveDto,
RetsListingPhotosSoftRemoveInputWhereDto,
RetsListingPhotosSoftRemoveInputDto,
RetsListingPhotosSoftRemoveOutputAffectedRowsDto,
RetsListingPhotosSoftRemoveOutputDto,

// remove (4)
RetsListingPhotosRemoveDto,
RetsListingPhotosRemoveInputWhereDto,
RetsListingPhotosRemoveInputDto,
RetsListingPhotosRemoveOutputAffectedRowsDto,
RetsListingPhotosRemoveOutputDto,

// recover (5)
RetsListingPhotosRecoverDto,
RetsListingPhotosRecoverInputWhereDto,
RetsListingPhotosRecoverInputDto,
RetsListingPhotosRecoverOutputAffectedRowsDto,
RetsListingPhotosRecoverOutputDto
>
(
// soft_remove (5)
RetsListingPhotosSoftRemoveDto,
RetsListingPhotosSoftRemoveInputWhereDto,
RetsListingPhotosSoftRemoveInputDto,
RetsListingPhotosSoftRemoveOutputAffectedRowsDto,
RetsListingPhotosSoftRemoveOutputDto,

// remove (4)
RetsListingPhotosRemoveDto,
RetsListingPhotosRemoveInputWhereDto,
RetsListingPhotosRemoveInputDto,
RetsListingPhotosRemoveOutputAffectedRowsDto,
RetsListingPhotosRemoveOutputDto,

// recover (5)
RetsListingPhotosRecoverDto,
RetsListingPhotosRecoverInputWhereDto,
RetsListingPhotosRecoverInputDto,
RetsListingPhotosRecoverOutputAffectedRowsDto,
RetsListingPhotosRecoverOutputDto
);



// ████████ initialize UploadCrudEngine ███████████████████████████████████████████
this.initUploadEngine
<
// upload (3)
RetsListingPhotosUploadDto,
RetsListingPhotosUploadInputDto,
RetsListingPhotosUploadOutputDto,

// upload_delete (3)
RetsListingPhotosUploadDeleteDto,
RetsListingPhotosUploadDeleteInputDto,
RetsListingPhotosUploadDeleteOutputDto
>
(
// upload (3)
RetsListingPhotosUploadDto,
RetsListingPhotosUploadInputDto,
RetsListingPhotosUploadOutputDto,

// upload_delete (3)
RetsListingPhotosUploadDeleteDto,
RetsListingPhotosUploadDeleteInputDto,
RetsListingPhotosUploadDeleteOutputDto
);


// ████████ initialize ImportExportCrudEngine █████████████████████████████████████

}}