import { LanguageEntity } from "./entities/language.entity";
import { Injectable } from "@nestjs/common";
import { DataSource, Repository } from "typeorm";
import { InjectRepository } from "@nestjs/typeorm";
import { ConfService, CreateCrudEngine, CrudFactory, DataValidationPipe, DeleteCrudEngine, FindCrudEngine, FindOutputPaginationDto, LibraryAppService, LogService, RemoveCrudEngine, UpdateCrudEngine, UploadCrudEngine, UpsertCrudEngine } from "@libs/library-app";
import { LanguageCreateDto, LanguageCreateInputDto, LanguageCreateOutputDto, LanguageDeleteDto, LanguageDeleteInputDto, LanguageDeleteInputWhereDto, LanguageDeleteOutputDto, LanguageFindDto, LanguageFindInputDto, LanguageFindInputGroupByDto, LanguageFindInputSortOrderDto, LanguageFindInputWhereDto, LanguageFindOneByIdDto, LanguageFindOneByIdInputDto, LanguageFindOutputDto, LanguageFindOutputRowsDto, LanguageRecoverDto, LanguageRecoverInputDto, LanguageRecoverInputWhereDto, LanguageRecoverOutputDto, LanguageRecoverOutputAffectedRowsDto, LanguageRemoveDto, LanguageRemoveInputDto, LanguageRemoveInputWhereDto, LanguageRemoveOutputDto, LanguageRemoveOutputAffectedRowsDto, LanguageRestoreDto, LanguageRestoreInputDto, LanguageRestoreInputWhereDto, LanguageRestoreOutputDto, LanguageSoftDeleteDto, LanguageSoftDeleteInputDto, LanguageSoftDeleteInputWhereDto, LanguageSoftDeleteOutputDto, LanguageSoftRemoveDto, LanguageSoftRemoveInputDto, LanguageSoftRemoveInputWhereDto, LanguageSoftRemoveOutputDto, LanguageSoftRemoveOutputAffectedRowsDto, LanguageUpdateDto, LanguageUpdateInputDto, LanguageUpdateInputSetsDto, LanguageUpdateInputWhereDto, LanguageUpdateOutputDto, LanguageUpdateOutputAffectedRowsDto, LanguageUploadDeleteDto, LanguageUploadDeleteInputDto, LanguageUploadDeleteOutputDto, LanguageUploadDto, LanguageUploadInputDto, LanguageUploadOutputDto, LanguageUpsertDto, LanguageUpsertInputDto, LanguageUpsertOutputDto } from "./dto/language.dto";
import { SelfGraphqlMicroserviceService } from "@libs/dynamic-app";

