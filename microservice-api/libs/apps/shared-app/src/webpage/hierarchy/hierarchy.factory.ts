import { WebPageHierarchyEntity } from "./entities/page.hierarchy.entity";
import { Injectable } from "@nestjs/common";
import { DataSource, Repository } from "typeorm";
import { InjectRepository } from "@nestjs/typeorm";
import { ConfService, CreateCrudEngine, CrudFactory, DataValidationPipe, DeleteCrudEngine, FindCrudEngine, FindOutputPaginationDto, LibraryAppService, LogService, RemoveCrudEngine, UpdateCrudEngine, UploadCrudEngine, UpsertCrudEngine } from "@libs/library-app";
import { SelfGraphqlMicroserviceService } from '@libs/dynamic-app';
import { WebPageHierarchyCreateDto, WebPageHierarchyCreateInputDto, WebPageHierarchyCreateOutputDto, WebPageHierarchyDeleteDto, WebPageHierarchyDeleteInputDto, WebPageHierarchyDeleteInputWhereDto, WebPageHierarchyDeleteOutputDto, WebPageHierarchyFindDto, WebPageHierarchyFindInputDto, WebPageHierarchyFindInputGroupByDto, WebPageHierarchyFindInputSortOrderDto, WebPageHierarchyFindInputWhereDto, WebPageHierarchyFindOneByIdDto, WebPageHierarchyFindOneByIdInputDto, WebPageHierarchyFindOutputDto, WebPageHierarchyFindOutputRowsDto, WebPageHierarchyRecoverDto, WebPageHierarchyRecoverInputDto, WebPageHierarchyRecoverInputWhereDto, WebPageHierarchyRecoverOutputDto, WebPageHierarchyRecoverOutputAffectedRowsDto, WebPageHierarchyRemoveDto, WebPageHierarchyRemoveInputDto, WebPageHierarchyRemoveInputWhereDto, WebPageHierarchyRemoveOutputDto, WebPageHierarchyRemoveOutputAffectedRowsDto, WebPageHierarchyRestoreDto, WebPageHierarchyRestoreInputDto, WebPageHierarchyRestoreInputWhereDto, WebPageHierarchyRestoreOutputDto, WebPageHierarchySoftDeleteDto, WebPageHierarchySoftDeleteInputDto, WebPageHierarchySoftDeleteInputWhereDto, WebPageHierarchySoftDeleteOutputDto, WebPageHierarchySoftRemoveDto, WebPageHierarchySoftRemoveInputDto, WebPageHierarchySoftRemoveInputWhereDto, WebPageHierarchySoftRemoveOutputDto, WebPageHierarchySoftRemoveOutputAffectedRowsDto, WebPageHierarchyUpdateDto, WebPageHierarchyUpdateInputDto, WebPageHierarchyUpdateInputSetsDto, WebPageHierarchyUpdateInputWhereDto, WebPageHierarchyUpdateOutputDto, WebPageHierarchyUpdateOutputAffectedRowsDto, WebPageHierarchyUploadDeleteDto, WebPageHierarchyUploadDeleteInputDto, WebPageHierarchyUploadDeleteOutputDto, WebPageHierarchyUploadDto, WebPageHierarchyUploadInputDto, WebPageHierarchyUploadOutputDto, WebPageHierarchyUpsertDto, WebPageHierarchyUpsertInputDto, WebPageHierarchyUpsertOutputDto } from "./dto/hierarchy.dto";

