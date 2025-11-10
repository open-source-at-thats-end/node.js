import { EntityMetaCRUDTypeDefinition, EntityCRUDTypeDefinition, DateTime, YesNoEnum, UploadField, EntitySuffix, IsNotEntityField, UploadFileAccessUrlDto, InIndexPrefix, AnyOneRequired, UrlSlugField, UnIndexPrefix  } from "@libs/library-app";
import { IsEmail, IsInt, IsMobilePhone, IsNotEmpty, IsOptional, MaxLength, MinLength, Validate, ValidateIf } from "class-validator";
import { Column, CreateDateColumn, DeleteDateColumn, Entity, Index, OneToMany, OneToOne, PrimaryGeneratedColumn, UpdateDateColumn, Unique, ManyToOne, JoinColumn } from "typeorm";
import { Directive, Field, Int, ObjectType } from "@nestjs/graphql";
import { UserAuthenticationEntity } from "../../user-auth/entities/user.auth.entity";
import { GraphQLEmailAddress } from "graphql-scalars";
import { UserDeviceEntity } from "../../user-device/entities/user.device.entity";
import { UserCorporateInfoEntity } from "../../user-corporate-info/entities/user.corporate.info.entity";
import { UserPersonalInfoEntity } from "../../user-personal-info/entities/user.personal.info.entity";
import { QueueSmsEntity } from "apps/shared-app/src/queue/sms/entities/sms.entity";
import { UserAuthorisationEntity } from "../../user-authorisation/entities/user.authorisation.entity";
import { UserAddressEntity } from "../../user-address/entities/user.address.entity";
import { UserIdentityCardEntity } from "../../user-identity-card/entities/user.identity.card.entity";
import { UserHierarchyEntity } from "../../user-hierarchy/entities/user.hierarchy.entity";
import path from 'path';
import { UserFileEntity } from "../../user-file/entities/user.file.entity";
import { QueueWhatsappEntity } from "apps/shared-app/src/queue/whatsapp/entities/whatsapp.entity";
import { QueueEmailEntity } from "apps/shared-app/src/queue/email/entities/email.entity";
import { LeadEntity } from "apps/shared-app/src/leads/lead/entities/lead.entity";
import { LeadFollowupEntity } from "apps/shared-app/src/leads/followup/entities/lead.followup.entity";
import { NewsLetterUserEntity } from "apps/shared-app/src/newsletters/user/entities/user.entity";
import { NewsLetterEntity } from "apps/shared-app/src/newsletters/newsletter/entities/newsletter.entity";
import { NewsLetterScheduleEntity } from "apps/shared-app/src/newsletters/schedule/entities/schedule.entity";
import { UserNewsLetterSubscriptionEntity } from "apps/shared-app/src/newsletters/user-subscription/entities/user.subscription.entity";
import { UserFavEntity } from "../../user-favourite/user-fav/entities/user.fav.entity";
import { BusinessEntity } from "apps/shared-app/src/businesses/business/entities/business.entity";
import { ConnectionSourceEntity } from "apps/shared-app/src/leads/connection/source/entities/source.entity";
import { CrawlerScheduleEntity } from "apps/shared-app/src/crawler/schedule/entities/schedule.entity";

