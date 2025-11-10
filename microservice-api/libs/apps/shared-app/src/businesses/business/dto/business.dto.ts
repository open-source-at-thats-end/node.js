import { UploadDeleteInputDto, UploadDeleteOutputDto, UploadInputDto, UploadOutputDto, UploadArtefact, UploadDtoCRUDTypeDefinition, UploadInputArtefactCRUDTypeDefinition, UploadOutputArtefactCRUDTypeDefinition, UploadDeleteArtefact, UploadDeleteDtoCRUDTypeDefinition, UploadDeleteInputArtefactCRUDTypeDefinition, UploadDeleteOutputArtefactCRUDTypeDefinition, CreateArtefact, CreateDtoCRUDTypeDefinition, CreateInputCRUDTypeDefinition, CreateOutputCRUDTypeDefinition, CrudDefMetaDesc, DateTime, DeleteArtefact, DeleteDtoCRUDTypeDefinition, DeleteInputCRUDTypeDefinition, DeleteOutputCRUDTypeDefinition, FindArtefact, FindDtoCRUDTypeDefinition, FindInputGroupByCRUDTypeDefinition, FindInputSortOrderCRUDTypeDefinition, FindInputCRUDTypeDefinition, FindInputWhereCRUDTypeDefinition, FindOneByIdArtefact, FindOperatorDto, FindOutputPaginationDto, FindOutputCRUDTypeDefinition, OnlyOneSeachOperatorAllowed, RecordSortDirectionEnum, RestoreArtefact, RestoreDtoCRUDTypeDefinition, RestoreInputCRUDTypeDefinition, SoftDeleteArtefact, SoftDeleteDtoCRUDTypeDefinition, SoftDeleteInputCRUDTypeDefinition, SoftDeleteOutputCRUDTypeDefinition, UpdateArtefact, UpdateDtoCRUDTypeDefinition, UpdateInputSetsCRUDTypeDefinition, UpdateInputCRUDTypeDefinition, UpdateInputWhereCRUDTypeDefinition, UpdateOutputCRUDTypeDefinition, SoftDeleteInputWhereCRUDTypeDefinition, RestoreInputWhereCRUDTypeDefinition, RestoreOutputCRUDTypeDefinition, UpsertDtoCRUDTypeDefinition, UpsertArtefact, UpsertInputCRUDTypeDefinition, UpsertOutputCRUDTypeDefinition, UpsertStatusEnum, SoftRemoveDtoCRUDTypeDefinition, SoftRemoveArtefact, SoftRemoveInputWhereCRUDTypeDefinition, SoftRemoveInputCRUDTypeDefinition, SoftRemoveOutputCRUDTypeDefinition, RemoveDtoCRUDTypeDefinition, RemoveArtefact, RemoveInputCRUDTypeDefinition, RemoveOutputCRUDTypeDefinition, SoftRemoveOutputAffectedRowsCRUDTypeDefinition, FindOutputRowsCRUDTypeDefinition, UpdateOutputAffectedRowsCRUDTypeDefinition, RemoveOutputAffectedRowsCRUDTypeDefinition, RecoverDtoCRUDTypeDefinition, RecoverArtefact, RecoverInputCRUDTypeDefinition, RecoverOutputCRUDTypeDefinition, RecoverInputWhereCRUDTypeDefinition, RecoverOutputAffectedRowsCRUDTypeDefinition, FindInputDtoCRUDTypeDefinition, FindOneByIdInputCRUDTypeDefinition, FindInputPaginationOptionsDto, FindOutputPaginationOptionsDto, IdInputDto, DeleteInputWhereCRUDTypeDefinition, RemoveInputWhereCRUDTypeDefinition, WithDeletedInputDto } from "@libs/library-app";
import { BusinessEntityMeta as meta, BusinessEntity } from "../entities/business.entity";
import { Directive, Field, Float, InputType, Int, IntersectionType, ObjectType, PartialType } from "@nestjs/graphql";
import { IsNotEmpty, IsNumber, IsOptional, Validate } from "class-validator";
import { FindManyOptions, FindOptionsOrder, FindOptionsWhere } from "typeorm";
import { Exclude } from "class-transformer";
import { IdOrIdsInputDto, CrudAffectedDto, UpsertOutputProcessStatusDto } from "@libs/library-app";
import { BusinessUploadFileFieldEnum } from "../business.enum";
import { BusinessPrimaryCategoryFindInputWhereDto } from "../../primary-category/dto/primary.category.dto";
import { BusinessSecondaryCategoryFindInputWhereDto } from "../../secondary-category/dto/secondary.category.dto";
import { UserFindInputWhereDto } from "apps/shared-app/src/folk/user/dto/user.dto";
import { CityFindInputWhereDto } from "apps/shared-app/src/geo/city/dto/city.dto";
import { StateFindInputWhereDto } from "apps/shared-app/src/geo/state/dto/state.dto";
import { CountryFindInputWhereDto } from "apps/shared-app/src/geo/country/dto/country.dto";
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
export class BusinessDto extends BusinessEntity implements FindInputDtoCRUDTypeDefinition{
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
     declare connsrc_id?: any;
     declare owner_u_id?: any;
     declare file_brand_logo?: any;
     declare buspricat_id?: any;
     declare busseccat_id_1?: any;
     declare busseccat_id_2?: any;
     declare busseccat_id_3?: any;
     declare busseccat_id_4?: any;
     declare busseccat_id_5?: any;
     declare busseccat_id_6?: any;
     declare busseccat_id_7?: any;
     declare busseccat_id_8?: any;
     declare busseccat_id_9?: any;
     declare name?: any;
     declare about?: any;
     declare address?: any;
     declare country_id?: any;
     declare state_id?: any;
     declare city_id?: any;
     declare zipcode?: any;
     declare location_latitude?: any;
     declare location_longitude?: any;
     declare toll_free_number?: any;
     declare mobile?: any;
     declare mobile_cc?: any;
     declare whatsapp?: any;
     declare whatsapp_cc?: any;
     declare email?: any;
     declare fax?: any;
     declare website_url?: any;
     declare facebook_profile?: any;
     declare instagram_profile?: any;
     declare youtube_profile?: any;
     declare x_profile?: any;
     declare linkedin_profile?: any;
     declare tiktok_profile?: any;
     declare pinterest_profile?: any;
     declare google_my_business_url?: any;
     declare google_map_url?: any;
     declare google_review_url?: any;
     declare registered?: any;
     declare initial_findings?: any;
     declare competitor_findings?: any;
     declare created?: any;
     declare updated?: any;
     declare deleted?: any; 
 
