import { FaqEntity } from "./entities/faq.entity";
import { Injectable } from "@nestjs/common";
import { DataSource, Repository } from "typeorm";
import { InjectRepository } from "@nestjs/typeorm";
import { ConfService, CreateCrudEngine, CrudFactory, DataValidationPipe, DeleteCrudEngine, FindCrudEngine, FindOutputPaginationDto, LibraryAppService, LogService, RemoveCrudEngine, UpdateCrudEngine, UploadCrudEngine, UpsertCrudEngine } from "@libs/library-app";
import { SelfGraphqlMicroserviceService } from '@libs/dynamic-app';
import { FaqCreateDto, FaqCreateInputDto, FaqCreateOutputDto, FaqDeleteDto, FaqDeleteInputDto, FaqDeleteInputWhereDto, FaqDeleteOutputDto, FaqFindDto, FaqFindInputDto, FaqFindInputGroupByDto, FaqFindInputSortOrderDto, FaqFindInputWhereDto, FaqFindOneByIdDto, FaqFindOneByIdInputDto, FaqFindOutputDto, FaqFindOutputRowsDto, FaqRecoverDto, FaqRecoverInputDto, FaqRecoverInputWhereDto, FaqRecoverOutputDto, FaqRecoverOutputAffectedRowsDto, FaqRemoveDto, FaqRemoveInputDto, FaqRemoveInputWhereDto, FaqRemoveOutputDto, FaqRemoveOutputAffectedRowsDto, FaqRestoreDto, FaqRestoreInputDto, FaqRestoreInputWhereDto, FaqRestoreOutputDto, FaqSoftDeleteDto, FaqSoftDeleteInputDto, FaqSoftDeleteInputWhereDto, FaqSoftDeleteOutputDto, FaqSoftRemoveDto, FaqSoftRemoveInputDto, FaqSoftRemoveInputWhereDto, FaqSoftRemoveOutputDto, FaqSoftRemoveOutputAffectedRowsDto, FaqUpdateDto, FaqUpdateInputDto, FaqUpdateInputSetsDto, FaqUpdateInputWhereDto, FaqUpdateOutputDto, FaqUpdateOutputAffectedRowsDto, FaqUploadDeleteDto, FaqUploadDeleteInputDto, FaqUploadDeleteOutputDto, FaqUploadDto, FaqUploadInputDto, FaqUploadOutputDto, FaqUpsertDto, FaqUpsertInputDto, FaqUpsertOutputDto } from "./dto/faq.dto";

