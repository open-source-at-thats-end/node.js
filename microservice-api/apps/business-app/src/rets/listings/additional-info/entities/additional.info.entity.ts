import { EntityMetaCRUDTypeDefinition, EntityCRUDTypeDefinition, DateTime, EntitySuffix, InIndexPrefix, UnIndexPrefix, FtIndexPrefix } from "@libs/library-app";
import { IsDate, isInt, IsInt, IsNotEmpty, IsOptional, IsString, MaxLength } from "class-validator";
import { Column, CreateDateColumn, DeleteDateColumn, Double, Entity, In, Index, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn, Unique, UpdateDateColumn } from "typeorm";
import { Directive, Field, Float, Int, ObjectType } from "@nestjs/graphql";
import { time } from "console";
import { RetsMlsProviderEntity } from "../../mls-provider/entities/mls.provider.entity";


/*
    id?: any;
    mlsp_id?: any;
    mls_num?: any;
    mls_status?: any;
    buyer_agent_email?: any;
    buyer_agent_name?: any;
    buyer_agent_office_id?: any;
    buyer_office_name?: any;
    buyer_office_phone?: any;
    seller_agent_name?: any;
    seller_office_name?: any;
    seller_office_id?: any;
    seller_office_phone?: any;
    accessibility_features?: any;
    acreage?: any;
    amen_rec_freq?: any;
    amenities?: any;
    amenity_rec_fee?: any;
    appliances?: any;
    application_fee?: any;
    approval?: any;
    approx_living_area?: any;
    available_documents?: any;
    basement?: any;
    bath_desc?: any;
    bed_description?: any;
    beds_total?: any;
    boat_access?: any;
    building_features?: any;
    buildings?: any;
    c_dom?: any;
    cable_available_yn?: any;
    canal_width?: any;
    carport_desc?: any;
    carport_spaces?: any;
    community_features?: any;
    community_type?: any;
    condo_fee_freq?: any;
    condo_fee?: any;
    construction?: any;
    contract_status_change_date?: any;
    cooling?: any;
    development_name?: any;
    development?: any;
    dining?: any;
    driving_directions?: any;
    electric?: any;
    elevator?: any;
    equipment?: any;
    exterior_features?: any;
    exterior_finish?: any;
    fencing?: any;
    fireplace_features?: any;
    fireplace?: any;
    floor_plan_type?: any;
    flooring?: any;
    foundation_details?: any;
    furnished?: any;
    gas?: any;
    golf_type?: any;
    gross_operating_income?: any;
    gross_rental_income?: any;
    ground_cover?: any;
    guest_house_desc?: any;
    guest_house_living_area?: any;
    gulf_access_type?: any;
    hoa_fee?: any;
    hoa_frequency?: any;
    hoa_include?: any;
    is_hoa?: any;
    interior_features?: any;
    irrigation?: any;
    is_gulf_access?: any;
    is_lease_limit?: any;
    is_pool?: any;
    kitchen_features?: any;
    land_improvements?: any;
    land_lease_fee_freq?: any;
    land_lease_fee?: any;
    last_change_date?: any;
    last_change_type?: any;
    leases_per_year?: any;
    legal?: any;
    lot_back?: any;
    lot_description?: any;
    lot_dimensions?: any;
    lot_frontage?: any;
    lot_left?: any;
    lot_right?: any;
    lower_sqft?: any;
    mls_area_major?: any;
    maintenance?: any;
    management?: any;
    mandatory_club_fee_freq?: any;
    mandatory_club_fee?: any;
    mandatory_hoa_yn?: any;
    master_hoa_fee_freq?: any;
    master_hoa_fee?: any;
    max_pets_limit_weight?: any;
    max_pets_limit?: any;
    media?: any;
    min_days_of_lease?: any;
    net_operating_income?: any;
    num_unit_floor?: any;
    one_time_land_lease_fee?: any;
    one_time_mandatory_club_fee?: any;
    one_time_othe_fee?: any;
    one_time_rec_lease_fee?: any;
    one_time_special_assessment_fee?: any;
    ownership?: any;
    parcel_number?: any;
    parcels_lots?: any;
    pet_desc?: any;
    pet_restrictions?: any;
    planned_use?: any;
    pool_desc?: any;
    possession?: any;
    previous_list_price?: any;
    price_per_sqft?: any;
    primary_bed_level?: any;
    property_record_update_timestamp?: any;
    rear_exposure?: any;
    restrictions?: any;
    road?: any;
    roof?: any;
    rooms?: any;
    section?: any;
    security_safety?: any;
    sewer?: any;
    spa_desc?: any;
    special_assessment_fee_freq?: any;
    special_assessment?: any;
    specials?: any;
    sprinkler?: any;
    status_change_datetime?: any;
    status_type?: any;
    storm_protection?: any;
    tax_district_type?: any;
    tax_remarks?: any;
    tenantpays?: any;
    transfer_fee?: any;
    trees?: any;
    unit_location?: any;
    units_in_building?: any;
    unitsin_complex?: any;
    upper_sqft?: any;
    usage?: any;
    utilities?: any;
    view_desc?: any;
    view?: any;
    virtual_tour_url?: any;
    water?: any;
    waterfront_desc?: any;
    windows?: any;
    zoning?: any;
    buyer_financing?: any;
    p_date?: any;
    bidding_war?: any;
    created?: any;
    updated?: any;
    deleted?: any;
*/

