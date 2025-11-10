import { WithDeletedInputDto, CreateArtefact, CreateDtoCRUDTypeDefinition, CreateInputCRUDTypeDefinition, CreateOutputCRUDTypeDefinition, CrudDefMetaDesc, DateTime, DeleteArtefact, DeleteDtoCRUDTypeDefinition, DeleteInputCRUDTypeDefinition, DeleteOutputCRUDTypeDefinition, FindArtefact, FindDtoCRUDTypeDefinition, FindInputGroupByCRUDTypeDefinition, FindInputSortOrderCRUDTypeDefinition, FindInputCRUDTypeDefinition, FindInputWhereCRUDTypeDefinition, FindOneByIdArtefact, FindOperatorDto, FindOutputPaginationDto, FindOutputCRUDTypeDefinition, OnlyOneSeachOperatorAllowed, RecordSortDirectionEnum, RestoreArtefact, RestoreDtoCRUDTypeDefinition, RestoreInputCRUDTypeDefinition, SoftDeleteArtefact, SoftDeleteDtoCRUDTypeDefinition, SoftDeleteInputCRUDTypeDefinition, SoftDeleteOutputCRUDTypeDefinition, UpdateArtefact, UpdateDtoCRUDTypeDefinition, UpdateInputSetsCRUDTypeDefinition, UpdateInputCRUDTypeDefinition, UpdateInputWhereCRUDTypeDefinition, UpdateOutputCRUDTypeDefinition, SoftDeleteInputWhereCRUDTypeDefinition, RestoreInputWhereCRUDTypeDefinition, RestoreOutputCRUDTypeDefinition, UpsertDtoCRUDTypeDefinition, UpsertArtefact, UpsertInputCRUDTypeDefinition, UpsertOutputCRUDTypeDefinition, UpsertStatusEnum, SoftRemoveDtoCRUDTypeDefinition, SoftRemoveArtefact, SoftRemoveInputWhereCRUDTypeDefinition, SoftRemoveInputCRUDTypeDefinition, SoftRemoveOutputCRUDTypeDefinition, RemoveDtoCRUDTypeDefinition, RemoveArtefact, RemoveInputCRUDTypeDefinition, RemoveOutputCRUDTypeDefinition, SoftRemoveOutputAffectedRowsCRUDTypeDefinition, FindOutputRowsCRUDTypeDefinition, UpdateOutputAffectedRowsCRUDTypeDefinition, RemoveOutputAffectedRowsCRUDTypeDefinition, RecoverDtoCRUDTypeDefinition, RecoverArtefact, RecoverInputCRUDTypeDefinition, RecoverOutputCRUDTypeDefinition, RecoverInputWhereCRUDTypeDefinition, RecoverOutputAffectedRowsCRUDTypeDefinition, FindInputDtoCRUDTypeDefinition, FindOneByIdInputCRUDTypeDefinition, FindInputPaginationOptionsDto, FindOutputPaginationOptionsDto, IdInputDto, DeleteInputWhereCRUDTypeDefinition, RemoveInputWhereCRUDTypeDefinition, UploadDtoCRUDTypeDefinition, UploadArtefact, UploadInputDto, UploadInputArtefactCRUDTypeDefinition, UploadOutputArtefactCRUDTypeDefinition, UploadOutputDto, UploadDeleteInputDto, UploadDeleteInputArtefactCRUDTypeDefinition, UploadDeleteOutputArtefactCRUDTypeDefinition, UploadDeleteOutputDto, UploadDeleteDtoCRUDTypeDefinition, UploadDeleteArtefact, YesNoEnum } from "@libs/library-app";
import { UserEntityMeta as meta, UserEntity } from "../entities/user.entity";
import { Directive, Field, InputType, Int, IntersectionType, ObjectType, PartialType } from "@nestjs/graphql";
import { IsNotEmpty, IsNumber, IsOptional, Validate } from "class-validator";
import { FindManyOptions, FindOptionsOrder, FindOptionsWhere } from "typeorm";
import { Exclude } from "class-transformer";
import { CrudAffectedDto, UpsertOutputProcessStatusDto } from "@libs/library-app";
import { UserUploadFileFieldEnum } from "../user.enum"; 
import { UserAuthenticationFindInputWhereDto } from "../../user-auth/dto/user.auth.webmaster.dto";
import { UserAuthorisationFindInputWhereDto } from "../../user-authorisation/dto/user.authorisation.dto";
import { UserDeviceFindInputWhereDto } from "../../user-device/dto/user.device.dto";
import { UserCorporateInfoFindInputWhereDto } from "../../user-corporate-info/dto/user.corporate.info.dto";
import { UserPersonalInfoFindInputWhereDto } from "../../user-personal-info/dto/user.personal.info.dto";
import { UserAddressFindInputWhereDto } from "../../user-address/dto/user.address.dto";
import { UserIdentityCardFindInputWhereDto } from "../../user-identity-card/dto/user.identity.card.dto";
import { UserHierarchyFindInputWhereDto } from "../../user-hierarchy/dto/user.hierarchy.dto";
import { UserFileFindInputWhereDto } from "../../user-file/dto/user.file.dto";
import { QueueSmsFindInputWhereDto } from "apps/shared-app/src/queue/sms/dto/sms.dto";
import { QueueWhatsappFindInputWhereDto } from "apps/shared-app/src/queue/whatsapp/dto/whatsapp.dto";
import { QueueEmailFindInputWhereDto } from "apps/shared-app/src/queue/email/dto/email.dto";
import { ConnectionSourceFindInputWhereDto } from "apps/shared-app/src/leads/connection/source/dto/source.dto";

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
export class UserDto extends UserEntity implements FindInputDtoCRUDTypeDefinition{
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
     declare username?: any;
     declare url_slug?: any;
     declare connsrc_id?: any;
     declare fname?: any;
     declare lname?: any;
     declare mname?: any;
     declare primary_email?: any;
     declare primary_mobile?: any;
     declare primary_mobile_cc?: any;
     declare recovery_email?: any;
     declare recovery_mobile?: any;
     declare recovery_mobile_cc?: any;
     declare whatsapp?: any;
     declare whatsapp_cc?: any;
     //signup_source?: any;
     declare has_two_factor_auth?: any;
     declare pemail_verified?: any;
     declare pmobile_verified?: any;
     declare verified?: any;
     declare suspended?: any;
     declare created?: any;
     declare updated?: any;
     declare deleted?: any;

