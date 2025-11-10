import { Injectable } from "@nestjs/common";
import { DataSource, Repository } from "typeorm";
import { InjectRepository } from "@nestjs/typeorm";
import { ConfService, CreateCrudEngine, CrudFactory, DataValidationPipe, DeleteCrudEngine, FindCrudEngine, FindOutputPaginationDto, LibraryAppService, LogService, RemoveCrudEngine, UpdateCrudEngine, UploadCrudEngine, UpsertCrudEngine } from "@libs/library-app";
import { SelfGraphqlMicroserviceService } from '@libs/dynamic-app';
import { BusinessCreateDto, BusinessCreateInputDto, BusinessCreateOutputDto, BusinessDeleteDto, BusinessDeleteInputDto, BusinessDeleteInputWhereDto, BusinessDeleteOutputDto, BusinessFindDto, BusinessFindInputDto, BusinessFindInputGroupByDto, BusinessFindInputSortOrderDto, BusinessFindInputWhereDto, BusinessFindOneByIdDto, BusinessFindOneByIdInputDto, BusinessFindOutputDto, BusinessFindOutputRowsDto, BusinessRecoverDto, BusinessRecoverInputDto, BusinessRecoverInputWhereDto, BusinessRecoverOutputDto, BusinessRecoverOutputAffectedRowsDto, BusinessRemoveDto, BusinessRemoveInputDto, BusinessRemoveInputWhereDto, BusinessRemoveOutputDto, BusinessRemoveOutputAffectedRowsDto, BusinessRestoreDto, BusinessRestoreInputDto, BusinessRestoreInputWhereDto, BusinessRestoreOutputDto, BusinessSoftDeleteDto, BusinessSoftDeleteInputDto, BusinessSoftDeleteInputWhereDto, BusinessSoftDeleteOutputDto, BusinessSoftRemoveDto, BusinessSoftRemoveInputDto, BusinessSoftRemoveInputWhereDto, BusinessSoftRemoveOutputDto, BusinessSoftRemoveOutputAffectedRowsDto, BusinessUpdateDto, BusinessUpdateInputDto, BusinessUpdateInputSetsDto, BusinessUpdateInputWhereDto, BusinessUpdateOutputDto, BusinessUpdateOutputAffectedRowsDto, BusinessUploadDeleteDto, BusinessUploadDeleteInputDto, BusinessUploadDeleteOutputDto, BusinessUploadDto, BusinessUploadInputDto, BusinessUploadOutputDto, BusinessUpsertDto, BusinessUpsertInputDto, BusinessUpsertOutputDto } from "./dto/business.dto";
import { BusinessEntity } from "./entities/business.entity";

