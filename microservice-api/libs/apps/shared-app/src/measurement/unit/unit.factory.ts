import { MeasurementUnitEntity } from "./entities/unit.entity";
import { Injectable } from "@nestjs/common";
import { DataSource, Repository } from "typeorm";
import { InjectRepository } from "@nestjs/typeorm";
import { ConfService, CreateCrudEngine, CrudFactory, DataValidationPipe, DeleteCrudEngine, FindCrudEngine, FindOutputPaginationDto, LibraryAppService, LogService, RemoveCrudEngine, UpdateCrudEngine, UploadCrudEngine, UpsertCrudEngine } from "@libs/library-app";
import { SelfGraphqlMicroserviceService } from '@libs/dynamic-app';
import { MeasurementUnitCreateDto, MeasurementUnitCreateInputDto, MeasurementUnitCreateOutputDto, MeasurementUnitDeleteDto, MeasurementUnitDeleteInputDto, MeasurementUnitDeleteInputWhereDto, MeasurementUnitDeleteOutputDto, MeasurementUnitFindDto, MeasurementUnitFindInputDto, MeasurementUnitFindInputGroupByDto, MeasurementUnitFindInputSortOrderDto, MeasurementUnitFindInputWhereDto, MeasurementUnitFindOneByIdDto, MeasurementUnitFindOneByIdInputDto, MeasurementUnitFindOutputDto, MeasurementUnitFindOutputRowsDto, MeasurementUnitRecoverDto, MeasurementUnitRecoverInputDto, MeasurementUnitRecoverInputWhereDto, MeasurementUnitRecoverOutputDto, MeasurementUnitRecoverOutputAffectedRowsDto, MeasurementUnitRemoveDto, MeasurementUnitRemoveInputDto, MeasurementUnitRemoveInputWhereDto, MeasurementUnitRemoveOutputDto, MeasurementUnitRemoveOutputAffectedRowsDto, MeasurementUnitRestoreDto, MeasurementUnitRestoreInputDto, MeasurementUnitRestoreInputWhereDto, MeasurementUnitRestoreOutputDto, MeasurementUnitSoftDeleteDto, MeasurementUnitSoftDeleteInputDto, MeasurementUnitSoftDeleteInputWhereDto, MeasurementUnitSoftDeleteOutputDto, MeasurementUnitSoftRemoveDto, MeasurementUnitSoftRemoveInputDto, MeasurementUnitSoftRemoveInputWhereDto, MeasurementUnitSoftRemoveOutputDto, MeasurementUnitSoftRemoveOutputAffectedRowsDto, MeasurementUnitUpdateDto, MeasurementUnitUpdateInputDto, MeasurementUnitUpdateInputSetsDto, MeasurementUnitUpdateInputWhereDto, MeasurementUnitUpdateOutputDto, MeasurementUnitUpdateOutputAffectedRowsDto, MeasurementUnitUploadDeleteDto, MeasurementUnitUploadDeleteInputDto, MeasurementUnitUploadDeleteOutputDto, MeasurementUnitUploadDto, MeasurementUnitUploadInputDto, MeasurementUnitUploadOutputDto, MeasurementUnitUpsertDto, MeasurementUnitUpsertInputDto, MeasurementUnitUpsertOutputDto } from "./dto/unit.dto";