const UserEntityFieldMeta: EntityMetaCRUDTypeDefinition = {
  id: {
      desc: `Unique ID of the entity, auto generated.`,
      validation: {}
  },
  username: {
      desc: `Username of the user. Required if primary_email or primary_mobile is not provided.`,
      validation:{
        maxLength: 128,
        maxLengthMsg: `Maximum length of username is 128 charachters`,
        minLength: 5,
        minLengthMsg: `Username must be at least 5 characters long, if supplied.`
      }
  },
  url_slug: {
    desc: `Url slug of the user. Set as empty string ("") to generate automatically as per set data and to remove set to null.`,
    validation: {
        maxLength: 255,
        maxLengthMsg: `Maximum length of username is 255 charachters`,
    }
  },
  connsrc_id: {
      desc: `Connection source ID.`,
      validation: {}
  },
  fname: {
    desc: `First name of the user.`,
    validation: {
      maxLength: 32,
      maxLengthMsg: `Maximum length of first name is 32 characters.`,
    }
  },
  lname: {
      desc: `Last name of the user.`,
      validation: {
        maxLength: 32,
        maxLengthMsg: `Maximum length of last name is 32 characters.`,
      }
  },
  mname: {
      desc: `Middle name of the user.`,
      validation: {
        maxLength: 32,
        maxLengthMsg: `Maximum length of middle name is 32 characters.`,
      }
  },
  primary_email: {
      desc: `Primary email of the user. Required if username or primary_mobile is not provided.`,
      validation:{
        isMustBeMsg: `Must be a valid email address.`,
        maxLength: 128,
        maxLengthMsg: `Maximum length of Primary email is 128 characters.`,
      }
  },
  primary_mobile: {
      desc: `Primary mobile of the user. Provide in USA mobile format. Required if username or primary_email is not provided.`,
      validation:{
        isMustBeMsg: `Must be a valid mobile number.`,
        maxLength: 16,
        maxLengthMsg: `Maximum length of Primary email is 16 characters.`,
      }
  },
  primary_mobile_cc: {
      desc: `Primary mobile country code of the user.`, 
      validation:{
        validateIf: `Primary mobile country code is required if primary mobile is provided.`,
        maxLength: 8,
        maxLengthMsg: `User mobile country code must be no more than 8 numbers long.`,
      }
  },
  recovery_email: {
      desc: `Used to reset password.`,
      validation:{
        isMustBeMsg: `Must be a valid email address.`,
        maxLength: 128,
        maxLengthMsg: `Maximum length of Primary email is 128 characters.`,
      }
  },
  recovery_mobile: {
      desc: `Provide in USA mobile format. Used to reset password.`,
      validation:{
        isMustBeMsg: `Must be a valid mobile number.`,
        maxLength: 16,
        maxLengthMsg: `Maximum length of Primary email is 16 characters.`,
      }
  },
  recovery_mobile_cc: {
      desc: `Recovery mobile country code of the user.`,
      validation:{
        validateIf: `Recovery mobile country code is required if recovery mobile is provided.`,
        maxLength: 8,
        maxLengthMsg: `Recovery mobile country code must be no more than 8 numbers long.`,
      }
  },
  whatsapp: {
      desc: `Provide whatsapp of the user.`,
      validation:{
        isMustBeMsg: `Must be a valid mobile number.`,
        maxLength: 16,
        maxLengthMsg: `Maximum length of Primary email is 16 characters.`,
      }
  },
  whatsapp_cc: {
      desc: `Whatsapp country code of the user.`,
      validation:{
        validateIf: `Recovery mobile country code is required if recovery mobile is provided.`,
        maxLength: 8,
        maxLengthMsg: `Recovery mobile country code must be no more than 8 numbers long.`,
      }
  },
  /*signup_source: {
      desc: `Signup source of the user.`,
      validation:{}
  },*/
  has_two_factor_auth: {
      desc: `Flag to indicate if user has two factor authentication.`,
      validation:{}
  },
  pemail_verified: {
      desc: `Flag to indicate if primary email is verified. When primary mobile is verified, date-time will be saved otherwise null to indicate not verified.`,
      validation:{}
  },
  pmobile_verified: {
      desc: `Flag to indicate if primary mobile is verified. When primary mobile is verified, date-time will be saved otherwise null to indicate not verified.`,
      validation:{}
  },
  verified: {
      desc: `Flag to indicate if user is verified. When record is verified, date-time will be saved otherwise null to indicate not verified.`,
      validation:{}
  },
  suspended: {
      desc: `Flag to indicate if user is suspended. When record is suspended, date-time will be saved otherwise null to indicate record is active.`,
      validation:{}
  },
  created: {
      desc: `Date time when user is created.`,
      validation:{}
  },
  updated: {
      desc: `Date time when user is updated.`,
      validation:{}
  },
  deleted: {
    desc: `When record is soft deleted or soft removed, date-time will be saved otherwise null to indicate record is not deleted.`,
    validation:{}
  },
  file_profile_photo: {
    desc: `User profile photo.`,
    validation:{
      validFileFormat: ['jpeg', 'jpg', 'png', 'svg', 'gif'],
      validFileFormatMsg: 'Only jpeg, jpg, png, svg and gif files are allowed.',
      validMimeType: ['image/jpeg', 'image/jpeg', 'image/png', 'image/svg+xml', 'image/gif'],
      maxFileSize: 5 * 1024 * 1024, // 5 mb
      maxFileSizeMsg: 'Maximum file size is 5 MB.',
      maxCount: 1,
      maxCountMsg: 'Only one file is allowed to upload.'
    }
  },
  file_profile_banner: {
      desc: `User profile banner.`,
      validation:{
        validFileFormat: ['jpeg', 'jpg', 'png', 'svg', 'gif'],
        validFileFormatMsg: 'Only jpeg, jpg, png, svg and gif files are allowed.',
        validMimeType: ['image/jpeg', 'image/jpeg', 'image/png', 'image/svg+xml', 'image/gif', 'application/octet-stream'],
        maxFileSize: 10 * 1024 * 1024, // 10 mb
        maxFileSizeMsg: 'Maximum file size is 10 MB.',
        maxCount: 1,
        maxCountMsg: 'Only one file is allowed to upload.'
      }
  },
};
const  UserVirtualFieldMeta: EntityMetaCRUDTypeDefinition = {
    file_profile_photo_url: {
      desc: `User profile photo url.`,
      validation: {}  
    },
    file_profile_banner_url: {
      desc: `User profile banner url.`,
      validation: {}
    },
    fr_user_auth:{
      desc: `User auth info of the user.`,
      validation: {}
    },
    fr_user_devices: {
      desc: `Registered devices of the user.`,
      validation: {}
    },
    fr_user_corporate_infos: {
      desc: `User corporate info of the user.`,
      validation: {}
    },
    fr_user_personal_info:{
      desc: `User personal info of the user.`,
      validation: {}
    },
    fr_queue_sms_from_users:{
      desc: `Queue sms from user of the user.`,
      validation: {}
    },
    fr_queue_sms_to_users:{
      desc: `Queue sms to user of the user.`,
      validation: {}
    },
    fr_user_authorisations:{
      desc: `User authorisations of the user.`,
      validation: {}
    },
    fr_user_addresses:{
      desc: `User address of the user.`,
      validation: {}
    },
    fr_user_identity_cards:{
      desc: `User identity card of the user.`,
      validation: {}
    },
    fr_parent_user_hirarchies:{
      desc: `Parent user hierarchy of the user.`,
      validation: {}
    },
    fr_child_user_hirarchies:{
      desc: `Child user hierarchy of the user.`,
      validation: {}
    },
    fr_user_files: {
      desc: `User files.`,
      validation: {}
    },
    fr_queue_whatsapp_from_users:{
      desc: `Queue whatsapp msg from user of the user.`,
      validation: {}
    },
    fr_queue_whatsapp_to_users:{
      desc: `Queue whatsapp msg to user of the user.`,
      validation: {}
    },
    fr_queue_email_from_users:{
      desc: `Queue email from user of the user.`,
      validation: {}
    },
    fr_queue_email_to_users:{
      desc: `Queue email to user of the user.`,
      validation: {}
    },
    fr_queue_email_created_users:{
      desc: `Queue email u id of the user.`,
      validation: {}
    },
    fr_lead_from_users:{
      desc: `Lead users.`,
      validation: {}
    },
    fr_lead_to_users:{
      desc: `Lead users.`,
      validation: {}
    },
    fr_newsletter_users:{
      desc: `News letter of this userr.`,
      validation: {}
    },
    fr_newsletter_schedule_users:{
      desc: `News letter schedule for this User.`,
      validation: {}
    },
    fr_lead_followup_user:{
      desc: `Lead followup for this user.`,
      validation: {}
    },
    fr_news_letter_user_user:{
      desc: `Newsletter user for this user.`,
      validation: {}
    },
    fr_user_favourite_user:{
      desc: `Favourite user for this user.`,
      validation: {}
    },
    fr_user_favourite_created_user:{
      desc: `Favourite created user for this user.`,
      validation: {}
    },
    fr_user_save_search_user:{
      desc: `Save search user for this user.`,
      validation: {}
    },
    fr_user_save_search_created_user:{
      desc: `Save search created user for this user.`,
      validation: {}
    },
    fr_user_newsletters_subscription:{
      desc: `Newsletter subscription user for this user.`,
      validation: {}
    },
    fr_user_favourites:{
      desc: `User favourites for this user.`,
      validation: {}
    },
    fr_business_user:{
      desc: `Buissness user.`,
      validation: {}
    },
    fr_connection_source: {
      desc: `Connection source for this user.`,
      validation: {}
    },
    fr_crawler_schedule_user:{
      desc: `Crawler schedule user.`,
      validation: {}
    },
}
export const UserEntityMeta = {...UserEntityFieldMeta, ...UserVirtualFieldMeta};
const meta = UserEntityMeta; // need to use in this file down the line

