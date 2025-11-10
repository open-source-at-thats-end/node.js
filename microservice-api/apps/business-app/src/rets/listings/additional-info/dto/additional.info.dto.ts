import { CreateArtefact, CreateDtoCRUDTypeDefinition, CreateInputCRUDTypeDefinition, CreateOutputCRUDTypeDefinition, CrudDefMetaDesc, DateTime, DeleteArtefact, DeleteDtoCRUDTypeDefinition, DeleteInputCRUDTypeDefinition, DeleteOutputCRUDTypeDefinition, FindArtefact, FindDtoCRUDTypeDefinition, FindInputGroupByCRUDTypeDefinition, FindInputSortOrderCRUDTypeDefinition, FindInputCRUDTypeDefinition, FindInputWhereCRUDTypeDefinition, FindOneByIdArtefact, FindOperatorDto, FindOutputPaginationDto, FindOutputCRUDTypeDefinition, OnlyOneSeachOperatorAllowed, RecordSortDirectionEnum, RestoreArtefact, RestoreDtoCRUDTypeDefinition, RestoreInputCRUDTypeDefinition, SoftDeleteArtefact, SoftDeleteDtoCRUDTypeDefinition, SoftDeleteInputCRUDTypeDefinition, SoftDeleteOutputCRUDTypeDefinition, UpdateArtefact, UpdateDtoCRUDTypeDefinition, UpdateInputSetsCRUDTypeDefinition, UpdateInputCRUDTypeDefinition, UpdateInputWhereCRUDTypeDefinition, UpdateOutputCRUDTypeDefinition, SoftDeleteInputWhereCRUDTypeDefinition, RestoreInputWhereCRUDTypeDefinition, RestoreOutputCRUDTypeDefinition, UpsertDtoCRUDTypeDefinition, UpsertArtefact, UpsertInputCRUDTypeDefinition, UpsertOutputCRUDTypeDefinition, UpsertStatusEnum, SoftRemoveDtoCRUDTypeDefinition, SoftRemoveArtefact, SoftRemoveInputWhereCRUDTypeDefinition, SoftRemoveInputCRUDTypeDefinition, SoftRemoveOutputCRUDTypeDefinition, RemoveDtoCRUDTypeDefinition, RemoveArtefact, RemoveInputCRUDTypeDefinition, RemoveOutputCRUDTypeDefinition, SoftRemoveOutputAffectedRowsCRUDTypeDefinition, FindOutputRowsCRUDTypeDefinition, UpdateOutputAffectedRowsCRUDTypeDefinition, RemoveOutputAffectedRowsCRUDTypeDefinition, RecoverDtoCRUDTypeDefinition, RecoverArtefact, RecoverInputCRUDTypeDefinition, RecoverOutputCRUDTypeDefinition, RecoverInputWhereCRUDTypeDefinition, RecoverOutputAffectedRowsCRUDTypeDefinition, FindInputDtoCRUDTypeDefinition, FindOneByIdInputCRUDTypeDefinition, FindInputPaginationOptionsDto, FindOutputPaginationOptionsDto, IdInputDto, RemoveInputWhereCRUDTypeDefinition, DeleteInputWhereCRUDTypeDefinition, UploadInputDto, UploadOutputDto, UploadDeleteInputDto, UploadDeleteOutputDto, WithDeletedInputDto } from "@libs/library-app";
import { RetsListingAdditionalInfoEntityMeta as meta, RetsListingAdditionalInfoEntity } from "../entities/additional.info.entity";
import { Directive, Field, Float, InputType, Int, IntersectionType, ObjectType, PartialType } from "@nestjs/graphql";
import { IsNotEmpty, IsNumber, IsOptional, Validate } from "class-validator";
import { FindManyOptions, FindOptionsOrder, FindOptionsWhere } from "typeorm";
import { Exclude } from "class-transformer";
import { CrudAffectedDto, UpsertOutputProcessStatusDto } from "@libs/library-app";
import { UploadArtefact, UploadDeleteArtefact, UploadDeleteDtoCRUDTypeDefinition, UploadDeleteInputArtefactCRUDTypeDefinition, UploadDeleteOutputArtefactCRUDTypeDefinition, UploadDtoCRUDTypeDefinition, UploadInputArtefactCRUDTypeDefinition, UploadOutputArtefactCRUDTypeDefinition } from "@libs/library-app/crud/crud.type";
import { RetsListingAdditionalInfoUploadRefTypeEnum } from "../additional.info.enum";
import { Timestamp } from "graphql-scalars/typings/mocks";
import { timestamp } from "rxjs";
import { RetsMlsProviderFindInputWhereDto } from "../../mls-provider/dto/mls.provider.dto";

/**
 * █████████████████████████████████████████████████████████████
 * ██ DO NOT CHANGE IN THIS FILE IT WILL CRASH THE APP        ██
 * █████████████████████████████████████████████████████████████
**/

/**
 * # [done] ['../entities/listing.additional.info.entity', './dto/listing.additional.info.dto'] . Hint: find [ /listing.additional.info. => and replace with ] [ /your-module. ] 
 * # [done] do not break some dependences which required this class
 * # [done] module [RetsListingAdditionalInfo]
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
export class RetsListingAdditionalInfoDto extends RetsListingAdditionalInfoEntity implements FindInputDtoCRUDTypeDefinition{
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
    declare mls_status?: any;
    declare buyer_agent_email?: any;
    declare buyer_agent_name?: any;
    declare buyer_agent_office_id?: any;
    declare buyer_office_name?: any;
    declare buyer_office_phone?: any;
    declare seller_agent_name?: any;
    declare seller_office_name?: any;
    declare seller_office_id?: any;
    declare seller_office_phone?: any;
    declare accessibility_features?: any;
    declare acreage?: any;
    declare amen_rec_freq?: any;
    declare amenities?: any;
    declare amenity_rec_fee?: any;
    declare appliances?: any;
    declare application_fee?: any;
    declare approval?: any;
    declare approx_living_area?: any;
    declare available_documents?: any;
    declare basement?: any;
    declare bath_desc?: any;
    declare bed_description?: any;
    declare beds_total?: any;
    declare boat_access?: any;
    declare building_features?: any;
    declare buildings?: any;
    declare c_dom?: any;
    declare cable_available_yn?: any;
    declare canal_width?: any;
    declare carport_desc?: any;
    declare carport_spaces?: any;
    declare community_features?: any;
    declare community_type?: any;
    declare condo_fee_freq?: any;
    declare condo_fee?: any;
    declare construction?: any;
    declare contract_status_change_date?: any;
    declare cooling?: any;
    declare development_name?: any;
    declare development?: any;
    declare dining?: any;
    declare driving_directions?: any;
    declare electric?: any;
    declare elevator?: any;
    declare equipment?: any;
    declare exterior_features?: any;
    declare exterior_finish?: any;
    declare fencing?: any;
    declare fireplace_features?: any;
    declare fireplace?: any;
    declare floor_plan_type?: any;
    declare flooring?: any;
    declare foundation_details?: any;
    declare furnished?: any;
    declare gas?: any;
    declare golf_type?: any;
    declare gross_operating_income?: any;
    declare gross_rental_income?: any;
    declare ground_cover?: any;
    declare guest_house_desc?: any;
    declare guest_house_living_area?: any;
    declare gulf_access_type?: any;
    declare hoa_fee?: any;
    declare hoa_frequency?: any;
    declare hoa_include?: any;
    declare is_hoa?: any;
    declare interior_features?: any;
    declare irrigation?: any;
    declare is_gulf_access?: any;
    declare is_lease_limit?: any;
    declare is_pool?: any;
    declare kitchen_features?: any;
    declare land_improvements?: any;
    declare land_lease_fee_freq?: any;
    declare land_lease_fee?: any;
    declare last_change_date?: any;
    declare last_change_type?: any;
    declare leases_per_year?: any;
    declare legal?: any;
    declare lot_back?: any;
    declare lot_description?: any;
    declare lot_dimensions?: any;
    declare lot_frontage?: any;
    declare lot_left?: any;
    declare lot_right?: any;
    declare lower_sqft?: any;
    declare mls_area_major?: any;
    declare maintenance?: any;
    declare management?: any;
    declare mandatory_club_fee_freq?: any;
    declare mandatory_club_fee?: any;
    declare mandatory_hoa_yn?: any;
    declare master_hoa_fee_freq?: any;
    declare master_hoa_fee?: any;
    declare max_pets_limit_weight?: any;
    declare max_pets_limit?: any;
    declare media?: any;
    declare min_days_of_lease?: any;
    declare net_operating_income?: any;
    declare num_unit_floor?: any;
    declare one_time_land_lease_fee?: any;
    declare one_time_mandatory_club_fee?: any;
    declare one_time_othe_fee?: any;
    declare one_time_rec_lease_fee?: any;
    declare one_time_special_assessment_fee?: any;
    declare ownership?: any;
    declare parcel_number?: any;
    declare parcels_lots?: any;
    declare pet_desc?: any;
    declare pet_restrictions?: any;
    declare planned_use?: any;
    declare pool_desc?: any;
    declare possession?: any;
    declare previous_list_price?: any;
    declare price_per_sqft?: any;
    declare primary_bed_level?: any;
    declare property_record_update_timestamp?: any;
    declare rear_exposure?: any;
    declare restrictions?: any;
    declare road?: any;
    declare roof?: any;
    declare rooms?: any;
    declare section?: any;
    declare security_safety?: any;
    declare sewer?: any;
    declare spa_desc?: any;
    declare special_assessment_fee_freq?: any;
    declare special_assessment?: any;
    declare specials?: any;
    declare sprinkler?: any;
    declare status_change_datetime?: any;
    declare status_type?: any;
    declare storm_protection?: any;
    declare tax_district_type?: any;
    declare tax_remarks?: any;
    declare tenantpays?: any;
    declare transfer_fee?: any;
    declare trees?: any;
    declare unit_location?: any;
    declare units_in_building?: any;
    declare unitsin_complex?: any;
    declare upper_sqft?: any;
    declare usage?: any;
    declare utilities?: any;
    declare view_desc?: any;
    declare view?: any;
    declare virtual_tour_url?: any;
    declare water?: any;
    declare waterfront_desc?: any;
    declare windows?: any;
    declare zoning?: any;
    declare buyer_financing?: any;
    declare p_date?: any;
    declare bidding_war?: any;
    declare created?: any;
    declare updated?: any;
    declare deleted?: any;

    declare fr_mlsp_id?: any;
}

/**
 * █████████████████████████████████████████████████████████████
 * █ FIND DTO ██████████████████████████████████████████████████
 * █████████████████████████████████████████████████████████████
**/
@ObjectType({ isAbstract: true })
@Directive('@shareable')
export class RetsListingAdditionalInfoFindDto extends RetsListingAdditionalInfoEntity implements FindDtoCRUDTypeDefinition{
    static metaname: string = `${RetsListingAdditionalInfoEntity?.metaname}${FindArtefact}`;
    static metadesc: string = CrudDefMetaDesc.find_metadesc;
}