const  RetsListingAdditionalInfoEntityFieldMeta: EntityMetaCRUDTypeDefinition = {

    id: {
        desc: 'Unique ID of the market type, auto generated.',
        validation: {} 
    },
    mlsp_id: {
        desc: 'MLS Service Provider ID',
        validation:{}
    },
    mls_num: {
        desc: 'Unique ID of Listing',
        validation:{
            maxLength:255,
            maxLengthMsg: "Maximum length of mls num is 255 characters.",
        }
    },
    mls_status: {
        desc: 'MLS Status',
        validation:{
            maxLength:25,
            maxLengthMsg: "Maximum length of mls status is 25 characters.",
        }   
    },
    buyer_agent_email: {
        desc: 'Buyer Agent Email',
        validation:{
            maxLength:80,
            maxLengthMsg: "Maximum length of buyer agent email is 80 characters.",
        }   
    },
    buyer_agent_name: {
        desc: 'Buyer Agent Name',
        validation:{
            maxLength:150,
            maxLengthMsg: "Maximum length of buyer agent name is 150 characters.",
        }   
    },
    buyer_agent_office_id:{
        desc: 'Buyer Agent Office ID',
        validation:{
            maxLength:20,
            maxLengthMsg: "Maximum length of buyer agent office id is 20 characters.",
        }

    },
    buyer_office_name: {
        desc: 'Buyer Office Name',
        validation:{
            maxLength:255,
            maxLengthMsg: "Maximum length of buyer agent office name is 255 characters.",
        }
    },
    buyer_office_phone: {
        desc: 'Buyer Office Phone',
        validation:{
            maxLength:16,
            maxLengthMsg: "Maximum length of buyer agent office phone is 16 characters.",
        }
    },
    seller_agent_name: {
        desc: 'Seller Agent Name',        
        validation:{
            maxLength:150,
            maxLengthMsg: "Maximum length of seller agent name is 150 characters.",        
        }
    },
    seller_office_name: {
        desc: 'Seller Office Name',
        validation:{
            maxLength:255,
            maxLengthMsg: "Maximum length of seller office name is 255 characters.",
        }
    },
    seller_office_id:{
        desc: 'Seller Office ID',
        validation:{
            maxLength:20,
            maxLengthMsg: "Maximum length of seller office id is 20 characters.",
        }
    },
    seller_office_phone: {
        desc: 'Seller Office Phone',
        validation:{
            maxLength:16,
            maxLengthMsg: "Maximum length of seller office phone is 16 characters.",
        }
    },
    accessibility_features: {
        desc: 'Accessibility Features',
        validation:{}
    },
    acreage:{
        desc: 'Acreage',
        validation:{}
    },
    amen_rec_freq: {
        desc: 'Amen Rec Freq',
        validation:{
            maxLength:20,
            maxLengthMsg: "Maximum length of amen rec freq is 20 characters.",
        }
    },
    amenities: {
        desc: 'Amenities',
        validation:{
        }
    },
    amenity_rec_fee: {
        desc: 'Amenity Rec Fee',
        validation:{
        }
    },
    appliances : {
        desc: 'Appliances',
        validation:{
            maxLength:255,
            maxLengthMsg: "Maximum length of appliances is 255 characters.",
        }    
    },
    application_fee: {
        desc: 'Application Fee',
        validation:{
        }
    },
    approval: {
        desc: 'Approval',
        validation:{
            maxLength:16,
            maxLengthMsg: "Maximum length of approval is 16 characters.",
        }
    },
    approx_living_area: {
        desc: 'Approx Living Area',
        validation:{
        }
    },
    available_documents: {
        desc: 'Available Documents',
        validation:{
        }
    },
    basement: {
        desc: 'Basement',
        validation:{
        }
    },
    bath_desc: {
        desc: 'Bath Desc',
        validation:{
        }
    },
    bed_description: {
        desc: 'Bed Description',
        validation:{
        }
    },
    beds_total: {
        desc: 'Beds Total',
        validation:{}
    },
    boat_access: {
        desc: 'Boat Access',
        validation:{
            maxLength:1,
            maxLengthMsg: "Maximum length of boat access is 1 characters.",
        }  
    },
    building_features: {
        desc: 'Building Features',
        validation:{
        }  
    },
    buildings:{
        desc: 'Buildings',
        validation:{
        }
    },
    c_dom:{
        desc: 'C Dom',
        validation:{}
    },
    cable_available_yn: {
        desc: 'Cable Available Yn',
        validation:{
            maxLength:1,
            maxLengthMsg: "Maximum length of cable available yn is 1 characters.",
        }
    },
    canal_width: {
        desc: 'Canal Width',
        validation:{
            maxLength:32,
            maxLengthMsg: "Maximum length of canal width is 32 characters.",
        }
    },
    carport_desc: {
        desc: 'Carport Desc',
        validation:{
            maxLength:255,
            maxLengthMsg: "Maximum length of carport desc is 255 characters.",
        }
    },
    carport_spaces: {
        desc: 'Carport Spaces',
        validation:{
        }
    },
    community_features: {
        desc: 'Community Features',
        validation:{
        }
    },
    community_type: {
        desc: 'Community Type',
        validation:{
            maxLength:255,
            maxLengthMsg: "Maximum length of community type is 255 characters.",
        }
    },
    condo_fee_freq: {
        desc: 'Condo Fee Freq',
        validation:{
            maxLength:20,
            maxLengthMsg: "Maximum length of condo fee freq is 20 characters.",
        }
    },
    condo_fee: {
        desc: 'Condo Fee',
        validation:{
        }      
    },
    construction:{
        desc: 'Construction',
        validation:{
        }
    },
    contract_status_change_date: {
        desc: 'Contract Status Change Date',
        validation:{}
    },
    cooling: {
        desc: 'Cooling',
        validation:{
        }
    },
    development_name: {
        desc: 'Development Name',
        validation:{
            maxLength:50,
            maxLengthMsg: "Maximum length of development name is 50 characters.",
        }
    },
    development: {
        desc: 'Development',
        validation:{
            maxLength:32,
            maxLengthMsg: "Maximum length of development is 32 characters.",
        }
    },
    dining: {
        desc: 'Dining',
        validation:{
            maxLength:255,
            maxLengthMsg: "Maximum length of dining is 255 characters.",
        }
    },
    driving_directions: {
        desc: 'Driving Directions',
        validation:{
        }
    },
    electric: {
        desc: 'Electric',
        validation:{
            maxLength:64,
            maxLengthMsg: "Maximum length of electric is 64 characters.",
        }
    },
    elevator: {
        desc: 'Elevator',
        validation:{
            maxLength:15,
            maxLengthMsg: "Maximum length of elevator is 15 characters.",
        }
    },
    equipment: {
        desc: 'Equipment',
        validation:{
        }
    },
    exterior_features: {
        desc: 'Exterior Features',
        validation:{
        }
    },
    exterior_finish: {
        desc: 'Exterior Finish',
        validation:{
            maxLength:64,
            maxLengthMsg: "Maximum length of exterior finish is 64 characters.",
        }
    },
    fencing: {
        desc: 'Fencing',
        validation:{
        }
    },
    fireplace_features: {
        desc: 'Fireplace Features',
        validation:{
        }
    },
    fireplace: {
        desc: 'Fireplace',
        validation:{
        }
    },
    floor_plan_type: {
        desc: 'Floor Plan Type',
        validation:{
            maxLength:255,
            maxLengthMsg: "Maximum length of floor plan type is 255 characters.",
        }
    },
    flooring: {
        desc: 'Flooring',
        validation:{
            maxLength:64,
            maxLengthMsg: "Maximum length of flooring is 64 characters.",
        }
    },
    foundation_details: {
        desc: 'Foundation Details',
        validation:{
        }
    },
    furnished: {
        desc: 'Furnished',
        validation:{
            maxLength:25,
            maxLengthMsg: "Maximum length of furnished is 25 characters.",
        }
    },
    gas: {
        desc: 'Gas',
        validation:{
            maxLength:25,
            maxLengthMsg: "Maximum length of gas is 25 characters.",
        }
    },
    golf_type: {
        desc: 'Golf Type',
        validation:{
            maxLength:32,
            maxLengthMsg: "Maximum length of golf type is 32 characters.",
        }
    },
    gross_operating_income: {
        desc: 'Gross Operating Income',
        validation:{
        },
    },
    gross_rental_income: {
        desc: 'Gross Rental Income',
        validation:{
        }
    },
    ground_cover: {
        desc: 'Ground Cover',
        validation:{
            maxLength:64,
            maxLengthMsg: "Maximum length of ground cover is 64 characters.",
        }
    },
    guest_house_desc: {
        desc: 'Guest House Description',
        validation:{
            maxLength:64,
            maxLengthMsg: "Maximum length of guest house description is 64 characters.",
        }
    },
    guest_house_living_area: {
        desc: 'Guest House Living Area',
        validation:{
            maxLength:64,
            maxLengthMsg: "Maximum length of guest house living area is 64 characters.",
        }
    },
    gulf_access_type: {
        desc: 'Gulf Access Type',
        validation:{
        }
    },
    hoa_fee: {
        desc: 'HOA Fee',
        validation:{
        }
    },
    hoa_frequency:{
        desc: 'HOA Frequency',
        validation:{
            maxLength:25,
            maxLengthMsg: "Maximum length of hoa frequency is 25 characters.",
        }
    },
    hoa_include:{
        desc: 'HOA Include',
        validation:{
            maxLength:32,
            maxLengthMsg: "Maximum length of hoa include is 32 characters.",
        }
    },
    is_hoa:{
        desc: 'Is HOA',
        validation:{
            maxLength:1,
            maxLengthMsg: "Maximum length of is hoa is 4 characters.",
        }
    },
    interior_features:{
        desc: 'Interior Features',
        validation:{}
    },
    irrigation:{
        desc:'Irrigation',
        validation:{
        }
    },
    is_gulf_access:{
        desc:`Is Gulf Access`,
        validation:{
            maxLength:1,
            maxLengthMsg: "Maximum length of is gulf access is 1 characters.",
        }
    },
    is_lease_limit:{
        desc:'Is Lease Limit',
        validation:{
            maxLength:1,
            maxLengthMsg: "Maximum length of is lease limit is 1 characters.",
        }
    },
    is_pool:{
        desc:'Is Pool',
        validation:{
            maxLength:1,
            maxLengthMsg: "Maximum length of is pool is 1 characters.",
        }
    },
   
    kitchen_features:{
        desc:'Kitchen Features',
        validation:{
            maxLength:128,
            maxLengthMsg: "Maximum length of kitchen features is 128 characters.",
        }
    },
    land_improvements:{
        desc:'Land Improvements',
        validation:{
            maxLength:64,
            maxLengthMsg: "Maximum length of land improvements is 64 characters.",
        }
    },
    land_lease_fee_freq:{
        desc:'Land Lease Fee Freq',
        validation:{
            maxLength:20,
            maxLengthMsg: "Maximum length of land improvements is 20 characters.",
        }
    },
    land_lease_fee:{
        desc:'Land Lease Fee',
        validation:{
        }
    },
    last_change_date:{
        desc:'Last Change Date',
        validation:{
        }
    },
    last_change_type:{
        desc:'Last Change Type',
        validation:{
            maxLength:25,
            maxLengthMsg: "Maximum length of last change type is 25 characters.",
        }
    },
    leases_per_year:{
        desc:'Leases Per Year',
        validation:{}
    },
    legal:{
        desc:'Legal',
        validation:{
        }
    },
    lot_back:{
        desc:'Lot Back',
        validation:{
            
        }
    },
    lot_description:{
        desc:'Lot Description',
        validation:{
            maxLength:255,
            maxLengthMsg: "Maximum length of lot description is 255 characters.",
        },
    },
    lot_dimensions:{
        desc:'Lot Dimensions',
        validation:{
            maxLength:150,
            maxLengthMsg: "Maximum length of lot dimensions is 150 characters.",
        }
    },
    lot_frontage:{
        desc:'Lot Frontage',
        validation:{
           
        }
    },
    lot_left:{
        desc:'Lot Left',
        validation:{
            
        }
    },
    lot_right:{
        desc:'Lot Right',
        validation:{
            
        }
    },
    lower_sqft:{
        desc:'Lower Sqft',
        validation:{
            maxLength:64,
            maxLengthMsg: "Maximum length of lower sqft is 64 characters.",
        }
    },
    mls_area_major:{
        desc:'Mls Area Major',
        validation:{
            maxLength:150,
            maxLengthMsg: "Maximum length of lower sqft is 150 characters.",
        }
    },
    maintenance:{
        desc: 'Maintenance',
        validation:{
        }
    },
    management:{
        desc: 'Management',
        validation:{
            maxLength:20,
            maxLengthMsg: "Maximum length of management is 20 characters.",
        }
    },
    mandatory_club_fee_freq:{
        desc:'Mandatory Club Fee Freq',
        validation:{
            maxLength:25,
            maxLengthMsg: "Maximum length of mandatory club fee freq is 25 characters.",
        }
    },
    mandatory_club_fee:{
        desc:'Mandatory Club Fee',
        validation:{}
    },
    mandatory_hoa_yn:{
        desc:'Mandatory Hoa Yn',
        validation:{
            maxLength:1,
            maxLengthMsg: "Maximum length of mandatory hoa yn is 1 characters.",
        }
    },
    master_hoa_fee_freq:{
        desc:'Mandatory Hoa Fee Freq',
        validation:{
            maxLength:20,
            maxLengthMsg: "Maximum length of mandatory hoa fee freq is 20 characters.",
        }
    },
    master_hoa_fee:{
        desc:'Mandatory Hoa Fee',
        validation:{}
    },
    max_pets_limit_weight:{
        desc:'Max Pets Limit Weight',
        validation:{
            maxLength:32,
            maxLengthMsg: "Maximum length of max pets limit weight is 32 characters.",
        }
    },
    max_pets_limit:{
        desc:'Max Pets Limit',
        validation:{}
    },
    media:{
        desc:'Media',
        validation:{}
    },
    min_days_of_lease:{
        desc:'Min Days Of Lease',
        validation:{}
    },
    net_operating_income:{
        desc:'Net Operating Income',
        validation:{
            maxLength:64,
            maxLengthMsg: "Maximum length of net operating income is 64 characters.",
        }
    },
    num_unit_floor:{
        desc:'Num Unit Floor',
        validation:{}
    },
    one_time_land_lease_fee:{
        desc:'One Time Land Lease Fee',
        validation:{}
    },
    one_time_mandatory_club_fee:{
        desc:'One Time Mandatory Club Fee',
        validation:{}
    },
    one_time_othe_fee:{
        desc:'One Time Othe Fee',
        validation:{}
    },
    one_time_rec_lease_fee:{
        desc:'One Time Rec Lease Fee',
        validation:{}
    },
    one_time_special_assessment_fee:{
        desc:'One Time Special Assessment Fee',
        validation:{}
    },
    ownership:{
        desc:'Ownership',
        validation:{
        }
    },
    parcel_number:{
        desc:'Parcel Number',
        validation:{
            maxLength:50,
            maxLengthMsg: "Maximum length of Parcel Number is 50 characters.",
        }
    },
    parcels_lots:{
        desc:'Parcel Lots',
        validation:{
            maxLength:16,
            maxLengthMsg: "Maximum length of Parcel Lots is 16 characters.",
        }
    },
    pet_desc:{
        desc:'Pet Desc',
        validation:{
        }
    },
    pet_restrictions:{
        desc:'Pet Restrictions',
        validation:{
        }
    },
    planned_use:{
        desc:'Planned Use',
        validation:{
            maxLength:64,
            maxLengthMsg: "Maximum length of Planned Use is 64 characters.",
        }
    },
    pool_desc:{
        desc:'Pool Desc',
        validation:{
        }
    },
    possession:{
        desc:'Possession',
        validation:{
            maxLength:255,
            maxLengthMsg: "Maximum length of Possession is 255 characters.",
        }
    },
    previous_list_price:{
        desc:'Previous List Price',
        validation:{
        }
    },
    price_per_sqft:{
        desc:'Net Operating Income',
        validation:{}
    },
    primary_bed_level:{
        desc:'Primary Bed Level',
        validation:{
            maxLength:32,
            maxLengthMsg: "Maximum length of Primary Bed Level is 32 characters.",
        }
    },
    property_record_update_timestamp:{
        desc:'Property Record Update Timestamp',
        validation:{
            maxLength:32,
            maxLengthMsg: "Maximum length of Property Record Update Timestamp is 32 characters.",
        }
    },
    rear_exposure:{
        desc:'Rear Exposure',
        validation:{
            maxLength:50,
            maxLengthMsg: "Maximum length of Rear Exposure is 50 characters.",
        }
    },
    restrictions:{
        desc:'Restrictions',
        validation:{
            maxLength:50,
            maxLengthMsg: "Maximum length of Wnership is 50 characters.",
        }
    },
    road:{
        desc:'Road',
        validation:{
            maxLength:255,
            maxLengthMsg: "Maximum length of Road is 255 characters.",
        }
    },
    roof:{
        desc:'Roof',
        validation:{
        }
    },
    rooms:{
        desc:'Rooms',
        validation:{
        }
    },
    section:{
        desc:'Section',
        validation:{
            maxLength:32,
            maxLengthMsg: "Maximum length of Section is 32 characters.",
        }
    },
    security_safety:{
        desc:'Security Safety',
        validation:{
        }
    },
    sewer:{
        desc:'Sewer',
        validation:{
  
        }
    },
    spa_desc:{
        desc:'Spa Desc',
        validation:{
        }
    },
    special_assessment_fee_freq:{
        desc:'Special Assessment Fee Freq',
        validation:{
            maxLength:32,
            maxLengthMsg: "Maximum length of Special Assessment Fee Freq is 32 characters.",
        }
    },
    special_assessment:{
        desc:'Special Assessment',
        validation:{
            maxLength:32,
            maxLengthMsg: "Maximum length of Special Assessment is 32 characters.",
        }
    },
    specials:{
        desc:'Specials',
        validation:{
            maxLength:64,
            maxLengthMsg: "Maximum length of Specials is 64 characters.",
        }
    },
    sprinkler:{
        desc:'Sprinkler',
        validation:{
            maxLength:32,
            maxLengthMsg: "Maximum length of Sprinkler is 32 characters.",
        }
    },
    status_change_datetime:{
        desc:'Status Change Datetime',
        validation:{
            maxLength:32,
            maxLengthMsg: "Maximum length of Status Change Datetime is 32 characters.",
        }
    },
    status_type:{
        desc:'Status Type',
        validation:{
            maxLength:30,
            maxLengthMsg: "Maximum length of Status Type is 30 characters.",
        }
    },
    storm_protection:{
        desc:'Storm Protection',
        validation:{
        }
    },
    tax_district_type:{
        desc:'Tax District Type',
        validation:{
            maxLength:16,
            maxLengthMsg: "Maximum length of Tax District Type is 16 characters.",
        }
    },
    tax_remarks:{
        desc:'Tax Remarks',
        validation:{
            maxLength:255,
            maxLengthMsg: "Maximum length of Tax Remarks is 255 characters.",
        }
    },
    tenantpays:{
        desc:'Tenantpays',
        validation:{
            maxLength:32,
            maxLengthMsg: "Maximum length of Tenantpays is 32 characters.",
        }
    },
    transfer_fee:{
        desc:'Transfer Fee',
        validation:{}
    },
    trees:{
        desc:'Trees',
        validation:{
            maxLength:32,
            maxLengthMsg: "Maximum length of Trees is 32 characters.",
        }
    },
    unit_location:{
        desc:'Unit Location',
        validation:{
        }
    },
    units_in_building:{
        desc:'Units In Building',
        validation:{}
    },
    unitsin_complex:{
        desc:'Unitsin Complex',
        validation:{
        }
    },
    upper_sqft:{
        desc:'Upper Sqft',
        validation:{
        }
    },
    usage:{
        desc:'Usage',
        validation:{
            maxLength:32,
            maxLengthMsg: "Maximum length of Usage is 32 characters.",
        }
    },
    utilities:{
        desc:'Utilities',
        validation:{
        }
    },
    view_desc:{
        desc:'View Desc',
        validation:{
        }
    },
    view:{
        desc:'View',
        validation:{
        }
    },
    virtual_tour_url:{
        desc:'Virtual Tour Url',
        validation:{}
    },
    water:{
        desc:'Water',
        validation:{
        }
    },
    waterfront_desc:{
        desc:'Waterfront Desc',
        validation:{
            
        }
    },
    windows:{
        desc:'Windows',
        validation:{
            maxLength:255,
            maxLengthMsg: "Maximum length of Windows is 255 characters.",
        }
    },
    zoning:{
        desc:'Zoning',
        validation:{
            maxLength:25,
            maxLengthMsg: "Maximum length of Zoning is 25 characters.",
        }
    },
    buyer_financing:{
        desc:'Buyer Financing',
        validation:{}
    },
    p_date:{
        desc:'P Date',
        validation:{}
    },
    bidding_war:{
        desc:'Bidding War',
        validation:{}
    },
    created: {
      desc: 'When record is created, date-time will be saved.',
      validation:{}
    },
    updated: {
        desc: 'When record is updated, date-time will be saved.',
        validation:{}
    },
    deleted: {
        desc: 'When record is soft deleted or soft removed, date-time will be saved otherwise null to indicate record is not deleted.',
        validation:{}
    },

    // collation, nullable, maxlength, index, unique, default value, : new Index, class validator

  };