@Injectable()
export class FaqFactory extends CrudFactory<FaqEntity> {

// ████████ FindCrudEngine ████████████████████████████████████████
public declare readonly findEngine: FindCrudEngine<
// entity (1)
FaqEntity,

// find (8)
FaqFindDto,
FaqFindInputWhereDto,
FaqFindInputSortOrderDto,
FaqFindInputGroupByDto,
FaqFindInputDto,
FaqFindOutputRowsDto,
FindOutputPaginationDto,
FaqFindOutputDto,

// find_one_by_id (2)
FaqFindOneByIdDto,
FaqFindOneByIdInputDto
>;

// ████████ CreateCrudEngine ████████████████████████████████████████
public declare readonly createEngine: CreateCrudEngine<
// entity (1)
FaqEntity,

// create (3)
FaqCreateDto,
FaqCreateInputDto,
FaqCreateOutputDto
>;

// ████████ UpdateCrudEngine ████████████████████████████████████████
public declare readonly updateEngine: UpdateCrudEngine<
// entity (1)
FaqEntity,

// update (6)
FaqUpdateDto,
FaqUpdateInputWhereDto,
FaqUpdateInputSetsDto,
FaqUpdateInputDto,
FaqUpdateOutputAffectedRowsDto,
FaqUpdateOutputDto
>;

// ████████ DeleteCrudEngine ████████████████████████████████████████
public declare readonly deleteEngine: DeleteCrudEngine<
// entity (1)
FaqEntity,

// soft_delete (4)
FaqSoftDeleteDto,
FaqSoftDeleteInputWhereDto,
FaqSoftDeleteInputDto,
FaqSoftDeleteOutputDto,

// delete (4)
FaqDeleteDto,
FaqDeleteInputWhereDto,
FaqDeleteInputDto,
FaqDeleteOutputDto,

// restore (4)
FaqRestoreDto,
FaqRestoreInputWhereDto,
FaqRestoreInputDto,
FaqRestoreOutputDto
>;

// ████████ UpsertCrudEngine ████████████████████████████████████████
public declare readonly upsertEngine: UpsertCrudEngine<
// entity (1)
FaqEntity,

// upsert (3)
FaqUpsertDto,
FaqUpsertInputDto,
FaqUpsertOutputDto
>;

// ████████ RemoveCrudEngine ████████████████████████████████████████
public declare readonly removeEngine: RemoveCrudEngine<
// entity (1)
FaqEntity,

// soft_remove (5)
FaqSoftRemoveDto,
FaqSoftRemoveInputWhereDto,
FaqSoftRemoveInputDto,
FaqSoftRemoveOutputAffectedRowsDto,
FaqSoftRemoveOutputDto,

// remove (4)
FaqRemoveDto,
FaqRemoveInputWhereDto,
FaqRemoveInputDto,
FaqRemoveOutputAffectedRowsDto,
FaqRemoveOutputDto,

// recover (5)
FaqRecoverDto,
FaqRecoverInputWhereDto,
FaqRecoverInputDto,
FaqRecoverOutputAffectedRowsDto,
FaqRecoverOutputDto
>;

// ████████ UploadCrudEngine ████████████████████████████████████████
public declare readonly uploadEngine: UploadCrudEngine<
// entity (1)
FaqEntity,

// upload (3)
FaqUploadDto,
FaqUploadInputDto,
FaqUploadOutputDto,

// upload_delete (3)
FaqUploadDeleteDto,
FaqUploadDeleteInputDto,
FaqUploadDeleteOutputDto
>;

constructor(
// data source
protected readonly dataSource: DataSource,

@InjectRepository(FaqEntity)
protected readonly repository: Repository<FaqEntity>,

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
    FaqEntity,
);

this.logService.setContext(FaqFactory.name);

// ████████ initialize FindCrudEngine ██████████████████████████████████████
this.initFindEngine
<
// find (8)
FaqFindDto,
FaqFindInputWhereDto,
FaqFindInputSortOrderDto,
FaqFindInputGroupByDto,
FaqFindInputDto,
FaqFindOutputRowsDto,
FindOutputPaginationDto,
FaqFindOutputDto,

// find_one_by_id (2)
FaqFindOneByIdDto,
FaqFindOneByIdInputDto
>
(
// find (8)
FaqFindDto,
FaqFindInputWhereDto,
FaqFindInputSortOrderDto,
FaqFindInputGroupByDto,
FaqFindInputDto,
FaqFindOutputRowsDto,
FindOutputPaginationDto,
FaqFindOutputDto,

// find_one_by_id (2)
FaqFindOneByIdDto,
FaqFindOneByIdInputDto
);


// ████████ initialize CreateCrudEngine ███████████████████████████████████████
this.initCreateEngine
<
// create (3)
FaqCreateDto,
FaqCreateInputDto,
FaqCreateOutputDto
>
(
// create (3)
FaqCreateDto,
FaqCreateInputDto,
FaqCreateOutputDto
);

// ████████ initialize UpdateCrudEngine ████████████████████████████████████████
this.initUpdateEngine
<
// update (6)
FaqUpdateDto,
FaqUpdateInputWhereDto,
FaqUpdateInputSetsDto,
FaqUpdateInputDto,
FaqUpdateOutputAffectedRowsDto,
FaqUpdateOutputDto
>
(
// update (6)
FaqUpdateDto,
FaqUpdateInputWhereDto,
FaqUpdateInputSetsDto,
FaqUpdateInputDto,
FaqUpdateOutputAffectedRowsDto,
FaqUpdateOutputDto
);


// ████████ initialize DeleteCrudEngine ███████████████████████████████████████████
this.initDeleteEngine
<
// soft_delete (4)
FaqSoftDeleteDto,
FaqSoftDeleteInputWhereDto,
FaqSoftDeleteInputDto,
FaqSoftDeleteOutputDto,

// delete (4)
FaqDeleteDto,
FaqDeleteInputWhereDto,
FaqDeleteInputDto,
FaqDeleteOutputDto,

// restore (4)
FaqRestoreDto,
FaqRestoreInputWhereDto,
FaqRestoreInputDto,
FaqRestoreOutputDto
>
(
// soft_delete (4)
FaqSoftDeleteDto,
FaqSoftDeleteInputWhereDto,
FaqSoftDeleteInputDto,
FaqSoftDeleteOutputDto,

// delete (4)
FaqDeleteDto,
FaqDeleteInputWhereDto,
FaqDeleteInputDto,
FaqDeleteOutputDto,

// restore (4)
FaqRestoreDto,
FaqRestoreInputWhereDto,
FaqRestoreInputDto,
FaqRestoreOutputDto
);



// ████████ initialize UpsertCrudEngine ███████████████████████████████████████████
this.initUpsertEngine
<
// upsert (3)
FaqUpsertDto,
FaqUpsertInputDto,
FaqUpsertOutputDto
>
(
// upsert (3)
FaqUpsertDto,
FaqUpsertInputDto,
FaqUpsertOutputDto
);




// ████████ initialize RemoveCrudEngine ███████████████████████████████████████████
this.initRemoveEngine
<
// soft_remove (5)
FaqSoftRemoveDto,
FaqSoftRemoveInputWhereDto,
FaqSoftRemoveInputDto,
FaqSoftRemoveOutputAffectedRowsDto,
FaqSoftRemoveOutputDto,

// remove (4)
FaqRemoveDto,
FaqRemoveInputWhereDto,
FaqRemoveInputDto,
FaqRemoveOutputAffectedRowsDto,
FaqRemoveOutputDto,

// recover (5)
FaqRecoverDto,
FaqRecoverInputWhereDto,
FaqRecoverInputDto,
FaqRecoverOutputAffectedRowsDto,
FaqRecoverOutputDto
>
(
// soft_remove (5)
FaqSoftRemoveDto,
FaqSoftRemoveInputWhereDto,
FaqSoftRemoveInputDto,
FaqSoftRemoveOutputAffectedRowsDto,
FaqSoftRemoveOutputDto,

// remove (4)
FaqRemoveDto,
FaqRemoveInputWhereDto,
FaqRemoveInputDto,
FaqRemoveOutputAffectedRowsDto,
FaqRemoveOutputDto,

// recover (5)
FaqRecoverDto,
FaqRecoverInputWhereDto,
FaqRecoverInputDto,
FaqRecoverOutputAffectedRowsDto,
FaqRecoverOutputDto
);



// ████████ initialize UploadCrudEngine ███████████████████████████████████████████
this.initUploadEngine
<
// upload (3)
FaqUploadDto,
FaqUploadInputDto,
FaqUploadOutputDto,

// upload_delete (3)
FaqUploadDeleteDto,
FaqUploadDeleteInputDto,
FaqUploadDeleteOutputDto
>
(
// upload (3)
FaqUploadDto,
FaqUploadInputDto,
FaqUploadOutputDto,

// upload_delete (3)
FaqUploadDeleteDto,
FaqUploadDeleteInputDto,
FaqUploadDeleteOutputDto
);


// ████████ initialize ImportExportCrudEngine █████████████████████████████████████

}

}