// ████ FIND INPUT DTO ████████████████████████████████████████████████
 

@InputType()
export class RetsListingAdditionalInfoFindInputWhereDto extends RetsListingAdditionalInfoDto implements FindInputWhereCRUDTypeDefinition{
    @Field(() => FindOperatorDto, {nullable: true, description: meta?.id.desc})
    @IsOptional()
    declare id?: FindOperatorDto;    

    @Field(() => FindOperatorDto, {nullable: true, description: meta?.mlsp_id.desc})
    @IsOptional()
    declare mlsp_id?: FindOperatorDto; 

    @Field(() => FindOperatorDto, {nullable: true, description: meta?.mls_num.desc})        
    @IsOptional()
    declare mls_num?: FindOperatorDto;

    @Field(() => FindOperatorDto, {nullable: true, description: meta?.mls_status.desc})        
    @IsOptional()
    declare mls_status?: FindOperatorDto;

    @Field(() => FindOperatorDto, {nullable: true, description: meta?.buyer_agent_email.desc})        
    @IsOptional()
    declare buyer_agent_email?: FindOperatorDto;

    @Field(() => FindOperatorDto, {nullable: true, description: meta?.buyer_agent_name.desc})        
    @IsOptional()
    declare buyer_agent_name?: FindOperatorDto;

    @Field(() => FindOperatorDto, {nullable: true, description: meta?.buyer_agent_office_id.desc})        
    @IsOptional()
    declare buyer_agent_office_id?: FindOperatorDto;

    @Field(() => FindOperatorDto, {nullable: true, description: meta?.buyer_office_name.desc})        
    @IsOptional()
    declare buyer_office_name?: FindOperatorDto;

    @Field(() => FindOperatorDto, {nullable: true, description: meta?.buyer_office_phone.desc})        
    @IsOptional()
    declare buyer_office_phone?: FindOperatorDto;

    @Field(() => FindOperatorDto, {nullable: true, description: meta?.seller_agent_name.desc})        
    @IsOptional()
    declare seller_agent_name?: FindOperatorDto;

    @Field(() => FindOperatorDto, {nullable: true, description: meta?.seller_office_name.desc})
    @IsOptional()
    declare seller_office_name?: FindOperatorDto;

    @Field(() => FindOperatorDto, {nullable: true, description: meta?.seller_office_id.desc})
    @IsOptional()
    declare seller_office_id?: FindOperatorDto;

    @Field(() => FindOperatorDto, {nullable: true, description: meta?.seller_office_phone.desc})
    @IsOptional()
    declare seller_office_phone?: FindOperatorDto;

    @Field(() => FindOperatorDto, {nullable: true, description: meta?.accessibility_features.desc})        
    @IsOptional()
    declare accessibility_features?: FindOperatorDto;

    @Field(() => FindOperatorDto, {nullable: true, description: meta?.amenities.desc})        
    @IsOptional()
    declare amenities?: FindOperatorDto;

    @Field(() => FindOperatorDto, {nullable: true, description: meta?.amenity_rec_fee.desc})        
    @IsOptional()
    declare amenity_rec_fee?: FindOperatorDto;

    @Field(() => FindOperatorDto, {nullable: true, description: meta?.application_fee.desc})        
    @IsOptional()
    declare application_fee?: FindOperatorDto;

    @Field(() => FindOperatorDto, {nullable: true, description: meta?.approval.desc})        
    @IsOptional()
    declare approval?: FindOperatorDto;

    @Field(() => FindOperatorDto, {nullable: true, description: meta?.beds_total.desc})        
    @IsOptional()
    declare beds_total?: FindOperatorDto;

    @Field(() => FindOperatorDto, {nullable: true, description: meta?.building_features.desc})        
    @IsOptional()
    declare building_features?: FindOperatorDto;

    @Field(() => FindOperatorDto, {nullable: true, description: meta?.buildings.desc})        
    @IsOptional()
    declare buildings?: FindOperatorDto;

    @Field(() => FindOperatorDto, {nullable: true, description: meta?.cable_available_yn.desc})        
    @IsOptional()
    declare cable_available_yn?: FindOperatorDto;

    @Field(() => FindOperatorDto, {nullable: true, description: meta?.community_features.desc})        
    @IsOptional()
    declare community_features?: FindOperatorDto;

    @Field(() => FindOperatorDto, {nullable: true, description: meta?.community_type.desc})        
    @IsOptional()
    declare community_type?: FindOperatorDto;

    @Field(() => FindOperatorDto, {nullable: true, description: meta?.dining.desc})        
    @IsOptional()
    declare dining?: FindOperatorDto;

    @Field(() => FindOperatorDto, {nullable: true, description: meta?.electric.desc})        
    @IsOptional()
    declare electric?: FindOperatorDto;

    @Field(() => FindOperatorDto, {nullable: true, description: meta?.elevator.desc})        
    @IsOptional()
    declare elevator?: FindOperatorDto;

    @Field(() => FindOperatorDto, {nullable: true, description: meta?.equipment.desc})        
    @IsOptional()
    declare equipment?: FindOperatorDto;

    @Field(() => FindOperatorDto, {nullable: true, description: meta?.fencing.desc})        
    @IsOptional()
    declare fencing?: FindOperatorDto;

    @Field(() => FindOperatorDto, {nullable: true, description: meta?.furnished.desc})        
    @IsOptional()
    declare furnished?: FindOperatorDto;

    @Field(() => FindOperatorDto, {nullable: true, description: meta?.gas.desc})        
    @IsOptional()
    declare gas?: FindOperatorDto;

    @Field(() => FindOperatorDto, {nullable: true, description: meta?.hoa_fee.desc})        
    @IsOptional()
    declare hoa_fee?: FindOperatorDto;

    @Field(() => FindOperatorDto, {nullable: true, description: meta?.hoa_frequency.desc})        
    @IsOptional()
    declare hoa_frequency?: FindOperatorDto;

    @Field(() => FindOperatorDto, {nullable: true, description: meta?.hoa_include.desc})        
    @IsOptional()
    declare hoa_include?: FindOperatorDto;

    @Field(() => FindOperatorDto, {nullable: true, description: meta?.is_hoa.desc})        
    @IsOptional()
    declare is_hoa?: FindOperatorDto;

    @Field(() => FindOperatorDto, {nullable: true, description: meta?.is_gulf_access.desc})        
    @IsOptional()
    declare is_gulf_access?: FindOperatorDto;

    @Field(() => FindOperatorDto, {nullable: true, description: meta?.is_lease_limit.desc})        
    @IsOptional()
    declare is_lease_limit?: FindOperatorDto;

    @Field(() => FindOperatorDto, {nullable: true, description: meta?.is_pool.desc})        
    @IsOptional()
    declare is_pool?: FindOperatorDto;

    @Field(() => FindOperatorDto, {nullable: true, description: meta?.kitchen_features.desc})        
    @IsOptional()
    declare kitchen_features?: FindOperatorDto;

    @Field(() => FindOperatorDto, {nullable: true, description: meta?.land_lease_fee.desc})        
    @IsOptional()
    declare land_lease_fee?: FindOperatorDto;

    @Field(() => FindOperatorDto, {nullable: true, description: meta?.legal.desc})        
    @IsOptional()
    declare legal?: FindOperatorDto;

    @Field(() => FindOperatorDto, {nullable: true, description: meta?.maintenance.desc})        
    @IsOptional()
    declare maintenance?: FindOperatorDto;

    @Field(() => FindOperatorDto, {nullable: true, description: meta?.management.desc})        
    @IsOptional()
    declare management?: FindOperatorDto;

    @Field(() => FindOperatorDto, {nullable: true, description: meta?.num_unit_floor.desc})        
    @IsOptional()
    declare num_unit_floor?: FindOperatorDto;

    @Field(() => FindOperatorDto, {nullable: true, description: meta?.ownership.desc})        
    @IsOptional()
    declare ownership?: FindOperatorDto;

    @Field(() => FindOperatorDto, {nullable: true, description: meta?.parcel_number.desc})        
    @IsOptional()
    declare parcel_number?: FindOperatorDto;

    @Field(() => FindOperatorDto, {nullable: true, description: meta?.pool_desc.desc})        
    @IsOptional()
    declare pool_desc?: FindOperatorDto;

    @Field(() => FindOperatorDto, {nullable: true, description: meta?.previous_list_price.desc})        
    @IsOptional()
    declare previous_list_price?: FindOperatorDto;

    @Field(() => FindOperatorDto, {nullable: true, description: meta?.restrictions.desc})        
    @IsOptional()
    declare restrictions?: FindOperatorDto;

