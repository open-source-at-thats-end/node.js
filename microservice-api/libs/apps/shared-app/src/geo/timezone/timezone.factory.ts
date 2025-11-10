import { TimezoneEntity } from "./entities/timezone.entity";
import { Injectable } from "@nestjs/common";
import { DataSource, Repository } from "typeorm";
import { InjectRepository } from "@nestjs/typeorm";
import { ConfService, CreateCrudEngine, CrudFactory, DataValidationPipe, DeleteCrudEngine, FindCrudEngine, FindOutputPaginationDto, LibraryAppService, LogService, RemoveCrudEngine, UpdateCrudEngine, UploadCrudEngine, UpsertCrudEngine } from "@libs/library-app";
import { TimezoneCreateDto, TimezoneCreateInputDto, TimezoneCreateOutputDto, TimezoneDeleteDto, TimezoneDeleteInputDto, TimezoneDeleteInputWhereDto, TimezoneDeleteOutputDto, TimezoneFindDto, TimezoneFindInputDto, TimezoneFindInputGroupByDto, TimezoneFindInputSortOrderDto, TimezoneFindInputWhereDto, TimezoneFindOneByIdDto, TimezoneFindOneByIdInputDto, TimezoneFindOutputDto, TimezoneFindOutputRowsDto, TimezoneRecoverDto, TimezoneRecoverInputDto, TimezoneRecoverInputWhereDto, TimezoneRecoverOutputDto, TimezoneRecoverOutputAffectedRowsDto, TimezoneRemoveDto, TimezoneRemoveInputDto, TimezoneRemoveInputWhereDto, TimezoneRemoveOutputDto, TimezoneRemoveOutputAffectedRowsDto, TimezoneRestoreDto, TimezoneRestoreInputDto, TimezoneRestoreInputWhereDto, TimezoneRestoreOutputDto, TimezoneSoftDeleteDto, TimezoneSoftDeleteInputDto, TimezoneSoftDeleteInputWhereDto, TimezoneSoftDeleteOutputDto, TimezoneSoftRemoveDto, TimezoneSoftRemoveInputDto, TimezoneSoftRemoveInputWhereDto, TimezoneSoftRemoveOutputDto, TimezoneSoftRemoveOutputAffectedRowsDto, TimezoneUpdateDto, TimezoneUpdateInputDto, TimezoneUpdateInputSetsDto, TimezoneUpdateInputWhereDto, TimezoneUpdateOutputDto, TimezoneUpdateOutputAffectedRowsDto, TimezoneUploadDeleteDto, TimezoneUploadDeleteInputDto, TimezoneUploadDeleteOutputDto, TimezoneUploadDto, TimezoneUploadInputDto, TimezoneUploadOutputDto, TimezoneUpsertDto, TimezoneUpsertInputDto, TimezoneUpsertOutputDto } from "./dto/timezone.dto";
import { SelfGraphqlMicroserviceService } from "@libs/dynamic-app";

