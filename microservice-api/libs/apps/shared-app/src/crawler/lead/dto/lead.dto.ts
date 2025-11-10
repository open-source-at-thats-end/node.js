import { UploadDeleteInputDto, UploadDeleteOutputDto, UploadInputDto, UploadOutputDto, UploadArtefact, UploadDtoCRUDTypeDefinition, UploadInputArtefactCRUDTypeDefinition, UploadOutputArtefactCRUDTypeDefinition, UploadDeleteArtefact, UploadDeleteDtoCRUDTypeDefinition, UploadDeleteInputArtefactCRUDTypeDefinition, UploadDeleteOutputArtefactCRUDTypeDefinition, CreateArtefact, CreateDtoCRUDTypeDefinition, CreateInputCRUDTypeDefinition, CreateOutputCRUDTypeDefinition, CrudDefMetaDesc, DateTime, DeleteArtefact, DeleteDtoCRUDTypeDefinition, DeleteInputCRUDTypeDefinition, DeleteOutputCRUDTypeDefinition, FindArtefact, FindDtoCRUDTypeDefinition, FindInputGroupByCRUDTypeDefinition, FindInputSortOrderCRUDTypeDefinition, FindInputCRUDTypeDefinition, FindInputWhereCRUDTypeDefinition, FindOneByIdArtefact, FindOperatorDto, FindOutputPaginationDto, FindOutputCRUDTypeDefinition, OnlyOneSeachOperatorAllowed, RecordSortDirectionEnum, RestoreArtefact, RestoreDtoCRUDTypeDefinition, RestoreInputCRUDTypeDefinition, SoftDeleteArtefact, SoftDeleteDtoCRUDTypeDefinition, SoftDeleteInputCRUDTypeDefinition, SoftDeleteOutputCRUDTypeDefinition, UpdateArtefact, UpdateDtoCRUDTypeDefinition, UpdateInputSetsCRUDTypeDefinition, UpdateInputCRUDTypeDefinition, UpdateInputWhereCRUDTypeDefinition, UpdateOutputCRUDTypeDefinition, SoftDeleteInputWhereCRUDTypeDefinition, RestoreInputWhereCRUDTypeDefinition, RestoreOutputCRUDTypeDefinition, UpsertDtoCRUDTypeDefinition, UpsertArtefact, UpsertInputCRUDTypeDefinition, UpsertOutputCRUDTypeDefinition, UpsertStatusEnum, SoftRemoveDtoCRUDTypeDefinition, SoftRemoveArtefact, SoftRemoveInputWhereCRUDTypeDefinition, SoftRemoveInputCRUDTypeDefinition, SoftRemoveOutputCRUDTypeDefinition, RemoveDtoCRUDTypeDefinition, RemoveArtefact, RemoveInputCRUDTypeDefinition, RemoveOutputCRUDTypeDefinition, SoftRemoveOutputAffectedRowsCRUDTypeDefinition, FindOutputRowsCRUDTypeDefinition, UpdateOutputAffectedRowsCRUDTypeDefinition, RemoveOutputAffectedRowsCRUDTypeDefinition, RecoverDtoCRUDTypeDefinition, RecoverArtefact, RecoverInputCRUDTypeDefinition, RecoverOutputCRUDTypeDefinition, RecoverInputWhereCRUDTypeDefinition, RecoverOutputAffectedRowsCRUDTypeDefinition, FindInputDtoCRUDTypeDefinition, FindOneByIdInputCRUDTypeDefinition, FindInputPaginationOptionsDto, FindOutputPaginationOptionsDto, IdInputDto, DeleteInputWhereCRUDTypeDefinition, RemoveInputWhereCRUDTypeDefinition, WithDeletedInputDto } from "@libs/library-app";
import { CrawlerLeadEntityMeta as meta, CrawlerLeadEntity } from "../entities/lead.entity";
import { Directive, Field, Float, InputType, Int, IntersectionType, ObjectType, PartialType } from "@nestjs/graphql";
import { IsNotEmpty, IsNumber, IsOptional, Validate } from "class-validator";
import { FindManyOptions, FindOptionsOrder, FindOptionsWhere } from "typeorm";
import { Exclude } from "class-transformer";
import { IdOrIdsInputDto, CrudAffectedDto, UpsertOutputProcessStatusDto } from "@libs/library-app";
import { CrawlerLeadUploadFileFieldEnum, LeadDetermineAsEnum } from "../lead.enum";


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
export class CrawlerLeadDto extends CrawlerLeadEntity implements FindInputDtoCRUDTypeDefinition{
     /**
     * we need to transform filed data type to any because find has complex process
     * this is because every field is defined in entity with specific type which cannot be override directly dure to inhereatance
     * so creating new class in between to make sure call cannot have other filed then defined in entity
     * 
     * in this DTO we need to type cast the fields as we need fields but those will be manipulated differently
     * as we are extending the class we will have issue with the fields types so converting in any
     * this will help other dto to use the fields but they will be typed as required in them
     **/
    
