import { LeadFollowupEntity } from "./entities/lead.followup.entity";
import { Injectable } from "@nestjs/common";
import { DataSource, Repository } from "typeorm";
import { InjectRepository } from "@nestjs/typeorm";
import { ConfService, CreateCrudEngine, CrudFactory, DataValidationPipe, DeleteCrudEngine, FindCrudEngine, FindOutputPaginationDto, LibraryAppService, LogService, RemoveCrudEngine, UpdateCrudEngine, UploadCrudEngine, UpsertCrudEngine } from "@libs/library-app";
import { SelfGraphqlMicroserviceService } from '@libs/dynamic-app';
import { LeadFollowupCreateDto, LeadFollowupCreateInputDto, LeadFollowupCreateOutputDto, LeadFollowupDeleteDto, LeadFollowupDeleteInputDto, LeadFollowupDeleteInputWhereDto, LeadFollowupDeleteOutputDto, LeadFollowupFindDto, LeadFollowupFindInputDto, LeadFollowupFindInputGroupByDto, LeadFollowupFindInputSortOrderDto, LeadFollowupFindInputWhereDto, LeadFollowupFindOneByIdDto, LeadFollowupFindOneByIdInputDto, LeadFollowupFindOutputDto, LeadFollowupFindOutputRowsDto, LeadFollowupRecoverDto, LeadFollowupRecoverInputDto, LeadFollowupRecoverInputWhereDto, LeadFollowupRecoverOutputDto, LeadFollowupRecoverOutputAffectedRowsDto, LeadFollowupRemoveDto, LeadFollowupRemoveInputDto, LeadFollowupRemoveInputWhereDto, LeadFollowupRemoveOutputDto, LeadFollowupRemoveOutputAffectedRowsDto, LeadFollowupRestoreDto, LeadFollowupRestoreInputDto, LeadFollowupRestoreInputWhereDto, LeadFollowupRestoreOutputDto, LeadFollowupSoftDeleteDto, LeadFollowupSoftDeleteInputDto, LeadFollowupSoftDeleteInputWhereDto, LeadFollowupSoftDeleteOutputDto, LeadFollowupSoftRemoveDto, LeadFollowupSoftRemoveInputDto, LeadFollowupSoftRemoveInputWhereDto, LeadFollowupSoftRemoveOutputDto, LeadFollowupSoftRemoveOutputAffectedRowsDto, LeadFollowupUpdateDto, LeadFollowupUpdateInputDto, LeadFollowupUpdateInputSetsDto, LeadFollowupUpdateInputWhereDto, LeadFollowupUpdateOutputDto, LeadFollowupUpdateOutputAffectedRowsDto, LeadFollowupUploadDeleteDto, LeadFollowupUploadDeleteInputDto, LeadFollowupUploadDeleteOutputDto, LeadFollowupUploadDto, LeadFollowupUploadInputDto, LeadFollowupUploadOutputDto, LeadFollowupUpsertDto, LeadFollowupUpsertInputDto, LeadFollowupUpsertOutputDto } from "./dto/followup.dto";

