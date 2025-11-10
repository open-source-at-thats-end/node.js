import { LeadFollowupViaEntity } from "./entities/followup.via.entity";
import { Injectable } from "@nestjs/common";
import { DataSource, Repository } from "typeorm";
import { InjectRepository } from "@nestjs/typeorm";
import { ConfService, CreateCrudEngine, CrudFactory, DataValidationPipe, DeleteCrudEngine, FindCrudEngine, FindOutputPaginationDto, LibraryAppService, LogService, RemoveCrudEngine, UpdateCrudEngine, UploadCrudEngine, UpsertCrudEngine } from "@libs/library-app";
import { SelfGraphqlMicroserviceService } from '@libs/dynamic-app';
import { LeadFollowupViaCreateDto, LeadFollowupViaCreateInputDto, LeadFollowupViaCreateOutputDto, LeadFollowupViaDeleteDto, LeadFollowupViaDeleteInputDto, LeadFollowupViaDeleteInputWhereDto, LeadFollowupViaDeleteOutputDto, LeadFollowupViaFindDto, LeadFollowupViaFindInputDto, LeadFollowupViaFindInputGroupByDto, LeadFollowupViaFindInputSortOrderDto, LeadFollowupViaFindInputWhereDto, LeadFollowupViaFindOneByIdDto, LeadFollowupViaFindOneByIdInputDto, LeadFollowupViaFindOutputDto, LeadFollowupViaFindOutputRowsDto, LeadFollowupViaRecoverDto, LeadFollowupViaRecoverInputDto, LeadFollowupViaRecoverInputWhereDto, LeadFollowupViaRecoverOutputDto, LeadFollowupViaRecoverOutputAffectedRowsDto, LeadFollowupViaRemoveDto, LeadFollowupViaRemoveInputDto, LeadFollowupViaRemoveInputWhereDto, LeadFollowupViaRemoveOutputDto, LeadFollowupViaRemoveOutputAffectedRowsDto, LeadFollowupViaRestoreDto, LeadFollowupViaRestoreInputDto, LeadFollowupViaRestoreInputWhereDto, LeadFollowupViaRestoreOutputDto, LeadFollowupViaSoftDeleteDto, LeadFollowupViaSoftDeleteInputDto, LeadFollowupViaSoftDeleteInputWhereDto, LeadFollowupViaSoftDeleteOutputDto, LeadFollowupViaSoftRemoveDto, LeadFollowupViaSoftRemoveInputDto, LeadFollowupViaSoftRemoveInputWhereDto, LeadFollowupViaSoftRemoveOutputDto, LeadFollowupViaSoftRemoveOutputAffectedRowsDto, LeadFollowupViaUpdateDto, LeadFollowupViaUpdateInputDto, LeadFollowupViaUpdateInputSetsDto, LeadFollowupViaUpdateInputWhereDto, LeadFollowupViaUpdateOutputDto, LeadFollowupViaUpdateOutputAffectedRowsDto, LeadFollowupViaUploadDeleteDto, LeadFollowupViaUploadDeleteInputDto, LeadFollowupViaUploadDeleteOutputDto, LeadFollowupViaUploadDto, LeadFollowupViaUploadInputDto, LeadFollowupViaUploadOutputDto, LeadFollowupViaUpsertDto, LeadFollowupViaUpsertInputDto, LeadFollowupViaUpsertOutputDto } from "./dto/followup.via.dto";

