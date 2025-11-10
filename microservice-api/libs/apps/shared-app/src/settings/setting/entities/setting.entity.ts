import { EntityMetaCRUDTypeDefinition, EntityCRUDTypeDefinition, DateTime, EntitySuffix, InIndexPrefix, UnIndexPrefix  } from "@libs/library-app";
import { IsInt, IsJSON, IsNotEmpty, IsOptional, MaxLength, MinLength } from "class-validator";
import { Column, CreateDateColumn, DeleteDateColumn, Entity, Index, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { Directive, Field, Int, ObjectType } from "@nestjs/graphql";
import { SettingTypeEntity } from "../../type/entities/type.entity";
import { StaticDataEntity } from "../../static-data/entities/static.data.entity";
import { AccessTypeEnum } from "../setting.enum";
import { SettingCategoryEntity } from "../../category/entities/category.entity";
import { FormFieldEntity } from "../../../master/form-field/entities/form.field.entity";
import { DeviceEntity } from "../../../master/device/entities/device.entity";
import { SettingPreferenceEntity } from "../../preference/entities/preference.entity";
import { StaticDataValueEntity } from "../../static-data/value/entities/value.entity";

/*
id?: any; 
key?: any; 
settc_id?: any; 
settty_id?: any; 
frmfield_id?: any; 
device_id?: any; 
sd_id?: any;
sd_name?: any; 
sdv_id?: any;
sdv_key?: any;
sdt_key?: any;
default_plain_value?: any;
access_type?: any; 
title?: any; 
display_title?: any; 
guideline?: any; 
created?: any; 
updated?: any; 
deleted?: any; 
*/

const  SettingEntityFieldMeta: EntityMetaCRUDTypeDefinition = {

  id: {
      desc: `Unique ID of the staticvalue, auto generated.`,
      validation: {} 
  },
  key: {
    desc: `Key of the setting.`,
    validation:{
      maxLength: 128,
      maxLengthMsg: `setting key is 128 characters.`
    }
  },
  settc_id: {
    desc: `Category ID of the setting category.`,
    validation: {} 
  },
  settty_id: {
    desc: `Type ID of the setting type.`,
    validation: {} 
  },
  frmfield_id: {
    desc: `Form control type ID of the form control type.`,
    validation: {} 
  },
  device_id: {
    desc: `Device ID of the device.`,
    validation: {} 
  },
  sd_id: {
    desc: `Static data ID of the static data.`,
    validation: {}
  },
  sd_name: {
    desc: `Slug name of the static data.`,
    validation: {
      maxLength: 128,
      maxLengthMsg: `Sd name is 128 characters.`
    } 
  },
  default_sdv_id: {
    desc: `Static data value ID.`,
    validation: {} 
  },
  default_sdv_key: {
    desc: `Static data value slug.`,
    validation: {
      maxLength: 128,
      maxLengthMsg: `Sdv key is 128 characters.`
    } 
  },
  default_sdt_key: {
    desc: `Default value for Settings entity field sett_ref_value_field value in targeted table in setting entity field ref_table_name.`,
    validation: {
      maxLength: 255,
      maxLengthMsg: `Default sdt key is 255 characters.`
    } 
  },
  default_plain_value: {
    desc: `Default value when any setting has no static data or no reference table relation for setting value it is possible to have some text as a value of config and that time this field will hold the actual value of setting.`,
    validation: {}
  },  
  access_type: {
    desc: `Access whether config is available for end user or internal purpose.`,
    validation:{}
  },
  title : {
    desc: `title of the setting.`,
    validation:{
      maxLength: 128,
      maxLengthMsg: `Maximum length of title is 128 characters.`
    }
  },
  display_title: {
    desc: `Display title of the setting.`,
    validation:{
      maxLength: 128,
      maxLengthMsg: `Maximum length of display title is 128 characters.`
    }
  },
  guideline: {
    desc: `Guideline of the setting.`,
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

const  SettingVirtualFieldMeta: EntityMetaCRUDTypeDefinition = {
  fr_setting_categorys: {
    desc: `catetegorys of Setting`,
    validation: {}
  },

  fr_setting_types: {
    desc: `Setting type of setting`,
    validation: {}
  },

  fr_form_fields: {
    desc: `Setting control type of setting`,
    validation: {}
  },

  fr_devices: {
    desc: `devices of setting`,
    validation: {}
  },

  fr_static_datas: {
    desc: `Static datas of setting `,
    validation: {}
  },

  fr_setting_preference: {
    desc: `Setting preference of setting `,
    validation: {}
  },

  fr_static_data_values: {
    desc: `Static data value preference of setting `,
    validation: {}
  },
}
export const SettingEntityMeta = {...SettingEntityFieldMeta, ...SettingVirtualFieldMeta};
const meta = SettingEntityMeta; // need to use in this file down the line

@ObjectType({ isAbstract: true })
@Directive('@key(fields: "id")')
@Entity({
  name: 'setting',
  engine: 'InnoDB',
})
export class SettingEntity implements EntityCRUDTypeDefinition {

    static colprefix: string = 'sett_';
    static uploaddir: string = 'setting';

    static metaname: string = (SettingEntity.name).replace(EntitySuffix, '');
    static metadesc: string = 'Provides list of setting in the world.';

    @Field(() => Int, {nullable: true, description: meta.id.desc})
    @PrimaryGeneratedColumn({
      name: `${SettingEntity.colprefix}id`, 
      type: `int`, 
      unsigned: true, 
      primaryKeyConstraintName: `PRIMARY`,
    })
    id?: number;

    @Field(() => String, {nullable: true, description: meta.key.desc})
    @Column({
      name: `${SettingEntity.colprefix}key`, 
      type: `varchar`,
      length: meta.key.validation.maxLength,
      collation: `utf8mb4_general_ci`,
      comment: `This will be used in programming. Like... default_time_zone`
    })
    @Index(`${UnIndexPrefix}${SettingEntity.colprefix}key`, { unique: true })
    @MaxLength(meta.key.validation.maxLength as number, {message: meta.key.validation.maxLengthMsg})
    @IsNotEmpty()
    key?: string;

    @Field(() => Int, {nullable: true, description: meta.settty_id.desc})
    @Column({
      name: `${SettingEntity.colprefix}settty_id`, 
      type: `tinyint`, 
      unsigned: true, 
      comment: `FK(settings_type=>settty_id)`,
    })
    @IsInt()
    @Index(`${InIndexPrefix}${SettingEntity.colprefix}settty_id`, { unique: false })
    @IsNotEmpty()
    settty_id?: number;

    @Field(() => Int, {nullable: true, description: meta.settc_id.desc})
    @Column({
      name: `${SettingEntity.colprefix}settc_id`, 
      type: `smallint`, 
      unsigned: true, 
      comment: `FK(settings_category=> settc_id)`,
    })
    @IsInt()
    @Index(`${InIndexPrefix}${SettingEntity.colprefix}settc_id`, { unique: false })
    @IsNotEmpty()
    settc_id?: number;

    @Field(() => Int, {nullable: true, description: meta.frmfield_id.desc})
    @Column({
      name: `${SettingEntity.colprefix}frmfield_id`, 
      type: `tinyint`, 
      unsigned: true, 
      comment: `FK(form_field => frmfield_id )`,
    })
    @IsInt()
    @Index(`${InIndexPrefix}${SettingEntity.colprefix}frmfield_id`, { unique: false })
    @IsNotEmpty()
    frmfield_id?: number;

    @Field(() => Int, {nullable: true, description: meta.device_id.desc})
    @Column({
      name: `${SettingEntity.colprefix}device_id`, 
      type: `smallint`, 
      unsigned: true, 
      nullable: true,
      default: null,
      comment: `FK(device => device_id) If setting is specific to device like iPhone device can have particular setting but not available in desktop device kind of situation. If null that means it is not restricted setting`,
    })
    @IsInt()
    @Index(`${InIndexPrefix}${SettingEntity.colprefix}device_id`, { unique: false })
    @IsOptional()
    device_id?: number;

    @Field(() => Int, {nullable: true, description: meta.sd_id.desc})
    @Column({
      name: `${SettingEntity.colprefix}sd_id`, 
      type: `smallint`, 
      unsigned: true, 
      nullable: true,
      default: null,
      comment: `FK (static_data => sd_id)`,
    })
    @IsInt()
    @Index(`${InIndexPrefix}${SettingEntity.colprefix}sd_id`, { unique: false })
    @IsOptional()
    sd_id?: number;

    @Field(() => String, {nullable: true, description: meta.sd_name.desc})
    @Column({
      name: `${SettingEntity.colprefix}sd_name`, 
      type: `varchar`,
      length: meta.sd_name.validation.maxLength,
      collation: `utf8mb4_general_ci`,
      nullable: true,
      default: null,
      comment: `FK(static_data => sd_name ) in case when setting has values as specific options saved in static data, save static data id in that case. sd_name is not primary key in source tables but it's unique key. Required in case of dynamic value.`
    })
    @Index(`${InIndexPrefix}${SettingEntity.colprefix}sd_name`, { unique: false })
    @MaxLength(meta.sd_name.validation.maxLength as number, {message: meta.sd_name.validation.maxLengthMsg})
    @IsOptional()
    sd_name?: string;

    @Field(() => Int, {nullable: true, description: meta.default_sdv_id.desc})
    @Column({
      name: `${SettingEntity.colprefix}default_sdv_id`, 
      type: `int`, 
      unsigned: true, 
      nullable: true,
      default: null,
      comment: `FK (static_data_value => sdv_id) - Default value's id of setting value`,
    })
    @IsInt()
    @Index(`${InIndexPrefix}${SettingEntity.colprefix}default_sdv_id`, { unique: false })
    @IsOptional()
    default_sdv_id?: number;

    @Field(() => String, {nullable: true, description: meta.default_sdv_key.desc})
    @Column({
      name: `${SettingEntity.colprefix}default_sdv_key`, 
      type: `varchar`,
      length: meta.default_sdv_key.validation.maxLength,
      collation: `utf8mb4_general_ci`,
      nullable: true,
      default: null,
      comment: `FK (static_data_value => sdv_key) - Default value's key of setting key`
    })
    @Index(`${InIndexPrefix}${SettingEntity.colprefix}default_sdv_key`, { unique: false })
    @MaxLength(meta.default_sdv_key.validation.maxLength as number, {message: meta.default_sdv_key.validation.maxLengthMsg})
    @IsOptional()
    default_sdv_key?: string;

    @Field(() => String, {nullable: true, description: meta.default_sdt_key.desc})
    @Column({
      name: `${SettingEntity.colprefix}default_sdt_key`, 
      type: `varchar`,
      length: meta.default_sdt_key.validation.maxLength,
      collation: `utf8mb4_general_ci`,
      nullable: true,
      default: null,
      comment: `sdt - static data from table FK (static_data => sd_table_field_for_value) this filed's value in targeted table in field sd_table_field_for_key) Used for separate table based static data for setting. - Default value in case of value from separate table`
    })
    @Index(`${InIndexPrefix}${SettingEntity.colprefix}default_sdt_key`, { unique: false })
    @MaxLength(meta.default_sdt_key.validation.maxLength as number, {message: meta.default_sdt_key.validation.maxLengthMsg})
    @IsOptional()
    default_sdt_key?: string;

    @Field(() => String, {nullable: true, description: meta.default_plain_value.desc})
    @Column({
      name: `${SettingEntity.colprefix}default_plain_value`, 
      type: `text`,
      collation: `utf8mb4_general_ci`,
      nullable: true,
      default: null,
      comment: `When any setting has no static data or no reference table relation for setting value it is possible to have some text as a value of config and that time this field will hold the actual value of setting - Default value of setting`
    })
    @IsOptional()
    default_plain_value?: string;

    @Field(() => AccessTypeEnum, {nullable: true, description: meta.access_type.desc})
    @Column({
      name: `${SettingEntity.colprefix}access_type`,
      type: `tinyint`,
      unsigned: true, 
      default: AccessTypeEnum.PUBLIC,
      comment: `1=>Public | 2=>Private | whether config is available for end user or internal purpose`,
    })
    @IsInt()
    @Index(`${InIndexPrefix}${SettingEntity.colprefix}access_type`, { unique: false })
    @IsNotEmpty()
    access_type?: number;

    @Field(() => String, {nullable: true, description: meta.title.desc})
    @Column({
      name: `${SettingEntity.colprefix}title`, 
      type: `varchar`,
      length: meta.title.validation.maxLength,
      collation: `utf8mb4_general_ci`,
      comment: `Title to understand for developers`
    })
    @Index(`${InIndexPrefix}${SettingEntity.colprefix}title`, { unique: false })
    @MaxLength(meta.title.validation.maxLength as number, {message: meta.title.validation.maxLengthMsg})
    @IsNotEmpty()
    title?: string;

    @Field(() => String, {nullable: true, description: meta.display_title.desc})
    @Column({
      name: `${SettingEntity.colprefix}display_title`, 
      type: `varchar`,
      length: meta.display_title.validation.maxLength,
      collation: `utf8mb4_general_ci`,
      comment: `Title used for end user to understand`
    })
    @Index(`${InIndexPrefix}${SettingEntity.colprefix}display_title`, { unique: false })
    @MaxLength(meta.display_title.validation.maxLength as number, {message: meta.display_title.validation.maxLengthMsg})
    @IsNotEmpty()
    display_title?: string;

    @Field(() => String, {nullable: true, description: meta.guideline.desc})
    @Column({
      name: `${SettingEntity.colprefix}guideline`, 
      type: `text`,
      collation: `utf8mb4_general_ci`,
      default: null,
      comment: `Explanation about config which can help user to understand it`,
    })
    @IsNotEmpty()
    guideline?: string;

    @Field(() => DateTime, {nullable: true, description: meta.created.desc})
    @CreateDateColumn({
      name: `${SettingEntity.colprefix}created`, 
      type: `datetime`,
    })
    @Index(`${InIndexPrefix}${SettingEntity.colprefix}created`, { unique: false })
    created?: Date;

    @Field(() => DateTime, {nullable: true, description: meta.updated.desc})
    @UpdateDateColumn({
      name: `${SettingEntity.colprefix}updated`, 
      type: `datetime`,
      nullable: true,
    })
    @Index(`${InIndexPrefix}${SettingEntity.colprefix}updated`, { unique: false })
    updated?: Date;

    @Field(() => DateTime, {nullable: true, description: meta.deleted.desc})
    @DeleteDateColumn({
      name: `${SettingEntity.colprefix}deleted`,
      type: `datetime`,
      nullable: true,
      comment: `date-time => Yes | null => No`,
    })
    @Index(`${InIndexPrefix}${SettingEntity.colprefix}deleted`, { unique: false })
    deleted?: Date;
    

    // ████ INTERNAL RELATIONS ████████████████████████████████████████████████ 

    @Field(() => SettingCategoryEntity, {nullable: true, description: meta.fr_setting_categorys.desc})
    @ManyToOne(() => SettingCategoryEntity, (entity: SettingCategoryEntity) => entity.fr_setting)
    @JoinColumn({ name: `${SettingEntity.colprefix}settc_id` })
    fr_setting_categorys?: SettingCategoryEntity;

    @Field(() => SettingTypeEntity, {nullable: true, description: meta.fr_setting_types.desc})
    @ManyToOne(() => SettingTypeEntity, (entity: SettingTypeEntity) => entity.fr_setting)
    @JoinColumn({ name: `${SettingEntity.colprefix}settty_id` })
    fr_setting_types?: SettingTypeEntity;
    
    @Field(() => FormFieldEntity, {nullable: true, description: meta.fr_form_fields.desc})
    @ManyToOne(() => FormFieldEntity, (entity: FormFieldEntity) => entity.fr_setting)
    @JoinColumn({ name: `${SettingEntity.colprefix}frmfield_id` })
    fr_form_fields?: FormFieldEntity; 
    
    @Field(() => DeviceEntity, {nullable: true, description: meta.fr_devices.desc})
    @ManyToOne(() => DeviceEntity, (entity: DeviceEntity) => entity.fr_setting)
    @JoinColumn({ name: `${SettingEntity.colprefix}device_id` })
    fr_devices?: DeviceEntity;

    @Field(() => StaticDataEntity, {nullable: true, description: meta.fr_static_datas.desc})
    @ManyToOne(() => StaticDataEntity, (entity: StaticDataEntity) => entity.fr_setting)
    @JoinColumn({ name: `${SettingEntity.colprefix}sd_id` })
    fr_static_datas?: StaticDataEntity;

    @Field(() => StaticDataValueEntity, {nullable: true, description: meta.fr_static_data_values.desc})
    @ManyToOne(() => StaticDataValueEntity, (entity: StaticDataValueEntity) => entity.fr_setting)
    @JoinColumn({ name: `${SettingEntity.colprefix}default_sdv_id` })
    fr_static_data_values?: StaticDataValueEntity;
 
    @Field(() => [SettingPreferenceEntity], {nullable: true, description: meta.fr_setting_preference.desc})
    @OneToMany(() => SettingPreferenceEntity, (entity: SettingPreferenceEntity) => entity.fr_setting)
    fr_setting_preference?: SettingPreferenceEntity[];


    // ████ EXTERNAL RELATIONS ████████████████████████████████████████████████
}