    declare lead_id?: any;
    declare u_id?: any;
    declare busns_id?: any;
    declare u_fname?: any;
    declare u_lname?: any;
    declare u_mname?: any;
    declare u_connsrc_id?: any;
    declare u_primary_email?: any;
    declare u_primary_mobile?: any;
    declare u_primary_mobile_cc?: any;
    declare u_whatsapp?: any;
    declare u_whatsapp_cc?: any;
    declare u_pemail_verified?: any;
    declare u_pmobile_verified?: any;
    declare u_verified?: any;
    declare u_suspended?: any;
    declare upinfo_gender?: any;
    declare upinfo_website_url?: any;
    declare upinfo_facebook_profile?: any;
    declare upinfo_instagram_profile?: any;
    declare upinfo_linkedin_profile?: any;
    declare upinfo_youtube_profile?: any;
    declare upinfo_x_profile?: any;
    declare upinfo_tiktok_profile?: any;
    declare upinfo_pinterest_profile?: any;
    declare uaddr_title?: any;
    declare uaddr_address?: any;
    declare uaddr_country?: any;
    declare uaddr_state?: any;
    declare uaddr_city?: any;
    declare uaddr_postal_zip_code?: any;
    declare ucorp_company_name?: any;
    declare ucorp_email?: any;
    declare ucorp_mobile?: any;
    declare ucorp_mobile_cc?: any;
    declare ucorp_website?: any;
    declare ucorp_address?: any;
    declare ucorp_city?: any;
    declare ucorp_state?: any;
    declare ucorp_country?: any;
    declare ucorp_postal_zip_code?: any;
    declare busns_connsrc_id?: any;
    declare busns_buspricat_id?: any;
    declare busns_busseccat_id_1?: any;
    declare busns_busseccat_id_2?: any;
    declare busns_busseccat_id_3?: any;
    declare busns_busseccat_id_4?: any;
    declare busns_busseccat_id_5?: any;
    declare busns_busseccat_id_6?: any;
    declare busns_busseccat_id_7?: any;
    declare busns_busseccat_id_8?: any;
    declare busns_busseccat_id_9?: any;
    declare busns_name?: any;
    declare busns_address?: any;
    declare busns_country?: any;
    declare busns_state?: any;
    declare busns_city?: any;
    declare busns_zipcode?: any;
    declare busns_toll_free_number?: any;
    declare busns_mobile?: any;
    declare busns_mobile_cc?: any;
    declare busns_whatsapp?: any;
    declare busns_whatsapp_cc?: any;
    declare busns_email?: any;
    declare busns_google_my_business_url?: any;
    declare busns_google_map_url?: any;
    declare busns_google_review_url?: any;
    declare busns_location_latitude?: any;
    declare busns_location_longitude?: any;
    declare busns_website_url?: any;
    declare busns_linkedin_profile?: any;
    declare busns_facebook_profile?: any;
    declare busns_instagram_profile?: any;
    declare busns_youtube_profile?: any;
    declare busns_x_profile?: any;
    declare busns_tiktok_profile?: any;
    declare busns_pinterest_profile?: any;
    declare busns_registered?: any;
    declare busns_initial_findings?: any;
    declare busns_competitor_findings?: any;
    declare lead_ref_type?: any;
    declare lead_ref_id?: any;
    declare lead_preferred_contact_method?: any;
    declare lead_concern_issue?: any;
    declare lead_subject?: any;
    declare lead_comment?: any;
    declare lead_initial_findings?: any;
    declare lead_first_incoming_message_dt?: any;
    declare lead_created?: any;
    declare lead_updated?: any;
    declare lead_determined_as?: any;
    declare crawler_updated?: any;
    declare crawler_stage?: any;

}

/**
 * █████████████████████████████████████████████████████████████
 * █ FIND DTO ██████████████████████████████████████████████████
 * █████████████████████████████████████████████████████████████
**/
@ObjectType({ isAbstract: true })
@Directive('@shareable')
export class CrawlerLeadFindDto extends CrawlerLeadEntity implements FindDtoCRUDTypeDefinition{
    static metaname: string = `${CrawlerLeadEntity?.metaname}${FindArtefact}`;
    static metadesc: string = CrudDefMetaDesc.find_metadesc;
}


// ████ FIND INPUT DTO ████████████████████████████████████████████████


@InputType()
export class CrawlerLeadFindInputWhereDto extends CrawlerLeadDto implements FindInputWhereCRUDTypeDefinition{
  @Field(() => FindOperatorDto, {nullable: true, description: meta?.lead_id.desc})
  @IsOptional()
  declare lead_id?: FindOperatorDto; 
  
  @Field(() => FindOperatorDto, {nullable: true, description: meta?.lead_determined_as.desc})
  @IsOptional()
  declare lead_determined_as?: FindOperatorDto;

  @Field(() => FindOperatorDto, {nullable: true, description: meta?.crawler_stage.desc})
  @IsOptional()
  declare crawler_stage?: FindOperatorDto;

  // ████ FR_ WHERE: INTERNAL RELATIONS WHERE ████████████████████████████████████████████████  


}

@InputType()
export class CrawlerLeadFindInputSortOrderDto implements FindOptionsOrder<CrawlerLeadDto>, FindInputSortOrderCRUDTypeDefinition{
    
  @Field(() => RecordSortDirectionEnum, { nullable: true }) 
  @IsOptional()
  lead_id?: RecordSortDirectionEnum;

  @Field(() => RecordSortDirectionEnum, { nullable: true })
  @IsOptional()
  lead_determined_as?: RecordSortDirectionEnum;

  @Field(() => RecordSortDirectionEnum, { nullable: true })
  @IsOptional()
  crawler_stage?: RecordSortDirectionEnum;

}

@InputType()
export class CrawlerLeadFindInputGroupByDto implements FindOptionsOrder<CrawlerLeadDto>, FindInputGroupByCRUDTypeDefinition{
  @Field(() => Boolean, { nullable: true })
  @IsOptional()
  lead_determined_as?: boolean;

  @Field(() => Boolean, { nullable: true })
  @IsOptional()
  crawler_stage?: boolean;
}

@InputType()
export class CrawlerLeadFindInputDto extends IntersectionType(FindInputPaginationOptionsDto, WithDeletedInputDto) implements FindManyOptions<CrawlerLeadDto>, FindInputCRUDTypeDefinition{
    // input layout design for users to perform find with various database options
  
    /**
     * Conditions to be met for the resulting set.
     * also validate the user pass only 1 operator to search for field
     */
    @Field(() => [CrawlerLeadFindInputWhereDto], { nullable: true, description: CrudDefMetaDesc.find_where })
    @IsOptional()
    @Validate(OnlyOneSeachOperatorAllowed)
    declare where?: FindOptionsWhere<CrawlerLeadFindInputWhereDto>[];
  
  
    /**
     * Specifies how to group the rows returned by the SELECT statement.
     */
    @Field(() => CrawlerLeadFindInputGroupByDto, { nullable: true, description: CrudDefMetaDesc.find_group_by })
    @IsOptional()
    declare groupBy?: CrawlerLeadFindInputGroupByDto;
  
