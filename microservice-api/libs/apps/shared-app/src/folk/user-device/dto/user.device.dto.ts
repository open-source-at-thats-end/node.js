import { UploadDeleteInputDto, UploadDeleteOutputDto, UploadInputDto, UploadOutputDto, UploadArtefact, UploadDtoCRUDTypeDefinition, UploadInputArtefactCRUDTypeDefinition, UploadOutputArtefactCRUDTypeDefinition, UploadDeleteArtefact, UploadDeleteDtoCRUDTypeDefinition, UploadDeleteInputArtefactCRUDTypeDefinition, UploadDeleteOutputArtefactCRUDTypeDefinition, CreateArtefact, CreateDtoCRUDTypeDefinition, CreateInputCRUDTypeDefinition, CreateOutputCRUDTypeDefinition, CrudDefMetaDesc, DateTime, DeleteArtefact, DeleteDtoCRUDTypeDefinition, DeleteInputCRUDTypeDefinition, DeleteOutputCRUDTypeDefinition, FindArtefact, FindDtoCRUDTypeDefinition, FindInputGroupByCRUDTypeDefinition, FindInputSortOrderCRUDTypeDefinition, FindInputCRUDTypeDefinition, FindInputWhereCRUDTypeDefinition, FindOneByIdArtefact, FindOperatorDto, FindOutputPaginationDto, FindOutputCRUDTypeDefinition, OnlyOneSeachOperatorAllowed, RecordSortDirectionEnum, RestoreArtefact, RestoreDtoCRUDTypeDefinition, RestoreInputCRUDTypeDefinition, SoftDeleteArtefact, SoftDeleteDtoCRUDTypeDefinition, SoftDeleteInputCRUDTypeDefinition, SoftDeleteOutputCRUDTypeDefinition, UpdateArtefact, UpdateDtoCRUDTypeDefinition, UpdateInputSetsCRUDTypeDefinition, UpdateInputCRUDTypeDefinition, UpdateInputWhereCRUDTypeDefinition, UpdateOutputCRUDTypeDefinition, SoftDeleteInputWhereCRUDTypeDefinition, RestoreInputWhereCRUDTypeDefinition, RestoreOutputCRUDTypeDefinition, UpsertDtoCRUDTypeDefinition, UpsertArtefact, UpsertInputCRUDTypeDefinition, UpsertOutputCRUDTypeDefinition, UpsertStatusEnum, SoftRemoveDtoCRUDTypeDefinition, SoftRemoveArtefact, SoftRemoveInputWhereCRUDTypeDefinition, SoftRemoveInputCRUDTypeDefinition, SoftRemoveOutputCRUDTypeDefinition, RemoveDtoCRUDTypeDefinition, RemoveArtefact, RemoveInputCRUDTypeDefinition, RemoveOutputCRUDTypeDefinition, SoftRemoveOutputAffectedRowsCRUDTypeDefinition, FindOutputRowsCRUDTypeDefinition, UpdateOutputAffectedRowsCRUDTypeDefinition, RemoveOutputAffectedRowsCRUDTypeDefinition, RecoverDtoCRUDTypeDefinition, RecoverArtefact, RecoverInputCRUDTypeDefinition, RecoverOutputCRUDTypeDefinition, RecoverInputWhereCRUDTypeDefinition, RecoverOutputAffectedRowsCRUDTypeDefinition, FindInputDtoCRUDTypeDefinition, FindOneByIdInputCRUDTypeDefinition, FindInputPaginationOptionsDto, FindOutputPaginationOptionsDto, IdInputDto, DeleteInputWhereCRUDTypeDefinition, RemoveInputWhereCRUDTypeDefinition, WithDeletedInputDto } from "@libs/library-app";
import { UserDeviceEntityMeta as meta, UserDeviceEntity } from "../entities/user.device.entity";
import { Directive, Field, InputType, Int, IntersectionType, ObjectType, PartialType } from "@nestjs/graphql";
import { IsNotEmpty, IsNumber, IsOptional, Validate } from "class-validator";
import { FindManyOptions, FindOptionsOrder, FindOptionsWhere } from "typeorm";
import { Exclude } from "class-transformer";
import { IdOrIdsInputDto, CrudAffectedDto, UpsertOutputProcessStatusDto } from "@libs/library-app";
import { GraphQLIP, GraphQLMAC } from "graphql-scalars";
import { UserDeviceUploadFileFieldEnum } from "../user.device.enum";
import { DeviceFindInputWhereDto } from "apps/shared-app/src/master/device/dto/device.dto";
import { UserFindInputWhereDto } from "../../user/dto/user.dto";

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
export class UserDeviceDto extends UserDeviceEntity implements FindInputDtoCRUDTypeDefinition{
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
     declare u_id?: any;
     declare device_id?: any;
     declare device_token?: any;
     declare from_ip_address?: any;
     declare device_mac_address?: any;
     declare device_system_id?: any;
     declare device_name?: any;
     declare device_user_agent?: any;
     declare suspended?: any;
     declare created?: any;
     declare updated?: any;
     declare deleted?: any;