@Injectable()
export class TimezoneFactory extends CrudFactory<TimezoneEntity> {

// ████████ FindCrudEngine ████████████████████████████████████████
public declare readonly findEngine: FindCrudEngine<
// entity (1)
TimezoneEntity,

// find (8)
TimezoneFindDto,
TimezoneFindInputWhereDto,
TimezoneFindInputSortOrderDto,
TimezoneFindInputGroupByDto,
TimezoneFindInputDto,
TimezoneFindOutputRowsDto,
FindOutputPaginationDto,
TimezoneFindOutputDto,

// find_one_by_id (2)
TimezoneFindOneByIdDto,
TimezoneFindOneByIdInputDto
>;

// ████████ CreateCrudEngine ████████████████████████████████████████
public declare readonly createEngine: CreateCrudEngine<
// entity (1)
TimezoneEntity,

// create (3)
TimezoneCreateDto,
TimezoneCreateInputDto,
TimezoneCreateOutputDto
>;

// ████████ UpdateCrudEngine ████████████████████████████████████████
public declare readonly updateEngine: UpdateCrudEngine<
// entity (1)
TimezoneEntity,

// update (6)
TimezoneUpdateDto,
TimezoneUpdateInputWhereDto,
TimezoneUpdateInputSetsDto,
TimezoneUpdateInputDto,
TimezoneUpdateOutputAffectedRowsDto,
TimezoneUpdateOutputDto
>;

// ████████ DeleteCrudEngine ████████████████████████████████████████
public declare readonly deleteEngine: DeleteCrudEngine<
// entity (1)
TimezoneEntity,

// soft_delete (4)
TimezoneSoftDeleteDto,
TimezoneSoftDeleteInputWhereDto,
TimezoneSoftDeleteInputDto,
TimezoneSoftDeleteOutputDto,

// delete (4)
TimezoneDeleteDto,
TimezoneDeleteInputWhereDto,
TimezoneDeleteInputDto,
TimezoneDeleteOutputDto,

// restore (4)
TimezoneRestoreDto,
TimezoneRestoreInputWhereDto,
TimezoneRestoreInputDto,
TimezoneRestoreOutputDto
>;

// ████████ UpsertCrudEngine ████████████████████████████████████████
public declare readonly upsertEngine: UpsertCrudEngine<
// entity (1)
TimezoneEntity,

// upsert (3)
TimezoneUpsertDto,
TimezoneUpsertInputDto,
TimezoneUpsertOutputDto
>;

// ████████ RemoveCrudEngine ████████████████████████████████████████
public declare readonly removeEngine: RemoveCrudEngine<
// entity (1)
TimezoneEntity,

// soft_remove (5)
TimezoneSoftRemoveDto,
TimezoneSoftRemoveInputWhereDto,
TimezoneSoftRemoveInputDto,
TimezoneSoftRemoveOutputAffectedRowsDto,
TimezoneSoftRemoveOutputDto,

// remove (4)
TimezoneRemoveDto,
TimezoneRemoveInputWhereDto,
TimezoneRemoveInputDto,
TimezoneRemoveOutputAffectedRowsDto,
TimezoneRemoveOutputDto,

// recover (5)
TimezoneRecoverDto,
TimezoneRecoverInputWhereDto,
TimezoneRecoverInputDto,
TimezoneRecoverOutputAffectedRowsDto,
TimezoneRecoverOutputDto
>;

// ████████ UploadCrudEngine ████████████████████████████████████████
public declare readonly uploadEngine: UploadCrudEngine<
// entity (1)
TimezoneEntity,

// upload (3)
TimezoneUploadDto,
TimezoneUploadInputDto,
TimezoneUploadOutputDto,

// upload_delete (3)
TimezoneUploadDeleteDto,
TimezoneUploadDeleteInputDto,
TimezoneUploadDeleteOutputDto
>;

constructor(
// data source
protected readonly dataSource: DataSource,

@InjectRepository(TimezoneEntity)
protected readonly repository: Repository<TimezoneEntity>,

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
    TimezoneEntity,
);

this.logService.setContext(TimezoneFactory.name);

// ████████ initialize FindCrudEngine ██████████████████████████████████████
this.initFindEngine
<
// find (8)
TimezoneFindDto,
TimezoneFindInputWhereDto,
TimezoneFindInputSortOrderDto,
TimezoneFindInputGroupByDto,
TimezoneFindInputDto,
TimezoneFindOutputRowsDto,
FindOutputPaginationDto,
TimezoneFindOutputDto,

// find_one_by_id (2)
TimezoneFindOneByIdDto,
TimezoneFindOneByIdInputDto
>
(
// find (8)
TimezoneFindDto,
TimezoneFindInputWhereDto,
TimezoneFindInputSortOrderDto,
TimezoneFindInputGroupByDto,
TimezoneFindInputDto,
TimezoneFindOutputRowsDto,
FindOutputPaginationDto,
TimezoneFindOutputDto,

// find_one_by_id (2)
TimezoneFindOneByIdDto,
TimezoneFindOneByIdInputDto
);


// ████████ initialize CreateCrudEngine ███████████████████████████████████████
this.initCreateEngine
<
// create (3)
TimezoneCreateDto,
TimezoneCreateInputDto,
TimezoneCreateOutputDto
>
(
// create (3)
TimezoneCreateDto,
TimezoneCreateInputDto,
TimezoneCreateOutputDto
);

// ████████ initialize UpdateCrudEngine ████████████████████████████████████████
this.initUpdateEngine
<
// update (6)
TimezoneUpdateDto,
TimezoneUpdateInputWhereDto,
TimezoneUpdateInputSetsDto,
TimezoneUpdateInputDto,
TimezoneUpdateOutputAffectedRowsDto,
TimezoneUpdateOutputDto
>
(
// update (6)
TimezoneUpdateDto,
TimezoneUpdateInputWhereDto,
TimezoneUpdateInputSetsDto,
TimezoneUpdateInputDto,
TimezoneUpdateOutputAffectedRowsDto,
TimezoneUpdateOutputDto
);


// ████████ initialize DeleteCrudEngine ███████████████████████████████████████████
this.initDeleteEngine
<
// soft_delete (4)
TimezoneSoftDeleteDto,
TimezoneSoftDeleteInputWhereDto,
TimezoneSoftDeleteInputDto,
TimezoneSoftDeleteOutputDto,

// delete (4)
TimezoneDeleteDto,
TimezoneDeleteInputWhereDto,
TimezoneDeleteInputDto,
TimezoneDeleteOutputDto,

// restore (4)
TimezoneRestoreDto,
TimezoneRestoreInputWhereDto,
TimezoneRestoreInputDto,
TimezoneRestoreOutputDto
>
(
// soft_delete (4)
TimezoneSoftDeleteDto,
TimezoneSoftDeleteInputWhereDto,
TimezoneSoftDeleteInputDto,
TimezoneSoftDeleteOutputDto,

// delete (4)
TimezoneDeleteDto,
TimezoneDeleteInputWhereDto,
TimezoneDeleteInputDto,
TimezoneDeleteOutputDto,

// restore (4)
TimezoneRestoreDto,
TimezoneRestoreInputWhereDto,
TimezoneRestoreInputDto,
TimezoneRestoreOutputDto
);



// ████████ initialize UpsertCrudEngine ███████████████████████████████████████████
this.initUpsertEngine
<
// upsert (3)
TimezoneUpsertDto,
TimezoneUpsertInputDto,
TimezoneUpsertOutputDto
>
(
// upsert (3)
TimezoneUpsertDto,
TimezoneUpsertInputDto,
TimezoneUpsertOutputDto
);




// ████████ initialize RemoveCrudEngine ███████████████████████████████████████████
this.initRemoveEngine
<
// soft_remove (5)
TimezoneSoftRemoveDto,
TimezoneSoftRemoveInputWhereDto,
TimezoneSoftRemoveInputDto,
TimezoneSoftRemoveOutputAffectedRowsDto,
TimezoneSoftRemoveOutputDto,

// remove (4)
TimezoneRemoveDto,
TimezoneRemoveInputWhereDto,
TimezoneRemoveInputDto,
TimezoneRemoveOutputAffectedRowsDto,
TimezoneRemoveOutputDto,

// recover (5)
TimezoneRecoverDto,
TimezoneRecoverInputWhereDto,
TimezoneRecoverInputDto,
TimezoneRecoverOutputAffectedRowsDto,
TimezoneRecoverOutputDto
>
(
// soft_remove (5)
TimezoneSoftRemoveDto,
TimezoneSoftRemoveInputWhereDto,
TimezoneSoftRemoveInputDto,
TimezoneSoftRemoveOutputAffectedRowsDto,
TimezoneSoftRemoveOutputDto,

// remove (4)
TimezoneRemoveDto,
TimezoneRemoveInputWhereDto,
TimezoneRemoveInputDto,
TimezoneRemoveOutputAffectedRowsDto,
TimezoneRemoveOutputDto,

// recover (5)
TimezoneRecoverDto,
TimezoneRecoverInputWhereDto,
TimezoneRecoverInputDto,
TimezoneRecoverOutputAffectedRowsDto,
TimezoneRecoverOutputDto
);



// ████████ initialize UploadCrudEngine ███████████████████████████████████████████
this.initUploadEngine
<
// upload (3)
TimezoneUploadDto,
TimezoneUploadInputDto,
TimezoneUploadOutputDto,

// upload_delete (3)
TimezoneUploadDeleteDto,
TimezoneUploadDeleteInputDto,
TimezoneUploadDeleteOutputDto
>
(
// upload (3)
TimezoneUploadDto,
TimezoneUploadInputDto,
TimezoneUploadOutputDto,

// upload_delete (3)
TimezoneUploadDeleteDto,
TimezoneUploadDeleteInputDto,
TimezoneUploadDeleteOutputDto
);


// ████████ initialize ImportExportCrudEngine █████████████████████████████████████

}

}