    /**
     * Sort the result set by fields using ascending or descending order.
     */
    @Field(() => CrawlerLeadFindInputSortOrderDto, { nullable: true, description: CrudDefMetaDesc.find_order })
    @IsOptional()
    declare order?: FindOptionsOrder<CrawlerLeadFindInputSortOrderDto>;
}


// ████ FIND OUTPUT DTO ████████████████████████████████████████████████

@ObjectType()
@Directive('@shareable')
export class CrawlerLeadFindOutputRowsDto extends CrawlerLeadFindDto implements FindOutputRowsCRUDTypeDefinition{
    // this DTO will be used at many palce for output object, os make sure this is properly developed
}

@ObjectType()
@Directive('@shareable')
export class CrawlerLeadFindOutputDto extends FindOutputPaginationOptionsDto implements FindOutputCRUDTypeDefinition{
    // output layout design for users to get find response

    // we assign any because iin GRAPHQL for requuest body this rows will have fields with boolean value whether to include in response or not
    // this is very crucial to understand this structure and you need to understand how graphQL works
    @Field(() => [CrawlerLeadEntity], {description: CrudDefMetaDesc.find_rows})
    declare rows?: CrawlerLeadEntity | CrawlerLeadEntity[] | any;
}

/**
 * ██████████████████████████████████████████████████████████████████████████████████████████████████████████████████
 * █ FIND ONE BY ID DTO █████████████████████████████████████████████████████████████████████████████████████████████
 * ██████████████████████████████████████████████████████████████████████████████████████████████████████████████████
**/

export class CrawlerLeadFindOneByIdDto extends CrawlerLeadEntity implements FindDtoCRUDTypeDefinition{
    static metaname: string = `${CrawlerLeadEntity.metaname}${FindOneByIdArtefact}`;
    static metadesc: string = CrudDefMetaDesc.findOneById_metadesc;
}

// ████ FIND ONE BY ID INPUT DTO ████████████████████████████████████████████████

@InputType()
export class CrawlerLeadFindOneByIdInputDto extends IntersectionType(IdInputDto, WithDeletedInputDto) implements FindOneByIdInputCRUDTypeDefinition{

}

/**
 * █████████████████████████████████████████████████████████████
 * █ CREATE DTO ████████████████████████████████████████████████
 * █████████████████████████████████████████████████████████████
**/

export class CrawlerLeadCreateDto extends CrawlerLeadEntity implements CreateDtoCRUDTypeDefinition {
    static metaname: string = `${CrawlerLeadEntity.metaname}${CreateArtefact}`;
    static metadesc: string = CrudDefMetaDesc.create_metadesc;
}
// ████ CREATE INPUT DTO ████████████████████████████████████████████████

@InputType()
export class CrawlerLeadCreateInputDto extends  CrawlerLeadCreateDto implements CreateInputCRUDTypeDefinition {
 
  @Field(() => Int, {nullable: true, description: meta?.u_id.desc})
  declare u_id?: number;

  @Field(() => Int, {nullable: true, description: meta?.busns_id.desc})
  declare busns_id?: number;

  @Field(() => String, {nullable: true, description: meta?.u_fname.desc})
  declare u_fname?: string;

  @Field(() => String, {nullable: true, description: meta?.u_lname.desc})
  declare u_lname?: string;

  @Field(() => String, {nullable: true, description: meta?.u_mname.desc})
  declare u_mname?: string;

  @Field(() => String, {nullable: true, description: meta?.u_connsrc_id.desc})
  declare u_connsrc_id?: string;

  @Field(() => String, {nullable: true, description: meta?.u_primary_email.desc})
  declare u_primary_email?: string;

  @Field(() => String, {nullable: true, description: meta?.u_primary_mobile.desc})
  declare u_primary_mobile?: string;

  @Field(() => String, {nullable: true, description: meta?.u_primary_mobile_cc.desc})
  declare u_primary_mobile_cc?: string;

  @Field(() => String, {nullable: true, description: meta?.u_whatsapp.desc})
  declare u_whatsapp?: string;

  @Field(() => String, {nullable: true, description: meta?.u_whatsapp_cc.desc})
  declare u_whatsapp_cc?: string;

  @Field(() => Int, {nullable: true, description: meta?.u_pemail_verified.desc})
  declare u_pemail_verified?: number;

  @Field(() => Int, {nullable: true, description: meta?.u_pmobile_verified.desc})
  declare u_pmobile_verified?: number;

  @Field(() => Int, {nullable: true, description: meta?.u_verified.desc})
  declare u_verified?: number;

  @Field(() => Int, {nullable: true, description: meta?.u_suspended.desc})
  declare u_suspended?: number;

  @Field(() => String, {nullable: true, description: meta?.upinfo_gender.desc})
  declare upinfo_gender?: string;

  @Field(() => String, {nullable: true, description: meta?.upinfo_website_url.desc})
  declare upinfo_website_url?: string;

  @Field(() => String, {nullable: true, description: meta?.upinfo_facebook_profile.desc})
  declare upinfo_facebook_profile?: string;

  @Field(() => String, {nullable: true, description: meta?.upinfo_instagram_profile.desc})
  declare upinfo_instagram_profile?: string;

  @Field(() => String, {nullable: true, description: meta?.upinfo_linkedin_profile.desc})
  declare upinfo_linkedin_profile?: string;

  @Field(() => String, {nullable: true, description: meta?.upinfo_youtube_profile.desc})
  declare upinfo_youtube_profile?: string;

  @Field(() => String, {nullable: true, description: meta?.upinfo_x_profile.desc})
  declare upinfo_x_profile?: string;

