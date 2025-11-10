import { EntityMetaCRUDTypeDefinition, EntityCRUDTypeDefinition, DateTime, EntitySuffix, InIndexPrefix, UnIndexPrefix } from "@libs/library-app";
import { IsInt, IsJSON, IsNotEmpty, IsOptional, MaxLength, MinLength } from "class-validator";
import { Column, CreateDateColumn, DeleteDateColumn, Entity, Index, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn, Unique, UpdateDateColumn } from "typeorm";
import { Directive, Field, Int, ObjectType } from "@nestjs/graphql";
import { SettingTypeEntity } from "../../type/entities/type.entity";
import { StaticDataEntity } from "../../static-data/entities/static.data.entity";
import { SettingEntity } from "../../setting/entities/setting.entity";
import { StaticDataValueEntity } from "../../static-data/value/entities/value.entity";

/*
id?: any;
settty_id?: any;
record_id?: any;
sett_id?: any;
sett_key?: any;
sd_id?: any;
sd_name?: any;
sdv_id?: any;
sdv_key?: any;
sdt_key?: any;
plain_value?: any;
created?: any;
updated?: any;
deleted?: any;
*/

const  SettingPreferenceEntityFieldMeta: EntityMetaCRUDTypeDefinition = {

  id: {
    desc: `Unique ID of the staticvalue, auto generated.`,
    validation: {} 
  },
  settty_id: {
    desc: `Type ID of the setting type.`,
    validation: {} 
  },
  record_id: {
    desc: `This is kind of if settty_for_table_field has country table id filed then that id field value will be saved here like 17. This means settings for country_id 17 same way if user table has id field and here in this field 10 is saved means settings for user_id 10. This can be null if there is global settings available.`,
    validation: {
      maxLength: 255,
      maxLengthMsg: `Record id length is only 255 characters.`,
    }
  },
  sett_id: {
    desc: `Setting ID of the setting.`,
    validation: {} 
  },
  sett_key: {
    desc: `Setting slug.`,
    validation: {
      maxLength: 128,
      maxLengthMsg: `Setting slug length is only 128 characters.`,
    }
  },
  sd_id: {
    desc:   `Static data id in case if any applicable.`,
    validation: {}
  },
  sd_name: {
    desc:   `Static data slug in case if any applicable.`,
    validation: {
      maxLength: 128,
      maxLengthMsg: `SD Name length is only 128 characters.`,
    }
  },
  sdv_id: {
    desc: `Static data value ID.`,
    validation: {} 
  },  
  sdv_key: {
    desc: `Static data value slug.`,
    validation: {
      maxLength: 128,
      maxLengthMsg: `SDV Key length is only 128 characters.`,
    } 
  },
  sdt_key: {
    desc: `Settings entity field sett_ref_value_field value in targeted table in setting entity field ref_table_name.`,
    validation: {
      maxLength: 255,
      maxLengthMsg: `SDT Key length is only 255 characters.`,
    } 
  },
  plain_value: {
    desc: `When any setting has no static data or no reference table relation for setting value it is possible to have some text as a value of config and that time this field will hold the actual value of setting.`,
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
}

const  SettingPreferenceVirtualFieldMeta: EntityMetaCRUDTypeDefinition = {
  fr_setting_type: {
    desc: `Setting type of setting preference`,
    validation: {}
  },

  fr_static_data: {
    desc: `Static data of setting preference`,
    validation: {}
  },

  fr_static_data_values: {
    desc: `Static data values of setting preference`,
    validation: {}
  },

  fr_setting: {
    desc: `Setting of setting preference`,
    validation: {}
  },
}
export const SettingPreferenceEntityMeta = {...SettingPreferenceEntityFieldMeta, ...SettingPreferenceVirtualFieldMeta};
const meta = SettingPreferenceEntityMeta; // need to use in this file down the line

@ObjectType({ isAbstract: true })
@Directive('@key(fields: "id")')
@Entity({
  name: 'setting_preference',
  engine: 'InnoDB',
})
@Unique(`${UnIndexPrefix}settprf_settty_id`,['settty_id', 'record_id', 'sett_key'])
@Unique(`${UnIndexPrefix}settprf_settty_id2`,['settty_id', 'record_id', 'sett_id'])

export class SettingPreferenceEntity implements EntityCRUDTypeDefinition {

    static colprefix: string = 'settprf_';  
    static uploaddir: string = 'setting-preference';

    static metaname: string = (SettingPreferenceEntity.name).replace(EntitySuffix, '');
    static metadesc: string = 'Provides list of setting prefrence in the world.';

    @Field(() => Int, {nullable: true, description: meta.id.desc})
    @PrimaryGeneratedColumn({
      name: `${SettingPreferenceEntity.colprefix}id`, 
      type: `int`, 
      unsigned: true, 
      primaryKeyConstraintName: `PRIMARY`,
      comment: `This table holds actual settings value. Data will be saved here when user will save preference for any particualr settnig. So, this is end table to have a look for settings and it's set value at any time.`
    })
    id?: number;

    @Field(() => Int, {nullable: true, description: meta.settty_id.desc})
    @Column({
      name: `${SettingPreferenceEntity.colprefix}settty_id`, 
      type: `tinyint`, 
      unsigned: true, 
      comment: `FK (setting_type => settty_id) This is required if settings is belongs to any specific record or global.`,
    })
    @IsInt()
    @IsNotEmpty()
    settty_id?: number;

    @Field(() => String, {nullable: true, description: meta.record_id.desc})
    @Column({
      name: `${SettingPreferenceEntity.colprefix}record_id`, 
      type: `varchar`,
      default: `null`,
      length: meta.record_id.validation.maxLength,
      collation: `utf8mb4_general_ci`,
      nullable: true,
      comment: `FK( settings_type => settty_for_table_field) value This is kind of if settty_for_table_field has country table id filed then that id field value will be saved here like 17. This means settings for country_id 17 same way if user table has id field and here in this field 10 is saved means settings for user_id 10. This can be null if there is global settings available. Record id of table based settings`,
    })
    @Index(`${InIndexPrefix}${SettingPreferenceEntity.colprefix}record_id`, { unique: false })
    @MaxLength(meta.record_id.validation.maxLength as number, {message: meta.record_id.validation.maxLengthMsg})
    @IsOptional()
    record_id?: string;

    @Field(() => Int, {nullable: true, description: meta.sett_id.desc})
    @Column({
      name: `${SettingPreferenceEntity.colprefix}sett_id`, 
      type: `int`, 
      unsigned: true, 
      comment: `FK(setting => sett_id)`,
    })
    @IsInt()
    @Index(`${InIndexPrefix}${SettingPreferenceEntity.colprefix}sett_id`, { unique: false })
    @IsNotEmpty()
    sett_id?: number;

    @Field(() => String, {nullable: true, description: meta.sett_key.desc})
    @Column({
      name: `${SettingPreferenceEntity.colprefix}sett_key`, 
      type: `varchar`,
      length: meta.sett_key.validation.maxLength,
      collation: `utf8mb4_general_ci`,
      comment: `FK (setting => sett_key)`,
    })
    @Index(`${InIndexPrefix}${SettingPreferenceEntity.colprefix}sett_key`, { unique: false })
    @MaxLength(meta.sett_key.validation.maxLength as number, {message: meta.sett_key.validation.maxLengthMsg})
    @IsNotEmpty()
    sett_key?: string;

    @Field(() => Int, {nullable: true, description: meta.sd_id.desc})
    @Column({
      name: `${SettingPreferenceEntity.colprefix}sd_id`, 
      type: `smallint`, 
      unsigned: true, 
      comment: `FK(static_data => sd_id)`,
      nullable: true,
      default: `null`,
    })
    @IsInt()
    @Index(`${InIndexPrefix}${SettingPreferenceEntity.colprefix}sd_id`, { unique: false })
    @IsOptional()
    sd_id?: number;

    @Field(() => String, {nullable: true, description: meta.sd_name.desc})
    @Column({
      name: `${SettingPreferenceEntity.colprefix}sd_name`, 
      type: `varchar`,
      length: meta.sd_name.validation.maxLength,
      collation: `utf8mb4_general_ci`,
      comment: `FK(static_data => sd_name)`,
      nullable: true,
      default: `null`,
    })
    @Index(`${InIndexPrefix}${SettingPreferenceEntity.colprefix}sd_name`, { unique: false })
    @MaxLength(meta.sd_name.validation.maxLength as number, {message: meta.sd_name.validation.maxLengthMsg})
    @IsOptional()
    sd_name?: string;

    @Field(() => Int, {nullable: true, description: meta.sdv_id.desc})
    @Column({
      name: `${SettingPreferenceEntity.colprefix}sdv_id`, 
      type: `int`, 
      unsigned: true, 
      comment: `FK(static_data_value => sdv_id)`,
      nullable: true,
      default: `null`,
    })
    @IsInt()
    @Index(`${InIndexPrefix}${SettingPreferenceEntity.colprefix}sdv_id`, { unique: false })
    @IsOptional()
    sdv_id?: number;

    @Field(() => String, {nullable: true, description: meta.sdv_key.desc})
    @Column({
      name: `${SettingPreferenceEntity.colprefix}sdv_key`, 
      type: `varchar`,
      length: meta.sdv_key.validation.maxLength,
      collation: `utf8mb4_general_ci`,
      comment: `FK(static_data_value => sdv_key) For non table based settings with option value needs to save in this field`,
      nullable: true,
      default: `null`,
    })
    @Index(`${InIndexPrefix}${SettingPreferenceEntity.colprefix}sdv_key`, { unique: false })
    @MaxLength(meta.sdv_key.validation.maxLength as number, {message: meta.sdv_key.validation.maxLengthMsg})
    @IsOptional()
    sdv_key?: string;

    @Field(() => String, {nullable: true, description: meta.sdt_key.desc})
    @Column({
      name: `${SettingPreferenceEntity.colprefix}sdt_key`, 
      type: `varchar`,
      length: meta.sdt_key.validation.maxLength,
      collation: `utf8mb4_general_ci`,
      comment: `sdt - static data from table FK (static_data => sd_table_field_for_key) this filed's value in targeted table in field sd_table_field_for_key) Used for separate table based static data for setting.`,
      nullable: true,
      default: `null`,
    })
    @Index(`${InIndexPrefix}${SettingPreferenceEntity.colprefix}sdt_key`, { unique: false })
    @MaxLength(meta.sdt_key.validation.maxLength as number, {message: meta.sdt_key.validation.maxLengthMsg})
    @IsOptional()
    sdt_key?: string;

    @Field(() => String, {nullable: true, description: meta.plain_value.desc})
    @Column({
      name: `${SettingPreferenceEntity.colprefix}plain_value`, 
      type: `text`,
      collation: `utf8mb4_general_ci`,
      comment: `When any setting has no static data or no reference table relation for setting value it is possible to have some text as a value of config and that time this field will hold the actual value of setting`,
      nullable: true,
      default: `null`,
    })
    @IsOptional()
    plain_value?: string;

    @Field(() => DateTime, {nullable: true, description: meta.created.desc})
    @CreateDateColumn({
      name: `${SettingPreferenceEntity.colprefix}created`, 
      type: `datetime`,
      update: false,
    })
    @Index(`${InIndexPrefix}${SettingPreferenceEntity.colprefix}created`, { unique: false })
    created?: Date;

    @Field(() => DateTime, {nullable: true, description: meta.updated.desc})
    @UpdateDateColumn({
      name: `${SettingPreferenceEntity.colprefix}updated`, 
      type: `datetime`,
      nullable: true,
    })
    @Index(`${InIndexPrefix}${SettingPreferenceEntity.colprefix}updated`, { unique: false })
    updated?: Date;

    @Field(() => DateTime, {nullable: true, description: meta.deleted.desc})
    @DeleteDateColumn({
      name: `${SettingPreferenceEntity.colprefix}deleted`,
      type: `datetime`,
      nullable: true,
      comment: `date-time => Yes | null => No`,
    })
    @Index(`${InIndexPrefix}${SettingPreferenceEntity.colprefix}deleted`, { unique: false })
    deleted?: Date;


    // ████ INTERNAL RELATIONS ████████████████████████████████████████████████ 

    @Field(() => SettingTypeEntity, {nullable: true, description: meta.fr_setting_type.desc})
    @ManyToOne(() => SettingTypeEntity, (entity: SettingTypeEntity) => entity.fr_setting_preference)
    @JoinColumn({ name: `${SettingPreferenceEntity.colprefix}settty_id` })
    fr_setting_type?: SettingTypeEntity;
  
    @Field(() => StaticDataEntity, {nullable: true, description: meta.fr_static_data.desc})
    @ManyToOne(() => StaticDataEntity, (entity: StaticDataEntity) => entity.fr_setting_preference)
    @JoinColumn({ name: `${SettingPreferenceEntity.colprefix}sd_id` })
    fr_static_data?: StaticDataEntity;
  
    @Field(() => StaticDataValueEntity, {nullable: true, description: meta.fr_static_data_values.desc})
    @ManyToOne(() => StaticDataValueEntity, (entity: StaticDataValueEntity) => entity.fr_setting_preference)
    @JoinColumn({ name: `${SettingPreferenceEntity.colprefix}sdv_id` })
    fr_static_data_values?: StaticDataValueEntity;
  
    @Field(() => SettingEntity, {nullable: true, description: meta.fr_setting.desc})
    @ManyToOne(() => SettingEntity, (entity: SettingEntity) => entity.fr_setting_preference)
    @JoinColumn({ name: `${SettingPreferenceEntity.colprefix}sett_id` })
    fr_setting?: SettingEntity;


    // ████ EXTERNAL RELATIONS ████████████████████████████████████████████████
}