     declare fr_owner_user?: any;
     declare fr_connection_source?: any;
     declare fr_primary_categories?: any;
     declare fr_secondary_categories1?: any;
     declare fr_secondary_categories2?: any;
     declare fr_secondary_categories3?: any;
     declare fr_secondary_categories4?: any;
     declare fr_secondary_categories5?: any;
     declare fr_secondary_categories6?: any;
     declare fr_secondary_categories7?: any;
     declare fr_secondary_categories8?: any;
     declare fr_secondary_categories9?: any;
     declare fr_countries?: any;
     declare fr_state?: any;
     declare fr_city?: any;
}

/**
 * █████████████████████████████████████████████████████████████
 * █ FIND DTO ██████████████████████████████████████████████████
 * █████████████████████████████████████████████████████████████
**/
@ObjectType({ isAbstract: true })
@Directive('@shareable')
export class BusinessFindDto extends BusinessEntity implements FindDtoCRUDTypeDefinition{
    static metaname: string = `${BusinessEntity?.metaname}${FindArtefact}`;
    static metadesc: string = CrudDefMetaDesc.find_metadesc;
}


// ████ FIND INPUT DTO ████████████████████████████████████████████████


@InputType()
export class BusinessFindInputWhereDto extends BusinessDto implements FindInputWhereCRUDTypeDefinition{
  @Field(() => FindOperatorDto, {nullable: true, description: meta?.id.desc})
  @IsOptional()
  declare id?: FindOperatorDto; 
  
  @Field(() => FindOperatorDto, {nullable: true, description: meta?.connsrc_id .desc})
  @IsOptional()
  declare connsrc_id ?: FindOperatorDto;

  @Field(() => FindOperatorDto, {nullable: true, description: meta?.owner_u_id.desc})
  @IsOptional()
  declare owner_u_id?: FindOperatorDto;
  
  @Field(() => FindOperatorDto, {nullable: true, description: meta?.buspricat_id.desc})
  @IsOptional()
  declare buspricat_id?: FindOperatorDto;

  @Field(() => FindOperatorDto, {nullable: true, description: meta?.busseccat_id_1.desc})
  @IsOptional()
  declare busseccat_id_1?: FindOperatorDto;

  @Field(() => FindOperatorDto, {nullable: true, description: meta?.busseccat_id_2.desc})
  @IsOptional()
  declare busseccat_id_2?: FindOperatorDto;

  @Field(() => FindOperatorDto, {nullable: true, description: meta?.busseccat_id_3.desc})
  @IsOptional()
  declare busseccat_id_3?: FindOperatorDto;

  @Field(() => FindOperatorDto, {nullable: true, description: meta?.busseccat_id_4.desc})
  @IsOptional()
  declare busseccat_id_4?: FindOperatorDto;

  @Field(() => FindOperatorDto, {nullable: true, description: meta?.busseccat_id_5.desc})
  @IsOptional()
  declare busseccat_id_5?: FindOperatorDto;

  @Field(() => FindOperatorDto, {nullable: true, description: meta?.busseccat_id_6.desc})
  @IsOptional()
  declare busseccat_id_6?: FindOperatorDto;

  @Field(() => FindOperatorDto, {nullable: true, description: meta?.busseccat_id_7.desc})
  @IsOptional()
  declare busseccat_id_7?: FindOperatorDto;

  @Field(() => FindOperatorDto, {nullable: true, description: meta?.busseccat_id_8.desc})
  @IsOptional()
  declare busseccat_id_8?: FindOperatorDto;

  @Field(() => FindOperatorDto, {nullable: true, description: meta?.busseccat_id_9.desc})
  @IsOptional()
  declare busseccat_id_9?: FindOperatorDto;

  @Field(() => FindOperatorDto, {nullable: true, description: meta?.name.desc})
  @IsOptional()
  declare name?: FindOperatorDto;

  @Field(() => FindOperatorDto, {nullable: true, description: meta?.address.desc})
  @IsOptional()
  declare address?: FindOperatorDto;

  @Field(() => FindOperatorDto, {nullable: true, description: meta?.country_id.desc})
  @IsOptional()
  declare country_id?: FindOperatorDto;

  @Field(() => FindOperatorDto, {nullable: true, description: meta?.state_id.desc})
  @IsOptional()
  declare state_id?: FindOperatorDto;

  @Field(() => FindOperatorDto, {nullable: true, description: meta?.city_id.desc})
  @IsOptional()
  declare city_id?: FindOperatorDto;

  @Field(() => FindOperatorDto, {nullable: true, description: meta?.email.desc})
  @IsOptional()
  declare email?: FindOperatorDto;

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

    @Field(() => [ConnectionSourceFindInputWhereDto], {nullable: true, description: meta?.fr_connection_source.desc})
    @IsOptional()
    declare fr_connection_source?: ConnectionSourceFindInputWhereDto[];

