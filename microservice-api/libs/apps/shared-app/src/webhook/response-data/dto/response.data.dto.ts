import { UploadDeleteInputDto, UploadDeleteOutputDto, UploadInputDto, UploadOutputDto, UploadArtefact, UploadDtoCRUDTypeDefinition, UploadInputArtefactCRUDTypeDefinition, UploadOutputArtefactCRUDTypeDefinition, UploadDeleteArtefact, UploadDeleteDtoCRUDTypeDefinition, UploadDeleteInputArtefactCRUDTypeDefinition, UploadDeleteOutputArtefactCRUDTypeDefinition, CreateArtefact, CreateDtoCRUDTypeDefinition, CreateInputCRUDTypeDefinition, CreateOutputCRUDTypeDefinition, CrudDefMetaDesc, DateTime, DeleteArtefact, DeleteDtoCRUDTypeDefinition, DeleteInputCRUDTypeDefinition, DeleteOutputCRUDTypeDefinition, FindArtefact, FindDtoCRUDTypeDefinition, FindInputGroupByCRUDTypeDefinition, FindInputSortOrderCRUDTypeDefinition, FindInputCRUDTypeDefinition, FindInputWhereCRUDTypeDefinition, FindOneByIdArtefact, FindOperatorDto, FindOutputPaginationDto, FindOutputCRUDTypeDefinition, OnlyOneSeachOperatorAllowed, RecordSortDirectionEnum, RestoreArtefact, RestoreDtoCRUDTypeDefinition, RestoreInputCRUDTypeDefinition, SoftDeleteArtefact, SoftDeleteDtoCRUDTypeDefinition, SoftDeleteInputCRUDTypeDefinition, SoftDeleteOutputCRUDTypeDefinition, UpdateArtefact, UpdateDtoCRUDTypeDefinition, UpdateInputSetsCRUDTypeDefinition, UpdateInputCRUDTypeDefinition, UpdateInputWhereCRUDTypeDefinition, UpdateOutputCRUDTypeDefinition, SoftDeleteInputWhereCRUDTypeDefinition, RestoreInputWhereCRUDTypeDefinition, RestoreOutputCRUDTypeDefinition, UpsertDtoCRUDTypeDefinition, UpsertArtefact, UpsertInputCRUDTypeDefinition, UpsertOutputCRUDTypeDefinition, UpsertStatusEnum, SoftRemoveDtoCRUDTypeDefinition, SoftRemoveArtefact, SoftRemoveInputWhereCRUDTypeDefinition, SoftRemoveInputCRUDTypeDefinition, SoftRemoveOutputCRUDTypeDefinition, RemoveDtoCRUDTypeDefinition, RemoveArtefact, RemoveInputCRUDTypeDefinition, RemoveOutputCRUDTypeDefinition, SoftRemoveOutputAffectedRowsCRUDTypeDefinition, FindOutputRowsCRUDTypeDefinition, UpdateOutputAffectedRowsCRUDTypeDefinition, RemoveOutputAffectedRowsCRUDTypeDefinition, RecoverDtoCRUDTypeDefinition, RecoverArtefact, RecoverInputCRUDTypeDefinition, RecoverOutputCRUDTypeDefinition, RecoverInputWhereCRUDTypeDefinition, RecoverOutputAffectedRowsCRUDTypeDefinition, FindInputDtoCRUDTypeDefinition, FindOneByIdInputCRUDTypeDefinition, FindInputPaginationOptionsDto, FindOutputPaginationOptionsDto, IdInputDto, DeleteInputWhereCRUDTypeDefinition, RemoveInputWhereCRUDTypeDefinition, WithDeletedInputDto } from "@libs/library-app";
import { WebhookResponseDataEntityMeta as meta, WebhookResponseDataEntity } from "../entities/response.data.entity";
import { Directive, Field, InputType, Int, IntersectionType, ObjectType, PartialType } from "@nestjs/graphql";
import { IsNotEmpty, IsNumber, IsOptional, Validate } from "class-validator";
import { FindManyOptions, FindOptionsOrder, FindOptionsOrderValue, FindOptionsWhere } from "typeorm";
import { Exclude } from "class-transformer";
import { IdOrIdsInputDto, CrudAffectedDto, UpsertOutputProcessStatusDto } from "@libs/library-app";
import { GraphQLJSONObject } from "graphql-scalars";
import { WebhookResponseDataUploadFileFieldEnum } from "../response.data.enum";
import { WebhookResponseFindInputWhereDto } from "../../response/dto/response.dto";

/**
 * █████████████████████████████████████████████████████████████
 * ██ DO NOT CHANGE IN THIS FILE IT WILL CRASH THE APP        ██
 * █████████████████████████████████████████████████████████████
**/

