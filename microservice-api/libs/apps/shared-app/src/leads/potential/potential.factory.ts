import { LeadPotentialEntity } from "./entities/potential.entity";
import { Injectable } from "@nestjs/common";
import { DataSource, Repository } from "typeorm";
import { InjectRepository } from "@nestjs/typeorm";
import { ConfService, CreateCrudEngine, CrudFactory, DataValidationPipe, DeleteCrudEngine, FindCrudEngine, FindOutputPaginationDto, LibraryAppService, LogService, RemoveCrudEngine, UpdateCrudEngine, UploadCrudEngine, UpsertCrudEngine } from "@libs/library-app";
import { SelfGraphqlMicroserviceService } from '@libs/dynamic-app';
import { LeadPotentialCreateDto, LeadPotentialCreateInputDto, LeadPotentialCreateOutputDto, LeadPotentialDeleteDto, LeadPotentialDeleteInputDto, LeadPotentialDeleteInputWhereDto, LeadPotentialDeleteOutputDto, LeadPotentialFindDto, LeadPotentialFindInputDto, LeadPotentialFindInputGroupByDto, LeadPotentialFindInputSortOrderDto, LeadPotentialFindInputWhereDto, LeadPotentialFindOneByIdDto, LeadPotentialFindOneByIdInputDto, LeadPotentialFindOutputDto, LeadPotentialFindOutputRowsDto, LeadPotentialRecoverDto, LeadPotentialRecoverInputDto, LeadPotentialRecoverInputWhereDto, LeadPotentialRecoverOutputDto, LeadPotentialRecoverOutputAffectedRowsDto, LeadPotentialRemoveDto, LeadPotentialRemoveInputDto, LeadPotentialRemoveInputWhereDto, LeadPotentialRemoveOutputDto, LeadPotentialRemoveOutputAffectedRowsDto, LeadPotentialRestoreDto, LeadPotentialRestoreInputDto, LeadPotentialRestoreInputWhereDto, LeadPotentialRestoreOutputDto, LeadPotentialSoftDeleteDto, LeadPotentialSoftDeleteInputDto, LeadPotentialSoftDeleteInputWhereDto, LeadPotentialSoftDeleteOutputDto, LeadPotentialSoftRemoveDto, LeadPotentialSoftRemoveInputDto, LeadPotentialSoftRemoveInputWhereDto, LeadPotentialSoftRemoveOutputDto, LeadPotentialSoftRemoveOutputAffectedRowsDto, LeadPotentialUpdateDto, LeadPotentialUpdateInputDto, LeadPotentialUpdateInputSetsDto, LeadPotentialUpdateInputWhereDto, LeadPotentialUpdateOutputDto, LeadPotentialUpdateOutputAffectedRowsDto, LeadPotentialUploadDeleteDto, LeadPotentialUploadDeleteInputDto, LeadPotentialUploadDeleteOutputDto, LeadPotentialUploadDto, LeadPotentialUploadInputDto, LeadPotentialUploadOutputDto, LeadPotentialUpsertDto, LeadPotentialUpsertInputDto, LeadPotentialUpsertOutputDto } from "./dto/potential.dto";

