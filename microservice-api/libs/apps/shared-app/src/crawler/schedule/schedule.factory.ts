import { CrawlerScheduleEntity } from "./entities/schedule.entity";
import { Injectable } from "@nestjs/common";
import { DataSource, Repository } from "typeorm";
import { InjectRepository } from "@nestjs/typeorm";
import { ConfService, CreateCrudEngine, CrudFactory, DataValidationPipe, DeleteCrudEngine, FindCrudEngine, FindOutputPaginationDto, LibraryAppService, LogService, RemoveCrudEngine, UpdateCrudEngine, UploadCrudEngine, UpsertCrudEngine } from "@libs/library-app";
import { SelfGraphqlMicroserviceService } from "@libs/dynamic-app";
import { CrawlerScheduleCreateDto, CrawlerScheduleCreateInputDto, CrawlerScheduleCreateOutputDto, CrawlerScheduleDeleteDto, CrawlerScheduleDeleteInputDto, CrawlerScheduleDeleteInputWhereDto, CrawlerScheduleDeleteOutputDto, CrawlerScheduleFindDto, CrawlerScheduleFindInputDto, CrawlerScheduleFindInputGroupByDto, CrawlerScheduleFindInputSortOrderDto, CrawlerScheduleFindInputWhereDto, CrawlerScheduleFindOneByIdDto, CrawlerScheduleFindOneByIdInputDto, CrawlerScheduleFindOutputDto, CrawlerScheduleFindOutputRowsDto, CrawlerScheduleRecoverDto, CrawlerScheduleRecoverInputDto, CrawlerScheduleRecoverInputWhereDto, CrawlerScheduleRecoverOutputDto, CrawlerScheduleRecoverOutputAffectedRowsDto, CrawlerScheduleRemoveDto, CrawlerScheduleRemoveInputDto, CrawlerScheduleRemoveInputWhereDto, CrawlerScheduleRemoveOutputDto, CrawlerScheduleRemoveOutputAffectedRowsDto, CrawlerScheduleRestoreDto, CrawlerScheduleRestoreInputDto, CrawlerScheduleRestoreInputWhereDto, CrawlerScheduleRestoreOutputDto, CrawlerScheduleSoftDeleteDto, CrawlerScheduleSoftDeleteInputDto, CrawlerScheduleSoftDeleteInputWhereDto, CrawlerScheduleSoftDeleteOutputDto, CrawlerScheduleSoftRemoveDto, CrawlerScheduleSoftRemoveInputDto, CrawlerScheduleSoftRemoveInputWhereDto, CrawlerScheduleSoftRemoveOutputDto, CrawlerScheduleSoftRemoveOutputAffectedRowsDto, CrawlerScheduleUpdateDto, CrawlerScheduleUpdateInputDto, CrawlerScheduleUpdateInputSetsDto, CrawlerScheduleUpdateInputWhereDto, CrawlerScheduleUpdateOutputDto, CrawlerScheduleUpdateOutputAffectedRowsDto, CrawlerScheduleUploadDeleteDto, CrawlerScheduleUploadDeleteInputDto, CrawlerScheduleUploadDeleteOutputDto, CrawlerScheduleUploadDto, CrawlerScheduleUploadInputDto, CrawlerScheduleUploadOutputDto, CrawlerScheduleUpsertDto, CrawlerScheduleUpsertInputDto, CrawlerScheduleUpsertOutputDto } from "./dto/schedule.dto";

