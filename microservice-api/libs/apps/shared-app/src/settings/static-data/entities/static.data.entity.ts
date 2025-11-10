import { EntityMetaCRUDTypeDefinition, EntityCRUDTypeDefinition, DateTime, EntitySuffix, InIndexPrefix, UnIndexPrefix  } from "@libs/library-app";
import { IsJSON, IsNotEmpty, IsOptional, MaxLength, MinLength } from "class-validator";
import { Column, CreateDateColumn, DeleteDateColumn, Entity, Index, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { Directive, Field, Int, ObjectType } from "@nestjs/graphql";
import { SettingPreferenceEntity } from "../../preference/entities/preference.entity";
import { SettingEntity } from "../../setting/entities/setting.entity";
import { StaticDataValueEntity } from "../value/entities/value.entity";



/*
id?: any;
name?: any;
desc?: any;
table?: any;
table_field_for_key?: any;
table_field_for_value?: any;
table_field_for_deleted?: any;
created?: any;
updated?: any; 
deleted?: any;
*/

const  StaticDataEntityFieldMeta: EntityMetaCRUDTypeDefinition = {

  id: {
      desc: `Unique ID of the static data, auto generated.`,
      validation: {} 
  },
  name: {
      desc: `Name of the static data.`,
      validation:{
        maxLength: 128,
        maxLengthMsg: `Maximum length of name is 128 characters.`
      }
  },
  desc: {
      desc: `Description of the static data.`,
      validation:{
        maxLength: 255,
        maxLengthMsg: `Maximum length of desc is 255 characters.`
      }
  },
  table: {
      desc: `Table name of the static data. If static data depends on any seperate table.`,
      validation:{
        maxLength: 128,
        maxLengthMsg: `Maximum length of Table is 128 characters.`
      }
  },
  table_field_for_key: {
      desc: `Table field name of the static data for key.`,
      validation:{
        maxLength: 128,
        maxLengthMsg: `Maximum length of table field name of the static data for key is 128 characters.`
      }
  },
  table_field_for_value: {
      desc: `Table field name of the static data for value.`,
      validation:{
        maxLength: 128,
        maxLengthMsg: `Maximum length of table field name of the static data for value is 128 characters.`
      }
  },
  table_field_for_deleted: {
      desc: `Table field name of the static data for deleted records.`,
      validation:{
        maxLength: 128,
        maxLengthMsg: `Maximum length of table field name of the static data for deleted records is 128 characters.`
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
const  StaticDataVirtualFieldMeta: EntityMetaCRUDTypeDefinition = {
  fr_static_data_values: {
    desc: `Static values of static data`,
    validation: {}
  },

  fr_setting_preference: {
    desc: `Setting preference of Static data`,
    validation: {}
  },

  fr_setting: {
    desc: `Setting of Static data`,
    validation: {}
  },
}
export const StaticDataEntityMeta = {...StaticDataEntityFieldMeta, ...StaticDataVirtualFieldMeta};
const meta = StaticDataEntityMeta; // need to use in this file down the line

@ObjectType({ isAbstract: true })
@Directive('@key(fields: "id")')
@Entity({
  name: 'static_data',
  engine: 'InnoDB',
})
export class StaticDataEntity implements EntityCRUDTypeDefinition {

    static colprefix: string = 'sd_';
    static uploaddir: string = 'static-data';

    static metaname: string = (StaticDataEntity.name).replace(EntitySuffix, '');
    static metadesc: string = 'Provides list of static data in the world.';

    @Field(() => Int, {nullable: true, description: meta.id.desc})
    @PrimaryGeneratedColumn({
      name: `${StaticDataEntity.colprefix}id`, 
      type: `smallint`, 
      unsigned: true, 
      primaryKeyConstraintName: `PRIMARY`,
    })
    id?: number;

    @Field(() => String, {nullable: true, description: meta.name.desc})
    @Column({
      name: `${StaticDataEntity.colprefix}name`, 
      type: `varchar`,
      length: meta.name.validation.maxLength,
      collation: `utf8mb4_general_ci`,
    })
    @Index(`${UnIndexPrefix}${StaticDataEntity.colprefix}name`, { unique: true })
    @MaxLength(meta.name.validation.maxLength as number, {message: meta.name.validation.maxLengthMsg})
    @IsNotEmpty()
    name?: string;

    @Field(() => String, {nullable: true, description: meta.desc.desc})
    @Column({
      name: `${StaticDataEntity.colprefix}desc`, 
      type: `varchar`,
      length: meta.desc.validation.maxLength,
      collation: `utf8mb4_general_ci`,
      nullable: true,
      default: null,
    })
    @MaxLength(meta.desc.validation.maxLength as number, {message: meta.desc.validation.maxLengthMsg})
    @IsOptional()
    desc?: string;

    @Field(() => String, {nullable: true, description: meta.table.desc})
    @Column({
      name: `${StaticDataEntity.colprefix}table`, 
      type: `varchar`,
      length: meta.table.validation.maxLength,
      collation: `utf8mb4_general_ci`,
      nullable: true,
      default: null,
      comment: `Suppose config ask for country name. Then all country name data will come from country table in this case sett_ref_table_name will be name of table and sett_ref_key_field will be field of take like primary key or any which will be used as key of option and sett_ref_value_field will be name of field which will have name of country. Required in case of dynamic value.`,
    })
    @MaxLength(meta.table.validation.maxLength as number, {message: meta.table.validation.maxLengthMsg})
    @Index(`${InIndexPrefix}${StaticDataEntity.colprefix}table`, { unique: false })
    @IsOptional()
    table?: string;

    @Field(() => String, {nullable: true, description: meta.table_field_for_key.desc})
    @Column({
      name: `${StaticDataEntity.colprefix}table_field_for_key`, 
      type: `varchar`,
      length: meta.table_field_for_key.validation.maxLength,
      collation: `utf8mb4_general_ci`,
      nullable: true,
      default: null,
      comment: `key field from specific table. Required in case of dynamic value.`,
    })
    @MaxLength(meta.table_field_for_key.validation.maxLength as number, {message: meta.table_field_for_key.validation.maxLengthMsg})
    @Index(`${InIndexPrefix}${StaticDataEntity.colprefix}table_field_for_key`, { unique: false })
    @IsOptional()
    table_field_for_key?: string;

    @Field(() => String, {nullable: true, description: meta.table_field_for_value.desc})
    @Column({
      name: `${StaticDataEntity.colprefix}table_field_for_value`, 
      type: `varchar`,
      length: meta.table_field_for_value.validation.maxLength,
      collation: `utf8mb4_general_ci`,
      nullable: true,
      default: null,
      comment: `value field from specific table. Required in case of dynamic value.`,
    })
    @MaxLength(meta.table_field_for_value.validation.maxLength as number, {message: meta.table_field_for_value.validation.maxLengthMsg})
    @Index(`${InIndexPrefix}${StaticDataEntity.colprefix}table_field_for_value`, { unique: false })
    @IsOptional()
    table_field_for_value?: string;

    @Field(() => String, {nullable: true, description: meta.table_field_for_deleted.desc})
    @Column({
      name: `${StaticDataEntity.colprefix}table_field_for_deleted`, 
      type: `varchar`,
      length: meta.table_field_for_deleted.validation.maxLength,
      collation: `utf8mb4_general_ci`,
      nullable: true,
      default: null,
      comment: `deleted field from specific table. Required to exclude deleted values for static data.`,
    })
    @MaxLength(meta.table_field_for_deleted.validation.maxLength as number, {message: meta.table_field_for_deleted.validation.maxLengthMsg})
    @Index(`${InIndexPrefix}${StaticDataEntity.colprefix}table_field_for_deleted`, { unique: false })
    @IsOptional()
    table_field_for_deleted?: string;

    @Field(() => DateTime, {nullable: true, description: meta.created.desc})
    @CreateDateColumn({
      name: `${StaticDataEntity.colprefix}created`, 
      type: `datetime`,

    })
    @Index(`${InIndexPrefix}${StaticDataEntity.colprefix}created`, { unique: false })
    created?: Date;

    @Field(() => DateTime, {nullable: true, description: meta.updated.desc})
    @UpdateDateColumn({
      name: `${StaticDataEntity.colprefix}updated`, 
      type: `datetime`,
      nullable: true,
    })
    @Index(`${InIndexPrefix}${StaticDataEntity.colprefix}updated`, { unique: false })
    updated?: Date;

    @Field(() => DateTime, {nullable: true, description: meta.deleted.desc})
    @DeleteDateColumn({
      name: `${StaticDataEntity.colprefix}deleted`,
      type: `datetime`,
      nullable: true,
      comment: `date-time => Yes | null => No`,
    })
    @Index(`${InIndexPrefix}${StaticDataEntity.colprefix}deleted`, { unique: false })
    deleted?: Date;


  // ████ INTERNAL RELATIONS ████████████████████████████████████████████████ 
  
  @Field(() => [StaticDataValueEntity], {nullable: true, description: meta.fr_static_data_values.desc})
  @OneToMany(() => StaticDataValueEntity, (entity: StaticDataValueEntity) => entity.fr_static_data)
  fr_static_data_values?: StaticDataValueEntity[];
  
  @Field(() => [SettingPreferenceEntity], {nullable: true, description: meta.fr_setting_preference.desc})
  @OneToMany(() => SettingPreferenceEntity, (entity: SettingPreferenceEntity) => entity.fr_static_data)
  fr_setting_preference?: SettingPreferenceEntity[];

  @Field(() => [SettingEntity], {nullable: true, description: meta.fr_setting.desc})
  @OneToMany(() => SettingEntity, (entity: SettingEntity) => entity.fr_static_datas)
  fr_setting?: SettingEntity[];


  // ████ EXTERNAL RELATIONS ████████████████████████████████████████████████
}