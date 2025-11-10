import { UploadDeleteInputDto, UploadDeleteOutputDto, UploadInputDto, UploadOutputDto, UploadArtefact, UploadDtoCRUDTypeDefinition, UploadInputArtefactCRUDTypeDefinition, UploadOutputArtefactCRUDTypeDefinition, UploadDeleteArtefact, UploadDeleteDtoCRUDTypeDefinition, UploadDeleteInputArtefactCRUDTypeDefinition, UploadDeleteOutputArtefactCRUDTypeDefinition, CreateArtefact, CreateDtoCRUDTypeDefinition, CreateInputCRUDTypeDefinition, CreateOutputCRUDTypeDefinition, CrudDefMetaDesc, DateTime, DeleteArtefact, DeleteDtoCRUDTypeDefinition, DeleteInputCRUDTypeDefinition, DeleteOutputCRUDTypeDefinition, FindArtefact, FindDtoCRUDTypeDefinition, FindInputGroupByCRUDTypeDefinition, FindInputSortOrderCRUDTypeDefinition, FindInputCRUDTypeDefinition, FindInputWhereCRUDTypeDefinition, FindOneByIdArtefact, FindOperatorDto, FindOutputPaginationDto, FindOutputCRUDTypeDefinition, OnlyOneSeachOperatorAllowed, RecordSortDirectionEnum, RestoreArtefact, RestoreDtoCRUDTypeDefinition, RestoreInputCRUDTypeDefinition, SoftDeleteArtefact, SoftDeleteDtoCRUDTypeDefinition, SoftDeleteInputCRUDTypeDefinition, SoftDeleteOutputCRUDTypeDefinition, UpdateArtefact, UpdateDtoCRUDTypeDefinition, UpdateInputSetsCRUDTypeDefinition, UpdateInputCRUDTypeDefinition, UpdateInputWhereCRUDTypeDefinition, UpdateOutputCRUDTypeDefinition, SoftDeleteInputWhereCRUDTypeDefinition, RestoreInputWhereCRUDTypeDefinition, RestoreOutputCRUDTypeDefinition, UpsertDtoCRUDTypeDefinition, UpsertArtefact, UpsertInputCRUDTypeDefinition, UpsertOutputCRUDTypeDefinition, UpsertStatusEnum, SoftRemoveDtoCRUDTypeDefinition, SoftRemoveArtefact, SoftRemoveInputWhereCRUDTypeDefinition, SoftRemoveInputCRUDTypeDefinition, SoftRemoveOutputCRUDTypeDefinition, RemoveDtoCRUDTypeDefinition, RemoveArtefact, RemoveInputCRUDTypeDefinition, RemoveOutputCRUDTypeDefinition, SoftRemoveOutputAffectedRowsCRUDTypeDefinition, FindOutputRowsCRUDTypeDefinition, UpdateOutputAffectedRowsCRUDTypeDefinition, RemoveOutputAffectedRowsCRUDTypeDefinition, RecoverDtoCRUDTypeDefinition, RecoverArtefact, RecoverInputCRUDTypeDefinition, RecoverOutputCRUDTypeDefinition, RecoverInputWhereCRUDTypeDefinition, RecoverOutputAffectedRowsCRUDTypeDefinition, FindInputDtoCRUDTypeDefinition, FindOneByIdInputCRUDTypeDefinition, FindInputPaginationOptionsDto, FindOutputPaginationOptionsDto, IdInputDto, DeleteInputWhereCRUDTypeDefinition, RemoveInputWhereCRUDTypeDefinition, WithDeletedInputDto } from "@libs/library-app";
import { SettingEntityMeta as meta, SettingEntity } from "../entities/setting.entity";
import { Directive, Field, InputType, Int, IntersectionType, ObjectType, PartialType } from "@nestjs/graphql";
import { IsNotEmpty, IsNumber, IsOptional, Validate } from "class-validator";
import { FindManyOptions, FindOptionsOrder, FindOptionsWhere } from "typeorm";
import { Exclude } from "class-transformer";
import { CrudAffectedDto, UpsertOutputProcessStatusDto } from "@libs/library-app";
import { AccessTypeEnum, SettingJsonTypeEnum, SettingUploadFileFieldEnum } from "../setting.enum";
import { SettingTypeEnum } from "../../type/type.enum";
import { SettingPreferenceFindInputWhereDto } from "../../preference/dto/preference.dto";
import { StaticDataFindInputWhereDto } from "../../static-data/dto/static.data.dto";
import { DeviceFindInputWhereDto } from "apps/shared-app/src/master/device/dto/device.dto";
import { FormFieldFindInputWhereDto } from "apps/shared-app/src/master/form-field/dto/form.field.dto";
import { SettingTypeFindInputWhereDto } from "../../type/dto/type.dto";
import { SettingCategoryFindInputWhereDto } from "../../category/dto/category.dto";
import { StaticDataValueFindInputWhereDto } from "../../static-data/value/dto/value.dto";

/**
 * █████████████████████████████████████████████████████████████
 * ██ DO NOT CHANGE IN THIS FILE IT WILL CRASH THE APP        ██
 * █████████████████████████████████████████████████████████████
**/

