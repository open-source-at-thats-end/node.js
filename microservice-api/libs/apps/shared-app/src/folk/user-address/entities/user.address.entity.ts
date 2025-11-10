import { EntityMetaCRUDTypeDefinition, EntityCRUDTypeDefinition, DateTime, YesNoEnum, EntitySuffix, InIndexPrefix  } from "@libs/library-app";
import { IsEmail, IsInt, IsLatitude, IsLongitude, IsMobilePhone, isNotEmpty, IsNotEmpty, IsNumber, IsOptional, IsString, Matches, Max, MaxLength, Min, MinLength, ValidateIf } from "class-validator";
import { Column, CreateDateColumn, DeleteDateColumn, Entity, Index, JoinColumn, ManyToOne, OneToMany, OneToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { Directive, Field, Int, ObjectType } from "@nestjs/graphql";
import { GraphQLEmailAddress } from "graphql-scalars";
import { UserEntity } from "../../user/entities/user.entity";
import { number } from "joi";
import { CountryEntity } from "../../../geo/country/entities/country.entity";
import { CityEntity } from "../../../geo/city/entities/city.entity";
import { StateEntity } from "../../../geo/state/entities/state.entity";

const UserAddressEntityFieldMeta: EntityMetaCRUDTypeDefinition = {
  id: {
      desc: `Unique ID of the entity, This is the same as user id`,
      validation: {}
  },
  u_id: {
      desc: `User ID of the user address.`,
      validation: {}
  },
  title: {
      desc: `Title of the user address.`,
      validation: {
        maxLength: 128,
        maxLengthMsg: `Maximum length of title of the user address is 128 characters.`,
      }
  },
  fname: {
      desc: `First name of the user address.`,
      validation: {
        maxLength: 32,
        maxLengthMsg: `Maximum length of first name of the user address is 32 characters.`,
      }
  },
  lname: {
      desc: `Last name of the user address.`,
      validation: {
        maxLength: 32,
        maxLengthMsg: `Maximum length of Last name of the user address is 32 characters.`,
      }
  },
  mobile: {
      desc: `Mobile number of the user address.`,
      validation: {
        isMustBeMsg: `Must be a valid mobile number.`,
        maxLength: 16,
        maxLengthMsg: `Maximum length of Mobile number is 16 characters.`,
      }
  },
  mobile_cc: {
      desc: `Mobile country code of the user address.`,
      validation: {
        maxLength: 8,
        maxLengthMsg: `Maximum length of mobile country code is 8 characters.`,
      }
  },
  email: {
    desc: `Email of the user address.`,
    validation: {
        isMustBe: `Must be a valid email address.`,
        maxLength: 128,
        maxLengthMsg: `Maximum length of Email is 128 characters.`,
      }
  },
  address: {
    desc: `Address of the user address.`,
    validation: {
        maxLength: 255,
        maxLengthMsg: `Maximum length of Address is 255 characters.`,
     }
  },
  country_id: {
    desc: `Country ID of the user address.`,
    validation: {}
  },
  state_id: {
    desc: `State ID of the user address.`,
    validation: {}
  },
  city_id: {
    desc: `City ID of the user address.`,
    validation: {}
  },
  postal_zip_code: {
    desc: `Postal zip code of the user address.`,
    validation: {
      maxLength: 16,
      maxLengthMsg: `Maximum length of Postal zip code is 16 characters.`,
    }
  },
  created: {
      desc: `Date time when user address is created.`,
      validation:{}
  },
  updated: {
      desc: `Date time when user address is updated.`,
      validation:{}
  },
  deleted: {
    desc: `When record is soft deleted or soft removed, date-time will be saved otherwise null to indicate record is not deleted.`,
    validation:{}
  }
};
const  UserAddressVirtualFieldMeta: EntityMetaCRUDTypeDefinition = {
  fr_user: {
    desc: `User of the user address.`,
    validation: {}
  },
  fr_country: {
    desc: `Country of the user address.`,
    validation: {}
  },
  fr_state: {
    desc: `State of the user address.`,
    validation: {}
  },
  fr_city: {
    desc: `City of the user address.`,
    validation:{}
  }
}
export const UserAddressEntityMeta = {...UserAddressEntityFieldMeta, ...UserAddressVirtualFieldMeta};
const meta = UserAddressEntityMeta; // need to use in this file down the line

/*
id?: any;
u_id?: any;
fname?: any;
lname?: any;
mobile?: any;
mobile_cc?: any;
email?: any;
address?: any;
country_id?: any;
state_id?: any;
city_id?: any;
postal_zip_code?: any;
created?: any;
updated?: any;
deleted?: any;
*/

@ObjectType({ isAbstract: true })
@Directive('@key(fields: "id")')
@Entity({
  name: 'user_address',
  engine: 'InnoDB',
})
export class UserAddressEntity implements EntityCRUDTypeDefinition {
  static colprefix = `uaddr_`;
  static uploaddir: string = `user-address`;

  static metaname: string = (UserAddressEntity.name).replace(EntitySuffix, '');
  static metadesc: string = 'UserAddress management module in application.';

  @Field(() => Int, {nullable: true, description: meta.id.desc})
  @PrimaryGeneratedColumn({
    name: `${UserAddressEntity.colprefix}id`, 
    type: `int`, 
    unsigned: true, 
    primaryKeyConstraintName: `PRIMARY`,
  })
  id?: number;

  @Field(() => Int, {nullable: true, description: meta.u_id.desc})
  @Column({
    name: `${UserAddressEntity.colprefix}u_id`,
    type: `int`,
    unsigned: true,
    default: null,
    comment: `FK(user=>u_id)`,
  })
  @Index(`${InIndexPrefix}${UserAddressEntity.colprefix}u_id`, { unique: false })
  @IsNotEmpty()
  @IsInt()
  u_id?: number;

  @Field(() => String, {nullable: true, description: meta.title.desc})
  @Column({
    name: `${UserAddressEntity.colprefix}title`,
    type: `varchar`,
    nullable: true,
    default: null,
    length: meta.title.validation.maxLength,
    collation: 'utf8mb4_general_ci', 
  })
  @Index(`${InIndexPrefix}${UserAddressEntity.colprefix}title`, { unique: false })
  @IsOptional()
  @MaxLength(meta.title.validation.maxLength as number, {message: meta.title.validation.maxLengthMsg})
  title?: string;

  @Field(() => String, {nullable: true, description: meta.fname.desc})
  @Column({
    name: `${UserAddressEntity.colprefix}fname`,
    type: `varchar`,
    nullable: true,
    default: null,
    length: meta.fname.validation.maxLength,
    collation: 'utf8mb4_general_ci', 
  })
  @Index(`${InIndexPrefix}${UserAddressEntity.colprefix}fname`, { unique: false })
  @IsOptional()
  @MaxLength(meta.fname.validation.maxLength as number, {message: meta.fname.validation.maxLengthMsg})
  fname?: string;

  @Field(() => String, {nullable: true, description: meta.lname.desc})
  @Column({
    name: `${UserAddressEntity.colprefix}lname`,
    type: `varchar`,
    nullable: true,
    default: null,
    length: meta.lname.validation.maxLength,
    collation: 'utf8mb4_general_ci', 
  })
  @Index(`${InIndexPrefix}${UserAddressEntity.colprefix}lname`, { unique: false })
  @IsOptional()
  @MaxLength(meta.lname.validation.maxLength as number, {message: meta.lname.validation.maxLengthMsg})
  lname?: string;
  
  @Field(() => String, {nullable: true, description: meta.mobile.desc})
  @Column({
    name: `${UserAddressEntity.colprefix}mobile`, 
    type: `varchar`, 
    nullable: true,
    default: null,
    length: meta.mobile.validation.maxLength,
    unique: true,
    collation: 'utf8mb4_general_ci', 
  })
  @Index(`${InIndexPrefix}${UserAddressEntity.colprefix}mobile`, { unique: false })
  @IsMobilePhone(`en-US`,{strictMode: false}, { message: meta.mobile.validation.isMustBeMsg })
  @IsOptional()
  @MaxLength(meta.mobile.validation.maxLength as number, {message: meta.mobile.validation.maxLengthMsg})
  mobile?: string;

  @Field(() => String, {nullable: true, description: meta.mobile_cc.desc})
  @Column({
    name: `${UserAddressEntity.colprefix}mobile_cc`,
    type: `varchar`,
    nullable: true,
    default: null,
    length: meta.mobile_cc.validation.maxLength,
    unique: true,
    collation: 'utf8mb4_general_ci', 
  })
  @ValidateIf((entity) => entity.mobile_cc !== undefined && entity.mobile_cc !== null) // recovery_mobile_cc is required if recovery_mobile is provided
  @MaxLength(meta.mobile_cc.validation.maxLength as number, {message: meta.mobile_cc.validation.maxLengthMsg})
  @Index(`${InIndexPrefix}${UserAddressEntity.colprefix}mobile_cc`, { unique: false })
  @IsOptional()
  mobile_cc?: string;

  @Field(() => String, {nullable: true, description: meta.email.desc})
  @Column({
    name: `${UserAddressEntity.colprefix}email`,
    type: `varchar`,
    nullable: true,
    default: null,
    length: meta.email.validation.maxLength,
    collation: 'utf8mb4_general_ci', 
  })
  @IsOptional()
  @Index(`${InIndexPrefix}${UserAddressEntity.colprefix}email`, { unique: false })
  @IsEmail({}, { message: meta.email.validation.isMustBeMsg })
  @MaxLength(meta.email.validation.maxLength as number, {message: meta.email.validation.maxLengthMsg})
  email?: string;

  @Field(() => String, {nullable: true, description: meta.address.desc})
  @Column({
    name: `${UserAddressEntity.colprefix}address`,
    type: `varchar`,
    nullable: true,
    default: null,
    length: meta.address.validation.maxLength,
    collation: 'utf8mb4_general_ci',
  })
  @Index(`${InIndexPrefix}${UserAddressEntity.colprefix}address`, { unique: false })
  @IsOptional()
  @MaxLength(meta.address.validation.maxLength as number, {message: meta.address.validation.maxLengthMsg})
  address?: string;

  @Field(() => Int, {nullable: true, description: meta.country_id.desc})
  @Column({
    name: `${UserAddressEntity.colprefix}country_id`,
    type: `smallint`,
    unsigned: true,
    comment: `FK (geo_country => country_id)`,
  })
  @IsNotEmpty()
  @IsInt()
  @Index(`${InIndexPrefix}${UserAddressEntity.colprefix}country_id`, { unique: false })
  country_id?: number;

  @Field(() => Int, {nullable: true, description: meta.state_id.desc})
  @Column({
    name: `${UserAddressEntity.colprefix}state_id`,
    type: `mediumint`,
    unsigned: true,
    comment: `FK (geo_state => state_id)`,
  })
  @IsInt()
  @IsNotEmpty()
  @Index(`${InIndexPrefix}${UserAddressEntity.colprefix}state_id`, { unique: false })
  state_id?: number;

  @Field(() => Int, {nullable: true, description: meta.city_id.desc})
  @Column({
    name: `${UserAddressEntity.colprefix}city_id`,
    type: `int`,
    unsigned: true,
    comment: `FK (geo_city => city_id)`,
  })
  @IsNotEmpty()
  @IsInt()
  @Index(`${InIndexPrefix}${UserAddressEntity.colprefix}city_id`, { unique: false })
  city_id?: number;

  @Field(() => String, {nullable: true, description: meta.postal_zip_code.desc})
  @Column({
    name: `${UserAddressEntity.colprefix}postal_zip_code`,
    type: `varchar`,
    nullable: true,
    default: null,
    length: meta.address.validation.maxLength,
    collation: 'utf8mb4_general_ci',
  })
  @Index(`${InIndexPrefix}${UserAddressEntity.colprefix}postal_zip_code`, { unique: false })
  @IsOptional()
  @MaxLength(meta.postal_zip_code.validation.maxLength as number, {message: meta.postal_zip_code.validation.maxLengthMsg})
  postal_zip_code?: string;

  @Field(() => DateTime, {nullable: true, description: meta.created.desc})
  @CreateDateColumn({
    name: `${UserAddressEntity.colprefix}created`,
    type: `datetime`,
    update: false,
  })
  @Index(`${InIndexPrefix}${UserAddressEntity.colprefix}created`, { unique: false })
  @IsOptional()
  created?: Date;

  @Field(() => DateTime, {nullable: true, description: meta.updated.desc})
  @UpdateDateColumn({
    name: `${UserAddressEntity.colprefix}updated`, 
    type: `datetime`,
    nullable: true
  })
  @Index(`${InIndexPrefix}${UserAddressEntity.colprefix}updated`, { unique: false })
  updated?: Date;

  @Field(() => DateTime, {nullable: true, description: meta.deleted.desc})
  @DeleteDateColumn({
    name: `${UserAddressEntity.colprefix}deleted`, 
    type: `datetime`,
    nullable: true,
    comment:`date-time => Yes | null => No`,
  })
  @Index(`${InIndexPrefix}${UserAddressEntity.colprefix}deleted`, { unique: false })
  deleted?: Date;

  @Field(() => UserEntity, {
    nullable: true, 
    description: meta.fr_user.desc,
  })

  // ████ INTERNAL RELATIONS ████████████████████████████████████████████████

  @Field(() => UserEntity, {nullable: true, description: meta.fr_user.desc})
  @ManyToOne(() => UserEntity, (entity: UserEntity) => entity.fr_user_addresses)
  @JoinColumn({ name: `${UserAddressEntity.colprefix}u_id` })
  fr_user?: UserEntity;

  @Field(() => CountryEntity, {nullable: true, description: meta.fr_country.desc})
  @ManyToOne(() => CountryEntity, (entity: CountryEntity) => entity.fr_user_addresses)
  @JoinColumn({ name: `${UserAddressEntity.colprefix}country_id` })
  fr_country?: CountryEntity;

  @Field(() => StateEntity, {nullable: true, description: meta.fr_state.desc})
  @ManyToOne(() => StateEntity, (entity: StateEntity) => entity.fr_user_addresses)
  @JoinColumn({ name: `${UserAddressEntity.colprefix}state_id` })
  fr_state?: StateEntity;

  @Field(() => CityEntity, {nullable: true, description: meta.fr_city.desc})
  @ManyToOne(() => CityEntity, (entity: CityEntity) => entity.fr_user_addresses)
  @JoinColumn({ name: `${UserAddressEntity.colprefix}city_id` })
  fr_city?: CityEntity;


  // ████ EXTERNAL RELATIONS ████████████████████████████████████████████████

}
