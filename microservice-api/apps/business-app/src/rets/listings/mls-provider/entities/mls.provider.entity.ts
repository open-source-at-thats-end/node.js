import { EntityMetaCRUDTypeDefinition, EntityCRUDTypeDefinition, DateTime, EntitySuffix, InIndexPrefix, YesNoEnum } from "@libs/library-app";
import { IsNotEmpty, IsOptional, MaxLength } from "class-validator";
import { Column, CreateDateColumn, DeleteDateColumn, Double, Entity, Index, OneToMany, OneToOne, PrimaryGeneratedColumn, Unique, UpdateDateColumn } from "typeorm";
import { Directive, Field, Float, Int, ObjectType } from "@nestjs/graphql";
import { UserFavouritePropertyEntity } from "../../user-favorite-property/entities/user.favourite.property.entity";
import { RetsListingEntity } from "../../listing/entities/listing.entity";
import { RetsListingAdditionalInfoEntity } from "../../additional-info/entities/additional.info.entity";
import { RetsListingAgentEntity } from "../../agent/entities/agent.entity";
import { RetsListingOfficeEntity } from "../../office/entities/office.entity";
import { RetsListingOpenHouseEntity } from "../../open-house/entities/open.house.entity";
import { RetsListingPhotosEntity } from "../../photos/entities/photos.entity";
import { RetsListingRoomEntity } from "../../room/entities/room.entity";
import { RetsListingUnitEntity } from "../../unit/entities/unit.entity";
import { RetsListingVirtualToursEntity } from "../../virtual-tours/entities/virtual.tours.entity";
import { ProcessedSearchByAddressEntity } from "../../../processed/search-by-address/entities/search.by.address.entity";
import { ProcessedSearchByCityEntity } from "../../../processed/search-by-city/entities/search.by.city.entity";
import { ProcessedSearchBySubdivisionEntity } from "../../../processed/search-by-mls-subdivision/entities/search.by.subdivision.entity";
import { ProcessedSearchByZipcodeEntity } from "../../../processed/search-by-mls-zipcode/entities/search.by.zipcode.entity";
import { ProcessedSearchByMlsEntity } from "../../../processed/search-by-mls/entities/search.by.mls.entity";

