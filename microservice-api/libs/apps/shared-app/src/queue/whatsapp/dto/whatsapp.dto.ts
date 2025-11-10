import { UploadDeleteInputDto, UploadDeleteOutputDto, UploadInputDto, UploadOutputDto, UploadArtefact, UploadDtoCRUDTypeDefinition, UploadInputArtefactCRUDTypeDefinition, UploadOutputArtefactCRUDTypeDefinition, UploadDeleteArtefact, UploadDeleteDtoCRUDTypeDefinition, UploadDeleteInputArtefactCRUDTypeDefinition, UploadDeleteOutputArtefactCRUDTypeDefinition, CreateArtefact, CreateDtoCRUDTypeDefinition, CreateInputCRUDTypeDefinition, CreateOutputCRUDTypeDefinition, CrudDefMetaDesc, DateTime, DeleteArtefact, DeleteDtoCRUDTypeDefinition, DeleteInputCRUDTypeDefinition, DeleteOutputCRUDTypeDefinition, FindArtefact, FindDtoCRUDTypeDefinition, FindInputGroupByCRUDTypeDefinition, FindInputSortOrderCRUDTypeDefinition, FindInputCRUDTypeDefinition, FindInputWhereCRUDTypeDefinition, FindOneByIdArtefact, FindOperatorDto, FindOutputPaginationDto, FindOutputCRUDTypeDefinition, OnlyOneSeachOperatorAllowed, RecordSortDirectionEnum, RestoreArtefact, RestoreDtoCRUDTypeDefinition, RestoreInputCRUDTypeDefinition, SoftDeleteArtefact, SoftDeleteDtoCRUDTypeDefinition, SoftDeleteInputCRUDTypeDefinition, SoftDeleteOutputCRUDTypeDefinition, UpdateArtefact, UpdateDtoCRUDTypeDefinition, UpdateInputSetsCRUDTypeDefinition, UpdateInputCRUDTypeDefinition, UpdateInputWhereCRUDTypeDefinition, UpdateOutputCRUDTypeDefinition, SoftDeleteInputWhereCRUDTypeDefinition, RestoreInputWhereCRUDTypeDefinition, RestoreOutputCRUDTypeDefinition, UpsertDtoCRUDTypeDefinition, UpsertArtefact, UpsertInputCRUDTypeDefinition, UpsertOutputCRUDTypeDefinition, UpsertStatusEnum, SoftRemoveDtoCRUDTypeDefinition, SoftRemoveArtefact, SoftRemoveInputWhereCRUDTypeDefinition, SoftRemoveInputCRUDTypeDefinition, SoftRemoveOutputCRUDTypeDefinition, RemoveDtoCRUDTypeDefinition, RemoveArtefact, RemoveInputCRUDTypeDefinition, RemoveOutputCRUDTypeDefinition, SoftRemoveOutputAffectedRowsCRUDTypeDefinition, FindOutputRowsCRUDTypeDefinition, UpdateOutputAffectedRowsCRUDTypeDefinition, RemoveOutputAffectedRowsCRUDTypeDefinition, RecoverDtoCRUDTypeDefinition, RecoverArtefact, RecoverInputCRUDTypeDefinition, RecoverOutputCRUDTypeDefinition, RecoverInputWhereCRUDTypeDefinition, RecoverOutputAffectedRowsCRUDTypeDefinition, FindInputDtoCRUDTypeDefinition, FindOneByIdInputCRUDTypeDefinition, FindInputPaginationOptionsDto, FindOutputPaginationOptionsDto, IdInputDto, DeleteInputWhereCRUDTypeDefinition, RemoveInputWhereCRUDTypeDefinition, WithDeletedInputDto } from "@libs/library-app";
import { QueueWhatsappEntityMeta as meta, QueueWhatsappEntity } from "../entities/whatsapp.entity";
import { Directive, Field, InputType, Int, IntersectionType, ObjectType, PartialType } from "@nestjs/graphql";
import { IsNotEmpty, IsNumber, IsOptional, Validate } from "class-validator";
import { FindManyOptions, FindOptionsOrder, FindOptionsOrderValue, FindOptionsWhere } from "typeorm";
import { Exclude } from "class-transformer";
import { IdOrIdsInputDto, CrudAffectedDto, UpsertOutputProcessStatusDto } from "@libs/library-app";
import { GraphQLJSON } from "graphql-scalars";
import { QueueWhatsappUploadFileFieldEnum } from "../whatsapp.enum";
import { QueueTypeFindInputWhereDto } from "../../type/dto/type.dto";
import { UserFindInputWhereDto } from "apps/shared-app/src/folk/user/dto/user.dto";
import { WebhookResponseFindInputWhereDto } from "apps/shared-app/src/webhook/response/dto/response.dto";

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
export class QueueWhatsappDto extends QueueWhatsappEntity implements FindInputDtoCRUDTypeDefinition{
     /**
     * we need to transform filed data type to any because find has complex process
     * this is because every field is defined in entity with specific type which cannot be override directly dure to inhereatance
     * so creating new class in between to make sure call cannot have other filed then defined in entity
     * 
     * in this DTO we need to type cast the fields as we need fields but those will be manipulated differently
     * as we are extending the class we will have issue with the fields types so converting in any
     * this will help other dto to use the fields but they will be typed as required in them
     **/
     declare id?: any;
     declare from_u_id?: any;
     declare to_u_id?: any;
     declare quetype_id?: any;
     declare whresp_id?: any;
     declare ref_id?: any;
     declare ref_type?: any;
     declare from_mobile?: any;
     declare from_mobile_cc?: any;
     declare to_mobile?: any;
     declare to_mobile_cc?: any;
     declare subject?: any;
     declare msg?: any;
     declare sent?: any;
     declare created?: any;
     declare updated?: any;
     declare deleted?: any;