    @Field(() => [UserFindInputWhereDto], {nullable: true, description: meta?.fr_owner_user.desc})
    @IsOptional()
    declare fr_owner_user?: UserFindInputWhereDto[];

    @Field(() => [BusinessPrimaryCategoryFindInputWhereDto], {nullable: true, description: meta?.fr_primary_categories.desc})
    @IsOptional()
    declare fr_primary_categories?: BusinessPrimaryCategoryFindInputWhereDto[];

    @Field(() => [BusinessSecondaryCategoryFindInputWhereDto], {nullable: true, description: meta?.fr_secondary_categories1.desc})
    @IsOptional()
    declare fr_secondary_categories1?: BusinessSecondaryCategoryFindInputWhereDto[];

    @Field(() => [BusinessSecondaryCategoryFindInputWhereDto], {nullable: true, description: meta?.fr_secondary_categories2.desc})
    @IsOptional()
    declare fr_secondary_categories2?: BusinessSecondaryCategoryFindInputWhereDto[];

    @Field(() => [BusinessSecondaryCategoryFindInputWhereDto], {nullable: true, description: meta?.fr_secondary_categories3.desc})
    @IsOptional()
    declare fr_secondary_categories3?: BusinessSecondaryCategoryFindInputWhereDto[];

    @Field(() => [BusinessSecondaryCategoryFindInputWhereDto], {nullable: true, description: meta?.fr_secondary_categories4.desc})
    @IsOptional()
    declare fr_secondary_categories4?: BusinessSecondaryCategoryFindInputWhereDto[];

    @Field(() => [BusinessSecondaryCategoryFindInputWhereDto], {nullable: true, description: meta?.fr_secondary_categories5.desc})
    @IsOptional()
    declare fr_secondary_categories5?: BusinessSecondaryCategoryFindInputWhereDto[];

    @Field(() => [BusinessSecondaryCategoryFindInputWhereDto], {nullable: true, description: meta?.fr_secondary_categories6.desc})
    @IsOptional()
    declare fr_secondary_categories6?: BusinessSecondaryCategoryFindInputWhereDto[];

    @Field(() => [BusinessSecondaryCategoryFindInputWhereDto], {nullable: true, description: meta?.fr_secondary_categories7.desc})
    @IsOptional()
    declare fr_secondary_categories7?: BusinessSecondaryCategoryFindInputWhereDto[];

    @Field(() => [BusinessSecondaryCategoryFindInputWhereDto], {nullable: true, description: meta?.fr_secondary_categories8.desc})
    @IsOptional()
    declare fr_secondary_categories8?: BusinessSecondaryCategoryFindInputWhereDto[];

    @Field(() => [BusinessSecondaryCategoryFindInputWhereDto], {nullable: true, description: meta?.fr_secondary_categories9.desc})
    @IsOptional()
    declare fr_secondary_categories9?: BusinessSecondaryCategoryFindInputWhereDto[];

    @Field(() => [CountryFindInputWhereDto], {nullable: true, description: meta?.fr_countries.desc})
    @IsOptional()
    declare fr_countries?: CountryFindInputWhereDto[];

    @Field(() => [StateFindInputWhereDto], {nullable: true, description: meta?.fr_state.desc})
    @IsOptional()
    declare fr_state?: StateFindInputWhereDto[];

    @Field(() => [CityFindInputWhereDto], {nullable: true, description: meta?.fr_city.desc})
    @IsOptional()
    declare fr_city?: CityFindInputWhereDto[];
}

@InputType()
export class BusinessFindInputSortOrderDto implements FindOptionsOrder<BusinessDto>, FindInputSortOrderCRUDTypeDefinition{
    
  @Field(() => RecordSortDirectionEnum, { nullable: true }) 
  @IsOptional()
  id?: RecordSortDirectionEnum;

  @Field(() => RecordSortDirectionEnum, { nullable: true })
  @IsOptional()
  connsrc_id?: RecordSortDirectionEnum;

  @Field(() => RecordSortDirectionEnum, { nullable: true })
  @IsOptional()
  owner_u_id?: RecordSortDirectionEnum;

  @Field(() => RecordSortDirectionEnum, { nullable: true })
  @IsOptional()
  buspricat_id?: RecordSortDirectionEnum;

  @Field(() => RecordSortDirectionEnum, { nullable: true })
  @IsOptional()
  name?: RecordSortDirectionEnum;

  @Field(() => RecordSortDirectionEnum, { nullable: true })
  @IsOptional()
  country_id?: RecordSortDirectionEnum;

  @Field(() => RecordSortDirectionEnum, { nullable: true })
  @IsOptional()
  state_id?: RecordSortDirectionEnum;

  @Field(() => RecordSortDirectionEnum, { nullable: true })
  @IsOptional()
  city_id?: RecordSortDirectionEnum;

  @Field(() => RecordSortDirectionEnum, { nullable: true })
  @IsOptional()
  zipcode?: RecordSortDirectionEnum;

  @Field(() => RecordSortDirectionEnum, { nullable: true })
  @IsOptional()
  email?: RecordSortDirectionEnum;

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
export class BusinessFindInputGroupByDto implements FindOptionsOrder<BusinessDto>, FindInputGroupByCRUDTypeDefinition{
    
  @Field(() => Boolean, { nullable: true })
  @IsOptional()
  connsrc_id?: boolean;

  @Field(() => Boolean, { nullable: true })
  @IsOptional()
  owner_u_id?: boolean;

  @Field(() => Boolean, { nullable: true })
  @IsOptional()
  buspricat_id?: boolean;

  @Field(() => Boolean, { nullable: true })
  @IsOptional()
  name?: boolean;