@Injectable()
export class LeadFollowupViaFactory extends CrudFactory<LeadFollowupViaEntity> {

// ████████ FindCrudEngine ████████████████████████████████████████
public declare readonly findEngine: FindCrudEngine<
// entity (1)
LeadFollowupViaEntity,

// find (8)
LeadFollowupViaFindDto,
LeadFollowupViaFindInputWhereDto,
LeadFollowupViaFindInputSortOrderDto,
LeadFollowupViaFindInputGroupByDto,
LeadFollowupViaFindInputDto,
LeadFollowupViaFindOutputRowsDto,
FindOutputPaginationDto,
LeadFollowupViaFindOutputDto,

// find_one_by_id (2)
LeadFollowupViaFindOneByIdDto,
LeadFollowupViaFindOneByIdInputDto
>;

// ████████ CreateCrudEngine ████████████████████████████████████████
public declare readonly createEngine: CreateCrudEngine<
// entity (1)
LeadFollowupViaEntity,

// create (3)
LeadFollowupViaCreateDto,
LeadFollowupViaCreateInputDto,
LeadFollowupViaCreateOutputDto
>;

// ████████ UpdateCrudEngine ████████████████████████████████████████
public declare readonly updateEngine: UpdateCrudEngine<
// entity (1)
LeadFollowupViaEntity,

// update (6)
LeadFollowupViaUpdateDto,
LeadFollowupViaUpdateInputWhereDto,
LeadFollowupViaUpdateInputSetsDto,
LeadFollowupViaUpdateInputDto,
LeadFollowupViaUpdateOutputAffectedRowsDto,
LeadFollowupViaUpdateOutputDto
>;

// ████████ DeleteCrudEngine ████████████████████████████████████████
public declare readonly deleteEngine: DeleteCrudEngine<
// entity (1)
LeadFollowupViaEntity,

// soft_delete (4)
LeadFollowupViaSoftDeleteDto,
LeadFollowupViaSoftDeleteInputWhereDto,
LeadFollowupViaSoftDeleteInputDto,
LeadFollowupViaSoftDeleteOutputDto,

// delete (4)
LeadFollowupViaDeleteDto,
LeadFollowupViaDeleteInputWhereDto,
LeadFollowupViaDeleteInputDto,
LeadFollowupViaDeleteOutputDto,

// restore (4)
LeadFollowupViaRestoreDto,
LeadFollowupViaRestoreInputWhereDto,
LeadFollowupViaRestoreInputDto,
LeadFollowupViaRestoreOutputDto
>;

// ████████ UpsertCrudEngine ████████████████████████████████████████
public declare readonly upsertEngine: UpsertCrudEngine<
// entity (1)
LeadFollowupViaEntity,

// upsert (3)
LeadFollowupViaUpsertDto,
LeadFollowupViaUpsertInputDto,
LeadFollowupViaUpsertOutputDto
>;

// ████████ RemoveCrudEngine ████████████████████████████████████████
public declare readonly removeEngine: RemoveCrudEngine<
// entity (1)
LeadFollowupViaEntity,

// soft_remove (5)
LeadFollowupViaSoftRemoveDto,
LeadFollowupViaSoftRemoveInputWhereDto,
LeadFollowupViaSoftRemoveInputDto,
LeadFollowupViaSoftRemoveOutputAffectedRowsDto,
LeadFollowupViaSoftRemoveOutputDto,

// remove (4)
LeadFollowupViaRemoveDto,
LeadFollowupViaRemoveInputWhereDto,
LeadFollowupViaRemoveInputDto,
LeadFollowupViaRemoveOutputAffectedRowsDto,
LeadFollowupViaRemoveOutputDto,

// recover (5)
LeadFollowupViaRecoverDto,
LeadFollowupViaRecoverInputWhereDto,
LeadFollowupViaRecoverInputDto,
LeadFollowupViaRecoverOutputAffectedRowsDto,
LeadFollowupViaRecoverOutputDto
>;

// ████████ UploadCrudEngine ████████████████████████████████████████
public declare readonly uploadEngine: UploadCrudEngine<
// entity (1)
LeadFollowupViaEntity,

// upload (3)
LeadFollowupViaUploadDto,
LeadFollowupViaUploadInputDto,
LeadFollowupViaUploadOutputDto,

// upload_delete (3)
LeadFollowupViaUploadDeleteDto,
LeadFollowupViaUploadDeleteInputDto,
LeadFollowupViaUploadDeleteOutputDto
>;

constructor(
// data source
protected readonly dataSource: DataSource,

@InjectRepository(LeadFollowupViaEntity)
protected readonly repository: Repository<LeadFollowupViaEntity>,

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
    LeadFollowupViaEntity,
);

this.logService.setContext(LeadFollowupViaFactory.name);

// ████████ initialize FindCrudEngine ██████████████████████████████████████
this.initFindEngine
<
// find (8)
LeadFollowupViaFindDto,
LeadFollowupViaFindInputWhereDto,
LeadFollowupViaFindInputSortOrderDto,
LeadFollowupViaFindInputGroupByDto,
LeadFollowupViaFindInputDto,
LeadFollowupViaFindOutputRowsDto,
FindOutputPaginationDto,
LeadFollowupViaFindOutputDto,

// find_one_by_id (2)
LeadFollowupViaFindOneByIdDto,
LeadFollowupViaFindOneByIdInputDto
>
(
// find (8)
LeadFollowupViaFindDto,
LeadFollowupViaFindInputWhereDto,
LeadFollowupViaFindInputSortOrderDto,
LeadFollowupViaFindInputGroupByDto,
LeadFollowupViaFindInputDto,
LeadFollowupViaFindOutputRowsDto,
FindOutputPaginationDto,
LeadFollowupViaFindOutputDto,

// find_one_by_id (2)
LeadFollowupViaFindOneByIdDto,
LeadFollowupViaFindOneByIdInputDto
);


// ████████ initialize CreateCrudEngine ███████████████████████████████████████
this.initCreateEngine
<
// create (3)
LeadFollowupViaCreateDto,
LeadFollowupViaCreateInputDto,
LeadFollowupViaCreateOutputDto
>
(
// create (3)
LeadFollowupViaCreateDto,
LeadFollowupViaCreateInputDto,
LeadFollowupViaCreateOutputDto
);

// ████████ initialize UpdateCrudEngine ████████████████████████████████████████
this.initUpdateEngine
<
// update (6)
LeadFollowupViaUpdateDto,
LeadFollowupViaUpdateInputWhereDto,
LeadFollowupViaUpdateInputSetsDto,
LeadFollowupViaUpdateInputDto,
LeadFollowupViaUpdateOutputAffectedRowsDto,
LeadFollowupViaUpdateOutputDto
>
(
// update (6)
LeadFollowupViaUpdateDto,
LeadFollowupViaUpdateInputWhereDto,
LeadFollowupViaUpdateInputSetsDto,
LeadFollowupViaUpdateInputDto,
LeadFollowupViaUpdateOutputAffectedRowsDto,
LeadFollowupViaUpdateOutputDto
);


// ████████ initialize DeleteCrudEngine ███████████████████████████████████████████
this.initDeleteEngine
<
// soft_delete (4)
LeadFollowupViaSoftDeleteDto,
LeadFollowupViaSoftDeleteInputWhereDto,
LeadFollowupViaSoftDeleteInputDto,
LeadFollowupViaSoftDeleteOutputDto,

// delete (4)
LeadFollowupViaDeleteDto,
LeadFollowupViaDeleteInputWhereDto,
LeadFollowupViaDeleteInputDto,
LeadFollowupViaDeleteOutputDto,

// restore (4)
LeadFollowupViaRestoreDto,
LeadFollowupViaRestoreInputWhereDto,
LeadFollowupViaRestoreInputDto,
LeadFollowupViaRestoreOutputDto
>
(
// soft_delete (4)
LeadFollowupViaSoftDeleteDto,
LeadFollowupViaSoftDeleteInputWhereDto,
LeadFollowupViaSoftDeleteInputDto,
LeadFollowupViaSoftDeleteOutputDto,

// delete (4)
LeadFollowupViaDeleteDto,
LeadFollowupViaDeleteInputWhereDto,
LeadFollowupViaDeleteInputDto,
LeadFollowupViaDeleteOutputDto,

// restore (4)
LeadFollowupViaRestoreDto,
LeadFollowupViaRestoreInputWhereDto,
LeadFollowupViaRestoreInputDto,
LeadFollowupViaRestoreOutputDto
);



// ████████ initialize UpsertCrudEngine ███████████████████████████████████████████
this.initUpsertEngine
<
// upsert (3)
LeadFollowupViaUpsertDto,
LeadFollowupViaUpsertInputDto,
LeadFollowupViaUpsertOutputDto
>
(
// upsert (3)
LeadFollowupViaUpsertDto,
LeadFollowupViaUpsertInputDto,
LeadFollowupViaUpsertOutputDto
);




// ████████ initialize RemoveCrudEngine ███████████████████████████████████████████
this.initRemoveEngine
<
// soft_remove (5)
LeadFollowupViaSoftRemoveDto,
LeadFollowupViaSoftRemoveInputWhereDto,
LeadFollowupViaSoftRemoveInputDto,
LeadFollowupViaSoftRemoveOutputAffectedRowsDto,
LeadFollowupViaSoftRemoveOutputDto,

// remove (4)
LeadFollowupViaRemoveDto,
LeadFollowupViaRemoveInputWhereDto,
LeadFollowupViaRemoveInputDto,
LeadFollowupViaRemoveOutputAffectedRowsDto,
LeadFollowupViaRemoveOutputDto,

// recover (5)
LeadFollowupViaRecoverDto,
LeadFollowupViaRecoverInputWhereDto,
LeadFollowupViaRecoverInputDto,
LeadFollowupViaRecoverOutputAffectedRowsDto,
LeadFollowupViaRecoverOutputDto
>
(
// soft_remove (5)
LeadFollowupViaSoftRemoveDto,
LeadFollowupViaSoftRemoveInputWhereDto,
LeadFollowupViaSoftRemoveInputDto,
LeadFollowupViaSoftRemoveOutputAffectedRowsDto,
LeadFollowupViaSoftRemoveOutputDto,

// remove (4)
LeadFollowupViaRemoveDto,
LeadFollowupViaRemoveInputWhereDto,
LeadFollowupViaRemoveInputDto,
LeadFollowupViaRemoveOutputAffectedRowsDto,
LeadFollowupViaRemoveOutputDto,

// recover (5)
LeadFollowupViaRecoverDto,
LeadFollowupViaRecoverInputWhereDto,
LeadFollowupViaRecoverInputDto,
LeadFollowupViaRecoverOutputAffectedRowsDto,
LeadFollowupViaRecoverOutputDto
);



// ████████ initialize UploadCrudEngine ███████████████████████████████████████████
this.initUploadEngine
<
// upload (3)
LeadFollowupViaUploadDto,
LeadFollowupViaUploadInputDto,
LeadFollowupViaUploadOutputDto,

// upload_delete (3)
LeadFollowupViaUploadDeleteDto,
LeadFollowupViaUploadDeleteInputDto,
LeadFollowupViaUploadDeleteOutputDto
>
(
// upload (3)
LeadFollowupViaUploadDto,
LeadFollowupViaUploadInputDto,
LeadFollowupViaUploadOutputDto,

// upload_delete (3)
LeadFollowupViaUploadDeleteDto,
LeadFollowupViaUploadDeleteInputDto,
LeadFollowupViaUploadDeleteOutputDto
);


// ████████ initialize ImportExportCrudEngine █████████████████████████████████████

}

}