import { EntityMetaCRUDTypeDefinition, EntityCRUDTypeDefinition, DateTime, YesNoEnum, EntitySuffix, UploadField, IsNotEntityField, UploadFileAccessUrlDto, InIndexPrefix  } from "@libs/library-app";
import { IsEmail, IsInt, IsLatitude, IsLongitude, IsMobilePhone, IsNotEmpty, IsNumber, IsOptional, IsString, Matches, Max, MaxLength, Min, MinLength } from "class-validator";
import { Column, CreateDateColumn, DeleteDateColumn, Entity, Index, JoinColumn, ManyToOne, OneToMany, OneToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { Field, Int, ObjectType } from "@nestjs/graphql";
import { GraphQLEmailAddress } from "graphql-scalars";
import { UserEntity } from "../../user/entities/user.entity";
import path from 'path';
import { CountryEntity } from "../../../geo/country/entities/country.entity";
import { StateEntity } from "../../../geo/state/entities/state.entity";
import { CityEntity } from "../../../geo/city/entities/city.entity";

const UserCorporateInfoEntityFieldMeta: EntityMetaCRUDTypeDefinition = {
  id: {
      desc: `Unique ID of the entity, auto generated.`,
      validation: {}
  },
  u_id: {
      desc: `User ID of the user corporate info.`,
      validation:{}
  },
  company_name: {
      desc: `Company name of the user corporate info.`,
      validation:{
        isNotEmpty: `Company name is required.`,
        maxLength: 128,
        maxLengthMsg: `Company name must not exceed 128 characters.`,
      }
  },
  contact_person_name: {
    desc: `Contact person name of the user corporate info.`,
    validation:{
      maxLength: 128,
      maxLengthMsg: `Contact person name must not exceed 128 characters.`,
    }
  },
  email: {
      desc: `Email of the user corporate info.`,
      validation:{
        isMustBe: `Must be a valid email address.`,
        isNotEmpty: `Email is required.`,
        maxLength: 128,
        maxLengthMsg: `Email must not exceed 128 characters.`,
      }
  },
  mobile: {
      desc: `Mobile of the user corporate info. Provide in USA mobile format.`,
      validation:{
        isMustBeMsg: `Must be a valid mobile number.`,
        isNotEmpty: `Mobile is required.`,
        maxLength: 16,
        maxLengthMsg: `Mobile must not exceed 16 characters.`,
      }
  },
  mobile_cc: {
      desc: `Mobile country code of the user corporate info.`,
      validation:{
        isNotEmpty: `User mobile country code is required.`,
        maxLength: 8,
        maxLengthMsg: `User mobile country code must be no more than 8 numbers long.`,
      }
  },
  website: {
      desc: `Website of the user corporate info.`,  
      validation:{
        matchRegEx: /^https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)$/,
        matchRegExMsg: `Invalid website url.`,
        maxLength: 255,
        maxLengthMsg: `Website must not exceed 255 characters.`,
      }
  },
  address: {
    desc: `Company address of the user corporate info.`,
    validation:{}
  },
  city_id: {
    desc: `City ID of the user corporate info.`,
    validation: {}
  },
  state_id: {
    desc: `State ID of the user corporate info.`,
    validation: {}
  },
  country_id: {
    desc: `Country ID of the user corporate info.`,
    validation: {}
  },
  postal_zip_code: {
    desc: `Postal zip code of the user corporate info.`,
    validation: {
      maxLength: 16,
      maxLengthMsg: `Postal zip code must not exceed 16 characters.`,
    }
  },
  file_company_logo:{
    desc: `Company logo of the user corporate info.`,
    validation:{
      uploadDir: path.join(`{{ref_id}}`),
      validFileFormat: ['jpeg', 'jpg', 'png', 'svg'],
      validFileFormatMsg: 'Only jpeg, jpg, png, svg files are allowed.',
      validMimeType: ['image/jpeg', 'image/jpeg', 'image/png', 'image/svg+xml'],
      maxFileSize: 5 * 1024 * 1024, // 5 mb
      maxFileSizeMsg: 'Maximum file size is 5 MB.',
      maxCount: 1,
      maxCountMsg: 'Only one file is allowed to upload.',
      maxLength: 255,
      maxLengthMsg: `Company logo max length is 255 characters.`,
      }
  },
  registered: {
      desc: `Date time when user corporate info is registered.`,  
      validation:{}
  },
  created: {
      desc: `Date time when user corporate info is created.`,
      validation:{}
  },
  updated: {
      desc: `Date time when user corporate info is updated.`,
      validation:{}
  },
  deleted: {
    desc: `When record is soft deleted or soft removed, date-time will be saved otherwise null to indicate record is not deleted.`,
    validation:{}
  }
};
const  UserCorporateInfoVirtualFieldMeta: EntityMetaCRUDTypeDefinition = {
  fr_user: {
    desc: `User ID of the user corporate info.`,
    validation: {}
  },
  fr_city: {
    desc: `City of the user identity card.`,
    validation:{}
  },
  fr_state: {
    desc: `State of the user identity card.`,
    validation: {}
  },
  fr_country: {
    desc: `Country of the user identity card.`,
    validation: {}
  },
  file_company_logo_url: {
    desc: `User company logo url.`,
    validation: {}  
  },
}
export const UserCorporateInfoEntityMeta = {...UserCorporateInfoEntityFieldMeta, ...UserCorporateInfoVirtualFieldMeta};
const meta = UserCorporateInfoEntityMeta; // need to use in this file down the line