    @Field(() => FindOperatorDto, {nullable: true, description: meta?.road.desc})        
    @IsOptional()
    declare road?: FindOperatorDto;

    @Field(() => FindOperatorDto, {nullable: true, description: meta?.roof.desc})        
    @IsOptional()
    declare roof?: FindOperatorDto;

    @Field(() => FindOperatorDto, {nullable: true, description: meta?.rooms.desc})        
    @IsOptional()
    declare rooms?: FindOperatorDto;

    @Field(() => FindOperatorDto, {nullable: true, description: meta?.section.desc})        
    @IsOptional()
    declare section?: FindOperatorDto;

    @Field(() => FindOperatorDto, {nullable: true, description: meta?.sewer.desc})        
    @IsOptional()
    declare sewer?: FindOperatorDto;

    @Field(() => FindOperatorDto, {nullable: true, description: meta?.specials.desc})        
    @IsOptional()
    declare specials?: FindOperatorDto;

    @Field(() => FindOperatorDto, {nullable: true, description: meta?.sprinkler.desc})        
    @IsOptional()
    declare sprinkler?: FindOperatorDto;

    @Field(() => FindOperatorDto, {nullable: true, description: meta?.utilities.desc})        
    @IsOptional()
    declare utilities?: FindOperatorDto;

    @Field(() => FindOperatorDto, {nullable: true, description: meta?.view.desc})        
    @IsOptional()
    declare view?: FindOperatorDto;

    @Field(() => FindOperatorDto, {nullable: true, description: meta?.water.desc})        
    @IsOptional()
    declare water?: FindOperatorDto;

    @Field(() => FindOperatorDto, {nullable: true, description: meta?.waterfront_desc.desc})        
    @IsOptional()
    declare waterfront_desc?: FindOperatorDto;

    @Field(() => FindOperatorDto, {nullable: true, description: meta?.windows.desc})        
    @IsOptional()
    declare windows?: FindOperatorDto;

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
  
    @Field(() => [RetsMlsProviderFindInputWhereDto], {nullable: true, description: meta?.fr_mlsp_id.desc})
    @IsOptional()
    declare fr_mlsp_id?: RetsMlsProviderFindInputWhereDto[];
}

@InputType()
export class RetsListingAdditionalInfoFindInputSortOrderDto implements FindOptionsOrder<RetsListingAdditionalInfoDto>, FindInputSortOrderCRUDTypeDefinition{
    
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
    mls_status?: RecordSortDirectionEnum;

    @Field(() => RecordSortDirectionEnum, { nullable: true }) 
    @IsOptional()
    buyer_agent_email?: RecordSortDirectionEnum;

    @Field(() => RecordSortDirectionEnum, { nullable: true }) 
    @IsOptional()
    buyer_agent_name?: RecordSortDirectionEnum;

    @Field(() => RecordSortDirectionEnum, { nullable: true }) 
    @IsOptional()
    buyer_agent_office_id?: RecordSortDirectionEnum;

    @Field(() => RecordSortDirectionEnum, { nullable: true }) 
    @IsOptional()
    buyer_office_name?: RecordSortDirectionEnum;

    @Field(() => RecordSortDirectionEnum, { nullable: true }) 
    @IsOptional()
    buyer_office_phone?: RecordSortDirectionEnum;

    @Field(() => RecordSortDirectionEnum, { nullable: true }) 
    @IsOptional()
    seller_agent_name?: RecordSortDirectionEnum;

    @Field(() => RecordSortDirectionEnum, { nullable: true }) 
    @IsOptional()
    seller_office_name?: RecordSortDirectionEnum;

    @Field(() => RecordSortDirectionEnum, { nullable: true }) 
    @IsOptional()
    seller_office_id?: RecordSortDirectionEnum;

    @Field(() => RecordSortDirectionEnum, { nullable: true }) 
    @IsOptional()
    seller_office_phone?: RecordSortDirectionEnum;

    @Field(() => RecordSortDirectionEnum, { nullable: true }) 
    @IsOptional()
    accessibility_features?: RecordSortDirectionEnum;

    @Field(() => RecordSortDirectionEnum, { nullable: true }) 
    @IsOptional()
    amenities?: RecordSortDirectionEnum;

    @Field(() => RecordSortDirectionEnum, { nullable: true }) 
    @IsOptional()
    amenity_rec_fee?: RecordSortDirectionEnum;

    @Field(() => RecordSortDirectionEnum, { nullable: true }) 
    @IsOptional()
    application_fee?: RecordSortDirectionEnum;

    @Field(() => RecordSortDirectionEnum, { nullable: true }) 
    @IsOptional()
    approval?: RecordSortDirectionEnum;

    @Field(() => RecordSortDirectionEnum, { nullable: true }) 
    @IsOptional()
    beds_total?: RecordSortDirectionEnum;

    @Field(() => RecordSortDirectionEnum, { nullable: true }) 
    @IsOptional()
    building_features?: RecordSortDirectionEnum;

    @Field(() => RecordSortDirectionEnum, { nullable: true }) 
    @IsOptional()
    buildings?: RecordSortDirectionEnum;

    @Field(() => RecordSortDirectionEnum, { nullable: true })
    @IsOptional()
    cable_available_yn?: RecordSortDirectionEnum;

    @Field(() => RecordSortDirectionEnum, { nullable: true }) 
    @IsOptional()
    community_features?: RecordSortDirectionEnum;

    @Field(() => RecordSortDirectionEnum, { nullable: true }) 
    @IsOptional()
    community_type?: RecordSortDirectionEnum;

    @Field(() => RecordSortDirectionEnum, { nullable: true }) 
    @IsOptional()
    dining?: RecordSortDirectionEnum;

    @Field(() => RecordSortDirectionEnum, { nullable: true }) 
    @IsOptional()
    electric?: RecordSortDirectionEnum;

    @Field(() => RecordSortDirectionEnum, { nullable: true }) 
    @IsOptional()
    elevator?: RecordSortDirectionEnum;

    @Field(() => RecordSortDirectionEnum, { nullable: true }) 
    @IsOptional()
    equipment?: RecordSortDirectionEnum;

    @Field(() => RecordSortDirectionEnum, { nullable: true }) 
    @IsOptional()
    fencing?: RecordSortDirectionEnum;

    @Field(() => RecordSortDirectionEnum, { nullable: true }) 
    @IsOptional()
    furnished?: RecordSortDirectionEnum;

    @Field(() => RecordSortDirectionEnum, { nullable: true }) 
    @IsOptional()
    gas?: RecordSortDirectionEnum;

    @Field(() => RecordSortDirectionEnum, { nullable: true }) 
    @IsOptional()
    hoa_fee?: RecordSortDirectionEnum;

    @Field(() => RecordSortDirectionEnum, { nullable: true }) 
    @IsOptional()
    hoa_frequency?: RecordSortDirectionEnum;

    @Field(() => RecordSortDirectionEnum, { nullable: true }) 
    @IsOptional()
    hoa_include?: RecordSortDirectionEnum;

    @Field(() => RecordSortDirectionEnum, { nullable: true }) 
    @IsOptional()
    is_hoa?: RecordSortDirectionEnum;

    @Field(() => RecordSortDirectionEnum, { nullable: true }) 
    @IsOptional()
    is_gulf_access?: RecordSortDirectionEnum;

    @Field(() => RecordSortDirectionEnum, { nullable: true }) 
    @IsOptional()
    is_lease_limit?: RecordSortDirectionEnum;

    @Field(() => RecordSortDirectionEnum, { nullable: true }) 
    @IsOptional()
    is_pool?: RecordSortDirectionEnum;

    @Field(() => RecordSortDirectionEnum, { nullable: true }) 
    @IsOptional()
    kitchen_features?: RecordSortDirectionEnum;

    @Field(() => RecordSortDirectionEnum, { nullable: true }) 
    @IsOptional()
    land_lease_fee?: RecordSortDirectionEnum;

    @Field(() => RecordSortDirectionEnum, { nullable: true }) 
    @IsOptional()
    legal?: RecordSortDirectionEnum;

    @Field(() => RecordSortDirectionEnum, { nullable: true }) 
    @IsOptional()
    maintenance?: RecordSortDirectionEnum;

    @Field(() => RecordSortDirectionEnum, { nullable: true }) 
    @IsOptional()
    management?: RecordSortDirectionEnum;

    @Field(() => RecordSortDirectionEnum, { nullable: true }) 
    @IsOptional()
    num_unit_floor?: RecordSortDirectionEnum;

    @Field(() => RecordSortDirectionEnum, { nullable: true })
    @IsOptional()
    ownership?: RecordSortDirectionEnum;

    @Field(() => RecordSortDirectionEnum, { nullable: true })
    @IsOptional()
    parcel_number?: RecordSortDirectionEnum;

    @Field(() => RecordSortDirectionEnum, { nullable: true }) 
    @IsOptional()
    pool_desc?: RecordSortDirectionEnum;

    @Field(() => RecordSortDirectionEnum, { nullable: true }) 
    @IsOptional()
    previous_list_price?: RecordSortDirectionEnum;

    @Field(() => RecordSortDirectionEnum, { nullable: true }) 
    @IsOptional()
    restrictions?: RecordSortDirectionEnum;

    @Field(() => RecordSortDirectionEnum, { nullable: true }) 
    @IsOptional()
    road?: RecordSortDirectionEnum;

    @Field(() => RecordSortDirectionEnum, { nullable: true }) 
    @IsOptional()
    roof?: RecordSortDirectionEnum;

    @Field(() => RecordSortDirectionEnum, { nullable: true }) 
    @IsOptional()
    rooms?: RecordSortDirectionEnum;

    @Field(() => RecordSortDirectionEnum, { nullable: true }) 
    @IsOptional()
    section?: RecordSortDirectionEnum;

