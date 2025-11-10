import { AlertDurationEntity } from "./entities/alert.duration.entity";
import { Injectable } from "@nestjs/common";
import { DataSource, Repository } from "typeorm";
import { InjectRepository } from "@nestjs/typeorm";
import { ConfService, CreateCrudEngine, CrudFactory, DataValidationPipe, DeleteCrudEngine, FindCrudEngine, FindOutputPaginationDto, LibraryAppService, LogService, RemoveCrudEngine, UpdateCrudEngine, UploadCrudEngine, UpsertCrudEngine } from "@libs/library-app";
import { SelfGraphqlMicroserviceService } from '@libs/dynamic-app';
import { AlertDurationCreateDto, AlertDurationCreateInputDto, AlertDurationCreateOutputDto, AlertDurationDeleteDto, AlertDurationDeleteInputDto, AlertDurationDeleteInputWhereDto, AlertDurationDeleteOutputDto, AlertDurationFindDto, AlertDurationFindInputDto, AlertDurationFindInputGroupByDto, AlertDurationFindInputSortOrderDto, AlertDurationFindInputWhereDto, AlertDurationFindOneByIdDto, AlertDurationFindOneByIdInputDto, AlertDurationFindOutputDto, AlertDurationFindOutputRowsDto, AlertDurationRecoverDto, AlertDurationRecoverInputDto, AlertDurationRecoverInputWhereDto, AlertDurationRecoverOutputDto, AlertDurationRecoverOutputAffectedRowsDto, AlertDurationRemoveDto, AlertDurationRemoveInputDto, AlertDurationRemoveInputWhereDto, AlertDurationRemoveOutputDto, AlertDurationRemoveOutputAffectedRowsDto, AlertDurationRestoreDto, AlertDurationRestoreInputDto, AlertDurationRestoreInputWhereDto, AlertDurationRestoreOutputDto, AlertDurationSoftDeleteDto, AlertDurationSoftDeleteInputDto, AlertDurationSoftDeleteInputWhereDto, AlertDurationSoftDeleteOutputDto, AlertDurationSoftRemoveDto, AlertDurationSoftRemoveInputDto, AlertDurationSoftRemoveInputWhereDto, AlertDurationSoftRemoveOutputDto, AlertDurationSoftRemoveOutputAffectedRowsDto, AlertDurationUpdateDto, AlertDurationUpdateInputDto, AlertDurationUpdateInputSetsDto, AlertDurationUpdateInputWhereDto, AlertDurationUpdateOutputDto, AlertDurationUpdateOutputAffectedRowsDto, AlertDurationUploadDeleteDto, AlertDurationUploadDeleteInputDto, AlertDurationUploadDeleteOutputDto, AlertDurationUploadDto, AlertDurationUploadInputDto, AlertDurationUploadOutputDto, AlertDurationUpsertDto, AlertDurationUpsertInputDto, AlertDurationUpsertOutputDto } from "./dto/alert.duration.dto";