  @Field(() => Boolean, { nullable: true })
  @IsOptional()
  country_id?: boolean;

  @Field(() => Boolean, { nullable: true })
  @IsOptional()
  state_id?: boolean;

  @Field(() => Boolean, { nullable: true })
  @IsOptional()
  city_id?: boolean;

  @Field(() => Boolean, { nullable: true })
  @IsOptional()
  zipcode?: boolean;

  @Field(() => Boolean, { nullable: true })
  @IsOptional()
  email?: boolean;

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
export class BusinessFindInputDto extends IntersectionType(FindInputPaginationOptionsDto, WithDeletedInputDto) implements FindManyOptions<BusinessDto>, FindInputCRUDTypeDefinition{
    // input layout design for users to perform find with various database options
  
    /**
     * Conditions to be met for the resulting set.
     * also validate the user pass only 1 operator to search for field
     */
    @Field(() => [BusinessFindInputWhereDto], { nullable: true, description: CrudDefMetaDesc.find_where })
    @IsOptional()
    @Validate(OnlyOneSeachOperatorAllowed)
    declare where?: FindOptionsWhere<BusinessFindInputWhereDto>[];
  
  
    /**
     * Specifies how to group the rows returned by the SELECT statement.
     */
    @Field(() => BusinessFindInputGroupByDto, { nullable: true, description: CrudDefMetaDesc.find_group_by })
    @IsOptional()
    declare groupBy?: BusinessFindInputGroupByDto;
  
    /**
     * Sort the result set by fields using ascending or descending order.
     */
    @Field(() => BusinessFindInputSortOrderDto, { nullable: true, description: CrudDefMetaDesc.find_order })
    @IsOptional()
    declare order?: FindOptionsOrder<BusinessFindInputSortOrderDto>;
}


// ████ FIND OUTPUT DTO ████████████████████████████████████████████████

@ObjectType()
@Directive('@shareable')
export class BusinessFindOutputRowsDto extends BusinessFindDto implements FindOutputRowsCRUDTypeDefinition{
    // this DTO will be used at many palce for output object, os make sure this is properly developed
}

@ObjectType()
@Directive('@shareable')
export class BusinessFindOutputDto extends FindOutputPaginationOptionsDto implements FindOutputCRUDTypeDefinition{
    // output layout design for users to get find response

    // we assign any because iin GRAPHQL for requuest body this rows will have fields with boolean value whether to include in response or not
    // this is very crucial to understand this structure and you need to understand how graphQL works
    @Field(() => [BusinessEntity], {description: CrudDefMetaDesc.find_rows})
    declare rows?: BusinessEntity | BusinessEntity[] | any;
}

/**
 * ██████████████████████████████████████████████████████████████████████████████████████████████████████████████████
 * █ FIND ONE BY ID DTO █████████████████████████████████████████████████████████████████████████████████████████████
 * ██████████████████████████████████████████████████████████████████████████████████████████████████████████████████
**/

export class BusinessFindOneByIdDto extends BusinessEntity implements FindDtoCRUDTypeDefinition{
    static metaname: string = `${BusinessEntity.metaname}${FindOneByIdArtefact}`;
    static metadesc: string = CrudDefMetaDesc.findOneById_metadesc;
}

// ████ FIND ONE BY ID INPUT DTO ████████████████████████████████████████████████

@InputType()
export class BusinessFindOneByIdInputDto extends IntersectionType(IdInputDto, WithDeletedInputDto) implements FindOneByIdInputCRUDTypeDefinition{

}

/**
 * █████████████████████████████████████████████████████████████
 * █ CREATE DTO ████████████████████████████████████████████████
 * █████████████████████████████████████████████████████████████
**/

export class BusinessCreateDto extends BusinessEntity implements CreateDtoCRUDTypeDefinition {
    static metaname: string = `${BusinessEntity.metaname}${CreateArtefact}`;
    static metadesc: string = CrudDefMetaDesc.create_metadesc;
}
// ████ CREATE INPUT DTO ████████████████████████████████████████████████

@InputType()
export class BusinessCreateInputDto extends  BusinessCreateDto implements CreateInputCRUDTypeDefinition {

  @Field(() => Int, {nullable: true, description: meta?.connsrc_id.desc})
  declare connsrc_id?: number;

  @Field(() => Int, {nullable: true, description: meta?.owner_u_id.desc})
  declare owner_u_id?: number;

  @Field(() => String, {nullable: true, description: meta?.file_brand_logo.desc})
  declare file_brand_logo?: string;

  @Field(() => Int, {nullable: false, description: meta?.buspricat_id.desc})
  declare buspricat_id: number;

  @Field(() => Int, {nullable: true, description: meta?.busseccat_id_1.desc})
  declare busseccat_id_1?: number;

  @Field(() => Int, {nullable: true, description: meta?.busseccat_id_2.desc})
  declare busseccat_id_2?: number;

  @Field(() => Int, {nullable: true, description: meta?.busseccat_id_3.desc})
  declare busseccat_id_3?: number;

  @Field(() => Int, {nullable: true, description: meta?.busseccat_id_4.desc})
  declare busseccat_id_4?: number;

  @Field(() => Int, {nullable: true, description: meta?.busseccat_id_5.desc})
  declare busseccat_id_5?: number;

  @Field(() => Int, {nullable: true, description: meta?.busseccat_id_6.desc})
  declare busseccat_id_6?: number;

  @Field(() => Int, {nullable: true, description: meta?.busseccat_id_7.desc})
  declare busseccat_id_7?: number;

  @Field(() => Int, {nullable: true, description: meta?.busseccat_id_8.desc})
  declare busseccat_id_8?: number;