  @Field(() => String, {nullable: true, description: meta?.upinfo_tiktok_profile.desc})
  declare upinfo_tiktok_profile?: string;

  @Field(() => String, {nullable: true, description: meta?.upinfo_pinterest_profile.desc})
  declare upinfo_pinterest_profile?: string;

  @Field(() => String, {nullable: true, description: meta?.uaddr_title.desc})
  declare uaddr_title?: string;

  @Field(() => String, {nullable: true, description: meta?.uaddr_address.desc})
  declare uaddr_address?: string;

  @Field(() => String, {nullable: true, description: meta?.uaddr_country.desc})
  declare uaddr_country?: string;

  @Field(() => String, {nullable: true, description: meta?.uaddr_state.desc})
  declare uaddr_state?: string;

  @Field(() => String, {nullable: true, description: meta?.uaddr_city.desc})
  declare uaddr_city?: string;

  @Field(() => String, {nullable: true, description: meta?.uaddr_postal_zip_code.desc})
  declare uaddr_postal_zip_code?: string;

  @Field(() => String, {nullable: true, description: meta?.ucorp_company_name.desc})
  declare ucorp_company_name?: string;

  @Field(() => String, {nullable: true, description: meta?.ucorp_email.desc})
  declare ucorp_email?: string;

  @Field(() => String, {nullable: true, description: meta?.ucorp_mobile.desc})
  declare ucorp_mobile?: string;

  @Field(() => String, {nullable: true, description: meta?.ucorp_mobile_cc.desc})
  declare ucorp_mobile_cc?: string;

  @Field(() => String, {nullable: true, description: meta?.ucorp_website.desc})
  declare ucorp_website?: string;

  @Field(() => String, {nullable: true, description: meta?.ucorp_address.desc})
  declare ucorp_address?: string;

  @Field(() => String, {nullable: true, description: meta?.ucorp_city.desc})
  declare ucorp_city?: string;

  @Field(() => String, {nullable: true, description: meta?.ucorp_state.desc})
  declare ucorp_state?: string;

  @Field(() => String, {nullable: true, description: meta?.ucorp_country.desc})
  declare ucorp_country?: string;

  @Field(() => String, {nullable: true, description: meta?.ucorp_postal_zip_code.desc})
  declare ucorp_postal_zip_code?: string;

  @Field(() => String, {nullable: true, description: meta?.busns_connsrc_id.desc})
  declare busns_connsrc_id?: string;

  @Field(() => String, {nullable: true, description: meta?.busns_buspricat_id.desc})
  declare busns_buspricat_id?: string;

  @Field(() => String, {nullable: true, description: meta?.busns_busseccat_id_1.desc})
  declare busns_busseccat_id_1?: string;

  @Field(() => String, {nullable: true, description: meta?.busns_busseccat_id_2.desc})
  declare busns_busseccat_id_2?: string;

  @Field(() => String, {nullable: true, description: meta?.busns_busseccat_id_3.desc})
  declare busns_busseccat_id_3?: string;

  @Field(() => String, {nullable: true, description: meta?.busns_busseccat_id_4.desc})
  declare busns_busseccat_id_4?: string;

  @Field(() => String, {nullable: true, description: meta?.busns_busseccat_id_5.desc})
  declare busns_busseccat_id_5?: string;

  @Field(() => String, {nullable: true, description: meta?.busns_busseccat_id_6.desc})
  declare busns_busseccat_id_6?: string;

  @Field(() => String, {nullable: true, description: meta?.busns_busseccat_id_7.desc})
  declare busns_busseccat_id_7?: string;

  @Field(() => String, {nullable: true, description: meta?.busns_busseccat_id_8.desc})
  declare busns_busseccat_id_8?: string;

  @Field(() => String, {nullable: true, description: meta?.busns_busseccat_id_9.desc})
  declare busns_busseccat_id_9?: string;

  @Field(() => String, {nullable: true, description: meta?.busns_name.desc})
  declare busns_name?: string;

  @Field(() => String, {nullable: true, description: meta?.busns_address.desc})
  declare busns_address?: string;

  @Field(() => String, {nullable: true, description: meta?.busns_country.desc})
  declare busns_country?: string;

  @Field(() => String, {nullable: true, description: meta?.busns_state.desc})
  declare busns_state?: string;

  @Field(() => String, {nullable: true, description: meta?.busns_city.desc})
  declare busns_city?: string;

  @Field(() => String, {nullable: true, description: meta?.busns_zipcode.desc})
  declare busns_zipcode?: string;

  @Field(() => String, {nullable: true, description: meta?.busns_toll_free_number.desc})
  declare busns_toll_free_number?: string;

  @Field(() => String, {nullable: true, description: meta?.busns_mobile.desc})
  declare busns_mobile?: string;

  @Field(() => String, {nullable: true, description: meta?.busns_mobile_cc.desc})
  declare busns_mobile_cc?: string;

  @Field(() => String, {nullable: true, description: meta?.busns_whatsapp.desc})
  declare busns_whatsapp?: string;

  @Field(() => String, {nullable: true, description: meta?.busns_whatsapp_cc.desc})
  declare busns_whatsapp_cc?: string;

  @Field(() => String, {nullable: true, description: meta?.busns_email.desc})
  declare busns_email?: string;

  @Field(() => String, {nullable: true, description: meta?.busns_google_my_business_url.desc})
  declare busns_google_my_business_url?: string;

  @Field(() => String, {nullable: true, description: meta?.busns_google_map_url.desc})
  declare busns_google_map_url?: string;

  @Field(() => String, {nullable: true, description: meta?.busns_google_review_url.desc})
  declare busns_google_review_url?: string;

  @Field(() => String, {nullable: true, description: meta?.busns_location_latitude.desc})
  declare busns_location_latitude?: string;

  @Field(() => String, {nullable: true, description: meta?.busns_location_longitude.desc})
  declare busns_location_longitude?: string;

  @Field(() => String, {nullable: true, description: meta?.busns_website_url.desc})
  declare busns_website_url?: string;

