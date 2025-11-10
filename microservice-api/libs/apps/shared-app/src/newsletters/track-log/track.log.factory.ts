import { NewsLetterTrackLogEntity } from "./entities/track.log.entity";
import { Injectable } from "@nestjs/common";
import { DataSource, Repository } from "typeorm";
import { InjectRepository } from "@nestjs/typeorm";
import { ConfService, CreateCrudEngine, CrudFactory, DataValidationPipe, DeleteCrudEngine, FindCrudEngine, FindOutputPaginationDto, LibraryAppService, LogService, RemoveCrudEngine, UpdateCrudEngine, UploadCrudEngine, UpsertCrudEngine } from "@libs/library-app";
import { SelfGraphqlMicroserviceService } from '@libs/dynamic-app';
import { NewsLetterTrackLogCreateDto, NewsLetterTrackLogCreateInputDto, NewsLetterTrackLogCreateOutputDto, NewsLetterTrackLogDeleteDto, NewsLetterTrackLogDeleteInputDto, NewsLetterTrackLogDeleteInputWhereDto, NewsLetterTrackLogDeleteOutputDto, NewsLetterTrackLogFindDto, NewsLetterTrackLogFindInputDto, NewsLetterTrackLogFindInputGroupByDto, NewsLetterTrackLogFindInputSortOrderDto, NewsLetterTrackLogFindInputWhereDto, NewsLetterTrackLogFindOneByIdDto, NewsLetterTrackLogFindOneByIdInputDto, NewsLetterTrackLogFindOutputDto, NewsLetterTrackLogFindOutputRowsDto, NewsLetterTrackLogRecoverDto, NewsLetterTrackLogRecoverInputDto, NewsLetterTrackLogRecoverInputWhereDto, NewsLetterTrackLogRecoverOutputDto, NewsLetterTrackLogRecoverOutputAffectedRowsDto, NewsLetterTrackLogRemoveDto, NewsLetterTrackLogRemoveInputDto, NewsLetterTrackLogRemoveInputWhereDto, NewsLetterTrackLogRemoveOutputDto, NewsLetterTrackLogRemoveOutputAffectedRowsDto, NewsLetterTrackLogRestoreDto, NewsLetterTrackLogRestoreInputDto, NewsLetterTrackLogRestoreInputWhereDto, NewsLetterTrackLogRestoreOutputDto, NewsLetterTrackLogSoftDeleteDto, NewsLetterTrackLogSoftDeleteInputDto, NewsLetterTrackLogSoftDeleteInputWhereDto, NewsLetterTrackLogSoftDeleteOutputDto, NewsLetterTrackLogSoftRemoveDto, NewsLetterTrackLogSoftRemoveInputDto, NewsLetterTrackLogSoftRemoveInputWhereDto, NewsLetterTrackLogSoftRemoveOutputDto, NewsLetterTrackLogSoftRemoveOutputAffectedRowsDto, NewsLetterTrackLogUpdateDto, NewsLetterTrackLogUpdateInputDto, NewsLetterTrackLogUpdateInputSetsDto, NewsLetterTrackLogUpdateInputWhereDto, NewsLetterTrackLogUpdateOutputDto, NewsLetterTrackLogUpdateOutputAffectedRowsDto, NewsLetterTrackLogUploadDeleteDto, NewsLetterTrackLogUploadDeleteInputDto, NewsLetterTrackLogUploadDeleteOutputDto, NewsLetterTrackLogUploadDto, NewsLetterTrackLogUploadInputDto, NewsLetterTrackLogUploadOutputDto, NewsLetterTrackLogUpsertDto, NewsLetterTrackLogUpsertInputDto, NewsLetterTrackLogUpsertOutputDto } from "./dto/track.log.dto";