/**
 * # [done] ['../entities/market.type.entity', './dto/market.type.dto'] . Hint: find [ /market.type. => and replace with ] [ /your-module. ] 
 * # [done] do not break some dependences which required this class
 * # [done] module [MarketType]
 * # [done] defination [FindInputDtoCRUDTypeDefinition]
 * # [done] defination [FindInputWhereCRUDTypeDefinition]
 * # [done] defination [FindInputSortOrderCRUDTypeDefinition]
 * # [done] defination [FindInputGroupByCRUDTypeDefinition]
 * # [done] defination [FindOutputRowsCRUDTypeDefinition]
 * # [done] defination [FindOutputCRUDTypeDefinition]
 * # [done] defination [CreateInputCRUDTypeDefinition]
 * # [done] defination [conflictResolveFields]
 * # [done] [FindOutputPagination] is imported from '@libs/library-app' (real location: /libs/library-app/src/crud/dto/standard/crud.pagination.dto)
 **/

@ObjectType({ isAbstract: true })
@Directive('@shareable')
export class WebhookResponseDataDto extends WebhookResponseDataEntity implements FindInputDtoCRUDTypeDefinition{
     /**
     * we need to transform filed data type to any because find has complex process
     * this is because every field is defined in entity with specific type which cannot be override directly dure to inhereatance
     * so creating new class in between to make sure call cannot have other filed then defined in entity
     * 
     * in this DTO we need to type cast the fields as we need fields but those will be manipulated differently
     * as we are extending the class we will have issue with the fields types so converting in any
     * this will help other dto to use the fields but they will be typed as required in them
     **/
     declare id?: any
     declare whresp_id?: any
     declare raw?: any
     declare created?: any
     declare deleted?: any

     declare fr_webhook_response?: any;
}

/**
 * █████████████████████████████████████████████████████████████
 * █ FIND DTO ██████████████████████████████████████████████████
 * █████████████████████████████████████████████████████████████
**/
@ObjectType({ isAbstract: true })
@Directive('@shareable')
export class WebhookResponseDataFindDto extends WebhookResponseDataEntity implements FindDtoCRUDTypeDefinition{
    static metaname: string = `${WebhookResponseDataEntity?.metaname}${FindArtefact}`;
    static metadesc: string = CrudDefMetaDesc.find_metadesc;
}


// ████ FIND INPUT DTO ████████████████████████████████████████████████


@InputType()
export class WebhookResponseDataFindInputWhereDto extends WebhookResponseDataDto implements FindInputWhereCRUDTypeDefinition{
    @Field(() => FindOperatorDto, {nullable: true, description: meta?.id.desc})
    @IsOptional()
    declare id?: FindOperatorDto;    

    @Field(() => FindOperatorDto, {nullable: true, description: meta?.whresp_id.desc})
    @IsOptional()
    declare whresp_id?: FindOperatorDto;
    
    @Field(() => FindOperatorDto, {nullable: true, description: meta?.created.desc})
    @IsOptional()
    declare created?: FindOperatorDto;

    @Field(() => FindOperatorDto, {nullable: true, description: meta?.deleted.desc})
    @IsOptional()
    declare deleted?: FindOperatorDto;

    // ████ FR_ WHERE: INTERNAL RELATIONS WHERE ████████████████████████████████████████████████

    @Field(() => [WebhookResponseFindInputWhereDto], {nullable: true, description: meta?.fr_webhook_response.desc})
    @IsOptional()
    declare fr_webhook_response?: WebhookResponseFindInputWhereDto[];
}

@InputType()
export class WebhookResponseDataFindInputSortOrderDto implements FindOptionsOrder<WebhookResponseDataDto>, FindInputSortOrderCRUDTypeDefinition{
    
    @Field(() => RecordSortDirectionEnum, { nullable: true }) 
    @IsOptional()
    id?: RecordSortDirectionEnum;
    
    @Field(() => RecordSortDirectionEnum, { nullable: true })
    @IsOptional()
    whresp_id?: RecordSortDirectionEnum;

    @Field(() => RecordSortDirectionEnum, { nullable: true }) 
    @IsOptional()
    created?: RecordSortDirectionEnum;

    @Field(() => RecordSortDirectionEnum, { nullable: true }) 
    @IsOptional()
    deleted?: RecordSortDirectionEnum;
}

@InputType()
export class WebhookResponseDataFindInputGroupByDto implements FindOptionsOrder<WebhookResponseDataDto>, FindInputGroupByCRUDTypeDefinition{
    
    @Field(() => Boolean, { nullable: true })
    @IsOptional()
    whresp_id?: boolean

    @Field(() => Boolean, { nullable: true })
    @IsOptional()
    created?: boolean;

