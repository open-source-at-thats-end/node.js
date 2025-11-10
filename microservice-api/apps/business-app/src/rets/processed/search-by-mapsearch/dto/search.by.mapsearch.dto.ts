import { CreateArtefact, CreateDtoCRUDTypeDefinition, CreateInputCRUDTypeDefinition, CreateOutputCRUDTypeDefinition, CrudDefMetaDesc, DateTime, DeleteArtefact, DeleteDtoCRUDTypeDefinition, DeleteInputCRUDTypeDefinition, DeleteOutputCRUDTypeDefinition, FindArtefact, FindDtoCRUDTypeDefinition, FindInputGroupByCRUDTypeDefinition, FindInputSortOrderCRUDTypeDefinition, FindInputCRUDTypeDefinition, FindInputWhereCRUDTypeDefinition, FindOneByIdArtefact, FindOperatorDto, FindOutputPaginationDto, FindOutputCRUDTypeDefinition, OnlyOneSeachOperatorAllowed, RecordSortDirectionEnum, RestoreArtefact, RestoreDtoCRUDTypeDefinition, RestoreInputCRUDTypeDefinition, SoftDeleteArtefact, SoftDeleteDtoCRUDTypeDefinition, SoftDeleteInputCRUDTypeDefinition, SoftDeleteOutputCRUDTypeDefinition, UpdateArtefact, UpdateDtoCRUDTypeDefinition, UpdateInputSetsCRUDTypeDefinition, UpdateInputCRUDTypeDefinition, UpdateInputWhereCRUDTypeDefinition, UpdateOutputCRUDTypeDefinition, SoftDeleteInputWhereCRUDTypeDefinition, RestoreInputWhereCRUDTypeDefinition, RestoreOutputCRUDTypeDefinition, UpsertDtoCRUDTypeDefinition, UpsertArtefact, UpsertInputCRUDTypeDefinition, UpsertOutputCRUDTypeDefinition, UpsertStatusEnum, SoftRemoveDtoCRUDTypeDefinition, SoftRemoveArtefact, SoftRemoveInputWhereCRUDTypeDefinition, SoftRemoveInputCRUDTypeDefinition, SoftRemoveOutputCRUDTypeDefinition, RemoveDtoCRUDTypeDefinition, RemoveArtefact, RemoveInputCRUDTypeDefinition, RemoveOutputCRUDTypeDefinition, SoftRemoveOutputAffectedRowsCRUDTypeDefinition, FindOutputRowsCRUDTypeDefinition, UpdateOutputAffectedRowsCRUDTypeDefinition, RemoveOutputAffectedRowsCRUDTypeDefinition, RecoverDtoCRUDTypeDefinition, RecoverArtefact, RecoverInputCRUDTypeDefinition, RecoverOutputCRUDTypeDefinition, RecoverInputWhereCRUDTypeDefinition, RecoverOutputAffectedRowsCRUDTypeDefinition, FindInputDtoCRUDTypeDefinition, FindOneByIdInputCRUDTypeDefinition, FindInputPaginationOptionsDto, FindOutputPaginationOptionsDto, IdInputDto, RemoveInputWhereCRUDTypeDefinition, DeleteInputWhereCRUDTypeDefinition, UploadInputDto, UploadOutputDto, UploadDeleteInputDto, UploadDeleteOutputDto, WithDeletedInputDto } from "@libs/library-app";
import { ProcessedSearchByMapSearchEntityMeta as meta, ProcessedSearchByMapSearchEntity } from "../entities/search.by.mapsearch.entity";
import { Directive, Field, Float, InputType, Int, IntersectionType, ObjectType, PartialType } from "@nestjs/graphql";
import { IsNotEmpty, IsNumber, IsOptional, Validate } from "class-validator";
import { FindManyOptions, FindOptionsOrder, FindOptionsWhere } from "typeorm";
import { Exclude } from "class-transformer";
import { CrudAffectedDto, UpsertOutputProcessStatusDto } from "@libs/library-app";
import { UploadArtefact, UploadDeleteArtefact, UploadDeleteDtoCRUDTypeDefinition, UploadDeleteInputArtefactCRUDTypeDefinition, UploadDeleteOutputArtefactCRUDTypeDefinition, UploadDtoCRUDTypeDefinition, UploadInputArtefactCRUDTypeDefinition, UploadOutputArtefactCRUDTypeDefinition } from "@libs/library-app/crud/crud.type";
import { ProcessedSearchByMapSearchUploadRefTypeEnum } from "../search.by.mapsearch.enum";
import { RetsMlsProviderFindInputWhereDto } from "../../../listings/mls-provider/dto/mls.provider.dto";

/**
 * █████████████████████████████████████████████████████████████
 * ██ DO NOT CHANGE IN THIS FILE IT WILL CRASH THE APP        ██
 * █████████████████████████████████████████████████████████████
**/

/**
 * # [done] ['../entities/processed.search.by.county.entity', './dto/processed.search.by.county.dto'] . Hint: find [ /processed.search.by.county. => and replace with ] [ /your-module. ] 
 * # [done] do not break some dependences which required this class
 * # [done] module [ProcessedSearchByMapSearch]
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
export class ProcessedSearchByMapSearchDto extends ProcessedSearchByMapSearchEntity implements FindInputDtoCRUDTypeDefinition{
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
     declare mls_num?: any;
     declare mlsp_id?: any;
     declare listing_key?: any;
     declare agent_id?: any;
     declare agent_short_id?: any;
     declare co_agent_id?: any;
     declare office_id?: any;
     declare co_office_id?: any;
     declare co_agent_short_id?: any;
     declare sell_agent_short_id?: any;
     declare buy_agent_id?: any;
     declare co_buy_agent_id?: any;
     declare property_type?: any;
     declare property_style?: any;
     declare category?: any;
     declare property_status?: any;
     declare subtype?: any;
     declare baths_full?: any;
     declare baths_half?: any;
     declare baths?: any;
     declare beds?: any;
     declare list_price?: any;
     declare original_list_price?: any;
     declare sold_price?: any;
     declare sold_date?: any;
     declare sqft?: any;
     declare yearbuilt?: any;
     declare total_photos?: any;
     declare main_photo?: any;
     declare main_photo_url?: any;
     declare display_address?: any;
     declare listing_date?: any;
     declare last_update_date?: any;
     declare elementary_school?: any;
     declare high_school?: any;
     declare middle_school?: any;
     declare price_diff?: any;
     declare system_name?: any;
     declare address?: any;
     declare area?: any;
     declare subdivision?: any;
     declare unit_no?: any;
     declare street_number?: any;
     declare street_direction?: any;
     declare street_dir_prefix?: any;
     declare street_name?: any;
     declare street_suffix?: any;
     declare street_dir_suffix?: any;
     declare city_name?: any;
     declare state?: any;
     declare county?: any;
     declare zipcode?: any;
     declare latitude?: any;
     declare longitude?: any;
     declare lotsize_sqft?: any;
     declare is_hoa?: any;
     declare is_new?: any;
     declare pool_desc?: any;
     declare pets_allowed?: any;
     declare furnished?: any;
     declare is_waterfront?: any;
     declare waterfront_desc?: any;
     declare horse_yn?: any;
     declare horse_amenities?: any;
     declare security_safety?: any;
     declare membership_required_yn?: any;
     declare membership?: any;
     declare membership_fee?: any;
     declare virtual_tour_url?: any;
     declare description?: any;
     declare exterior_features?: any;
     declare building_features?: any;
     declare construction?: any;
     declare sewer?: any;
     declare water?: any;
     declare zoning?: any;
     declare legal?: any;
     declare fireplace_features?: any;
     declare amenities?: any;
     declare cooling?: any;
     declare appliances?: any;
     declare flooring?: any;
     declare heating?: any;
     declare interior_features?: any;
     declare roof?: any;
     declare spa_features?: any;
     declare community_features?: any;
     declare parking_features?: any;
     declare mls_is_pic_url_supported?: any;
     declare dom?: any;
     declare office_name?: any;

     declare created?: any;
     declare updated?: any;
     declare deleted?: any;  

     declare fr_mlsp_id?:any;    
}

/**
 * █████████████████████████████████████████████████████████████
 * █ FIND DTO ██████████████████████████████████████████████████
 * █████████████████████████████████████████████████████████████
**/
@ObjectType({ isAbstract: true })
@Directive('@shareable')
export class ProcessedSearchByMapSearchFindDto extends ProcessedSearchByMapSearchEntity implements FindDtoCRUDTypeDefinition{
    static metaname: string = `${ProcessedSearchByMapSearchEntity?.metaname}${FindArtefact}`;
    static metadesc: string = CrudDefMetaDesc.find_metadesc;
}