     declare fr_device?: any;
     declare fr_user?: any;
}

/**
 * █████████████████████████████████████████████████████████████
 * █ FIND DTO ██████████████████████████████████████████████████
 * █████████████████████████████████████████████████████████████
**/
@ObjectType({ isAbstract: true })
@Directive('@shareable')
export class UserDeviceFindDto extends UserDeviceEntity implements FindDtoCRUDTypeDefinition{
    static metaname: string = `${UserDeviceEntity?.metaname}${FindArtefact}`;
    static metadesc: string = CrudDefMetaDesc.find_metadesc;
}


// ████ FIND INPUT DTO ████████████████████████████████████████████████

@InputType()
export class UserDeviceFindInputWhereDto extends UserDeviceDto implements FindInputWhereCRUDTypeDefinition{
    @Field(() => FindOperatorDto, {nullable: true, description: meta?.id.desc})
    @IsOptional()
    declare id?: FindOperatorDto;    

    @Field(() => FindOperatorDto, {nullable: true, description: meta?.u_id.desc})
    @IsOptional()
    declare u_id?: FindOperatorDto;

    @Field(() => FindOperatorDto, {nullable: true, description: meta?.device_id.desc})
    @IsOptional()
    declare device_id?: FindOperatorDto;

    @Field(() => FindOperatorDto, {nullable: true, description: meta?.device_token.desc})
    @IsOptional()
    declare device_token?: FindOperatorDto;

    @Field(() => FindOperatorDto, {nullable: true, description: meta?.from_ip_address.desc})
    @IsOptional()
    declare from_ip_address?: FindOperatorDto;

    @Field(() => FindOperatorDto, {nullable: true, description: meta?.device_mac_address.desc})
    @IsOptional()
    declare device_mac_address?: FindOperatorDto;

    @Field(() => FindOperatorDto, {nullable: true, description: meta?.device_system_id.desc})
    @IsOptional()
    declare device_system_id?: FindOperatorDto;

    @Field(() => FindOperatorDto, {nullable: true, description: meta?.device_name.desc})
    @IsOptional()
    declare device_name?: FindOperatorDto;

    @Field(() => FindOperatorDto, {nullable: true, description: meta?.device_user_agent.desc})
    @IsOptional()
    declare device_user_agent?: FindOperatorDto;

    @Field(() => FindOperatorDto, {nullable: true, description: meta?.suspended.desc})
    @IsOptional()
    declare suspended?: FindOperatorDto;

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

    @Field(() => [DeviceFindInputWhereDto], {nullable: true, description: meta?.fr_device.desc})
    @IsOptional()
    declare fr_device?: DeviceFindInputWhereDto[];

    @Field(() => [UserFindInputWhereDto], {nullable: true, description: meta?.fr_user.desc})
    @IsOptional()
    declare fr_user?: UserFindInputWhereDto[];
}

@InputType()
export class UserDeviceFindInputSortOrderDto implements FindOptionsOrder<UserDeviceDto>, FindInputSortOrderCRUDTypeDefinition{
    
    @Field(() => RecordSortDirectionEnum, { nullable: true }) 
    @IsOptional()
    id?: RecordSortDirectionEnum;

    @Field(() => RecordSortDirectionEnum, { nullable: true })
    @IsOptional()
    u_id?: RecordSortDirectionEnum;

    @Field(() => RecordSortDirectionEnum, { nullable: true })
    @IsOptional()
    device_id?: RecordSortDirectionEnum;

    @Field(() => RecordSortDirectionEnum, { nullable: true })
    @IsOptional()
    device_token?: RecordSortDirectionEnum;

    @Field(() => RecordSortDirectionEnum, { nullable: true })
    @IsOptional()
    from_ip_address?: RecordSortDirectionEnum;

