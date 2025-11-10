import { CountryTimezoneEntity } from "./entities/country.timezone.entity";
import { Injectable } from "@nestjs/common";
import { DataSource, Repository } from "typeorm";
import { InjectRepository } from "@nestjs/typeorm";
import { ConfService, CreateCrudEngine, CrudFactory, DataValidationPipe, DeleteCrudEngine, FindCrudEngine, FindOutputPaginationDto, LibraryAppService, LogService, RemoveCrudEngine, UpdateCrudEngine, UploadCrudEngine, UpsertCrudEngine } from "@libs/library-app";
import { CountryTimezoneCreateDto, CountryTimezoneCreateInputDto, CountryTimezoneCreateOutputDto, CountryTimezoneDeleteDto, CountryTimezoneDeleteInputDto, CountryTimezoneDeleteInputWhereDto, CountryTimezoneDeleteOutputDto, CountryTimezoneFindDto, CountryTimezoneFindInputDto, CountryTimezoneFindInputGroupByDto, CountryTimezoneFindInputSortOrderDto, CountryTimezoneFindInputWhereDto, CountryTimezoneFindOneByIdDto, CountryTimezoneFindOneByIdInputDto, CountryTimezoneFindOutputDto, CountryTimezoneFindOutputRowsDto, CountryTimezoneRecoverDto, CountryTimezoneRecoverInputDto, CountryTimezoneRecoverInputWhereDto, CountryTimezoneRecoverOutputDto, CountryTimezoneRecoverOutputAffectedRowsDto, CountryTimezoneRemoveDto, CountryTimezoneRemoveInputDto, CountryTimezoneRemoveInputWhereDto, CountryTimezoneRemoveOutputDto, CountryTimezoneRemoveOutputAffectedRowsDto, CountryTimezoneRestoreDto, CountryTimezoneRestoreInputDto, CountryTimezoneRestoreInputWhereDto, CountryTimezoneRestoreOutputDto, CountryTimezoneSoftDeleteDto, CountryTimezoneSoftDeleteInputDto, CountryTimezoneSoftDeleteInputWhereDto, CountryTimezoneSoftDeleteOutputDto, CountryTimezoneSoftRemoveDto, CountryTimezoneSoftRemoveInputDto, CountryTimezoneSoftRemoveInputWhereDto, CountryTimezoneSoftRemoveOutputDto, CountryTimezoneSoftRemoveOutputAffectedRowsDto, CountryTimezoneUpdateDto, CountryTimezoneUpdateInputDto, CountryTimezoneUpdateInputSetsDto, CountryTimezoneUpdateInputWhereDto, CountryTimezoneUpdateOutputDto, CountryTimezoneUpdateOutputAffectedRowsDto, CountryTimezoneUploadDeleteDto, CountryTimezoneUploadDeleteInputDto, CountryTimezoneUploadDeleteOutputDto, CountryTimezoneUploadDto, CountryTimezoneUploadInputDto, CountryTimezoneUploadOutputDto, CountryTimezoneUpsertDto, CountryTimezoneUpsertInputDto, CountryTimezoneUpsertOutputDto } from "./dto/country.timezone.dto";
import { SelfGraphqlMicroserviceService } from "@libs/dynamic-app";

