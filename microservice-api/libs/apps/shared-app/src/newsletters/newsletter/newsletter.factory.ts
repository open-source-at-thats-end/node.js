import { NewsLetterEntity } from "./entities/newsletter.entity";
import { Injectable } from "@nestjs/common";
import { DataSource, Repository } from "typeorm";
import { InjectRepository } from "@nestjs/typeorm";
import { ConfService, CreateCrudEngine, CrudFactory, DataValidationPipe, DeleteCrudEngine, FindCrudEngine, FindOutputPaginationDto, LibraryAppService, LogService, RemoveCrudEngine, UpdateCrudEngine, UploadCrudEngine, UpsertCrudEngine } from "@libs/library-app";
import { SelfGraphqlMicroserviceService } from '@libs/dynamic-app';
import { NewsLetterCreateDto, NewsLetterCreateInputDto, NewsLetterCreateOutputDto, NewsLetterDeleteDto, NewsLetterDeleteInputDto, NewsLetterDeleteInputWhereDto, NewsLetterDeleteOutputDto, NewsLetterFindDto, NewsLetterFindInputDto, NewsLetterFindInputGroupByDto, NewsLetterFindInputSortOrderDto, NewsLetterFindInputWhereDto, NewsLetterFindOneByIdDto, NewsLetterFindOneByIdInputDto, NewsLetterFindOutputDto, NewsLetterFindOutputRowsDto, NewsLetterRecoverDto, NewsLetterRecoverInputDto, NewsLetterRecoverInputWhereDto, NewsLetterRecoverOutputDto, NewsLetterRecoverOutputAffectedRowsDto, NewsLetterRemoveDto, NewsLetterRemoveInputDto, NewsLetterRemoveInputWhereDto, NewsLetterRemoveOutputDto, NewsLetterRemoveOutputAffectedRowsDto, NewsLetterRestoreDto, NewsLetterRestoreInputDto, NewsLetterRestoreInputWhereDto, NewsLetterRestoreOutputDto, NewsLetterSoftDeleteDto, NewsLetterSoftDeleteInputDto, NewsLetterSoftDeleteInputWhereDto, NewsLetterSoftDeleteOutputDto, NewsLetterSoftRemoveDto, NewsLetterSoftRemoveInputDto, NewsLetterSoftRemoveInputWhereDto, NewsLetterSoftRemoveOutputDto, NewsLetterSoftRemoveOutputAffectedRowsDto, NewsLetterUpdateDto, NewsLetterUpdateInputDto, NewsLetterUpdateInputSetsDto, NewsLetterUpdateInputWhereDto, NewsLetterUpdateOutputDto, NewsLetterUpdateOutputAffectedRowsDto, NewsLetterUploadDeleteDto, NewsLetterUploadDeleteInputDto, NewsLetterUploadDeleteOutputDto, NewsLetterUploadDto, NewsLetterUploadInputDto, NewsLetterUploadOutputDto, NewsLetterUpsertDto, NewsLetterUpsertInputDto, NewsLetterUpsertOutputDto } from "./dto/newsletter.dto";