    declare fr_from_user?: any;
    declare fr_to_user?: any;
    declare fr_queue_type?: any;
    declare fr_webhook_response?: any;
}

/**
 * █████████████████████████████████████████████████████████████
 * █ FIND DTO ██████████████████████████████████████████████████
 * █████████████████████████████████████████████████████████████
**/
@ObjectType({ isAbstract: true })
@Directive('@shareable')
export class QueueWhatsappFindDto extends QueueWhatsappEntity implements FindDtoCRUDTypeDefinition{
    static metaname: string = `${QueueWhatsappEntity?.metaname}${FindArtefact}`;
    static metadesc: string = CrudDefMetaDesc.find_metadesc;
}


// ████ FIND INPUT DTO ████████████████████████████████████████████████


@InputType()
export class QueueWhatsappFindInputWhereDto extends QueueWhatsappDto implements FindInputWhereCRUDTypeDefinition{
    @Field(() => FindOperatorDto, {nullable: true, description: meta?.id.desc})
    @IsOptional()
    declare id?: FindOperatorDto;    

    @Field(() => FindOperatorDto, {nullable: true, description: meta?.from_u_id.desc})
    @IsOptional()
    declare from_u_id?: FindOperatorDto;

    @Field(() => FindOperatorDto, {nullable: true, description: meta?.to_u_id.desc})
    @IsOptional()
    declare to_u_id?: FindOperatorDto;

    @Field(() => FindOperatorDto, {nullable: true, description: meta?.quetype_id.desc})
    @IsOptional()
    declare quetype_id?: FindOperatorDto;

    @Field(() => FindOperatorDto, {nullable: true, description: meta?.whresp_id.desc})
    @IsOptional()
    declare whresp_id?: FindOperatorDto;

    @Field(() => FindOperatorDto, {nullable: true, description: meta?.ref_id.desc})
    @IsOptional()
    declare ref_id?: FindOperatorDto;

    @Field(() => FindOperatorDto, {nullable: true, description: meta?.ref_type.desc})
    @IsOptional()
    declare ref_type?: FindOperatorDto;

    @Field(() => FindOperatorDto, {nullable: true, description: meta?.from_mobile.desc})
    @IsOptional()
    declare from_mobile?: FindOperatorDto;

    @Field(() => FindOperatorDto, {nullable: true, description: meta?.from_mobile_cc.desc})
    @IsOptional()
    declare from_mobile_cc?: FindOperatorDto;

    @Field(() => FindOperatorDto, {nullable: true, description: meta?.to_mobile.desc})
    @IsOptional()
    declare to_mobile?: FindOperatorDto;

    @Field(() => FindOperatorDto, {nullable: true, description: meta?.to_mobile_cc.desc})
    @IsOptional()
    declare to_mobile_cc?: FindOperatorDto;

    @Field(() => FindOperatorDto, {nullable: true, description: meta?.subject.desc})
    @IsOptional()
    declare subject?: FindOperatorDto;

    @Field(() => FindOperatorDto, {nullable: true, description: meta?.sent.desc})
    @IsOptional()
    declare sent?: FindOperatorDto;

    @Field(() => FindOperatorDto, {nullable: true, description: meta?.created.desc})
    @IsOptional()
    declare created?: FindOperatorDto;

    @Field(() => FindOperatorDto, {nullable: true, description: meta?.updated.desc})
    @IsOptional()
    declare updated?: FindOperatorDto;
    
    @Field(() => FindOperatorDto, {nullable: true, description: meta?.deleted.desc})
    @IsOptional()
    declare deleted?: FindOperatorDto;

    // ████ FR_ WHERE: INTERNAL RELATIONS WHERE ████████████████████████████████████████████████

    @Field(() => [UserFindInputWhereDto], {nullable: true, description: meta?.fr_from_user.desc})
    @IsOptional()
    declare fr_from_user?: UserFindInputWhereDto[];

