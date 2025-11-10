import { EntityMetaCRUDTypeDefinition, EntityCRUDTypeDefinition, DateTime, YesNoEnum, EntitySuffix, InIndexPrefix  } from "@libs/library-app";
import { IsEmail, IsInt, IsLatitude, IsLongitude, IsMobilePhone, IsNotEmpty, IsNumber, IsOptional, IsString, Matches, MaxLength, MinLength } from "class-validator";
import { Column, CreateDateColumn, DeleteDateColumn, Entity, Index, JoinColumn, ManyToOne, OneToMany, OneToOne, PrimaryColumn, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { Field, Float, Int, ObjectType } from "@nestjs/graphql";
import { GraphQLEmailAddress } from "graphql-scalars";
import { UserEntity } from "../../user/entities/user.entity";
import { number } from "joi";
import { GenderEnum } from "../user.personal.info.enum";

const UserPersonalInfoEntityFieldMeta: EntityMetaCRUDTypeDefinition = {
  id: {
      desc: `Unique ID of the entity, This is the same as user id`,
      validation: {}
  },
  dob: {
      desc: `Date of birth of the user.`,
      validation: {}
  },
  gender: {
      desc: `Gender of the user.`,
      validation: {}
  },
  height: {
      desc: `Height of the user.`,
      validation: {}
  },
  weight: {
      desc: `Weight of the user.`,
      validation: {}
  },
  blood_group: {
      desc: `Blood group of the user.`,
      validation: {
        maxLength: 4,
        maxLengthMsg: `Blood group of the user must 4 characters.`,
      }
  },
  drivers_licence_num: {
      desc: `Drivers license number of the user.`,
      validation: {
        maxLength: 64,
        maxLengthMsg: `Drivers license number must 64 characters.`,
      }
  },
  about_me: {
      desc: `About me of the user.`,
      validation: {}
  },
  email_sign: {
      desc: `Email signature of the user.`,
      validation: {}
  },
  website_url: {
      desc: `Website url of the user.`,
      validation: {
        maxLength: 255,
        maxLengthMsg: 'Website url must be 255 characters or fewer.',
      }
  },
  facebook_profile: {
      desc: `Facebook profile link of the user.`,
      validation: {
        maxLength: 128,
        maxLengthMsg: 'Facebook profile link must be 128 characters or fewer.',
      }
  },
  instagram_profile: {
    desc: 'Instagram profile link of the user.',
    validation: {
      maxLength: 128,
      maxLengthMsg: 'Instagram profile must be 128 characters or fewer.',
    }
  },

  youtube_profile: {
    desc: 'YouTube profile link of the user.',
    validation: {
      maxLength: 128,
      maxLengthMsg: 'YouTube profile must be 128 characters or fewer.',
    }
  },

  x_profile: {
    desc: 'X (formerly Twitter) profile link of the user.',
    validation: {
      maxLength: 128,
      maxLengthMsg: 'X profile must be 128 characters or fewer.',
    }
  },

  linkedin_profile: {
    desc: 'LinkedIn profile link of the user.',
    validation: {
      maxLength: 128,
      maxLengthMsg: 'LinkedIn profile must be 128 characters or fewer.',
    }
  },

  tiktok_profile: {
    desc: 'TikTok profile link of the user.',
    validation: {
      maxLength: 128,
      maxLengthMsg: 'TikTok profile must be 128 characters or fewer.',
    }
  },

  pinterest_profile: {
    desc: 'Pinterest profile link of the user.',
    validation: {
      maxLength: 128,
      maxLengthMsg: 'Pinterest profile must be 128 characters or fewer.',
    }
  },

  created: {
      desc: `Date time when user personal info is created.`,
      validation:{}
  },
  updated: {
      desc: `Date time when user personal info is updated.`,
      validation:{}
  },
  deleted: {
    desc: `When record is soft deleted or soft removed, date-time will be saved otherwise null to indicate record is not deleted.`,
    validation:{}
  }
};
const  UserPersonalInfoVirtualFieldMeta: EntityMetaCRUDTypeDefinition = {
  fr_user: {
    desc: `User ID of the user personal info.`,
    validation: {}
  }
}
export const UserPersonalInfoEntityMeta = {...UserPersonalInfoEntityFieldMeta, ...UserPersonalInfoVirtualFieldMeta};
const meta = UserPersonalInfoEntityMeta; // need to use in this file down the line

/*
id?: any;
dob?: any;
gender?: any;
timezone?: any;
height?: any;
weight?: any;
blood_group?: any;
drivers_licence_num?: any;
about_me?: any;
email_sign?: any;
created?: any;
updated?: any;
deleted?: any;
*/

@ObjectType({ isAbstract: true })
@Entity({
  name: 'user_personal_info',
  engine: 'InnoDB',
})
export class UserPersonalInfoEntity implements EntityCRUDTypeDefinition {

  static colprefix: string = `upinfo_`;
  static uploaddir: string = `user-personal-info`;

  static metaname: string = (UserPersonalInfoEntity.name).replace(EntitySuffix, '');
  static metadesc: string = 'UserPersonalInfo management module in application.';

  @Field(() => Int, {nullable: true, description: meta.id.desc})
  @PrimaryColumn({
    name: `${UserPersonalInfoEntity.colprefix}id`, 
    type: `int`, 
    unsigned: true, 
    primaryKeyConstraintName: `PRIMARY`, 
  })
  @Field(() => Int, { nullable: false, description: meta.id.desc })
  id?: number;

  @Field(() => DateTime, {nullable: true, description: meta.dob.desc})
  @Column({
    name: `${UserPersonalInfoEntity.colprefix}dob`,
    type: `date`,
    nullable: true,
    default: null,
  })
  @Index(`${InIndexPrefix}${UserPersonalInfoEntity.colprefix}dob`, { unique: false })
  @IsOptional()
  dob?: Date;

  @Field(() => GenderEnum, {nullable: true, description: meta.gender.desc})
  @Column({
    name: `${UserPersonalInfoEntity.colprefix}gender`,
    type: `tinyint`,
    default: 0,
    unsigned: true, 
    comment: `0 => Other | 1 => Male | 2 => Female`,
  })
  @IsInt()
  @Index(`${InIndexPrefix}${UserPersonalInfoEntity.colprefix}gender`, { unique: false })
  @IsNotEmpty()
  gender?: GenderEnum;

  @Field(() => Float, {nullable: true, description: meta.height.desc})
  @Column({
    name: `${UserPersonalInfoEntity.colprefix}height`,
    type: `decimal`,
    nullable: true,
    precision: 10,
    scale: 2,
    default: null,
  })
  @IsOptional()
  height?: number;

  @Field(() => Float, {nullable: true, description: meta.weight.desc})
  @Column({
    name: `${UserPersonalInfoEntity.colprefix}weight`,
    type: `decimal`,
    nullable: true,
    precision: 10,
    scale: 2,
    default: null,
  })
  @IsOptional()
  weight?: number;

  @Field(() => String, {nullable: true, description: meta.blood_group.desc})
  @Column({
    name: `${UserPersonalInfoEntity.colprefix}blood_group`,
    type: `varchar`,
    nullable: true,
    length: meta.blood_group.validation.maxLength,
    collation: 'utf8mb4_general_ci', 
    default: '0'
  })
  @Index(`${InIndexPrefix}${UserPersonalInfoEntity.colprefix}blood_group`, { unique: false })
  @MaxLength(meta.blood_group.validation.maxLength as number, {message: meta.blood_group.validation.maxLengthMsg})
  @IsOptional()
  blood_group?: string;

  @Field(() => String, {nullable: true, description: meta.drivers_licence_num.desc})
  @Column({
    name: `${UserPersonalInfoEntity.colprefix}drivers_licence_num`,
    type: `varchar`,
    nullable: true,
    length: meta.drivers_licence_num.validation.maxLength,
    collation: 'utf8mb4_general_ci', 
    default: '0'
  })
  @Index(`${InIndexPrefix}${UserPersonalInfoEntity.colprefix}drivers_licence_num`, { unique: false })
  @IsOptional()
  @MaxLength(meta.drivers_licence_num.validation.maxLength as number, {message: meta.drivers_licence_num.validation.maxLengthMsg})
  drivers_licence_num?: string;

  @Field(() => String, {nullable: true, description: meta.about_me.desc})
  @Column({
    name: `${UserPersonalInfoEntity.colprefix}about_me`,
    type: `text`,
    nullable: true,
    collation: 'utf8mb4_general_ci', 
    default: null,
  })
  @IsOptional()
  about_me?: string;

  @Field(() => String, {nullable: true, description: meta.email_sign.desc})
  @Column({
    name: `${UserPersonalInfoEntity.colprefix}email_sign`,
    type: `text`,
    nullable: true,
    collation: 'utf8mb4_general_ci', 
    default: null,
  })
  @IsOptional()
  email_sign?: string;

  @Field(() => String, { nullable: true, description: meta.website_url.desc })
  @Column({
    name: `${UserPersonalInfoEntity.colprefix}website_url`,
    type: 'varchar',
    nullable: true,
    length: meta.website_url.validation.maxLength,
    collation: 'utf8mb4_general_ci',
    comment: `Personal webiste url if any`
  })
  @Index(`${InIndexPrefix}${UserPersonalInfoEntity.colprefix}website_url`, { unique: false })
  @MaxLength(meta.website_url.validation.maxLength as number, { message: meta.website_url.validation.maxLengthMsg })
  @IsOptional()
  website_url?: string;

  @Field(() => String, { nullable: true, description: meta.facebook_profile.desc })
  @Column({
    name: `${UserPersonalInfoEntity.colprefix}facebook_profile`,
    type: 'varchar',
    nullable: true,
    length: meta.facebook_profile.validation.maxLength,
    collation: 'utf8mb4_general_ci',
    comment: `profile/page username/slug`
  })
  @Index(`${InIndexPrefix}${UserPersonalInfoEntity.colprefix}facebook_profile`, { unique: false })
  @MaxLength(meta.facebook_profile.validation.maxLength as number, { message: meta.facebook_profile.validation.maxLengthMsg })
  @IsOptional()
  facebook_profile?: string;

  @Field(() => String, { nullable: true, description: meta.instagram_profile.desc })
  @Column({
    name: `${UserPersonalInfoEntity.colprefix}instagram_profile`,
    type: 'varchar',
    nullable: true,
    length: meta.instagram_profile.validation.maxLength,
    collation: 'utf8mb4_general_ci',
    comment: `profile/page username/slug`
  })
  @Index(`${InIndexPrefix}${UserPersonalInfoEntity.colprefix}instagram_profile`, { unique: false })
  @MaxLength(meta.instagram_profile.validation.maxLength as number, { message: meta.instagram_profile.validation.maxLengthMsg })
  @IsOptional()
  instagram_profile?: string;

  @Field(() => String, { nullable: true, description: meta.youtube_profile.desc })
  @Column({
    name: `${UserPersonalInfoEntity.colprefix}youtube_profile`,
    type: 'varchar',
    nullable: true,
    length: meta.youtube_profile.validation.maxLength,
    collation: 'utf8mb4_general_ci',
    comment: `profile/page username/slug`
  })
  @Index(`${InIndexPrefix}${UserPersonalInfoEntity.colprefix}youtube_profile`, { unique: false })
  @MaxLength(meta.youtube_profile.validation.maxLength as number, { message: meta.youtube_profile.validation.maxLengthMsg })
  @IsOptional()
  youtube_profile?: string;

  @Field(() => String, { nullable: true, description: meta.x_profile.desc })
  @Column({
    name: `${UserPersonalInfoEntity.colprefix}x_profile`,
    type: 'varchar',
    nullable: true,
    length: meta.x_profile.validation.maxLength,
    collation: 'utf8mb4_general_ci',
    comment: `profile/page username/slug`
  })
  @Index(`${InIndexPrefix}${UserPersonalInfoEntity.colprefix}x_profile`, { unique: false })
  @MaxLength(meta.x_profile.validation.maxLength as number, { message: meta.x_profile.validation.maxLengthMsg })
  @IsOptional()
  x_profile?: string;

  @Field(() => String, { nullable: true, description: meta.linkedin_profile.desc })
  @Column({
    name: `${UserPersonalInfoEntity.colprefix}linkedin_profile`,
    type: 'varchar',
    nullable: true,
    length: meta.linkedin_profile.validation.maxLength,
    collation: 'utf8mb4_general_ci',
    comment: `profile/page username/slug`
  })
  @Index(`${InIndexPrefix}${UserPersonalInfoEntity.colprefix}linkedin_profile`, { unique: false })
  @MaxLength(meta.linkedin_profile.validation.maxLength as number, { message: meta.linkedin_profile.validation.maxLengthMsg })
  @IsOptional()
  linkedin_profile?: string;

  @Field(() => String, { nullable: true, description: meta.tiktok_profile.desc })
  @Column({
    name: `${UserPersonalInfoEntity.colprefix}tiktok_profile`,
    type: 'varchar',
    nullable: true,
    length: meta.tiktok_profile.validation.maxLength,
    collation: 'utf8mb4_general_ci',
    comment: `profile/page username/slug`
  })
  @Index(`${InIndexPrefix}${UserPersonalInfoEntity.colprefix}tiktok_profile`, { unique: false })
  @MaxLength(meta.tiktok_profile.validation.maxLength as number, { message: meta.tiktok_profile.validation.maxLengthMsg })
  @IsOptional()
  tiktok_profile?: string;

  @Field(() => String, { nullable: true, description: meta.pinterest_profile.desc })
  @Column({
    name: `${UserPersonalInfoEntity.colprefix}pinterest_profile`,
    type: 'varchar',
    nullable: true,
    length: meta.pinterest_profile.validation.maxLength,
    collation: 'utf8mb4_general_ci',
    comment: `profile/page username/slug`
  })
  @Index(`${InIndexPrefix}${UserPersonalInfoEntity.colprefix}pinterest_profile`, { unique: false })
  @MaxLength(meta.pinterest_profile.validation.maxLength as number, { message: meta.pinterest_profile.validation.maxLengthMsg })
  @IsOptional()
  pinterest_profile?: string;

  @Field(() => DateTime, {nullable: true, description: meta.created.desc})
  @CreateDateColumn({
    name: `${UserPersonalInfoEntity.colprefix}created`,
    type: `datetime`,
    update: false,
  })
  @Index(`${InIndexPrefix}${UserPersonalInfoEntity.colprefix}created`, { unique: false })
  created?: Date;

  @Field(() => DateTime, {nullable: true, description: meta.updated.desc})
  @UpdateDateColumn({
    name: `${UserPersonalInfoEntity.colprefix}updated`, 
    type: `datetime`,
    nullable: true
  })
  @Index(`${InIndexPrefix}${UserPersonalInfoEntity.colprefix}updated`, { unique: false })
  updated?: Date;

  @Field(() => DateTime, {nullable: true, description: meta.deleted.desc})
  @DeleteDateColumn({
    name: `${UserPersonalInfoEntity.colprefix}deleted`, 
    type: `datetime`,
    nullable: true,
    comment:`date-time => Yes | null => No`,
  })
  @Index(`${InIndexPrefix}${UserPersonalInfoEntity.colprefix}deleted`, { unique: false })
  deleted?: Date;


  // ████ INTERNAL RELATIONS ████████████████████████████████████████████████
  
  @Field(() => UserEntity, {nullable: true, description: meta.fr_user.desc})
  @OneToOne(() => UserEntity, (entity: UserEntity) => entity.fr_user_personal_info)
  @JoinColumn({ name: `${UserPersonalInfoEntity.colprefix}id` })
  fr_user?: UserEntity;


  
  // ████ EXTERNAL RELATIONS ████████████████████████████████████████████████

}