    @Field(() => RecordSortDirectionEnum, { nullable: true })
    @IsOptional()
    device_mac_address?: RecordSortDirectionEnum;

    @Field(() => RecordSortDirectionEnum, { nullable: true })
    @IsOptional()
    device_system_id?: RecordSortDirectionEnum;

    @Field(() => RecordSortDirectionEnum, { nullable: true })
    @IsOptional()
    device_name?: RecordSortDirectionEnum;

    @Field(() => RecordSortDirectionEnum, { nullable: true })
    @IsOptional()
    device_user_agent?: RecordSortDirectionEnum;

    @Field(() => RecordSortDirectionEnum, { nullable: true })
    @IsOptional()
    suspended?: RecordSortDirectionEnum;

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
export class UserDeviceFindInputGroupByDto implements FindOptionsOrder<UserDeviceDto>, FindInputGroupByCRUDTypeDefinition{
  
    @Field(() => Boolean, { nullable: true })
    @IsOptional()
    u_id?: boolean;

    @Field(() => Boolean, { nullable: true })
    @IsOptional()
    device_id?: boolean;

    @Field(() => Boolean, { nullable: true })
    @IsOptional()
    from_ip_address?: boolean;

    @Field(() => Boolean, { nullable: true })
    @IsOptional()
    device_mac_address?: boolean;

    @Field(() => Boolean, { nullable: true })
    @IsOptional()
    device_system_id?: boolean;

    @Field(() => Boolean, { nullable: true })
    @IsOptional()
    device_name?: boolean;

    @Field(() => Boolean, { nullable: true })
    @IsOptional()
    device_user_agent?: boolean;

    @Field(() => Boolean, { nullable: true })
    @IsOptional()
    suspended ?: boolean;

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
export class UserDeviceFindInputDto extends IntersectionType(FindInputPaginationOptionsDto, WithDeletedInputDto) implements FindManyOptions<UserDeviceDto>, FindInputCRUDTypeDefinition{
    // input layout design for users to perform find with various database options
  
    /**
     * Conditions to be met for the resulting set.
     * also validate the user pass only 1 operator to search for field
     */
    @Field(() => [UserDeviceFindInputWhereDto], { nullable: true, description: CrudDefMetaDesc.find_where})
    @IsOptional()
    @Validate(OnlyOneSeachOperatorAllowed)
    declare where?: FindOptionsWhere<UserDeviceFindInputWhereDto>[];
  
  
    /**
     * Specifies how to group the rows returned by the SELECT statement.
     */
    @Field(() => UserDeviceFindInputGroupByDto, { nullable: true, description: CrudDefMetaDesc.find_group_by })
    @IsOptional()
    declare groupBy?: UserDeviceFindInputGroupByDto;
  
    /**
     * Sort the result set by fields using ascending or descending order.
     */
    @Field(() => UserDeviceFindInputSortOrderDto, { nullable: true, description: CrudDefMetaDesc.find_order })
    @IsOptional()
    declare order?: FindOptionsOrder<UserDeviceFindInputSortOrderDto>;
}


// ████ FIND OUTPUT DTO ████████████████████████████████████████████████

@ObjectType()
@Directive('@shareable')
export class UserDeviceFindOutputRowsDto extends UserDeviceFindDto implements FindOutputRowsCRUDTypeDefinition{
    // this DTO will be used at many palce for output object, os make sure this is properly developed
}

@ObjectType()
@Directive('@shareable')
export class UserDeviceFindOutputDto extends FindOutputPaginationOptionsDto implements FindOutputCRUDTypeDefinition{
    // output layout design for users to get find response

