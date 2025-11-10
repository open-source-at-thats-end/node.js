import { EntityMetaCRUDTypeDefinition, EntityCRUDTypeDefinition, DateTime, EntitySuffix, InIndexPrefix, UnIndexPrefix  } from "@libs/library-app";
import { IsEmail, IsJSON, IsMobilePhone, IsNotEmpty, IsOptional, MaxLength, MinLength, ValidateIf, IsInt } from "class-validator";
import { Column, CreateDateColumn, DeleteDateColumn, Entity, Index, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn, Unique } from "typeorm";
import { Directive, Field, Float, Int, ObjectType } from "@nestjs/graphql";
import { LeadDetermineAsEnum } from "../lead.enum";

const  CrawlerLeadEntityFieldMeta: EntityMetaCRUDTypeDefinition = {
    lead_id: {
      desc: `Unique ID of the lead, auto generated.`,
      validation: {}
    },
    u_id: {
      desc: `User ID related to the lead.`,
      validation: {}
    },
    busns_id: {
      desc: `Business ID related to the lead.`,
      validation: {}
    },
    u_fname: {
      desc: `User's first name.`,
      validation: {
        maxLength: 100,
        maxLengthMsg: `Maximum length of user first name is 100 characters.`
      }
    },
    u_lname: {
      desc: `User's last name.`,
      validation: {
        maxLength: 100,
        maxLengthMsg: `Maximum length of user last name is 100 characters.`
      }
    },
    u_mname: {
      desc: `User's middle name.`,
      validation: {
        maxLength: 100,
        maxLengthMsg: `Maximum length of user middle name is 100 characters.`
      }
    },
    u_connsrc_id: {
      desc: `Connection source ID.`,
      validation: {
        maxLength: 128,
        maxLengthMsg: `Maximum length of connection source id is 128 characters.`
      }
    },
    u_primary_email: {
      desc: `User's primary email.`,
      validation: {
        maxLength: 255,
        maxLengthMsg: `Maximum length of user primary email is 255 characters.`
      }
    },
    u_primary_mobile: {
      desc: `User's primary mobile number.`,
      validation: {
        maxLength: 32,
        maxLengthMsg: `Maximum length of user primary mobile is 32 characters.`
      }
    },
    u_primary_mobile_cc: {
      desc: `User's primary mobile country code.`,
      validation: {
        maxLength: 8,
        maxLengthMsg: `Maximum length of user primary mobile cc is 8 characters.`
      }
    },
    u_whatsapp: {
      desc: `User's WhatsApp number.`,
      validation: {
        maxLength: 32,
        maxLengthMsg: `Maximum length of user whatsapp is 32 characters.`
      }
    },
    u_whatsapp_cc: {
      desc: `User's WhatsApp country code.`,
      validation: {
        maxLength: 8,
        maxLengthMsg: `Maximum length of user whatsapp cc is 8 characters.`
      }
    },
    u_pemail_verified: {
      desc: `Primary email verification status.`,
      validation: {}
    },
    u_pmobile_verified: {
      desc: `Primary mobile verification status.`,
      validation: {}
    },
    u_verified: {
      desc: `Overall verification status.`,
      validation: {}
    },
    u_suspended: {
      desc: `User suspension status.`,
      validation: {}
    },
    upinfo_gender: {
      desc: `User gender info.`,
      validation: {
        maxLength: 16,
        maxLengthMsg: `Maximum length of user gender is 16 characters.`
      }
    },
    upinfo_website_url: {
      desc: `User website URL.`,
      validation: {}
    },
    upinfo_facebook_profile: {
      desc: `User Facebook profile URL.`,
      validation: {}
    },
    upinfo_instagram_profile: {
      desc: `User Instagram profile URL.`,
      validation: {}
    },
    upinfo_linkedin_profile: {
      desc: `User LinkedIn profile URL.`,
      validation: {}
    },
    upinfo_youtube_profile: {
      desc: `User YouTube profile URL.`,
      validation: {}
    },
    upinfo_x_profile: {
      desc: `User X (Twitter) profile URL.`,
      validation: {}
    },
    upinfo_tiktok_profile: {
      desc: `User TikTok profile URL.`,
      validation: {}
    },
    upinfo_pinterest_profile: {
      desc: `User Pinterest profile URL.`,
      validation: {}
    },
    uaddr_title: {
      desc: `Address title.`,
      validation: {
        maxLength: 100,
        maxLengthMsg: `Maximum length of address title is 100 characters.`
      }
    },
    uaddr_address: {
      desc: `User address.`,
      validation: {}
    },
    uaddr_country: {
      desc: `User country.`,
      validation: {
        maxLength: 128,
        maxLengthMsg: `Maximum length of user country is 128 characters.`
      }
    },
    uaddr_state: {
      desc: `User state.`,
      validation: {
        maxLength: 128,
        maxLengthMsg: `Maximum length of user state is 128 characters.`
      }
    },
    uaddr_city: {
      desc: `User city.`,
      validation: {
        maxLength: 128,
        maxLengthMsg: `Maximum length of user city is 128 characters.`
      }
    },
    uaddr_postal_zip_code: {
      desc: `Postal or ZIP code.`,
      validation: {
        maxLength: 16,
        maxLengthMsg: `Maximum length of zipcode is 16 characters.`
      }
    },
    ucorp_company_name: {
      desc: `User's company name.`,
      validation: {}
    },
    ucorp_email: {
      desc: `User company email.`,
      validation: {
        maxLength: 255,
        maxLengthMsg: `Maximum length of email is 255 characters.`
      }
    },
    ucorp_mobile: {
      desc: `User company mobile number.`,
      validation: {
        maxLength: 32,
        maxLengthMsg: `Maximum length of mobile is 32 characters.`
      }
    },
    ucorp_mobile_cc: {
      desc: `User company mobile country code.`,
      validation: {
        maxLength: 8,
        maxLengthMsg: `Maximum length of mobile cc is 8 characters.`
      }
    },
    ucorp_website: {
      desc: `User company website.`,
      validation: {}
    },
    ucorp_address: {
      desc: `User corporate address.`,
      validation: {
      }
    },
    ucorp_city: {
      desc: `User corporate city.`,
      validation: {
        maxLength: 128,
        maxLengthMsg: `Maximum length of user corporate city is 128 characters.`
      }
    },
    ucorp_state: {
      desc: `User corporate state.`,
      validation: {
        maxLength: 128,
        maxLengthMsg: `Maximum length of user corporate state is 128 characters.`
      }
    },
    ucorp_country: {
      desc: `User corporate country.`,
      validation: {
        maxLength: 128,
        maxLengthMsg: `Maximum length of user corporate country is 128 characters.`
      }
    },
    ucorp_postal_zip_code: {
      desc: `User corporate postal zip code.`,
      validation: {
        maxLength: 16,
        maxLengthMsg: `Maximum length of user corporate postal zip code is 128 characters.`
      }
    },
    busns_connsrc_id: {
      desc: `Business connection source ID.`,
      validation: {
        maxLength: 16,
        maxLengthMsg: `Maximum length of business connection source is 16 characters.`
      }
    },
    busns_buspricat_id: {
      desc: `Business pricing category ID.`,
      validation: {
        maxLength: 128,
        maxLengthMsg: `Maximum length of business category is 128 characters.`
      }
    },
    busns_busseccat_id_1: {
      desc: `Business sector category ID 1.`,
      validation: {
        maxLength: 128,
        maxLengthMsg: `Maximum length of business category 1 is 128 characters.`
      }
    },
    busns_busseccat_id_2: {
      desc: `Business sector category ID 2.`,
      validation: {
        maxLength: 128,
        maxLengthMsg: `Maximum length of business category 2 is 128 characters.`
      }
    },
    busns_busseccat_id_3: {
      desc: `Business sector category ID 3.`,
      validation: {
        maxLength: 128,
        maxLengthMsg: `Maximum length of business category 3 is 128 characters.`
      }
    },
    busns_busseccat_id_4: {
      desc: `Business sector category ID 4.`,
      validation: {
        maxLength: 128,
        maxLengthMsg: `Maximum length of business category 4 is 128 characters.`
      }
    },
    busns_busseccat_id_5: {
      desc: `Business sector category ID 5.`,
      validation: {
        maxLength: 128,
        maxLengthMsg: `Maximum length of business category 5 is 128 characters.`
      }
    },
    busns_busseccat_id_6: {
      desc: `Business sector category ID 6.`,
      validation: {
        maxLength: 128,
        maxLengthMsg: `Maximum length of business category 6 is 128 characters.`
      }
    },
    busns_busseccat_id_7: {
      desc: `Business sector category ID 7.`,
      validation: {
        maxLength: 128,
        maxLengthMsg: `Maximum length of business category 7 is 128 characters.`
      }
    },
    busns_busseccat_id_8: {
      desc: `Business sector category ID 8.`,
      validation: {
        maxLength: 128,
        maxLengthMsg: `Maximum length of business category 8 is 128 characters.`
      }
    },
    busns_busseccat_id_9: {
      desc: `Business sector category ID 9.`,
      validation: {
        maxLength: 128,
        maxLengthMsg: `Maximum length of business category 9 is 128 characters.`
      }
    },
    busns_name: {
      desc: `Business name.`,
      validation: {
        maxLength: 255,
        maxLengthMsg: `Maximum length of business name is 255 characters.`
      }
    },
    busns_address: {
      desc: `Business address.`,
      validation: {}
    },
    busns_country: {
      desc: `Business country.`,
      validation: {
        maxLength: 128,
        maxLengthMsg: `Maximum length of business country is 128 characters.`
      }
    },
    busns_state: {
      desc: `Business state.`,
      validation: {
        maxLength: 128,
        maxLengthMsg: `Maximum length of business state is 128 characters.`
      }
    },
    busns_city: {
      desc: `Business city.`,
      validation: {
        maxLength: 128,
        maxLengthMsg: `Maximum length of business city is 128 characters.`
      }
    },
    busns_zipcode: {
      desc: `Business ZIP code.`,
      validation: {
        maxLength: 16,
        maxLengthMsg: `Maximum length of business zipcode is 16 characters.`
      }
    },
    busns_toll_free_number: {
      desc: `Business toll-free number.`,
      validation: {
        maxLength: 32,
        maxLengthMsg: `Maximum length of business toll free number is 32 characters.`
      }
    },
    busns_mobile: {
      desc: `Business mobile number.`,
      validation: {
        maxLength: 32,
        maxLengthMsg: `Maximum length of business mobile is 32 characters.`
      }
    },
    busns_mobile_cc: {
      desc: `Business mobile country code.`,
      validation: {
        maxLength: 8,
        maxLengthMsg: `Maximum length of business category cc is 8 characters.`
      }
    },
    busns_whatsapp: {
      desc: `Business WhatsApp number.`,
      validation: {
        maxLength: 32,
        maxLengthMsg: `Maximum length of business whatsapp is 32 characters.`
      }
    },
    busns_whatsapp_cc: {
      desc: `Business WhatsApp country code.`,
      validation: {
        maxLength: 8,
        maxLengthMsg: `Maximum length of business whatsapp cc is 8 characters.`
      }
    },
    busns_email: {
      desc: `Business email address.`,
      validation: {
        maxLength: 255,
        maxLengthMsg: `Maximum length of business email is 255 characters.`
      }
    },
    busns_google_my_business_url: {
      desc: `Google My Business URL.`,
      validation: {}
    },
    busns_google_map_url: {
      desc: `Google Map URL.`,
      validation: {}
    },
    busns_google_review_url: {
      desc: `Google Review URL.`,
      validation: {}
    },
    busns_location_latitude: {
      desc: `Business location latitude.`,
      validation: {
        maxLength: 32,
        maxLengthMsg: `Maximum length of business location latitude is 32 characters.`
      }
    },
    busns_location_longitude: {
      desc: `Business location longitude.`,
      validation: {
        maxLength: 32,
        maxLengthMsg: `Maximum length of business location longitude is 32 characters.`
      }
    },
    busns_website_url: {
      desc: `Business website URL.`,
      validation: {}
    },
    busns_linkedin_profile: {
      desc: `Business LinkedIn profile.`,
      validation: {}
    },
    busns_facebook_profile: {
      desc: `Business Facebook profile.`,
      validation: {}
    },
    busns_instagram_profile: {
      desc: `Business Instagram profile.`,
      validation: {}
    },
    busns_youtube_profile: {
      desc: `Business YouTube profile.`,
      validation: {}
    },
    busns_x_profile: {
      desc: `Business X profile.`,
      validation: {}
    },
    busns_tiktok_profile: {
      desc: `Business TikTok profile.`,
      validation: {}
    },
    busns_pinterest_profile: {
      desc: `Business Pinterest profile.`,
      validation: {}
    },
    busns_registered: {
      desc: `Business registration datetime.`,
      validation: {}
    },
    busns_initial_findings: {
      desc: `Initial business findings.`,
      validation: {}
    },
    busns_competitor_findings: {
      desc: `Business competitor findings.`,
      validation: {}
    },
    lead_ref_type: {
      desc: `Reference type for the lead.`,
      validation: {
        maxLength: 50,
        maxLengthMsg: `Maximum length of lead ref type is 50 characters.`
      }
    },
    lead_ref_id: {
      desc: `Reference ID for the lead.`,
      validation: {}
    },
    lead_preferred_contact_method: {
      desc: `Preferred contact method.`,
      validation: {
        maxLength: 50,
        maxLengthMsg: `Maximum length of lead preference contact method is 50 characters.`
      }
    },
    lead_concern_issue: {
      desc: `Concern or issue of the lead.`,
      validation: {}
    },
    lead_subject: {
      desc: `Subject of the lead.`,
      validation: {
        maxLength: 255,
        maxLengthMsg: `Maximum length of lead subject is 255 characters.`
      }
    },
    lead_comment: {
      desc: `Comment on the lead.`,
      validation: {}
    },
    lead_initial_findings: {
      desc: `Initial findings of the lead.`,
      validation: {}
    },
    lead_first_incoming_message_dt: {
      desc: `First incoming message date.`,
      validation: {}
    },
    lead_created: {
      desc: `Lead creation datetime.`,
      validation: {}
    },
    lead_updated: {
      desc: `Lead update datetime.`,
      validation: {}
    },
    lead_determined_as: {
      desc: `Lead determined as.`,
      validation: {
        maxLength: 16,
        maxLengthMsg: `Maximum length of lead determined as is 16 characters.`
      }
    },
    crawler_updated: {
      desc: `Crawler update datetime.`,
      validation: {}
    },
    crawler_stage: {
      desc: `Stage of the crawler lead.`,
      validation: {
        maxLength: 64,
        maxLengthMsg: `Maximum length of crawler stage is 64 characters.`
      }
    }

};
const  CrawlerLeadVirtualFieldMeta: EntityMetaCRUDTypeDefinition = {

} 

