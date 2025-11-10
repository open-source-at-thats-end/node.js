import { IdentityCardTypeEntity } from "./entities/identity.card.type.entity";
import { Injectable } from "@nestjs/common";
import { DataSource, Repository } from "typeorm";
import { InjectRepository } from "@nestjs/typeorm";
import { ConfService, CreateCrudEngine, CrudFactory, DataValidationPipe, DeleteCrudEngine, FindCrudEngine, FindOutputPaginationDto, LibraryAppService, LogService, RemoveCrudEngine, UpdateCrudEngine, UploadCrudEngine, UpsertCrudEngine } from "@libs/library-app";
import { SelfGraphqlMicroserviceService } from "@libs/dynamic-app";
import { IdentityCardTypeCreateDto, IdentityCardTypeCreateInputDto, IdentityCardTypeCreateOutputDto, IdentityCardTypeDeleteDto, IdentityCardTypeDeleteInputDto, IdentityCardTypeDeleteInputWhereDto, IdentityCardTypeDeleteOutputDto, IdentityCardTypeFindDto, IdentityCardTypeFindInputDto, IdentityCardTypeFindInputGroupByDto, IdentityCardTypeFindInputSortOrderDto, IdentityCardTypeFindInputWhereDto, IdentityCardTypeFindOneByIdDto, IdentityCardTypeFindOneByIdInputDto, IdentityCardTypeFindOutputDto, IdentityCardTypeFindOutputRowsDto, IdentityCardTypeRecoverDto, IdentityCardTypeRecoverInputDto, IdentityCardTypeRecoverInputWhereDto, IdentityCardTypeRecoverOutputDto, IdentityCardTypeRecoverOutputAffectedRowsDto, IdentityCardTypeRemoveDto, IdentityCardTypeRemoveInputDto, IdentityCardTypeRemoveInputWhereDto, IdentityCardTypeRemoveOutputDto, IdentityCardTypeRemoveOutputAffectedRowsDto, IdentityCardTypeRestoreDto, IdentityCardTypeRestoreInputDto, IdentityCardTypeRestoreInputWhereDto, IdentityCardTypeRestoreOutputDto, IdentityCardTypeSoftDeleteDto, IdentityCardTypeSoftDeleteInputDto, IdentityCardTypeSoftDeleteInputWhereDto, IdentityCardTypeSoftDeleteOutputDto, IdentityCardTypeSoftRemoveDto, IdentityCardTypeSoftRemoveInputDto, IdentityCardTypeSoftRemoveInputWhereDto, IdentityCardTypeSoftRemoveOutputDto, IdentityCardTypeSoftRemoveOutputAffectedRowsDto, IdentityCardTypeUpdateDto, IdentityCardTypeUpdateInputDto, IdentityCardTypeUpdateInputSetsDto, IdentityCardTypeUpdateInputWhereDto, IdentityCardTypeUpdateOutputDto, IdentityCardTypeUpdateOutputAffectedRowsDto, IdentityCardTypeUploadDeleteDto, IdentityCardTypeUploadDeleteInputDto, IdentityCardTypeUploadDeleteOutputDto, IdentityCardTypeUploadDto, IdentityCardTypeUploadInputDto, IdentityCardTypeUploadOutputDto, IdentityCardTypeUpsertDto, IdentityCardTypeUpsertInputDto, IdentityCardTypeUpsertOutputDto } from "./dto/identity.card.type.dto";

