import { ConnectionSourceEntity } from "./entities/source.entity";
import { Injectable } from "@nestjs/common";
import { DataSource, Repository } from "typeorm";
import { InjectRepository } from "@nestjs/typeorm";
import { ConfService, CreateCrudEngine, CrudFactory, DataValidationPipe, DeleteCrudEngine, FindCrudEngine, FindOutputPaginationDto, LibraryAppService, LogService, RemoveCrudEngine, UpdateCrudEngine, UploadCrudEngine, UpsertCrudEngine } from "@libs/library-app";
import { SelfGraphqlMicroserviceService } from '@libs/dynamic-app';
import { ConnectionSourceCreateDto, ConnectionSourceCreateInputDto, ConnectionSourceCreateOutputDto, ConnectionSourceDeleteDto, ConnectionSourceDeleteInputDto, ConnectionSourceDeleteInputWhereDto, ConnectionSourceDeleteOutputDto, ConnectionSourceFindDto, ConnectionSourceFindInputDto, ConnectionSourceFindInputGroupByDto, ConnectionSourceFindInputSortOrderDto, ConnectionSourceFindInputWhereDto, ConnectionSourceFindOneByIdDto, ConnectionSourceFindOneByIdInputDto, ConnectionSourceFindOutputDto, ConnectionSourceFindOutputRowsDto, ConnectionSourceRecoverDto, ConnectionSourceRecoverInputDto, ConnectionSourceRecoverInputWhereDto, ConnectionSourceRecoverOutputDto, ConnectionSourceRecoverOutputAffectedRowsDto, ConnectionSourceRemoveDto, ConnectionSourceRemoveInputDto, ConnectionSourceRemoveInputWhereDto, ConnectionSourceRemoveOutputDto, ConnectionSourceRemoveOutputAffectedRowsDto, ConnectionSourceRestoreDto, ConnectionSourceRestoreInputDto, ConnectionSourceRestoreInputWhereDto, ConnectionSourceRestoreOutputDto, ConnectionSourceSoftDeleteDto, ConnectionSourceSoftDeleteInputDto, ConnectionSourceSoftDeleteInputWhereDto, ConnectionSourceSoftDeleteOutputDto, ConnectionSourceSoftRemoveDto, ConnectionSourceSoftRemoveInputDto, ConnectionSourceSoftRemoveInputWhereDto, ConnectionSourceSoftRemoveOutputDto, ConnectionSourceSoftRemoveOutputAffectedRowsDto, ConnectionSourceUpdateDto, ConnectionSourceUpdateInputDto, ConnectionSourceUpdateInputSetsDto, ConnectionSourceUpdateInputWhereDto, ConnectionSourceUpdateOutputDto, ConnectionSourceUpdateOutputAffectedRowsDto, ConnectionSourceUploadDeleteDto, ConnectionSourceUploadDeleteInputDto, ConnectionSourceUploadDeleteOutputDto, ConnectionSourceUploadDto, ConnectionSourceUploadInputDto, ConnectionSourceUploadOutputDto, ConnectionSourceUpsertDto, ConnectionSourceUpsertInputDto, ConnectionSourceUpsertOutputDto } from "./dto/source.dto";

