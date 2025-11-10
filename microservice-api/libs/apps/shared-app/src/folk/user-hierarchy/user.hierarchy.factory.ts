import { UserHierarchyEntity } from "./entities/user.hierarchy.entity";
import { Injectable } from "@nestjs/common";
import { DataSource, Repository } from "typeorm";
import { InjectRepository } from "@nestjs/typeorm";
import { ConfService, CreateCrudEngine, CrudFactory, DataValidationPipe, DeleteCrudEngine, FindCrudEngine, FindOutputPaginationDto, LibraryAppService, LogService, RemoveCrudEngine, UpdateCrudEngine, UploadCrudEngine, UpsertCrudEngine } from "@libs/library-app";
import { SelfGraphqlMicroserviceService } from "@libs/dynamic-app";
import { UserHierarchyCreateDto, UserHierarchyCreateInputDto, UserHierarchyCreateOutputDto, UserHierarchyDeleteDto, UserHierarchyDeleteInputDto, UserHierarchyDeleteInputWhereDto, UserHierarchyDeleteOutputDto, UserHierarchyFindDto, UserHierarchyFindInputDto, UserHierarchyFindInputGroupByDto, UserHierarchyFindInputSortOrderDto, UserHierarchyFindInputWhereDto, UserHierarchyFindOneByIdDto, UserHierarchyFindOneByIdInputDto, UserHierarchyFindOutputDto, UserHierarchyFindOutputRowsDto, UserHierarchyRecoverDto, UserHierarchyRecoverInputDto, UserHierarchyRecoverInputWhereDto, UserHierarchyRecoverOutputDto, UserHierarchyRecoverOutputAffectedRowsDto, UserHierarchyRemoveDto, UserHierarchyRemoveInputDto, UserHierarchyRemoveInputWhereDto, UserHierarchyRemoveOutputDto, UserHierarchyRemoveOutputAffectedRowsDto, UserHierarchyRestoreDto, UserHierarchyRestoreInputDto, UserHierarchyRestoreInputWhereDto, UserHierarchyRestoreOutputDto, UserHierarchySoftDeleteDto, UserHierarchySoftDeleteInputDto, UserHierarchySoftDeleteInputWhereDto, UserHierarchySoftDeleteOutputDto, UserHierarchySoftRemoveDto, UserHierarchySoftRemoveInputDto, UserHierarchySoftRemoveInputWhereDto, UserHierarchySoftRemoveOutputDto, UserHierarchySoftRemoveOutputAffectedRowsDto, UserHierarchyUpdateDto, UserHierarchyUpdateInputDto, UserHierarchyUpdateInputSetsDto, UserHierarchyUpdateInputWhereDto, UserHierarchyUpdateOutputDto, UserHierarchyUpdateOutputAffectedRowsDto, UserHierarchyUploadDeleteDto, UserHierarchyUploadDeleteInputDto, UserHierarchyUploadDeleteOutputDto, UserHierarchyUploadDto, UserHierarchyUploadInputDto, UserHierarchyUploadOutputDto, UserHierarchyUpsertDto, UserHierarchyUpsertInputDto, UserHierarchyUpsertOutputDto } from "./dto/user.hierarchy.dto";

