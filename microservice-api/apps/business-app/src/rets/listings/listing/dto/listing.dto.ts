import { CreateArtefact, CreateDtoCRUDTypeDefinition, CreateInputCRUDTypeDefinition, CreateOutputCRUDTypeDefinition, CrudDefMetaDesc, DateTime, DeleteArtefact, DeleteDtoCRUDTypeDefinition, DeleteInputCRUDTypeDefinition, DeleteOutputCRUDTypeDefinition, FindArtefact, FindDtoCRUDTypeDefinition, FindInputGroupByCRUDTypeDefinition, FindInputSortOrderCRUDTypeDefinition, FindInputCRUDTypeDefinition, FindInputWhereCRUDTypeDefinition, FindOneByIdArtefact, FindOperatorDto, FindOutputPaginationDto, FindOutputCRUDTypeDefinition, OnlyOneSeachOperatorAllowed, RecordSortDirectionEnum, RestoreArtefact, RestoreDtoCRUDTypeDefinition, RestoreInputCRUDTypeDefinition, SoftDeleteArtefact, SoftDeleteDtoCRUDTypeDefinition, SoftDeleteInputCRUDTypeDefinition, SoftDeleteOutputCRUDTypeDefinition, UpdateArtefact, UpdateDtoCRUDTypeDefinition, UpdateInputSetsCRUDTypeDefinition, UpdateInputCRUDTypeDefinition, UpdateInputWhereCRUDTypeDefinition, UpdateOutputCRUDTypeDefinition, SoftDeleteInputWhereCRUDTypeDefinition, RestoreInputWhereCRUDTypeDefinition, RestoreOutputCRUDTypeDefinition, UpsertDtoCRUDTypeDefinition, UpsertArtefact, UpsertInputCRUDTypeDefinition, UpsertOutputCRUDTypeDefinition, UpsertStatusEnum, SoftRemoveDtoCRUDTypeDefinition, SoftRemoveArtefact, SoftRemoveInputWhereCRUDTypeDefinition, SoftRemoveInputCRUDTypeDefinition, SoftRemoveOutputCRUDTypeDefinition, RemoveDtoCRUDTypeDefinition, RemoveArtefact, RemoveInputCRUDTypeDefinition, RemoveOutputCRUDTypeDefinition, SoftRemoveOutputAffectedRowsCRUDTypeDefinition, FindOutputRowsCRUDTypeDefinition, UpdateOutputAffectedRowsCRUDTypeDefinition, RemoveOutputAffectedRowsCRUDTypeDefinition, RecoverDtoCRUDTypeDefinition, RecoverArtefact, RecoverInputCRUDTypeDefinition, RecoverOutputCRUDTypeDefinition, RecoverInputWhereCRUDTypeDefinition, RecoverOutputAffectedRowsCRUDTypeDefinition, FindInputDtoCRUDTypeDefinition, FindOneByIdInputCRUDTypeDefinition, FindInputPaginationOptionsDto, FindOutputPaginationOptionsDto, IdInputDto, RemoveInputWhereCRUDTypeDefinition, DeleteInputWhereCRUDTypeDefinition, UploadInputDto, UploadOutputDto, UploadDeleteInputDto, UploadDeleteOutputDto, WithDeletedInputDto } from "@libs/library-app";
import { RetsListingEntityMeta as meta, RetsListingEntity } from "../entities/listing.entity";
import { Directive, Field, Float, InputType, Int, IntersectionType, ObjectType, PartialType } from "@nestjs/graphql";
import { IsNotEmpty, IsNumber, IsOptional, Validate } from "class-validator";
import { FindManyOptions, FindOptionsOrder, FindOptionsWhere } from "typeorm";
import { Exclude } from "class-transformer";
import { CrudAffectedDto, UpsertOutputProcessStatusDto } from "@libs/library-app";
import { UploadArtefact, UploadDeleteArtefact, UploadDeleteDtoCRUDTypeDefinition, UploadDeleteInputArtefactCRUDTypeDefinition, UploadDeleteOutputArtefactCRUDTypeDefinition, UploadDtoCRUDTypeDefinition, UploadInputArtefactCRUDTypeDefinition, UploadOutputArtefactCRUDTypeDefinition } from "@libs/library-app/crud/crud.type";
import { RetsListingUploadRefTypeEnum } from "../listing.enum";
import { RetsMlsProviderFindInputWhereDto } from "../../mls-provider/dto/mls.provider.dto";


/**
 * █████████████████████████████████████████████████████████████
 * ██ DO NOT CHANGE IN THIS FILE IT WILL CRASH THE APP        ██
 * █████████████████████████████████████████████████████████████
**/

/**
 * # [done] ['../entities/listing.entity', './dto/listing.dto'] . Hint: find [ /listing. => and replace with ] [ /your-module. ] 
 * # [done] do not break some dependences which required this class
 * # [done] module [RetsListing]
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
export class RetsListingDto extends RetsListingEntity implements FindInputDtoCRUDTypeDefinition{
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
    declare mlsp_id?: any;
    declare mls_num?: any;
    declare listing_key?: any;
    declare price_diff?: any;
    declare pic_downloaded?: any;
    declare pic_download_error?: any;
    declare pic_updated?: any;
    declare latlong_downloaded?: any;
    declare latlong_tppltf_id?: any;
    declare created_timestamp?: any;
    declare created?: any;
    declare updated?: any;
    declare deleted?: any;
    declare property_status?: any;
    declare property_style?: any;
    declare property_type?: any;
    declare subtype?: any;
    declare display_address?: any;
    declare address?: any;
    declare unit_no?: any;
    declare street_dir_prefix?: any;
    declare street_dir_suffix?: any;
    declare street_number_modifier?: any;
    declare street_name?: any;
    declare street_number?: any;
    declare street_suffix?: any;
    declare city_name?: any;
    declare state?: any;
    declare zipcode?: any;
    declare county?: any;
    declare sub_condo_name?: any;
    declare subdivision?: any;
    declare baths?: any;
    declare beds?: any;
    declare dom?: any;
    declare listing_date?: any;
    declare last_photo_date?: any;
    declare last_update_date?: any;
    declare latitude?: any;
    declare longitude?: any;
    declare list_price?: any;
    declare lot_size?: any;
    declare main_sqft?: any;
    declare main_photo_url?: any;
    declare original_entry_timestamp?: any;
    declare original_list_price?: any;
    declare property_desc?: any;
    declare sqft?: any;
    declare sold_date?: any;
    declare sold_price?: any;
    declare stories?: any;
    declare tax_year?: any;
    declare tax?: any;
    declare total_floor?: any;
    declare total_garage?: any;
    declare total_parking?: any;
    declare total_photos?: any;
    declare total_rooms?: any;
    declare total_units?: any;
    declare unit_floor?: any;
    declare yearbuilt?: any;
    declare office_id?: any;
    declare agent_id?: any;
    declare co_agent_id?: any;
    declare co_agent_name?: any;
    declare co_list_agent_email?: any;
    declare co_list_agent_full_name?: any;
    declare co_office_id?: any;
    declare co_office_name?: any;
    declare buyer_agent_id?: any;
    declare seller_agent_id?: any;
    declare area?: any;
    declare baths_full?: any;
    declare baths_half?: any;
    declare elementary_school?: any;
    declare garage?: any;
    declare heating?: any;
    declare high_school?: any;
    declare is_openhouse?: any;
    declare is_reo?: any;
    declare is_shortsale?: any;
    declare is_spa?: any;
    declare is_waterfront?: any;
    declare middle_school?: any;
    declare parking_features?: any;

    declare fr_mlsp_id?: any;
}

/**
 * █████████████████████████████████████████████████████████████
 * █ FIND DTO ██████████████████████████████████████████████████
 * █████████████████████████████████████████████████████████████
**/
@ObjectType({ isAbstract: true })
@Directive('@shareable')
export class RetsListingFindDto extends RetsListingEntity implements FindDtoCRUDTypeDefinition{
    static metaname: string = `${RetsListingEntity?.metaname}${FindArtefact}`;
    static metadesc: string = CrudDefMetaDesc.find_metadesc;
}


// ████ FIND INPUT DTO ████████████████████████████████████████████████
 

@InputType()
export class RetsListingFindInputWhereDto extends RetsListingDto implements FindInputWhereCRUDTypeDefinition{
    @Field(() => FindOperatorDto, {nullable: true, description: meta?.id.desc})
    @IsOptional()
    declare id?: FindOperatorDto;    