const  RetsMlsProviderEntityFieldMeta: EntityMetaCRUDTypeDefinition = {

    id: {
        desc: 'Unique ID of the rets MLS provider, auto generated.',
        validation: {} 
    },
    market_name: {
        desc: 'Market Name',
        validation:{
          maxLength:64,
          maxLengthMsg: "Maximum length of Market Name is 64 characters.",
        }
    },
    market_title: {
      desc: 'A descriptive title of the market.',
      validation:{
          maxLength:128,
          maxLengthMsg: "Maximum length of Market Title is 128 characters.",
      }
    },
    market_active: {
      "desc": "Indicates whether the market is active or inactive. A value of true represents an active market, while false indicates that the market is currently inactive or no longer in use.",
      validation: {} 
    },
    host: {
      desc: 'The host or domain name of the server hosting the MLS system.',
      validation:{
          maxLength:255,
          maxLengthMsg: "Maximum length of Host is 255 characters.",
      }
    },
    user: {
      desc: 'The username used to authenticate the connection to the MLS system.',
      validation:{
          maxLength:64,
          maxLengthMsg: "Maximum length of User is 64 characters.",
      }
    },
    passwd: {
      desc: 'The password associated with the username for authenticating the connection.',
      validation:{
          maxLength:64,
          maxLengthMsg: "Maximum length of Password is 64 characters.",
      }
    },
    rets_user_agent: {
      desc: 'Rets user agent.',
      validation:{
          maxLength:64,
          maxLengthMsg: "Maximum length of Password is 64 characters.",
      }
    },
    rets_user_agent_pwd: {
      desc: 'Rets user agent password.',
      validation:{
          maxLength:64,
          maxLengthMsg: "Maximum length of Password is 64 characters.",
      }
    },
    is_API: {
      desc: 'Indicates whether the API is active or inactive.',
      validation:{
          
      }
    },
    client_id: {
      desc: 'A unique identifier for the client using the MLS API.',
      validation:{
          maxLength:64,
          maxLengthMsg: "Maximum length of Client ID is 64 characters.",
      }
    },
    client_secret: {
      desc: 'A secret key associated with the Client ID.',
      validation:{
          maxLength:64,
          maxLengthMsg: "Maximum length of Client Secret is 64 characters.",
      }
    },
    server_token: {
      desc: 'A token provided by the server for authenticating requests from the client to the MLS API.',
      validation:{
          maxLength:64,
          maxLengthMsg: "Maximum length of Server Token is 64 characters.",
      }
    },
    browser_token: {
      desc: 'A token used to authenticate browser-based requests to the MLS system.',
      validation:{}
    },
    rets_version: {
      desc: 'The version of the RETS',
      validation:{
          maxLength:64,
          maxLengthMsg: "Maximum length of Rets version is 64 characters.",
      }
    },
    format: {
      desc: 'Format',
      validation:{
          maxLength:64,
          maxLengthMsg: "Maximum length of Format is 64 characters.",
      }
    },
    disclaimer_short: {
      desc: 'A short disclaimer that is displayed to users.',
      validation:{
          maxLength:255,
          maxLengthMsg: "Maximum length of Short disclaimer is 255 characters.",
      }
    },
    disclaimer_big: {
      desc: 'A more detailed or extended version of the disclaimer.',
      validation:{}
    },
    disclaimer_icon: {
      desc: 'An icon or image associated with the disclaimer.',
      validation:{
          maxLength:255,
          maxLengthMsg: "Maximum length of Disclaimer Icon is 255 characters.",
      }
    },
    is_pic_url_supported: {
      desc: 'Indicates whether Picture URL supported or not.',
      validation:{
        
      }
    },
    active: {
      desc: 'Indicates whether the market is active or inactive.',
      validation:{
       
      }
    },
    prop_data_download: {
      desc: 'Indicates whether property data download is enabled or not.',
      validation:{
        maxLength:64,
        maxLengthMsg: "Maximum length of property data download is 64 characters.",
      }
    },
    prop_last_run_date: {
      desc: 'The date and time when the property data download process was last executed.',
      validation : {
        maxLength:64,
        maxLengthMsg: "Maximum length of property last run date is 64 characters.",
      }
    }, 
    prop_last_record_date: {
      desc: 'The date when the most recent property data record was added or updated.',
      validation : {
        maxLength:32,
        maxLengthMsg: "Maximum length of property last record data is 32 characters.",
      }
    }, 
    id_last_run_date: {
      desc: 'The date and time when the ID-related data process was last executed.',
      validation : {
        maxLength:32,
        maxLengthMsg: "Maximum length of id last run date is 32 characters.",
      }
    }, 
    id_last_record_date: {
      desc: 'The date when the most recent ID-related data record was added or updated.',
      validation : {
        maxLength:32,
        maxLengthMsg: "Maximum length of id last record date is 32 characters.",
      }
    }, 
    prop_data_job_running: {
      desc: 'Indicates whether a property data job is currently running.',
      validation : {
        maxLength:4,
        maxLengthMsg: "Maximum length of property data job running is 4 characters.",
      }
    }, 
    prop_id_job_running: {
      desc: 'Indicates whether the property ID job is currently running.',
      validation : {
        maxLength:4,
        maxLengthMsg: "Maximum length of property id job running is 4 characters.",
      }
    },
    agent_data_download: {
      desc: 'Indicates whether agent data download is enabled or not.',
      validation : {
        maxLength:16,
        maxLengthMsg: "Maximum length of agent data download is 16 characters.",
      }
    },
    agent_last_run_date: {
      desc: 'The date and time when the agent data download process was last executed.',
      validation : {
        maxLength:32,
        maxLengthMsg: "Maximum length of agent last run date is 32 characters.",
      }
    },   
    office_data_download: {
      desc: 'Indicates whether office data download is enabled or not.',
      validation : {
        maxLength:16,
        maxLengthMsg: "Maximum length of office data download is 16 characters.",
      }
    },
    office_last_run_date: {
      desc: 'The date and time when the office last run date process was last executed.',
      validation : {
        maxLength:32,
        maxLengthMsg: "Maximum length of office last run date is 32 characters.",
      }
    },
    pic_data_download: {
      desc: 'Indicates whether picture data download is enabled or not.',
      validation : {
        maxLength:16,
        maxLengthMsg: "Maximum length of picture data download is 16 characters.",
      }
    }, 
    pic_last_run_datetime: {
      desc: 'The date and time when the picture data download process was last executed.',
      validation : {}
    }, 
    pic_data_job_running: {
      desc: 'Indicates whether the picture data job is currently running or not.',
      validation : {
        maxLength:4,
        maxLengthMsg: "Maximum length of picture data job running is 4 characters.",
      }
    },
    log_last_update_date: {
      desc: 'The date and time when the system log was last updated.',
      validation : {}
    },
    data_last_sync_success: {
      desc: 'Indicates the last successful data synchronization.',
      validation : {
        maxLength:4,
        maxLengthMsg: "Maximum length of data last sync success is 4 characters.",
      }
    },
    id_last_sync_success: {
      desc: 'The ID of the last successful synchronization event.',
      validation : {
        maxLength:4,
        maxLengthMsg: "Maximum length of id last sync success is 4 characters.",
      }
    },
    id_srun_total_count: {
      desc: 'The total count of synchronization runs for the ID data.',
      validation : {}
    },
    id_srun_cur_count: {
      desc: 'The current count of ongoing or completed synchronization runs for the ID data.',
      validation : {}
    },
    token_url: {
      desc: "Token URL for accessing the MLS system's API.",
      validation : {}
    },
    token_expire_time: {
      desc: 'The expiration time of the authentication token.',
      validation : {}
    }
  };