export const CrawlerLeadEntityMeta = {...CrawlerLeadEntityFieldMeta, ...CrawlerLeadVirtualFieldMeta};
const meta = CrawlerLeadEntityMeta; // need to use in this file down the line

@ObjectType({ isAbstract: true })
@Directive('@key(fields: "lead_id")')
@Entity({
  name: 'crawler_lead',
  engine: 'InnoDB',
})

export class CrawlerLeadEntity implements EntityCRUDTypeDefinition {

    static colprefix: string = ``;
    static uploaddir: string = `crawler-lead`;

    static metaname: string = 'CrawlerLead';
    static metadesc: string = 'Stores leads collected by crawler and enrichment pipeline.';

    @Field(() => Int, {nullable: true, description: meta.lead_id.desc})
    @PrimaryGeneratedColumn({
      name: `lead_id`, 
      type: `int`, 
      unsigned: true, 
      primaryKeyConstraintName: `PRIMARY`,
    })
    lead_id?: number;

    @Field(() => Int, {nullable: true, description: meta.u_id.desc})
    @Column({
      name: `u_id`,
      type: `int`,
      unsigned: true,
      nullable: true,
    })
    @IsInt()
    @IsOptional()
    u_id?: number;

    @Field(() => Int, { nullable: true, description: meta.busns_id.desc })
    @Column({ name: `busns_id`, 
      type: 'int', 
      unsigned: true, 
      nullable: true 
    })
    @IsInt()
    @IsOptional()
    busns_id?: number;