  @Field(() => Int, {nullable: true, description: meta?.busseccat_id_9.desc})
  declare busseccat_id_9?: number;

  @Field(() => String, {nullable: true, description: meta?.name.desc})
  declare name?: string;
  
  @Field(() => String, {nullable: true, description: meta?.about.desc})
  declare about?: string;
  
  @Field(() => String, {nullable: true, description: meta?.address.desc})
  declare address?: string;

  @Field(() => Int, {nullable: true, description: meta?.country_id.desc})
  declare country_id?: number;

  @Field(() => Int, {nullable: true, description: meta?.state_id.desc})
  declare state_id?: number;

  @Field(() => Int, {nullable: true, description: meta?.city_id.desc})
  declare city_id?: number;

  @Field(() => String, {nullable: true, description: meta?.zipcode.desc})
  declare zipcode?: string;

  @Field(() => Float, {nullable: true, description: meta?.location_latitude.desc})
  declare location_latitude?: number;

  @Field(() => Float, {nullable: true, description: meta?.location_longitude.desc})
  declare location_longitude?: number;

  @Field(() => String, {nullable: true, description: meta?.toll_free_number.desc})
  declare toll_free_number?: string;

  @Field(() => String, {nullable: true, description: meta?.mobile.desc})
  declare mobile?: string;

  @Field(() => String, {nullable: true, description: meta?.mobile_cc.desc})
  declare mobile_cc?: string;

  @Field(() => String, {nullable: true, description: meta?.whatsapp.desc})
  declare whatsapp?: string;

  @Field(() => String, {nullable: true, description: meta?.whatsapp_cc.desc})
  declare whatsapp_cc?: string;

  @Field(() => String, {nullable: true, description: meta?.email.desc})
  declare email?: string;

  @Field(() => String, {nullable: true, description: meta?.fax.desc})
  declare fax?: string;

  @Field(() => String, {nullable: true, description: meta?.website_url.desc})
  declare website_url ?: string;

  @Field(() => String, {nullable: true, description: meta?.facebook_profile.desc})
  declare facebook_profile?: string;

  @Field(() => String, {nullable: true, description: meta?.instagram_profile.desc})
  declare instagram_profile?: string;

  @Field(() => String, {nullable: true, description: meta?.youtube_profile.desc})
  declare youtube_profile?: string;

  @Field(() => String, {nullable: true, description: meta?.x_profile.desc})
  declare x_profile?: string;

  @Field(() => String, {nullable: true, description: meta?.linkedin_profile.desc})
  declare linkedin_profile?: string;

  @Field(() => String, {nullable: true, description: meta?.tiktok_profile.desc})
  declare tiktok_profile?: string;

  @Field(() => String, {nullable: true, description: meta?.pinterest_profile.desc})
  declare pinterest_profile?: string;

  @Field(() => String, {nullable: true, description: meta?.google_my_business_url.desc})
  declare google_my_business_url ?: string;

  @Field(() => String, {nullable: true, description: meta?.google_map_url.desc})
  declare google_map_url?: string;

  @Field(() => String, {nullable: true, description: meta?.google_review_url.desc})
  declare google_review_url?: string;

  @Field(() => DateTime, {nullable: true, description: meta?.registered.desc})
  declare registered?: Date;

  @Field(() => String, {nullable: true, description: meta?.initial_findings.desc})
  declare initial_findings ?: string;

  @Field(() => String, {nullable: true, description: meta?.competitor_findings.desc})
  declare competitor_findings ?: string;
}

// ████ CREATE OUTPUT DTO ████████████████████████████████████████████████

@ObjectType()
@Directive('@shareable')
export class BusinessCreateOutputDto extends BusinessFindOutputRowsDto implements CreateOutputCRUDTypeDefinition {
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


export class BusinessUpdateDto extends BusinessDto implements UpdateDtoCRUDTypeDefinition{
    static metaname: string = `${BusinessEntity.metaname}${UpdateArtefact}`;
    static metadesc: string = CrudDefMetaDesc.update_metadesc;
}

// ████ UPDATE INPUT DTO ████████████████████████████████████████████████

@InputType()
export class BusinessUpdateInputWhereDto extends BusinessFindInputWhereDto implements UpdateInputWhereCRUDTypeDefinition{
    /**
     * avoiding redundant code
     * considering whatever FindInputWhere ask for input, same apply to UpdateInputWhere so extending class
     * just add what is new or different for UpdateInputWhere, that means it's 100% customisable
     * you can also remove extends *FindInputWhere and define entire custom dto here if needed 
     **/
}

@InputType()
export class BusinessUpdateInputSetsDto extends PartialType(BusinessCreateInputDto) implements UpdateInputSetsCRUDTypeDefinition {
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
export class BusinessUpdateInputDto implements UpdateInputCRUDTypeDefinition{
    // input layout design for users to perform update with various database options
  
    /**
     * Conditions to be met for the resulting set.
     * also validate the user pass only 1 operator to search for field
     */
    @Field(() => [BusinessUpdateInputWhereDto], { nullable: false, description: CrudDefMetaDesc.update_where })
    @IsNotEmpty()
    @Validate(OnlyOneSeachOperatorAllowed)
    where!: FindOptionsWhere<BusinessUpdateInputWhereDto>[];