    @Field(() => RecordSortDirectionEnum, { nullable: true }) 
    @IsOptional()
    sewer?: RecordSortDirectionEnum;

    @Field(() => RecordSortDirectionEnum, { nullable: true })
    @IsOptional()
    specials?: RecordSortDirectionEnum;

    @Field(() => RecordSortDirectionEnum, { nullable: true })
    @IsOptional()
    sprinkler?: RecordSortDirectionEnum;

    @Field(() => RecordSortDirectionEnum, { nullable: true }) 
    @IsOptional()
    utilities?: RecordSortDirectionEnum;

    @Field(() => RecordSortDirectionEnum, { nullable: true }) 
    @IsOptional()
    view?: RecordSortDirectionEnum;

    @Field(() => RecordSortDirectionEnum, { nullable: true }) 
    @IsOptional()
    water?: RecordSortDirectionEnum;

    @Field(() => RecordSortDirectionEnum, { nullable: true }) 
    @IsOptional()
    waterfront_desc?: RecordSortDirectionEnum;

    @Field(() => RecordSortDirectionEnum, { nullable: true }) 
    @IsOptional()
    windows?: RecordSortDirectionEnum;

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
export class RetsListingAdditionalInfoFindInputGroupByDto implements FindOptionsOrder<RetsListingAdditionalInfoDto>, FindInputGroupByCRUDTypeDefinition{
    
    @Field(() => Boolean, { nullable: true })
    @IsOptional()
    mlsp_id?: boolean;

    @Field(() => Boolean, { nullable: true })
    @IsOptional()
    mls_num?: boolean;

    @Field(() => Boolean, { nullable: true })
    @IsOptional()
    mls_status?: boolean;

    @Field(() => Boolean, { nullable: true })
    @IsOptional()
    buyer_agent_email?: boolean;

    @Field(() => Boolean, { nullable: true })
    @IsOptional()
    buyer_agent_name?: boolean;

    @Field(() => Boolean, { nullable: true })
    @IsOptional()
    buyer_agent_office_id?: boolean;

    @Field(() => Boolean, { nullable: true })
    @IsOptional()
    buyer_office_name?: boolean;

    @Field(() => Boolean, { nullable: true })
    @IsOptional()
    buyer_office_phone?: boolean;

    @Field(() => Boolean, { nullable: true })
    @IsOptional()
    seller_agent_name?: boolean;

    @Field(() => Boolean, { nullable: true })
    @IsOptional()
    seller_office_name?: boolean;

    @Field(() => Boolean, { nullable: true })
    @IsOptional()
    seller_office_id?: boolean;

    @Field(() => Boolean, { nullable: true })
    @IsOptional()
    seller_office_phone?: boolean;

    @Field(() => Boolean, { nullable: true })
    @IsOptional()
    accessibility_features?: boolean;

    @Field(() => Boolean, { nullable: true })
    @IsOptional()
    amenities?: boolean;

    @Field(() => Boolean, { nullable: true })
    @IsOptional()
    building_features?: boolean;

    @Field(() => Boolean, { nullable: true })
    @IsOptional()
    buildings?: boolean;

    @Field(() => Boolean, { nullable: true })
    @IsOptional()
    hoa_fee?: boolean;

    @Field(() => Boolean, { nullable: true })
    @IsOptional()
    hoa_frequency?: boolean;

    @Field(() => Boolean, { nullable: true })
    @IsOptional()
    hoa_include?: boolean;

    @Field(() => Boolean, { nullable: true })
    @IsOptional()
    is_hoa?: boolean;

    @Field(() => Boolean, { nullable: true })
    @IsOptional()
    kitchen_features?: boolean;

    @Field(() => Boolean, { nullable: true })
    @IsOptional()
    maintenance?: boolean;

    @Field(() => Boolean, { nullable: true })
    @IsOptional()
    ownership?: boolean;

    @Field(() => Boolean, { nullable: true })
    @IsOptional()
    pool_desc?: boolean;

    @Field(() => Boolean, { nullable: true })
    @IsOptional()
    restrictions?: boolean;

    @Field(() => Boolean, { nullable: true })
    @IsOptional()
    road?: boolean;

    @Field(() => Boolean, { nullable: true })
    @IsOptional()
    roof?: boolean;

    @Field(() => Boolean, { nullable: true })
    @IsOptional()
    rooms?: boolean;

    @Field(() => Boolean, { nullable: true })
    @IsOptional()
    specials?: boolean;

    @Field(() => Boolean, { nullable: true })
    @IsOptional()
    utilities?: boolean;

    @Field(() => Boolean, { nullable: true })
    @IsOptional()
    view?: boolean;

    @Field(() => Boolean, { nullable: true })
    @IsOptional()
    water?: boolean;

    @Field(() => Boolean, { nullable: true })
    @IsOptional()
    waterfront_desc?: boolean;
    
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
export class RetsListingAdditionalInfoFindInputDto extends IntersectionType(FindInputPaginationOptionsDto, WithDeletedInputDto) implements FindManyOptions<RetsListingAdditionalInfoDto>, FindInputCRUDTypeDefinition{
    // input layout design for users to perform find with various database options
  
    /**
     * Conditions to be met for the resulting set.
     * also validate the user pass only 1 operator to search for field
     */
    @Field(() => [RetsListingAdditionalInfoFindInputWhereDto], { nullable: true, description: CrudDefMetaDesc.find_where })
    @IsOptional()
    @Validate(OnlyOneSeachOperatorAllowed)
    declare where?: FindOptionsWhere<RetsListingAdditionalInfoFindInputWhereDto>;
  
  
    /**
     * Specifies how to group the rows returned by the SELECT statement.
     */
    @Field(() => RetsListingAdditionalInfoFindInputGroupByDto, { nullable: true, description: CrudDefMetaDesc.find_group_by })
    @IsOptional()
    declare groupBy?: RetsListingAdditionalInfoFindInputGroupByDto;
  
    /**
     * Sort the result set by fields using ascending or descending order.
     */
    @Field(() => RetsListingAdditionalInfoFindInputSortOrderDto, { nullable: true, description: CrudDefMetaDesc.find_order })
    @IsOptional()
    declare order?: FindOptionsOrder<RetsListingAdditionalInfoFindInputSortOrderDto>;
}


// ████ FIND OUTPUT DTO ████████████████████████████████████████████████

@ObjectType()
@Directive('@shareable')
export class RetsListingAdditionalInfoFindOutputRowsDto extends RetsListingAdditionalInfoFindDto implements FindOutputRowsCRUDTypeDefinition{
    // this DTO will be used at many palce for output object, os make sure this is properly developed
}

@ObjectType()
@Directive('@shareable')
export class RetsListingAdditionalInfoFindOutputDto extends FindOutputPaginationOptionsDto implements FindOutputCRUDTypeDefinition{
    // output layout design for users to get find response

    // we assign any because iin GRAPHQL for requuest body this rows will have fields with boolean value whether to include in response or not
    // this is very crucial to understand this structure and you need to understand how graphQL works
    @Field(() => [RetsListingAdditionalInfoEntity], {description:CrudDefMetaDesc.find_rows})
    declare rows?: RetsListingAdditionalInfoEntity | RetsListingAdditionalInfoEntity[] | any;
}

/**
 * ██████████████████████████████████████████████████████████████████████████████████████████████████████████████████
 * █ FIND ONE BY ID DTO █████████████████████████████████████████████████████████████████████████████████████████████
 * ██████████████████████████████████████████████████████████████████████████████████████████████████████████████████
**/

export class RetsListingAdditionalInfoFindOneByIdDto extends RetsListingAdditionalInfoEntity implements FindDtoCRUDTypeDefinition{
    static metaname: string = `${RetsListingAdditionalInfoEntity.metaname}${FindOneByIdArtefact}`;
    static metadesc: string = CrudDefMetaDesc.findOneById_metadesc;
}

// ████ FIND ONE BY ID INPUT DTO ████████████████████████████████████████████████

@InputType()
export class RetsListingAdditionalInfoFindOneByIdInputDto extends IntersectionType(IdInputDto, WithDeletedInputDto) implements FindOneByIdInputCRUDTypeDefinition{

}

/**
 * █████████████████████████████████████████████████████████████
 * █ CREATE DTO ████████████████████████████████████████████████
 * █████████████████████████████████████████████████████████████
**/

export class RetsListingAdditionalInfoCreateDto extends RetsListingAdditionalInfoEntity implements CreateDtoCRUDTypeDefinition {
    static metaname: string = `${RetsListingAdditionalInfoEntity.metaname}${CreateArtefact}`;
    static metadesc: string = CrudDefMetaDesc.create_metadesc;
}
// ████ CREATE INPUT DTO ████████████████████████████████████████████████

@InputType()
export class RetsListingAdditionalInfoCreateInputDto extends  RetsListingAdditionalInfoCreateDto implements CreateInputCRUDTypeDefinition {
  
    
    @Field(() => Int, {nullable: false, description: meta?.mlsp_id.desc}) 
    declare mlsp_id?: number;

    @Field(() => String, {nullable: false, description: meta?.mls_num.desc})  
    declare mls_num?: string;
    
    @Field(() => String, {nullable: true, description: meta?.mls_status.desc})  
    declare mls_status?: string;

    @Field(() => String, {nullable: true, description: meta?.buyer_agent_email.desc})  
    declare buyer_agent_email?: string;
    
    @Field(() => String, {nullable: true, description: meta?.buyer_agent_name.desc})  
    declare buyer_agent_name?: string;

    @Field(() => String, {nullable: true, description: meta?.buyer_agent_office_id.desc})  
    declare buyer_agent_office_id?: string;
    
    @Field(() => String, {nullable: true, description: meta?.buyer_office_name.desc})  
    declare buyer_office_name?: string;

