 import { CountryLanguageEntity } from "./entities/country.language.entity";
 import { Injectable } from "@nestjs/common";
 import { DataSource, Repository } from "typeorm";
 import { InjectRepository } from "@nestjs/typeorm";
 import { ConfService, CreateCrudEngine, CrudFactory, DataValidationPipe, DeleteCrudEngine, FindCrudEngine, FindOutputPaginationDto, LibraryAppService, LogService, RemoveCrudEngine, UpdateCrudEngine, UploadCrudEngine, UpsertCrudEngine } from "@libs/library-app";
 import { CountryLanguageCreateDto, CountryLanguageCreateInputDto, CountryLanguageCreateOutputDto, CountryLanguageDeleteDto, CountryLanguageDeleteInputDto, CountryLanguageDeleteInputWhereDto, CountryLanguageDeleteOutputDto, CountryLanguageFindDto, CountryLanguageFindInputDto, CountryLanguageFindInputGroupByDto, CountryLanguageFindInputSortOrderDto, CountryLanguageFindInputWhereDto, CountryLanguageFindOneByIdDto, CountryLanguageFindOneByIdInputDto, CountryLanguageFindOutputDto, CountryLanguageFindOutputRowsDto, CountryLanguageRecoverDto, CountryLanguageRecoverInputDto, CountryLanguageRecoverInputWhereDto, CountryLanguageRecoverOutputDto, CountryLanguageRecoverOutputAffectedRowsDto, CountryLanguageRemoveDto, CountryLanguageRemoveInputDto, CountryLanguageRemoveInputWhereDto, CountryLanguageRemoveOutputDto, CountryLanguageRemoveOutputAffectedRowsDto, CountryLanguageRestoreDto, CountryLanguageRestoreInputDto, CountryLanguageRestoreInputWhereDto, CountryLanguageRestoreOutputDto, CountryLanguageSoftDeleteDto, CountryLanguageSoftDeleteInputDto, CountryLanguageSoftDeleteInputWhereDto, CountryLanguageSoftDeleteOutputDto, CountryLanguageSoftRemoveDto, CountryLanguageSoftRemoveInputDto, CountryLanguageSoftRemoveInputWhereDto, CountryLanguageSoftRemoveOutputDto, CountryLanguageSoftRemoveOutputAffectedRowsDto, CountryLanguageUpdateDto, CountryLanguageUpdateInputDto, CountryLanguageUpdateInputSetsDto, CountryLanguageUpdateInputWhereDto, CountryLanguageUpdateOutputDto, CountryLanguageUpdateOutputAffectedRowsDto, CountryLanguageUploadDeleteDto, CountryLanguageUploadDeleteInputDto, CountryLanguageUploadDeleteOutputDto, CountryLanguageUploadDto, CountryLanguageUploadInputDto, CountryLanguageUploadOutputDto, CountryLanguageUpsertDto, CountryLanguageUpsertInputDto, CountryLanguageUpsertOutputDto } from "./dto/country.language.dto";
 import { SelfGraphqlMicroserviceService } from "@libs/dynamic-app";
 
 @Injectable()
 export class CountryLanguageFactory extends CrudFactory<CountryLanguageEntity> {
 
 // ████████ FindCrudEngine ████████████████████████████████████████
 public declare readonly findEngine: FindCrudEngine<
 // entity (1)
 CountryLanguageEntity,
 
 // find (8)
 CountryLanguageFindDto,
 CountryLanguageFindInputWhereDto,
 CountryLanguageFindInputSortOrderDto,
 CountryLanguageFindInputGroupByDto,
 CountryLanguageFindInputDto,
 CountryLanguageFindOutputRowsDto,
 FindOutputPaginationDto,
 CountryLanguageFindOutputDto,
 
 // find_one_by_id (2)
 CountryLanguageFindOneByIdDto,
 CountryLanguageFindOneByIdInputDto
 >;
 
 // ████████ CreateCrudEngine ████████████████████████████████████████
 public declare readonly createEngine: CreateCrudEngine<
 // entity (1)
 CountryLanguageEntity,
 
 // create (3)
 CountryLanguageCreateDto,
 CountryLanguageCreateInputDto,
 CountryLanguageCreateOutputDto
 >;
 
 // ████████ UpdateCrudEngine ████████████████████████████████████████
 public declare readonly updateEngine: UpdateCrudEngine<
 // entity (1)
 CountryLanguageEntity,
 
 // update (6)
 CountryLanguageUpdateDto,
 CountryLanguageUpdateInputWhereDto,
 CountryLanguageUpdateInputSetsDto,
 CountryLanguageUpdateInputDto,
 CountryLanguageUpdateOutputAffectedRowsDto,
 CountryLanguageUpdateOutputDto
 >;
 
 // ████████ DeleteCrudEngine ████████████████████████████████████████
 public declare readonly deleteEngine: DeleteCrudEngine<
 // entity (1)
 CountryLanguageEntity,
 
 // soft_delete (4)
 CountryLanguageSoftDeleteDto,
 CountryLanguageSoftDeleteInputWhereDto,
 CountryLanguageSoftDeleteInputDto,
 CountryLanguageSoftDeleteOutputDto,
 
 // delete (4)
 CountryLanguageDeleteDto,
 CountryLanguageDeleteInputWhereDto,
 CountryLanguageDeleteInputDto,
 CountryLanguageDeleteOutputDto,
 
 // restore (4)
 CountryLanguageRestoreDto,
 CountryLanguageRestoreInputWhereDto,
 CountryLanguageRestoreInputDto,
 CountryLanguageRestoreOutputDto
 >;
 
 // ████████ UpsertCrudEngine ████████████████████████████████████████
 public declare readonly upsertEngine: UpsertCrudEngine<
 // entity (1)
 CountryLanguageEntity,
 
 // upsert (3)
 CountryLanguageUpsertDto,
 CountryLanguageUpsertInputDto,
 CountryLanguageUpsertOutputDto
 >;
 
 // ████████ RemoveCrudEngine ████████████████████████████████████████
 public declare readonly removeEngine: RemoveCrudEngine<
 // entity (1)
 CountryLanguageEntity,
 
 // soft_remove (5)
 CountryLanguageSoftRemoveDto,
 CountryLanguageSoftRemoveInputWhereDto,
 CountryLanguageSoftRemoveInputDto,
 CountryLanguageSoftRemoveOutputAffectedRowsDto,
 CountryLanguageSoftRemoveOutputDto,
 
 // remove (4)
 CountryLanguageRemoveDto,
 CountryLanguageRemoveInputWhereDto,
 CountryLanguageRemoveInputDto,
 CountryLanguageRemoveOutputAffectedRowsDto,
 CountryLanguageRemoveOutputDto,
 
 // recover (5)
 CountryLanguageRecoverDto,
 CountryLanguageRecoverInputWhereDto,
 CountryLanguageRecoverInputDto,
 CountryLanguageRecoverOutputAffectedRowsDto,
 CountryLanguageRecoverOutputDto
 >;
 
 // ████████ UploadCrudEngine ████████████████████████████████████████
 public declare readonly uploadEngine: UploadCrudEngine<
 // entity (1)
 CountryLanguageEntity,
 
 // upload (3)
 CountryLanguageUploadDto,
 CountryLanguageUploadInputDto,
 CountryLanguageUploadOutputDto,
 
 // upload_delete (3)
 CountryLanguageUploadDeleteDto,
 CountryLanguageUploadDeleteInputDto,
 CountryLanguageUploadDeleteOutputDto
 >;
 
 constructor(
 // data source
 protected readonly dataSource: DataSource,
 
 @InjectRepository(CountryLanguageEntity)
 protected readonly repository: Repository<CountryLanguageEntity>,
 
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
     CountryLanguageEntity,
 );
 
 this.logService.setContext(CountryLanguageFactory.name);
 
 // ████████ initialize FindCrudEngine ██████████████████████████████████████
 this.initFindEngine
 <
 // find (8)
 CountryLanguageFindDto,
 CountryLanguageFindInputWhereDto,
 CountryLanguageFindInputSortOrderDto,
 CountryLanguageFindInputGroupByDto,
 CountryLanguageFindInputDto,
 CountryLanguageFindOutputRowsDto,
 FindOutputPaginationDto,
 CountryLanguageFindOutputDto,
 
 // find_one_by_id (2)
 CountryLanguageFindOneByIdDto,
 CountryLanguageFindOneByIdInputDto
 >
 (
 // find (8)
 CountryLanguageFindDto,
 CountryLanguageFindInputWhereDto,
 CountryLanguageFindInputSortOrderDto,
 CountryLanguageFindInputGroupByDto,
 CountryLanguageFindInputDto,
 CountryLanguageFindOutputRowsDto,
 FindOutputPaginationDto,
 CountryLanguageFindOutputDto,
 
 // find_one_by_id (2)
 CountryLanguageFindOneByIdDto,
 CountryLanguageFindOneByIdInputDto
 );
 
 
 // ████████ initialize CreateCrudEngine ███████████████████████████████████████
 this.initCreateEngine
 <
 // create (3)
 CountryLanguageCreateDto,
 CountryLanguageCreateInputDto,
 CountryLanguageCreateOutputDto
 >
 (
 // create (3)
 CountryLanguageCreateDto,
 CountryLanguageCreateInputDto,
 CountryLanguageCreateOutputDto
 );
 
 // ████████ initialize UpdateCrudEngine ████████████████████████████████████████
 this.initUpdateEngine
 <
 // update (6)
 CountryLanguageUpdateDto,
 CountryLanguageUpdateInputWhereDto,
 CountryLanguageUpdateInputSetsDto,
 CountryLanguageUpdateInputDto,
 CountryLanguageUpdateOutputAffectedRowsDto,
 CountryLanguageUpdateOutputDto
 >
 (
 // update (6)
 CountryLanguageUpdateDto,
 CountryLanguageUpdateInputWhereDto,
 CountryLanguageUpdateInputSetsDto,
 CountryLanguageUpdateInputDto,
 CountryLanguageUpdateOutputAffectedRowsDto,
 CountryLanguageUpdateOutputDto
 );
 
 
 // ████████ initialize DeleteCrudEngine ███████████████████████████████████████████
 this.initDeleteEngine
 <
 // soft_delete (4)
 CountryLanguageSoftDeleteDto,
 CountryLanguageSoftDeleteInputWhereDto,
 CountryLanguageSoftDeleteInputDto,
 CountryLanguageSoftDeleteOutputDto,
 
 // delete (4)
 CountryLanguageDeleteDto,
 CountryLanguageDeleteInputWhereDto,
 CountryLanguageDeleteInputDto,
 CountryLanguageDeleteOutputDto,
 
 // restore (4)
 CountryLanguageRestoreDto,
 CountryLanguageRestoreInputWhereDto,
 CountryLanguageRestoreInputDto,
 CountryLanguageRestoreOutputDto
 >
 (
 // soft_delete (4)
 CountryLanguageSoftDeleteDto,
 CountryLanguageSoftDeleteInputWhereDto,
 CountryLanguageSoftDeleteInputDto,
 CountryLanguageSoftDeleteOutputDto,
 
 // delete (4)
 CountryLanguageDeleteDto,
 CountryLanguageDeleteInputWhereDto,
 CountryLanguageDeleteInputDto,
 CountryLanguageDeleteOutputDto,
 
 // restore (4)
 CountryLanguageRestoreDto,
 CountryLanguageRestoreInputWhereDto,
 CountryLanguageRestoreInputDto,
 CountryLanguageRestoreOutputDto
 );
 
 
 
 // ████████ initialize UpsertCrudEngine ███████████████████████████████████████████
 this.initUpsertEngine
 <
 // upsert (3)
 CountryLanguageUpsertDto,
 CountryLanguageUpsertInputDto,
 CountryLanguageUpsertOutputDto
 >
 (
 // upsert (3)
 CountryLanguageUpsertDto,
 CountryLanguageUpsertInputDto,
 CountryLanguageUpsertOutputDto
 );
 
 
 
 
 // ████████ initialize RemoveCrudEngine ███████████████████████████████████████████
 this.initRemoveEngine
 <
 // soft_remove (5)
 CountryLanguageSoftRemoveDto,
 CountryLanguageSoftRemoveInputWhereDto,
 CountryLanguageSoftRemoveInputDto,
 CountryLanguageSoftRemoveOutputAffectedRowsDto,
 CountryLanguageSoftRemoveOutputDto,
 
 // remove (4)
 CountryLanguageRemoveDto,
 CountryLanguageRemoveInputWhereDto,
 CountryLanguageRemoveInputDto,
 CountryLanguageRemoveOutputAffectedRowsDto,
 CountryLanguageRemoveOutputDto,
 
 // recover (5)
 CountryLanguageRecoverDto,
 CountryLanguageRecoverInputWhereDto,
 CountryLanguageRecoverInputDto,
 CountryLanguageRecoverOutputAffectedRowsDto,
 CountryLanguageRecoverOutputDto
 >
 (
 // soft_remove (5)
 CountryLanguageSoftRemoveDto,
 CountryLanguageSoftRemoveInputWhereDto,
 CountryLanguageSoftRemoveInputDto,
 CountryLanguageSoftRemoveOutputAffectedRowsDto,
 CountryLanguageSoftRemoveOutputDto,
 
 // remove (4)
 CountryLanguageRemoveDto,
 CountryLanguageRemoveInputWhereDto,
 CountryLanguageRemoveInputDto,
 CountryLanguageRemoveOutputAffectedRowsDto,
 CountryLanguageRemoveOutputDto,
 
 // recover (5)
 CountryLanguageRecoverDto,
 CountryLanguageRecoverInputWhereDto,
 CountryLanguageRecoverInputDto,
 CountryLanguageRecoverOutputAffectedRowsDto,
 CountryLanguageRecoverOutputDto
 );
 
 
 
 // ████████ initialize UploadCrudEngine ███████████████████████████████████████████
 this.initUploadEngine
 <
 // upload (3)
 CountryLanguageUploadDto,
 CountryLanguageUploadInputDto,
 CountryLanguageUploadOutputDto,
 
 // upload_delete (3)
 CountryLanguageUploadDeleteDto,
 CountryLanguageUploadDeleteInputDto,
 CountryLanguageUploadDeleteOutputDto
 >
 (
 // upload (3)
 CountryLanguageUploadDto,
 CountryLanguageUploadInputDto,
 CountryLanguageUploadOutputDto,
 
 // upload_delete (3)
 CountryLanguageUploadDeleteDto,
 CountryLanguageUploadDeleteInputDto,
 CountryLanguageUploadDeleteOutputDto
 );
 
 
 // ████████ initialize ImportExportCrudEngine █████████████████████████████████████
 
 }
 
 }