/**
 * # [done] ['../entities/setting.entity', './dto/setting.dto'] . Hint: find [ /setting. => and replace with ] [ /your-module. ] 
 * # [done] do not break some dependences which required this class
 * # [done] module [Setting]
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
export class SettingDto extends SettingEntity implements FindInputDtoCRUDTypeDefinition{
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
    declare key?: any; 
    declare settc_id?: any; 
    declare settty_id?: any; 
    declare frmfield_id?: any; 
    declare device_id?: any; 
    declare sd_id?: any;
    declare sd_name?: any; 
    declare default_sdv_id?: any;
    declare default_sdv_key?: any;
    declare default_sdt_key?: any;
    declare default_plain_value?: any;
    declare access_type?: any;  
    declare title?: any; 
    declare display_title?: any;  
    declare guideline?: any; 
    declare created?: any; 
    declare updated?: any; 
    declare deleted?: any;

    declare fr_setting_categorys?: any;
    declare fr_setting_types?: any;
    declare fr_form_fields?: any;
    declare fr_devices?: any;
    declare fr_static_datas?: any;
    declare fr_setting_preference?: any;
    declare fr_static_data_values?: any;
}

/**
 * █████████████████████████████████████████████████████████████
 * █ FIND DTO ██████████████████████████████████████████████████
 * █████████████████████████████████████████████████████████████
**/
@ObjectType({ isAbstract: true })
@Directive('@shareable')
export class SettingFindDto extends SettingEntity implements FindDtoCRUDTypeDefinition{
    static metaname: string = `${SettingEntity?.metaname}${FindArtefact}`;
    static metadesc: string = CrudDefMetaDesc.find_metadesc;
}


// ████ FIND INPUT DTO ████████████████████████████████████████████████


@InputType()
export class SettingFindInputWhereDto extends SettingDto implements FindInputWhereCRUDTypeDefinition{
    @Field(() => FindOperatorDto, {nullable: true, description: meta?.id.desc})
    @IsOptional()
    declare id?: FindOperatorDto;   
    
    @Field(() => FindOperatorDto, {nullable: true, description: meta?.key.desc})
    @IsOptional()
    declare key?: FindOperatorDto;

    @Field(() => FindOperatorDto, {nullable: true, description: meta?.settc_id.desc})
    @IsOptional()
    declare settc_id?: FindOperatorDto; 

    @Field(() => FindOperatorDto, {nullable: true, description: meta?.settty_id.desc})
    @IsOptional()
    declare settty_id?: FindOperatorDto; 
    
    @Field(() => FindOperatorDto, {nullable: true, description: meta?.frmfield_id.desc})
    @IsOptional()
    declare frmfield_id?: FindOperatorDto;  

    @Field(() => FindOperatorDto, {nullable: true, description: meta?.device_id.desc})
    @IsOptional()
    declare device_id?: FindOperatorDto;  

    @Field(() => FindOperatorDto, {nullable: true, description: meta?.sd_id.desc})
    @IsOptional()
    declare sd_id?: FindOperatorDto;

    @Field(() => FindOperatorDto, {nullable: true, description: meta?.sd_name.desc})
    @IsOptional()
    declare sd_name?: FindOperatorDto;  

    @Field(() => FindOperatorDto, {nullable: true, description: meta?.default_sdv_id.desc})
    @IsOptional()
    declare default_sdv_id?: FindOperatorDto;
    
    @Field(() => FindOperatorDto, {nullable: true, description: meta?.default_sdv_key.desc})
    @IsOptional()
    declare default_sdv_key?: FindOperatorDto;
    
    @Field(() => FindOperatorDto, {nullable: true, description: meta?.default_sdt_key.desc})
    @IsOptional()
    declare default_sdt_key?: FindOperatorDto;

    @Field(() => FindOperatorDto, {nullable: true, description: meta?.access_type.desc})
    @IsOptional()
    declare access_type?: FindOperatorDto;

    @Field(() => FindOperatorDto, {nullable: true, description: meta?.title.desc})
    @IsOptional()
    declare title?: FindOperatorDto;

    @Field(() => FindOperatorDto, {nullable: true, description: meta?.display_title.desc})
    @IsOptional()
    declare display_title?: FindOperatorDto;

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

    @Field(() => [SettingCategoryFindInputWhereDto], {nullable: true, description: meta?.fr_setting_categorys.desc})
    @IsOptional()
    declare fr_setting_categorys?: SettingCategoryFindInputWhereDto[];

    @Field(() => [SettingTypeFindInputWhereDto], {nullable: true, description: meta?.fr_setting_types.desc})
    @IsOptional()
    declare fr_setting_types?: SettingTypeFindInputWhereDto[];

    @Field(() => [FormFieldFindInputWhereDto], {nullable: true, description: meta?.fr_form_fields.desc})
    @IsOptional()
    declare fr_form_fields?: FormFieldFindInputWhereDto[];

