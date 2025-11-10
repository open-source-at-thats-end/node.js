import { EntityMetaCRUDTypeDefinition, EntityCRUDTypeDefinition, DateTime, YesNoEnum, EntitySuffix, InIndexPrefix, UnIndexPrefix  } from "@libs/library-app";
import { IsEmail, IsInt, IsLatitude, IsLongitude, IsMobilePhone, IsNotEmpty, IsNumber, IsOptional, IsString, MaxLength, MinLength } from "class-validator";
import { Column, CreateDateColumn, DeleteDateColumn, Entity, Index, OneToMany, OneToOne, PrimaryGeneratedColumn, Unique, UpdateDateColumn } from "typeorm";
import { Field, Int, ObjectType } from "@nestjs/graphql";
import { DeviceInterfaceEnum } from "../device.enum";
import { UserDeviceEntity } from "../../../folk/user-device/entities/user.device.entity";
import { SessionEntity } from "../../../session/entities/session.entity";
import { SettingEntity } from "../../../settings/setting/entities/setting.entity";
import { LeadEntity } from "apps/shared-app/src/leads/lead/entities/lead.entity";
import { NewsLetterTrackLogEntity } from "apps/shared-app/src/newsletters/track-log/entities/track.log.entity";


const DeviceEntityFieldMeta: EntityMetaCRUDTypeDefinition = {
  id: {
      desc: `Unique ID of the entity, auto generated.`,
      validation: {}
  },
  user_agent: {
      desc: `Raw agent string of the entity.`,
      validation:{}
  },
  name: {
      desc: `Name of the entity.`,
      validation:{
        maxLength: 128,
        maxLengthMsg: `Name of the entity length is only 128 characters.`,
      }
  },
  os: {
      desc: `Operating system platform.`,
      validation:{
        maxLength: 128,
        maxLengthMsg: `Operating system platform length is only 128 characters.`,
      }
  },
  interface: {
      desc: `Interface of the entity.`,
      validation:{
        maxLength: 64,
        maxLengthMsg: `Interface of the entity length is only 64 characters.`,
      }
  },
  approved: {
      desc: `Approved status of the entity.`,
      validation:{}
  },
  created: {
      desc: `Record created date time.`,
      validation:{}
  },
  updated: {
      desc: `Record last updated date time. Update can be any.`,
      validation:{}
  },
  deleted: {
      desc: `When record is soft deleted or soft removed, date-time will be saved otherwise null to indicate record is not deleted.`,
      validation:{}
  }
};
const  DeviceVirtualFieldMeta: EntityMetaCRUDTypeDefinition = {
  fr_device_users:{
      desc: `List of users who has access to given device.`,
      validation: {}
  },
  fr_sessions:{
      desc: `List of sessions who has access to given device.`,
      validation: {}
  },
  fr_setting: {
    desc: `Setting of who has access to given device.`,
    validation: {}
  }, 
  fr_newsletter_tracking_logs_info: {
    desc: `Newsletter tracking log with a specific device.`,
    validation: {}
  }, 
}
export const DeviceEntityMeta = {...DeviceEntityFieldMeta, ...DeviceVirtualFieldMeta};
const meta = DeviceEntityMeta; // need to use in this file down the line

/*
id?: any;
user_agent?: any;
name?: any;
os?: any;
interface?: any;
approved?: any;
created?: any;
updated?: any;
deleted?: any;
*/

@ObjectType({ isAbstract: true })
@Entity({
  name: 'device',
  engine: 'InnoDB',
})
@Unique(`${UnIndexPrefix}device_name`,[`name`, `os`,`interface`])
export class DeviceEntity implements EntityCRUDTypeDefinition {

  static colprefix: string = 'device_';
  static uploaddir: string = 'device';

  static metaname: string = (DeviceEntity.name).replace(EntitySuffix, '');
  static metadesc: string = 'Operating device management module in application.';

  @Field(() => Int, {nullable: true, description: meta.id.desc})
  @PrimaryGeneratedColumn({
    name: `${DeviceEntity.colprefix}id`, 
    type: `smallint`, 
    unsigned: true, 
    primaryKeyConstraintName: `PRIMARY`,
  })
  id?: number;

  @Field(() => String, {nullable: true, description: meta.user_agent.desc})
  @Column({
    name: `${DeviceEntity.colprefix}user_agent`, 
    type: `text`, 
    collation: `utf8mb4_general_ci`,
    comment: `RAW string of device which is sent from client side this is the main source to identify device`,
  })
  @IsNotEmpty()
  user_agent?: string;

