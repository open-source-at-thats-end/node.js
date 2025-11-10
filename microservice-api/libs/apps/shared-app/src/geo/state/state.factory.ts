import { StateEntity } from "./entities/state.entity";
import { Injectable } from "@nestjs/common";
import { DataSource, Repository } from "typeorm";
import { InjectRepository } from "@nestjs/typeorm";
import { ConfService, CreateCrudEngine, CrudFactory, DataValidationPipe, DeleteCrudEngine, FindCrudEngine, FindOutputPaginationDto, LibraryAppService, LogService, RemoveCrudEngine, UpdateCrudEngine, UploadCrudEngine, UpsertCrudEngine } from "@libs/library-app";
import { SelfGraphqlMicroserviceService } from "@libs/dynamic-app";
import { StateCreateDto, StateCreateInputDto, StateCreateOutputDto, StateDeleteDto, StateDeleteInputDto, StateDeleteInputWhereDto, StateDeleteOutputDto, StateFindDto, StateFindInputDto, StateFindInputGroupByDto, StateFindInputSortOrderDto, StateFindInputWhereDto, StateFindOneByIdDto, StateFindOneByIdInputDto, StateFindOutputDto, StateFindOutputRowsDto, StateRecoverDto, StateRecoverInputDto, StateRecoverInputWhereDto, StateRecoverOutputDto, StateRecoverOutputAffectedRowsDto, StateRemoveDto, StateRemoveInputDto, StateRemoveInputWhereDto, StateRemoveOutputDto, StateRemoveOutputAffectedRowsDto, StateRestoreDto, StateRestoreInputDto, StateRestoreInputWhereDto, StateRestoreOutputDto, StateSoftDeleteDto, StateSoftDeleteInputDto, StateSoftDeleteInputWhereDto, StateSoftDeleteOutputDto, StateSoftRemoveDto, StateSoftRemoveInputDto, StateSoftRemoveInputWhereDto, StateSoftRemoveOutputDto, StateSoftRemoveOutputAffectedRowsDto, StateUpdateDto, StateUpdateInputDto, StateUpdateInputSetsDto, StateUpdateInputWhereDto, StateUpdateOutputDto, StateUpdateOutputAffectedRowsDto, StateUploadDeleteDto, StateUploadDeleteInputDto, StateUploadDeleteOutputDto, StateUploadDto, StateUploadInputDto, StateUploadOutputDto, StateUpsertDto, StateUpsertInputDto, StateUpsertOutputDto } from "./dto/state.dto";