// ████ FIND INPUT DTO ████████████████████████████████████████████████


@InputType()
export class ProcessedSearchByMapSearchFindInputWhereDto extends ProcessedSearchByMapSearchDto implements FindInputWhereCRUDTypeDefinition{
    @Field(() => FindOperatorDto, {nullable: true, description: meta?.id.desc})
    @IsOptional()
    declare id?: FindOperatorDto;    

    @Field(() => FindOperatorDto, { nullable: true, description: meta?.mls_num?.desc })
    @IsOptional()
    declare mls_num?: FindOperatorDto;

    @Field(() => FindOperatorDto, { nullable: true, description: meta?.mlsp_id?.desc })
    @IsOptional()
    declare mlsp_id?: FindOperatorDto;

    @Field(() => FindOperatorDto, { nullable: true, description: meta?.listing_key?.desc })
    @IsOptional()
    declare listing_key?: FindOperatorDto;

    @Field(() => FindOperatorDto, { nullable: true, description: meta?.agent_id?.desc })
    @IsOptional()
    declare agent_id?: FindOperatorDto;

    @Field(() => FindOperatorDto, { nullable: true, description: meta?.agent_short_id ?.desc })
    @IsOptional()
    declare agent_short_id ?: FindOperatorDto;

    @Field(() => FindOperatorDto, { nullable: true, description: meta?.co_agent_id?.desc })
    @IsOptional()
    declare co_agent_id?: FindOperatorDto;

    @Field(() => FindOperatorDto, { nullable: true, description: meta?.office_id?.desc })
    @IsOptional()
    declare office_id?: FindOperatorDto;

    @Field(() => FindOperatorDto, { nullable: true, description: meta?.co_office_id?.desc })
    @IsOptional()
    declare co_office_id?: FindOperatorDto;

    @Field(() => FindOperatorDto, { nullable: true, description: meta?.co_agent_short_id?.desc })
    @IsOptional()
    declare co_agent_short_id?: FindOperatorDto;

    @Field(() => FindOperatorDto, { nullable: true, description: meta?.sell_agent_short_id?.desc })
    @IsOptional()
    declare sell_agent_short_id?: FindOperatorDto;

    @Field(() => FindOperatorDto, { nullable: true, description: meta?.buy_agent_id?.desc })
    @IsOptional()
    declare buy_agent_id?: FindOperatorDto;

    @Field(() => FindOperatorDto, { nullable: true, description: meta?.co_buy_agent_id?.desc })
    @IsOptional()
    declare co_buy_agent_id?: FindOperatorDto;

    @Field(() => FindOperatorDto, { nullable: true, description: meta?.property_type?.desc })
    @IsOptional()
    declare property_type?: FindOperatorDto;

    @Field(() => FindOperatorDto, { nullable: true, description: meta?.category?.desc })
    @IsOptional()
    declare category?: FindOperatorDto;

    @Field(() => FindOperatorDto, { nullable: true, description: meta?.property_status?.desc })
    @IsOptional()
    declare property_status?: FindOperatorDto;

    @Field(() => FindOperatorDto, { nullable: true, description: meta?.subtype?.desc })
    @IsOptional()
    declare subtype?: FindOperatorDto;

    @Field(() => FindOperatorDto, { nullable: true, description: meta?.baths_full?.desc })
    @IsOptional()
    declare baths_full?: FindOperatorDto;

    @Field(() => FindOperatorDto, { nullable: true, description: meta?.baths_half?.desc })
    @IsOptional()
    declare baths_half?: FindOperatorDto;

    @Field(() => FindOperatorDto, { nullable: true, description: meta?.baths?.desc })
    @IsOptional()
    declare baths?: FindOperatorDto;

    @Field(() => FindOperatorDto, { nullable: true, description: meta?.beds?.desc })
    @IsOptional()
    declare beds?: FindOperatorDto;

    @Field(() => FindOperatorDto, { nullable: true, description: meta?.list_price?.desc })
    @IsOptional()
    declare list_price?: FindOperatorDto;

    @Field(() => FindOperatorDto, { nullable: true, description: meta?.sold_price?.desc })
    @IsOptional()
    declare sold_price?: FindOperatorDto;

    @Field(() => FindOperatorDto, { nullable: true, description: meta?.sqft?.desc })
    @IsOptional()
    declare sqft?: FindOperatorDto;

    @Field(() => FindOperatorDto, { nullable: true, description: meta?.yearbuilt?.desc })
    @IsOptional()
    declare yearbuilt?: FindOperatorDto;

    @Field(() => FindOperatorDto, { nullable: true, description: meta?.main_photo_url?.desc })
    @IsOptional()
    declare main_photo_url?: FindOperatorDto;

    @Field(() => FindOperatorDto, { nullable: true, description: meta?.display_address?.desc })
    @IsOptional()
    declare display_address?: FindOperatorDto;

    @Field(() => FindOperatorDto, { nullable: true, description: meta?.elementary_school?.desc })
    @IsOptional()
    declare elementary_school?: FindOperatorDto;

    @Field(() => FindOperatorDto, { nullable: true, description: meta?.high_school?.desc })
    @IsOptional()
    declare high_school?: FindOperatorDto;

    @Field(() => FindOperatorDto, { nullable: true, description: meta?.middle_school?.desc })
    @IsOptional()
    declare middle_school?: FindOperatorDto;

    @Field(() => FindOperatorDto, { nullable: true, description: meta?.system_name?.desc })
    @IsOptional()
    declare system_name?: FindOperatorDto;

    @Field(() => FindOperatorDto, { nullable: true, description: meta?.address?.desc })
    @IsOptional()
    declare address?: FindOperatorDto;

    @Field(() => FindOperatorDto, { nullable: true, description: meta?.area?.desc })
    @IsOptional()
    declare area?: FindOperatorDto;

    @Field(() => FindOperatorDto, { nullable: true, description: meta?.subdivision?.desc })
    @IsOptional()
    declare subdivision?: FindOperatorDto;

    @Field(() => FindOperatorDto, { nullable: true, description: meta?.street_number?.desc })
    @IsOptional()
    declare street_number?: FindOperatorDto;

    @Field(() => FindOperatorDto, { nullable: true, description: meta?.street_direction?.desc })
    @IsOptional()
    declare street_direction?: FindOperatorDto;

    @Field(() => FindOperatorDto, { nullable: true, description: meta?.street_name?.desc })
    @IsOptional()
    declare street_name?: FindOperatorDto;

    @Field(() => FindOperatorDto, { nullable: true, description: meta?.street_suffix?.desc })
    @IsOptional()
    declare street_suffix?: FindOperatorDto;

    @Field(() => FindOperatorDto, { nullable: true, description: meta?.city_name?.desc })
    @IsOptional()
    declare city_name?: FindOperatorDto;

    @Field(() => FindOperatorDto, { nullable: true, description: meta?.zipcode?.desc })
    @IsOptional()
    declare zipcode?: FindOperatorDto;

    @Field(() => FindOperatorDto, { nullable: true, description: meta?.latitude?.desc })
    @IsOptional()
    declare latitude?: FindOperatorDto;

    @Field(() => FindOperatorDto, { nullable: true, description: meta?.longitude?.desc })
    @IsOptional()
    declare longitude?: FindOperatorDto;

    @Field(() => FindOperatorDto, { nullable: true, description: meta?.lotsize_sqft?.desc })
    @IsOptional()
    declare lotsize_sqft?: FindOperatorDto;

    @Field(() => FindOperatorDto, { nullable: true, description: meta?.is_hoa?.desc })
    @IsOptional()
    declare is_hoa?: FindOperatorDto;

    @Field(() => FindOperatorDto, { nullable: true, description: meta?.is_new?.desc })
    @IsOptional()
    declare is_new?: FindOperatorDto;

    @Field(() => FindOperatorDto, { nullable: true, description: meta?.pets_allowed?.desc })
    @IsOptional()
    declare pets_allowed?: FindOperatorDto;

    @Field(() => FindOperatorDto, { nullable: true, description: meta?.furnished?.desc })
    @IsOptional()
    declare furnished?: FindOperatorDto;

    @Field(() => FindOperatorDto, { nullable: true, description: meta?.is_waterfront?.desc })
    @IsOptional()
    declare is_waterfront?: FindOperatorDto;

    @Field(() => FindOperatorDto, { nullable: true, description: meta?.horse_yn?.desc })
    @IsOptional()
    declare horse_yn?: FindOperatorDto;

    @Field(() => FindOperatorDto, { nullable: true, description: meta?.membership_required_yn?.desc })
    @IsOptional()
    declare membership_required_yn?: FindOperatorDto;