     //file_profile_picture?: any;
     declare file_profile_photo?: any;
     declare file_profile_photo_url?: any;
     declare file_profile_banner?: any;
     declare file_profile_banner_url?: any;

     declare fr_user_auth?: any;
     declare fr_user_authorisations?: any;
     declare fr_user_devices?: any;
     declare fr_user_corporate_infos?: any;
     declare fr_user_personal_info?: any;
     declare fr_user_addresses?: any;
     declare fr_user_identity_cards?: any;
     declare fr_parent_user_hierarchies?: any;
     declare fr_child_user_hirarchies?: any;
     declare fr_user_files?: any;
     declare fr_queue_sms_from_users?: any;
     declare fr_queue_sms_to_users?: any;
     declare fr_queue_whatsapp_from_users?: any;
     declare fr_queue_whatsapp_to_users?: any;
     declare fr_queue_email_from_users?: any;
     declare fr_queue_email_to_users?: any;
     declare fr_queue_email_created_users?: any;

     declare fr_connection_source?: any;
}

/**
 * █████████████████████████████████████████████████████████████
 * █ FIND DTO ██████████████████████████████████████████████████
 * █████████████████████████████████████████████████████████████
**/
@ObjectType({ isAbstract: true })
@Directive('@shareable')
export class UserFindDto extends UserEntity implements FindDtoCRUDTypeDefinition{
    static metaname: string = `${UserEntity?.metaname}${FindArtefact}`;
    static metadesc: string = CrudDefMetaDesc.find_metadesc;
}


// ████ FIND INPUT DTO ████████████████████████████████████████████████


@InputType()
export class UserFindInputWhereDto extends UserDto implements FindInputWhereCRUDTypeDefinition{
    @Field(() => FindOperatorDto, {nullable: true, description: meta?.id.desc})
    @IsOptional()
    declare id?: FindOperatorDto;    

    @Field(() => FindOperatorDto, {nullable: true, description: meta?.username.desc})
    @IsOptional()
    declare username?: FindOperatorDto;

    @Field(() => FindOperatorDto, {nullable: true, description: meta?.url_slug.desc})
    @IsOptional()
    declare url_slug?: FindOperatorDto;

    @Field(() => FindOperatorDto, {nullable: true, description: meta?.connsrc_id.desc})
    @IsOptional()
    declare connsrc_id?: FindOperatorDto;

    @Field(() => FindOperatorDto, {nullable: true, description: meta?.fname.desc})
    @IsOptional()
    declare fname?: FindOperatorDto;

    @Field(() => FindOperatorDto, {nullable: true, description: meta?.lname.desc})
    @IsOptional()
    declare lname?: FindOperatorDto;

    @Field(() => FindOperatorDto, {nullable: true, description: meta?.mname.desc})
    @IsOptional()
    declare mname?: FindOperatorDto;

    @Field(() => FindOperatorDto, {nullable: true, description: meta?.primary_email.desc})
    @IsOptional()
    declare primary_email?: FindOperatorDto;

    @Field(() => FindOperatorDto, {nullable: true, description: meta?.primary_mobile.desc})
    @IsOptional()
    declare primary_mobile?: FindOperatorDto;

    @Field(() => FindOperatorDto, {nullable: true, description: meta?.primary_mobile_cc.desc})
    @IsOptional()
    declare primary_mobile_cc?: FindOperatorDto;

    @Field(() => FindOperatorDto, {nullable: true, description: meta?.recovery_email.desc})
    @IsOptional()
    declare recovery_email?: FindOperatorDto;

    @Field(() => FindOperatorDto, {nullable: true, description: meta?.recovery_mobile.desc})
    @IsOptional()
    declare recovery_mobile?: FindOperatorDto;

    @Field(() => FindOperatorDto, {nullable: true, description: meta?.recovery_mobile_cc.desc})
    @IsOptional()
    declare recovery_mobile_cc?: FindOperatorDto;

    @Field(() => FindOperatorDto, {nullable: true, description: meta?.whatsapp.desc})
    @IsOptional()
    declare whatsapp?: FindOperatorDto;