    @Field(() => Boolean, { nullable: true })
    @IsOptional()
    deleted?: boolean;
}

@InputType()
export class WebhookResponseDataFindInputDto extends IntersectionType(FindInputPaginationOptionsDto, WithDeletedInputDto) implements FindManyOptions<WebhookResponseDataDto>, FindInputCRUDTypeDefinition{
    // input layout design for users to perform find with various database options
  
    /**
     * Conditions to be met for the resulting set.
     * also validate the user pass only 1 operator to search for field
     */
    @Field(() => [WebhookResponseDataFindInputWhereDto], { nullable: true, description: CrudDefMetaDesc.find_where })
    @IsOptional()
    @Validate(OnlyOneSeachOperatorAllowed)
    declare where?: FindOptionsWhere<WebhookResponseDataFindInputWhereDto>[];
  
  
    /**
     * Specifies how to group the rows returned by the SELECT statement.
     */
    @Field(() => WebhookResponseDataFindInputGroupByDto, { nullable: true, description: CrudDefMetaDesc.find_group_by })
    @IsOptional()
    declare groupBy?: WebhookResponseDataFindInputGroupByDto;
  
    /**
     * Sort the result set by fields using ascending or descending order.
     */
    @Field(() => WebhookResponseDataFindInputSortOrderDto, { nullable: true, description: CrudDefMetaDesc.find_order })
    @IsOptional()
    declare order?: FindOptionsOrder<WebhookResponseDataFindInputSortOrderDto>;
}


// ████ FIND OUTPUT DTO ████████████████████████████████████████████████

@ObjectType()
@Directive('@shareable')
export class WebhookResponseDataFindOutputRowsDto extends WebhookResponseDataFindDto implements FindOutputRowsCRUDTypeDefinition{
    // this DTO will be used at many palce for output object, os make sure this is properly developed
}

@ObjectType()
@Directive('@shareable')
export class WebhookResponseDataFindOutputDto extends FindOutputPaginationOptionsDto implements FindOutputCRUDTypeDefinition{
    // output layout design for users to get find response

    // we assign any because iin GRAPHQL for requuest body this rows will have fields with boolean value whether to include in response or not
    // this is very crucial to understand this structure and you need to understand how graphQL works
    @Field(() => [WebhookResponseDataEntity], {description: CrudDefMetaDesc.find_rows})
    declare rows?: WebhookResponseDataEntity | WebhookResponseDataEntity[] | any;
}

/**
 * ██████████████████████████████████████████████████████████████████████████████████████████████████████████████████
 * █ FIND ONE BY ID DTO █████████████████████████████████████████████████████████████████████████████████████████████
 * ██████████████████████████████████████████████████████████████████████████████████████████████████████████████████
**/

export class WebhookResponseDataFindOneByIdDto extends WebhookResponseDataEntity implements FindDtoCRUDTypeDefinition{
    static metaname: string = `${WebhookResponseDataEntity.metaname}${FindOneByIdArtefact}`;
    static metadesc: string = CrudDefMetaDesc.findOneById_metadesc;
}

// ████ FIND ONE BY ID INPUT DTO ████████████████████████████████████████████████

@InputType()
export class WebhookResponseDataFindOneByIdInputDto extends IntersectionType(IdInputDto, WithDeletedInputDto) implements FindOneByIdInputCRUDTypeDefinition{

}

/**
 * █████████████████████████████████████████████████████████████
 * █ CREATE DTO ████████████████████████████████████████████████
 * █████████████████████████████████████████████████████████████
**/

export class WebhookResponseDataCreateDto extends WebhookResponseDataEntity implements CreateDtoCRUDTypeDefinition {
    static metaname: string = `${WebhookResponseDataEntity.metaname}${CreateArtefact}`;
    static metadesc: string = CrudDefMetaDesc.create_metadesc;
}
// ████ CREATE INPUT DTO ████████████████████████████████████████████████

@InputType()
export class WebhookResponseDataCreateInputDto extends  WebhookResponseDataCreateDto implements CreateInputCRUDTypeDefinition {

    @Field(() => Int, {nullable: false, description: meta?.whresp_id.desc})
    declare whresp_id?: number;

    @Field(() => GraphQLJSONObject, {nullable: true, description: meta?.raw.desc})
    declare raw?: JSON;
    
}

// ████ CREATE OUTPUT DTO ████████████████████████████████████████████████

@ObjectType()
@Directive('@shareable')
export class WebhookResponseDataCreateOutputDto extends WebhookResponseDataFindOutputRowsDto implements CreateOutputCRUDTypeDefinition {
    /**
     * avoiding redundant code
     * considering whatever FindOutputRows return, same apply to CreateOutput so extending class
     * just add what is new or different for CreateOutput, that means it's 100% customisable
     * you can also remove extends *FindOutputRows and define entire custom dto here if needed 
     **/
}

