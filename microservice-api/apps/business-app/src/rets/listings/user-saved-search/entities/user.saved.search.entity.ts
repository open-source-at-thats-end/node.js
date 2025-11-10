import { EntityMetaCRUDTypeDefinition, EntityCRUDTypeDefinition, DateTime, EntitySuffix, InIndexPrefix, ResolveGraphFieldRelation } from "@libs/library-app";
import { IsInt, IsNotEmpty, IsOptional, MaxLength } from "class-validator";
import { Column, CreateDateColumn, DeleteDateColumn, Double, Entity, Index, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn, Unique, UpdateDateColumn } from "typeorm";
import { Directive, Field, Float, Int, ObjectType } from "@nestjs/graphql";
import { AlertDurationEntity, UserEntity, AuthorisationEntity } from "apps/business-app/src/shared-app/shared.app.entity";

const  UserSavedSearchEntityFieldMeta: EntityMetaCRUDTypeDefinition = {

    id: {
      desc: 'Unique ID of the user saved search, auto generated.',
      validation: {} 
    },
    u_id: {
      desc: 'User Id of the user saved search.',
      validation: {} 
    },
    title: {
      desc: 'Title of the user saved search.',
      validation: {
        maxLength:64,
        maxLengthMsg: "Maximum length of title is 64 characters.",
      } 
    },
    url_slug: {
      desc: 'Url slug of the user saved search.',
      validation: {
        maxLength:255,
        maxLengthMsg: "Maximum length of url slug is 255 characters.",
      } 
    },
    criteria: {
      desc: 'Criteria of the user saved search.',
      validation:{}
    },
    result_count: {
      desc: 'Result count of the user saved search.',
      validation: {} 
    },
    alertdur_id: {
      desc: 'Alert type of the user saved search.',
      validation: {} 
    },
    alert_last_sent: {
      desc: 'Alert last sent of the user saved search.',
      validation: {} 
    },
    listing_last_updated: {
      desc: 'Listing last updated of the user saved search.',
      validation: {} 
    },
    created_u_id: {
      desc: 'Created User ID of the user saved search.',
      validation: {} 
    },
    created_ar_id: {
      desc: 'Created AR ID of the user saved search.',
      validation: {} 
    },
    created: {
      desc: `When record is created, date-time will be saved.`,
      validation:{}
    },
    updated: {
        desc: `When record is updated, date-time will be saved.`,
        validation:{}
    },
    deleted: {
        desc: `When record is soft deleted or soft removed, date-time will be saved otherwise null to indicate record is not deleted.`,
        validation:{}
    }
  };

const  UserSavedSearchVirtualFieldMeta: EntityMetaCRUDTypeDefinition = {
  fr_users:{
    desc: `Users of the user save search.`,
    validation: {}
  },
  fr_created_user:{
    desc: `Created user of the user save search.`,
    validation: {}
  },
  fr_created_authorisation:{
    desc: `Created auth role of the user save search.`,
    validation: {}
  },
  fr_alert_duration:{
    desc: `Alert duration of the user save search.`,
    validation: {}
  },
}

export const UserSavedSearchEntityMeta = {...UserSavedSearchEntityFieldMeta, ...UserSavedSearchVirtualFieldMeta};
const meta = UserSavedSearchEntityMeta; // need to use in this file down the line

@ObjectType({ isAbstract: true })
@Directive('@key(fields: "id")')
@Entity({
  name: 'rets_user_saved_search',
  engine: 'InnoDB',
})
export class UserSavedSearchEntity implements EntityCRUDTypeDefinition {

    static colprefix: string = 'russrch_';
    static uploaddir: string = 'rets-user-saved-search';
    
    static metaname: string = (UserSavedSearchEntity.name).replace(EntitySuffix, '');
    static metadesc: string = 'Provide user saved search.';

    @Field(() => Int, {nullable: true, description: meta.id.desc})
    @PrimaryGeneratedColumn({
      name: `${UserSavedSearchEntity.colprefix}id`, 
      type: 'int', 
      unsigned: true, 
      primaryKeyConstraintName: 'PRIMARY',
    })
    id?: number;

    @Field(() => Int, {nullable: true, description: meta.u_id.desc})
    @Column({
      name: `${UserSavedSearchEntity.colprefix}u_id`,
      type: 'int', 
      unsigned: true, 
      comment:`FK(user => u_id)`
    })
    @IsInt()
    @IsNotEmpty()
    @Index(`${InIndexPrefix}${UserSavedSearchEntity.colprefix}u_id`, { unique: false })
    u_id?: number;

    @Field(() => String, {nullable: true, description: meta.title.desc})
    @Column({
      name: `${UserSavedSearchEntity.colprefix}title`,
      type: 'varchar', 
      collation: 'utf8mb4_general_ci', 
      length: meta.title.validation.maxLength,
    })
    @IsNotEmpty()
    @Index(`${InIndexPrefix}${UserSavedSearchEntity.colprefix}title`, { unique: false })
    @MaxLength(meta.title.validation.maxLength as number, {message: meta.title.validation.maxLengthMsg})
    title?: string;

    @Field(() => String, {nullable: true, description: meta.url_slug.desc})
    @Column({
      name: `${UserSavedSearchEntity.colprefix}url_slug`,
      type: 'varchar', 
      collation: 'utf8mb4_general_ci',
      length: meta.url_slug.validation.maxLength, 
    })
    @IsOptional()
    @MaxLength(meta.url_slug.validation.maxLength as number, {message: meta.url_slug.validation.maxLengthMsg})
    url_slug?: string;

