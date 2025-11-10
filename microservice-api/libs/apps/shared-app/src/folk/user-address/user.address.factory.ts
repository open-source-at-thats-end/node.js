import { UserAddressEntity } from "./entities/user.address.entity";
import { Injectable } from "@nestjs/common";
import { DataSource, Repository } from "typeorm";
import { InjectRepository } from "@nestjs/typeorm";
import { ConfService, CreateCrudEngine, CrudFactory, DataValidationPipe, DeleteCrudEngine, FindCrudEngine, FindOutputPaginationDto, LibraryAppService, LogService, RemoveCrudEngine, UpdateCrudEngine, UploadCrudEngine, UpsertCrudEngine } from "@libs/library-app";
import { SelfGraphqlMicroserviceService } from "@libs/dynamic-app";
import { UserAddressCreateDto, UserAddressCreateInputDto, UserAddressCreateOutputDto, UserAddressDeleteDto, UserAddressDeleteInputDto, UserAddressDeleteInputWhereDto, UserAddressDeleteOutputDto, UserAddressFindDto, UserAddressFindInputDto, UserAddressFindInputGroupByDto, UserAddressFindInputSortOrderDto, UserAddressFindInputWhereDto, UserAddressFindOneByIdDto, UserAddressFindOneByIdInputDto, UserAddressFindOutputDto, UserAddressFindOutputRowsDto, UserAddressRecoverDto, UserAddressRecoverInputDto, UserAddressRecoverInputWhereDto, UserAddressRecoverOutputDto, UserAddressRecoverOutputAffectedRowsDto, UserAddressRemoveDto, UserAddressRemoveInputDto, UserAddressRemoveInputWhereDto, UserAddressRemoveOutputDto, UserAddressRemoveOutputAffectedRowsDto, UserAddressRestoreDto, UserAddressRestoreInputDto, UserAddressRestoreInputWhereDto, UserAddressRestoreOutputDto, UserAddressSoftDeleteDto, UserAddressSoftDeleteInputDto, UserAddressSoftDeleteInputWhereDto, UserAddressSoftDeleteOutputDto, UserAddressSoftRemoveDto, UserAddressSoftRemoveInputDto, UserAddressSoftRemoveInputWhereDto, UserAddressSoftRemoveOutputDto, UserAddressSoftRemoveOutputAffectedRowsDto, UserAddressUpdateDto, UserAddressUpdateInputDto, UserAddressUpdateInputSetsDto, UserAddressUpdateInputWhereDto, UserAddressUpdateOutputDto, UserAddressUpdateOutputAffectedRowsDto, UserAddressUploadDeleteDto, UserAddressUploadDeleteInputDto, UserAddressUploadDeleteOutputDto, UserAddressUploadDto, UserAddressUploadInputDto, UserAddressUploadOutputDto, UserAddressUpsertDto, UserAddressUpsertInputDto, UserAddressUpsertOutputDto } from "./dto/user.address.dto";