@Injectable()
export class CrawlerScheduleFactory extends CrudFactory<CrawlerScheduleEntity> {

// ████████ FindCrudEngine ████████████████████████████████████████
public declare readonly findEngine: FindCrudEngine<
// entity (1)
CrawlerScheduleEntity,

// find (8)
CrawlerScheduleFindDto,
CrawlerScheduleFindInputWhereDto,
CrawlerScheduleFindInputSortOrderDto,
CrawlerScheduleFindInputGroupByDto,
CrawlerScheduleFindInputDto,
CrawlerScheduleFindOutputRowsDto,
FindOutputPaginationDto,
CrawlerScheduleFindOutputDto,

// find_one_by_id (2)
CrawlerScheduleFindOneByIdDto,
CrawlerScheduleFindOneByIdInputDto
>;

// ████████ CreateCrudEngine ████████████████████████████████████████
public declare readonly createEngine: CreateCrudEngine<
// entity (1)
CrawlerScheduleEntity,

// create (3)
CrawlerScheduleCreateDto,
CrawlerScheduleCreateInputDto,
CrawlerScheduleCreateOutputDto
>;

// ████████ UpdateCrudEngine ████████████████████████████████████████
public declare readonly updateEngine: UpdateCrudEngine<
// entity (1)
CrawlerScheduleEntity,

// update (6)
CrawlerScheduleUpdateDto,
CrawlerScheduleUpdateInputWhereDto,
CrawlerScheduleUpdateInputSetsDto,
CrawlerScheduleUpdateInputDto,
CrawlerScheduleUpdateOutputAffectedRowsDto,
CrawlerScheduleUpdateOutputDto
>;

// ████████ DeleteCrudEngine ████████████████████████████████████████
public declare readonly deleteEngine: DeleteCrudEngine<
// entity (1)
CrawlerScheduleEntity,

// soft_delete (4)
CrawlerScheduleSoftDeleteDto,
CrawlerScheduleSoftDeleteInputWhereDto,
CrawlerScheduleSoftDeleteInputDto,
CrawlerScheduleSoftDeleteOutputDto,

// delete (4)
CrawlerScheduleDeleteDto,
CrawlerScheduleDeleteInputWhereDto,
CrawlerScheduleDeleteInputDto,
CrawlerScheduleDeleteOutputDto,

// restore (4)
CrawlerScheduleRestoreDto,
CrawlerScheduleRestoreInputWhereDto,
CrawlerScheduleRestoreInputDto,
CrawlerScheduleRestoreOutputDto
>;

// ████████ UpsertCrudEngine ████████████████████████████████████████
public declare readonly upsertEngine: UpsertCrudEngine<
// entity (1)
CrawlerScheduleEntity,

// upsert (3)
CrawlerScheduleUpsertDto,
CrawlerScheduleUpsertInputDto,
CrawlerScheduleUpsertOutputDto
>;

// ████████ RemoveCrudEngine ████████████████████████████████████████
public declare readonly removeEngine: RemoveCrudEngine<
// entity (1)
CrawlerScheduleEntity,

// soft_remove (5)
CrawlerScheduleSoftRemoveDto,
CrawlerScheduleSoftRemoveInputWhereDto,
CrawlerScheduleSoftRemoveInputDto,
CrawlerScheduleSoftRemoveOutputAffectedRowsDto,
CrawlerScheduleSoftRemoveOutputDto,

// remove (4)
CrawlerScheduleRemoveDto,
CrawlerScheduleRemoveInputWhereDto,
CrawlerScheduleRemoveInputDto,
CrawlerScheduleRemoveOutputAffectedRowsDto,
CrawlerScheduleRemoveOutputDto,

// recover (5)
CrawlerScheduleRecoverDto,
CrawlerScheduleRecoverInputWhereDto,
CrawlerScheduleRecoverInputDto,
CrawlerScheduleRecoverOutputAffectedRowsDto,
CrawlerScheduleRecoverOutputDto
>;

// ████████ UploadCrudEngine ████████████████████████████████████████
public declare readonly uploadEngine: UploadCrudEngine<
// entity (1)
CrawlerScheduleEntity,

// upload (3)
CrawlerScheduleUploadDto,
CrawlerScheduleUploadInputDto,
CrawlerScheduleUploadOutputDto,

// upload_delete (3)
CrawlerScheduleUploadDeleteDto,
CrawlerScheduleUploadDeleteInputDto,
CrawlerScheduleUploadDeleteOutputDto
>;

constructor(
// data source
protected readonly dataSource: DataSource,

@InjectRepository(CrawlerScheduleEntity)
protected readonly repository: Repository<CrawlerScheduleEntity>,

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
    CrawlerScheduleEntity,
);

this.logService.setContext(CrawlerScheduleFactory.name);

// ████████ initialize FindCrudEngine ██████████████████████████████████████
this.initFindEngine
<
// find (8)
CrawlerScheduleFindDto,
CrawlerScheduleFindInputWhereDto,
CrawlerScheduleFindInputSortOrderDto,
CrawlerScheduleFindInputGroupByDto,
CrawlerScheduleFindInputDto,
CrawlerScheduleFindOutputRowsDto,
FindOutputPaginationDto,
CrawlerScheduleFindOutputDto,

// find_one_by_id (2)
CrawlerScheduleFindOneByIdDto,
CrawlerScheduleFindOneByIdInputDto
>
(
// find (8)
CrawlerScheduleFindDto,
CrawlerScheduleFindInputWhereDto,
CrawlerScheduleFindInputSortOrderDto,
CrawlerScheduleFindInputGroupByDto,
CrawlerScheduleFindInputDto,
CrawlerScheduleFindOutputRowsDto,
FindOutputPaginationDto,
CrawlerScheduleFindOutputDto,

// find_one_by_id (2)
CrawlerScheduleFindOneByIdDto,
CrawlerScheduleFindOneByIdInputDto
);


// ████████ initialize CreateCrudEngine ███████████████████████████████████████
this.initCreateEngine
<
// create (3)
CrawlerScheduleCreateDto,
CrawlerScheduleCreateInputDto,
CrawlerScheduleCreateOutputDto
>
(
// create (3)
CrawlerScheduleCreateDto,
CrawlerScheduleCreateInputDto,
CrawlerScheduleCreateOutputDto
);

// ████████ initialize UpdateCrudEngine ████████████████████████████████████████
this.initUpdateEngine
<
// update (6)
CrawlerScheduleUpdateDto,
CrawlerScheduleUpdateInputWhereDto,
CrawlerScheduleUpdateInputSetsDto,
CrawlerScheduleUpdateInputDto,
CrawlerScheduleUpdateOutputAffectedRowsDto,
CrawlerScheduleUpdateOutputDto
>
(
// update (6)
CrawlerScheduleUpdateDto,
CrawlerScheduleUpdateInputWhereDto,
CrawlerScheduleUpdateInputSetsDto,
CrawlerScheduleUpdateInputDto,
CrawlerScheduleUpdateOutputAffectedRowsDto,
CrawlerScheduleUpdateOutputDto
);


// ████████ initialize DeleteCrudEngine ███████████████████████████████████████████
this.initDeleteEngine
<
// soft_delete (4)
CrawlerScheduleSoftDeleteDto,
CrawlerScheduleSoftDeleteInputWhereDto,
CrawlerScheduleSoftDeleteInputDto,
CrawlerScheduleSoftDeleteOutputDto,

// delete (4)
CrawlerScheduleDeleteDto,
CrawlerScheduleDeleteInputWhereDto,
CrawlerScheduleDeleteInputDto,
CrawlerScheduleDeleteOutputDto,

// restore (4)
CrawlerScheduleRestoreDto,
CrawlerScheduleRestoreInputWhereDto,
CrawlerScheduleRestoreInputDto,
CrawlerScheduleRestoreOutputDto
>
(
// soft_delete (4)
CrawlerScheduleSoftDeleteDto,
CrawlerScheduleSoftDeleteInputWhereDto,
CrawlerScheduleSoftDeleteInputDto,
CrawlerScheduleSoftDeleteOutputDto,

// delete (4)
CrawlerScheduleDeleteDto,
CrawlerScheduleDeleteInputWhereDto,
CrawlerScheduleDeleteInputDto,
CrawlerScheduleDeleteOutputDto,

// restore (4)
CrawlerScheduleRestoreDto,
CrawlerScheduleRestoreInputWhereDto,
CrawlerScheduleRestoreInputDto,
CrawlerScheduleRestoreOutputDto
);



// ████████ initialize UpsertCrudEngine ███████████████████████████████████████████
this.initUpsertEngine
<
// upsert (3)
CrawlerScheduleUpsertDto,
CrawlerScheduleUpsertInputDto,
CrawlerScheduleUpsertOutputDto
>
(
// upsert (3)
CrawlerScheduleUpsertDto,
CrawlerScheduleUpsertInputDto,
CrawlerScheduleUpsertOutputDto
);




// ████████ initialize RemoveCrudEngine ███████████████████████████████████████████
this.initRemoveEngine
<
// soft_remove (5)
CrawlerScheduleSoftRemoveDto,
CrawlerScheduleSoftRemoveInputWhereDto,
CrawlerScheduleSoftRemoveInputDto,
CrawlerScheduleSoftRemoveOutputAffectedRowsDto,
CrawlerScheduleSoftRemoveOutputDto,

// remove (4)
CrawlerScheduleRemoveDto,
CrawlerScheduleRemoveInputWhereDto,
CrawlerScheduleRemoveInputDto,
CrawlerScheduleRemoveOutputAffectedRowsDto,
CrawlerScheduleRemoveOutputDto,

// recover (5)
CrawlerScheduleRecoverDto,
CrawlerScheduleRecoverInputWhereDto,
CrawlerScheduleRecoverInputDto,
CrawlerScheduleRecoverOutputAffectedRowsDto,
CrawlerScheduleRecoverOutputDto
>
(
// soft_remove (5)
CrawlerScheduleSoftRemoveDto,
CrawlerScheduleSoftRemoveInputWhereDto,
CrawlerScheduleSoftRemoveInputDto,
CrawlerScheduleSoftRemoveOutputAffectedRowsDto,
CrawlerScheduleSoftRemoveOutputDto,

// remove (4)
CrawlerScheduleRemoveDto,
CrawlerScheduleRemoveInputWhereDto,
CrawlerScheduleRemoveInputDto,
CrawlerScheduleRemoveOutputAffectedRowsDto,
CrawlerScheduleRemoveOutputDto,

// recover (5)
CrawlerScheduleRecoverDto,
CrawlerScheduleRecoverInputWhereDto,
CrawlerScheduleRecoverInputDto,
CrawlerScheduleRecoverOutputAffectedRowsDto,
CrawlerScheduleRecoverOutputDto
);



// ████████ initialize UploadCrudEngine ███████████████████████████████████████████
this.initUploadEngine
<
// upload (3)
CrawlerScheduleUploadDto,
CrawlerScheduleUploadInputDto,
CrawlerScheduleUploadOutputDto,

// upload_delete (3)
CrawlerScheduleUploadDeleteDto,
CrawlerScheduleUploadDeleteInputDto,
CrawlerScheduleUploadDeleteOutputDto
>
(
// upload (3)
CrawlerScheduleUploadDto,
CrawlerScheduleUploadInputDto,
CrawlerScheduleUploadOutputDto,

// upload_delete (3)
CrawlerScheduleUploadDeleteDto,
CrawlerScheduleUploadDeleteInputDto,
CrawlerScheduleUploadDeleteOutputDto
);


// ████████ initialize ImportExportCrudEngine █████████████████████████████████████

}

}