    @Field(() => FindOperatorDto, {nullable: true, description: meta?.mlsp_id.desc})
    @IsOptional()
    declare mlsp_id?: FindOperatorDto; 

    @Field(() => FindOperatorDto, {nullable: true, description: meta?.mls_num.desc})        
    @IsOptional()
    declare mls_num?: FindOperatorDto;

    @Field(() => FindOperatorDto, {nullable: true, description: meta?.listing_key.desc})        
    @IsOptional()
    declare listing_key?: FindOperatorDto;

    @Field(() => FindOperatorDto, {nullable: true, description: meta?.price_diff.desc})        
    @IsOptional()
    declare price_diff?: FindOperatorDto;

    @Field(() => FindOperatorDto, {nullable: true, description: meta?.pic_downloaded.desc})        
    @IsOptional()
    declare pic_downloaded?: FindOperatorDto;

    @Field(() => FindOperatorDto, {nullable: true, description: meta?.pic_download_error.desc})        
    @IsOptional()
    declare pic_download_error?: FindOperatorDto;

    @Field(() => FindOperatorDto, {nullable: true, description: meta?.latlong_downloaded.desc})        
    @IsOptional()
    declare latlong_downloaded?: FindOperatorDto;

    @Field(() => FindOperatorDto, {nullable: true, description: meta?.created_timestamp.desc})        
    @IsOptional()
    declare created_timestamp?: FindOperatorDto;

    @Field(() => FindOperatorDto, {nullable: true, description: meta?.created.desc})
    @IsOptional()
    declare created?: FindOperatorDto;

    @Field(() => FindOperatorDto, {nullable: true, description: meta?.updated.desc})
    @IsOptional()
    declare updated?: FindOperatorDto;

    @Field(() => FindOperatorDto, {nullable: true, description: meta?.deleted.desc})
    @IsOptional()
    declare deleted?: FindOperatorDto;

    @Field(() => FindOperatorDto, {nullable: true, description: meta?.property_status.desc})        
    @IsOptional()
    declare property_status?: FindOperatorDto;

    @Field(() => FindOperatorDto, {nullable: true, description: meta?.property_style.desc})        
    @IsOptional()
    declare property_style?: FindOperatorDto;

    @Field(() => FindOperatorDto, {nullable: true, description: meta?.property_type.desc})        
    @IsOptional()
    declare property_type?: FindOperatorDto;

    @Field(() => FindOperatorDto, {nullable: true, description: meta?.subtype.desc})        
    @IsOptional()
    declare subtype?: FindOperatorDto;

    @Field(() => FindOperatorDto, {nullable: true, description: meta?.display_address.desc})        
    @IsOptional()
    declare display_address?: FindOperatorDto;

    @Field(() => FindOperatorDto, {nullable: true, description: meta?.address.desc})        
    @IsOptional()
    declare address?: FindOperatorDto;

    @Field(() => FindOperatorDto, {nullable: true, description: meta?.unit_no.desc})        
    @IsOptional()
    declare unit_no?: FindOperatorDto;

    @Field(() => FindOperatorDto, {nullable: true, description: meta?.street_dir_suffix.desc})        
    @IsOptional()
    declare street_dir_suffix?: FindOperatorDto;

    @Field(() => FindOperatorDto, {nullable: true, description: meta?.street_name.desc})        
    @IsOptional()
    declare street_name?: FindOperatorDto;

    @Field(() => FindOperatorDto, {nullable: true, description: meta?.street_number.desc})        
    @IsOptional()
    declare street_number?: FindOperatorDto;

    @Field(() => FindOperatorDto, {nullable: true, description: meta?.street_suffix.desc})        
    @IsOptional()
    declare street_suffix?: FindOperatorDto;

    @Field(() => FindOperatorDto, {nullable: true, description: meta?.city_name.desc})        
    @IsOptional()
    declare city_name?: FindOperatorDto;

    @Field(() => FindOperatorDto, {nullable: true, description: meta?.state.desc})        
    @IsOptional()
    declare state?: FindOperatorDto;

    @Field(() => FindOperatorDto, {nullable: true, description: meta?.zipcode.desc})        
    @IsOptional()
    declare zipcode?: FindOperatorDto;

    @Field(() => FindOperatorDto, {nullable: true, description: meta?.county.desc})        
    @IsOptional()
    declare county?: FindOperatorDto;

    @Field(() => FindOperatorDto, {nullable: true, description: meta?.baths.desc})        
    @IsOptional()
    declare baths?: FindOperatorDto;

    @Field(() => FindOperatorDto, {nullable: true, description: meta?.beds.desc})        
    @IsOptional()
    declare beds?: FindOperatorDto;

    @Field(() => FindOperatorDto, {nullable: true, description: meta?.dom.desc})        
    @IsOptional()
    declare dom?: FindOperatorDto;

    @Field(() => FindOperatorDto, {nullable: true, description: meta?.listing_date.desc})        
    @IsOptional()
    declare listing_date?: FindOperatorDto;

    @Field(() => FindOperatorDto, {nullable: true, description: meta?.last_photo_date.desc})        
    @IsOptional()
    declare last_photo_date?: FindOperatorDto;

    @Field(() => FindOperatorDto, {nullable: true, description: meta?.last_update_date.desc})        
    @IsOptional()
    declare last_update_date?: FindOperatorDto;

    @Field(() => FindOperatorDto, {nullable: true, description: meta?.latitude.desc})        
    @IsOptional()
    declare latitude?: FindOperatorDto;

    @Field(() => FindOperatorDto, {nullable: true, description: meta?.longitude.desc})        
    @IsOptional()
    declare longitude?: FindOperatorDto;

    @Field(() => FindOperatorDto, {nullable: true, description: meta?.list_price.desc})        
    @IsOptional()
    declare list_price?: FindOperatorDto;

    @Field(() => FindOperatorDto, {nullable: true, description: meta?.lot_size.desc})        
    @IsOptional()
    declare lot_size?: FindOperatorDto;

    @Field(() => FindOperatorDto, {nullable: true, description: meta?.main_photo_url.desc})        
    @IsOptional()
    declare main_photo_url?: FindOperatorDto;

    @Field(() => FindOperatorDto, {nullable: true, description: meta?.original_entry_timestamp.desc})        
    @IsOptional()
    declare original_entry_timestamp?: FindOperatorDto;

    @Field(() => FindOperatorDto, {nullable: true, description: meta?.original_list_price.desc})        
    @IsOptional()
    declare original_list_price?: FindOperatorDto;

    @Field(() => FindOperatorDto, {nullable: true, description: meta?.sqft.desc})        
    @IsOptional()
    declare sqft?: FindOperatorDto;

    @Field(() => FindOperatorDto, {nullable: true, description: meta?.sold_date.desc})        
    @IsOptional()
    declare sold_date?: FindOperatorDto;

    @Field(() => FindOperatorDto, {nullable: true, description: meta?.sold_price.desc})        
    @IsOptional()
    declare sold_price?: FindOperatorDto;

    @Field(() => FindOperatorDto, {nullable: true, description: meta?.total_floor.desc})        
    @IsOptional()
    declare total_floor?: FindOperatorDto;

    @Field(() => FindOperatorDto, {nullable: true, description: meta?.total_garage.desc})        
    @IsOptional()
    declare total_garage?: FindOperatorDto;

    @Field(() => FindOperatorDto, {nullable: true, description: meta?.total_parking.desc})        
    @IsOptional()
    declare total_parking?: FindOperatorDto;

    @Field(() => FindOperatorDto, {nullable: true, description: meta?.total_photos.desc})        
    @IsOptional()
    declare total_photos?: FindOperatorDto;

    @Field(() => FindOperatorDto, {nullable: true, description: meta?.total_rooms.desc})        
    @IsOptional()
    declare total_rooms?: FindOperatorDto;

    @Field(() => FindOperatorDto, {nullable: true, description: meta?.total_units.desc})        
    @IsOptional()
    declare total_units ?: FindOperatorDto;

    @Field(() => FindOperatorDto, {nullable: true, description: meta?.unit_floor.desc})        
    @IsOptional()
    declare unit_floor?: FindOperatorDto;

    @Field(() => FindOperatorDto, {nullable: true, description: meta?.yearbuilt.desc})        
    @IsOptional()
    declare yearbuilt?: FindOperatorDto;

