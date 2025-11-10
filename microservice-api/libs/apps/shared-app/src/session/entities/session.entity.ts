import { EntityMetaCRUDTypeDefinition, EntityCRUDTypeDefinition, DateTime, YesNoEnum, IsSameAs, EntitySuffix, InIndexPrefix, UnIndexPrefix  } from "@libs/library-app";
import { IsInt, IsJSON, IsJWT, IsNotEmpty, IsOptional,Matches, MinLength } from "class-validator";
import { Column, CreateDateColumn, DeleteDateColumn, Entity, Index, JoinColumn, ManyToOne, OneToMany, OneToOne, PrimaryGeneratedColumn, Unique, UpdateDateColumn } from "typeorm";
import { Field, Int, ObjectType } from "@nestjs/graphql";
import { GraphQLJWT } from "graphql-scalars";
import { UserAuthenticationEntity } from "../../folk/user-auth/entities/user.auth.entity";
import { DeviceEntity } from "../../master/device/entities/device.entity";
import { MasterModule } from "../../master/master.module";
import { SessionMetaEntity } from "../meta/entities/session.meta.entity";

/*
id?: any;
auth_id?: any;
logged_in?: any;
keep_logged?: any;
jwt?: any;
data?: any;
created?: any;
updated?: any;
deleted?: any;
*/

const SessionEntityFieldMeta: EntityMetaCRUDTypeDefinition = {
  id: {
      desc: `Unique ID of the entity, auto generated.`,
      validation: {}
  },
  auth_id: {
      desc: `Authentication id of the user.`,
      validation:{}
  },
  device_id	: {
    desc: `Registered device id used by user.`,
    validation:{}
  },
  logged_in: {
      desc: `Is user logged in or not flag.`,
      validation:{}
  },
  keep_logged: {
      desc: `Keep user logged in or not flag.`,
      validation:{}
  },
  jwt: {
      desc: `JWT token of the user session.`,
      validation:{}
  },
  data: {
      desc: `Session data storage in JSON format for the user.`,
      validation:{}
  },
  created: {
      desc: `Created datetime of the user auth.`,
      validation:{}
  },
  updated: {
      desc: `Updated datetime of the user auth.`,
      validation:{}
  },
  deleted: {
      desc: `Deleted datetime of the user auth.`,
      validation:{}
  },
};
const  SessionVirtualFieldMeta: EntityMetaCRUDTypeDefinition = {
  fr_user_auth:{
    desc: `Authentication info of the session user.`,
    validation: {}
  },
  fr_device:{
    desc: `Master device info of the session user. Make sure that this is not directly connected with UserDeviceEntity.`,
    validation: {}
  },
  fr_session_metas:{
    desc: `Session meta info of the session user.`,
    validation: {}
  }
}
export const SessionEntityMeta = {...SessionEntityFieldMeta, ...SessionVirtualFieldMeta };
const meta = SessionEntityMeta; // need to use in this file down the line
 
@ObjectType({ isAbstract: true })
@Entity({
  name: 'session',
  engine: 'InnoDB',
})
@Unique(`${UnIndexPrefix}sess_au_id`,[`auth_id`, `device_id`])
export class SessionEntity implements EntityCRUDTypeDefinition {

  static colprefix: string = `sess_`;
  static uploaddir: string = `session`;

  static metaname: string = (SessionEntity.name).replace(EntitySuffix, '');
  static metadesc: string = 'User session management module in application.';

  @Field(() => Int, {nullable: true, description: meta.id.desc})
  @PrimaryGeneratedColumn({
    name: `${SessionEntity.colprefix}id`, 
    type: `int`, 
    unsigned: true, 
    primaryKeyConstraintName: `PRIMARY`,
  })
  id?: number;

  @Field(() => Int, {nullable: true, description: meta.auth_id.desc})
  @Column({
    name: `${SessionEntity.colprefix}auth_id`, 
    type: `int`, 
    unsigned: true,
    comment: `FK to authentication table or any unique id to confirm (this project has => user_authentication => au_id) | 1 user can have multiple but sessions are device based and when any functionality will be accessed by user role and permission will be checked`
  })
  @IsInt()
  @IsNotEmpty()
  @Index(`${InIndexPrefix}${SessionEntity.colprefix}auth_id`, { unique: false })
  auth_id?: number;