  @Field(() => String, {nullable: true, description: meta?.busns_linkedin_profile.desc})
  declare busns_linkedin_profile?: string;

  @Field(() => String, {nullable: true, description: meta?.busns_facebook_profile.desc})
  declare busns_facebook_profile?: string;

  @Field(() => String, {nullable: true, description: meta?.busns_instagram_profile.desc})
  declare busns_instagram_profile?: string;

  @Field(() => String, {nullable: true, description: meta?.busns_youtube_profile.desc})
  declare busns_youtube_profile?: string;

  @Field(() => String, {nullable: true, description: meta?.busns_x_profile.desc})
  declare busns_x_profile?: string;

  @Field(() => String, {nullable: true, description: meta?.busns_tiktok_profile.desc})
  declare busns_tiktok_profile?: string;

  @Field(() => String, {nullable: true, description: meta?.busns_pinterest_profile.desc})
  declare busns_pinterest_profile?: string;

  @Field(() => DateTime, {nullable: true, description: meta?.busns_registered.desc})
  declare busns_registered?: Date;

  @Field(() => String, {nullable: true, description: meta?.busns_initial_findings.desc})
  declare busns_initial_findings?: string;

  @Field(() => String, {nullable: true, description: meta?.busns_competitor_findings.desc})
  declare busns_competitor_findings?: string;

  @Field(() => String, {nullable: true, description: meta?.lead_ref_type.desc})
  declare lead_ref_type?: string;

  @Field(() => Int, {nullable: true, description: meta?.lead_ref_id.desc})
  declare lead_ref_id?: number;

  @Field(() => String, {nullable: true, description: meta?.lead_preferred_contact_method.desc})
  declare lead_preferred_contact_method?: string;

  @Field(() => String, {nullable: true, description: meta?.lead_concern_issue.desc})
  declare lead_concern_issue?: string;

  @Field(() => String, {nullable: true, description: meta?.lead_subject.desc})
  declare lead_subject?: string;

  @Field(() => String, {nullable: true, description: meta?.lead_comment.desc})
  declare lead_comment?: string;

  @Field(() => String, {nullable: true, description: meta?.lead_initial_findings.desc})
  declare lead_initial_findings?: string;

  @Field(() => DateTime, {nullable: true, description: meta?.lead_first_incoming_message_dt.desc})
  declare lead_first_incoming_message_dt?: Date;

  @Field(() => DateTime, {nullable: true, description: meta?.lead_created.desc})
  declare lead_created?: Date;

  @Field(() => DateTime, {nullable: true, description: meta?.lead_updated.desc})
  declare lead_updated?: Date;

  @Field(() => LeadDetermineAsEnum, {nullable: true, description: meta?.lead_determined_as.desc})
  declare lead_determined_as?: string;

  @Field(() => DateTime, {nullable: true, description: meta?.crawler_updated.desc})
  declare crawler_updated?: Date;

  @Field(() => String, {nullable: false, description: meta?.crawler_stage.desc})
  declare crawler_stage: string;

}

// ████ CREATE OUTPUT DTO ████████████████████████████████████████████████

@ObjectType()
@Directive('@shareable')
export class CrawlerLeadCreateOutputDto extends CrawlerLeadFindOutputRowsDto implements CreateOutputCRUDTypeDefinition {
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


export class CrawlerLeadUpdateDto extends CrawlerLeadDto implements UpdateDtoCRUDTypeDefinition{
    static metaname: string = `${CrawlerLeadEntity.metaname}${UpdateArtefact}`;
    static metadesc: string = CrudDefMetaDesc.update_metadesc;
}

// ████ UPDATE INPUT DTO ████████████████████████████████████████████████

@InputType()
export class CrawlerLeadUpdateInputWhereDto extends CrawlerLeadFindInputWhereDto implements UpdateInputWhereCRUDTypeDefinition{
    /**
     * avoiding redundant code
     * considering whatever FindInputWhere ask for input, same apply to UpdateInputWhere so extending class
     * just add what is new or different for UpdateInputWhere, that means it's 100% customisable
     * you can also remove extends *FindInputWhere and define entire custom dto here if needed 
     **/
}

@InputType()
export class CrawlerLeadUpdateInputSetsDto extends PartialType(CrawlerLeadCreateInputDto) implements UpdateInputSetsCRUDTypeDefinition {
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
export class CrawlerLeadUpdateInputDto implements UpdateInputCRUDTypeDefinition{
    // input layout design for users to perform update with various database options
  
    /**
     * Conditions to be met for the resulting set.
     * also validate the user pass only 1 operator to search for field
     */
    @Field(() => [CrawlerLeadUpdateInputWhereDto], { nullable: false, description: CrudDefMetaDesc.update_where })
    @IsNotEmpty()
    @Validate(OnlyOneSeachOperatorAllowed)
    where!: FindOptionsWhere<CrawlerLeadUpdateInputWhereDto>[];

