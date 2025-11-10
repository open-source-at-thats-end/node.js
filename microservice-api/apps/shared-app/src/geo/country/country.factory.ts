import { CountryEntity } from "./entities/country.entity";
import { Injectable } from "@nestjs/common";
import { DataSource, Repository } from "typeorm";
import { InjectRepository } from "@nestjs/typeorm";
import { ConfService, CreateCrudEngine, CrudFactory, DataValidationPipe, DeleteCrudEngine, FindCrudEngine, FindOutputPaginationDto, LibraryAppService, LogService, RemoveCrudEngine, UpdateCrudEngine, UploadCrudEngine, UpsertCrudEngine } from "@libs/library-app";
import { SelfGraphqlMicroserviceService } from '@libs/dynamic-app';
import { CountryCreateDto, CountryCreateInputDto, CountryCreateOutputDto, CountryDeleteDto, CountryDeleteInputDto, CountryDeleteInputWhereDto, CountryDeleteOutputDto, CountryFindDto, CountryFindInputDto, CountryFindInputGroupByDto, CountryFindInputSortOrderDto, CountryFindInputWhereDto, CountryFindOneByIdDto, CountryFindOneByIdInputDto, CountryFindOutputDto, CountryFindOutputRowsDto, CountryRecoverDto, CountryRecoverInputDto, CountryRecoverInputWhereDto, CountryRecoverOutputDto, CountryRecoverOutputAffectedRowsDto, CountryRemoveDto, CountryRemoveInputDto, CountryRemoveInputWhereDto, CountryRemoveOutputDto, CountryRemoveOutputAffectedRowsDto, CountryRestoreDto, CountryRestoreInputDto, CountryRestoreInputWhereDto, CountryRestoreOutputDto, CountrySoftDeleteDto, CountrySoftDeleteInputDto, CountrySoftDeleteInputWhereDto, CountrySoftDeleteOutputDto, CountrySoftRemoveDto, CountrySoftRemoveInputDto, CountrySoftRemoveInputWhereDto, CountrySoftRemoveOutputDto, CountrySoftRemoveOutputAffectedRowsDto, CountryUpdateDto, CountryUpdateInputDto, CountryUpdateInputSetsDto, CountryUpdateInputWhereDto, CountryUpdateOutputDto, CountryUpdateOutputAffectedRowsDto, CountryUploadDeleteDto, CountryUploadDeleteInputDto, CountryUploadDeleteOutputDto, CountryUploadDto, CountryUploadInputDto, CountryUploadOutputDto, CountryUpsertDto, CountryUpsertInputDto, CountryUpsertOutputDto } from "./dto/country.dto";