    /**
     * What to set for update
     * basically fields list of update
     */
    @Field(() => BusinessUpdateInputSetsDto, { nullable: false, description: CrudDefMetaDesc.update_sets })
    @IsNotEmpty()
    sets!: BusinessUpdateInputSetsDto

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
export class BusinessUpdateOutputAffectedRowsDto extends BusinessFindOutputRowsDto implements UpdateOutputAffectedRowsCRUDTypeDefinition{
    /**
     * avoiding redundant code
     * considering whatever FindOutputRows return, same apply to UpdateOutputAffectedRows so extending class
     * just add what is new or different for UpdateOutputAffectedRows, that means it's 100% customisable
     * you can also remove extends *FindOutputRows and define entire custom dto here if needed 
     **/
}

@ObjectType()
@Directive('@shareable')
export class BusinessUpdateOutputDto extends CrudAffectedDto implements UpdateOutputCRUDTypeDefinition{
  @Field(() => [BusinessEntity], {description: CrudDefMetaDesc.update_affected_rows}) 
  declare affectedRows?: BusinessEntity[] | any; 
}


/**
 * █████████████████████████████████████████████████████████████
 * █ SOFT DELETE DTO ███████████████████████████████████████████
 * █████████████████████████████████████████████████████████████
**/
// this operation run directly withouth checking the data if exist or not, so it's quick but do not provide more information about operation

// ████ SOFT DELETE INPUT DTO ████████████████████████████████████████████████
export class BusinessSoftDeleteDto extends BusinessEntity implements SoftDeleteDtoCRUDTypeDefinition{
  static metaname: string = `${BusinessEntity.metaname}${SoftDeleteArtefact}`;
  static metadesc: string = CrudDefMetaDesc.softDelete_metadesc;
}

@InputType()
export class BusinessSoftDeleteInputWhereDto extends BusinessFindInputWhereDto implements SoftDeleteInputWhereCRUDTypeDefinition{
  /**
   * avoiding redundant code
   * considering whatever FindInputWhere ask for input, same apply to SoftDeleteInputWhere so extending class
   * just add what is new or different for SoftDeleteInputWhere, that means it's 100% customisable
   * you can also remove extends *FindInputWhere and define entire custom dto here if needed 
   **/
}

@InputType()
export class BusinessSoftDeleteInputDto implements SoftDeleteInputCRUDTypeDefinition{
  @Field(() => [BusinessSoftDeleteInputWhereDto], {nullable: true, description: CrudDefMetaDesc.softDelete_where})
  @Validate(OnlyOneSeachOperatorAllowed)
  where?: FindOptionsWhere<BusinessSoftDeleteInputWhereDto>[];
}


// ████ SOFT DELETE OUTPUT DTO ████████████████████████████████████████████████

@ObjectType()
@Directive('@shareable')
export class BusinessSoftDeleteOutputDto extends CrudAffectedDto implements SoftDeleteOutputCRUDTypeDefinition{
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

export class BusinessDeleteDto extends BusinessEntity implements DeleteDtoCRUDTypeDefinition{
  static metaname: string = `${BusinessEntity.metaname}${DeleteArtefact}`;
  static metadesc: string = CrudDefMetaDesc.delete_metadesc;
}

// ████ DELETE INPUT DTO ████████████████████████████████████████████████

@InputType()
export class BusinessDeleteInputWhereDto extends BusinessFindInputWhereDto implements DeleteInputWhereCRUDTypeDefinition{
  /**
   * avoiding redundant code
   * considering whatever FindInputWhere ask for input, same apply to SoftDeleteInputWhere so extending class
   * just add what is new or different for SoftDeleteInputWhere, that means it's 100% customisable
   * you can also remove extends *FindInputWhere and define entire custom dto here if needed 
   **/
}

@InputType()
export class BusinessDeleteInputDto implements DeleteInputCRUDTypeDefinition{
  @Field(() => [BusinessDeleteInputWhereDto], {nullable: true, description: CrudDefMetaDesc.delete_where})
  @Validate(OnlyOneSeachOperatorAllowed)
  where?: FindOptionsWhere<BusinessDeleteInputWhereDto>[];
}


// ████ DELETE OUTPUT DTO ████████████████████████████████████████████████

@ObjectType()
@Directive('@shareable')
export class BusinessDeleteOutputDto extends CrudAffectedDto implements DeleteOutputCRUDTypeDefinition{
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

export class BusinessRestoreDto extends BusinessEntity implements RestoreDtoCRUDTypeDefinition{
    static metaname: string = `${BusinessEntity.metaname}${RestoreArtefact}`;
    static metadesc: string = CrudDefMetaDesc.restore_metadesc;
}

// ████ RESTORE INPUT DTO ██████████████████████████████████████████████████████

@InputType()
export class BusinessRestoreInputWhereDto extends BusinessFindInputWhereDto implements RestoreInputWhereCRUDTypeDefinition{
  /**
   * avoiding redundant code
   * considering whatever FindInputWhere ask for input, same apply to SoftDeleteInputWhere so extending class
   * just add what is new or different for SoftDeleteInputWhere, that means it's 100% customisable
   * you can also remove extends *FindInputWhere and define entire custom dto here if needed 
   **/
}

@InputType()
export class BusinessRestoreInputDto implements RestoreInputCRUDTypeDefinition{
  @Field(() => [BusinessRestoreInputWhereDto], {nullable: true, description: CrudDefMetaDesc.restore_where})
  @Validate(OnlyOneSeachOperatorAllowed)
  where?: FindOptionsWhere<BusinessRestoreInputWhereDto>[];
}
  
// ████ RESTORE OUTPUT DTO ██████████████████████████████████████████████████████
  
@ObjectType()
@Directive('@shareable')
export class BusinessRestoreOutputDto extends CrudAffectedDto implements RestoreOutputCRUDTypeDefinition{
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

export class BusinessUpsertDto extends BusinessEntity implements UpsertDtoCRUDTypeDefinition{
  static metaname: string = `${BusinessEntity.metaname}${UpsertArtefact}`;
  static metadesc: string = CrudDefMetaDesc.upsert_metadesc;
}

// ████ UPSERT INPUT DTO ██████████████████████████████████████████████████████

@InputType()
export class BusinessUpsertInputDto extends BusinessCreateInputDto implements UpsertInputCRUDTypeDefinition{
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
    static conflictResolveFields: (keyof BusinessUpsertInputDto)[] = ['id'];
}

// ████ UPSERT OUTPUT DTO ██████████████████████████████████████████████████████

@ObjectType()
@Directive('@shareable')
export class BusinessUpsertOutputDto extends IntersectionType(BusinessCreateOutputDto, UpsertOutputProcessStatusDto) implements UpsertOutputCRUDTypeDefinition{ 
 
}

/**
 * █████████████████████████████████████████████████████████████
 * █ SOFT REMOVE DTO ███████████████████████████████████████████
 * █████████████████████████████████████████████████████████████
**/
// unlike soft delete, this operation first get the data from database and after run the operation, so it's complex but provide more and clear information about operation

// ████ SOFT REMOVE INPUT DTO ████████████████████████████████████████████████
export class BusinessSoftRemoveDto extends BusinessEntity implements SoftRemoveDtoCRUDTypeDefinition{
  static metaname: string = `${BusinessEntity.metaname}${SoftRemoveArtefact}`;
  static metadesc: string = CrudDefMetaDesc.softRemove_metadesc;
}

@InputType()
export class BusinessSoftRemoveInputWhereDto extends BusinessFindInputWhereDto implements SoftRemoveInputWhereCRUDTypeDefinition{
  /**
   * avoiding redundant code
   * considering whatever FindInputWhere ask for input, same apply to SoftRemoveInputWhere so extending class
   * just add what is new or different for SoftRemoveInputWhere, that means it's 100% customisable
   * you can also remove extends *FindInputWhere and define entire custom dto here if needed 
   **/
}

@InputType()
export class BusinessSoftRemoveInputDto implements SoftRemoveInputCRUDTypeDefinition{
  @Field(() => [BusinessSoftRemoveInputWhereDto], {nullable: true, description: CrudDefMetaDesc.softRemove_where})
  @Validate(OnlyOneSeachOperatorAllowed)
  where?: FindOptionsWhere<BusinessSoftRemoveInputWhereDto>[];
}


// ████ SOFT REMOVE OUTPUT DTO ████████████████████████████████████████████████

@ObjectType()
@Directive('@shareable')
export class BusinessSoftRemoveOutputAffectedRowsDto extends BusinessFindOutputRowsDto implements SoftRemoveOutputAffectedRowsCRUDTypeDefinition{
  /**
   * avoiding redundant code
   * considering whatever FindOutputRows return, same apply to SoftRemoveOutputAffectedRows so extending class
   * just add what is new or different for SoftRemoveOutputAffectedRows, that means it's 100% customisable
   * you can also remove extends FindOutputRows and define entire custom dto here if needed 
   **/
}
@ObjectType()
@Directive('@shareable')
export class BusinessSoftRemoveOutputDto extends CrudAffectedDto implements SoftRemoveOutputCRUDTypeDefinition{
  /**
   * avoiding redundant code
   * considering whatever AffectedDto return, same apply to SoftRemoveOutput so extending class
   * just add what is new or different for SoftRemoveOutput, that means it's 100% customisable
   * you can also remove extends AffectedDto and define entire custom dto here if needed 
   **/