    /**
     * What to set for update
     * basically fields list of update
     */
    @Field(() => CrawlerLeadUpdateInputSetsDto, { nullable: false, description: CrudDefMetaDesc.update_sets })
    @IsNotEmpty()
    sets!: CrawlerLeadUpdateInputSetsDto

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
export class CrawlerLeadUpdateOutputAffectedRowsDto extends CrawlerLeadFindOutputRowsDto implements UpdateOutputAffectedRowsCRUDTypeDefinition{
    /**
     * avoiding redundant code
     * considering whatever FindOutputRows return, same apply to UpdateOutputAffectedRows so extending class
     * just add what is new or different for UpdateOutputAffectedRows, that means it's 100% customisable
     * you can also remove extends *FindOutputRows and define entire custom dto here if needed 
     **/
}

@ObjectType()
@Directive('@shareable')
export class CrawlerLeadUpdateOutputDto extends CrudAffectedDto implements UpdateOutputCRUDTypeDefinition{
  @Field(() => [CrawlerLeadEntity], {description: CrudDefMetaDesc.update_affected_rows}) 
  declare affectedRows?: CrawlerLeadEntity[] | any; 
}


/**
 * █████████████████████████████████████████████████████████████
 * █ SOFT DELETE DTO ███████████████████████████████████████████
 * █████████████████████████████████████████████████████████████
**/
// this operation run directly withouth checking the data if exist or not, so it's quick but do not provide more information about operation

// ████ SOFT DELETE INPUT DTO ████████████████████████████████████████████████
export class CrawlerLeadSoftDeleteDto extends CrawlerLeadEntity implements SoftDeleteDtoCRUDTypeDefinition{
  static metaname: string = `${CrawlerLeadEntity.metaname}${SoftDeleteArtefact}`;
  static metadesc: string = CrudDefMetaDesc.softDelete_metadesc;
}

@InputType()
export class CrawlerLeadSoftDeleteInputWhereDto extends CrawlerLeadFindInputWhereDto implements SoftDeleteInputWhereCRUDTypeDefinition{
  /**
   * avoiding redundant code
   * considering whatever FindInputWhere ask for input, same apply to SoftDeleteInputWhere so extending class
   * just add what is new or different for SoftDeleteInputWhere, that means it's 100% customisable
   * you can also remove extends *FindInputWhere and define entire custom dto here if needed 
   **/
}

@InputType()
export class CrawlerLeadSoftDeleteInputDto implements SoftDeleteInputCRUDTypeDefinition{
  @Field(() => [CrawlerLeadSoftDeleteInputWhereDto], {nullable: true, description: CrudDefMetaDesc.softDelete_where})
  @Validate(OnlyOneSeachOperatorAllowed)
  where?: FindOptionsWhere<CrawlerLeadSoftDeleteInputWhereDto>[];
}


// ████ SOFT DELETE OUTPUT DTO ████████████████████████████████████████████████

@ObjectType()
@Directive('@shareable')
export class CrawlerLeadSoftDeleteOutputDto extends CrudAffectedDto implements SoftDeleteOutputCRUDTypeDefinition{
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

export class CrawlerLeadDeleteDto extends CrawlerLeadEntity implements DeleteDtoCRUDTypeDefinition{
  static metaname: string = `${CrawlerLeadEntity.metaname}${DeleteArtefact}`;
  static metadesc: string = CrudDefMetaDesc.delete_metadesc;
}

// ████ DELETE INPUT DTO ████████████████████████████████████████████████

@InputType()
export class CrawlerLeadDeleteInputWhereDto extends CrawlerLeadFindInputWhereDto implements DeleteInputWhereCRUDTypeDefinition{
  /**
   * avoiding redundant code
   * considering whatever FindInputWhere ask for input, same apply to SoftDeleteInputWhere so extending class
   * just add what is new or different for SoftDeleteInputWhere, that means it's 100% customisable
   * you can also remove extends *FindInputWhere and define entire custom dto here if needed 
   **/
}

@InputType()
export class CrawlerLeadDeleteInputDto implements DeleteInputCRUDTypeDefinition{
  @Field(() => [CrawlerLeadDeleteInputWhereDto], {nullable: true, description: CrudDefMetaDesc.delete_where})
  @Validate(OnlyOneSeachOperatorAllowed)
  where?: FindOptionsWhere<CrawlerLeadDeleteInputWhereDto>[];
}


// ████ DELETE OUTPUT DTO ████████████████████████████████████████████████

@ObjectType()
@Directive('@shareable')
export class CrawlerLeadDeleteOutputDto extends CrudAffectedDto implements DeleteOutputCRUDTypeDefinition{
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

export class CrawlerLeadRestoreDto extends CrawlerLeadEntity implements RestoreDtoCRUDTypeDefinition{
    static metaname: string = `${CrawlerLeadEntity.metaname}${RestoreArtefact}`;
    static metadesc: string = CrudDefMetaDesc.restore_metadesc;
}

// ████ RESTORE INPUT DTO ██████████████████████████████████████████████████████

@InputType()
export class CrawlerLeadRestoreInputWhereDto extends CrawlerLeadFindInputWhereDto implements RestoreInputWhereCRUDTypeDefinition{
  /**
   * avoiding redundant code
   * considering whatever FindInputWhere ask for input, same apply to SoftDeleteInputWhere so extending class
   * just add what is new or different for SoftDeleteInputWhere, that means it's 100% customisable
   * you can also remove extends *FindInputWhere and define entire custom dto here if needed 
   **/
}

@InputType()
export class CrawlerLeadRestoreInputDto implements RestoreInputCRUDTypeDefinition{
  @Field(() => [CrawlerLeadRestoreInputWhereDto], {nullable: true, description: CrudDefMetaDesc.restore_where})
  @Validate(OnlyOneSeachOperatorAllowed)
  where?: FindOptionsWhere<CrawlerLeadRestoreInputWhereDto>[];
}
  
// ████ RESTORE OUTPUT DTO ██████████████████████████████████████████████████████
  
@ObjectType()
@Directive('@shareable')
export class CrawlerLeadRestoreOutputDto extends CrudAffectedDto implements RestoreOutputCRUDTypeDefinition{
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

export class CrawlerLeadUpsertDto extends CrawlerLeadEntity implements UpsertDtoCRUDTypeDefinition{
  static metaname: string = `${CrawlerLeadEntity.metaname}${UpsertArtefact}`;
  static metadesc: string = CrudDefMetaDesc.upsert_metadesc;
}

// ████ UPSERT INPUT DTO ██████████████████████████████████████████████████████

@InputType()
export class CrawlerLeadUpsertInputDto extends CrawlerLeadCreateInputDto implements UpsertInputCRUDTypeDefinition{
    @Field(() => Int, {nullable: true, description: `${meta?.lead_id.desc} ${meta?.lead_id.validation.isOptional}`})
    @IsOptional({message: `${meta?.lead_id.validation.isOptional}`})
    declare lead_id?: number;

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
    static conflictResolveFields: (keyof CrawlerLeadUpsertInputDto)[] = ['u_primary_email', 'u_primary_mobile', 'ucorp_email', 'ucorp_mobile', 'busns_mobile', 'busns_email']; 
}

// ████ UPSERT OUTPUT DTO ██████████████████████████████████████████████████████

@ObjectType()
@Directive('@shareable')
export class CrawlerLeadUpsertOutputDto extends IntersectionType(CrawlerLeadCreateOutputDto, UpsertOutputProcessStatusDto) implements UpsertOutputCRUDTypeDefinition{ 
 
}

/**
 * █████████████████████████████████████████████████████████████
 * █ SOFT REMOVE DTO ███████████████████████████████████████████
 * █████████████████████████████████████████████████████████████
**/
// unlike soft delete, this operation first get the data from database and after run the operation, so it's complex but provide more and clear information about operation

// ████ SOFT REMOVE INPUT DTO ████████████████████████████████████████████████
export class CrawlerLeadSoftRemoveDto extends CrawlerLeadEntity implements SoftRemoveDtoCRUDTypeDefinition{
  static metaname: string = `${CrawlerLeadEntity.metaname}${SoftRemoveArtefact}`;
  static metadesc: string = CrudDefMetaDesc.softRemove_metadesc;
}

@InputType()
export class CrawlerLeadSoftRemoveInputWhereDto extends CrawlerLeadFindInputWhereDto implements SoftRemoveInputWhereCRUDTypeDefinition{
  /**
   * avoiding redundant code
   * considering whatever FindInputWhere ask for input, same apply to SoftRemoveInputWhere so extending class
   * just add what is new or different for SoftRemoveInputWhere, that means it's 100% customisable
   * you can also remove extends *FindInputWhere and define entire custom dto here if needed 
   **/
}

@InputType()
export class CrawlerLeadSoftRemoveInputDto implements SoftRemoveInputCRUDTypeDefinition{
  @Field(() => [CrawlerLeadSoftRemoveInputWhereDto], {nullable: true, description: CrudDefMetaDesc.softRemove_where})
  @Validate(OnlyOneSeachOperatorAllowed)
  where?: FindOptionsWhere<CrawlerLeadSoftRemoveInputWhereDto>[];
}


// ████ SOFT REMOVE OUTPUT DTO ████████████████████████████████████████████████

@ObjectType()
@Directive('@shareable')
export class CrawlerLeadSoftRemoveOutputAffectedRowsDto extends CrawlerLeadFindOutputRowsDto implements SoftRemoveOutputAffectedRowsCRUDTypeDefinition{
  /**
   * avoiding redundant code
   * considering whatever FindOutputRows return, same apply to SoftRemoveOutputAffectedRows so extending class
   * just add what is new or different for SoftRemoveOutputAffectedRows, that means it's 100% customisable
   * you can also remove extends FindOutputRows and define entire custom dto here if needed 
   **/
}
@ObjectType()
@Directive('@shareable')
export class CrawlerLeadSoftRemoveOutputDto extends CrudAffectedDto implements SoftRemoveOutputCRUDTypeDefinition{
  /**
   * avoiding redundant code
   * considering whatever AffectedDto return, same apply to SoftRemoveOutput so extending class
   * just add what is new or different for SoftRemoveOutput, that means it's 100% customisable
   * you can also remove extends AffectedDto and define entire custom dto here if needed 
   **/

