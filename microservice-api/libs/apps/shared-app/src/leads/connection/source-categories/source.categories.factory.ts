import { ConnectionSourceCategoriesEntity } from "./entities/source.categories.entity";
import { Injectable } from "@nestjs/common";
import { DataSource, Repository } from "typeorm";
import { InjectRepository } from "@nestjs/typeorm";
import { ConfService, CreateCrudEngine, CrudFactory, DataValidationPipe, DeleteCrudEngine, FindCrudEngine, FindOutputPaginationDto, LibraryAppService, LogService, RemoveCrudEngine, UpdateCrudEngine, UploadCrudEngine, UpsertCrudEngine } from "@libs/library-app";
import { SelfGraphqlMicroserviceService } from '@libs/dynamic-app';
import { ConnectionSourceCategoriesCreateDto, ConnectionSourceCategoriesCreateInputDto, ConnectionSourceCategoriesCreateOutputDto, ConnectionSourceCategoriesDeleteDto, ConnectionSourceCategoriesDeleteInputDto, ConnectionSourceCategoriesDeleteInputWhereDto, ConnectionSourceCategoriesDeleteOutputDto, ConnectionSourceCategoriesFindDto, ConnectionSourceCategoriesFindInputDto, ConnectionSourceCategoriesFindInputGroupByDto, ConnectionSourceCategoriesFindInputSortOrderDto, ConnectionSourceCategoriesFindInputWhereDto, ConnectionSourceCategoriesFindOneByIdDto, ConnectionSourceCategoriesFindOneByIdInputDto, ConnectionSourceCategoriesFindOutputDto, ConnectionSourceCategoriesFindOutputRowsDto, ConnectionSourceCategoriesRecoverDto, ConnectionSourceCategoriesRecoverInputDto, ConnectionSourceCategoriesRecoverInputWhereDto, ConnectionSourceCategoriesRecoverOutputDto, ConnectionSourceCategoriesRecoverOutputAffectedRowsDto, ConnectionSourceCategoriesRemoveDto, ConnectionSourceCategoriesRemoveInputDto, ConnectionSourceCategoriesRemoveInputWhereDto, ConnectionSourceCategoriesRemoveOutputDto, ConnectionSourceCategoriesRemoveOutputAffectedRowsDto, ConnectionSourceCategoriesRestoreDto, ConnectionSourceCategoriesRestoreInputDto, ConnectionSourceCategoriesRestoreInputWhereDto, ConnectionSourceCategoriesRestoreOutputDto, ConnectionSourceCategoriesSoftDeleteDto, ConnectionSourceCategoriesSoftDeleteInputDto, ConnectionSourceCategoriesSoftDeleteInputWhereDto, ConnectionSourceCategoriesSoftDeleteOutputDto, ConnectionSourceCategoriesSoftRemoveDto, ConnectionSourceCategoriesSoftRemoveInputDto, ConnectionSourceCategoriesSoftRemoveInputWhereDto, ConnectionSourceCategoriesSoftRemoveOutputDto, ConnectionSourceCategoriesSoftRemoveOutputAffectedRowsDto, ConnectionSourceCategoriesUpdateDto, ConnectionSourceCategoriesUpdateInputDto, ConnectionSourceCategoriesUpdateInputSetsDto, ConnectionSourceCategoriesUpdateInputWhereDto, ConnectionSourceCategoriesUpdateOutputDto, ConnectionSourceCategoriesUpdateOutputAffectedRowsDto, ConnectionSourceCategoriesUploadDeleteDto, ConnectionSourceCategoriesUploadDeleteInputDto, ConnectionSourceCategoriesUploadDeleteOutputDto, ConnectionSourceCategoriesUploadDto, ConnectionSourceCategoriesUploadInputDto, ConnectionSourceCategoriesUploadOutputDto, ConnectionSourceCategoriesUpsertDto, ConnectionSourceCategoriesUpsertInputDto, ConnectionSourceCategoriesUpsertOutputDto } from "./dto/source.categories.dto";