    @Field(() => String, { nullable: true, description: meta.u_fname.desc })
    @Column({ 
      name: `u_fname`, 
      type: 'varchar', 
      length: meta.u_fname.validation.maxLength,
      collation: 'utf8mb4_general_ci', 
      nullable: true 
    })
    @MaxLength(meta.u_fname.validation.maxLength as number, {message: meta.u_fname.validation.maxLengthMsg})
    @IsOptional()
    u_fname?: string;

    @Field(() => String, { nullable: true, description: meta.u_lname.desc })
    @Column({ 
      name: `u_lname`, 
      type: 'varchar', 
      length: meta.u_lname.validation.maxLength,
      collation: 'utf8mb4_general_ci', 
      nullable: true 
    })
    @MaxLength(meta.u_lname.validation.maxLength as number, {message: meta.u_lname.validation.maxLengthMsg})
    @IsOptional()
    u_lname?: string;

    @Field(() => String, { nullable: true, description: meta.u_mname.desc })
    @Column({ 
      name: `u_mname`, 
      type: 'varchar', 
      length: meta.u_mname.validation.maxLength,
      collation: 'utf8mb4_general_ci', 
      nullable: true 
    })
    @MaxLength(meta.u_mname.validation.maxLength as number, {message: meta.u_mname.validation.maxLengthMsg})
    @IsOptional()
    u_mname?: string;

    @Field(() => String, { nullable: true, description: meta.u_connsrc_id.desc })
    @Column({ 
      name: `u_connsrc_id`, 
      type: 'varchar', 
      length: meta.u_connsrc_id.validation.maxLength, 
      collation: 'utf8mb4_general_ci', 
      nullable: true 
    })
    @MaxLength(meta.u_connsrc_id.validation.maxLength as number, {message: meta.u_connsrc_id.validation.maxLengthMsg})
    @IsOptional()
    u_connsrc_id?: string;

    @Field(() => String, { nullable: true, description: meta.u_primary_email.desc })
    @Column({ 
      name: `u_primary_email`, 
      type: 'varchar', 
      length: meta.u_primary_email.validation.maxLength, 
      collation: 'utf8mb4_general_ci', 
      nullable: true 
    })
    @Index(`${UnIndexPrefix}u_primary_email`, { unique: true })
    @MaxLength(meta.u_primary_email.validation.maxLength as number, {message: meta.u_primary_email.validation.maxLengthMsg})
    @IsEmail()
    @IsOptional()
    u_primary_email?: string;

    @Field(() => String, { nullable: true, description: meta.u_primary_mobile.desc })
    @Column({ 
      name: `u_primary_mobile`, 
      type: 'varchar', 
      length: meta.u_primary_mobile.validation.maxLength, 
      collation: 'utf8mb4_general_ci', 
      nullable: true 
    })
    @Index(`${UnIndexPrefix}u_primary_mobile`, { unique: true })
    @MaxLength(meta.u_primary_mobile.validation.maxLength as number, {message: meta.u_primary_mobile.validation.maxLengthMsg})
    @IsOptional()
    u_primary_mobile?: string;

    @Field(() => String, { nullable: true, description: meta.u_primary_mobile_cc.desc })
    @Column({ 
      name: `u_primary_mobile_cc`, 
      type: 'varchar', 
      length: meta.u_primary_mobile_cc.validation.maxLength, 
      collation: 'utf8mb4_general_ci', 
      nullable: true 
    })
    @MaxLength(meta.u_primary_mobile_cc.validation.maxLength as number, {message: meta.u_primary_mobile_cc.validation.maxLengthMsg})
    @IsOptional()
    u_primary_mobile_cc?: string;

    @Field(() => String, { nullable: true, description: meta.u_whatsapp.desc })
    @Column({ 
      name: `u_whatsapp`, 
      type: 'varchar', 
      length: meta.u_whatsapp.validation.maxLength, 
      collation: 'utf8mb4_general_ci', 
      nullable: true 
    })
    @MaxLength(meta.u_whatsapp.validation.maxLength as number, {message: meta.u_whatsapp.validation.maxLengthMsg})
    @IsOptional()
    u_whatsapp?: string;

