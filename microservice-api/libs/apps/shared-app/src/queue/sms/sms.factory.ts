import { QueueSmsEntity } from "./entities/sms.entity";
import { Injectable } from "@nestjs/common";
import { DataSource, Repository } from "typeorm";
import { InjectRepository } from "@nestjs/typeorm";
import { ConfService, CreateCrudEngine, CrudFactory, DataValidationPipe, DeleteCrudEngine, FindCrudEngine, FindOutputPaginationDto, LibraryAppService, LogService, RemoveCrudEngine, UpdateCrudEngine, UploadCrudEngine, UpsertCrudEngine } from "@libs/library-app";
import { SelfGraphqlMicroserviceService } from "@libs/dynamic-app";
import { QueueSmsCreateDto, QueueSmsCreateInputDto, QueueSmsCreateOutputDto, QueueSmsDeleteDto, QueueSmsDeleteInputDto, QueueSmsDeleteInputWhereDto, QueueSmsDeleteOutputDto, QueueSmsFindDto, QueueSmsFindInputDto, QueueSmsFindInputGroupByDto, QueueSmsFindInputSortOrderDto, QueueSmsFindInputWhereDto, QueueSmsFindOneByIdDto, QueueSmsFindOneByIdInputDto, QueueSmsFindOutputDto, QueueSmsFindOutputRowsDto, QueueSmsRecoverDto, QueueSmsRecoverInputDto, QueueSmsRecoverInputWhereDto, QueueSmsRecoverOutputDto, QueueSmsRecoverOutputAffectedRowsDto, QueueSmsRemoveDto, QueueSmsRemoveInputDto, QueueSmsRemoveInputWhereDto, QueueSmsRemoveOutputDto, QueueSmsRemoveOutputAffectedRowsDto, QueueSmsRestoreDto, QueueSmsRestoreInputDto, QueueSmsRestoreInputWhereDto, QueueSmsRestoreOutputDto, QueueSmsSoftDeleteDto, QueueSmsSoftDeleteInputDto, QueueSmsSoftDeleteInputWhereDto, QueueSmsSoftDeleteOutputDto, QueueSmsSoftRemoveDto, QueueSmsSoftRemoveInputDto, QueueSmsSoftRemoveInputWhereDto, QueueSmsSoftRemoveOutputDto, QueueSmsSoftRemoveOutputAffectedRowsDto, QueueSmsUpdateDto, QueueSmsUpdateInputDto, QueueSmsUpdateInputSetsDto, QueueSmsUpdateInputWhereDto, QueueSmsUpdateOutputDto, QueueSmsUpdateOutputAffectedRowsDto, QueueSmsUploadDeleteDto, QueueSmsUploadDeleteInputDto, QueueSmsUploadDeleteOutputDto, QueueSmsUploadDto, QueueSmsUploadInputDto, QueueSmsUploadOutputDto, QueueSmsUpsertDto, QueueSmsUpsertInputDto, QueueSmsUpsertOutputDto } from "./dto/sms.dto";