    @Field(() => String, {nullable: true, description: meta?.buyer_office_phone.desc})  
    declare buyer_office_phone?: string;
    
    @Field(() => String, {nullable: true, description: meta?.seller_agent_name.desc})  
    declare seller_agent_name?: string;

    @Field(() => String, {nullable: true, description: meta?.seller_office_name.desc})  
    declare seller_office_name?: string;
    
    @Field(() => String, {nullable: true, description: meta?.seller_office_id.desc})  
    declare seller_office_id?: string;

    @Field(() => String, {nullable: true, description: meta?.seller_office_phone.desc})  
    declare seller_office_phone?: string;
    
    @Field(() => String, {nullable: true, description: meta?.accessibility_features.desc})  
    declare accessibility_features?: string;

    @Field(() => Float, {nullable: true, description: meta?.acreage.desc})  
    declare acreage?: number;
    
    @Field(() => String, {nullable: true, description: meta?.amen_rec_freq.desc})  
    declare amen_rec_freq?: string;

    @Field(() => String, {nullable: true, description: meta?.amenities.desc})  
    declare amenities?: string;
    
    @Field(() => Float, {nullable: true, description: meta?.amenity_rec_fee.desc})  
    declare amenity_rec_fee?: number;

    @Field(() => String, {nullable: true, description: meta?.appliances.desc})  
    declare appliances?: string;
    
    @Field(() => Float, {nullable: true, description: meta?.application_fee.desc})  
    declare application_fee?: number;

    @Field(() => String, {nullable: true, description: meta?.approval.desc})  
    declare approval?: string;
    
    @Field(() => Float, {nullable: true, description: meta?.approx_living_area.desc})  
    declare approx_living_area?: number;

    @Field(() => String, {nullable: true, description: meta?.available_documents.desc})  
    declare available_documents?: string;
    
    @Field(() => String, {nullable: true, description: meta?.basement.desc})  
    declare basement?: string;

    @Field(() => String, {nullable: true, description: meta?.bath_desc.desc})  
    declare bath_desc?: string;
    
    @Field(() => String, {nullable: true, description: meta?.bed_description.desc})  
    declare bed_description?: string;

    @Field(() => Int, {nullable: true, description: meta?.beds_total.desc})  
    declare beds_total?: number;

    @Field(() => String, {nullable: true, description: meta?.boat_access.desc})  
    declare boat_access?: string;

    @Field(() => String, {nullable: true, description: meta?.building_features.desc})  
    declare building_features?: string;

    @Field(() => Int, {nullable: true, description: meta?.buildings.desc})  
    declare buildings?: number;

    @Field(() => Int, {nullable: true, description: meta?.c_dom.desc})  
    declare c_dom?: number;

    @Field(() => String, {nullable: true, description: meta?.cable_available_yn.desc})  
    declare cable_available_yn?: string;

    @Field(() => String, {nullable: true, description: meta?.canal_width.desc})  
    declare canal_width?: string;

    @Field(() => String, {nullable: true, description: meta?.carport_desc.desc})  
    declare carport_desc?: string;

    @Field(() => Float, {nullable: true, description: meta?.carport_spaces.desc})  
    declare carport_spaces?: number;

    @Field(() => String, {nullable: true, description: meta?.community_features.desc})  
    declare community_features?: string;

    @Field(() => String, {nullable: true, description: meta?.community_type.desc})  
    declare community_type?: string;

    @Field(() => String, {nullable: true, description: meta?.condo_fee_freq.desc})  
    declare condo_fee_freq?: string;

    @Field(() => Float, {nullable: true, description: meta?.condo_fee.desc})  
    declare condo_fee?: number;

    @Field(() => String, {nullable: true, description: meta?.construction.desc})  
    declare construction?: string;

    @Field(() => DateTime, {nullable: true, description: meta?.contract_status_change_date.desc})  
    declare contract_status_change_date?: Date;

    @Field(() => String, {nullable: true, description: meta?.cooling.desc})  
    declare cooling?: string;

    @Field(() => String, {nullable: true, description: meta?.development_name.desc})  
    declare development_name?: string;

    @Field(() => String, {nullable: true, description: meta?.development.desc})  
    declare development?: string;

    @Field(() => String, {nullable: true, description: meta?.dining.desc})  
    declare dining?: string;

    @Field(() => String, {nullable: true, description: meta?.driving_directions.desc})  
    declare driving_directions?: string;

    @Field(() => String, {nullable: true, description: meta?.electric.desc})  
    declare electric?: string;

    @Field(() => String, {nullable: true, description: meta?.elevator.desc})  
    declare elevator?: string;

    @Field(() => String, {nullable: true, description: meta?.equipment.desc})  
    declare equipment?: string;

    @Field(() => String, {nullable: true, description: meta?.exterior_features.desc})  
    declare exterior_features?: string;

    @Field(() => String, {nullable: true, description: meta?.exterior_finish.desc})  
    declare exterior_finish?: string;

    @Field(() => String, {nullable: true, description: meta?.fencing.desc})  
    declare fencing?: string;

    @Field(() => String, {nullable: true, description: meta?.fireplace_features.desc})  
    declare fireplace_features?: string;

    @Field(() => Int, {nullable: true, description: meta?.fireplace.desc})  
    declare fireplace?: number;

    @Field(() => String, {nullable: true, description: meta?.floor_plan_type.desc})  
    declare floor_plan_type?: string;

    @Field(() => String, {nullable: true, description: meta?.flooring.desc})  
    declare flooring?: string;

    @Field(() => String, {nullable: true, description: meta?.foundation_details.desc})  
    declare foundation_details?: string;

    @Field(() => String, {nullable: true, description: meta?.furnished.desc})  
    declare furnished?: string;

    @Field(() => String, {nullable: true, description: meta?.gas.desc})  
    declare gas?: string;

    @Field(() => String, {nullable: true, description: meta?.golf_type.desc})  
    declare golf_type?: string;

    @Field(() => Float, {nullable: true, description: meta?.gross_operating_income.desc})  
    declare gross_operating_income?: number;

    @Field(() => Float, {nullable: true, description: meta?.gross_rental_income.desc})  
    declare gross_rental_income?: number;

    @Field(() => String, {nullable: true, description: meta?.ground_cover.desc})  
    declare ground_cover?: string;

    @Field(() => String, {nullable: true, description: meta?.guest_house_desc.desc})  
    declare guest_house_desc?: string;

    @Field(() => Float, {nullable: true, description: meta?.guest_house_living_area.desc})  
    declare guest_house_living_area?: number;

    @Field(() => String, {nullable: true, description: meta?.gulf_access_type.desc})  
    declare gulf_access_type?: string;

    @Field(() => Float, {nullable: true, description: meta?.hoa_fee.desc})  
    declare hoa_fee?: number;

    @Field(() => String, {nullable: true, description: meta?.hoa_frequency.desc})  
    declare hoa_frequency?: string;

    @Field(() => String, {nullable: true, description: meta?.hoa_include.desc})  
    declare hoa_include?: string;

    @Field(() => String, {nullable: true, description: meta?.is_hoa.desc})  
    declare is_hoa?: string;

    @Field(() => String, {nullable: true, description: meta?.interior_features.desc})  
    declare interior_features?: string;

    @Field(() => String, {nullable: true, description: meta?.irrigation.desc})  
    declare irrigation?: string;

    @Field(() => String, {nullable: true, description: meta?.is_gulf_access.desc})  
    declare is_gulf_access?: string;

    @Field(() => String, {nullable: true, description: meta?.is_lease_limit.desc})  
    declare is_lease_limit?: string;

    @Field(() => String, {nullable: true, description: meta?.is_pool.desc})  
    declare is_pool?: string;

    @Field(() => String, {nullable: true, description: meta?.kitchen_features.desc})  
    declare kitchen_features?: string;

    @Field(() => String, {nullable: true, description: meta?.land_improvements.desc})  
    declare land_improvements?: string;

    @Field(() => String, {nullable: true, description: meta?.land_lease_fee_freq.desc})  
    declare land_lease_fee_freq?: string;

    @Field(() => Float, {nullable: true, description: meta?.land_lease_fee.desc})  
    declare land_lease_fee?: number;

    @Field(() => DateTime, {nullable: true, description: meta?.last_change_date.desc})  
    declare last_change_date?: Date;

    @Field(() => String, {nullable: true, description: meta?.last_change_type.desc})  
    declare last_change_type?: string;

    @Field(() => Int, {nullable: true, description: meta?.leases_per_year.desc})  
    declare leases_per_year?: number;

    @Field(() => String, {nullable: true, description: meta?.legal.desc})  
    declare legal?: string;

    @Field(() => Int, {nullable: true, description: meta?.lot_back.desc})  
    declare lot_back?: number;

    @Field(() => String, {nullable: true, description: meta?.lot_description.desc})  
    declare lot_description?: string;

    @Field(() => String, {nullable: true, description: meta?.lot_dimensions.desc})  
    declare lot_dimensions?: string;

    @Field(() => Int, {nullable: true, description: meta?.lot_frontage.desc})  
    declare lot_frontage?: number;

    @Field(() => Int, {nullable: true, description: meta?.lot_left.desc})  
    declare lot_left?: number;

    @Field(() => Int, {nullable: true, description: meta?.lot_right.desc})  
    declare lot_right?: number;

    @Field(() => String, {nullable: true, description: meta?.lower_sqft.desc})  
    declare lower_sqft?: string;

    @Field(() => String, {nullable: true, description: meta?.mls_area_major.desc})  
    declare mls_area_major?: string;

    @Field(() => Float, {nullable: true, description: meta?.maintenance.desc})  
    declare maintenance?: number;

    @Field(() => String, {nullable: true, description: meta?.management.desc})  
    declare management?: string;