@Injectable()
export class WebPageHierarchyFactory extends CrudFactory<WebPageHierarchyEntity> {

// ████████ FindCrudEngine ████████████████████████████████████████
public declare readonly findEngine: FindCrudEngine<
// entity (1)
WebPageHierarchyEntity,

// find (8)
WebPageHierarchyFindDto,
WebPageHierarchyFindInputWhereDto,
WebPageHierarchyFindInputSortOrderDto,
WebPageHierarchyFindInputGroupByDto,
WebPageHierarchyFindInputDto,
WebPageHierarchyFindOutputRowsDto,
FindOutputPaginationDto,
WebPageHierarchyFindOutputDto,

// find_one_by_id (2)
WebPageHierarchyFindOneByIdDto,
WebPageHierarchyFindOneByIdInputDto
>;

// ████████ CreateCrudEngine ████████████████████████████████████████
public declare readonly createEngine: CreateCrudEngine<
// entity (1)
WebPageHierarchyEntity,

// create (3)
WebPageHierarchyCreateDto,
WebPageHierarchyCreateInputDto,
WebPageHierarchyCreateOutputDto
>;

// ████████ UpdateCrudEngine ████████████████████████████████████████
public declare readonly updateEngine: UpdateCrudEngine<
// entity (1)
WebPageHierarchyEntity,

// update (6)
WebPageHierarchyUpdateDto,
WebPageHierarchyUpdateInputWhereDto,
WebPageHierarchyUpdateInputSetsDto,
WebPageHierarchyUpdateInputDto,
WebPageHierarchyUpdateOutputAffectedRowsDto,
WebPageHierarchyUpdateOutputDto
>;

// ████████ DeleteCrudEngine ████████████████████████████████████████
public declare readonly deleteEngine: DeleteCrudEngine<
// entity (1)
WebPageHierarchyEntity,

// soft_delete (4)
WebPageHierarchySoftDeleteDto,
WebPageHierarchySoftDeleteInputWhereDto,
WebPageHierarchySoftDeleteInputDto,
WebPageHierarchySoftDeleteOutputDto,

// delete (4)
WebPageHierarchyDeleteDto,
WebPageHierarchyDeleteInputWhereDto,
WebPageHierarchyDeleteInputDto,
WebPageHierarchyDeleteOutputDto,

// restore (4)
WebPageHierarchyRestoreDto,
WebPageHierarchyRestoreInputWhereDto,
WebPageHierarchyRestoreInputDto,
WebPageHierarchyRestoreOutputDto
>;

// ████████ UpsertCrudEngine ████████████████████████████████████████
public declare readonly upsertEngine: UpsertCrudEngine<
// entity (1)
WebPageHierarchyEntity,

// upsert (3)
WebPageHierarchyUpsertDto,
WebPageHierarchyUpsertInputDto,
WebPageHierarchyUpsertOutputDto
>;

// ████████ RemoveCrudEngine ████████████████████████████████████████
public declare readonly removeEngine: RemoveCrudEngine<
// entity (1)
WebPageHierarchyEntity,

// soft_remove (5)
WebPageHierarchySoftRemoveDto,
WebPageHierarchySoftRemoveInputWhereDto,
WebPageHierarchySoftRemoveInputDto,
WebPageHierarchySoftRemoveOutputAffectedRowsDto,
WebPageHierarchySoftRemoveOutputDto,

// remove (4)
WebPageHierarchyRemoveDto,
WebPageHierarchyRemoveInputWhereDto,
WebPageHierarchyRemoveInputDto,
WebPageHierarchyRemoveOutputAffectedRowsDto,
WebPageHierarchyRemoveOutputDto,

// recover (5)
WebPageHierarchyRecoverDto,
WebPageHierarchyRecoverInputWhereDto,
WebPageHierarchyRecoverInputDto,
WebPageHierarchyRecoverOutputAffectedRowsDto,
WebPageHierarchyRecoverOutputDto
>;

// ████████ UploadCrudEngine ████████████████████████████████████████
public declare readonly uploadEngine: UploadCrudEngine<
// entity (1)
WebPageHierarchyEntity,

// upload (3)
WebPageHierarchyUploadDto,
WebPageHierarchyUploadInputDto,
WebPageHierarchyUploadOutputDto,

// upload_delete (3)
WebPageHierarchyUploadDeleteDto,
WebPageHierarchyUploadDeleteInputDto,
WebPageHierarchyUploadDeleteOutputDto
>;

constructor(
// data source
protected readonly dataSource: DataSource,

@InjectRepository(WebPageHierarchyEntity)
protected readonly repository: Repository<WebPageHierarchyEntity>,

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
    WebPageHierarchyEntity,
);

this.logService.setContext(WebPageHierarchyFactory.name);

// ████████ initialize FindCrudEngine ██████████████████████████████████████
this.initFindEngine
<
// find (8)
WebPageHierarchyFindDto,
WebPageHierarchyFindInputWhereDto,
WebPageHierarchyFindInputSortOrderDto,
WebPageHierarchyFindInputGroupByDto,
WebPageHierarchyFindInputDto,
WebPageHierarchyFindOutputRowsDto,
FindOutputPaginationDto,
WebPageHierarchyFindOutputDto,

// find_one_by_id (2)
WebPageHierarchyFindOneByIdDto,
WebPageHierarchyFindOneByIdInputDto
>
(
// find (8)
WebPageHierarchyFindDto,
WebPageHierarchyFindInputWhereDto,
WebPageHierarchyFindInputSortOrderDto,
WebPageHierarchyFindInputGroupByDto,
WebPageHierarchyFindInputDto,
WebPageHierarchyFindOutputRowsDto,
FindOutputPaginationDto,
WebPageHierarchyFindOutputDto,

// find_one_by_id (2)
WebPageHierarchyFindOneByIdDto,
WebPageHierarchyFindOneByIdInputDto
);


// ████████ initialize CreateCrudEngine ███████████████████████████████████████
this.initCreateEngine
<
// create (3)
WebPageHierarchyCreateDto,
WebPageHierarchyCreateInputDto,
WebPageHierarchyCreateOutputDto
>
(
// create (3)
WebPageHierarchyCreateDto,
WebPageHierarchyCreateInputDto,
WebPageHierarchyCreateOutputDto
);

// ████████ initialize UpdateCrudEngine ████████████████████████████████████████
this.initUpdateEngine
<
// update (6)
WebPageHierarchyUpdateDto,
WebPageHierarchyUpdateInputWhereDto,
WebPageHierarchyUpdateInputSetsDto,
WebPageHierarchyUpdateInputDto,
WebPageHierarchyUpdateOutputAffectedRowsDto,
WebPageHierarchyUpdateOutputDto
>
(
// update (6)
WebPageHierarchyUpdateDto,
WebPageHierarchyUpdateInputWhereDto,
WebPageHierarchyUpdateInputSetsDto,
WebPageHierarchyUpdateInputDto,
WebPageHierarchyUpdateOutputAffectedRowsDto,
WebPageHierarchyUpdateOutputDto
);


// ████████ initialize DeleteCrudEngine ███████████████████████████████████████████
this.initDeleteEngine
<
// soft_delete (4)
WebPageHierarchySoftDeleteDto,
WebPageHierarchySoftDeleteInputWhereDto,
WebPageHierarchySoftDeleteInputDto,
WebPageHierarchySoftDeleteOutputDto,

// delete (4)
WebPageHierarchyDeleteDto,
WebPageHierarchyDeleteInputWhereDto,
WebPageHierarchyDeleteInputDto,
WebPageHierarchyDeleteOutputDto,

// restore (4)
WebPageHierarchyRestoreDto,
WebPageHierarchyRestoreInputWhereDto,
WebPageHierarchyRestoreInputDto,
WebPageHierarchyRestoreOutputDto
>
(
// soft_delete (4)
WebPageHierarchySoftDeleteDto,
WebPageHierarchySoftDeleteInputWhereDto,
WebPageHierarchySoftDeleteInputDto,
WebPageHierarchySoftDeleteOutputDto,

// delete (4)
WebPageHierarchyDeleteDto,
WebPageHierarchyDeleteInputWhereDto,
WebPageHierarchyDeleteInputDto,
WebPageHierarchyDeleteOutputDto,

// restore (4)
WebPageHierarchyRestoreDto,
WebPageHierarchyRestoreInputWhereDto,
WebPageHierarchyRestoreInputDto,
WebPageHierarchyRestoreOutputDto
);



// ████████ initialize UpsertCrudEngine ███████████████████████████████████████████
this.initUpsertEngine
<
// upsert (3)
WebPageHierarchyUpsertDto,
WebPageHierarchyUpsertInputDto,
WebPageHierarchyUpsertOutputDto
>
(
// upsert (3)
WebPageHierarchyUpsertDto,
WebPageHierarchyUpsertInputDto,
WebPageHierarchyUpsertOutputDto
);




// ████████ initialize RemoveCrudEngine ███████████████████████████████████████████
this.initRemoveEngine
<
// soft_remove (5)
WebPageHierarchySoftRemoveDto,
WebPageHierarchySoftRemoveInputWhereDto,
WebPageHierarchySoftRemoveInputDto,
WebPageHierarchySoftRemoveOutputAffectedRowsDto,
WebPageHierarchySoftRemoveOutputDto,

// remove (4)
WebPageHierarchyRemoveDto,
WebPageHierarchyRemoveInputWhereDto,
WebPageHierarchyRemoveInputDto,
WebPageHierarchyRemoveOutputAffectedRowsDto,
WebPageHierarchyRemoveOutputDto,

// recover (5)
WebPageHierarchyRecoverDto,
WebPageHierarchyRecoverInputWhereDto,
WebPageHierarchyRecoverInputDto,
WebPageHierarchyRecoverOutputAffectedRowsDto,
WebPageHierarchyRecoverOutputDto
>
(
// soft_remove (5)
WebPageHierarchySoftRemoveDto,
WebPageHierarchySoftRemoveInputWhereDto,
WebPageHierarchySoftRemoveInputDto,
WebPageHierarchySoftRemoveOutputAffectedRowsDto,
WebPageHierarchySoftRemoveOutputDto,

// remove (4)
WebPageHierarchyRemoveDto,
WebPageHierarchyRemoveInputWhereDto,
WebPageHierarchyRemoveInputDto,
WebPageHierarchyRemoveOutputAffectedRowsDto,
WebPageHierarchyRemoveOutputDto,

// recover (5)
WebPageHierarchyRecoverDto,
WebPageHierarchyRecoverInputWhereDto,
WebPageHierarchyRecoverInputDto,
WebPageHierarchyRecoverOutputAffectedRowsDto,
WebPageHierarchyRecoverOutputDto
);



// ████████ initialize UploadCrudEngine ███████████████████████████████████████████
this.initUploadEngine
<
// upload (3)
WebPageHierarchyUploadDto,
WebPageHierarchyUploadInputDto,
WebPageHierarchyUploadOutputDto,

// upload_delete (3)
WebPageHierarchyUploadDeleteDto,
WebPageHierarchyUploadDeleteInputDto,
WebPageHierarchyUploadDeleteOutputDto
>
(
// upload (3)
WebPageHierarchyUploadDto,
WebPageHierarchyUploadInputDto,
WebPageHierarchyUploadOutputDto,

// upload_delete (3)
WebPageHierarchyUploadDeleteDto,
WebPageHierarchyUploadDeleteInputDto,
WebPageHierarchyUploadDeleteOutputDto
);


// ████████ initialize ImportExportCrudEngine █████████████████████████████████████

}

}