import { RegionEntity } from "./entities/region.entity";
import { Injectable } from "@nestjs/common";
import { DataSource, Repository } from "typeorm";
import { InjectRepository } from "@nestjs/typeorm";
import { ConfService, CreateCrudEngine, CrudFactory, DataValidationPipe, DeleteCrudEngine, FindCrudEngine, FindOutputPaginationDto, LibraryAppService, LogService, RemoveCrudEngine, UpdateCrudEngine, UploadCrudEngine, UpsertCrudEngine } from "@libs/library-app";
import { RegionCreateDto, RegionCreateInputDto, RegionCreateOutputDto, RegionDeleteDto, RegionDeleteInputDto, RegionDeleteInputWhereDto, RegionDeleteOutputDto, RegionFindDto, RegionFindInputDto, RegionFindInputGroupByDto, RegionFindInputSortOrderDto, RegionFindInputWhereDto, RegionFindOneByIdDto, RegionFindOneByIdInputDto, RegionFindOutputDto, RegionFindOutputRowsDto, RegionRecoverDto, RegionRecoverInputDto, RegionRecoverInputWhereDto, RegionRecoverOutputDto, RegionRecoverOutputAffectedRowsDto, RegionRemoveDto, RegionRemoveInputDto, RegionRemoveInputWhereDto, RegionRemoveOutputDto, RegionRemoveOutputAffectedRowsDto, RegionRestoreDto, RegionRestoreInputDto, RegionRestoreInputWhereDto, RegionRestoreOutputDto, RegionSoftDeleteDto, RegionSoftDeleteInputDto, RegionSoftDeleteInputWhereDto, RegionSoftDeleteOutputDto, RegionSoftRemoveDto, RegionSoftRemoveInputDto, RegionSoftRemoveInputWhereDto, RegionSoftRemoveOutputDto, RegionSoftRemoveOutputAffectedRowsDto, RegionUpdateDto, RegionUpdateInputDto, RegionUpdateInputSetsDto, RegionUpdateInputWhereDto, RegionUpdateOutputDto, RegionUpdateOutputAffectedRowsDto, RegionUploadDeleteDto, RegionUploadDeleteInputDto, RegionUploadDeleteOutputDto, RegionUploadDto, RegionUploadInputDto, RegionUploadOutputDto, RegionUpsertDto, RegionUpsertInputDto, RegionUpsertOutputDto } from "./dto/region.dto";
import { SelfGraphqlMicroserviceService } from "@libs/dynamic-app";