@Injectable()
export class CountryTimezoneFactory extends CrudFactory<CountryTimezoneEntity> {

// ████████ FindCrudEngine ████████████████████████████████████████
public declare readonly findEngine: FindCrudEngine<
// entity (1)
CountryTimezoneEntity,

// find (8)
CountryTimezoneFindDto,
CountryTimezoneFindInputWhereDto,
CountryTimezoneFindInputSortOrderDto,
CountryTimezoneFindInputGroupByDto,
CountryTimezoneFindInputDto,
CountryTimezoneFindOutputRowsDto,
FindOutputPaginationDto,
CountryTimezoneFindOutputDto,

// find_one_by_id (2)
CountryTimezoneFindOneByIdDto,
CountryTimezoneFindOneByIdInputDto
>;

// ████████ CreateCrudEngine ████████████████████████████████████████
public declare readonly createEngine: CreateCrudEngine<
// entity (1)
CountryTimezoneEntity,

// create (3)
CountryTimezoneCreateDto,
CountryTimezoneCreateInputDto,
CountryTimezoneCreateOutputDto
>;

// ████████ UpdateCrudEngine ████████████████████████████████████████
public declare readonly updateEngine: UpdateCrudEngine<
// entity (1)
CountryTimezoneEntity,

// update (6)
CountryTimezoneUpdateDto,
CountryTimezoneUpdateInputWhereDto,
CountryTimezoneUpdateInputSetsDto,
CountryTimezoneUpdateInputDto,
CountryTimezoneUpdateOutputAffectedRowsDto,
CountryTimezoneUpdateOutputDto
>;

// ████████ DeleteCrudEngine ████████████████████████████████████████
public declare readonly deleteEngine: DeleteCrudEngine<
// entity (1)
CountryTimezoneEntity,

// soft_delete (4)
CountryTimezoneSoftDeleteDto,
CountryTimezoneSoftDeleteInputWhereDto,
CountryTimezoneSoftDeleteInputDto,
CountryTimezoneSoftDeleteOutputDto,

// delete (4)
CountryTimezoneDeleteDto,
CountryTimezoneDeleteInputWhereDto,
CountryTimezoneDeleteInputDto,
CountryTimezoneDeleteOutputDto,

// restore (4)
CountryTimezoneRestoreDto,
CountryTimezoneRestoreInputWhereDto,
CountryTimezoneRestoreInputDto,
CountryTimezoneRestoreOutputDto
>;

// ████████ UpsertCrudEngine ████████████████████████████████████████
public declare readonly upsertEngine: UpsertCrudEngine<
// entity (1)
CountryTimezoneEntity,

// upsert (3)
CountryTimezoneUpsertDto,
CountryTimezoneUpsertInputDto,
CountryTimezoneUpsertOutputDto
>;

// ████████ RemoveCrudEngine ████████████████████████████████████████
public declare readonly removeEngine: RemoveCrudEngine<
// entity (1)
CountryTimezoneEntity,

// soft_remove (5)
CountryTimezoneSoftRemoveDto,
CountryTimezoneSoftRemoveInputWhereDto,
CountryTimezoneSoftRemoveInputDto,
CountryTimezoneSoftRemoveOutputAffectedRowsDto,
CountryTimezoneSoftRemoveOutputDto,

// remove (4)
CountryTimezoneRemoveDto,
CountryTimezoneRemoveInputWhereDto,
CountryTimezoneRemoveInputDto,
CountryTimezoneRemoveOutputAffectedRowsDto,
CountryTimezoneRemoveOutputDto,

// recover (5)
CountryTimezoneRecoverDto,
CountryTimezoneRecoverInputWhereDto,
CountryTimezoneRecoverInputDto,
CountryTimezoneRecoverOutputAffectedRowsDto,
CountryTimezoneRecoverOutputDto
>;

// ████████ UploadCrudEngine ████████████████████████████████████████
public declare readonly uploadEngine: UploadCrudEngine<
// entity (1)
CountryTimezoneEntity,

// upload (3)
CountryTimezoneUploadDto,
CountryTimezoneUploadInputDto,
CountryTimezoneUploadOutputDto,

// upload_delete (3)
CountryTimezoneUploadDeleteDto,
CountryTimezoneUploadDeleteInputDto,
CountryTimezoneUploadDeleteOutputDto
>;

constructor(
// data source
protected readonly dataSource: DataSource,

@InjectRepository(CountryTimezoneEntity)
protected readonly repository: Repository<CountryTimezoneEntity>,

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
    CountryTimezoneEntity,
);

this.logService.setContext(CountryTimezoneFactory.name);

// ████████ initialize FindCrudEngine ██████████████████████████████████████
this.initFindEngine
<
// find (8)
CountryTimezoneFindDto,
CountryTimezoneFindInputWhereDto,
CountryTimezoneFindInputSortOrderDto,
CountryTimezoneFindInputGroupByDto,
CountryTimezoneFindInputDto,
CountryTimezoneFindOutputRowsDto,
FindOutputPaginationDto,
CountryTimezoneFindOutputDto,

// find_one_by_id (2)
CountryTimezoneFindOneByIdDto,
CountryTimezoneFindOneByIdInputDto
>
(
// find (8)
CountryTimezoneFindDto,
CountryTimezoneFindInputWhereDto,
CountryTimezoneFindInputSortOrderDto,
CountryTimezoneFindInputGroupByDto,
CountryTimezoneFindInputDto,
CountryTimezoneFindOutputRowsDto,
FindOutputPaginationDto,
CountryTimezoneFindOutputDto,

// find_one_by_id (2)
CountryTimezoneFindOneByIdDto,
CountryTimezoneFindOneByIdInputDto
);


// ████████ initialize CreateCrudEngine ███████████████████████████████████████
this.initCreateEngine
<
// create (3)
CountryTimezoneCreateDto,
CountryTimezoneCreateInputDto,
CountryTimezoneCreateOutputDto
>
(
// create (3)
CountryTimezoneCreateDto,
CountryTimezoneCreateInputDto,
CountryTimezoneCreateOutputDto
);

// ████████ initialize UpdateCrudEngine ████████████████████████████████████████
this.initUpdateEngine
<
// update (6)
CountryTimezoneUpdateDto,
CountryTimezoneUpdateInputWhereDto,
CountryTimezoneUpdateInputSetsDto,
CountryTimezoneUpdateInputDto,
CountryTimezoneUpdateOutputAffectedRowsDto,
CountryTimezoneUpdateOutputDto
>
(
// update (6)
CountryTimezoneUpdateDto,
CountryTimezoneUpdateInputWhereDto,
CountryTimezoneUpdateInputSetsDto,
CountryTimezoneUpdateInputDto,
CountryTimezoneUpdateOutputAffectedRowsDto,
CountryTimezoneUpdateOutputDto
);


// ████████ initialize DeleteCrudEngine ███████████████████████████████████████████
this.initDeleteEngine
<
// soft_delete (4)
CountryTimezoneSoftDeleteDto,
CountryTimezoneSoftDeleteInputWhereDto,
CountryTimezoneSoftDeleteInputDto,
CountryTimezoneSoftDeleteOutputDto,

// delete (4)
CountryTimezoneDeleteDto,
CountryTimezoneDeleteInputWhereDto,
CountryTimezoneDeleteInputDto,
CountryTimezoneDeleteOutputDto,

// restore (4)
CountryTimezoneRestoreDto,
CountryTimezoneRestoreInputWhereDto,
CountryTimezoneRestoreInputDto,
CountryTimezoneRestoreOutputDto
>
(
// soft_delete (4)
CountryTimezoneSoftDeleteDto,
CountryTimezoneSoftDeleteInputWhereDto,
CountryTimezoneSoftDeleteInputDto,
CountryTimezoneSoftDeleteOutputDto,

// delete (4)
CountryTimezoneDeleteDto,
CountryTimezoneDeleteInputWhereDto,
CountryTimezoneDeleteInputDto,
CountryTimezoneDeleteOutputDto,

// restore (4)
CountryTimezoneRestoreDto,
CountryTimezoneRestoreInputWhereDto,
CountryTimezoneRestoreInputDto,
CountryTimezoneRestoreOutputDto
);



// ████████ initialize UpsertCrudEngine ███████████████████████████████████████████
this.initUpsertEngine
<
// upsert (3)
CountryTimezoneUpsertDto,
CountryTimezoneUpsertInputDto,
CountryTimezoneUpsertOutputDto
>
(
// upsert (3)
CountryTimezoneUpsertDto,
CountryTimezoneUpsertInputDto,
CountryTimezoneUpsertOutputDto
);




// ████████ initialize RemoveCrudEngine ███████████████████████████████████████████
this.initRemoveEngine
<
// soft_remove (5)
CountryTimezoneSoftRemoveDto,
CountryTimezoneSoftRemoveInputWhereDto,
CountryTimezoneSoftRemoveInputDto,
CountryTimezoneSoftRemoveOutputAffectedRowsDto,
CountryTimezoneSoftRemoveOutputDto,

// remove (4)
CountryTimezoneRemoveDto,
CountryTimezoneRemoveInputWhereDto,
CountryTimezoneRemoveInputDto,
CountryTimezoneRemoveOutputAffectedRowsDto,
CountryTimezoneRemoveOutputDto,

// recover (5)
CountryTimezoneRecoverDto,
CountryTimezoneRecoverInputWhereDto,
CountryTimezoneRecoverInputDto,
CountryTimezoneRecoverOutputAffectedRowsDto,
CountryTimezoneRecoverOutputDto
>
(
// soft_remove (5)
CountryTimezoneSoftRemoveDto,
CountryTimezoneSoftRemoveInputWhereDto,
CountryTimezoneSoftRemoveInputDto,
CountryTimezoneSoftRemoveOutputAffectedRowsDto,
CountryTimezoneSoftRemoveOutputDto,

// remove (4)
CountryTimezoneRemoveDto,
CountryTimezoneRemoveInputWhereDto,
CountryTimezoneRemoveInputDto,
CountryTimezoneRemoveOutputAffectedRowsDto,
CountryTimezoneRemoveOutputDto,

// recover (5)
CountryTimezoneRecoverDto,
CountryTimezoneRecoverInputWhereDto,
CountryTimezoneRecoverInputDto,
CountryTimezoneRecoverOutputAffectedRowsDto,
CountryTimezoneRecoverOutputDto
);



// ████████ initialize UploadCrudEngine ███████████████████████████████████████████
this.initUploadEngine
<
// upload (3)
CountryTimezoneUploadDto,
CountryTimezoneUploadInputDto,
CountryTimezoneUploadOutputDto,

// upload_delete (3)
CountryTimezoneUploadDeleteDto,
CountryTimezoneUploadDeleteInputDto,
CountryTimezoneUploadDeleteOutputDto
>
(
// upload (3)
CountryTimezoneUploadDto,
CountryTimezoneUploadInputDto,
CountryTimezoneUploadOutputDto,

// upload_delete (3)
CountryTimezoneUploadDeleteDto,
CountryTimezoneUploadDeleteInputDto,
CountryTimezoneUploadDeleteOutputDto
);


// ████████ initialize ImportExportCrudEngine █████████████████████████████████████

}

}