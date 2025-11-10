import { SubregionEntity } from "./entities/subregion.entity";
import { Injectable } from "@nestjs/common";
import { DataSource, Repository } from "typeorm";
import { InjectRepository } from "@nestjs/typeorm";
import { ConfService, CreateCrudEngine, CrudFactory, DataValidationPipe, DeleteCrudEngine, FindCrudEngine, FindOutputPaginationDto, LibraryAppService, LogService, RemoveCrudEngine, UpdateCrudEngine, UploadCrudEngine, UpsertCrudEngine } from "@libs/library-app";
import { SelfGraphqlMicroserviceService } from "@libs/dynamic-app";
import { SubregionCreateDto, SubregionCreateInputDto, SubregionCreateOutputDto, SubregionDeleteDto, SubregionDeleteInputDto, SubregionDeleteInputWhereDto, SubregionDeleteOutputDto, SubregionFindDto, SubregionFindInputDto, SubregionFindInputGroupByDto, SubregionFindInputSortOrderDto, SubregionFindInputWhereDto, SubregionFindOneByIdDto, SubregionFindOneByIdInputDto, SubregionFindOutputDto, SubregionFindOutputRowsDto, SubregionRecoverDto, SubregionRecoverInputDto, SubregionRecoverInputWhereDto, SubregionRecoverOutputDto, SubregionRecoverOutputAffectedRowsDto, SubregionRemoveDto, SubregionRemoveInputDto, SubregionRemoveInputWhereDto, SubregionRemoveOutputDto, SubregionRemoveOutputAffectedRowsDto, SubregionRestoreDto, SubregionRestoreInputDto, SubregionRestoreInputWhereDto, SubregionRestoreOutputDto, SubregionSoftDeleteDto, SubregionSoftDeleteInputDto, SubregionSoftDeleteInputWhereDto, SubregionSoftDeleteOutputDto, SubregionSoftRemoveDto, SubregionSoftRemoveInputDto, SubregionSoftRemoveInputWhereDto, SubregionSoftRemoveOutputDto, SubregionSoftRemoveOutputAffectedRowsDto, SubregionUpdateDto, SubregionUpdateInputDto, SubregionUpdateInputSetsDto, SubregionUpdateInputWhereDto, SubregionUpdateOutputDto, SubregionUpdateOutputAffectedRowsDto, SubregionUploadDeleteDto, SubregionUploadDeleteInputDto, SubregionUploadDeleteOutputDto, SubregionUploadDto, SubregionUploadInputDto, SubregionUploadOutputDto, SubregionUpsertDto, SubregionUpsertInputDto, SubregionUpsertOutputDto } from "./dto/subregion.dto";