@Injectable()
export class RegionFactory extends CrudFactory<RegionEntity> {

// ████████ FindCrudEngine ████████████████████████████████████████
public declare readonly findEngine: FindCrudEngine<
// entity (1)
RegionEntity,

// find (8)
RegionFindDto,
RegionFindInputWhereDto,
RegionFindInputSortOrderDto,
RegionFindInputGroupByDto,
RegionFindInputDto,
RegionFindOutputRowsDto,
FindOutputPaginationDto,
RegionFindOutputDto,

// find_one_by_id (2)
RegionFindOneByIdDto,
RegionFindOneByIdInputDto
>;

// ████████ CreateCrudEngine ████████████████████████████████████████
public declare readonly createEngine: CreateCrudEngine<
// entity (1)
RegionEntity,

// create (3)
RegionCreateDto,
RegionCreateInputDto,
RegionCreateOutputDto
>;

// ████████ UpdateCrudEngine ████████████████████████████████████████
public declare readonly updateEngine: UpdateCrudEngine<
// entity (1)
RegionEntity,

// update (6)
RegionUpdateDto,
RegionUpdateInputWhereDto,
RegionUpdateInputSetsDto,
RegionUpdateInputDto,
RegionUpdateOutputAffectedRowsDto,
RegionUpdateOutputDto
>;

// ████████ DeleteCrudEngine ████████████████████████████████████████
public declare readonly deleteEngine: DeleteCrudEngine<
// entity (1)
RegionEntity,

// soft_delete (4)
RegionSoftDeleteDto,
RegionSoftDeleteInputWhereDto,
RegionSoftDeleteInputDto,
RegionSoftDeleteOutputDto,

// delete (4)
RegionDeleteDto,
RegionDeleteInputWhereDto,
RegionDeleteInputDto,
RegionDeleteOutputDto,

// restore (4)
RegionRestoreDto,
RegionRestoreInputWhereDto,
RegionRestoreInputDto,
RegionRestoreOutputDto
>;

// ████████ UpsertCrudEngine ████████████████████████████████████████
public declare readonly upsertEngine: UpsertCrudEngine<
// entity (1)
RegionEntity,

// upsert (3)
RegionUpsertDto,
RegionUpsertInputDto,
RegionUpsertOutputDto
>;

// ████████ RemoveCrudEngine ████████████████████████████████████████
public declare readonly removeEngine: RemoveCrudEngine<
// entity (1)
RegionEntity,

// soft_remove (5)
RegionSoftRemoveDto,
RegionSoftRemoveInputWhereDto,
RegionSoftRemoveInputDto,
RegionSoftRemoveOutputAffectedRowsDto,
RegionSoftRemoveOutputDto,

// remove (4)
RegionRemoveDto,
RegionRemoveInputWhereDto,
RegionRemoveInputDto,
RegionRemoveOutputAffectedRowsDto,
RegionRemoveOutputDto,

// recover (5)
RegionRecoverDto,
RegionRecoverInputWhereDto,
RegionRecoverInputDto,
RegionRecoverOutputAffectedRowsDto,
RegionRecoverOutputDto
>;

// ████████ UploadCrudEngine ████████████████████████████████████████
public declare readonly uploadEngine: UploadCrudEngine<
// entity (1)
RegionEntity,

// upload (3)
RegionUploadDto,
RegionUploadInputDto,
RegionUploadOutputDto,

// upload_delete (3)
RegionUploadDeleteDto,
RegionUploadDeleteInputDto,
RegionUploadDeleteOutputDto
>;

constructor(
// data source
protected readonly dataSource: DataSource,

@InjectRepository(RegionEntity)
protected readonly repository: Repository<RegionEntity>,

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
    RegionEntity,
);

this.logService.setContext(RegionFactory.name);

// ████████ initialize FindCrudEngine ██████████████████████████████████████
this.initFindEngine
<
// find (8)
RegionFindDto,
RegionFindInputWhereDto,
RegionFindInputSortOrderDto,
RegionFindInputGroupByDto,
RegionFindInputDto,
RegionFindOutputRowsDto,
FindOutputPaginationDto,
RegionFindOutputDto,

// find_one_by_id (2)
RegionFindOneByIdDto,
RegionFindOneByIdInputDto
>
(
// find (8)
RegionFindDto,
RegionFindInputWhereDto,
RegionFindInputSortOrderDto,
RegionFindInputGroupByDto,
RegionFindInputDto,
RegionFindOutputRowsDto,
FindOutputPaginationDto,
RegionFindOutputDto,

// find_one_by_id (2)
RegionFindOneByIdDto,
RegionFindOneByIdInputDto
);


// ████████ initialize CreateCrudEngine ███████████████████████████████████████
this.initCreateEngine
<
// create (3)
RegionCreateDto,
RegionCreateInputDto,
RegionCreateOutputDto
>
(
// create (3)
RegionCreateDto,
RegionCreateInputDto,
RegionCreateOutputDto
);

// ████████ initialize UpdateCrudEngine ████████████████████████████████████████
this.initUpdateEngine
<
// update (6)
RegionUpdateDto,
RegionUpdateInputWhereDto,
RegionUpdateInputSetsDto,
RegionUpdateInputDto,
RegionUpdateOutputAffectedRowsDto,
RegionUpdateOutputDto
>
(
// update (6)
RegionUpdateDto,
RegionUpdateInputWhereDto,
RegionUpdateInputSetsDto,
RegionUpdateInputDto,
RegionUpdateOutputAffectedRowsDto,
RegionUpdateOutputDto
);


// ████████ initialize DeleteCrudEngine ███████████████████████████████████████████
this.initDeleteEngine
<
// soft_delete (4)
RegionSoftDeleteDto,
RegionSoftDeleteInputWhereDto,
RegionSoftDeleteInputDto,
RegionSoftDeleteOutputDto,

// delete (4)
RegionDeleteDto,
RegionDeleteInputWhereDto,
RegionDeleteInputDto,
RegionDeleteOutputDto,

// restore (4)
RegionRestoreDto,
RegionRestoreInputWhereDto,
RegionRestoreInputDto,
RegionRestoreOutputDto
>
(
// soft_delete (4)
RegionSoftDeleteDto,
RegionSoftDeleteInputWhereDto,
RegionSoftDeleteInputDto,
RegionSoftDeleteOutputDto,

// delete (4)
RegionDeleteDto,
RegionDeleteInputWhereDto,
RegionDeleteInputDto,
RegionDeleteOutputDto,

// restore (4)
RegionRestoreDto,
RegionRestoreInputWhereDto,
RegionRestoreInputDto,
RegionRestoreOutputDto
);



// ████████ initialize UpsertCrudEngine ███████████████████████████████████████████
this.initUpsertEngine
<
// upsert (3)
RegionUpsertDto,
RegionUpsertInputDto,
RegionUpsertOutputDto
>
(
// upsert (3)
RegionUpsertDto,
RegionUpsertInputDto,
RegionUpsertOutputDto
);




// ████████ initialize RemoveCrudEngine ███████████████████████████████████████████
this.initRemoveEngine
<
// soft_remove (5)
RegionSoftRemoveDto,
RegionSoftRemoveInputWhereDto,
RegionSoftRemoveInputDto,
RegionSoftRemoveOutputAffectedRowsDto,
RegionSoftRemoveOutputDto,

// remove (4)
RegionRemoveDto,
RegionRemoveInputWhereDto,
RegionRemoveInputDto,
RegionRemoveOutputAffectedRowsDto,
RegionRemoveOutputDto,

// recover (5)
RegionRecoverDto,
RegionRecoverInputWhereDto,
RegionRecoverInputDto,
RegionRecoverOutputAffectedRowsDto,
RegionRecoverOutputDto
>
(
// soft_remove (5)
RegionSoftRemoveDto,
RegionSoftRemoveInputWhereDto,
RegionSoftRemoveInputDto,
RegionSoftRemoveOutputAffectedRowsDto,
RegionSoftRemoveOutputDto,

// remove (4)
RegionRemoveDto,
RegionRemoveInputWhereDto,
RegionRemoveInputDto,
RegionRemoveOutputAffectedRowsDto,
RegionRemoveOutputDto,

// recover (5)
RegionRecoverDto,
RegionRecoverInputWhereDto,
RegionRecoverInputDto,
RegionRecoverOutputAffectedRowsDto,
RegionRecoverOutputDto
);



// ████████ initialize UploadCrudEngine ███████████████████████████████████████████
this.initUploadEngine
<
// upload (3)
RegionUploadDto,
RegionUploadInputDto,
RegionUploadOutputDto,

// upload_delete (3)
RegionUploadDeleteDto,
RegionUploadDeleteInputDto,
RegionUploadDeleteOutputDto
>
(
// upload (3)
RegionUploadDto,
RegionUploadInputDto,
RegionUploadOutputDto,

// upload_delete (3)
RegionUploadDeleteDto,
RegionUploadDeleteInputDto,
RegionUploadDeleteOutputDto
);


// ████████ initialize ImportExportCrudEngine █████████████████████████████████████

}

}