    @Field(() => FindOperatorDto, {nullable: true, description: meta?.office_id.desc})        
    @IsOptional()
    declare office_id?: FindOperatorDto;

    @Field(() => FindOperatorDto, {nullable: true, description: meta?.agent_id.desc})        
    @IsOptional()
    declare agent_id?: FindOperatorDto;

    @Field(() => FindOperatorDto, {nullable: true, description: meta?.co_agent_id.desc})        
    @IsOptional()
    declare co_agent_id?: FindOperatorDto;

    @Field(() => FindOperatorDto, {nullable: true, description: meta?.co_agent_name.desc})        
    @IsOptional()
    declare co_agent_name?: FindOperatorDto;

    @Field(() => FindOperatorDto, {nullable: true, description: meta?.co_list_agent_email.desc})        
    @IsOptional()
    declare co_list_agent_email?: FindOperatorDto;

    @Field(() => FindOperatorDto, {nullable: true, description: meta?.co_office_id.desc})        
    @IsOptional()
    declare co_office_id?: FindOperatorDto;

    @Field(() => FindOperatorDto, {nullable: true, description: meta?.buyer_agent_id.desc})        
    @IsOptional()
    declare buyer_agent_id?: FindOperatorDto;

    @Field(() => FindOperatorDto, {nullable: true, description: meta?.seller_agent_id.desc})        
    @IsOptional()
    declare seller_agent_id?: FindOperatorDto;

    @Field(() => FindOperatorDto, {nullable: true, description: meta?.area.desc})        
    @IsOptional()
    declare area?: FindOperatorDto;

    @Field(() => FindOperatorDto, {nullable: true, description: meta?.baths_full.desc})        
    @IsOptional()
    declare baths_full?: FindOperatorDto;

    @Field(() => FindOperatorDto, {nullable: true, description: meta?.baths_half.desc})        
    @IsOptional()
    declare baths_half?: FindOperatorDto;

    @Field(() => FindOperatorDto, {nullable: true, description: meta?.is_openhouse.desc})        
    @IsOptional()
    declare is_openhouse?: FindOperatorDto;

    @Field(() => FindOperatorDto, {nullable: true, description: meta?.is_spa.desc})        
    @IsOptional()
    declare is_spa?: FindOperatorDto;

    @Field(() => FindOperatorDto, {nullable: true, description: meta?.is_waterfront.desc})        
    @IsOptional()
    declare is_waterfront ?: FindOperatorDto;

    
    // ████ FR_ WHERE: INTERNAL RELATIONS WHERE ████████████████████████████████████████████████
  
    @Field(() => [RetsMlsProviderFindInputWhereDto], {nullable: true, description: meta?.fr_mlsp_id.desc})
    @IsOptional()
    declare fr_mlsp_id?: RetsMlsProviderFindInputWhereDto[];
}

@InputType()
export class RetsListingFindInputSortOrderDto implements FindOptionsOrder<RetsListingDto>, FindInputSortOrderCRUDTypeDefinition{
    
    @Field(() => RecordSortDirectionEnum, { nullable: true }) 
    @IsOptional()
    id?: RecordSortDirectionEnum;

    @Field(() => RecordSortDirectionEnum, { nullable: true }) 
    @IsOptional()
    mlsp_id?: RecordSortDirectionEnum;

    @Field(() => RecordSortDirectionEnum, { nullable: true }) 
    @IsOptional()
    mls_num?: RecordSortDirectionEnum;

    @Field(() => RecordSortDirectionEnum, { nullable: true }) 
    @IsOptional()
    listing_key?: RecordSortDirectionEnum;

    @Field(() => RecordSortDirectionEnum, { nullable: true }) 
    @IsOptional()
    price_diff?: RecordSortDirectionEnum;

    @Field(() => RecordSortDirectionEnum, { nullable: true }) 
    @IsOptional()
    pic_downloaded?: RecordSortDirectionEnum;

    @Field(() => RecordSortDirectionEnum, { nullable: true }) 
    @IsOptional()
    pic_download_error?: RecordSortDirectionEnum;

    @Field(() => RecordSortDirectionEnum, { nullable: true }) 
    @IsOptional()
    pic_updated?: RecordSortDirectionEnum;

    @Field(() => RecordSortDirectionEnum, { nullable: true }) 
    @IsOptional()
    latlong_downloaded?: RecordSortDirectionEnum;

    @Field(() => RecordSortDirectionEnum, { nullable: true }) 
    @IsOptional()
    created_timestamp?: RecordSortDirectionEnum;

    @Field(() => RecordSortDirectionEnum, { nullable: true })
    @IsOptional()
    created?: RecordSortDirectionEnum;

    @Field(() => RecordSortDirectionEnum, { nullable: true })
    @IsOptional()
    updated?: RecordSortDirectionEnum;

    @Field(() => RecordSortDirectionEnum, { nullable: true })
    @IsOptional()
    deleted?: RecordSortDirectionEnum;

    @Field(() => RecordSortDirectionEnum, { nullable: true }) 
    @IsOptional()
    property_status?: RecordSortDirectionEnum;

    @Field(() => RecordSortDirectionEnum, { nullable: true }) 
    @IsOptional()
    property_style?: RecordSortDirectionEnum;

    @Field(() => RecordSortDirectionEnum, { nullable: true }) 
    @IsOptional()
    property_type?: RecordSortDirectionEnum;

    @Field(() => RecordSortDirectionEnum, { nullable: true }) 
    @IsOptional()
    subtype?: RecordSortDirectionEnum;

    @Field(() => RecordSortDirectionEnum, { nullable: true }) 
    @IsOptional()
    display_address?: RecordSortDirectionEnum;

    @Field(() => RecordSortDirectionEnum, { nullable: true }) 
    @IsOptional()
    address?: RecordSortDirectionEnum;

    @Field(() => RecordSortDirectionEnum, { nullable: true }) 
    @IsOptional()
    unit_no?: RecordSortDirectionEnum;

    @Field(() => RecordSortDirectionEnum, { nullable: true }) 
    @IsOptional()
    street_dir_suffix?: RecordSortDirectionEnum;

    @Field(() => RecordSortDirectionEnum, { nullable: true }) 
    @IsOptional()
    street_name?: RecordSortDirectionEnum;

    @Field(() => RecordSortDirectionEnum, { nullable: true }) 
    @IsOptional()
    street_number?: RecordSortDirectionEnum;

    @Field(() => RecordSortDirectionEnum, { nullable: true }) 
    @IsOptional()
    street_suffix?: RecordSortDirectionEnum;

    @Field(() => RecordSortDirectionEnum, { nullable: true }) 
    @IsOptional()
    city_name?: RecordSortDirectionEnum;

    @Field(() => RecordSortDirectionEnum, { nullable: true }) 
    @IsOptional()
    state?: RecordSortDirectionEnum;

    @Field(() => RecordSortDirectionEnum, { nullable: true }) 
    @IsOptional()
    zipcode?: RecordSortDirectionEnum;

    @Field(() => RecordSortDirectionEnum, { nullable: true }) 
    @IsOptional()
    county?: RecordSortDirectionEnum;

    @Field(() => RecordSortDirectionEnum, { nullable: true }) 
    @IsOptional()
    baths?: RecordSortDirectionEnum;

    @Field(() => RecordSortDirectionEnum, { nullable: true })
    @IsOptional()
    beds?: RecordSortDirectionEnum;

    @Field(() => RecordSortDirectionEnum, { nullable: true })
    @IsOptional()
    dom?: RecordSortDirectionEnum;

    @Field(() => RecordSortDirectionEnum, { nullable: true })
    @IsOptional()
    listing_date?: RecordSortDirectionEnum;

    @Field(() => RecordSortDirectionEnum, { nullable: true }) 
    @IsOptional()
    last_photo_date?: RecordSortDirectionEnum;

    @Field(() => RecordSortDirectionEnum, { nullable: true }) 
    @IsOptional()
    last_update_date?: RecordSortDirectionEnum;

    @Field(() => RecordSortDirectionEnum, { nullable: true }) 
    @IsOptional()
    latitude?: RecordSortDirectionEnum;

    @Field(() => RecordSortDirectionEnum, { nullable: true }) 
    @IsOptional()
    longitude?: RecordSortDirectionEnum;

    @Field(() => RecordSortDirectionEnum, { nullable: true }) 
    @IsOptional()
    list_price?: RecordSortDirectionEnum;