/*
id?: any;
username?: any;
url_slug?: any;
primary_email?: any;
primary_mobile?: any;
primary_mobile_cc?: any;
recovery_email?: any;
recovery_mobile?: any;
recovery_mobile_cc?: any;
signup_source?: any;
has_two_factor_auth?: any;
pemail_verified?: any;
pmobile_verified?: any;
suspended?: any;
created?: any;
updated?: any;
deleted?: any;
file_profile_photo?: any;
file_profile_banner?: any;
*/
 
@ObjectType({ isAbstract: true })
@Directive('@key(fields: "id")') // TODO: SUPERGRAPH_FOREIGN_RELATION step 1 - add directive
@Entity({
  name: 'user',
  engine: 'InnoDB',
})
@Unique(`${UnIndexPrefix}u_primary_mobile`,[`primary_mobile`, `primary_mobile_cc`])
export class UserEntity implements EntityCRUDTypeDefinition {

  static colprefix: string = `u_`;
  static uploaddir: string = `user`;
  static recorddir: string = `{{id}}`;

  static metaname: string = (UserEntity.name).replace(EntitySuffix, '');
  static metadesc: string = `User management module.`;

  
  @Validate(AnyOneRequired, [['username', 'primary_email', 'primary_mobile']],{ message: meta.username.validation.any_one_required })
  any_one_required?: any;

  @Field(() => Int, {nullable: true, description: meta.id.desc})
  @PrimaryGeneratedColumn({
    name: `${UserEntity.colprefix}id`, 
    type: `int`, 
    unsigned: true, 
    primaryKeyConstraintName: `PRIMARY`,
  })
  id?: number;

