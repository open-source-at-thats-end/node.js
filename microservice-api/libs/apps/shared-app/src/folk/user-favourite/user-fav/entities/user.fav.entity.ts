import { EntityMetaCRUDTypeDefinition, EntityCRUDTypeDefinition, DateTime, EntitySuffix, InIndexPrefix, UnIndexPrefix  } from "@libs/library-app";
import { IsEmail, IsInt, IsJSON, IsMobilePhone, IsNotEmpty, IsOptional, MaxLength, MinLength, ValidateIf, Min, Max } from "class-validator";
import { Column, CreateDateColumn, DeleteDateColumn, Entity, Index, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { Directive, Field, Float, Int, ObjectType } from "@nestjs/graphql";
import { UserFavCategoryEntity } from "../../user-fav-category/entities/fav.category.entity";
import { UserEntity } from "../../../user/entities/user.entity";
import { AuthorisationEntity } from "apps/shared-app/src/master/authorisation/entities/authorisation.entity";

const UserFavEntityFieldMeta: EntityMetaCRUDTypeDefinition = {

id: {
    desc: `Unique ID of the user favourite, auto generated.`,
    validation: {} 
},

favcat_id: {
    desc: `Favourite category Id of the user favourite.`,
    validation: {}
},

ref_id: {
    desc: `Reference Id of the user favourite.`,
    validation: {
        maxLength: 128,
        maxLengthMsg: `Maximum length of Reference Id is 128 characters.`,
    }
},

notes: {
    desc: `Notes of the user favourite.`,
    validation: {
        maxLength: 255,
        maxLengthMsg: `Maximum length of Notes is 255 characters.`,
    }
},

created_u_id: {
    desc: `User Id of the user favourite added by.`,
    validation: {}
},
created_ar_id: {
    desc: `User authorization Id of the user.`,
    validation: { }
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
const  UserFavVirtualFieldMeta: EntityMetaCRUDTypeDefinition = {
   fr_user_fav_categories: {
    desc: `Favourite categories of the user.`,
    validation: {}
  },

  fr_created_user:{
    desc: `User id of the queueemail added by`,
    validation: {}
  },
  fr_created_authorisation: {
    desc: `Authorisation info of the user role who created email.`,
    validation: {}
  },
} 
export const UserFavEntityMeta = {...UserFavEntityFieldMeta, ...UserFavVirtualFieldMeta};
const meta = UserFavEntityMeta; // need to use in this file down the line

@ObjectType({ isAbstract: true })
@Directive('@key(fields: "id")')
@Entity({
  name: 'user_fav',
  engine: 'InnoDB',
})
export class UserFavEntity implements EntityCRUDTypeDefinition {

    static colprefix: string = `ufav_`;
    static uploaddir: string = `user-fav`;

    static metaname: string = (UserFavEntity.name).replace(EntitySuffix, '');
    static metadesc: string = 'Provides list of user favourite.';

    @Field(() => Int, {nullable: true, description: meta.id.desc})
    @PrimaryGeneratedColumn({
      name: `${UserFavEntity.colprefix}id`, 
      type: `int`, 
      unsigned: true, 
      primaryKeyConstraintName: `PRIMARY`,
    })
    id?: number;

    @Field(() => Int, {nullable: true, description: meta.favcat_id.desc})
    @Column({
      name: `${UserFavEntity.colprefix}favcat_id`, 
      type: `tinyint`, 
      unsigned: true, 
      comment: `FK( user_fav_category => favcat_id)`,
      nullable: false,
    })
    @Index(`${InIndexPrefix}${UserFavEntity.colprefix}favcat_id`, { unique: false })
    @IsInt()
    favcat_id?: number;

    @Field(() => String, {nullable: true, description: meta.ref_id.desc})
    @Column({
      name: `${UserFavEntity.colprefix}ref_id`, 
      type: `varchar`,
      length: meta.ref_id.validation.maxLength,
      collation: `utf8mb4_general_ci`,
      nullable: true,
      default: null,
      comment: `FK (relevant table primary key)`,
    })
    @Index(`${InIndexPrefix}${UserFavEntity.colprefix}ref_id`, { unique: false })
    @MaxLength(meta.ref_id.validation.maxLength as number, {message: meta.ref_id.validation.maxLengthMsg})
    @IsOptional()
    ref_id?: string;

    @Field(() => String, {nullable: true, description: meta.notes.desc})
    @Column({
      name: `${UserFavEntity.colprefix}notes`, 
      type: `varchar`,
      length: meta.notes.validation.maxLength,
      collation: `utf8mb4_general_ci`,
      nullable: true,
      default: null,
    })
    @Index(`${InIndexPrefix}${UserFavEntity.colprefix}notes`, { unique: false })
    @MaxLength(meta.notes.validation.maxLength as number, {message: meta.notes.validation.maxLengthMsg})
    @IsOptional()
    notes?: string;

    @Field(() => Int, {nullable: true, description: meta.created_u_id.desc})
    @Column({
      name: `${UserFavEntity.colprefix}created_u_id`, 
      type: `int`, 
      unsigned: true, 
      comment: `FK(user => u_id)`,
      nullable: true,
      default: null,
    })
    @Index(`${InIndexPrefix}${UserFavEntity.colprefix}created_u_id`, { unique: false })
    @IsInt()
    @IsOptional()
    created_u_id?: number;

    @Field(() => Int, {nullable: true, description: meta.created_ar_id.desc})
    @Column({
      name: `${UserFavEntity.colprefix}created_ar_id`, 
      type: `smallint`, 
      unsigned: true, 
      comment: `FK(authorisation => ar_id)`,
      nullable: true,
      default: null,
    })
    @Index(`${InIndexPrefix}${UserFavEntity.colprefix}created_ar_id`, { unique: false })
    @IsInt()
    @IsOptional()
    created_ar_id?: number;

    @Field(() => DateTime, {nullable: true, description: meta.created.desc})
    @CreateDateColumn({
      name: `${UserFavEntity.colprefix}created`, 
      type: `datetime`,
      update: false,
    })
    @Index(`${InIndexPrefix}${UserFavEntity.colprefix}created`, { unique: false })
    created?: Date;

    @Field(() => DateTime, {nullable: true, description: meta.updated.desc})
    @UpdateDateColumn({
      name: `${UserFavEntity.colprefix}updated`, 
      type: `datetime`,
      nullable: true,
    })
    @Index(`${InIndexPrefix}${UserFavEntity.colprefix}updated`, { unique: false })
    @IsOptional()
    updated?: Date;

    @Field(() => DateTime, {nullable: true, description: meta.deleted.desc})
    @DeleteDateColumn({
      name: `${UserFavEntity.colprefix}deleted`,
      type: `datetime`,
      nullable: true,
      comment: `date-time => yes | null => no`,
    })
    @Index(`${InIndexPrefix}${UserFavEntity.colprefix}deleted`, { unique: false })
    @IsOptional()
    deleted?: Date;

    // ████ INTERNAL RELATIONS ████████████████████████████████████████████████

    @Field(() => UserFavCategoryEntity, {
        nullable: true, 
        description: meta.fr_user_fav_categories.desc,
    })
    @ManyToOne(() => UserFavCategoryEntity, (entity: UserFavCategoryEntity) => entity.fr_user_favourite)
    @JoinColumn({ name: `${UserFavEntity.colprefix}favcat_id` })
    fr_user_fav_categories?: UserFavCategoryEntity;

    @Field(() => UserEntity, {nullable: true, description: meta.fr_created_user.desc})
    @ManyToOne(() => UserEntity, (entity: UserEntity) => entity.fr_user_favourites)
    @JoinColumn({ name: `${UserFavEntity.colprefix}created_u_id` })
    fr_created_user?: UserEntity;
	
	  @Field(() => AuthorisationEntity, {nullable: true, description: meta.fr_created_authorisation.desc})
    @ManyToOne(() => AuthorisationEntity, (entity: AuthorisationEntity) => entity.fr_user_favouries)
    @JoinColumn({ name: `${UserFavEntity.colprefix}created_ar_id` })
    fr_created_authorisation?: AuthorisationEntity;


    // ████ EXTERNAL RELATIONS ████████████████████████████████████████████████
}