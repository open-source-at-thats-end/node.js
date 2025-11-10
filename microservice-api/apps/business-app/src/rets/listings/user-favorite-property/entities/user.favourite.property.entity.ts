import { EntityMetaCRUDTypeDefinition, EntityCRUDTypeDefinition, DateTime, EntitySuffix, InIndexPrefix, ResolveGraphFieldRelation, UnIndexPrefix } from "@libs/library-app";
import { IsInt, IsNotEmpty, IsOptional, MaxLength } from "class-validator";
import { Column, CreateDateColumn, DeleteDateColumn, Double, Entity, Index, OneToMany, PrimaryGeneratedColumn, Unique, UpdateDateColumn, JoinColumn, ManyToOne, OneToOne } from "typeorm";
import { Directive, Field, Float, Int, ObjectType } from "@nestjs/graphql";
import { RetsMlsProviderEntity } from "../../mls-provider/entities/mls.provider.entity";
import { UserEntity } from "apps/business-app/src/shared-app/shared.app.entity";

const  UserFavouritePropertyEntityFieldMeta: EntityMetaCRUDTypeDefinition = {

    id: {
        desc: 'Unique ID of the user favourite property, auto generated.',
        validation: {} 
    },
    u_id: {
      desc: 'User Id of the user favourite property.',
      validation: {} 
    },
    mlsp_id: {
      desc: 'MLSP ID of the user favourite property.',
      validation: {} 
    },
    rl_mls_num: {
      desc: 'MLS NUM of the user favourite property.',
      validation: {
        maxLength:255,
        maxLengthMsg: "Mls num is 255 characters.",
      } 
    },
    notes: {
        desc: 'Notes',
        validation:{
           maxLength:255,
           maxLengthMsg: "Maximum length of notes is 255 characters.",
        }
    },
    created_u_id: {
      desc: 'Created User ID of the user favourite property.',
      validation: {} 
    },
    created_ar_id: {
      desc: 'Created AR ID of the user favourite property.',
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

const  UserFavouritePropertyVirtualFieldMeta: EntityMetaCRUDTypeDefinition = {
  fr_mlsp_id: {
    desc: `MLSP ID of the user favourite property.`,
    validation: {}
  },
  fr_users:{
    desc: `Users of the user favourite property.`,
    validation: {}
  },
  fr_created_user:{
    desc: `Created user of the user favourite property.`,
    validation: {}
  },
  fr_created_authorisation:{
    desc: `Created auth role of the user favourite property.`,
    validation: {}
  },
}

export const UserFavouritePropertyEntityMeta = {...UserFavouritePropertyEntityFieldMeta, ...UserFavouritePropertyVirtualFieldMeta};
const meta = UserFavouritePropertyEntityMeta; // need to use in this file down the line

@ObjectType({ isAbstract: true })
@Directive('@key(fields: "id")')
@Entity({
  name: 'rets_user_favorite_property',
  engine: 'InnoDB',
})
@Unique(`${UnIndexPrefix}rufavprop_listing_id`,[`u_id`, `mlsp_id`, `rl_mls_num`])
export class UserFavouritePropertyEntity implements EntityCRUDTypeDefinition {

    static colprefix: string = 'rufavprop_';
    static uploaddir: string = 'rets-user-favorite-property';
    
    static metaname: string = (UserFavouritePropertyEntity.name).replace(EntitySuffix, '');
    static metadesc: string = 'Provide list of user favourite property.';

    @Field(() => Int, {nullable: true, description: meta.id.desc})
    @PrimaryGeneratedColumn({
      name: `${UserFavouritePropertyEntity.colprefix}id`, 
      type: 'int', 
      unsigned: true, 
      primaryKeyConstraintName: 'PRIMARY',
    })
    id?: number;

    @Field(() => Int, {nullable: true, description: meta.u_id.desc})
    @Column({
      name: `${UserFavouritePropertyEntity.colprefix}u_id`,
      type: 'int', 
      unsigned: true, 
      comment : `FK(user => u_id)`
    })
    @IsInt()
    @IsNotEmpty()
    @Index(`${InIndexPrefix}${UserFavouritePropertyEntity.colprefix}u_id`, { unique: false })
    u_id?: number;

    @Field(() => Int, {nullable: true, description: meta.mlsp_id.desc})
    @Column({
      name: `${UserFavouritePropertyEntity.colprefix}mlsp_id`,
      type: 'int', 
      unsigned: true, 
      comment : `FK(rets_mls_provider => mlsp_id)`
    })
    @IsInt()
    @IsNotEmpty()
    @Index(`${InIndexPrefix}${UserFavouritePropertyEntity.colprefix}mlsp_id`, { unique: false })
    mlsp_id?: number;

    @Field(() => String, {nullable: true, description: meta.rl_mls_num.desc})
    @Column({
      name: `${UserFavouritePropertyEntity.colprefix}rl_mls_num`,
      type: 'varchar', 
      unsigned: true, 
      comment : `mls_num of rets_listing`,
      length: meta.rl_mls_num.validation.maxLength,
    })
    @IsNotEmpty()
    @Index(`${InIndexPrefix}${UserFavouritePropertyEntity.colprefix}rl_mls_num`, { unique: false })
    rl_mls_num?: string;

    @Field(() => String, {nullable: true, description: meta.notes.desc})
    @Column({
      name: `${UserFavouritePropertyEntity.colprefix}notes`, 
      type: 'varchar', 
      collation: 'utf8mb4_general_ci',
      length: meta.notes.validation.maxLength,
    })
    @IsOptional()
    @MaxLength(meta.notes.validation.maxLength as number, {message: meta.notes.validation.maxLengthMsg})
    notes?: string;

    @Field(() => Int, {nullable: true, description: meta.created_u_id.desc})
    @Column({
      name: `${UserFavouritePropertyEntity.colprefix}created_u_id`,
      type: 'int', 
      unsigned: true, 
      comment : `FK(user => u_id)`
    })
    @IsInt()
    @IsOptional()
    @Index(`${InIndexPrefix}${UserFavouritePropertyEntity.colprefix}created_u_id`, { unique: false })
    created_u_id?: number;

    @Field(() => Int, {nullable: true, description: meta.created_ar_id.desc})
    @Column({
      name: `${UserFavouritePropertyEntity.colprefix}created_ar_id`,
      type: 'int', 
      unsigned: true, 
      comment : `FK(authorisation => ar_id)`
    })
    @IsInt()
    @IsOptional()
    @Index(`${InIndexPrefix}${UserFavouritePropertyEntity.colprefix}created_ar_id`, { unique: false })
    created_ar_id?: number;

    @Field(() => DateTime, {nullable: true, description: meta.created.desc})
    @CreateDateColumn({
      name: `${UserFavouritePropertyEntity.colprefix}created`, 
      type: `datetime`,
      update: false,
    })
    @Index(`${InIndexPrefix}${UserFavouritePropertyEntity.colprefix}created`, { unique: false })
    created?: Date;

    @Field(() => DateTime, {nullable: true, description: meta.updated.desc})
    @UpdateDateColumn({
      name: `${UserFavouritePropertyEntity.colprefix}updated`, 
      type: `datetime`,
      nullable: true,
    })
    @Index(`${InIndexPrefix}${UserFavouritePropertyEntity.colprefix}updated`, { unique: false })
    @IsOptional()
    updated?: Date;

    @Field(() => DateTime, {nullable: true, description: meta.deleted.desc})
    @DeleteDateColumn({
      name: `${UserFavouritePropertyEntity.colprefix}deleted`,
      type: `datetime`,
      nullable: true,
      comment: `date-time => Yes | null => No`,
    })
    @Index(`${InIndexPrefix}${UserFavouritePropertyEntity.colprefix}deleted`, { unique: false })
    @IsOptional()
    deleted?: Date;

    // ████ INTERNAL RELATIONS ████████████████████████████████████████████████

    @Field(() => RetsMlsProviderEntity, {nullable: true, description: meta.fr_mlsp_id.desc})
    @ManyToOne(() => RetsMlsProviderEntity, (entity: RetsMlsProviderEntity) => entity.fr_user_favourite_mlsp_id)
    @JoinColumn({ name: `${UserFavouritePropertyEntity.colprefix}mlsp_id` })
    fr_mlsp_id?: RetsMlsProviderEntity;
  
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
 }

