import { AcademicDegreeEntity } from "./entities/degree.entity";
import { Injectable } from "@nestjs/common";
import { DataSource, Repository } from "typeorm";
import { InjectRepository } from "@nestjs/typeorm";
import { ConfService, CreateCrudEngine, CrudFactory, DataValidationPipe, DeleteCrudEngine, FindCrudEngine, FindOutputPaginationDto, LibraryAppService, LogService, RemoveCrudEngine, UpdateCrudEngine, UploadCrudEngine, UpsertCrudEngine } from "@libs/library-app";
import { SelfGraphqlMicroserviceService } from "@libs/dynamic-app";
import { AcademicDegreeCreateDto, AcademicDegreeCreateInputDto, AcademicDegreeCreateOutputDto, AcademicDegreeDeleteDto, AcademicDegreeDeleteInputDto, AcademicDegreeDeleteInputWhereDto, AcademicDegreeDeleteOutputDto, AcademicDegreeFindDto, AcademicDegreeFindInputDto, AcademicDegreeFindInputGroupByDto, AcademicDegreeFindInputSortOrderDto, AcademicDegreeFindInputWhereDto, AcademicDegreeFindOneByIdDto, AcademicDegreeFindOneByIdInputDto, AcademicDegreeFindOutputDto, AcademicDegreeFindOutputRowsDto, AcademicDegreeRecoverDto, AcademicDegreeRecoverInputDto, AcademicDegreeRecoverInputWhereDto, AcademicDegreeRecoverOutputDto, AcademicDegreeRecoverOutputAffectedRowsDto, AcademicDegreeRemoveDto, AcademicDegreeRemoveInputDto, AcademicDegreeRemoveInputWhereDto, AcademicDegreeRemoveOutputDto, AcademicDegreeRemoveOutputAffectedRowsDto, AcademicDegreeRestoreDto, AcademicDegreeRestoreInputDto, AcademicDegreeRestoreInputWhereDto, AcademicDegreeRestoreOutputDto, AcademicDegreeSoftDeleteDto, AcademicDegreeSoftDeleteInputDto, AcademicDegreeSoftDeleteInputWhereDto, AcademicDegreeSoftDeleteOutputDto, AcademicDegreeSoftRemoveDto, AcademicDegreeSoftRemoveInputDto, AcademicDegreeSoftRemoveInputWhereDto, AcademicDegreeSoftRemoveOutputDto, AcademicDegreeSoftRemoveOutputAffectedRowsDto, AcademicDegreeUpdateDto, AcademicDegreeUpdateInputDto, AcademicDegreeUpdateInputSetsDto, AcademicDegreeUpdateInputWhereDto, AcademicDegreeUpdateOutputDto, AcademicDegreeUpdateOutputAffectedRowsDto, AcademicDegreeUploadDeleteDto, AcademicDegreeUploadDeleteInputDto, AcademicDegreeUploadDeleteOutputDto, AcademicDegreeUploadDto, AcademicDegreeUploadInputDto, AcademicDegreeUploadOutputDto, AcademicDegreeUpsertDto, AcademicDegreeUpsertInputDto, AcademicDegreeUpsertOutputDto } from "./dto/degree.dto";

