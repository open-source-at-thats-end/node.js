import { EntityMetaCRUDTypeDefinition, EntityCRUDTypeDefinition, DateTime, EntitySuffix, InIndexPrefix, UnIndexPrefix  } from "@libs/library-app";
import { IsInt, IsJSON, IsNotEmpty, IsOptional, MaxLength, MinLength } from "class-validator";
import { Column, CreateDateColumn, DeleteDateColumn, Entity, Index, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn, Unique, UpdateDateColumn } from "typeorm";
import { Directive, Field, Int, ObjectType } from "@nestjs/graphql";
import { StaticDataEntity } from "../../entities/static.data.entity";
import { SettingPreferenceEntity } from "../../../preference/entities/preference.entity";
import { SettingEntity } from "../../../setting/entities/setting.entity";


/*
id?: any; 
sd_id?: any; 
sd_name?: any;
key?: any;
value?: any; 
created?: any; 
updated?: any; 
deleted?: any;
*/

const  StaticDataValueEntityFieldMeta: EntityMetaCRUDTypeDefinition = {

  id: {
      desc: `Unique ID of the static value, auto generated.`,
      validation: {} 
  },
  sd_id: {
    desc: `Foregin key referencing staticdata table in the static value table.`,
    validation: {} 
  },
  sd_name: {
    desc: `Slug name of the static data.`,
    validation: {
        maxLength: 128,
        maxLengthMsg: `Slug name of the static data is 128 characters.`
    }
  },
  key: {
      desc: `Key of the static value.`,
      validation:{
        maxLength: 128,
        maxLengthMsg: `Maximum length of key is 128 characters.`
      }
  },
  value: {
      desc: `Value of the static value.`,
      validation:{
        maxLength: 128,
        maxLengthMsg: `Maximum length of value is 128 characters.`
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
const  StaticDataValueVirtualFieldMeta: EntityMetaCRUDTypeDefinition = {
  fr_static_data: {
    desc: `Static date of static data value`,
    validation: {}
  },
  fr_setting_preference: {
    desc: `Setting preference of static data value`,
    validation: {}
  },
  fr_setting: {
    desc: `Setting of static data value`,
    validation: {}
  },
}
export const StaticDataValueEntityMeta = {...StaticDataValueEntityFieldMeta, ...StaticDataValueVirtualFieldMeta};
const meta = StaticDataValueEntityMeta; // need to use in this file down the line

@ObjectType({ isAbstract: true })
@Directive('@key(fields: "id")')
@Entity({
  name: 'static_data_value',
  engine: 'InnoDB',
})
@Unique(`${UnIndexPrefix}sdv_sd_id`,['sd_id', 'key'])
export class StaticDataValueEntity implements EntityCRUDTypeDefinition {

    static colprefix: string = 'sdv_';
    static uploaddir: string = 'static-data-value';

    static metaname: string = (StaticDataValueEntity.name).replace(EntitySuffix, '');
    static metadesc: string = 'Provides list of static value in the world.';

    @Field(() => Int, {nullable: true, description: meta.id.desc})
    @PrimaryGeneratedColumn({
      name: `${StaticDataValueEntity.colprefix}id`, 
      type: `int`, 
      unsigned: true, 
      primaryKeyConstraintName: `PRIMARY`,
    })
    id?: number;

    @Field(() => Int, {nullable: true, description: meta.sd_id.desc})
    @Column({
      name: `${StaticDataValueEntity.colprefix}sd_id`, 
      type: `smallint`,
      unsigned: true,
      comment: `FK(static_data=>sd_id)`,
    })
    @IsInt()
    @Index(`${InIndexPrefix}${StaticDataValueEntity.colprefix}sd_id`, { unique: false })
    @IsNotEmpty()
    sd_id?: number;

    @Field(() => String, {nullable: true, description: meta.sd_name.desc})
    @Column({
      name: `${StaticDataValueEntity.colprefix}sd_name`, 
      type: `varchar`,
      length: meta.sd_name.validation.maxLength,
      collation: `utf8mb4_general_ci`,
      comment: `FK (static_data => sd_name) this is required when direct manipulation is required`,
    })
    @MaxLength(meta.sd_name.validation.maxLength as number, {message: meta.sd_name.validation.maxLengthMsg})
    @Index(`${InIndexPrefix}${StaticDataValueEntity.colprefix}sd_name`, { unique: false })
    @IsNotEmpty()
    sd_name?: string;

    @Field(() => String, {nullable: true, description: meta.key.desc})
    @Column({
      name: `${StaticDataValueEntity.colprefix}key`, 
      type: `varchar`,
      length: meta.key.validation.maxLength,
      collation: `utf8mb4_general_ci`,  
    })
    @MaxLength(meta.key.validation.maxLength as number, {message: meta.key.validation.maxLengthMsg})
    @Index(`${InIndexPrefix}${StaticDataValueEntity.colprefix}key`, { unique: false })
    @IsNotEmpty()
    key?: string;

    @Field(() => String, {nullable: true, description: meta.value.desc})
    @Column({
      name: `${StaticDataValueEntity.colprefix}value`, 
      type: `varchar`,
      length: meta.value.validation.maxLength,
      collation: `utf8mb4_general_ci`,  
    })
    @MaxLength(meta.value.validation.maxLength as number, {message: meta.value.validation.maxLengthMsg})
    @IsNotEmpty()
    value?: string;

    @Field(() => DateTime, {nullable: true, description: meta.created.desc})
    @CreateDateColumn({
      name: `${StaticDataValueEntity.colprefix}created`, 
      type: `datetime`,
    })
    @Index(`${InIndexPrefix}${StaticDataValueEntity.colprefix}created`, { unique: false })
    created?: Date;

    @Field(() => DateTime, {nullable: true, description: meta.updated.desc})
    @UpdateDateColumn({
      name: `${StaticDataValueEntity.colprefix}updated`, 
      type: `datetime`,
      nullable: true,
    })
    @Index(`${InIndexPrefix}${StaticDataValueEntity.colprefix}updated`, { unique: false })
    updated?: Date;

    @Field(() => DateTime, {nullable: true, description: meta.deleted.desc})
    @DeleteDateColumn({
      name: `${StaticDataValueEntity.colprefix}deleted`,
      type: `datetime`,
      nullable: true,
      comment: `date-time => Yes | null => No`,
    })
    @Index(`${InIndexPrefix}${StaticDataValueEntity.colprefix}deleted`, { unique: false })
    deleted?: Date;
    

    
    // ████ INTERNAL RELATIONS ████████████████████████████████████████████████ 
    
    @Field(() => StaticDataEntity, {nullable: true, description: meta.fr_static_data.desc})
    @ManyToOne(() => StaticDataEntity, (entity: StaticDataEntity) => entity.fr_static_data_values)
    @JoinColumn({ name: `${StaticDataValueEntity.colprefix}sd_id` })
    fr_static_data?: StaticDataEntity;
  
    @Field(() => [SettingPreferenceEntity], {nullable: true, description: meta.fr_setting_preference.desc})
    @OneToMany(() => SettingPreferenceEntity, (entity: SettingPreferenceEntity) => entity.fr_static_data_values)
    fr_setting_preference?: SettingPreferenceEntity[];

    @Field(() => [SettingEntity], {nullable: true, description: meta.fr_setting.desc})
    @OneToMany(() => SettingEntity, (entity: SettingEntity) => entity.fr_static_data_values)
    fr_setting?: SettingEntity[];


    // ████ EXTERNAL RELATIONS ████████████████████████████████████████████████
}