@Injectable()
export class CountryFactory extends CrudFactory<CountryEntity> {

// ████████ FindCrudEngine ████████████████████████████████████████
public declare readonly findEngine: FindCrudEngine<
// entity (1)
CountryEntity,

// find (8)
CountryFindDto,
CountryFindInputWhereDto,
CountryFindInputSortOrderDto,
CountryFindInputGroupByDto,
CountryFindInputDto,
CountryFindOutputRowsDto,
FindOutputPaginationDto,
CountryFindOutputDto,

// find_one_by_id (2)
CountryFindOneByIdDto,
CountryFindOneByIdInputDto
>;

// ████████ CreateCrudEngine ████████████████████████████████████████
public declare readonly createEngine: CreateCrudEngine<
// entity (1)
CountryEntity,

// create (3)
CountryCreateDto,
CountryCreateInputDto,
CountryCreateOutputDto
>;

// ████████ UpdateCrudEngine ████████████████████████████████████████
public declare readonly updateEngine: UpdateCrudEngine<
// entity (1)
CountryEntity,

// update (6)
CountryUpdateDto,
CountryUpdateInputWhereDto,
CountryUpdateInputSetsDto,
CountryUpdateInputDto,
CountryUpdateOutputAffectedRowsDto,
CountryUpdateOutputDto
>;

// ████████ DeleteCrudEngine ████████████████████████████████████████
public declare readonly deleteEngine: DeleteCrudEngine<
// entity (1)
CountryEntity,

// soft_delete (4)
CountrySoftDeleteDto,
CountrySoftDeleteInputWhereDto,
CountrySoftDeleteInputDto,
CountrySoftDeleteOutputDto,

// delete (4)
CountryDeleteDto,
CountryDeleteInputWhereDto,
CountryDeleteInputDto,
CountryDeleteOutputDto,

// restore (4)
CountryRestoreDto,
CountryRestoreInputWhereDto,
CountryRestoreInputDto,
CountryRestoreOutputDto
>;

// ████████ UpsertCrudEngine ████████████████████████████████████████
public declare readonly upsertEngine: UpsertCrudEngine<
// entity (1)
CountryEntity,

// upsert (3)
CountryUpsertDto,
CountryUpsertInputDto,
CountryUpsertOutputDto
>;

// ████████ RemoveCrudEngine ████████████████████████████████████████
public declare readonly removeEngine: RemoveCrudEngine<
// entity (1)
CountryEntity,

// soft_remove (5)
CountrySoftRemoveDto,
CountrySoftRemoveInputWhereDto,
CountrySoftRemoveInputDto,
CountrySoftRemoveOutputAffectedRowsDto,
CountrySoftRemoveOutputDto,

// remove (4)
CountryRemoveDto,
CountryRemoveInputWhereDto,
CountryRemoveInputDto,
CountryRemoveOutputAffectedRowsDto,
CountryRemoveOutputDto,

// recover (5)
CountryRecoverDto,
CountryRecoverInputWhereDto,
CountryRecoverInputDto,
CountryRecoverOutputAffectedRowsDto,
CountryRecoverOutputDto
>;

// ████████ UploadCrudEngine ████████████████████████████████████████
public declare readonly uploadEngine: UploadCrudEngine<
// entity (1)
CountryEntity,

// upload (3)
CountryUploadDto,
CountryUploadInputDto,
CountryUploadOutputDto,

// upload_delete (3)
CountryUploadDeleteDto,
CountryUploadDeleteInputDto,
CountryUploadDeleteOutputDto
>;

constructor(
// data source
protected readonly dataSource: DataSource,

@InjectRepository(CountryEntity)
protected readonly repository: Repository<CountryEntity>,

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
    CountryEntity,
);

this.logService.setContext(CountryFactory.name);

// ████████ initialize FindCrudEngine ██████████████████████████████████████
this.initFindEngine
<
// find (8)
CountryFindDto,
CountryFindInputWhereDto,
CountryFindInputSortOrderDto,
CountryFindInputGroupByDto,
CountryFindInputDto,
CountryFindOutputRowsDto,
FindOutputPaginationDto,
CountryFindOutputDto,

// find_one_by_id (2)
CountryFindOneByIdDto,
CountryFindOneByIdInputDto
>
(
// find (8)
CountryFindDto,
CountryFindInputWhereDto,
CountryFindInputSortOrderDto,
CountryFindInputGroupByDto,
CountryFindInputDto,
CountryFindOutputRowsDto,
FindOutputPaginationDto,
CountryFindOutputDto,

// find_one_by_id (2)
CountryFindOneByIdDto,
CountryFindOneByIdInputDto
);


// ████████ initialize CreateCrudEngine ███████████████████████████████████████
this.initCreateEngine
<
// create (3)
CountryCreateDto,
CountryCreateInputDto,
CountryCreateOutputDto
>
(
// create (3)
CountryCreateDto,
CountryCreateInputDto,
CountryCreateOutputDto
);

// ████████ initialize UpdateCrudEngine ████████████████████████████████████████
this.initUpdateEngine
<
// update (6)
CountryUpdateDto,
CountryUpdateInputWhereDto,
CountryUpdateInputSetsDto,
CountryUpdateInputDto,
CountryUpdateOutputAffectedRowsDto,
CountryUpdateOutputDto
>
(
// update (6)
CountryUpdateDto,
CountryUpdateInputWhereDto,
CountryUpdateInputSetsDto,
CountryUpdateInputDto,
CountryUpdateOutputAffectedRowsDto,
CountryUpdateOutputDto
);


// ████████ initialize DeleteCrudEngine ███████████████████████████████████████████
this.initDeleteEngine
<
// soft_delete (4)
CountrySoftDeleteDto,
CountrySoftDeleteInputWhereDto,
CountrySoftDeleteInputDto,
CountrySoftDeleteOutputDto,

// delete (4)
CountryDeleteDto,
CountryDeleteInputWhereDto,
CountryDeleteInputDto,
CountryDeleteOutputDto,

// restore (4)
CountryRestoreDto,
CountryRestoreInputWhereDto,
CountryRestoreInputDto,
CountryRestoreOutputDto
>
(
// soft_delete (4)
CountrySoftDeleteDto,
CountrySoftDeleteInputWhereDto,
CountrySoftDeleteInputDto,
CountrySoftDeleteOutputDto,

// delete (4)
CountryDeleteDto,
CountryDeleteInputWhereDto,
CountryDeleteInputDto,
CountryDeleteOutputDto,

// restore (4)
CountryRestoreDto,
CountryRestoreInputWhereDto,
CountryRestoreInputDto,
CountryRestoreOutputDto
);



// ████████ initialize UpsertCrudEngine ███████████████████████████████████████████
this.initUpsertEngine
<
// upsert (3)
CountryUpsertDto,
CountryUpsertInputDto,
CountryUpsertOutputDto
>
(
// upsert (3)
CountryUpsertDto,
CountryUpsertInputDto,
CountryUpsertOutputDto
);




// ████████ initialize RemoveCrudEngine ███████████████████████████████████████████
this.initRemoveEngine
<
// soft_remove (5)
CountrySoftRemoveDto,
CountrySoftRemoveInputWhereDto,
CountrySoftRemoveInputDto,
CountrySoftRemoveOutputAffectedRowsDto,
CountrySoftRemoveOutputDto,

// remove (4)
CountryRemoveDto,
CountryRemoveInputWhereDto,
CountryRemoveInputDto,
CountryRemoveOutputAffectedRowsDto,
CountryRemoveOutputDto,

// recover (5)
CountryRecoverDto,
CountryRecoverInputWhereDto,
CountryRecoverInputDto,
CountryRecoverOutputAffectedRowsDto,
CountryRecoverOutputDto
>
(
// soft_remove (5)
CountrySoftRemoveDto,
CountrySoftRemoveInputWhereDto,
CountrySoftRemoveInputDto,
CountrySoftRemoveOutputAffectedRowsDto,
CountrySoftRemoveOutputDto,

// remove (4)
CountryRemoveDto,
CountryRemoveInputWhereDto,
CountryRemoveInputDto,
CountryRemoveOutputAffectedRowsDto,
CountryRemoveOutputDto,

// recover (5)
CountryRecoverDto,
CountryRecoverInputWhereDto,
CountryRecoverInputDto,
CountryRecoverOutputAffectedRowsDto,
CountryRecoverOutputDto
);



// ████████ initialize UploadCrudEngine ███████████████████████████████████████████
this.initUploadEngine
<
// upload (3)
CountryUploadDto,
CountryUploadInputDto,
CountryUploadOutputDto,

// upload_delete (3)
CountryUploadDeleteDto,
CountryUploadDeleteInputDto,
CountryUploadDeleteOutputDto
>
(
// upload (3)
CountryUploadDto,
CountryUploadInputDto,
CountryUploadOutputDto,

// upload_delete (3)
CountryUploadDeleteDto,
CountryUploadDeleteInputDto,
CountryUploadDeleteOutputDto
);


// ████████ initialize ImportExportCrudEngine █████████████████████████████████████

}

}