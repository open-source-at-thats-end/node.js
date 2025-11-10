import { EntityMetaCRUDTypeDefinition, EntityCRUDTypeDefinition, DateTime, YesNoEnum, EntitySuffix, InIndexPrefix, UnIndexPrefix  } from "@libs/library-app";
import { IsEmail, IsInt, IsIP, IsLatitude, IsLongitude, IsMACAddress, IsMobilePhone, IsNotEmpty, IsNumber, IsOptional, IsString, Max, MaxLength, Min, MinLength } from "class-validator";
import { Column, CreateDateColumn, DeleteDateColumn, Entity, Index, JoinColumn, ManyToMany, ManyToOne, OneToMany, OneToOne, PrimaryGeneratedColumn, Unique, UpdateDateColumn } from "typeorm";
import { Field, Int, ObjectType } from "@nestjs/graphql";
import { GraphQLIP, GraphQLMAC } from "graphql-scalars";
import { UserEntity } from "../../user/entities/user.entity";
import { DeviceEntity } from "apps/shared-app/src/master/device/entities/device.entity";

const UserDeviceEntityFieldMeta: EntityMetaCRUDTypeDefinition = {
  id: {
      desc: `Unique ID of the entity, auto generated.`,
      validation: {}
  },
  u_id: {
      desc: `User ID.`,
      validation:{}
  },
  device_id: {
      desc: `Device ID of the user.`,
      validation:{}
  },
  device_token: {
      desc: `Device Token of the entity.`,
      validation:{
        maxLength: 255,
        maxLengthMsg: `Maximum length of Device Token is 255 characters.`,
      }
  },
  device_user_agent: {
    desc: `Device User Agent String of the entity.`,
    validation:{
      maxLength: 255,
      maxLengthMsg: `Maximum length of Device User Agent is 255 characters.`,
    }
  },
  from_ip_address: {
      desc: `From IP Address of the entity.`,
      validation:{
        maxLength: 32,
        maxLengthMsg: `Maximum length of From IP Address is 32 characters.`,
      }
  },
  device_mac_address: {
      desc: `Device MAC Address of the entity.`,
      validation:{
        maxLength: 128,
        maxLengthMsg: `Maximum length of Device MAC Address is 128 characters.`,
      }
  },
  device_system_id: {
      desc: `Device System ID of the entity.`,
      validation:{
        maxLength: 128,
        maxLengthMsg: `Maximum length of Device System ID is 128 characters.`,
      }
  },
  device_name: {
      desc: `Device Name of the entity.`,
      validation:{
        maxLength: 64,
        maxLengthMsg: `Maximum length of Device Name is 64 characters.`,
      }
  },
  suspended: {
      desc: `Suspended status of the entity.`,
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
const  UserDeviceVirtualFieldMeta: EntityMetaCRUDTypeDefinition = {
  fr_user: {
    desc: `User entity for device`,
    validation:{}
  },
  fr_device:{
    desc: `Device entity for user device`,
    validation:{}
  }
}
export const UserDeviceEntityMeta = {...UserDeviceEntityFieldMeta, ...UserDeviceVirtualFieldMeta};
const meta = UserDeviceEntityMeta; // need to use in this file down the line

/*
id?: any;
u_id?: any;
device_id?: any;
device_token?: any;
from_ip_address?: any;
device_mac_address?: any;
device_system_id?: any;
device_name?: any;
device_user_agent?: any;
suspended?: any;
created?: any;
updated?: any;
deleted?: any;
*/

@ObjectType({ isAbstract: true })
@Entity({
  name: 'user_device',
  engine: 'InnoDB',
})
@Unique(`${UnIndexPrefix}udvc_u_id`,['u_id','device_id','device_token'])
export class UserDeviceEntity implements EntityCRUDTypeDefinition {

  static colprefix: string = `udvc_`;
  static uploaddir: string = `user-device`;

  static metaname: string = (UserDeviceEntity.name).replace(EntitySuffix, '');
  static metadesc: string = 'User device management module in application.';

  @Field(() => Int, {nullable: true, description: meta.id.desc})
  @PrimaryGeneratedColumn({
    name: `${UserDeviceEntity.colprefix}id`, 
    type: `int`, 
    unsigned: true, 
    primaryKeyConstraintName: `PRIMARY`,
  })
  id?: number;

  @Field(() => Int, {nullable: true, description: meta.u_id.desc})
  @Column({
    name: `${UserDeviceEntity.colprefix}u_id`, 
    type: `int`, 
    unsigned: true,
    comment: `FK (_user => u_id)`,
  })
  @Index(`${InIndexPrefix}${UserDeviceEntity.colprefix}u_id`, { unique: false })  
  @IsInt()
  @IsNotEmpty()
  u_id?: number;

  @Field(() => Int, {nullable: true, description: meta.device_id.desc})
  @Column({
    name: `${UserDeviceEntity.colprefix}device_id`, 
    type: `smallint`, 
    unsigned: true,
    comment: `FK (_device => device_id)`,
  })
  @IsInt()
  @Index(`${InIndexPrefix}${UserDeviceEntity.colprefix}device_id`, { unique: false })
  @IsNotEmpty()
  device_id ?: number;

  @Field(() => String, {nullable: true, description: meta.device_token.desc})
  @Column({
    name: `${UserDeviceEntity.colprefix}device_token`, 
    type: `varchar`, 
    length: meta.device_token.validation.maxLength,
    comment: `unique for all devices`,
    collation: 'utf8mb4_general_ci',
  })
  @IsNotEmpty()
  @MaxLength(meta.device_token.validation.maxLength as number, {message: meta.device_token.validation.maxLengthMsg})
  device_token?: string;

  @Field(() => String, {nullable: true, description: meta.device_user_agent.desc})
  @Column({
    name: `${UserDeviceEntity.colprefix}device_user_agent`, 
    type: `varchar`, 
    length: meta.device_user_agent.validation.maxLength,
    collation: 'utf8mb4_general_ci',
  })
  @IsNotEmpty()
  @Index(`${InIndexPrefix}${UserDeviceEntity.colprefix}device_user_agent`, { unique: false })
  @MaxLength(meta.device_user_agent.validation.maxLength as number, {message: meta.device_user_agent.validation.maxLengthMsg})
  device_user_agent?: string;

  @Field(() => GraphQLIP, {nullable: true, description: meta.from_ip_address.desc})
  @Column({
    name: `${UserDeviceEntity.colprefix}from_ip_address`, 
    type: `varchar`, 
    length: meta.from_ip_address.validation.maxLength,
    collation: 'utf8mb4_general_ci',
  })
  @IsNotEmpty()
  @IsIP()
  @Index(`${InIndexPrefix}${UserDeviceEntity.colprefix}from_ip_address`, { unique: false })
  @MaxLength(meta.from_ip_address.validation.maxLength as number, {message: meta.from_ip_address.validation.maxLengthMsg})
  from_ip_address?: string;

  @Field(() => GraphQLMAC, {nullable: true, description: meta.device_mac_address.desc})
  @Column({
    name: `${UserDeviceEntity.colprefix}device_mac_address`, 
    type: `varchar`, 
    length: meta.device_mac_address.validation.maxLength,
    collation: 'utf8mb4_general_ci',
    nullable: true,
    default: null,
  })
  @IsOptional()
  @IsMACAddress()
  @Index(`${InIndexPrefix}${UserDeviceEntity.colprefix}device_mac_address`, { unique: false })
  @MaxLength(meta.device_mac_address.validation.maxLength as number, {message: meta.device_mac_address.validation.maxLengthMsg})
  device_mac_address?: string;

  @Field(() => String, {nullable: true, description: meta.device_system_id.desc})
  @Column({
    name: `${UserDeviceEntity.colprefix}device_system_id`, 
    type: `varchar`, 
    length: meta.device_system_id.validation.maxLength,
    collation: 'utf8mb4_general_ci',
    nullable: true,
    default: null,
    comment: `Sometime devices has id set by user`,
  })
  @IsOptional()
  @Index(`${InIndexPrefix}${UserDeviceEntity.colprefix}device_system_id`, { unique: false })
  @MaxLength(meta.device_system_id.validation.maxLength as number, {message: meta.device_system_id.validation.maxLengthMsg})
  device_system_id?: string;

  @Field(() => String, {nullable: true, description: meta.device_name.desc})
  @Column({
    name: `${UserDeviceEntity.colprefix}device_name`, 
    type: `varchar`, 
    length: meta.device_name.validation.maxLength,
    collation: 'utf8mb4_general_ci',
    nullable: true,
    default: null,
    comment: `Sometime devices has id set by user`,
  })
  @IsOptional()
  @Index(`${InIndexPrefix}${UserDeviceEntity.colprefix}device_name`, { unique: false })
  @MaxLength(meta.device_name.validation.maxLength as number, {message: meta.device_name.validation.maxLengthMsg})
  device_name?: string;


  //@Field(() => DateTime, {nullable: true, description: meta.suspended.desc})
  @Column({
    name: `${UserDeviceEntity.colprefix}suspended`, 
    type: `datetime`, 
    nullable: true,
    default: null,
    comment: `date-time => Yes | 0 => No If webmaster suspend the access from particular device for end user, user won't be able to access the system from specific device`,
  })
  @IsOptional()
  @Index(`${InIndexPrefix}${UserDeviceEntity.colprefix}suspended`, { unique: false })
  suspended?: Date;

  @Field(() => DateTime, {nullable: true, description: meta.created.desc})
  @CreateDateColumn({
    name: `${UserDeviceEntity.colprefix}created`,
    type: `datetime`,
    update: false,
  })
  @Index(`${InIndexPrefix}${UserDeviceEntity.colprefix}created`, { unique: false })
  @IsOptional()
  created?: Date;

  @Field(() => DateTime, {nullable: true, description: meta.updated.desc})
  @UpdateDateColumn({
    name: `${UserDeviceEntity.colprefix}updated`, 
    type: `datetime`,
    nullable: true
  })
  @Index(`${InIndexPrefix}${UserDeviceEntity.colprefix}updated`, { unique: false })
  updated?: Date;

  @Field(() => DateTime, {nullable: true, description: meta.deleted.desc})
  @DeleteDateColumn({
    name: `${UserDeviceEntity.colprefix}deleted`, 
    type: `datetime`,
    nullable: true,
    comment:`date-time: yes | null: no`,
  })
  @Index(`${InIndexPrefix}${UserDeviceEntity.colprefix}deleted`, { unique: false })
  deleted?: Date;



  // ████ INTERNAL RELATIONS ████████████████████████████████████████████████

  @Field(() => DeviceEntity, {nullable: true, description: meta.fr_device.desc})
  @ManyToOne(() => DeviceEntity, (entity: DeviceEntity) => entity.fr_device_users)
  @JoinColumn({ name: `${UserDeviceEntity.colprefix}device_id` })
  fr_device?: DeviceEntity;

  @Field(() => UserEntity, {nullable: true, description: meta.fr_user.desc})
  @ManyToOne(() => UserEntity, (entity: UserEntity) => entity.fr_user_devices)
  @JoinColumn({ name: `${UserDeviceEntity.colprefix}u_id` })
  fr_user?: UserEntity;

  

  // ████ EXTERNAL RELATIONS ████████████████████████████████████████████████
}