@Injectable()
export class AcademicDegreeFactory extends CrudFactory<AcademicDegreeEntity> {

// ████████ FindCrudEngine ████████████████████████████████████████
public declare readonly findEngine: FindCrudEngine<
// entity (1)
AcademicDegreeEntity,

// find (8)
AcademicDegreeFindDto,
AcademicDegreeFindInputWhereDto,
AcademicDegreeFindInputSortOrderDto,
AcademicDegreeFindInputGroupByDto,
AcademicDegreeFindInputDto,
AcademicDegreeFindOutputRowsDto,
FindOutputPaginationDto,
AcademicDegreeFindOutputDto,

// find_one_by_id (2)
AcademicDegreeFindOneByIdDto,
AcademicDegreeFindOneByIdInputDto
>;

// ████████ CreateCrudEngine ████████████████████████████████████████
public declare readonly createEngine: CreateCrudEngine<
// entity (1)
AcademicDegreeEntity,

// create (3)
AcademicDegreeCreateDto,
AcademicDegreeCreateInputDto,
AcademicDegreeCreateOutputDto
>;

// ████████ UpdateCrudEngine ████████████████████████████████████████
public declare readonly updateEngine: UpdateCrudEngine<
// entity (1)
AcademicDegreeEntity,

// update (6)
AcademicDegreeUpdateDto,
AcademicDegreeUpdateInputWhereDto,
AcademicDegreeUpdateInputSetsDto,
AcademicDegreeUpdateInputDto,
AcademicDegreeUpdateOutputAffectedRowsDto,
AcademicDegreeUpdateOutputDto
>;

// ████████ DeleteCrudEngine ████████████████████████████████████████
public declare readonly deleteEngine: DeleteCrudEngine<
// entity (1)
AcademicDegreeEntity,

// soft_delete (4)
AcademicDegreeSoftDeleteDto,
AcademicDegreeSoftDeleteInputWhereDto,
AcademicDegreeSoftDeleteInputDto,
AcademicDegreeSoftDeleteOutputDto,

// delete (4)
AcademicDegreeDeleteDto,
AcademicDegreeDeleteInputWhereDto,
AcademicDegreeDeleteInputDto,
AcademicDegreeDeleteOutputDto,

// restore (4)
AcademicDegreeRestoreDto,
AcademicDegreeRestoreInputWhereDto,
AcademicDegreeRestoreInputDto,
AcademicDegreeRestoreOutputDto
>;

// ████████ UpsertCrudEngine ████████████████████████████████████████
public declare readonly upsertEngine: UpsertCrudEngine<
// entity (1)
AcademicDegreeEntity,

// upsert (3)
AcademicDegreeUpsertDto,
AcademicDegreeUpsertInputDto,
AcademicDegreeUpsertOutputDto
>;

// ████████ RemoveCrudEngine ████████████████████████████████████████
public declare readonly removeEngine: RemoveCrudEngine<
// entity (1)
AcademicDegreeEntity,

// soft_remove (5)
AcademicDegreeSoftRemoveDto,
AcademicDegreeSoftRemoveInputWhereDto,
AcademicDegreeSoftRemoveInputDto,
AcademicDegreeSoftRemoveOutputAffectedRowsDto,
AcademicDegreeSoftRemoveOutputDto,

// remove (4)
AcademicDegreeRemoveDto,
AcademicDegreeRemoveInputWhereDto,
AcademicDegreeRemoveInputDto,
AcademicDegreeRemoveOutputAffectedRowsDto,
AcademicDegreeRemoveOutputDto,

// recover (5)
AcademicDegreeRecoverDto,
AcademicDegreeRecoverInputWhereDto,
AcademicDegreeRecoverInputDto,
AcademicDegreeRecoverOutputAffectedRowsDto,
AcademicDegreeRecoverOutputDto
>;

// ████████ UploadCrudEngine ████████████████████████████████████████
public declare readonly uploadEngine: UploadCrudEngine<
// entity (1)
AcademicDegreeEntity,

// upload (3)
AcademicDegreeUploadDto,
AcademicDegreeUploadInputDto,
AcademicDegreeUploadOutputDto,

// upload_delete (3)
AcademicDegreeUploadDeleteDto,
AcademicDegreeUploadDeleteInputDto,
AcademicDegreeUploadDeleteOutputDto
>;

constructor(
// data source
protected readonly dataSource: DataSource,

@InjectRepository(AcademicDegreeEntity)
protected readonly repository: Repository<AcademicDegreeEntity>,

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
    AcademicDegreeEntity,
);

this.logService.setContext(AcademicDegreeFactory.name);

// ████████ initialize FindCrudEngine ██████████████████████████████████████
this.initFindEngine
<
// find (8)
AcademicDegreeFindDto,
AcademicDegreeFindInputWhereDto,
AcademicDegreeFindInputSortOrderDto,
AcademicDegreeFindInputGroupByDto,
AcademicDegreeFindInputDto,
AcademicDegreeFindOutputRowsDto,
FindOutputPaginationDto,
AcademicDegreeFindOutputDto,

// find_one_by_id (2)
AcademicDegreeFindOneByIdDto,
AcademicDegreeFindOneByIdInputDto
>
(
// find (8)
AcademicDegreeFindDto,
AcademicDegreeFindInputWhereDto,
AcademicDegreeFindInputSortOrderDto,
AcademicDegreeFindInputGroupByDto,
AcademicDegreeFindInputDto,
AcademicDegreeFindOutputRowsDto,
FindOutputPaginationDto,
AcademicDegreeFindOutputDto,

// find_one_by_id (2)
AcademicDegreeFindOneByIdDto,
AcademicDegreeFindOneByIdInputDto
);


// ████████ initialize CreateCrudEngine ███████████████████████████████████████
this.initCreateEngine
<
// create (3)
AcademicDegreeCreateDto,
AcademicDegreeCreateInputDto,
AcademicDegreeCreateOutputDto
>
(
// create (3)
AcademicDegreeCreateDto,
AcademicDegreeCreateInputDto,
AcademicDegreeCreateOutputDto
);

// ████████ initialize UpdateCrudEngine ████████████████████████████████████████
this.initUpdateEngine
<
// update (6)
AcademicDegreeUpdateDto,
AcademicDegreeUpdateInputWhereDto,
AcademicDegreeUpdateInputSetsDto,
AcademicDegreeUpdateInputDto,
AcademicDegreeUpdateOutputAffectedRowsDto,
AcademicDegreeUpdateOutputDto
>
(
// update (6)
AcademicDegreeUpdateDto,
AcademicDegreeUpdateInputWhereDto,
AcademicDegreeUpdateInputSetsDto,
AcademicDegreeUpdateInputDto,
AcademicDegreeUpdateOutputAffectedRowsDto,
AcademicDegreeUpdateOutputDto
);


// ████████ initialize DeleteCrudEngine ███████████████████████████████████████████
this.initDeleteEngine
<
// soft_delete (4)
AcademicDegreeSoftDeleteDto,
AcademicDegreeSoftDeleteInputWhereDto,
AcademicDegreeSoftDeleteInputDto,
AcademicDegreeSoftDeleteOutputDto,

// delete (4)
AcademicDegreeDeleteDto,
AcademicDegreeDeleteInputWhereDto,
AcademicDegreeDeleteInputDto,
AcademicDegreeDeleteOutputDto,

// restore (4)
AcademicDegreeRestoreDto,
AcademicDegreeRestoreInputWhereDto,
AcademicDegreeRestoreInputDto,
AcademicDegreeRestoreOutputDto
>
(
// soft_delete (4)
AcademicDegreeSoftDeleteDto,
AcademicDegreeSoftDeleteInputWhereDto,
AcademicDegreeSoftDeleteInputDto,
AcademicDegreeSoftDeleteOutputDto,

// delete (4)
AcademicDegreeDeleteDto,
AcademicDegreeDeleteInputWhereDto,
AcademicDegreeDeleteInputDto,
AcademicDegreeDeleteOutputDto,

// restore (4)
AcademicDegreeRestoreDto,
AcademicDegreeRestoreInputWhereDto,
AcademicDegreeRestoreInputDto,
AcademicDegreeRestoreOutputDto
);



// ████████ initialize UpsertCrudEngine ███████████████████████████████████████████
this.initUpsertEngine
<
// upsert (3)
AcademicDegreeUpsertDto,
AcademicDegreeUpsertInputDto,
AcademicDegreeUpsertOutputDto
>
(
// upsert (3)
AcademicDegreeUpsertDto,
AcademicDegreeUpsertInputDto,
AcademicDegreeUpsertOutputDto
);




// ████████ initialize RemoveCrudEngine ███████████████████████████████████████████
this.initRemoveEngine
<
// soft_remove (5)
AcademicDegreeSoftRemoveDto,
AcademicDegreeSoftRemoveInputWhereDto,
AcademicDegreeSoftRemoveInputDto,
AcademicDegreeSoftRemoveOutputAffectedRowsDto,
AcademicDegreeSoftRemoveOutputDto,

// remove (4)
AcademicDegreeRemoveDto,
AcademicDegreeRemoveInputWhereDto,
AcademicDegreeRemoveInputDto,
AcademicDegreeRemoveOutputAffectedRowsDto,
AcademicDegreeRemoveOutputDto,

// recover (5)
AcademicDegreeRecoverDto,
AcademicDegreeRecoverInputWhereDto,
AcademicDegreeRecoverInputDto,
AcademicDegreeRecoverOutputAffectedRowsDto,
AcademicDegreeRecoverOutputDto
>
(
// soft_remove (5)
AcademicDegreeSoftRemoveDto,
AcademicDegreeSoftRemoveInputWhereDto,
AcademicDegreeSoftRemoveInputDto,
AcademicDegreeSoftRemoveOutputAffectedRowsDto,
AcademicDegreeSoftRemoveOutputDto,

// remove (4)
AcademicDegreeRemoveDto,
AcademicDegreeRemoveInputWhereDto,
AcademicDegreeRemoveInputDto,
AcademicDegreeRemoveOutputAffectedRowsDto,
AcademicDegreeRemoveOutputDto,

// recover (5)
AcademicDegreeRecoverDto,
AcademicDegreeRecoverInputWhereDto,
AcademicDegreeRecoverInputDto,
AcademicDegreeRecoverOutputAffectedRowsDto,
AcademicDegreeRecoverOutputDto
);



// ████████ initialize UploadCrudEngine ███████████████████████████████████████████
this.initUploadEngine
<
// upload (3)
AcademicDegreeUploadDto,
AcademicDegreeUploadInputDto,
AcademicDegreeUploadOutputDto,

// upload_delete (3)
AcademicDegreeUploadDeleteDto,
AcademicDegreeUploadDeleteInputDto,
AcademicDegreeUploadDeleteOutputDto
>
(
// upload (3)
AcademicDegreeUploadDto,
AcademicDegreeUploadInputDto,
AcademicDegreeUploadOutputDto,

// upload_delete (3)
AcademicDegreeUploadDeleteDto,
AcademicDegreeUploadDeleteInputDto,
AcademicDegreeUploadDeleteOutputDto
);


// ████████ initialize ImportExportCrudEngine █████████████████████████████████████

}

}