    @Field(() => RecordSortDirectionEnum, { nullable: true }) 
    @IsOptional()
    lot_size?: RecordSortDirectionEnum;

    @Field(() => RecordSortDirectionEnum, { nullable: true }) 
    @IsOptional()
    main_photo_url?: RecordSortDirectionEnum;

    @Field(() => RecordSortDirectionEnum, { nullable: true }) 
    @IsOptional()
    original_entry_timestamp?: RecordSortDirectionEnum;

    @Field(() => RecordSortDirectionEnum, { nullable: true }) 
    @IsOptional()
    original_list_price?: RecordSortDirectionEnum;

    @Field(() => RecordSortDirectionEnum, { nullable: true }) 
    @IsOptional()
    sqft?: RecordSortDirectionEnum;

    @Field(() => RecordSortDirectionEnum, { nullable: true }) 
    @IsOptional()
    sold_date?: RecordSortDirectionEnum;

    @Field(() => RecordSortDirectionEnum, { nullable: true }) 
    @IsOptional()
    sold_price?: RecordSortDirectionEnum;

    @Field(() => RecordSortDirectionEnum, { nullable: true }) 
    @IsOptional()
    total_floor?: RecordSortDirectionEnum;

    @Field(() => RecordSortDirectionEnum, { nullable: true }) 
    @IsOptional()
    total_garage?: RecordSortDirectionEnum;

    @Field(() => RecordSortDirectionEnum, { nullable: true })
    @IsOptional()
    total_parking?: RecordSortDirectionEnum;

    @Field(() => RecordSortDirectionEnum, { nullable: true })
    @IsOptional()
    total_photos?: RecordSortDirectionEnum;

    @Field(() => RecordSortDirectionEnum, { nullable: true })
    @IsOptional()
    total_rooms?: RecordSortDirectionEnum;

    @Field(() => RecordSortDirectionEnum, { nullable: true }) 
    @IsOptional()
    total_units?: RecordSortDirectionEnum;

    @Field(() => RecordSortDirectionEnum, { nullable: true }) 
    @IsOptional()
    yearbuilt?: RecordSortDirectionEnum;

    @Field(() => RecordSortDirectionEnum, { nullable: true }) 
    @IsOptional()
    office_id?: RecordSortDirectionEnum;

    @Field(() => RecordSortDirectionEnum, { nullable: true }) 
    @IsOptional()
    agent_id?: RecordSortDirectionEnum;

    @Field(() => RecordSortDirectionEnum, { nullable: true }) 
    @IsOptional()
    co_agent_id?: RecordSortDirectionEnum;

    @Field(() => RecordSortDirectionEnum, { nullable: true }) 
    @IsOptional()
    co_agent_name?: RecordSortDirectionEnum;

    @Field(() => RecordSortDirectionEnum, { nullable: true }) 
    @IsOptional()
    co_list_agent_email?: RecordSortDirectionEnum;

    @Field(() => RecordSortDirectionEnum, { nullable: true }) 
    @IsOptional()
    co_office_id?: RecordSortDirectionEnum;

    @Field(() => RecordSortDirectionEnum, { nullable: true }) 
    @IsOptional()
    buyer_agent_id?: RecordSortDirectionEnum;

    @Field(() => RecordSortDirectionEnum, { nullable: true }) 
    @IsOptional()
    seller_agent_id?: RecordSortDirectionEnum;

    @Field(() => RecordSortDirectionEnum, { nullable: true }) 
    @IsOptional()
    area?: RecordSortDirectionEnum;

    @Field(() => RecordSortDirectionEnum, { nullable: true }) 
    @IsOptional()
    baths_full?: RecordSortDirectionEnum;

    @Field(() => RecordSortDirectionEnum, { nullable: true }) 
    @IsOptional()
    baths_half?: RecordSortDirectionEnum;

    @Field(() => RecordSortDirectionEnum, { nullable: true }) 
    @IsOptional()
    is_openhouse?: RecordSortDirectionEnum;

    @Field(() => RecordSortDirectionEnum, { nullable: true }) 
    @IsOptional()
    is_spa?: RecordSortDirectionEnum;

    @Field(() => RecordSortDirectionEnum, { nullable: true }) 
    @IsOptional()
    is_waterfront?: RecordSortDirectionEnum;
}

@InputType()
export class RetsListingFindInputGroupByDto implements FindOptionsOrder<RetsListingDto>, FindInputGroupByCRUDTypeDefinition{
    
    @Field(() => Boolean, { nullable: true })
    @IsOptional()
    mlsp_id?: boolean;

    @Field(() => Boolean, { nullable: true })
    @IsOptional()
    mls_num?: boolean;

    @Field(() => Boolean, { nullable: true })
    @IsOptional()
    listing_key?: boolean;

    @Field(() => Boolean, { nullable: true })
    @IsOptional()
    price_diff?: boolean;

    @Field(() => Boolean, { nullable: true })
    @IsOptional()
    pic_downloaded?: boolean;

    @Field(() => Boolean, { nullable: true })
    @IsOptional()
    pic_download_error?: boolean;

    @Field(() => Boolean, { nullable: true })
    @IsOptional()
    pic_updated?: boolean;

    @Field(() => Boolean, { nullable: true })
    @IsOptional()
    latlong_downloaded?: boolean;

    @Field(() => Boolean, { nullable: true })
    @IsOptional()
    created?: boolean;

    @Field(() => Boolean, { nullable: true })
    @IsOptional()
    updated?: boolean;

    @Field(() => Boolean, { nullable: true })
    @IsOptional()
    deleted?: boolean;

    @Field(() => Boolean, { nullable: true })
    @IsOptional()
    property_status?: boolean;

    @Field(() => Boolean, { nullable: true })
    @IsOptional()
    property_style?: boolean;

    @Field(() => Boolean, { nullable: true })
    @IsOptional()
    property_type?: boolean;

    @Field(() => Boolean, { nullable: true })
    @IsOptional()
    subtype?: boolean;

    @Field(() => Boolean, { nullable: true })
    @IsOptional()
    display_address?: boolean;

    @Field(() => Boolean, { nullable: true })
    @IsOptional()
    address?: boolean;

    @Field(() => Boolean, { nullable: true })
    @IsOptional()
    unit_no?: boolean;

    @Field(() => Boolean, { nullable: true })
    @IsOptional()
    street_dir_suffix?: boolean;

    @Field(() => Boolean, { nullable: true })
    @IsOptional()
    street_name?: boolean;

    @Field(() => Boolean, { nullable: true })
    @IsOptional()
    street_number?: boolean;

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
    zipcode?: boolean;

    @Field(() => Boolean, { nullable: true })
    @IsOptional()
    county?: boolean;

    @Field(() => Boolean, { nullable: true })
    @IsOptional()
    baths?: boolean;

    @Field(() => Boolean, { nullable: true })
    @IsOptional()
    beds?: boolean;

    @Field(() => Boolean, { nullable: true })
    @IsOptional()
    dom?: boolean;

    @Field(() => Boolean, { nullable: true })
    @IsOptional()
    listing_date?: boolean;

    @Field(() => Boolean, { nullable: true })
    @IsOptional()
    last_photo_date?: boolean;

    @Field(() => Boolean, { nullable: true })
    @IsOptional()
    latitude?: boolean;

    @Field(() => Boolean, { nullable: true })
    @IsOptional()
    longitude?: boolean;

    @Field(() => Boolean, { nullable: true })
    @IsOptional()
    list_price?: boolean;

    @Field(() => Boolean, { nullable: true })
    @IsOptional()
    lot_size?: boolean;

    @Field(() => Boolean, { nullable: true })
    @IsOptional()
    main_photo_url?: boolean;

    @Field(() => Boolean, { nullable: true })
    @IsOptional()
    original_entry_timestamp?: boolean;

    @Field(() => Boolean, { nullable: true })
    @IsOptional()
    original_list_price?: boolean;

    @Field(() => Boolean, { nullable: true })
    @IsOptional()
    sqft?: boolean;

    @Field(() => Boolean, { nullable: true })
    @IsOptional()
    sold_date?: boolean;

    @Field(() => Boolean, { nullable: true })
    @IsOptional()
    sold_price?: boolean;

    @Field(() => Boolean, { nullable: true })
    @IsOptional()
    total_floor?: boolean;

    @Field(() => Boolean, { nullable: true })
    @IsOptional()
    total_garage?: boolean;