    @Field(() => [DeviceFindInputWhereDto], {nullable: true, description: meta?.fr_devices.desc})
    @IsOptional()
    declare fr_devices?: DeviceFindInputWhereDto[];

    @Field(() => [StaticDataFindInputWhereDto], {nullable: true, description: meta?.fr_static_datas.desc})
    @IsOptional()
    declare fr_static_datas?: StaticDataFindInputWhereDto[];

    @Field(() => [SettingPreferenceFindInputWhereDto], {nullable: true, description: meta?.fr_setting_preference.desc})
    @IsOptional()
    declare fr_setting_preference?: SettingPreferenceFindInputWhereDto[];

    @Field(() => [StaticDataValueFindInputWhereDto], {nullable: true, description: meta?.fr_static_data_values.desc})
    @IsOptional()
    declare fr_static_data_values?: StaticDataValueFindInputWhereDto[];
}

@InputType()
export class SettingFindInputSortOrderDto implements FindOptionsOrder<SettingDto>, FindInputSortOrderCRUDTypeDefinition{
    
    @Field(() => RecordSortDirectionEnum, { nullable: true }) 
    @IsOptional()
    id?: RecordSortDirectionEnum;

    @Field(() => RecordSortDirectionEnum, { nullable: true })
    @IsOptional()
    key?: RecordSortDirectionEnum;

    @Field(() => RecordSortDirectionEnum, { nullable: true }) 
    @IsOptional()
    settc_id?: RecordSortDirectionEnum;

    @Field(() => RecordSortDirectionEnum, { nullable: true }) 
    @IsOptional()
    settty_id?: RecordSortDirectionEnum;

    @Field(() => RecordSortDirectionEnum, { nullable: true }) 
    @IsOptional()
    frmfield_id?: RecordSortDirectionEnum;

    @Field(() => RecordSortDirectionEnum, { nullable: true }) 
    @IsOptional()
    device_id?: RecordSortDirectionEnum;

    @Field(() => RecordSortDirectionEnum, { nullable: true })
    @IsOptional()
    sd_id?: RecordSortDirectionEnum;

    @Field(() => RecordSortDirectionEnum, { nullable: true }) 
    @IsOptional()
    sd_name?: RecordSortDirectionEnum;

    @Field(() => RecordSortDirectionEnum, { nullable: true }) 
    @IsOptional()
    default_sdv_id?: RecordSortDirectionEnum;
    
    @Field(() => RecordSortDirectionEnum, { nullable: true }) 
    @IsOptional()
    default_sdv_key?: RecordSortDirectionEnum;
    
    @Field(() => RecordSortDirectionEnum, { nullable: true }) 
    @IsOptional()
    default_sdt_key?: RecordSortDirectionEnum;

    @Field(() => RecordSortDirectionEnum, { nullable: true }) 
    @IsOptional()
    access_type?: RecordSortDirectionEnum;

    @Field(() => RecordSortDirectionEnum, { nullable: true }) 
    @IsOptional()
    title?: RecordSortDirectionEnum;

    @Field(() => RecordSortDirectionEnum, { nullable: true }) 
    @IsOptional()
    display_title?: RecordSortDirectionEnum;

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
export class SettingFindInputGroupByDto implements FindOptionsOrder<SettingDto>, FindInputGroupByCRUDTypeDefinition{
    
    @Field(() => Boolean, { nullable: true })
    @IsOptional()
    key?: boolean;

    @Field(() => Boolean, { nullable: true })
    @IsOptional()
    settc_id?: boolean;

    @Field(() => Boolean, { nullable: true })
    @IsOptional()
    settty_id?: boolean;

    @Field(() => Boolean, { nullable: true })
    @IsOptional()
    frmfield_id?: boolean;

    @Field(() => Boolean, { nullable: true })
    @IsOptional()
    device_id?: boolean;

    @Field(() => Boolean, { nullable: true })
    @IsOptional()
    sd_id?: boolean;

    @Field(() => Boolean, { nullable: true })
    @IsOptional()
    sd_name?: boolean;

    @Field(() => Boolean, { nullable: true })
    @IsOptional()
    default_sdv_id?: boolean;
    
    @Field(() => Boolean, { nullable: true })
    @IsOptional()
    default_sdv_key?: boolean;
    
    @Field(() => Boolean, { nullable: true })
    @IsOptional()
    default_sdt_key?: boolean;

    @Field(() => Boolean, { nullable: true })
    @IsOptional()
    access_type?: boolean;

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
export class SettingFindInputDto extends IntersectionType(FindInputPaginationOptionsDto, WithDeletedInputDto) implements FindManyOptions<SettingDto>, FindInputCRUDTypeDefinition{
    // input layout design for users to perform find with various database options
  
    /**
     * Conditions to be met for the resulting set.
     * also validate the user pass only 1 operator to search for field
     */
    @Field(() => [SettingFindInputWhereDto], { nullable: true, description: CrudDefMetaDesc.find_where })
    @IsOptional()
    @Validate(OnlyOneSeachOperatorAllowed)
    declare where?: FindOptionsWhere<SettingFindInputWhereDto>[];
  
  
    /**
     * Specifies how to group the rows returned by the SELECT statement.
     */
    @Field(() => SettingFindInputGroupByDto, { nullable: true, description: CrudDefMetaDesc.find_group_by })
    @IsOptional()
    declare groupBy?: SettingFindInputGroupByDto;
  