const  RetsListingAdditionalInfoVirtualFieldMeta: EntityMetaCRUDTypeDefinition = {
  fr_mlsp_id: {
    desc: `MLSP ID of the rets listing additional info.`,
    validation: {}
  }
}

export const RetsListingAdditionalInfoEntityMeta = {...RetsListingAdditionalInfoEntityFieldMeta, ...RetsListingAdditionalInfoVirtualFieldMeta};
const meta = RetsListingAdditionalInfoEntityMeta; // need to use in this file down the line

@ObjectType({ isAbstract: true })
@Directive('@key(fields: "id")')
@Entity({
  name: 'rets_listing_additional_info',
  engine: 'InnoDB',
})

@Unique(`${UnIndexPrefix}rlai_mlsp_id`,[`mlsp_id`, `mls_num`])
export class RetsListingAdditionalInfoEntity implements EntityCRUDTypeDefinition {

    static colprefix: string = 'rlai_';
    static uploaddir: string = 'listing-additional-info';
    
    static metaname: string = (RetsListingAdditionalInfoEntity.name).replace(EntitySuffix, '');
    static metadesc: string = 'Provides listing details of listing additional info.';

    @Field(() => Int, {nullable: true, description: meta.id.desc})
    @PrimaryGeneratedColumn({
      name: `${RetsListingAdditionalInfoEntity.colprefix}id`,     
      type: 'int', 
      unsigned: true, 
      primaryKeyConstraintName: 'PRIMARY',
    })
    id?: number;

    @Field(() => Int, {nullable: true, description: meta.mlsp_id.desc})
    @Column({
      name: `${RetsListingAdditionalInfoEntity.colprefix}mlsp_id`, 
      type: 'tinyint', 
      unsigned: true, 
      comment: `FK(rets_mls_provider => mlsp_id)`
    })
    //@Index(`${InIndexPrefix}${RetsListingAdditionalInfoEntity.colprefix}mlsp_id`, { unique: false })
    @IsNotEmpty()
    @IsInt()
    mlsp_id?: number;

    @Field(() => String, {nullable: true, description: meta.mls_num.desc})
    @Column({
      name: `${RetsListingAdditionalInfoEntity.colprefix}mls_num`, 
      type: 'varchar', 
      length: meta.mls_num.validation.maxLength, 
      collation: 'utf8mb4_general_ci',
      comment: `FK(rets_listing => mls_num)`
    })
    //@Index(`${InIndexPrefix}${RetsListingAdditionalInfoEntity.colprefix}mls_num`, { unique: false })
    @IsNotEmpty()
    @MaxLength(meta.mls_num.validation.maxLength as number, {message: meta.mls_num.validation.maxLengthMsg})
    mls_num?: string;
    
    @Field(() => String, {nullable: true, description: meta.mls_status.desc})
    @Column({
      name: `${RetsListingAdditionalInfoEntity.colprefix}mls_status`, 
      type: 'varchar', 
      nullable: true,
      length: meta.mls_status.validation.maxLength, 
      collation: 'utf8mb4_general_ci',
    })
    @Index(`${InIndexPrefix}${RetsListingAdditionalInfoEntity.colprefix}mls_status`, { unique: false })
    @IsOptional()
    @MaxLength(meta.mls_status.validation.maxLength as number, {message: meta.mls_status.validation.maxLengthMsg})
    mls_status?: string;

    @Field(() => String, {nullable: true, description: meta.buyer_agent_email.desc})
    @Column({
      name: `${RetsListingAdditionalInfoEntity.colprefix}buyer_agent_email`, 
      type: 'varchar',
      nullable: true, 
      length: meta.buyer_agent_email.validation.maxLength, 
      collation: 'utf8mb4_general_ci',
    })
    @Index(`${InIndexPrefix}${RetsListingAdditionalInfoEntity.colprefix}buyer_agent_email`, { unique: false })
    @IsOptional()
    @MaxLength(meta.buyer_agent_email.validation.maxLength as number, {message: meta.buyer_agent_email.validation.maxLengthMsg})
    buyer_agent_email?: string;
    
    @Field(() => String, {nullable: true, description: meta.buyer_agent_name.desc})
    @Column({
      name: `${RetsListingAdditionalInfoEntity.colprefix}buyer_agent_name`, 
      type: 'varchar', 
      nullable: true,
      length: meta.buyer_agent_name.validation.maxLength, 
      collation: 'utf8mb4_general_ci',
    })
    @Index(`${InIndexPrefix}${RetsListingAdditionalInfoEntity.colprefix}buyer_agent_name`, { unique: false })
    @IsOptional()
    @MaxLength(meta.buyer_agent_name.validation.maxLength as number, {message: meta.buyer_agent_name.validation.maxLengthMsg})
    buyer_agent_name?: string;
 
    @Field(() => String, {nullable: true, description: meta.buyer_agent_office_id.desc})
    @Column({
      name: `${RetsListingAdditionalInfoEntity.colprefix}buyer_agent_office_id`, 
      type: 'varchar', 
      nullable: true,
      length: meta.buyer_agent_office_id.validation.maxLength, 
      collation: 'utf8mb4_general_ci',
    })
    @Index(`${InIndexPrefix}${RetsListingAdditionalInfoEntity.colprefix}buyer_agent_office_id`, { unique: false })
    @IsOptional()
    @MaxLength(meta.buyer_agent_office_id.validation.maxLength as number, {message: meta.buyer_agent_office_id.validation.maxLengthMsg})
    buyer_agent_office_id?: string;

    @Field(() => String, {nullable: true, description: meta.buyer_office_name.desc})
    @Column({
      name: `${RetsListingAdditionalInfoEntity.colprefix}buyer_office_name`, 
      type: 'varchar', 
      nullable: true,
      length: meta.buyer_office_name.validation.maxLength, 
      collation: 'utf8mb4_general_ci',
    })
    @Index(`${InIndexPrefix}${RetsListingAdditionalInfoEntity.colprefix}buyer_office_name`, { unique: false })
    @IsOptional()
    @MaxLength(meta.buyer_office_name.validation.maxLength as number, {message: meta.buyer_office_name.validation.maxLengthMsg})
    buyer_office_name?: string;

    @Field(() => String, {nullable: true, description: meta.buyer_office_phone.desc})
    @Column({
      name: `${RetsListingAdditionalInfoEntity.colprefix}buyer_office_phone`, 
      type: 'varchar', 
      nullable: true,
      length: meta.buyer_office_phone.validation.maxLength, 
      collation: 'utf8mb4_general_ci',
    })
    @Index(`${InIndexPrefix}${RetsListingAdditionalInfoEntity.colprefix}buyer_office_phone`, { unique: false })
    @IsOptional()
    @MaxLength(meta.buyer_office_phone.validation.maxLength as number, {message: meta.buyer_office_phone.validation.maxLengthMsg})
    buyer_office_phone?: string;

    @Field(() => String, {nullable: true, description: meta.seller_agent_name.desc})
    @Column({
      name: `${RetsListingAdditionalInfoEntity.colprefix}seller_agent_name`, 
      type: 'varchar', 
      nullable: true,
      length: meta.seller_agent_name.validation.maxLength, 
      collation: 'utf8mb4_general_ci',
    })
    @Index(`${InIndexPrefix}${RetsListingAdditionalInfoEntity.colprefix}seller_agent_name`, { unique: false })
    @IsOptional()
    @MaxLength(meta.seller_agent_name.validation.maxLength as number, {message: meta.seller_agent_name.validation.maxLengthMsg})
    seller_agent_name?: string;

    @Field(() => String, {nullable: true, description: meta.seller_office_name.desc})
    @Column({
      name: `${RetsListingAdditionalInfoEntity.colprefix}seller_office_name`, 
      type: 'varchar', 
      nullable: true,
      length: meta.seller_office_name.validation.maxLength, 
      collation: 'utf8mb4_general_ci',
    })
    @Index(`${InIndexPrefix}${RetsListingAdditionalInfoEntity.colprefix}seller_office_name`, { unique: false })
    @IsOptional()
    @MaxLength(meta.seller_office_name.validation.maxLength as number, {message: meta.seller_office_name.validation.maxLengthMsg})
    seller_office_name?: string;

    @Field(() => String, {nullable: true, description: meta.seller_office_id.desc})
    @Column({
      name: `${RetsListingAdditionalInfoEntity.colprefix}seller_office_id`, 
      type: 'varchar', 
      nullable: true,
      length: meta.seller_office_id.validation.maxLength, 
      collation: 'utf8mb4_general_ci',
    })
    @Index(`${InIndexPrefix}${RetsListingAdditionalInfoEntity.colprefix}seller_office_id`, { unique: false })
    @IsOptional()
    @MaxLength(meta.seller_office_id.validation.maxLength as number, {message: meta.seller_office_id.validation.maxLengthMsg})
    seller_office_id?: string;

    @Field(() => String, {nullable: true, description: meta.seller_office_phone.desc})
    @Column({
      name: `${RetsListingAdditionalInfoEntity.colprefix}seller_office_phone`, 
      type: 'varchar', 
      nullable: true,
      length: meta.seller_office_phone.validation.maxLength, 
      collation: 'utf8mb4_general_ci',
    })
    @IsOptional()
    @MaxLength(meta.seller_office_phone.validation.maxLength as number, {message: meta.seller_office_phone.validation.maxLengthMsg})
    seller_office_phone?: string;

    @Field(() => String, {nullable: true, description: meta.accessibility_features.desc})
    @Column({
      name: `${RetsListingAdditionalInfoEntity.colprefix}accessibility_features`, 
      type: 'text', 
      nullable: true,
      length: meta.accessibility_features.validation.maxLength, 
      collation: 'utf8mb4_general_ci',
    })
    @Index(`${FtIndexPrefix}${RetsListingAdditionalInfoEntity.colprefix}accessibility_features`, { unique: false })
    @IsOptional()
    @MaxLength(meta.accessibility_features.validation.maxLength as number, {message: meta.accessibility_features.validation.maxLengthMsg})
    accessibility_features?: string;

    @Field(() => Float, {nullable: true, description: meta.acreage.desc})
    @Column({
      name: `${RetsListingAdditionalInfoEntity.colprefix}acreage`, 
      type: 'decimal', 
      nullable: true,
      precision: 14,
      scale: 2,
    })
    @IsOptional()
    acreage?: number;

    @Field(() => String, {nullable: true, description: meta.amen_rec_freq.desc})
    @Column({
      name: `${RetsListingAdditionalInfoEntity.colprefix}amen_rec_freq`, 
      type: 'varchar', 
      nullable: true,
      length: meta.amen_rec_freq.validation.maxLength, 
      collation: 'utf8mb4_general_ci',
    })
    @IsOptional()
    @MaxLength(meta.amen_rec_freq.validation.maxLength as number, {message: meta.amen_rec_freq.validation.maxLengthMsg})
    amen_rec_freq?: string;

