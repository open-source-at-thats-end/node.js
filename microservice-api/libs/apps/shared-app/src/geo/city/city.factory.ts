import { CityEntity } from "./entities/city.entity";
import { Injectable } from "@nestjs/common";
import { DataSource, Repository } from "typeorm";
import { InjectRepository } from "@nestjs/typeorm";
import { ConfService, CreateCrudEngine, CrudFactory, DataValidationPipe, DeleteCrudEngine, FindCrudEngine, FindOutputPaginationDto, LibraryAppService, LogService, RemoveCrudEngine, UpdateCrudEngine, UploadCrudEngine, UpsertCrudEngine } from "@libs/library-app";
import { CityCreateDto, CityCreateInputDto, CityCreateOutputDto, CityDeleteDto, CityDeleteInputDto, CityDeleteInputWhereDto, CityDeleteOutputDto, CityFindDto, CityFindInputDto, CityFindInputGroupByDto, CityFindInputSortOrderDto, CityFindInputWhereDto, CityFindOneByIdDto, CityFindOneByIdInputDto, CityFindOutputDto, CityFindOutputRowsDto, CityRecoverDto, CityRecoverInputDto, CityRecoverInputWhereDto, CityRecoverOutputDto, CityRecoverOutputAffectedRowsDto, CityRemoveDto, CityRemoveInputDto, CityRemoveInputWhereDto, CityRemoveOutputDto, CityRemoveOutputAffectedRowsDto, CityRestoreDto, CityRestoreInputDto, CityRestoreInputWhereDto, CityRestoreOutputDto, CitySoftDeleteDto, CitySoftDeleteInputDto, CitySoftDeleteInputWhereDto, CitySoftDeleteOutputDto, CitySoftRemoveDto, CitySoftRemoveInputDto, CitySoftRemoveInputWhereDto, CitySoftRemoveOutputDto, CitySoftRemoveOutputAffectedRowsDto, CityUpdateDto, CityUpdateInputDto, CityUpdateInputSetsDto, CityUpdateInputWhereDto, CityUpdateOutputDto, CityUpdateOutputAffectedRowsDto, CityUploadDeleteDto, CityUploadDeleteInputDto, CityUploadDeleteOutputDto, CityUploadDto, CityUploadInputDto, CityUploadOutputDto, CityUpsertDto, CityUpsertInputDto, CityUpsertOutputDto } from "./dto/city.dto";
import { SelfGraphqlMicroserviceService } from "@libs/dynamic-app";