    @Field(() => FindOperatorDto, {nullable: true, description: meta?.whatsapp_cc.desc})
    @IsOptional()
    declare whatsapp_cc?: FindOperatorDto;

    @Field(() => FindOperatorDto, {nullable: true, description: meta?.has_two_factor_auth.desc})
    @IsOptional()
    declare has_two_factor_auth: FindOperatorDto;

    @Field(() => FindOperatorDto, {nullable: true, description: meta?.pemail_verified.desc})
    @IsOptional()
    declare pemail_verified?: FindOperatorDto;

    @Field(() => FindOperatorDto, {nullable: true, description: meta?.pmobile_verified.desc})
    @IsOptional()
    declare pmobile_verified?: FindOperatorDto;

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

    @Field(() => [UserAuthenticationFindInputWhereDto], {nullable: true, description: meta?.fr_user_auth.desc})
    @IsOptional()
    declare fr_user_auth?: UserAuthenticationFindInputWhereDto[];

    @Field(() => [UserAuthorisationFindInputWhereDto], {nullable: true, description: meta?.fr_user_authorisations.desc})    
    @IsOptional()
    declare fr_user_authorisations?: UserAuthorisationFindInputWhereDto[];

    @Field(() => [UserDeviceFindInputWhereDto], {nullable: true, description: meta?.fr_user_devices.desc})
    @IsOptional()
    declare fr_user_devices?: UserDeviceFindInputWhereDto[];

    @Field(() => [UserCorporateInfoFindInputWhereDto], {nullable: true, description: meta?.fr_user_corporate_infos.desc})
    @IsOptional()
    declare fr_user_corporate_infos?: UserCorporateInfoFindInputWhereDto[];

    @Field(() => [UserPersonalInfoFindInputWhereDto], {nullable: true, description: meta?.fr_user_personal_info.desc})
    @IsOptional()
    declare fr_user_personal_info?: UserPersonalInfoFindInputWhereDto[];

    @Field(() => [UserAddressFindInputWhereDto], {nullable: true, description: meta?.fr_user_addresses.desc})
    @IsOptional()
    declare fr_user_addresses?: UserAddressFindInputWhereDto[];

    @Field(() => [UserIdentityCardFindInputWhereDto], {nullable: true, description: meta?.fr_user_identity_cards.desc})
    @IsOptional()
    declare fr_user_identity_cards?: UserIdentityCardFindInputWhereDto[];

    @Field(() => [UserHierarchyFindInputWhereDto], {nullable: true, description: meta?.fr_parent_user_hirarchies.desc})
    @IsOptional()
    declare fr_parent_user_hierarchies?: UserHierarchyFindInputWhereDto[]; 

    @Field(() => [UserHierarchyFindInputWhereDto], {nullable: true, description: meta?.fr_child_user_hirarchies.desc})
    @IsOptional()
    declare fr_child_user_hirarchies?: UserHierarchyFindInputWhereDto[]; 

    @Field(() => [UserFileFindInputWhereDto], {nullable: true, description: meta?.fr_user_files.desc})    
    @IsOptional()
    declare fr_user_files?: UserFileFindInputWhereDto[];

    @Field(() => [QueueSmsFindInputWhereDto], {nullable: true, description: meta?.fr_queue_sms_from_users.desc})    
    @IsOptional()
    declare fr_queue_sms_from_users?: QueueSmsFindInputWhereDto[];

    @Field(() => [QueueSmsFindInputWhereDto], {nullable: true, description: meta?.fr_queue_sms_to_users.desc})    
    @IsOptional()    
    declare fr_queue_sms_to_users?: QueueSmsFindInputWhereDto[];

    @Field(() => [QueueWhatsappFindInputWhereDto], {nullable: true, description: meta?.fr_queue_whatsapp_from_users.desc})    
    @IsOptional()    
    declare fr_queue_whatsapp_from_users?: QueueWhatsappFindInputWhereDto[];

    @Field(() => [QueueWhatsappFindInputWhereDto], {nullable: true, description: meta?.fr_queue_whatsapp_to_users.desc})    
    @IsOptional()    
    declare fr_queue_whatsapp_to_users?: QueueWhatsappFindInputWhereDto[];

    @Field(() => [QueueEmailFindInputWhereDto], {nullable: true, description: meta?.fr_queue_email_from_users.desc})    
    @IsOptional()    
    declare fr_queue_email_from_users?: QueueEmailFindInputWhereDto[];

    @Field(() => [QueueEmailFindInputWhereDto], {nullable: true, description: meta?.fr_queue_email_to_users.desc})    
    @IsOptional()    
    declare fr_queue_email_to_users?: QueueEmailFindInputWhereDto[];

    @Field(() => [QueueEmailFindInputWhereDto], {nullable: true, description: meta?.fr_queue_email_created_users.desc})    
    @IsOptional()    
    declare fr_queue_email_created_users?: QueueEmailFindInputWhereDto[];

    @Field(() => [ConnectionSourceFindInputWhereDto], {nullable: true, description: meta?.fr_connection_source.desc})
    @IsOptional()
    declare fr_connection_source?: ConnectionSourceFindInputWhereDto[];
}

@InputType()
export class UserFindInputSortOrderDto implements FindOptionsOrder<UserDto>, FindInputSortOrderCRUDTypeDefinition{
    