    @Field(() => FindOperatorDto, { nullable: true, description: meta?.membership?.desc })
    @IsOptional()
    declare membership?: FindOperatorDto;

    @Field(() => FindOperatorDto, { nullable: true, description: meta?.membership_fee?.desc })
    @IsOptional()
    declare membership_fee?: FindOperatorDto;

    @Field(() => FindOperatorDto, { nullable: true, description: meta?.building_features?.desc })
    @IsOptional()
    declare building_features?: FindOperatorDto;

    @Field(() => FindOperatorDto, { nullable: true, description: meta?.water?.desc })
    @IsOptional()
    declare water?: FindOperatorDto;

    @Field(() => FindOperatorDto, { nullable: true, description: meta?.mls_is_pic_url_supported?.desc })
    @IsOptional()
    declare mls_is_pic_url_supported?: FindOperatorDto;

    @Field(() => FindOperatorDto, { nullable: true, description: meta?.office_name?.desc })
    @IsOptional()
    declare office_name?: FindOperatorDto;

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

    @Field(() => RetsMlsProviderFindInputWhereDto, {nullable: true, description: meta?.fr_mlsp_id.desc})
    @IsOptional()
    declare fr_mlsp_id?: RetsMlsProviderFindInputWhereDto;
}

@InputType()
export class ProcessedSearchByMapSearchFindInputSortOrderDto implements FindOptionsOrder<ProcessedSearchByMapSearchDto>, FindInputSortOrderCRUDTypeDefinition{
    
    @Field(() => RecordSortDirectionEnum, { nullable: true }) 
    @IsOptional()
    id?: RecordSortDirectionEnum;

    @Field(() => RecordSortDirectionEnum, { nullable: true }) 
    @IsOptional()
    mls_num?: RecordSortDirectionEnum;

    @Field(() => RecordSortDirectionEnum, { nullable: true }) 
    @IsOptional()
    mlsp_id?: RecordSortDirectionEnum;

    @Field(() => RecordSortDirectionEnum, { nullable: true }) 
    @IsOptional()
    listing_key?: RecordSortDirectionEnum;

    @Field(() => RecordSortDirectionEnum, { nullable: true }) 
    @IsOptional()
    agent_id?: RecordSortDirectionEnum;

    @Field(() => RecordSortDirectionEnum, { nullable: true }) 
    @IsOptional()
    agent_short_id?: RecordSortDirectionEnum;

    @Field(() => RecordSortDirectionEnum, { nullable: true }) 
    @IsOptional()
    co_agent_id?: RecordSortDirectionEnum;

    @Field(() => RecordSortDirectionEnum, { nullable: true }) 
    @IsOptional()
    office_id?: RecordSortDirectionEnum;

    @Field(() => RecordSortDirectionEnum, { nullable: true }) 
    @IsOptional()
    co_office_id?: RecordSortDirectionEnum;

    @Field(() => RecordSortDirectionEnum, { nullable: true }) 
    @IsOptional()
    co_agent_short_id?: RecordSortDirectionEnum;

    @Field(() => RecordSortDirectionEnum, { nullable: true }) 
    @IsOptional()
    sell_agent_short_id?: RecordSortDirectionEnum;

    @Field(() => RecordSortDirectionEnum, { nullable: true }) 
    @IsOptional()
    buy_agent_id?: RecordSortDirectionEnum;

    @Field(() => RecordSortDirectionEnum, { nullable: true }) 
    @IsOptional()
    co_buy_agent_id?: RecordSortDirectionEnum;

    @Field(() => RecordSortDirectionEnum, { nullable: true }) 
    @IsOptional()
    property_type?: RecordSortDirectionEnum;

    @Field(() => RecordSortDirectionEnum, { nullable: true }) 
    @IsOptional()
    category?: RecordSortDirectionEnum;

    @Field(() => RecordSortDirectionEnum, { nullable: true }) 
    @IsOptional()
    property_status?: RecordSortDirectionEnum;

    @Field(() => RecordSortDirectionEnum, { nullable: true }) 
    @IsOptional()
    subtype?: RecordSortDirectionEnum;

    @Field(() => RecordSortDirectionEnum, { nullable: true }) 
    @IsOptional()
    baths_full?: RecordSortDirectionEnum;

    @Field(() => RecordSortDirectionEnum, { nullable: true }) 
    @IsOptional()
    baths_half?: RecordSortDirectionEnum;

    @Field(() => RecordSortDirectionEnum, { nullable: true }) 
    @IsOptional()
    baths?: RecordSortDirectionEnum;

    @Field(() => RecordSortDirectionEnum, { nullable: true }) 
    @IsOptional()
    beds?: RecordSortDirectionEnum;

    @Field(() => RecordSortDirectionEnum, { nullable: true }) 
    @IsOptional()
    list_price?: RecordSortDirectionEnum;

    @Field(() => RecordSortDirectionEnum, { nullable: true }) 
    @IsOptional()
    sold_price?: RecordSortDirectionEnum;

    @Field(() => RecordSortDirectionEnum, { nullable: true }) 
    @IsOptional()
    sqft?: RecordSortDirectionEnum;

    @Field(() => RecordSortDirectionEnum, { nullable: true }) 
    @IsOptional()
    yearbuilt?: RecordSortDirectionEnum;

    @Field(() => RecordSortDirectionEnum, { nullable: true }) 
    @IsOptional()
    main_photo_url?: RecordSortDirectionEnum;

    @Field(() => RecordSortDirectionEnum, { nullable: true }) 
    @IsOptional()
    display_address?: RecordSortDirectionEnum;

    @Field(() => RecordSortDirectionEnum, { nullable: true }) 
    @IsOptional()
    elementary_school?: RecordSortDirectionEnum;

    @Field(() => RecordSortDirectionEnum, { nullable: true }) 
    @IsOptional()
    high_school?: RecordSortDirectionEnum;

    @Field(() => RecordSortDirectionEnum, { nullable: true }) 
    @IsOptional()
    middle_school?: RecordSortDirectionEnum;

    @Field(() => RecordSortDirectionEnum, { nullable: true }) 
    @IsOptional()
    system_name?: RecordSortDirectionEnum;

    @Field(() => RecordSortDirectionEnum, { nullable: true }) 
    @IsOptional()
    address?: RecordSortDirectionEnum;

    @Field(() => RecordSortDirectionEnum, { nullable: true }) 
    @IsOptional()
    area?: RecordSortDirectionEnum;

    @Field(() => RecordSortDirectionEnum, { nullable: true }) 
    @IsOptional()
    subdivision?: RecordSortDirectionEnum;

    @Field(() => RecordSortDirectionEnum, { nullable: true }) 
    @IsOptional()
    street_number?: RecordSortDirectionEnum;

    @Field(() => RecordSortDirectionEnum, { nullable: true }) 
    @IsOptional()
    street_direction?: RecordSortDirectionEnum;

    @Field(() => RecordSortDirectionEnum, { nullable: true }) 
    @IsOptional()
    street_name?: RecordSortDirectionEnum;

    @Field(() => RecordSortDirectionEnum, { nullable: true }) 
    @IsOptional()
    street_suffix?: RecordSortDirectionEnum;

    @Field(() => RecordSortDirectionEnum, { nullable: true }) 
    @IsOptional()
    city_name?: RecordSortDirectionEnum;

    @Field(() => RecordSortDirectionEnum, { nullable: true }) 
    @IsOptional()
    zipcode?: RecordSortDirectionEnum;

    @Field(() => RecordSortDirectionEnum, { nullable: true }) 
    @IsOptional()
    latitude?: RecordSortDirectionEnum;

    @Field(() => RecordSortDirectionEnum, { nullable: true }) 
    @IsOptional()
    longitude?: RecordSortDirectionEnum;

    @Field(() => RecordSortDirectionEnum, { nullable: true }) 
    @IsOptional()
    lotsize_sqft?: RecordSortDirectionEnum;

    @Field(() => RecordSortDirectionEnum, { nullable: true }) 
    @IsOptional()
    is_hoa?: RecordSortDirectionEnum;

    @Field(() => RecordSortDirectionEnum, { nullable: true }) 
    @IsOptional()
    is_new?: RecordSortDirectionEnum;

    @Field(() => RecordSortDirectionEnum, { nullable: true }) 
    @IsOptional()
    pets_allowed?: RecordSortDirectionEnum;

    @Field(() => RecordSortDirectionEnum, { nullable: true }) 
    @IsOptional()
    furnished?: RecordSortDirectionEnum;

    @Field(() => RecordSortDirectionEnum, { nullable: true }) 
    @IsOptional()
    is_waterfront?: RecordSortDirectionEnum;

