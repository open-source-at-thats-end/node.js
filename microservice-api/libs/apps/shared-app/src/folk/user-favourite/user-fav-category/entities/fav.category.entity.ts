import { EntityMetaCRUDTypeDefinition, EntityCRUDTypeDefinition, DateTime, EntitySuffix, InIndexPrefix, UnIndexPrefix  } from "@libs/library-app";
import { IsEmail, IsJSON, IsMobilePhone, IsNotEmpty, IsOptional, MaxLength, MinLength, ValidateIf } from "class-validator";
import { Column, CreateDateColumn, DeleteDateColumn, Entity, Index, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { Directive, Field, Float, Int, ObjectType } from "@nestjs/graphql";
import { UserFavEntity } from "../../user-fav/entities/user.fav.entity";

const  UserFavCategoryEntityFieldMeta: EntityMetaCRUDTypeDefinition = {

id: {
    desc: `Unique ID of the faq category, auto generated.`,
    validation: {} 
},
title: {
  desc: `Title of the faq category.`,
  validation:{
    maxLength: 64,
    maxLengthMsg: `Maximum length of Title is 64 characters.`,
  }
},
desc: {
    desc: `Description of the faq category.`,
    validation:{
      maxLength: 255,
      maxLengthMsg: `Maximum length of Description is 255 characters.`,
    }
},
active: {
  desc: `Active of the faq category.`,
  validation:{}
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
const  UserFavCategoryVirtualFieldMeta: EntityMetaCRUDTypeDefinition = {

  fr_user_favourite: {
    desc: `Favourite category.`,
    validation: {}
  }, 
} 
export const UserFavCategoryEntityMeta = {...UserFavCategoryEntityFieldMeta, ...UserFavCategoryVirtualFieldMeta};
const meta = UserFavCategoryEntityMeta; // need to use in this file down the line

@ObjectType({ isAbstract: true })
@Directive('@key(fields: "id")')
@Entity({
  name: 'user_fav_category',
  engine: 'InnoDB',
})
export class UserFavCategoryEntity implements EntityCRUDTypeDefinition {

    static colprefix: string = `favcat_`;
    static uploaddir: string = `user-fav-category`;

    static metaname: string = (UserFavCategoryEntity.name).replace(EntitySuffix, '');
    static metadesc: string = 'Provides list of favourite category.';

    @Field(() => Int, {nullable: true, description: meta.id.desc})
    @PrimaryGeneratedColumn({
      name: `${UserFavCategoryEntity.colprefix}id`, 
      type: `int`, 
      unsigned: true, 
      primaryKeyConstraintName: `PRIMARY`,
    })
    id?: number;

    @Field(() => String, {nullable: true, description: meta.title.desc})
    @Column({
      name: `${UserFavCategoryEntity.colprefix}title`, 
      type: `varchar`,
      collation: `utf8mb4_general_ci`,
      length: meta.title.validation.maxLength, 
    })
    @MaxLength(meta.title.validation.maxLength as number, {message: meta.title.validation.maxLengthMsg})
    @Index(`${InIndexPrefix}${UserFavCategoryEntity.colprefix}title`, { unique: false })
    @IsNotEmpty()
    title?: string;

    @Field(() => String, {nullable: true, description: meta.desc.desc})
    @Column({
      name: `${UserFavCategoryEntity.colprefix}desc`, 
      type: `varchar`,
      collation: `utf8mb4_general_ci`,
      length: meta.desc.validation.maxLength, 
    })
    @IsOptional()
    @MaxLength(meta.desc.validation.maxLength as number, {message: meta.desc.validation.maxLengthMsg})
    desc?: string;

    @Field(() => DateTime, {nullable: true, description: meta.active.desc})
    @Column({
      name: `${UserFavCategoryEntity.colprefix}active`, 
      type: `datetime`, 
      comment: `date-time => No | null => Yes`
    })
    @Index(`${InIndexPrefix}${UserFavCategoryEntity.colprefix}active`, { unique: false })
    @IsOptional()
    active?: Date;
    
    @Field(() => DateTime, {nullable: true, description: meta.created.desc})
    @CreateDateColumn({
      name: `${UserFavCategoryEntity.colprefix}created`, 
      type: `datetime`,
      update: false,
    })
    @Index(`${InIndexPrefix}${UserFavCategoryEntity.colprefix}created`, { unique: false })
    created?: Date;

    @Field(() => DateTime, {nullable: true, description: meta.updated.desc})
    @UpdateDateColumn({
      name: `${UserFavCategoryEntity.colprefix}updated`, 
      type: `datetime`,
      nullable: true,
    })
    @Index(`${InIndexPrefix}${UserFavCategoryEntity.colprefix}updated`, { unique: false })
    @IsOptional()
    updated?: Date;

    @Field(() => DateTime, {nullable: true, description: meta.deleted.desc})
    @DeleteDateColumn({
      name: `${UserFavCategoryEntity.colprefix}deleted`,
      type: `datetime`,
      nullable: true,
      comment: `date-time => yes | null => no`,
    })
    @Index(`${InIndexPrefix}${UserFavCategoryEntity.colprefix}deleted`, { unique: false })
    @IsOptional()
    deleted?: Date;

    // ████ INTERNAL RELATIONS ████████████████████████████████████████████████

    @Field(() => [UserFavEntity], {nullable: true, description: meta.fr_user_favourite.desc})
    @OneToMany(() => UserFavEntity, (entity: UserFavEntity) => entity.fr_user_fav_categories)
    fr_user_favourite?: UserFavEntity[];

    // ████ EXTERNAL RELATIONS ████████████████████████████████████████████████
}