    @Field(() => String, { nullable: true, description: meta.u_whatsapp_cc.desc })
    @Column({ 
      name: `u_whatsapp_cc`, 
      type: 'varchar', 
      length: meta.u_whatsapp_cc.validation.maxLength, 
      collation: 'utf8mb4_general_ci', 
      nullable: true 
    })
    @MaxLength(meta.u_whatsapp_cc.validation.maxLength as number, {message: meta.u_whatsapp_cc.validation.maxLengthMsg})
    @IsOptional()
    u_whatsapp_cc?: string;

    @Field(() => Int, { nullable: true, description: meta.u_pemail_verified.desc })
    @Column({ 
      name: `u_pemail_verified`, 
      type: 'tinyint', 
      width: 1, 
      default: 0 
    })
    @IsOptional()
    u_pemail_verified?: number;

    @Field(() => Int, { nullable: true, description: meta.u_pmobile_verified.desc })
    @Column({ 
      name: `u_pmobile_verified`, 
      type: 'tinyint', 
      width: 1, 
      default: 0 
    })
    @IsOptional()
    u_pmobile_verified?: number;

    @Field(() => Int, { nullable: true, description: meta.u_verified.desc  })
    @Column({ 
      name: `u_verified`, 
      type: 'tinyint', 
      width: 1, 
      default: 0 
    })
    @IsOptional()
    u_verified?: number;

    @Field(() => Int, { nullable: true, description: meta.u_suspended.desc  })
    @Column({ 
      name: `u_suspended`, 
      type: 'tinyint', 
      width: 1, 
      default: 0 
    })
    @IsOptional()
    u_suspended?: number;

    @Field(() => String, { nullable: true, description: meta.upinfo_gender.desc  })
    @Column({ 
      name: `upinfo_gender`, 
      type: 'varchar', 
      length: meta.upinfo_gender.validation.maxLength, 
      collation: 'utf8mb4_general_ci', 
      nullable: true 
    })
    @MaxLength(meta.upinfo_gender.validation.maxLength as number, {message: meta.upinfo_gender.validation.maxLengthMsg})
    @IsOptional()
    upinfo_gender?: string;

    @Field(() => String, { nullable: true, description: meta.upinfo_website_url.desc }) 
    @Column({ 
      name: `upinfo_website_url`, 
      type: 'text', 
      collation: 'utf8mb4_general_ci', 
      nullable: true 
    }) 
    @IsOptional()
    upinfo_website_url?: string;

    @Field(() => String, { nullable: true, description: meta.upinfo_facebook_profile.desc }) 
    @Column({ 
      name: `upinfo_facebook_profile`, 
      type: 'text', 
      collation: 'utf8mb4_general_ci', 
      nullable: true 
    })
    @IsOptional()
    upinfo_facebook_profile?: string;

    @Field(() => String, { nullable: true, description: meta.upinfo_instagram_profile.desc }) 
    @Column({ 
      name: `upinfo_instagram_profile`, 
      type: 'text', 
      collation: 'utf8mb4_general_ci', 
      nullable: true 
    }) 
    @IsOptional()
    upinfo_instagram_profile?: string;

    @Field(() => String, { nullable: true,  description: meta.upinfo_linkedin_profile.desc}) 
    @Column({ 
      name: `upinfo_linkedin_profile`, 
      type: 'text', 
      collation: 'utf8mb4_general_ci', 
      nullable: true 
    }) 
    @IsOptional()
    upinfo_linkedin_profile?: string;

    @Field(() => String, { nullable: true, description: meta.upinfo_youtube_profile.desc }) 
    @Column({ 
      name: `upinfo_youtube_profile`, 
      type: 'text', 
      collation: 'utf8mb4_general_ci', 
      nullable: true 
    }) 
    @IsOptional()
    upinfo_youtube_profile?: string;

    @Field(() => String, { nullable: true, description: meta.upinfo_x_profile.desc }) 
    @Column({ 
      name: `upinfo_x_profile`, 
      type: 'text', 
      collation: 'utf8mb4_general_ci', 
      nullable: true 
    }) 
    @IsOptional()
    upinfo_x_profile?: string;

    @Field(() => String, { nullable: true, description: meta.upinfo_tiktok_profile.desc }) 
    @Column({ 
      name: `upinfo_tiktok_profile`, 
      type: 'text', 
      collation: 'utf8mb4_general_ci', 
      nullable: true 
    }) 
    @IsOptional()
    upinfo_tiktok_profile?: string;

    @Field(() => String, { nullable: true, description: meta.upinfo_pinterest_profile.desc }) 
    @Column({ 
      name: `upinfo_pinterest_profile`, 
      type: 'text', 
      collation: 'utf8mb4_general_ci', 
      nullable: true 
    }) 
    @IsOptional()
    upinfo_pinterest_profile?: string;

    @Field(() => String, { nullable: true, description: meta.uaddr_title.desc })
    @Column({ 
      name: `uaddr_title`, 
      type: 'varchar', 
      length: meta.uaddr_title.validation.maxLength, 
      collation: 'utf8mb4_general_ci', 
      nullable: true 
    })
    @MaxLength(meta.uaddr_title.validation.maxLength as number, {message: meta.uaddr_title.validation.maxLengthMsg})
    @IsOptional()
    uaddr_title?: string;

    @Field(() => String, { nullable: true, description: meta.uaddr_address.desc })
    @Column({ 
      name: `uaddr_address`, 
      type: 'text', 
      collation: 'utf8mb4_general_ci', 
      nullable: true 
    })
    @IsOptional()
    uaddr_address?: string;

    @Field(() => String, { nullable: true, description: meta.uaddr_country.desc }) 
    @Column({ 
      name: `uaddr_country`, 
      type: 'varchar', 
      length: meta.uaddr_country.validation.maxLength, 
      collation: 'utf8mb4_general_ci', 
      nullable: true 
    }) 
    @MaxLength(meta.uaddr_country.validation.maxLength as number, {message: meta.uaddr_country.validation.maxLengthMsg})
    @IsOptional()
    uaddr_country?: string;

    @Field(() => String, { nullable: true, description: meta.uaddr_state.desc }) 
    @Column({ 
      name: `uaddr_state`,   
      type: 'varchar', 
      length: meta.uaddr_state.validation.maxLength, 
      collation: 'utf8mb4_general_ci', 
      nullable: true 
    }) 
    @MaxLength(meta.uaddr_state.validation.maxLength as number, {message: meta.uaddr_state.validation.maxLengthMsg})
    @IsOptional()
    uaddr_state?: string;

    @Field(() => String, { nullable: true, description: meta.uaddr_city.desc }) 
    @Column({ 
      name: `uaddr_city`,    
      type: 'varchar', 
      length: meta.uaddr_city.validation.maxLength, 
      collation: 'utf8mb4_general_ci', 
      nullable: true 
    }) 
    @MaxLength(meta.uaddr_city.validation.maxLength as number, {message: meta.uaddr_city.validation.maxLengthMsg})
    @IsOptional()
    uaddr_city?: string;