/*
id?: any;
u_id?: any;
company_name?: any;
email?: any;
mobile?: any;
mobile_cc?: any;
website?: any;
company_address?: any;
city_id?: any;
state_id?: any;
country_id?: any;
file_company_logo?: any;
registered?: any;
created?: any;
updated?: any;
deleted?: any;
*/

@ObjectType({ isAbstract: true })
@Entity({
  name: 'user_corporate_info',
  engine: 'InnoDB',
})
export class UserCorporateInfoEntity implements EntityCRUDTypeDefinition {

  static colprefix: string = `ucorp_`;
  static uploaddir: string = `user-corporate-info`;
  static recorddir: string = `{{id}}`;

  static metaname: string = (UserCorporateInfoEntity.name).replace(EntitySuffix, '');
  static metadesc: string = 'UserCorporateInfo management module in application.';

  @Field(() => Int, {nullable: true, description: meta.id.desc})
  @PrimaryGeneratedColumn({
    name: `${UserCorporateInfoEntity.colprefix}id`, 
    type: `int`, 
    unsigned: true, 
    primaryKeyConstraintName: `PRIMARY`,
  })
  id?: number;

  @Field(() => Int, {nullable: true, description: meta.u_id.desc})
  @Column({
    name: `${UserCorporateInfoEntity.colprefix}u_id`,
    type: `int`,
    unsigned: true,
    comment:`FK(user=>u_id)`,
  })
  @IsInt()
  @IsNotEmpty()
  @Index(`${InIndexPrefix}${UserCorporateInfoEntity.colprefix}u_id`, { unique: false })
  u_id?: number;

  @Field(() => String, {nullable: true, description: meta.company_name.desc})
  @Column({
    name: `${UserCorporateInfoEntity.colprefix}company_name`, 
    type: `varchar`, 
    length: meta.company_name.validation.maxLength,
    collation: `utf8mb4_general_ci`,
  })
  @Index(`${InIndexPrefix}${UserCorporateInfoEntity.colprefix}company_name`, { unique: false })
  @MaxLength(meta.company_name.validation.maxLength as number, { message: meta.company_name.validation.maxLengthMsg })
  @IsNotEmpty({ message: meta.company_name.validation.isNotEmpty })
  company_name?: string;

  @Field(() => String, {nullable: true, description: meta.contact_person_name.desc})
  @Column({
    name: `${UserCorporateInfoEntity.colprefix}contact_person_name`, 
    type: `varchar`, 
    length: meta.contact_person_name.validation.maxLength,
    collation: `utf8mb4_general_ci`,
    nullable: true,
    default: null,
  })
  @Index(`${InIndexPrefix}${UserCorporateInfoEntity.colprefix}contact_person_name`, { unique: false })
  @MaxLength(meta.contact_person_name.validation.maxLength as number, { message: meta.contact_person_name.validation.maxLengthMsg })
  @IsOptional()
  contact_person_name?: string;

  @Field(() => GraphQLEmailAddress, {nullable: true, description: meta.email.desc})
  @Column({
    name: `${UserCorporateInfoEntity.colprefix}email`, 
    type: `varchar`, 
    length: meta.email.validation.maxLength,
    collation: `utf8mb4_general_ci`,
  })
  @IsEmail({}, { message: meta.email.validation.isMustBe })
  @IsNotEmpty({ message: meta.email.validation.isNotEmpty })
  @MaxLength(meta.email.validation.maxLength as number, { message: meta.email.validation.maxLengthMsg })
  @Index(`${InIndexPrefix}${UserCorporateInfoEntity.colprefix}email`, { unique: false })
  email?: string;