    @Field(() => RecordSortDirectionEnum, { nullable: true }) 
    @IsOptional()
    id?: RecordSortDirectionEnum;

    @Field(() => RecordSortDirectionEnum, { nullable: true })
    @IsOptional()
    fname?: RecordSortDirectionEnum;

    @Field(() => RecordSortDirectionEnum, { nullable: true })
    @IsOptional()
    connsrc_id?: RecordSortDirectionEnum;

    @Field(() => RecordSortDirectionEnum, { nullable: true })
    @IsOptional()
    lname?: RecordSortDirectionEnum;

    @Field(() => RecordSortDirectionEnum, { nullable: true })
    @IsOptional()
    primary_mobile_cc?: RecordSortDirectionEnum;

    @Field(() => RecordSortDirectionEnum, { nullable: true })
    @IsOptional()
    recovery_mobile_cc?: RecordSortDirectionEnum;

    @Field(() => RecordSortDirectionEnum, { nullable: true })
    @IsOptional()
    has_two_factor_auth?: RecordSortDirectionEnum;

    @Field(() => RecordSortDirectionEnum, { nullable: true })
    @IsOptional()
    pemail_verified?: RecordSortDirectionEnum;

    @Field(() => RecordSortDirectionEnum, { nullable: true })
    @IsOptional()
    pmobile_verified?: RecordSortDirectionEnum;

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
export class UserFindInputGroupByDto implements FindOptionsOrder<UserDto>, FindInputGroupByCRUDTypeDefinition{
    
    @Field(() => Boolean, { nullable: true })
    @IsOptional()
    primary_mobile_cc?: boolean;

    @Field(() => Boolean, { nullable: true })
    @IsOptional()
    recovery_mobile_cc?: boolean;

    @Field(() => Boolean, { nullable: true })
    @IsOptional()
    has_two_factor_auth?: boolean;

    @Field(() => Boolean, { nullable: true })
    @IsOptional()
    pemail_verified?: boolean;

    @Field(() => Boolean, { nullable: true })
    @IsOptional()
    pmobile_verified?: boolean;

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
export class UserFindInputDto extends IntersectionType(FindInputPaginationOptionsDto, WithDeletedInputDto) implements FindManyOptions<UserDto>, FindInputCRUDTypeDefinition{
    // input layout design for users to perform find with various database options
  
    /**
     * Conditions to be met for the resulting set.
     * also validate the user pass only 1 operator to search for field
     */
    @Field(() => [UserFindInputWhereDto], { nullable: true, description:  CrudDefMetaDesc.find_where })
    @IsOptional()
    @Validate(OnlyOneSeachOperatorAllowed)
    declare where?: FindOptionsWhere<UserFindInputWhereDto>[];
  
  
    /**
     * Specifies how to group the rows returned by the SELECT statement.
     */
    @Field(() => UserFindInputGroupByDto, { nullable: true, description: CrudDefMetaDesc.find_group_by })
    @IsOptional()
    declare groupBy?: UserFindInputGroupByDto;
  
    /**
     * Sort the result set by fields using ascending or descending order.
     */
    @Field(() => UserFindInputSortOrderDto, { nullable: true, description: CrudDefMetaDesc.find_order })
    @IsOptional()
    declare order?: FindOptionsOrder<UserFindInputSortOrderDto>;
}


// ████ FIND OUTPUT DTO ████████████████████████████████████████████████

@ObjectType()
@Directive('@shareable')
export class UserFindOutputRowsDto extends UserFindDto implements FindOutputRowsCRUDTypeDefinition{
    // this DTO will be used at many palce for output object, os make sure this is properly developed
}

@ObjectType()
@Directive('@shareable')
export class UserFindOutputDto extends FindOutputPaginationOptionsDto implements FindOutputCRUDTypeDefinition{
    // output layout design for users to get find response

    // we assign any because iin GRAPHQL for requuest body this rows will have fields with boolean value whether to include in response or not
    // this is very crucial to understand this structure and you need to understand how graphQL works
    @Field(() => [UserEntity], { description: CrudDefMetaDesc.find_rows })
    declare rows?: UserEntity | UserEntity[] | any;
}

/**
 * ██████████████████████████████████████████████████████████████████████████████████████████████████████████████████
 * █ FIND ONE BY ID DTO █████████████████████████████████████████████████████████████████████████████████████████████
 * ██████████████████████████████████████████████████████████████████████████████████████████████████████████████████
**/

export class UserFindOneByIdDto extends UserEntity implements FindDtoCRUDTypeDefinition{
    static metaname: string = `${UserEntity.metaname}${FindOneByIdArtefact}`;
    static metadesc: string = CrudDefMetaDesc.findOneById_metadesc;
}

// ████ FIND ONE BY ID INPUT DTO ████████████████████████████████████████████████

@InputType()
export class UserFindOneByIdInputDto extends IntersectionType(IdInputDto, WithDeletedInputDto) implements FindOneByIdInputCRUDTypeDefinition {

}


/**
 * █████████████████████████████████████████████████████████████
 * █ CREATE DTO ████████████████████████████████████████████████
 * █████████████████████████████████████████████████████████████
**/

export class UserCreateDto extends UserEntity implements CreateDtoCRUDTypeDefinition {
    static metaname: string = `${UserEntity.metaname}${CreateArtefact}`;
    static metadesc: string = CrudDefMetaDesc.create_metadesc;
}
// ████ CREATE INPUT DTO ████████████████████████████████████████████████

@InputType()
export class UserCreateInputDto extends  UserCreateDto implements CreateInputCRUDTypeDefinition {
  