    @Field(() => RecordSortDirectionEnum, { nullable: true }) 
    @IsOptional()
    horse_yn?: RecordSortDirectionEnum;

    @Field(() => RecordSortDirectionEnum, { nullable: true }) 
    @IsOptional()
    membership_required_yn?: RecordSortDirectionEnum;

    @Field(() => RecordSortDirectionEnum, { nullable: true }) 
    @IsOptional()
    membership?: RecordSortDirectionEnum;

    @Field(() => RecordSortDirectionEnum, { nullable: true }) 
    @IsOptional()
    membership_fee?: RecordSortDirectionEnum;

    @Field(() => RecordSortDirectionEnum, { nullable: true }) 
    @IsOptional()
    building_features?: RecordSortDirectionEnum;

    @Field(() => RecordSortDirectionEnum, { nullable: true }) 
    @IsOptional()
    water?: RecordSortDirectionEnum;

    @Field(() => RecordSortDirectionEnum, { nullable: true }) 
    @IsOptional()
    mls_is_pic_url_supported?: RecordSortDirectionEnum;

    @Field(() => RecordSortDirectionEnum, { nullable: true }) 
    @IsOptional()
    office_name?: RecordSortDirectionEnum;

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
export class ProcessedSearchByMapSearchFindInputGroupByDto implements FindOptionsOrder<ProcessedSearchByMapSearchDto>, FindInputGroupByCRUDTypeDefinition{

    @Field(() => Boolean, { nullable: true })
    @IsOptional()
    mls_num?: boolean;

    @Field(() => Boolean, { nullable: true })
    @IsOptional()
    mlsp_id?: boolean;

    @Field(() => Boolean, { nullable: true })
    @IsOptional()
    listing_key?: boolean;

    @Field(() => Boolean, { nullable: true })
    @IsOptional()
    agent_id?: boolean;

    @Field(() => Boolean, { nullable: true })
    @IsOptional()
    agent_short_id?: boolean;

    @Field(() => Boolean, { nullable: true })
    @IsOptional()
    co_agent_id?: boolean;

    @Field(() => Boolean, { nullable: true })
    @IsOptional()
    office_id?: boolean;

    @Field(() => Boolean, { nullable: true })
    @IsOptional()
    co_office_id?: boolean;

    @Field(() => Boolean, { nullable: true })
    @IsOptional()
    co_agent_short_id?: boolean;

    @Field(() => Boolean, { nullable: true })
    @IsOptional()
    sell_agent_short_id?: boolean;

    @Field(() => Boolean, { nullable: true })
    @IsOptional()
    buy_agent_id?: boolean;

    @Field(() => Boolean, { nullable: true })
    @IsOptional()
    co_buy_agent_id?: boolean;

    @Field(() => Boolean, { nullable: true })
    @IsOptional()
    property_type?: boolean;

    @Field(() => Boolean, { nullable: true })
    @IsOptional()
    category?: boolean;

    @Field(() => Boolean, { nullable: true })
    @IsOptional()
    property_status?: boolean;

    @Field(() => Boolean, { nullable: true })
    @IsOptional()
    subtype?: boolean;

    @Field(() => Boolean, { nullable: true })
    @IsOptional()
    baths_full?: boolean;

    @Field(() => Boolean, { nullable: true })
    @IsOptional()
    baths_half?: boolean;

    @Field(() => Boolean, { nullable: true })
    @IsOptional()
    baths?: boolean;

    @Field(() => Boolean, { nullable: true })
    @IsOptional()
    beds?: boolean;

    @Field(() => Boolean, { nullable: true })
    @IsOptional()
    list_price?: boolean;

    @Field(() => Boolean, { nullable: true })
    @IsOptional()
    sold_price?: boolean;

    @Field(() => Boolean, { nullable: true })
    @IsOptional()
    sqft?: boolean;

    @Field(() => Boolean, { nullable: true })
    @IsOptional()
    yearbuilt?: boolean;

    @Field(() => Boolean, { nullable: true })
    @IsOptional()
    main_photo_url?: boolean;

    @Field(() => Boolean, { nullable: true })
    @IsOptional()
    display_address?: boolean;

    @Field(() => Boolean, { nullable: true })
    @IsOptional()
    elementary_school?: boolean;

    @Field(() => Boolean, { nullable: true })
    @IsOptional()
    high_school?: boolean;

    @Field(() => Boolean, { nullable: true })
    @IsOptional()
    middle_school?: boolean;

    @Field(() => Boolean, { nullable: true })
    @IsOptional()
    system_name?: boolean;

    @Field(() => Boolean, { nullable: true })
    @IsOptional()
    address?: boolean;

    @Field(() => Boolean, { nullable: true })
    @IsOptional()
    area?: boolean;

    @Field(() => Boolean, { nullable: true })
    @IsOptional()
    subdivision?: boolean;

    @Field(() => Boolean, { nullable: true })
    @IsOptional()
    street_number?: boolean;

    @Field(() => Boolean, { nullable: true })
    @IsOptional()
    street_direction?: boolean;

    @Field(() => Boolean, { nullable: true })
    @IsOptional()
    street_name?: boolean;

    @Field(() => Boolean, { nullable: true })
    @IsOptional()
    street_suffix?: boolean;

    @Field(() => Boolean, { nullable: true })
    @IsOptional()
    city_name?: boolean;

    @Field(() => Boolean, { nullable: true })
    @IsOptional()
    state?: boolean;

    @Field(() => Boolean, { nullable: true })
    @IsOptional()
    county?: boolean;

    @Field(() => Boolean, { nullable: true })
    @IsOptional()
    zipcode?: boolean;

    @Field(() => Boolean, { nullable: true })
    @IsOptional()
    latitude?: boolean;

    @Field(() => Boolean, { nullable: true })
    @IsOptional()
    longitude?: boolean;

    @Field(() => Boolean, { nullable: true })
    @IsOptional()
    lotsize_sqft?: boolean;

    @Field(() => Boolean, { nullable: true })
    @IsOptional()
    is_hoa?: boolean;

    @Field(() => Boolean, { nullable: true })
    @IsOptional()
    is_new?: boolean;

    @Field(() => Boolean, { nullable: true })
    @IsOptional()
    pets_allowed?: boolean;

    @Field(() => Boolean, { nullable: true })
    @IsOptional()
    furnished?: boolean;

    @Field(() => Boolean, { nullable: true })
    @IsOptional()
    is_waterfront?: boolean;

    @Field(() => Boolean, { nullable: true })
    @IsOptional()
    horse_yn?: boolean;

    @Field(() => Boolean, { nullable: true })
    @IsOptional()
    membership_required_yn?: boolean;

    @Field(() => Boolean, { nullable: true })
    @IsOptional()
    membership?: boolean;

    @Field(() => Boolean, { nullable: true })
    @IsOptional()
    membership_fee?: boolean;

    @Field(() => Boolean, { nullable: true })
    @IsOptional()
    building_features?: boolean;

    @Field(() => Boolean, { nullable: true })
    @IsOptional()
    water?: boolean;

    @Field(() => Boolean, { nullable: true })
    @IsOptional()
    mls_is_pic_url_supported?: boolean;

    @Field(() => Boolean, { nullable: true })
    @IsOptional()
    office_name?: boolean;

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
export class ProcessedSearchByMapSearchFindInputDto extends IntersectionType(FindInputPaginationOptionsDto, WithDeletedInputDto) implements FindManyOptions<ProcessedSearchByMapSearchDto>, FindInputCRUDTypeDefinition{
    // input layout design for users to perform find with various database options
  
    /**
     * Conditions to be met for the resulting set.
     * also validate the user pass only 1 operator to search for field
     */
    @Field(() => [ProcessedSearchByMapSearchFindInputWhereDto], { nullable: true, description: CrudDefMetaDesc.find_where })
    @IsOptional()
    @Validate(OnlyOneSeachOperatorAllowed)
    declare where?: FindOptionsWhere<ProcessedSearchByMapSearchFindInputWhereDto>;
  
  
    /**
     * Specifies how to group the rows returned by the SELECT statement.
     */
    @Field(() => ProcessedSearchByMapSearchFindInputGroupByDto, { nullable: true, description: CrudDefMetaDesc.find_group_by })
    @IsOptional()
    declare groupBy?: ProcessedSearchByMapSearchFindInputGroupByDto;
  