  @Field(() => String, {nullable: true, description: meta.mobile.desc})
  @Column({
    name: `${UserCorporateInfoEntity.colprefix}mobile`, 
    type: `varchar`, 
    length: meta.mobile.validation.maxLength,
    collation: `utf8mb4_general_ci`,
  })
  @IsMobilePhone(`en-US`,{strictMode: false}, { message: meta.mobile.validation.isMustBeMsg })
  @IsNotEmpty({ message: meta.mobile.validation.isNotEmpty })
  @Index(`${InIndexPrefix}${UserCorporateInfoEntity.colprefix}mobile`, { unique: false })
  @MaxLength(meta.mobile.validation.maxLength as number, { message: meta.mobile.validation.maxLengthMsg })
  mobile?: string;

  @Field(() => String, {nullable: true, description: meta.mobile_cc.desc})
  @Column({
    name: `${UserCorporateInfoEntity.colprefix}mobile_cc`, 
    type: `varchar`, 
    length: meta.mobile_cc.validation.maxLength,
    collation: `utf8mb4_general_ci`,
    comment: `FK (geo_country => country_phone_code)`,
  })
  @MaxLength(meta.mobile_cc.validation.maxLength as number, { message: meta.mobile_cc.validation.maxLengthMsg })
  @IsNotEmpty({ message: meta.mobile_cc.validation.isNotEmpty })
  @Index(`${InIndexPrefix}${UserCorporateInfoEntity.colprefix}mobile_cc`, { unique: false })
  mobile_cc?: string;

  @Field(() => String, {nullable: true, description: meta.website.desc})
  @Column({
    name: `${UserCorporateInfoEntity.colprefix}website`, 
    type: `varchar`, 
    length: meta.website.validation.maxLength,
    collation: `utf8mb4_general_ci`,
    nullable: true, 
    default: null, 
  })
  @MaxLength(meta.website.validation?.maxLength as number, { message: meta.website.validation?.maxLengthMsg })
  @Matches(meta.website.validation?.matchRegEx as RegExp, {
    message: meta.website.validation?.matchRegExMsg
  })
  @Index(`${InIndexPrefix}${UserCorporateInfoEntity.colprefix}website`, { unique: false })
  @IsOptional()
  website?: string;

  @Field(() => String, {nullable: true, description: meta.address.desc})
  @Column({
    name: `${UserCorporateInfoEntity.colprefix}address`, 
    type: `text`, 
    nullable: true,  
    default: null,
    collation: `utf8mb4_general_ci`,
  })
  @IsOptional()
  address?: string;

  @Field(() => Int, {nullable: true, description: meta.city_id.desc})
  @Column({
    name: `${UserCorporateInfoEntity.colprefix}city_id`,
    type: `int`,
    nullable: true,  
    comment: `FK(geo_city=>city_id)`,
    unsigned: true,
    default: null,
  })
  @IsInt()
  @IsOptional()
  city_id?: number;

  @Field(() => Int, {nullable: true, description: meta.state_id.desc})
  @Column({
    name: `${UserCorporateInfoEntity.colprefix}state_id`,
    type: `mediumint`,
    nullable: true,  
    comment: `FK(geo_state=>state_id)`,
    unsigned: true,
    default: null,
  })
  @IsInt()
  @IsOptional()
  state_id?: number;

  @Field(() => Int, {nullable: true, description: meta.country_id.desc})
  @Column({
    name: `${UserCorporateInfoEntity.colprefix}country_id`,
    type: `smallint`,
    nullable: true,  
    comment: `FK(geo_country=>country_id)`,
    unsigned: true,
    default: null,
  })
  @IsInt()
  @IsOptional()
  country_id?: number;

  @Field(() => String, {nullable: true, description: meta.postal_zip_code.desc})
  @Column({
    name: `${UserCorporateInfoEntity.colprefix}postal_zip_code`, 
    type: `varchar`, 
    length: meta.postal_zip_code.validation.maxLength,
    collation: `utf8mb4_general_ci`,
    nullable: true,
    default: null,
  })
  @Index(`${InIndexPrefix}${UserCorporateInfoEntity.colprefix}postal_zip_code`, { unique: false })
  @MaxLength(meta.postal_zip_code.validation.maxLength as number, { message: meta.postal_zip_code.validation.maxLengthMsg })
  @IsOptional()
  postal_zip_code?: string;