  @Field(() => String, {nullable: true, description: meta.username.desc})
  @Column({
    name: `${UserEntity.colprefix}username`, 
    type: `varchar`, 
    length: meta.username.validation.maxLength, 
    default: null,
    nullable: true,
    collation: 'utf8mb4_general_ci', 
    comment: `If user want to have custom username or it can be generated from email address or mobile number`
  })
  @IsOptional()
  @ValidateIf((entity) => entity.username !== undefined && entity.username !== null)
  @MinLength(meta.username.validation.minLength as number, {message: meta.username.validation.minLengthMsg})
  @MaxLength(meta.username.validation.maxLength as number, {message: meta.username.validation.maxLengthMsg})
  @Index(`${UnIndexPrefix}${UserEntity.colprefix}username`, { unique: true })
  username?: string;

  @Field(() => String, {nullable: true, description: meta.url_slug.desc})
  @Column({
    name: `${UserEntity.colprefix}url_slug`, 
    type: `varchar`, 
    length: meta.url_slug.validation.maxLength, 
    nullable: true,
    default: null,
    collation: 'utf8mb4_general_ci', 
  })
  @IsOptional()
  @MaxLength(meta.url_slug.validation.maxLength as number, {message: meta.url_slug.validation.maxLengthMsg})
  @Index(`${UnIndexPrefix}${UserEntity.colprefix}url_slug`, { unique: true })
  @UrlSlugField({
    autoGenerateFields: ['fname', 'lname', 'primary_email', 'primary_mobile', 'username'],
  })
  url_slug?: string;

  @Field(() => Int, {nullable: true, description: meta.connsrc_id.desc})
  @Column({
    name: `${UserEntity.colprefix}connsrc_id`, 
    type: `smallint`,
    unsigned: true, 
    comment: `FK (connection_source => connsrc_id) From where user came and get registered`,
  })
  @IsInt()
  @Index(`${InIndexPrefix}${UserEntity.colprefix}connsrc_id`, { unique: false })
  @IsNotEmpty()
  connsrc_id?: number;
  
  @Field(() => String, {nullable: true, description: meta.fname.desc})
  @Column({
    name: `${UserEntity.colprefix}fname`,
    type: `varchar`,
    nullable: true,
    default: null,
    length: meta.fname.validation.maxLength,
    collation: 'utf8mb4_general_ci', 
  })
  @IsOptional()
  @MaxLength(meta.fname.validation.maxLength as number, {message: meta.fname.validation.maxLengthMsg})
  fname?: string;

  @Field(() => String, {nullable: true, description: meta.lname.desc})
  @Column({
    name: `${UserEntity.colprefix}lname`,
    type: `varchar`,
    nullable: true,
    default: null,
    length: meta.lname.validation.maxLength,
    collation: 'utf8mb4_general_ci', 
  })
  @IsOptional()
  @MaxLength(meta.lname.validation.maxLength as number, {message: meta.lname.validation.maxLengthMsg})
  lname?: string;

  @Field(() => String, {nullable: true, description: meta.mname.desc})
  @Column({
    name: `${UserEntity.colprefix}mname`,
    type: `varchar`,
    nullable: true,
    default: null,
    length: meta.mname.validation.maxLength,
    collation: 'utf8mb4_general_ci', 
  })
  @IsOptional()
  @MaxLength(meta.mname.validation.maxLength as number, {message: meta.mname.validation.maxLengthMsg})
  mname?: string;

  @Field(() => String, {nullable: true, description: meta.primary_email.desc})
  @Column({
    name: `${UserEntity.colprefix}primary_email`, 
    type: `varchar`, 
    nullable: true,
    default: null,
    length: meta.primary_email.validation.maxLength,
    collation: 'utf8mb4_general_ci', 
  })
  @Index(`${UnIndexPrefix}${UserEntity.colprefix}primary_email`, { unique: true })
  @IsEmail({}, { message: meta.primary_email.validation.isMustBeMsg })
  @IsOptional()
  @MaxLength(meta.primary_email.validation.maxLength as number, {message: meta.primary_email.validation.maxLengthMsg})
  primary_email?: string;

  @Field(() => String, {nullable: true, description: meta.primary_mobile.desc})
  @Column({
    name: `${UserEntity.colprefix}primary_mobile`, 
    type: `varchar`, 
    nullable: true,
    length: meta.primary_mobile.validation.maxLength,
    default: null,
    collation: 'utf8mb4_general_ci', 
  })
  //@Index(`${UnIndexPrefix}${UserEntity.colprefix}primary_mobile`, { unique: true })
  @IsMobilePhone(`en-US`,{strictMode: false}, { message: meta.primary_mobile.validation.isMustBeMsg })
  @IsOptional()
  @MaxLength(meta.primary_mobile.validation.maxLength as number, {message: meta.primary_mobile.validation.maxLengthMsg})
  primary_mobile?: string;

