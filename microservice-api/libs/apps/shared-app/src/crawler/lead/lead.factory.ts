import { CrawlerLeadEntity } from "./entities/lead.entity";
import { Injectable } from "@nestjs/common";
import { DataSource, Repository } from "typeorm";
import { InjectRepository } from "@nestjs/typeorm";
import { ConfService, CreateCrudEngine, CrudFactory, DataValidationPipe, DeleteCrudEngine, FindCrudEngine, FindOutputPaginationDto, LibraryAppService, LogService, RemoveCrudEngine, UpdateCrudEngine, UploadCrudEngine, UpsertCrudEngine } from "@libs/library-app";
import { SelfGraphqlMicroserviceService } from '@libs/dynamic-app';
import { CrawlerLeadCreateDto, CrawlerLeadCreateInputDto, CrawlerLeadCreateOutputDto, CrawlerLeadDeleteDto, CrawlerLeadDeleteInputDto, CrawlerLeadDeleteInputWhereDto, CrawlerLeadDeleteOutputDto, CrawlerLeadFindDto, CrawlerLeadFindInputDto, CrawlerLeadFindInputGroupByDto, CrawlerLeadFindInputSortOrderDto, CrawlerLeadFindInputWhereDto, CrawlerLeadFindOneByIdDto, CrawlerLeadFindOneByIdInputDto, CrawlerLeadFindOutputDto, CrawlerLeadFindOutputRowsDto, CrawlerLeadRecoverDto, CrawlerLeadRecoverInputDto, CrawlerLeadRecoverInputWhereDto, CrawlerLeadRecoverOutputDto, CrawlerLeadRecoverOutputAffectedRowsDto, CrawlerLeadRemoveDto, CrawlerLeadRemoveInputDto, CrawlerLeadRemoveInputWhereDto, CrawlerLeadRemoveOutputDto, CrawlerLeadRemoveOutputAffectedRowsDto, CrawlerLeadRestoreDto, CrawlerLeadRestoreInputDto, CrawlerLeadRestoreInputWhereDto, CrawlerLeadRestoreOutputDto, CrawlerLeadSoftDeleteDto, CrawlerLeadSoftDeleteInputDto, CrawlerLeadSoftDeleteInputWhereDto, CrawlerLeadSoftDeleteOutputDto, CrawlerLeadSoftRemoveDto, CrawlerLeadSoftRemoveInputDto, CrawlerLeadSoftRemoveInputWhereDto, CrawlerLeadSoftRemoveOutputDto, CrawlerLeadSoftRemoveOutputAffectedRowsDto, CrawlerLeadUpdateDto, CrawlerLeadUpdateInputDto, CrawlerLeadUpdateInputSetsDto, CrawlerLeadUpdateInputWhereDto, CrawlerLeadUpdateOutputDto, CrawlerLeadUpdateOutputAffectedRowsDto, CrawlerLeadUploadDeleteDto, CrawlerLeadUploadDeleteInputDto, CrawlerLeadUploadDeleteOutputDto, CrawlerLeadUploadDto, CrawlerLeadUploadInputDto, CrawlerLeadUploadOutputDto, CrawlerLeadUpsertDto, CrawlerLeadUpsertInputDto, CrawlerLeadUpsertOutputDto } from "./dto/lead.dto";

