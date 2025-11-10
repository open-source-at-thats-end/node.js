import { EntityMetaCRUDTypeDefinition, EntityCRUDTypeDefinition, DateTime, YesNoEnum, EntitySuffix, InIndexPrefix  } from "@libs/library-app";
import { IsInt, IsNotEmpty, IsOptional, Max, MaxLength, Min } from "class-validator";
import { Column, CreateDateColumn, DeleteDateColumn, Entity, Index, JoinColumn, ManyToOne, OneToMany, OneToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { Directive, Field, Int, ObjectType } from "@nestjs/graphql";
import { UserEntity } from "../../user/entities/user.entity";
import { CountryEntity } from "../../../geo/country/entities/country.entity";
import { CityEntity } from "../../../geo/city/entities/city.entity";
import { StateEntity } from "../../../geo/state/entities/state.entity";
import { IdentityCardTypeEntity } from "../../../master/identity-card-type/entities/identity.card.type.entity";

const UserIdentityCardEntityFieldMeta: EntityMetaCRUDTypeDefinition = {
  id: {
      desc: `Unique ID of the entity, This is the same as user id`,
      validation: {}
  },
  idctype_id: {
    desc: `Identity card type ID of the user identity card.`,
    validation: {}
  },
  u_id: {
    desc: `User ID of the user identity card.`,
    validation: {}
  },
  num: {
    desc: `Number of the user identity card.`,
    validation: {
      maxLength: 64,
      maxLengthMsg: `Identity card number must not exceed 64 characters.`,
    }
  },
  issue_date: {
    desc: `Issue date of the user identity card.`,
    validation: {}
  },
  issue_country_id: {
    desc: `Country ID of the user identity card.`,
    validation: {}
  },
  issue_state_id: {
    desc: `State ID of the user identity card.`,
    validation: {}
  },
  issue_city_id: {
    desc: `City ID of the user identity card.`,
    validation: {}
  },
  issue_place: {
    desc: `Issue place of the user identity card.`,
    validation: {
      maxLength: 64,
      maxLengthMsg: `Issue place must not exceed 64 characters.`,
    }
  },
  created: {
      desc: `Date time when user identity card is created.`,
      validation:{}
  },
  updated: {
      desc: `Date time when user identity card is updated.`,
      validation:{}
  },
  deleted: {
    desc: `When record is soft deleted or soft removed, date-time will be saved otherwise null to indicate record is not deleted.`,
    validation:{}
  }
};
const  UserIdentityCardVirtualFieldMeta: EntityMetaCRUDTypeDefinition = {
  
  fr_user_identity_card_type:{
    desc: `User identity card type of the user identity card.`,
    validation: {}
  },
  fr_user: {
    desc: `User of the user identity card.`,
    validation: {}
  },
  fr_country: {
    desc: `Country of the user identity card.`,
    validation: {}
  },
  fr_state: {
    desc: `State of the user identity card.`,
    validation: {}
  },
  fr_city: {
    desc: `City of the user identity card.`,
    validation:{}
  }
}
export const UserIdentityCardEntityMeta = {...UserIdentityCardEntityFieldMeta, ...UserIdentityCardVirtualFieldMeta};
const meta = UserIdentityCardEntityMeta; // need to use in this file down the line

/*

id?: any;
idctype_id?: any;
u_id?: any;
num?: any;
issue_date?: any;
issue_country_id?: any;
issue_state_id?: any;
issue_city_id?: any;
issue_place?: any;
created?: any;
updated?: any;
deleted?: any;

*/

@ObjectType({ isAbstract: true })
@Directive('@key(fields: "id")')
@Entity({
  name: 'user_identity_card',
  engine: 'InnoDB',
})
export class UserIdentityCardEntity implements EntityCRUDTypeDefinition {

  static colprefix: string = `uidc_`;
  static uploaddir: string = `user-identity-card`;

  static metaname: string = (UserIdentityCardEntity.name).replace(EntitySuffix, '');
  static metadesc: string = 'UserIdentityCard management module in application.';

  @Field(() => Int, {nullable: true, description: meta.id.desc})
  @PrimaryGeneratedColumn({
    name: `${UserIdentityCardEntity.colprefix}id`, 
    type: `int`, 
    unsigned: true, 
    primaryKeyConstraintName: `PRIMARY`,
  })
  id?: number;
  
  @Field(() => Int, {nullable: true, description: meta.idctype_id.desc})
  @Column({
    name: `${UserIdentityCardEntity.colprefix}idctype_id`,
    type: `smallint`,
    unsigned: true,
    comment: `FK(user_identity_card_type=>uidctype_id)`,
  })
  idctype_id?: number;
  @IsInt()
  @IsNotEmpty()
  @Index(`${InIndexPrefix}${UserIdentityCardEntity.colprefix}idctype_id`, { unique: false })

  @Field(() => Int, {nullable: true, description: meta.u_id.desc})
  @Column({
    name: `${UserIdentityCardEntity.colprefix}u_id`,
    type: `int`,
    unsigned: true,
    comment: `FK(user=>u_id)`,
  })
  u_id?: number;
  @IsNotEmpty()
  @IsInt()
  @Index(`${InIndexPrefix}${UserIdentityCardEntity.colprefix}u_id`, { unique: false })

  @Field(() => String, {nullable: true, description: meta.num.desc})
  @Column({
    name: `${UserIdentityCardEntity.colprefix}num`,
    type: `varchar`,
    length: meta.num.validation.maxLength,
    collation: 'utf8mb4_general_ci', 
  })
  @Index(`${InIndexPrefix}${UserIdentityCardEntity.colprefix}num`, { unique: false })
  @IsNotEmpty()
  @MaxLength(meta.num.validation.maxLength as number, {message: meta.num.validation.maxLengthMsg})
  num?: string;

  @Field(() => DateTime, {nullable: true, description: meta.issue_date.desc})
  @Column({
    name: `${UserIdentityCardEntity.colprefix}issue_date`,
    type: `date`,
    nullable: true,
    default: null,
  })
  @Index(`${InIndexPrefix}${UserIdentityCardEntity.colprefix}issue_date`, { unique: false })
  @IsOptional()
  issue_date?: Date;

  @Field(() => Int, {nullable: true, description: meta.issue_country_id.desc})
  @Column({
    name: `${UserIdentityCardEntity.colprefix}issue_country_id`,
    type: `smallint`,
    unsigned: true,
    comment: `FK(geo_country=>country_id)`,
  })
  @IsInt()
  issue_country_id?: number;
  @IsNotEmpty()
  @Index(`${InIndexPrefix}${UserIdentityCardEntity.colprefix}issue_country_id`, { unique: false })

  @Field(() => Int, {nullable: true, description: meta.issue_state_id.desc})
  @Column({
    name: `${UserIdentityCardEntity.colprefix}issue_state_id`,
    type: `mediumint`,
    unsigned: true,
    comment: `FK(geo_state=>state_id)`,
  })
  issue_state_id?: number;
  @IsNotEmpty()
  @IsInt()
  @Index(`${InIndexPrefix}${UserIdentityCardEntity.colprefix}issue_state_id`, { unique: false })

  @Field(() => Int, {nullable: true, description: meta.issue_city_id.desc})
  @Column({
    name: `${UserIdentityCardEntity.colprefix}issue_city_id`,
    type: `int`,
    unsigned: true,
    comment: `FK(geo_city=>city_id)`,
  })
  issue_city_id?: number;
  @IsNotEmpty()
  @IsInt()
  @Index(`${InIndexPrefix}${UserIdentityCardEntity.colprefix}issue_city_id`, { unique: false })

  @Field(() => String, {nullable: true, description: meta.issue_place.desc})
  @Column({
    name: `${UserIdentityCardEntity.colprefix}issue_place`,
    type: `varchar`,
    nullable: true,
    length: meta.issue_place.validation.maxLength,
    collation: 'utf8mb4_general_ci',  
  })
  @Index(`${InIndexPrefix}${UserIdentityCardEntity.colprefix}issue_place`, { unique: false })
  @IsNotEmpty()
  @MaxLength(meta.issue_place.validation.maxLength as number, {message: meta.issue_place.validation.maxLengthMsg})
  issue_place?: string;
  
  @Field(() => DateTime, {nullable: true, description: meta.created.desc})
  @CreateDateColumn({
    name: `${UserIdentityCardEntity.colprefix}created`,
    type: `datetime`,
    update: false,
  })
  @Index(`${InIndexPrefix}${UserIdentityCardEntity.colprefix}created`, { unique: false })
  @IsOptional()
  created?: Date;

  @Field(() => DateTime, {nullable: true, description: meta.updated.desc})
  @UpdateDateColumn({
    name: `${UserIdentityCardEntity.colprefix}updated`, 
    type: `datetime`,
    nullable: true
  })
  @Index(`${InIndexPrefix}${UserIdentityCardEntity.colprefix}updated`, { unique: false })
  updated?: Date;

  @Field(() => DateTime, {nullable: true, description: meta.deleted.desc})
  @DeleteDateColumn({
    name: `${UserIdentityCardEntity.colprefix}deleted`, 
    type: `datetime`,
    nullable: true,
    comment:`date-time => Yes | null => No`,
  })
  @Index(`${InIndexPrefix}${UserIdentityCardEntity.colprefix}deleted`, { unique: false })
  deleted?: Date;



  // ████ INTERNAL RELATIONS ████████████████████████████████████████████████

  @Field(() => IdentityCardTypeEntity, {nullable: true, description: meta.fr_user_identity_card_type.desc})
  @ManyToOne(() => IdentityCardTypeEntity, (entity: IdentityCardTypeEntity) => entity.fr_user_identity_cards)
  @JoinColumn({ name: `${UserIdentityCardEntity.colprefix}idctype_id` })
  fr_user_identity_card_type?: IdentityCardTypeEntity;

  @Field(() => UserEntity, {nullable: true, description: meta.fr_user.desc})
  @ManyToOne(() => UserEntity, (entity: UserEntity) => entity.fr_user_identity_cards)
  @JoinColumn({ name: `${UserIdentityCardEntity.colprefix}u_id` })
  fr_user?: UserEntity;

  @Field(() => CountryEntity, {nullable: true, description: meta.fr_country.desc})
  @ManyToOne(() => CountryEntity, (entity: CountryEntity) => entity.fr_user_identity_cards)
  @JoinColumn({ name: `${UserIdentityCardEntity.colprefix}issue_country_id` })
  fr_country?: CountryEntity;

  @Field(() => StateEntity, {nullable: true, description: meta.fr_state.desc})
  @ManyToOne(() => StateEntity, (entity: StateEntity) => entity.fr_user_identity_cards)
  @JoinColumn({ name: `${UserIdentityCardEntity.colprefix}issue_state_id` })
  fr_state?: StateEntity;

  @Field(() => CityEntity, {nullable: true, description: meta.fr_city.desc})
  @ManyToOne(() => CityEntity, (entity: CityEntity) => entity.fr_user_identity_cards)
  @JoinColumn({ name: `${UserIdentityCardEntity.colprefix}issue_city_id` })
  fr_city?: CityEntity;

  // ████ EXTERNAL RELATIONS ████████████████████████████████████████████████

}