@Injectable()
export class SubregionFactory extends CrudFactory<SubregionEntity> {

// ████████ FindCrudEngine ████████████████████████████████████████
public declare readonly findEngine: FindCrudEngine<
// entity (1)
SubregionEntity,

// find (8)
SubregionFindDto,
SubregionFindInputWhereDto,
SubregionFindInputSortOrderDto,
SubregionFindInputGroupByDto,
SubregionFindInputDto,
SubregionFindOutputRowsDto,
FindOutputPaginationDto,
SubregionFindOutputDto,

// find_one_by_id (2)
SubregionFindOneByIdDto,
SubregionFindOneByIdInputDto
>;

// ████████ CreateCrudEngine ████████████████████████████████████████
public declare readonly createEngine: CreateCrudEngine<
// entity (1)
SubregionEntity,

// create (3)
SubregionCreateDto,
SubregionCreateInputDto,
SubregionCreateOutputDto
>;

// ████████ UpdateCrudEngine ████████████████████████████████████████
public declare readonly updateEngine: UpdateCrudEngine<
// entity (1)
SubregionEntity,

// update (6)
SubregionUpdateDto,
SubregionUpdateInputWhereDto,
SubregionUpdateInputSetsDto,
SubregionUpdateInputDto,
SubregionUpdateOutputAffectedRowsDto,
SubregionUpdateOutputDto
>;

// ████████ DeleteCrudEngine ████████████████████████████████████████
public declare readonly deleteEngine: DeleteCrudEngine<
// entity (1)
SubregionEntity,

// soft_delete (4)
SubregionSoftDeleteDto,
SubregionSoftDeleteInputWhereDto,
SubregionSoftDeleteInputDto,
SubregionSoftDeleteOutputDto,

// delete (4)
SubregionDeleteDto,
SubregionDeleteInputWhereDto,
SubregionDeleteInputDto,
SubregionDeleteOutputDto,

// restore (4)
SubregionRestoreDto,
SubregionRestoreInputWhereDto,
SubregionRestoreInputDto,
SubregionRestoreOutputDto
>;

// ████████ UpsertCrudEngine ████████████████████████████████████████
public declare readonly upsertEngine: UpsertCrudEngine<
// entity (1)
SubregionEntity,

// upsert (3)
SubregionUpsertDto,
SubregionUpsertInputDto,
SubregionUpsertOutputDto
>;

// ████████ RemoveCrudEngine ████████████████████████████████████████
public declare readonly removeEngine: RemoveCrudEngine<
// entity (1)
SubregionEntity,

// soft_remove (5)
SubregionSoftRemoveDto,
SubregionSoftRemoveInputWhereDto,
SubregionSoftRemoveInputDto,
SubregionSoftRemoveOutputAffectedRowsDto,
SubregionSoftRemoveOutputDto,

// remove (4)
SubregionRemoveDto,
SubregionRemoveInputWhereDto,
SubregionRemoveInputDto,
SubregionRemoveOutputAffectedRowsDto,
SubregionRemoveOutputDto,

// recover (5)
SubregionRecoverDto,
SubregionRecoverInputWhereDto,
SubregionRecoverInputDto,
SubregionRecoverOutputAffectedRowsDto,
SubregionRecoverOutputDto
>;

// ████████ UploadCrudEngine ████████████████████████████████████████
public declare readonly uploadEngine: UploadCrudEngine<
// entity (1)
SubregionEntity,

// upload (3)
SubregionUploadDto,
SubregionUploadInputDto,
SubregionUploadOutputDto,

// upload_delete (3)
SubregionUploadDeleteDto,
SubregionUploadDeleteInputDto,
SubregionUploadDeleteOutputDto
>;

constructor(
// data source
protected readonly dataSource: DataSource,

@InjectRepository(SubregionEntity)
protected readonly repository: Repository<SubregionEntity>,

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
    SubregionEntity,
);

this.logService.setContext(SubregionFactory.name);

// ████████ initialize FindCrudEngine ██████████████████████████████████████
this.initFindEngine
<
// find (8)
SubregionFindDto,
SubregionFindInputWhereDto,
SubregionFindInputSortOrderDto,
SubregionFindInputGroupByDto,
SubregionFindInputDto,
SubregionFindOutputRowsDto,
FindOutputPaginationDto,
SubregionFindOutputDto,

// find_one_by_id (2)
SubregionFindOneByIdDto,
SubregionFindOneByIdInputDto
>
(
// find (8)
SubregionFindDto,
SubregionFindInputWhereDto,
SubregionFindInputSortOrderDto,
SubregionFindInputGroupByDto,
SubregionFindInputDto,
SubregionFindOutputRowsDto,
FindOutputPaginationDto,
SubregionFindOutputDto,

// find_one_by_id (2)
SubregionFindOneByIdDto,
SubregionFindOneByIdInputDto
);


// ████████ initialize CreateCrudEngine ███████████████████████████████████████
this.initCreateEngine
<
// create (3)
SubregionCreateDto,
SubregionCreateInputDto,
SubregionCreateOutputDto
>
(
// create (3)
SubregionCreateDto,
SubregionCreateInputDto,
SubregionCreateOutputDto
);

// ████████ initialize UpdateCrudEngine ████████████████████████████████████████
this.initUpdateEngine
<
// update (6)
SubregionUpdateDto,
SubregionUpdateInputWhereDto,
SubregionUpdateInputSetsDto,
SubregionUpdateInputDto,
SubregionUpdateOutputAffectedRowsDto,
SubregionUpdateOutputDto
>
(
// update (6)
SubregionUpdateDto,
SubregionUpdateInputWhereDto,
SubregionUpdateInputSetsDto,
SubregionUpdateInputDto,
SubregionUpdateOutputAffectedRowsDto,
SubregionUpdateOutputDto
);


// ████████ initialize DeleteCrudEngine ███████████████████████████████████████████
this.initDeleteEngine
<
// soft_delete (4)
SubregionSoftDeleteDto,
SubregionSoftDeleteInputWhereDto,
SubregionSoftDeleteInputDto,
SubregionSoftDeleteOutputDto,

// delete (4)
SubregionDeleteDto,
SubregionDeleteInputWhereDto,
SubregionDeleteInputDto,
SubregionDeleteOutputDto,

// restore (4)
SubregionRestoreDto,
SubregionRestoreInputWhereDto,
SubregionRestoreInputDto,
SubregionRestoreOutputDto
>
(
// soft_delete (4)
SubregionSoftDeleteDto,
SubregionSoftDeleteInputWhereDto,
SubregionSoftDeleteInputDto,
SubregionSoftDeleteOutputDto,

// delete (4)
SubregionDeleteDto,
SubregionDeleteInputWhereDto,
SubregionDeleteInputDto,
SubregionDeleteOutputDto,

// restore (4)
SubregionRestoreDto,
SubregionRestoreInputWhereDto,
SubregionRestoreInputDto,
SubregionRestoreOutputDto
);



// ████████ initialize UpsertCrudEngine ███████████████████████████████████████████
this.initUpsertEngine
<
// upsert (3)
SubregionUpsertDto,
SubregionUpsertInputDto,
SubregionUpsertOutputDto
>
(
// upsert (3)
SubregionUpsertDto,
SubregionUpsertInputDto,
SubregionUpsertOutputDto
);




// ████████ initialize RemoveCrudEngine ███████████████████████████████████████████
this.initRemoveEngine
<
// soft_remove (5)
SubregionSoftRemoveDto,
SubregionSoftRemoveInputWhereDto,
SubregionSoftRemoveInputDto,
SubregionSoftRemoveOutputAffectedRowsDto,
SubregionSoftRemoveOutputDto,

// remove (4)
SubregionRemoveDto,
SubregionRemoveInputWhereDto,
SubregionRemoveInputDto,
SubregionRemoveOutputAffectedRowsDto,
SubregionRemoveOutputDto,

// recover (5)
SubregionRecoverDto,
SubregionRecoverInputWhereDto,
SubregionRecoverInputDto,
SubregionRecoverOutputAffectedRowsDto,
SubregionRecoverOutputDto
>
(
// soft_remove (5)
SubregionSoftRemoveDto,
SubregionSoftRemoveInputWhereDto,
SubregionSoftRemoveInputDto,
SubregionSoftRemoveOutputAffectedRowsDto,
SubregionSoftRemoveOutputDto,

// remove (4)
SubregionRemoveDto,
SubregionRemoveInputWhereDto,
SubregionRemoveInputDto,
SubregionRemoveOutputAffectedRowsDto,
SubregionRemoveOutputDto,

// recover (5)
SubregionRecoverDto,
SubregionRecoverInputWhereDto,
SubregionRecoverInputDto,
SubregionRecoverOutputAffectedRowsDto,
SubregionRecoverOutputDto
);



// ████████ initialize UploadCrudEngine ███████████████████████████████████████████
this.initUploadEngine
<
// upload (3)
SubregionUploadDto,
SubregionUploadInputDto,
SubregionUploadOutputDto,

// upload_delete (3)
SubregionUploadDeleteDto,
SubregionUploadDeleteInputDto,
SubregionUploadDeleteOutputDto
>
(
// upload (3)
SubregionUploadDto,
SubregionUploadInputDto,
SubregionUploadOutputDto,

// upload_delete (3)
SubregionUploadDeleteDto,
SubregionUploadDeleteInputDto,
SubregionUploadDeleteOutputDto
);


// ████████ initialize ImportExportCrudEngine █████████████████████████████████████

}

}