    @Field(() => String, {nullable: true, description: meta?.username.desc})
    declare username?: string;

    @Field(() => String, {nullable: true, description: meta?.url_slug.desc})
    declare url_slug?: string;

    @Field(() => Int, {nullable: true, description: meta?.connsrc_id.desc})
    declare connsrc_id?: number;

    @Field(() => String, {nullable: true, description: meta?.fname.desc})
    declare fname?: string;

    @Field(() => String, {nullable: true, description: meta?.lname.desc})
    declare lname?: string;

    @Field(() => String, {nullable: true, description: meta?.mname.desc})
    declare mname?: string;

    @Field(() => String, {nullable: true, description: meta?.primary_email.desc})
    declare primary_email?: string;

    @Field(() => String, {nullable: true, description: meta?.primary_mobile.desc})
    declare primary_mobile?: string;

    @Field(() => String, {nullable: true, description: meta?.primary_mobile_cc.desc})
    declare primary_mobile_cc?: string;
  
    @Field(() => String, {nullable: true, description: meta?.recovery_email.desc})
    declare recovery_email?: string;

    @Field(() => String, {nullable: true, description: meta?.recovery_mobile.desc})
    declare recovery_mobile?: string;

    @Field(() => String, {nullable: true, description: meta?.recovery_mobile_cc.desc})
    declare recovery_mobile_cc?: string;

    @Field(() => String, {nullable: true, description: meta?.whatsapp.desc})
    declare whatsapp?: string;

    @Field(() => String, {nullable: true, description: meta?.whatsapp_cc.desc})
    declare whatsapp_cc?: string;
    
    /*@Field(() => String, {nullable: false, description: meta?.signup_source.desc})
    declare signup_source?: string;*/

    @Field(() => YesNoEnum, {nullable: false, description: meta?.has_two_factor_auth.desc})
    declare has_two_factor_auth?: number;
}


// ████ CREATE OUTPUT DTO ████████████████████████████████████████████████

@ObjectType()
@Directive('@shareable')
export class UserCreateOutputDto extends UserFindOutputRowsDto implements CreateOutputCRUDTypeDefinition {
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


export class UserUpdateDto extends UserDto implements UpdateDtoCRUDTypeDefinition{
    static metaname: string = `${UserEntity.metaname}${UpdateArtefact}`;
    static metadesc: string = CrudDefMetaDesc.update_metadesc;
}

// ████ UPDATE INPUT DTO ████████████████████████████████████████████████

@InputType()
export class UserUpdateInputWhereDto extends UserFindInputWhereDto implements UpdateInputWhereCRUDTypeDefinition{
    /**
     * avoiding redundant code
     * considering whatever FindInputWhere ask for input, same apply to UpdateInputWhere so extending class
     * just add what is new or different for UpdateInputWhere, that means it's 100% customisable
     * you can also remove extends *FindInputWhere and define entire custom dto here if needed 
     **/
}

@InputType()
export class UserUpdateInputSetsDto extends PartialType(UserCreateInputDto) implements UpdateInputSetsCRUDTypeDefinition {
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
export class UserUpdateInputDto implements UpdateInputCRUDTypeDefinition{
    // input layout design for users to perform update with various database options
  
    /**
     * Conditions to be met for the resulting set.
     * also validate the user pass only 1 operator to search for field
     */
    @Field(() => [UserUpdateInputWhereDto], { nullable: false, description: CrudDefMetaDesc.update_where })
    @IsNotEmpty()
    @Validate(OnlyOneSeachOperatorAllowed)
    where!: FindOptionsWhere<UserUpdateInputWhereDto>[];