  @Field(() => [BusinessEntity]) 
  declare affectedRows?: BusinessEntity[] | any
}

/**
 * █████████████████████████████████████████████████████████████
 * █ REMOVE DTO ████████████████████████████████████████████████
 * █████████████████████████████████████████████████████████████
**/
// unlike soft delete, this operation first get the data from database and after run the operation, so it's complex but provide more and clear information about operation

export class BusinessRemoveDto extends BusinessEntity implements RemoveDtoCRUDTypeDefinition{
  static metaname: string = `${BusinessEntity.metaname}${RemoveArtefact}`;
  static metadesc: string = CrudDefMetaDesc.remove_metadesc;
}

// ████ REMOVE INPUT DTO ████████████████████████████████████████████████

@InputType()
export class BusinessRemoveInputWhereDto extends BusinessFindInputWhereDto implements RemoveInputWhereCRUDTypeDefinition{
  /**
   * avoiding redundant code
   * considering whatever FindInputWhere ask for input, same apply to SoftRemoveInputWhere so extending class
   * just add what is new or different for SoftRemoveInputWhere, that means it's 100% customisable
   * you can also remove extends *FindInputWhere and define entire custom dto here if needed 
   **/
}

@InputType()
export class BusinessRemoveInputDto implements RemoveInputCRUDTypeDefinition{
  @Field(() => [BusinessRemoveInputWhereDto], {nullable: true, description: CrudDefMetaDesc.remove_where})
  @Validate(OnlyOneSeachOperatorAllowed)
  where?: FindOptionsWhere<BusinessRemoveInputWhereDto>[];
}

// ████ REMOVE OUTPUT DTO ████████████████████████████████████████████████

@ObjectType()
@Directive('@shareable')
export class BusinessRemoveOutputAffectedRowsDto extends BusinessFindOutputRowsDto implements RemoveOutputAffectedRowsCRUDTypeDefinition{
  /**
   * avoiding redundant code
   * considering whatever FindOutputRows return, same apply to RemoveOutputAffectedRows so extending class
   * just add what is new or different for RemoveOutputAffectedRows, that means it's 100% customisable
   * you can also remove extends FindOutputRows and define entire custom dto here if needed 
   **/
}
@ObjectType()
@Directive('@shareable')
export class BusinessRemoveOutputDto extends CrudAffectedDto implements RemoveOutputCRUDTypeDefinition{
  /**
   * avoiding redundant code
   * considering whatever AffectedDto return, same apply to RemoveOutput so extending class
   * just add what is new or different for RemoveOutput, that means it's 100% customisable
   * you can also remove extends AffectedDto and define entire custom dto here if needed 
   **/