    @Field(() => Boolean, { nullable: true })
    @IsOptional()
    total_parking?: boolean;

    @Field(() => Boolean, { nullable: true })
    @IsOptional()
    total_photos?: boolean;

    @Field(() => Boolean, { nullable: true })
    @IsOptional()
    total_rooms?: boolean;

    @Field(() => Boolean, { nullable: true })
    @IsOptional()
    total_units?: boolean;

    @Field(() => Boolean, { nullable: true })
    @IsOptional()
    yearbuilt?: boolean;

    @Field(() => Boolean, { nullable: true })
    @IsOptional()
    office_id?: boolean;

    @Field(() => Boolean, { nullable: true })
    @IsOptional()
    agent_id?: boolean;

    @Field(() => Boolean, { nullable: true })
    @IsOptional()
    area?: boolean;

    @Field(() => Boolean, { nullable: true })
    @IsOptional()
    baths_full?: boolean;

    @Field(() => Boolean, { nullable: true })
    @IsOptional()
    baths_half?: boolean;
}

@InputType()
export class RetsListingFindInputDto extends IntersectionType(FindInputPaginationOptionsDto, WithDeletedInputDto) implements FindManyOptions<RetsListingDto>, FindInputCRUDTypeDefinition{
    // input layout design for users to perform find with various database options
  
    /**
     * Conditions to be met for the resulting set.
     * also validate the user pass only 1 operator to search for field
     */
    @Field(() => [RetsListingFindInputWhereDto], { nullable: true, description: CrudDefMetaDesc.find_where })
    @IsOptional()
    @Validate(OnlyOneSeachOperatorAllowed)
    declare where?: FindOptionsWhere<RetsListingFindInputWhereDto>;
  
  
    /**
     * Specifies how to group the rows returned by the SELECT statement.
     */
    @Field(() => RetsListingFindInputGroupByDto, { nullable: true, description: CrudDefMetaDesc.find_group_by })
    @IsOptional()
    declare groupBy?: RetsListingFindInputGroupByDto;
  
    /**
     * Sort the result set by fields using ascending or descending order.
     */
    @Field(() => RetsListingFindInputSortOrderDto, { nullable: true, description: CrudDefMetaDesc.find_order })
    @IsOptional()
    declare order?: FindOptionsOrder<RetsListingFindInputSortOrderDto>;
}


// ████ FIND OUTPUT DTO ████████████████████████████████████████████████

@ObjectType()
@Directive('@shareable')
export class RetsListingFindOutputRowsDto extends RetsListingFindDto implements FindOutputRowsCRUDTypeDefinition{
    // this DTO will be used at many palce for output object, os make sure this is properly developed
}

@ObjectType()
@Directive('@shareable')
export class RetsListingFindOutputDto extends FindOutputPaginationOptionsDto implements FindOutputCRUDTypeDefinition{
    // output layout design for users to get find response

    // we assign any because iin GRAPHQL for requuest body this rows will have fields with boolean value whether to include in response or not
    // this is very crucial to understand this structure and you need to understand how graphQL works
    @Field(() => [RetsListingEntity], {description:CrudDefMetaDesc.find_rows})
    declare rows?: RetsListingEntity | RetsListingEntity[] | any;
}

/**
 * ██████████████████████████████████████████████████████████████████████████████████████████████████████████████████
 * █ FIND ONE BY ID DTO █████████████████████████████████████████████████████████████████████████████████████████████
 * ██████████████████████████████████████████████████████████████████████████████████████████████████████████████████
**/

export class RetsListingFindOneByIdDto extends RetsListingEntity implements FindDtoCRUDTypeDefinition{
    static metaname: string = `${RetsListingEntity.metaname}${FindOneByIdArtefact}`;
    static metadesc: string = CrudDefMetaDesc.findOneById_metadesc;
}

// ████ FIND ONE BY ID INPUT DTO ████████████████████████████████████████████████

@InputType()
export class RetsListingFindOneByIdInputDto extends IntersectionType(IdInputDto, WithDeletedInputDto) implements FindOneByIdInputCRUDTypeDefinition{

}

/**
 * █████████████████████████████████████████████████████████████
 * █ CREATE DTO ████████████████████████████████████████████████
 * █████████████████████████████████████████████████████████████
**/

export class RetsListingCreateDto extends RetsListingEntity implements CreateDtoCRUDTypeDefinition {
    static metaname: string = `${RetsListingEntity.metaname}${CreateArtefact}`;
    static metadesc: string = CrudDefMetaDesc.create_metadesc;
}
// ████ CREATE INPUT DTO ████████████████████████████████████████████████

@InputType()
export class RetsListingCreateInputDto extends  RetsListingCreateDto implements CreateInputCRUDTypeDefinition {
  
    
    @Field(() => Int, {nullable: false, description: meta?.mlsp_id.desc}) 
    declare mlsp_id?: number;

    @Field(() => String, {nullable: false, description: meta?.mls_num.desc})  
    declare mls_num?: string;
    
    @Field(() => String, {nullable: false, description: meta?.listing_key.desc})  
    declare listing_key?: string;

    @Field(() => Float, {nullable: false, description: meta?.price_diff.desc})  
    declare price_diff?: number;

    @Field(() => DateTime, {nullable: true, description: meta?.pic_downloaded.desc})  
    declare pic_downloaded?: Date;

    @Field(() => DateTime, {nullable: true, description: meta?.pic_download_error.desc})  
    declare pic_download_error?: Date;

    @Field(() => DateTime, {nullable: true, description: meta?.pic_updated.desc}) 
    declare pic_updated?: Date;

    @Field(() => Int, {nullable: true, description: meta?.latlong_tppltf_id.desc})  
    declare latlong_tppltf_id?: number;

    @Field(() => DateTime, {nullable: true, description: meta?.latlong_downloaded.desc})  
    declare latlong_downloaded?: Date;

    @Field(() => DateTime, {nullable: true, description: meta?.created_timestamp.desc})  
    declare created_timestamp?: Date;

    @Field(() => String, {nullable: true, description: meta?.property_status.desc})  
    declare property_status?: string;

    @Field(() => String, {nullable: true, description: meta?.property_style.desc})  
    declare property_style?: string;

    @Field(() => String, {nullable: false, description: meta?.property_type.desc}) 
    declare property_type?: string;

    @Field(() => String, {nullable: true, description: meta?.subtype.desc})  
    declare subtype?: string;
    
    @Field(() => String, {nullable: false, description: meta?.display_address.desc})  
    declare display_address?: string;

    @Field(() => String, {nullable: false, description: meta?.address.desc})  
    declare address?: string;

    @Field(() => String, {nullable: true, description: meta?.unit_no.desc})  
    declare unit_no?: string;

    @Field(() => String, {nullable: true, description: meta?.street_dir_prefix.desc})  
    declare street_dir_prefix?: string;

    @Field(() => String, {nullable: true, description: meta?.street_dir_suffix.desc}) 
    declare street_dir_suffix?: string;

    @Field(() => String, {nullable: true, description: meta?.street_number_modifier.desc})  
    declare street_number_modifier?: string;
    
    @Field(() => String, {nullable: false, description: meta?.street_name.desc})  
    declare street_name?: string;

    @Field(() => String, {nullable: false, description: meta?.street_number.desc})  
    declare street_number?: string;

    @Field(() => String, {nullable: true, description: meta?.street_suffix.desc})  
    declare street_suffix?: string;

    @Field(() => String, {nullable: false, description: meta?.city_name.desc})  
    declare city_name?: string;

    @Field(() => String, {nullable: false, description: meta?.state.desc}) 
    declare state?: string;

    @Field(() => String, {nullable: false, description: meta?.zipcode.desc})  
    declare zipcode?: string;
    
    @Field(() => String, {nullable: true, description: meta?.county.desc})  
    declare county?: string;

    @Field(() => String, {nullable: true, description: meta?.sub_condo_name.desc})  
    declare sub_condo_name?: string;

    @Field(() => String, {nullable: true, description: meta?.subdivision.desc})  
    declare subdivision?: string;

    @Field(() => Int, {nullable: false, description: meta?.baths.desc})  
    declare baths?: number;

    @Field(() => Int, {nullable: false, description: meta?.beds.desc}) 
    declare beds?: number;

    @Field(() => Int, {nullable: true, description: meta?.dom.desc})  
    declare dom?: number;
    
    @Field(() => DateTime, {nullable: false, description: meta?.listing_date.desc})  
    declare listing_date?: Date;