    /**
     * Sort the result set by fields using ascending or descending order.
     */
    @Field(() => SettingFindInputSortOrderDto, { nullable: true, description: CrudDefMetaDesc.find_order })
    @IsOptional()
    declare order?: FindOptionsOrder<SettingFindInputSortOrderDto>;
}


// ████ FIND OUTPUT DTO ████████████████████████████████████████████████

@ObjectType()
@Directive('@shareable')
export class SettingFindOutputRowsDto extends SettingFindDto implements FindOutputRowsCRUDTypeDefinition{
    // this DTO will be used at many palce for output object, os make sure this is properly developed
}

@ObjectType()
@Directive('@shareable')
export class SettingFindOutputDto extends FindOutputPaginationOptionsDto implements FindOutputCRUDTypeDefinition{
    // output layout design for users to get find response

    // we assign any because iin GRAPHQL for requuest body this rows will have fields with boolean value whether to include in response or not
    // this is very crucial to understand this structure and you need to understand how graphQL works
    @Field(() => [SettingEntity], {description: CrudDefMetaDesc.find_rows})
    declare rows?: SettingEntity | SettingEntity[] | any;
}

/**
 * ██████████████████████████████████████████████████████████████████████████████████████████████████████████████████
 * █ FIND ONE BY ID DTO █████████████████████████████████████████████████████████████████████████████████████████████
 * ██████████████████████████████████████████████████████████████████████████████████████████████████████████████████
**/

export class SettingFindOneByIdDto extends SettingEntity implements FindDtoCRUDTypeDefinition{
    static metaname: string = `${SettingEntity.metaname}${FindOneByIdArtefact}`;
    static metadesc: string = CrudDefMetaDesc.findOneById_metadesc;
}

// ████ FIND ONE BY ID INPUT DTO ████████████████████████████████████████████████

@InputType()
export class SettingFindOneByIdInputDto extends IntersectionType(IdInputDto, WithDeletedInputDto) implements FindOneByIdInputCRUDTypeDefinition{

}

/**
 * █████████████████████████████████████████████████████████████
 * █ CREATE DTO ████████████████████████████████████████████████
 * █████████████████████████████████████████████████████████████
**/

export class SettingCreateDto extends SettingEntity implements CreateDtoCRUDTypeDefinition {
    static metaname: string = `${SettingEntity.metaname}${CreateArtefact}`;
    static metadesc: string = CrudDefMetaDesc.create_metadesc;
}
// ████ CREATE INPUT DTO ████████████████████████████████████████████████

@InputType()
export class SettingCreateInputDto extends  SettingCreateDto implements CreateInputCRUDTypeDefinition {
  
    @Field(() => String, {nullable: false, description: meta?.key.desc})
    declare key?: string;

    @Field(() => Int, {nullable: false, description: meta?.settc_id.desc})
    declare settc_id?: number;

    @Field(() => Int, {nullable: false, description: meta?.settty_id.desc})
    declare settty_id?: number;

    @Field(() => Int, {nullable: false, description: meta?.frmfield_id .desc})
    declare frmfield_id ?: number;

    @Field(() => Int, {nullable: true, description: meta?.device_id.desc})
    declare device_id?: number;

    @Field(() => Int, {nullable: true, description: meta?.sd_id.desc})
    declare sd_id?: number;

    @Field(() => String, {nullable: true, description: meta?.sd_name.desc})
    declare sd_name?: string;

    @Field(() => Int, {nullable: true, description: meta?.default_sdv_id.desc})
    declare default_sdv_id?: number;
    
    @Field(() => String, {nullable: true, description: meta?.default_sdv_key.desc})
    declare default_sdv_key?: string;
    
    @Field(() => String, {nullable: true, description: meta?.default_sdt_key.desc})
    declare default_sdt_key?: string;

    @Field(() => String, {nullable: true, description: meta?.default_plain_value.desc})
    declare default_plain_value?: string;

    @Field(() => AccessTypeEnum, {nullable: false, description: meta?.access_type.desc, defaultValue: AccessTypeEnum.PUBLIC})
    declare access_type?: AccessTypeEnum;

    @Field(() => String, {nullable: false, description: meta?.title.desc})
    declare title?: string;

    @Field(() => String, {nullable: false, description: meta?.display_title.desc})
    declare display_title?: string;