  @Field(() => String, {nullable: true, description: meta.primary_mobile_cc.desc})
  @Column({
    name: `${UserEntity.colprefix}primary_mobile_cc`, 
    type: `varchar`, 
    length: meta.primary_mobile_cc.validation.maxLength,
    nullable: true,
    default: null,
    collation: 'utf8mb4_general_ci',
    comment:`	FK (geo_country => country_mobile_code)`,
  })
  @ValidateIf((entity) => entity.primary_mobile !== undefined && entity.primary_mobile !== null, { message: meta.primary_mobile_cc.validation.validateIf }) // Only validate if primary_mobile is provided
  @MaxLength(meta.primary_mobile_cc.validation.maxLength as number, { message: meta.primary_mobile_cc.validation.maxLengthMsg })
  @IsNotEmpty({ message: meta.primary_mobile_cc.validation.validateIf })
  //@Index(`${InIndexPrefix}${UserEntity.colprefix}primary_mobile_cc`, { unique: false })
  primary_mobile_cc?: string;

  @Field(() => GraphQLEmailAddress, {nullable: true, description: meta.recovery_email.desc})
  @Column({
    name: `${UserEntity.colprefix}recovery_email`, 
    type: `varchar`, 
    nullable: true,
    length: meta.recovery_email.validation.maxLength,
    collation: 'utf8mb4_general_ci', 
  })
  @IsEmail({}, { message: meta.recovery_email.validation.isMustBeMsg })
  @Index(`${InIndexPrefix}${UserEntity.colprefix}recovery_email`, { unique: false })
  @IsOptional()
  @MaxLength(meta.primary_email.validation.maxLength as number, {message: meta.recovery_email.validation.maxLengthMsg})
  recovery_email?: string;

  @Field(() => String, {nullable: true, description: meta.recovery_mobile.desc})
  @Column({
    name: `${UserEntity.colprefix}recovery_mobile`, 
    type: `varchar`, 
    nullable: true,
    length: meta.recovery_mobile.validation.maxLength,
    default: null,
    collation: 'utf8mb4_general_ci',
  })
  @IsMobilePhone(`en-US`,{strictMode: false}, { message: meta.recovery_mobile.validation.isMustBeMsg })
  @Index(`${InIndexPrefix}${UserEntity.colprefix}recovery_mobile`, { unique: false })
  @IsOptional()
  @MaxLength(meta.recovery_mobile.validation.maxLength as number, {message: meta.recovery_mobile.validation.maxLengthMsg})
  recovery_mobile?: string;

  @Field(() => String, {nullable: true, description: meta.recovery_mobile_cc.desc})
  @Column({
    name: `${UserEntity.colprefix}recovery_mobile_cc`, 
    type: `varchar`, 
    length: meta.recovery_mobile_cc.validation.maxLength,
    nullable: true,
    default: null,
    collation: 'utf8mb4_general_ci',
    comment:`	FK (geo_country => country_mobile_code)`,
  })
  @ValidateIf((entity) => entity.recovery_mobile !== undefined && entity.recovery_mobile !== null, { message: meta.recovery_mobile_cc.validation.validateIf }) // recovery_mobile_cc is required if recovery_mobile is provided
  @MaxLength(meta.recovery_mobile_cc.validation.maxLength as number, { message: meta.recovery_mobile_cc.validation.maxLengthMsg })
  @IsNotEmpty({ message: meta.recovery_mobile_cc.validation.validateIf })
  @Index(`${InIndexPrefix}${UserEntity.colprefix}recovery_mobile_cc`, { unique: false })
  recovery_mobile_cc?: string;

  /*@Field(() => String, {nullable: true, description: meta.signup_source.desc})
  @Column({
    name: `${UserEntity.colprefix}signup_source`, 
    type: `text`, 
    default: null, 
    collation: `utf8mb4_general_ci`,
  })
  @IsNotEmpty()
  signup_source?: string;*/

  @Field(() => String, {nullable: true, description: meta.whatsapp.desc})
  @Column({
    name: `${UserEntity.colprefix}whatsapp`, 
    type: `varchar`, 
    nullable: true,
    length: meta.whatsapp.validation.maxLength,
    default: null,
    collation: 'utf8mb4_general_ci',
  })
  @IsMobilePhone(`en-US`,{strictMode: false}, { message: meta.whatsapp.validation.isMustBeMsg })
  @Index(`${InIndexPrefix}${UserEntity.colprefix}whatsapp`, { unique: false })
  @IsOptional()
  @MaxLength(meta.whatsapp.validation.maxLength as number, {message: meta.whatsapp.validation.maxLengthMsg})
  whatsapp?: string;

  @Field(() => String, {nullable: true, description: meta.whatsapp_cc.desc})
  @Column({
    name: `${UserEntity.colprefix}whatsapp_cc`, 
    type: `varchar`, 
    length: meta.whatsapp_cc.validation.maxLength,
    nullable: true,
    default: null,
    collation: 'utf8mb4_general_ci',
    comment:`NULL FK (geo_country => country_mobile_code)`,
  })
  @ValidateIf((entity) => entity.whatsapp_cc !== undefined && entity.whatsapp_cc !== null, { message: meta.whatsapp_cc.validation.validateIf })
  @MaxLength(meta.whatsapp_cc.validation.maxLength as number, { message: meta.whatsapp_cc.validation.maxLengthMsg })
  @IsNotEmpty({ message: meta.whatsapp_cc.validation.validateIf })
  @Index(`${InIndexPrefix}${UserEntity.colprefix}whatsapp_cc`, { unique: false })
  whatsapp_cc?: string;