    /**
     * Sort the result set by fields using ascending or descending order.
     */
    @Field(() => ProcessedSearchByMapSearchFindInputSortOrderDto, { nullable: true, description: CrudDefMetaDesc.find_order })
    @IsOptional()
    declare order?: FindOptionsOrder<ProcessedSearchByMapSearchFindInputSortOrderDto>;
}


// ████ FIND OUTPUT DTO ████████████████████████████████████████████████

@ObjectType()
@Directive('@shareable')
export class ProcessedSearchByMapSearchFindOutputRowsDto extends ProcessedSearchByMapSearchFindDto implements FindOutputRowsCRUDTypeDefinition{
    // this DTO will be used at many palce for output object, os make sure this is properly developed
}

@ObjectType()
@Directive('@shareable')
export class ProcessedSearchByMapSearchFindOutputDto extends FindOutputPaginationOptionsDto implements FindOutputCRUDTypeDefinition{
    // output layout design for users to get find response

    // we assign any because iin GRAPHQL for requuest body this rows will have fields with boolean value whether to include in response or not
    // this is very crucial to understand this structure and you need to understand how graphQL works
    @Field(() => [ProcessedSearchByMapSearchEntity], {description:CrudDefMetaDesc.find_rows})
    declare rows?: ProcessedSearchByMapSearchEntity | ProcessedSearchByMapSearchEntity[] | any;
}

/**
 * ██████████████████████████████████████████████████████████████████████████████████████████████████████████████████
 * █ FIND ONE BY ID DTO █████████████████████████████████████████████████████████████████████████████████████████████
 * ██████████████████████████████████████████████████████████████████████████████████████████████████████████████████
**/

export class ProcessedSearchByMapSearchFindOneByIdDto extends ProcessedSearchByMapSearchEntity implements FindDtoCRUDTypeDefinition{
    static metaname: string = `${ProcessedSearchByMapSearchEntity.metaname}${FindOneByIdArtefact}`;
    static metadesc: string = CrudDefMetaDesc.findOneById_metadesc;
}

// ████ FIND ONE BY ID INPUT DTO ████████████████████████████████████████████████

@InputType()
export class ProcessedSearchByMapSearchFindOneByIdInputDto extends IntersectionType(IdInputDto, WithDeletedInputDto) implements FindOneByIdInputCRUDTypeDefinition{

}

/**
 * █████████████████████████████████████████████████████████████
 * █ CREATE DTO ████████████████████████████████████████████████
 * █████████████████████████████████████████████████████████████
**/

export class ProcessedSearchByMapSearchCreateDto extends ProcessedSearchByMapSearchEntity implements CreateDtoCRUDTypeDefinition {
    static metaname: string = `${ProcessedSearchByMapSearchEntity.metaname}${CreateArtefact}`;
    static metadesc: string = CrudDefMetaDesc.create_metadesc;
}
// ████ CREATE INPUT DTO ████████████████████████████████████████████████

@InputType()
export class ProcessedSearchByMapSearchCreateInputDto extends  ProcessedSearchByMapSearchCreateDto implements CreateInputCRUDTypeDefinition {

    @Field(() => String, {nullable: false, description: meta?.mls_num.desc})
    declare mls_num?: string;

    @Field(() => Int, {nullable: false, description: meta?.mlsp_id.desc})
    declare mlsp_id?: number;

    @Field(() => String, {nullable: false, description: meta?.listing_key.desc})
    declare listing_key?: string;

    @Field(() => String, {nullable: false, description: meta?.agent_id.desc})
    declare agent_id?: string;

    @Field(() => String, {nullable: true, description: meta?.agent_short_id.desc})
    declare agent_short_id?: string;

    @Field(() => String, {nullable: true, description: meta?.co_agent_id.desc})
    declare co_agent_id?: string;

    @Field(() => String, {nullable: false, description: meta?.office_id.desc})
    declare office_id?: string;

    @Field(() => String, {nullable: true, description: meta?.co_office_id.desc})
    declare co_office_id?: string;

    @Field(() => String, {nullable: true, description: meta?.co_agent_short_id.desc})
    declare co_agent_short_id?: string;

    @Field(() => String, {nullable: true, description: meta?.sell_agent_short_id.desc})
    declare sell_agent_short_id?: string;

    @Field(() => String, {nullable: true, description: meta?.buy_agent_id.desc})
    declare buy_agent_id?: string;

    @Field(() => String, {nullable: true, description: meta?.co_buy_agent_id.desc})
    declare co_buy_agent_id?: string;

    @Field(() => String, {nullable: false, description: meta?.property_type.desc})
    declare property_type?: string;

    @Field(() => String, {nullable: true, description: meta?.property_style.desc})
    declare property_style?: string;

    @Field(() => String, {nullable: false, description: meta?.category.desc})
    declare category?: string;

    @Field(() => String, {nullable: false, description: meta?.property_status.desc})
    declare property_status?: string;

    @Field(() => String, {nullable: true, description: meta?.subtype.desc})
    declare subtype?: string;

    @Field(() => Int, {nullable: false, description: meta?.baths_full.desc})
    declare baths_full?: number;

    @Field(() => Int, {nullable: false, description: meta?.baths_half.desc})
    declare baths_half?: number;

    @Field(() => Int, {nullable: false, description: meta?.baths.desc})
    declare baths?: number;

    @Field(() => Int, {nullable: false, description: meta?.beds.desc})
    declare beds?: number;

    @Field(() => Float, {nullable: true, description: meta?.list_price.desc})
    declare list_price?: number;

    @Field(() => Float, {nullable: true, description: meta?.original_list_price.desc})
    declare original_list_price?: number;

    @Field(() => Float, {nullable: true, description: meta?.sold_price.desc})
    declare sold_price?: number;

    @Field(() => DateTime, {nullable: true, description: meta?.sold_date.desc})
    declare sold_date?: Date;

    @Field(() => Float, {nullable: true, description: meta?.sqft.desc})
    declare sqft?: number;

    @Field(() => Int, {nullable: true, description: meta?.yearbuilt.desc})
    declare yearbuilt?: number;

    @Field(() => Int, {nullable: true, description: meta?.total_photos.desc})
    declare total_photos?: number;

    @Field(() => Int, {nullable: true, description: meta?.main_photo.desc})
    declare main_photo?: number;

    @Field(() => String, {nullable: true, description: meta?.main_photo_url.desc})
    declare main_photo_url?: string;

    @Field(() => String, {nullable: false, description: meta?.display_address.desc})
    declare display_address?: string;

    @Field(() => DateTime, {nullable: false, description: meta?.listing_date.desc})
    declare listing_date?: Date;

    @Field(() => DateTime, {nullable: true, description: meta?.last_update_date.desc})
    declare last_update_date?: Date;

    @Field(() => String, {nullable: true, description: meta?.elementary_school.desc})
    declare elementary_school?: string;

    @Field(() => String, {nullable: true, description: meta?.high_school.desc})
    declare high_school?: string;

    @Field(() => String, {nullable: true, description: meta?.middle_school.desc})
    declare middle_school?: string;

    @Field(() => Float, {nullable: false, description: meta?.price_diff.desc})
    declare price_diff?: number;

    @Field(() => String, {nullable: false, description: meta?.system_name.desc})
    declare system_name?: string;

    @Field(() => String, {nullable: false, description: meta?.address.desc})
    declare address?: string;

    @Field(() => String, {nullable: true, description: meta?.area.desc})
    declare area?: string;

    @Field(() => String, {nullable: true, description: meta?.subdivision.desc})
    declare subdivision?: string;

    @Field(() => String, {nullable: true, description: meta?.unit_no.desc})
    declare unit_no?: string;

    @Field(() => String, {nullable: false, description: meta?.street_number.desc})
    declare street_number?: string;

    @Field(() => String, {nullable: false, description: meta?.street_direction.desc})
    declare street_direction?: string;

    @Field(() => String, {nullable: false, description: meta?.street_dir_prefix.desc})
    declare street_dir_prefix?: string;

    @Field(() => String, {nullable: false, description: meta?.street_name.desc})
    declare street_name?: string;

    @Field(() => String, {nullable: false, description: meta?.street_suffix.desc})
    declare street_suffix?: string;

    @Field(() => String, {nullable: false, description: meta?.street_dir_suffix.desc})
    declare street_dir_suffix?: string;

    @Field(() => String, {nullable: false, description: meta?.city_name.desc})
    declare city_name?: string;

    @Field(() => String, {nullable: false, description: meta?.state.desc})
    declare state?: string;

    @Field(() => String, {nullable: false, description: meta?.county.desc})
    declare county?: string;

    @Field(() => String, {nullable: false, description: meta?.zipcode.desc})
    declare zipcode?: string;

    @Field(() => Float, {nullable: true, description: meta?.latitude.desc})
    declare latitude?: number;

    @Field(() => Float, {nullable: true, description: meta?.longitude.desc})
    declare longitude?: number;