    @Field(() => String, { nullable: true, description: meta.uaddr_postal_zip_code.desc })
    @Column({ 
      name: `uaddr_postal_zip_code`, 
      type: 'varchar', 
      length: meta.uaddr_postal_zip_code.validation.maxLength, 
      collation: 'utf8mb4_general_ci', 
      nullable: true 
    })
    @MaxLength(meta.uaddr_postal_zip_code.validation.maxLength as number, {message: meta.uaddr_postal_zip_code.validation.maxLengthMsg})
    @IsOptional()
    uaddr_postal_zip_code?: string;

    @Field(() => String, { nullable: true, description: meta.ucorp_company_name.desc }) 
    @Column({ 
      name: `ucorp_company_name`, 
      type: 'text', 
      collation: 'utf8mb4_general_ci', 
      nullable: true 
    }) 
    @IsOptional()
    ucorp_company_name?: string;

    @Field(() => String, { nullable: true, description: meta.ucorp_email.desc }) 
    @Column({ 
      name: `ucorp_email`, 
      type: 'varchar', 
      length: meta.ucorp_email.validation.maxLength, 
      collation: 'utf8mb4_general_ci', 
      nullable: true 
    })
    @Index(`${UnIndexPrefix}ucorp_email`, { unique: true })
    @MaxLength(meta.ucorp_email.validation.maxLength as number, {message: meta.ucorp_email.validation.maxLengthMsg})
    @IsOptional() 
    @IsEmail()  
    ucorp_email?: string;

    @Field(() => String, { nullable: true, description: meta.ucorp_mobile.desc }) 
    @Column({ 
      name: `ucorp_mobile`, 
      type: 'varchar', 
      length: meta.ucorp_mobile.validation.maxLength, 
      collation: 'utf8mb4_general_ci', 
      nullable: true 
    })
    @Index(`${UnIndexPrefix}ucorp_mobile`, { unique: true })
    @MaxLength(meta.ucorp_mobile.validation.maxLength as number, {message: meta.ucorp_mobile.validation.maxLengthMsg})
    @IsOptional()
    ucorp_mobile?: string;

    @Field(() => String, { nullable: true, description: meta.ucorp_mobile_cc.desc }) 
    @Column({ 
      name: `ucorp_mobile_cc`, 
      type: 'varchar', 
      length: meta.ucorp_mobile_cc.validation.maxLength, 
      collation: 'utf8mb4_general_ci', 
      nullable: true 
    }) 
    @MaxLength(meta.ucorp_mobile_cc.validation.maxLength as number, {message: meta.ucorp_mobile_cc.validation.maxLengthMsg})
    @IsOptional()
    ucorp_mobile_cc?: string;

    @Field(() => String, { nullable: true, description: meta.ucorp_website.desc }) 
    @Column({ 
      name: `ucorp_website`, 
      type: 'text', 
      collation: 'utf8mb4_general_ci', 
      nullable: true 
    }) 
    @IsOptional()
    ucorp_website?: string;

    @Field(() => String, { nullable: true, description: meta.ucorp_address .desc }) 
    @Column({ 
      name: `ucorp_address`, 
      type: 'text', 
      collation: 'utf8mb4_general_ci', 
      nullable: true 
    }) 
    @IsOptional()
    ucorp_address?: string;

    @Field(() => String, { nullable: true, description: meta.ucorp_city.desc }) 
    @Column({ 
      name: `ucorp_city`, 
      type: 'varchar', 
      length: meta.ucorp_city.validation.maxLength, 
      collation: 'utf8mb4_general_ci', 
      nullable: true 
    }) 
    @MaxLength(meta.ucorp_city.validation.maxLength as number, {message: meta.ucorp_city.validation.maxLengthMsg})
    @IsOptional()
    ucorp_city?: string;

    @Field(() => String, { nullable: true, description: meta.ucorp_state.desc }) 
    @Column({ 
      name: `ucorp_state`, 
      type: 'varchar', 
      length: meta.ucorp_state.validation.maxLength, 
      collation: 'utf8mb4_general_ci', 
      nullable: true 
    }) 
    @MaxLength(meta.ucorp_state.validation.maxLength as number, {message: meta.ucorp_state.validation.maxLengthMsg})
    @IsOptional()
    ucorp_state?: string;

    @Field(() => String, { nullable: true, description: meta.ucorp_country.desc }) 
    @Column({ 
      name: `ucorp_country`, 
      type: 'varchar', 
      length: meta.ucorp_country.validation.maxLength, 
      collation: 'utf8mb4_general_ci', 
      nullable: true 
    }) 
    @MaxLength(meta.ucorp_country.validation.maxLength as number, {message: meta.ucorp_country.validation.maxLengthMsg})
    @IsOptional()
    ucorp_country?: string;

    @Field(() => String, { nullable: true, description: meta.ucorp_postal_zip_code.desc }) 
    @Column({ 
      name: `ucorp_postal_zip_code`, 
      type: 'varchar', 
      length: meta.ucorp_postal_zip_code.validation.maxLength, 
      collation: 'utf8mb4_general_ci', 
      nullable: true 
    }) 
    @MaxLength(meta.ucorp_postal_zip_code.validation.maxLength as number, {message: meta.ucorp_postal_zip_code.validation.maxLengthMsg})
    @IsOptional()
    ucorp_postal_zip_code?: string;

    @Field(() => String, { nullable: true, description: meta.busns_connsrc_id.desc }) 
    @Column({ 
      name: `busns_connsrc_id`, 
      type: 'varchar', 
      length: meta.busns_connsrc_id.validation.maxLength, 
      collation: 'utf8mb4_general_ci', 
      nullable: true 
    }) 
    @MaxLength(meta.busns_connsrc_id.validation.maxLength as number, {message: meta.busns_connsrc_id.validation.maxLengthMsg})
    @IsOptional()
    busns_connsrc_id?: string;

    @Field(() => String, { nullable: true, description: meta.busns_buspricat_id.desc }) 
    @Column({ 
      name: `busns_buspricat_id`, 
      type: 'varchar', 
      length: meta.busns_buspricat_id.validation.maxLength, 
      collation: 'utf8mb4_general_ci', 
      nullable: true 
    }) 
    @MaxLength(meta.busns_buspricat_id.validation.maxLength as number, {message: meta.busns_buspricat_id.validation.maxLengthMsg})
    @IsOptional()
    busns_buspricat_id?: string;

    @Field(() => String, { nullable: true, description: meta.busns_busseccat_id_1.desc }) 
    @Column({ 
      name: `busns_busseccat_id_1`, 
      type: 'varchar', 
      length: meta.busns_busseccat_id_1.validation.maxLength, 
      collation: 'utf8mb4_general_ci', 
      nullable: true 
    }) 
    @MaxLength(meta.busns_busseccat_id_1.validation.maxLength as number, {message: meta.busns_busseccat_id_1.validation.maxLengthMsg})
    @IsOptional()
    busns_busseccat_id_1?: string;