    @Field(() => String, {nullable: false, description: meta?.guideline.desc})
    declare guideline?: string;
}

// ████ CREATE OUTPUT DTO ████████████████████████████████████████████████

@ObjectType()
@Directive('@shareable')
export class SettingCreateOutputDto extends SettingFindOutputRowsDto implements CreateOutputCRUDTypeDefinition {
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


export class SettingUpdateDto extends SettingDto implements UpdateDtoCRUDTypeDefinition{
    static metaname: string = `${SettingEntity.metaname}${UpdateArtefact}`;
    static metadesc: string = CrudDefMetaDesc.update_metadesc;
}

// ████ UPDATE INPUT DTO ████████████████████████████████████████████████

@InputType()
export class SettingUpdateInputWhereDto extends SettingFindInputWhereDto implements UpdateInputWhereCRUDTypeDefinition{
    /**
     * avoiding redundant code
     * considering whatever FindInputWhere ask for input, same apply to UpdateInputWhere so extending class
     * just add what is new or different for UpdateInputWhere, that means it's 100% customisable
     * you can also remove extends *FindInputWhere and define entire custom dto here if needed 
     **/
}

@InputType()
export class SettingUpdateInputSetsDto extends PartialType(SettingCreateInputDto) implements UpdateInputSetsCRUDTypeDefinition {
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
export class SettingUpdateInputDto implements UpdateInputCRUDTypeDefinition{
    // input layout design for users to perform update with various database options
  
    /**
     * Conditions to be met for the resulting set.
     * also validate the user pass only 1 operator to search for field
     */
    @Field(() => [SettingUpdateInputWhereDto], { nullable: false, description: CrudDefMetaDesc.update_where })
    @IsNotEmpty()
    @Validate(OnlyOneSeachOperatorAllowed)
    where!: FindOptionsWhere<SettingUpdateInputWhereDto>[];