    @Field(() => Float, {nullable: true, description: meta?.lotsize_sqft.desc})
    declare lotsize_sqft?: number;

    @Field(() => String, {nullable: true, description: meta?.is_hoa.desc})
    declare is_hoa?: string;

    @Field(() => String, {nullable: true, description: meta?.is_new.desc})
    declare is_new?: string;

    @Field(() => String, {nullable: true, description: meta?.pool_desc.desc})
    declare pool_desc?: string;

    @Field(() => String, {nullable: true, description: meta?.pets_allowed.desc})
    declare pets_allowed?: string;

    @Field(() => String, {nullable: true, description: meta?.furnished.desc})
    declare furnished?: string;

    @Field(() => String, {nullable: true, description: meta?.is_waterfront.desc})
    declare is_waterfront?: string;

    @Field(() => String, {nullable: true, description: meta?.waterfront_desc.desc})
    declare waterfront_desc?: string;

    @Field(() => String, {nullable: false, description: meta?.horse_yn.desc})
    declare horse_yn?: string;

    @Field(() => String, {nullable: true, description: meta?.horse_amenities.desc})
    declare horse_amenities?: string;

    @Field(() => String, {nullable: true, description: meta?.security_safety.desc})
    declare security_safety?: string;

    @Field(() => String, {nullable: false, description: meta?.membership_required_yn.desc})
    declare membership_required_yn?: string;

    @Field(() => String, {nullable: true, description: meta?.membership.desc})
    declare membership?: string;

    @Field(() => Float, {nullable: true, description: meta?.membership_fee.desc})
    declare membership_fee?: number;

    @Field(() => String, {nullable: true, description: meta?.virtual_tour_url.desc})
    declare virtual_tour_url?: string;

    @Field(() => String, {nullable: true, description: meta?.description.desc})
    declare description?: string;

    @Field(() => String, {nullable: true, description: meta?.exterior_features.desc})
    declare exterior_features?: string;

    @Field(() => String, {nullable: true, description: meta?.building_features.desc})
    declare building_features?: string;

    @Field(() => String, {nullable: true, description: meta?.construction.desc})
    declare construction?: string;

    @Field(() => String, {nullable: true, description: meta?.sewer.desc})
    declare sewer?: string;

    @Field(() => String, {nullable: true, description: meta?.water.desc})
    declare water?: string;

    @Field(() => String, {nullable: true, description: meta?.zoning.desc})
    declare zoning?: string;

    @Field(() => String, {nullable: true, description: meta?.legal.desc})
    declare legal?: string;

    @Field(() => String, {nullable: true, description: meta?.fireplace_features.desc})
    declare fireplace_features?: string;

    @Field(() => String, {nullable: true, description: meta?.amenities.desc})
    declare amenities?: string;

    @Field(() => String, {nullable: true, description: meta?.cooling.desc})
    declare cooling?: string;

    @Field(() => String, {nullable: true, description: meta?.appliances.desc})
    declare appliances?: string;

    @Field(() => String, {nullable: true, description: meta?.flooring.desc})
    declare flooring?: string;

    @Field(() => String, {nullable: true, description: meta?.heating.desc})
    declare heating?: string;

    @Field(() => String, {nullable: true, description: meta?.interior_features.desc})
    declare interior_features?: string;

    @Field(() => String, {nullable: true, description: meta?.roof.desc})
    declare roof?: string;

    @Field(() => String, {nullable: true, description: meta?.spa_features.desc})
    declare spa_features?: string;

    @Field(() => String, {nullable: true, description: meta?.community_features.desc})
    declare community_features?: string;

    @Field(() => String, {nullable: true, description: meta?.parking_features.desc})
    declare parking_features?: string;

    @Field(() => String, {nullable: false, description: meta?.mls_is_pic_url_supported.desc})
    declare mls_is_pic_url_supported?: string;

    @Field(() => Int, {nullable: true, description: meta?.dom.desc})
    declare dom?: number;

    @Field(() => String, {nullable: true, description: meta?.office_name.desc})
    declare office_name?: string;
}

// ████ CREATE OUTPUT DTO ████████████████████████████████████████████████

@ObjectType()
@Directive('@shareable')
export class ProcessedSearchByMapSearchCreateOutputDto extends ProcessedSearchByMapSearchFindOutputRowsDto implements CreateOutputCRUDTypeDefinition {
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


export class ProcessedSearchByMapSearchUpdateDto extends ProcessedSearchByMapSearchDto implements UpdateDtoCRUDTypeDefinition{
    static metaname: string = `${ProcessedSearchByMapSearchEntity.metaname}${UpdateArtefact}`;
    static metadesc: string = CrudDefMetaDesc.update_metadesc;
}

// ████ UPDATE INPUT DTO ████████████████████████████████████████████████

@InputType()
export class ProcessedSearchByMapSearchUpdateInputWhereDto extends ProcessedSearchByMapSearchFindInputWhereDto implements UpdateInputWhereCRUDTypeDefinition{
    /**
     * avoiding redundant code
     * considering whatever FindInputWhere ask for input, same apply to UpdateInputWhere so extending class
     * just add what is new or different for UpdateInputWhere, that means it's 100% customisable
     * you can also remove extends *FindInputWhere and define entire custom dto here if needed 
     **/
}

@InputType()
export class ProcessedSearchByMapSearchUpdateInputSetsDto extends PartialType(ProcessedSearchByMapSearchCreateInputDto) implements UpdateInputSetsCRUDTypeDefinition {
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
export class ProcessedSearchByMapSearchUpdateInputDto implements UpdateInputCRUDTypeDefinition{
    // input layout design for users to perform update with various database options
  
    /**
     * Conditions to be met for the resulting set.
     * also validate the user pass only 1 operator to search for field
     */
    @Field(() => [ProcessedSearchByMapSearchUpdateInputWhereDto], { nullable: false, description: CrudDefMetaDesc.update_where })
    @IsNotEmpty()
    @Validate(OnlyOneSeachOperatorAllowed)
    where!: FindOptionsWhere<ProcessedSearchByMapSearchUpdateInputWhereDto>[];