@Injectable()
export class CityFactory extends CrudFactory<CityEntity> {

// ████████ FindCrudEngine ████████████████████████████████████████
public declare readonly findEngine: FindCrudEngine<
// entity (1)
CityEntity,

// find (8)
CityFindDto,
CityFindInputWhereDto,
CityFindInputSortOrderDto,
CityFindInputGroupByDto,
CityFindInputDto,
CityFindOutputRowsDto,
FindOutputPaginationDto,
CityFindOutputDto,

// find_one_by_id (2)
CityFindOneByIdDto,
CityFindOneByIdInputDto
>;

// ████████ CreateCrudEngine ████████████████████████████████████████
public declare readonly createEngine: CreateCrudEngine<
// entity (1)
CityEntity,

// create (3)
CityCreateDto,
CityCreateInputDto,
CityCreateOutputDto
>;

// ████████ UpdateCrudEngine ████████████████████████████████████████
public declare readonly updateEngine: UpdateCrudEngine<
// entity (1)
CityEntity,

// update (6)
CityUpdateDto,
CityUpdateInputWhereDto,
CityUpdateInputSetsDto,
CityUpdateInputDto,
CityUpdateOutputAffectedRowsDto,
CityUpdateOutputDto
>;

// ████████ DeleteCrudEngine ████████████████████████████████████████
public declare readonly deleteEngine: DeleteCrudEngine<
// entity (1)
CityEntity,

// soft_delete (4)
CitySoftDeleteDto,
CitySoftDeleteInputWhereDto,
CitySoftDeleteInputDto,
CitySoftDeleteOutputDto,

// delete (4)
CityDeleteDto,
CityDeleteInputWhereDto,
CityDeleteInputDto,
CityDeleteOutputDto,

// restore (4)
CityRestoreDto,
CityRestoreInputWhereDto,
CityRestoreInputDto,
CityRestoreOutputDto
>;

// ████████ UpsertCrudEngine ████████████████████████████████████████
public declare readonly upsertEngine: UpsertCrudEngine<
// entity (1)
CityEntity,

// upsert (3)
CityUpsertDto,
CityUpsertInputDto,
CityUpsertOutputDto
>;

// ████████ RemoveCrudEngine ████████████████████████████████████████
public declare readonly removeEngine: RemoveCrudEngine<
// entity (1)
CityEntity,

// soft_remove (5)
CitySoftRemoveDto,
CitySoftRemoveInputWhereDto,
CitySoftRemoveInputDto,
CitySoftRemoveOutputAffectedRowsDto,
CitySoftRemoveOutputDto,

// remove (4)
CityRemoveDto,
CityRemoveInputWhereDto,
CityRemoveInputDto,
CityRemoveOutputAffectedRowsDto,
CityRemoveOutputDto,

// recover (5)
CityRecoverDto,
CityRecoverInputWhereDto,
CityRecoverInputDto,
CityRecoverOutputAffectedRowsDto,
CityRecoverOutputDto
>;

// ████████ UploadCrudEngine ████████████████████████████████████████
public declare readonly uploadEngine: UploadCrudEngine<
// entity (1)
CityEntity,

// upload (3)
CityUploadDto,
CityUploadInputDto,
CityUploadOutputDto,

// upload_delete (3)
CityUploadDeleteDto,
CityUploadDeleteInputDto,
CityUploadDeleteOutputDto
>;

constructor(
// data source
protected readonly dataSource: DataSource,

@InjectRepository(CityEntity)
protected readonly repository: Repository<CityEntity>,

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
    CityEntity,
);

this.logService.setContext(CityFactory.name);

// ████████ initialize FindCrudEngine ██████████████████████████████████████
this.initFindEngine
<
// find (8)
CityFindDto,
CityFindInputWhereDto,
CityFindInputSortOrderDto,
CityFindInputGroupByDto,
CityFindInputDto,
CityFindOutputRowsDto,
FindOutputPaginationDto,
CityFindOutputDto,

// find_one_by_id (2)
CityFindOneByIdDto,
CityFindOneByIdInputDto
>
(
// find (8)
CityFindDto,
CityFindInputWhereDto,
CityFindInputSortOrderDto,
CityFindInputGroupByDto,
CityFindInputDto,
CityFindOutputRowsDto,
FindOutputPaginationDto,
CityFindOutputDto,

// find_one_by_id (2)
CityFindOneByIdDto,
CityFindOneByIdInputDto
);


// ████████ initialize CreateCrudEngine ███████████████████████████████████████
this.initCreateEngine
<
// create (3)
CityCreateDto,
CityCreateInputDto,
CityCreateOutputDto
>
(
// create (3)
CityCreateDto,
CityCreateInputDto,
CityCreateOutputDto
);

// ████████ initialize UpdateCrudEngine ████████████████████████████████████████
this.initUpdateEngine
<
// update (6)
CityUpdateDto,
CityUpdateInputWhereDto,
CityUpdateInputSetsDto,
CityUpdateInputDto,
CityUpdateOutputAffectedRowsDto,
CityUpdateOutputDto
>
(
// update (6)
CityUpdateDto,
CityUpdateInputWhereDto,
CityUpdateInputSetsDto,
CityUpdateInputDto,
CityUpdateOutputAffectedRowsDto,
CityUpdateOutputDto
);


// ████████ initialize DeleteCrudEngine ███████████████████████████████████████████
this.initDeleteEngine
<
// soft_delete (4)
CitySoftDeleteDto,
CitySoftDeleteInputWhereDto,
CitySoftDeleteInputDto,
CitySoftDeleteOutputDto,

// delete (4)
CityDeleteDto,
CityDeleteInputWhereDto,
CityDeleteInputDto,
CityDeleteOutputDto,

// restore (4)
CityRestoreDto,
CityRestoreInputWhereDto,
CityRestoreInputDto,
CityRestoreOutputDto
>
(
// soft_delete (4)
CitySoftDeleteDto,
CitySoftDeleteInputWhereDto,
CitySoftDeleteInputDto,
CitySoftDeleteOutputDto,

// delete (4)
CityDeleteDto,
CityDeleteInputWhereDto,
CityDeleteInputDto,
CityDeleteOutputDto,

// restore (4)
CityRestoreDto,
CityRestoreInputWhereDto,
CityRestoreInputDto,
CityRestoreOutputDto
);



// ████████ initialize UpsertCrudEngine ███████████████████████████████████████████
this.initUpsertEngine
<
// upsert (3)
CityUpsertDto,
CityUpsertInputDto,
CityUpsertOutputDto
>
(
// upsert (3)
CityUpsertDto,
CityUpsertInputDto,
CityUpsertOutputDto
);




// ████████ initialize RemoveCrudEngine ███████████████████████████████████████████
this.initRemoveEngine
<
// soft_remove (5)
CitySoftRemoveDto,
CitySoftRemoveInputWhereDto,
CitySoftRemoveInputDto,
CitySoftRemoveOutputAffectedRowsDto,
CitySoftRemoveOutputDto,

// remove (4)
CityRemoveDto,
CityRemoveInputWhereDto,
CityRemoveInputDto,
CityRemoveOutputAffectedRowsDto,
CityRemoveOutputDto,

// recover (5)
CityRecoverDto,
CityRecoverInputWhereDto,
CityRecoverInputDto,
CityRecoverOutputAffectedRowsDto,
CityRecoverOutputDto
>
(
// soft_remove (5)
CitySoftRemoveDto,
CitySoftRemoveInputWhereDto,
CitySoftRemoveInputDto,
CitySoftRemoveOutputAffectedRowsDto,
CitySoftRemoveOutputDto,

// remove (4)
CityRemoveDto,
CityRemoveInputWhereDto,
CityRemoveInputDto,
CityRemoveOutputAffectedRowsDto,
CityRemoveOutputDto,

// recover (5)
CityRecoverDto,
CityRecoverInputWhereDto,
CityRecoverInputDto,
CityRecoverOutputAffectedRowsDto,
CityRecoverOutputDto
);



// ████████ initialize UploadCrudEngine ███████████████████████████████████████████
this.initUploadEngine
<
// upload (3)
CityUploadDto,
CityUploadInputDto,
CityUploadOutputDto,

// upload_delete (3)
CityUploadDeleteDto,
CityUploadDeleteInputDto,
CityUploadDeleteOutputDto
>
(
// upload (3)
CityUploadDto,
CityUploadInputDto,
CityUploadOutputDto,

// upload_delete (3)
CityUploadDeleteDto,
CityUploadDeleteInputDto,
CityUploadDeleteOutputDto
);


// ████████ initialize ImportExportCrudEngine █████████████████████████████████████

}

}