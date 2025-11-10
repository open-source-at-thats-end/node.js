import { EntityMetaCRUDTypeDefinition, EntityCRUDTypeDefinition, DateTime, EntitySuffix, InIndexPrefix, UnIndexPrefix, FtIndexPrefix, ResolveGraphFieldRelation } from "@libs/library-app";
import { IsDate, isInt, IsInt, IsNotEmpty, IsOptional, IsString, MaxLength } from "class-validator";
import { Column, CreateDateColumn, DeleteDateColumn, Double, Entity, In, Index, JoinColumn, ManyToOne, OneToMany, OneToOne, PrimaryGeneratedColumn, Unique, UpdateDateColumn } from "typeorm";
import { Directive, Field, Float, Int, ObjectType } from "@nestjs/graphql";
import { RetsMlsProviderEntity } from "../../mls-provider/entities/mls.provider.entity";
import { RetsListingAgentEntity } from "../../agent/entities/agent.entity";
import { ThirdPartyPlatformEntity } from "apps/business-app/src/shared-app/shared.app.entity";
//import { ThirdPartyPlatformEntity } from "../../../shared-app/shared.app.entity";

const  RetsListingEntityFieldMeta: EntityMetaCRUDTypeDefinition = {

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
    listing_key: {
        desc: 'Listing key',
        validation:{
          maxLength:20,
          maxLengthMsg: "Maximum length of listing key is 20 characters.",
      }
    },
    price_diff: {
        desc: 'Price difference',
        validation:{}
    },
    pic_downloaded: {
        desc: 'Picture downloaded',
        validation:{}
    },
    pic_download_error: {
        desc: 'Picture download error',
        validation:{}
    },
    pic_updated: {
        desc: 'Picture updated',
        validation:{}
    },
    latlong_downloaded: {
        desc: 'Latlong downloaded',        
        validation:{}
    },
    latlong_tppltf_id: {
        desc: 'Third Party api platform',
        validation:{
           
        }
    },
    created_timestamp: {
        desc: 'When record is created, date-time will be saved.',
        validation:{}
    },
    property_status: {
        desc: 'Property status',
        validation:{
            maxLength:20,
            maxLengthMsg: "Maximum length of property status is 20 characters.",
        }
    },
    property_style: {
        desc: 'Property style',
        validation:{}
    },
    property_type: {
        desc: 'Property type',
        validation:{
          maxLength:20,
          maxLengthMsg: "Maximum length of property type is 20 characters.",
        }
    },
    subtype: {
        desc: 'Subtype',
        validation:{
          maxLength:30,
          maxLengthMsg: "Maximum length of Subtype is 30 characters.",
        }
    },
    display_address: {
        desc: 'Display address',
        validation:{
          maxLength:1,
          maxLengthMsg: "Maximum length of Display address is 1 characters.",
        }
    },
    address: {
        desc: 'address',
        validation:{
          maxLength:255,
          maxLengthMsg: "Maximum length of Address is 255 characters.",
        }
    },
    unit_no: {
        desc: 'Unit no',
        validation:{
          maxLength:25,
          maxLengthMsg: "Maximum length of Unit no is 25 characters.",
        }
    },
    street_dir_prefix: {
        desc: 'Street dir prefix',
        validation:{
          maxLength:25,
          maxLengthMsg: "Maximum length of Street dir prefix is 25 characters.",
        }
    },
    street_dir_suffix: {
        desc: 'Street dir suffix',
        validation:{
          maxLength:25,
          maxLengthMsg: "Maximum length of Street dir suffix is 25 characters.",
        }
    },
    street_number_modifier: {
        desc: 'Street number modifier',
        validation:{
          maxLength:32,
          maxLengthMsg: "Maximum length of Street number modifier is 32 characters.",
        }
    },
    street_name: {
        desc: 'Street name',
        validation:{
          maxLength:50,
          maxLengthMsg: "Maximum length of Street name is 50 characters.",
        }
    },
    street_number: {
        desc: 'Street number',
        validation:{
          maxLength:25,
          maxLengthMsg: "Maximum length of Street number is 25 characters.",
        }
    },
    street_suffix: {
        desc: 'Street suffix',
        validation:{
          maxLength:20,
          maxLengthMsg: "Maximum length of Street number is 20 characters.",
        }
    },
    city_name: {
        desc: 'City name',
        validation:{
          maxLength:50,
          maxLengthMsg: "Maximum length of City name is 50 characters.",
        }
    },
    state: {
        desc: 'State',
        validation:{
          maxLength:5,
          maxLengthMsg: "Maximum length of State is 5 characters.",
        }
    },
    zipcode: {
        desc: 'Zipcode',
        validation:{
          maxLength:10,
          maxLengthMsg: "Maximum length of Zipcode is 10 characters.",
        }
    },
    county: {
        desc: 'County',
        validation:{
          maxLength:50,
          maxLengthMsg: "Maximum length of County is 50 characters.",
        }
    },
    sub_condo_name: {
        desc: 'Sub Condo Name',
        validation:{
          maxLength:64,
          maxLengthMsg: "Maximum length of Sub Condo Name is 64 characters.",
        }
    },
    subdivision: {
      desc: 'Subdivision',
      validation:{
        maxLength:150,
        maxLengthMsg: "Maximum length of Subdivision is 150 characters.",
      }
    },
    baths: {
      desc: 'Baths',
      validation:{}
    },
    beds: {
      desc: 'Beds',
      validation:{}
    },
    dom: {
      desc: 'Dom',
      validation:{}
    },
    listing_date: {
      desc: 'Listing Date',
      validation:{}
    },
    last_photo_date: {
      desc: 'Last Photo Date',
      validation:{}
    },
    last_update_date: {
      desc: 'Last Update Date',
      validation:{}
    },  
    latitude: {
        desc: 'Latitude',
        validation:{}
    },
    longitude: {
        desc: 'Longitude',
        validation:{}
    },
    list_price: {
        desc: 'List price',
        validation:{}
    },
    lot_size: {
      desc: 'Lot size',
      validation:{}
    },
    main_sqft:{
      desc: 'Main sqft',
      validation:{}
    },
    main_photo_url:{
      desc: 'Main photo url',
      validation:{}
    },
    original_entry_timestamp: {
        desc: 'Original entry timestamp',
        validation:{}
    },
    original_list_price: {
        desc: 'Original list price',
        validation:{}
    },
    property_desc:{
      desc: 'Property description',
      validation:{}
    },
    sqft: {
      desc: 'Sqft',
      validation:{}
    },
    sold_date: {
      desc: 'Sold date',
      validation:{}
    },
    sold_price: {
      desc: 'Sold Price',
      validation:{}
    },
    stories:{
      desc: 'Stories',
      validation:{}
    },
    tax_year: {
        desc: 'Tax year',
        validation:{}
    },
    tax: {
        desc: 'Tax',
        validation:{}
    },
    total_floor: {
        desc: 'Total floor',  
        validation:{}
    },
    total_garage:{  
      desc: 'Total garage',
      validation:{}
    },
    total_parking: {
        desc: 'Total parking',
        validation:{}
    },
    total_photos:{
      desc: 'Total photos',
      validation:{}
    },
    total_rooms:{
      desc: 'Total rooms',
      validation:{}
    },
    total_units:{
      desc: 'Total units',
      validation:{}
    },
    unit_floor:{
      desc: 'Unit floor',
      validation:{}
    },
    yearbuilt:{
      desc: 'Year built',
      validation:{}
    },
    office_id:{
      desc: 'Office id',
      validation:{
        maxLength:20,
        maxLengthMsg: "Maximum length of Office id is 20 characters.", 
      }
    },
    agent_id:{
      desc: 'Agent id',
      validation:{
        maxLength:25,
        maxLengthMsg: "Maximum length of Agent id is 20 characters.", 
      }
    },
    co_agent_id:{
      desc: 'Co agent id',
      validation:{
        maxLength:20,
        maxLengthMsg: "Maximum length of Co agent id is 20 characters.", 
      }
    },
    co_agent_name:{
      desc: 'Co agent name',
      validation:{
        maxLength:150,
        maxLengthMsg: "Maximum length of Co agent name is 150 characters.",
      }
    },
    co_list_agent_email:{
      desc: 'Co list agent email',
      validation:{
        maxLength:80,
        maxLengthMsg: "Maximum length of Co list agent email is 80 characters.",
      }
    },
    co_list_agent_full_name:{
      desc: 'Co list agent full name',
      validation:{
        maxLength:150,
        maxLengthMsg: "Maximum length of Co list agent full name is 150 characters.",
      }
    },
    co_office_id:{
      desc: 'Co office id',
      validation:{
        maxLength:20,
        maxLengthMsg: "Maximum length of Co office id is 20 characters.",
      }
    },
    co_office_name:{
      desc: 'Co office name',
      validation:{
        maxLength:255,
        maxLengthMsg: "Maximum length of Co office name is 255 characters.",
      }
    },
    buyer_agent_id:{
      desc: 'Buyer agent id',
      validation:{
        maxLength:20,
        maxLengthMsg: "Maximum length of Buyer agent id is 20 characters.",
      }
    },
    seller_agent_id:{
      desc: 'Seller agent id',
      validation:{
        maxLength:20,
        maxLengthMsg: "Maximum length of Seller agent id is 20 characters.",
      }
    },
    area:{
      desc: 'Area',
      validation:{
        maxLength:150,
        maxLengthMsg: "Maximum length of Area is 150 characters.",
      }
    },
    baths_full:{
      desc: 'Baths full',
      validation:{}
    },
    baths_half:{
      desc: 'Baths half',
      validation:{}
    },
    elementary_school:{
      desc: 'Elementary school',
      validation:{
        maxLength:50,
        maxLengthMsg: "Maximum length of Elementary school is 50 characters.",
      }
    },
    garage:{
      desc: 'Garage',
      validation:{
        maxLength:64,
        maxLengthMsg: "Maximum length of Garage is 64 characters.",
      }
    },
    heating:{
      desc: 'Heating',
      validation:{}
    },
    high_school:{
      desc: 'High school',
      validation:{
        maxLength:50,
        maxLengthMsg: "Maximum length of High school is 50 characters.",
      }
    },
    is_openhouse:{
      desc: 'Is openhouse',
      validation:{
        maxLength:1,
        maxLengthMsg: "Maximum length of Is openhouse is 1 characters.",
      }
    },
    is_reo:{
      desc: 'Is reo',
      validation:{
        maxLength:1,
        maxLengthMsg: "Maximum length of Is reo is 1 characters.",
      }
    },
    is_shortsale:{
      desc: 'Is shortsale',
      validation:{
        maxLength:1,
        maxLengthMsg: "Maximum length of Is shortsale is 1 characters.",
      }
    },
    is_spa:{
      desc: 'Is spa',
      validation:{
        maxLength:1,
        maxLengthMsg: "Maximum length of Is spa is 1 characters.",
      }
    },
    is_waterfront:{
      desc: 'Is waterfront',
      validation:{
        maxLength:1,
        maxLengthMsg: "Maximum length of Is waterfront is 1 characters.",
      }
    },
    middle_school:{
      desc: 'Middle school',
      validation:{
        maxLength:50,
        maxLengthMsg: "Maximum length of Middle school is 50 characters.",
      }
    },
    parking_features:{
      desc: 'Parking features',
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

const  RetsListingVirtualFieldMeta: EntityMetaCRUDTypeDefinition = {
  fr_mlsp_id: {
    desc: `MLSP ID of the rets listing.`,
    validation: {}
  },

  fr_third_party_platform: {
    desc: `Third party platform of the rets listing.`,
    validation: {}
  }
  
}

export const RetsListingEntityMeta = {...RetsListingEntityFieldMeta, ...RetsListingVirtualFieldMeta};
const meta = RetsListingEntityMeta; // need to use in this file down the line

@ObjectType({ isAbstract: true })
@Directive('@key(fields: "id")') // TODO: SUPERGRAPH_FOREIGN_RELATION step 1 - add directive
@Entity({
  name: 'rets_listing',
  engine: 'InnoDB',
})
@Unique(`${UnIndexPrefix}rl_mlsp_id`,[`mlsp_id`, `mls_num`])
export class RetsListingEntity implements EntityCRUDTypeDefinition {

    static colprefix: string = 'rl_';
    static uploaddir: string = 'listing';
    
    static metaname: string = (RetsListingEntity.name).replace(EntitySuffix, '');
    static metadesc: string = 'Provides listing details of rets listing.';

    @Field(() => Int, {nullable: true, description: meta.id.desc})
    @PrimaryGeneratedColumn({
      name: `${RetsListingEntity.colprefix}id`, 
      type: 'int', 
      unsigned: true,  
      primaryKeyConstraintName: 'PRIMARY',
    })
    id?: number;

    @Field(() => Int, {nullable: true, description: meta.mlsp_id.desc})
    @Column({
      name: `${RetsListingEntity.colprefix}mlsp_id`, 
      type: 'tinyint', 
      unsigned: true, 
      comment: `FK(_rets_mls_provider => mlsp_id)`
    })
    @IsNotEmpty()
    @IsInt()
    mlsp_id?: number;

    @Field(() => String, {nullable: true, description: meta.mls_num.desc})
    @Column({
      name: `${RetsListingEntity.colprefix}mls_num`, 
      type: 'varchar', 
      length: meta.mls_num.validation.maxLength, 
      collation: 'utf8mb4_general_ci',
    })
    @Index(`${InIndexPrefix}${RetsListingEntity.colprefix}mls_num`, { unique: false })
    @IsNotEmpty()
    @MaxLength(meta.mls_num.validation.maxLength as number, {message: meta.mls_num.validation.maxLengthMsg})
    mls_num?: string;
    
    @Field(() => String, {nullable: true, description: meta.listing_key.desc})
    @Column({
      name: `${RetsListingEntity.colprefix}listing_key`, 
      type: 'varchar', 
      length: meta.listing_key.validation.maxLength, 
      collation: 'utf8mb4_general_ci',
    })
    @Index(`${InIndexPrefix}${RetsListingEntity.colprefix}listing_key`, { unique: false })
    @IsNotEmpty()
    @MaxLength(meta.listing_key.validation.maxLength as number, {message: meta.listing_key.validation.maxLengthMsg})
    listing_key?: string;

    @Field(() => Float, {nullable: true, description: meta.price_diff.desc})
    @Column({
      name: `${RetsListingEntity.colprefix}price_diff`, 
      type: 'float',
      default: 0,
      comment: `Need to calculate using original_list_price and list_price difference.`
    })
    @Index(`${InIndexPrefix}${RetsListingEntity.colprefix}price_diff`, { unique: false })
    @IsNotEmpty()
    price_diff?: number;

    @Field(() => DateTime, {nullable: true, description: meta.pic_downloaded.desc})
    @Column({
      name: `${RetsListingEntity.colprefix}pic_downloaded`, 
      type: 'datetime', 
      nullable: true,
      comment: `date-time => Yes | null => No`
    })
    @Index(`${InIndexPrefix}${RetsListingEntity.colprefix}pic_downloaded`, { unique: false })
    @IsOptional()
    @IsDate()
    pic_downloaded?: Date;

    @Field(() => DateTime, {nullable: true, description: meta.pic_download_error.desc})
    @Column({
      name: `${RetsListingEntity.colprefix}pic_download_error`, 
      type: 'datetime', 
      nullable: true,
      comment: `date-time => Yes | null => No`
    })
    @Index(`${InIndexPrefix}${RetsListingEntity.colprefix}pic_download_error`, { unique: false })
    @IsOptional()
    @IsDate()
    pic_download_error?: Date;

    @Field(() => DateTime, {nullable: true, description: meta.pic_updated.desc})
    @Column({
      name: `${RetsListingEntity.colprefix}pic_updated`, 
      type: 'datetime', 
      nullable: true,
      comment: `date-time => Yes | null => No`
    })
    @Index(`${InIndexPrefix}${RetsListingEntity.colprefix}pic_updated`, { unique: false })
    @IsOptional()
    @IsDate()
    pic_updated?: Date;

    @Field(() => DateTime, {nullable: true, description: meta.latlong_downloaded.desc})
    @Column({
      name: `${RetsListingEntity.colprefix}latlong_downloaded`, 
      type: 'datetime', 
      comment: `date-time => Yes | null => No`
    })
    @Index(`${InIndexPrefix}${RetsListingEntity.colprefix}latlong_downloaded`, { unique: false })
    @IsOptional()
    @IsDate()
    latlong_downloaded?: Date;

    @Field(() => Int, {nullable: true, description: meta.latlong_tppltf_id.desc})
    @Column({
      name: `${RetsListingEntity.colprefix}latlong_tppltf_id`, 
      type: 'smallint',      
      comment: `FK (_third_party_platform => id) IF table is not available then constant will be there.`
    })
    @IsOptional()
    @IsInt()
    latlong_tppltf_id?: number;

    @Field(() => DateTime, {nullable: true, description: meta.created_timestamp.desc})
    @Column({
      name: `${RetsListingEntity.colprefix}created_timestamp`, 
      type: 'timestamp', 
      nullable: true,
      collation: 'utf8mb4_general_ci',
    })
    @IsOptional()
    created_timestamp?: Date;
    
    @Field(() => String, {nullable: true, description: meta.property_status.desc})
    @Column({
      name: `${RetsListingEntity.colprefix}property_status`,
      type: 'varchar',
      nullable: true,
      length: meta.property_status.validation.maxLength,
      collation: `utf8mb4_general_ci`
    })
    @Index(`${InIndexPrefix}${RetsListingEntity.colprefix}property_status`, { unique: false })
    @IsOptional()
    @MaxLength(meta.property_status.validation.maxLength as number, {message: meta.property_status.validation.maxLengthMsg})
    property_status?: string;

    @Field(() => String, {nullable: true, description: meta.property_style.desc})
    @Column({
      name: `${RetsListingEntity.colprefix}property_style`,
      type: 'text',
      nullable: true,
      collation: `utf8mb4_general_ci`
    })
    @Index(`${FtIndexPrefix}${RetsListingEntity.colprefix}property_style`, { unique: false })
    @IsOptional()
    property_style?: string;

    @Field(() => String, {nullable: true, description: meta.property_type.desc})
    @Column({
      name: `${RetsListingEntity.colprefix}property_type`,
      type: 'varchar',
      length: meta.property_type.validation.maxLength,
      collation: `utf8mb4_general_ci`
    })
    @Index(`${InIndexPrefix}${RetsListingEntity.colprefix}property_type`, { unique: false })
    @MaxLength(meta.property_type.validation.maxLength as number, {message: meta.property_type.validation.maxLengthMsg})
    @IsNotEmpty()
    property_type?: string;

    @Field(() => String, {nullable: true, description: meta.subtype.desc})
    @Column({
      name: `${RetsListingEntity.colprefix}subtype`,
      type: 'varchar',
      nullable: true,
      length: meta.subtype.validation.maxLength,
      collation: `utf8mb4_general_ci`
    })
    @Index(`${InIndexPrefix}${RetsListingEntity.colprefix}subtype`, { unique: false })
    @IsOptional()
    @MaxLength(meta.subtype.validation.maxLength as number, {message: meta.subtype.validation.maxLengthMsg})
    subtype?: string;

    @Field(() => String, {nullable: true, description: meta.display_address.desc})
    @Column({
      name: `${RetsListingEntity.colprefix}display_address`,
      type: 'char',
      default: 'Y',
      length: meta.display_address.validation.maxLength,
      collation: `utf8mb4_general_ci`
    })
    @Index(`${InIndexPrefix}${RetsListingEntity.colprefix}display_address`, { unique: false })
    @MaxLength(meta.display_address.validation.maxLength as number, {message: meta.display_address.validation.maxLengthMsg})
    @IsNotEmpty()
    display_address?: string;

    @Field(() => String, {nullable: true, description: meta.address.desc})
    @Column({
      name: `${RetsListingEntity.colprefix}address`,
      type: 'varchar',
      length: meta.address.validation.maxLength,
      collation: `utf8mb4_general_ci`
    })
    @Index(`${InIndexPrefix}${RetsListingEntity.colprefix}address`, { unique: false })
    @MaxLength(meta.address.validation.maxLength as number, {message: meta.address.validation.maxLengthMsg})
    @IsNotEmpty()
    address?: string;

    @Field(() => String, {nullable: true, description: meta.unit_no.desc})
    @Column({
      name: `${RetsListingEntity.colprefix}unit_no`,
      type: 'varchar',
      nullable: true,
      length: meta.unit_no.validation.maxLength,
      collation: `utf8mb4_general_ci`
    })
    @Index(`${InIndexPrefix}${RetsListingEntity.colprefix}unit_no`, { unique: false })
    @MaxLength(meta.unit_no.validation.maxLength as number, {message: meta.unit_no.validation.maxLengthMsg})
    @IsOptional()
    unit_no?: string;

    @Field(() => String, {nullable: true, description: meta.street_dir_prefix.desc})
    @Column({
      name: `${RetsListingEntity.colprefix}street_dir_prefix`,
      type: 'varchar',
      nullable: true,
      length: meta.street_dir_prefix.validation.maxLength,
      collation: `utf8mb4_general_ci`
    })
    @Index(`${InIndexPrefix}${RetsListingEntity.colprefix}street_dir_prefix`, { unique: false })
    @MaxLength(meta.street_dir_prefix.validation.maxLength as number, {message: meta.street_dir_prefix.validation.maxLengthMsg})
    @IsOptional()
    street_dir_prefix?: string;

    @Field(() => String, {nullable: true, description: meta.street_dir_suffix.desc})
    @Column({
      name: `${RetsListingEntity.colprefix}street_dir_suffix`,
      type: 'varchar',
      nullable: true,
      length: meta.street_dir_suffix.validation.maxLength,
      collation: `utf8mb4_general_ci`
    })
    @Index(`${InIndexPrefix}${RetsListingEntity.colprefix}street_dir_suffix`, { unique: false })
    @MaxLength(meta.street_dir_suffix.validation.maxLength as number, {message: meta.street_dir_suffix.validation.maxLengthMsg})
    @IsOptional()
    street_dir_suffix?: string;

    @Field(() => String, {nullable: true, description: meta.street_number_modifier.desc})
    @Column({
      name: `${RetsListingEntity.colprefix}street_number_modifier`,
      type: 'varchar',
      nullable: true,
      length: meta.street_number_modifier.validation.maxLength,
      collation: `utf8mb4_general_ci`
    })
    @MaxLength(meta.street_number_modifier.validation.maxLength as number, {message: meta.street_number_modifier.validation.maxLengthMsg})
    @IsOptional()
    street_number_modifier?: string;

    @Field(() => String, {nullable: true, description: meta.street_name.desc})
    @Column({
      name: `${RetsListingEntity.colprefix}street_name`,
      type: 'varchar',
      length: meta.street_name.validation.maxLength,
      collation: `utf8mb4_general_ci`
    })
    @Index(`${InIndexPrefix}${RetsListingEntity.colprefix}street_name`, { unique: false })
    @MaxLength(meta.street_name.validation.maxLength as number, {message: meta.street_name.validation.maxLengthMsg})
    @IsNotEmpty()
    street_name?: string;

    @Field(() => String, {nullable: true, description: meta.street_number.desc})
    @Column({
      name: `${RetsListingEntity.colprefix}street_number`,
      type: 'varchar',
      length: meta.street_number.validation.maxLength,
      collation: `utf8mb4_general_ci`
    })
    @Index(`${InIndexPrefix}${RetsListingEntity.colprefix}street_number`, { unique: false })
    @MaxLength(meta.street_number.validation.maxLength as number, {message: meta.street_number.validation.maxLengthMsg})
    @IsNotEmpty()
    street_number?: string;

    @Field(() => String, {nullable: true, description: meta.street_suffix.desc})
    @Column({
      name: `${RetsListingEntity.colprefix}street_suffix`,
      type: 'varchar',  
      nullable: true,
      length: meta.street_suffix.validation.maxLength,
      collation: `utf8mb4_general_ci`
    })
    @Index(`${InIndexPrefix}${RetsListingEntity.colprefix}street_suffix`, { unique: false })
    @MaxLength(meta.street_suffix.validation.maxLength as number, {message: meta.street_suffix.validation.maxLengthMsg})
    @IsOptional()
    street_suffix?: string;

    @Field(() => String, {nullable: true, description: meta.city_name.desc})
    @Column({
      name: `${RetsListingEntity.colprefix}city_name`,
      type: 'varchar',
      length: meta.city_name.validation.maxLength,
      collation: `utf8mb4_general_ci`
    })
    @Index(`${InIndexPrefix}${RetsListingEntity.colprefix}city_name`, { unique: false })
    @MaxLength(meta.city_name.validation.maxLength as number, {message: meta.city_name.validation.maxLengthMsg})
    @IsNotEmpty()
    city_name?: string;

    @Field(() => String, {nullable: true, description: meta.state.desc})
    @Column({
      name: `${RetsListingEntity.colprefix}state`,
      type: 'varchar',
      length: meta.state.validation.maxLength,
      collation: `utf8mb4_general_ci`
    })
    @Index(`${InIndexPrefix}${RetsListingEntity.colprefix}state`, { unique: false })
    @MaxLength(meta.state.validation.maxLength as number, {message: meta.state.validation.maxLengthMsg})
    @IsNotEmpty()
    state?: string;

    @Field(() => String, {nullable: true, description: meta.zipcode.desc})
    @Column({
      name: `${RetsListingEntity.colprefix}zipcode`,
      type: 'varchar',
      length: meta.zipcode.validation.maxLength,
      collation: `utf8mb4_general_ci`
    })
    @Index(`${InIndexPrefix}${RetsListingEntity.colprefix}zipcode`, { unique: false })
    @MaxLength(meta.zipcode.validation.maxLength as number, {message: meta.zipcode.validation.maxLengthMsg})
    @IsNotEmpty()
    zipcode?: string;

    @Field(() => String, {nullable: true, description: meta.county.desc})
    @Column({
      name: `${RetsListingEntity.colprefix}county`,
      type: 'varchar',
      nullable: true,
      length: meta.county.validation.maxLength,
      collation: `utf8mb4_general_ci`
    })
    @Index(`${InIndexPrefix}${RetsListingEntity.colprefix}county`, { unique: false })
    @MaxLength(meta.county.validation.maxLength as number, {message: meta.county.validation.maxLengthMsg})
    @IsOptional()
    county?: string;

    @Field(() => String, {nullable: true, description: meta.sub_condo_name.desc})
    @Column({
      name: `${RetsListingEntity.colprefix}sub_condo_name`,
      type: 'varchar',
      nullable: true,
      length: meta.sub_condo_name.validation.maxLength,
      collation: `utf8mb4_general_ci`
    })
    @MaxLength(meta.sub_condo_name.validation.maxLength as number, {message: meta.sub_condo_name.validation.maxLengthMsg})
    @IsOptional()
    sub_condo_name?: string;

    @Field(() => String, {nullable: true, description: meta.subdivision.desc})
    @Column({
      name: `${RetsListingEntity.colprefix}subdivision`,
      type: 'varchar',
      nullable: true,
      length: meta.subdivision.validation.maxLength,
      collation: `utf8mb4_general_ci`
    })
    @MaxLength(meta.subdivision.validation.maxLength as number, {message: meta.subdivision.validation.maxLengthMsg})
    @IsOptional()
    subdivision?: string;

    @Field(() => Int, {nullable: true, description: meta.baths.desc})
    @Column({
      name: `${RetsListingEntity.colprefix}baths`,
      type: 'int',
      unsigned: true, 
    })
    @Index(`${InIndexPrefix}${RetsListingEntity.colprefix}baths`, { unique: false })
    @IsNotEmpty()
    @IsInt()
    baths?: number;

    @Field(() => Int, {nullable: true, description: meta.beds.desc})
    @Column({
      name: `${RetsListingEntity.colprefix}beds`,
      type: 'int',
      unsigned: true, 
    })
    @Index(`${InIndexPrefix}${RetsListingEntity.colprefix}beds`, { unique: false })
    @IsNotEmpty()
    @IsInt()
    beds?: number;

    @Field(() => Int, {nullable: true, description: meta.dom.desc})
    @Column({
      name: `${RetsListingEntity.colprefix}dom`,
      type: 'int',
      nullable: true,
      unsigned: true, 
    })
    @Index(`${InIndexPrefix}${RetsListingEntity.colprefix}dom`, { unique: false })
    @IsInt()
    @IsOptional()
    dom?: number;

    @Field(() => DateTime, {nullable: true, description: meta.listing_date.desc})
    @Column({
      name: `${RetsListingEntity.colprefix}listing_date`,
      type: 'datetime',
    })
    @Index(`${InIndexPrefix}${RetsListingEntity.colprefix}listing_date`, { unique: false })
    @IsNotEmpty()
    listing_date?: Date;

    @Field(() => DateTime, {nullable: true, description: meta.last_photo_date.desc})
    @Column({
      name: `${RetsListingEntity.colprefix}last_photo_date`,
      type: 'datetime',
      nullable: true,
    })
    @Index(`${InIndexPrefix}${RetsListingEntity.colprefix}last_photo_date`, { unique: false })
    @IsOptional()
    last_photo_date?: Date;

    @Field(() => DateTime, {nullable: true, description: meta.last_update_date.desc})
    @Column({
      name: `${RetsListingEntity.colprefix}last_update_date`,
      type: 'datetime',
      nullable: true,
    })
    @Index(`${InIndexPrefix}${RetsListingEntity.colprefix}last_update_date`, { unique: false })
    @IsOptional()
    last_update_date?: Date;

    @Field(() => Float, { nullable: true, description: meta.latitude.desc })
    @Column({
      name: `${RetsListingEntity.colprefix}latitude`,
      type: 'decimal',
      precision: 12,
      scale: 8,
    })
    @Index(`${InIndexPrefix}${RetsListingEntity.colprefix}latitude`, { unique: false })
    @IsNotEmpty()
    latitude?: number;

    @Field(() => Float, {nullable: true, description: meta.longitude.desc})
    @Column({
      name: `${RetsListingEntity.colprefix}longitude`,
      type: 'decimal',
      precision: 12,
      scale: 8,
    })
    @Index(`${InIndexPrefix}${RetsListingEntity.colprefix}longitude`, { unique: false })
    @IsNotEmpty()
    longitude?: number;

    @Field(() => Float, {nullable: false, description: meta.list_price.desc})
    @Column({
      name: `${RetsListingEntity.colprefix}list_price`,
      type: 'decimal',
      precision: 14,
      scale: 2,
      unsigned: true
    })
    @Index(`${InIndexPrefix}${RetsListingEntity.colprefix}list_price`, { unique: false })
    @IsNotEmpty()
    list_price?: number;

    @Field(() => Float, {nullable: true, description: meta.lot_size.desc})
    @Column({
      name: `${RetsListingEntity.colprefix}lot_size`,
      type: 'decimal',
      nullable: true,
      precision: 14,
      scale: 2,
      unsigned: true
    })
    @Index(`${InIndexPrefix}${RetsListingEntity.colprefix}lot_size`, { unique: false })
    @IsOptional()
    lot_size?: number;

    @Field(() => Float, {nullable: true, description: meta.main_sqft.desc})
    @Column({
      name: `${RetsListingEntity.colprefix}main_sqft`,
      type: 'decimal',
      nullable: true,
      precision: 14,
      scale: 2,
      unsigned: true
    })
    @Index(`${InIndexPrefix}${RetsListingEntity.colprefix}main_sqft`, { unique: false })
    @IsOptional()
    main_sqft?: number;

    @Field(() => String, {nullable: true, description: meta.main_photo_url.desc})
    @Column({
      name: `${RetsListingEntity.colprefix}main_photo_url`,
      type: 'varchar',
      nullable: true,
      collation: `utf8mb4_general_ci`
    })
    @Index(`${FtIndexPrefix}${RetsListingEntity.colprefix}main_photo_url`, { unique: false })
    @IsOptional()
    main_photo_url?: String;

    @Field(() => DateTime, {nullable: true, description: meta.original_entry_timestamp.desc})
    @Column({
      name: `${RetsListingEntity.colprefix}original_entry_timestamp`,
      type: 'datetime',
      nullable: true,
    })
    @Index(`${InIndexPrefix}${RetsListingEntity.colprefix}original_entry_timestamp`, { unique: false })
    @IsOptional()
    original_entry_timestamp?: Date;

    @Field(() => Float, {nullable: true, description: meta.original_list_price.desc})
    @Column({
      name: `${RetsListingEntity.colprefix}original_list_price`,
      type: 'decimal',
      precision: 14,
      scale: 2,
      unsigned: true
    })
    @Index(`${InIndexPrefix}${RetsListingEntity.colprefix}original_list_price`, { unique: false })
    @IsNotEmpty()
    original_list_price?: number;

    @Field(() => String, {nullable: true, description: meta.property_desc.desc})
    @Column({
      name: `${RetsListingEntity.colprefix}property_desc`,
      type: 'text',
      collation: `utf8mb4_general_ci`
    })
    @IsNotEmpty()
    property_desc?: string;

    @Field(() => Float, {nullable: true, description: meta.sqft.desc})
    @Column({
      name: `${RetsListingEntity.colprefix}sqft`,
      type: 'decimal',
      unsigned: true, 
      precision: 14,
      scale: 2,
    })
    @Index(`${InIndexPrefix}${RetsListingEntity.colprefix}sqft`, { unique: false })
    @IsNotEmpty()
    sqft?: number;

    @Field(() => DateTime, {nullable: true, description: meta.sold_date.desc})
    @Column({
      name: `${RetsListingEntity.colprefix}sold_date`,
      type: 'datetime',
      nullable: true,
    })
    @Index(`${InIndexPrefix}${RetsListingEntity.colprefix}sold_date`, { unique: false })
    @IsOptional()
    sold_date?: Date;

    @Field(() => Float, {nullable: true, description: meta.sold_price.desc})
    @Column({
      name: `${RetsListingEntity.colprefix}sold_price`,
      type: 'decimal',
      nullable: true,
      precision: 14,
      scale: 2,
      unsigned: true
    })
    @Index(`${InIndexPrefix}${RetsListingEntity.colprefix}sold_price`, { unique: false })
    @IsOptional()
    sold_price?: number;

    @Field(() => Int, {nullable: true, description: meta.stories.desc})
    @Column({
      name: `${RetsListingEntity.colprefix}stories`,
      type: 'int',
      nullable: true,
      unsigned:true
    })
    @IsOptional()
    stories?: number;

    @Field(() => Int, {nullable: true, description: meta.tax_year.desc})
    @Column({
      name: `${RetsListingEntity.colprefix}tax_year`,
      type: 'int',
      nullable: true,
      unsigned:true
    })
    @IsOptional()
    tax_year?: number;

    @Field(() => Float, {nullable: true, description: meta.tax.desc})
    @Column({
      name: `${RetsListingEntity.colprefix}tax`,
      type: 'decimal',
      nullable: true,
      unsigned:true,
      precision: 14,
      scale: 2
    })
    @IsOptional()
    tax?: number;

    @Field(() => Int, {nullable: true, description: meta.total_floor.desc})
    @Column({
      name: `${RetsListingEntity.colprefix}total_floor`,
      type: 'int',
      unsigned: true, 
      default: 0,
    })
    @Index(`${InIndexPrefix}${RetsListingEntity.colprefix}total_floor`, { unique: false })
    @IsNotEmpty()
    @IsInt()
    total_floor?: number;

    @Field(() => Float, {nullable: true, description: meta.total_garage.desc})
    @Column({
      name: `${RetsListingEntity.colprefix}total_garage`,
      type: 'decimal',
      unsigned: true, 
      default: 0,
      precision: 14,
      scale: 2
    })
    @Index(`${InIndexPrefix}${RetsListingEntity.colprefix}total_garage`, { unique: false })
    @IsNotEmpty()
    total_garage?: number;

    @Field(() => Float, {nullable: true, description: meta.total_parking.desc})
    @Column({
      name: `${RetsListingEntity.colprefix}total_parking`,
      type: 'decimal',
      unsigned: true, 
      default: 0,
      precision: 14,
      scale: 2
    })
    @Index(`${InIndexPrefix}${RetsListingEntity.colprefix}total_parking`, { unique: false })
    @IsNotEmpty()
    total_parking?: number;

    @Field(() => Int, {nullable: true, description: meta.total_photos.desc})
    @Column({
      name: `${RetsListingEntity.colprefix}total_photos`,
      type: 'int',
      unsigned: true, 
      default: 0,
    })
    @Index(`${InIndexPrefix}${RetsListingEntity.colprefix}total_photos`, { unique: false })
    @IsNotEmpty()
    @IsInt()
    total_photos?: number;

    @Field(() => Int, {nullable: true, description: meta.total_rooms.desc})
    @Column({
      name: `${RetsListingEntity.colprefix}total_rooms`,
      type: 'int',
      unsigned: true, 
      default: 0,
    })
    @Index(`${InIndexPrefix}${RetsListingEntity.colprefix}total_rooms`, { unique: false })
    @IsNotEmpty()
    @IsInt()
    total_rooms?: number;

    @Field(() => Int, {nullable: true, description: meta.total_units.desc})
    @Column({
      name: `${RetsListingEntity.colprefix}total_units`,
      type: 'int',
      unsigned: true, 
      default: 0,
    })
    @Index(`${InIndexPrefix}${RetsListingEntity.colprefix}total_units`, { unique: false })
    @IsNotEmpty()
    total_units?: number;

    @Field(() => Int, {nullable: true, description: meta.unit_floor.desc})
    @Column({
      name: `${RetsListingEntity.colprefix}unit_floor`,
      type: 'int',
      nullable: true,
      unsigned: true,
    })
    @IsOptional()
    unit_floor?: number;

    @Field(() => Int, {nullable: true, description: meta.yearbuilt.desc})
    @Column({
      name: `${RetsListingEntity.colprefix}yearbuilt`,
      type: 'int',
      nullable: true,
      unsigned: true,
    })
    @Index(`${InIndexPrefix}${RetsListingEntity.colprefix}yearbuilt`, { unique: false })
    @IsInt()
    @IsOptional()
    yearbuilt?: number;

    @Field(() => String, {nullable: true, description: meta.office_id.desc})
    @Column({
      name: `${RetsListingEntity.colprefix}office_id`,
      type: 'varchar',
      nullable: true,
      length: meta.office_id .validation.maxLength,
      collation: `utf8mb4_general_ci` 
    })
    @Index(`${InIndexPrefix}${RetsListingEntity.colprefix}office_id`, { unique: false })
    @MaxLength(meta.office_id.validation.maxLength as number, {message: meta.office_id.validation.maxLengthMsg})
    @IsOptional()
    office_id?: String;

    @Field(() => String, {nullable: true, description: meta.agent_id.desc})
    @Column({
      name: `${RetsListingEntity.colprefix}agent_id`,
      type: 'varchar',
      length: meta.agent_id .validation.maxLength,
      collation: `utf8mb4_general_ci`, 
    })
    @Index(`${InIndexPrefix}${RetsListingEntity.colprefix}agent_id`, { unique: false })
    @MaxLength(meta.agent_id.validation.maxLength as number, {message: meta.agent_id.validation.maxLengthMsg})
    @IsNotEmpty()
    agent_id?: String;

    @Field(() => String, {nullable: true, description: meta.co_agent_id.desc})
    @Column({
      name: `${RetsListingEntity.colprefix}co_agent_id`,
      type: 'varchar',
      nullable: true,
      length: meta.co_agent_id .validation.maxLength,
      collation: `utf8mb4_general_ci` 
    })
    @MaxLength(meta.co_agent_id.validation.maxLength as number, {message: meta.co_agent_id.validation.maxLengthMsg})
    @IsOptional()
    co_agent_id?: String;

    @Field(() => String, {nullable: true, description: meta.co_agent_name.desc})
    @Column({
      name: `${RetsListingEntity.colprefix}co_agent_name`,
      type: 'varchar',
      nullable: true,
      length: meta.co_agent_name .validation.maxLength,
      collation: `utf8mb4_general_ci` 
    })
    @MaxLength(meta.co_agent_name.validation.maxLength as number, {message: meta.co_agent_name.validation.maxLengthMsg})
    @IsOptional()
    co_agent_name?: String;

    @Field(() => String, {nullable: true, description: meta.co_list_agent_email.desc})
    @Column({
      name: `${RetsListingEntity.colprefix}co_list_agent_email`,
      type: 'varchar',
      nullable: true,
      length: meta.co_list_agent_email .validation.maxLength,
      collation: `utf8mb4_general_ci` 
    })
    @MaxLength(meta.co_list_agent_email.validation.maxLength as number, {message: meta.co_list_agent_email.validation.maxLengthMsg})
    @IsOptional()
    co_list_agent_email?: String;

    @Field(() => String, {nullable: true, description: meta.co_list_agent_full_name.desc})
    @Column({
      name: `${RetsListingEntity.colprefix}co_list_agent_full_name`,
      type: 'varchar',
      nullable: true,
      length: meta.co_list_agent_full_name .validation.maxLength,
      collation: `utf8mb4_general_ci` 
    })
    @MaxLength(meta.co_list_agent_full_name.validation.maxLength as number, {message: meta.co_list_agent_full_name.validation.maxLengthMsg})
    @IsOptional()
    co_list_agent_full_name?: String

    @Field(() => String, {nullable: true, description: meta.co_office_id.desc})
    @Column({
      name: `${RetsListingEntity.colprefix}co_office_id`,
      type: 'varchar',
      nullable: true,
      length: meta.co_office_id .validation.maxLength,
      collation: `utf8mb4_general_ci` 
    })
    @MaxLength(meta.co_office_id.validation.maxLength as number, {message: meta.co_office_id.validation.maxLengthMsg})
    @IsOptional()
    co_office_id?: String

    @Field(() => String, {nullable: true, description: meta.co_office_name.desc})
    @Column({
      name: `${RetsListingEntity.colprefix}co_office_name`,
      type: 'varchar',
      nullable: true,
      length: meta.co_office_name .validation.maxLength,
      collation: `utf8mb4_general_ci` 
    })
    @MaxLength(meta.co_office_name.validation.maxLength as number, {message: meta.co_office_name.validation.maxLengthMsg})
    @IsOptional()
    co_office_name?: String

    @Field(() => String, {nullable: true, description: meta.buyer_agent_id.desc})
    @Column({
      name: `${RetsListingEntity.colprefix}buyer_agent_id`,
      type: 'varchar',
      nullable: true,
      length: meta.buyer_agent_id .validation.maxLength,
      collation: `utf8mb4_general_ci` 
    })
    @MaxLength(meta.buyer_agent_id.validation.maxLength as number, {message: meta.buyer_agent_id.validation.maxLengthMsg})
    @IsOptional()
    buyer_agent_id?: String

    @Field(() => String, {nullable: true, description: meta.seller_agent_id.desc})
    @Column({
      name: `${RetsListingEntity.colprefix}seller_agent_id`,
      type: 'varchar',
      nullable: true,
      length: meta.seller_agent_id .validation.maxLength,
      collation: `utf8mb4_general_ci` 
    })
    @MaxLength(meta.seller_agent_id.validation.maxLength as number, {message: meta.seller_agent_id.validation.maxLengthMsg})
    @IsOptional()
    seller_agent_id?: String

    @Field(() => String, {nullable: true, description: meta.area.desc})
    @Column({
      name: `${RetsListingEntity.colprefix}area`,
      type: 'varchar',
      nullable: true,
      length: meta.area .validation.maxLength,
      collation: `utf8mb4_general_ci` 
    })
    @Index(`${InIndexPrefix}${RetsListingEntity.colprefix}area`, { unique: false })
    @MaxLength(meta.area.validation.maxLength as number, {message: meta.area.validation.maxLengthMsg})
    @IsOptional()
    area?: String

    @Field(() => Int, {nullable: true, description: meta.baths_full.desc})
    @Column({
      name: `${RetsListingEntity.colprefix}baths_full`,
      type: 'int',
      nullable: true,
      unsigned: true,
    })
    @Index(`${InIndexPrefix}${RetsListingEntity.colprefix}baths_full`, { unique: false })
    @IsOptional()
    baths_full?: number;

    @Field(() => Int, {nullable: true, description: meta.baths_half.desc})
    @Column({
      name: `${RetsListingEntity.colprefix}baths_half`,
      type: 'int',
      nullable: true,
      unsigned: true,
    })
    @Index(`${InIndexPrefix}${RetsListingEntity.colprefix}baths_half`, { unique: false })
    @IsOptional()
    baths_half?: number;

    @Field(() => String, {nullable: true, description: meta.elementary_school.desc})
    @Column({
      name: `${RetsListingEntity.colprefix}elementary_school`,
      type: 'varchar',
      length: meta.elementary_school.validation.maxLength,
      collation: `utf8mb4_general_ci`
    })
    @MaxLength(meta.elementary_school.validation.maxLength as number, {message: meta.elementary_school.validation.maxLengthMsg})
    @IsNotEmpty()
    elementary_school?: String;

    @Field(() => Float, {nullable: true, description: meta.garage.desc})
    @Column({
      name: `${RetsListingEntity.colprefix}garage`,
      type: 'decimal',
      nullable: true,
    })
    @IsOptional()
    garage?: number;

    @Field(() => String, {nullable: true, description: meta.heating.desc})
    @Column({
      name: `${RetsListingEntity.colprefix}heating`,
      type: 'text',
      nullable: true,
      collation: `utf8mb4_general_ci`
    })
    @IsOptional()
    heating?: String;

    @Field(() => String, {nullable: true, description: meta.high_school.desc})
    @Column({
      name: `${RetsListingEntity.colprefix}high_school`,
      type: 'varchar',
      nullable: true,
      length: meta.high_school.validation.maxLength,
      collation: `utf8mb4_general_ci`
    })
    @MaxLength(meta.high_school.validation.maxLength as number, {message: meta.high_school.validation.maxLengthMsg})
    @IsOptional()
    high_school?: String;

    @Field(() => String, {nullable: true, description: meta.is_openhouse.desc})
    @Column({
      name: `${RetsListingEntity.colprefix}is_openhouse`,
      type: 'char',
      nullable: true,
      length: meta.is_openhouse.validation.maxLength,
      collation: `utf8mb4_general_ci`
    })
    @MaxLength(meta.is_openhouse.validation.maxLength as number, {message: meta.is_openhouse.validation.maxLengthMsg})
    @IsOptional()
    is_openhouse?: String;

    @Field(() => String, {nullable: true, description: meta.is_reo.desc})
    @Column({
      name: `${RetsListingEntity.colprefix}is_reo`,
      type: 'char',
      nullable: true,
      length: meta.is_reo.validation.maxLength,
      collation: `utf8mb4_general_ci`
    })
    @MaxLength(meta.is_reo.validation.maxLength as number, {message: meta.is_reo.validation.maxLengthMsg})
    @IsOptional()
    is_reo?: string;

    @Field(() => String, {nullable: true, description: meta.is_shortsale.desc})
    @Column({
      name: `${RetsListingEntity.colprefix}is_shortsale`,
      type: 'char',
      nullable: true,
      length: meta.is_shortsale.validation.maxLength,
      collation: `utf8mb4_general_ci`
    })
    @MaxLength(meta.is_shortsale.validation.maxLength as number, {message: meta.is_shortsale.validation.maxLengthMsg})
    @IsOptional()
    is_shortsale?: string;

    @Field(() => String, {nullable: true, description: meta.is_spa.desc})
    @Column({
      name: `${RetsListingEntity.colprefix}is_spa`,
      type: 'char',
      nullable: true,
      length: meta.is_spa.validation.maxLength,
      collation: `utf8mb4_general_ci`
    })
    @MaxLength(meta.is_spa.validation.maxLength as number, {message: meta.is_spa.validation.maxLengthMsg})
    @IsOptional()
    is_spa?: string;

    @Field(() => String, {nullable: true, description: meta.is_waterfront.desc})
    @Column({
      name: `${RetsListingEntity.colprefix}is_waterfront`,
      type: 'char',
      nullable: true,
      length: meta.is_waterfront.validation.maxLength,
      collation: `utf8mb4_general_ci`
    })
    @MaxLength(meta.is_waterfront.validation.maxLength as number, {message: meta.is_waterfront.validation.maxLengthMsg})
    @IsOptional()
    is_waterfront?: string;

    @Field(() => String, {nullable: true, description: meta.middle_school.desc})
    @Column({
      name: `${RetsListingEntity.colprefix}middle_school`,
      type: 'char',
      nullable: true,
      length: meta.middle_school.validation.maxLength,
      collation: `utf8mb4_general_ci`
    })
    @MaxLength(meta.middle_school.validation.maxLength as number, {message: meta.middle_school.validation.maxLengthMsg})
    @IsOptional()
    middle_school?: string;

    @Field(() => String, {nullable: true, description: meta.parking_features.desc})
    @Column({
      name: `${RetsListingEntity.colprefix}parking_features`,
      type: 'text',
      nullable: true,
      collation: `utf8mb4_general_ci`
    })
    @IsOptional()
    parking_features?: string;

    @Field(() => DateTime, {nullable: true, description: meta.created.desc})
    @CreateDateColumn({
      name: `${RetsListingEntity.colprefix}created`, 
    })
    @Index(`${InIndexPrefix}${RetsListingEntity.colprefix}created`)
    created?: Date;

    @Field(() => DateTime, {nullable: true, description: meta.updated.desc})
    @UpdateDateColumn({
      name: `${RetsListingEntity.colprefix}updated`, 
      nullable: true,
    })
    @Index(`${InIndexPrefix}${RetsListingEntity.colprefix}updated`)
    @IsOptional()
    updated?: Date;
    
    @Field(() => DateTime, {nullable: true, description: meta.deleted.desc})
    @DeleteDateColumn({
      name: `${RetsListingEntity.colprefix}deleted`, 
      nullable: true,
      comment: `date-time => Yes | null => No.`
    })
    @Index(`${InIndexPrefix}${RetsListingEntity.colprefix}deleted`)
    @IsOptional()
    deleted?: Date;


    // ████ INTERNAL RELATIONS ████████████████████████████████████████████████
     
    @Field(() => RetsMlsProviderEntity, {nullable: true, description: meta.fr_mlsp_id.desc})
    @ManyToOne(() => RetsMlsProviderEntity, (entity: RetsMlsProviderEntity) => entity.fr_rets_listing_id)
    @JoinColumn({ name: `${RetsListingEntity.colprefix}mlsp_id` })
    fr_mlsp_id?: RetsMlsProviderEntity;

    // ████ EXTERNAL RELATIONS ████████████████████████████████████████████████

    // TODO: SUPERGRAPH_FOREIGN_RELATION step 4 - add new thirpartyentity filed to return User for given post
    @Field(() => ThirdPartyPlatformEntity,{ nullable: true, description: meta.fr_third_party_platform.desc })
    @ResolveGraphFieldRelation(() => ThirdPartyPlatformEntity, {
      primaryKey: 'id',
      foreignKey: 'latlong_tppltf_id',
    })
    fr_third_party_platform?: ThirdPartyPlatformEntity;
}
    