    @Field(() => String, {nullable: true, description: meta.amenities.desc})
    @Column({
      name: `${RetsListingAdditionalInfoEntity.colprefix}amenities`, 
      type: 'varchar', 
      nullable: true,
      collation: 'utf8mb4_general_ci',
    })
    @Index(`${FtIndexPrefix}${RetsListingAdditionalInfoEntity.colprefix}amenities`, { unique: false })
    @IsOptional()
    amenities?: string;

    @Field(() => Float, {nullable: true, description: meta.amenity_rec_fee.desc})
    @Column({
      name: `${RetsListingAdditionalInfoEntity.colprefix}amenity_rec_fee`, 
      type: 'decimal', 
      nullable: true,
      precision: 14,
      scale: 2
    })
    @IsOptional()
    amenity_rec_fee?: number;

    @Field(() => String, {nullable: true, description: meta.appliances.desc})
    @Column({
      name: `${RetsListingAdditionalInfoEntity.colprefix}appliances`, 
      type: 'text', 
      nullable: true,
      collation: 'utf8mb4_general_ci',
    })
    @IsOptional()
    appliances?: string;

    @Field(() => Float, {nullable: true, description: meta.application_fee.desc})
    @Column({
      name: `${RetsListingAdditionalInfoEntity.colprefix}application_fee`, 
      type: 'decimal', 
      nullable: true,
      precision: 14,
      scale: 2
    })
    @IsOptional()
    application_fee?: number;

    @Field(() => String, {nullable: true, description: meta.approval.desc})
    @Column({
      name: `${RetsListingAdditionalInfoEntity.colprefix}approval`, 
      type: 'varchar', 
      nullable: true,
      length: meta.approval.validation.maxLength, 
      collation: 'utf8mb4_general_ci',
    })
    @IsOptional()
    @MaxLength(meta.approval.validation.maxLength as number, {message: meta.approval.validation.maxLengthMsg})
    approval?: string;

    @Field(() => Float, {nullable: true, description: meta.approx_living_area.desc})
    @Column({
      name: `${RetsListingAdditionalInfoEntity.colprefix}approx_living_area`, 
      type: 'decimal', 
      nullable: true,
      collation: 'utf8mb4_general_ci',
    })
    @IsOptional()
    approx_living_area?: number;

    @Field(() => String, {nullable: true, description: meta.available_documents.desc})
    @Column({
      name: `${RetsListingAdditionalInfoEntity.colprefix}available_documents`, 
      type: 'text', 
      nullable: true,
      collation: 'utf8mb4_general_ci',
    })
    @IsOptional()
    available_documents?: string;

    @Field(() => String, {nullable: true, description: meta.basement.desc})
    @Column({
      name: `${RetsListingAdditionalInfoEntity.colprefix}basement`, 
      type: 'text', 
      nullable: true,
      collation: 'utf8mb4_general_ci',
    })
    @IsOptional()
    basement?: string;

    @Field(() => String, {nullable: true, description: meta.bath_desc.desc})
    @Column({
      name: `${RetsListingAdditionalInfoEntity.colprefix}bath_desc`, 
      type: 'text', 
      nullable: true,
      collation: 'utf8mb4_general_ci',
    })
    @IsOptional()
    bath_desc?: string;

    @Field(() => String, {nullable: true, description: meta.bed_description.desc})
    @Column({
      name: `${RetsListingAdditionalInfoEntity.colprefix}bed_description`, 
      type: 'text', 
      nullable: true,
      collation: 'utf8mb4_general_ci',
    })
    @IsOptional()
    bed_description?: string;

    @Field(() => Int, {nullable: true, description: meta.beds_total.desc})
    @Column({
      name: `${RetsListingAdditionalInfoEntity.colprefix}beds_total`,
      type: 'int',
      unsigned: true, 
      nullable: true,
    })
    @IsOptional()
    @IsInt()
    beds_total?: number;   

    @Field(() => String, {nullable: true, description: meta.boat_access.desc})
    @Column({
      name: `${RetsListingAdditionalInfoEntity.colprefix}boat_access`, 
      type: 'varchar', 
      nullable: true,
      length: meta.boat_access.validation.maxLength, 
      collation: 'utf8mb4_general_ci',
    })
    @IsOptional()
    @MaxLength(meta.boat_access.validation.maxLength as number, {message: meta.boat_access.validation.maxLengthMsg})
    boat_access?: string;

    @Field(() => String, {nullable: true, description: meta.building_features.desc})
    @Column({
      name: `${RetsListingAdditionalInfoEntity.colprefix}building_features`, 
      type: 'text', 
      nullable: true,
      collation: 'utf8mb4_general_ci',
    })
    @Index(`${FtIndexPrefix}${RetsListingAdditionalInfoEntity.colprefix}building_features`, { unique: false })
    @IsOptional()
    building_features?: string;

    @Field(() => Int, {nullable: true, description: meta.buildings.desc})
    @Column({
      name: `${RetsListingAdditionalInfoEntity.colprefix}buildings`, 
      type: 'tinyint', 
      nullable: true,
      collation: 'utf8mb4_general_ci',
    })
    @IsInt()
    @Index(`${InIndexPrefix}${RetsListingAdditionalInfoEntity.colprefix}buildings`, { unique: false })
    @IsOptional()
    buildings?: number;

    @Field(() => Int, {nullable: true, description: meta.c_dom.desc})
    @Column({
      name: `${RetsListingAdditionalInfoEntity.colprefix}c_dom`,
      type: 'int',
      unsigned: true, 
      nullable: true,
    })
    @IsOptional()
    @IsInt()
    c_dom?: number;  

    @Field(() => String, {nullable: true, description: meta.cable_available_yn.desc})
    @Column({
      name: `${RetsListingAdditionalInfoEntity.colprefix}cable_available_yn`, 
      type: 'varchar', 
      nullable: true,
      length: meta.cable_available_yn.validation.maxLength, 
      collation: 'utf8mb4_general_ci',
    })
    @IsOptional()
    @MaxLength(meta.cable_available_yn.validation.maxLength as number, {message: meta.cable_available_yn.validation.maxLengthMsg})
    cable_available_yn?: string;

    @Field(() => String, {nullable: true, description: meta.canal_width.desc})
    @Column({
      name: `${RetsListingAdditionalInfoEntity.colprefix}canal_width`, 
      type: 'varchar', 
      nullable: true,
      length: meta.canal_width.validation.maxLength, 
      collation: 'utf8mb4_general_ci',
    })
    @IsOptional()
    @MaxLength(meta.canal_width.validation.maxLength as number, {message: meta.canal_width.validation.maxLengthMsg})
    canal_width?: string;

    @Field(() => String, {nullable: true, description: meta.carport_desc.desc})
    @Column({
      name: `${RetsListingAdditionalInfoEntity.colprefix}carport_desc`, 
      type: 'varchar', 
      nullable: true,
      length: meta.carport_desc.validation.maxLength, 
      collation: 'utf8mb4_general_ci',
    })
    @IsOptional()
    @MaxLength(meta.carport_desc.validation.maxLength as number, {message: meta.carport_desc.validation.maxLengthMsg})
    carport_desc?: string;

    @Field(() => Float, {nullable: true, description: meta.carport_spaces.desc})
    @Column({
      name: `${RetsListingAdditionalInfoEntity.colprefix}carport_spaces`, 
      type: 'decimal', 
      nullable: true,
      precision: 14,
      scale: 2
    })
    @IsOptional()
    carport_spaces?: number;

    @Field(() => String, {nullable: true, description: meta.community_features.desc})
    @Column({
      name: `${RetsListingAdditionalInfoEntity.colprefix}community_features`, 
      type: 'text', 
      nullable: true,
      collation: 'utf8mb4_general_ci',
    })
    @IsOptional()
    @Index(`${FtIndexPrefix}${RetsListingAdditionalInfoEntity.colprefix}community_features`, { unique: false })
    community_features?: string;

    @Field(() => String, {nullable: true, description: meta.community_type.desc})
    @Column({
      name: `${RetsListingAdditionalInfoEntity.colprefix}community_type`, 
      type: 'varchar', 
      nullable: true,
      length: meta.community_type.validation.maxLength, 
      collation: 'utf8mb4_general_ci',
    })
    @IsOptional()
    @MaxLength(meta.community_type.validation.maxLength as number, {message: meta.community_type.validation.maxLengthMsg})
    community_type?: string;

    @Field(() => String, {nullable: true, description: meta.condo_fee_freq.desc})
    @Column({
      name: `${RetsListingAdditionalInfoEntity.colprefix}condo_fee_freq`, 
      type: 'varchar', 
      nullable: true,
      length: meta.condo_fee_freq.validation.maxLength, 
      collation: 'utf8mb4_general_ci',
    })
    @IsOptional()
    @MaxLength(meta.condo_fee_freq.validation.maxLength as number, {message: meta.condo_fee_freq.validation.maxLengthMsg})
    condo_fee_freq?: string;

    @Field(() => Float, {nullable: true, description: meta.condo_fee.desc})
    @Column({
      name: `${RetsListingAdditionalInfoEntity.colprefix}condo_fee`, 
      type: 'decimal', 
      nullable: true,
      precision: 14,
      scale: 2
    })
    @IsOptional()
    condo_fee?: number;

    @Field(() => String, {nullable: true, description: meta.construction.desc})
    @Column({
      name: `${RetsListingAdditionalInfoEntity.colprefix}construction`, 
      type: 'varchar', 
      nullable: true,
      collation: 'utf8mb4_general_ci',
    })
    @IsOptional()
    construction?: string;

    @Field(() => DateTime, {nullable: true, description: meta.contract_status_change_date.desc})
    @Column({
      name: `${RetsListingAdditionalInfoEntity.colprefix}contract_status_change_date`,
      type: 'date',
      nullable: true,
    })
    @IsOptional()
    contract_status_change_date?: Date;

    @Field(() => String, {nullable: true, description: meta.cooling.desc})
    @Column({
      name: `${RetsListingAdditionalInfoEntity.colprefix}cooling`, 
      type: 'text', 
      nullable: true,
      collation: 'utf8mb4_general_ci',
    })
    @IsOptional()
    cooling?: string;

    @Field(() => String, {nullable: true, description: meta.development_name.desc})
    @Column({
      name: `${RetsListingAdditionalInfoEntity.colprefix}development_name`, 
      type: 'varchar', 
      nullable: true,
      length: meta.development_name.validation.maxLength, 
      collation: 'utf8mb4_general_ci',
    })
    @IsOptional()
    @MaxLength(meta.development_name.validation.maxLength as number, {message: meta.development_name.validation.maxLengthMsg})
    development_name?: string;

    @Field(() => String, {nullable: true, description: meta.development.desc})
    @Column({
      name: `${RetsListingAdditionalInfoEntity.colprefix}development`, 
      type: 'varchar', 
      nullable: true,
      length: meta.development.validation.maxLength, 
      collation: 'utf8mb4_general_ci',
    })
    @IsOptional()
    @MaxLength(meta.development.validation.maxLength as number, {message: meta.development.validation.maxLengthMsg})
    development?: string;

    @Field(() => String, {nullable: true, description: meta.dining.desc})
    @Column({
      name: `${RetsListingAdditionalInfoEntity.colprefix}dining`, 
      type: 'varchar', 
      nullable: true,
      length: meta.dining.validation.maxLength, 
      collation: 'utf8mb4_general_ci',
    })
    @IsOptional()
    @MaxLength(meta.dining.validation.maxLength as number, {message: meta.dining.validation.maxLengthMsg})
    dining?: string;

    @Field(() => String, {nullable: true, description: meta.driving_directions.desc})
    @Column({
      name: `${RetsListingAdditionalInfoEntity.colprefix}driving_directions`, 
      type: 'text', 
      nullable: true,
      collation: 'utf8mb4_general_ci',
    })
    @IsOptional()
    driving_directions?: string;

    @Field(() => String, {nullable: true, description: meta.electric.desc})
    @Column({
      name: `${RetsListingAdditionalInfoEntity.colprefix}electric`, 
      type: 'text', 
      nullable: true,
      collation: 'utf8mb4_general_ci',
    })
    @Index(`${FtIndexPrefix}${RetsListingAdditionalInfoEntity.colprefix}electric`, { unique: false })
    @IsOptional()
    electric?: string;

