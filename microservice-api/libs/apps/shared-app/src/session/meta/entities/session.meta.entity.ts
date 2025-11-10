import { EntityMetaCRUDTypeDefinition, EntityCRUDTypeDefinition, DateTime, YesNoEnum, IsSameAs, EntitySuffix, InIndexPrefix  } from "@libs/library-app";
import { IsInt, IsIP, IsJSON, IsJWT, IsLatitude, IsLongitude, IsNotEmpty, IsOptional,Matches, MaxLength, MinLength } from "class-validator";
import { Column, CreateDateColumn, DeleteDateColumn, Entity, Index, JoinColumn, ManyToOne, OneToOne, PrimaryGeneratedColumn, Unique, UpdateDateColumn } from "typeorm";
import { Field, Float, Int, ObjectType } from "@nestjs/graphql";
import { GraphQLIPv4, GraphQLLatitude, GraphQLLongitude } from "graphql-scalars";
import { SessionEntity } from "../../entities/session.entity";

/*
create new const SessionMetaEntityFieldMeta_
identical to SessionMetaEntityFieldMeta

use below fields
SessionMeta

id?: any;
sess_id?: any;
ip?: any;
latitude?: any;
longitude?: any;
tracked?: any;
tracked_latitude?: any;
tracked_longitude?: any;
created?: any;
updated?: any;
deleted?: any;
*/

