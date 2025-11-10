import { EntityMetaCRUDTypeDefinition, EntityCRUDTypeDefinition, DateTime, EntitySuffix, InIndexPrefix  } from "@libs/library-app";
import { IsJSON, IsNotEmpty, IsOptional, MaxLength, MinLength } from "class-validator";
import { Column, CreateDateColumn, DeleteDateColumn, Entity, Index, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { Directive, Field, Int, ObjectType } from "@nestjs/graphql";
import { SettingEntity } from "../../setting/entities/setting.entity";


/*
id?: any;
title?: any;
desc?: any;
created?: any;
updated?: any;
deleted?: any;
*/

const  SettingCategoryEntityFieldMeta: EntityMetaCRUDTypeDefinition = {

  id: {
      desc: `Unique ID of the setting category, auto generated.`,
      validation: {} 
  },
  title: {
      desc: `Title of the setting category.`,
      validation:{
        maxLength: 128,
        maxLengthMsg: `Maximum length of title is 128 characters.`
      }
  },
  desc: {
      desc: `Description of the setting category.`,
      validation:{
        maxLength: 255,
        maxLengthMsg: `Maximum length of desc is 255 characters.`
      }
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
const  SettingCategoryVirtualFieldMeta: EntityMetaCRUDTypeDefinition = {

  fr_setting: {
    desc: `Setting of Setting category`,
    validation: {}
  },

}
export const SettingCategoryEntityMeta = {...SettingCategoryEntityFieldMeta, ...SettingCategoryVirtualFieldMeta};
const meta = SettingCategoryEntityMeta; // need to use in this file down the line

@ObjectType({ isAbstract: true })
@Directive('@key(fields: "id")')
@Entity({
  name: 'setting_category',
  engine: 'InnoDB',
})
export class SettingCategoryEntity implements EntityCRUDTypeDefinition {

    static colprefix: string = 'settc_';
    static uploaddir: string = 'setting-category';

    static metaname: string = (SettingCategoryEntity.name).replace(EntitySuffix, '');
    static metadesc: string = 'Provides list of settingcategories in the world.';

    @Field(() => Int, {nullable: true, description: meta.id.desc})
    @PrimaryGeneratedColumn({
      name: `${SettingCategoryEntity.colprefix}id`, 
      type: `tinyint`, 
      unsigned: true, 
      primaryKeyConstraintName: `PRIMARY`,
    })
    id?: number;

    @Field(() => String, {nullable: true, description: meta.title.desc})
    @Column({
      name: `${SettingCategoryEntity.colprefix}title`, 
      type: `varchar`,
      length: meta.title.validation.maxLength,
      collation: `utf8mb4_general_ci`,
    })
    @Index(`${InIndexPrefix}${SettingCategoryEntity.colprefix}title`, { unique: false })
    @MaxLength(meta.title.validation.maxLength as number, {message: meta.title.validation.maxLengthMsg})
    @IsNotEmpty()
    title?: string;

    @Field(() => String, {nullable: true, description: meta.desc.desc})
    @Column({
      name: `${SettingCategoryEntity.colprefix}desc`, 
      type: `varchar`,
      length: meta.desc.validation.maxLength,
      collation: `utf8mb4_general_ci`,
      comment: `Explain about category for what purpose and what is the intension behind it`,
    })
    @MaxLength(meta.desc.validation.maxLength as number, {message: meta.desc.validation.maxLengthMsg})
    @IsNotEmpty()
    desc?: string;

    @Field(() => DateTime, {nullable: true, description: meta.created.desc})
    @CreateDateColumn({
      name: `${SettingCategoryEntity.colprefix}created`, 
      type: `datetime`,
      update: false,

    })
    @Index(`${InIndexPrefix}${SettingCategoryEntity.colprefix}created`, { unique: false })
    created?: Date;

    @Field(() => DateTime, {nullable: true, description: meta.updated.desc})
    @UpdateDateColumn({
      name: `${SettingCategoryEntity.colprefix}updated`, 
      type: `datetime`,
      nullable: true,
    })
    @Index(`${InIndexPrefix}${SettingCategoryEntity.colprefix}updated`, { unique: false })
    updated?: Date;

    @Field(() => DateTime, {nullable: true, description: meta.deleted.desc})
    @DeleteDateColumn({
      name: `${SettingCategoryEntity.colprefix}deleted`,
      type: `datetime`,
      nullable: true,
      comment: `date-time => Yes | null => No`,
    })
    @Index(`${InIndexPrefix}${SettingCategoryEntity.colprefix}deleted`, { unique: false })
    deleted?: Date;


    // ████ INTERNAL RELATIONS ████████████████████████████████████████████████ 

    @Field(() => [SettingEntity], {nullable: true, description: meta.fr_setting.desc})
    @OneToMany(() => SettingEntity, (entity: SettingEntity) => entity.fr_setting_categorys)
    fr_setting?: SettingEntity[];


    // ████ EXTERNAL RELATIONS ████████████████████████████████████████████████
}