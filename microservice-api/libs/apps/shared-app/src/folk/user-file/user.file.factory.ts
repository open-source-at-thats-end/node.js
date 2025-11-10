import { UserFileEntity } from "./entities/user.file.entity";
import { Injectable } from "@nestjs/common";
import { DataSource, Repository } from "typeorm";
import { InjectRepository } from "@nestjs/typeorm";
import { ConfService, CreateCrudEngine, CrudFactory, DataValidationPipe, DeleteCrudEngine, FindCrudEngine, FindOutputPaginationDto, ImageProcessingService, LibraryAppService, LogService, RemoveCrudEngine, UpdateCrudEngine, UploadCrudEngine, UpsertCrudEngine } from "@libs/library-app";
import { SelfGraphqlMicroserviceService } from "@libs/dynamic-app";
import { UserFileCreateDto, UserFileCreateInputDto, UserFileCreateOutputDto, UserFileDeleteDto, UserFileDeleteInputDto, UserFileDeleteInputWhereDto, UserFileDeleteOutputDto, UserFileFindDto, UserFileFindInputDto, UserFileFindInputGroupByDto, UserFileFindInputSortOrderDto, UserFileFindInputWhereDto, UserFileFindOneByIdDto, UserFileFindOneByIdInputDto, UserFileFindOutputDto, UserFileFindOutputRowsDto, UserFileRecordPositionDto, UserFileRecordPositionInputDto, UserFileRecordPositionOutputDto, UserFileRecoverDto, UserFileRecoverInputDto, UserFileRecoverInputWhereDto, UserFileRecoverOutputDto, UserFileRecoverOutputAffectedRowsDto, UserFileRemoveDto, UserFileRemoveInputDto, UserFileRemoveInputWhereDto, UserFileRemoveOutputDto, UserFileRemoveOutputAffectedRowsDto, UserFileRestoreDto, UserFileRestoreInputDto, UserFileRestoreInputWhereDto, UserFileRestoreOutputDto, UserFileSoftDeleteDto, UserFileSoftDeleteInputDto, UserFileSoftDeleteInputWhereDto, UserFileSoftDeleteOutputDto, UserFileSoftRemoveDto, UserFileSoftRemoveInputDto, UserFileSoftRemoveInputWhereDto, UserFileSoftRemoveOutputDto, UserFileSoftRemoveOutputAffectedRowsDto, UserFileUpdateDto, UserFileUpdateInputDto, UserFileUpdateInputSetsDto, UserFileUpdateInputWhereDto, UserFileUpdateOutputDto, UserFileUpdateOutputAffectedRowsDto, UserFileUploadDeleteDto, UserFileUploadDeleteInputDto, UserFileUploadDeleteOutputDto, UserFileUploadDto, UserFileUploadInputDto, UserFileUploadOutputDto, UserFileUpsertDto, UserFileUpsertInputDto, UserFileUpsertOutputDto } from "./dto/user.file.dto";
import { RecordPositionCrudEngine } from "@libs/library-app/crud/engine/record.position.engine";