    /**
     * What to set for update
     * basically fields list of update
     */
    @Field(() => ProcessedSearchByMapSearchUpdateInputSetsDto, { nullable: false, description: CrudDefMetaDesc.update_sets })
    @IsNotEmpty()
    sets!: ProcessedSearchByMapSearchUpdateInputSetsDto

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
export class ProcessedSearchByMapSearchUpdateOutputAffectedRowsDto extends ProcessedSearchByMapSearchFindOutputRowsDto implements UpdateOutputAffectedRowsCRUDTypeDefinition{
    /**
     * avoiding redundant code
     * considering whatever FindOutputRows return, same apply to UpdateOutputAffectedRows so extending class
     * just add what is new or different for UpdateOutputAffectedRows, that means it's 100% customisable
     * you can also remove extends *FindOutputRows and define entire custom dto here if needed 
     **/
}

@ObjectType()
@Directive('@shareable')
export class ProcessedSearchByMapSearchUpdateOutputDto extends CrudAffectedDto implements UpdateOutputCRUDTypeDefinition{
  @Field(() => [ProcessedSearchByMapSearchEntity], {description: CrudDefMetaDesc.update_affected_rows}) 
  declare affectedRows?: ProcessedSearchByMapSearchEntity[] | any; 
}


/**
 * █████████████████████████████████████████████████████████████
 * █ SOFT DELETE DTO ███████████████████████████████████████████
 * █████████████████████████████████████████████████████████████
**/
// this operation run directly withouth checking the data if exist or not, so it's quick but do not provide more information about operation

// ████ SOFT DELETE INPUT DTO ████████████████████████████████████████████████
export class ProcessedSearchByMapSearchSoftDeleteDto extends ProcessedSearchByMapSearchEntity implements SoftDeleteDtoCRUDTypeDefinition{
  static metaname: string = `${ProcessedSearchByMapSearchEntity.metaname}${SoftDeleteArtefact}`;
  static metadesc: string = CrudDefMetaDesc.softDelete_metadesc;
}

@InputType()
export class ProcessedSearchByMapSearchSoftDeleteInputWhereDto extends ProcessedSearchByMapSearchFindInputWhereDto implements SoftDeleteInputWhereCRUDTypeDefinition{
  /**
   * avoiding redundant code
   * considering whatever FindInputWhere ask for input, same apply to SoftDeleteInputWhere so extending class
   * just add what is new or different for SoftDeleteInputWhere, that means it's 100% customisable
   * you can also remove extends *FindInputWhere and define entire custom dto here if needed 
   **/
}

@InputType()
export class ProcessedSearchByMapSearchSoftDeleteInputDto implements SoftDeleteInputCRUDTypeDefinition{
  @Field(() => [ProcessedSearchByMapSearchSoftDeleteInputWhereDto], {nullable: true, description: CrudDefMetaDesc.softDelete_where})
  @Validate(OnlyOneSeachOperatorAllowed)
  where?: FindOptionsWhere<ProcessedSearchByMapSearchSoftDeleteInputWhereDto>[];
}


// ████ SOFT DELETE OUTPUT DTO ████████████████████████████████████████████████

@ObjectType()
@Directive('@shareable')
export class ProcessedSearchByMapSearchSoftDeleteOutputDto extends CrudAffectedDto implements SoftDeleteOutputCRUDTypeDefinition{
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

export class ProcessedSearchByMapSearchDeleteDto extends ProcessedSearchByMapSearchEntity implements DeleteDtoCRUDTypeDefinition{
  static metaname: string = `${ProcessedSearchByMapSearchEntity.metaname}${DeleteArtefact}`;
  static metadesc: string = CrudDefMetaDesc.delete_metadesc;
}
// ████ DELETE INPUT DTO ████████████████████████████████████████████████

@InputType()
export class ProcessedSearchByMapSearchDeleteInputWhereDto extends ProcessedSearchByMapSearchFindInputWhereDto implements DeleteInputWhereCRUDTypeDefinition{
  /**
   * avoiding redundant code
   * considering whatever FindInputWhere ask for input, same apply to SoftDeleteInputWhere so extending class
   * just add what is new or different for SoftDeleteInputWhere, that means it's 100% customisable
   * you can also remove extends *FindInputWhere and define entire custom dto here if needed 
   **/
}

@InputType()
export class ProcessedSearchByMapSearchDeleteInputDto implements DeleteInputCRUDTypeDefinition{
  @Field(() => [ProcessedSearchByMapSearchDeleteInputWhereDto], {nullable: true, description: CrudDefMetaDesc.delete_where})
  @Validate(OnlyOneSeachOperatorAllowed)
  where?: FindOptionsWhere<ProcessedSearchByMapSearchDeleteInputWhereDto>[];
}


// ████ DELETE OUTPUT DTO ████████████████████████████████████████████████

@ObjectType()
@Directive('@shareable')
export class ProcessedSearchByMapSearchDeleteOutputDto extends CrudAffectedDto implements DeleteOutputCRUDTypeDefinition{
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

export class ProcessedSearchByMapSearchRestoreDto extends ProcessedSearchByMapSearchEntity implements RestoreDtoCRUDTypeDefinition{
    static metaname: string = `${ProcessedSearchByMapSearchEntity.metaname}${RestoreArtefact}`;
    static metadesc: string = CrudDefMetaDesc.restore_metadesc;
}

// ████ RESTORE INPUT DTO ██████████████████████████████████████████████████████

@InputType()
export class ProcessedSearchByMapSearchRestoreInputWhereDto extends ProcessedSearchByMapSearchFindInputWhereDto implements RestoreInputWhereCRUDTypeDefinition{
  /**
   * avoiding redundant code
   * considering whatever FindInputWhere ask for input, same apply to SoftDeleteInputWhere so extending class
   * just add what is new or different for SoftDeleteInputWhere, that means it's 100% customisable
   * you can also remove extends *FindInputWhere and define entire custom dto here if needed 
   **/
}

@InputType()
export class ProcessedSearchByMapSearchRestoreInputDto implements RestoreInputCRUDTypeDefinition{
  @Field(() => [ProcessedSearchByMapSearchRestoreInputWhereDto], {nullable: true, description: CrudDefMetaDesc.restore_where})
  @Validate(OnlyOneSeachOperatorAllowed)
  where?: FindOptionsWhere<ProcessedSearchByMapSearchRestoreInputWhereDto>[];
}
  
// ████ RESTORE OUTPUT DTO ██████████████████████████████████████████████████████
  
@ObjectType()
@Directive('@shareable')
export class ProcessedSearchByMapSearchRestoreOutputDto extends CrudAffectedDto implements RestoreOutputCRUDTypeDefinition{
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

export class ProcessedSearchByMapSearchUpsertDto extends ProcessedSearchByMapSearchEntity implements UpsertDtoCRUDTypeDefinition{
  static metaname: string = `${ProcessedSearchByMapSearchEntity.metaname}${UpsertArtefact}`;
  static metadesc: string = CrudDefMetaDesc.upsert_metadesc;
}

// ████ UPSERT INPUT DTO ██████████████████████████████████████████████████████

@InputType()
export class ProcessedSearchByMapSearchUpsertInputDto extends ProcessedSearchByMapSearchCreateInputDto implements UpsertInputCRUDTypeDefinition{
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
    static conflictResolveFields: (keyof ProcessedSearchByMapSearchUpsertInputDto)[] = ['id'];
}

// ████ UPSERT OUTPUT DTO ██████████████████████████████████████████████████████

@ObjectType()
@Directive('@shareable')
export class ProcessedSearchByMapSearchUpsertOutputDto extends IntersectionType(ProcessedSearchByMapSearchCreateOutputDto, UpsertOutputProcessStatusDto) implements UpsertOutputCRUDTypeDefinition{ 
 
}

/**
 * █████████████████████████████████████████████████████████████
 * █ SOFT REMOVE DTO ███████████████████████████████████████████
 * █████████████████████████████████████████████████████████████
**/
// unlike soft delete, this operation first get the data from database and after run the operation, so it's complex but provide more and clear information about operation

// ████ SOFT REMOVE INPUT DTO ████████████████████████████████████████████████
export class ProcessedSearchByMapSearchSoftRemoveDto extends ProcessedSearchByMapSearchEntity implements SoftRemoveDtoCRUDTypeDefinition{
  static metaname: string = `${ProcessedSearchByMapSearchEntity.metaname}${SoftRemoveArtefact}`;
  static metadesc: string = CrudDefMetaDesc.softRemove_metadesc;
}

@InputType()
export class ProcessedSearchByMapSearchSoftRemoveInputWhereDto extends ProcessedSearchByMapSearchFindInputWhereDto implements SoftRemoveInputWhereCRUDTypeDefinition{
  /**
   * avoiding redundant code
   * considering whatever FindInputWhere ask for input, same apply to SoftRemoveInputWhere so extending class
   * just add what is new or different for SoftRemoveInputWhere, that means it's 100% customisable
   * you can also remove extends *FindInputWhere and define entire custom dto here if needed 
   **/
}

@InputType()
export class ProcessedSearchByMapSearchSoftRemoveInputDto implements SoftRemoveInputCRUDTypeDefinition{
  @Field(() => [ProcessedSearchByMapSearchSoftRemoveInputWhereDto], {nullable: true, description: CrudDefMetaDesc.softRemove_where})
  @Validate(OnlyOneSeachOperatorAllowed)
  where?: FindOptionsWhere<ProcessedSearchByMapSearchSoftRemoveInputWhereDto>[];
}


// ████ SOFT REMOVE OUTPUT DTO ████████████████████████████████████████████████

@ObjectType()
@Directive('@shareable')
export class ProcessedSearchByMapSearchSoftRemoveOutputAffectedRowsDto extends ProcessedSearchByMapSearchFindOutputRowsDto implements SoftRemoveOutputAffectedRowsCRUDTypeDefinition{
  /**
   * avoiding redundant code
   * considering whatever FindOutputRows return, same apply to SoftRemoveOutputAffectedRows so extending class
   * just add what is new or different for SoftRemoveOutputAffectedRows, that means it's 100% customisable
   * you can also remove extends FindOutputRows and define entire custom dto here if needed 
   **/
}
@ObjectType()
@Directive('@shareable')
export class ProcessedSearchByMapSearchSoftRemoveOutputDto extends CrudAffectedDto implements SoftRemoveOutputCRUDTypeDefinition{
  /**
   * avoiding redundant code
   * considering whatever AffectedDto return, same apply to SoftRemoveOutput so extending class
   * just add what is new or different for SoftRemoveOutput, that means it's 100% customisable
   * you can also remove extends AffectedDto and define entire custom dto here if needed 
   **/

