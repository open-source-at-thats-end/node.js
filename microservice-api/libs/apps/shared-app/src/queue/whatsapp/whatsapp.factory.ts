import { QueueWhatsappEntity } from "./entities/whatsapp.entity";
import { Injectable } from "@nestjs/common";
import { DataSource, Repository } from "typeorm";
import { InjectRepository } from "@nestjs/typeorm";
import { ConfService, CreateCrudEngine, CrudFactory, DataValidationPipe, DeleteCrudEngine, FindCrudEngine, FindOutputPaginationDto, LibraryAppService, LogService, RemoveCrudEngine, UpdateCrudEngine, UploadCrudEngine, UpsertCrudEngine } from "@libs/library-app";
import { QueueWhatsappCreateDto, QueueWhatsappCreateInputDto, QueueWhatsappCreateOutputDto, QueueWhatsappDeleteDto, QueueWhatsappDeleteInputDto, QueueWhatsappDeleteInputWhereDto, QueueWhatsappDeleteOutputDto, QueueWhatsappFindDto, QueueWhatsappFindInputDto, QueueWhatsappFindInputGroupByDto, QueueWhatsappFindInputSortOrderDto, QueueWhatsappFindInputWhereDto, QueueWhatsappFindOneByIdDto, QueueWhatsappFindOneByIdInputDto, QueueWhatsappFindOutputDto, QueueWhatsappFindOutputRowsDto, QueueWhatsappRecoverDto, QueueWhatsappRecoverInputDto, QueueWhatsappRecoverInputWhereDto, QueueWhatsappRecoverOutputDto, QueueWhatsappRecoverOutputAffectedRowsDto, QueueWhatsappRemoveDto, QueueWhatsappRemoveInputDto, QueueWhatsappRemoveInputWhereDto, QueueWhatsappRemoveOutputDto, QueueWhatsappRemoveOutputAffectedRowsDto, QueueWhatsappRestoreDto, QueueWhatsappRestoreInputDto, QueueWhatsappRestoreInputWhereDto, QueueWhatsappRestoreOutputDto, QueueWhatsappSoftDeleteDto, QueueWhatsappSoftDeleteInputDto, QueueWhatsappSoftDeleteInputWhereDto, QueueWhatsappSoftDeleteOutputDto, QueueWhatsappSoftRemoveDto, QueueWhatsappSoftRemoveInputDto, QueueWhatsappSoftRemoveInputWhereDto, QueueWhatsappSoftRemoveOutputDto, QueueWhatsappSoftRemoveOutputAffectedRowsDto, QueueWhatsappUpdateDto, QueueWhatsappUpdateInputDto, QueueWhatsappUpdateInputSetsDto, QueueWhatsappUpdateInputWhereDto, QueueWhatsappUpdateOutputDto, QueueWhatsappUpdateOutputAffectedRowsDto, QueueWhatsappUploadDeleteDto, QueueWhatsappUploadDeleteInputDto, QueueWhatsappUploadDeleteOutputDto, QueueWhatsappUploadDto, QueueWhatsappUploadInputDto, QueueWhatsappUploadOutputDto, QueueWhatsappUpsertDto, QueueWhatsappUpsertInputDto, QueueWhatsappUpsertOutputDto } from "./dto/whatsapp.dto";
import { SelfGraphqlMicroserviceService } from "@libs/dynamic-app";