  @Field(() => [BusinessEntity]) 
  declare affectedRows?: BusinessEntity[] | any;
}

/**
 * █████████████████████████████████████████████████████████████
 * █ RECOVER DTO ████████████████████████████████████████████████
 * █████████████████████████████████████████████████████████████
**/
// unlike soft delete, this operation first get the data from database and after run the operation, so it's complex but provide more and clear information about operation

export class BusinessRecoverDto extends BusinessEntity implements RecoverDtoCRUDTypeDefinition{
  static metaname: string = `${BusinessEntity.metaname}${RecoverArtefact}`;
  static metadesc: string = CrudDefMetaDesc.recover_metadesc;
}

// ████ RECOVER INPUT DTO ██████████████████████████████████████████████████████

@InputType()
export class BusinessRecoverInputWhereDto extends BusinessFindInputWhereDto implements RecoverInputWhereCRUDTypeDefinition{
/**
 * avoiding redundant code
 * considering whatever FindInputWhere ask for input, same apply to SoftDeleteInputWhere so extending class
 * just add what is new or different for SoftDeleteInputWhere, that means it's 100% customisable
 * you can also remove extends *FindInputWhere and define entire custom dto here if needed 
 **/
}

@InputType()
export class BusinessRecoverInputDto implements RecoverInputCRUDTypeDefinition{
  @Field(() => [BusinessRecoverInputWhereDto], {nullable: true, description: CrudDefMetaDesc.recover_where})
  @Validate(OnlyOneSeachOperatorAllowed)
  where?: FindOptionsWhere<BusinessRecoverInputWhereDto>[];
}

// ████ RECOVER OUTPUT DTO ██████████████████████████████████████████████████████

@ObjectType()
@Directive('@shareable')
export class BusinessRecoverOutputAffectedRowsDto extends BusinessFindOutputRowsDto implements RecoverOutputAffectedRowsCRUDTypeDefinition{
  /**
   * avoiding redundant code
   * considering whatever FindOutputRows return, same apply to RecoverOutputAffectedRows so extending class
   * just add what is new or different for RecoverOutputAffectedRows, that means it's 100% customisable
   * you can also remove extends FindOutputRows and define entire custom dto here if needed 
   **/
}

@ObjectType()
@Directive('@shareable')
export class BusinessRecoverOutputDto extends CrudAffectedDto implements RecoverOutputCRUDTypeDefinition{
  /**
   * avoiding redundant code
   * considering whatever AffectedDto return, same apply to RecoverOutput so extending class
   * just add what is new or different for RecoverOutput, that means it's 100% customisable
   * you can also remove extends AffectedDto and define entire custom dto here if needed 
   **/

  @Field(() => [BusinessEntity]) 
  declare affectedRows?: BusinessEntity[] | any;
}

/**
 * █████████████████████████████████████████████████████████████
 * █ UPLOAD DTO ████████████████████████████████████████████████
 * █████████████████████████████████████████████████████████████
**/

export class BusinessUploadDto extends BusinessEntity implements UploadDtoCRUDTypeDefinition {
  static metaname: string = `${BusinessEntity?.metaname}${UploadArtefact}`;
  static metadesc: string = CrudDefMetaDesc.upload_metadesc;
}

// ████ UPLOAD REF TYPE DTO ████████████████████████████████████████████████

@InputType()
export class UploadFileFieldInputDto {
@Field(() => BusinessUploadFileFieldEnum, {nullable: false, description: CrudDefMetaDesc.upload_file_field})
@IsNotEmpty()
file_field!: BusinessUploadFileFieldEnum;
}

@ObjectType()
@Directive('@shareable')
export class UploadFileFieldOutputDto extends PartialType(UploadFileFieldInputDto) {

}

// ████ UPLOAD INPUT DTO ████████████████████████████████████████████████
@InputType()
export class BusinessUploadInputDto extends IntersectionType(UploadFileFieldInputDto, UploadInputDto) implements UploadInputArtefactCRUDTypeDefinition {

}

// ████ UPLOAD OUTPUT DTO ███████████████████████████████████████████████
@ObjectType()
@Directive('@shareable')
export class BusinessUploadOutputDto extends IntersectionType(UploadFileFieldOutputDto, UploadOutputDto) implements UploadOutputArtefactCRUDTypeDefinition {

}

/**
* █████████████████████████████████████████████████████████████
* █ UPLOAD DELETE DTO █████████████████████████████████████████
* █████████████████████████████████████████████████████████████
**/

export class BusinessUploadDeleteDto extends BusinessEntity implements UploadDeleteDtoCRUDTypeDefinition {
static metaname: string = `${BusinessEntity?.metaname}${UploadDeleteArtefact}`;
static metadesc: string = CrudDefMetaDesc.upload_delete_metadesc;
}

// ████ UPLOAD DELETE INPUT DTO ████████████████████████████████████████████████
@InputType()
export class BusinessUploadDeleteInputDto extends IntersectionType(UploadFileFieldInputDto, UploadDeleteInputDto) implements UploadDeleteInputArtefactCRUDTypeDefinition {

}

// ████ UPLOAD DELETE OUTPUT DTO ███████████████████████████████████████████████
@ObjectType()
@Directive('@shareable')
export class BusinessUploadDeleteOutputDto extends IntersectionType(UploadFileFieldOutputDto, UploadDeleteOutputDto) implements UploadDeleteOutputArtefactCRUDTypeDefinition {

}