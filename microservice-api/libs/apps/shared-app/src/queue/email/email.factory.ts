import { QueueEmailEntity } from "./entities/email.entity";
import { Injectable } from "@nestjs/common";
import { DataSource, Repository } from "typeorm";
import { InjectRepository } from "@nestjs/typeorm";
import { ConfService, CreateCrudEngine, CrudFactory, DataValidationPipe, DeleteCrudEngine, FindCrudEngine, FindOutputPaginationDto, LibraryAppService, LogService, RemoveCrudEngine, UpdateCrudEngine, UploadCrudEngine, UpsertCrudEngine } from "@libs/library-app";
import { QueueEmailCreateDto, QueueEmailCreateInputDto, QueueEmailCreateOutputDto, QueueEmailDeleteDto, QueueEmailDeleteInputDto, QueueEmailDeleteInputWhereDto, QueueEmailDeleteOutputDto, QueueEmailFindDto, QueueEmailFindInputDto, QueueEmailFindInputGroupByDto, QueueEmailFindInputSortOrderDto, QueueEmailFindInputWhereDto, QueueEmailFindOneByIdDto, QueueEmailFindOneByIdInputDto, QueueEmailFindOutputDto, QueueEmailFindOutputRowsDto, QueueEmailRecoverDto, QueueEmailRecoverInputDto, QueueEmailRecoverInputWhereDto, QueueEmailRecoverOutputDto, QueueEmailRecoverOutputAffectedRowsDto, QueueEmailRemoveDto, QueueEmailRemoveInputDto, QueueEmailRemoveInputWhereDto, QueueEmailRemoveOutputDto, QueueEmailRemoveOutputAffectedRowsDto, QueueEmailRestoreDto, QueueEmailRestoreInputDto, QueueEmailRestoreInputWhereDto, QueueEmailRestoreOutputDto, QueueEmailSoftDeleteDto, QueueEmailSoftDeleteInputDto, QueueEmailSoftDeleteInputWhereDto, QueueEmailSoftDeleteOutputDto, QueueEmailSoftRemoveDto, QueueEmailSoftRemoveInputDto, QueueEmailSoftRemoveInputWhereDto, QueueEmailSoftRemoveOutputDto, QueueEmailSoftRemoveOutputAffectedRowsDto, QueueEmailUpdateDto, QueueEmailUpdateInputDto, QueueEmailUpdateInputSetsDto, QueueEmailUpdateInputWhereDto, QueueEmailUpdateOutputDto, QueueEmailUpdateOutputAffectedRowsDto, QueueEmailUploadDeleteDto, QueueEmailUploadDeleteInputDto, QueueEmailUploadDeleteOutputDto, QueueEmailUploadDto, QueueEmailUploadInputDto, QueueEmailUploadOutputDto, QueueEmailUpsertDto, QueueEmailUpsertInputDto, QueueEmailUpsertOutputDto } from "./dto/email.dto";
import { SelfGraphqlMicroserviceService } from "@libs/dynamic-app";