    @Field(() => String, {nullable: true, description: meta.elevator.desc})
    @Column({
      name: `${RetsListingAdditionalInfoEntity.colprefix}elevator`, 
      type: 'varchar', 
      nullable: true,
      length: meta.elevator.validation.maxLength, 
      collation: 'utf8mb4_general_ci',
    })
    @IsOptional()
    @MaxLength(meta.electric.validation.maxLength as number, {message: meta.elevator.validation.maxLengthMsg})
    elevator?: string;

    @Field(() => String, {nullable: true, description: meta.equipment.desc})
    @Column({
      name: `${RetsListingAdditionalInfoEntity.colprefix}equipment`, 
      type: 'text', 
      nullable: true,
      collation: 'utf8mb4_general_ci',
    })
    @IsOptional()
    @Index(`${FtIndexPrefix}${RetsListingAdditionalInfoEntity.colprefix}equipment`, { unique: false })
    equipment?: string;

    @Field(() => String, {nullable: true, description: meta.exterior_features.desc})
    @Column({
      name: `${RetsListingAdditionalInfoEntity.colprefix}exterior_features`, 
      type: 'varchar', 
      nullable: true,
      collation: 'utf8mb4_general_ci',
    })
    @Index(`${InIndexPrefix}${RetsListingAdditionalInfoEntity.colprefix}exterior_features`, { unique: false })
    @IsOptional()
    exterior_features?: string;

    @Field(() => String, {nullable: true, description: meta.exterior_finish.desc})
    @Column({
      name: `${RetsListingAdditionalInfoEntity.colprefix}exterior_finish`, 
      type: 'varchar', 
      nullable: true,
      length: meta.exterior_finish.validation.maxLength, 
      collation: 'utf8mb4_general_ci',
    })
    @IsOptional()
    @MaxLength(meta.exterior_finish.validation.maxLength as number, {message: meta.exterior_finish.validation.maxLengthMsg})
    exterior_finish?: string;

    @Field(() => String, {nullable: true, description: meta.fencing.desc})
    @Column({
      name: `${RetsListingAdditionalInfoEntity.colprefix}fencing`, 
      type: 'text', 
      nullable: true,
      collation: 'utf8mb4_general_ci',
    })
    @IsOptional()
    fencing?: string;
    @Index(`${FtIndexPrefix}${RetsListingAdditionalInfoEntity.colprefix}exterior_features`, { unique: false })

    @Field(() => String, {nullable: true, description: meta.fireplace_features.desc})
    @Column({
      name: `${RetsListingAdditionalInfoEntity.colprefix}fireplace_features`, 
      type: 'text', 
      nullable: true,
      collation: 'utf8mb4_general_ci',
    })
    @IsOptional()
    fireplace_features?: string;

    @Field(() => Int, {nullable: true, description: meta.fireplace.desc})
    @Column({
      name: `${RetsListingAdditionalInfoEntity.colprefix}fireplace`, 
      type: 'int', 
      nullable: true,
      unsigned: true, 
    })
    @IsInt()
    @IsOptional()
    fireplace?: number;

    @Field(() => String, {nullable: true, description: meta.floor_plan_type.desc})
    @Column({
      name: `${RetsListingAdditionalInfoEntity.colprefix}floor_plan_type`, 
      type: 'varchar', 
      nullable: true,
      length: meta.floor_plan_type.validation.maxLength, 
      collation: 'utf8mb4_general_ci',
    })
    @IsOptional()
    @MaxLength(meta.floor_plan_type.validation.maxLength as number, {message: meta.floor_plan_type.validation.maxLengthMsg})
    floor_plan_type?: string;

    @Field(() => String, {nullable: true, description: meta.flooring.desc})
    @Column({
      name: `${RetsListingAdditionalInfoEntity.colprefix}flooring`, 
      type: 'varchar', 
      nullable: true,
      length: meta.flooring.validation.maxLength, 
      collation: 'utf8mb4_general_ci',
    })
    @IsOptional()
    @MaxLength(meta.flooring.validation.maxLength as number, {message: meta.flooring.validation.maxLengthMsg})
    flooring?: string;

    @Field(() => String, {nullable: true, description: meta.foundation_details.desc})
    @Column({
      name: `${RetsListingAdditionalInfoEntity.colprefix}foundation_details`, 
      type: 'text', 
      nullable: true,
      collation: 'utf8mb4_general_ci',
    })
    @IsOptional()
    foundation_details?: string;

    @Field(() => String, {nullable: true, description: meta.furnished.desc})
    @Column({
      name: `${RetsListingAdditionalInfoEntity.colprefix}furnished`, 
      type: 'varchar', 
      nullable: true,
      length: meta.furnished.validation.maxLength, 
      collation: 'utf8mb4_general_ci',
    })
    @IsOptional()
    @MaxLength(meta.furnished.validation.maxLength as number, {message: meta.furnished.validation.maxLengthMsg})
    furnished?: string;

    @Field(() => String, {nullable: true, description: meta.gas.desc})
    @Column({
      name: `${RetsListingAdditionalInfoEntity.colprefix}gas`, 
      type: 'varchar', 
      nullable: true,
      length: meta.gas.validation.maxLength, 
      collation: 'utf8mb4_general_ci',
    })
    @IsOptional()
    @MaxLength(meta.gas.validation.maxLength as number, {message: meta.gas.validation.maxLengthMsg})
    gas?: string;

    @Field(() => String, {nullable: true, description: meta.golf_type.desc})
    @Column({
      name: `${RetsListingAdditionalInfoEntity.colprefix}golf_type`, 
      type: 'varchar', 
      nullable: true,
      length: meta.golf_type.validation.maxLength, 
      collation: 'utf8mb4_general_ci',
    })
    @IsOptional()
    @MaxLength(meta.golf_type.validation.maxLength as number, {message: meta.golf_type.validation.maxLengthMsg})
    golf_type?: string;

    @Field(() => Float, {nullable: true, description: meta.gross_operating_income.desc})
    @Column({
      name: `${RetsListingAdditionalInfoEntity.colprefix}gross_operating_income`, 
      type: 'decimal', 
      nullable: true,
      precision: 14,
      scale: 2
    })
    @IsOptional()
    gross_operating_income?: number;

    @Field(() => Float, {nullable: true, description: meta.gross_rental_income.desc})
    @Column({
      name: `${RetsListingAdditionalInfoEntity.colprefix}gross_rental_income`, 
      type: 'decimal', 
      nullable: true,
      precision: 14,
      scale: 2
    })
    @IsOptional()
    gross_rental_income?: number;

    @Field(() => String, {nullable: true, description: meta.ground_cover.desc})
    @Column({
      name: `${RetsListingAdditionalInfoEntity.colprefix}ground_cover`, 
      type: 'varchar', 
      nullable: true,
      length: meta.ground_cover.validation.maxLength, 
      collation: 'utf8mb4_general_ci',
    })
    @IsOptional()
    @MaxLength(meta.ground_cover.validation.maxLength as number, {message: meta.ground_cover.validation.maxLengthMsg})
    ground_cover?: string;

    @Field(() => String, {nullable: true, description: meta.guest_house_desc.desc})
    @Column({
      name: `${RetsListingAdditionalInfoEntity.colprefix}guest_house_desc`, 
      type: 'varchar', 
      nullable: true,
      length: meta.guest_house_desc.validation.maxLength, 
      collation: 'utf8mb4_general_ci',
    })
    @IsOptional()
    @MaxLength(meta.guest_house_desc.validation.maxLength as number, {message: meta.guest_house_desc.validation.maxLengthMsg})
    guest_house_desc?: string;

    @Field(() => Float, {nullable: true, description: meta.guest_house_living_area.desc})
    @Column({
      name: `${RetsListingAdditionalInfoEntity.colprefix}guest_house_living_area`, 
      type: 'decimal', 
      nullable: true,
      precision: 14,
      scale: 2
    })
    @IsOptional()
    guest_house_living_area?: number;

    @Field(() => String, {nullable: true, description: meta.gulf_access_type.desc})
    @Column({
      name: `${RetsListingAdditionalInfoEntity.colprefix}gulf_access_type`, 
      type: 'text', 
      nullable: true,
      collation: 'utf8mb4_general_ci',
    })
    @IsOptional()
    gulf_access_type?: string;

    @Field(() => Float, {nullable: true, description: meta.hoa_fee.desc})
    @Column({
      name: `${RetsListingAdditionalInfoEntity.colprefix}hoa_fee`, 
      type: 'decimal', 
      nullable: true,
      precision: 14,
      scale: 2
    })
    @Index(`${InIndexPrefix}${RetsListingAdditionalInfoEntity.colprefix}hoa_fee`, { unique: false })
    @IsOptional()
    hoa_fee?: number;

    @Field(() => String, {nullable: true, description: meta.hoa_frequency.desc})
    @Column({
      name: `${RetsListingAdditionalInfoEntity.colprefix}hoa_frequency`, 
      type: 'varchar', 
      nullable: true,
      length: meta.hoa_frequency.validation.maxLength, 
      collation: 'utf8mb4_general_ci',
    })
    @Index(`${InIndexPrefix}${RetsListingAdditionalInfoEntity.colprefix}hoa_frequency`, { unique: false })
    @IsOptional()
    @MaxLength(meta.hoa_frequency.validation.maxLength as number, {message: meta.hoa_frequency.validation.maxLengthMsg})
    hoa_frequency?: string;

    @Field(() => String, {nullable: true, description: meta.hoa_include.desc})
    @Column({
      name: `${RetsListingAdditionalInfoEntity.colprefix}hoa_include`, 
      type: 'varchar', 
      nullable: true,
      length: meta.hoa_include.validation.maxLength, 
      collation: 'utf8mb4_general_ci',
    })
    @Index(`${InIndexPrefix}${RetsListingAdditionalInfoEntity.colprefix}hoa_include`, { unique: false })
    @IsOptional()
    @MaxLength(meta.hoa_include.validation.maxLength as number, {message: meta.hoa_include.validation.maxLengthMsg})
    hoa_include?: string;

    @Field(() => String, {nullable: true, description: meta.is_hoa.desc})
    @Column({
      name: `${RetsListingAdditionalInfoEntity.colprefix}is_hoa`, 
      type: 'char', 
      nullable: true,
      length: meta.is_hoa.validation.maxLength, 
      collation: 'utf8mb4_general_ci',
    })
    @Index(`${InIndexPrefix}${RetsListingAdditionalInfoEntity.colprefix}is_hoa`, { unique: false })
    @IsOptional()
    @MaxLength(meta.is_hoa.validation.maxLength as number, {message: meta.is_hoa.validation.maxLengthMsg})
    is_hoa?: string;

    @Field(() => String, {nullable: true, description: meta.interior_features.desc})
    @Column({
      name: `${RetsListingAdditionalInfoEntity.colprefix}interior_features`, 
      type: 'longtext', 
      nullable: true,
      collation: 'utf8mb4_general_ci',
    })
    @IsOptional()
    interior_features?: string;

    @Field(() => String, {nullable: true, description: meta.irrigation.desc})
    @Column({
      name: `${RetsListingAdditionalInfoEntity.colprefix}irrigation`, 
      type: 'text', 
      nullable: true,
      collation: 'utf8mb4_general_ci',
    })
    @IsOptional()
    irrigation?: string;

    @Field(() => String, {nullable: true, description: meta.is_gulf_access.desc})
    @Column({
      name: `${RetsListingAdditionalInfoEntity.colprefix}is_gulf_access`, 
      type: 'char', 
      nullable: true,
      length: meta.is_gulf_access.validation.maxLength, 
      collation: 'utf8mb4_general_ci',
    })
    @IsOptional()
    @MaxLength(meta.is_gulf_access.validation.maxLength as number, {message: meta.is_gulf_access.validation.maxLengthMsg})
    is_gulf_access?: string;

    @Field(() => String, {nullable: true, description: meta.is_lease_limit.desc})
    @Column({
      name: `${RetsListingAdditionalInfoEntity.colprefix}is_lease_limit`, 
      type: 'char', 
      nullable: true,
      length: meta.is_lease_limit.validation.maxLength, 
      collation: 'utf8mb4_general_ci',
    })
    @IsOptional()
    @MaxLength(meta.is_lease_limit.validation.maxLength as number, {message: meta.is_lease_limit.validation.maxLengthMsg})
    is_lease_limit?: string;

    @Field(() => String, {nullable: true, description: meta.is_pool.desc})
    @Column({
      name: `${RetsListingAdditionalInfoEntity.colprefix}is_pool`, 
      type: 'char', 
      nullable: true,
      length: meta.is_pool.validation.maxLength, 
      collation: 'utf8mb4_general_ci',
    })
    @IsOptional()
    @MaxLength(meta.is_pool.validation.maxLength as number, {message: meta.is_pool.validation.maxLengthMsg})
    is_pool?: string;