    @Field(() => DateTime, {nullable: true, description: meta?.last_photo_date.desc})  
    declare last_photo_date?: Date;

    @Field(() => DateTime, {nullable: true, description: meta?.last_update_date.desc})  
    declare last_update_date?: Date;

    @Field(() => Float, {nullable: false, description: meta?.latitude.desc})  
    declare latitude?: number;

    @Field(() => Float, {nullable: false, description: meta?.longitude.desc}) 
    declare longitude?: number;

    @Field(() => Float, {nullable: false, description: meta?.list_price.desc})  
    declare list_price?: number;
    
    @Field(() => Float, {nullable: true, description: meta?.lot_size.desc})  
    declare lot_size?: number;

    @Field(() => Float, {nullable: true, description: meta?.main_sqft.desc})  
    declare main_sqft?: number;

    @Field(() => String, {nullable: true, description: meta?.main_photo_url.desc})  
    declare main_photo_url?: string;

    @Field(() => DateTime, {nullable: true, description: meta?.original_entry_timestamp.desc})  
    declare original_entry_timestamp?: Date;

    @Field(() => Float, {nullable: false, description: meta?.original_list_price.desc}) 
    declare original_list_price?: number;

    @Field(() => String, {nullable: false, description: meta?.property_desc.desc})  
    declare property_desc?: string;
    
    @Field(() => Float, {nullable: false, description: meta?.sqft.desc})  
    declare sqft?: number;

    @Field(() => DateTime, {nullable: true, description: meta?.sold_date.desc})  
    declare sold_date?: Date;

    @Field(() => Float, {nullable: true, description: meta?.sold_price.desc})  
    declare sold_price?: number;

    @Field(() => Int, {nullable: true, description: meta?.stories.desc})  
    declare stories?: number;

    @Field(() => Int, {nullable: true, description: meta?.tax_year.desc}) 
    declare tax_year?: number;

    @Field(() => Float, {nullable: true, description: meta?.tax.desc})  
    declare tax?: number;
    
    @Field(() => Int, {nullable: true, description: meta?.total_floor.desc})  
    declare total_floor?: number;

    @Field(() => Float, {nullable: false, description: meta?.total_garage.desc})  
    declare total_garage?: number;

    @Field(() => Float, {nullable: false, description: meta?.total_parking.desc})  
    declare total_parking?: number;

    @Field(() => Int, {nullable: false, description: meta?.total_photos.desc})  
    declare total_photos?: number;

    @Field(() => Int, {nullable: false, description: meta?.total_rooms.desc}) 
    declare total_rooms?: number;

    @Field(() => Int, {nullable: false, description: meta?.total_units.desc})  
    declare total_units?: number;
    
    @Field(() => Int, {nullable: true, description: meta?.unit_floor.desc})  
    declare unit_floor?: number;

    @Field(() => Int, {nullable: true, description: meta?.yearbuilt.desc})  
    declare yearbuilt?: number;

    @Field(() => String, {nullable: true, description: meta?.office_id.desc})  
    declare office_id?: string;

    @Field(() => String, {nullable: false, description: meta?.agent_id.desc})  
    declare agent_id?: string;
    
    @Field(() => String, {nullable: true, description: meta?.co_agent_id.desc})  
    declare co_agent_id?: string;

    @Field(() => String, {nullable: true, description: meta?.co_agent_name.desc}) 
    declare co_agent_name?: string;

    @Field(() => String, {nullable: true, description: meta?.co_list_agent_email.desc})  
    declare co_list_agent_email?: string;
    
    @Field(() => String, {nullable: true, description: meta?.co_list_agent_full_name.desc})  
    declare co_list_agent_full_name?: string;

    @Field(() => String, {nullable: true, description: meta?.co_office_id.desc})  
    declare co_office_id?: string;

    @Field(() => String, {nullable: true, description: meta?.co_office_name.desc})  
    declare co_office_name?: string;

    @Field(() => String, {nullable: true, description: meta?.buyer_agent_id.desc})  
    declare buyer_agent_id?: string;

    @Field(() => String, {nullable: true, description: meta?.seller_agent_id.desc}) 
    declare seller_agent_id?: string;

    @Field(() => String, {nullable: true, description: meta?.area.desc})  
    declare area?: string;
    
    @Field(() => Int, {nullable: true, description: meta?.baths_full.desc})  
    declare baths_full?: number;

    @Field(() => Int, {nullable: true, description: meta?.baths_half.desc})  
    declare baths_half?: number;

    @Field(() => String, {nullable: false, description: meta?.elementary_school.desc})  
    declare elementary_school?: string;

    @Field(() => Float, {nullable: true, description: meta?.garage.desc})  
    declare garage?: number;

    @Field(() => String, {nullable: true, description: meta?.heating.desc}) 
    declare heating?: string;

    @Field(() => String, {nullable: true, description: meta?.high_school.desc})  
    declare high_school?: string;

    @Field(() => String, {nullable: true, description: meta?.is_openhouse.desc})  
    declare is_openhouse?: string;
    
    @Field(() => String, {nullable: true, description: meta?.is_reo.desc})  
    declare is_reo?: string;

    @Field(() => String, {nullable: true, description: meta?.is_shortsale.desc})  
    declare is_shortsale?: string;

    @Field(() => String, {nullable: true, description: meta?.is_spa.desc})  
    declare is_spa?: string;

    @Field(() => String, {nullable: true, description: meta?.is_waterfront.desc})  
    declare is_waterfront?: string;

    @Field(() => String, {nullable: true, description: meta?.middle_school.desc}) 
    declare middle_school?: string;

    @Field(() => String, {nullable: true, description: meta?.parking_features.desc})  
    declare parking_features?: string;
}

// ████ CREATE OUTPUT DTO ████████████████████████████████████████████████

@ObjectType()
@Directive('@shareable')
export class RetsListingCreateOutputDto extends RetsListingFindOutputRowsDto implements CreateOutputCRUDTypeDefinition {
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


export class RetsListingUpdateDto extends RetsListingDto implements UpdateDtoCRUDTypeDefinition{
    static metaname: string = `${RetsListingEntity.metaname}${UpdateArtefact}`;
    static metadesc: string = CrudDefMetaDesc.update_metadesc;
}

// ████ UPDATE INPUT DTO ████████████████████████████████████████████████

@InputType()
export class RetsListingUpdateInputWhereDto extends RetsListingFindInputWhereDto implements UpdateInputWhereCRUDTypeDefinition{
    /**
     * avoiding redundant code
     * considering whatever FindInputWhere ask for input, same apply to UpdateInputWhere so extending class
     * just add what is new or different for UpdateInputWhere, that means it's 100% customisable
     * you can also remove extends *FindInputWhere and define entire custom dto here if needed 
     **/
}

@InputType()
export class RetsListingUpdateInputSetsDto extends PartialType(RetsListingCreateInputDto) implements UpdateInputSetsCRUDTypeDefinition {
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
export class RetsListingUpdateInputDto implements UpdateInputCRUDTypeDefinition{
    // input layout design for users to perform update with various database options
  
    /**
     * Conditions to be met for the resulting set.
     * also validate the user pass only 1 operator to search for field
     */
    @Field(() => [RetsListingUpdateInputWhereDto], { nullable: false, description: CrudDefMetaDesc.update_where })
    @IsNotEmpty()
    @Validate(OnlyOneSeachOperatorAllowed)
    where!: FindOptionsWhere<RetsListingUpdateInputWhereDto>[];