    /**
     * What to set for update
     * basically fields list of update
     */
    @Field(() => UserUpdateInputSetsDto, { nullable: false, description: CrudDefMetaDesc.update_sets })
    @IsNotEmpty()
    sets!: UserUpdateInputSetsDto

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
export class UserUpdateOutputAffectedRowsDto extends UserFindOutputRowsDto implements UpdateOutputAffectedRowsCRUDTypeDefinition{
    /**
     * avoiding redundant code
     * considering whatever FindOutputRows return, same apply to UpdateOutputAffectedRows so extending class
     * just add what is new or different for UpdateOutputAffectedRows, that means it's 100% customisable
     * you can also remove extends *FindOutputRows and define entire custom dto here if needed 
     **/
}

@ObjectType()
@Directive('@shareable')
export class UserUpdateOutputDto extends CrudAffectedDto implements UpdateOutputCRUDTypeDefinition{
  @Field(() => [UserEntity], { nullable: true, description: CrudDefMetaDesc.update_affected_rows }) 
  declare affectedRows?: UserEntity[] | any; 
}


/**
 * █████████████████████████████████████████████████████████████
 * █ SOFT DELETE DTO ███████████████████████████████████████████
 * █████████████████████████████████████████████████████████████
**/
// this operation run directly withouth checking the data if exist or not, so it's quick but do not provide more information about operation

// ████ SOFT DELETE INPUT DTO ████████████████████████████████████████████████
export class UserSoftDeleteDto extends UserEntity implements SoftDeleteDtoCRUDTypeDefinition{
  static metaname: string = `${UserEntity.metaname}${SoftDeleteArtefact}`;
  static metadesc: string = CrudDefMetaDesc.softDelete_metadesc;
}

@InputType()
export class UserSoftDeleteInputWhereDto extends UserFindInputWhereDto implements SoftDeleteInputWhereCRUDTypeDefinition{
  /**
   * avoiding redundant code
   * considering whatever FindInputWhere ask for input, same apply to SoftDeleteInputWhere so extending class
   * just add what is new or different for SoftDeleteInputWhere, that means it's 100% customisable
   * you can also remove extends *FindInputWhere and define entire custom dto here if needed 
   **/
}

@InputType()
export class UserSoftDeleteInputDto implements SoftDeleteInputCRUDTypeDefinition{
  @Field(() => [UserSoftDeleteInputWhereDto], {nullable: true, description: CrudDefMetaDesc.softDelete_where})
  @Validate(OnlyOneSeachOperatorAllowed)
  where?: FindOptionsWhere<UserSoftDeleteInputWhereDto>[];
}


// ████ SOFT DELETE OUTPUT DTO ████████████████████████████████████████████████

@ObjectType()
@Directive('@shareable')
export class UserSoftDeleteOutputDto extends CrudAffectedDto implements SoftDeleteOutputCRUDTypeDefinition{
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

export class UserDeleteDto extends UserEntity implements DeleteDtoCRUDTypeDefinition{
  static metaname: string = `${UserEntity.metaname}${DeleteArtefact}`;
  static metadesc: string = CrudDefMetaDesc.delete_metadesc;
}

// ████ DELETE INPUT DTO ████████████████████████████████████████████████

@InputType()
export class UserDeleteInputWhereDto extends UserFindInputWhereDto implements DeleteInputWhereCRUDTypeDefinition{
  /**
   * avoiding redundant code
   * considering whatever FindInputWhere ask for input, same apply to SoftDeleteInputWhere so extending class
   * just add what is new or different for SoftDeleteInputWhere, that means it's 100% customisable
   * you can also remove extends *FindInputWhere and define entire custom dto here if needed 
   **/
}

@InputType()
export class UserDeleteInputDto implements DeleteInputCRUDTypeDefinition{
  @Field(() => [UserDeleteInputWhereDto], {nullable: true, description: CrudDefMetaDesc.delete_where})
  @Validate(OnlyOneSeachOperatorAllowed)
  where?: FindOptionsWhere<UserDeleteInputWhereDto>[];
}


// ████ DELETE OUTPUT DTO ████████████████████████████████████████████████


@ObjectType()
@Directive('@shareable')
export class UserDeleteOutputDto extends CrudAffectedDto implements DeleteOutputCRUDTypeDefinition{
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

export class UserRestoreDto extends UserEntity implements RestoreDtoCRUDTypeDefinition{
    static metaname: string = `${UserEntity.metaname}${RestoreArtefact}`;
    static metadesc: string = CrudDefMetaDesc.restore_metadesc;
}

// ████ RESTORE INPUT DTO ██████████████████████████████████████████████████████

@InputType()
export class UserRestoreInputWhereDto extends UserFindInputWhereDto implements RestoreInputWhereCRUDTypeDefinition{
  /**
   * avoiding redundant code
   * considering whatever FindInputWhere ask for input, same apply to SoftDeleteInputWhere so extending class
   * just add what is new or different for SoftDeleteInputWhere, that means it's 100% customisable
   * you can also remove extends *FindInputWhere and define entire custom dto here if needed 
   **/
}

@InputType()
export class UserRestoreInputDto implements RestoreInputCRUDTypeDefinition{
  @Field(() => [UserRestoreInputWhereDto], {nullable: true, description: CrudDefMetaDesc.restore_where})
  @Validate(OnlyOneSeachOperatorAllowed)
  where?: FindOptionsWhere<UserRestoreInputWhereDto>[];
}
  
// ████ RESTORE OUTPUT DTO ██████████████████████████████████████████████████████
  
@ObjectType()
@Directive('@shareable')
export class UserRestoreOutputDto extends CrudAffectedDto implements RestoreOutputCRUDTypeDefinition{
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

export class UserUpsertDto extends UserEntity implements UpsertDtoCRUDTypeDefinition{
  static metaname: string = `${UserEntity.metaname}${UpsertArtefact}`;
  static metadesc: string = CrudDefMetaDesc.upsert_metadesc;
}

// ████ UPSERT INPUT DTO ██████████████████████████████████████████████████████

@InputType()
export class UserUpsertInputDto extends UserCreateInputDto implements UpsertInputCRUDTypeDefinition{
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
    static conflictResolveFields: (keyof UserUpsertInputDto)[] = ['primary_email','primary_mobile'];
}

// ████ UPSERT OUTPUT DTO ██████████████████████████████████████████████████████

@ObjectType()
@Directive('@shareable')
export class UserUpsertOutputDto extends IntersectionType(UserCreateOutputDto, UpsertOutputProcessStatusDto) implements UpsertOutputCRUDTypeDefinition{ 
 
}

/**
 * █████████████████████████████████████████████████████████████
 * █ SOFT REMOVE DTO ███████████████████████████████████████████
 * █████████████████████████████████████████████████████████████
**/
// unlike soft delete, this operation first get the data from database and after run the operation, so it's complex but provide more and clear information about operation

// ████ SOFT REMOVE INPUT DTO ████████████████████████████████████████████████
export class UserSoftRemoveDto extends UserEntity implements SoftRemoveDtoCRUDTypeDefinition{
  static metaname: string = `${UserEntity.metaname}${SoftRemoveArtefact}`;
  static metadesc: string = CrudDefMetaDesc.softRemove_metadesc;
}

@InputType()
export class UserSoftRemoveInputWhereDto extends UserFindInputWhereDto implements SoftRemoveInputWhereCRUDTypeDefinition{
  /**
   * avoiding redundant code
   * considering whatever FindInputWhere ask for input, same apply to SoftRemoveInputWhere so extending class
   * just add what is new or different for SoftRemoveInputWhere, that means it's 100% customisable
   * you can also remove extends *FindInputWhere and define entire custom dto here if needed 
   **/
}

@InputType()
export class UserSoftRemoveInputDto implements SoftRemoveInputCRUDTypeDefinition{
  @Field(() => [UserSoftRemoveInputWhereDto], {nullable: true, description: CrudDefMetaDesc.softRemove_where})
  @Validate(OnlyOneSeachOperatorAllowed)
  where?: FindOptionsWhere<UserSoftRemoveInputWhereDto>[];
}


// ████ SOFT REMOVE OUTPUT DTO ████████████████████████████████████████████████

@ObjectType()
@Directive('@shareable')
export class UserSoftRemoveOutputAffectedRowsDto extends UserFindOutputRowsDto implements SoftRemoveOutputAffectedRowsCRUDTypeDefinition{
  /**
   * avoiding redundant code
   * considering whatever FindOutputRows return, same apply to SoftRemoveOutputAffectedRows so extending class
   * just add what is new or different for SoftRemoveOutputAffectedRows, that means it's 100% customisable
   * you can also remove extends FindOutputRows and define entire custom dto here if needed 
   **/
}
@ObjectType()
@Directive('@shareable')
export class UserSoftRemoveOutputDto extends CrudAffectedDto implements SoftRemoveOutputCRUDTypeDefinition{
  /**
   * avoiding redundant code
   * considering whatever AffectedDto return, same apply to SoftRemoveOutput so extending class
   * just add what is new or different for SoftRemoveOutput, that means it's 100% customisable
   * you can also remove extends AffectedDto and define entire custom dto here if needed 
   **/