@Injectable()
export class CrawlerLeadFactory extends CrudFactory<CrawlerLeadEntity> {

// ████████ FindCrudEngine ████████████████████████████████████████
public declare readonly findEngine: FindCrudEngine<
// entity (1)
CrawlerLeadEntity,

// find (8)
CrawlerLeadFindDto,
CrawlerLeadFindInputWhereDto,
CrawlerLeadFindInputSortOrderDto,
CrawlerLeadFindInputGroupByDto,
CrawlerLeadFindInputDto,
CrawlerLeadFindOutputRowsDto,
FindOutputPaginationDto,
CrawlerLeadFindOutputDto,

// find_one_by_id (2)
CrawlerLeadFindOneByIdDto,
CrawlerLeadFindOneByIdInputDto
>;

// ████████ CreateCrudEngine ████████████████████████████████████████
public declare readonly createEngine: CreateCrudEngine<
// entity (1)
CrawlerLeadEntity,

// create (3)
CrawlerLeadCreateDto,
CrawlerLeadCreateInputDto,
CrawlerLeadCreateOutputDto
>;

// ████████ UpdateCrudEngine ████████████████████████████████████████
public declare readonly updateEngine: UpdateCrudEngine<
// entity (1)
CrawlerLeadEntity,

// update (6)
CrawlerLeadUpdateDto,
CrawlerLeadUpdateInputWhereDto,
CrawlerLeadUpdateInputSetsDto,
CrawlerLeadUpdateInputDto,
CrawlerLeadUpdateOutputAffectedRowsDto,
CrawlerLeadUpdateOutputDto
>;

// ████████ DeleteCrudEngine ████████████████████████████████████████
public declare readonly deleteEngine: DeleteCrudEngine<
// entity (1)
CrawlerLeadEntity,

// soft_delete (4)
CrawlerLeadSoftDeleteDto,
CrawlerLeadSoftDeleteInputWhereDto,
CrawlerLeadSoftDeleteInputDto,
CrawlerLeadSoftDeleteOutputDto,

// delete (4)
CrawlerLeadDeleteDto,
CrawlerLeadDeleteInputWhereDto,
CrawlerLeadDeleteInputDto,
CrawlerLeadDeleteOutputDto,

// restore (4)
CrawlerLeadRestoreDto,
CrawlerLeadRestoreInputWhereDto,
CrawlerLeadRestoreInputDto,
CrawlerLeadRestoreOutputDto
>;

// ████████ UpsertCrudEngine ████████████████████████████████████████
public declare readonly upsertEngine: UpsertCrudEngine<
// entity (1)
CrawlerLeadEntity,

// upsert (3)
CrawlerLeadUpsertDto,
CrawlerLeadUpsertInputDto,
CrawlerLeadUpsertOutputDto
>;

// ████████ RemoveCrudEngine ████████████████████████████████████████
public declare readonly removeEngine: RemoveCrudEngine<
// entity (1)
CrawlerLeadEntity,

// soft_remove (5)
CrawlerLeadSoftRemoveDto,
CrawlerLeadSoftRemoveInputWhereDto,
CrawlerLeadSoftRemoveInputDto,
CrawlerLeadSoftRemoveOutputAffectedRowsDto,
CrawlerLeadSoftRemoveOutputDto,

// remove (4)
CrawlerLeadRemoveDto,
CrawlerLeadRemoveInputWhereDto,
CrawlerLeadRemoveInputDto,
CrawlerLeadRemoveOutputAffectedRowsDto,
CrawlerLeadRemoveOutputDto,

// recover (5)
CrawlerLeadRecoverDto,
CrawlerLeadRecoverInputWhereDto,
CrawlerLeadRecoverInputDto,
CrawlerLeadRecoverOutputAffectedRowsDto,
CrawlerLeadRecoverOutputDto
>;

// ████████ UploadCrudEngine ████████████████████████████████████████
public declare readonly uploadEngine: UploadCrudEngine<
// entity (1)
CrawlerLeadEntity,

// upload (3)
CrawlerLeadUploadDto,
CrawlerLeadUploadInputDto,
CrawlerLeadUploadOutputDto,

// upload_delete (3)
CrawlerLeadUploadDeleteDto,
CrawlerLeadUploadDeleteInputDto,
CrawlerLeadUploadDeleteOutputDto
>;

constructor(
// data source
protected readonly dataSource: DataSource,

@InjectRepository(CrawlerLeadEntity)
protected readonly repository: Repository<CrawlerLeadEntity>,

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
    CrawlerLeadEntity,
);

this.logService.setContext(CrawlerLeadFactory.name);

// ████████ initialize FindCrudEngine ██████████████████████████████████████
this.initFindEngine
<
// find (8)
CrawlerLeadFindDto,
CrawlerLeadFindInputWhereDto,
CrawlerLeadFindInputSortOrderDto,
CrawlerLeadFindInputGroupByDto,
CrawlerLeadFindInputDto,
CrawlerLeadFindOutputRowsDto,
FindOutputPaginationDto,
CrawlerLeadFindOutputDto,

// find_one_by_id (2)
CrawlerLeadFindOneByIdDto,
CrawlerLeadFindOneByIdInputDto
>
(
// find (8)
CrawlerLeadFindDto,
CrawlerLeadFindInputWhereDto,
CrawlerLeadFindInputSortOrderDto,
CrawlerLeadFindInputGroupByDto,
CrawlerLeadFindInputDto,
CrawlerLeadFindOutputRowsDto,
FindOutputPaginationDto,
CrawlerLeadFindOutputDto,

// find_one_by_id (2)
CrawlerLeadFindOneByIdDto,
CrawlerLeadFindOneByIdInputDto
);


// ████████ initialize CreateCrudEngine ███████████████████████████████████████
this.initCreateEngine
<
// create (3)
CrawlerLeadCreateDto,
CrawlerLeadCreateInputDto,
CrawlerLeadCreateOutputDto
>
(
// create (3)
CrawlerLeadCreateDto,
CrawlerLeadCreateInputDto,
CrawlerLeadCreateOutputDto
);

// ████████ initialize UpdateCrudEngine ████████████████████████████████████████
this.initUpdateEngine
<
// update (6)
CrawlerLeadUpdateDto,
CrawlerLeadUpdateInputWhereDto,
CrawlerLeadUpdateInputSetsDto,
CrawlerLeadUpdateInputDto,
CrawlerLeadUpdateOutputAffectedRowsDto,
CrawlerLeadUpdateOutputDto
>
(
// update (6)
CrawlerLeadUpdateDto,
CrawlerLeadUpdateInputWhereDto,
CrawlerLeadUpdateInputSetsDto,
CrawlerLeadUpdateInputDto,
CrawlerLeadUpdateOutputAffectedRowsDto,
CrawlerLeadUpdateOutputDto
);


// ████████ initialize DeleteCrudEngine ███████████████████████████████████████████
this.initDeleteEngine
<
// soft_delete (4)
CrawlerLeadSoftDeleteDto,
CrawlerLeadSoftDeleteInputWhereDto,
CrawlerLeadSoftDeleteInputDto,
CrawlerLeadSoftDeleteOutputDto,

// delete (4)
CrawlerLeadDeleteDto,
CrawlerLeadDeleteInputWhereDto,
CrawlerLeadDeleteInputDto,
CrawlerLeadDeleteOutputDto,

// restore (4)
CrawlerLeadRestoreDto,
CrawlerLeadRestoreInputWhereDto,
CrawlerLeadRestoreInputDto,
CrawlerLeadRestoreOutputDto
>
(
// soft_delete (4)
CrawlerLeadSoftDeleteDto,
CrawlerLeadSoftDeleteInputWhereDto,
CrawlerLeadSoftDeleteInputDto,
CrawlerLeadSoftDeleteOutputDto,

// delete (4)
CrawlerLeadDeleteDto,
CrawlerLeadDeleteInputWhereDto,
CrawlerLeadDeleteInputDto,
CrawlerLeadDeleteOutputDto,

// restore (4)
CrawlerLeadRestoreDto,
CrawlerLeadRestoreInputWhereDto,
CrawlerLeadRestoreInputDto,
CrawlerLeadRestoreOutputDto
);



// ████████ initialize UpsertCrudEngine ███████████████████████████████████████████
this.initUpsertEngine
<
// upsert (3)
CrawlerLeadUpsertDto,
CrawlerLeadUpsertInputDto,
CrawlerLeadUpsertOutputDto
>
(
// upsert (3)
CrawlerLeadUpsertDto,
CrawlerLeadUpsertInputDto,
CrawlerLeadUpsertOutputDto
);




// ████████ initialize RemoveCrudEngine ███████████████████████████████████████████
this.initRemoveEngine
<
// soft_remove (5)
CrawlerLeadSoftRemoveDto,
CrawlerLeadSoftRemoveInputWhereDto,
CrawlerLeadSoftRemoveInputDto,
CrawlerLeadSoftRemoveOutputAffectedRowsDto,
CrawlerLeadSoftRemoveOutputDto,

// remove (4)
CrawlerLeadRemoveDto,
CrawlerLeadRemoveInputWhereDto,
CrawlerLeadRemoveInputDto,
CrawlerLeadRemoveOutputAffectedRowsDto,
CrawlerLeadRemoveOutputDto,

// recover (5)
CrawlerLeadRecoverDto,
CrawlerLeadRecoverInputWhereDto,
CrawlerLeadRecoverInputDto,
CrawlerLeadRecoverOutputAffectedRowsDto,
CrawlerLeadRecoverOutputDto
>
(
// soft_remove (5)
CrawlerLeadSoftRemoveDto,
CrawlerLeadSoftRemoveInputWhereDto,
CrawlerLeadSoftRemoveInputDto,
CrawlerLeadSoftRemoveOutputAffectedRowsDto,
CrawlerLeadSoftRemoveOutputDto,

// remove (4)
CrawlerLeadRemoveDto,
CrawlerLeadRemoveInputWhereDto,
CrawlerLeadRemoveInputDto,
CrawlerLeadRemoveOutputAffectedRowsDto,
CrawlerLeadRemoveOutputDto,

// recover (5)
CrawlerLeadRecoverDto,
CrawlerLeadRecoverInputWhereDto,
CrawlerLeadRecoverInputDto,
CrawlerLeadRecoverOutputAffectedRowsDto,
CrawlerLeadRecoverOutputDto
);



// ████████ initialize UploadCrudEngine ███████████████████████████████████████████
this.initUploadEngine
<
// upload (3)
CrawlerLeadUploadDto,
CrawlerLeadUploadInputDto,
CrawlerLeadUploadOutputDto,

// upload_delete (3)
CrawlerLeadUploadDeleteDto,
CrawlerLeadUploadDeleteInputDto,
CrawlerLeadUploadDeleteOutputDto
>
(
// upload (3)
CrawlerLeadUploadDto,
CrawlerLeadUploadInputDto,
CrawlerLeadUploadOutputDto,

// upload_delete (3)
CrawlerLeadUploadDeleteDto,
CrawlerLeadUploadDeleteInputDto,
CrawlerLeadUploadDeleteOutputDto
);


// ████████ initialize ImportExportCrudEngine █████████████████████████████████████

}

}