    /**
     * What to set for update
     * basically fields list of update
     */
    @Field(() => RetsListingUpdateInputSetsDto, { nullable: false, description: CrudDefMetaDesc.update_sets })
    @IsNotEmpty()
    sets!: RetsListingUpdateInputSetsDto

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
export class RetsListingUpdateOutputAffectedRowsDto extends RetsListingFindOutputRowsDto implements UpdateOutputAffectedRowsCRUDTypeDefinition{
    /**
     * avoiding redundant code
     * considering whatever FindOutputRows return, same apply to UpdateOutputAffectedRows so extending class
     * just add what is new or different for UpdateOutputAffectedRows, that means it's 100% customisable
     * you can also remove extends *FindOutputRows and define entire custom dto here if needed 
     **/
}

@ObjectType()
@Directive('@shareable')
export class RetsListingUpdateOutputDto extends CrudAffectedDto implements UpdateOutputCRUDTypeDefinition{
  @Field(() => [RetsListingEntity], {description: CrudDefMetaDesc.update_affected_rows}) 
  declare affectedRows?: RetsListingEntity[] | any; 
}


/**
 * █████████████████████████████████████████████████████████████
 * █ SOFT DELETE DTO ███████████████████████████████████████████
 * █████████████████████████████████████████████████████████████
**/
// this operation run directly withouth checking the data if exist or not, so it's quick but do not provide more information about operation

// ████ SOFT DELETE INPUT DTO ████████████████████████████████████████████████
export class RetsListingSoftDeleteDto extends RetsListingEntity implements SoftDeleteDtoCRUDTypeDefinition{
  static metaname: string = `${RetsListingEntity.metaname}${SoftDeleteArtefact}`;
  static metadesc: string = CrudDefMetaDesc.softDelete_metadesc;
}

@InputType()
export class RetsListingSoftDeleteInputWhereDto extends RetsListingFindInputWhereDto implements SoftDeleteInputWhereCRUDTypeDefinition{
  /**
   * avoiding redundant code
   * considering whatever FindInputWhere ask for input, same apply to SoftDeleteInputWhere so extending class
   * just add what is new or different for SoftDeleteInputWhere, that means it's 100% customisable
   * you can also remove extends *FindInputWhere and define entire custom dto here if needed 
   **/
}

@InputType()
export class RetsListingSoftDeleteInputDto implements SoftDeleteInputCRUDTypeDefinition{
  @Field(() => [RetsListingSoftDeleteInputWhereDto], {nullable: true, description: CrudDefMetaDesc.softDelete_where})
  @Validate(OnlyOneSeachOperatorAllowed)
  where?: FindOptionsWhere<RetsListingSoftDeleteInputWhereDto>[];
}


// ████ SOFT DELETE OUTPUT DTO ████████████████████████████████████████████████

@ObjectType()
@Directive('@shareable')
export class RetsListingSoftDeleteOutputDto extends CrudAffectedDto implements SoftDeleteOutputCRUDTypeDefinition{
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

export class RetsListingDeleteDto extends RetsListingEntity implements DeleteDtoCRUDTypeDefinition{
  static metaname: string = `${RetsListingEntity.metaname}${DeleteArtefact}`;
  static metadesc: string = CrudDefMetaDesc.delete_metadesc;
}
// ████ DELETE INPUT DTO ████████████████████████████████████████████████

@InputType()
export class RetsListingDeleteInputWhereDto extends RetsListingFindInputWhereDto implements DeleteInputWhereCRUDTypeDefinition{
  /**
   * avoiding redundant code
   * considering whatever FindInputWhere ask for input, same apply to SoftDeleteInputWhere so extending class
   * just add what is new or different for SoftDeleteInputWhere, that means it's 100% customisable
   * you can also remove extends *FindInputWhere and define entire custom dto here if needed 
   **/
}

@InputType()
export class RetsListingDeleteInputDto implements DeleteInputCRUDTypeDefinition{
  @Field(() => [RetsListingDeleteInputWhereDto], {nullable: true, description: CrudDefMetaDesc.delete_where})
  @Validate(OnlyOneSeachOperatorAllowed)
  where?: FindOptionsWhere<RetsListingDeleteInputWhereDto>[];
}


// ████ DELETE OUTPUT DTO ████████████████████████████████████████████████

@ObjectType()
@Directive('@shareable')
export class RetsListingDeleteOutputDto extends CrudAffectedDto implements DeleteOutputCRUDTypeDefinition{
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

export class RetsListingRestoreDto extends RetsListingEntity implements RestoreDtoCRUDTypeDefinition{
    static metaname: string = `${RetsListingEntity.metaname}${RestoreArtefact}`;
    static metadesc: string = CrudDefMetaDesc.restore_metadesc;
}

// ████ RESTORE INPUT DTO ██████████████████████████████████████████████████████

@InputType()
export class RetsListingRestoreInputWhereDto extends RetsListingFindInputWhereDto implements RestoreInputWhereCRUDTypeDefinition{
  /**
   * avoiding redundant code
   * considering whatever FindInputWhere ask for input, same apply to SoftDeleteInputWhere so extending class
   * just add what is new or different for SoftDeleteInputWhere, that means it's 100% customisable
   * you can also remove extends *FindInputWhere and define entire custom dto here if needed 
   **/
}

@InputType()
export class RetsListingRestoreInputDto implements RestoreInputCRUDTypeDefinition{
  @Field(() => [RetsListingRestoreInputWhereDto], {nullable: true, description: CrudDefMetaDesc.restore_where})
  @Validate(OnlyOneSeachOperatorAllowed)
  where?: FindOptionsWhere<RetsListingRestoreInputWhereDto>[];
}
  
// ████ RESTORE OUTPUT DTO ██████████████████████████████████████████████████████
  
@ObjectType()
@Directive('@shareable')
export class RetsListingRestoreOutputDto extends CrudAffectedDto implements RestoreOutputCRUDTypeDefinition{
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

export class RetsListingUpsertDto extends RetsListingEntity implements UpsertDtoCRUDTypeDefinition{
  static metaname: string = `${RetsListingEntity.metaname}${UpsertArtefact}`;
  static metadesc: string = CrudDefMetaDesc.upsert_metadesc;
}

// ████ UPSERT INPUT DTO ██████████████████████████████████████████████████████

@InputType()
export class RetsListingUpsertInputDto extends RetsListingCreateInputDto implements UpsertInputCRUDTypeDefinition{
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
    static conflictResolveFields: (keyof RetsListingUpsertInputDto)[] = ['id'];
}

// ████ UPSERT OUTPUT DTO ██████████████████████████████████████████████████████

@ObjectType()
@Directive('@shareable')
export class RetsListingUpsertOutputDto extends IntersectionType(RetsListingCreateOutputDto, UpsertOutputProcessStatusDto) implements UpsertOutputCRUDTypeDefinition{ 
 
}

/**
 * █████████████████████████████████████████████████████████████
 * █ SOFT REMOVE DTO ███████████████████████████████████████████
 * █████████████████████████████████████████████████████████████
**/
// unlike soft delete, this operation first get the data from database and after run the operation, so it's complex but provide more and clear information about operation

// ████ SOFT REMOVE INPUT DTO ████████████████████████████████████████████████
export class RetsListingSoftRemoveDto extends RetsListingEntity implements SoftRemoveDtoCRUDTypeDefinition{
  static metaname: string = `${RetsListingEntity.metaname}${SoftRemoveArtefact}`;
  static metadesc: string = CrudDefMetaDesc.softRemove_metadesc;
}

@InputType()
export class RetsListingSoftRemoveInputWhereDto extends RetsListingFindInputWhereDto implements SoftRemoveInputWhereCRUDTypeDefinition{
  /**
   * avoiding redundant code
   * considering whatever FindInputWhere ask for input, same apply to SoftRemoveInputWhere so extending class
   * just add what is new or different for SoftRemoveInputWhere, that means it's 100% customisable
   * you can also remove extends *FindInputWhere and define entire custom dto here if needed 
   **/
}

@InputType()
export class RetsListingSoftRemoveInputDto implements SoftRemoveInputCRUDTypeDefinition{
  @Field(() => [RetsListingSoftRemoveInputWhereDto], {nullable: true, description: CrudDefMetaDesc.softRemove_where})
  @Validate(OnlyOneSeachOperatorAllowed)
  where?: FindOptionsWhere<RetsListingSoftRemoveInputWhereDto>[];
}


// ████ SOFT REMOVE OUTPUT DTO ████████████████████████████████████████████████

@ObjectType()
@Directive('@shareable')
export class RetsListingSoftRemoveOutputAffectedRowsDto extends RetsListingFindOutputRowsDto implements SoftRemoveOutputAffectedRowsCRUDTypeDefinition{
  /**
   * avoiding redundant code
   * considering whatever FindOutputRows return, same apply to SoftRemoveOutputAffectedRows so extending class
   * just add what is new or different for SoftRemoveOutputAffectedRows, that means it's 100% customisable
   * you can also remove extends FindOutputRows and define entire custom dto here if needed 
   **/
}
@ObjectType()
@Directive('@shareable')
export class RetsListingSoftRemoveOutputDto extends CrudAffectedDto implements SoftRemoveOutputCRUDTypeDefinition{
  /**
   * avoiding redundant code
   * considering whatever AffectedDto return, same apply to SoftRemoveOutput so extending class
   * just add what is new or different for SoftRemoveOutput, that means it's 100% customisable
   * you can also remove extends AffectedDto and define entire custom dto here if needed 
   **/