  @Field(() => YesNoEnum, {nullable: true, description: meta.has_two_factor_auth.desc})
  @Column({
    name: `${UserEntity.colprefix}has_two_factor_auth`, 
    type: `tinyint`,
    default: YesNoEnum.NO,
    unsigned: true,
    comment: `1 = >Yes | 0 => No`,
  })
  @IsNotEmpty()
  @Index(`${InIndexPrefix}${UserEntity.colprefix}has_two_factor_auth`, { unique: false })
  @IsInt()
  has_two_factor_auth?: number;

  @Field(() => DateTime, {nullable: true, description: meta.pemail_verified.desc})
  @Column({
    name: `${UserEntity.colprefix}pemail_verified`, 
    type: `datetime`, 
    nullable: true,
    default: null,
    comment: `date-time => Yes | null => No`
  })
  @IsOptional()
  @Index(`${InIndexPrefix}${UserEntity.colprefix}pemail_verified`, { unique: false })
  pemail_verified?: Date;

  @Field(() => DateTime, {nullable: true, description: meta.pmobile_verified.desc})
  @Column({
    name: `${UserEntity.colprefix}pmobile_verified`, 
    type: `datetime`, 
    nullable: true,
    default: null,
    comment: `date-time => Yes | null => No`
  })
  @IsOptional()
  @Index(`${InIndexPrefix}${UserEntity.colprefix}pmobile_verified`, { unique: false })
  pmobile_verified?: Date;

  @Field(() => DateTime, {nullable: true, description: meta.verified.desc})
  @Column({
    name: `${UserEntity.colprefix}verified`, 
    type: `datetime`, 
    nullable: true,
    default: null,
    comment: `date-time => yes | null => no (as users comes from various sources including leads its required to verify manually or using some algorithm)`
  })
  @IsOptional()
  @Index(`${InIndexPrefix}${UserEntity.colprefix}verified`, { unique: false })
  verified?: Date;

  @Field(() => DateTime, {nullable: true, description: meta.suspended.desc})
  @Column({
    name: `${UserEntity.colprefix}suspended`, 
    type: `datetime`, 
    nullable: true,
    default: null,
    comment: `date-time => suspended | null => active`
  })
  @IsOptional()
  @Index(`${InIndexPrefix}${UserEntity.colprefix}suspended`, { unique: false })
  suspended?: Date;

  @Field(() => DateTime, {nullable: true, description: meta.created.desc})
  @CreateDateColumn({
    name: `${UserEntity.colprefix}created`,
    type: `datetime`,
    update: false,
  })
  @Index(`${InIndexPrefix}${UserEntity.colprefix}created`, { unique: false })
  @IsOptional()
  created?: Date;

  @Field(() => DateTime, {nullable: true, description: meta.updated.desc})
  @UpdateDateColumn({
    name: `${UserEntity.colprefix}updated`, 
    type: `datetime`,
    nullable: true
  })
  @Index(`${InIndexPrefix}${UserEntity.colprefix}updated`, { unique: false })
  updated?: Date;

  @Field(() => DateTime, {nullable: true, description: meta.deleted.desc})
  @DeleteDateColumn({
    name: `${UserEntity.colprefix}deleted`,
    type: `datetime`, 
    nullable: true,
    comment:`date-time => Yes | null => No`,
  })
  @Index(`${InIndexPrefix}${UserEntity.colprefix}deleted`, { unique: false })
  deleted?: Date;

  @Field(() => String, {nullable: true, description: meta.file_profile_photo.desc})
  @Column({
    name: `${UserEntity.colprefix}file_profile_photo`, 
    type: `varchar`, 
    length: meta.file_profile_photo.validation.maxLength,
    nullable: true,
    collation: 'utf8mb4_general_ci',
  })
  @MaxLength(meta.file_profile_photo.validation.maxLength as number, {message: meta.file_profile_photo.validation.maxLengthMsg})
  @IsOptional({ message: `${meta.file_profile_photo.validation.validFileFormatMsg} ${meta.file_profile_photo.validation.maxFileSizeMsg} ${meta.file_profile_photo.validation.maxCountMsg}` })
  @UploadField({
    ref_id_field: `id`,
    access_url_field: `file_profile_photo_url`,
    upload_dir: path.join(`{{ref_id}}`),
    valid_file_format: meta.file_profile_photo.validation.validFileFormat as string[],
    valid_mime_type: meta.file_profile_photo.validation.validMimeType as string[],
    max_file_size: meta.file_profile_photo.validation.maxFileSize as number,
    req_max_count: meta.file_profile_photo.validation.maxCount as number,
  })
  file_profile_photo?: string;

  @Field(() => UploadFileAccessUrlDto, {nullable: true, description: meta.file_profile_photo_url.desc})
  @IsNotEntityField(() => String)
  file_profile_photo_url?: UploadFileAccessUrlDto;