@Injectable()
export class NewsLetterFactory extends CrudFactory<NewsLetterEntity> {

// ████████ FindCrudEngine ████████████████████████████████████████
public declare readonly findEngine: FindCrudEngine<
// entity (1)
NewsLetterEntity,

// find (8)
NewsLetterFindDto,
NewsLetterFindInputWhereDto,
NewsLetterFindInputSortOrderDto,
NewsLetterFindInputGroupByDto,
NewsLetterFindInputDto,
NewsLetterFindOutputRowsDto,
FindOutputPaginationDto,
NewsLetterFindOutputDto,

// find_one_by_id (2)
NewsLetterFindOneByIdDto,
NewsLetterFindOneByIdInputDto
>;

// ████████ CreateCrudEngine ████████████████████████████████████████
public declare readonly createEngine: CreateCrudEngine<
// entity (1)
NewsLetterEntity,

// create (3)
NewsLetterCreateDto,
NewsLetterCreateInputDto,
NewsLetterCreateOutputDto
>;

// ████████ UpdateCrudEngine ████████████████████████████████████████
public declare readonly updateEngine: UpdateCrudEngine<
// entity (1)
NewsLetterEntity,

// update (6)
NewsLetterUpdateDto,
NewsLetterUpdateInputWhereDto,
NewsLetterUpdateInputSetsDto,
NewsLetterUpdateInputDto,
NewsLetterUpdateOutputAffectedRowsDto,
NewsLetterUpdateOutputDto
>;

// ████████ DeleteCrudEngine ████████████████████████████████████████
public declare readonly deleteEngine: DeleteCrudEngine<
// entity (1)
NewsLetterEntity,

// soft_delete (4)
NewsLetterSoftDeleteDto,
NewsLetterSoftDeleteInputWhereDto,
NewsLetterSoftDeleteInputDto,
NewsLetterSoftDeleteOutputDto,

// delete (4)
NewsLetterDeleteDto,
NewsLetterDeleteInputWhereDto,
NewsLetterDeleteInputDto,
NewsLetterDeleteOutputDto,

// restore (4)
NewsLetterRestoreDto,
NewsLetterRestoreInputWhereDto,
NewsLetterRestoreInputDto,
NewsLetterRestoreOutputDto
>;

// ████████ UpsertCrudEngine ████████████████████████████████████████
public declare readonly upsertEngine: UpsertCrudEngine<
// entity (1)
NewsLetterEntity,

// upsert (3)
NewsLetterUpsertDto,
NewsLetterUpsertInputDto,
NewsLetterUpsertOutputDto
>;

// ████████ RemoveCrudEngine ████████████████████████████████████████
public declare readonly removeEngine: RemoveCrudEngine<
// entity (1)
NewsLetterEntity,

// soft_remove (5)
NewsLetterSoftRemoveDto,
NewsLetterSoftRemoveInputWhereDto,
NewsLetterSoftRemoveInputDto,
NewsLetterSoftRemoveOutputAffectedRowsDto,
NewsLetterSoftRemoveOutputDto,

// remove (4)
NewsLetterRemoveDto,
NewsLetterRemoveInputWhereDto,
NewsLetterRemoveInputDto,
NewsLetterRemoveOutputAffectedRowsDto,
NewsLetterRemoveOutputDto,

// recover (5)
NewsLetterRecoverDto,
NewsLetterRecoverInputWhereDto,
NewsLetterRecoverInputDto,
NewsLetterRecoverOutputAffectedRowsDto,
NewsLetterRecoverOutputDto
>;

// ████████ UploadCrudEngine ████████████████████████████████████████
public declare readonly uploadEngine: UploadCrudEngine<
// entity (1)
NewsLetterEntity,

// upload (3)
NewsLetterUploadDto,
NewsLetterUploadInputDto,
NewsLetterUploadOutputDto,

// upload_delete (3)
NewsLetterUploadDeleteDto,
NewsLetterUploadDeleteInputDto,
NewsLetterUploadDeleteOutputDto
>;

constructor(
// data source
protected readonly dataSource: DataSource,

@InjectRepository(NewsLetterEntity)
protected readonly repository: Repository<NewsLetterEntity>,

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
    NewsLetterEntity,
);

this.logService.setContext(NewsLetterFactory.name);

// ████████ initialize FindCrudEngine ██████████████████████████████████████
this.initFindEngine
<
// find (8)
NewsLetterFindDto,
NewsLetterFindInputWhereDto,
NewsLetterFindInputSortOrderDto,
NewsLetterFindInputGroupByDto,
NewsLetterFindInputDto,
NewsLetterFindOutputRowsDto,
FindOutputPaginationDto,
NewsLetterFindOutputDto,

// find_one_by_id (2)
NewsLetterFindOneByIdDto,
NewsLetterFindOneByIdInputDto
>
(
// find (8)
NewsLetterFindDto,
NewsLetterFindInputWhereDto,
NewsLetterFindInputSortOrderDto,
NewsLetterFindInputGroupByDto,
NewsLetterFindInputDto,
NewsLetterFindOutputRowsDto,
FindOutputPaginationDto,
NewsLetterFindOutputDto,

// find_one_by_id (2)
NewsLetterFindOneByIdDto,
NewsLetterFindOneByIdInputDto
);


// ████████ initialize CreateCrudEngine ███████████████████████████████████████
this.initCreateEngine
<
// create (3)
NewsLetterCreateDto,
NewsLetterCreateInputDto,
NewsLetterCreateOutputDto
>
(
// create (3)
NewsLetterCreateDto,
NewsLetterCreateInputDto,
NewsLetterCreateOutputDto
);

// ████████ initialize UpdateCrudEngine ████████████████████████████████████████
this.initUpdateEngine
<
// update (6)
NewsLetterUpdateDto,
NewsLetterUpdateInputWhereDto,
NewsLetterUpdateInputSetsDto,
NewsLetterUpdateInputDto,
NewsLetterUpdateOutputAffectedRowsDto,
NewsLetterUpdateOutputDto
>
(
// update (6)
NewsLetterUpdateDto,
NewsLetterUpdateInputWhereDto,
NewsLetterUpdateInputSetsDto,
NewsLetterUpdateInputDto,
NewsLetterUpdateOutputAffectedRowsDto,
NewsLetterUpdateOutputDto
);


// ████████ initialize DeleteCrudEngine ███████████████████████████████████████████
this.initDeleteEngine
<
// soft_delete (4)
NewsLetterSoftDeleteDto,
NewsLetterSoftDeleteInputWhereDto,
NewsLetterSoftDeleteInputDto,
NewsLetterSoftDeleteOutputDto,

// delete (4)
NewsLetterDeleteDto,
NewsLetterDeleteInputWhereDto,
NewsLetterDeleteInputDto,
NewsLetterDeleteOutputDto,

// restore (4)
NewsLetterRestoreDto,
NewsLetterRestoreInputWhereDto,
NewsLetterRestoreInputDto,
NewsLetterRestoreOutputDto
>
(
// soft_delete (4)
NewsLetterSoftDeleteDto,
NewsLetterSoftDeleteInputWhereDto,
NewsLetterSoftDeleteInputDto,
NewsLetterSoftDeleteOutputDto,

// delete (4)
NewsLetterDeleteDto,
NewsLetterDeleteInputWhereDto,
NewsLetterDeleteInputDto,
NewsLetterDeleteOutputDto,

// restore (4)
NewsLetterRestoreDto,
NewsLetterRestoreInputWhereDto,
NewsLetterRestoreInputDto,
NewsLetterRestoreOutputDto
);



// ████████ initialize UpsertCrudEngine ███████████████████████████████████████████
this.initUpsertEngine
<
// upsert (3)
NewsLetterUpsertDto,
NewsLetterUpsertInputDto,
NewsLetterUpsertOutputDto
>
(
// upsert (3)
NewsLetterUpsertDto,
NewsLetterUpsertInputDto,
NewsLetterUpsertOutputDto
);




// ████████ initialize RemoveCrudEngine ███████████████████████████████████████████
this.initRemoveEngine
<
// soft_remove (5)
NewsLetterSoftRemoveDto,
NewsLetterSoftRemoveInputWhereDto,
NewsLetterSoftRemoveInputDto,
NewsLetterSoftRemoveOutputAffectedRowsDto,
NewsLetterSoftRemoveOutputDto,

// remove (4)
NewsLetterRemoveDto,
NewsLetterRemoveInputWhereDto,
NewsLetterRemoveInputDto,
NewsLetterRemoveOutputAffectedRowsDto,
NewsLetterRemoveOutputDto,

// recover (5)
NewsLetterRecoverDto,
NewsLetterRecoverInputWhereDto,
NewsLetterRecoverInputDto,
NewsLetterRecoverOutputAffectedRowsDto,
NewsLetterRecoverOutputDto
>
(
// soft_remove (5)
NewsLetterSoftRemoveDto,
NewsLetterSoftRemoveInputWhereDto,
NewsLetterSoftRemoveInputDto,
NewsLetterSoftRemoveOutputAffectedRowsDto,
NewsLetterSoftRemoveOutputDto,

// remove (4)
NewsLetterRemoveDto,
NewsLetterRemoveInputWhereDto,
NewsLetterRemoveInputDto,
NewsLetterRemoveOutputAffectedRowsDto,
NewsLetterRemoveOutputDto,

// recover (5)
NewsLetterRecoverDto,
NewsLetterRecoverInputWhereDto,
NewsLetterRecoverInputDto,
NewsLetterRecoverOutputAffectedRowsDto,
NewsLetterRecoverOutputDto
);



// ████████ initialize UploadCrudEngine ███████████████████████████████████████████
this.initUploadEngine
<
// upload (3)
NewsLetterUploadDto,
NewsLetterUploadInputDto,
NewsLetterUploadOutputDto,

// upload_delete (3)
NewsLetterUploadDeleteDto,
NewsLetterUploadDeleteInputDto,
NewsLetterUploadDeleteOutputDto
>
(
// upload (3)
NewsLetterUploadDto,
NewsLetterUploadInputDto,
NewsLetterUploadOutputDto,

// upload_delete (3)
NewsLetterUploadDeleteDto,
NewsLetterUploadDeleteInputDto,
NewsLetterUploadDeleteOutputDto
);


// ████████ initialize ImportExportCrudEngine █████████████████████████████████████

}

}