    /**
     * What to set for update
     * basically fields list of update
     */
    @Field(() => SettingUpdateInputSetsDto, { nullable: false, description: CrudDefMetaDesc.update_sets })
    @IsNotEmpty()
    sets!: SettingUpdateInputSetsDto

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
export class SettingUpdateOutputAffectedRowsDto extends SettingFindOutputRowsDto implements UpdateOutputAffectedRowsCRUDTypeDefinition{
    /**
     * avoiding redundant code
     * considering whatever FindOutputRows return, same apply to UpdateOutputAffectedRows so extending class
     * just add what is new or different for UpdateOutputAffectedRows, that means it's 100% customisable
     * you can also remove extends *FindOutputRows and define entire custom dto here if needed 
     **/
}

@ObjectType()
@Directive('@shareable')
export class SettingUpdateOutputDto extends CrudAffectedDto implements UpdateOutputCRUDTypeDefinition{
  @Field(() => [SettingEntity], {description: CrudDefMetaDesc.update_affected_rows}) 
  declare affectedRows?: SettingEntity[] | any; 
}


/**
 * █████████████████████████████████████████████████████████████
 * █ SOFT DELETE DTO ███████████████████████████████████████████
 * █████████████████████████████████████████████████████████████
**/
// this operation run directly withouth checking the data if exist or not, so it's quick but do not provide more information about operation

// ████ SOFT DELETE INPUT DTO ████████████████████████████████████████████████
export class SettingSoftDeleteDto extends SettingEntity implements SoftDeleteDtoCRUDTypeDefinition{
  static metaname: string = `${SettingEntity.metaname}${SoftDeleteArtefact}`;
  static metadesc: string = CrudDefMetaDesc.softDelete_metadesc;
}

@InputType()
export class SettingSoftDeleteInputWhereDto extends SettingFindInputWhereDto implements SoftDeleteInputWhereCRUDTypeDefinition{
  /**
   * avoiding redundant code
   * considering whatever FindInputWhere ask for input, same apply to SoftDeleteInputWhere so extending class
   * just add what is new or different for SoftDeleteInputWhere, that means it's 100% customisable
   * you can also remove extends *FindInputWhere and define entire custom dto here if needed 
   **/
}

@InputType()
export class SettingSoftDeleteInputDto implements SoftDeleteInputCRUDTypeDefinition{
  @Field(() => [SettingSoftDeleteInputWhereDto], {nullable: true, description: CrudDefMetaDesc.softDelete_where})
  @Validate(OnlyOneSeachOperatorAllowed)
  where?: FindOptionsWhere<SettingSoftDeleteInputWhereDto>[];
}


// ████ SOFT DELETE OUTPUT DTO ████████████████████████████████████████████████

@ObjectType()
@Directive('@shareable')
export class SettingSoftDeleteOutputDto extends CrudAffectedDto implements SoftDeleteOutputCRUDTypeDefinition{
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

export class SettingDeleteDto extends SettingEntity implements DeleteDtoCRUDTypeDefinition{
  static metaname: string = `${SettingEntity.metaname}${DeleteArtefact}`;
  static metadesc: string = CrudDefMetaDesc.delete_metadesc;
}

// ████ DELETE INPUT DTO ████████████████████████████████████████████████

@InputType()
export class SettingDeleteInputWhereDto extends SettingFindInputWhereDto implements DeleteInputWhereCRUDTypeDefinition{
  /**
   * avoiding redundant code
   * considering whatever FindInputWhere ask for input, same apply to SoftDeleteInputWhere so extending class
   * just add what is new or different for SoftDeleteInputWhere, that means it's 100% customisable
   * you can also remove extends *FindInputWhere and define entire custom dto here if needed 
   **/
}

@InputType()
export class SettingDeleteInputDto implements DeleteInputCRUDTypeDefinition{
  @Field(() => [SettingDeleteInputWhereDto], {nullable: true, description: CrudDefMetaDesc.delete_where})
  @Validate(OnlyOneSeachOperatorAllowed)
  where?: FindOptionsWhere<SettingDeleteInputWhereDto>[];
}


// ████ DELETE OUTPUT DTO ████████████████████████████████████████████████

@ObjectType()
@Directive('@shareable')
export class SettingDeleteOutputDto extends CrudAffectedDto implements DeleteOutputCRUDTypeDefinition{
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

export class SettingRestoreDto extends SettingEntity implements RestoreDtoCRUDTypeDefinition{
    static metaname: string = `${SettingEntity.metaname}${RestoreArtefact}`;
    static metadesc: string = CrudDefMetaDesc.restore_metadesc;
}

// ████ RESTORE INPUT DTO ██████████████████████████████████████████████████████

@InputType()
export class SettingRestoreInputWhereDto extends SettingFindInputWhereDto implements RestoreInputWhereCRUDTypeDefinition{
  /**
   * avoiding redundant code
   * considering whatever FindInputWhere ask for input, same apply to SoftDeleteInputWhere so extending class
   * just add what is new or different for SoftDeleteInputWhere, that means it's 100% customisable
   * you can also remove extends *FindInputWhere and define entire custom dto here if needed 
   **/
}

@InputType()
export class SettingRestoreInputDto implements RestoreInputCRUDTypeDefinition{
  @Field(() => [SettingRestoreInputWhereDto], {nullable: true, description: CrudDefMetaDesc.restore_where})
  @Validate(OnlyOneSeachOperatorAllowed)
  where?: FindOptionsWhere<SettingRestoreInputWhereDto>[];
}
  
// ████ RESTORE OUTPUT DTO ██████████████████████████████████████████████████████
  
@ObjectType()
@Directive('@shareable')
export class SettingRestoreOutputDto extends CrudAffectedDto implements RestoreOutputCRUDTypeDefinition{
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

export class SettingUpsertDto extends SettingEntity implements UpsertDtoCRUDTypeDefinition{
  static metaname: string = `${SettingEntity.metaname}${UpsertArtefact}`;
  static metadesc: string = CrudDefMetaDesc.upsert_metadesc;
}

// ████ UPSERT INPUT DTO ██████████████████████████████████████████████████████

@InputType()
export class SettingUpsertInputDto extends SettingCreateInputDto implements UpsertInputCRUDTypeDefinition{
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
    static conflictResolveFields: (keyof SettingUpsertInputDto)[] = ['key'];
}

// ████ UPSERT OUTPUT DTO ██████████████████████████████████████████████████████

@ObjectType()
@Directive('@shareable')
export class SettingUpsertOutputDto extends IntersectionType(SettingCreateOutputDto, UpsertOutputProcessStatusDto) implements UpsertOutputCRUDTypeDefinition{ 
 
}

/**
 * █████████████████████████████████████████████████████████████
 * █ SOFT REMOVE DTO ███████████████████████████████████████████
 * █████████████████████████████████████████████████████████████
**/
// unlike soft delete, this operation first get the data from database and after run the operation, so it's complex but provide more and clear information about operation

// ████ SOFT REMOVE INPUT DTO ████████████████████████████████████████████████
export class SettingSoftRemoveDto extends SettingEntity implements SoftRemoveDtoCRUDTypeDefinition{
  static metaname: string = `${SettingEntity.metaname}${SoftRemoveArtefact}`;
  static metadesc: string = CrudDefMetaDesc.softRemove_metadesc;
}

@InputType()
export class SettingSoftRemoveInputWhereDto extends SettingFindInputWhereDto implements SoftRemoveInputWhereCRUDTypeDefinition{
  /**
   * avoiding redundant code
   * considering whatever FindInputWhere ask for input, same apply to SoftRemoveInputWhere so extending class
   * just add what is new or different for SoftRemoveInputWhere, that means it's 100% customisable
   * you can also remove extends *FindInputWhere and define entire custom dto here if needed 
   **/
}

@InputType()
export class SettingSoftRemoveInputDto implements SoftRemoveInputCRUDTypeDefinition{
  @Field(() => [SettingSoftRemoveInputWhereDto], {nullable: true, description: CrudDefMetaDesc.softRemove_where})
  @Validate(OnlyOneSeachOperatorAllowed)
  where?: FindOptionsWhere<SettingSoftRemoveInputWhereDto>[];
}


// ████ SOFT REMOVE OUTPUT DTO ████████████████████████████████████████████████

@ObjectType()
@Directive('@shareable')
export class SettingSoftRemoveOutputAffectedRowsDto extends SettingFindOutputRowsDto implements SoftRemoveOutputAffectedRowsCRUDTypeDefinition{
  /**
   * avoiding redundant code
   * considering whatever FindOutputRows return, same apply to SoftRemoveOutputAffectedRows so extending class
   * just add what is new or different for SoftRemoveOutputAffectedRows, that means it's 100% customisable
   * you can also remove extends FindOutputRows and define entire custom dto here if needed 
   **/
}
@ObjectType()
@Directive('@shareable')
export class SettingSoftRemoveOutputDto extends CrudAffectedDto implements SoftRemoveOutputCRUDTypeDefinition{
  /**
   * avoiding redundant code
   * considering whatever AffectedDto return, same apply to SoftRemoveOutput so extending class
   * just add what is new or different for SoftRemoveOutput, that means it's 100% customisable
   * you can also remove extends AffectedDto and define entire custom dto here if needed 
   **/