    @Field(() => [UserFindInputWhereDto], {nullable: true, description: meta?.fr_to_user.desc})
    @IsOptional()
    declare fr_to_user?: UserFindInputWhereDto[];

    @Field(() => [QueueTypeFindInputWhereDto], {nullable: true, description: meta?.fr_queue_type.desc})
    @IsOptional()
    declare fr_queue_type?: QueueTypeFindInputWhereDto[];

    @Field(() => [WebhookResponseFindInputWhereDto], {nullable: true, description: meta?.fr_webhook_response.desc})
    @IsOptional()
    declare fr_webhook_response?: WebhookResponseFindInputWhereDto[];
}

@InputType()
export class QueueWhatsappFindInputSortOrderDto implements FindOptionsOrder<QueueWhatsappDto>, FindInputSortOrderCRUDTypeDefinition{
    
    @Field(() => RecordSortDirectionEnum, { nullable: true }) 
    @IsOptional()
    id?: RecordSortDirectionEnum;
    
    @Field(() => RecordSortDirectionEnum, { nullable: true }) 
    @IsOptional()
    from_u_id?: RecordSortDirectionEnum;

    @Field(() => RecordSortDirectionEnum, { nullable: true }) 
    @IsOptional()
    to_u_id?: RecordSortDirectionEnum;

    @Field(() => RecordSortDirectionEnum, { nullable: true }) 
    @IsOptional()
    quetype_id?: RecordSortDirectionEnum;

    @Field(() => RecordSortDirectionEnum, { nullable: true }) 
    @IsOptional()
    from_mobile_cc?: RecordSortDirectionEnum;

    @Field(() => RecordSortDirectionEnum, { nullable: true }) 
    @IsOptional()
    to_mobile_cc?: RecordSortDirectionEnum;

    @Field(() => RecordSortDirectionEnum, { nullable: true }) 
    @IsOptional()
    sent?: RecordSortDirectionEnum;

    @Field(() => RecordSortDirectionEnum, { nullable: true }) 
    @IsOptional()
    created?: RecordSortDirectionEnum;

    @Field(() => RecordSortDirectionEnum, { nullable: true }) 
    @IsOptional()
    updated?: RecordSortDirectionEnum;

    @Field(() => RecordSortDirectionEnum, { nullable: true }) 
    @IsOptional()
    deleted?: RecordSortDirectionEnum;
}

@InputType()
export class QueueWhatsappFindInputGroupByDto implements FindOptionsOrder<QueueWhatsappDto>, FindInputGroupByCRUDTypeDefinition{
    
    @Field(() => Boolean, { nullable: true })
    @IsOptional()
    from_u_id?: boolean;

    @Field(() => Boolean, { nullable: true })
    @IsOptional()
    to_u_id?: boolean;

    @Field(() => Boolean, { nullable: true })
    @IsOptional()
    quetype_id?: boolean;

    @Field(() => Boolean, { nullable: true })
    @IsOptional()
    ref_id?: boolean;

    @Field(() => Boolean, { nullable: true })
    @IsOptional()
    ref_type?: boolean;

    @Field(() => Boolean, { nullable: true })
    @IsOptional()
    from_mobile_cc?: boolean;

    @Field(() => Boolean, { nullable: true })
    @IsOptional()
    to_mobile_cc?: boolean;

    @Field(() => Boolean, { nullable: true })
    @IsOptional()
    sent?: boolean;

    @Field(() => Boolean, { nullable: true })
    @IsOptional()
    created?: boolean;

    @Field(() => Boolean, { nullable: true })
    @IsOptional()
    updated?: boolean;

    @Field(() => Boolean, { nullable: true })
    @IsOptional()
    deleted?: boolean;
}

@InputType()
export class QueueWhatsappFindInputDto extends IntersectionType(FindInputPaginationOptionsDto, WithDeletedInputDto) implements FindManyOptions<QueueWhatsappDto>, FindInputCRUDTypeDefinition{
    // input layout design for users to perform find with various database options
  
    /**
     * Conditions to be met for the resulting set.
     * also validate the user pass only 1 operator to search for field
     */
    @Field(() => [QueueWhatsappFindInputWhereDto], { nullable: true, description: CrudDefMetaDesc.find_where })
    @IsOptional()
    @Validate(OnlyOneSeachOperatorAllowed)
    declare where?: FindOptionsWhere<QueueWhatsappFindInputWhereDto>[];
  
  
    /**
     * Specifies how to group the rows returned by the SELECT statement.
     */
    @Field(() => QueueWhatsappFindInputGroupByDto, { nullable: true, description: CrudDefMetaDesc.find_group_by })
    @IsOptional()
    declare groupBy?: QueueWhatsappFindInputGroupByDto;
  
    /**
     * Sort the result set by fields using ascending or descending order.
     */
    @Field(() => QueueWhatsappFindInputSortOrderDto, { nullable: true, description: CrudDefMetaDesc.find_order })
    @IsOptional()
    declare order?: FindOptionsOrder<QueueWhatsappFindInputSortOrderDto>;
}