    @Field(() => String, { nullable: true, description: meta.busns_busseccat_id_2.desc }) 
    @Column({ 
      name: `busns_busseccat_id_2`, 
      type: 'varchar', 
      length: meta.busns_busseccat_id_2.validation.maxLength, 
      collation: 'utf8mb4_general_ci', 
      nullable: true 
    }) 
    @MaxLength(meta.busns_busseccat_id_2.validation.maxLength as number, {message: meta.busns_busseccat_id_2.validation.maxLengthMsg})
    @IsOptional()
    busns_busseccat_id_2?: string;

    @Field(() => String, { nullable: true, description: meta.busns_busseccat_id_3.desc }) 
    @Column({ 
      name: `busns_busseccat_id_3`, 
      type: 'varchar', 
      length: meta.busns_busseccat_id_3.validation.maxLength, 
      collation: 'utf8mb4_general_ci', 
      nullable: true 
    }) 
    @MaxLength(meta.busns_busseccat_id_3.validation.maxLength as number, {message: meta.busns_busseccat_id_3.validation.maxLengthMsg})
    @IsOptional()
    busns_busseccat_id_3?: string;

    @Field(() => String, { nullable: true, description: meta.busns_busseccat_id_4.desc }) 
    @Column({ 
      name: `busns_busseccat_id_4`, 
      type: 'varchar', 
      length: meta.busns_busseccat_id_4.validation.maxLength, 
      collation: 'utf8mb4_general_ci', 
      nullable: true 
    }) 
    @MaxLength(meta.busns_busseccat_id_4.validation.maxLength as number, {message: meta.busns_busseccat_id_4.validation.maxLengthMsg})
    @IsOptional()
    busns_busseccat_id_4?: string;

    @Field(() => String, { nullable: true, description: meta.busns_busseccat_id_5.desc }) 
    @Column({ 
      name: `busns_busseccat_id_5`, 
      type: 'varchar', 
      length: meta.busns_busseccat_id_5.validation.maxLength, 
      collation: 'utf8mb4_general_ci', 
      nullable: true 
    }) 
    @MaxLength(meta.busns_busseccat_id_5.validation.maxLength as number, {message: meta.busns_busseccat_id_5.validation.maxLengthMsg})
    @IsOptional()
    busns_busseccat_id_5?: string;

    @Field(() => String, { nullable: true, description: meta.busns_busseccat_id_6.desc }) 
    @Column({ 
      name: `busns_busseccat_id_6`, 
      type: 'varchar', 
      length: meta.busns_busseccat_id_6.validation.maxLength, 
      collation: 'utf8mb4_general_ci', 
      nullable: true 
    }) 
    @MaxLength(meta.busns_busseccat_id_6.validation.maxLength as number, {message: meta.busns_busseccat_id_6.validation.maxLengthMsg})
    @IsOptional()
    busns_busseccat_id_6?: string;

    @Field(() => String, { nullable: true, description: meta.busns_busseccat_id_7.desc }) 
    @Column({ 
      name: `busns_busseccat_id_7`, 
      type: 'varchar', 
      length: meta.busns_busseccat_id_7.validation.maxLength, 
      collation: 'utf8mb4_general_ci', 
      nullable: true 
    }) 
    @MaxLength(meta.busns_busseccat_id_7.validation.maxLength as number, {message: meta.busns_busseccat_id_7.validation.maxLengthMsg})
    @IsOptional()
    busns_busseccat_id_7?: string;

    @Field(() => String, { nullable: true, description: meta.busns_busseccat_id_8.desc }) 
    @Column({ 
      name: `busns_busseccat_id_8`, 
      type: 'varchar', 
      length: meta.busns_busseccat_id_8.validation.maxLength, 
      collation: 'utf8mb4_general_ci', 
      nullable: true 
    }) 
    @MaxLength(meta.busns_busseccat_id_8.validation.maxLength as number, {message: meta.busns_busseccat_id_8.validation.maxLengthMsg})
    @IsOptional()
    busns_busseccat_id_8?: string;

    @Field(() => String, { nullable: true, description: meta.busns_busseccat_id_9.desc }) 
    @Column({ 
      name: `busns_busseccat_id_9`, 
      type: 'varchar', 
      length: meta.busns_busseccat_id_9.validation.maxLength, 
      collation: 'utf8mb4_general_ci', 
      nullable: true 
    }) 
    @MaxLength(meta.busns_busseccat_id_9.validation.maxLength as number, {message: meta.busns_busseccat_id_9.validation.maxLengthMsg})
    @IsOptional()
    busns_busseccat_id_9?: string;

    @Field(() => String, { nullable: true, description: meta.busns_name.desc })
    @Column({ 
      name: `busns_name`, 
      type: 'varchar', 
      length: meta.busns_name.validation.maxLength, 
      collation: 'utf8mb4_general_ci', 
      nullable: true 
    })
    @MaxLength(meta.busns_name.validation.maxLength as number, {message: meta.busns_name.validation.maxLengthMsg})
    @Index('idx_busns_name')
    @IsOptional()
    busns_name?: string;

    @Field(() => String, { nullable: true, description: meta.busns_address.desc }) 
    @Column({ 
      name: `busns_address`, 
      type: 'text', 
      collation: 'utf8mb4_general_ci', 
      nullable: true 
    })
    @IsOptional() 
    busns_address?: string;

    @Field(() => String, { nullable: true, description: meta.busns_country.desc }) 
    @Column({ 
      name: `busns_country`, 
      type: 'varchar', 
      length: meta.busns_country.validation.maxLength, 
      collation: 'utf8mb4_general_ci', 
      nullable: true 
    }) 
    @MaxLength(meta.busns_country.validation.maxLength as number, {message: meta.busns_country.validation.maxLengthMsg})
    @IsOptional()
    busns_country?: string;

    @Field(() => String, { nullable: true, description: meta.busns_state.desc }) 
    @Column({ 
      name: `busns_state`,   
      type: 'varchar', 
      length: meta.busns_state.validation.maxLength, 
      collation: 'utf8mb4_general_ci', 
      nullable: true 
    }) 
    @MaxLength(meta.busns_state.validation.maxLength as number, {message: meta.busns_state.validation.maxLengthMsg})
    @IsOptional()
    busns_state?: string;

    @Field(() => String, { nullable: true, description: meta.busns_city.desc }) 
    @Column({ 
      name: `busns_city`,    
      type: 'varchar', 
      length: meta.busns_city.validation.maxLength, 
      collation: 'utf8mb4_general_ci', 
      nullable: true 
    }) 
    @MaxLength(meta.busns_city.validation.maxLength as number, {message: meta.busns_city.validation.maxLengthMsg})
    @IsOptional()
    busns_city?: string;

    @Field(() => String, { nullable: true, description: meta.busns_zipcode.desc })
    @Column({ 
      name: `busns_zipcode`, 
      type: 'varchar', 
      length: meta.busns_zipcode.validation.maxLength, 
      collation: 'utf8mb4_general_ci', 
      nullable: true 
    })
    @MaxLength(meta.busns_zipcode.validation.maxLength as number, {message: meta.busns_zipcode.validation.maxLengthMsg})
    @IsOptional()
    busns_zipcode?: string;

