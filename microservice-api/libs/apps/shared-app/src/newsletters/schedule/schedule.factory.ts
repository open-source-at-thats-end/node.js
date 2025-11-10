import { NewsLetterScheduleEntity } from "./entities/schedule.entity";
import { Injectable } from "@nestjs/common";
import { DataSource, Repository } from "typeorm";
import { InjectRepository } from "@nestjs/typeorm";
import { ConfService, CreateCrudEngine, CrudFactory, DataValidationPipe, DeleteCrudEngine, FindCrudEngine, FindOutputPaginationDto, LibraryAppService, LogService, RemoveCrudEngine, UpdateCrudEngine, UploadCrudEngine, UpsertCrudEngine } from "@libs/library-app";
import { SelfGraphqlMicroserviceService } from '@libs/dynamic-app';
import { NewsLetterScheduleCreateDto, NewsLetterScheduleCreateInputDto, NewsLetterScheduleCreateOutputDto, NewsLetterScheduleDeleteDto, NewsLetterScheduleDeleteInputDto, NewsLetterScheduleDeleteInputWhereDto, NewsLetterScheduleDeleteOutputDto, NewsLetterScheduleFindDto, NewsLetterScheduleFindInputDto, NewsLetterScheduleFindInputGroupByDto, NewsLetterScheduleFindInputSortOrderDto, NewsLetterScheduleFindInputWhereDto, NewsLetterScheduleFindOneByIdDto, NewsLetterScheduleFindOneByIdInputDto, NewsLetterScheduleFindOutputDto, NewsLetterScheduleFindOutputRowsDto, NewsLetterScheduleRecoverDto, NewsLetterScheduleRecoverInputDto, NewsLetterScheduleRecoverInputWhereDto, NewsLetterScheduleRecoverOutputDto, NewsLetterScheduleRecoverOutputAffectedRowsDto, NewsLetterScheduleRemoveDto, NewsLetterScheduleRemoveInputDto, NewsLetterScheduleRemoveInputWhereDto, NewsLetterScheduleRemoveOutputDto, NewsLetterScheduleRemoveOutputAffectedRowsDto, NewsLetterScheduleRestoreDto, NewsLetterScheduleRestoreInputDto, NewsLetterScheduleRestoreInputWhereDto, NewsLetterScheduleRestoreOutputDto, NewsLetterScheduleSoftDeleteDto, NewsLetterScheduleSoftDeleteInputDto, NewsLetterScheduleSoftDeleteInputWhereDto, NewsLetterScheduleSoftDeleteOutputDto, NewsLetterScheduleSoftRemoveDto, NewsLetterScheduleSoftRemoveInputDto, NewsLetterScheduleSoftRemoveInputWhereDto, NewsLetterScheduleSoftRemoveOutputDto, NewsLetterScheduleSoftRemoveOutputAffectedRowsDto, NewsLetterScheduleUpdateDto, NewsLetterScheduleUpdateInputDto, NewsLetterScheduleUpdateInputSetsDto, NewsLetterScheduleUpdateInputWhereDto, NewsLetterScheduleUpdateOutputDto, NewsLetterScheduleUpdateOutputAffectedRowsDto, NewsLetterScheduleUploadDeleteDto, NewsLetterScheduleUploadDeleteInputDto, NewsLetterScheduleUploadDeleteOutputDto, NewsLetterScheduleUploadDto, NewsLetterScheduleUploadInputDto, NewsLetterScheduleUploadOutputDto, NewsLetterScheduleUpsertDto, NewsLetterScheduleUpsertInputDto, NewsLetterScheduleUpsertOutputDto } from "./dto/schedule.dto";