// ████ FIND OUTPUT DTO ████████████████████████████████████████████████

@ObjectType()
@Directive('@shareable')
export class QueueWhatsappFindOutputRowsDto extends QueueWhatsappFindDto implements FindOutputRowsCRUDTypeDefinition{
    // this DTO will be used at many palce for output object, os make sure this is properly developed
}

@ObjectType()
@Directive('@shareable')
export class QueueWhatsappFindOutputDto extends FindOutputPaginationOptionsDto implements FindOutputCRUDTypeDefinition{
    // output layout design for users to get find response

    // we assign any because iin GRAPHQL for requuest body this rows will have fields with boolean value whether to include in response or not
    // this is very crucial to understand this structure and you need to understand how graphQL works
    @Field(() => [QueueWhatsappEntity], {description: CrudDefMetaDesc.find_rows})
    declare rows?: QueueWhatsappEntity | QueueWhatsappEntity[] | any;
}

/**
 * ██████████████████████████████████████████████████████████████████████████████████████████████████████████████████
 * █ FIND ONE BY ID DTO █████████████████████████████████████████████████████████████████████████████████████████████
 * ██████████████████████████████████████████████████████████████████████████████████████████████████████████████████
**/

export class QueueWhatsappFindOneByIdDto extends QueueWhatsappEntity implements FindDtoCRUDTypeDefinition{
    static metaname: string = `${QueueWhatsappEntity.metaname}${FindOneByIdArtefact}`;
    static metadesc: string = CrudDefMetaDesc.findOneById_metadesc;
}

// ████ FIND ONE BY ID INPUT DTO ████████████████████████████████████████████████

@InputType()
export class QueueWhatsappFindOneByIdInputDto extends IntersectionType(IdInputDto, WithDeletedInputDto) implements FindOneByIdInputCRUDTypeDefinition{

}

/**
 * █████████████████████████████████████████████████████████████
 * █ CREATE DTO ████████████████████████████████████████████████
 * █████████████████████████████████████████████████████████████
**/

export class QueueWhatsappCreateDto extends QueueWhatsappEntity implements CreateDtoCRUDTypeDefinition {
    static metaname: string = `${QueueWhatsappEntity.metaname}${CreateArtefact}`;
    static metadesc: string = CrudDefMetaDesc.create_metadesc;
}
// ████ CREATE INPUT DTO ████████████████████████████████████████████████

@InputType()
export class QueueWhatsappCreateInputDto extends  QueueWhatsappCreateDto implements CreateInputCRUDTypeDefinition {

    @Field(() => String, {nullable: false, description: meta?.ref_id.desc})
    declare ref_id?: string;

    @Field(() => Int, {nullable: false, description: meta?.quetype_id.desc})
    declare quetype_id?: number;

    @Field(() => String, {nullable: false, description: meta?.msg.desc})
    declare msg?: string;

    @Field(() => Int, {nullable: true, description: meta?.from_u_id.desc})
    declare from_u_id?: number;

    @Field(() => Int, {nullable: true, description: meta?.to_u_id.desc})
    declare to_u_id?: number; // any one is required to_u_id or to_mobile

    @Field(() => Int, {nullable: true, description: meta?.whresp_id.desc})
    declare whresp_id?: number;

    @Field(() => String, {nullable: true, description: meta?.from_mobile.desc})
    declare from_mobile?: string;

    @Field(() => String, {nullable: true, description: meta?.from_mobile_cc.desc})
    declare from_mobile_cc?: string;

    @Field(() => String, {nullable: true, description: meta?.to_mobile.desc})
    declare to_mobile?: string; // any one is required to_u_id or to_mobile

    @Field(() => String, {nullable: true, description: meta?.to_mobile_cc.desc})
    declare to_mobile_cc?: string;

    @Field(() => String, {nullable: true, description: meta?.subject.desc})
    declare subject?: string;

    @Field(() => DateTime, {nullable: true, description: meta?.sent.desc})
    declare sent?: Date;
}

// ████ CREATE OUTPUT DTO ████████████████████████████████████████████████

@ObjectType()
@Directive('@shareable')
export class QueueWhatsappCreateOutputDto extends QueueWhatsappFindOutputRowsDto implements CreateOutputCRUDTypeDefinition {
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


export class QueueWhatsappUpdateDto extends QueueWhatsappDto implements UpdateDtoCRUDTypeDefinition{
    static metaname: string = `${QueueWhatsappEntity.metaname}${UpdateArtefact}`;
    static metadesc: string = CrudDefMetaDesc.update_metadesc;
}

// ████ UPDATE INPUT DTO ████████████████████████████████████████████████

@InputType()
export class QueueWhatsappUpdateInputWhereDto extends QueueWhatsappFindInputWhereDto implements UpdateInputWhereCRUDTypeDefinition{
    /**
     * avoiding redundant code
     * considering whatever FindInputWhere ask for input, same apply to UpdateInputWhere so extending class
     * just add what is new or different for UpdateInputWhere, that means it's 100% customisable
     * you can also remove extends *FindInputWhere and define entire custom dto here if needed 
     **/
}

@InputType()
export class QueueWhatsappUpdateInputSetsDto extends PartialType(QueueWhatsappCreateInputDto) implements UpdateInputSetsCRUDTypeDefinition {
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
export class QueueWhatsappUpdateInputDto implements UpdateInputCRUDTypeDefinition{
    // input layout design for users to perform update with various database options
  