  @Field(() => [SettingEntity]) 
  declare affectedRows?: SettingEntity[] | any
}

/**
 * █████████████████████████████████████████████████████████████
 * █ REMOVE DTO ████████████████████████████████████████████████
 * █████████████████████████████████████████████████████████████
**/
// unlike soft delete, this operation first get the data from database and after run the operation, so it's complex but provide more and clear information about operation

export class SettingRemoveDto extends SettingEntity implements RemoveDtoCRUDTypeDefinition{
  static metaname: string = `${SettingEntity.metaname}${RemoveArtefact}`;
  static metadesc: string = CrudDefMetaDesc.remove_metadesc;
}

// ████ REMOVE INPUT DTO ████████████████████████████████████████████████

@InputType()
export class SettingRemoveInputWhereDto extends SettingFindInputWhereDto implements RemoveInputWhereCRUDTypeDefinition{
  /**
   * avoiding redundant code
   * considering whatever FindInputWhere ask for input, same apply to SoftRemoveInputWhere so extending class
   * just add what is new or different for SoftRemoveInputWhere, that means it's 100% customisable
   * you can also remove extends *FindInputWhere and define entire custom dto here if needed 
   **/
}

@InputType()
export class SettingRemoveInputDto implements RemoveInputCRUDTypeDefinition{
  @Field(() => [SettingRemoveInputWhereDto], {nullable: true, description: CrudDefMetaDesc.remove_where})
  @Validate(OnlyOneSeachOperatorAllowed)
  where?: FindOptionsWhere<SettingRemoveInputWhereDto>[];
}

// ████ REMOVE OUTPUT DTO ████████████████████████████████████████████████

@ObjectType()
@Directive('@shareable')
export class SettingRemoveOutputAffectedRowsDto extends SettingFindOutputRowsDto implements RemoveOutputAffectedRowsCRUDTypeDefinition{
  /**
   * avoiding redundant code
   * considering whatever FindOutputRows return, same apply to RemoveOutputAffectedRows so extending class
   * just add what is new or different for RemoveOutputAffectedRows, that means it's 100% customisable
   * you can also remove extends FindOutputRows and define entire custom dto here if needed 
   **/
}
@ObjectType()
@Directive('@shareable')
export class SettingRemoveOutputDto extends CrudAffectedDto implements RemoveOutputCRUDTypeDefinition{
  /**
   * avoiding redundant code
   * considering whatever AffectedDto return, same apply to RemoveOutput so extending class
   * just add what is new or different for RemoveOutput, that means it's 100% customisable
   * you can also remove extends AffectedDto and define entire custom dto here if needed 
   **/

  @Field(() => [SettingEntity]) 
  declare affectedRows?: SettingEntity[] | any;
}

/**
 * █████████████████████████████████████████████████████████████
 * █ RECOVER DTO ████████████████████████████████████████████████
 * █████████████████████████████████████████████████████████████
**/
// unlike soft delete, this operation first get the data from database and after run the operation, so it's complex but provide more and clear information about operation

export class SettingRecoverDto extends SettingEntity implements RecoverDtoCRUDTypeDefinition{
  static metaname: string = `${SettingEntity.metaname}${RecoverArtefact}`;
  static metadesc: string = CrudDefMetaDesc.recover_metadesc;
}

// ████ RECOVER INPUT DTO ██████████████████████████████████████████████████████

@InputType()
export class SettingRecoverInputWhereDto extends SettingFindInputWhereDto implements RecoverInputWhereCRUDTypeDefinition{
/**
 * avoiding redundant code
 * considering whatever FindInputWhere ask for input, same apply to SoftDeleteInputWhere so extending class
 * just add what is new or different for SoftDeleteInputWhere, that means it's 100% customisable
 * you can also remove extends *FindInputWhere and define entire custom dto here if needed 
 **/
}

@InputType()
export class SettingRecoverInputDto implements RecoverInputCRUDTypeDefinition{
  @Field(() => [SettingRecoverInputWhereDto], {nullable: true, description: CrudDefMetaDesc.recover_where})
  @Validate(OnlyOneSeachOperatorAllowed)
  where?: FindOptionsWhere<SettingRecoverInputWhereDto>[];
}

// ████ RECOVER OUTPUT DTO ██████████████████████████████████████████████████████

@ObjectType()
@Directive('@shareable')
export class SettingRecoverOutputAffectedRowsDto extends SettingFindOutputRowsDto implements RecoverOutputAffectedRowsCRUDTypeDefinition{
  /**
   * avoiding redundant code
   * considering whatever FindOutputRows return, same apply to RecoverOutputAffectedRows so extending class
   * just add what is new or different for RecoverOutputAffectedRows, that means it's 100% customisable
   * you can also remove extends FindOutputRows and define entire custom dto here if needed 
   **/
}

@ObjectType()
@Directive('@shareable')
export class SettingRecoverOutputDto extends CrudAffectedDto implements RecoverOutputCRUDTypeDefinition{
  /**
   * avoiding redundant code
   * considering whatever AffectedDto return, same apply to RecoverOutput so extending class
   * just add what is new or different for RecoverOutput, that means it's 100% customisable
   * you can also remove extends AffectedDto and define entire custom dto here if needed 
   **/