const  RetsMlsProviderVirtualFieldMeta: EntityMetaCRUDTypeDefinition = {
  fr_user_favourite_mlsp_id: {
    desc: `MLSP ID of the user favourite property.`,
    validation: {}
  },
  fr_search_by_addr_mlsp_id: {
    desc: `MLSP ID of the trigger search by address.`,
    validation: {}
  },
  fr_search_by_city_mlsp_id: {
    desc: `MLSP ID of the trigger search by city.`,
    validation: {}
  },
  fr_search_by_subdivision_mlsp_id: {
    desc: `MLSP ID of the trigger search by subdivision.`,
    validation: {}
  },
  fr_search_by_zipcode_mlsp_id: {
    desc: `MLSP ID of the trigger search by zipcode.`,
    validation: {}
  },
  fr_search_by_mls_mlsp_id: {
    desc: `MLSP ID of the trigger search by mls.`,
    validation: {}
  },
  fr_rets_listing_id: {
    desc: `Rets listing ID of the trigger search by mls.`,
    validation: {}
  },
  fr_rets_lis_addi_info_id: {
    desc: `Rets listing additional info ID of the trigger search by mls.`,
    validation: {}
  },
  fr_rets_list_agent_id: {
    desc: `Rets listing agent id of the trigger search by mls.`,
    validation: {}
  },
  fr_rets_list_office_id: {
    desc: `Rets listing office id of the trigger search by mls.`,
    validation: {}
  },
  fr_rets_list_open_house_id: {
    desc: `Rets listing open house id of the trigger search by mls.`,
    validation: {}
  },
  fr_rets_list_photos_id: {
    desc: `Rets listing photos id of the trigger search by mls.`,
    validation: {}
  },
  fr_rets_list_room_id: {
    desc: `Rets listing room id of the trigger search by mls.`,
    validation: {}
  },
  fr_rets_list_unit_id: {
    desc: `Rets listing unit id of the trigger search by mls.`,
    validation: {}
  },
  fr_rets_list_virtual_tours_id: {
    desc: `Rets listing virtual tour id of the trigger search by mls.`,
    validation: {}
  },
}

export const RetsMlsProviderEntityMeta = {...RetsMlsProviderEntityFieldMeta, ...RetsMlsProviderVirtualFieldMeta};
const meta = RetsMlsProviderEntityMeta; // need to use in this file down the line

@ObjectType({ isAbstract: true })
@Directive('@key(fields: "id")')
@Entity({
  name: 'rets_mls_provider',
  engine: 'InnoDB',
})
export class RetsMlsProviderEntity implements EntityCRUDTypeDefinition {

    static colprefix: string = 'mlsp_';
    static uploaddir: string = 'rets-mls-provider';
    
    static metaname: string = (RetsMlsProviderEntity.name).replace(EntitySuffix, '');
    static metadesc: string = 'Provide MLS provider of rets listing.';

    @Field(() => Int, {nullable: true, description: meta.id.desc})
    @PrimaryGeneratedColumn({
      name: `${RetsMlsProviderEntity.colprefix}id`, 
      type: 'int', 
      unsigned: true, 
      primaryKeyConstraintName: 'PRIMARY',
    })
    id?: number;

    @Field(() => String, {nullable: true, description: meta.market_name.desc})
    @Column({
      name: `${RetsMlsProviderEntity.colprefix}market_name`, 
      type: 'varchar', 
      length: meta.market_name.validation.maxLength, 
      collation: 'utf8mb4_general_ci',
    })
    @IsNotEmpty()
    @Index(`${InIndexPrefix}${RetsMlsProviderEntity.colprefix}market_name`, { unique: false })
    @MaxLength(meta.market_name.validation.maxLength as number, {message: meta.market_name.validation.maxLengthMsg})
    market_name?: string;

    @Field(() => String, {nullable: true, description: meta.market_title.desc})
    @Column({
      name: `${RetsMlsProviderEntity.colprefix}market_title`, 
      type: 'varchar', 
      length: meta.market_title.validation.maxLength, 
      collation: 'utf8mb4_general_ci',
    })
    @IsOptional()
    @Index(`${InIndexPrefix}${RetsMlsProviderEntity.colprefix}market_title`, { unique: false })
    @MaxLength(meta.market_title.validation.maxLength as number, {message: meta.market_title.validation.maxLengthMsg})
    market_title?: string;

    @Field(() => YesNoEnum, {nullable: true, description: meta.market_active.desc})
    @Column({
      name: `${RetsMlsProviderEntity.colprefix}market_active`, 
      type: 'varchar', 
      collation: 'utf8mb4_general_ci',
      comment: `(Yes => YES, No => NO )`,
      default: YesNoEnum.YES, 
    })
    @IsNotEmpty()
    @Index(`${InIndexPrefix}${RetsMlsProviderEntity.colprefix}market_active`, { unique: false })
    market_active?: number;