    // we assign any because iin GRAPHQL for requuest body this rows will have fields with boolean value whether to include in response or not
    // this is very crucial to understand this structure and you need to understand how graphQL works
    @Field(() => [UserDeviceEntity], {description: CrudDefMetaDesc.find_rows})
    declare rows?: UserDeviceEntity | UserDeviceEntity[] | any;
}

/**
 * ██████████████████████████████████████████████████████████████████████████████████████████████████████████████████
 * █ FIND ONE BY ID DTO █████████████████████████████████████████████████████████████████████████████████████████████
 * ██████████████████████████████████████████████████████████████████████████████████████████████████████████████████
**/

export class UserDeviceFindOneByIdDto extends UserDeviceEntity implements FindDtoCRUDTypeDefinition{
    static metaname: string = `${UserDeviceEntity.metaname}${FindOneByIdArtefact}`;
    static metadesc: string = CrudDefMetaDesc.findOneById_metadesc;
}

// ████ FIND ONE BY ID INPUT DTO ████████████████████████████████████████████████

@InputType()
export class UserDeviceFindOneByIdInputDto extends IntersectionType(IdInputDto, WithDeletedInputDto) implements FindOneByIdInputCRUDTypeDefinition{

}

/**
 * █████████████████████████████████████████████████████████████
 * █ CREATE DTO ████████████████████████████████████████████████
 * █████████████████████████████████████████████████████████████
**/

export class UserDeviceCreateDto extends UserDeviceEntity implements CreateDtoCRUDTypeDefinition {
    static metaname: string = `${UserDeviceEntity.metaname}${CreateArtefact}`;
    static metadesc: string = CrudDefMetaDesc.create_metadesc;
}
// ████ CREATE INPUT DTO ████████████████████████████████████████████████

@InputType()
export class UserDeviceCreateInputDto extends  UserDeviceCreateDto implements CreateInputCRUDTypeDefinition {

    @Field(() => Int, {nullable: false, description: meta?.u_id.desc})
    declare u_id: number;

    @Field(() => Int, {nullable: false, description: meta?.device_id.desc})
    declare device_id: number;

    @Field(() => String, {nullable: false, description: meta?.device_token.desc})
    declare device_token: string;

    @Field(() => String, {nullable: false, description: meta?.device_user_agent.desc})
    declare device_user_agent: string;

    @Field(() => GraphQLIP, {nullable: false, description: meta?.from_ip_address.desc})
    declare from_ip_address: string;

    @Field(() => GraphQLMAC, {nullable: true, description: meta?.device_mac_address.desc})
    declare device_mac_address?: string;

    @Field(() => String, {nullable: true, description: meta?.device_system_id.desc})
    declare device_system_id?: string;

    @Field(() => String, {nullable: true, description: meta?.device_name.desc})
    declare device_name?: string;
}

// ████ CREATE OUTPUT DTO ████████████████████████████████████████████████

@ObjectType()
@Directive('@shareable')
export class UserDeviceCreateOutputDto extends UserDeviceFindOutputRowsDto implements CreateOutputCRUDTypeDefinition {
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


export class UserDeviceUpdateDto extends UserDeviceDto implements UpdateDtoCRUDTypeDefinition{
    static metaname: string = `${UserDeviceEntity.metaname}${UpdateArtefact}`;
    static metadesc: string = CrudDefMetaDesc.update_metadesc;
}

// ████ UPDATE INPUT DTO ████████████████████████████████████████████████

@InputType()
export class UserDeviceUpdateInputWhereDto extends UserDeviceFindInputWhereDto implements UpdateInputWhereCRUDTypeDefinition{
    /**
     * avoiding redundant code
     * considering whatever FindInputWhere ask for input, same apply to UpdateInputWhere so extending class
     * just add what is new or different for UpdateInputWhere, that means it's 100% customisable
     * you can also remove extends *FindInputWhere and define entire custom dto here if needed 
     **/
}

@InputType()
export class UserDeviceUpdateInputSetsDto extends PartialType(UserDeviceCreateInputDto) implements UpdateInputSetsCRUDTypeDefinition {
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
export class UserDeviceUpdateInputDto implements UpdateInputCRUDTypeDefinition{
    // input layout design for users to perform update with various database options
  
    /**
     * Conditions to be met for the resulting set.
     * also validate the user pass only 1 operator to search for field
     */
    @Field(() => [UserDeviceUpdateInputWhereDto], { nullable: false, description: CrudDefMetaDesc.update_where })
    @IsNotEmpty()
    @Validate(OnlyOneSeachOperatorAllowed)
    where!: FindOptionsWhere<UserDeviceUpdateInputWhereDto>[];