  @Field(() => String, {nullable: true, description: meta.file_profile_banner.desc})
  @Column({
    name: `${UserEntity.colprefix}file_profile_banner`, 
    type: `varchar`, 
    length: meta.file_profile_banner.validation.maxLength,
    nullable: true,
    collation: 'utf8mb4_general_ci',
  })
  @MaxLength(meta.file_profile_banner.validation.maxLength as number, {message: meta.file_profile_banner.validation.maxLengthMsg})
  @IsOptional({ message: `${meta.file_profile_banner.validation.validFileFormatMsg} ${meta.file_profile_banner.validation.maxFileSizeMsg} ${meta.file_profile_banner.validation.maxCountMsg}` })
  @UploadField({
    ref_id_field: `id`,
    upload_dir: path.join(`{{ref_id}}`),
    access_url_field: 'file_profile_banner_url',
    valid_file_format: meta.file_profile_banner.validation.validFileFormat as string[],
    valid_mime_type: meta.file_profile_banner.validation.validMimeType as string[],
    max_file_size: meta.file_profile_banner.validation.maxFileSize as number,
    req_max_count: meta.file_profile_banner.validation.maxCount as number,
  })
  file_profile_banner?: string;


  @Field(() => UploadFileAccessUrlDto, {nullable: true, description: meta.file_profile_banner_url.desc})
  @IsNotEntityField(() => String)
  file_profile_banner_url?: UploadFileAccessUrlDto;



  // ████ INTERNAL RELATIONS ████████████████████████████████████████████████

  @Field(() => UserAuthenticationEntity, {nullable: true, description: meta.fr_user_auth.desc})
  @OneToOne(() => UserAuthenticationEntity, (entity) => entity.fr_user) // specify inverse side as a second parameter
  fr_user_auth?: UserAuthenticationEntity

  @Field(() => [UserDeviceEntity], {nullable: true, description: meta.fr_user_devices.desc})
  @OneToMany(() => UserDeviceEntity, (entity: UserDeviceEntity) => entity.fr_user)
  fr_user_devices?: UserDeviceEntity[];

  @Field(() => [UserCorporateInfoEntity], {nullable: true, description: meta.fr_user_corporate_infos.desc})
  @OneToMany(() => UserCorporateInfoEntity, (entity: UserCorporateInfoEntity) => entity.fr_user)
  fr_user_corporate_infos?: UserCorporateInfoEntity[];

  @Field(() => UserPersonalInfoEntity, {nullable: true, description: meta.fr_user_personal_info.desc})
  @OneToOne(() => UserPersonalInfoEntity, (entity: UserPersonalInfoEntity) => entity.fr_user)
  fr_user_personal_info?: UserPersonalInfoEntity;

  @Field(() => [UserAuthorisationEntity], {nullable: true, description: meta.fr_user_authorisations.desc})
  @OneToMany(() => UserAuthorisationEntity, (entity: UserAuthorisationEntity) => entity.fr_user)
  fr_user_authorisations?: UserAuthorisationEntity[];

  @Field(() => [UserAddressEntity], {nullable: true, description: meta.fr_user_addresses.desc})
  @OneToMany(() => UserAddressEntity, (entity: UserAddressEntity) => entity.fr_user)
  fr_user_addresses?: UserAddressEntity[];

  @Field(() => [UserIdentityCardEntity], {nullable: true, description: meta.fr_user_identity_cards.desc})
  @OneToMany(() => UserIdentityCardEntity, (entity: UserIdentityCardEntity) => entity.fr_user)
  fr_user_identity_cards?: UserIdentityCardEntity[];

  @Field(() => [UserHierarchyEntity], {nullable: true, description: meta.fr_parent_user_hirarchies.desc})
  @OneToMany(() => UserHierarchyEntity, (entity: UserHierarchyEntity) => entity.fr_parent_user)
  fr_parent_user_hierarchies?: UserHierarchyEntity[];

  @Field(() => [UserHierarchyEntity], {nullable: true, description: meta.fr_child_user_hirarchies.desc})
  @OneToMany(() => UserHierarchyEntity, (entity: UserHierarchyEntity) => entity.fr_child_user)
  fr_child_user_hirarchies?: UserHierarchyEntity[];

  @Field(() => [UserFileEntity], {nullable: true, description: meta.fr_user_files.desc})
  @OneToMany(() => UserFileEntity, (entity: UserFileEntity) => entity.fr_user)
  fr_user_files?: UserFileEntity[];

  @Field(() => [QueueSmsEntity], {nullable: true, description: meta.fr_queue_sms_from_users.desc})
  @OneToMany(() => QueueSmsEntity, (entity: QueueSmsEntity) => entity.fr_from_user)
  fr_queue_sms_from_users?: QueueSmsEntity[];

  @Field(() => [QueueSmsEntity], {nullable: true, description: meta.fr_queue_sms_to_users.desc})
  @OneToMany(() => QueueSmsEntity, (entity: QueueSmsEntity) => entity.fr_to_user)
  fr_queue_sms_to_users?: QueueSmsEntity[];