    /**
     * Conditions to be met for the resulting set.
     * also validate the user pass only 1 operator to search for field
     */
    @Field(() => [QueueWhatsappUpdateInputWhereDto], { nullable: false, description: CrudDefMetaDesc.update_where })
    @IsNotEmpty()
    @Validate(OnlyOneSeachOperatorAllowed)
    where!: FindOptionsWhere<QueueWhatsappUpdateInputWhereDto>[];

    /**
     * What to set for update
     * basically fields list of update
     */
    @Field(() => QueueWhatsappUpdateInputSetsDto, { nullable: false, description: CrudDefMetaDesc.update_sets })
    @IsNotEmpty()
    sets!: QueueWhatsappUpdateInputSetsDto

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
export class QueueWhatsappUpdateOutputAffectedRowsDto extends QueueWhatsappFindOutputRowsDto implements UpdateOutputAffectedRowsCRUDTypeDefinition{
    /**
     * avoiding redundant code
     * considering whatever FindOutputRows return, same apply to UpdateOutputAffectedRows so extending class
     * just add what is new or different for UpdateOutputAffectedRows, that means it's 100% customisable
     * you can also remove extends *FindOutputRows and define entire custom dto here if needed 
     **/
}

@ObjectType()
@Directive('@shareable')
export class QueueWhatsappUpdateOutputDto extends CrudAffectedDto implements UpdateOutputCRUDTypeDefinition{
  @Field(() => [QueueWhatsappEntity], {description: CrudDefMetaDesc.update_affected_rows}) 
  declare affectedRows?: QueueWhatsappEntity[] | any; 
}


/**
 * █████████████████████████████████████████████████████████████
 * █ SOFT DELETE DTO ███████████████████████████████████████████
 * █████████████████████████████████████████████████████████████
**/
// this operation run directly withouth checking the data if exist or not, so it's quick but do not provide more information about operation

// ████ SOFT DELETE INPUT DTO ████████████████████████████████████████████████
export class QueueWhatsappSoftDeleteDto extends QueueWhatsappEntity implements SoftDeleteDtoCRUDTypeDefinition{
  static metaname: string = `${QueueWhatsappEntity.metaname}${SoftDeleteArtefact}`;
  static metadesc: string = CrudDefMetaDesc.softDelete_metadesc;
}

@InputType()
export class QueueWhatsappSoftDeleteInputWhereDto extends QueueWhatsappFindInputWhereDto implements SoftDeleteInputWhereCRUDTypeDefinition{
  /**
   * avoiding redundant code
   * considering whatever FindInputWhere ask for input, same apply to SoftDeleteInputWhere so extending class
   * just add what is new or different for SoftDeleteInputWhere, that means it's 100% customisable
   * you can also remove extends *FindInputWhere and define entire custom dto here if needed 
   **/
}

@InputType()
export class QueueWhatsappSoftDeleteInputDto implements SoftDeleteInputCRUDTypeDefinition{
  @Field(() => [QueueWhatsappSoftDeleteInputWhereDto], {nullable: true, description: CrudDefMetaDesc.softDelete_where})
  @Validate(OnlyOneSeachOperatorAllowed)
  where?: FindOptionsWhere<QueueWhatsappSoftDeleteInputWhereDto>[];
}


// ████ SOFT DELETE OUTPUT DTO ████████████████████████████████████████████████

@ObjectType()
@Directive('@shareable')
export class QueueWhatsappSoftDeleteOutputDto extends CrudAffectedDto implements SoftDeleteOutputCRUDTypeDefinition{
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

export class QueueWhatsappDeleteDto extends QueueWhatsappEntity implements DeleteDtoCRUDTypeDefinition{
  static metaname: string = `${QueueWhatsappEntity.metaname}${DeleteArtefact}`;
  static metadesc: string = CrudDefMetaDesc.delete_metadesc;
}

// ████ DELETE INPUT DTO ████████████████████████████████████████████████

@InputType()
export class QueueWhatsappDeleteInputWhereDto extends QueueWhatsappFindInputWhereDto implements DeleteInputWhereCRUDTypeDefinition{
  /**
   * avoiding redundant code
   * considering whatever FindInputWhere ask for input, same apply to SoftDeleteInputWhere so extending class
   * just add what is new or different for SoftDeleteInputWhere, that means it's 100% customisable
   * you can also remove extends *FindInputWhere and define entire custom dto here if needed 
   **/
}

@InputType()
export class QueueWhatsappDeleteInputDto implements DeleteInputCRUDTypeDefinition{
  @Field(() => [QueueWhatsappDeleteInputWhereDto], {nullable: true, description: CrudDefMetaDesc.delete_where})
  @Validate(OnlyOneSeachOperatorAllowed)
  where?: FindOptionsWhere<QueueWhatsappDeleteInputWhereDto>[];
}


// ████ DELETE OUTPUT DTO ████████████████████████████████████████████████

@ObjectType()
@Directive('@shareable')
export class QueueWhatsappDeleteOutputDto extends CrudAffectedDto implements DeleteOutputCRUDTypeDefinition{
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

export class QueueWhatsappRestoreDto extends QueueWhatsappEntity implements RestoreDtoCRUDTypeDefinition{
    static metaname: string = `${QueueWhatsappEntity.metaname}${RestoreArtefact}`;
    static metadesc: string = CrudDefMetaDesc.restore_metadesc;
}

// ████ RESTORE INPUT DTO ██████████████████████████████████████████████████████

@InputType()
export class QueueWhatsappRestoreInputWhereDto extends QueueWhatsappFindInputWhereDto implements RestoreInputWhereCRUDTypeDefinition{
  /**
   * avoiding redundant code
   * considering whatever FindInputWhere ask for input, same apply to SoftDeleteInputWhere so extending class
   * just add what is new or different for SoftDeleteInputWhere, that means it's 100% customisable
   * you can also remove extends *FindInputWhere and define entire custom dto here if needed 
   **/
}

@InputType()
export class QueueWhatsappRestoreInputDto implements RestoreInputCRUDTypeDefinition{
  @Field(() => [QueueWhatsappRestoreInputWhereDto], {nullable: true, description: CrudDefMetaDesc.restore_where})
  @Validate(OnlyOneSeachOperatorAllowed)
  where?: FindOptionsWhere<QueueWhatsappRestoreInputWhereDto>[];
}
  
// ████ RESTORE OUTPUT DTO ██████████████████████████████████████████████████████
  
@ObjectType()
@Directive('@shareable')
export class QueueWhatsappRestoreOutputDto extends CrudAffectedDto implements RestoreOutputCRUDTypeDefinition{
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

export class QueueWhatsappUpsertDto extends QueueWhatsappEntity implements UpsertDtoCRUDTypeDefinition{
  static metaname: string = `${QueueWhatsappEntity.metaname}${UpsertArtefact}`;
  static metadesc: string = CrudDefMetaDesc.upsert_metadesc;
}

// ████ UPSERT INPUT DTO ██████████████████████████████████████████████████████

@InputType()
export class QueueWhatsappUpsertInputDto extends QueueWhatsappCreateInputDto implements UpsertInputCRUDTypeDefinition{
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
    static conflictResolveFields: (keyof QueueWhatsappUpsertInputDto)[] = ['id'];
}

// ████ UPSERT OUTPUT DTO ██████████████████████████████████████████████████████

@ObjectType()
@Directive('@shareable')
export class QueueWhatsappUpsertOutputDto extends IntersectionType(QueueWhatsappCreateOutputDto, UpsertOutputProcessStatusDto) implements UpsertOutputCRUDTypeDefinition{ 
 
}

/**
 * █████████████████████████████████████████████████████████████
 * █ SOFT REMOVE DTO ███████████████████████████████████████████
 * █████████████████████████████████████████████████████████████
**/
// unlike soft delete, this operation first get the data from database and after run the operation, so it's complex but provide more and clear information about operation

// ████ SOFT REMOVE INPUT DTO ████████████████████████████████████████████████
export class QueueWhatsappSoftRemoveDto extends QueueWhatsappEntity implements SoftRemoveDtoCRUDTypeDefinition{
  static metaname: string = `${QueueWhatsappEntity.metaname}${SoftRemoveArtefact}`;
  static metadesc: string = CrudDefMetaDesc.softRemove_metadesc;
}

@InputType()
export class QueueWhatsappSoftRemoveInputWhereDto extends QueueWhatsappFindInputWhereDto implements SoftRemoveInputWhereCRUDTypeDefinition{
  /**
   * avoiding redundant code
   * considering whatever FindInputWhere ask for input, same apply to SoftRemoveInputWhere so extending class
   * just add what is new or different for SoftRemoveInputWhere, that means it's 100% customisable
   * you can also remove extends *FindInputWhere and define entire custom dto here if needed 
   **/
}

@InputType()
export class QueueWhatsappSoftRemoveInputDto implements SoftRemoveInputCRUDTypeDefinition{
  @Field(() => [QueueWhatsappSoftRemoveInputWhereDto], {nullable: true, description: CrudDefMetaDesc.remove_where})
  @Validate(OnlyOneSeachOperatorAllowed)
  where?: FindOptionsWhere<QueueWhatsappSoftRemoveInputWhereDto>[];
}


// ████ SOFT REMOVE OUTPUT DTO ████████████████████████████████████████████████

@ObjectType()
@Directive('@shareable')
export class QueueWhatsappSoftRemoveOutputAffectedRowsDto extends QueueWhatsappFindOutputRowsDto implements SoftRemoveOutputAffectedRowsCRUDTypeDefinition{
  /**
   * avoiding redundant code
   * considering whatever FindOutputRows return, same apply to SoftRemoveOutputAffectedRows so extending class
   * just add what is new or different for SoftRemoveOutputAffectedRows, that means it's 100% customisable
   * you can also remove extends FindOutputRows and define entire custom dto here if needed 
   **/
}
@ObjectType()
@Directive('@shareable')
export class QueueWhatsappSoftRemoveOutputDto extends CrudAffectedDto implements SoftRemoveOutputCRUDTypeDefinition{
  /**
   * avoiding redundant code
   * considering whatever AffectedDto return, same apply to SoftRemoveOutput so extending class
   * just add what is new or different for SoftRemoveOutput, that means it's 100% customisable
   * you can also remove extends AffectedDto and define entire custom dto here if needed 
   **/