@Injectable()
export class NewsLetterTrackLogFactory extends CrudFactory<NewsLetterTrackLogEntity> {

// ████████ FindCrudEngine ████████████████████████████████████████
public declare readonly findEngine: FindCrudEngine<
// entity (1)
NewsLetterTrackLogEntity,

// find (8)
NewsLetterTrackLogFindDto,
NewsLetterTrackLogFindInputWhereDto,
NewsLetterTrackLogFindInputSortOrderDto,
NewsLetterTrackLogFindInputGroupByDto,
NewsLetterTrackLogFindInputDto,
NewsLetterTrackLogFindOutputRowsDto,
FindOutputPaginationDto,
NewsLetterTrackLogFindOutputDto,

// find_one_by_id (2)
NewsLetterTrackLogFindOneByIdDto,
NewsLetterTrackLogFindOneByIdInputDto
>;

// ████████ CreateCrudEngine ████████████████████████████████████████
public declare readonly createEngine: CreateCrudEngine<
// entity (1)
NewsLetterTrackLogEntity,

// create (3)
NewsLetterTrackLogCreateDto,
NewsLetterTrackLogCreateInputDto,
NewsLetterTrackLogCreateOutputDto
>;

// ████████ UpdateCrudEngine ████████████████████████████████████████
public declare readonly updateEngine: UpdateCrudEngine<
// entity (1)
NewsLetterTrackLogEntity,

// update (6)
NewsLetterTrackLogUpdateDto,
NewsLetterTrackLogUpdateInputWhereDto,
NewsLetterTrackLogUpdateInputSetsDto,
NewsLetterTrackLogUpdateInputDto,
NewsLetterTrackLogUpdateOutputAffectedRowsDto,
NewsLetterTrackLogUpdateOutputDto
>;

// ████████ DeleteCrudEngine ████████████████████████████████████████
public declare readonly deleteEngine: DeleteCrudEngine<
// entity (1)
NewsLetterTrackLogEntity,

// soft_delete (4)
NewsLetterTrackLogSoftDeleteDto,
NewsLetterTrackLogSoftDeleteInputWhereDto,
NewsLetterTrackLogSoftDeleteInputDto,
NewsLetterTrackLogSoftDeleteOutputDto,

// delete (4)
NewsLetterTrackLogDeleteDto,
NewsLetterTrackLogDeleteInputWhereDto,
NewsLetterTrackLogDeleteInputDto,
NewsLetterTrackLogDeleteOutputDto,

// restore (4)
NewsLetterTrackLogRestoreDto,
NewsLetterTrackLogRestoreInputWhereDto,
NewsLetterTrackLogRestoreInputDto,
NewsLetterTrackLogRestoreOutputDto
>;

// ████████ UpsertCrudEngine ████████████████████████████████████████
public declare readonly upsertEngine: UpsertCrudEngine<
// entity (1)
NewsLetterTrackLogEntity,

// upsert (3)
NewsLetterTrackLogUpsertDto,
NewsLetterTrackLogUpsertInputDto,
NewsLetterTrackLogUpsertOutputDto
>;

// ████████ RemoveCrudEngine ████████████████████████████████████████
public declare readonly removeEngine: RemoveCrudEngine<
// entity (1)
NewsLetterTrackLogEntity,

// soft_remove (5)
NewsLetterTrackLogSoftRemoveDto,
NewsLetterTrackLogSoftRemoveInputWhereDto,
NewsLetterTrackLogSoftRemoveInputDto,
NewsLetterTrackLogSoftRemoveOutputAffectedRowsDto,
NewsLetterTrackLogSoftRemoveOutputDto,

// remove (4)
NewsLetterTrackLogRemoveDto,
NewsLetterTrackLogRemoveInputWhereDto,
NewsLetterTrackLogRemoveInputDto,
NewsLetterTrackLogRemoveOutputAffectedRowsDto,
NewsLetterTrackLogRemoveOutputDto,

// recover (5)
NewsLetterTrackLogRecoverDto,
NewsLetterTrackLogRecoverInputWhereDto,
NewsLetterTrackLogRecoverInputDto,
NewsLetterTrackLogRecoverOutputAffectedRowsDto,
NewsLetterTrackLogRecoverOutputDto
>;

// ████████ UploadCrudEngine ████████████████████████████████████████
public declare readonly uploadEngine: UploadCrudEngine<
// entity (1)
NewsLetterTrackLogEntity,

// upload (3)
NewsLetterTrackLogUploadDto,
NewsLetterTrackLogUploadInputDto,
NewsLetterTrackLogUploadOutputDto,

// upload_delete (3)
NewsLetterTrackLogUploadDeleteDto,
NewsLetterTrackLogUploadDeleteInputDto,
NewsLetterTrackLogUploadDeleteOutputDto
>;

constructor(
// data source
protected readonly dataSource: DataSource,

@InjectRepository(NewsLetterTrackLogEntity)
protected readonly repository: Repository<NewsLetterTrackLogEntity>,

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
    NewsLetterTrackLogEntity,
);

this.logService.setContext(NewsLetterTrackLogFactory.name);

// ████████ initialize FindCrudEngine ██████████████████████████████████████
this.initFindEngine
<
// find (8)
NewsLetterTrackLogFindDto,
NewsLetterTrackLogFindInputWhereDto,
NewsLetterTrackLogFindInputSortOrderDto,
NewsLetterTrackLogFindInputGroupByDto,
NewsLetterTrackLogFindInputDto,
NewsLetterTrackLogFindOutputRowsDto,
FindOutputPaginationDto,
NewsLetterTrackLogFindOutputDto,

// find_one_by_id (2)
NewsLetterTrackLogFindOneByIdDto,
NewsLetterTrackLogFindOneByIdInputDto
>
(
// find (8)
NewsLetterTrackLogFindDto,
NewsLetterTrackLogFindInputWhereDto,
NewsLetterTrackLogFindInputSortOrderDto,
NewsLetterTrackLogFindInputGroupByDto,
NewsLetterTrackLogFindInputDto,
NewsLetterTrackLogFindOutputRowsDto,
FindOutputPaginationDto,
NewsLetterTrackLogFindOutputDto,

// find_one_by_id (2)
NewsLetterTrackLogFindOneByIdDto,
NewsLetterTrackLogFindOneByIdInputDto
);


// ████████ initialize CreateCrudEngine ███████████████████████████████████████
this.initCreateEngine
<
// create (3)
NewsLetterTrackLogCreateDto,
NewsLetterTrackLogCreateInputDto,
NewsLetterTrackLogCreateOutputDto
>
(
// create (3)
NewsLetterTrackLogCreateDto,
NewsLetterTrackLogCreateInputDto,
NewsLetterTrackLogCreateOutputDto
);

// ████████ initialize UpdateCrudEngine ████████████████████████████████████████
this.initUpdateEngine
<
// update (6)
NewsLetterTrackLogUpdateDto,
NewsLetterTrackLogUpdateInputWhereDto,
NewsLetterTrackLogUpdateInputSetsDto,
NewsLetterTrackLogUpdateInputDto,
NewsLetterTrackLogUpdateOutputAffectedRowsDto,
NewsLetterTrackLogUpdateOutputDto
>
(
// update (6)
NewsLetterTrackLogUpdateDto,
NewsLetterTrackLogUpdateInputWhereDto,
NewsLetterTrackLogUpdateInputSetsDto,
NewsLetterTrackLogUpdateInputDto,
NewsLetterTrackLogUpdateOutputAffectedRowsDto,
NewsLetterTrackLogUpdateOutputDto
);


// ████████ initialize DeleteCrudEngine ███████████████████████████████████████████
this.initDeleteEngine
<
// soft_delete (4)
NewsLetterTrackLogSoftDeleteDto,
NewsLetterTrackLogSoftDeleteInputWhereDto,
NewsLetterTrackLogSoftDeleteInputDto,
NewsLetterTrackLogSoftDeleteOutputDto,

// delete (4)
NewsLetterTrackLogDeleteDto,
NewsLetterTrackLogDeleteInputWhereDto,
NewsLetterTrackLogDeleteInputDto,
NewsLetterTrackLogDeleteOutputDto,

// restore (4)
NewsLetterTrackLogRestoreDto,
NewsLetterTrackLogRestoreInputWhereDto,
NewsLetterTrackLogRestoreInputDto,
NewsLetterTrackLogRestoreOutputDto
>
(
// soft_delete (4)
NewsLetterTrackLogSoftDeleteDto,
NewsLetterTrackLogSoftDeleteInputWhereDto,
NewsLetterTrackLogSoftDeleteInputDto,
NewsLetterTrackLogSoftDeleteOutputDto,

// delete (4)
NewsLetterTrackLogDeleteDto,
NewsLetterTrackLogDeleteInputWhereDto,
NewsLetterTrackLogDeleteInputDto,
NewsLetterTrackLogDeleteOutputDto,

// restore (4)
NewsLetterTrackLogRestoreDto,
NewsLetterTrackLogRestoreInputWhereDto,
NewsLetterTrackLogRestoreInputDto,
NewsLetterTrackLogRestoreOutputDto
);



// ████████ initialize UpsertCrudEngine ███████████████████████████████████████████
this.initUpsertEngine
<
// upsert (3)
NewsLetterTrackLogUpsertDto,
NewsLetterTrackLogUpsertInputDto,
NewsLetterTrackLogUpsertOutputDto
>
(
// upsert (3)
NewsLetterTrackLogUpsertDto,
NewsLetterTrackLogUpsertInputDto,
NewsLetterTrackLogUpsertOutputDto
);




// ████████ initialize RemoveCrudEngine ███████████████████████████████████████████
this.initRemoveEngine
<
// soft_remove (5)
NewsLetterTrackLogSoftRemoveDto,
NewsLetterTrackLogSoftRemoveInputWhereDto,
NewsLetterTrackLogSoftRemoveInputDto,
NewsLetterTrackLogSoftRemoveOutputAffectedRowsDto,
NewsLetterTrackLogSoftRemoveOutputDto,

// remove (4)
NewsLetterTrackLogRemoveDto,
NewsLetterTrackLogRemoveInputWhereDto,
NewsLetterTrackLogRemoveInputDto,
NewsLetterTrackLogRemoveOutputAffectedRowsDto,
NewsLetterTrackLogRemoveOutputDto,

// recover (5)
NewsLetterTrackLogRecoverDto,
NewsLetterTrackLogRecoverInputWhereDto,
NewsLetterTrackLogRecoverInputDto,
NewsLetterTrackLogRecoverOutputAffectedRowsDto,
NewsLetterTrackLogRecoverOutputDto
>
(
// soft_remove (5)
NewsLetterTrackLogSoftRemoveDto,
NewsLetterTrackLogSoftRemoveInputWhereDto,
NewsLetterTrackLogSoftRemoveInputDto,
NewsLetterTrackLogSoftRemoveOutputAffectedRowsDto,
NewsLetterTrackLogSoftRemoveOutputDto,

// remove (4)
NewsLetterTrackLogRemoveDto,
NewsLetterTrackLogRemoveInputWhereDto,
NewsLetterTrackLogRemoveInputDto,
NewsLetterTrackLogRemoveOutputAffectedRowsDto,
NewsLetterTrackLogRemoveOutputDto,

// recover (5)
NewsLetterTrackLogRecoverDto,
NewsLetterTrackLogRecoverInputWhereDto,
NewsLetterTrackLogRecoverInputDto,
NewsLetterTrackLogRecoverOutputAffectedRowsDto,
NewsLetterTrackLogRecoverOutputDto
);



// ████████ initialize UploadCrudEngine ███████████████████████████████████████████
this.initUploadEngine
<
// upload (3)
NewsLetterTrackLogUploadDto,
NewsLetterTrackLogUploadInputDto,
NewsLetterTrackLogUploadOutputDto,

// upload_delete (3)
NewsLetterTrackLogUploadDeleteDto,
NewsLetterTrackLogUploadDeleteInputDto,
NewsLetterTrackLogUploadDeleteOutputDto
>
(
// upload (3)
NewsLetterTrackLogUploadDto,
NewsLetterTrackLogUploadInputDto,
NewsLetterTrackLogUploadOutputDto,

// upload_delete (3)
NewsLetterTrackLogUploadDeleteDto,
NewsLetterTrackLogUploadDeleteInputDto,
NewsLetterTrackLogUploadDeleteOutputDto
);


// ████████ initialize ImportExportCrudEngine █████████████████████████████████████

}

}