/**
 * █████████████████████████████████████████████████████████████
 * █ UPDATE DTO ████████████████████████████████████████████████
 * █████████████████████████████████████████████████████████████
**/


export class WebhookResponseDataUpdateDto extends WebhookResponseDataDto implements UpdateDtoCRUDTypeDefinition{
    static metaname: string = `${WebhookResponseDataEntity.metaname}${UpdateArtefact}`;
    static metadesc: string = CrudDefMetaDesc.update_metadesc;
}

// ████ UPDATE INPUT DTO ████████████████████████████████████████████████

@InputType()
export class WebhookResponseDataUpdateInputWhereDto extends WebhookResponseDataFindInputWhereDto implements UpdateInputWhereCRUDTypeDefinition{
    /**
     * avoiding redundant code
     * considering whatever FindInputWhere ask for input, same apply to UpdateInputWhere so extending class
     * just add what is new or different for UpdateInputWhere, that means it's 100% customisable
     * you can also remove extends *FindInputWhere and define entire custom dto here if needed 
     **/
}

@InputType()
export class WebhookResponseDataUpdateInputSetsDto extends PartialType(WebhookResponseDataCreateInputDto) implements UpdateInputSetsCRUDTypeDefinition {
    /**
     * we extends using PartialType() because update has all insert fileds but instead of required it is options
     * PartialType() do that for us so we don't have to write duplicate code
     * 
     * avoiding redundant code
     * considering whatever CreateInput ask for input, same apply to UpdateInputSets so extending class
     * just add what is new or different for UpdateInputSets, that means it's 100% customisable
     * you can also remove extends *CreateInput and define entire custom dto here if needed 
     **/
}

@InputType()
export class WebhookResponseDataUpdateInputDto implements UpdateInputCRUDTypeDefinition{
    // input layout design for users to perform update with various database options
  
    /**
     * Conditions to be met for the resulting set.
     * also validate the user pass only 1 operator to search for field
     */
    @Field(() => [WebhookResponseDataUpdateInputWhereDto], { nullable: false, description: CrudDefMetaDesc.update_where })
    @IsNotEmpty()
    @Validate(OnlyOneSeachOperatorAllowed)
    where!: FindOptionsWhere<WebhookResponseDataUpdateInputWhereDto>[];

    /**
     * What to set for update
     * basically fields list of update
     */
    @Field(() => WebhookResponseDataUpdateInputSetsDto, { nullable: false, description: CrudDefMetaDesc.update_sets })
    @IsNotEmpty()
    sets!: WebhookResponseDataUpdateInputSetsDto

    /**
     * Set to true if you want to include soft deleted records in result set.
     * Note: soft deleted records are not included by default.
     */
    @Exclude()
    withDeleted: boolean = false;
}

// ████ UPDATE OUTPUT DTO ████████████████████████████████████████████████

@ObjectType()
@Directive('@shareable')
export class WebhookResponseDataUpdateOutputAffectedRowsDto extends WebhookResponseDataFindOutputRowsDto implements UpdateOutputAffectedRowsCRUDTypeDefinition{
    /**
     * avoiding redundant code
     * considering whatever FindOutputRows return, same apply to UpdateOutputAffectedRows so extending class
     * just add what is new or different for UpdateOutputAffectedRows, that means it's 100% customisable
     * you can also remove extends *FindOutputRows and define entire custom dto here if needed 
     **/
}

@ObjectType()
@Directive('@shareable')
export class WebhookResponseDataUpdateOutputDto extends CrudAffectedDto implements UpdateOutputCRUDTypeDefinition{
  @Field(() => [WebhookResponseDataEntity], {description: CrudDefMetaDesc.update_affected_rows}) 
  declare affectedRows?: WebhookResponseDataEntity[] | any; 
}


/**
 * █████████████████████████████████████████████████████████████
 * █ SOFT DELETE DTO ███████████████████████████████████████████
 * █████████████████████████████████████████████████████████████
**/
// this operation run directly withouth checking the data if exist or not, so it's quick but do not provide more information about operation

// ████ SOFT DELETE INPUT DTO ████████████████████████████████████████████████
export class WebhookResponseDataSoftDeleteDto extends WebhookResponseDataEntity implements SoftDeleteDtoCRUDTypeDefinition{
  static metaname: string = `${WebhookResponseDataEntity.metaname}${SoftDeleteArtefact}`;
  static metadesc: string = CrudDefMetaDesc.softDelete_metadesc;
}