    @Field(() => String, {nullable: true, description: meta.kitchen_features.desc})
    @Column({
      name: `${RetsListingAdditionalInfoEntity.colprefix}kitchen_features`, 
      type: 'varchar', 
      nullable: true,
      length: meta.kitchen_features.validation.maxLength, 
      collation: 'utf8mb4_general_ci',
    })
    @Index(`${InIndexPrefix}${RetsListingAdditionalInfoEntity.colprefix}kitchen_features`, { unique: false })
    @IsOptional()
    @MaxLength(meta.kitchen_features.validation.maxLength as number, {message: meta.kitchen_features.validation.maxLengthMsg})
    kitchen_features?: string;

    @Field(() => String, {nullable: true, description: meta.land_improvements.desc})
    @Column({
      name: `${RetsListingAdditionalInfoEntity.colprefix}land_improvements`, 
      type: 'varchar', 
      nullable: true,
      length: meta.land_improvements.validation.maxLength, 
      collation: 'utf8mb4_general_ci',
    })
    @IsOptional()
    @MaxLength(meta.land_improvements.validation.maxLength as number, {message: meta.land_improvements.validation.maxLengthMsg})
    land_improvements?: string;

    @Field(() => String, {nullable: true, description: meta.land_lease_fee_freq.desc})
    @Column({
      name: `${RetsListingAdditionalInfoEntity.colprefix}land_lease_fee_freq`, 
      type: 'varchar', 
      nullable: true,
      length: meta.land_lease_fee_freq.validation.maxLength, 
      collation: 'utf8mb4_general_ci',
    })
    @IsOptional()
    @MaxLength(meta.land_lease_fee_freq.validation.maxLength as number, {message: meta.land_lease_fee_freq.validation.maxLengthMsg})
    land_lease_fee_freq?: string;

    @Field(() => Float, {nullable: true, description: meta.land_lease_fee.desc})
    @Column({
      name: `${RetsListingAdditionalInfoEntity.colprefix}land_lease_fee`, 
      type: 'decimal', 
      nullable: true,
      precision: 14,
      scale: 2
    })
    @IsOptional()
    land_lease_fee?: number;

    @Field(() => DateTime, {nullable: true, description: meta.last_change_date.desc})
    @Column({
      name: `${RetsListingAdditionalInfoEntity.colprefix}last_change_date`, 
      type: 'date', 
      nullable: true,
    })
    @IsOptional()
    last_change_date?: Date;

    @Field(() => String, {nullable: true, description: meta.last_change_type.desc})
    @Column({
      name: `${RetsListingAdditionalInfoEntity.colprefix}last_change_type`, 
      type: 'varchar', 
      nullable: true,
      length: meta.last_change_type.validation.maxLength, 
      collation: 'utf8mb4_general_ci',
    })
    @IsOptional()
    @MaxLength(meta.last_change_type.validation.maxLength as number, {message: meta.last_change_type.validation.maxLengthMsg})
    last_change_type?: string;

    @Field(() => Int, {nullable: true, description: meta.leases_per_year.desc})
    @Column({
      name: `${RetsListingAdditionalInfoEntity.colprefix}leases_per_year`,
      type: 'int',
      unsigned: true, 
      nullable: true,
    })
    @IsOptional()
    @IsInt()
    leases_per_year?: number;

    @Field(() => String, {nullable: true, description: meta.legal.desc})
    @Column({
      name: `${RetsListingAdditionalInfoEntity.colprefix}legal`, 
      type: 'text', 
      nullable: true,
      collation: 'utf8mb4_general_ci',
    })
    @IsOptional()
    @Index(`${FtIndexPrefix}${RetsListingAdditionalInfoEntity.colprefix}legal`, { unique: false })
    legal?: string;

    @Field(() => Int, {nullable: true, description: meta.lot_back.desc})
    @Column({
      name: `${RetsListingAdditionalInfoEntity.colprefix}lot_back`, 
      type: 'int', 
      unsigned: true, 
      nullable: true,
    })
    @IsOptional()
    @IsInt()
    lot_back?: number;

    @Field(() => String, {nullable: true, description: meta.lot_description.desc})
    @Column({
      name: `${RetsListingAdditionalInfoEntity.colprefix}lot_description`, 
      type: 'varchar', 
      nullable: true,
      length: meta.lot_description.validation.maxLength, 
      collation: 'utf8mb4_general_ci',
    })
    @IsOptional()
    @MaxLength(meta.lot_description.validation.maxLength as number, {message: meta.lot_description.validation.maxLengthMsg})
    lot_description?: string;

    @Field(() => String, {nullable: true, description: meta.lot_dimensions.desc})
    @Column({
      name: `${RetsListingAdditionalInfoEntity.colprefix}lot_dimensions`, 
      type: 'varchar', 
      nullable: true,
      length: meta.lot_dimensions.validation.maxLength, 
      collation: 'utf8mb4_general_ci',
    })
    @IsOptional()
    @MaxLength(meta.lot_dimensions.validation.maxLength as number, {message: meta.lot_dimensions.validation.maxLengthMsg})
    lot_dimensions?: string;

    @Field(() => Int, {nullable: true, description: meta.lot_frontage.desc})
    @Column({
      name: `${RetsListingAdditionalInfoEntity.colprefix}lot_frontage`, 
      type: 'int', 
      nullable: true,
      unsigned: true
    })
    @IsOptional()
    @IsInt()
    lot_frontage?: number;

    @Field(() => Int, {nullable: true, description: meta.lot_left.desc})
    @Column({
      name: `${RetsListingAdditionalInfoEntity.colprefix}lot_left`, 
      type: 'int', 
      nullable: true,
      unsigned: true, 
    })
    @IsOptional()
    @IsInt()
    lot_left?: number;

    @Field(() => Int, {nullable: true, description: meta.lot_right.desc})
    @Column({
      name: `${RetsListingAdditionalInfoEntity.colprefix}lot_right`, 
      type: 'int', 
      nullable: true,
      unsigned: true, 
    })
    @IsOptional()
    @IsInt()
    lot_right?: number;

    @Field(() => String, {nullable: true, description: meta.lower_sqft.desc})
    @Column({
      name: `${RetsListingAdditionalInfoEntity.colprefix}lower_sqft`, 
      type: 'varchar', 
      nullable: true,
      length: meta.lower_sqft.validation.maxLength, 
      collation: 'utf8mb4_general_ci',
    })
    @IsOptional()
    @MaxLength(meta.lower_sqft.validation.maxLength as number, {message: meta.lower_sqft.validation.maxLengthMsg})
    lower_sqft?: string;

    @Field(() => String, {nullable: true, description: meta.mls_area_major.desc})
    @Column({
      name: `${RetsListingAdditionalInfoEntity.colprefix}mls_area_major`, 
      type: 'varchar', 
      nullable: true,
      length: meta.mls_area_major.validation.maxLength, 
      collation: 'utf8mb4_general_ci',
    })
    @IsOptional()
    @MaxLength(meta.mls_area_major.validation.maxLength as number, {message: meta.mls_area_major.validation.maxLengthMsg})
    mls_area_major?: string;

    @Field(() => Float, {nullable: true, description: meta.maintenance.desc})
    @Column({
      name: `${RetsListingAdditionalInfoEntity.colprefix}maintenance`, 
      type: 'decimal', 
      nullable: true,
      precision: 14,
      scale: 2
    })
    @Index(`${InIndexPrefix}${RetsListingAdditionalInfoEntity.colprefix}maintenance`, { unique: false })
    @IsOptional()
    maintenance?: number;

    @Field(() => String, {nullable: true, description: meta.management.desc})
    @Column({
      name: `${RetsListingAdditionalInfoEntity.colprefix}management`, 
      type: 'varchar', 
      nullable: true,
      length: meta.management.validation.maxLength, 
      collation: 'utf8mb4_general_ci',
    })
    @IsOptional()
    @MaxLength(meta.management.validation.maxLength as number, {message: meta.management.validation.maxLengthMsg})
    management?: string;

    @Field(() => String, {nullable: true, description: meta.mandatory_club_fee_freq.desc})
    @Column({
      name: `${RetsListingAdditionalInfoEntity.colprefix}mandatory_club_fee_freq`, 
      type: 'varchar', 
      nullable: true,
      length: meta.mandatory_club_fee_freq.validation.maxLength, 
      collation: 'utf8mb4_general_ci',
    })
    @IsOptional()
    @MaxLength(meta.mandatory_club_fee_freq.validation.maxLength as number, {message: meta.mandatory_club_fee_freq.validation.maxLengthMsg})
    mandatory_club_fee_freq?: string;

    @Field(() => Float, {nullable: true, description: meta.mandatory_club_fee.desc})
    @Column({
      name: `${RetsListingAdditionalInfoEntity.colprefix}mandatory_club_fee`,
      type: 'decimal',
      nullable: true,
      precision: 14,
      scale: 2
    })
    @IsOptional()
    mandatory_club_fee?: number

    @Field(() => String, {nullable: true, description: meta.mandatory_hoa_yn.desc})
    @Column({
      name: `${RetsListingAdditionalInfoEntity.colprefix}mandatory_hoa_yn`, 
      type: 'varchar', 
      nullable: true,
      length: meta.mandatory_hoa_yn.validation.maxLength, 
      collation: 'utf8mb4_general_ci',
    })
    @IsOptional()
    @MaxLength(meta.mandatory_hoa_yn.validation.maxLength as number, {message: meta.mandatory_hoa_yn.validation.maxLengthMsg})
    mandatory_hoa_yn?: string;

    @Field(() => String, {nullable: true, description: meta.master_hoa_fee_freq.desc})
    @Column({
      name: `${RetsListingAdditionalInfoEntity.colprefix}master_hoa_fee_freq`, 
      type: 'varchar', 
      nullable: true,
      length: meta.master_hoa_fee_freq.validation.maxLength, 
      collation: 'utf8mb4_general_ci',
    })
    @IsOptional()
    @MaxLength(meta.master_hoa_fee_freq.validation.maxLength as number, {message: meta.master_hoa_fee_freq.validation.maxLengthMsg})
    master_hoa_fee_freq?: string;

    @Field(() => Float, {nullable: true, description: meta.master_hoa_fee.desc})
    @Column({
      name: `${RetsListingAdditionalInfoEntity.colprefix}master_hoa_fee`,
      type: 'decimal',
      nullable: true,
      precision: 14,
      scale: 2
    })
    @IsOptional()
    master_hoa_fee?: number

    @Field(() => Int, {nullable: true, description: meta.max_pets_limit_weight.desc})
    @Column({
      name: `${RetsListingAdditionalInfoEntity.colprefix}max_pets_limit_weight`, 
      type: 'int', 
      nullable: true,
      unsigned:true
    })
    @IsOptional()
    @IsInt()
    max_pets_limit_weight?: number;

    @Field(() => Int, {nullable: true, description: meta.max_pets_limit.desc})
    @Column({
      name: `${RetsListingAdditionalInfoEntity.colprefix}max_pets_limit`,
      type: 'int',
      unsigned: true, 
      nullable: true,
    })
    @IsOptional()
    @IsInt()
    max_pets_limit?: number;

    @Field(() => String, {nullable: true, description: meta.media.desc})
    @Column({
      name: `${RetsListingAdditionalInfoEntity.colprefix}media`, 
      type: 'longtext', 
      nullable: true,
      collation: 'utf8mb4_general_ci',
    })
    @IsOptional()
    media?: string;

    @Field(() => Int, {nullable: true, description: meta.min_days_of_lease.desc})
    @Column({
      name: `${RetsListingAdditionalInfoEntity.colprefix}min_days_of_lease`,
      type: 'int',
      unsigned: true, 
      nullable: true,
    })
    @IsOptional()
    @IsInt()
    min_days_of_lease?: number;

    @Field(() => String, {nullable: true, description: meta.net_operating_income.desc})
    @Column({
      name: `${RetsListingAdditionalInfoEntity.colprefix}net_operating_income`, 
      type: 'varchar', 
      nullable: true,
      length: meta.net_operating_income.validation.maxLength, 
      collation: 'utf8mb4_general_ci',
    })
    @IsOptional()
    @MaxLength(meta.net_operating_income.validation.maxLength as number, {message: meta.net_operating_income.validation.maxLengthMsg})
    net_operating_income?: string;