  @Field(() => String, {nullable: true, description: meta.file_company_logo.desc})
  @Column({
    name: `${UserCorporateInfoEntity.colprefix}file_company_logo`, 
    type: `varchar`, 
    length: meta.website.validation.maxLength,
    nullable: true,
    default: null,
    collation: `utf8mb4_general_ci`,
  })
  @MaxLength(meta.file_company_logo.validation?.maxLength as number, { message: meta.file_company_logo.validation?.maxLengthMsg })
  @IsOptional({ message: `${meta.file_company_logo.validation.validFileFormatMsg} ${meta.file_company_logo.validation.maxFileSizeMsg} ${meta.file_company_logo.validation.maxCountMsg}` })
  @UploadField({
    ref_id_field: `id`,
    access_url_field: `file_company_logo_url`,
    upload_dir: meta.file_company_logo.validation.uploadDir as string,
    valid_file_format: meta.file_company_logo.validation.validFileFormat as string[],
    valid_mime_type: meta.file_company_logo.validation.validMimeType as string[],
    max_file_size: meta.file_company_logo.validation.maxFileSize as number,
    req_max_count: meta.file_company_logo.validation.maxCount as number
  })
  file_company_logo?: string;

  @Field(() => UploadFileAccessUrlDto, {nullable: true, description: meta.file_company_logo_url.desc})
  @IsNotEntityField(() => String)
  file_company_logo_url?: UploadFileAccessUrlDto;

  @Field(() => DateTime, {nullable: true, description: meta.registered.desc})
  @Column({
    name: `${UserCorporateInfoEntity.colprefix}registered`,
    type: `datetime`,
    nullable: true,
    default: null,
  })
  @IsOptional()
  registered?: Date;

  @Field(() => DateTime, {nullable: true, description: meta.created.desc})
  @CreateDateColumn({
    name: `${UserCorporateInfoEntity.colprefix}created`,
    type: `datetime`,
    update: false,
  })
  @Index(`${InIndexPrefix}${UserCorporateInfoEntity.colprefix}created`, { unique: false })
  @IsOptional()
  created?: Date;

  @Field(() => DateTime, {nullable: true, description: meta.updated.desc})
  @UpdateDateColumn({
    name: `${UserCorporateInfoEntity.colprefix}updated`, 
    type: `datetime`,
    nullable: true
  })
  @Index(`${InIndexPrefix}${UserCorporateInfoEntity.colprefix}updated`, { unique: false })
  updated?: Date;

  @Field(() => DateTime, {nullable: true, description: meta.deleted.desc})
  @DeleteDateColumn({
    name: `${UserCorporateInfoEntity.colprefix}deleted`, 
    type: `datetime`,
    nullable: true,
    comment:`date-time => Yes | null => No`,
  })
  @Index(`${InIndexPrefix}${UserCorporateInfoEntity.colprefix}deleted`, { unique: false })
  deleted?: Date;

  @Field(() => UserEntity, {
    nullable: true, 
    description: meta.fr_user.desc,
  })


  // ████ INTERNAL RELATIONS ████████████████████████████████████████████████

  @Field(() => UserEntity, {nullable: true, description: meta.fr_user.desc})
  @ManyToOne(() => UserEntity, (entity: UserEntity) => entity.fr_user_corporate_infos)
  @JoinColumn({ name: `${UserCorporateInfoEntity.colprefix}u_id` })
  fr_user?: UserEntity;

  @Field(() => CityEntity, {nullable: true, description: meta.fr_city.desc})
  @ManyToOne(() => CityEntity, (entity: CityEntity) => entity.fr_user_corporate_infos)
  @JoinColumn({ name: `${UserCorporateInfoEntity.colprefix}city_id` })
  fr_city?: CityEntity;

  @Field(() => StateEntity, {nullable: true, description: meta.fr_state.desc})
  @ManyToOne(() => StateEntity, (entity: StateEntity) => entity.fr_user_corporate_infos)
  @JoinColumn({ name: `${UserCorporateInfoEntity.colprefix}state_id` })
  fr_state?: StateEntity;

  @Field(() => CountryEntity, {nullable: true, description: meta.fr_country.desc})
  @ManyToOne(() => CountryEntity, (entity: CountryEntity) => entity.fr_user_corporate_infos)
  @JoinColumn({ name: `${UserCorporateInfoEntity.colprefix}country_id` })
  fr_country?: CountryEntity;


  
  // ████ EXTERNAL RELATIONS ████████████████████████████████████████████████

}