const SessionMetaEntityFieldMeta: EntityMetaCRUDTypeDefinition = {
  id: {
      desc: `Unique ID of the entity, auto generated.`,
      validation: {}
  },
  sess_id: {
      desc: `Session client id.`,
      validation:{}
  },
  ip: {
      desc: `IP address of the user.`,
      validation:{
        maxLength: 128,
        maxLengthMsg: `IP address of the user is only 128 characters.`,
      }
  },
  latitude: {
      desc: `Latitude of the user.`,
      validation:{}
  },
  longitude: {
      desc: `Longitude of the user.`,
      validation:{}
  },
  tracked: {
      desc: `Is user location tracked or not.`,
      validation:{}
  },
  tracked_latitude: {
      desc: `Latitude of the user when location is tracked.`,
      validation:{}
  },
  tracked_longitude: {
      desc: `Longitude of the user when location is tracked.`,
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
const  SessionMetaVirtualFieldMeta: EntityMetaCRUDTypeDefinition = {
  fr_session: {
      desc: `Session information of the session meta.`,
      validation:{}
  }
}
export const SessionMetaEntityMeta = {...SessionMetaEntityFieldMeta, ...SessionMetaVirtualFieldMeta};
const meta = SessionMetaEntityMeta; // need to use in this file down the line

@ObjectType({ isAbstract: true })
@Entity({
  name: 'session_meta',
  engine: 'InnoDB',
})
@Unique('un_sessm_sessc_id',['sess_id', 'ip'])
export class SessionMetaEntity implements EntityCRUDTypeDefinition {

  static colprefix: string = `sessm_`;
  static uploaddir: string = `session-meta`;

  static metaname: string = (SessionMetaEntity.name).replace(EntitySuffix, '');
  static metadesc: string = 'Session meta information module in application.';

  @Field(() => Int, {nullable: true, description: meta.id.desc})
  @PrimaryGeneratedColumn({
    name: `${SessionMetaEntity.colprefix}id`, 
    type: `int`, 
    unsigned: true, 
    primaryKeyConstraintName: `PRIMARY`,
  })
  id?: number;

  @Field(() => Int, {nullable: true, description: meta.sess_id.desc})
  @Column({
      name: `${SessionMetaEntity.colprefix}sess_id`, 
      type: `int`, 
      unsigned: true,
      comment: `FK (_session => sess_id)`,
  })
  @IsInt()
  @IsNotEmpty()
  @Index(`${InIndexPrefix}${SessionMetaEntity.colprefix}sess_id`, { unique: false })
  sess_id?: number;

  @Field(() => String, {nullable: true, description: meta.ip.desc})
  @Column({
    name: `${SessionMetaEntity.colprefix}ip`, 
    type: `varchar`,
    length: meta.ip.validation.maxLength,
    collation: `utf8mb4_general_ci`,
  })
  @Index(`${InIndexPrefix}${SessionMetaEntity.colprefix}ip`, { unique: false })
  @MaxLength(meta.ip.validation.maxLength as number, {message: meta.ip.validation.maxLengthMsg})
  @IsNotEmpty()
  ip?: string;

  @Field(() => Float, {nullable: true, description: meta.latitude.desc})
  @Column({
      name: `${SessionMetaEntity.colprefix}latitude`, 
      type: `double`,
      precision: 18,
      scale: 15,
      default: 0,
  })
  @IsNotEmpty()
  @Index(`${InIndexPrefix}${SessionMetaEntity.colprefix}latitude`, { unique: false })
  latitude?: number; 

  @Field(() => Float, {nullable: true, description: meta.longitude.desc})
  @Column({
      name: `${SessionMetaEntity.colprefix}longitude`, 
      type: `double`,
      precision: 18,
      scale: 15,
      default: 0,
  })
  @IsNotEmpty()
  @Index(`${InIndexPrefix}${SessionMetaEntity.colprefix}longitude`, { unique: false })
  longitude?: number; 

  @Field(() => DateTime, {nullable: true, description: meta.tracked.desc})
  @Column({
    name: `${SessionMetaEntity.colprefix}tracked`, 
    type: `datetime`, 
    nullable: true,
    comment: 'date-time => last tracked | null => not tracked | Tracked => Stands for last tracked and this can be any time not perfect or not specific interval and cannot be exact last',
    default: null,
  })
  @IsOptional()
  @Index(`${InIndexPrefix}${SessionMetaEntity.colprefix}tracked`, { unique: false })
  tracked?: Date;

  @Field(() => Float, {nullable: true, description: meta.tracked_latitude.desc})
  @Column({
      name: `${SessionMetaEntity.colprefix}tracked_latitude`, 
      type: `double`,
      precision: 18,
      scale: 15,
      default: 0,
  })
  @IsNotEmpty()
  @Index(`${InIndexPrefix}${SessionMetaEntity.colprefix}tracked_latitude`, { unique: false })
  tracked_latitude?: number; 

  @Field(() => Float, {nullable: true, description: meta.tracked_longitude.desc})
  @Column({
      name: `${SessionMetaEntity.colprefix}tracked_longitude`, 
      type: `double`,
      precision: 18,
      scale: 15,
      default: 0,
  })
  @IsNotEmpty()
  @Index(`${InIndexPrefix}${SessionMetaEntity.colprefix}tracked_longitude`, { unique: false })
  tracked_longitude?: number;
  
  @Field(() => DateTime, {nullable: true, description: meta.created.desc})
  @CreateDateColumn({
    name: `${SessionMetaEntity.colprefix}created`,
    type: `datetime`,
  })
  @Index(`${InIndexPrefix}${SessionMetaEntity.colprefix}created`, { unique: false })
  created?: Date;

  @Field(() => DateTime, {nullable: true, description: meta.updated.desc})
  @UpdateDateColumn({
    name: `${SessionMetaEntity.colprefix}updated`, 
    type: `datetime`,
    nullable: true
  })
  @Index(`${InIndexPrefix}${SessionMetaEntity.colprefix}updated`, { unique: false })
  updated?: Date;

  //@Field(() => DateTime, {nullable: true, description: meta.deleted.desc})
  @DeleteDateColumn({
    name: `${SessionMetaEntity.colprefix}deleted`, 
    nullable: true,
    select: false,
  })
  @Index()
  deleted?: Date;

  @Field(() => SessionEntity, {nullable: true, description: meta.fr_session.desc})
  @ManyToOne(() => SessionEntity, (entity: SessionEntity) => entity.fr_session_metas)
  @JoinColumn({ name: `${SessionMetaEntity.colprefix}sess_id` })
  fr_session?: SessionEntity;
}