  @Field(() => [QueueWhatsappEntity]) 
  declare affectedRows?: QueueWhatsappEntity[] | any
}

/**
 * █████████████████████████████████████████████████████████████
 * █ REMOVE DTO ████████████████████████████████████████████████
 * █████████████████████████████████████████████████████████████
**/
// unlike soft delete, this operation first get the data from database and after run the operation, so it's complex but provide more and clear information about operation

export class QueueWhatsappRemoveDto extends QueueWhatsappEntity implements RemoveDtoCRUDTypeDefinition{
  static metaname: string = `${QueueWhatsappEntity.metaname}${RemoveArtefact}`;
  static metadesc: string = CrudDefMetaDesc.remove_metadesc;
}

// ████ REMOVE INPUT DTO ████████████████████████████████████████████████

@InputType()
export class QueueWhatsappRemoveInputWhereDto extends QueueWhatsappFindInputWhereDto implements RemoveInputWhereCRUDTypeDefinition{
  /**
   * avoiding redundant code
   * considering whatever FindInputWhere ask for input, same apply to SoftRemoveInputWhere so extending class
   * just add what is new or different for SoftRemoveInputWhere, that means it's 100% customisable
   * you can also remove extends *FindInputWhere and define entire custom dto here if needed 
   **/
}

@InputType()
export class QueueWhatsappRemoveInputDto implements RemoveInputCRUDTypeDefinition{
  @Field(() => [QueueWhatsappRemoveInputWhereDto], {nullable: true, description: CrudDefMetaDesc.remove_where})
  @Validate(OnlyOneSeachOperatorAllowed)
  where?: FindOptionsWhere<QueueWhatsappRemoveInputWhereDto>[];
}

// ████ REMOVE OUTPUT DTO ████████████████████████████████████████████████

@ObjectType()
@Directive('@shareable')
export class QueueWhatsappRemoveOutputAffectedRowsDto extends QueueWhatsappFindOutputRowsDto implements RemoveOutputAffectedRowsCRUDTypeDefinition{
  /**
   * avoiding redundant code
   * considering whatever FindOutputRows return, same apply to RemoveOutputAffectedRows so extending class
   * just add what is new or different for RemoveOutputAffectedRows, that means it's 100% customisable
   * you can also remove extends FindOutputRows and define entire custom dto here if needed 
   **/
}
@ObjectType()
@Directive('@shareable')
export class QueueWhatsappRemoveOutputDto extends CrudAffectedDto implements RemoveOutputCRUDTypeDefinition{
  /**
   * avoiding redundant code
   * considering whatever AffectedDto return, same apply to RemoveOutput so extending class
   * just add what is new or different for RemoveOutput, that means it's 100% customisable
   * you can also remove extends AffectedDto and define entire custom dto here if needed 
   **/