  @Field(() => [SettingEntity]) 
  declare affectedRows?: SettingEntity[] | any;
}

/**
 * █████████████████████████████████████████████████████████████
 * █ UPLOAD DTO ████████████████████████████████████████████████
 * █████████████████████████████████████████████████████████████
**/

export class SettingUploadDto extends SettingEntity implements UploadDtoCRUDTypeDefinition {
  static metaname: string = `${SettingEntity?.metaname}${UploadArtefact}`;
  static metadesc: string = CrudDefMetaDesc.upload_metadesc;
}

// ████ UPLOAD REF TYPE DTO ████████████████████████████████████████████████

@InputType()
export class UploadFileFieldInputDto {
@Field(() => SettingUploadFileFieldEnum, {nullable: false, description: CrudDefMetaDesc.upload_file_field})
@IsNotEmpty()
file_field!: SettingUploadFileFieldEnum;
}

@ObjectType()
@Directive('@shareable')
export class UploadFileFieldOutputDto extends PartialType(UploadFileFieldInputDto) {

}

// ████ UPLOAD INPUT DTO ████████████████████████████████████████████████
@InputType()
export class SettingUploadInputDto extends IntersectionType(UploadFileFieldInputDto, UploadInputDto) implements UploadInputArtefactCRUDTypeDefinition {

}

// ████ UPLOAD OUTPUT DTO ███████████████████████████████████████████████
@ObjectType()
@Directive('@shareable')
export class SettingUploadOutputDto extends IntersectionType(UploadFileFieldOutputDto, UploadOutputDto) implements UploadOutputArtefactCRUDTypeDefinition {

}

/**
* █████████████████████████████████████████████████████████████
* █ UPLOAD DELETE DTO █████████████████████████████████████████
* █████████████████████████████████████████████████████████████
**/

export class SettingUploadDeleteDto extends SettingEntity implements UploadDeleteDtoCRUDTypeDefinition {
static metaname: string = `${SettingEntity?.metaname}${UploadDeleteArtefact}`;
static metadesc: string = CrudDefMetaDesc.upload_delete_metadesc;
}

// ████ UPLOAD DELETE INPUT DTO ████████████████████████████████████████████████
@InputType()
export class SettingUploadDeleteInputDto extends IntersectionType(UploadFileFieldInputDto, UploadDeleteInputDto) implements UploadDeleteInputArtefactCRUDTypeDefinition {

}

// ████ UPLOAD DELETE OUTPUT DTO ███████████████████████████████████████████████
@ObjectType()
@Directive('@shareable')
export class SettingUploadDeleteOutputDto extends IntersectionType(UploadFileFieldOutputDto, UploadDeleteOutputDto) implements UploadDeleteOutputArtefactCRUDTypeDefinition {

}


/**
 * █████████████████████████████████████████████████████████████
 * █ SETTING JSON DTO ██████████████████████████████████████████
 * █████████████████████████████████████████████████████████████
**/

export class SettingJsonDto extends SettingEntity {
  static metaname: string = `${SettingEntity?.metaname}Json`;
  static metadesc: string = `Setting  json object used to get availabe dynamic settings.`;
}

// ████ SETTING JSON INPUT DTO ████████████████████████████████████████████████
@InputType()
export class SettingJsonInputDto {
    @Field(() => [SettingTypeEnum], { nullable: true, description: `Choose setting type to retrive settings.` })
    @IsOptional()
    setting_type?: SettingTypeEnum | SettingTypeEnum[];

    @Field(() => SettingJsonTypeEnum, { nullable: true, description: `Choose response json type. There are total 3 types of architecture. Default is RAW.` })
    @IsOptional()
    json_type?: SettingJsonTypeEnum
}

// ████ SETTING JSON OUTPUT DTO ███████████████████████████████████████████████
@ObjectType()
@Directive('@shareable')
export class SettingJsonOutputDto {

}


/**
 * █████████████████████████████████████████████████████████████
 * █ SETTING JSON FROM LOCAL STORAGE DTO ███████████████████████
 * █████████████████████████████████████████████████████████████
**/

export class SettingJsonFromLocalStorageDto extends SettingEntity {
  static metaname: string = `${SettingEntity?.metaname}JsonFromLocalStorage`;
  static metadesc: string = `Setting json object used to get availabe dynamic settings from local storage.`;
}