@InputType()
export class WebhookResponseDataSoftDeleteInputWhereDto extends WebhookResponseDataFindInputWhereDto implements SoftDeleteInputWhereCRUDTypeDefinition{
  /**
   * avoiding redundant code
   * considering whatever FindInputWhere ask for input, same apply to SoftDeleteInputWhere so extending class
   * just add what is new or different for SoftDeleteInputWhere, that means it's 100% customisable
   * you can also remove extends *FindInputWhere and define entire custom dto here if needed 
   **/
}

@InputType()
export class WebhookResponseDataSoftDeleteInputDto implements SoftDeleteInputCRUDTypeDefinition{
  @Field(() => [WebhookResponseDataSoftDeleteInputWhereDto], {nullable: true, description: CrudDefMetaDesc.softDelete_where})
  @Validate(OnlyOneSeachOperatorAllowed)
  where?: FindOptionsWhere<WebhookResponseDataSoftDeleteInputWhereDto>[];
}


// ████ SOFT DELETE OUTPUT DTO ████████████████████████████████████████████████

@ObjectType()
@Directive('@shareable')
export class WebhookResponseDataSoftDeleteOutputDto extends CrudAffectedDto implements SoftDeleteOutputCRUDTypeDefinition{
  /**
   * avoiding redundant code
   * considering whatever AffectedDto return, same apply to SoftDeleteOutput so extending class
   * just add what is new or different for SoftDeleteOutput, that means it's 100% customisable
   * you can also remove extends AffectedDto and define entire custom dto here if needed 
   **/
}

/**
 * █████████████████████████████████████████████████████████████
 * █ DELETE DTO ████████████████████████████████████████████████
 * █████████████████████████████████████████████████████████████
**/
// this operation run directly withouth checking the data if exist or not, so it's quick but do not provide more information about operation

export class WebhookResponseDataDeleteDto extends WebhookResponseDataEntity implements DeleteDtoCRUDTypeDefinition{
  static metaname: string = `${WebhookResponseDataEntity.metaname}${DeleteArtefact}`;
  static metadesc: string = CrudDefMetaDesc.delete_metadesc;
}

// ████ DELETE INPUT DTO ████████████████████████████████████████████████

@InputType()
export class WebhookResponseDataDeleteInputWhereDto extends WebhookResponseDataFindInputWhereDto implements DeleteInputWhereCRUDTypeDefinition{
  /**
   * avoiding redundant code
   * considering whatever FindInputWhere ask for input, same apply to SoftDeleteInputWhere so extending class
   * just add what is new or different for SoftDeleteInputWhere, that means it's 100% customisable
   * you can also remove extends *FindInputWhere and define entire custom dto here if needed 
   **/
}

@InputType()
export class WebhookResponseDataDeleteInputDto implements DeleteInputCRUDTypeDefinition{
  @Field(() => [WebhookResponseDataDeleteInputWhereDto], {nullable: true, description: CrudDefMetaDesc.delete_where})
  @Validate(OnlyOneSeachOperatorAllowed)
  where?: FindOptionsWhere<WebhookResponseDataDeleteInputWhereDto>[];
}


// ████ DELETE OUTPUT DTO ████████████████████████████████████████████████

@ObjectType()
@Directive('@shareable')
export class WebhookResponseDataDeleteOutputDto extends CrudAffectedDto implements DeleteOutputCRUDTypeDefinition{
  /**
   * avoiding redundant code
   * considering whatever AffectedDto return, same apply to DeleteOutput so extending class
   * just add what is new or different for DeleteOutput, that means it's 100% customisable
   * you can also remove extends AffectedDto and define entire custom dto here if needed 
   **/
}

/**
 * █████████████████████████████████████████████████████████████
 * █ RESTORE DTO ███████████████████████████████████████████████
 * █████████████████████████████████████████████████████████████
**/
// this operation run directly withouth checking the data if exist or not, so it's quick but do not provide more information about operation

export class WebhookResponseDataRestoreDto extends WebhookResponseDataEntity implements RestoreDtoCRUDTypeDefinition{
    static metaname: string = `${WebhookResponseDataEntity.metaname}${RestoreArtefact}`;
    static metadesc: string = CrudDefMetaDesc.restore_metadesc;
}

// ████ RESTORE INPUT DTO ██████████████████████████████████████████████████████

@InputType()
export class WebhookResponseDataRestoreInputWhereDto extends WebhookResponseDataFindInputWhereDto implements RestoreInputWhereCRUDTypeDefinition{
  /**
   * avoiding redundant code
   * considering whatever FindInputWhere ask for input, same apply to SoftDeleteInputWhere so extending class
   * just add what is new or different for SoftDeleteInputWhere, that means it's 100% customisable
   * you can also remove extends *FindInputWhere and define entire custom dto here if needed 
   **/
}