  @Field(() => [UserEntity], {nullable: true, description: CrudDefMetaDesc.softRemove_affected_rows}) 
  declare affectedRows?: UserEntity[] | any
}

/**
 * █████████████████████████████████████████████████████████████
 * █ REMOVE DTO ████████████████████████████████████████████████
 * █████████████████████████████████████████████████████████████
**/
// unlike soft delete, this operation first get the data from database and after run the operation, so it's complex but provide more and clear information about operation

export class UserRemoveDto extends UserEntity implements RemoveDtoCRUDTypeDefinition{
  static metaname: string = `${UserEntity.metaname}${RemoveArtefact}`;
  static metadesc: string = CrudDefMetaDesc.remove_metadesc;
}

// ████ REMOVE INPUT DTO ████████████████████████████████████████████████

@InputType()
export class UserRemoveInputWhereDto extends UserFindInputWhereDto implements RemoveInputWhereCRUDTypeDefinition{
  /**
   * avoiding redundant code
   * considering whatever FindInputWhere ask for input, same apply to SoftRemoveInputWhere so extending class
   * just add what is new or different for SoftRemoveInputWhere, that means it's 100% customisable
   * you can also remove extends *FindInputWhere and define entire custom dto here if needed 
   **/
}

@InputType()
export class UserRemoveInputDto implements RemoveInputCRUDTypeDefinition{
  @Field(() => [UserRemoveInputWhereDto], {nullable: true, description: CrudDefMetaDesc.remove_where})
  @Validate(OnlyOneSeachOperatorAllowed)
  where?: FindOptionsWhere<UserRemoveInputWhereDto>[];
}

// ████ REMOVE OUTPUT DTO ████████████████████████████████████████████████

@ObjectType()
@Directive('@shareable')
export class UserRemoveOutputAffectedRowsDto extends UserFindOutputRowsDto implements RemoveOutputAffectedRowsCRUDTypeDefinition{
  /**
   * avoiding redundant code
   * considering whatever FindOutputRows return, same apply to RemoveOutputAffectedRows so extending class
   * just add what is new or different for RemoveOutputAffectedRows, that means it's 100% customisable
   * you can also remove extends FindOutputRows and define entire custom dto here if needed 
   **/
}
@ObjectType()
@Directive('@shareable')
export class UserRemoveOutputDto extends CrudAffectedDto implements RemoveOutputCRUDTypeDefinition{
  /**
   * avoiding redundant code
   * considering whatever AffectedDto return, same apply to RemoveOutput so extending class
   * just add what is new or different for RemoveOutput, that means it's 100% customisable
   * you can also remove extends AffectedDto and define entire custom dto here if needed 
   **/