@Injectable()
export class QueueEmailFactory extends CrudFactory<QueueEmailEntity> {

// ████████ FindCrudEngine ████████████████████████████████████████
public declare readonly findEngine: FindCrudEngine<
// entity (1)
QueueEmailEntity,

// find (8)
QueueEmailFindDto,
QueueEmailFindInputWhereDto,
QueueEmailFindInputSortOrderDto,
QueueEmailFindInputGroupByDto,
QueueEmailFindInputDto,
QueueEmailFindOutputRowsDto,
FindOutputPaginationDto,
QueueEmailFindOutputDto,

// find_one_by_id (2)
QueueEmailFindOneByIdDto,
QueueEmailFindOneByIdInputDto
>;

// ████████ CreateCrudEngine ████████████████████████████████████████
public declare readonly createEngine: CreateCrudEngine<
// entity (1)
QueueEmailEntity,

// create (3)
QueueEmailCreateDto,
QueueEmailCreateInputDto,
QueueEmailCreateOutputDto
>;

// ████████ UpdateCrudEngine ████████████████████████████████████████
public declare readonly updateEngine: UpdateCrudEngine<
// entity (1)
QueueEmailEntity,

// update (6)
QueueEmailUpdateDto,
QueueEmailUpdateInputWhereDto,
QueueEmailUpdateInputSetsDto,
QueueEmailUpdateInputDto,
QueueEmailUpdateOutputAffectedRowsDto,
QueueEmailUpdateOutputDto
>;

// ████████ DeleteCrudEngine ████████████████████████████████████████
public declare readonly deleteEngine: DeleteCrudEngine<
// entity (1)
QueueEmailEntity,

// soft_delete (4)
QueueEmailSoftDeleteDto,
QueueEmailSoftDeleteInputWhereDto,
QueueEmailSoftDeleteInputDto,
QueueEmailSoftDeleteOutputDto,

// delete (4)
QueueEmailDeleteDto,
QueueEmailDeleteInputWhereDto,
QueueEmailDeleteInputDto,
QueueEmailDeleteOutputDto,

// restore (4)
QueueEmailRestoreDto,
QueueEmailRestoreInputWhereDto,
QueueEmailRestoreInputDto,
QueueEmailRestoreOutputDto
>;

// ████████ UpsertCrudEngine ████████████████████████████████████████
public declare readonly upsertEngine: UpsertCrudEngine<
// entity (1)
QueueEmailEntity,

// upsert (3)
QueueEmailUpsertDto,
QueueEmailUpsertInputDto,
QueueEmailUpsertOutputDto
>;

// ████████ RemoveCrudEngine ████████████████████████████████████████
public declare readonly removeEngine: RemoveCrudEngine<
// entity (1)
QueueEmailEntity,

// soft_remove (5)
QueueEmailSoftRemoveDto,
QueueEmailSoftRemoveInputWhereDto,
QueueEmailSoftRemoveInputDto,
QueueEmailSoftRemoveOutputAffectedRowsDto,
QueueEmailSoftRemoveOutputDto,

// remove (4)
QueueEmailRemoveDto,
QueueEmailRemoveInputWhereDto,
QueueEmailRemoveInputDto,
QueueEmailRemoveOutputAffectedRowsDto,
QueueEmailRemoveOutputDto,

// recover (5)
QueueEmailRecoverDto,
QueueEmailRecoverInputWhereDto,
QueueEmailRecoverInputDto,
QueueEmailRecoverOutputAffectedRowsDto,
QueueEmailRecoverOutputDto
>;

// ████████ UploadCrudEngine ████████████████████████████████████████
public declare readonly uploadEngine: UploadCrudEngine<
// entity (1)
QueueEmailEntity,

// upload (3)
QueueEmailUploadDto,
QueueEmailUploadInputDto,
QueueEmailUploadOutputDto,

// upload_delete (3)
QueueEmailUploadDeleteDto,
QueueEmailUploadDeleteInputDto,
QueueEmailUploadDeleteOutputDto
>;

constructor(
// data source
protected readonly dataSource: DataSource,

@InjectRepository(QueueEmailEntity)
protected readonly repository: Repository<QueueEmailEntity>,

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
    QueueEmailEntity,
);

this.logService.setContext(QueueEmailFactory.name);

// ████████ initialize FindCrudEngine ██████████████████████████████████████
this.initFindEngine
<
// find (8)
QueueEmailFindDto,
QueueEmailFindInputWhereDto,
QueueEmailFindInputSortOrderDto,
QueueEmailFindInputGroupByDto,
QueueEmailFindInputDto,
QueueEmailFindOutputRowsDto,
FindOutputPaginationDto,
QueueEmailFindOutputDto,

// find_one_by_id (2)
QueueEmailFindOneByIdDto,
QueueEmailFindOneByIdInputDto
>
(
// find (8)
QueueEmailFindDto,
QueueEmailFindInputWhereDto,
QueueEmailFindInputSortOrderDto,
QueueEmailFindInputGroupByDto,
QueueEmailFindInputDto,
QueueEmailFindOutputRowsDto,
FindOutputPaginationDto,
QueueEmailFindOutputDto,

// find_one_by_id (2)
QueueEmailFindOneByIdDto,
QueueEmailFindOneByIdInputDto
);


// ████████ initialize CreateCrudEngine ███████████████████████████████████████
this.initCreateEngine
<
// create (3)
QueueEmailCreateDto,
QueueEmailCreateInputDto,
QueueEmailCreateOutputDto
>
(
// create (3)
QueueEmailCreateDto,
QueueEmailCreateInputDto,
QueueEmailCreateOutputDto
);

// ████████ initialize UpdateCrudEngine ████████████████████████████████████████
this.initUpdateEngine
<
// update (6)
QueueEmailUpdateDto,
QueueEmailUpdateInputWhereDto,
QueueEmailUpdateInputSetsDto,
QueueEmailUpdateInputDto,
QueueEmailUpdateOutputAffectedRowsDto,
QueueEmailUpdateOutputDto
>
(
// update (6)
QueueEmailUpdateDto,
QueueEmailUpdateInputWhereDto,
QueueEmailUpdateInputSetsDto,
QueueEmailUpdateInputDto,
QueueEmailUpdateOutputAffectedRowsDto,
QueueEmailUpdateOutputDto
);


// ████████ initialize DeleteCrudEngine ███████████████████████████████████████████
this.initDeleteEngine
<
// soft_delete (4)
QueueEmailSoftDeleteDto,
QueueEmailSoftDeleteInputWhereDto,
QueueEmailSoftDeleteInputDto,
QueueEmailSoftDeleteOutputDto,

// delete (4)
QueueEmailDeleteDto,
QueueEmailDeleteInputWhereDto,
QueueEmailDeleteInputDto,
QueueEmailDeleteOutputDto,

// restore (4)
QueueEmailRestoreDto,
QueueEmailRestoreInputWhereDto,
QueueEmailRestoreInputDto,
QueueEmailRestoreOutputDto
>
(
// soft_delete (4)
QueueEmailSoftDeleteDto,
QueueEmailSoftDeleteInputWhereDto,
QueueEmailSoftDeleteInputDto,
QueueEmailSoftDeleteOutputDto,

// delete (4)
QueueEmailDeleteDto,
QueueEmailDeleteInputWhereDto,
QueueEmailDeleteInputDto,
QueueEmailDeleteOutputDto,

// restore (4)
QueueEmailRestoreDto,
QueueEmailRestoreInputWhereDto,
QueueEmailRestoreInputDto,
QueueEmailRestoreOutputDto
);



// ████████ initialize UpsertCrudEngine ███████████████████████████████████████████
this.initUpsertEngine
<
// upsert (3)
QueueEmailUpsertDto,
QueueEmailUpsertInputDto,
QueueEmailUpsertOutputDto
>
(
// upsert (3)
QueueEmailUpsertDto,
QueueEmailUpsertInputDto,
QueueEmailUpsertOutputDto
);




// ████████ initialize RemoveCrudEngine ███████████████████████████████████████████
this.initRemoveEngine
<
// soft_remove (5)
QueueEmailSoftRemoveDto,
QueueEmailSoftRemoveInputWhereDto,
QueueEmailSoftRemoveInputDto,
QueueEmailSoftRemoveOutputAffectedRowsDto,
QueueEmailSoftRemoveOutputDto,

// remove (4)
QueueEmailRemoveDto,
QueueEmailRemoveInputWhereDto,
QueueEmailRemoveInputDto,
QueueEmailRemoveOutputAffectedRowsDto,
QueueEmailRemoveOutputDto,

// recover (5)
QueueEmailRecoverDto,
QueueEmailRecoverInputWhereDto,
QueueEmailRecoverInputDto,
QueueEmailRecoverOutputAffectedRowsDto,
QueueEmailRecoverOutputDto
>
(
// soft_remove (5)
QueueEmailSoftRemoveDto,
QueueEmailSoftRemoveInputWhereDto,
QueueEmailSoftRemoveInputDto,
QueueEmailSoftRemoveOutputAffectedRowsDto,
QueueEmailSoftRemoveOutputDto,

// remove (4)
QueueEmailRemoveDto,
QueueEmailRemoveInputWhereDto,
QueueEmailRemoveInputDto,
QueueEmailRemoveOutputAffectedRowsDto,
QueueEmailRemoveOutputDto,

// recover (5)
QueueEmailRecoverDto,
QueueEmailRecoverInputWhereDto,
QueueEmailRecoverInputDto,
QueueEmailRecoverOutputAffectedRowsDto,
QueueEmailRecoverOutputDto
);



// ████████ initialize UploadCrudEngine ███████████████████████████████████████████
this.initUploadEngine
<
// upload (3)
QueueEmailUploadDto,
QueueEmailUploadInputDto,
QueueEmailUploadOutputDto,

// upload_delete (3)
QueueEmailUploadDeleteDto,
QueueEmailUploadDeleteInputDto,
QueueEmailUploadDeleteOutputDto
>
(
// upload (3)
QueueEmailUploadDto,
QueueEmailUploadInputDto,
QueueEmailUploadOutputDto,

// upload_delete (3)
QueueEmailUploadDeleteDto,
QueueEmailUploadDeleteInputDto,
QueueEmailUploadDeleteOutputDto
);


// ████████ initialize ImportExportCrudEngine █████████████████████████████████████

}

}