    @Field(() => String, { nullable: true, description: meta.busns_toll_free_number.desc }) 
    @Column({ 
      name: `busns_toll_free_number`, 
      type: 'varchar', 
      length: meta.busns_toll_free_number.validation.maxLength, 
      collation: 'utf8mb4_general_ci', 
      nullable: true 
    }) 
    @MaxLength(meta.busns_toll_free_number.validation.maxLength as number, {message: meta.busns_toll_free_number.validation.maxLengthMsg})
    @IsOptional()
    busns_toll_free_number?: string;

    @Field(() => String, { nullable: true, description: meta.busns_mobile.desc }) 
    @Column({ 
      name: `busns_mobile`, 
      type: 'varchar', 
      length: meta.busns_mobile.validation.maxLength, 
      collation: 'utf8mb4_general_ci', 
      nullable: true 
    }) 
    @Index(`${UnIndexPrefix}busns_mobile`, { unique: true })
    @MaxLength(meta.busns_mobile.validation.maxLength as number, {message: meta.busns_mobile.validation.maxLengthMsg})
    @IsOptional()
    busns_mobile?: string;

    @Field(() => String, { nullable: true, description: meta.busns_mobile_cc.desc }) 
    @Column({ 
      name: `busns_mobile_cc`, 
      type: 'varchar', 
      length: meta.busns_mobile_cc.validation.maxLength, 
      collation: 'utf8mb4_general_ci', 
      nullable: true 
    }) 
    @MaxLength(meta.busns_mobile_cc.validation.maxLength as number, {message: meta.busns_mobile_cc.validation.maxLengthMsg})
    @IsOptional()
    busns_mobile_cc?: string;

    @Field(() => String, { nullable: true, description: meta.busns_whatsapp.desc }) 
    @Column({ 
      name: `busns_whatsapp`, 
      type: 'varchar', 
      length: meta.busns_whatsapp.validation.maxLength, 
      collation: 'utf8mb4_general_ci', 
      nullable: true 
    }) 
    @MaxLength(meta.busns_whatsapp.validation.maxLength as number, {message: meta.busns_whatsapp.validation.maxLengthMsg})
    @IsOptional()
    busns_whatsapp?: string;

    @Field(() => String, { nullable: true, description: meta.busns_whatsapp_cc.desc }) 
    @Column({ 
      name: `busns_whatsapp_cc`, 
      type: 'varchar', 
      length: meta.busns_whatsapp_cc.validation.maxLength, 
      collation: 'utf8mb4_general_ci', 
      nullable: true 
    }) 
    @MaxLength(meta.busns_whatsapp_cc.validation.maxLength as number, {message: meta.busns_whatsapp_cc.validation.maxLengthMsg})
    @IsOptional()
    busns_whatsapp_cc?: string;

    @Field(() => String, { nullable: true, description: meta.busns_email.desc }) 
    @Column({ 
      name: `busns_email`, 
      type: 'varchar', 
      length: meta.busns_email.validation.maxLength, 
      collation: 'utf8mb4_general_ci', 
      nullable: true 
    }) 
    @Index(`${UnIndexPrefix}busns_email`, { unique: true })
    @MaxLength(meta.busns_email.validation.maxLength as number, {message: meta.busns_email.validation.maxLengthMsg})
    @IsEmail() 
    @IsOptional() 
    busns_email?: string;

    @Field(() => String, { nullable: true, description: meta.busns_google_my_business_url.desc }) 
    @Column({ 
      name: `busns_google_my_business_url`, 
      type: 'text', 
      collation: 'utf8mb4_general_ci', 
      nullable: true 
    }) 
    busns_google_my_business_url?: string;

    @Field(() => String, { nullable: true, description: meta.busns_google_map_url.desc }) 
    @Column({ 
      name: `busns_google_map_url`, 
      type: 'text', 
      collation: 'utf8mb4_general_ci', 
      nullable: true 
    }) 
    busns_google_map_url?: string;

    @Field(() => String, { nullable: true, description: meta.busns_google_review_url.desc }) 
    @Column({ 
      name: `busns_google_review_url`, 
      type: 'text', 
      collation: 'utf8mb4_general_ci', 
      nullable: true 
    }) 
    busns_google_review_url?: string;

    @Field(() => String, { nullable: true, description: meta.busns_location_latitude.desc }) 
    @Column({ 
      name: `busns_location_latitude`,  
      type: 'varchar', 
      length: meta.busns_location_latitude.validation.maxLength, 
      collation: 'utf8mb4_general_ci', 
      nullable: true 
    }) 
    @MaxLength(meta.busns_location_latitude.validation.maxLength as number, {message: meta.busns_location_latitude.validation.maxLengthMsg})
    @IsOptional() 
    busns_location_latitude?: string;

    @Field(() => String, { nullable: true, description: meta.busns_location_longitude.desc }) 
    @Column({ 
      name: `busns_location_longitude`, 
      type: 'varchar', 
      length: meta.busns_location_longitude.validation.maxLength, 
      collation: 'utf8mb4_general_ci', 
      nullable: true 
    })  
    @MaxLength(meta.busns_location_longitude.validation.maxLength as number, {message: meta.busns_location_longitude.validation.maxLengthMsg})
    @IsOptional()
    busns_location_longitude?: string;

    @Field(() => String, { nullable: true, description: meta.busns_website_url.desc }) 
    @Column({ 
      name: `busns_website_url`,  
      type: 'text', 
      collation: 'utf8mb4_general_ci', 
      nullable: true 
    }) 
    @IsOptional()
    busns_website_url?: string;

    @Field(() => String, { nullable: true, description: meta.busns_linkedin_profile.desc }) 
    @Column({ 
      name: `busns_linkedin_profile`, 
      type: 'text', 
      collation: 'utf8mb4_general_ci', 
      nullable: true 
    }) 
    @IsOptional()
    busns_linkedin_profile?: string;

    @Field(() => String, { nullable: true, description: meta.busns_facebook_profile.desc }) 
    @Column({ 
      name: `busns_facebook_profile`, 
      type: 'text', 
      collation: 'utf8mb4_general_ci', 
      nullable: true 
    }) 
    @IsOptional()
    busns_facebook_profile?: string;
    
    @Field(() => String, { nullable: true, description: meta.busns_instagram_profile.desc }) 
    @Column({ 
      name: `busns_instagram_profile`, 
      type: 'text', 
      collation: 'utf8mb4_general_ci', 
      nullable: true 
    }) 
    @IsOptional()
    busns_instagram_profile?: string;

    @Field(() => String, { nullable: true, description: meta.busns_youtube_profile.desc }) 
    @Column({ 
      name: `busns_youtube_profile`,   
      type: 'text', 
      collation: 'utf8mb4_general_ci', 
      nullable: true 
    }) 
    @IsOptional()
    busns_youtube_profile?: string;