  @Field(() => [QueueWhatsappEntity]) 
  declare affectedRows?: QueueWhatsappEntity[] | any;
}

/**
 * █████████████████████████████████████████████████████████████
 * █ RECOVER DTO ████████████████████████████████████████████████
 * █████████████████████████████████████████████████████████████
**/
// unlike soft delete, this operation first get the data from database and after run the operation, so it's complex but provide more and clear information about operation

export class QueueWhatsappRecoverDto extends QueueWhatsappEntity implements RecoverDtoCRUDTypeDefinition{
  static metaname: string = `${QueueWhatsappEntity.metaname}${RecoverArtefact}`;
  static metadesc: string = CrudDefMetaDesc.recover_metadesc;
}

// ████ RECOVER INPUT DTO ██████████████████████████████████████████████████████

@InputType()
export class QueueWhatsappRecoverInputWhereDto extends QueueWhatsappFindInputWhereDto implements RecoverInputWhereCRUDTypeDefinition{
/**
 * avoiding redundant code
 * considering whatever FindInputWhere ask for input, same apply to SoftDeleteInputWhere so extending class
 * just add what is new or different for SoftDeleteInputWhere, that means it's 100% customisable
 * you can also remove extends *FindInputWhere and define entire custom dto here if needed 
 **/
}

@InputType()
export class QueueWhatsappRecoverInputDto implements RecoverInputCRUDTypeDefinition{
  @Field(() => [QueueWhatsappRecoverInputWhereDto], {nullable: true, description: CrudDefMetaDesc.recover_where})
  @Validate(OnlyOneSeachOperatorAllowed)
  where?: FindOptionsWhere<QueueWhatsappRecoverInputWhereDto>[];
}

// ████ RECOVER OUTPUT DTO ██████████████████████████████████████████████████████

@ObjectType()
@Directive('@shareable')
export class QueueWhatsappRecoverOutputAffectedRowsDto extends QueueWhatsappFindOutputRowsDto implements RecoverOutputAffectedRowsCRUDTypeDefinition{
  /**
   * avoiding redundant code
   * considering whatever FindOutputRows return, same apply to RecoverOutputAffectedRows so extending class
   * just add what is new or different for RecoverOutputAffectedRows, that means it's 100% customisable
   * you can also remove extends FindOutputRows and define entire custom dto here if needed 
   **/
}

@ObjectType()
@Directive('@shareable')
export class QueueWhatsappRecoverOutputDto extends CrudAffectedDto implements RecoverOutputCRUDTypeDefinition{
  /**
   * avoiding redundant code
   * considering whatever AffectedDto return, same apply to RecoverOutput so extending class
   * just add what is new or different for RecoverOutput, that means it's 100% customisable
   * you can also remove extends AffectedDto and define entire custom dto here if needed 
   **/