@Injectable()
export class QueueWhatsappFactory extends CrudFactory<QueueWhatsappEntity> {

// ████████ FindCrudEngine ████████████████████████████████████████
public declare readonly findEngine: FindCrudEngine<
// entity (1)
QueueWhatsappEntity,

// find (8)
QueueWhatsappFindDto,
QueueWhatsappFindInputWhereDto,
QueueWhatsappFindInputSortOrderDto,
QueueWhatsappFindInputGroupByDto,
QueueWhatsappFindInputDto,
QueueWhatsappFindOutputRowsDto,
FindOutputPaginationDto,
QueueWhatsappFindOutputDto,

// find_one_by_id (2)
QueueWhatsappFindOneByIdDto,
QueueWhatsappFindOneByIdInputDto
>;

// ████████ CreateCrudEngine ████████████████████████████████████████
public declare readonly createEngine: CreateCrudEngine<
// entity (1)
QueueWhatsappEntity,

// create (3)
QueueWhatsappCreateDto,
QueueWhatsappCreateInputDto,
QueueWhatsappCreateOutputDto
>;

// ████████ UpdateCrudEngine ████████████████████████████████████████
public declare readonly updateEngine: UpdateCrudEngine<
// entity (1)
QueueWhatsappEntity,

// update (6)
QueueWhatsappUpdateDto,
QueueWhatsappUpdateInputWhereDto,
QueueWhatsappUpdateInputSetsDto,
QueueWhatsappUpdateInputDto,
QueueWhatsappUpdateOutputAffectedRowsDto,
QueueWhatsappUpdateOutputDto
>;

// ████████ DeleteCrudEngine ████████████████████████████████████████
public declare readonly deleteEngine: DeleteCrudEngine<
// entity (1)
QueueWhatsappEntity,

// soft_delete (4)
QueueWhatsappSoftDeleteDto,
QueueWhatsappSoftDeleteInputWhereDto,
QueueWhatsappSoftDeleteInputDto,
QueueWhatsappSoftDeleteOutputDto,

// delete (4)
QueueWhatsappDeleteDto,
QueueWhatsappDeleteInputWhereDto,
QueueWhatsappDeleteInputDto,
QueueWhatsappDeleteOutputDto,

// restore (4)
QueueWhatsappRestoreDto,
QueueWhatsappRestoreInputWhereDto,
QueueWhatsappRestoreInputDto,
QueueWhatsappRestoreOutputDto
>;

// ████████ UpsertCrudEngine ████████████████████████████████████████
public declare readonly upsertEngine: UpsertCrudEngine<
// entity (1)
QueueWhatsappEntity,

// upsert (3)
QueueWhatsappUpsertDto,
QueueWhatsappUpsertInputDto,
QueueWhatsappUpsertOutputDto
>;

// ████████ RemoveCrudEngine ████████████████████████████████████████
public declare readonly removeEngine: RemoveCrudEngine<
// entity (1)
QueueWhatsappEntity,

// soft_remove (5)
QueueWhatsappSoftRemoveDto,
QueueWhatsappSoftRemoveInputWhereDto,
QueueWhatsappSoftRemoveInputDto,
QueueWhatsappSoftRemoveOutputAffectedRowsDto,
QueueWhatsappSoftRemoveOutputDto,

// remove (4)
QueueWhatsappRemoveDto,
QueueWhatsappRemoveInputWhereDto,
QueueWhatsappRemoveInputDto,
QueueWhatsappRemoveOutputAffectedRowsDto,
QueueWhatsappRemoveOutputDto,

// recover (5)
QueueWhatsappRecoverDto,
QueueWhatsappRecoverInputWhereDto,
QueueWhatsappRecoverInputDto,
QueueWhatsappRecoverOutputAffectedRowsDto,
QueueWhatsappRecoverOutputDto
>;

// ████████ UploadCrudEngine ████████████████████████████████████████
public declare readonly uploadEngine: UploadCrudEngine<
// entity (1)
QueueWhatsappEntity,

// upload (3)
QueueWhatsappUploadDto,
QueueWhatsappUploadInputDto,
QueueWhatsappUploadOutputDto,

// upload_delete (3)
QueueWhatsappUploadDeleteDto,
QueueWhatsappUploadDeleteInputDto,
QueueWhatsappUploadDeleteOutputDto
>;

constructor(
// data source
protected readonly dataSource: DataSource,

@InjectRepository(QueueWhatsappEntity)
protected readonly repository: Repository<QueueWhatsappEntity>,

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
    QueueWhatsappEntity,
);

this.logService.setContext(QueueWhatsappFactory.name);

// ████████ initialize FindCrudEngine ██████████████████████████████████████
this.initFindEngine
<
// find (8)
QueueWhatsappFindDto,
QueueWhatsappFindInputWhereDto,
QueueWhatsappFindInputSortOrderDto,
QueueWhatsappFindInputGroupByDto,
QueueWhatsappFindInputDto,
QueueWhatsappFindOutputRowsDto,
FindOutputPaginationDto,
QueueWhatsappFindOutputDto,

// find_one_by_id (2)
QueueWhatsappFindOneByIdDto,
QueueWhatsappFindOneByIdInputDto
>
(
// find (8)
QueueWhatsappFindDto,
QueueWhatsappFindInputWhereDto,
QueueWhatsappFindInputSortOrderDto,
QueueWhatsappFindInputGroupByDto,
QueueWhatsappFindInputDto,
QueueWhatsappFindOutputRowsDto,
FindOutputPaginationDto,
QueueWhatsappFindOutputDto,

// find_one_by_id (2)
QueueWhatsappFindOneByIdDto,
QueueWhatsappFindOneByIdInputDto
);


// ████████ initialize CreateCrudEngine ███████████████████████████████████████
this.initCreateEngine
<
// create (3)
QueueWhatsappCreateDto,
QueueWhatsappCreateInputDto,
QueueWhatsappCreateOutputDto
>
(
// create (3)
QueueWhatsappCreateDto,
QueueWhatsappCreateInputDto,
QueueWhatsappCreateOutputDto
);

// ████████ initialize UpdateCrudEngine ████████████████████████████████████████
this.initUpdateEngine
<
// update (6)
QueueWhatsappUpdateDto,
QueueWhatsappUpdateInputWhereDto,
QueueWhatsappUpdateInputSetsDto,
QueueWhatsappUpdateInputDto,
QueueWhatsappUpdateOutputAffectedRowsDto,
QueueWhatsappUpdateOutputDto
>
(
// update (6)
QueueWhatsappUpdateDto,
QueueWhatsappUpdateInputWhereDto,
QueueWhatsappUpdateInputSetsDto,
QueueWhatsappUpdateInputDto,
QueueWhatsappUpdateOutputAffectedRowsDto,
QueueWhatsappUpdateOutputDto
);


// ████████ initialize DeleteCrudEngine ███████████████████████████████████████████
this.initDeleteEngine
<
// soft_delete (4)
QueueWhatsappSoftDeleteDto,
QueueWhatsappSoftDeleteInputWhereDto,
QueueWhatsappSoftDeleteInputDto,
QueueWhatsappSoftDeleteOutputDto,

// delete (4)
QueueWhatsappDeleteDto,
QueueWhatsappDeleteInputWhereDto,
QueueWhatsappDeleteInputDto,
QueueWhatsappDeleteOutputDto,

// restore (4)
QueueWhatsappRestoreDto,
QueueWhatsappRestoreInputWhereDto,
QueueWhatsappRestoreInputDto,
QueueWhatsappRestoreOutputDto
>
(
// soft_delete (4)
QueueWhatsappSoftDeleteDto,
QueueWhatsappSoftDeleteInputWhereDto,
QueueWhatsappSoftDeleteInputDto,
QueueWhatsappSoftDeleteOutputDto,

// delete (4)
QueueWhatsappDeleteDto,
QueueWhatsappDeleteInputWhereDto,
QueueWhatsappDeleteInputDto,
QueueWhatsappDeleteOutputDto,

// restore (4)
QueueWhatsappRestoreDto,
QueueWhatsappRestoreInputWhereDto,
QueueWhatsappRestoreInputDto,
QueueWhatsappRestoreOutputDto
);



// ████████ initialize UpsertCrudEngine ███████████████████████████████████████████
this.initUpsertEngine
<
// upsert (3)
QueueWhatsappUpsertDto,
QueueWhatsappUpsertInputDto,
QueueWhatsappUpsertOutputDto
>
(
// upsert (3)
QueueWhatsappUpsertDto,
QueueWhatsappUpsertInputDto,
QueueWhatsappUpsertOutputDto
);




// ████████ initialize RemoveCrudEngine ███████████████████████████████████████████
this.initRemoveEngine
<
// soft_remove (5)
QueueWhatsappSoftRemoveDto,
QueueWhatsappSoftRemoveInputWhereDto,
QueueWhatsappSoftRemoveInputDto,
QueueWhatsappSoftRemoveOutputAffectedRowsDto,
QueueWhatsappSoftRemoveOutputDto,

// remove (4)
QueueWhatsappRemoveDto,
QueueWhatsappRemoveInputWhereDto,
QueueWhatsappRemoveInputDto,
QueueWhatsappRemoveOutputAffectedRowsDto,
QueueWhatsappRemoveOutputDto,

// recover (5)
QueueWhatsappRecoverDto,
QueueWhatsappRecoverInputWhereDto,
QueueWhatsappRecoverInputDto,
QueueWhatsappRecoverOutputAffectedRowsDto,
QueueWhatsappRecoverOutputDto
>
(
// soft_remove (5)
QueueWhatsappSoftRemoveDto,
QueueWhatsappSoftRemoveInputWhereDto,
QueueWhatsappSoftRemoveInputDto,
QueueWhatsappSoftRemoveOutputAffectedRowsDto,
QueueWhatsappSoftRemoveOutputDto,

// remove (4)
QueueWhatsappRemoveDto,
QueueWhatsappRemoveInputWhereDto,
QueueWhatsappRemoveInputDto,
QueueWhatsappRemoveOutputAffectedRowsDto,
QueueWhatsappRemoveOutputDto,

// recover (5)
QueueWhatsappRecoverDto,
QueueWhatsappRecoverInputWhereDto,
QueueWhatsappRecoverInputDto,
QueueWhatsappRecoverOutputAffectedRowsDto,
QueueWhatsappRecoverOutputDto
);



// ████████ initialize UploadCrudEngine ███████████████████████████████████████████
this.initUploadEngine
<
// upload (3)
QueueWhatsappUploadDto,
QueueWhatsappUploadInputDto,
QueueWhatsappUploadOutputDto,

// upload_delete (3)
QueueWhatsappUploadDeleteDto,
QueueWhatsappUploadDeleteInputDto,
QueueWhatsappUploadDeleteOutputDto
>
(
// upload (3)
QueueWhatsappUploadDto,
QueueWhatsappUploadInputDto,
QueueWhatsappUploadOutputDto,

// upload_delete (3)
QueueWhatsappUploadDeleteDto,
QueueWhatsappUploadDeleteInputDto,
QueueWhatsappUploadDeleteOutputDto
);


// ████████ initialize ImportExportCrudEngine █████████████████████████████████████

}

}