@InputType()
export class WebhookResponseDataRestoreInputDto implements RestoreInputCRUDTypeDefinition{
  @Field(() => [WebhookResponseDataRestoreInputWhereDto], {nullable: true, description: CrudDefMetaDesc.restore_where})
  @Validate(OnlyOneSeachOperatorAllowed)
  where?: FindOptionsWhere<WebhookResponseDataRestoreInputWhereDto>[];
}
  
// ████ RESTORE OUTPUT DTO ██████████████████████████████████████████████████████
  
@ObjectType()
@Directive('@shareable')
export class WebhookResponseDataRestoreOutputDto extends CrudAffectedDto implements RestoreOutputCRUDTypeDefinition{
  /**
   * avoiding redundant code
   * considering whatever AffectedDto return, same apply to RestoreOutput so extending class
   * just add what is new or different for RestoreOutput, that means it's 100% customisable
   * you can also remove extends AffectedDto and define entire custom dto here if needed 
   **/    
}


/**
 * █████████████████████████████████████████████████████████████
 * █ UPSERT DTO ████████████████████████████████████████████████
 * █████████████████████████████████████████████████████████████
**/

export class WebhookResponseDataUpsertDto extends WebhookResponseDataEntity implements UpsertDtoCRUDTypeDefinition{
  static metaname: string = `${WebhookResponseDataEntity.metaname}${UpsertArtefact}`;
  static metadesc: string = CrudDefMetaDesc.upsert_metadesc;
}

// ████ UPSERT INPUT DTO ██████████████████████████████████████████████████████

@InputType()
export class WebhookResponseDataUpsertInputDto extends WebhookResponseDataCreateInputDto implements UpsertInputCRUDTypeDefinition{
    @Field(() => Int, {nullable: true, description: `${meta?.id.desc} ${meta?.id.validation.isOptional}`})
    @IsOptional({message: `${meta?.id.validation.isOptional}`})
    declare id?: number;

    /**
     * as upsert work with inser and update based on conflict
     * we need to set whcih field needs to be used to understand conflict by upset
     * that means if record is duplicated then which field will determine whther it is already exist or not
     * so set it to unique field in entity
     * this is known as `conflictPaths` in TypeORM qRunner
     * 
     * this can be set in .service.ts but to make it easy we set it in dto
     * .service.ts file holds complex logic
     **/
    @Exclude()
    static conflictResolveFields: (keyof WebhookResponseDataUpsertInputDto)[] = ['id'];
}

// ████ UPSERT OUTPUT DTO ██████████████████████████████████████████████████████

@ObjectType()
@Directive('@shareable')
export class WebhookResponseDataUpsertOutputDto extends IntersectionType(WebhookResponseDataCreateOutputDto, UpsertOutputProcessStatusDto) implements UpsertOutputCRUDTypeDefinition{ 
 
}

/**
 * █████████████████████████████████████████████████████████████
 * █ SOFT REMOVE DTO ███████████████████████████████████████████
 * █████████████████████████████████████████████████████████████
**/
// unlike soft delete, this operation first get the data from database and after run the operation, so it's complex but provide more and clear information about operation

// ████ SOFT REMOVE INPUT DTO ████████████████████████████████████████████████
export class WebhookResponseDataSoftRemoveDto extends WebhookResponseDataEntity implements SoftRemoveDtoCRUDTypeDefinition{
  static metaname: string = `${WebhookResponseDataEntity.metaname}${SoftRemoveArtefact}`;
  static metadesc: string = CrudDefMetaDesc.softRemove_metadesc;
}

@InputType()
export class WebhookResponseDataSoftRemoveInputWhereDto extends WebhookResponseDataFindInputWhereDto implements SoftRemoveInputWhereCRUDTypeDefinition{
  /**
   * avoiding redundant code
   * considering whatever FindInputWhere ask for input, same apply to SoftRemoveInputWhere so extending class
   * just add what is new or different for SoftRemoveInputWhere, that means it's 100% customisable
   * you can also remove extends *FindInputWhere and define entire custom dto here if needed 
   **/
}

@InputType()
export class WebhookResponseDataSoftRemoveInputDto implements SoftRemoveInputCRUDTypeDefinition{
  @Field(() => [WebhookResponseDataSoftRemoveInputWhereDto], {nullable: true, description: CrudDefMetaDesc.softRemove_where})
  @Validate(OnlyOneSeachOperatorAllowed)
  where?: FindOptionsWhere<WebhookResponseDataSoftRemoveInputWhereDto>[];
}


// ████ SOFT REMOVE OUTPUT DTO ████████████████████████████████████████████████