  @Field(() => [QueueWhatsappEntity], {nullable: true, description: meta.fr_queue_whatsapp_from_users.desc})
  @OneToMany(() => QueueWhatsappEntity, (entity: QueueWhatsappEntity) => entity.fr_from_user)
  fr_queue_whatsapp_from_users?: QueueWhatsappEntity[];

  @Field(() => [QueueWhatsappEntity], {nullable: true, description: meta.fr_queue_whatsapp_to_users.desc})
  @OneToMany(() => QueueWhatsappEntity, (entity: QueueWhatsappEntity) => entity.fr_to_user)
  fr_queue_whatsapp_to_users?: QueueSmsEntity[];

  @Field(() => [QueueEmailEntity], {nullable: true, description: meta.fr_queue_email_from_users.desc})
  @OneToMany(() => QueueEmailEntity, (entity: QueueEmailEntity) => entity.fr_from_user)
  fr_queue_email_from_users?: QueueEmailEntity[];

  @Field(() => [QueueEmailEntity], {nullable: true, description: meta.fr_queue_email_to_users.desc})
  @OneToMany(() => QueueEmailEntity, (entity: QueueEmailEntity) => entity.fr_to_user)
  fr_queue_email_to_users?: QueueEmailEntity[];

  @Field(() => [QueueEmailEntity], {nullable: true, description: meta.fr_queue_email_created_users.desc})
  @OneToMany(() => QueueEmailEntity, (entity: QueueEmailEntity) => entity.fr_created_user)
  fr_queue_email_created_users?: QueueEmailEntity[];

  @Field(() => [LeadEntity], {nullable: true, description: meta.fr_lead_from_users.desc})
  @OneToMany(() => LeadEntity, (entity: LeadEntity) => entity.fr_from_user)
  fr_lead_from_users?: LeadEntity[];

  @Field(() => [LeadEntity], {nullable: true, description: meta.fr_lead_to_users.desc})
  @OneToMany(() => LeadEntity, (entity: LeadEntity) => entity.fr_from_user)
  fr_lead_to_users?: LeadEntity[];

  @Field(() => [NewsLetterEntity], {nullable: true, description: meta.fr_newsletter_users.desc})
  @OneToMany(() => NewsLetterEntity, (entity: NewsLetterEntity) => entity.fr_users)
  fr_newsletter_users?: NewsLetterEntity[]; 

  @Field(() => [NewsLetterScheduleEntity], {nullable: true, description: meta.fr_newsletter_schedule_users.desc})
  @OneToMany(() => NewsLetterScheduleEntity, (entity: NewsLetterScheduleEntity) => entity.fr_users)
  fr_newsletter_schedule_users?: NewsLetterScheduleEntity[];

  @Field(() => [LeadFollowupEntity], {nullable: true, description: meta.fr_lead_followup_user.desc})
  @OneToOne(() => LeadFollowupEntity, (entity: LeadFollowupEntity) => entity.fr_user)
  fr_lead_followup_user?: LeadFollowupEntity[];

  @Field(() => [NewsLetterUserEntity], {nullable: true, description: meta.fr_news_letter_user_user.desc})
  @OneToOne(() => NewsLetterUserEntity, (entity: NewsLetterUserEntity) => entity.fr_users)
  fr_news_letter_user_user?: NewsLetterUserEntity[]; 

  @Field(() => [UserNewsLetterSubscriptionEntity], {nullable: true, description: meta.fr_user_newsletters_subscription.desc})
  @OneToMany(() => UserNewsLetterSubscriptionEntity, (entity: UserNewsLetterSubscriptionEntity) => entity.fr_users)
  fr_user_newsletters_subscription?: UserNewsLetterSubscriptionEntity[];

  @Field(() => [UserFavEntity], {nullable: true, description: meta.fr_user_favourites.desc})
  @OneToMany(() => UserFavEntity, (entity: UserFavEntity) => entity.fr_created_user)
  fr_user_favourites?: UserFavEntity[];

  @Field(() => [BusinessEntity], {nullable: true, description: meta.fr_business_user.desc})
  @OneToMany(() => BusinessEntity, (entity: BusinessEntity) => entity.fr_owner_user)
  fr_business_user?: BusinessEntity[];

  @Field(() => ConnectionSourceEntity, {
    nullable: true, 
    description: meta.fr_connection_source.desc,
  })
  @ManyToOne(() => ConnectionSourceEntity, (entity: ConnectionSourceEntity) => entity.fr_user)
  @JoinColumn({ name: `${UserEntity.colprefix}connsrc_id` })
  fr_connection_source?: ConnectionSourceEntity;

  @Field(() => [CrawlerScheduleEntity], {nullable: true, description: meta.fr_crawler_schedule_user.desc})
  @OneToMany(() => CrawlerScheduleEntity, (entity: CrawlerScheduleEntity) => entity.fr_users)
  fr_crawler_schedule_user?: CrawlerScheduleEntity[];



  // ████ EXTERNAL RELATIONS ████████████████████████████████████████████████
  
}