import { SettingPreferenceEntity } from "./entities/preference.entity";
import { Injectable } from "@nestjs/common";
import { DataSource, Repository } from "typeorm";
import { InjectRepository } from "@nestjs/typeorm";
import { ConfService, CreateCrudEngine, CrudFactory, DataValidationPipe, DeleteCrudEngine, FindCrudEngine, FindOutputPaginationDto, ImageProcessingService, LibraryAppService, LogService, RemoveCrudEngine, UpdateCrudEngine, UploadCrudEngine, UpsertCrudEngine } from "@libs/library-app";
import { SelfGraphqlMicroserviceService } from "@libs/dynamic-app";
import { SettingPreferenceCreateDto, SettingPreferenceCreateInputDto, SettingPreferenceCreateOutputDto, SettingPreferenceDeleteDto, SettingPreferenceDeleteInputDto, SettingPreferenceDeleteInputWhereDto, SettingPreferenceDeleteOutputDto, SettingPreferenceFindDto, SettingPreferenceFindInputDto, SettingPreferenceFindInputGroupByDto, SettingPreferenceFindInputSortOrderDto, SettingPreferenceFindInputWhereDto, SettingPreferenceFindOneByIdDto, SettingPreferenceFindOneByIdInputDto, SettingPreferenceFindOutputDto, SettingPreferenceFindOutputRowsDto, SettingPreferenceRecoverDto, SettingPreferenceRecoverInputDto, SettingPreferenceRecoverInputWhereDto, SettingPreferenceRecoverOutputDto, SettingPreferenceRecoverOutputAffectedRowsDto, SettingPreferenceRemoveDto, SettingPreferenceRemoveInputDto, SettingPreferenceRemoveInputWhereDto, SettingPreferenceRemoveOutputDto, SettingPreferenceRemoveOutputAffectedRowsDto, SettingPreferenceRestoreDto, SettingPreferenceRestoreInputDto, SettingPreferenceRestoreInputWhereDto, SettingPreferenceRestoreOutputDto, SettingPreferenceSoftDeleteDto, SettingPreferenceSoftDeleteInputDto, SettingPreferenceSoftDeleteInputWhereDto, SettingPreferenceSoftDeleteOutputDto, SettingPreferenceSoftRemoveDto, SettingPreferenceSoftRemoveInputDto, SettingPreferenceSoftRemoveInputWhereDto, SettingPreferenceSoftRemoveOutputDto, SettingPreferenceSoftRemoveOutputAffectedRowsDto, SettingPreferenceUpdateDto, SettingPreferenceUpdateInputDto, SettingPreferenceUpdateInputSetsDto, SettingPreferenceUpdateInputWhereDto, SettingPreferenceUpdateOutputDto, SettingPreferenceUpdateOutputAffectedRowsDto, SettingPreferenceUploadDeleteDto, SettingPreferenceUploadDeleteInputDto, SettingPreferenceUploadDeleteOutputDto, SettingPreferenceUploadDto, SettingPreferenceUploadInputDto, SettingPreferenceUploadOutputDto, SettingPreferenceUpsertDto, SettingPreferenceUpsertInputDto, SettingPreferenceUpsertOutputDto } from "./dto/preference.dto";