    /**
     * What to set for update
     * basically fields list of update
     */
    @Field(() => UserDeviceUpdateInputSetsDto, { nullable: false, description: CrudDefMetaDesc.update_sets })
    @IsNotEmpty()
    sets!: UserDeviceUpdateInputSetsDto

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
export class UserDeviceUpdateOutputAffectedRowsDto extends UserDeviceFindOutputRowsDto implements UpdateOutputAffectedRowsCRUDTypeDefinition{
    /**
     * avoiding redundant code
     * considering whatever FindOutputRows return, same apply to UpdateOutputAffectedRows so extending class
     * just add what is new or different for UpdateOutputAffectedRows, that means it's 100% customisable
     * you can also remove extends *FindOutputRows and define entire custom dto here if needed 
     **/
}

@ObjectType()
@Directive('@shareable')
export class UserDeviceUpdateOutputDto extends CrudAffectedDto implements UpdateOutputCRUDTypeDefinition{
  @Field(() => [UserDeviceEntity], {description: CrudDefMetaDesc.update_affected_rows}) 
  declare affectedRows?: UserDeviceEntity[] | any; 
}


/**
 * █████████████████████████████████████████████████████████████
 * █ SOFT DELETE DTO ███████████████████████████████████████████
 * █████████████████████████████████████████████████████████████
**/
// this operation run directly withouth checking the data if exist or not, so it's quick but do not provide more information about operation

// ████ SOFT DELETE INPUT DTO ████████████████████████████████████████████████
export class UserDeviceSoftDeleteDto extends UserDeviceEntity implements SoftDeleteDtoCRUDTypeDefinition{
  static metaname: string = `${UserDeviceEntity.metaname}${SoftDeleteArtefact}`;
  static metadesc: string = CrudDefMetaDesc.softDelete_metadesc;
}

@InputType()
export class UserDeviceSoftDeleteInputWhereDto extends UserDeviceFindInputWhereDto implements SoftDeleteInputWhereCRUDTypeDefinition{
  /**
   * avoiding redundant code
   * considering whatever FindInputWhere ask for input, same apply to SoftDeleteInputWhere so extending class
   * just add what is new or different for SoftDeleteInputWhere, that means it's 100% customisable
   * you can also remove extends *FindInputWhere and define entire custom dto here if needed 
   **/
}

@InputType()
export class UserDeviceSoftDeleteInputDto implements SoftDeleteInputCRUDTypeDefinition{
  @Field(() => [UserDeviceSoftDeleteInputWhereDto], {nullable: true, description: CrudDefMetaDesc.softDelete_where})
  @Validate(OnlyOneSeachOperatorAllowed)
  where?: FindOptionsWhere<UserDeviceSoftDeleteInputWhereDto>[];
}


// ████ SOFT DELETE OUTPUT DTO ████████████████████████████████████████████████

@ObjectType()
@Directive('@shareable')
export class UserDeviceSoftDeleteOutputDto extends CrudAffectedDto implements SoftDeleteOutputCRUDTypeDefinition{
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

export class UserDeviceDeleteDto extends UserDeviceEntity implements DeleteDtoCRUDTypeDefinition{
  static metaname: string = `${UserDeviceEntity.metaname}${DeleteArtefact}`;
  static metadesc: string = CrudDefMetaDesc.delete_metadesc;
}

// ████ DELETE INPUT DTO ████████████████████████████████████████████████

@InputType()
export class UserDeviceDeleteInputWhereDto extends UserDeviceFindInputWhereDto implements DeleteInputWhereCRUDTypeDefinition{
  /**
   * avoiding redundant code
   * considering whatever FindInputWhere ask for input, same apply to SoftDeleteInputWhere so extending class
   * just add what is new or different for SoftDeleteInputWhere, that means it's 100% customisable
   * you can also remove extends *FindInputWhere and define entire custom dto here if needed 
   **/
}

@InputType()
export class UserDeviceDeleteInputDto implements DeleteInputCRUDTypeDefinition{
  @Field(() => [UserDeviceDeleteInputWhereDto], {nullable: true, description: CrudDefMetaDesc.delete_where})
  @Validate(OnlyOneSeachOperatorAllowed)
  where?: FindOptionsWhere<UserDeviceDeleteInputWhereDto>[];
}


// ████ DELETE OUTPUT DTO ████████████████████████████████████████████████

@ObjectType()
@Directive('@shareable')
export class UserDeviceDeleteOutputDto extends CrudAffectedDto implements DeleteOutputCRUDTypeDefinition{
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

export class UserDeviceRestoreDto extends UserDeviceEntity implements RestoreDtoCRUDTypeDefinition{
    static metaname: string = `${UserDeviceEntity.metaname}${RestoreArtefact}`;
    static metadesc: string = CrudDefMetaDesc.restore_metadesc;
}

// ████ RESTORE INPUT DTO ██████████████████████████████████████████████████████

@InputType()
export class UserDeviceRestoreInputWhereDto extends UserDeviceFindInputWhereDto implements RestoreInputWhereCRUDTypeDefinition{
  /**
   * avoiding redundant code
   * considering whatever FindInputWhere ask for input, same apply to SoftDeleteInputWhere so extending class
   * just add what is new or different for SoftDeleteInputWhere, that means it's 100% customisable
   * you can also remove extends *FindInputWhere and define entire custom dto here if needed 
   **/
}

@InputType()
export class UserDeviceRestoreInputDto implements RestoreInputCRUDTypeDefinition{
  @Field(() => [UserDeviceRestoreInputWhereDto], {nullable: true, description: CrudDefMetaDesc.restore_where})
  @Validate(OnlyOneSeachOperatorAllowed)
  where?: FindOptionsWhere<UserDeviceRestoreInputWhereDto>[];
}
  
// ████ RESTORE OUTPUT DTO ██████████████████████████████████████████████████████
  
@ObjectType()
@Directive('@shareable')
export class UserDeviceRestoreOutputDto extends CrudAffectedDto implements RestoreOutputCRUDTypeDefinition{
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

export class UserDeviceUpsertDto extends UserDeviceEntity implements UpsertDtoCRUDTypeDefinition{
  static metaname: string = `${UserDeviceEntity.metaname}${UpsertArtefact}`;
  static metadesc: string = CrudDefMetaDesc.upsert_metadesc;
}

// ████ UPSERT INPUT DTO ██████████████████████████████████████████████████████

@InputType()
export class UserDeviceUpsertInputDto extends UserDeviceCreateInputDto implements UpsertInputCRUDTypeDefinition{
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
    static conflictResolveFields: (keyof UserDeviceUpsertInputDto)[] = ['u_id','device_id','device_token'];
}

// ████ UPSERT OUTPUT DTO ██████████████████████████████████████████████████████

@ObjectType()
@Directive('@shareable')
export class UserDeviceUpsertOutputDto extends IntersectionType(UserDeviceCreateOutputDto, UpsertOutputProcessStatusDto) implements UpsertOutputCRUDTypeDefinition{ 
 
}

/**
 * █████████████████████████████████████████████████████████████
 * █ SOFT REMOVE DTO ███████████████████████████████████████████
 * █████████████████████████████████████████████████████████████
**/
// unlike soft delete, this operation first get the data from database and after run the operation, so it's complex but provide more and clear information about operation

// ████ SOFT REMOVE INPUT DTO ████████████████████████████████████████████████
export class UserDeviceSoftRemoveDto extends UserDeviceEntity implements SoftRemoveDtoCRUDTypeDefinition{
  static metaname: string = `${UserDeviceEntity.metaname}${SoftRemoveArtefact}`;
  static metadesc: string = CrudDefMetaDesc.softRemove_metadesc;
}

@InputType()
export class UserDeviceSoftRemoveInputWhereDto extends UserDeviceFindInputWhereDto implements SoftRemoveInputWhereCRUDTypeDefinition{
  /**
   * avoiding redundant code
   * considering whatever FindInputWhere ask for input, same apply to SoftRemoveInputWhere so extending class
   * just add what is new or different for SoftRemoveInputWhere, that means it's 100% customisable
   * you can also remove extends *FindInputWhere and define entire custom dto here if needed 
   **/
}

@InputType()
export class UserDeviceSoftRemoveInputDto implements SoftRemoveInputCRUDTypeDefinition{
  @Field(() => [UserDeviceSoftRemoveInputWhereDto], {nullable: true, description: CrudDefMetaDesc.softRemove_where})
  @Validate(OnlyOneSeachOperatorAllowed)
  where?: FindOptionsWhere<UserDeviceSoftRemoveInputWhereDto>[];
}


// ████ SOFT REMOVE OUTPUT DTO ████████████████████████████████████████████████

@ObjectType()
@Directive('@shareable')
export class UserDeviceSoftRemoveOutputAffectedRowsDto extends UserDeviceFindOutputRowsDto implements SoftRemoveOutputAffectedRowsCRUDTypeDefinition{
  /**
   * avoiding redundant code
   * considering whatever FindOutputRows return, same apply to SoftRemoveOutputAffectedRows so extending class
   * just add what is new or different for SoftRemoveOutputAffectedRows, that means it's 100% customisable
   * you can also remove extends FindOutputRows and define entire custom dto here if needed 
   **/
}
@ObjectType()
@Directive('@shareable')
export class UserDeviceSoftRemoveOutputDto extends CrudAffectedDto implements SoftRemoveOutputCRUDTypeDefinition{
  /**
   * avoiding redundant code
   * considering whatever AffectedDto return, same apply to SoftRemoveOutput so extending class
   * just add what is new or different for SoftRemoveOutput, that means it's 100% customisable
   * you can also remove extends AffectedDto and define entire custom dto here if needed 
   **/