@Injectable()
export class LanguageFactory extends CrudFactory<LanguageEntity> {

// ████████ FindCrudEngine ████████████████████████████████████████
public declare readonly findEngine: FindCrudEngine<
// entity (1)
LanguageEntity,

// find (8)
LanguageFindDto,
LanguageFindInputWhereDto,
LanguageFindInputSortOrderDto,
LanguageFindInputGroupByDto,
LanguageFindInputDto,
LanguageFindOutputRowsDto,
FindOutputPaginationDto,
LanguageFindOutputDto,

// find_one_by_id (2)
LanguageFindOneByIdDto,
LanguageFindOneByIdInputDto
>;

// ████████ CreateCrudEngine ████████████████████████████████████████
public declare readonly createEngine: CreateCrudEngine<
// entity (1)
LanguageEntity,

// create (3)
LanguageCreateDto,
LanguageCreateInputDto,
LanguageCreateOutputDto
>;

// ████████ UpdateCrudEngine ████████████████████████████████████████
public declare readonly updateEngine: UpdateCrudEngine<
// entity (1)
LanguageEntity,

// update (6)
LanguageUpdateDto,
LanguageUpdateInputWhereDto,
LanguageUpdateInputSetsDto,
LanguageUpdateInputDto,
LanguageUpdateOutputAffectedRowsDto,
LanguageUpdateOutputDto
>;

// ████████ DeleteCrudEngine ████████████████████████████████████████
public declare readonly deleteEngine: DeleteCrudEngine<
// entity (1)
LanguageEntity,

// soft_delete (4)
LanguageSoftDeleteDto,
LanguageSoftDeleteInputWhereDto,
LanguageSoftDeleteInputDto,
LanguageSoftDeleteOutputDto,

// delete (4)
LanguageDeleteDto,
LanguageDeleteInputWhereDto,
LanguageDeleteInputDto,
LanguageDeleteOutputDto,

// restore (4)
LanguageRestoreDto,
LanguageRestoreInputWhereDto,
LanguageRestoreInputDto,
LanguageRestoreOutputDto
>;

// ████████ UpsertCrudEngine ████████████████████████████████████████
public declare readonly upsertEngine: UpsertCrudEngine<
// entity (1)
LanguageEntity,

// upsert (3)
LanguageUpsertDto,
LanguageUpsertInputDto,
LanguageUpsertOutputDto
>;

// ████████ RemoveCrudEngine ████████████████████████████████████████
public declare readonly removeEngine: RemoveCrudEngine<
// entity (1)
LanguageEntity,

// soft_remove (5)
LanguageSoftRemoveDto,
LanguageSoftRemoveInputWhereDto,
LanguageSoftRemoveInputDto,
LanguageSoftRemoveOutputAffectedRowsDto,
LanguageSoftRemoveOutputDto,

// remove (4)
LanguageRemoveDto,
LanguageRemoveInputWhereDto,
LanguageRemoveInputDto,
LanguageRemoveOutputAffectedRowsDto,
LanguageRemoveOutputDto,

// recover (5)
LanguageRecoverDto,
LanguageRecoverInputWhereDto,
LanguageRecoverInputDto,
LanguageRecoverOutputAffectedRowsDto,
LanguageRecoverOutputDto
>;

// ████████ UploadCrudEngine ████████████████████████████████████████
public declare readonly uploadEngine: UploadCrudEngine<
// entity (1)
LanguageEntity,

// upload (3)
LanguageUploadDto,
LanguageUploadInputDto,
LanguageUploadOutputDto,

// upload_delete (3)
LanguageUploadDeleteDto,
LanguageUploadDeleteInputDto,
LanguageUploadDeleteOutputDto
>;

constructor(
// data source
protected readonly dataSource: DataSource,

@InjectRepository(LanguageEntity)
protected readonly repository: Repository<LanguageEntity>,

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
    LanguageEntity,
);

this.logService.setContext(LanguageFactory.name);

// ████████ initialize FindCrudEngine ██████████████████████████████████████
this.initFindEngine
<
// find (8)
LanguageFindDto,
LanguageFindInputWhereDto,
LanguageFindInputSortOrderDto,
LanguageFindInputGroupByDto,
LanguageFindInputDto,
LanguageFindOutputRowsDto,
FindOutputPaginationDto,
LanguageFindOutputDto,

// find_one_by_id (2)
LanguageFindOneByIdDto,
LanguageFindOneByIdInputDto
>
(
// find (8)
LanguageFindDto,
LanguageFindInputWhereDto,
LanguageFindInputSortOrderDto,
LanguageFindInputGroupByDto,
LanguageFindInputDto,
LanguageFindOutputRowsDto,
FindOutputPaginationDto,
LanguageFindOutputDto,

// find_one_by_id (2)
LanguageFindOneByIdDto,
LanguageFindOneByIdInputDto
);


// ████████ initialize CreateCrudEngine ███████████████████████████████████████
this.initCreateEngine
<
// create (3)
LanguageCreateDto,
LanguageCreateInputDto,
LanguageCreateOutputDto
>
(
// create (3)
LanguageCreateDto,
LanguageCreateInputDto,
LanguageCreateOutputDto
);

// ████████ initialize UpdateCrudEngine ████████████████████████████████████████
this.initUpdateEngine
<
// update (6)
LanguageUpdateDto,
LanguageUpdateInputWhereDto,
LanguageUpdateInputSetsDto,
LanguageUpdateInputDto,
LanguageUpdateOutputAffectedRowsDto,
LanguageUpdateOutputDto
>
(
// update (6)
LanguageUpdateDto,
LanguageUpdateInputWhereDto,
LanguageUpdateInputSetsDto,
LanguageUpdateInputDto,
LanguageUpdateOutputAffectedRowsDto,
LanguageUpdateOutputDto
);


// ████████ initialize DeleteCrudEngine ███████████████████████████████████████████
this.initDeleteEngine
<
// soft_delete (4)
LanguageSoftDeleteDto,
LanguageSoftDeleteInputWhereDto,
LanguageSoftDeleteInputDto,
LanguageSoftDeleteOutputDto,

// delete (4)
LanguageDeleteDto,
LanguageDeleteInputWhereDto,
LanguageDeleteInputDto,
LanguageDeleteOutputDto,

// restore (4)
LanguageRestoreDto,
LanguageRestoreInputWhereDto,
LanguageRestoreInputDto,
LanguageRestoreOutputDto
>
(
// soft_delete (4)
LanguageSoftDeleteDto,
LanguageSoftDeleteInputWhereDto,
LanguageSoftDeleteInputDto,
LanguageSoftDeleteOutputDto,

// delete (4)
LanguageDeleteDto,
LanguageDeleteInputWhereDto,
LanguageDeleteInputDto,
LanguageDeleteOutputDto,

// restore (4)
LanguageRestoreDto,
LanguageRestoreInputWhereDto,
LanguageRestoreInputDto,
LanguageRestoreOutputDto
);



// ████████ initialize UpsertCrudEngine ███████████████████████████████████████████
this.initUpsertEngine
<
// upsert (3)
LanguageUpsertDto,
LanguageUpsertInputDto,
LanguageUpsertOutputDto
>
(
// upsert (3)
LanguageUpsertDto,
LanguageUpsertInputDto,
LanguageUpsertOutputDto
);




// ████████ initialize RemoveCrudEngine ███████████████████████████████████████████
this.initRemoveEngine
<
// soft_remove (5)
LanguageSoftRemoveDto,
LanguageSoftRemoveInputWhereDto,
LanguageSoftRemoveInputDto,
LanguageSoftRemoveOutputAffectedRowsDto,
LanguageSoftRemoveOutputDto,

// remove (4)
LanguageRemoveDto,
LanguageRemoveInputWhereDto,
LanguageRemoveInputDto,
LanguageRemoveOutputAffectedRowsDto,
LanguageRemoveOutputDto,

// recover (5)
LanguageRecoverDto,
LanguageRecoverInputWhereDto,
LanguageRecoverInputDto,
LanguageRecoverOutputAffectedRowsDto,
LanguageRecoverOutputDto
>
(
// soft_remove (5)
LanguageSoftRemoveDto,
LanguageSoftRemoveInputWhereDto,
LanguageSoftRemoveInputDto,
LanguageSoftRemoveOutputAffectedRowsDto,
LanguageSoftRemoveOutputDto,

// remove (4)
LanguageRemoveDto,
LanguageRemoveInputWhereDto,
LanguageRemoveInputDto,
LanguageRemoveOutputAffectedRowsDto,
LanguageRemoveOutputDto,

// recover (5)
LanguageRecoverDto,
LanguageRecoverInputWhereDto,
LanguageRecoverInputDto,
LanguageRecoverOutputAffectedRowsDto,
LanguageRecoverOutputDto
);



// ████████ initialize UploadCrudEngine ███████████████████████████████████████████
this.initUploadEngine
<
// upload (3)
LanguageUploadDto,
LanguageUploadInputDto,
LanguageUploadOutputDto,

// upload_delete (3)
LanguageUploadDeleteDto,
LanguageUploadDeleteInputDto,
LanguageUploadDeleteOutputDto
>
(
// upload (3)
LanguageUploadDto,
LanguageUploadInputDto,
LanguageUploadOutputDto,

// upload_delete (3)
LanguageUploadDeleteDto,
LanguageUploadDeleteInputDto,
LanguageUploadDeleteOutputDto
);


// ████████ initialize ImportExportCrudEngine █████████████████████████████████████

}

}