@Injectable()
export class UserAddressFactory extends CrudFactory<UserAddressEntity> {

// ████████ FindCrudEngine ████████████████████████████████████████
public declare readonly findEngine: FindCrudEngine<
// entity (1)
UserAddressEntity,

// find (8)
UserAddressFindDto,
UserAddressFindInputWhereDto,
UserAddressFindInputSortOrderDto,
UserAddressFindInputGroupByDto,
UserAddressFindInputDto,
UserAddressFindOutputRowsDto,
FindOutputPaginationDto,
UserAddressFindOutputDto,

// find_one_by_id (2)
UserAddressFindOneByIdDto,
UserAddressFindOneByIdInputDto
>;

// ████████ CreateCrudEngine ████████████████████████████████████████
public declare readonly createEngine: CreateCrudEngine<
// entity (1)
UserAddressEntity,

// create (3)
UserAddressCreateDto,
UserAddressCreateInputDto,
UserAddressCreateOutputDto
>;

// ████████ UpdateCrudEngine ████████████████████████████████████████
public declare readonly updateEngine: UpdateCrudEngine<
// entity (1)
UserAddressEntity,

// update (6)
UserAddressUpdateDto,
UserAddressUpdateInputWhereDto,
UserAddressUpdateInputSetsDto,
UserAddressUpdateInputDto,
UserAddressUpdateOutputAffectedRowsDto,
UserAddressUpdateOutputDto
>;

// ████████ DeleteCrudEngine ████████████████████████████████████████
public declare readonly deleteEngine: DeleteCrudEngine<
// entity (1)
UserAddressEntity,

// soft_delete (4)
UserAddressSoftDeleteDto,
UserAddressSoftDeleteInputWhereDto,
UserAddressSoftDeleteInputDto,
UserAddressSoftDeleteOutputDto,

// delete (4)
UserAddressDeleteDto,
UserAddressDeleteInputWhereDto,
UserAddressDeleteInputDto,
UserAddressDeleteOutputDto,

// restore (4)
UserAddressRestoreDto,
UserAddressRestoreInputWhereDto,
UserAddressRestoreInputDto,
UserAddressRestoreOutputDto
>;

// ████████ UpsertCrudEngine ████████████████████████████████████████
public declare readonly upsertEngine: UpsertCrudEngine<
// entity (1)
UserAddressEntity,

// upsert (3)
UserAddressUpsertDto,
UserAddressUpsertInputDto,
UserAddressUpsertOutputDto
>;

// ████████ RemoveCrudEngine ████████████████████████████████████████
public declare readonly removeEngine: RemoveCrudEngine<
// entity (1)
UserAddressEntity,

// soft_remove (5)
UserAddressSoftRemoveDto,
UserAddressSoftRemoveInputWhereDto,
UserAddressSoftRemoveInputDto,
UserAddressSoftRemoveOutputAffectedRowsDto,
UserAddressSoftRemoveOutputDto,

// remove (4)
UserAddressRemoveDto,
UserAddressRemoveInputWhereDto,
UserAddressRemoveInputDto,
UserAddressRemoveOutputAffectedRowsDto,
UserAddressRemoveOutputDto,

// recover (5)
UserAddressRecoverDto,
UserAddressRecoverInputWhereDto,
UserAddressRecoverInputDto,
UserAddressRecoverOutputAffectedRowsDto,
UserAddressRecoverOutputDto
>;

// ████████ UploadCrudEngine ████████████████████████████████████████
public declare readonly uploadEngine: UploadCrudEngine<
// entity (1)
UserAddressEntity,

// upload (3)
UserAddressUploadDto,
UserAddressUploadInputDto,
UserAddressUploadOutputDto,

// upload_delete (3)
UserAddressUploadDeleteDto,
UserAddressUploadDeleteInputDto,
UserAddressUploadDeleteOutputDto
>;

constructor(
// data source
protected readonly dataSource: DataSource,

@InjectRepository(UserAddressEntity)
protected readonly repository: Repository<UserAddressEntity>,

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
    UserAddressEntity,
);

this.logService.setContext(UserAddressFactory.name);

// ████████ initialize FindCrudEngine ██████████████████████████████████████
this.initFindEngine
<
// find (8)
UserAddressFindDto,
UserAddressFindInputWhereDto,
UserAddressFindInputSortOrderDto,
UserAddressFindInputGroupByDto,
UserAddressFindInputDto,
UserAddressFindOutputRowsDto,
FindOutputPaginationDto,
UserAddressFindOutputDto,

// find_one_by_id (2)
UserAddressFindOneByIdDto,
UserAddressFindOneByIdInputDto
>
(
// find (8)
UserAddressFindDto,
UserAddressFindInputWhereDto,
UserAddressFindInputSortOrderDto,
UserAddressFindInputGroupByDto,
UserAddressFindInputDto,
UserAddressFindOutputRowsDto,
FindOutputPaginationDto,
UserAddressFindOutputDto,

// find_one_by_id (2)
UserAddressFindOneByIdDto,
UserAddressFindOneByIdInputDto
);


// ████████ initialize CreateCrudEngine ███████████████████████████████████████
this.initCreateEngine
<
// create (3)
UserAddressCreateDto,
UserAddressCreateInputDto,
UserAddressCreateOutputDto
>
(
// create (3)
UserAddressCreateDto,
UserAddressCreateInputDto,
UserAddressCreateOutputDto
);

// ████████ initialize UpdateCrudEngine ████████████████████████████████████████
this.initUpdateEngine
<
// update (6)
UserAddressUpdateDto,
UserAddressUpdateInputWhereDto,
UserAddressUpdateInputSetsDto,
UserAddressUpdateInputDto,
UserAddressUpdateOutputAffectedRowsDto,
UserAddressUpdateOutputDto
>
(
// update (6)
UserAddressUpdateDto,
UserAddressUpdateInputWhereDto,
UserAddressUpdateInputSetsDto,
UserAddressUpdateInputDto,
UserAddressUpdateOutputAffectedRowsDto,
UserAddressUpdateOutputDto
);


// ████████ initialize DeleteCrudEngine ███████████████████████████████████████████
this.initDeleteEngine
<
// soft_delete (4)
UserAddressSoftDeleteDto,
UserAddressSoftDeleteInputWhereDto,
UserAddressSoftDeleteInputDto,
UserAddressSoftDeleteOutputDto,

// delete (4)
UserAddressDeleteDto,
UserAddressDeleteInputWhereDto,
UserAddressDeleteInputDto,
UserAddressDeleteOutputDto,

// restore (4)
UserAddressRestoreDto,
UserAddressRestoreInputWhereDto,
UserAddressRestoreInputDto,
UserAddressRestoreOutputDto
>
(
// soft_delete (4)
UserAddressSoftDeleteDto,
UserAddressSoftDeleteInputWhereDto,
UserAddressSoftDeleteInputDto,
UserAddressSoftDeleteOutputDto,

// delete (4)
UserAddressDeleteDto,
UserAddressDeleteInputWhereDto,
UserAddressDeleteInputDto,
UserAddressDeleteOutputDto,

// restore (4)
UserAddressRestoreDto,
UserAddressRestoreInputWhereDto,
UserAddressRestoreInputDto,
UserAddressRestoreOutputDto
);



// ████████ initialize UpsertCrudEngine ███████████████████████████████████████████
this.initUpsertEngine
<
// upsert (3)
UserAddressUpsertDto,
UserAddressUpsertInputDto,
UserAddressUpsertOutputDto
>
(
// upsert (3)
UserAddressUpsertDto,
UserAddressUpsertInputDto,
UserAddressUpsertOutputDto
);




// ████████ initialize RemoveCrudEngine ███████████████████████████████████████████
this.initRemoveEngine
<
// soft_remove (5)
UserAddressSoftRemoveDto,
UserAddressSoftRemoveInputWhereDto,
UserAddressSoftRemoveInputDto,
UserAddressSoftRemoveOutputAffectedRowsDto,
UserAddressSoftRemoveOutputDto,

// remove (4)
UserAddressRemoveDto,
UserAddressRemoveInputWhereDto,
UserAddressRemoveInputDto,
UserAddressRemoveOutputAffectedRowsDto,
UserAddressRemoveOutputDto,

// recover (5)
UserAddressRecoverDto,
UserAddressRecoverInputWhereDto,
UserAddressRecoverInputDto,
UserAddressRecoverOutputAffectedRowsDto,
UserAddressRecoverOutputDto
>
(
// soft_remove (5)
UserAddressSoftRemoveDto,
UserAddressSoftRemoveInputWhereDto,
UserAddressSoftRemoveInputDto,
UserAddressSoftRemoveOutputAffectedRowsDto,
UserAddressSoftRemoveOutputDto,

// remove (4)
UserAddressRemoveDto,
UserAddressRemoveInputWhereDto,
UserAddressRemoveInputDto,
UserAddressRemoveOutputAffectedRowsDto,
UserAddressRemoveOutputDto,

// recover (5)
UserAddressRecoverDto,
UserAddressRecoverInputWhereDto,
UserAddressRecoverInputDto,
UserAddressRecoverOutputAffectedRowsDto,
UserAddressRecoverOutputDto
);



// ████████ initialize UploadCrudEngine ███████████████████████████████████████████
this.initUploadEngine
<
// upload (3)
UserAddressUploadDto,
UserAddressUploadInputDto,
UserAddressUploadOutputDto,

// upload_delete (3)
UserAddressUploadDeleteDto,
UserAddressUploadDeleteInputDto,
UserAddressUploadDeleteOutputDto
>
(
// upload (3)
UserAddressUploadDto,
UserAddressUploadInputDto,
UserAddressUploadOutputDto,

// upload_delete (3)
UserAddressUploadDeleteDto,
UserAddressUploadDeleteInputDto,
UserAddressUploadDeleteOutputDto
);


// ████████ initialize ImportExportCrudEngine █████████████████████████████████████

}

}