  @Field(() => [UserEntity], {nullable: true, description: CrudDefMetaDesc.remove_affected_rows}) 
  declare affectedRows?: UserEntity[] | any;
}

/**
 * █████████████████████████████████████████████████████████████
 * █ RECOVER DTO ███████████████████████████████████████████████
 * █████████████████████████████████████████████████████████████
**/
// unlike soft delete, this operation first get the data from database and after run the operation, so it's complex but provide more and clear information about operation

export class UserRecoverDto extends UserEntity implements RecoverDtoCRUDTypeDefinition{
  static metaname: string = `${UserEntity.metaname}${RecoverArtefact}`;
  static metadesc: string = CrudDefMetaDesc.recover_metadesc;
}

// ████ RECOVER INPUT DTO ██████████████████████████████████████████████████████

@InputType()
export class UserRecoverInputWhereDto extends UserFindInputWhereDto implements RecoverInputWhereCRUDTypeDefinition{
/**
 * avoiding redundant code
 * considering whatever FindInputWhere ask for input, same apply to SoftDeleteInputWhere so extending class
 * just add what is new or different for SoftDeleteInputWhere, that means it's 100% customisable
 * you can also remove extends *FindInputWhere and define entire custom dto here if needed 
 **/
}

@InputType()
export class UserRecoverInputDto implements RecoverInputCRUDTypeDefinition{
  @Field(() => [UserRecoverInputWhereDto], {nullable: true, description: CrudDefMetaDesc.recover_where})
  @Validate(OnlyOneSeachOperatorAllowed)
  where?: FindOptionsWhere<UserRecoverInputWhereDto>[];
}

// ████ RECOVER OUTPUT DTO ██████████████████████████████████████████████████████

@ObjectType()
@Directive('@shareable')
export class UserRecoverOutputAffectedRowsDto extends UserFindOutputRowsDto implements RecoverOutputAffectedRowsCRUDTypeDefinition{
  /**
   * avoiding redundant code
   * considering whatever FindOutputRows return, same apply to RecoverOutputAffectedRows so extending class
   * just add what is new or different for RecoverOutputAffectedRows, that means it's 100% customisable
   * you can also remove extends FindOutputRows and define entire custom dto here if needed 
   **/
}

@ObjectType()
@Directive('@shareable')
export class UserRecoverOutputDto extends CrudAffectedDto implements RecoverOutputCRUDTypeDefinition{
  /**
   * avoiding redundant code
   * considering whatever AffectedDto return, same apply to RecoverOutput so extending class
   * just add what is new or different for RecoverOutput, that means it's 100% customisable
   * you can also remove extends AffectedDto and define entire custom dto here if needed 
   **/

  @Field(() => [UserEntity], {nullable: true, description: CrudDefMetaDesc.recover_affected_rows}) 
  declare affectedRows?: UserEntity[] | any;
}

/**
 * █████████████████████████████████████████████████████████████
 * █ UPLOAD DTO ████████████████████████████████████████████████
 * █████████████████████████████████████████████████████████████
**/

export class UserUploadDto extends UserEntity implements UploadDtoCRUDTypeDefinition {
  static metaname: string = `${UserEntity?.metaname}${UploadArtefact}`;
  static metadesc: string = CrudDefMetaDesc.upload_metadesc;
}

// ████ UPLOAD REF TYPE DTO ████████████████████████████████████████████████

@InputType()
export class UploadFileFieldInputDto {
  @Field(() => UserUploadFileFieldEnum, {nullable: false, description: CrudDefMetaDesc.upload_file_field})
  @IsNotEmpty()
  file_field!: UserUploadFileFieldEnum;
}

@ObjectType()
@Directive('@shareable')
export class UploadFileFieldOutputDto extends PartialType(UploadFileFieldInputDto) {

}

// ████ UPLOAD INPUT DTO ████████████████████████████████████████████████
@InputType()
export class UserUploadInputDto extends IntersectionType(UploadFileFieldInputDto, UploadInputDto) implements UploadInputArtefactCRUDTypeDefinition {

}

// ████ UPLOAD OUTPUT DTO ███████████████████████████████████████████████
@ObjectType()
@Directive('@shareable')
export class UserUploadOutputDto extends IntersectionType(UploadFileFieldOutputDto, UploadOutputDto) implements UploadOutputArtefactCRUDTypeDefinition {

}

/**
* █████████████████████████████████████████████████████████████
* █ UPLOAD DELETE DTO █████████████████████████████████████████
* █████████████████████████████████████████████████████████████
**/

export class UserUploadDeleteDto extends UserEntity implements UploadDeleteDtoCRUDTypeDefinition {
static metaname: string = `${UserEntity?.metaname}${UploadDeleteArtefact}`;
static metadesc: string = CrudDefMetaDesc.upload_delete_metadesc;
}

// ████ UPLOAD DELETE INPUT DTO ████████████████████████████████████████████████
@InputType()
export class UserUploadDeleteInputDto extends IntersectionType(UploadFileFieldInputDto, UploadDeleteInputDto) implements UploadDeleteInputArtefactCRUDTypeDefinition {

}

// ████ UPLOAD DELETE OUTPUT DTO ███████████████████████████████████████████████
@ObjectType()
@Directive('@shareable')
export class UserUploadDeleteOutputDto extends IntersectionType(UploadFileFieldOutputDto, UploadDeleteOutputDto) implements UploadDeleteOutputArtefactCRUDTypeDefinition {

}