  @Field(() => [CrawlerLeadEntity]) 
  declare affectedRows?: CrawlerLeadEntity[] | any
}

/**
 * █████████████████████████████████████████████████████████████
 * █ REMOVE DTO ████████████████████████████████████████████████
 * █████████████████████████████████████████████████████████████
**/
// unlike soft delete, this operation first get the data from database and after run the operation, so it's complex but provide more and clear information about operation

export class CrawlerLeadRemoveDto extends CrawlerLeadEntity implements RemoveDtoCRUDTypeDefinition{
  static metaname: string = `${CrawlerLeadEntity.metaname}${RemoveArtefact}`;
  static metadesc: string = CrudDefMetaDesc.remove_metadesc;
}

// ████ REMOVE INPUT DTO ████████████████████████████████████████████████

@InputType()
export class CrawlerLeadRemoveInputWhereDto extends CrawlerLeadFindInputWhereDto implements RemoveInputWhereCRUDTypeDefinition{
  /**
   * avoiding redundant code
   * considering whatever FindInputWhere ask for input, same apply to SoftRemoveInputWhere so extending class
   * just add what is new or different for SoftRemoveInputWhere, that means it's 100% customisable
   * you can also remove extends *FindInputWhere and define entire custom dto here if needed 
   **/
}

@InputType()
export class CrawlerLeadRemoveInputDto implements RemoveInputCRUDTypeDefinition{
  @Field(() => [CrawlerLeadRemoveInputWhereDto], {nullable: true, description: CrudDefMetaDesc.remove_where})
  @Validate(OnlyOneSeachOperatorAllowed)
  where?: FindOptionsWhere<CrawlerLeadRemoveInputWhereDto>[];
}

// ████ REMOVE OUTPUT DTO ████████████████████████████████████████████████

@ObjectType()
@Directive('@shareable')
export class CrawlerLeadRemoveOutputAffectedRowsDto extends CrawlerLeadFindOutputRowsDto implements RemoveOutputAffectedRowsCRUDTypeDefinition{
  /**
   * avoiding redundant code
   * considering whatever FindOutputRows return, same apply to RemoveOutputAffectedRows so extending class
   * just add what is new or different for RemoveOutputAffectedRows, that means it's 100% customisable
   * you can also remove extends FindOutputRows and define entire custom dto here if needed 
   **/
}
@ObjectType()
@Directive('@shareable')
export class CrawlerLeadRemoveOutputDto extends CrudAffectedDto implements RemoveOutputCRUDTypeDefinition{
  /**
   * avoiding redundant code
   * considering whatever AffectedDto return, same apply to RemoveOutput so extending class
   * just add what is new or different for RemoveOutput, that means it's 100% customisable
   * you can also remove extends AffectedDto and define entire custom dto here if needed 
   **/