  @Field(() => [QueueWhatsappEntity]) 
  declare affectedRows?: QueueWhatsappEntity[] | any;
}

/**
 * █████████████████████████████████████████████████████████████
 * █ UPLOAD DTO ████████████████████████████████████████████████
 * █████████████████████████████████████████████████████████████
**/

export class QueueWhatsappUploadDto extends QueueWhatsappEntity implements UploadDtoCRUDTypeDefinition {
  static metaname: string = `${QueueWhatsappEntity?.metaname}${UploadArtefact}`;
  static metadesc: string = CrudDefMetaDesc.upload_metadesc;
}

// ████ UPLOAD REF TYPE DTO ████████████████████████████████████████████████

@InputType()
export class UploadFileFieldInputDto {
@Field(() => QueueWhatsappUploadFileFieldEnum, {nullable: false, description: CrudDefMetaDesc.upload_file_field})
@IsNotEmpty()
file_field!: QueueWhatsappUploadFileFieldEnum;
}

@ObjectType()
@Directive('@shareable')
export class UploadFileFieldOutputDto extends PartialType(UploadFileFieldInputDto) {

}

// ████ UPLOAD INPUT DTO ████████████████████████████████████████████████
@InputType()
export class QueueWhatsappUploadInputDto extends IntersectionType(UploadFileFieldInputDto, UploadInputDto) implements UploadInputArtefactCRUDTypeDefinition {

}

// ████ UPLOAD OUTPUT DTO ███████████████████████████████████████████████
@ObjectType()
@Directive('@shareable')
export class QueueWhatsappUploadOutputDto extends IntersectionType(UploadFileFieldOutputDto, UploadOutputDto) implements UploadOutputArtefactCRUDTypeDefinition {

}

/**
* █████████████████████████████████████████████████████████████
* █ UPLOAD DELETE DTO █████████████████████████████████████████
* █████████████████████████████████████████████████████████████
**/

export class QueueWhatsappUploadDeleteDto extends QueueWhatsappEntity implements UploadDeleteDtoCRUDTypeDefinition {
static metaname: string = `${QueueWhatsappEntity?.metaname}${UploadDeleteArtefact}`;
static metadesc: string = CrudDefMetaDesc.upload_delete_metadesc;
}

// ████ UPLOAD DELETE INPUT DTO ████████████████████████████████████████████████
@InputType()
export class QueueWhatsappUploadDeleteInputDto extends IntersectionType(UploadFileFieldInputDto, UploadDeleteInputDto) implements UploadDeleteInputArtefactCRUDTypeDefinition {

}

// ████ UPLOAD DELETE OUTPUT DTO ███████████████████████████████████████████████
@ObjectType()
@Directive('@shareable')
export class QueueWhatsappUploadDeleteOutputDto extends IntersectionType(UploadFileFieldOutputDto, UploadDeleteOutputDto) implements UploadDeleteOutputArtefactCRUDTypeDefinition {

}