@Injectable()
export class UserFileFactory extends CrudFactory<UserFileEntity> {

// ████████ FindCrudEngine ████████████████████████████████████████
public declare readonly findEngine: FindCrudEngine<
// entity (1)
UserFileEntity,

// find (8)
UserFileFindDto,
UserFileFindInputWhereDto,
UserFileFindInputSortOrderDto,
UserFileFindInputGroupByDto,
UserFileFindInputDto,
UserFileFindOutputRowsDto,
FindOutputPaginationDto,
UserFileFindOutputDto,

// find_one_by_id (2)
UserFileFindOneByIdDto,
UserFileFindOneByIdInputDto
>;

// ████████ CreateCrudEngine ████████████████████████████████████████
public declare readonly createEngine: CreateCrudEngine<
// entity (1)
UserFileEntity,

// create (3)
UserFileCreateDto,
UserFileCreateInputDto,
UserFileCreateOutputDto
>;

// ████████ UpdateCrudEngine ████████████████████████████████████████
public declare readonly updateEngine: UpdateCrudEngine<
// entity (1)
UserFileEntity,

// update (6)
UserFileUpdateDto,
UserFileUpdateInputWhereDto,
UserFileUpdateInputSetsDto,
UserFileUpdateInputDto,
UserFileUpdateOutputAffectedRowsDto,
UserFileUpdateOutputDto
>;

// ████████ DeleteCrudEngine ████████████████████████████████████████
public declare readonly deleteEngine: DeleteCrudEngine<
// entity (1)
UserFileEntity,

// soft_delete (4)
UserFileSoftDeleteDto,
UserFileSoftDeleteInputWhereDto,
UserFileSoftDeleteInputDto,
UserFileSoftDeleteOutputDto,

// delete (4)
UserFileDeleteDto,
UserFileDeleteInputWhereDto,
UserFileDeleteInputDto,
UserFileDeleteOutputDto,

// restore (4)
UserFileRestoreDto,
UserFileRestoreInputWhereDto,
UserFileRestoreInputDto,
UserFileRestoreOutputDto
>;

// ████████ UpsertCrudEngine ████████████████████████████████████████
public declare readonly upsertEngine: UpsertCrudEngine<
// entity (1)
UserFileEntity,

// upsert (3)
UserFileUpsertDto,
UserFileUpsertInputDto,
UserFileUpsertOutputDto
>;

// ████████ RemoveCrudEngine ████████████████████████████████████████
public declare readonly removeEngine: RemoveCrudEngine<
// entity (1)
UserFileEntity,

// soft_remove (5)
UserFileSoftRemoveDto,
UserFileSoftRemoveInputWhereDto,
UserFileSoftRemoveInputDto,
UserFileSoftRemoveOutputAffectedRowsDto,
UserFileSoftRemoveOutputDto,

// remove (4)
UserFileRemoveDto,
UserFileRemoveInputWhereDto,
UserFileRemoveInputDto,
UserFileRemoveOutputAffectedRowsDto,
UserFileRemoveOutputDto,

// recover (5)
UserFileRecoverDto,
UserFileRecoverInputWhereDto,
UserFileRecoverInputDto,
UserFileRecoverOutputAffectedRowsDto,
UserFileRecoverOutputDto
>;

// ████████ UploadCrudEngine ████████████████████████████████████████
public declare readonly uploadEngine: UploadCrudEngine<
// entity (1)
UserFileEntity,

// upload (3)
UserFileUploadDto,
UserFileUploadInputDto,
UserFileUploadOutputDto,

// upload_delete (3)
UserFileUploadDeleteDto,
UserFileUploadDeleteInputDto,
UserFileUploadDeleteOutputDto
>;

// ████████ RecordPositionCrudEngine ████████████████████████████████████████
public declare readonly recordPositionEngine: RecordPositionCrudEngine<
// entity (1)
UserFileEntity,


//record_position (3)
UserFileRecordPositionDto,
UserFileRecordPositionInputDto,
UserFileRecordPositionOutputDto

>;

constructor(
// data source
protected readonly dataSource: DataSource,

@InjectRepository(UserFileEntity)
protected readonly repository: Repository<UserFileEntity>,

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
    UserFileEntity,
);

this.logService.setContext(UserFileFactory.name);

// set image processing service object to factory
this.imageProcessingService = imageProcessingService;

// ████████ initialize FindCrudEngine ██████████████████████████████████████
this.initFindEngine
<
// find (8)
UserFileFindDto,
UserFileFindInputWhereDto,
UserFileFindInputSortOrderDto,
UserFileFindInputGroupByDto,
UserFileFindInputDto,
UserFileFindOutputRowsDto,
FindOutputPaginationDto,
UserFileFindOutputDto,

// find_one_by_id (2)
UserFileFindOneByIdDto,
UserFileFindOneByIdInputDto
>
(
// find (8)
UserFileFindDto,
UserFileFindInputWhereDto,
UserFileFindInputSortOrderDto,
UserFileFindInputGroupByDto,
UserFileFindInputDto,
UserFileFindOutputRowsDto,
FindOutputPaginationDto,
UserFileFindOutputDto,

// find_one_by_id (2)
UserFileFindOneByIdDto,
UserFileFindOneByIdInputDto
);


// ████████ initialize CreateCrudEngine ███████████████████████████████████████
this.initCreateEngine
<
// create (3)
UserFileCreateDto,
UserFileCreateInputDto,
UserFileCreateOutputDto
>
(
// create (3)
UserFileCreateDto,
UserFileCreateInputDto,
UserFileCreateOutputDto
);

// ████████ initialize UpdateCrudEngine ████████████████████████████████████████
this.initUpdateEngine
<
// update (6)
UserFileUpdateDto,
UserFileUpdateInputWhereDto,
UserFileUpdateInputSetsDto,
UserFileUpdateInputDto,
UserFileUpdateOutputAffectedRowsDto,
UserFileUpdateOutputDto
>
(
// update (6)
UserFileUpdateDto,
UserFileUpdateInputWhereDto,
UserFileUpdateInputSetsDto,
UserFileUpdateInputDto,
UserFileUpdateOutputAffectedRowsDto,
UserFileUpdateOutputDto
);


// ████████ initialize DeleteCrudEngine ███████████████████████████████████████████
this.initDeleteEngine
<
// soft_delete (4)
UserFileSoftDeleteDto,
UserFileSoftDeleteInputWhereDto,
UserFileSoftDeleteInputDto,
UserFileSoftDeleteOutputDto,

// delete (4)
UserFileDeleteDto,
UserFileDeleteInputWhereDto,
UserFileDeleteInputDto,
UserFileDeleteOutputDto,

// restore (4)
UserFileRestoreDto,
UserFileRestoreInputWhereDto,
UserFileRestoreInputDto,
UserFileRestoreOutputDto
>
(
// soft_delete (4)
UserFileSoftDeleteDto,
UserFileSoftDeleteInputWhereDto,
UserFileSoftDeleteInputDto,
UserFileSoftDeleteOutputDto,

// delete (4)
UserFileDeleteDto,
UserFileDeleteInputWhereDto,
UserFileDeleteInputDto,
UserFileDeleteOutputDto,

// restore (4)
UserFileRestoreDto,
UserFileRestoreInputWhereDto,
UserFileRestoreInputDto,
UserFileRestoreOutputDto
);



// ████████ initialize UpsertCrudEngine ███████████████████████████████████████████
this.initUpsertEngine
<
// upsert (3)
UserFileUpsertDto,
UserFileUpsertInputDto,
UserFileUpsertOutputDto
>
(
// upsert (3)
UserFileUpsertDto,
UserFileUpsertInputDto,
UserFileUpsertOutputDto
);




// ████████ initialize RemoveCrudEngine ███████████████████████████████████████████
this.initRemoveEngine
<
// soft_remove (5)
UserFileSoftRemoveDto,
UserFileSoftRemoveInputWhereDto,
UserFileSoftRemoveInputDto,
UserFileSoftRemoveOutputAffectedRowsDto,
UserFileSoftRemoveOutputDto,

// remove (4)
UserFileRemoveDto,
UserFileRemoveInputWhereDto,
UserFileRemoveInputDto,
UserFileRemoveOutputAffectedRowsDto,
UserFileRemoveOutputDto,

// recover (5)
UserFileRecoverDto,
UserFileRecoverInputWhereDto,
UserFileRecoverInputDto,
UserFileRecoverOutputAffectedRowsDto,
UserFileRecoverOutputDto
>
(
// soft_remove (5)
UserFileSoftRemoveDto,
UserFileSoftRemoveInputWhereDto,
UserFileSoftRemoveInputDto,
UserFileSoftRemoveOutputAffectedRowsDto,
UserFileSoftRemoveOutputDto,

// remove (4)
UserFileRemoveDto,
UserFileRemoveInputWhereDto,
UserFileRemoveInputDto,
UserFileRemoveOutputAffectedRowsDto,
UserFileRemoveOutputDto,

// recover (5)
UserFileRecoverDto,
UserFileRecoverInputWhereDto,
UserFileRecoverInputDto,
UserFileRecoverOutputAffectedRowsDto,
UserFileRecoverOutputDto
);



// ████████ initialize UploadCrudEngine ███████████████████████████████████████████
this.initUploadEngine
<
// upload (3)
UserFileUploadDto,
UserFileUploadInputDto,
UserFileUploadOutputDto,

// upload_delete (3)
UserFileUploadDeleteDto,
UserFileUploadDeleteInputDto,
UserFileUploadDeleteOutputDto
>
(
// upload (3)
UserFileUploadDto,
UserFileUploadInputDto,
UserFileUploadOutputDto,

// upload_delete (3)
UserFileUploadDeleteDto,
UserFileUploadDeleteInputDto,
UserFileUploadDeleteOutputDto
);

// ████████ initialize RecordPostionCrudEngine ████████████████████████████████████████
this.initRecordPositionEngine
<
// file_relocation (3)
UserFileRecordPositionDto,
UserFileRecordPositionInputDto,
UserFileRecordPositionOutputDto
>
(

//file_relocation (3)
UserFileRecordPositionDto,
UserFileRecordPositionInputDto,
UserFileRecordPositionOutputDto
);

// ████████ initialize ImportExportCrudEngine █████████████████████████████████████

}

// ████████ initialize ImportExportCrudEngine █████████████████████████████████████

}