  @Field(() => [CrawlerLeadEntity]) 
  declare affectedRows?: CrawlerLeadEntity[] | any;
}

/**
 * █████████████████████████████████████████████████████████████
 * █ RECOVER DTO ████████████████████████████████████████████████
 * █████████████████████████████████████████████████████████████
**/
// unlike soft delete, this operation first get the data from database and after run the operation, so it's complex but provide more and clear information about operation

export class CrawlerLeadRecoverDto extends CrawlerLeadEntity implements RecoverDtoCRUDTypeDefinition{
  static metaname: string = `${CrawlerLeadEntity.metaname}${RecoverArtefact}`;
  static metadesc: string = CrudDefMetaDesc.recover_metadesc;
}

// ████ RECOVER INPUT DTO ██████████████████████████████████████████████████████

@InputType()
export class CrawlerLeadRecoverInputWhereDto extends CrawlerLeadFindInputWhereDto implements RecoverInputWhereCRUDTypeDefinition{
/**
 * avoiding redundant code
 * considering whatever FindInputWhere ask for input, same apply to SoftDeleteInputWhere so extending class
 * just add what is new or different for SoftDeleteInputWhere, that means it's 100% customisable
 * you can also remove extends *FindInputWhere and define entire custom dto here if needed 
 **/
}

@InputType()
export class CrawlerLeadRecoverInputDto implements RecoverInputCRUDTypeDefinition{
  @Field(() => [CrawlerLeadRecoverInputWhereDto], {nullable: true, description: CrudDefMetaDesc.recover_where})
  @Validate(OnlyOneSeachOperatorAllowed)
  where?: FindOptionsWhere<CrawlerLeadRecoverInputWhereDto>[];
}

// ████ RECOVER OUTPUT DTO ██████████████████████████████████████████████████████

@ObjectType()
@Directive('@shareable')
export class CrawlerLeadRecoverOutputAffectedRowsDto extends CrawlerLeadFindOutputRowsDto implements RecoverOutputAffectedRowsCRUDTypeDefinition{
  /**
   * avoiding redundant code
   * considering whatever FindOutputRows return, same apply to RecoverOutputAffectedRows so extending class
   * just add what is new or different for RecoverOutputAffectedRows, that means it's 100% customisable
   * you can also remove extends FindOutputRows and define entire custom dto here if needed 
   **/
}

@ObjectType()
@Directive('@shareable')
export class CrawlerLeadRecoverOutputDto extends CrudAffectedDto implements RecoverOutputCRUDTypeDefinition{
  /**
   * avoiding redundant code
   * considering whatever AffectedDto return, same apply to RecoverOutput so extending class
   * just add what is new or different for RecoverOutput, that means it's 100% customisable
   * you can also remove extends AffectedDto and define entire custom dto here if needed 
   **/

  @Field(() => [CrawlerLeadEntity]) 
  declare affectedRows?: CrawlerLeadEntity[] | any;
}

/**
 * █████████████████████████████████████████████████████████████
 * █ UPLOAD DTO ████████████████████████████████████████████████
 * █████████████████████████████████████████████████████████████
**/

export class CrawlerLeadUploadDto extends CrawlerLeadEntity implements UploadDtoCRUDTypeDefinition {
  static metaname: string = `${CrawlerLeadEntity?.metaname}${UploadArtefact}`;
  static metadesc: string = CrudDefMetaDesc.upload_metadesc;
}

// ████ UPLOAD REF TYPE DTO ████████████████████████████████████████████████

@InputType()
export class UploadFileFieldInputDto {
@Field(() => CrawlerLeadUploadFileFieldEnum, {nullable: false, description: CrudDefMetaDesc.upload_file_field})
@IsNotEmpty()
file_field!: CrawlerLeadUploadFileFieldEnum;
}

@ObjectType()
@Directive('@shareable')
export class UploadFileFieldOutputDto extends PartialType(UploadFileFieldInputDto) {

}

// ████ UPLOAD INPUT DTO ████████████████████████████████████████████████
@InputType()
export class CrawlerLeadUploadInputDto extends IntersectionType(UploadFileFieldInputDto, UploadInputDto) implements UploadInputArtefactCRUDTypeDefinition {

}

// ████ UPLOAD OUTPUT DTO ███████████████████████████████████████████████
@ObjectType()
@Directive('@shareable')
export class CrawlerLeadUploadOutputDto extends IntersectionType(UploadFileFieldOutputDto, UploadOutputDto) implements UploadOutputArtefactCRUDTypeDefinition {

}

/**
* █████████████████████████████████████████████████████████████
* █ UPLOAD DELETE DTO █████████████████████████████████████████
* █████████████████████████████████████████████████████████████
**/

export class CrawlerLeadUploadDeleteDto extends CrawlerLeadEntity implements UploadDeleteDtoCRUDTypeDefinition {
static metaname: string = `${CrawlerLeadEntity?.metaname}${UploadDeleteArtefact}`;
static metadesc: string = CrudDefMetaDesc.upload_delete_metadesc;
}

// ████ UPLOAD DELETE INPUT DTO ████████████████████████████████████████████████
@InputType()
export class CrawlerLeadUploadDeleteInputDto extends IntersectionType(UploadFileFieldInputDto, UploadDeleteInputDto) implements UploadDeleteInputArtefactCRUDTypeDefinition {

}

// ████ UPLOAD DELETE OUTPUT DTO ███████████████████████████████████████████████
@ObjectType()
@Directive('@shareable')
export class CrawlerLeadUploadDeleteOutputDto extends IntersectionType(UploadFileFieldOutputDto, UploadDeleteOutputDto) implements UploadDeleteOutputArtefactCRUDTypeDefinition {

}