  @Field(() => [UserDeviceEntity]) 
  declare affectedRows?: UserDeviceEntity[] | any
}

/**
 * █████████████████████████████████████████████████████████████
 * █ REMOVE DTO ████████████████████████████████████████████████
 * █████████████████████████████████████████████████████████████
**/
// unlike soft delete, this operation first get the data from database and after run the operation, so it's complex but provide more and clear information about operation

export class UserDeviceRemoveDto extends UserDeviceEntity implements RemoveDtoCRUDTypeDefinition{
  static metaname: string = `${UserDeviceEntity.metaname}${RemoveArtefact}`;
  static metadesc: string = CrudDefMetaDesc.remove_metadesc;
}

// ████ REMOVE INPUT DTO ████████████████████████████████████████████████

@InputType()
export class UserDeviceRemoveInputWhereDto extends UserDeviceFindInputWhereDto implements RemoveInputWhereCRUDTypeDefinition{
  /**
   * avoiding redundant code
   * considering whatever FindInputWhere ask for input, same apply to SoftRemoveInputWhere so extending class
   * just add what is new or different for SoftRemoveInputWhere, that means it's 100% customisable
   * you can also remove extends *FindInputWhere and define entire custom dto here if needed 
   **/
}

@InputType()
export class UserDeviceRemoveInputDto implements RemoveInputCRUDTypeDefinition{
  @Field(() => [UserDeviceRemoveInputWhereDto], {nullable: true, description: CrudDefMetaDesc.remove_where})
  @Validate(OnlyOneSeachOperatorAllowed)
  where?: FindOptionsWhere<UserDeviceRemoveInputWhereDto>[];
}

// ████ REMOVE OUTPUT DTO ████████████████████████████████████████████████

@ObjectType()
@Directive('@shareable')
export class UserDeviceRemoveOutputAffectedRowsDto extends UserDeviceFindOutputRowsDto implements RemoveOutputAffectedRowsCRUDTypeDefinition{
  /**
   * avoiding redundant code
   * considering whatever FindOutputRows return, same apply to RemoveOutputAffectedRows so extending class
   * just add what is new or different for RemoveOutputAffectedRows, that means it's 100% customisable
   * you can also remove extends FindOutputRows and define entire custom dto here if needed 
   **/
}
@ObjectType()
@Directive('@shareable')
export class UserDeviceRemoveOutputDto extends CrudAffectedDto implements RemoveOutputCRUDTypeDefinition{
  /**
   * avoiding redundant code
   * considering whatever AffectedDto return, same apply to RemoveOutput so extending class
   * just add what is new or different for RemoveOutput, that means it's 100% customisable
   * you can also remove extends AffectedDto and define entire custom dto here if needed 
   **/