    @Field(() => String, {nullable: true, description: meta.host.desc})
    @Column({
      name: `${RetsMlsProviderEntity.colprefix}host`, 
      type: 'varchar', 
      length: meta.host.validation.maxLength, 
      collation: 'utf8mb4_general_ci',
    })
    @IsNotEmpty()
    @MaxLength(meta.host.validation.maxLength as number, {message: meta.host.validation.maxLengthMsg})
    host?: string;

    @Field(() => String, {nullable: true, description: meta.user.desc})
    @Column({
      name: `${RetsMlsProviderEntity.colprefix}user`, 
      type: 'varchar', 
      length: meta.user.validation.maxLength, 
      collation: 'utf8mb4_general_ci',
    })
    @IsNotEmpty()
    @Index(`${InIndexPrefix}${RetsMlsProviderEntity.colprefix}user`, { unique: false })
    @MaxLength(meta.user.validation.maxLength as number, {message: meta.user.validation.maxLengthMsg})
    user?: string;

    @Field(() => String, {nullable: true, description: meta.passwd.desc})
    @Column({
      name: `${RetsMlsProviderEntity.colprefix}passwd`, 
      type: 'varchar', 
      length: meta.passwd.validation.maxLength, 
      collation: 'utf8mb4_general_ci',
    })
    @IsNotEmpty()
    @MaxLength(meta.passwd.validation.maxLength as number, {message: meta.passwd.validation.maxLengthMsg})
    passwd?: string;

    @Field(() => String, {nullable: true, description: meta.rets_user_agent.desc})
    @Column({
      name: `${RetsMlsProviderEntity.colprefix}rets_user_agent`, 
      type: 'varchar', 
      length: meta.rets_user_agent.validation.maxLength, 
      collation: 'utf8mb4_general_ci',
    })
    @IsNotEmpty()
    @Index(`${InIndexPrefix}${RetsMlsProviderEntity.colprefix}rets_user_agent`, { unique: false })
    @MaxLength(meta.rets_user_agent.validation.maxLength as number, {message: meta.rets_user_agent.validation.maxLengthMsg})
    rets_user_agent?: string;

    @Field(() => String, {nullable: true, description: meta.rets_user_agent_pwd.desc})
    @Column({
      name: `${RetsMlsProviderEntity.colprefix}rets_user_agent_pwd`, 
      type: 'varchar', 
      length: meta.rets_user_agent_pwd.validation.maxLength, 
      collation: 'utf8mb4_general_ci',
    })
    @IsOptional()
    @MaxLength(meta.rets_user_agent_pwd.validation.maxLength as number, {message: meta.rets_user_agent_pwd.validation.maxLengthMsg})
    rets_user_agent_pwd?: string;

    @Field(() => YesNoEnum, {nullable: true, description: meta.is_API.desc})
    @Column({
      name: `${RetsMlsProviderEntity.colprefix}is_API`, 
      type: 'varchar', 
      collation: 'utf8mb4_general_ci',
      comment: `(Yes => YES, No => NO )`,
      default: YesNoEnum.NO, 
    })
    @IsNotEmpty()
    @Index(`${InIndexPrefix}${RetsMlsProviderEntity.colprefix}is_API`, { unique: false })
    is_API?: number;

    @Field(() => String, {nullable: true, description: meta.client_id.desc})
    @Column({
      name: `${RetsMlsProviderEntity.colprefix}client_id`, 
      type: 'varchar', 
      length: meta.client_id.validation.maxLength, 
      collation: 'utf8mb4_general_ci',
    })
    @IsOptional()
    @Index(`${InIndexPrefix}${RetsMlsProviderEntity.colprefix}client_id`, { unique: false })
    @MaxLength(meta.client_id.validation.maxLength as number, {message: meta.client_id.validation.maxLengthMsg})
    client_id?: string;

    @Field(() => String, {nullable: true, description: meta.client_secret.desc})
    @Column({
      name: `${RetsMlsProviderEntity.colprefix}client_secret`, 
      type: 'varchar', 
      length: meta.client_secret.validation.maxLength, 
      collation: 'utf8mb4_general_ci',
    })
    @IsOptional()
    @Index(`${InIndexPrefix}${RetsMlsProviderEntity.colprefix}client_secret`, { unique: false })
    @MaxLength(meta.client_secret.validation.maxLength as number, {message: meta.client_secret.validation.maxLengthMsg})
    client_secret?: string;

    @Field(() => String, {nullable: true, description: meta.server_token.desc})
    @Column({
      name: `${RetsMlsProviderEntity.colprefix}server_token`, 
      type: 'varchar', 
      length: meta.server_token.validation.maxLength, 
      collation: 'utf8mb4_general_ci',
    })
    @IsOptional()
    @Index(`${InIndexPrefix}${RetsMlsProviderEntity.colprefix}server_token`, { unique: false })
    @MaxLength(meta.server_token.validation.maxLength as number, {message: meta.server_token.validation.maxLengthMsg})
    server_token?: string;