@ObjectType()
@Directive('@shareable')
export class WebhookResponseDataSoftRemoveOutputAffectedRowsDto extends WebhookResponseDataFindOutputRowsDto implements SoftRemoveOutputAffectedRowsCRUDTypeDefinition{
  /**
   * avoiding redundant code
   * considering whatever FindOutputRows return, same apply to SoftRemoveOutputAffectedRows so extending class
   * just add what is new or different for SoftRemoveOutputAffectedRows, that means it's 100% customisable
   * you can also remove extends FindOutputRows and define entire custom dto here if needed 
   **/
}
@ObjectType()
@Directive('@shareable')
export class WebhookResponseDataSoftRemoveOutputDto extends CrudAffectedDto implements SoftRemoveOutputCRUDTypeDefinition{
  /**
   * avoiding redundant code
   * considering whatever AffectedDto return, same apply to SoftRemoveOutput so extending class
   * just add what is new or different for SoftRemoveOutput, that means it's 100% customisable
   * you can also remove extends AffectedDto and define entire custom dto here if needed 
   **/

  @Field(() => [WebhookResponseDataEntity]) 
  declare affectedRows?: WebhookResponseDataEntity[] | any
}

/**
 * █████████████████████████████████████████████████████████████
 * █ REMOVE DTO ████████████████████████████████████████████████
 * █████████████████████████████████████████████████████████████
**/
// unlike soft delete, this operation first get the data from database and after run the operation, so it's complex but provide more and clear information about operation

export class WebhookResponseDataRemoveDto extends WebhookResponseDataEntity implements RemoveDtoCRUDTypeDefinition{
  static metaname: string = `${WebhookResponseDataEntity.metaname}${RemoveArtefact}`;
  static metadesc: string = CrudDefMetaDesc.remove_metadesc;
}

// ████ REMOVE INPUT DTO ████████████████████████████████████████████████

@InputType()
export class WebhookResponseDataRemoveInputWhereDto extends WebhookResponseDataFindInputWhereDto implements RemoveInputWhereCRUDTypeDefinition{
  /**
   * avoiding redundant code
   * considering whatever FindInputWhere ask for input, same apply to SoftRemoveInputWhere so extending class
   * just add what is new or different for SoftRemoveInputWhere, that means it's 100% customisable
   * you can also remove extends *FindInputWhere and define entire custom dto here if needed 
   **/
}

@InputType()
export class WebhookResponseDataRemoveInputDto implements RemoveInputCRUDTypeDefinition{
  @Field(() => [WebhookResponseDataRemoveInputWhereDto], {nullable: true, description: CrudDefMetaDesc.remove_where})
  @Validate(OnlyOneSeachOperatorAllowed)
  where?: FindOptionsWhere<WebhookResponseDataRemoveInputWhereDto>[];
}

// ████ REMOVE OUTPUT DTO ████████████████████████████████████████████████

@ObjectType()
@Directive('@shareable')
export class WebhookResponseDataRemoveOutputAffectedRowsDto extends WebhookResponseDataFindOutputRowsDto implements RemoveOutputAffectedRowsCRUDTypeDefinition{
  /**
   * avoiding redundant code
   * considering whatever FindOutputRows return, same apply to RemoveOutputAffectedRows so extending class
   * just add what is new or different for RemoveOutputAffectedRows, that means it's 100% customisable
   * you can also remove extends FindOutputRows and define entire custom dto here if needed 
   **/
}
@ObjectType()
@Directive('@shareable')
export class WebhookResponseDataRemoveOutputDto extends CrudAffectedDto implements RemoveOutputCRUDTypeDefinition{
  /**
   * avoiding redundant code
   * considering whatever AffectedDto return, same apply to RemoveOutput so extending class
   * just add what is new or different for RemoveOutput, that means it's 100% customisable
   * you can also remove extends AffectedDto and define entire custom dto here if needed 
   **/

  @Field(() => [WebhookResponseDataEntity]) 
  declare affectedRows?: WebhookResponseDataEntity[] | any;
}

/**
 * █████████████████████████████████████████████████████████████
 * █ RECOVER DTO ████████████████████████████████████████████████
 * █████████████████████████████████████████████████████████████
**/
// unlike soft delete, this operation first get the data from database and after run the operation, so it's complex but provide more and clear information about operation

export class WebhookResponseDataRecoverDto extends WebhookResponseDataEntity implements RecoverDtoCRUDTypeDefinition{
  static metaname: string = `${WebhookResponseDataEntity.metaname}${RecoverArtefact}`;
  static metadesc: string = CrudDefMetaDesc.recover_metadesc;
}

// ████ RECOVER INPUT DTO ██████████████████████████████████████████████████████