@Injectable()
export class QueueSmsFactory extends CrudFactory<QueueSmsEntity> {

// ████████ FindCrudEngine ████████████████████████████████████████
public declare readonly findEngine: FindCrudEngine<
// entity (1)
QueueSmsEntity,

// find (8)
QueueSmsFindDto,
QueueSmsFindInputWhereDto,
QueueSmsFindInputSortOrderDto,
QueueSmsFindInputGroupByDto,
QueueSmsFindInputDto,
QueueSmsFindOutputRowsDto,
FindOutputPaginationDto,
QueueSmsFindOutputDto,

// find_one_by_id (2)
QueueSmsFindOneByIdDto,
QueueSmsFindOneByIdInputDto
>;

// ████████ CreateCrudEngine ████████████████████████████████████████
public declare readonly createEngine: CreateCrudEngine<
// entity (1)
QueueSmsEntity,

// create (3)
QueueSmsCreateDto,
QueueSmsCreateInputDto,
QueueSmsCreateOutputDto
>;

// ████████ UpdateCrudEngine ████████████████████████████████████████
public declare readonly updateEngine: UpdateCrudEngine<
// entity (1)
QueueSmsEntity,

// update (6)
QueueSmsUpdateDto,
QueueSmsUpdateInputWhereDto,
QueueSmsUpdateInputSetsDto,
QueueSmsUpdateInputDto,
QueueSmsUpdateOutputAffectedRowsDto,
QueueSmsUpdateOutputDto
>;

// ████████ DeleteCrudEngine ████████████████████████████████████████
public declare readonly deleteEngine: DeleteCrudEngine<
// entity (1)
QueueSmsEntity,

// soft_delete (4)
QueueSmsSoftDeleteDto,
QueueSmsSoftDeleteInputWhereDto,
QueueSmsSoftDeleteInputDto,
QueueSmsSoftDeleteOutputDto,

// delete (4)
QueueSmsDeleteDto,
QueueSmsDeleteInputWhereDto,
QueueSmsDeleteInputDto,
QueueSmsDeleteOutputDto,

// restore (4)
QueueSmsRestoreDto,
QueueSmsRestoreInputWhereDto,
QueueSmsRestoreInputDto,
QueueSmsRestoreOutputDto
>;

// ████████ UpsertCrudEngine ████████████████████████████████████████
public declare readonly upsertEngine: UpsertCrudEngine<
// entity (1)
QueueSmsEntity,

// upsert (3)
QueueSmsUpsertDto,
QueueSmsUpsertInputDto,
QueueSmsUpsertOutputDto
>;

// ████████ RemoveCrudEngine ████████████████████████████████████████
public declare readonly removeEngine: RemoveCrudEngine<
// entity (1)
QueueSmsEntity,

// soft_remove (5)
QueueSmsSoftRemoveDto,
QueueSmsSoftRemoveInputWhereDto,
QueueSmsSoftRemoveInputDto,
QueueSmsSoftRemoveOutputAffectedRowsDto,
QueueSmsSoftRemoveOutputDto,

// remove (4)
QueueSmsRemoveDto,
QueueSmsRemoveInputWhereDto,
QueueSmsRemoveInputDto,
QueueSmsRemoveOutputAffectedRowsDto,
QueueSmsRemoveOutputDto,

// recover (5)
QueueSmsRecoverDto,
QueueSmsRecoverInputWhereDto,
QueueSmsRecoverInputDto,
QueueSmsRecoverOutputAffectedRowsDto,
QueueSmsRecoverOutputDto
>;

// ████████ UploadCrudEngine ████████████████████████████████████████
public declare readonly uploadEngine: UploadCrudEngine<
// entity (1)
QueueSmsEntity,

// upload (3)
QueueSmsUploadDto,
QueueSmsUploadInputDto,
QueueSmsUploadOutputDto,

// upload_delete (3)
QueueSmsUploadDeleteDto,
QueueSmsUploadDeleteInputDto,
QueueSmsUploadDeleteOutputDto
>;

constructor(
// data source
protected readonly dataSource: DataSource,

@InjectRepository(QueueSmsEntity)
protected readonly repository: Repository<QueueSmsEntity>,

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
    QueueSmsEntity,
);

this.logService.setContext(QueueSmsFactory.name);

// ████████ initialize FindCrudEngine ██████████████████████████████████████
this.initFindEngine
<
// find (8)
QueueSmsFindDto,
QueueSmsFindInputWhereDto,
QueueSmsFindInputSortOrderDto,
QueueSmsFindInputGroupByDto,
QueueSmsFindInputDto,
QueueSmsFindOutputRowsDto,
FindOutputPaginationDto,
QueueSmsFindOutputDto,

// find_one_by_id (2)
QueueSmsFindOneByIdDto,
QueueSmsFindOneByIdInputDto
>
(
// find (8)
QueueSmsFindDto,
QueueSmsFindInputWhereDto,
QueueSmsFindInputSortOrderDto,
QueueSmsFindInputGroupByDto,
QueueSmsFindInputDto,
QueueSmsFindOutputRowsDto,
FindOutputPaginationDto,
QueueSmsFindOutputDto,

// find_one_by_id (2)
QueueSmsFindOneByIdDto,
QueueSmsFindOneByIdInputDto
);


// ████████ initialize CreateCrudEngine ███████████████████████████████████████
this.initCreateEngine
<
// create (3)
QueueSmsCreateDto,
QueueSmsCreateInputDto,
QueueSmsCreateOutputDto
>
(
// create (3)
QueueSmsCreateDto,
QueueSmsCreateInputDto,
QueueSmsCreateOutputDto
);

// ████████ initialize UpdateCrudEngine ████████████████████████████████████████
this.initUpdateEngine
<
// update (6)
QueueSmsUpdateDto,
QueueSmsUpdateInputWhereDto,
QueueSmsUpdateInputSetsDto,
QueueSmsUpdateInputDto,
QueueSmsUpdateOutputAffectedRowsDto,
QueueSmsUpdateOutputDto
>
(
// update (6)
QueueSmsUpdateDto,
QueueSmsUpdateInputWhereDto,
QueueSmsUpdateInputSetsDto,
QueueSmsUpdateInputDto,
QueueSmsUpdateOutputAffectedRowsDto,
QueueSmsUpdateOutputDto
);


// ████████ initialize DeleteCrudEngine ███████████████████████████████████████████
this.initDeleteEngine
<
// soft_delete (4)
QueueSmsSoftDeleteDto,
QueueSmsSoftDeleteInputWhereDto,
QueueSmsSoftDeleteInputDto,
QueueSmsSoftDeleteOutputDto,

// delete (4)
QueueSmsDeleteDto,
QueueSmsDeleteInputWhereDto,
QueueSmsDeleteInputDto,
QueueSmsDeleteOutputDto,

// restore (4)
QueueSmsRestoreDto,
QueueSmsRestoreInputWhereDto,
QueueSmsRestoreInputDto,
QueueSmsRestoreOutputDto
>
(
// soft_delete (4)
QueueSmsSoftDeleteDto,
QueueSmsSoftDeleteInputWhereDto,
QueueSmsSoftDeleteInputDto,
QueueSmsSoftDeleteOutputDto,

// delete (4)
QueueSmsDeleteDto,
QueueSmsDeleteInputWhereDto,
QueueSmsDeleteInputDto,
QueueSmsDeleteOutputDto,

// restore (4)
QueueSmsRestoreDto,
QueueSmsRestoreInputWhereDto,
QueueSmsRestoreInputDto,
QueueSmsRestoreOutputDto
);



// ████████ initialize UpsertCrudEngine ███████████████████████████████████████████
this.initUpsertEngine
<
// upsert (3)
QueueSmsUpsertDto,
QueueSmsUpsertInputDto,
QueueSmsUpsertOutputDto
>
(
// upsert (3)
QueueSmsUpsertDto,
QueueSmsUpsertInputDto,
QueueSmsUpsertOutputDto
);




// ████████ initialize RemoveCrudEngine ███████████████████████████████████████████
this.initRemoveEngine
<
// soft_remove (5)
QueueSmsSoftRemoveDto,
QueueSmsSoftRemoveInputWhereDto,
QueueSmsSoftRemoveInputDto,
QueueSmsSoftRemoveOutputAffectedRowsDto,
QueueSmsSoftRemoveOutputDto,

// remove (4)
QueueSmsRemoveDto,
QueueSmsRemoveInputWhereDto,
QueueSmsRemoveInputDto,
QueueSmsRemoveOutputAffectedRowsDto,
QueueSmsRemoveOutputDto,

// recover (5)
QueueSmsRecoverDto,
QueueSmsRecoverInputWhereDto,
QueueSmsRecoverInputDto,
QueueSmsRecoverOutputAffectedRowsDto,
QueueSmsRecoverOutputDto
>
(
// soft_remove (5)
QueueSmsSoftRemoveDto,
QueueSmsSoftRemoveInputWhereDto,
QueueSmsSoftRemoveInputDto,
QueueSmsSoftRemoveOutputAffectedRowsDto,
QueueSmsSoftRemoveOutputDto,

// remove (4)
QueueSmsRemoveDto,
QueueSmsRemoveInputWhereDto,
QueueSmsRemoveInputDto,
QueueSmsRemoveOutputAffectedRowsDto,
QueueSmsRemoveOutputDto,

// recover (5)
QueueSmsRecoverDto,
QueueSmsRecoverInputWhereDto,
QueueSmsRecoverInputDto,
QueueSmsRecoverOutputAffectedRowsDto,
QueueSmsRecoverOutputDto
);



// ████████ initialize UploadCrudEngine ███████████████████████████████████████████
this.initUploadEngine
<
// upload (3)
QueueSmsUploadDto,
QueueSmsUploadInputDto,
QueueSmsUploadOutputDto,

// upload_delete (3)
QueueSmsUploadDeleteDto,
QueueSmsUploadDeleteInputDto,
QueueSmsUploadDeleteOutputDto
>
(
// upload (3)
QueueSmsUploadDto,
QueueSmsUploadInputDto,
QueueSmsUploadOutputDto,

// upload_delete (3)
QueueSmsUploadDeleteDto,
QueueSmsUploadDeleteInputDto,
QueueSmsUploadDeleteOutputDto
);


// ████████ initialize ImportExportCrudEngine █████████████████████████████████████

}

}