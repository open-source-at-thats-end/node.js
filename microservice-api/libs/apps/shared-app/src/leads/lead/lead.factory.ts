import { LeadEntity } from "./entities/lead.entity";
import { Injectable } from "@nestjs/common";
import { DataSource, Repository } from "typeorm";
import { InjectRepository } from "@nestjs/typeorm";
import { ConfService, CreateCrudEngine, CrudFactory, DataValidationPipe, DeleteCrudEngine, FindCrudEngine, FindOutputPaginationDto, LibraryAppService, LogService, RemoveCrudEngine, UpdateCrudEngine, UploadCrudEngine, UpsertCrudEngine } from "@libs/library-app";
import { SelfGraphqlMicroserviceService } from '@libs/dynamic-app';
import { LeadCreateDto, LeadCreateInputDto, LeadCreateOutputDto, LeadDeleteDto, LeadDeleteInputDto, LeadDeleteInputWhereDto, LeadDeleteOutputDto, LeadFindDto, LeadFindInputDto, LeadFindInputGroupByDto, LeadFindInputSortOrderDto, LeadFindInputWhereDto, LeadFindOneByIdDto, LeadFindOneByIdInputDto, LeadFindOutputDto, LeadFindOutputRowsDto, LeadRecoverDto, LeadRecoverInputDto, LeadRecoverInputWhereDto, LeadRecoverOutputDto, LeadRecoverOutputAffectedRowsDto, LeadRemoveDto, LeadRemoveInputDto, LeadRemoveInputWhereDto, LeadRemoveOutputDto, LeadRemoveOutputAffectedRowsDto, LeadRestoreDto, LeadRestoreInputDto, LeadRestoreInputWhereDto, LeadRestoreOutputDto, LeadSoftDeleteDto, LeadSoftDeleteInputDto, LeadSoftDeleteInputWhereDto, LeadSoftDeleteOutputDto, LeadSoftRemoveDto, LeadSoftRemoveInputDto, LeadSoftRemoveInputWhereDto, LeadSoftRemoveOutputDto, LeadSoftRemoveOutputAffectedRowsDto, LeadUpdateDto, LeadUpdateInputDto, LeadUpdateInputSetsDto, LeadUpdateInputWhereDto, LeadUpdateOutputDto, LeadUpdateOutputAffectedRowsDto, LeadUploadDeleteDto, LeadUploadDeleteInputDto, LeadUploadDeleteOutputDto, LeadUploadDto, LeadUploadInputDto, LeadUploadOutputDto, LeadUpsertDto, LeadUpsertInputDto, LeadUpsertOutputDto } from "./dto/lead.dto";