    @Field(() => String, {nullable: true, description: meta.browser_token.desc})
    @Column({
      name: `${RetsMlsProviderEntity.colprefix}browser_token`, 
      type: 'varchar', 
      length: meta.browser_token.validation.maxLength, 
      collation: 'utf8mb4_general_ci',
    })
    @IsOptional()
    @MaxLength(meta.browser_token.validation.maxLength as number, {message: meta.browser_token.validation.maxLengthMsg})
    browser_token?: string;

    @Field(() => String, {nullable: true, description: meta.rets_version.desc})
    @Column({
      name: `${RetsMlsProviderEntity.colprefix}rets_version`, 
      type: 'varchar', 
      length: meta.rets_version.validation.maxLength, 
      collation: 'utf8mb4_general_ci',
    })
    @IsNotEmpty()
    @MaxLength(meta.rets_version.validation.maxLength as number, {message: meta.rets_version.validation.maxLengthMsg})
    rets_version?: string;

    @Field(() => String, {nullable: true, description: meta.format.desc})
    @Column({
      name: `${RetsMlsProviderEntity.colprefix}format`, 
      type: 'varchar', 
      length: meta.format.validation.maxLength, 
      collation: 'utf8mb4_general_ci',
    })
    @IsNotEmpty()
    @MaxLength(meta.format.validation.maxLength as number, {message: meta.format.validation.maxLengthMsg})
    format?: string;

    @Field(() => String, {nullable: true, description: meta.disclaimer_short.desc})
    @Column({
      name: `${RetsMlsProviderEntity.colprefix}disclaimer_short`, 
      type: 'varchar', 
      length: meta.disclaimer_short.validation.maxLength, 
      collation: 'utf8mb4_general_ci',
    })
    @IsOptional()
    @MaxLength(meta.disclaimer_short.validation.maxLength as number, {message: meta.disclaimer_short.validation.maxLengthMsg})
    disclaimer_short?: string;
    
    @Field(() => String, {nullable: true, description: meta.disclaimer_big.desc})
    @Column({
      name: `${RetsMlsProviderEntity.colprefix}disclaimer_big`, 
      type: 'varchar', 
      length: meta.disclaimer_big.validation.maxLength, 
      collation: 'utf8mb4_general_ci',
    })
    @IsOptional()
    @MaxLength(meta.disclaimer_big.validation.maxLength as number, {message: meta.disclaimer_big.validation.maxLengthMsg})
    disclaimer_big?: string;

    @Field(() => String, {nullable: true, description: meta.disclaimer_icon.desc})
    @Column({
      name: `${RetsMlsProviderEntity.colprefix}disclaimer_icon`, 
      type: 'varchar', 
      length: meta.disclaimer_icon.validation.maxLength, 
      collation: 'utf8mb4_general_ci',
    })
    @IsOptional()
    @MaxLength(meta.disclaimer_icon.validation.maxLength as number, {message: meta.disclaimer_icon.validation.maxLengthMsg})
    disclaimer_icon?: string;

    @Field(() => YesNoEnum, {nullable: true, description: meta.is_pic_url_supported.desc})
    @Column({
      name: `${RetsMlsProviderEntity.colprefix}is_pic_url_supported`,
      type: 'varchar',
      collation: `utf8mb4_general_ci`,
      comment: `(Yes => YES, No => NO )`,
      default: YesNoEnum.NO,
    })
    @Index(`${InIndexPrefix}${RetsMlsProviderEntity.colprefix}is_pic_url_supported`, { unique: false })
    @IsNotEmpty()
    is_pic_url_supported?: number;

    @Field(() => YesNoEnum, {nullable: true, description: meta.active.desc})
    @Column({
      name: `${RetsMlsProviderEntity.colprefix}active`,
      type: 'varchar',
      collation: `utf8mb4_general_ci`,
      comment: `(Yes => YES, No => NO )`,
      default: YesNoEnum.YES,
    })
    @Index(`${InIndexPrefix}${RetsMlsProviderEntity.colprefix}active`, { unique: false })
    @IsNotEmpty()
    active?: number;

    @Field(() => String, {nullable: true, description: meta.prop_data_download.desc})
    @Column({
      name: `${RetsMlsProviderEntity.colprefix}prop_data_download`,
      type: 'varchar',
      collation: `utf8mb4_general_ci`
    })
    @IsNotEmpty()
    @MaxLength(meta.prop_data_download.validation.maxLength as number, {message: meta.prop_data_download.validation.maxLengthMsg})
    prop_data_download?: string; 