    @Field(() => String, {nullable: true, description: meta.criteria.desc})
    @Column({
      name: `${UserSavedSearchEntity.colprefix}criteria`, 
      type: 'text', 
      collation: 'utf8mb4_general_ci',
    })
    @IsNotEmpty()
    criteria?: string;

    @Field(() => Int, {nullable: true, description: meta.result_count.desc})
    @Column({
      name: `${UserSavedSearchEntity.colprefix}result_count`,
      type: 'int', 
      unsigned: true, 
      default: 0,
    })
    @IsInt()
    @Index(`${InIndexPrefix}${UserSavedSearchEntity.colprefix}result_count`, { unique: false })
    @IsNotEmpty()
    result_count?: number;

    @Field(() => Int, {nullable: true, description: meta.alertdur_id.desc})
    @Column({
      name: `${UserSavedSearchEntity.colprefix}alertdur_id`,
      type: 'smallint', 
      unsigned: true,
      default: 0,
      comment:`FK(alert_duration => alertdur_id)` 
    })
    @IsInt()
    @IsNotEmpty()
    @Index(`${InIndexPrefix}${UserSavedSearchEntity.colprefix}alertdur_id`, { unique: false })
    alertdur_id?: number; 

    @Field(() => DateTime, {nullable: true, description: meta.criteria.desc})
    @Column({
      name: `${UserSavedSearchEntity.colprefix}alert_last_sent`, 
      type: 'datetime',
      comment:`Last Alert Sent Date` 
    })
    @IsOptional()
    alert_last_sent?: Date;

    @Field(() => DateTime, {nullable: true, description: meta.listing_last_updated.desc})
    @Column({
      name: `${UserSavedSearchEntity.colprefix}listing_last_updated`, 
      type: 'datetime', 
      comment:`Max date saved from Listing's LastUpdateDate` 
    })
    @IsNotEmpty()
    listing_last_updated?: Date;

    @Field(() => Int, {nullable: true, description: meta.created_u_id.desc})
    @Column({
      name: `${UserSavedSearchEntity.colprefix}created_u_id`,
      type: 'int', 
      unsigned: true, 
      comment:`FK(user => u_id)` 
    })
    @IsInt()
    @IsOptional()
    @Index(`${InIndexPrefix}${UserSavedSearchEntity.colprefix}created_u_id`, { unique: false })
    created_u_id?: number;

    @Field(() => Int, {nullable: true, description: meta.created_ar_id.desc})
    @Column({
      name: `${UserSavedSearchEntity.colprefix}created_ar_id`,
      type: 'int', 
      unsigned: true, 
      comment:`FK(authorisation => ar_id)` 
    })
    @IsInt()
    @IsOptional()
    @Index(`${InIndexPrefix}${UserSavedSearchEntity.colprefix}created_ar_id`, { unique: false })
    created_ar_id?: number;

    @Field(() => DateTime, {nullable: true, description: meta.created.desc})
    @CreateDateColumn({
      name: `${UserSavedSearchEntity.colprefix}created`, 
      type: `datetime`,
      update: false,
    })
    @Index(`${InIndexPrefix}${UserSavedSearchEntity.colprefix}created`, { unique: false })
    created?: Date;

    @Field(() => DateTime, {nullable: true, description: meta.updated.desc})
    @UpdateDateColumn({
      name: `${UserSavedSearchEntity.colprefix}updated`, 
      type: `datetime`,
      nullable: true,
    })
    @Index(`${InIndexPrefix}${UserSavedSearchEntity.colprefix}updated`, { unique: false })
    @IsOptional()
    updated?: Date;

    @Field(() => DateTime, {nullable: true, description: meta.deleted.desc})
    @DeleteDateColumn({
      name: `${UserSavedSearchEntity.colprefix}deleted`,
      type: `datetime`,
      nullable: true,
      comment: `date-time => Yes | null => No`,
    })
    @Index(`${InIndexPrefix}${UserSavedSearchEntity.colprefix}deleted`, { unique: false })
    @IsOptional()
    deleted?: Date;

    // ████ INTERNAL RELATIONS ████████████████████████████████████████████████
    
        
        
        
    // ████ EXTERNAL RELATIONS ████████████████████████████████████████████████

    // TODO: SUPERGRAPH_FOREIGN_RELATION step 4 - add new userentity filed to return User for given post
    @Field(() => UserEntity,{ nullable: true, description: meta.fr_users.desc })
    @ResolveGraphFieldRelation(() => UserEntity, {
      primaryKey: 'id',
      foreignKey: 'u_id',
    })
    fr_users?: UserEntity;

    @Field(() => UserEntity,{ nullable: true, description: meta.fr_created_user.desc })
    @ResolveGraphFieldRelation(() => UserEntity, {
      primaryKey: 'id',
      foreignKey: 'created_u_id',
    })
    fr_created_user?: UserEntity;

    @Field(() => AlertDurationEntity,{ nullable: true, description: meta.fr_alert_duration.desc })
    @ResolveGraphFieldRelation(() => AlertDurationEntity, {
      primaryKey: 'id',
      foreignKey: 'alertdur_id',
    })
    fr_alert_duration?: AlertDurationEntity;

    @Field(() => AuthorisationEntity,{ nullable: true, description: meta.fr_created_authorisation.desc })
    @ResolveGraphFieldRelation(() => AuthorisationEntity, {
      primaryKey: 'id',
      foreignKey: 'created_ar_id',
    })
    fr_created_authorisation?: AuthorisationEntity;
}