  @Field(() => [ProcessedSearchByMapSearchEntity]) 
  declare affectedRows?: ProcessedSearchByMapSearchEntity[] | any
}

/**
 * █████████████████████████████████████████████████████████████
 * █ REMOVE DTO ███████████████████████████████████████████
 * █████████████████████████████████████████████████████████████
**/
// unlike soft delete, this operation first get the data from database and after run the operation, so it's complex but provide more and clear information about operation

export class ProcessedSearchByMapSearchRemoveDto extends ProcessedSearchByMapSearchEntity implements RemoveDtoCRUDTypeDefinition{
  static metaname: string = `${ProcessedSearchByMapSearchEntity.metaname}${RemoveArtefact}`;
  static metadesc: string = CrudDefMetaDesc.remove_metadesc;
}

// ████ REMOVE INPUT DTO ████████████████████████████████████████████████
@InputType()
export class ProcessedSearchByMapSearchRemoveInputWhereDto extends ProcessedSearchByMapSearchFindInputWhereDto implements RemoveInputWhereCRUDTypeDefinition{
  /**
   * avoiding redundant code
   * considering whatever FindInputWhere ask for input, same apply to SoftRemoveInputWhere so extending class
   * just add what is new or different for SoftRemoveInputWhere, that means it's 100% customisable
   * you can also remove extends *FindInputWhere and define entire custom dto here if needed 
   **/
}

@InputType()
export class ProcessedSearchByMapSearchRemoveInputDto implements RemoveInputCRUDTypeDefinition{
  @Field(() => [ProcessedSearchByMapSearchRemoveInputWhereDto], {nullable: true, description: CrudDefMetaDesc.remove_where})
  @Validate(OnlyOneSeachOperatorAllowed)
  where?: FindOptionsWhere<ProcessedSearchByMapSearchRemoveInputWhereDto>[];
}


// ████ REMOVE OUTPUT DTO ████████████████████████████████████████████████

@ObjectType()
@Directive('@shareable')
export class ProcessedSearchByMapSearchRemoveOutputAffectedRowsDto extends ProcessedSearchByMapSearchFindOutputRowsDto implements RemoveOutputAffectedRowsCRUDTypeDefinition{
  /**
   * avoiding redundant code
   * considering whatever FindOutputRows return, same apply to SoftRemoveOutputAffectedRows so extending class
   * just add what is new or different for SoftRemoveOutputAffectedRows, that means it's 100% customisable
   * you can also remove extends FindOutputRows and define entire custom dto here if needed 
   **/
}
@ObjectType()
@Directive('@shareable')
export class ProcessedSearchByMapSearchRemoveOutputDto extends CrudAffectedDto implements RemoveOutputCRUDTypeDefinition{
  /**
   * avoiding redundant code
   * considering whatever AffectedDto return, same apply to SoftRemoveOutput so extending class
   * just add what is new or different for SoftRemoveOutput, that means it's 100% customisable
   * you can also remove extends AffectedDto and define entire custom dto here if needed 
   **/

  @Field(() => [ProcessedSearchByMapSearchEntity]) 
  declare affectedRows?: ProcessedSearchByMapSearchEntity[] | any
}

/**
 * █████████████████████████████████████████████████████████████
 * █ RECOVER DTO ████████████████████████████████████████████████
 * █████████████████████████████████████████████████████████████
**/
// unlike soft delete, this operation first get the data from database and after run the operation, so it's complex but provide more and clear information about operation

export class ProcessedSearchByMapSearchRecoverDto extends ProcessedSearchByMapSearchEntity implements RecoverDtoCRUDTypeDefinition{
  static metaname: string = `${ProcessedSearchByMapSearchEntity.metaname}${RecoverArtefact}`;
  static metadesc: string = CrudDefMetaDesc.recover_metadesc;
}

// ████ RECOVER INPUT DTO ██████████████████████████████████████████████████████

@InputType()
export class ProcessedSearchByMapSearchRecoverInputWhereDto extends ProcessedSearchByMapSearchFindInputWhereDto implements RecoverInputWhereCRUDTypeDefinition{
/**
 * avoiding redundant code
 * considering whatever FindInputWhere ask for input, same apply to SoftDeleteInputWhere so extending class
 * just add what is new or different for SoftDeleteInputWhere, that means it's 100% customisable
 * you can also remove extends *FindInputWhere and define entire custom dto here if needed 
 **/
}

@InputType()
export class ProcessedSearchByMapSearchRecoverInputDto implements RecoverInputCRUDTypeDefinition{
  @Field(() => [ProcessedSearchByMapSearchRecoverInputWhereDto], {nullable: true, description: CrudDefMetaDesc.recover_where})
  @Validate(OnlyOneSeachOperatorAllowed)
  where?: FindOptionsWhere<ProcessedSearchByMapSearchRecoverInputWhereDto>[];
}

// ████ RECOVER OUTPUT DTO ██████████████████████████████████████████████████████

@ObjectType()
@Directive('@shareable')
export class ProcessedSearchByMapSearchRecoverOutputAffectedRowsDto extends ProcessedSearchByMapSearchFindOutputRowsDto implements RecoverOutputAffectedRowsCRUDTypeDefinition{
  /**
   * avoiding redundant code
   * considering whatever FindOutputRows return, same apply to RecoverOutputAffectedRows so extending class
   * just add what is new or different for RecoverOutputAffectedRows, that means it's 100% customisable
   * you can also remove extends FindOutputRows and define entire custom dto here if needed 
   **/
}

@ObjectType()
@Directive('@shareable')
export class ProcessedSearchByMapSearchRecoverOutputDto extends CrudAffectedDto implements RecoverOutputCRUDTypeDefinition{
  /**
   * avoiding redundant code
   * considering whatever AffectedDto return, same apply to RecoverOutput so extending class
   * just add what is new or different for RecoverOutput, that means it's 100% customisable
   * you can also remove extends AffectedDto and define entire custom dto here if needed 
   **/

  @Field(() => [ProcessedSearchByMapSearchEntity]) 
  declare affectedRows?: ProcessedSearchByMapSearchEntity[] | any;
}

/**
 * █████████████████████████████████████████████████████████████
 * █ UPLOAD DTO ████████████████████████████████████████████████
 * █████████████████████████████████████████████████████████████
**/

export class ProcessedSearchByMapSearchUploadDto extends ProcessedSearchByMapSearchEntity implements UploadDtoCRUDTypeDefinition {
  static metaname: string = `${ProcessedSearchByMapSearchEntity?.metaname}${UploadArtefact}`;
  static metadesc: string = CrudDefMetaDesc.upload_metadesc;
}

// ████ UPLOAD INPUT DTO ████████████████████████████████████████████████
@InputType()
export class ProcessedSearchByMapSearchUploadInputDto extends UploadInputDto implements UploadInputArtefactCRUDTypeDefinition {
@Field(() => ProcessedSearchByMapSearchUploadRefTypeEnum, {nullable: false, description: CrudDefMetaDesc.upload_ref_type})
@IsNotEmpty()
ref_type!: ProcessedSearchByMapSearchUploadRefTypeEnum;
}

// ████ UPLOAD OUTPUT DTO ███████████████████████████████████████████████
@ObjectType()
@Directive('@shareable')
export class ProcessedSearchByMapSearchUploadOutputDto extends UploadOutputDto implements UploadOutputArtefactCRUDTypeDefinition {
@Field(() => ProcessedSearchByMapSearchUploadRefTypeEnum, {nullable: true, description: CrudDefMetaDesc.upload_ref_type})
ref_type?: ProcessedSearchByMapSearchUploadRefTypeEnum;
}

/**
* █████████████████████████████████████████████████████████████
* █ UPLOAD DELETE DTO █████████████████████████████████████████
* █████████████████████████████████████████████████████████████
**/

export class ProcessedSearchByMapSearchUploadDeleteDto extends ProcessedSearchByMapSearchEntity implements UploadDeleteDtoCRUDTypeDefinition {
static metaname: string = `${ProcessedSearchByMapSearchEntity?.metaname}${UploadDeleteArtefact}`;
static metadesc: string = CrudDefMetaDesc.upload_delete_metadesc;
}

// ████ UPLOAD DELETE INPUT DTO ████████████████████████████████████████████████
@InputType()
export class ProcessedSearchByMapSearchUploadDeleteInputDto extends UploadDeleteInputDto implements UploadDeleteInputArtefactCRUDTypeDefinition {
@Field(() => ProcessedSearchByMapSearchUploadRefTypeEnum, {nullable: false, description: CrudDefMetaDesc.upload_ref_type})
@IsNotEmpty()
ref_type!: ProcessedSearchByMapSearchUploadRefTypeEnum;
}

// ████ UPLOAD DELETE OUTPUT DTO ███████████████████████████████████████████████
@ObjectType()
@Directive('@shareable')
export class ProcessedSearchByMapSearchUploadDeleteOutputDto extends UploadDeleteOutputDto implements UploadDeleteOutputArtefactCRUDTypeDefinition {
@Field(() => ProcessedSearchByMapSearchUploadRefTypeEnum, {nullable: true, description: CrudDefMetaDesc.upload_ref_type})
ref_type?: ProcessedSearchByMapSearchUploadRefTypeEnum;
}