    @Field(() => String, {nullable: true, description: meta.prop_last_run_date.desc})
    @Column({
      name: `${RetsMlsProviderEntity.colprefix}prop_last_run_date`,
      type: 'varchar',
      collation: `utf8mb4_general_ci`
    })
    @IsOptional()
    @Index(`${InIndexPrefix}${RetsMlsProviderEntity.colprefix}prop_last_run_date`, { unique: false })
    @MaxLength(meta.prop_last_run_date.validation.maxLength as number, {message: meta.prop_last_run_date.validation.maxLengthMsg})
    prop_last_run_date?: string;

    @Field(() => String, {nullable: true, description: meta.prop_last_record_date.desc})
    @Column({
      name: `${RetsMlsProviderEntity.colprefix}prop_last_record_date`,
      type: 'varchar',
      collation: `utf8mb4_general_ci`
    })
    @IsOptional()
    @Index(`${InIndexPrefix}${RetsMlsProviderEntity.colprefix}prop_last_record_date`, { unique: false })
    @MaxLength(meta.prop_last_record_date.validation.maxLength as number, {message: meta.prop_last_record_date.validation.maxLengthMsg})
    prop_last_record_date?: string;

    @Field(() => String, {nullable: true, description: meta.id_last_run_date.desc})
    @Column({
      name: `${RetsMlsProviderEntity.colprefix}id_last_run_date`,
      type: 'varchar',
      collation: `utf8mb4_general_ci`
    })
    @IsOptional()
    @Index(`${InIndexPrefix}${RetsMlsProviderEntity.colprefix}id_last_run_date`, { unique: false })
    @MaxLength(meta.id_last_run_date.validation.maxLength as number, {message: meta.id_last_run_date.validation.maxLengthMsg})
    id_last_run_date?: string;

    @Field(() => String, {nullable: true, description: meta.id_last_record_date.desc})
    @Column({
      name: `${RetsMlsProviderEntity.colprefix}id_last_record_date`,
      type: 'varchar',
      collation: `utf8mb4_general_ci`
    })
    @IsOptional()
    @Index(`${InIndexPrefix}${RetsMlsProviderEntity.colprefix}id_last_record_date`, { unique: false })
    @MaxLength(meta.id_last_record_date.validation.maxLength as number, {message: meta.id_last_record_date.validation.maxLengthMsg})
    id_last_record_date?: string;

    /*@Field(() => YesNoEnum, {nullable: true, description: meta.prop_data_job_running.desc})
    @Column({
      name: `${RetsMlsProviderEntity.colprefix}prop_data_job_running`,
      type: 'char',
      collation: `utf8mb4_general_ci`,
      comment: `(Yes => YES, No => NO )`,
      default: YesNoEnum.NO, 
    })
    //@IsNotEmpty()
    prop_data_job_running?: string;

    @Field(() => YesNoEnum, {nullable: true, description: meta.prop_id_job_running.desc})
    @Column({
      name: `${RetsMlsProviderEntity.colprefix}prop_id_job_running`,
      type: 'varchar',
      collation: `utf8mb4_general_ci`,
      comment: `(Yes => YES, No => NO )`,
      default: YesNoEnum.NO, 
    })
    //@IsNotEmpty()
    prop_id_job_running?: string;*/
    
    @Field(() => String, {nullable: true, description: meta.agent_data_download.desc})
    @Column({
      name: `${RetsMlsProviderEntity.colprefix}agent_data_download`,
      type: 'varchar',
      collation: `utf8mb4_general_ci`
    })
    @IsNotEmpty()
    @Index(`${InIndexPrefix}${RetsMlsProviderEntity.colprefix}agent_data_download`, { unique: false })
    @MaxLength(meta.agent_data_download.validation.maxLength as number, {message: meta.agent_data_download.validation.maxLengthMsg})
    agent_data_download?: string;

    @Field(() => String, {nullable: true, description: meta.agent_last_run_date.desc})
    @Column({
      name: `${RetsMlsProviderEntity.colprefix}agent_last_run_date`,
      type: 'varchar',
      collation: `utf8mb4_general_ci`
    })
    @IsOptional()
    @Index(`${InIndexPrefix}${RetsMlsProviderEntity.colprefix}agent_last_run_date`, { unique: false })
    @MaxLength(meta.agent_last_run_date.validation.maxLength as number, {message: meta.agent_last_run_date.validation.maxLengthMsg})
    agent_last_run_date?: string;

    @Field(() => String, {nullable: true, description: meta.office_data_download.desc})
    @Column({
      name: `${RetsMlsProviderEntity.colprefix}office_data_download`,
      type: 'varchar',
      collation: `utf8mb4_general_ci`
    })
    @IsNotEmpty()
    @Index(`${InIndexPrefix}${RetsMlsProviderEntity.colprefix}office_data_download`, { unique: false })
    @MaxLength(meta.office_data_download.validation.maxLength as number, {message: meta.office_data_download.validation.maxLengthMsg})
    office_data_download?: string;