@Injectable()
export class MeasurementUnitFactory extends CrudFactory<MeasurementUnitEntity> {

// ████████ FindCrudEngine ████████████████████████████████████████
public declare readonly findEngine: FindCrudEngine<
// entity (1)
MeasurementUnitEntity,

// find (8)
MeasurementUnitFindDto,
MeasurementUnitFindInputWhereDto,
MeasurementUnitFindInputSortOrderDto,
MeasurementUnitFindInputGroupByDto,
MeasurementUnitFindInputDto,
MeasurementUnitFindOutputRowsDto,
FindOutputPaginationDto,
MeasurementUnitFindOutputDto,

// find_one_by_id (2)
MeasurementUnitFindOneByIdDto,
MeasurementUnitFindOneByIdInputDto
>;

// ████████ CreateCrudEngine ████████████████████████████████████████
public declare readonly createEngine: CreateCrudEngine<
// entity (1)
MeasurementUnitEntity,

// create (3)
MeasurementUnitCreateDto,
MeasurementUnitCreateInputDto,
MeasurementUnitCreateOutputDto
>;

// ████████ UpdateCrudEngine ████████████████████████████████████████
public declare readonly updateEngine: UpdateCrudEngine<
// entity (1)
MeasurementUnitEntity,

// update (6)
MeasurementUnitUpdateDto,
MeasurementUnitUpdateInputWhereDto,
MeasurementUnitUpdateInputSetsDto,
MeasurementUnitUpdateInputDto,
MeasurementUnitUpdateOutputAffectedRowsDto,
MeasurementUnitUpdateOutputDto
>;

// ████████ DeleteCrudEngine ████████████████████████████████████████
public declare readonly deleteEngine: DeleteCrudEngine<
// entity (1)
MeasurementUnitEntity,

// soft_delete (4)
MeasurementUnitSoftDeleteDto,
MeasurementUnitSoftDeleteInputWhereDto,
MeasurementUnitSoftDeleteInputDto,
MeasurementUnitSoftDeleteOutputDto,

// delete (4)
MeasurementUnitDeleteDto,
MeasurementUnitDeleteInputWhereDto,
MeasurementUnitDeleteInputDto,
MeasurementUnitDeleteOutputDto,

// restore (4)
MeasurementUnitRestoreDto,
MeasurementUnitRestoreInputWhereDto,
MeasurementUnitRestoreInputDto,
MeasurementUnitRestoreOutputDto
>;

// ████████ UpsertCrudEngine ████████████████████████████████████████
public declare readonly upsertEngine: UpsertCrudEngine<
// entity (1)
MeasurementUnitEntity,

// upsert (3)
MeasurementUnitUpsertDto,
MeasurementUnitUpsertInputDto,
MeasurementUnitUpsertOutputDto
>;

// ████████ RemoveCrudEngine ████████████████████████████████████████
public declare readonly removeEngine: RemoveCrudEngine<
// entity (1)
MeasurementUnitEntity,

// soft_remove (5)
MeasurementUnitSoftRemoveDto,
MeasurementUnitSoftRemoveInputWhereDto,
MeasurementUnitSoftRemoveInputDto,
MeasurementUnitSoftRemoveOutputAffectedRowsDto,
MeasurementUnitSoftRemoveOutputDto,

// remove (4)
MeasurementUnitRemoveDto,
MeasurementUnitRemoveInputWhereDto,
MeasurementUnitRemoveInputDto,
MeasurementUnitRemoveOutputAffectedRowsDto,
MeasurementUnitRemoveOutputDto,

// recover (5)
MeasurementUnitRecoverDto,
MeasurementUnitRecoverInputWhereDto,
MeasurementUnitRecoverInputDto,
MeasurementUnitRecoverOutputAffectedRowsDto,
MeasurementUnitRecoverOutputDto
>;

// ████████ UploadCrudEngine ████████████████████████████████████████
public declare readonly uploadEngine: UploadCrudEngine<
// entity (1)
MeasurementUnitEntity,

// upload (3)
MeasurementUnitUploadDto,
MeasurementUnitUploadInputDto,
MeasurementUnitUploadOutputDto,

// upload_delete (3)
MeasurementUnitUploadDeleteDto,
MeasurementUnitUploadDeleteInputDto,
MeasurementUnitUploadDeleteOutputDto
>;

constructor(
// data source
protected readonly dataSource: DataSource,

@InjectRepository(MeasurementUnitEntity)
protected readonly repository: Repository<MeasurementUnitEntity>,

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
    MeasurementUnitEntity,
);

this.logService.setContext(MeasurementUnitFactory.name);

// ████████ initialize FindCrudEngine ██████████████████████████████████████
this.initFindEngine
<
// find (8)
MeasurementUnitFindDto,
MeasurementUnitFindInputWhereDto,
MeasurementUnitFindInputSortOrderDto,
MeasurementUnitFindInputGroupByDto,
MeasurementUnitFindInputDto,
MeasurementUnitFindOutputRowsDto,
FindOutputPaginationDto,
MeasurementUnitFindOutputDto,

// find_one_by_id (2)
MeasurementUnitFindOneByIdDto,
MeasurementUnitFindOneByIdInputDto
>
(
// find (8)
MeasurementUnitFindDto,
MeasurementUnitFindInputWhereDto,
MeasurementUnitFindInputSortOrderDto,
MeasurementUnitFindInputGroupByDto,
MeasurementUnitFindInputDto,
MeasurementUnitFindOutputRowsDto,
FindOutputPaginationDto,
MeasurementUnitFindOutputDto,

// find_one_by_id (2)
MeasurementUnitFindOneByIdDto,
MeasurementUnitFindOneByIdInputDto
);


// ████████ initialize CreateCrudEngine ███████████████████████████████████████
this.initCreateEngine
<
// create (3)
MeasurementUnitCreateDto,
MeasurementUnitCreateInputDto,
MeasurementUnitCreateOutputDto
>
(
// create (3)
MeasurementUnitCreateDto,
MeasurementUnitCreateInputDto,
MeasurementUnitCreateOutputDto
);

// ████████ initialize UpdateCrudEngine ████████████████████████████████████████
this.initUpdateEngine
<
// update (6)
MeasurementUnitUpdateDto,
MeasurementUnitUpdateInputWhereDto,
MeasurementUnitUpdateInputSetsDto,
MeasurementUnitUpdateInputDto,
MeasurementUnitUpdateOutputAffectedRowsDto,
MeasurementUnitUpdateOutputDto
>
(
// update (6)
MeasurementUnitUpdateDto,
MeasurementUnitUpdateInputWhereDto,
MeasurementUnitUpdateInputSetsDto,
MeasurementUnitUpdateInputDto,
MeasurementUnitUpdateOutputAffectedRowsDto,
MeasurementUnitUpdateOutputDto
);


// ████████ initialize DeleteCrudEngine ███████████████████████████████████████████
this.initDeleteEngine
<
// soft_delete (4)
MeasurementUnitSoftDeleteDto,
MeasurementUnitSoftDeleteInputWhereDto,
MeasurementUnitSoftDeleteInputDto,
MeasurementUnitSoftDeleteOutputDto,

// delete (4)
MeasurementUnitDeleteDto,
MeasurementUnitDeleteInputWhereDto,
MeasurementUnitDeleteInputDto,
MeasurementUnitDeleteOutputDto,

// restore (4)
MeasurementUnitRestoreDto,
MeasurementUnitRestoreInputWhereDto,
MeasurementUnitRestoreInputDto,
MeasurementUnitRestoreOutputDto
>
(
// soft_delete (4)
MeasurementUnitSoftDeleteDto,
MeasurementUnitSoftDeleteInputWhereDto,
MeasurementUnitSoftDeleteInputDto,
MeasurementUnitSoftDeleteOutputDto,

// delete (4)
MeasurementUnitDeleteDto,
MeasurementUnitDeleteInputWhereDto,
MeasurementUnitDeleteInputDto,
MeasurementUnitDeleteOutputDto,

// restore (4)
MeasurementUnitRestoreDto,
MeasurementUnitRestoreInputWhereDto,
MeasurementUnitRestoreInputDto,
MeasurementUnitRestoreOutputDto
);



// ████████ initialize UpsertCrudEngine ███████████████████████████████████████████
this.initUpsertEngine
<
// upsert (3)
MeasurementUnitUpsertDto,
MeasurementUnitUpsertInputDto,
MeasurementUnitUpsertOutputDto
>
(
// upsert (3)
MeasurementUnitUpsertDto,
MeasurementUnitUpsertInputDto,
MeasurementUnitUpsertOutputDto
);




// ████████ initialize RemoveCrudEngine ███████████████████████████████████████████
this.initRemoveEngine
<
// soft_remove (5)
MeasurementUnitSoftRemoveDto,
MeasurementUnitSoftRemoveInputWhereDto,
MeasurementUnitSoftRemoveInputDto,
MeasurementUnitSoftRemoveOutputAffectedRowsDto,
MeasurementUnitSoftRemoveOutputDto,

// remove (4)
MeasurementUnitRemoveDto,
MeasurementUnitRemoveInputWhereDto,
MeasurementUnitRemoveInputDto,
MeasurementUnitRemoveOutputAffectedRowsDto,
MeasurementUnitRemoveOutputDto,

// recover (5)
MeasurementUnitRecoverDto,
MeasurementUnitRecoverInputWhereDto,
MeasurementUnitRecoverInputDto,
MeasurementUnitRecoverOutputAffectedRowsDto,
MeasurementUnitRecoverOutputDto
>
(
// soft_remove (5)
MeasurementUnitSoftRemoveDto,
MeasurementUnitSoftRemoveInputWhereDto,
MeasurementUnitSoftRemoveInputDto,
MeasurementUnitSoftRemoveOutputAffectedRowsDto,
MeasurementUnitSoftRemoveOutputDto,

// remove (4)
MeasurementUnitRemoveDto,
MeasurementUnitRemoveInputWhereDto,
MeasurementUnitRemoveInputDto,
MeasurementUnitRemoveOutputAffectedRowsDto,
MeasurementUnitRemoveOutputDto,

// recover (5)
MeasurementUnitRecoverDto,
MeasurementUnitRecoverInputWhereDto,
MeasurementUnitRecoverInputDto,
MeasurementUnitRecoverOutputAffectedRowsDto,
MeasurementUnitRecoverOutputDto
);



// ████████ initialize UploadCrudEngine ███████████████████████████████████████████
this.initUploadEngine
<
// upload (3)
MeasurementUnitUploadDto,
MeasurementUnitUploadInputDto,
MeasurementUnitUploadOutputDto,

// upload_delete (3)
MeasurementUnitUploadDeleteDto,
MeasurementUnitUploadDeleteInputDto,
MeasurementUnitUploadDeleteOutputDto
>
(
// upload (3)
MeasurementUnitUploadDto,
MeasurementUnitUploadInputDto,
MeasurementUnitUploadOutputDto,

// upload_delete (3)
MeasurementUnitUploadDeleteDto,
MeasurementUnitUploadDeleteInputDto,
MeasurementUnitUploadDeleteOutputDto
);


// ████████ initialize ImportExportCrudEngine █████████████████████████████████████

}

}