@Injectable()
export class BusinessFactory extends CrudFactory<BusinessEntity> {

// ████████ FindCrudEngine ████████████████████████████████████████
public declare readonly findEngine: FindCrudEngine<
// entity (1)
BusinessEntity,

// find (8)
BusinessFindDto,
BusinessFindInputWhereDto,
BusinessFindInputSortOrderDto,
BusinessFindInputGroupByDto,
BusinessFindInputDto,
BusinessFindOutputRowsDto,
FindOutputPaginationDto,
BusinessFindOutputDto,

// find_one_by_id (2)
BusinessFindOneByIdDto,
BusinessFindOneByIdInputDto
>;

// ████████ CreateCrudEngine ████████████████████████████████████████
public declare readonly createEngine: CreateCrudEngine<
// entity (1)
BusinessEntity,

// create (3)
BusinessCreateDto,
BusinessCreateInputDto,
BusinessCreateOutputDto
>;

// ████████ UpdateCrudEngine ████████████████████████████████████████
public declare readonly updateEngine: UpdateCrudEngine<
// entity (1)
BusinessEntity,

// update (6)
BusinessUpdateDto,
BusinessUpdateInputWhereDto,
BusinessUpdateInputSetsDto,
BusinessUpdateInputDto,
BusinessUpdateOutputAffectedRowsDto,
BusinessUpdateOutputDto
>;

// ████████ DeleteCrudEngine ████████████████████████████████████████
public declare readonly deleteEngine: DeleteCrudEngine<
// entity (1)
BusinessEntity,

// soft_delete (4)
BusinessSoftDeleteDto,
BusinessSoftDeleteInputWhereDto,
BusinessSoftDeleteInputDto,
BusinessSoftDeleteOutputDto,

// delete (4)
BusinessDeleteDto,
BusinessDeleteInputWhereDto,
BusinessDeleteInputDto,
BusinessDeleteOutputDto,

// restore (4)
BusinessRestoreDto,
BusinessRestoreInputWhereDto,
BusinessRestoreInputDto,
BusinessRestoreOutputDto
>;

// ████████ UpsertCrudEngine ████████████████████████████████████████
public declare readonly upsertEngine: UpsertCrudEngine<
// entity (1)
BusinessEntity,

// upsert (3)
BusinessUpsertDto,
BusinessUpsertInputDto,
BusinessUpsertOutputDto
>;

// ████████ RemoveCrudEngine ████████████████████████████████████████
public declare readonly removeEngine: RemoveCrudEngine<
// entity (1)
BusinessEntity,

// soft_remove (5)
BusinessSoftRemoveDto,
BusinessSoftRemoveInputWhereDto,
BusinessSoftRemoveInputDto,
BusinessSoftRemoveOutputAffectedRowsDto,
BusinessSoftRemoveOutputDto,

// remove (4)
BusinessRemoveDto,
BusinessRemoveInputWhereDto,
BusinessRemoveInputDto,
BusinessRemoveOutputAffectedRowsDto,
BusinessRemoveOutputDto,

// recover (5)
BusinessRecoverDto,
BusinessRecoverInputWhereDto,
BusinessRecoverInputDto,
BusinessRecoverOutputAffectedRowsDto,
BusinessRecoverOutputDto
>;

// ████████ UploadCrudEngine ████████████████████████████████████████
public declare readonly uploadEngine: UploadCrudEngine<
// entity (1)
BusinessEntity,

// upload (3)
BusinessUploadDto,
BusinessUploadInputDto,
BusinessUploadOutputDto,

// upload_delete (3)
BusinessUploadDeleteDto,
BusinessUploadDeleteInputDto,
BusinessUploadDeleteOutputDto
>;

constructor(
// data source
protected readonly dataSource: DataSource,

@InjectRepository(BusinessEntity)
protected readonly repository: Repository<BusinessEntity>,

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
    BusinessEntity,
);

this.logService.setContext(BusinessFactory.name);

// ████████ initialize FindCrudEngine ██████████████████████████████████████
this.initFindEngine
<
// find (8)
BusinessFindDto,
BusinessFindInputWhereDto,
BusinessFindInputSortOrderDto,
BusinessFindInputGroupByDto,
BusinessFindInputDto,
BusinessFindOutputRowsDto,
FindOutputPaginationDto,
BusinessFindOutputDto,

// find_one_by_id (2)
BusinessFindOneByIdDto,
BusinessFindOneByIdInputDto
>
(
// find (8)
BusinessFindDto,
BusinessFindInputWhereDto,
BusinessFindInputSortOrderDto,
BusinessFindInputGroupByDto,
BusinessFindInputDto,
BusinessFindOutputRowsDto,
FindOutputPaginationDto,
BusinessFindOutputDto,

// find_one_by_id (2)
BusinessFindOneByIdDto,
BusinessFindOneByIdInputDto
);


// ████████ initialize CreateCrudEngine ███████████████████████████████████████
this.initCreateEngine
<
// create (3)
BusinessCreateDto,
BusinessCreateInputDto,
BusinessCreateOutputDto
>
(
// create (3)
BusinessCreateDto,
BusinessCreateInputDto,
BusinessCreateOutputDto
);

// ████████ initialize UpdateCrudEngine ████████████████████████████████████████
this.initUpdateEngine
<
// update (6)
BusinessUpdateDto,
BusinessUpdateInputWhereDto,
BusinessUpdateInputSetsDto,
BusinessUpdateInputDto,
BusinessUpdateOutputAffectedRowsDto,
BusinessUpdateOutputDto
>
(
// update (6)
BusinessUpdateDto,
BusinessUpdateInputWhereDto,
BusinessUpdateInputSetsDto,
BusinessUpdateInputDto,
BusinessUpdateOutputAffectedRowsDto,
BusinessUpdateOutputDto
);


// ████████ initialize DeleteCrudEngine ███████████████████████████████████████████
this.initDeleteEngine
<
// soft_delete (4)
BusinessSoftDeleteDto,
BusinessSoftDeleteInputWhereDto,
BusinessSoftDeleteInputDto,
BusinessSoftDeleteOutputDto,

// delete (4)
BusinessDeleteDto,
BusinessDeleteInputWhereDto,
BusinessDeleteInputDto,
BusinessDeleteOutputDto,

// restore (4)
BusinessRestoreDto,
BusinessRestoreInputWhereDto,
BusinessRestoreInputDto,
BusinessRestoreOutputDto
>
(
// soft_delete (4)
BusinessSoftDeleteDto,
BusinessSoftDeleteInputWhereDto,
BusinessSoftDeleteInputDto,
BusinessSoftDeleteOutputDto,

// delete (4)
BusinessDeleteDto,
BusinessDeleteInputWhereDto,
BusinessDeleteInputDto,
BusinessDeleteOutputDto,

// restore (4)
BusinessRestoreDto,
BusinessRestoreInputWhereDto,
BusinessRestoreInputDto,
BusinessRestoreOutputDto
);



// ████████ initialize UpsertCrudEngine ███████████████████████████████████████████
this.initUpsertEngine
<
// upsert (3)
BusinessUpsertDto,
BusinessUpsertInputDto,
BusinessUpsertOutputDto
>
(
// upsert (3)
BusinessUpsertDto,
BusinessUpsertInputDto,
BusinessUpsertOutputDto
);




// ████████ initialize RemoveCrudEngine ███████████████████████████████████████████
this.initRemoveEngine
<
// soft_remove (5)
BusinessSoftRemoveDto,
BusinessSoftRemoveInputWhereDto,
BusinessSoftRemoveInputDto,
BusinessSoftRemoveOutputAffectedRowsDto,
BusinessSoftRemoveOutputDto,

// remove (4)
BusinessRemoveDto,
BusinessRemoveInputWhereDto,
BusinessRemoveInputDto,
BusinessRemoveOutputAffectedRowsDto,
BusinessRemoveOutputDto,

// recover (5)
BusinessRecoverDto,
BusinessRecoverInputWhereDto,
BusinessRecoverInputDto,
BusinessRecoverOutputAffectedRowsDto,
BusinessRecoverOutputDto
>
(
// soft_remove (5)
BusinessSoftRemoveDto,
BusinessSoftRemoveInputWhereDto,
BusinessSoftRemoveInputDto,
BusinessSoftRemoveOutputAffectedRowsDto,
BusinessSoftRemoveOutputDto,

// remove (4)
BusinessRemoveDto,
BusinessRemoveInputWhereDto,
BusinessRemoveInputDto,
BusinessRemoveOutputAffectedRowsDto,
BusinessRemoveOutputDto,

// recover (5)
BusinessRecoverDto,
BusinessRecoverInputWhereDto,
BusinessRecoverInputDto,
BusinessRecoverOutputAffectedRowsDto,
BusinessRecoverOutputDto
);



// ████████ initialize UploadCrudEngine ███████████████████████████████████████████
this.initUploadEngine
<
// upload (3)
BusinessUploadDto,
BusinessUploadInputDto,
BusinessUploadOutputDto,

// upload_delete (3)
BusinessUploadDeleteDto,
BusinessUploadDeleteInputDto,
BusinessUploadDeleteOutputDto
>
(
// upload (3)
BusinessUploadDto,
BusinessUploadInputDto,
BusinessUploadOutputDto,

// upload_delete (3)
BusinessUploadDeleteDto,
BusinessUploadDeleteInputDto,
BusinessUploadDeleteOutputDto
);


// ████████ initialize ImportExportCrudEngine █████████████████████████████████████

}

}