    @Field(() => String, {nullable: true, description: meta.office_last_run_date.desc})
    @Column({
      name: `${RetsMlsProviderEntity.colprefix}office_last_run_date`,
      type: 'varchar',
      collation: `utf8mb4_general_ci`
    })
    @IsOptional()
    @Index(`${InIndexPrefix}${RetsMlsProviderEntity.colprefix}office_last_run_date`, { unique: false })
    @MaxLength(meta.office_last_run_date.validation.maxLength as number, {message: meta.office_last_run_date.validation.maxLengthMsg})
    office_last_run_date?: string;

    @Field(() => String, {nullable: true, description: meta.pic_data_download.desc})
    @Column({
      name: `${RetsMlsProviderEntity.colprefix}pic_data_download`,
      type: 'varchar',
      collation: `utf8mb4_general_ci`
    })
    @IsNotEmpty()
    @Index(`${InIndexPrefix}${RetsMlsProviderEntity.colprefix}pic_data_download`, { unique: false })
    @MaxLength(meta.pic_data_download.validation.maxLength as number, {message: meta.pic_data_download.validation.maxLengthMsg})
    pic_data_download?: string;

    @Field(() => DateTime, {nullable: true, description: meta.pic_last_run_datetime.desc})
    @Column({
      name: `${RetsMlsProviderEntity.colprefix}pic_last_run_datetime`,
      type: 'datetime',
    })
    @IsOptional()
    pic_last_run_datetime?: Date;

    /*@Field(() => YesNoEnum, {nullable: true, description: meta.pic_data_job_running.desc})
    @Column({
      name: `${RetsMlsProviderEntity.colprefix}pic_data_job_running`,
      type: 'varchar',
      collation: `utf8mb4_general_ci`,
      comment: `(Yes => YES, No => NO )`,
      default: YesNoEnum.NO, 
    })
    //@IsNotEmpty()
    pic_data_job_running?: string;

    @Field(() => DateTime, {nullable: true, description: meta.log_last_update_date.desc})
    @Column({
      name: `${RetsMlsProviderEntity.colprefix}log_last_update_date`,
      type: 'datetime',
      collation: `utf8mb4_general_ci`
    })
    @IsOptional()
    log_last_update_date?: Date;

    @Field(() => YesNoEnum, {nullable: true, description: meta.data_last_sync_success.desc})
    @Column({
      name: `${RetsMlsProviderEntity.colprefix}data_last_sync_success`,
      type: 'char',
      collation: `utf8mb4_general_ci`,
      comment: `(Yes => YES, No => NO )`,
      default: YesNoEnum.YES, 
    })
    //@IsNotEmpty()
    data_last_sync_success?: string;

    @Field(() => YesNoEnum, {nullable: true, description: meta.id_last_sync_success.desc})
    @Column({
      name: `${RetsMlsProviderEntity.colprefix}id_last_sync_success`,
      type: 'char',
      collation: `utf8mb4_general_ci`,
      comment: `(Yes => YES, No => NO )`,
      default: YesNoEnum.YES, 
    })
    //@IsNotEmpty()
    id_last_sync_success?: string;

    @Field(() => Int, {nullable: true, description: meta.id_srun_total_count.desc})
    @Column({
      name: `${RetsMlsProviderEntity.colprefix}id_srun_total_count`,
      type: 'int',
      unsigned: true, 
      default: 0, 
    })
    //@IsNotEmpty()
    id_srun_total_count?: number;

    @Field(() => Int, {nullable: true, description: meta.id_srun_cur_count.desc})
    @Column({
      name: `${RetsMlsProviderEntity.colprefix}id_srun_cur_count`,
      type: 'int',
      unsigned: true, 
      default: 0, 
    })
    //@IsNotEmpty()
    id_srun_cur_count?: number;*/

    @Field(() => String, {nullable: true, description: meta.token_url.desc})
    @Column({
      name: `${RetsMlsProviderEntity.colprefix}token_url`,
      type: 'text',
      collation: `utf8mb4_general_ci`
    })
    @IsOptional()
    token_url?: string;

    @Field(() => DateTime, {nullable: true, description: meta.token_expire_time.desc})
    @Column({
      name: `${RetsMlsProviderEntity.colprefix}token_expire_time`,
      type: 'datetime',
    })
    @Index(`${InIndexPrefix}${RetsMlsProviderEntity.colprefix}token_expire_time`, { unique: false })
    @IsOptional()
    token_expire_time?: Date;

     // ████ INTERNAL RELATIONS ████████████████████████████████████████████████

    @Field(() => [UserFavouritePropertyEntity], {nullable: true, description: meta.fr_user_favourite_mlsp_id.desc})
    @OneToMany(() => UserFavouritePropertyEntity, (entity: UserFavouritePropertyEntity) => entity.fr_mlsp_id)
    fr_user_favourite_mlsp_id?: UserFavouritePropertyEntity[];

    @Field(() => [ProcessedSearchByAddressEntity], {nullable: true, description: meta.fr_search_by_addr_mlsp_id.desc})
    @OneToMany(() => ProcessedSearchByAddressEntity, (entity: ProcessedSearchByAddressEntity) => entity.fr_mlsp_id)
    fr_search_by_addr_mlsp_id?: ProcessedSearchByAddressEntity[];