  @Field(() => String, {nullable: true, description: meta.name.desc})
  @Column({
    name: `${DeviceEntity.colprefix}name`, 
    type: `varchar`,
    length: meta.name.validation.maxLength,
    collation: `utf8mb4_general_ci`,
    comment:`Will be generated or will be set by humman`,
  })
  @Index(`${InIndexPrefix}${DeviceEntity.colprefix}name`, { unique: false })
  @MaxLength(meta.name.validation.maxLength as number, {message: meta.name.validation.maxLengthMsg})
  @IsNotEmpty()
  name?: string;

  @Field(() => String, {nullable: true, description: meta.os.desc})
  @Column({
    name: `${DeviceEntity.colprefix}os`, 
    type: `varchar`,
    length: meta.os.validation.maxLength,
    collation: `utf8mb4_general_ci`,
    comment:`OS platform - MAC, WIN, LINUX, IOS, ANDROID, WINDOWS MOBILE. (Will be sent from client side by valid process)`,
  })
  @Index(`${InIndexPrefix}${DeviceEntity.colprefix}os`, { unique: false })
  @MaxLength(meta.os.validation.maxLength as number, {message: meta.os.validation.maxLengthMsg})
  @IsNotEmpty()
  os?: string;

  @Field(() => String, {nullable: true, description: meta.interface.desc})
  @Column({
    name: `${DeviceEntity.colprefix}interface`, 
    type: `varchar`,
    length: meta.interface.validation.maxLength,
    collation: `utf8mb4_general_ci`,
    comment:`Mobile APP, Desktop APP, Google Chrome, FireFox, Safari, Opera... etc Browsers (Will be sent from client side by valid process)`,
  })
  @Index(`${InIndexPrefix}${DeviceEntity.colprefix}interface`, { unique: false })
  @MaxLength(meta.interface.validation.maxLength as number, {message: meta.interface.validation.maxLengthMsg})
  @IsNotEmpty()
  interface?: string;

  @Field(() => DateTime, {nullable: true, description: meta.approved.desc})
  @Column({
    name: `${DeviceEntity.colprefix}approved`, 
    type: `datetime`, 
    nullable: true,
    select: false,
    default: null,
    comment:`date-time => Yes | null => No`,
  })
  @IsOptional()
  @Index(`${InIndexPrefix}${DeviceEntity.colprefix}approved`, { unique: false })
  approved?: Date;

  @Field(() => DateTime, {nullable: true, description: meta.created.desc})
  @CreateDateColumn({
    name: `${DeviceEntity.colprefix}created`,
    type: `datetime`,
    update: false,
  })
  @Index(`${InIndexPrefix}${DeviceEntity.colprefix}created`, { unique: false })
  created?: Date;

  @Field(() => DateTime, {nullable: true, description: meta.updated.desc})
  @UpdateDateColumn({
    name: `${DeviceEntity.colprefix}updated`, 
    type: `datetime`,
    nullable: true
  })
  @Index(`${InIndexPrefix}${DeviceEntity.colprefix}updated`, { unique: false })
  updated?: Date;

  @Field(() => DateTime, {nullable: true, description: meta.deleted.desc})
  @DeleteDateColumn({
    name: `${DeviceEntity.colprefix}deleted`, 
    type: `datetime`,
    nullable: true,
    comment:`date-time => Yes | null => No`,
  })
  @Index(`${InIndexPrefix}${DeviceEntity.colprefix}deleted`, { unique: false })
  deleted?: Date;


  // ████ INTERNAL RELATIONS ████████████████████████████████████████████████

  @Field(() => [UserDeviceEntity], {nullable: true, description: meta.fr_device_users.desc})
  @OneToMany(() => UserDeviceEntity, (entity: UserDeviceEntity) => entity.fr_device)
  fr_device_users?: UserDeviceEntity[];

  @Field(() => [SessionEntity], {nullable: true, description: meta.fr_sessions.desc})
  @OneToMany(() => SessionEntity, (entity: SessionEntity) => entity.fr_device)
  fr_sessions?: SessionEntity[];

  @Field(() => [SettingEntity], {nullable: true, description: meta.fr_setting.desc})
  @OneToMany(() => SettingEntity, (entity: SettingEntity) => entity.fr_devices)
  fr_setting?: SettingEntity[];

  @Field(() => [NewsLetterTrackLogEntity], {nullable: true, description: meta.fr_newsletter_tracking_logs_info.desc})
  @OneToMany(() => NewsLetterTrackLogEntity, (entity: NewsLetterTrackLogEntity) => entity.fr_devices)
  fr_newsletter_tracking_logs_info?: NewsLetterTrackLogEntity[];  

  // ████ EXTERNAL RELATIONS ████████████████████████████████████████████████
}