  @Field(() => [UserDeviceEntity]) 
  declare affectedRows?: UserDeviceEntity[] | any;
}

/**
 * █████████████████████████████████████████████████████████████
 * █ RECOVER DTO ████████████████████████████████████████████████
 * █████████████████████████████████████████████████████████████
**/
// unlike soft delete, this operation first get the data from database and after run the operation, so it's complex but provide more and clear information about operation

export class UserDeviceRecoverDto extends UserDeviceEntity implements RecoverDtoCRUDTypeDefinition{
  static metaname: string = `${UserDeviceEntity.metaname}${RecoverArtefact}`;
  static metadesc: string = CrudDefMetaDesc.recover_metadesc;
}

// ████ RECOVER INPUT DTO ██████████████████████████████████████████████████████

@InputType()
export class UserDeviceRecoverInputWhereDto extends UserDeviceFindInputWhereDto implements RecoverInputWhereCRUDTypeDefinition{
/**
 * avoiding redundant code
 * considering whatever FindInputWhere ask for input, same apply to SoftDeleteInputWhere so extending class
 * just add what is new or different for SoftDeleteInputWhere, that means it's 100% customisable
 * you can also remove extends *FindInputWhere and define entire custom dto here if needed 
 **/
}

@InputType()
export class UserDeviceRecoverInputDto implements RecoverInputCRUDTypeDefinition{
  @Field(() => [UserDeviceRecoverInputWhereDto], {nullable: true, description: CrudDefMetaDesc.recover_where})
  @Validate(OnlyOneSeachOperatorAllowed)
  where?: FindOptionsWhere<UserDeviceRecoverInputWhereDto>[];
}

// ████ RECOVER OUTPUT DTO ██████████████████████████████████████████████████████

@ObjectType()
@Directive('@shareable')
export class UserDeviceRecoverOutputAffectedRowsDto extends UserDeviceFindOutputRowsDto implements RecoverOutputAffectedRowsCRUDTypeDefinition{
  /**
   * avoiding redundant code
   * considering whatever FindOutputRows return, same apply to RecoverOutputAffectedRows so extending class
   * just add what is new or different for RecoverOutputAffectedRows, that means it's 100% customisable
   * you can also remove extends FindOutputRows and define entire custom dto here if needed 
   **/
}

@ObjectType()
@Directive('@shareable')
export class UserDeviceRecoverOutputDto extends CrudAffectedDto implements RecoverOutputCRUDTypeDefinition{
  /**
   * avoiding redundant code
   * considering whatever AffectedDto return, same apply to RecoverOutput so extending class
   * just add what is new or different for RecoverOutput, that means it's 100% customisable
   * you can also remove extends AffectedDto and define entire custom dto here if needed 
   **/