  @Field(() => [RetsListingEntity]) 
  declare affectedRows?: RetsListingEntity[] | any
}

/**
 * █████████████████████████████████████████████████████████████
 * █ REMOVE DTO ███████████████████████████████████████████
 * █████████████████████████████████████████████████████████████
**/
// unlike soft delete, this operation first get the data from database and after run the operation, so it's complex but provide more and clear information about operation

export class RetsListingRemoveDto extends RetsListingEntity implements RemoveDtoCRUDTypeDefinition{
  static metaname: string = `${RetsListingEntity.metaname}${RemoveArtefact}`;
  static metadesc: string = CrudDefMetaDesc.remove_metadesc;
}

// ████ REMOVE INPUT DTO ████████████████████████████████████████████████
@InputType()
export class RetsListingRemoveInputWhereDto extends RetsListingFindInputWhereDto implements RemoveInputWhereCRUDTypeDefinition{
  /**
   * avoiding redundant code
   * considering whatever FindInputWhere ask for input, same apply to SoftRemoveInputWhere so extending class
   * just add what is new or different for SoftRemoveInputWhere, that means it's 100% customisable
   * you can also remove extends *FindInputWhere and define entire custom dto here if needed 
   **/
}

@InputType()
export class RetsListingRemoveInputDto implements RemoveInputCRUDTypeDefinition{
  @Field(() => [RetsListingRemoveInputWhereDto], {nullable: true, description: CrudDefMetaDesc.remove_where})
  @Validate(OnlyOneSeachOperatorAllowed)
  where?: FindOptionsWhere<RetsListingRemoveInputWhereDto>[];
}


// ████ REMOVE OUTPUT DTO ████████████████████████████████████████████████

@ObjectType()
@Directive('@shareable')
export class RetsListingRemoveOutputAffectedRowsDto extends RetsListingFindOutputRowsDto implements RemoveOutputAffectedRowsCRUDTypeDefinition{
  /**
   * avoiding redundant code
   * considering whatever FindOutputRows return, same apply to SoftRemoveOutputAffectedRows so extending class
   * just add what is new or different for SoftRemoveOutputAffectedRows, that means it's 100% customisable
   * you can also remove extends FindOutputRows and define entire custom dto here if needed 
   **/
}
@ObjectType()
@Directive('@shareable')
export class RetsListingRemoveOutputDto extends CrudAffectedDto implements RemoveOutputCRUDTypeDefinition{
  /**
   * avoiding redundant code
   * considering whatever AffectedDto return, same apply to SoftRemoveOutput so extending class
   * just add what is new or different for SoftRemoveOutput, that means it's 100% customisable
   * you can also remove extends AffectedDto and define entire custom dto here if needed 
   **/

  @Field(() => [RetsListingEntity]) 
  declare affectedRows?: RetsListingEntity[] | any
}

/**
 * █████████████████████████████████████████████████████████████
 * █ RECOVER DTO ████████████████████████████████████████████████
 * █████████████████████████████████████████████████████████████
**/
// unlike soft delete, this operation first get the data from database and after run the operation, so it's complex but provide more and clear information about operation

export class RetsListingRecoverDto extends RetsListingEntity implements RecoverDtoCRUDTypeDefinition{
  static metaname: string = `${RetsListingEntity.metaname}${RecoverArtefact}`;
  static metadesc: string = CrudDefMetaDesc.recover_metadesc;
}

// ████ RECOVER INPUT DTO ██████████████████████████████████████████████████████

@InputType()
export class RetsListingRecoverInputWhereDto extends RetsListingFindInputWhereDto implements RecoverInputWhereCRUDTypeDefinition{
/**
 * avoiding redundant code
 * considering whatever FindInputWhere ask for input, same apply to SoftDeleteInputWhere so extending class
 * just add what is new or different for SoftDeleteInputWhere, that means it's 100% customisable
 * you can also remove extends *FindInputWhere and define entire custom dto here if needed 
 **/
}

@InputType()
export class RetsListingRecoverInputDto implements RecoverInputCRUDTypeDefinition{
  @Field(() => [RetsListingRecoverInputWhereDto], {nullable: true, description: CrudDefMetaDesc.recover_where})
  @Validate(OnlyOneSeachOperatorAllowed)
  where?: FindOptionsWhere<RetsListingRecoverInputWhereDto>[];
}

// ████ RECOVER OUTPUT DTO ██████████████████████████████████████████████████████

@ObjectType()
@Directive('@shareable')
export class RetsListingRecoverOutputAffectedRowsDto extends RetsListingFindOutputRowsDto implements RecoverOutputAffectedRowsCRUDTypeDefinition{
  /**
   * avoiding redundant code
   * considering whatever FindOutputRows return, same apply to RecoverOutputAffectedRows so extending class
   * just add what is new or different for RecoverOutputAffectedRows, that means it's 100% customisable
   * you can also remove extends FindOutputRows and define entire custom dto here if needed 
   **/
}

@ObjectType()
@Directive('@shareable')
export class RetsListingRecoverOutputDto extends CrudAffectedDto implements RecoverOutputCRUDTypeDefinition{
  /**
   * avoiding redundant code
   * considering whatever AffectedDto return, same apply to RecoverOutput so extending class
   * just add what is new or different for RecoverOutput, that means it's 100% customisable
   * you can also remove extends AffectedDto and define entire custom dto here if needed 
   **/

  @Field(() => [RetsListingEntity]) 
  declare affectedRows?: RetsListingEntity[] | any;
}
 
/**
 * █████████████████████████████████████████████████████████████
 * █ UPLOAD DTO ████████████████████████████████████████████████
 * █████████████████████████████████████████████████████████████
**/

export class RetsListingUploadDto extends RetsListingEntity implements UploadDtoCRUDTypeDefinition {
  static metaname: string = `${RetsListingEntity?.metaname}${UploadArtefact}`;
  static metadesc: string = CrudDefMetaDesc.upload_metadesc;
}

// ████ UPLOAD INPUT DTO ████████████████████████████████████████████████
@InputType()
export class RetsListingUploadInputDto extends UploadInputDto implements UploadInputArtefactCRUDTypeDefinition {
@Field(() => RetsListingUploadRefTypeEnum, {nullable: false, description: CrudDefMetaDesc.upload_ref_type})
@IsNotEmpty()
ref_type!: RetsListingUploadRefTypeEnum;
}

// ████ UPLOAD OUTPUT DTO ███████████████████████████████████████████████
@ObjectType()
@Directive('@shareable')
export class RetsListingUploadOutputDto extends UploadOutputDto implements UploadOutputArtefactCRUDTypeDefinition {
@Field(() => RetsListingUploadRefTypeEnum, {nullable: true, description: CrudDefMetaDesc.upload_ref_type})
ref_type?: RetsListingUploadRefTypeEnum;
}

/**
* █████████████████████████████████████████████████████████████
* █ UPLOAD DELETE DTO █████████████████████████████████████████
* █████████████████████████████████████████████████████████████
**/

export class RetsListingUploadDeleteDto extends RetsListingEntity implements UploadDeleteDtoCRUDTypeDefinition {
static metaname: string = `${RetsListingEntity?.metaname}${UploadDeleteArtefact}`;
static metadesc: string = CrudDefMetaDesc.upload_delete_metadesc;
}

// ████ UPLOAD DELETE INPUT DTO ████████████████████████████████████████████████
@InputType()
export class RetsListingUploadDeleteInputDto extends UploadDeleteInputDto implements UploadDeleteInputArtefactCRUDTypeDefinition {
@Field(() => RetsListingUploadRefTypeEnum, {nullable: false, description: CrudDefMetaDesc.upload_ref_type})
@IsNotEmpty()
ref_type!: RetsListingUploadRefTypeEnum;
}

// ████ UPLOAD DELETE OUTPUT DTO ███████████████████████████████████████████████
@ObjectType()
@Directive('@shareable')
export class RetsListingUploadDeleteOutputDto extends UploadDeleteOutputDto implements UploadDeleteOutputArtefactCRUDTypeDefinition {
@Field(() => RetsListingUploadRefTypeEnum, {nullable: true, description: CrudDefMetaDesc.upload_ref_type})
ref_type?: RetsListingUploadRefTypeEnum;
}