@Injectable()
export class LeadFactory extends CrudFactory<LeadEntity> {

// ████████ FindCrudEngine ████████████████████████████████████████
public declare readonly findEngine: FindCrudEngine<
// entity (1)
LeadEntity,

// find (8)
LeadFindDto,
LeadFindInputWhereDto,
LeadFindInputSortOrderDto,
LeadFindInputGroupByDto,
LeadFindInputDto,
LeadFindOutputRowsDto,
FindOutputPaginationDto,
LeadFindOutputDto,

// find_one_by_id (2)
LeadFindOneByIdDto,
LeadFindOneByIdInputDto
>;

// ████████ CreateCrudEngine ████████████████████████████████████████
public declare readonly createEngine: CreateCrudEngine<
// entity (1)
LeadEntity,

// create (3)
LeadCreateDto,
LeadCreateInputDto,
LeadCreateOutputDto
>;

// ████████ UpdateCrudEngine ████████████████████████████████████████
public declare readonly updateEngine: UpdateCrudEngine<
// entity (1)
LeadEntity,

// update (6)
LeadUpdateDto,
LeadUpdateInputWhereDto,
LeadUpdateInputSetsDto,
LeadUpdateInputDto,
LeadUpdateOutputAffectedRowsDto,
LeadUpdateOutputDto
>;

// ████████ DeleteCrudEngine ████████████████████████████████████████
public declare readonly deleteEngine: DeleteCrudEngine<
// entity (1)
LeadEntity,

// soft_delete (4)
LeadSoftDeleteDto,
LeadSoftDeleteInputWhereDto,
LeadSoftDeleteInputDto,
LeadSoftDeleteOutputDto,

// delete (4)
LeadDeleteDto,
LeadDeleteInputWhereDto,
LeadDeleteInputDto,
LeadDeleteOutputDto,

// restore (4)
LeadRestoreDto,
LeadRestoreInputWhereDto,
LeadRestoreInputDto,
LeadRestoreOutputDto
>;

// ████████ UpsertCrudEngine ████████████████████████████████████████
public declare readonly upsertEngine: UpsertCrudEngine<
// entity (1)
LeadEntity,

// upsert (3)
LeadUpsertDto,
LeadUpsertInputDto,
LeadUpsertOutputDto
>;

// ████████ RemoveCrudEngine ████████████████████████████████████████
public declare readonly removeEngine: RemoveCrudEngine<
// entity (1)
LeadEntity,

// soft_remove (5)
LeadSoftRemoveDto,
LeadSoftRemoveInputWhereDto,
LeadSoftRemoveInputDto,
LeadSoftRemoveOutputAffectedRowsDto,
LeadSoftRemoveOutputDto,

// remove (4)
LeadRemoveDto,
LeadRemoveInputWhereDto,
LeadRemoveInputDto,
LeadRemoveOutputAffectedRowsDto,
LeadRemoveOutputDto,

// recover (5)
LeadRecoverDto,
LeadRecoverInputWhereDto,
LeadRecoverInputDto,
LeadRecoverOutputAffectedRowsDto,
LeadRecoverOutputDto
>;

// ████████ UploadCrudEngine ████████████████████████████████████████
public declare readonly uploadEngine: UploadCrudEngine<
// entity (1)
LeadEntity,

// upload (3)
LeadUploadDto,
LeadUploadInputDto,
LeadUploadOutputDto,

// upload_delete (3)
LeadUploadDeleteDto,
LeadUploadDeleteInputDto,
LeadUploadDeleteOutputDto
>;

constructor(
// data source
protected readonly dataSource: DataSource,

@InjectRepository(LeadEntity)
protected readonly repository: Repository<LeadEntity>,

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
    LeadEntity,
);

this.logService.setContext(LeadFactory.name);

// ████████ initialize FindCrudEngine ██████████████████████████████████████
this.initFindEngine
<
// find (8)
LeadFindDto,
LeadFindInputWhereDto,
LeadFindInputSortOrderDto,
LeadFindInputGroupByDto,
LeadFindInputDto,
LeadFindOutputRowsDto,
FindOutputPaginationDto,
LeadFindOutputDto,

// find_one_by_id (2)
LeadFindOneByIdDto,
LeadFindOneByIdInputDto
>
(
// find (8)
LeadFindDto,
LeadFindInputWhereDto,
LeadFindInputSortOrderDto,
LeadFindInputGroupByDto,
LeadFindInputDto,
LeadFindOutputRowsDto,
FindOutputPaginationDto,
LeadFindOutputDto,

// find_one_by_id (2)
LeadFindOneByIdDto,
LeadFindOneByIdInputDto
);


// ████████ initialize CreateCrudEngine ███████████████████████████████████████
this.initCreateEngine
<
// create (3)
LeadCreateDto,
LeadCreateInputDto,
LeadCreateOutputDto
>
(
// create (3)
LeadCreateDto,
LeadCreateInputDto,
LeadCreateOutputDto
);

// ████████ initialize UpdateCrudEngine ████████████████████████████████████████
this.initUpdateEngine
<
// update (6)
LeadUpdateDto,
LeadUpdateInputWhereDto,
LeadUpdateInputSetsDto,
LeadUpdateInputDto,
LeadUpdateOutputAffectedRowsDto,
LeadUpdateOutputDto
>
(
// update (6)
LeadUpdateDto,
LeadUpdateInputWhereDto,
LeadUpdateInputSetsDto,
LeadUpdateInputDto,
LeadUpdateOutputAffectedRowsDto,
LeadUpdateOutputDto
);


// ████████ initialize DeleteCrudEngine ███████████████████████████████████████████
this.initDeleteEngine
<
// soft_delete (4)
LeadSoftDeleteDto,
LeadSoftDeleteInputWhereDto,
LeadSoftDeleteInputDto,
LeadSoftDeleteOutputDto,

// delete (4)
LeadDeleteDto,
LeadDeleteInputWhereDto,
LeadDeleteInputDto,
LeadDeleteOutputDto,

// restore (4)
LeadRestoreDto,
LeadRestoreInputWhereDto,
LeadRestoreInputDto,
LeadRestoreOutputDto
>
(
// soft_delete (4)
LeadSoftDeleteDto,
LeadSoftDeleteInputWhereDto,
LeadSoftDeleteInputDto,
LeadSoftDeleteOutputDto,

// delete (4)
LeadDeleteDto,
LeadDeleteInputWhereDto,
LeadDeleteInputDto,
LeadDeleteOutputDto,

// restore (4)
LeadRestoreDto,
LeadRestoreInputWhereDto,
LeadRestoreInputDto,
LeadRestoreOutputDto
);



// ████████ initialize UpsertCrudEngine ███████████████████████████████████████████
this.initUpsertEngine
<
// upsert (3)
LeadUpsertDto,
LeadUpsertInputDto,
LeadUpsertOutputDto
>
(
// upsert (3)
LeadUpsertDto,
LeadUpsertInputDto,
LeadUpsertOutputDto
);




// ████████ initialize RemoveCrudEngine ███████████████████████████████████████████
this.initRemoveEngine
<
// soft_remove (5)
LeadSoftRemoveDto,
LeadSoftRemoveInputWhereDto,
LeadSoftRemoveInputDto,
LeadSoftRemoveOutputAffectedRowsDto,
LeadSoftRemoveOutputDto,

// remove (4)
LeadRemoveDto,
LeadRemoveInputWhereDto,
LeadRemoveInputDto,
LeadRemoveOutputAffectedRowsDto,
LeadRemoveOutputDto,

// recover (5)
LeadRecoverDto,
LeadRecoverInputWhereDto,
LeadRecoverInputDto,
LeadRecoverOutputAffectedRowsDto,
LeadRecoverOutputDto
>
(
// soft_remove (5)
LeadSoftRemoveDto,
LeadSoftRemoveInputWhereDto,
LeadSoftRemoveInputDto,
LeadSoftRemoveOutputAffectedRowsDto,
LeadSoftRemoveOutputDto,

// remove (4)
LeadRemoveDto,
LeadRemoveInputWhereDto,
LeadRemoveInputDto,
LeadRemoveOutputAffectedRowsDto,
LeadRemoveOutputDto,

// recover (5)
LeadRecoverDto,
LeadRecoverInputWhereDto,
LeadRecoverInputDto,
LeadRecoverOutputAffectedRowsDto,
LeadRecoverOutputDto
);



// ████████ initialize UploadCrudEngine ███████████████████████████████████████████
this.initUploadEngine
<
// upload (3)
LeadUploadDto,
LeadUploadInputDto,
LeadUploadOutputDto,

// upload_delete (3)
LeadUploadDeleteDto,
LeadUploadDeleteInputDto,
LeadUploadDeleteOutputDto
>
(
// upload (3)
LeadUploadDto,
LeadUploadInputDto,
LeadUploadOutputDto,

// upload_delete (3)
LeadUploadDeleteDto,
LeadUploadDeleteInputDto,
LeadUploadDeleteOutputDto
);


// ████████ initialize ImportExportCrudEngine █████████████████████████████████████

}

}