@Injectable()
export class LeadPotentialFactory extends CrudFactory<LeadPotentialEntity> {

// ████████ FindCrudEngine ████████████████████████████████████████
public declare readonly findEngine: FindCrudEngine<
// entity (1)
LeadPotentialEntity,

// find (8)
LeadPotentialFindDto,
LeadPotentialFindInputWhereDto,
LeadPotentialFindInputSortOrderDto,
LeadPotentialFindInputGroupByDto,
LeadPotentialFindInputDto,
LeadPotentialFindOutputRowsDto,
FindOutputPaginationDto,
LeadPotentialFindOutputDto,

// find_one_by_id (2)
LeadPotentialFindOneByIdDto,
LeadPotentialFindOneByIdInputDto
>;

// ████████ CreateCrudEngine ████████████████████████████████████████
public declare readonly createEngine: CreateCrudEngine<
// entity (1)
LeadPotentialEntity,

// create (3)
LeadPotentialCreateDto,
LeadPotentialCreateInputDto,
LeadPotentialCreateOutputDto
>;

// ████████ UpdateCrudEngine ████████████████████████████████████████
public declare readonly updateEngine: UpdateCrudEngine<
// entity (1)
LeadPotentialEntity,

// update (6)
LeadPotentialUpdateDto,
LeadPotentialUpdateInputWhereDto,
LeadPotentialUpdateInputSetsDto,
LeadPotentialUpdateInputDto,
LeadPotentialUpdateOutputAffectedRowsDto,
LeadPotentialUpdateOutputDto
>;

// ████████ DeleteCrudEngine ████████████████████████████████████████
public declare readonly deleteEngine: DeleteCrudEngine<
// entity (1)
LeadPotentialEntity,

// soft_delete (4)
LeadPotentialSoftDeleteDto,
LeadPotentialSoftDeleteInputWhereDto,
LeadPotentialSoftDeleteInputDto,
LeadPotentialSoftDeleteOutputDto,

// delete (4)
LeadPotentialDeleteDto,
LeadPotentialDeleteInputWhereDto,
LeadPotentialDeleteInputDto,
LeadPotentialDeleteOutputDto,

// restore (4)
LeadPotentialRestoreDto,
LeadPotentialRestoreInputWhereDto,
LeadPotentialRestoreInputDto,
LeadPotentialRestoreOutputDto
>;

// ████████ UpsertCrudEngine ████████████████████████████████████████
public declare readonly upsertEngine: UpsertCrudEngine<
// entity (1)
LeadPotentialEntity,

// upsert (3)
LeadPotentialUpsertDto,
LeadPotentialUpsertInputDto,
LeadPotentialUpsertOutputDto
>;

// ████████ RemoveCrudEngine ████████████████████████████████████████
public declare readonly removeEngine: RemoveCrudEngine<
// entity (1)
LeadPotentialEntity,

// soft_remove (5)
LeadPotentialSoftRemoveDto,
LeadPotentialSoftRemoveInputWhereDto,
LeadPotentialSoftRemoveInputDto,
LeadPotentialSoftRemoveOutputAffectedRowsDto,
LeadPotentialSoftRemoveOutputDto,

// remove (4)
LeadPotentialRemoveDto,
LeadPotentialRemoveInputWhereDto,
LeadPotentialRemoveInputDto,
LeadPotentialRemoveOutputAffectedRowsDto,
LeadPotentialRemoveOutputDto,

// recover (5)
LeadPotentialRecoverDto,
LeadPotentialRecoverInputWhereDto,
LeadPotentialRecoverInputDto,
LeadPotentialRecoverOutputAffectedRowsDto,
LeadPotentialRecoverOutputDto
>;

// ████████ UploadCrudEngine ████████████████████████████████████████
public declare readonly uploadEngine: UploadCrudEngine<
// entity (1)
LeadPotentialEntity,

// upload (3)
LeadPotentialUploadDto,
LeadPotentialUploadInputDto,
LeadPotentialUploadOutputDto,

// upload_delete (3)
LeadPotentialUploadDeleteDto,
LeadPotentialUploadDeleteInputDto,
LeadPotentialUploadDeleteOutputDto
>;

constructor(
// data source
protected readonly dataSource: DataSource,

@InjectRepository(LeadPotentialEntity)
protected readonly repository: Repository<LeadPotentialEntity>,

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
    LeadPotentialEntity,
);

this.logService.setContext(LeadPotentialFactory.name);

// ████████ initialize FindCrudEngine ██████████████████████████████████████
this.initFindEngine
<
// find (8)
LeadPotentialFindDto,
LeadPotentialFindInputWhereDto,
LeadPotentialFindInputSortOrderDto,
LeadPotentialFindInputGroupByDto,
LeadPotentialFindInputDto,
LeadPotentialFindOutputRowsDto,
FindOutputPaginationDto,
LeadPotentialFindOutputDto,

// find_one_by_id (2)
LeadPotentialFindOneByIdDto,
LeadPotentialFindOneByIdInputDto
>
(
// find (8)
LeadPotentialFindDto,
LeadPotentialFindInputWhereDto,
LeadPotentialFindInputSortOrderDto,
LeadPotentialFindInputGroupByDto,
LeadPotentialFindInputDto,
LeadPotentialFindOutputRowsDto,
FindOutputPaginationDto,
LeadPotentialFindOutputDto,

// find_one_by_id (2)
LeadPotentialFindOneByIdDto,
LeadPotentialFindOneByIdInputDto
);


// ████████ initialize CreateCrudEngine ███████████████████████████████████████
this.initCreateEngine
<
// create (3)
LeadPotentialCreateDto,
LeadPotentialCreateInputDto,
LeadPotentialCreateOutputDto
>
(
// create (3)
LeadPotentialCreateDto,
LeadPotentialCreateInputDto,
LeadPotentialCreateOutputDto
);

// ████████ initialize UpdateCrudEngine ████████████████████████████████████████
this.initUpdateEngine
<
// update (6)
LeadPotentialUpdateDto,
LeadPotentialUpdateInputWhereDto,
LeadPotentialUpdateInputSetsDto,
LeadPotentialUpdateInputDto,
LeadPotentialUpdateOutputAffectedRowsDto,
LeadPotentialUpdateOutputDto
>
(
// update (6)
LeadPotentialUpdateDto,
LeadPotentialUpdateInputWhereDto,
LeadPotentialUpdateInputSetsDto,
LeadPotentialUpdateInputDto,
LeadPotentialUpdateOutputAffectedRowsDto,
LeadPotentialUpdateOutputDto
);


// ████████ initialize DeleteCrudEngine ███████████████████████████████████████████
this.initDeleteEngine
<
// soft_delete (4)
LeadPotentialSoftDeleteDto,
LeadPotentialSoftDeleteInputWhereDto,
LeadPotentialSoftDeleteInputDto,
LeadPotentialSoftDeleteOutputDto,

// delete (4)
LeadPotentialDeleteDto,
LeadPotentialDeleteInputWhereDto,
LeadPotentialDeleteInputDto,
LeadPotentialDeleteOutputDto,

// restore (4)
LeadPotentialRestoreDto,
LeadPotentialRestoreInputWhereDto,
LeadPotentialRestoreInputDto,
LeadPotentialRestoreOutputDto
>
(
// soft_delete (4)
LeadPotentialSoftDeleteDto,
LeadPotentialSoftDeleteInputWhereDto,
LeadPotentialSoftDeleteInputDto,
LeadPotentialSoftDeleteOutputDto,

// delete (4)
LeadPotentialDeleteDto,
LeadPotentialDeleteInputWhereDto,
LeadPotentialDeleteInputDto,
LeadPotentialDeleteOutputDto,

// restore (4)
LeadPotentialRestoreDto,
LeadPotentialRestoreInputWhereDto,
LeadPotentialRestoreInputDto,
LeadPotentialRestoreOutputDto
);



// ████████ initialize UpsertCrudEngine ███████████████████████████████████████████
this.initUpsertEngine
<
// upsert (3)
LeadPotentialUpsertDto,
LeadPotentialUpsertInputDto,
LeadPotentialUpsertOutputDto
>
(
// upsert (3)
LeadPotentialUpsertDto,
LeadPotentialUpsertInputDto,
LeadPotentialUpsertOutputDto
);




// ████████ initialize RemoveCrudEngine ███████████████████████████████████████████
this.initRemoveEngine
<
// soft_remove (5)
LeadPotentialSoftRemoveDto,
LeadPotentialSoftRemoveInputWhereDto,
LeadPotentialSoftRemoveInputDto,
LeadPotentialSoftRemoveOutputAffectedRowsDto,
LeadPotentialSoftRemoveOutputDto,

// remove (4)
LeadPotentialRemoveDto,
LeadPotentialRemoveInputWhereDto,
LeadPotentialRemoveInputDto,
LeadPotentialRemoveOutputAffectedRowsDto,
LeadPotentialRemoveOutputDto,

// recover (5)
LeadPotentialRecoverDto,
LeadPotentialRecoverInputWhereDto,
LeadPotentialRecoverInputDto,
LeadPotentialRecoverOutputAffectedRowsDto,
LeadPotentialRecoverOutputDto
>
(
// soft_remove (5)
LeadPotentialSoftRemoveDto,
LeadPotentialSoftRemoveInputWhereDto,
LeadPotentialSoftRemoveInputDto,
LeadPotentialSoftRemoveOutputAffectedRowsDto,
LeadPotentialSoftRemoveOutputDto,

// remove (4)
LeadPotentialRemoveDto,
LeadPotentialRemoveInputWhereDto,
LeadPotentialRemoveInputDto,
LeadPotentialRemoveOutputAffectedRowsDto,
LeadPotentialRemoveOutputDto,

// recover (5)
LeadPotentialRecoverDto,
LeadPotentialRecoverInputWhereDto,
LeadPotentialRecoverInputDto,
LeadPotentialRecoverOutputAffectedRowsDto,
LeadPotentialRecoverOutputDto
);



// ████████ initialize UploadCrudEngine ███████████████████████████████████████████
this.initUploadEngine
<
// upload (3)
LeadPotentialUploadDto,
LeadPotentialUploadInputDto,
LeadPotentialUploadOutputDto,

// upload_delete (3)
LeadPotentialUploadDeleteDto,
LeadPotentialUploadDeleteInputDto,
LeadPotentialUploadDeleteOutputDto
>
(
// upload (3)
LeadPotentialUploadDto,
LeadPotentialUploadInputDto,
LeadPotentialUploadOutputDto,

// upload_delete (3)
LeadPotentialUploadDeleteDto,
LeadPotentialUploadDeleteInputDto,
LeadPotentialUploadDeleteOutputDto
);


// ████████ initialize ImportExportCrudEngine █████████████████████████████████████

}

}