@Injectable()
export class UserHierarchyFactory extends CrudFactory<UserHierarchyEntity> {

// ████████ FindCrudEngine ████████████████████████████████████████
public declare readonly findEngine: FindCrudEngine<
// entity (1)
UserHierarchyEntity,

// find (8)
UserHierarchyFindDto,
UserHierarchyFindInputWhereDto,
UserHierarchyFindInputSortOrderDto,
UserHierarchyFindInputGroupByDto,
UserHierarchyFindInputDto,
UserHierarchyFindOutputRowsDto,
FindOutputPaginationDto,
UserHierarchyFindOutputDto,

// find_one_by_id (2)
UserHierarchyFindOneByIdDto,
UserHierarchyFindOneByIdInputDto
>;

// ████████ CreateCrudEngine ████████████████████████████████████████
public declare readonly createEngine: CreateCrudEngine<
// entity (1)
UserHierarchyEntity,

// create (3)
UserHierarchyCreateDto,
UserHierarchyCreateInputDto,
UserHierarchyCreateOutputDto
>;

// ████████ UpdateCrudEngine ████████████████████████████████████████
public declare readonly updateEngine: UpdateCrudEngine<
// entity (1)
UserHierarchyEntity,

// update (6)
UserHierarchyUpdateDto,
UserHierarchyUpdateInputWhereDto,
UserHierarchyUpdateInputSetsDto,
UserHierarchyUpdateInputDto,
UserHierarchyUpdateOutputAffectedRowsDto,
UserHierarchyUpdateOutputDto
>;

// ████████ DeleteCrudEngine ████████████████████████████████████████
public declare readonly deleteEngine: DeleteCrudEngine<
// entity (1)
UserHierarchyEntity,

// soft_delete (4)
UserHierarchySoftDeleteDto,
UserHierarchySoftDeleteInputWhereDto,
UserHierarchySoftDeleteInputDto,
UserHierarchySoftDeleteOutputDto,

// delete (4)
UserHierarchyDeleteDto,
UserHierarchyDeleteInputWhereDto,
UserHierarchyDeleteInputDto,
UserHierarchyDeleteOutputDto,

// restore (4)
UserHierarchyRestoreDto,
UserHierarchyRestoreInputWhereDto,
UserHierarchyRestoreInputDto,
UserHierarchyRestoreOutputDto
>;

// ████████ UpsertCrudEngine ████████████████████████████████████████
public declare readonly upsertEngine: UpsertCrudEngine<
// entity (1)
UserHierarchyEntity,

// upsert (3)
UserHierarchyUpsertDto,
UserHierarchyUpsertInputDto,
UserHierarchyUpsertOutputDto
>;

// ████████ RemoveCrudEngine ████████████████████████████████████████
public declare readonly removeEngine: RemoveCrudEngine<
// entity (1)
UserHierarchyEntity,

// soft_remove (5)
UserHierarchySoftRemoveDto,
UserHierarchySoftRemoveInputWhereDto,
UserHierarchySoftRemoveInputDto,
UserHierarchySoftRemoveOutputAffectedRowsDto,
UserHierarchySoftRemoveOutputDto,

// remove (4)
UserHierarchyRemoveDto,
UserHierarchyRemoveInputWhereDto,
UserHierarchyRemoveInputDto,
UserHierarchyRemoveOutputAffectedRowsDto,
UserHierarchyRemoveOutputDto,

// recover (5)
UserHierarchyRecoverDto,
UserHierarchyRecoverInputWhereDto,
UserHierarchyRecoverInputDto,
UserHierarchyRecoverOutputAffectedRowsDto,
UserHierarchyRecoverOutputDto
>;

// ████████ UploadCrudEngine ████████████████████████████████████████
public declare readonly uploadEngine: UploadCrudEngine<
// entity (1)
UserHierarchyEntity,

// upload (3)
UserHierarchyUploadDto,
UserHierarchyUploadInputDto,
UserHierarchyUploadOutputDto,

// upload_delete (3)
UserHierarchyUploadDeleteDto,
UserHierarchyUploadDeleteInputDto,
UserHierarchyUploadDeleteOutputDto
>;

constructor(
// data source
protected readonly dataSource: DataSource,

@InjectRepository(UserHierarchyEntity)
protected readonly repository: Repository<UserHierarchyEntity>,

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

    // entity (1)
    UserHierarchyEntity
);

this.logService.setContext(UserHierarchyFactory.name);

// ████████ initialize FindCrudEngine ██████████████████████████████████████
this.initFindEngine
<
// find (8)
UserHierarchyFindDto,
UserHierarchyFindInputWhereDto,
UserHierarchyFindInputSortOrderDto,
UserHierarchyFindInputGroupByDto,
UserHierarchyFindInputDto,
UserHierarchyFindOutputRowsDto,
FindOutputPaginationDto,
UserHierarchyFindOutputDto,

// find_one_by_id (2)
UserHierarchyFindOneByIdDto,
UserHierarchyFindOneByIdInputDto
>
(
// find (8)
UserHierarchyFindDto,
UserHierarchyFindInputWhereDto,
UserHierarchyFindInputSortOrderDto,
UserHierarchyFindInputGroupByDto,
UserHierarchyFindInputDto,
UserHierarchyFindOutputRowsDto,
FindOutputPaginationDto,
UserHierarchyFindOutputDto,

// find_one_by_id (2)
UserHierarchyFindOneByIdDto,
UserHierarchyFindOneByIdInputDto
);


// ████████ initialize CreateCrudEngine ███████████████████████████████████████
this.initCreateEngine
<
// create (3)
UserHierarchyCreateDto,
UserHierarchyCreateInputDto,
UserHierarchyCreateOutputDto
>
(
// create (3)
UserHierarchyCreateDto,
UserHierarchyCreateInputDto,
UserHierarchyCreateOutputDto
);

// ████████ initialize UpdateCrudEngine ████████████████████████████████████████
this.initUpdateEngine
<
// update (6)
UserHierarchyUpdateDto,
UserHierarchyUpdateInputWhereDto,
UserHierarchyUpdateInputSetsDto,
UserHierarchyUpdateInputDto,
UserHierarchyUpdateOutputAffectedRowsDto,
UserHierarchyUpdateOutputDto
>
(
// update (6)
UserHierarchyUpdateDto,
UserHierarchyUpdateInputWhereDto,
UserHierarchyUpdateInputSetsDto,
UserHierarchyUpdateInputDto,
UserHierarchyUpdateOutputAffectedRowsDto,
UserHierarchyUpdateOutputDto
);


// ████████ initialize DeleteCrudEngine ███████████████████████████████████████████
this.initDeleteEngine
<
// soft_delete (4)
UserHierarchySoftDeleteDto,
UserHierarchySoftDeleteInputWhereDto,
UserHierarchySoftDeleteInputDto,
UserHierarchySoftDeleteOutputDto,

// delete (4)
UserHierarchyDeleteDto,
UserHierarchyDeleteInputWhereDto,
UserHierarchyDeleteInputDto,
UserHierarchyDeleteOutputDto,

// restore (4)
UserHierarchyRestoreDto,
UserHierarchyRestoreInputWhereDto,
UserHierarchyRestoreInputDto,
UserHierarchyRestoreOutputDto
>
(
// soft_delete (4)
UserHierarchySoftDeleteDto,
UserHierarchySoftDeleteInputWhereDto,
UserHierarchySoftDeleteInputDto,
UserHierarchySoftDeleteOutputDto,

// delete (4)
UserHierarchyDeleteDto,
UserHierarchyDeleteInputWhereDto,
UserHierarchyDeleteInputDto,
UserHierarchyDeleteOutputDto,

// restore (4)
UserHierarchyRestoreDto,
UserHierarchyRestoreInputWhereDto,
UserHierarchyRestoreInputDto,
UserHierarchyRestoreOutputDto
);



// ████████ initialize UpsertCrudEngine ███████████████████████████████████████████
this.initUpsertEngine
<
// upsert (3)
UserHierarchyUpsertDto,
UserHierarchyUpsertInputDto,
UserHierarchyUpsertOutputDto
>
(
// upsert (3)
UserHierarchyUpsertDto,
UserHierarchyUpsertInputDto,
UserHierarchyUpsertOutputDto
);




// ████████ initialize RemoveCrudEngine ███████████████████████████████████████████
this.initRemoveEngine
<
// soft_remove (5)
UserHierarchySoftRemoveDto,
UserHierarchySoftRemoveInputWhereDto,
UserHierarchySoftRemoveInputDto,
UserHierarchySoftRemoveOutputAffectedRowsDto,
UserHierarchySoftRemoveOutputDto,

// remove (4)
UserHierarchyRemoveDto,
UserHierarchyRemoveInputWhereDto,
UserHierarchyRemoveInputDto,
UserHierarchyRemoveOutputAffectedRowsDto,
UserHierarchyRemoveOutputDto,

// recover (5)
UserHierarchyRecoverDto,
UserHierarchyRecoverInputWhereDto,
UserHierarchyRecoverInputDto,
UserHierarchyRecoverOutputAffectedRowsDto,
UserHierarchyRecoverOutputDto
>
(
// soft_remove (5)
UserHierarchySoftRemoveDto,
UserHierarchySoftRemoveInputWhereDto,
UserHierarchySoftRemoveInputDto,
UserHierarchySoftRemoveOutputAffectedRowsDto,
UserHierarchySoftRemoveOutputDto,

// remove (4)
UserHierarchyRemoveDto,
UserHierarchyRemoveInputWhereDto,
UserHierarchyRemoveInputDto,
UserHierarchyRemoveOutputAffectedRowsDto,
UserHierarchyRemoveOutputDto,

// recover (5)
UserHierarchyRecoverDto,
UserHierarchyRecoverInputWhereDto,
UserHierarchyRecoverInputDto,
UserHierarchyRecoverOutputAffectedRowsDto,
UserHierarchyRecoverOutputDto
);



// ████████ initialize UploadCrudEngine ███████████████████████████████████████████
this.initUploadEngine
<
// upload (3)
UserHierarchyUploadDto,
UserHierarchyUploadInputDto,
UserHierarchyUploadOutputDto,

// upload_delete (3)
UserHierarchyUploadDeleteDto,
UserHierarchyUploadDeleteInputDto,
UserHierarchyUploadDeleteOutputDto
>
(
// upload (3)
UserHierarchyUploadDto,
UserHierarchyUploadInputDto,
UserHierarchyUploadOutputDto,

// upload_delete (3)
UserHierarchyUploadDeleteDto,
UserHierarchyUploadDeleteInputDto,
UserHierarchyUploadDeleteOutputDto
);


// ████████ initialize ImportExportCrudEngine █████████████████████████████████████

}

}