@Injectable()
export class ConnectionSourceFactory extends CrudFactory<ConnectionSourceEntity> {

// ████████ FindCrudEngine ████████████████████████████████████████
public declare readonly findEngine: FindCrudEngine<
// entity (1)
ConnectionSourceEntity,

// find (8)
ConnectionSourceFindDto,
ConnectionSourceFindInputWhereDto,
ConnectionSourceFindInputSortOrderDto,
ConnectionSourceFindInputGroupByDto,
ConnectionSourceFindInputDto,
ConnectionSourceFindOutputRowsDto,
FindOutputPaginationDto,
ConnectionSourceFindOutputDto,

// find_one_by_id (2)
ConnectionSourceFindOneByIdDto,
ConnectionSourceFindOneByIdInputDto
>;

// ████████ CreateCrudEngine ████████████████████████████████████████
public declare readonly createEngine: CreateCrudEngine<
// entity (1)
ConnectionSourceEntity,

// create (3)
ConnectionSourceCreateDto,
ConnectionSourceCreateInputDto,
ConnectionSourceCreateOutputDto
>;

// ████████ UpdateCrudEngine ████████████████████████████████████████
public declare readonly updateEngine: UpdateCrudEngine<
// entity (1)
ConnectionSourceEntity,

// update (6)
ConnectionSourceUpdateDto,
ConnectionSourceUpdateInputWhereDto,
ConnectionSourceUpdateInputSetsDto,
ConnectionSourceUpdateInputDto,
ConnectionSourceUpdateOutputAffectedRowsDto,
ConnectionSourceUpdateOutputDto
>;

// ████████ DeleteCrudEngine ████████████████████████████████████████
public declare readonly deleteEngine: DeleteCrudEngine<
// entity (1)
ConnectionSourceEntity,

// soft_delete (4)
ConnectionSourceSoftDeleteDto,
ConnectionSourceSoftDeleteInputWhereDto,
ConnectionSourceSoftDeleteInputDto,
ConnectionSourceSoftDeleteOutputDto,

// delete (4)
ConnectionSourceDeleteDto,
ConnectionSourceDeleteInputWhereDto,
ConnectionSourceDeleteInputDto,
ConnectionSourceDeleteOutputDto,

// restore (4)
ConnectionSourceRestoreDto,
ConnectionSourceRestoreInputWhereDto,
ConnectionSourceRestoreInputDto,
ConnectionSourceRestoreOutputDto
>;

// ████████ UpsertCrudEngine ████████████████████████████████████████
public declare readonly upsertEngine: UpsertCrudEngine<
// entity (1)
ConnectionSourceEntity,

// upsert (3)
ConnectionSourceUpsertDto,
ConnectionSourceUpsertInputDto,
ConnectionSourceUpsertOutputDto
>;

// ████████ RemoveCrudEngine ████████████████████████████████████████
public declare readonly removeEngine: RemoveCrudEngine<
// entity (1)
ConnectionSourceEntity,

// soft_remove (5)
ConnectionSourceSoftRemoveDto,
ConnectionSourceSoftRemoveInputWhereDto,
ConnectionSourceSoftRemoveInputDto,
ConnectionSourceSoftRemoveOutputAffectedRowsDto,
ConnectionSourceSoftRemoveOutputDto,

// remove (4)
ConnectionSourceRemoveDto,
ConnectionSourceRemoveInputWhereDto,
ConnectionSourceRemoveInputDto,
ConnectionSourceRemoveOutputAffectedRowsDto,
ConnectionSourceRemoveOutputDto,

// recover (5)
ConnectionSourceRecoverDto,
ConnectionSourceRecoverInputWhereDto,
ConnectionSourceRecoverInputDto,
ConnectionSourceRecoverOutputAffectedRowsDto,
ConnectionSourceRecoverOutputDto
>;

// ████████ UploadCrudEngine ████████████████████████████████████████
public declare readonly uploadEngine: UploadCrudEngine<
// entity (1)
ConnectionSourceEntity,

// upload (3)
ConnectionSourceUploadDto,
ConnectionSourceUploadInputDto,
ConnectionSourceUploadOutputDto,

// upload_delete (3)
ConnectionSourceUploadDeleteDto,
ConnectionSourceUploadDeleteInputDto,
ConnectionSourceUploadDeleteOutputDto
>;

constructor(
// data source
protected readonly dataSource: DataSource,

@InjectRepository(ConnectionSourceEntity)
protected readonly repository: Repository<ConnectionSourceEntity>,

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
    ConnectionSourceEntity,
);

this.logService.setContext(ConnectionSourceFactory.name);

// ████████ initialize FindCrudEngine ██████████████████████████████████████
this.initFindEngine
<
// find (8)
ConnectionSourceFindDto,
ConnectionSourceFindInputWhereDto,
ConnectionSourceFindInputSortOrderDto,
ConnectionSourceFindInputGroupByDto,
ConnectionSourceFindInputDto,
ConnectionSourceFindOutputRowsDto,
FindOutputPaginationDto,
ConnectionSourceFindOutputDto,

// find_one_by_id (2)
ConnectionSourceFindOneByIdDto,
ConnectionSourceFindOneByIdInputDto
>
(
// find (8)
ConnectionSourceFindDto,
ConnectionSourceFindInputWhereDto,
ConnectionSourceFindInputSortOrderDto,
ConnectionSourceFindInputGroupByDto,
ConnectionSourceFindInputDto,
ConnectionSourceFindOutputRowsDto,
FindOutputPaginationDto,
ConnectionSourceFindOutputDto,

// find_one_by_id (2)
ConnectionSourceFindOneByIdDto,
ConnectionSourceFindOneByIdInputDto
);


// ████████ initialize CreateCrudEngine ███████████████████████████████████████
this.initCreateEngine
<
// create (3)
ConnectionSourceCreateDto,
ConnectionSourceCreateInputDto,
ConnectionSourceCreateOutputDto
>
(
// create (3)
ConnectionSourceCreateDto,
ConnectionSourceCreateInputDto,
ConnectionSourceCreateOutputDto
);

// ████████ initialize UpdateCrudEngine ████████████████████████████████████████
this.initUpdateEngine
<
// update (6)
ConnectionSourceUpdateDto,
ConnectionSourceUpdateInputWhereDto,
ConnectionSourceUpdateInputSetsDto,
ConnectionSourceUpdateInputDto,
ConnectionSourceUpdateOutputAffectedRowsDto,
ConnectionSourceUpdateOutputDto
>
(
// update (6)
ConnectionSourceUpdateDto,
ConnectionSourceUpdateInputWhereDto,
ConnectionSourceUpdateInputSetsDto,
ConnectionSourceUpdateInputDto,
ConnectionSourceUpdateOutputAffectedRowsDto,
ConnectionSourceUpdateOutputDto
);


// ████████ initialize DeleteCrudEngine ███████████████████████████████████████████
this.initDeleteEngine
<
// soft_delete (4)
ConnectionSourceSoftDeleteDto,
ConnectionSourceSoftDeleteInputWhereDto,
ConnectionSourceSoftDeleteInputDto,
ConnectionSourceSoftDeleteOutputDto,

// delete (4)
ConnectionSourceDeleteDto,
ConnectionSourceDeleteInputWhereDto,
ConnectionSourceDeleteInputDto,
ConnectionSourceDeleteOutputDto,

// restore (4)
ConnectionSourceRestoreDto,
ConnectionSourceRestoreInputWhereDto,
ConnectionSourceRestoreInputDto,
ConnectionSourceRestoreOutputDto
>
(
// soft_delete (4)
ConnectionSourceSoftDeleteDto,
ConnectionSourceSoftDeleteInputWhereDto,
ConnectionSourceSoftDeleteInputDto,
ConnectionSourceSoftDeleteOutputDto,

// delete (4)
ConnectionSourceDeleteDto,
ConnectionSourceDeleteInputWhereDto,
ConnectionSourceDeleteInputDto,
ConnectionSourceDeleteOutputDto,

// restore (4)
ConnectionSourceRestoreDto,
ConnectionSourceRestoreInputWhereDto,
ConnectionSourceRestoreInputDto,
ConnectionSourceRestoreOutputDto
);



// ████████ initialize UpsertCrudEngine ███████████████████████████████████████████
this.initUpsertEngine
<
// upsert (3)
ConnectionSourceUpsertDto,
ConnectionSourceUpsertInputDto,
ConnectionSourceUpsertOutputDto
>
(
// upsert (3)
ConnectionSourceUpsertDto,
ConnectionSourceUpsertInputDto,
ConnectionSourceUpsertOutputDto
);




// ████████ initialize RemoveCrudEngine ███████████████████████████████████████████
this.initRemoveEngine
<
// soft_remove (5)
ConnectionSourceSoftRemoveDto,
ConnectionSourceSoftRemoveInputWhereDto,
ConnectionSourceSoftRemoveInputDto,
ConnectionSourceSoftRemoveOutputAffectedRowsDto,
ConnectionSourceSoftRemoveOutputDto,

// remove (4)
ConnectionSourceRemoveDto,
ConnectionSourceRemoveInputWhereDto,
ConnectionSourceRemoveInputDto,
ConnectionSourceRemoveOutputAffectedRowsDto,
ConnectionSourceRemoveOutputDto,

// recover (5)
ConnectionSourceRecoverDto,
ConnectionSourceRecoverInputWhereDto,
ConnectionSourceRecoverInputDto,
ConnectionSourceRecoverOutputAffectedRowsDto,
ConnectionSourceRecoverOutputDto
>
(
// soft_remove (5)
ConnectionSourceSoftRemoveDto,
ConnectionSourceSoftRemoveInputWhereDto,
ConnectionSourceSoftRemoveInputDto,
ConnectionSourceSoftRemoveOutputAffectedRowsDto,
ConnectionSourceSoftRemoveOutputDto,

// remove (4)
ConnectionSourceRemoveDto,
ConnectionSourceRemoveInputWhereDto,
ConnectionSourceRemoveInputDto,
ConnectionSourceRemoveOutputAffectedRowsDto,
ConnectionSourceRemoveOutputDto,

// recover (5)
ConnectionSourceRecoverDto,
ConnectionSourceRecoverInputWhereDto,
ConnectionSourceRecoverInputDto,
ConnectionSourceRecoverOutputAffectedRowsDto,
ConnectionSourceRecoverOutputDto
);



// ████████ initialize UploadCrudEngine ███████████████████████████████████████████
this.initUploadEngine
<
// upload (3)
ConnectionSourceUploadDto,
ConnectionSourceUploadInputDto,
ConnectionSourceUploadOutputDto,

// upload_delete (3)
ConnectionSourceUploadDeleteDto,
ConnectionSourceUploadDeleteInputDto,
ConnectionSourceUploadDeleteOutputDto
>
(
// upload (3)
ConnectionSourceUploadDto,
ConnectionSourceUploadInputDto,
ConnectionSourceUploadOutputDto,

// upload_delete (3)
ConnectionSourceUploadDeleteDto,
ConnectionSourceUploadDeleteInputDto,
ConnectionSourceUploadDeleteOutputDto
);


// ████████ initialize ImportExportCrudEngine █████████████████████████████████████

}

}