    @Field(() => String, { nullable: true, description: meta.busns_x_profile.desc }) 
    @Column({ 
      name: `busns_x_profile`,         
      type: 'text', 
      collation: 'utf8mb4_general_ci', 
      nullable: true 
    }) 
    @IsOptional()
    busns_x_profile?: string;

    @Field(() => String, { nullable: true, description: meta.busns_tiktok_profile.desc }) 
    @Column({ 
      name: `busns_tiktok_profile`,    
      type: 'text', 
      collation: 'utf8mb4_general_ci', 
      nullable: true 
    }) 
    @IsOptional()
    busns_tiktok_profile?: string;

    @Field(() => String, { nullable: true, description: meta.busns_pinterest_profile.desc }) 
    @Column({ 
      name: `busns_pinterest_profile`, 
      type: 'text', 
      collation: 'utf8mb4_general_ci', 
      nullable: true 
    }) 
    @IsOptional()
    busns_pinterest_profile?: string;

    @Field(() => DateTime, { nullable: true, description: meta.busns_registered.desc })
    @Column({ 
      name: `busns_registered`, 
      type: 'datetime', 
      nullable: true 
    })
    @IsOptional()
    busns_registered?: Date;

    @Field(() => String, { nullable: true, description: meta.busns_initial_findings.desc }) 
    @Column({ 
      name: `busns_initial_findings`,    
      type: 'text', 
      collation: 'utf8mb4_general_ci', 
      nullable: true 
    }) 
    @IsOptional()
    busns_initial_findings?: string;

    @Field(() => String, { nullable: true, description: meta.busns_competitor_findings.desc }) 
    @Column({ 
      name: `busns_competitor_findings`, 
      type: 'text', 
      collation: 'utf8mb4_general_ci', 
      nullable: true 
    }) 
    @IsOptional()
    busns_competitor_findings?: string;

    @Field(() => String, { nullable: true, description: meta.lead_ref_type.desc })
    @Column({ 
      name: `lead_ref_type`, 
      type: 'varchar', 
      length: meta.lead_ref_type.validation.maxLength, 
      collation: 'utf8mb4_general_ci', 
      nullable: true 
    })
    @MaxLength(meta.lead_ref_type.validation.maxLength as number, {message: meta.lead_ref_type.validation.maxLengthMsg})
    @IsOptional()
    lead_ref_type?: string;

    @Field(() => Int, { nullable: true, description: meta.lead_ref_id.desc })
    @Column({ 
      name: `lead_ref_id`, 
      type: 'int', 
      unsigned: true, 
      nullable: true 
    })
    @IsOptional()
    lead_ref_id?: number;

    @Field(() => String, { nullable: true, description: meta.lead_preferred_contact_method.desc })
    @Column({ 
      name: `lead_preferred_contact_method`, 
      type: 'varchar', 
      length: meta.lead_preferred_contact_method.validation.maxLength, 
      collation: 'utf8mb4_general_ci', 
      nullable: true 
    })
    @MaxLength(meta.lead_preferred_contact_method.validation.maxLength as number, {message: meta.lead_preferred_contact_method.validation.maxLengthMsg})
    @IsOptional()
    lead_preferred_contact_method?: string;

    @Field(() => String, { nullable: true, description: meta.lead_concern_issue.desc }) 
    @Column({ 
      name: `lead_concern_issue`,        
      type: 'text', 
      collation: 'utf8mb4_general_ci', 
      nullable: true 
    }) 
    @IsOptional()
    lead_concern_issue?: string;

    @Field(() => String, { nullable: true, description: meta.lead_subject.desc }) 
    @Column({ 
      name: `lead_subject`,              
      type: 'varchar', 
      length: meta.lead_subject.validation.maxLength, 
      collation: 'utf8mb4_general_ci', 
      nullable: true 
    }) 
    @MaxLength(meta.lead_subject.validation.maxLength as number, {message: meta.lead_subject.validation.maxLengthMsg})
    @IsOptional()
    lead_subject?: string;

    @Field(() => String, { nullable: true, description: meta.lead_comment.desc }) 
    @Column({ 
      name: `lead_comment`,              
      type: 'text', 
      collation: 'utf8mb4_general_ci', 
      nullable: true 
    })
    @IsOptional() 
    lead_comment?: string;

    @Field(() => String, { nullable: true, description: meta.lead_initial_findings.desc }) 
    @Column({ 
      name: `lead_initial_findings`,     
      type: 'text', 
      collation: 'utf8mb4_general_ci', 
      nullable: true 
    }) 
    @IsOptional()
    lead_initial_findings?: string;

    @Field(() => DateTime, { nullable: true })
    @Column({ 
      name: `lead_first_incoming_message_dt`, 
      type: 'datetime', 
      nullable: true 
    })
    @IsOptional()
    lead_first_incoming_message_dt?: Date;

    @Field(() => DateTime, { nullable: true, description: meta.lead_created.desc })
    @CreateDateColumn({ 
      name: `lead_created`, 
      type: 'datetime', 
      default: () => 'CURRENT_TIMESTAMP', 
      update: false 
    })
    @IsOptional()
    lead_created?: Date;

    @Field(() => DateTime, { nullable: true, description: meta.lead_updated.desc })
    @UpdateDateColumn({ 
      name: `lead_updated`, 
      type: 'datetime', 
      nullable: true 
    })
    @IsOptional()
    lead_updated?: Date; 

    @Field(() => LeadDetermineAsEnum, { nullable: false, description: meta.lead_determined_as.desc })
    @Column({ 
      name: `lead_determined_as`, 
      type: 'varchar', 
      length: meta.lead_determined_as.validation.maxLength, 
      collation: 'utf8mb4_general_ci', 
      nullable: false 
    })
    @IsOptional()
    @MaxLength(meta.lead_determined_as.validation.maxLength as number, {message: meta.lead_determined_as.validation.maxLengthMsg})
    @Index('lead_determined_as')
    lead_determined_as?: string;

    @Field(() => DateTime, { nullable: true, description: meta.crawler_updated.desc })
    @Column({ 
      name: `crawler_updated`, 
      type: 'datetime', 
      nullable: true 
    })
    @IsOptional()
    crawler_updated?: Date;

    @Field(() => String, { nullable: false, description: meta.crawler_stage.desc })
    @Column({ 
      name: `crawler_stage`, 
      type: 'varchar', 
      length: meta.crawler_stage.validation.maxLength, 
      collation: 'utf8mb4_general_ci', 
      nullable: false 
    })
    @IsNotEmpty()
    @MaxLength(meta.crawler_stage.validation.maxLength as number, {message: meta.crawler_stage.validation.maxLengthMsg})
    @Index('in_crawler_stage')
    crawler_stage?: string;


    // ████ INTERNAL RELATIONS ████████████████████████████████████████████████



    // ████ EXTERNAL RELATIONS ████████████████████████████████████████████████
}