    @Field(() => Int, {nullable: true, description: meta.num_unit_floor.desc})
    @Column({
      name: `${RetsListingAdditionalInfoEntity.colprefix}num_unit_floor`,
      type: 'int',
      unsigned: true, 
      nullable: true,
    })
    @IsOptional()
    @IsInt()
    num_unit_floor?: number;

    @Field(() => Float, {nullable: true, description: meta.one_time_land_lease_fee.desc})
    @Column({
      name: `${RetsListingAdditionalInfoEntity.colprefix}one_time_land_lease_fee`,
      type: 'decimal',
      nullable: true,
      precision: 14,
      scale: 2
    })
    @IsOptional()
    one_time_land_lease_fee?: number

    @Field(() => Float, {nullable: true, description: meta.one_time_mandatory_club_fee.desc})
    @Column({
      name: `${RetsListingAdditionalInfoEntity.colprefix}one_time_mandatory_club_fee`,
      type: 'decimal',
      nullable: true,
      precision: 14,
      scale: 2
    })
    @IsOptional()
    one_time_mandatory_club_fee?: number

    @Field(() => Float, {nullable: true, description: meta.one_time_othe_fee.desc})
    @Column({
      name: `${RetsListingAdditionalInfoEntity.colprefix}one_time_othe_fee`,
      type: 'decimal',
      nullable: true,
      precision: 14,
      scale: 2
    })
    @IsOptional()
    one_time_othe_fee?: number

    @Field(() => Float, {nullable: true, description: meta.one_time_rec_lease_fee.desc})
    @Column({
      name: `${RetsListingAdditionalInfoEntity.colprefix}one_time_rec_lease_fee`,
      type: 'decimal',
      nullable: true,
      precision: 14,
      scale: 2
    })
    @IsOptional()
    one_time_rec_lease_fee?: number

    @Field(() => Float, {nullable: true, description: meta.one_time_special_assessment_fee.desc})
    @Column({
      name: `${RetsListingAdditionalInfoEntity.colprefix}one_time_special_assessment_fee`,
      type: 'decimal',
      nullable: true,
      precision: 14,
      scale: 2
    })
    @IsOptional()
    one_time_special_assessment_fee?: number

    @Field(() => String, {nullable: true, description: meta.ownership.desc})
    @Column({
      name: `${RetsListingAdditionalInfoEntity.colprefix}ownership`, 
      type: 'text', 
      nullable: true,
      collation: 'utf8mb4_general_ci',
    })
    @Index(`${FtIndexPrefix}${RetsListingAdditionalInfoEntity.colprefix}ownership`, { unique: false })
    @IsOptional()
    ownership?: string;

    @Field(() => String, {nullable: true, description: meta.parcel_number.desc})
    @Column({
      name: `${RetsListingAdditionalInfoEntity.colprefix}parcel_number`, 
      type: 'varchar', 
      nullable: true,
      length: meta.parcel_number.validation.maxLength, 
      collation: 'utf8mb4_general_ci',
    })
    @IsOptional()
    @MaxLength(meta.parcel_number.validation.maxLength as number, {message: meta.parcel_number.validation.maxLengthMsg})
    parcel_number?: string;

    @Field(() => String, {nullable: true, description: meta.parcels_lots.desc})
    @Column({
      name: `${RetsListingAdditionalInfoEntity.colprefix}parcels_lots`, 
      type: 'varchar', 
      nullable: true,
      length: meta.parcels_lots.validation.maxLength, 
      collation: 'utf8mb4_general_ci',
    })
    @IsOptional()
    @MaxLength(meta.parcels_lots.validation.maxLength as number, {message: meta.parcels_lots.validation.maxLengthMsg})
    parcels_lots?: string;

    @Field(() => String, {nullable: true, description: meta.pet_desc.desc})
    @Column({
      name: `${RetsListingAdditionalInfoEntity.colprefix}pet_desc`, 
      type: 'text', 
      nullable: true,
      collation: 'utf8mb4_general_ci',
    })
    @IsOptional()
    pet_desc?: string;

    @Field(() => String, {nullable: true, description: meta.pet_restrictions.desc})
    @Column({
      name: `${RetsListingAdditionalInfoEntity.colprefix}pet_restrictions`, 
      type: 'text', 
      nullable: true,
      collation: 'utf8mb4_general_ci',
    })
    @IsOptional()
    pet_restrictions?: string;

    @Field(() => String, {nullable: true, description: meta.planned_use.desc})
    @Column({
      name: `${RetsListingAdditionalInfoEntity.colprefix}planned_use`, 
      type: 'varchar', 
      nullable: true,
      length: meta.planned_use.validation.maxLength, 
      collation: 'utf8mb4_general_ci',
    })
    @IsOptional()
    @MaxLength(meta.planned_use.validation.maxLength as number, {message: meta.planned_use.validation.maxLengthMsg})
    planned_use?: string;

    @Field(() => String, {nullable: true, description: meta.pool_desc.desc})
    @Column({
      name: `${RetsListingAdditionalInfoEntity.colprefix}pool_desc`, 
      type: 'text', 
      nullable: true,
      collation: 'utf8mb4_general_ci',
    })
    @Index(`${FtIndexPrefix}${RetsListingAdditionalInfoEntity.colprefix}pool_desc`, { unique: false })
    @IsOptional()
    pool_desc?: string;

    @Field(() => String, {nullable: true, description: meta.possession.desc})
    @Column({
      name: `${RetsListingAdditionalInfoEntity.colprefix}possession`, 
      type: 'varchar', 
      nullable: true,
      length: meta.possession.validation.maxLength, 
      collation: 'utf8mb4_general_ci',
    })
    @IsOptional()
    @MaxLength(meta.possession.validation.maxLength as number, {message: meta.possession.validation.maxLengthMsg})
    possession?: string;

    @Field(() => Float, {nullable: true, description: meta.previous_list_price.desc})
    @Column({
      name: `${RetsListingAdditionalInfoEntity.colprefix}previous_list_price`, 
      type: 'decimal', 
      nullable: true,
      precision: 14,
      scale: 2
    })
    @IsOptional()
    previous_list_price?: number;

    @Field(() => Float, {nullable: true, description: meta.price_per_sqft.desc})
    @Column({
      name: `${RetsListingAdditionalInfoEntity.colprefix}price_per_sqft`,
      type: 'decimal',
      nullable: true,
      precision: 14,
      scale: 2
    })
    @IsOptional()
    price_per_sqft?: number

    @Field(() => String, {nullable: true, description: meta.primary_bed_level.desc})
    @Column({
      name: `${RetsListingAdditionalInfoEntity.colprefix}primary_bed_level`, 
      type: 'varchar', 
      nullable: true,
      length: meta.primary_bed_level.validation.maxLength, 
      collation: 'utf8mb4_general_ci',
    })
    @IsOptional()
    @MaxLength(meta.primary_bed_level.validation.maxLength as number, {message: meta.primary_bed_level.validation.maxLengthMsg})
    primary_bed_level?: string;

    @Field(() => DateTime, {nullable: true, description: meta.property_record_update_timestamp.desc})
    @Column({
      name: `${RetsListingAdditionalInfoEntity.colprefix}property_record_update_timestamp`, 
      type: 'varchar', 
      nullable: true,
    })
    @IsOptional()
    property_record_update_timestamp?: Date;

    @Field(() => String, {nullable: true, description: meta.rear_exposure.desc})
    @Column({
      name: `${RetsListingAdditionalInfoEntity.colprefix}rear_exposure`, 
      type: 'varchar', 
      nullable: true,
      length: meta.rear_exposure.validation.maxLength, 
      collation: 'utf8mb4_general_ci',
    })
    @IsOptional()
    @MaxLength(meta.rear_exposure.validation.maxLength as number, {message: meta.rear_exposure.validation.maxLengthMsg})
    rear_exposure?: string;

    @Field(() => String, {nullable: true, description: meta.restrictions.desc})
    @Column({
      name: `${RetsListingAdditionalInfoEntity.colprefix}restrictions`, 
      type: 'varchar', 
      nullable: true,
      length: meta.restrictions.validation.maxLength, 
      collation: 'utf8mb4_general_ci',
    })
    @Index(`${InIndexPrefix}${RetsListingAdditionalInfoEntity.colprefix}restrictions`, { unique: false })
    @IsOptional()
    @MaxLength(meta.restrictions.validation.maxLength as number, {message: meta.restrictions.validation.maxLengthMsg})
    restrictions?: string;

    @Field(() => String, {nullable: true, description: meta.road.desc})
    @Column({
      name: `${RetsListingAdditionalInfoEntity.colprefix}road`, 
      type: 'varchar', 
      nullable: true,
      length: meta.road.validation.maxLength, 
      collation: 'utf8mb4_general_ci',
    })
    @Index(`${InIndexPrefix}${RetsListingAdditionalInfoEntity.colprefix}road`, { unique: false })
    @IsOptional()
    @MaxLength(meta.road.validation.maxLength as number, {message: meta.road.validation.maxLengthMsg})
    road?: string;

    @Field(() => String, {nullable: true, description: meta.roof.desc})
    @Column({
      name: `${RetsListingAdditionalInfoEntity.colprefix}roof`, 
      type: 'text', 
      nullable: true,
      length: meta.roof.validation.maxLength, 
      collation: 'utf8mb4_general_ci',
    })
    @Index(`${FtIndexPrefix}${RetsListingAdditionalInfoEntity.colprefix}roof`, { unique: false })
    @IsOptional()
    @MaxLength(meta.roof.validation.maxLength as number, {message: meta.roof.validation.maxLengthMsg})
    roof?: string;

    @Field(() => Int, {nullable: true, description: meta.rooms.desc})
    @Column({
      name: `${RetsListingAdditionalInfoEntity.colprefix}rooms`, 
      type: 'int', 
      nullable: true,
      unsigned:true
    })
    @Index(`${InIndexPrefix}${RetsListingAdditionalInfoEntity.colprefix}rooms`, { unique: false })
    @IsOptional()
    @IsInt()
    rooms?: number;

    @Field(() => String, {nullable: true, description: meta.section.desc})
    @Column({
      name: `${RetsListingAdditionalInfoEntity.colprefix}section`, 
      type: 'varchar', 
      nullable: true,
      length: meta.section.validation.maxLength, 
      collation: 'utf8mb4_general_ci',
    })
    @IsOptional()
    @MaxLength(meta.section.validation.maxLength as number, {message: meta.section.validation.maxLengthMsg})
    section?: string;

    @Field(() => String, {nullable: true, description: meta.security_safety.desc})
    @Column({
      name: `${RetsListingAdditionalInfoEntity.colprefix}security_safety`, 
      type: 'varchar', 
      nullable: true,
      collation: 'utf8mb4_general_ci',
    })
    @IsOptional()
    security_safety?: string;

    @Field(() => String, {nullable: true, description: meta.sewer.desc})
    @Column({
      name: `${RetsListingAdditionalInfoEntity.colprefix}sewer`, 
      type: 'text', 
      nullable: true,
      collation: 'utf8mb4_general_ci',
    })
    @IsOptional()
    @Index(`${FtIndexPrefix}${RetsListingAdditionalInfoEntity.colprefix}rooms`, { unique: false })
    sewer?: string;

    @Field(() => String, {nullable: true, description: meta.spa_desc.desc})
    @Column({
      name: `${RetsListingAdditionalInfoEntity.colprefix}spa_desc`, 
      type: 'text', 
      nullable: true,
      collation: 'utf8mb4_general_ci',
    })
    @IsOptional()
    spa_desc?: string;

    @Field(() => String, {nullable: true, description: meta.special_assessment_fee_freq.desc})
    @Column({
      name: `${RetsListingAdditionalInfoEntity.colprefix}special_assessment_fee_freq`, 
      type: 'varchar', 
      nullable: true,
      length: meta.special_assessment_fee_freq.validation.maxLength, 
      collation: 'utf8mb4_general_ci',
    })
    @IsOptional()
    @MaxLength(meta.special_assessment_fee_freq.validation.maxLength as number, {message: meta.special_assessment_fee_freq.validation.maxLengthMsg})
    special_assessment_fee_freq?: string;

    @Field(() => String, {nullable: true, description: meta.special_assessment.desc})
    @Column({
      name: `${RetsListingAdditionalInfoEntity.colprefix}special_assessment`, 
      type: 'varchar', 
      nullable: true,
      length: meta.special_assessment.validation.maxLength, 
      collation: 'utf8mb4_general_ci',
    })
    @IsOptional()
    @MaxLength(meta.special_assessment.validation.maxLength as number, {message: meta.special_assessment.validation.maxLengthMsg})
    special_assessment?: string;