@Injectable()
export class SettingPreferenceFactory extends CrudFactory<SettingPreferenceEntity> {

// ████████ FindCrudEngine ████████████████████████████████████████
public declare readonly findEngine: FindCrudEngine<
// entity (1)
SettingPreferenceEntity,

// find (8)
SettingPreferenceFindDto,
SettingPreferenceFindInputWhereDto,
SettingPreferenceFindInputSortOrderDto,
SettingPreferenceFindInputGroupByDto,
SettingPreferenceFindInputDto,
SettingPreferenceFindOutputRowsDto,
FindOutputPaginationDto,
SettingPreferenceFindOutputDto,

// find_one_by_id (2)
SettingPreferenceFindOneByIdDto,
SettingPreferenceFindOneByIdInputDto
>;

// ████████ CreateCrudEngine ████████████████████████████████████████
public declare readonly createEngine: CreateCrudEngine<
// entity (1)
SettingPreferenceEntity,

// create (3)
SettingPreferenceCreateDto,
SettingPreferenceCreateInputDto,
SettingPreferenceCreateOutputDto
>;

// ████████ UpdateCrudEngine ████████████████████████████████████████
public declare readonly updateEngine: UpdateCrudEngine<
// entity (1)
SettingPreferenceEntity,

// update (6)
SettingPreferenceUpdateDto,
SettingPreferenceUpdateInputWhereDto,
SettingPreferenceUpdateInputSetsDto,
SettingPreferenceUpdateInputDto,
SettingPreferenceUpdateOutputAffectedRowsDto,
SettingPreferenceUpdateOutputDto
>;

// ████████ DeleteCrudEngine ████████████████████████████████████████
public declare readonly deleteEngine: DeleteCrudEngine<
// entity (1)
SettingPreferenceEntity,

// soft_delete (4)
SettingPreferenceSoftDeleteDto,
SettingPreferenceSoftDeleteInputWhereDto,
SettingPreferenceSoftDeleteInputDto,
SettingPreferenceSoftDeleteOutputDto,

// delete (4)
SettingPreferenceDeleteDto,
SettingPreferenceDeleteInputWhereDto,
SettingPreferenceDeleteInputDto,
SettingPreferenceDeleteOutputDto,

// restore (4)
SettingPreferenceRestoreDto,
SettingPreferenceRestoreInputWhereDto,
SettingPreferenceRestoreInputDto,
SettingPreferenceRestoreOutputDto
>;

// ████████ UpsertCrudEngine ████████████████████████████████████████
public declare readonly upsertEngine: UpsertCrudEngine<
// entity (1)
SettingPreferenceEntity,

// upsert (3)
SettingPreferenceUpsertDto,
SettingPreferenceUpsertInputDto,
SettingPreferenceUpsertOutputDto
>;

// ████████ RemoveCrudEngine ████████████████████████████████████████
public declare readonly removeEngine: RemoveCrudEngine<
// entity (1)
SettingPreferenceEntity,

// soft_remove (5)
SettingPreferenceSoftRemoveDto,
SettingPreferenceSoftRemoveInputWhereDto,
SettingPreferenceSoftRemoveInputDto,
SettingPreferenceSoftRemoveOutputAffectedRowsDto,
SettingPreferenceSoftRemoveOutputDto,

// remove (4)
SettingPreferenceRemoveDto,
SettingPreferenceRemoveInputWhereDto,
SettingPreferenceRemoveInputDto,
SettingPreferenceRemoveOutputAffectedRowsDto,
SettingPreferenceRemoveOutputDto,

// recover (5)
SettingPreferenceRecoverDto,
SettingPreferenceRecoverInputWhereDto,
SettingPreferenceRecoverInputDto,
SettingPreferenceRecoverOutputAffectedRowsDto,
SettingPreferenceRecoverOutputDto
>;

// ████████ UploadCrudEngine ████████████████████████████████████████
public declare readonly uploadEngine: UploadCrudEngine<
// entity (1)
SettingPreferenceEntity,

// upload (3)
SettingPreferenceUploadDto,
SettingPreferenceUploadInputDto,
SettingPreferenceUploadOutputDto,

// upload_delete (3)
SettingPreferenceUploadDeleteDto,
SettingPreferenceUploadDeleteInputDto,
SettingPreferenceUploadDeleteOutputDto
>;

constructor(
// data source
protected readonly dataSource: DataSource,

@InjectRepository(SettingPreferenceEntity)
protected readonly repository: Repository<SettingPreferenceEntity>,

// dependecy services
protected readonly confService: ConfService,
protected readonly logService: LogService,
protected readonly validationPipe: DataValidationPipe,
protected readonly libraryAppService: LibraryAppService,
protected readonly selfGraphqlMicroserviceService: SelfGraphqlMicroserviceService,
protected readonly imageProcessingService: ImageProcessingService,
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
    SettingPreferenceEntity,
);

this.logService.setContext(SettingPreferenceFactory.name);

// set image processing service object to factory
this.imageProcessingService = imageProcessingService;

// ████████ initialize FindCrudEngine ██████████████████████████████████████
this.initFindEngine
<
// find (8)
SettingPreferenceFindDto,
SettingPreferenceFindInputWhereDto,
SettingPreferenceFindInputSortOrderDto,
SettingPreferenceFindInputGroupByDto,
SettingPreferenceFindInputDto,
SettingPreferenceFindOutputRowsDto,
FindOutputPaginationDto,
SettingPreferenceFindOutputDto,

// find_one_by_id (2)
SettingPreferenceFindOneByIdDto,
SettingPreferenceFindOneByIdInputDto
>
(
// find (8)
SettingPreferenceFindDto,
SettingPreferenceFindInputWhereDto,
SettingPreferenceFindInputSortOrderDto,
SettingPreferenceFindInputGroupByDto,
SettingPreferenceFindInputDto,
SettingPreferenceFindOutputRowsDto,
FindOutputPaginationDto,
SettingPreferenceFindOutputDto,

// find_one_by_id (2)
SettingPreferenceFindOneByIdDto,
SettingPreferenceFindOneByIdInputDto
);


// ████████ initialize CreateCrudEngine ███████████████████████████████████████
this.initCreateEngine
<
// create (3)
SettingPreferenceCreateDto,
SettingPreferenceCreateInputDto,
SettingPreferenceCreateOutputDto
>
(
// create (3)
SettingPreferenceCreateDto,
SettingPreferenceCreateInputDto,
SettingPreferenceCreateOutputDto
);

// ████████ initialize UpdateCrudEngine ████████████████████████████████████████
this.initUpdateEngine
<
// update (6)
SettingPreferenceUpdateDto,
SettingPreferenceUpdateInputWhereDto,
SettingPreferenceUpdateInputSetsDto,
SettingPreferenceUpdateInputDto,
SettingPreferenceUpdateOutputAffectedRowsDto,
SettingPreferenceUpdateOutputDto
>
(
// update (6)
SettingPreferenceUpdateDto,
SettingPreferenceUpdateInputWhereDto,
SettingPreferenceUpdateInputSetsDto,
SettingPreferenceUpdateInputDto,
SettingPreferenceUpdateOutputAffectedRowsDto,
SettingPreferenceUpdateOutputDto
);


// ████████ initialize DeleteCrudEngine ███████████████████████████████████████████
this.initDeleteEngine
<
// soft_delete (4)
SettingPreferenceSoftDeleteDto,
SettingPreferenceSoftDeleteInputWhereDto,
SettingPreferenceSoftDeleteInputDto,
SettingPreferenceSoftDeleteOutputDto,

// delete (4)
SettingPreferenceDeleteDto,
SettingPreferenceDeleteInputWhereDto,
SettingPreferenceDeleteInputDto,
SettingPreferenceDeleteOutputDto,

// restore (4)
SettingPreferenceRestoreDto,
SettingPreferenceRestoreInputWhereDto,
SettingPreferenceRestoreInputDto,
SettingPreferenceRestoreOutputDto
>
(
// soft_delete (4)
SettingPreferenceSoftDeleteDto,
SettingPreferenceSoftDeleteInputWhereDto,
SettingPreferenceSoftDeleteInputDto,
SettingPreferenceSoftDeleteOutputDto,

// delete (4)
SettingPreferenceDeleteDto,
SettingPreferenceDeleteInputWhereDto,
SettingPreferenceDeleteInputDto,
SettingPreferenceDeleteOutputDto,

// restore (4)
SettingPreferenceRestoreDto,
SettingPreferenceRestoreInputWhereDto,
SettingPreferenceRestoreInputDto,
SettingPreferenceRestoreOutputDto
);



// ████████ initialize UpsertCrudEngine ███████████████████████████████████████████
this.initUpsertEngine
<
// upsert (3)
SettingPreferenceUpsertDto,
SettingPreferenceUpsertInputDto,
SettingPreferenceUpsertOutputDto
>
(
// upsert (3)
SettingPreferenceUpsertDto,
SettingPreferenceUpsertInputDto,
SettingPreferenceUpsertOutputDto
);




// ████████ initialize RemoveCrudEngine ███████████████████████████████████████████
this.initRemoveEngine
<
// soft_remove (5)
SettingPreferenceSoftRemoveDto,
SettingPreferenceSoftRemoveInputWhereDto,
SettingPreferenceSoftRemoveInputDto,
SettingPreferenceSoftRemoveOutputAffectedRowsDto,
SettingPreferenceSoftRemoveOutputDto,

// remove (4)
SettingPreferenceRemoveDto,
SettingPreferenceRemoveInputWhereDto,
SettingPreferenceRemoveInputDto,
SettingPreferenceRemoveOutputAffectedRowsDto,
SettingPreferenceRemoveOutputDto,

// recover (5)
SettingPreferenceRecoverDto,
SettingPreferenceRecoverInputWhereDto,
SettingPreferenceRecoverInputDto,
SettingPreferenceRecoverOutputAffectedRowsDto,
SettingPreferenceRecoverOutputDto
>
(
// soft_remove (5)
SettingPreferenceSoftRemoveDto,
SettingPreferenceSoftRemoveInputWhereDto,
SettingPreferenceSoftRemoveInputDto,
SettingPreferenceSoftRemoveOutputAffectedRowsDto,
SettingPreferenceSoftRemoveOutputDto,

// remove (4)
SettingPreferenceRemoveDto,
SettingPreferenceRemoveInputWhereDto,
SettingPreferenceRemoveInputDto,
SettingPreferenceRemoveOutputAffectedRowsDto,
SettingPreferenceRemoveOutputDto,

// recover (5)
SettingPreferenceRecoverDto,
SettingPreferenceRecoverInputWhereDto,
SettingPreferenceRecoverInputDto,
SettingPreferenceRecoverOutputAffectedRowsDto,
SettingPreferenceRecoverOutputDto
);



// ████████ initialize UploadCrudEngine ███████████████████████████████████████████
this.initUploadEngine
<
// upload (3)
SettingPreferenceUploadDto,
SettingPreferenceUploadInputDto,
SettingPreferenceUploadOutputDto,

// upload_delete (3)
SettingPreferenceUploadDeleteDto,
SettingPreferenceUploadDeleteInputDto,
SettingPreferenceUploadDeleteOutputDto
>
(
// upload (3)
SettingPreferenceUploadDto,
SettingPreferenceUploadInputDto,
SettingPreferenceUploadOutputDto,

// upload_delete (3)
SettingPreferenceUploadDeleteDto,
SettingPreferenceUploadDeleteInputDto,
SettingPreferenceUploadDeleteOutputDto
);


// ████████ initialize ImportExportCrudEngine █████████████████████████████████████

}

}