    @Field(() => [ProcessedSearchByCityEntity], {nullable: true, description: meta.fr_search_by_city_mlsp_id.desc})
    @OneToMany(() => ProcessedSearchByCityEntity, (entity: ProcessedSearchByCityEntity) => entity.fr_mlsp_id)
    fr_search_by_city_mlsp_id?: ProcessedSearchByCityEntity[];

    @Field(() => [ProcessedSearchBySubdivisionEntity], {nullable: true, description: meta.fr_search_by_subdivision_mlsp_id.desc})
    @OneToMany(() => ProcessedSearchBySubdivisionEntity, (entity: ProcessedSearchBySubdivisionEntity) => entity.fr_mlsp_id)
    fr_search_by_subdivision_mlsp_id?: ProcessedSearchBySubdivisionEntity[]; 

    @Field(() => [ProcessedSearchByZipcodeEntity], {nullable: true, description: meta.fr_search_by_zipcode_mlsp_id.desc})
    @OneToMany(() => ProcessedSearchByZipcodeEntity, (entity: ProcessedSearchByZipcodeEntity) => entity.fr_mlsp_id)
    fr_search_by_zipcode_mlsp_id?: ProcessedSearchByZipcodeEntity[];

    @Field(() => [ProcessedSearchByMlsEntity], {nullable: true, description: meta.fr_search_by_mls_mlsp_id.desc})
    @OneToMany(() => ProcessedSearchByMlsEntity, (entity: ProcessedSearchByMlsEntity) => entity.fr_mlsp_id)
    fr_search_by_mls_mlsp_id?: ProcessedSearchByMlsEntity[]; 

    @Field(() => [RetsListingEntity], {nullable: true, description: meta.fr_rets_listing_id.desc})
    @OneToMany(() => RetsListingEntity, (entity: RetsListingEntity) => entity.fr_mlsp_id)
    fr_rets_listing_id?: RetsListingEntity[]; 

    @Field(() => [RetsListingAdditionalInfoEntity], {nullable: true, description: meta.fr_rets_lis_addi_info_id.desc})
    @OneToMany(() => RetsListingAdditionalInfoEntity, (entity: RetsListingAdditionalInfoEntity) => entity.fr_mlsp_id)
    fr_rets_lis_addi_info_id?: RetsListingAdditionalInfoEntity[]; 

    @Field(() => [RetsListingAgentEntity], {nullable: true, description: meta.fr_rets_list_agent_id.desc})
    @OneToMany(() => RetsListingAgentEntity, (entity: RetsListingAgentEntity) => entity.fr_mlsp_id)
    fr_rets_list_agent_id?: RetsListingAgentEntity[]; 

    @Field(() => [RetsListingOfficeEntity], {nullable: true, description: meta.fr_rets_list_office_id.desc})
    @OneToMany(() => RetsListingOfficeEntity, (entity: RetsListingOfficeEntity) => entity.fr_mlsp_id)
    fr_rets_list_office_id?: RetsListingOfficeEntity[]; 

    @Field(() => [RetsListingOpenHouseEntity], {nullable: true, description: meta.fr_rets_list_open_house_id.desc})
    @OneToMany(() => RetsListingOpenHouseEntity, (entity: RetsListingOpenHouseEntity) => entity.fr_mlsp_id)
    fr_rets_list_open_house_id?: RetsListingOpenHouseEntity[]; 

    @Field(() => [RetsListingPhotosEntity], {nullable: true, description: meta.fr_rets_list_photos_id.desc})
    @OneToMany(() => RetsListingPhotosEntity, (entity: RetsListingPhotosEntity) => entity.fr_mlsp_id)
    fr_rets_list_photos_id?: RetsListingPhotosEntity[]; 
    
    @Field(() => [RetsListingRoomEntity], {nullable: true, description: meta.fr_rets_list_room_id.desc})
    @OneToMany(() => RetsListingRoomEntity, (entity: RetsListingRoomEntity) => entity.fr_mlsp_id)
    fr_rets_list_room_id?: RetsListingRoomEntity[];

    @Field(() => [RetsListingUnitEntity], {nullable: true, description: meta.fr_rets_list_unit_id.desc})
    @OneToMany(() => RetsListingUnitEntity, (entity: RetsListingUnitEntity) => entity.fr_mlsp_id)
    fr_rets_list_unit_id?: RetsListingUnitEntity[];

    @Field(() => [RetsListingVirtualToursEntity], {nullable: true, description: meta.fr_rets_list_virtual_tours_id.desc})
    @OneToMany(() => RetsListingVirtualToursEntity, (entity: RetsListingVirtualToursEntity) => entity.fr_mlsp_id)
    fr_rets_list_virtual_tours_id?: RetsListingVirtualToursEntity[];
}

 