@Injectable()
export class ConnectionSourceCategoriesFactory extends CrudFactory<ConnectionSourceCategoriesEntity> {

// ████████ FindCrudEngine ████████████████████████████████████████
public declare readonly findEngine: FindCrudEngine<
// entity (1)
ConnectionSourceCategoriesEntity,

// find (8)
ConnectionSourceCategoriesFindDto,
ConnectionSourceCategoriesFindInputWhereDto,
ConnectionSourceCategoriesFindInputSortOrderDto,
ConnectionSourceCategoriesFindInputGroupByDto,
ConnectionSourceCategoriesFindInputDto,
ConnectionSourceCategoriesFindOutputRowsDto,
FindOutputPaginationDto,
ConnectionSourceCategoriesFindOutputDto,

// find_one_by_id (2)
ConnectionSourceCategoriesFindOneByIdDto,
ConnectionSourceCategoriesFindOneByIdInputDto
>;

// ████████ CreateCrudEngine ████████████████████████████████████████
public declare readonly createEngine: CreateCrudEngine<
// entity (1)
ConnectionSourceCategoriesEntity,

// create (3)
ConnectionSourceCategoriesCreateDto,
ConnectionSourceCategoriesCreateInputDto,
ConnectionSourceCategoriesCreateOutputDto
>;

// ████████ UpdateCrudEngine ████████████████████████████████████████
public declare readonly updateEngine: UpdateCrudEngine<
// entity (1)
ConnectionSourceCategoriesEntity,

// update (6)
ConnectionSourceCategoriesUpdateDto,
ConnectionSourceCategoriesUpdateInputWhereDto,
ConnectionSourceCategoriesUpdateInputSetsDto,
ConnectionSourceCategoriesUpdateInputDto,
ConnectionSourceCategoriesUpdateOutputAffectedRowsDto,
ConnectionSourceCategoriesUpdateOutputDto
>;

// ████████ DeleteCrudEngine ████████████████████████████████████████
public declare readonly deleteEngine: DeleteCrudEngine<
// entity (1)
ConnectionSourceCategoriesEntity,

// soft_delete (4)
ConnectionSourceCategoriesSoftDeleteDto,
ConnectionSourceCategoriesSoftDeleteInputWhereDto,
ConnectionSourceCategoriesSoftDeleteInputDto,
ConnectionSourceCategoriesSoftDeleteOutputDto,

// delete (4)
ConnectionSourceCategoriesDeleteDto,
ConnectionSourceCategoriesDeleteInputWhereDto,
ConnectionSourceCategoriesDeleteInputDto,
ConnectionSourceCategoriesDeleteOutputDto,

// restore (4)
ConnectionSourceCategoriesRestoreDto,
ConnectionSourceCategoriesRestoreInputWhereDto,
ConnectionSourceCategoriesRestoreInputDto,
ConnectionSourceCategoriesRestoreOutputDto
>;

// ████████ UpsertCrudEngine ████████████████████████████████████████
public declare readonly upsertEngine: UpsertCrudEngine<
// entity (1)
ConnectionSourceCategoriesEntity,

// upsert (3)
ConnectionSourceCategoriesUpsertDto,
ConnectionSourceCategoriesUpsertInputDto,
ConnectionSourceCategoriesUpsertOutputDto
>;

// ████████ RemoveCrudEngine ████████████████████████████████████████
public declare readonly removeEngine: RemoveCrudEngine<
// entity (1)
ConnectionSourceCategoriesEntity,

// soft_remove (5)
ConnectionSourceCategoriesSoftRemoveDto,
ConnectionSourceCategoriesSoftRemoveInputWhereDto,
ConnectionSourceCategoriesSoftRemoveInputDto,
ConnectionSourceCategoriesSoftRemoveOutputAffectedRowsDto,
ConnectionSourceCategoriesSoftRemoveOutputDto,

// remove (4)
ConnectionSourceCategoriesRemoveDto,
ConnectionSourceCategoriesRemoveInputWhereDto,
ConnectionSourceCategoriesRemoveInputDto,
ConnectionSourceCategoriesRemoveOutputAffectedRowsDto,
ConnectionSourceCategoriesRemoveOutputDto,

// recover (5)
ConnectionSourceCategoriesRecoverDto,
ConnectionSourceCategoriesRecoverInputWhereDto,
ConnectionSourceCategoriesRecoverInputDto,
ConnectionSourceCategoriesRecoverOutputAffectedRowsDto,
ConnectionSourceCategoriesRecoverOutputDto
>;

// ████████ UploadCrudEngine ████████████████████████████████████████
public declare readonly uploadEngine: UploadCrudEngine<
// entity (1)
ConnectionSourceCategoriesEntity,

// upload (3)
ConnectionSourceCategoriesUploadDto,
ConnectionSourceCategoriesUploadInputDto,
ConnectionSourceCategoriesUploadOutputDto,

// upload_delete (3)
ConnectionSourceCategoriesUploadDeleteDto,
ConnectionSourceCategoriesUploadDeleteInputDto,
ConnectionSourceCategoriesUploadDeleteOutputDto
>;

constructor(
// data source
protected readonly dataSource: DataSource,

@InjectRepository(ConnectionSourceCategoriesEntity)
protected readonly repository: Repository<ConnectionSourceCategoriesEntity>,

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
    ConnectionSourceCategoriesEntity,
);

this.logService.setContext(ConnectionSourceCategoriesFactory.name);

// ████████ initialize FindCrudEngine ██████████████████████████████████████
this.initFindEngine
<
// find (8)
ConnectionSourceCategoriesFindDto,
ConnectionSourceCategoriesFindInputWhereDto,
ConnectionSourceCategoriesFindInputSortOrderDto,
ConnectionSourceCategoriesFindInputGroupByDto,
ConnectionSourceCategoriesFindInputDto,
ConnectionSourceCategoriesFindOutputRowsDto,
FindOutputPaginationDto,
ConnectionSourceCategoriesFindOutputDto,

// find_one_by_id (2)
ConnectionSourceCategoriesFindOneByIdDto,
ConnectionSourceCategoriesFindOneByIdInputDto
>
(
// find (8)
ConnectionSourceCategoriesFindDto,
ConnectionSourceCategoriesFindInputWhereDto,
ConnectionSourceCategoriesFindInputSortOrderDto,
ConnectionSourceCategoriesFindInputGroupByDto,
ConnectionSourceCategoriesFindInputDto,
ConnectionSourceCategoriesFindOutputRowsDto,
FindOutputPaginationDto,
ConnectionSourceCategoriesFindOutputDto,

// find_one_by_id (2)
ConnectionSourceCategoriesFindOneByIdDto,
ConnectionSourceCategoriesFindOneByIdInputDto
);


// ████████ initialize CreateCrudEngine ███████████████████████████████████████
this.initCreateEngine
<
// create (3)
ConnectionSourceCategoriesCreateDto,
ConnectionSourceCategoriesCreateInputDto,
ConnectionSourceCategoriesCreateOutputDto
>
(
// create (3)
ConnectionSourceCategoriesCreateDto,
ConnectionSourceCategoriesCreateInputDto,
ConnectionSourceCategoriesCreateOutputDto
);

// ████████ initialize UpdateCrudEngine ████████████████████████████████████████
this.initUpdateEngine
<
// update (6)
ConnectionSourceCategoriesUpdateDto,
ConnectionSourceCategoriesUpdateInputWhereDto,
ConnectionSourceCategoriesUpdateInputSetsDto,
ConnectionSourceCategoriesUpdateInputDto,
ConnectionSourceCategoriesUpdateOutputAffectedRowsDto,
ConnectionSourceCategoriesUpdateOutputDto
>
(
// update (6)
ConnectionSourceCategoriesUpdateDto,
ConnectionSourceCategoriesUpdateInputWhereDto,
ConnectionSourceCategoriesUpdateInputSetsDto,
ConnectionSourceCategoriesUpdateInputDto,
ConnectionSourceCategoriesUpdateOutputAffectedRowsDto,
ConnectionSourceCategoriesUpdateOutputDto
);


// ████████ initialize DeleteCrudEngine ███████████████████████████████████████████
this.initDeleteEngine
<
// soft_delete (4)
ConnectionSourceCategoriesSoftDeleteDto,
ConnectionSourceCategoriesSoftDeleteInputWhereDto,
ConnectionSourceCategoriesSoftDeleteInputDto,
ConnectionSourceCategoriesSoftDeleteOutputDto,

// delete (4)
ConnectionSourceCategoriesDeleteDto,
ConnectionSourceCategoriesDeleteInputWhereDto,
ConnectionSourceCategoriesDeleteInputDto,
ConnectionSourceCategoriesDeleteOutputDto,

// restore (4)
ConnectionSourceCategoriesRestoreDto,
ConnectionSourceCategoriesRestoreInputWhereDto,
ConnectionSourceCategoriesRestoreInputDto,
ConnectionSourceCategoriesRestoreOutputDto
>
(
// soft_delete (4)
ConnectionSourceCategoriesSoftDeleteDto,
ConnectionSourceCategoriesSoftDeleteInputWhereDto,
ConnectionSourceCategoriesSoftDeleteInputDto,
ConnectionSourceCategoriesSoftDeleteOutputDto,

// delete (4)
ConnectionSourceCategoriesDeleteDto,
ConnectionSourceCategoriesDeleteInputWhereDto,
ConnectionSourceCategoriesDeleteInputDto,
ConnectionSourceCategoriesDeleteOutputDto,

// restore (4)
ConnectionSourceCategoriesRestoreDto,
ConnectionSourceCategoriesRestoreInputWhereDto,
ConnectionSourceCategoriesRestoreInputDto,
ConnectionSourceCategoriesRestoreOutputDto
);



// ████████ initialize UpsertCrudEngine ███████████████████████████████████████████
this.initUpsertEngine
<
// upsert (3)
ConnectionSourceCategoriesUpsertDto,
ConnectionSourceCategoriesUpsertInputDto,
ConnectionSourceCategoriesUpsertOutputDto
>
(
// upsert (3)
ConnectionSourceCategoriesUpsertDto,
ConnectionSourceCategoriesUpsertInputDto,
ConnectionSourceCategoriesUpsertOutputDto
);




// ████████ initialize RemoveCrudEngine ███████████████████████████████████████████
this.initRemoveEngine
<
// soft_remove (5)
ConnectionSourceCategoriesSoftRemoveDto,
ConnectionSourceCategoriesSoftRemoveInputWhereDto,
ConnectionSourceCategoriesSoftRemoveInputDto,
ConnectionSourceCategoriesSoftRemoveOutputAffectedRowsDto,
ConnectionSourceCategoriesSoftRemoveOutputDto,

// remove (4)
ConnectionSourceCategoriesRemoveDto,
ConnectionSourceCategoriesRemoveInputWhereDto,
ConnectionSourceCategoriesRemoveInputDto,
ConnectionSourceCategoriesRemoveOutputAffectedRowsDto,
ConnectionSourceCategoriesRemoveOutputDto,

// recover (5)
ConnectionSourceCategoriesRecoverDto,
ConnectionSourceCategoriesRecoverInputWhereDto,
ConnectionSourceCategoriesRecoverInputDto,
ConnectionSourceCategoriesRecoverOutputAffectedRowsDto,
ConnectionSourceCategoriesRecoverOutputDto
>
(
// soft_remove (5)
ConnectionSourceCategoriesSoftRemoveDto,
ConnectionSourceCategoriesSoftRemoveInputWhereDto,
ConnectionSourceCategoriesSoftRemoveInputDto,
ConnectionSourceCategoriesSoftRemoveOutputAffectedRowsDto,
ConnectionSourceCategoriesSoftRemoveOutputDto,

// remove (4)
ConnectionSourceCategoriesRemoveDto,
ConnectionSourceCategoriesRemoveInputWhereDto,
ConnectionSourceCategoriesRemoveInputDto,
ConnectionSourceCategoriesRemoveOutputAffectedRowsDto,
ConnectionSourceCategoriesRemoveOutputDto,

// recover (5)
ConnectionSourceCategoriesRecoverDto,
ConnectionSourceCategoriesRecoverInputWhereDto,
ConnectionSourceCategoriesRecoverInputDto,
ConnectionSourceCategoriesRecoverOutputAffectedRowsDto,
ConnectionSourceCategoriesRecoverOutputDto
);



// ████████ initialize UploadCrudEngine ███████████████████████████████████████████
this.initUploadEngine
<
// upload (3)
ConnectionSourceCategoriesUploadDto,
ConnectionSourceCategoriesUploadInputDto,
ConnectionSourceCategoriesUploadOutputDto,

// upload_delete (3)
ConnectionSourceCategoriesUploadDeleteDto,
ConnectionSourceCategoriesUploadDeleteInputDto,
ConnectionSourceCategoriesUploadDeleteOutputDto
>
(
// upload (3)
ConnectionSourceCategoriesUploadDto,
ConnectionSourceCategoriesUploadInputDto,
ConnectionSourceCategoriesUploadOutputDto,

// upload_delete (3)
ConnectionSourceCategoriesUploadDeleteDto,
ConnectionSourceCategoriesUploadDeleteInputDto,
ConnectionSourceCategoriesUploadDeleteOutputDto
);


// ████████ initialize ImportExportCrudEngine █████████████████████████████████████

}

}