@Injectable()
export class IdentityCardTypeFactory extends CrudFactory<IdentityCardTypeEntity> {

// ████████ FindCrudEngine ████████████████████████████████████████
public declare readonly findEngine: FindCrudEngine<
// entity (1)
IdentityCardTypeEntity,

// find (8)
IdentityCardTypeFindDto,
IdentityCardTypeFindInputWhereDto,
IdentityCardTypeFindInputSortOrderDto,
IdentityCardTypeFindInputGroupByDto,
IdentityCardTypeFindInputDto,
IdentityCardTypeFindOutputRowsDto,
FindOutputPaginationDto,
IdentityCardTypeFindOutputDto,

// find_one_by_id (2)
IdentityCardTypeFindOneByIdDto,
IdentityCardTypeFindOneByIdInputDto
>;

// ████████ CreateCrudEngine ████████████████████████████████████████
public declare readonly createEngine: CreateCrudEngine<
// entity (1)
IdentityCardTypeEntity,

// create (3)
IdentityCardTypeCreateDto,
IdentityCardTypeCreateInputDto,
IdentityCardTypeCreateOutputDto
>;

// ████████ UpdateCrudEngine ████████████████████████████████████████
public declare readonly updateEngine: UpdateCrudEngine<
// entity (1)
IdentityCardTypeEntity,

// update (6)
IdentityCardTypeUpdateDto,
IdentityCardTypeUpdateInputWhereDto,
IdentityCardTypeUpdateInputSetsDto,
IdentityCardTypeUpdateInputDto,
IdentityCardTypeUpdateOutputAffectedRowsDto,
IdentityCardTypeUpdateOutputDto
>;

// ████████ DeleteCrudEngine ████████████████████████████████████████
public declare readonly deleteEngine: DeleteCrudEngine<
// entity (1)
IdentityCardTypeEntity,

// soft_delete (4)
IdentityCardTypeSoftDeleteDto,
IdentityCardTypeSoftDeleteInputWhereDto,
IdentityCardTypeSoftDeleteInputDto,
IdentityCardTypeSoftDeleteOutputDto,

// delete (4)
IdentityCardTypeDeleteDto,
IdentityCardTypeDeleteInputWhereDto,
IdentityCardTypeDeleteInputDto,
IdentityCardTypeDeleteOutputDto,

// restore (4)
IdentityCardTypeRestoreDto,
IdentityCardTypeRestoreInputWhereDto,
IdentityCardTypeRestoreInputDto,
IdentityCardTypeRestoreOutputDto
>;

// ████████ UpsertCrudEngine ████████████████████████████████████████
public declare readonly upsertEngine: UpsertCrudEngine<
// entity (1)
IdentityCardTypeEntity,

// upsert (3)
IdentityCardTypeUpsertDto,
IdentityCardTypeUpsertInputDto,
IdentityCardTypeUpsertOutputDto
>;

// ████████ RemoveCrudEngine ████████████████████████████████████████
public declare readonly removeEngine: RemoveCrudEngine<
// entity (1)
IdentityCardTypeEntity,

// soft_remove (5)
IdentityCardTypeSoftRemoveDto,
IdentityCardTypeSoftRemoveInputWhereDto,
IdentityCardTypeSoftRemoveInputDto,
IdentityCardTypeSoftRemoveOutputAffectedRowsDto,
IdentityCardTypeSoftRemoveOutputDto,

// remove (4)
IdentityCardTypeRemoveDto,
IdentityCardTypeRemoveInputWhereDto,
IdentityCardTypeRemoveInputDto,
IdentityCardTypeRemoveOutputAffectedRowsDto,
IdentityCardTypeRemoveOutputDto,

// recover (5)
IdentityCardTypeRecoverDto,
IdentityCardTypeRecoverInputWhereDto,
IdentityCardTypeRecoverInputDto,
IdentityCardTypeRecoverOutputAffectedRowsDto,
IdentityCardTypeRecoverOutputDto
>;

// ████████ UploadCrudEngine ████████████████████████████████████████
public declare readonly uploadEngine: UploadCrudEngine<
// entity (1)
IdentityCardTypeEntity,

// upload (3)
IdentityCardTypeUploadDto,
IdentityCardTypeUploadInputDto,
IdentityCardTypeUploadOutputDto,

// upload_delete (3)
IdentityCardTypeUploadDeleteDto,
IdentityCardTypeUploadDeleteInputDto,
IdentityCardTypeUploadDeleteOutputDto
>;

constructor(
// data source
protected readonly dataSource: DataSource,

@InjectRepository(IdentityCardTypeEntity)
protected readonly repository: Repository<IdentityCardTypeEntity>,

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
    IdentityCardTypeEntity,
);

this.logService.setContext(IdentityCardTypeFactory.name);

// ████████ initialize FindCrudEngine ██████████████████████████████████████
this.initFindEngine
<
// find (8)
IdentityCardTypeFindDto,
IdentityCardTypeFindInputWhereDto,
IdentityCardTypeFindInputSortOrderDto,
IdentityCardTypeFindInputGroupByDto,
IdentityCardTypeFindInputDto,
IdentityCardTypeFindOutputRowsDto,
FindOutputPaginationDto,
IdentityCardTypeFindOutputDto,

// find_one_by_id (2)
IdentityCardTypeFindOneByIdDto,
IdentityCardTypeFindOneByIdInputDto
>
(
// find (8)
IdentityCardTypeFindDto,
IdentityCardTypeFindInputWhereDto,
IdentityCardTypeFindInputSortOrderDto,
IdentityCardTypeFindInputGroupByDto,
IdentityCardTypeFindInputDto,
IdentityCardTypeFindOutputRowsDto,
FindOutputPaginationDto,
IdentityCardTypeFindOutputDto,

// find_one_by_id (2)
IdentityCardTypeFindOneByIdDto,
IdentityCardTypeFindOneByIdInputDto
);


// ████████ initialize CreateCrudEngine ███████████████████████████████████████
this.initCreateEngine
<
// create (3)
IdentityCardTypeCreateDto,
IdentityCardTypeCreateInputDto,
IdentityCardTypeCreateOutputDto
>
(
// create (3)
IdentityCardTypeCreateDto,
IdentityCardTypeCreateInputDto,
IdentityCardTypeCreateOutputDto
);

// ████████ initialize UpdateCrudEngine ████████████████████████████████████████
this.initUpdateEngine
<
// update (6)
IdentityCardTypeUpdateDto,
IdentityCardTypeUpdateInputWhereDto,
IdentityCardTypeUpdateInputSetsDto,
IdentityCardTypeUpdateInputDto,
IdentityCardTypeUpdateOutputAffectedRowsDto,
IdentityCardTypeUpdateOutputDto
>
(
// update (6)
IdentityCardTypeUpdateDto,
IdentityCardTypeUpdateInputWhereDto,
IdentityCardTypeUpdateInputSetsDto,
IdentityCardTypeUpdateInputDto,
IdentityCardTypeUpdateOutputAffectedRowsDto,
IdentityCardTypeUpdateOutputDto
);


// ████████ initialize DeleteCrudEngine ███████████████████████████████████████████
this.initDeleteEngine
<
// soft_delete (4)
IdentityCardTypeSoftDeleteDto,
IdentityCardTypeSoftDeleteInputWhereDto,
IdentityCardTypeSoftDeleteInputDto,
IdentityCardTypeSoftDeleteOutputDto,

// delete (4)
IdentityCardTypeDeleteDto,
IdentityCardTypeDeleteInputWhereDto,
IdentityCardTypeDeleteInputDto,
IdentityCardTypeDeleteOutputDto,

// restore (4)
IdentityCardTypeRestoreDto,
IdentityCardTypeRestoreInputWhereDto,
IdentityCardTypeRestoreInputDto,
IdentityCardTypeRestoreOutputDto
>
(
// soft_delete (4)
IdentityCardTypeSoftDeleteDto,
IdentityCardTypeSoftDeleteInputWhereDto,
IdentityCardTypeSoftDeleteInputDto,
IdentityCardTypeSoftDeleteOutputDto,

// delete (4)
IdentityCardTypeDeleteDto,
IdentityCardTypeDeleteInputWhereDto,
IdentityCardTypeDeleteInputDto,
IdentityCardTypeDeleteOutputDto,

// restore (4)
IdentityCardTypeRestoreDto,
IdentityCardTypeRestoreInputWhereDto,
IdentityCardTypeRestoreInputDto,
IdentityCardTypeRestoreOutputDto
);



// ████████ initialize UpsertCrudEngine ███████████████████████████████████████████
this.initUpsertEngine
<
// upsert (3)
IdentityCardTypeUpsertDto,
IdentityCardTypeUpsertInputDto,
IdentityCardTypeUpsertOutputDto
>
(
// upsert (3)
IdentityCardTypeUpsertDto,
IdentityCardTypeUpsertInputDto,
IdentityCardTypeUpsertOutputDto
);




// ████████ initialize RemoveCrudEngine ███████████████████████████████████████████
this.initRemoveEngine
<
// soft_remove (5)
IdentityCardTypeSoftRemoveDto,
IdentityCardTypeSoftRemoveInputWhereDto,
IdentityCardTypeSoftRemoveInputDto,
IdentityCardTypeSoftRemoveOutputAffectedRowsDto,
IdentityCardTypeSoftRemoveOutputDto,

// remove (4)
IdentityCardTypeRemoveDto,
IdentityCardTypeRemoveInputWhereDto,
IdentityCardTypeRemoveInputDto,
IdentityCardTypeRemoveOutputAffectedRowsDto,
IdentityCardTypeRemoveOutputDto,

// recover (5)
IdentityCardTypeRecoverDto,
IdentityCardTypeRecoverInputWhereDto,
IdentityCardTypeRecoverInputDto,
IdentityCardTypeRecoverOutputAffectedRowsDto,
IdentityCardTypeRecoverOutputDto
>
(
// soft_remove (5)
IdentityCardTypeSoftRemoveDto,
IdentityCardTypeSoftRemoveInputWhereDto,
IdentityCardTypeSoftRemoveInputDto,
IdentityCardTypeSoftRemoveOutputAffectedRowsDto,
IdentityCardTypeSoftRemoveOutputDto,

// remove (4)
IdentityCardTypeRemoveDto,
IdentityCardTypeRemoveInputWhereDto,
IdentityCardTypeRemoveInputDto,
IdentityCardTypeRemoveOutputAffectedRowsDto,
IdentityCardTypeRemoveOutputDto,

// recover (5)
IdentityCardTypeRecoverDto,
IdentityCardTypeRecoverInputWhereDto,
IdentityCardTypeRecoverInputDto,
IdentityCardTypeRecoverOutputAffectedRowsDto,
IdentityCardTypeRecoverOutputDto
);



// ████████ initialize UploadCrudEngine ███████████████████████████████████████████
this.initUploadEngine
<
// upload (3)
IdentityCardTypeUploadDto,
IdentityCardTypeUploadInputDto,
IdentityCardTypeUploadOutputDto,

// upload_delete (3)
IdentityCardTypeUploadDeleteDto,
IdentityCardTypeUploadDeleteInputDto,
IdentityCardTypeUploadDeleteOutputDto
>
(
// upload (3)
IdentityCardTypeUploadDto,
IdentityCardTypeUploadInputDto,
IdentityCardTypeUploadOutputDto,

// upload_delete (3)
IdentityCardTypeUploadDeleteDto,
IdentityCardTypeUploadDeleteInputDto,
IdentityCardTypeUploadDeleteOutputDto
);


// ████████ initialize ImportExportCrudEngine █████████████████████████████████████

}

}