  @Field(() => Int, {nullable: true, description: meta.device_id.desc})
  @Column({
      name: `${SessionEntity.colprefix}device_id`, 
      type: `smallint`, 
      unsigned: true,
      comment: `FK(device => device_id)`,
  })
  @IsInt()
  @IsNotEmpty()
  @Index(`${InIndexPrefix}${SessionEntity.colprefix}device_id`, { unique: false })
  device_id?: number;

  @Field(() => YesNoEnum, {nullable: true, description: meta.logged_in.desc})
  @Column({
    name: `${SessionEntity.colprefix}logged_in`, 
    type: `tinyint`, 
    default: YesNoEnum.NO,
    unsigned: true,
    comment: `1 => Yes | 0 => No (user is logged in or anonymous user)`,
  })
  @IsInt()
  @IsNotEmpty()
  @Index(`${InIndexPrefix}${SessionEntity.colprefix}logged_in`, { unique: false })
  logged_in?: YesNoEnum;

  @Field(() => YesNoEnum, {nullable: true, description: meta.keep_logged.desc})
  @Column({
    name: `${SessionEntity.colprefix}keep_logged`, 
    type: `tinyint`, 
    default: YesNoEnum.NO,
    unsigned: true,
    comment: `1 => Yes | 0 => No`,
  })
  @IsInt()
  @IsNotEmpty()
  @Index(`${InIndexPrefix}${SessionEntity.colprefix}keep_logged`, { unique: false })
  keep_logged?: YesNoEnum;
  
  @Field(() => GraphQLJWT, {nullable: true, description: meta.jwt.desc})
  @Column({
    name: `${SessionEntity.colprefix}jwt`, 
    type: `text`, 
    nullable: true,
    default: null,
    collation: `utf8mb4_general_ci`,
  })
  @IsOptional()
  jwt? : string;

  @Field(() => String, {nullable: true, description: meta.data.desc})
  @Column({
    name: `${SessionEntity.colprefix}data`, 
    type: `mediumtext`, 
    nullable: true,
    default: null,
    collation: `utf8mb4_general_ci`,
  })
  @IsOptional()
  data? : string;
  
  @Field(() => DateTime, {nullable: true, description: meta.created.desc})
  @CreateDateColumn({
    name: `${SessionEntity.colprefix}created`, 
    type: `datetime`,
  })
  @Index(`${InIndexPrefix}${SessionEntity.colprefix}created`, { unique: false })
  created?: Date;

  @Field(() => DateTime, {nullable: true, description: meta.updated.desc})
  @UpdateDateColumn({
    name: `${SessionEntity.colprefix}updated`, 
    type: `datetime`,
    nullable: true,
  })
  @Index(`${InIndexPrefix}${SessionEntity.colprefix}updated`, { unique: false })
  updated?: Date;

  @Field(() => DateTime, {nullable: true, description: meta.deleted.desc})
  @DeleteDateColumn({
    name: `${SessionEntity.colprefix}deleted`,
    type: `datetime`,
    nullable: true,
    comment: `date-time => Yes | null => No`,
  })
  @Index(`${InIndexPrefix}${SessionEntity.colprefix}deleted`, { unique: false })
  deleted?: Date;

  // ████ INTERNAL RELATIONS ████████████████████████████████████████████████ 

  @Field(() => DeviceEntity, {nullable: true, description: meta.fr_device.desc})
  @ManyToOne(() => DeviceEntity, (entity: DeviceEntity) => entity.fr_sessions)
  @JoinColumn({ name: `${SessionEntity.colprefix}device_id` })
  fr_device?: DeviceEntity;

  @Field(() => UserAuthenticationEntity, {nullable: true, description: meta.fr_user_auth.desc})
  @ManyToOne(() => UserAuthenticationEntity, (entity: UserAuthenticationEntity) => entity.fr_user_sessions)
  @JoinColumn({ name: `${SessionEntity.colprefix}auth_id` })
  fr_user_auth?: UserAuthenticationEntity

  @Field(() => [SessionMetaEntity], {nullable: true, description: meta.fr_session_metas.desc})
  @OneToMany(() => SessionMetaEntity, (entity: SessionMetaEntity) => entity.fr_session)
  fr_session_metas?: SessionMetaEntity[];


  // ████ EXTERNAL RELATIONS ████████████████████████████████████████████████
  
}