@Injectable()
export class LeadFollowupFactory extends CrudFactory<LeadFollowupEntity> {

// ████████ FindCrudEngine ████████████████████████████████████████
public declare readonly findEngine: FindCrudEngine<
// entity (1)
LeadFollowupEntity,

// find (8)
LeadFollowupFindDto,
LeadFollowupFindInputWhereDto,
LeadFollowupFindInputSortOrderDto,
LeadFollowupFindInputGroupByDto,
LeadFollowupFindInputDto,
LeadFollowupFindOutputRowsDto,
FindOutputPaginationDto,
LeadFollowupFindOutputDto,

// find_one_by_id (2)
LeadFollowupFindOneByIdDto,
LeadFollowupFindOneByIdInputDto
>;

// ████████ CreateCrudEngine ████████████████████████████████████████
public declare readonly createEngine: CreateCrudEngine<
// entity (1)
LeadFollowupEntity,

// create (3)
LeadFollowupCreateDto,
LeadFollowupCreateInputDto,
LeadFollowupCreateOutputDto
>;

// ████████ UpdateCrudEngine ████████████████████████████████████████
public declare readonly updateEngine: UpdateCrudEngine<
// entity (1)
LeadFollowupEntity,

// update (6)
LeadFollowupUpdateDto,
LeadFollowupUpdateInputWhereDto,
LeadFollowupUpdateInputSetsDto,
LeadFollowupUpdateInputDto,
LeadFollowupUpdateOutputAffectedRowsDto,
LeadFollowupUpdateOutputDto
>;

// ████████ DeleteCrudEngine ████████████████████████████████████████
public declare readonly deleteEngine: DeleteCrudEngine<
// entity (1)
LeadFollowupEntity,

// soft_delete (4)
LeadFollowupSoftDeleteDto,
LeadFollowupSoftDeleteInputWhereDto,
LeadFollowupSoftDeleteInputDto,
LeadFollowupSoftDeleteOutputDto,

// delete (4)
LeadFollowupDeleteDto,
LeadFollowupDeleteInputWhereDto,
LeadFollowupDeleteInputDto,
LeadFollowupDeleteOutputDto,

// restore (4)
LeadFollowupRestoreDto,
LeadFollowupRestoreInputWhereDto,
LeadFollowupRestoreInputDto,
LeadFollowupRestoreOutputDto
>;

// ████████ UpsertCrudEngine ████████████████████████████████████████
public declare readonly upsertEngine: UpsertCrudEngine<
// entity (1)
LeadFollowupEntity,

// upsert (3)
LeadFollowupUpsertDto,
LeadFollowupUpsertInputDto,
LeadFollowupUpsertOutputDto
>;

// ████████ RemoveCrudEngine ████████████████████████████████████████
public declare readonly removeEngine: RemoveCrudEngine<
// entity (1)
LeadFollowupEntity,

// soft_remove (5)
LeadFollowupSoftRemoveDto,
LeadFollowupSoftRemoveInputWhereDto,
LeadFollowupSoftRemoveInputDto,
LeadFollowupSoftRemoveOutputAffectedRowsDto,
LeadFollowupSoftRemoveOutputDto,

// remove (4)
LeadFollowupRemoveDto,
LeadFollowupRemoveInputWhereDto,
LeadFollowupRemoveInputDto,
LeadFollowupRemoveOutputAffectedRowsDto,
LeadFollowupRemoveOutputDto,

// recover (5)
LeadFollowupRecoverDto,
LeadFollowupRecoverInputWhereDto,
LeadFollowupRecoverInputDto,
LeadFollowupRecoverOutputAffectedRowsDto,
LeadFollowupRecoverOutputDto
>;

// ████████ UploadCrudEngine ████████████████████████████████████████
public declare readonly uploadEngine: UploadCrudEngine<
// entity (1)
LeadFollowupEntity,

// upload (3)
LeadFollowupUploadDto,
LeadFollowupUploadInputDto,
LeadFollowupUploadOutputDto,

// upload_delete (3)
LeadFollowupUploadDeleteDto,
LeadFollowupUploadDeleteInputDto,
LeadFollowupUploadDeleteOutputDto
>;

constructor(
// data source
protected readonly dataSource: DataSource,

@InjectRepository(LeadFollowupEntity)
protected readonly repository: Repository<LeadFollowupEntity>,

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
    LeadFollowupEntity,
);

this.logService.setContext(LeadFollowupFactory.name);

// ████████ initialize FindCrudEngine ██████████████████████████████████████
this.initFindEngine
<
// find (8)
LeadFollowupFindDto,
LeadFollowupFindInputWhereDto,
LeadFollowupFindInputSortOrderDto,
LeadFollowupFindInputGroupByDto,
LeadFollowupFindInputDto,
LeadFollowupFindOutputRowsDto,
FindOutputPaginationDto,
LeadFollowupFindOutputDto,

// find_one_by_id (2)
LeadFollowupFindOneByIdDto,
LeadFollowupFindOneByIdInputDto
>
(
// find (8)
LeadFollowupFindDto,
LeadFollowupFindInputWhereDto,
LeadFollowupFindInputSortOrderDto,
LeadFollowupFindInputGroupByDto,
LeadFollowupFindInputDto,
LeadFollowupFindOutputRowsDto,
FindOutputPaginationDto,
LeadFollowupFindOutputDto,

// find_one_by_id (2)
LeadFollowupFindOneByIdDto,
LeadFollowupFindOneByIdInputDto
);


// ████████ initialize CreateCrudEngine ███████████████████████████████████████
this.initCreateEngine
<
// create (3)
LeadFollowupCreateDto,
LeadFollowupCreateInputDto,
LeadFollowupCreateOutputDto
>
(
// create (3)
LeadFollowupCreateDto,
LeadFollowupCreateInputDto,
LeadFollowupCreateOutputDto
);

// ████████ initialize UpdateCrudEngine ████████████████████████████████████████
this.initUpdateEngine
<
// update (6)
LeadFollowupUpdateDto,
LeadFollowupUpdateInputWhereDto,
LeadFollowupUpdateInputSetsDto,
LeadFollowupUpdateInputDto,
LeadFollowupUpdateOutputAffectedRowsDto,
LeadFollowupUpdateOutputDto
>
(
// update (6)
LeadFollowupUpdateDto,
LeadFollowupUpdateInputWhereDto,
LeadFollowupUpdateInputSetsDto,
LeadFollowupUpdateInputDto,
LeadFollowupUpdateOutputAffectedRowsDto,
LeadFollowupUpdateOutputDto
);


// ████████ initialize DeleteCrudEngine ███████████████████████████████████████████
this.initDeleteEngine
<
// soft_delete (4)
LeadFollowupSoftDeleteDto,
LeadFollowupSoftDeleteInputWhereDto,
LeadFollowupSoftDeleteInputDto,
LeadFollowupSoftDeleteOutputDto,

// delete (4)
LeadFollowupDeleteDto,
LeadFollowupDeleteInputWhereDto,
LeadFollowupDeleteInputDto,
LeadFollowupDeleteOutputDto,

// restore (4)
LeadFollowupRestoreDto,
LeadFollowupRestoreInputWhereDto,
LeadFollowupRestoreInputDto,
LeadFollowupRestoreOutputDto
>
(
// soft_delete (4)
LeadFollowupSoftDeleteDto,
LeadFollowupSoftDeleteInputWhereDto,
LeadFollowupSoftDeleteInputDto,
LeadFollowupSoftDeleteOutputDto,

// delete (4)
LeadFollowupDeleteDto,
LeadFollowupDeleteInputWhereDto,
LeadFollowupDeleteInputDto,
LeadFollowupDeleteOutputDto,

// restore (4)
LeadFollowupRestoreDto,
LeadFollowupRestoreInputWhereDto,
LeadFollowupRestoreInputDto,
LeadFollowupRestoreOutputDto
);



// ████████ initialize UpsertCrudEngine ███████████████████████████████████████████
this.initUpsertEngine
<
// upsert (3)
LeadFollowupUpsertDto,
LeadFollowupUpsertInputDto,
LeadFollowupUpsertOutputDto
>
(
// upsert (3)
LeadFollowupUpsertDto,
LeadFollowupUpsertInputDto,
LeadFollowupUpsertOutputDto
);




// ████████ initialize RemoveCrudEngine ███████████████████████████████████████████
this.initRemoveEngine
<
// soft_remove (5)
LeadFollowupSoftRemoveDto,
LeadFollowupSoftRemoveInputWhereDto,
LeadFollowupSoftRemoveInputDto,
LeadFollowupSoftRemoveOutputAffectedRowsDto,
LeadFollowupSoftRemoveOutputDto,

// remove (4)
LeadFollowupRemoveDto,
LeadFollowupRemoveInputWhereDto,
LeadFollowupRemoveInputDto,
LeadFollowupRemoveOutputAffectedRowsDto,
LeadFollowupRemoveOutputDto,

// recover (5)
LeadFollowupRecoverDto,
LeadFollowupRecoverInputWhereDto,
LeadFollowupRecoverInputDto,
LeadFollowupRecoverOutputAffectedRowsDto,
LeadFollowupRecoverOutputDto
>
(
// soft_remove (5)
LeadFollowupSoftRemoveDto,
LeadFollowupSoftRemoveInputWhereDto,
LeadFollowupSoftRemoveInputDto,
LeadFollowupSoftRemoveOutputAffectedRowsDto,
LeadFollowupSoftRemoveOutputDto,

// remove (4)
LeadFollowupRemoveDto,
LeadFollowupRemoveInputWhereDto,
LeadFollowupRemoveInputDto,
LeadFollowupRemoveOutputAffectedRowsDto,
LeadFollowupRemoveOutputDto,

// recover (5)
LeadFollowupRecoverDto,
LeadFollowupRecoverInputWhereDto,
LeadFollowupRecoverInputDto,
LeadFollowupRecoverOutputAffectedRowsDto,
LeadFollowupRecoverOutputDto
);



// ████████ initialize UploadCrudEngine ███████████████████████████████████████████
this.initUploadEngine
<
// upload (3)
LeadFollowupUploadDto,
LeadFollowupUploadInputDto,
LeadFollowupUploadOutputDto,

// upload_delete (3)
LeadFollowupUploadDeleteDto,
LeadFollowupUploadDeleteInputDto,
LeadFollowupUploadDeleteOutputDto
>
(
// upload (3)
LeadFollowupUploadDto,
LeadFollowupUploadInputDto,
LeadFollowupUploadOutputDto,

// upload_delete (3)
LeadFollowupUploadDeleteDto,
LeadFollowupUploadDeleteInputDto,
LeadFollowupUploadDeleteOutputDto
);


// ████████ initialize ImportExportCrudEngine █████████████████████████████████████

}

}