    @Field(() => String, {nullable: true, description: meta?.mandatory_club_fee_freq.desc})  
    declare mandatory_club_fee_freq?: string;

    @Field(() => Float, {nullable: true, description: meta?.mandatory_club_fee.desc})  
    declare mandatory_club_fee?: number;

    @Field(() => String, {nullable: true, description: meta?.mandatory_hoa_yn.desc})  
    declare mandatory_hoa_yn?: string;

    @Field(() => String, {nullable: true, description: meta?.master_hoa_fee_freq.desc})  
    declare master_hoa_fee_freq?: string;

    @Field(() => Float, {nullable: true, description: meta?.master_hoa_fee.desc})  
    declare master_hoa_fee?: number;

    @Field(() => Int, {nullable: true, description: meta?.max_pets_limit_weight.desc})  
    declare max_pets_limit_weight?: number;

    @Field(() => Int, {nullable: true, description: meta?.max_pets_limit.desc})  
    declare max_pets_limit?: number;

    @Field(() => String, {nullable: true, description: meta?.media.desc})  
    declare media?: string;

    @Field(() => Int, {nullable: true, description: meta?.min_days_of_lease.desc})  
    declare min_days_of_lease?: number;

    @Field(() => String, {nullable: true, description: meta?.net_operating_income.desc})  
    declare net_operating_income?: string;

    @Field(() => Int, {nullable: true, description: meta?.num_unit_floor.desc})  
    declare num_unit_floor?: number;

    @Field(() => Float, {nullable: true, description: meta?.one_time_land_lease_fee.desc})  
    declare one_time_land_lease_fee?: number;

    @Field(() => Float, {nullable: true, description: meta?.one_time_mandatory_club_fee.desc})  
    declare one_time_mandatory_club_fee?: number;

    @Field(() => Float, {nullable: true, description: meta?.one_time_othe_fee.desc})  
    declare one_time_othe_fee?: number;

    @Field(() => Float, {nullable: true, description: meta?.one_time_rec_lease_fee.desc})  
    declare one_time_rec_lease_fee?: number;

    @Field(() => Float, {nullable: true, description: meta?.one_time_special_assessment_fee.desc})  
    declare one_time_special_assessment_fee?: number;

    @Field(() => String, {nullable: true, description: meta?.ownership.desc})  
    declare ownership?: string;

    @Field(() => String, {nullable: true, description: meta?.parcel_number.desc})  
    declare parcel_number?: string;

    @Field(() => String, {nullable: true, description: meta?.parcels_lots.desc})  
    declare parcels_lots?: string;

    @Field(() => String, {nullable: true, description: meta?.pet_desc.desc})  
    declare pet_desc?: string;

    @Field(() => String, {nullable: true, description: meta?.pet_restrictions.desc})  
    declare pet_restrictions?: string;

    @Field(() => String, {nullable: true, description: meta?.planned_use.desc})  
    declare planned_use?: string;

    @Field(() => String, {nullable: true, description: meta?.pool_desc.desc})  
    declare pool_desc?: string;

    @Field(() => String, {nullable: true, description: meta?.possession.desc})  
    declare possession?: string;

    @Field(() => Float, {nullable: true, description: meta?.previous_list_price.desc})  
    declare previous_list_price?: number;

    @Field(() => Float, {nullable: true, description: meta?.price_per_sqft.desc})  
    declare price_per_sqft?: number;

    @Field(() => String, {nullable: true, description: meta?.primary_bed_level.desc})  
    declare primary_bed_level?: string;

    @Field(() => DateTime, {nullable: true, description: meta?.property_record_update_timestamp.desc})  
    declare property_record_update_timestamp?: Date;

    @Field(() => String, {nullable: true, description: meta?.rear_exposure.desc})  
    declare rear_exposure?: string;

    @Field(() => String, {nullable: true, description: meta?.restrictions.desc})  
    declare restrictions?: string;

    @Field(() => String, {nullable: true, description: meta?.road.desc})  
    declare road?: string;

    @Field(() => String, {nullable: true, description: meta?.roof.desc})  
    declare roof?: string;

    @Field(() => Int, {nullable: true, description: meta?.rooms.desc})  
    declare rooms?: number;

    @Field(() => String, {nullable: true, description: meta?.section.desc})  
    declare section?: string;

    @Field(() => String, {nullable: true, description: meta?.security_safety.desc})  
    declare security_safety?: string;

    @Field(() => String, {nullable: true, description: meta?.sewer.desc})  
    declare sewer?: string;

    @Field(() => String, {nullable: true, description: meta?.spa_desc.desc})  
    declare spa_desc?: string;

    @Field(() => String, {nullable: true, description: meta?.special_assessment_fee_freq.desc})  
    declare special_assessment_fee_freq?: string;

    @Field(() => String, {nullable: true, description: meta?.special_assessment.desc})  
    declare special_assessment?: string;

    @Field(() => String, {nullable: true, description: meta?.specials.desc})  
    declare specials?: string;

    @Field(() => String, {nullable: true, description: meta?.sprinkler.desc})  
    declare sprinkler?: string;

    @Field(() => DateTime, {nullable: true, description: meta?.status_change_datetime.desc})  
    declare status_change_datetime?: Date;

    @Field(() => String, {nullable: true, description: meta?.status_type.desc})  
    declare status_type?: string;

    @Field(() => String, {nullable: true, description: meta?.storm_protection.desc})  
    declare storm_protection?: string;

    @Field(() => String, {nullable: true, description: meta?.tax_district_type.desc})  
    declare tax_district_type?: string;

    @Field(() => String, {nullable: true, description: meta?.tax_remarks.desc})  
    declare tax_remarks?: string;

    @Field(() => String, {nullable: true, description: meta?.tenantpays.desc})  
    declare tenantpays?: string;

    @Field(() => Float, {nullable: true, description: meta?.transfer_fee.desc})  
    declare transfer_fee?: number;

    @Field(() => String, {nullable: true, description: meta?.trees.desc})  
    declare trees?: string;

    @Field(() => String, {nullable: true, description: meta?.unit_location.desc})  
    declare unit_location?: string;

    @Field(() => Int, {nullable: true, description: meta?.units_in_building.desc})  
    declare units_in_building?: number;

    @Field(() => Int, {nullable: true, description: meta?.unitsin_complex.desc})  
    declare unitsin_complex?: number;

    @Field(() => Float, {nullable: true, description: meta?.upper_sqft.desc})  
    declare upper_sqft?: number;

    @Field(() => String, {nullable: true, description: meta?.usage.desc})  
    declare usage?: string;

    @Field(() => String, {nullable: true, description: meta?.utilities.desc})  
    declare utilities?: string;

    @Field(() => String, {nullable: true, description: meta?.view_desc.desc})  
    declare view_desc?: string;

    @Field(() => String, {nullable: true, description: meta?.view.desc})  
    declare view?: string;

    @Field(() => String, {nullable: true, description: meta?.virtual_tour_url.desc})  
    declare virtual_tour_url?: string;

    @Field(() => String, {nullable: true, description: meta?.water.desc})  
    declare water?: string;

    @Field(() => String, {nullable: true, description: meta?.waterfront_desc.desc})  
    declare waterfront_desc?: string;

    @Field(() => String, {nullable: true, description: meta?.windows.desc})  
    declare windows?: string;

    @Field(() => String, {nullable: true, description: meta?.zoning.desc})  
    declare zoning?: string;

    @Field(() => String, {nullable: true, description: meta?.buyer_financing.desc})  
    declare buyer_financing?: string;

    @Field(() => String, {nullable: true, description: meta?.p_date.desc})  
    declare p_date?: string;

    @Field(() => String, {nullable: true, description: meta?.bidding_war.desc})  
    declare bidding_war?: string;
}

// ████ CREATE OUTPUT DTO ████████████████████████████████████████████████

@ObjectType()
@Directive('@shareable')
export class RetsListingAdditionalInfoCreateOutputDto extends RetsListingAdditionalInfoFindOutputRowsDto implements CreateOutputCRUDTypeDefinition {
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


export class RetsListingAdditionalInfoUpdateDto extends RetsListingAdditionalInfoDto implements UpdateDtoCRUDTypeDefinition{
    static metaname: string = `${RetsListingAdditionalInfoEntity.metaname}${UpdateArtefact}`;
    static metadesc: string = CrudDefMetaDesc.update_metadesc;
}

// ████ UPDATE INPUT DTO ████████████████████████████████████████████████

@InputType()
export class RetsListingAdditionalInfoUpdateInputWhereDto extends RetsListingAdditionalInfoFindInputWhereDto implements UpdateInputWhereCRUDTypeDefinition{
    /**
     * avoiding redundant code
     * considering whatever FindInputWhere ask for input, same apply to UpdateInputWhere so extending class
     * just add what is new or different for UpdateInputWhere, that means it's 100% customisable
     * you can also remove extends *FindInputWhere and define entire custom dto here if needed 
     **/
}

@InputType()
export class RetsListingAdditionalInfoUpdateInputSetsDto extends PartialType(RetsListingAdditionalInfoCreateInputDto) implements UpdateInputSetsCRUDTypeDefinition {
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
export class RetsListingAdditionalInfoUpdateInputDto implements UpdateInputCRUDTypeDefinition{
    // input layout design for users to perform update with various database options
  
    /**
     * Conditions to be met for the resulting set.
     * also validate the user pass only 1 operator to search for field
     */
    @Field(() => [RetsListingAdditionalInfoUpdateInputWhereDto], { nullable: false, description: CrudDefMetaDesc.update_where })
    @IsNotEmpty()
    @Validate(OnlyOneSeachOperatorAllowed)
    where!: FindOptionsWhere<RetsListingAdditionalInfoUpdateInputWhereDto>[];