@Injectable()
export class StateFactory extends CrudFactory<StateEntity> {

// ████████ FindCrudEngine ████████████████████████████████████████
public declare readonly findEngine: FindCrudEngine<
// entity (1)
StateEntity,

// find (8)
StateFindDto,
StateFindInputWhereDto,
StateFindInputSortOrderDto,
StateFindInputGroupByDto,
StateFindInputDto,
StateFindOutputRowsDto,
FindOutputPaginationDto,
StateFindOutputDto,

// find_one_by_id (2)
StateFindOneByIdDto,
StateFindOneByIdInputDto
>;

// ████████ CreateCrudEngine ████████████████████████████████████████
public declare readonly createEngine: CreateCrudEngine<
// entity (1)
StateEntity,

// create (3)
StateCreateDto,
StateCreateInputDto,
StateCreateOutputDto
>;

// ████████ UpdateCrudEngine ████████████████████████████████████████
public declare readonly updateEngine: UpdateCrudEngine<
// entity (1)
StateEntity,

// update (6)
StateUpdateDto,
StateUpdateInputWhereDto,
StateUpdateInputSetsDto,
StateUpdateInputDto,
StateUpdateOutputAffectedRowsDto,
StateUpdateOutputDto
>;

// ████████ DeleteCrudEngine ████████████████████████████████████████
public declare readonly deleteEngine: DeleteCrudEngine<
// entity (1)
StateEntity,

// soft_delete (4)
StateSoftDeleteDto,
StateSoftDeleteInputWhereDto,
StateSoftDeleteInputDto,
StateSoftDeleteOutputDto,

// delete (4)
StateDeleteDto,
StateDeleteInputWhereDto,
StateDeleteInputDto,
StateDeleteOutputDto,

// restore (4)
StateRestoreDto,
StateRestoreInputWhereDto,
StateRestoreInputDto,
StateRestoreOutputDto
>;

// ████████ UpsertCrudEngine ████████████████████████████████████████
public declare readonly upsertEngine: UpsertCrudEngine<
// entity (1)
StateEntity,

// upsert (3)
StateUpsertDto,
StateUpsertInputDto,
StateUpsertOutputDto
>;

// ████████ RemoveCrudEngine ████████████████████████████████████████
public declare readonly removeEngine: RemoveCrudEngine<
// entity (1)
StateEntity,

// soft_remove (5)
StateSoftRemoveDto,
StateSoftRemoveInputWhereDto,
StateSoftRemoveInputDto,
StateSoftRemoveOutputAffectedRowsDto,
StateSoftRemoveOutputDto,

// remove (4)
StateRemoveDto,
StateRemoveInputWhereDto,
StateRemoveInputDto,
StateRemoveOutputAffectedRowsDto,
StateRemoveOutputDto,

// recover (5)
StateRecoverDto,
StateRecoverInputWhereDto,
StateRecoverInputDto,
StateRecoverOutputAffectedRowsDto,
StateRecoverOutputDto
>;

// ████████ UploadCrudEngine ████████████████████████████████████████
public declare readonly uploadEngine: UploadCrudEngine<
// entity (1)
StateEntity,

// upload (3)
StateUploadDto,
StateUploadInputDto,
StateUploadOutputDto,

// upload_delete (3)
StateUploadDeleteDto,
StateUploadDeleteInputDto,
StateUploadDeleteOutputDto
>;

constructor(
// data source
protected readonly dataSource: DataSource,

@InjectRepository(StateEntity)
protected readonly repository: Repository<StateEntity>,

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
    StateEntity,
);

this.logService.setContext(StateFactory.name);

// ████████ initialize FindCrudEngine ██████████████████████████████████████
this.initFindEngine
<
// find (8)
StateFindDto,
StateFindInputWhereDto,
StateFindInputSortOrderDto,
StateFindInputGroupByDto,
StateFindInputDto,
StateFindOutputRowsDto,
FindOutputPaginationDto,
StateFindOutputDto,

// find_one_by_id (2)
StateFindOneByIdDto,
StateFindOneByIdInputDto
>
(
// find (8)
StateFindDto,
StateFindInputWhereDto,
StateFindInputSortOrderDto,
StateFindInputGroupByDto,
StateFindInputDto,
StateFindOutputRowsDto,
FindOutputPaginationDto,
StateFindOutputDto,

// find_one_by_id (2)
StateFindOneByIdDto,
StateFindOneByIdInputDto
);


// ████████ initialize CreateCrudEngine ███████████████████████████████████████
this.initCreateEngine
<
// create (3)
StateCreateDto,
StateCreateInputDto,
StateCreateOutputDto
>
(
// create (3)
StateCreateDto,
StateCreateInputDto,
StateCreateOutputDto
);

// ████████ initialize UpdateCrudEngine ████████████████████████████████████████
this.initUpdateEngine
<
// update (6)
StateUpdateDto,
StateUpdateInputWhereDto,
StateUpdateInputSetsDto,
StateUpdateInputDto,
StateUpdateOutputAffectedRowsDto,
StateUpdateOutputDto
>
(
// update (6)
StateUpdateDto,
StateUpdateInputWhereDto,
StateUpdateInputSetsDto,
StateUpdateInputDto,
StateUpdateOutputAffectedRowsDto,
StateUpdateOutputDto
);


// ████████ initialize DeleteCrudEngine ███████████████████████████████████████████
this.initDeleteEngine
<
// soft_delete (4)
StateSoftDeleteDto,
StateSoftDeleteInputWhereDto,
StateSoftDeleteInputDto,
StateSoftDeleteOutputDto,

// delete (4)
StateDeleteDto,
StateDeleteInputWhereDto,
StateDeleteInputDto,
StateDeleteOutputDto,

// restore (4)
StateRestoreDto,
StateRestoreInputWhereDto,
StateRestoreInputDto,
StateRestoreOutputDto
>
(
// soft_delete (4)
StateSoftDeleteDto,
StateSoftDeleteInputWhereDto,
StateSoftDeleteInputDto,
StateSoftDeleteOutputDto,

// delete (4)
StateDeleteDto,
StateDeleteInputWhereDto,
StateDeleteInputDto,
StateDeleteOutputDto,

// restore (4)
StateRestoreDto,
StateRestoreInputWhereDto,
StateRestoreInputDto,
StateRestoreOutputDto
);



// ████████ initialize UpsertCrudEngine ███████████████████████████████████████████
this.initUpsertEngine
<
// upsert (3)
StateUpsertDto,
StateUpsertInputDto,
StateUpsertOutputDto
>
(
// upsert (3)
StateUpsertDto,
StateUpsertInputDto,
StateUpsertOutputDto
);




// ████████ initialize RemoveCrudEngine ███████████████████████████████████████████
this.initRemoveEngine
<
// soft_remove (5)
StateSoftRemoveDto,
StateSoftRemoveInputWhereDto,
StateSoftRemoveInputDto,
StateSoftRemoveOutputAffectedRowsDto,
StateSoftRemoveOutputDto,

// remove (4)
StateRemoveDto,
StateRemoveInputWhereDto,
StateRemoveInputDto,
StateRemoveOutputAffectedRowsDto,
StateRemoveOutputDto,

// recover (5)
StateRecoverDto,
StateRecoverInputWhereDto,
StateRecoverInputDto,
StateRecoverOutputAffectedRowsDto,
StateRecoverOutputDto
>
(
// soft_remove (5)
StateSoftRemoveDto,
StateSoftRemoveInputWhereDto,
StateSoftRemoveInputDto,
StateSoftRemoveOutputAffectedRowsDto,
StateSoftRemoveOutputDto,

// remove (4)
StateRemoveDto,
StateRemoveInputWhereDto,
StateRemoveInputDto,
StateRemoveOutputAffectedRowsDto,
StateRemoveOutputDto,

// recover (5)
StateRecoverDto,
StateRecoverInputWhereDto,
StateRecoverInputDto,
StateRecoverOutputAffectedRowsDto,
StateRecoverOutputDto
);



// ████████ initialize UploadCrudEngine ███████████████████████████████████████████
this.initUploadEngine
<
// upload (3)
StateUploadDto,
StateUploadInputDto,
StateUploadOutputDto,

// upload_delete (3)
StateUploadDeleteDto,
StateUploadDeleteInputDto,
StateUploadDeleteOutputDto
>
(
// upload (3)
StateUploadDto,
StateUploadInputDto,
StateUploadOutputDto,

// upload_delete (3)
StateUploadDeleteDto,
StateUploadDeleteInputDto,
StateUploadDeleteOutputDto
);


// ████████ initialize ImportExportCrudEngine █████████████████████████████████████

}

}