    @Field(() => String, {nullable: true, description: meta.specials.desc})
    @Column({
      name: `${RetsListingAdditionalInfoEntity.colprefix}specials`, 
      type: 'varchar', 
      nullable: true,
      length: meta.specials.validation.maxLength, 
      collation: 'utf8mb4_general_ci',
    })
    @Index(`${InIndexPrefix}${RetsListingAdditionalInfoEntity.colprefix}specials`, { unique: false })
    @IsOptional()
    @MaxLength(meta.specials.validation.maxLength as number, {message: meta.specials.validation.maxLengthMsg})
    specials?: string;

    @Field(() => String, {nullable: true, description: meta.sprinkler.desc})
    @Column({
      name: `${RetsListingAdditionalInfoEntity.colprefix}sprinkler`, 
      type: 'varchar', 
      nullable: true,
      length: meta.sprinkler.validation.maxLength, 
      collation: 'utf8mb4_general_ci',
    })
    @IsOptional()
    @MaxLength(meta.sprinkler.validation.maxLength as number, {message: meta.sprinkler.validation.maxLengthMsg})
    sprinkler?: string;

    @Field(() => DateTime, {nullable: true, description: meta.status_change_datetime.desc})
    @Column({
      name: `${RetsListingAdditionalInfoEntity.colprefix}status_change_datetime`, 
      type: 'date', 
      nullable: true,
    })
    @IsOptional()
    status_change_datetime?: Date;

    @Field(() => String, {nullable: true, description: meta.status_type.desc})
    @Column({
      name: `${RetsListingAdditionalInfoEntity.colprefix}status_type`, 
      type: 'varchar', 
      nullable: true,
      length: meta.status_type.validation.maxLength, 
      collation: 'utf8mb4_general_ci',
    })
    @IsOptional()
    @MaxLength(meta.status_type.validation.maxLength as number, {message: meta.status_type.validation.maxLengthMsg})
    status_type?: string;

    @Field(() => String, {nullable: true, description: meta.storm_protection.desc})
    @Column({
      name: `${RetsListingAdditionalInfoEntity.colprefix}storm_protection`, 
      type: 'text', 
      nullable: true,
      collation: 'utf8mb4_general_ci',
    })
    @IsOptional()
    storm_protection?: string;

    @Field(() => String, {nullable: true, description: meta.tax_district_type.desc})
    @Column({
      name: `${RetsListingAdditionalInfoEntity.colprefix}tax_district_type`, 
      type: 'varchar', 
      nullable: true,
      length: meta.tax_district_type.validation.maxLength, 
      collation: 'utf8mb4_general_ci',
    })
    @IsOptional()
    @MaxLength(meta.tax_district_type.validation.maxLength as number, {message: meta.tax_district_type.validation.maxLengthMsg})
    tax_district_type?: string;

    @Field(() => String, {nullable: true, description: meta.tax_remarks.desc})
    @Column({
      name: `${RetsListingAdditionalInfoEntity.colprefix}tax_remarks`, 
      type: 'varchar', 
      nullable: true,
      length: meta.tax_remarks.validation.maxLength, 
      collation: 'utf8mb4_general_ci',
    })
    @IsOptional()
    @MaxLength(meta.tax_remarks.validation.maxLength as number, {message: meta.tax_remarks.validation.maxLengthMsg})
    tax_remarks?: string;

    @Field(() => String, {nullable: true, description: meta.tenantpays.desc})
    @Column({
      name: `${RetsListingAdditionalInfoEntity.colprefix}tenantpays`, 
      type: 'varchar', 
      nullable: true,
      length: meta.tenantpays.validation.maxLength, 
      collation: 'utf8mb4_general_ci',
    })
    @IsOptional()
    @MaxLength(meta.tenantpays.validation.maxLength as number, {message: meta.tenantpays.validation.maxLengthMsg})
    tenantpays?: string;

    @Field(() => Float, {nullable: true, description: meta.transfer_fee.desc})
    @Column({
      name: `${RetsListingAdditionalInfoEntity.colprefix}transfer_fee`,
      type: 'decimal',
      nullable: true,
      precision: 14,
      scale: 2
    })
    @IsOptional()
    transfer_fee?: number

    @Field(() => String, {nullable: true, description: meta.trees.desc})
    @Column({
      name: `${RetsListingAdditionalInfoEntity.colprefix}trees`, 
      type: 'varchar', 
      nullable: true,
      length: meta.trees.validation.maxLength, 
      collation: 'utf8mb4_general_ci',
    })
    @IsOptional()
    @MaxLength(meta.trees.validation.maxLength as number, {message: meta.trees.validation.maxLengthMsg})
    trees?: string;

    @Field(() => String, {nullable: true, description: meta.unit_location.desc})
    @Column({
      name: `${RetsListingAdditionalInfoEntity.colprefix}unit_location`, 
      type: 'varchar', 
      nullable: true,
      collation: 'utf8mb4_general_ci',
    })
    @IsOptional()
    unit_location?: string;

    @Field(() => Int, {nullable: true, description: meta.units_in_building.desc})
    @Column({
      name: `${RetsListingAdditionalInfoEntity.colprefix}units_in_building`,
      type: 'int',
      unsigned: true, 
      nullable: true,
    })
    @IsOptional()
    @IsInt()
    units_in_building?: number;

    @Field(() => Int, {nullable: true, description: meta.unitsin_complex.desc})
    @Column({
      name: `${RetsListingAdditionalInfoEntity.colprefix}unitsin_complex`, 
      type: 'int', 
      unsigned: true, 
      nullable: true,
    })
    @IsOptional()
    @IsInt()
    unitsin_complex?: number;

    @Field(() => Float, {nullable: true, description: meta.upper_sqft.desc})
    @Column({
      name: `${RetsListingAdditionalInfoEntity.colprefix}upper_sqft`, 
      type: 'decimal', 
      nullable: true,
      precision: 14,
      scale: 2
    })
    @IsOptional()
    upper_sqft?: number;

    @Field(() => String, {nullable: true, description: meta.usage.desc})
    @Column({
      name: `${RetsListingAdditionalInfoEntity.colprefix}usage`, 
      type: 'varchar', 
      nullable: true,
      length: meta.usage.validation.maxLength, 
      collation: 'utf8mb4_general_ci',
    })
    @IsOptional()
    @MaxLength(meta.usage.validation.maxLength as number, {message: meta.usage.validation.maxLengthMsg})
    usage?: string;

    @Field(() => String, {nullable: true, description: meta.utilities.desc})
    @Column({
      name: `${RetsListingAdditionalInfoEntity.colprefix}utilities`, 
      type: 'text', 
      nullable: true,
      collation: 'utf8mb4_general_ci',
    })
    @Index(`${FtIndexPrefix}${RetsListingAdditionalInfoEntity.colprefix}utilities`, { unique: false })
    @IsOptional()
    utilities?: string;

    @Field(() => String, {nullable: true, description: meta.view_desc.desc})
    @Column({
      name: `${RetsListingAdditionalInfoEntity.colprefix}view_desc`, 
      type: 'text', 
      nullable: true,
      collation: 'utf8mb4_general_ci',
    })
    @Index(`${InIndexPrefix}${RetsListingAdditionalInfoEntity.colprefix}view_desc`, { unique: false })
    @IsOptional()
    view_desc?: string;

    @Field(() => String, {nullable: true, description: meta.view.desc})
    @Column({
      name: `${RetsListingAdditionalInfoEntity.colprefix}view`, 
      type: 'text', 
      nullable: true,
      collation: 'utf8mb4_general_ci',
    })
    @Index(`${FtIndexPrefix}${RetsListingAdditionalInfoEntity.colprefix}view`, { unique: false })
    @IsOptional()
    view?: string;

    @Field(() => String, {nullable: true, description: meta.virtual_tour_url.desc})
    @Column({
      name: `${RetsListingAdditionalInfoEntity.colprefix}virtual_tour_url`, 
      type: 'longtext', 
      nullable: true,
      collation: 'utf8mb4_general_ci',
    })
    @IsOptional()
    virtual_tour_url?: string;

    @Field(() => String, {nullable: true, description: meta.water.desc})
    @Column({
      name: `${RetsListingAdditionalInfoEntity.colprefix}water`, 
      type: 'text', 
      nullable: true,
      collation: 'utf8mb4_general_ci',
    })
    @Index(`${FtIndexPrefix}${RetsListingAdditionalInfoEntity.colprefix}water`, { unique: false })
    @IsOptional()
    water?: string;

    @Field(() => String, {nullable: true, description: meta.waterfront_desc.desc})
    @Column({
      name: `${RetsListingAdditionalInfoEntity.colprefix}waterfront_desc`, 
      type: 'text', 
      nullable: true,
      collation: 'utf8mb4_general_ci',
    })
    @Index(`${FtIndexPrefix}${RetsListingAdditionalInfoEntity.colprefix}waterfront_desc`, { unique: false })
    @IsOptional()
    waterfront_desc?: string;

    @Field(() => String, {nullable: true, description: meta.windows.desc})
    @Column({
      name: `${RetsListingAdditionalInfoEntity.colprefix}windows`, 
      type: 'varchar', 
      nullable: true,
      length: meta.windows.validation.maxLength, 
      collation: 'utf8mb4_general_ci',
    })
    @IsOptional()
    @MaxLength(meta.windows.validation.maxLength as number, {message: meta.windows.validation.maxLengthMsg})
    windows?: string;

    @Field(() => String, {nullable: true, description: meta.zoning.desc})
    @Column({
      name: `${RetsListingAdditionalInfoEntity.colprefix}zoning`, 
      type: 'varchar', 
      nullable: true,
      length: meta.zoning.validation.maxLength, 
      collation: 'utf8mb4_general_ci',
    })
    
    @IsOptional()
    @MaxLength(meta.zoning.validation.maxLength as number, {message: meta.zoning.validation.maxLengthMsg})
    zoning?: string;

    @Field(() => String, {nullable: true, description: meta.buyer_financing.desc})
    @Column({
      name: `${RetsListingAdditionalInfoEntity.colprefix}buyer_financing`, 
      type: 'text', 
      nullable: true,
      collation: 'utf8mb4_general_ci',
    })
    @IsOptional()
    buyer_financing?: string;

    @Field(() => String, {nullable: true, description: meta.p_date.desc})
    @Column({
      name: `${RetsListingAdditionalInfoEntity.colprefix}p_date`, 
      type: 'text', 
      nullable: true,
      collation: 'utf8mb4_general_ci',
    })
    @IsOptional()
    p_date?: string;

    @Field(() => String, {nullable: true, description: meta.bidding_war.desc})
    @Column({
      name: `${RetsListingAdditionalInfoEntity.colprefix}bidding_war`, 
      type: 'text', 
      nullable: true,
      collation: 'utf8mb4_general_ci',
    })
    @IsOptional()
    bidding_war?: string;

    @Field(() => DateTime, {nullable: true, description: meta.created.desc})
    @CreateDateColumn({
      name: `${RetsListingAdditionalInfoEntity.colprefix}created`, 
    })
    @Index(`${InIndexPrefix}${RetsListingAdditionalInfoEntity.colprefix}created`)
    created?: Date;

    @Field(() => DateTime, {nullable: true, description: meta.updated.desc})
    @UpdateDateColumn({
      name: `${RetsListingAdditionalInfoEntity.colprefix}updated`, 
      nullable: true,
    })
    @Index(`${InIndexPrefix}${RetsListingAdditionalInfoEntity.colprefix}updated`)
    @IsOptional()
    updated?: Date;
    
    @Field(() => DateTime, {nullable: true, description: meta.deleted.desc})
    @DeleteDateColumn({
      name: `${RetsListingAdditionalInfoEntity.colprefix}deleted`, 
      nullable: true,
      comment: `date-time => Yes | null => No.`
    })
    @Index(`${InIndexPrefix}${RetsListingAdditionalInfoEntity.colprefix}deleted`)
    @IsOptional()
    deleted?: Date;

      // ████ INTERNAL RELATIONS ████████████████████████████████████████████████
      
    @Field(() => RetsMlsProviderEntity, {nullable: true, description: meta.fr_mlsp_id.desc})
    @ManyToOne(() => RetsMlsProviderEntity, (entity: RetsMlsProviderEntity) => entity.fr_rets_lis_addi_info_id)
    @JoinColumn({ name: `${RetsListingAdditionalInfoEntity.colprefix}mlsp_id` })
    fr_mlsp_id?: RetsMlsProviderEntity;
    
}
    