@InputType()
export class WebhookResponseDataRecoverInputWhereDto extends WebhookResponseDataFindInputWhereDto implements RecoverInputWhereCRUDTypeDefinition{
/**
 * avoiding redundant code
 * considering whatever FindInputWhere ask for input, same apply to SoftDeleteInputWhere so extending class
 * just add what is new or different for SoftDeleteInputWhere, that means it's 100% customisable
 * you can also remove extends *FindInputWhere and define entire custom dto here if needed 
 **/
}

@InputType()
export class WebhookResponseDataRecoverInputDto implements RecoverInputCRUDTypeDefinition{
  @Field(() => [WebhookResponseDataRecoverInputWhereDto], {nullable: true, description: CrudDefMetaDesc.recover_where})
  @Validate(OnlyOneSeachOperatorAllowed)
  where?: FindOptionsWhere<WebhookResponseDataRecoverInputWhereDto>[];
}

// ████ RECOVER OUTPUT DTO ██████████████████████████████████████████████████████

@ObjectType()
@Directive('@shareable')
export class WebhookResponseDataRecoverOutputAffectedRowsDto extends WebhookResponseDataFindOutputRowsDto implements RecoverOutputAffectedRowsCRUDTypeDefinition{
  /**
   * avoiding redundant code
   * considering whatever FindOutputRows return, same apply to RecoverOutputAffectedRows so extending class
   * just add what is new or different for RecoverOutputAffectedRows, that means it's 100% customisable
   * you can also remove extends FindOutputRows and define entire custom dto here if needed 
   **/
}

@ObjectType()
@Directive('@shareable')
export class WebhookResponseDataRecoverOutputDto extends CrudAffectedDto implements RecoverOutputCRUDTypeDefinition{
  /**
   * avoiding redundant code
   * considering whatever AffectedDto return, same apply to RecoverOutput so extending class
   * just add what is new or different for RecoverOutput, that means it's 100% customisable
   * you can also remove extends AffectedDto and define entire custom dto here if needed 
   **/

  @Field(() => [WebhookResponseDataEntity]) 
  declare affectedRows?: WebhookResponseDataEntity[] | any;
}

/**
 * █████████████████████████████████████████████████████████████
 * █ UPLOAD DTO ████████████████████████████████████████████████
 * █████████████████████████████████████████████████████████████
**/

export class WebhookResponseDataUploadDto extends WebhookResponseDataEntity implements UploadDtoCRUDTypeDefinition {
  static metaname: string = `${WebhookResponseDataEntity?.metaname}${UploadArtefact}`;
  static metadesc: string = CrudDefMetaDesc.upload_metadesc;
}

// ████ UPLOAD REF TYPE DTO ████████████████████████████████████████████████

@InputType()
export class UploadFileFieldInputDto {
@Field(() => WebhookResponseDataUploadFileFieldEnum, {nullable: false, description: CrudDefMetaDesc.upload_file_field})
@IsNotEmpty()
file_field!: WebhookResponseDataUploadFileFieldEnum;
}

@ObjectType()
@Directive('@shareable')
export class UploadFileFieldOutputDto extends PartialType(UploadFileFieldInputDto) {

}

// ████ UPLOAD INPUT DTO ████████████████████████████████████████████████
@InputType()
export class WebhookResponseDataUploadInputDto extends IntersectionType(UploadFileFieldInputDto, UploadInputDto) implements UploadInputArtefactCRUDTypeDefinition {

}

// ████ UPLOAD OUTPUT DTO ███████████████████████████████████████████████
@ObjectType()
@Directive('@shareable')
export class WebhookResponseDataUploadOutputDto extends IntersectionType(UploadFileFieldOutputDto, UploadOutputDto) implements UploadOutputArtefactCRUDTypeDefinition {

}

/**
* █████████████████████████████████████████████████████████████
* █ UPLOAD DELETE DTO █████████████████████████████████████████
* █████████████████████████████████████████████████████████████
**/

export class WebhookResponseDataUploadDeleteDto extends WebhookResponseDataEntity implements UploadDeleteDtoCRUDTypeDefinition {
static metaname: string = `${WebhookResponseDataEntity?.metaname}${UploadDeleteArtefact}`;
static metadesc: string = CrudDefMetaDesc.upload_delete_metadesc;
}

// ████ UPLOAD DELETE INPUT DTO ████████████████████████████████████████████████
@InputType()
export class WebhookResponseDataUploadDeleteInputDto extends IntersectionType(UploadFileFieldInputDto, UploadDeleteInputDto) implements UploadDeleteInputArtefactCRUDTypeDefinition {

}

// ████ UPLOAD DELETE OUTPUT DTO ███████████████████████████████████████████████
@ObjectType()
@Directive('@shareable')
export class WebhookResponseDataUploadDeleteOutputDto extends IntersectionType(UploadFileFieldOutputDto, UploadDeleteOutputDto) implements UploadDeleteOutputArtefactCRUDTypeDefinition {

}