  @Field(() => [UserDeviceEntity]) 
  declare affectedRows?: UserDeviceEntity[] | any;
}

/**
 * █████████████████████████████████████████████████████████████
 * █ UPLOAD DTO ████████████████████████████████████████████████
 * █████████████████████████████████████████████████████████████
**/

export class UserDeviceUploadDto extends UserDeviceEntity implements UploadDtoCRUDTypeDefinition {
  static metaname: string = `${UserDeviceEntity?.metaname}${UploadArtefact}`;
  static metadesc: string = CrudDefMetaDesc.upload_metadesc;
}

// ████ UPLOAD REF TYPE DTO ████████████████████████████████████████████████

@InputType()
export class UploadFileFieldInputDto {
@Field(() => UserDeviceUploadFileFieldEnum, {nullable: false, description: CrudDefMetaDesc.upload_file_field})
@IsNotEmpty()
file_field!: UserDeviceUploadFileFieldEnum;
}

@ObjectType()
@Directive('@shareable')
export class UploadFileFieldOutputDto extends PartialType(UploadFileFieldInputDto) {

}

// ████ UPLOAD INPUT DTO ████████████████████████████████████████████████
@InputType()
export class UserDeviceUploadInputDto extends IntersectionType(UploadFileFieldInputDto, UploadInputDto) implements UploadInputArtefactCRUDTypeDefinition {

}

// ████ UPLOAD OUTPUT DTO ███████████████████████████████████████████████
@ObjectType()
@Directive('@shareable')
export class UserDeviceUploadOutputDto extends IntersectionType(UploadFileFieldOutputDto, UploadOutputDto) implements UploadOutputArtefactCRUDTypeDefinition {

}

/**
* █████████████████████████████████████████████████████████████
* █ UPLOAD DELETE DTO █████████████████████████████████████████
* █████████████████████████████████████████████████████████████
**/

export class UserDeviceUploadDeleteDto extends UserDeviceEntity implements UploadDeleteDtoCRUDTypeDefinition {
static metaname: string = `${UserDeviceEntity?.metaname}${UploadDeleteArtefact}`;
static metadesc: string = CrudDefMetaDesc.upload_delete_metadesc;
}

// ████ UPLOAD DELETE INPUT DTO ████████████████████████████████████████████████
@InputType()
export class UserDeviceUploadDeleteInputDto extends IntersectionType(UploadFileFieldInputDto, UploadDeleteInputDto) implements UploadDeleteInputArtefactCRUDTypeDefinition {

}

// ████ UPLOAD DELETE OUTPUT DTO ███████████████████████████████████████████████
@ObjectType()
@Directive('@shareable')
export class UserDeviceUploadDeleteOutputDto extends IntersectionType(UploadFileFieldOutputDto, UploadDeleteOutputDto) implements UploadDeleteOutputArtefactCRUDTypeDefinition {

}