@Injectable()
export class NewsLetterScheduleFactory extends CrudFactory<NewsLetterScheduleEntity> {

// ████████ FindCrudEngine ████████████████████████████████████████
public declare readonly findEngine: FindCrudEngine<
// entity (1)
NewsLetterScheduleEntity,

// find (8)
NewsLetterScheduleFindDto,
NewsLetterScheduleFindInputWhereDto,
NewsLetterScheduleFindInputSortOrderDto,
NewsLetterScheduleFindInputGroupByDto,
NewsLetterScheduleFindInputDto,
NewsLetterScheduleFindOutputRowsDto,
FindOutputPaginationDto,
NewsLetterScheduleFindOutputDto,

// find_one_by_id (2)
NewsLetterScheduleFindOneByIdDto,
NewsLetterScheduleFindOneByIdInputDto
>;

// ████████ CreateCrudEngine ████████████████████████████████████████
public declare readonly createEngine: CreateCrudEngine<
// entity (1)
NewsLetterScheduleEntity,

// create (3)
NewsLetterScheduleCreateDto,
NewsLetterScheduleCreateInputDto,
NewsLetterScheduleCreateOutputDto
>;

// ████████ UpdateCrudEngine ████████████████████████████████████████
public declare readonly updateEngine: UpdateCrudEngine<
// entity (1)
NewsLetterScheduleEntity,

// update (6)
NewsLetterScheduleUpdateDto,
NewsLetterScheduleUpdateInputWhereDto,
NewsLetterScheduleUpdateInputSetsDto,
NewsLetterScheduleUpdateInputDto,
NewsLetterScheduleUpdateOutputAffectedRowsDto,
NewsLetterScheduleUpdateOutputDto
>;

// ████████ DeleteCrudEngine ████████████████████████████████████████
public declare readonly deleteEngine: DeleteCrudEngine<
// entity (1)
NewsLetterScheduleEntity,

// soft_delete (4)
NewsLetterScheduleSoftDeleteDto,
NewsLetterScheduleSoftDeleteInputWhereDto,
NewsLetterScheduleSoftDeleteInputDto,
NewsLetterScheduleSoftDeleteOutputDto,

// delete (4)
NewsLetterScheduleDeleteDto,
NewsLetterScheduleDeleteInputWhereDto,
NewsLetterScheduleDeleteInputDto,
NewsLetterScheduleDeleteOutputDto,

// restore (4)
NewsLetterScheduleRestoreDto,
NewsLetterScheduleRestoreInputWhereDto,
NewsLetterScheduleRestoreInputDto,
NewsLetterScheduleRestoreOutputDto
>;

// ████████ UpsertCrudEngine ████████████████████████████████████████
public declare readonly upsertEngine: UpsertCrudEngine<
// entity (1)
NewsLetterScheduleEntity,

// upsert (3)
NewsLetterScheduleUpsertDto,
NewsLetterScheduleUpsertInputDto,
NewsLetterScheduleUpsertOutputDto
>;

// ████████ RemoveCrudEngine ████████████████████████████████████████
public declare readonly removeEngine: RemoveCrudEngine<
// entity (1)
NewsLetterScheduleEntity,

// soft_remove (5)
NewsLetterScheduleSoftRemoveDto,
NewsLetterScheduleSoftRemoveInputWhereDto,
NewsLetterScheduleSoftRemoveInputDto,
NewsLetterScheduleSoftRemoveOutputAffectedRowsDto,
NewsLetterScheduleSoftRemoveOutputDto,

// remove (4)
NewsLetterScheduleRemoveDto,
NewsLetterScheduleRemoveInputWhereDto,
NewsLetterScheduleRemoveInputDto,
NewsLetterScheduleRemoveOutputAffectedRowsDto,
NewsLetterScheduleRemoveOutputDto,

// recover (5)
NewsLetterScheduleRecoverDto,
NewsLetterScheduleRecoverInputWhereDto,
NewsLetterScheduleRecoverInputDto,
NewsLetterScheduleRecoverOutputAffectedRowsDto,
NewsLetterScheduleRecoverOutputDto
>;

// ████████ UploadCrudEngine ████████████████████████████████████████
public declare readonly uploadEngine: UploadCrudEngine<
// entity (1)
NewsLetterScheduleEntity,

// upload (3)
NewsLetterScheduleUploadDto,
NewsLetterScheduleUploadInputDto,
NewsLetterScheduleUploadOutputDto,

// upload_delete (3)
NewsLetterScheduleUploadDeleteDto,
NewsLetterScheduleUploadDeleteInputDto,
NewsLetterScheduleUploadDeleteOutputDto
>;

constructor(
// data source
protected readonly dataSource: DataSource,

@InjectRepository(NewsLetterScheduleEntity)
protected readonly repository: Repository<NewsLetterScheduleEntity>,

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
    NewsLetterScheduleEntity,
);

this.logService.setContext(NewsLetterScheduleFactory.name);

// ████████ initialize FindCrudEngine ██████████████████████████████████████
this.initFindEngine
<
// find (8)
NewsLetterScheduleFindDto,
NewsLetterScheduleFindInputWhereDto,
NewsLetterScheduleFindInputSortOrderDto,
NewsLetterScheduleFindInputGroupByDto,
NewsLetterScheduleFindInputDto,
NewsLetterScheduleFindOutputRowsDto,
FindOutputPaginationDto,
NewsLetterScheduleFindOutputDto,

// find_one_by_id (2)
NewsLetterScheduleFindOneByIdDto,
NewsLetterScheduleFindOneByIdInputDto
>
(
// find (8)
NewsLetterScheduleFindDto,
NewsLetterScheduleFindInputWhereDto,
NewsLetterScheduleFindInputSortOrderDto,
NewsLetterScheduleFindInputGroupByDto,
NewsLetterScheduleFindInputDto,
NewsLetterScheduleFindOutputRowsDto,
FindOutputPaginationDto,
NewsLetterScheduleFindOutputDto,

// find_one_by_id (2)
NewsLetterScheduleFindOneByIdDto,
NewsLetterScheduleFindOneByIdInputDto
);


// ████████ initialize CreateCrudEngine ███████████████████████████████████████
this.initCreateEngine
<
// create (3)
NewsLetterScheduleCreateDto,
NewsLetterScheduleCreateInputDto,
NewsLetterScheduleCreateOutputDto
>
(
// create (3)
NewsLetterScheduleCreateDto,
NewsLetterScheduleCreateInputDto,
NewsLetterScheduleCreateOutputDto
);

// ████████ initialize UpdateCrudEngine ████████████████████████████████████████
this.initUpdateEngine
<
// update (6)
NewsLetterScheduleUpdateDto,
NewsLetterScheduleUpdateInputWhereDto,
NewsLetterScheduleUpdateInputSetsDto,
NewsLetterScheduleUpdateInputDto,
NewsLetterScheduleUpdateOutputAffectedRowsDto,
NewsLetterScheduleUpdateOutputDto
>
(
// update (6)
NewsLetterScheduleUpdateDto,
NewsLetterScheduleUpdateInputWhereDto,
NewsLetterScheduleUpdateInputSetsDto,
NewsLetterScheduleUpdateInputDto,
NewsLetterScheduleUpdateOutputAffectedRowsDto,
NewsLetterScheduleUpdateOutputDto
);


// ████████ initialize DeleteCrudEngine ███████████████████████████████████████████
this.initDeleteEngine
<
// soft_delete (4)
NewsLetterScheduleSoftDeleteDto,
NewsLetterScheduleSoftDeleteInputWhereDto,
NewsLetterScheduleSoftDeleteInputDto,
NewsLetterScheduleSoftDeleteOutputDto,

// delete (4)
NewsLetterScheduleDeleteDto,
NewsLetterScheduleDeleteInputWhereDto,
NewsLetterScheduleDeleteInputDto,
NewsLetterScheduleDeleteOutputDto,

// restore (4)
NewsLetterScheduleRestoreDto,
NewsLetterScheduleRestoreInputWhereDto,
NewsLetterScheduleRestoreInputDto,
NewsLetterScheduleRestoreOutputDto
>
(
// soft_delete (4)
NewsLetterScheduleSoftDeleteDto,
NewsLetterScheduleSoftDeleteInputWhereDto,
NewsLetterScheduleSoftDeleteInputDto,
NewsLetterScheduleSoftDeleteOutputDto,

// delete (4)
NewsLetterScheduleDeleteDto,
NewsLetterScheduleDeleteInputWhereDto,
NewsLetterScheduleDeleteInputDto,
NewsLetterScheduleDeleteOutputDto,

// restore (4)
NewsLetterScheduleRestoreDto,
NewsLetterScheduleRestoreInputWhereDto,
NewsLetterScheduleRestoreInputDto,
NewsLetterScheduleRestoreOutputDto
);



// ████████ initialize UpsertCrudEngine ███████████████████████████████████████████
this.initUpsertEngine
<
// upsert (3)
NewsLetterScheduleUpsertDto,
NewsLetterScheduleUpsertInputDto,
NewsLetterScheduleUpsertOutputDto
>
(
// upsert (3)
NewsLetterScheduleUpsertDto,
NewsLetterScheduleUpsertInputDto,
NewsLetterScheduleUpsertOutputDto
);




// ████████ initialize RemoveCrudEngine ███████████████████████████████████████████
this.initRemoveEngine
<
// soft_remove (5)
NewsLetterScheduleSoftRemoveDto,
NewsLetterScheduleSoftRemoveInputWhereDto,
NewsLetterScheduleSoftRemoveInputDto,
NewsLetterScheduleSoftRemoveOutputAffectedRowsDto,
NewsLetterScheduleSoftRemoveOutputDto,

// remove (4)
NewsLetterScheduleRemoveDto,
NewsLetterScheduleRemoveInputWhereDto,
NewsLetterScheduleRemoveInputDto,
NewsLetterScheduleRemoveOutputAffectedRowsDto,
NewsLetterScheduleRemoveOutputDto,

// recover (5)
NewsLetterScheduleRecoverDto,
NewsLetterScheduleRecoverInputWhereDto,
NewsLetterScheduleRecoverInputDto,
NewsLetterScheduleRecoverOutputAffectedRowsDto,
NewsLetterScheduleRecoverOutputDto
>
(
// soft_remove (5)
NewsLetterScheduleSoftRemoveDto,
NewsLetterScheduleSoftRemoveInputWhereDto,
NewsLetterScheduleSoftRemoveInputDto,
NewsLetterScheduleSoftRemoveOutputAffectedRowsDto,
NewsLetterScheduleSoftRemoveOutputDto,

// remove (4)
NewsLetterScheduleRemoveDto,
NewsLetterScheduleRemoveInputWhereDto,
NewsLetterScheduleRemoveInputDto,
NewsLetterScheduleRemoveOutputAffectedRowsDto,
NewsLetterScheduleRemoveOutputDto,

// recover (5)
NewsLetterScheduleRecoverDto,
NewsLetterScheduleRecoverInputWhereDto,
NewsLetterScheduleRecoverInputDto,
NewsLetterScheduleRecoverOutputAffectedRowsDto,
NewsLetterScheduleRecoverOutputDto
);



// ████████ initialize UploadCrudEngine ███████████████████████████████████████████
this.initUploadEngine
<
// upload (3)
NewsLetterScheduleUploadDto,
NewsLetterScheduleUploadInputDto,
NewsLetterScheduleUploadOutputDto,

// upload_delete (3)
NewsLetterScheduleUploadDeleteDto,
NewsLetterScheduleUploadDeleteInputDto,
NewsLetterScheduleUploadDeleteOutputDto
>
(
// upload (3)
NewsLetterScheduleUploadDto,
NewsLetterScheduleUploadInputDto,
NewsLetterScheduleUploadOutputDto,

// upload_delete (3)
NewsLetterScheduleUploadDeleteDto,
NewsLetterScheduleUploadDeleteInputDto,
NewsLetterScheduleUploadDeleteOutputDto
);


// ████████ initialize ImportExportCrudEngine █████████████████████████████████████

}

}