    /**
     * What to set for update
     * basically fields list of update
     */
    @Field(() => RetsListingAdditionalInfoUpdateInputSetsDto, { nullable: false, description: CrudDefMetaDesc.update_sets })
    @IsNotEmpty()
    sets!: RetsListingAdditionalInfoUpdateInputSetsDto

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
export class RetsListingAdditionalInfoUpdateOutputAffectedRowsDto extends RetsListingAdditionalInfoFindOutputRowsDto implements UpdateOutputAffectedRowsCRUDTypeDefinition{
    /**
     * avoiding redundant code
     * considering whatever FindOutputRows return, same apply to UpdateOutputAffectedRows so extending class
     * just add what is new or different for UpdateOutputAffectedRows, that means it's 100% customisable
     * you can also remove extends *FindOutputRows and define entire custom dto here if needed 
     **/
}

@ObjectType()
@Directive('@shareable')
export class RetsListingAdditionalInfoUpdateOutputDto extends CrudAffectedDto implements UpdateOutputCRUDTypeDefinition{
  @Field(() => [RetsListingAdditionalInfoEntity], {description: CrudDefMetaDesc.update_affected_rows}) 
  declare affectedRows?: RetsListingAdditionalInfoEntity[] | any; 
}


/**
 * █████████████████████████████████████████████████████████████
 * █ SOFT DELETE DTO ███████████████████████████████████████████
 * █████████████████████████████████████████████████████████████
**/
// this operation run directly withouth checking the data if exist or not, so it's quick but do not provide more information about operation

// ████ SOFT DELETE INPUT DTO ████████████████████████████████████████████████
export class RetsListingAdditionalInfoSoftDeleteDto extends RetsListingAdditionalInfoEntity implements SoftDeleteDtoCRUDTypeDefinition{
  static metaname: string = `${RetsListingAdditionalInfoEntity.metaname}${SoftDeleteArtefact}`;
  static metadesc: string = CrudDefMetaDesc.softDelete_metadesc;
}

@InputType()
export class RetsListingAdditionalInfoSoftDeleteInputWhereDto extends RetsListingAdditionalInfoFindInputWhereDto implements SoftDeleteInputWhereCRUDTypeDefinition{
  /**
   * avoiding redundant code
   * considering whatever FindInputWhere ask for input, same apply to SoftDeleteInputWhere so extending class
   * just add what is new or different for SoftDeleteInputWhere, that means it's 100% customisable
   * you can also remove extends *FindInputWhere and define entire custom dto here if needed 
   **/
}

@InputType()
export class RetsListingAdditionalInfoSoftDeleteInputDto implements SoftDeleteInputCRUDTypeDefinition{
  @Field(() => [RetsListingAdditionalInfoSoftDeleteInputWhereDto], {nullable: true, description: CrudDefMetaDesc.softDelete_where})
  @Validate(OnlyOneSeachOperatorAllowed)
  where?: FindOptionsWhere<RetsListingAdditionalInfoSoftDeleteInputWhereDto>[];
}


// ████ SOFT DELETE OUTPUT DTO ████████████████████████████████████████████████

@ObjectType()
@Directive('@shareable')
export class RetsListingAdditionalInfoSoftDeleteOutputDto extends CrudAffectedDto implements SoftDeleteOutputCRUDTypeDefinition{
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

export class RetsListingAdditionalInfoDeleteDto extends RetsListingAdditionalInfoEntity implements DeleteDtoCRUDTypeDefinition{
  static metaname: string = `${RetsListingAdditionalInfoEntity.metaname}${DeleteArtefact}`;
  static metadesc: string = CrudDefMetaDesc.delete_metadesc;
}
// ████ DELETE INPUT DTO ████████████████████████████████████████████████

@InputType()
export class RetsListingAdditionalInfoDeleteInputWhereDto extends RetsListingAdditionalInfoFindInputWhereDto implements DeleteInputWhereCRUDTypeDefinition{
  /**
   * avoiding redundant code
   * considering whatever FindInputWhere ask for input, same apply to SoftDeleteInputWhere so extending class
   * just add what is new or different for SoftDeleteInputWhere, that means it's 100% customisable
   * you can also remove extends *FindInputWhere and define entire custom dto here if needed 
   **/
}

@InputType()
export class RetsListingAdditionalInfoDeleteInputDto implements DeleteInputCRUDTypeDefinition{
  @Field(() => [RetsListingAdditionalInfoDeleteInputWhereDto], {nullable: true, description: CrudDefMetaDesc.delete_where})
  @Validate(OnlyOneSeachOperatorAllowed)
  where?: FindOptionsWhere<RetsListingAdditionalInfoDeleteInputWhereDto>[];
}


// ████ DELETE OUTPUT DTO ████████████████████████████████████████████████

@ObjectType()
@Directive('@shareable')
export class RetsListingAdditionalInfoDeleteOutputDto extends CrudAffectedDto implements DeleteOutputCRUDTypeDefinition{
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

export class RetsListingAdditionalInfoRestoreDto extends RetsListingAdditionalInfoEntity implements RestoreDtoCRUDTypeDefinition{
    static metaname: string = `${RetsListingAdditionalInfoEntity.metaname}${RestoreArtefact}`;
    static metadesc: string = CrudDefMetaDesc.restore_metadesc;
}

// ████ RESTORE INPUT DTO ██████████████████████████████████████████████████████

@InputType()
export class RetsListingAdditionalInfoRestoreInputWhereDto extends RetsListingAdditionalInfoFindInputWhereDto implements RestoreInputWhereCRUDTypeDefinition{
  /**
   * avoiding redundant code
   * considering whatever FindInputWhere ask for input, same apply to SoftDeleteInputWhere so extending class
   * just add what is new or different for SoftDeleteInputWhere, that means it's 100% customisable
   * you can also remove extends *FindInputWhere and define entire custom dto here if needed 
   **/
}

@InputType()
export class RetsListingAdditionalInfoRestoreInputDto implements RestoreInputCRUDTypeDefinition{
  @Field(() => [RetsListingAdditionalInfoRestoreInputWhereDto], {nullable: true, description: CrudDefMetaDesc.restore_where})
  @Validate(OnlyOneSeachOperatorAllowed)
  where?: FindOptionsWhere<RetsListingAdditionalInfoRestoreInputWhereDto>[];
}
  
// ████ RESTORE OUTPUT DTO ██████████████████████████████████████████████████████
  
@ObjectType()
@Directive('@shareable')
export class RetsListingAdditionalInfoRestoreOutputDto extends CrudAffectedDto implements RestoreOutputCRUDTypeDefinition{
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

export class RetsListingAdditionalInfoUpsertDto extends RetsListingAdditionalInfoEntity implements UpsertDtoCRUDTypeDefinition{
  static metaname: string = `${RetsListingAdditionalInfoEntity.metaname}${UpsertArtefact}`;
  static metadesc: string = CrudDefMetaDesc.upsert_metadesc;
}

// ████ UPSERT INPUT DTO ██████████████████████████████████████████████████████

@InputType()
export class RetsListingAdditionalInfoUpsertInputDto extends RetsListingAdditionalInfoCreateInputDto implements UpsertInputCRUDTypeDefinition{
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
    static conflictResolveFields: (keyof RetsListingAdditionalInfoUpsertInputDto)[] = ['id'];
}

// ████ UPSERT OUTPUT DTO ██████████████████████████████████████████████████████

@ObjectType()
@Directive('@shareable')
export class RetsListingAdditionalInfoUpsertOutputDto extends IntersectionType(RetsListingAdditionalInfoCreateOutputDto, UpsertOutputProcessStatusDto) implements UpsertOutputCRUDTypeDefinition{ 
 
}

/**
 * █████████████████████████████████████████████████████████████
 * █ SOFT REMOVE DTO ███████████████████████████████████████████
 * █████████████████████████████████████████████████████████████
**/
// unlike soft delete, this operation first get the data from database and after run the operation, so it's complex but provide more and clear information about operation

// ████ SOFT REMOVE INPUT DTO ████████████████████████████████████████████████
export class RetsListingAdditionalInfoSoftRemoveDto extends RetsListingAdditionalInfoEntity implements SoftRemoveDtoCRUDTypeDefinition{
  static metaname: string = `${RetsListingAdditionalInfoEntity.metaname}${SoftRemoveArtefact}`;
  static metadesc: string = CrudDefMetaDesc.softRemove_metadesc;
}

@InputType()
export class RetsListingAdditionalInfoSoftRemoveInputWhereDto extends RetsListingAdditionalInfoFindInputWhereDto implements SoftRemoveInputWhereCRUDTypeDefinition{
  /**
   * avoiding redundant code
   * considering whatever FindInputWhere ask for input, same apply to SoftRemoveInputWhere so extending class
   * just add what is new or different for SoftRemoveInputWhere, that means it's 100% customisable
   * you can also remove extends *FindInputWhere and define entire custom dto here if needed 
   **/
}

@InputType()
export class RetsListingAdditionalInfoSoftRemoveInputDto implements SoftRemoveInputCRUDTypeDefinition{
  @Field(() => [RetsListingAdditionalInfoSoftRemoveInputWhereDto], {nullable: true, description: CrudDefMetaDesc.softRemove_where})
  @Validate(OnlyOneSeachOperatorAllowed)
  where?: FindOptionsWhere<RetsListingAdditionalInfoSoftRemoveInputWhereDto>[];
}


// ████ SOFT REMOVE OUTPUT DTO ████████████████████████████████████████████████

@ObjectType()
@Directive('@shareable')
export class RetsListingAdditionalInfoSoftRemoveOutputAffectedRowsDto extends RetsListingAdditionalInfoFindOutputRowsDto implements SoftRemoveOutputAffectedRowsCRUDTypeDefinition{
  /**
   * avoiding redundant code
   * considering whatever FindOutputRows return, same apply to SoftRemoveOutputAffectedRows so extending class
   * just add what is new or different for SoftRemoveOutputAffectedRows, that means it's 100% customisable
   * you can also remove extends FindOutputRows and define entire custom dto here if needed 
   **/
}
@ObjectType()
@Directive('@shareable')
export class RetsListingAdditionalInfoSoftRemoveOutputDto extends CrudAffectedDto implements SoftRemoveOutputCRUDTypeDefinition{
  /**
   * avoiding redundant code
   * considering whatever AffectedDto return, same apply to SoftRemoveOutput so extending class
   * just add what is new or different for SoftRemoveOutput, that means it's 100% customisable
   * you can also remove extends AffectedDto and define entire custom dto here if needed 
   **/

