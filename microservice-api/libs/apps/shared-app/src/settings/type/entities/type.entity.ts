import { EntityMetaCRUDTypeDefinition, EntityCRUDTypeDefinition, DateTime, EntitySuffix, InIndexPrefix, UnIndexPrefix  } from "@libs/library-app";
import { IsJSON, IsNotEmpty, IsOptional, MaxLength, MinLength } from "class-validator";
import { Column, CreateDateColumn, DeleteDateColumn, Entity, Index, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { Directive, Field, Int, ObjectType } from "@nestjs/graphql";
import { SettingPreferenceEntity } from "../../preference/entities/preference.entity";
import { SettingEntity } from "../../setting/entities/setting.entity";


/*
id?: any;
title?: any;
for_table?: any;
for_table_field?: any;
desc?: any;
created?: any;
updated?: any;
deleted?: any;
*/

const  SettingTypeEntityFieldMeta: EntityMetaCRUDTypeDefinition = {

  id: {
      desc: `Unique ID of the setting type, auto generated.`,
      validation: {} 
  },
  title: {
      desc: `Title of the setting type.`,
      validation:{
        maxLength: 128,
        maxLengthMsg: `Title of the setting type is only 128 characters.`,
      }
  },
  for_table: {
      desc: `Reference table of the setting type.`,
      validation:{
        maxLength: 64,
        maxLengthMsg: `Reference table of the setting type is only 64 characters.`,
      }
  },
  for_table_field: {
      desc: `Reference table field of the setting type.`,
      validation:{
        maxLength: 64,
        maxLengthMsg: `Reference table field of the setting type length is only 64 characters.`,
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

const  SettingTypeVirtualFieldMeta: EntityMetaCRUDTypeDefinition = {

  fr_setting_preference: {
    desc: `Setting preference of Setting type`,
    validation: {}
  },

  fr_setting: {
    desc: `Setting of Setting type`,
    validation: {}
  },
}
export const SettingTypeEntityMeta = {...SettingTypeEntityFieldMeta, ...SettingTypeVirtualFieldMeta};
const meta = SettingTypeEntityMeta; // need to use in this file down the line

@ObjectType({ isAbstract: true })
@Directive('@key(fields: "id")')
@Entity({
  name: 'setting_type',
  engine: 'InnoDB',
})
export class SettingTypeEntity implements EntityCRUDTypeDefinition {

    static colprefix: string = 'settty_';
    static uploaddir: string = 'setting-type';

    static metaname: string = (SettingTypeEntity.name).replace(EntitySuffix, '');
    static metadesc: string = 'Provides list of setting types.';

    @Field(() => Int, {nullable: true, description: meta.id.desc})
    @PrimaryGeneratedColumn({
      name: `${SettingTypeEntity.colprefix}id`, 
      type: `tinyint`, 
      unsigned: true, 
      primaryKeyConstraintName: `PRIMARY`,
    })
    id?: number;

    @Field(() => String, {nullable: true, description: meta.title.desc})
    @Column({
      name: `${SettingTypeEntity.colprefix}title`, 
      type: `varchar`,
      length: meta.title.validation.maxLength,
      collation: `utf8mb4_general_ci`,
    })
    @Index(`${UnIndexPrefix}${SettingTypeEntity.colprefix}title`, { unique: true })
    @MaxLength(meta.title.validation.maxLength as number, {message: meta.title.validation.maxLengthMsg})
    @IsNotEmpty()
    title?: string;

    @Field(() => String, {nullable: true, description: meta.for_table.desc})
    @Column({
      name: `${SettingTypeEntity.colprefix}for_table`, 
      type: `varchar`,
      length: meta.for_table.validation.maxLength,
      collation: `utf8mb4_general_ci`,
      nullable: true,
      default: null,
      comment: `database table name which will be used to set config, that means config related with specific record in table.`,
    })
    @Index(`${InIndexPrefix}${SettingTypeEntity.colprefix}for_table`, { unique: false })
    @MaxLength(meta.for_table.validation.maxLength as number, {message: meta.for_table.validation.maxLengthMsg})
    @IsOptional()
    for_table?: string;

    @Field(() => String, {nullable: true, description: meta.for_table_field.desc})
    @Column({
      name: `${SettingTypeEntity.colprefix}for_table_field`, 
      type: `varchar`,
      length: meta.for_table_field.validation.maxLength,
      collation: `utf8mb4_general_ci`,
      nullable: true,
      default: null,
      comment: `Field name to identify record in table this can be primary key or unique key kind of concept and config will be stored with this field value such as primary key value or unique key value. So, this is identify field name in targeted table.`,
    })
    @MaxLength(meta.for_table_field.validation.maxLength as number, {message: meta.for_table_field.validation.maxLengthMsg})
    @IsOptional()
    for_table_field?: string;

    @Field(() => DateTime, {nullable: true, description: meta.created.desc})
    @CreateDateColumn({
      name: `${SettingTypeEntity.colprefix}created`, 
      type: `datetime`,
      update: false,
    })
    @Index(`${InIndexPrefix}${SettingTypeEntity.colprefix}created`, { unique: false })
    created?: Date;

    @Field(() => DateTime, {nullable: true, description: meta.updated.desc})
    @UpdateDateColumn({
      name: `${SettingTypeEntity.colprefix}updated`, 
      type: `datetime`,
      nullable: true,
    })
    @Index(`${InIndexPrefix}${SettingTypeEntity.colprefix}updated`, { unique: false })
    updated?: Date;

    @Field(() => DateTime, {nullable: true, description: meta.deleted.desc})
    @DeleteDateColumn({
      name: `${SettingTypeEntity.colprefix}deleted`,
      type: `datetime`,
      nullable: true,
      comment: `date-time => Yes | null => No`,
    })
    @Index(`${InIndexPrefix}${SettingTypeEntity.colprefix}deleted`, { unique: false })
    deleted?: Date;

    
    // ████ INTERNAL RELATIONS ████████████████████████████████████████████████ 

    @Field(() => [SettingPreferenceEntity], {nullable: true, description: meta.fr_setting_preference.desc})
    @OneToMany(() => SettingPreferenceEntity, (entity: SettingPreferenceEntity) => entity.fr_setting_type)
    fr_setting_preference?: SettingPreferenceEntity[];

    @Field(() => [SettingEntity], {nullable: true, description: meta.fr_setting.desc})
    @OneToMany(() => SettingEntity, (entity: SettingEntity) => entity.fr_setting_types)
    fr_setting?: SettingEntity[];


    // ████ EXTERNAL RELATIONS ████████████████████████████████████████████████
}