@Injectable()
export class AlertDurationFactory extends CrudFactory<AlertDurationEntity> {

// ████████ FindCrudEngine ████████████████████████████████████████
public declare readonly findEngine: FindCrudEngine<
// entity (1)
AlertDurationEntity,

// find (8)
AlertDurationFindDto,
AlertDurationFindInputWhereDto,
AlertDurationFindInputSortOrderDto,
AlertDurationFindInputGroupByDto,
AlertDurationFindInputDto,
AlertDurationFindOutputRowsDto,
FindOutputPaginationDto,
AlertDurationFindOutputDto,

// find_one_by_id (2)
AlertDurationFindOneByIdDto,
AlertDurationFindOneByIdInputDto
>;

// ████████ CreateCrudEngine ████████████████████████████████████████
public declare readonly createEngine: CreateCrudEngine<
// entity (1)
AlertDurationEntity,

// create (3)
AlertDurationCreateDto,
AlertDurationCreateInputDto,
AlertDurationCreateOutputDto
>;

// ████████ UpdateCrudEngine ████████████████████████████████████████
public declare readonly updateEngine: UpdateCrudEngine<
// entity (1)
AlertDurationEntity,

// update (6)
AlertDurationUpdateDto,
AlertDurationUpdateInputWhereDto,
AlertDurationUpdateInputSetsDto,
AlertDurationUpdateInputDto,
AlertDurationUpdateOutputAffectedRowsDto,
AlertDurationUpdateOutputDto
>;

// ████████ DeleteCrudEngine ████████████████████████████████████████
public declare readonly deleteEngine: DeleteCrudEngine<
// entity (1)
AlertDurationEntity,

// soft_delete (4)
AlertDurationSoftDeleteDto,
AlertDurationSoftDeleteInputWhereDto,
AlertDurationSoftDeleteInputDto,
AlertDurationSoftDeleteOutputDto,

// delete (4)
AlertDurationDeleteDto,
AlertDurationDeleteInputWhereDto,
AlertDurationDeleteInputDto,
AlertDurationDeleteOutputDto,

// restore (4)
AlertDurationRestoreDto,
AlertDurationRestoreInputWhereDto,
AlertDurationRestoreInputDto,
AlertDurationRestoreOutputDto
>;

// ████████ UpsertCrudEngine ████████████████████████████████████████
public declare readonly upsertEngine: UpsertCrudEngine<
// entity (1)
AlertDurationEntity,

// upsert (3)
AlertDurationUpsertDto,
AlertDurationUpsertInputDto,
AlertDurationUpsertOutputDto
>;

// ████████ RemoveCrudEngine ████████████████████████████████████████
public declare readonly removeEngine: RemoveCrudEngine<
// entity (1)
AlertDurationEntity,

// soft_remove (5)
AlertDurationSoftRemoveDto,
AlertDurationSoftRemoveInputWhereDto,
AlertDurationSoftRemoveInputDto,
AlertDurationSoftRemoveOutputAffectedRowsDto,
AlertDurationSoftRemoveOutputDto,

// remove (4)
AlertDurationRemoveDto,
AlertDurationRemoveInputWhereDto,
AlertDurationRemoveInputDto,
AlertDurationRemoveOutputAffectedRowsDto,
AlertDurationRemoveOutputDto,

// recover (5)
AlertDurationRecoverDto,
AlertDurationRecoverInputWhereDto,
AlertDurationRecoverInputDto,
AlertDurationRecoverOutputAffectedRowsDto,
AlertDurationRecoverOutputDto
>;

// ████████ UploadCrudEngine ████████████████████████████████████████
public declare readonly uploadEngine: UploadCrudEngine<
// entity (1)
AlertDurationEntity,

// upload (3)
AlertDurationUploadDto,
AlertDurationUploadInputDto,
AlertDurationUploadOutputDto,

// upload_delete (3)
AlertDurationUploadDeleteDto,
AlertDurationUploadDeleteInputDto,
AlertDurationUploadDeleteOutputDto
>;

constructor(
// data source
protected readonly dataSource: DataSource,

@InjectRepository(AlertDurationEntity)
protected readonly repository: Repository<AlertDurationEntity>,

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
    AlertDurationEntity,
);

this.logService.setContext(AlertDurationFactory.name);

// ████████ initialize FindCrudEngine ██████████████████████████████████████
this.initFindEngine
<
// find (8)
AlertDurationFindDto,
AlertDurationFindInputWhereDto,
AlertDurationFindInputSortOrderDto,
AlertDurationFindInputGroupByDto,
AlertDurationFindInputDto,
AlertDurationFindOutputRowsDto,
FindOutputPaginationDto,
AlertDurationFindOutputDto,

// find_one_by_id (2)
AlertDurationFindOneByIdDto,
AlertDurationFindOneByIdInputDto
>
(
// find (8)
AlertDurationFindDto,
AlertDurationFindInputWhereDto,
AlertDurationFindInputSortOrderDto,
AlertDurationFindInputGroupByDto,
AlertDurationFindInputDto,
AlertDurationFindOutputRowsDto,
FindOutputPaginationDto,
AlertDurationFindOutputDto,

// find_one_by_id (2)
AlertDurationFindOneByIdDto,
AlertDurationFindOneByIdInputDto
);


// ████████ initialize CreateCrudEngine ███████████████████████████████████████
this.initCreateEngine
<
// create (3)
AlertDurationCreateDto,
AlertDurationCreateInputDto,
AlertDurationCreateOutputDto
>
(
// create (3)
AlertDurationCreateDto,
AlertDurationCreateInputDto,
AlertDurationCreateOutputDto
);

// ████████ initialize UpdateCrudEngine ████████████████████████████████████████
this.initUpdateEngine
<
// update (6)
AlertDurationUpdateDto,
AlertDurationUpdateInputWhereDto,
AlertDurationUpdateInputSetsDto,
AlertDurationUpdateInputDto,
AlertDurationUpdateOutputAffectedRowsDto,
AlertDurationUpdateOutputDto
>
(
// update (6)
AlertDurationUpdateDto,
AlertDurationUpdateInputWhereDto,
AlertDurationUpdateInputSetsDto,
AlertDurationUpdateInputDto,
AlertDurationUpdateOutputAffectedRowsDto,
AlertDurationUpdateOutputDto
);


// ████████ initialize DeleteCrudEngine ███████████████████████████████████████████
this.initDeleteEngine
<
// soft_delete (4)
AlertDurationSoftDeleteDto,
AlertDurationSoftDeleteInputWhereDto,
AlertDurationSoftDeleteInputDto,
AlertDurationSoftDeleteOutputDto,

// delete (4)
AlertDurationDeleteDto,
AlertDurationDeleteInputWhereDto,
AlertDurationDeleteInputDto,
AlertDurationDeleteOutputDto,

// restore (4)
AlertDurationRestoreDto,
AlertDurationRestoreInputWhereDto,
AlertDurationRestoreInputDto,
AlertDurationRestoreOutputDto
>
(
// soft_delete (4)
AlertDurationSoftDeleteDto,
AlertDurationSoftDeleteInputWhereDto,
AlertDurationSoftDeleteInputDto,
AlertDurationSoftDeleteOutputDto,

// delete (4)
AlertDurationDeleteDto,
AlertDurationDeleteInputWhereDto,
AlertDurationDeleteInputDto,
AlertDurationDeleteOutputDto,

// restore (4)
AlertDurationRestoreDto,
AlertDurationRestoreInputWhereDto,
AlertDurationRestoreInputDto,
AlertDurationRestoreOutputDto
);



// ████████ initialize UpsertCrudEngine ███████████████████████████████████████████
this.initUpsertEngine
<
// upsert (3)
AlertDurationUpsertDto,
AlertDurationUpsertInputDto,
AlertDurationUpsertOutputDto
>
(
// upsert (3)
AlertDurationUpsertDto,
AlertDurationUpsertInputDto,
AlertDurationUpsertOutputDto
);




// ████████ initialize RemoveCrudEngine ███████████████████████████████████████████
this.initRemoveEngine
<
// soft_remove (5)
AlertDurationSoftRemoveDto,
AlertDurationSoftRemoveInputWhereDto,
AlertDurationSoftRemoveInputDto,
AlertDurationSoftRemoveOutputAffectedRowsDto,
AlertDurationSoftRemoveOutputDto,

// remove (4)
AlertDurationRemoveDto,
AlertDurationRemoveInputWhereDto,
AlertDurationRemoveInputDto,
AlertDurationRemoveOutputAffectedRowsDto,
AlertDurationRemoveOutputDto,

// recover (5)
AlertDurationRecoverDto,
AlertDurationRecoverInputWhereDto,
AlertDurationRecoverInputDto,
AlertDurationRecoverOutputAffectedRowsDto,
AlertDurationRecoverOutputDto
>
(
// soft_remove (5)
AlertDurationSoftRemoveDto,
AlertDurationSoftRemoveInputWhereDto,
AlertDurationSoftRemoveInputDto,
AlertDurationSoftRemoveOutputAffectedRowsDto,
AlertDurationSoftRemoveOutputDto,

// remove (4)
AlertDurationRemoveDto,
AlertDurationRemoveInputWhereDto,
AlertDurationRemoveInputDto,
AlertDurationRemoveOutputAffectedRowsDto,
AlertDurationRemoveOutputDto,

// recover (5)
AlertDurationRecoverDto,
AlertDurationRecoverInputWhereDto,
AlertDurationRecoverInputDto,
AlertDurationRecoverOutputAffectedRowsDto,
AlertDurationRecoverOutputDto
);



// ████████ initialize UploadCrudEngine ███████████████████████████████████████████
this.initUploadEngine
<
// upload (3)
AlertDurationUploadDto,
AlertDurationUploadInputDto,
AlertDurationUploadOutputDto,

// upload_delete (3)
AlertDurationUploadDeleteDto,
AlertDurationUploadDeleteInputDto,
AlertDurationUploadDeleteOutputDto
>
(
// upload (3)
AlertDurationUploadDto,
AlertDurationUploadInputDto,
AlertDurationUploadOutputDto,

// upload_delete (3)
AlertDurationUploadDeleteDto,
AlertDurationUploadDeleteInputDto,
AlertDurationUploadDeleteOutputDto
);


// ████████ initialize ImportExportCrudEngine █████████████████████████████████████

}

}