  @Field(() => [RetsListingAdditionalInfoEntity]) 
  declare affectedRows?: RetsListingAdditionalInfoEntity[] | any
}

/**
 * █████████████████████████████████████████████████████████████
 * █ REMOVE DTO ███████████████████████████████████████████
 * █████████████████████████████████████████████████████████████
**/
// unlike soft delete, this operation first get the data from database and after run the operation, so it's complex but provide more and clear information about operation

export class RetsListingAdditionalInfoRemoveDto extends RetsListingAdditionalInfoEntity implements RemoveDtoCRUDTypeDefinition{
  static metaname: string = `${RetsListingAdditionalInfoEntity.metaname}${RemoveArtefact}`;
  static metadesc: string = CrudDefMetaDesc.remove_metadesc;
}

// ████ REMOVE INPUT DTO ████████████████████████████████████████████████
@InputType()
export class RetsListingAdditionalInfoRemoveInputWhereDto extends RetsListingAdditionalInfoFindInputWhereDto implements RemoveInputWhereCRUDTypeDefinition{
  /**
   * avoiding redundant code
   * considering whatever FindInputWhere ask for input, same apply to SoftRemoveInputWhere so extending class
   * just add what is new or different for SoftRemoveInputWhere, that means it's 100% customisable
   * you can also remove extends *FindInputWhere and define entire custom dto here if needed 
   **/
}

@InputType()
export class RetsListingAdditionalInfoRemoveInputDto implements RemoveInputCRUDTypeDefinition{
  @Field(() => [RetsListingAdditionalInfoRemoveInputWhereDto], {nullable: true, description: CrudDefMetaDesc.remove_where})
  @Validate(OnlyOneSeachOperatorAllowed)
  where?: FindOptionsWhere<RetsListingAdditionalInfoRemoveInputWhereDto>[];
}


// ████ REMOVE OUTPUT DTO ████████████████████████████████████████████████

@ObjectType()
@Directive('@shareable')
export class RetsListingAdditionalInfoRemoveOutputAffectedRowsDto extends RetsListingAdditionalInfoFindOutputRowsDto implements RemoveOutputAffectedRowsCRUDTypeDefinition{
  /**
   * avoiding redundant code
   * considering whatever FindOutputRows return, same apply to SoftRemoveOutputAffectedRows so extending class
   * just add what is new or different for SoftRemoveOutputAffectedRows, that means it's 100% customisable
   * you can also remove extends FindOutputRows and define entire custom dto here if needed 
   **/
}
@ObjectType()
@Directive('@shareable')
export class RetsListingAdditionalInfoRemoveOutputDto extends CrudAffectedDto implements RemoveOutputCRUDTypeDefinition{
  /**
   * avoiding redundant code
   * considering whatever AffectedDto return, same apply to SoftRemoveOutput so extending class
   * just add what is new or different for SoftRemoveOutput, that means it's 100% customisable
   * you can also remove extends AffectedDto and define entire custom dto here if needed 
   **/

  @Field(() => [RetsListingAdditionalInfoEntity]) 
  declare affectedRows?: RetsListingAdditionalInfoEntity[] | any
}

/**
 * █████████████████████████████████████████████████████████████
 * █ RECOVER DTO ████████████████████████████████████████████████
 * █████████████████████████████████████████████████████████████
**/
// unlike soft delete, this operation first get the data from database and after run the operation, so it's complex but provide more and clear information about operation

export class RetsListingAdditionalInfoRecoverDto extends RetsListingAdditionalInfoEntity implements RecoverDtoCRUDTypeDefinition{
  static metaname: string = `${RetsListingAdditionalInfoEntity.metaname}${RecoverArtefact}`;
  static metadesc: string = CrudDefMetaDesc.recover_metadesc;
}

// ████ RECOVER INPUT DTO ██████████████████████████████████████████████████████

@InputType()
export class RetsListingAdditionalInfoRecoverInputWhereDto extends RetsListingAdditionalInfoFindInputWhereDto implements RecoverInputWhereCRUDTypeDefinition{
/**
 * avoiding redundant code
 * considering whatever FindInputWhere ask for input, same apply to SoftDeleteInputWhere so extending class
 * just add what is new or different for SoftDeleteInputWhere, that means it's 100% customisable
 * you can also remove extends *FindInputWhere and define entire custom dto here if needed 
 **/
}

@InputType()
export class RetsListingAdditionalInfoRecoverInputDto implements RecoverInputCRUDTypeDefinition{
  @Field(() => [RetsListingAdditionalInfoRecoverInputWhereDto], {nullable: true, description: CrudDefMetaDesc.recover_where})
  @Validate(OnlyOneSeachOperatorAllowed)
  where?: FindOptionsWhere<RetsListingAdditionalInfoRecoverInputWhereDto>[];
}

// ████ RECOVER OUTPUT DTO ██████████████████████████████████████████████████████

@ObjectType()
@Directive('@shareable')
export class RetsListingAdditionalInfoRecoverOutputAffectedRowsDto extends RetsListingAdditionalInfoFindOutputRowsDto implements RecoverOutputAffectedRowsCRUDTypeDefinition{
  /**
   * avoiding redundant code
   * considering whatever FindOutputRows return, same apply to RecoverOutputAffectedRows so extending class
   * just add what is new or different for RecoverOutputAffectedRows, that means it's 100% customisable
   * you can also remove extends FindOutputRows and define entire custom dto here if needed 
   **/
}

@ObjectType()
@Directive('@shareable')
export class RetsListingAdditionalInfoRecoverOutputDto extends CrudAffectedDto implements RecoverOutputCRUDTypeDefinition{
  /**
   * avoiding redundant code
   * considering whatever AffectedDto return, same apply to RecoverOutput so extending class
   * just add what is new or different for RecoverOutput, that means it's 100% customisable
   * you can also remove extends AffectedDto and define entire custom dto here if needed 
   **/

  @Field(() => [RetsListingAdditionalInfoEntity]) 
  declare affectedRows?: RetsListingAdditionalInfoEntity[] | any;
}

/**
 * █████████████████████████████████████████████████████████████
 * █ UPLOAD DTO ████████████████████████████████████████████████
 * █████████████████████████████████████████████████████████████
**/

export class RetsListingAdditionalInfoUploadDto extends RetsListingAdditionalInfoEntity implements UploadDtoCRUDTypeDefinition {
  static metaname: string = `${RetsListingAdditionalInfoEntity?.metaname}${UploadArtefact}`;
  static metadesc: string = CrudDefMetaDesc.upload_metadesc;
}

// ████ UPLOAD INPUT DTO ████████████████████████████████████████████████
@InputType()
export class RetsListingAdditionalInfoUploadInputDto extends UploadInputDto implements UploadInputArtefactCRUDTypeDefinition {
@Field(() => RetsListingAdditionalInfoUploadRefTypeEnum, {nullable: false, description: CrudDefMetaDesc.upload_ref_type})
@IsNotEmpty()
ref_type!: RetsListingAdditionalInfoUploadRefTypeEnum;
}

// ████ UPLOAD OUTPUT DTO ███████████████████████████████████████████████
@ObjectType()
@Directive('@shareable')
export class RetsListingAdditionalInfoUploadOutputDto extends UploadOutputDto implements UploadOutputArtefactCRUDTypeDefinition {
@Field(() => RetsListingAdditionalInfoUploadRefTypeEnum, {nullable: true, description: CrudDefMetaDesc.upload_ref_type})
ref_type?: RetsListingAdditionalInfoUploadRefTypeEnum;
}

/**
* █████████████████████████████████████████████████████████████
* █ UPLOAD DELETE DTO █████████████████████████████████████████
* █████████████████████████████████████████████████████████████
**/

export class RetsListingAdditionalInfoUploadDeleteDto extends RetsListingAdditionalInfoEntity implements UploadDeleteDtoCRUDTypeDefinition {
static metaname: string = `${RetsListingAdditionalInfoEntity?.metaname}${UploadDeleteArtefact}`;
static metadesc: string = CrudDefMetaDesc.upload_delete_metadesc;
}

// ████ UPLOAD DELETE INPUT DTO ████████████████████████████████████████████████
@InputType()
export class RetsListingAdditionalInfoUploadDeleteInputDto extends UploadDeleteInputDto implements UploadDeleteInputArtefactCRUDTypeDefinition {
@Field(() => RetsListingAdditionalInfoUploadRefTypeEnum, {nullable: false, description: CrudDefMetaDesc.upload_ref_type})
@IsNotEmpty()
ref_type!: RetsListingAdditionalInfoUploadRefTypeEnum;
}

// ████ UPLOAD DELETE OUTPUT DTO ███████████████████████████████████████████████
@ObjectType()
@Directive('@shareable')
export class RetsListingAdditionalInfoUploadDeleteOutputDto extends UploadDeleteOutputDto implements UploadDeleteOutputArtefactCRUDTypeDefinition {
@Field(() => RetsListingAdditionalInfoUploadRefTypeEnum, {nullable: true, description: CrudDefMetaDesc.upload_ref_type})
ref_type?: RetsListingAdditionalInfoUploadRefTypeEnum;
}