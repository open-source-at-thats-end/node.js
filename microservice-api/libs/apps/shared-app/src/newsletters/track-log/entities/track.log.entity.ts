import { EntityMetaCRUDTypeDefinition, EntityCRUDTypeDefinition, DateTime, EntitySuffix, InIndexPrefix, UnIndexPrefix  } from "@libs/library-app";
import { IsEmail, IsInt, IsJSON, IsMobilePhone, IsNotEmpty, IsOptional, MaxLength, MinLength, ValidateIf } from "class-validator";
import { Column, CreateDateColumn, DeleteDateColumn, Entity, Index, JoinColumn, ManyToOne, OneToMany, OneToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { Directive, Field, Float, Int, ObjectType } from "@nestjs/graphql";
import { BounceTypeEnum } from "../track.log.enum";
import { NewsLetterEntity } from "../../newsletter/entities/newsletter.entity";
import { NewsLetterUserEntity } from "../../user/entities/user.entity";
import { DeviceEntity } from "apps/shared-app/src/master/device/entities/device.entity";
import { CityEntity } from "apps/shared-app/src/geo/city/entities/city.entity";
 
const  NewsLetterTrackLogEntityFieldMeta: EntityMetaCRUDTypeDefinition = {

id: {
    desc: `Unique ID of the newsletter tracking log, auto generated.`,
    validation: {} 
},
nl_id: {
    desc: `Newsletter Id of the newsletter tracking log.`,
    validation:{}
},
nlu_id: {
  desc: `Newsletter User Id of the newsletter tracking log.`,
  validation:{}
},
opens: {
  desc: `Opens of the newsletter tracking log.`,
  validation:{}
},
clicks: {
  desc: `Clicks of the newsletter tracking log.`,
  validation:{}
}, 
bounces: {
  desc: `Clicks of the newsletter tracking log.`,
  validation:{}
}, 
bounce_type: {
  desc: `Bounce type of the newsletter tracking log.`,
  validation:{}
}, 
bounce_reason: {
  desc: `Bounce reason of the newsletter tracking log.`,
  validation:{}
}, 
unsubscribe: {
  desc: `Unsubscribe of the newsletter tracking log.`,
  validation:{}
}, 
spam: {
  desc: `Spam of the newsletter tracking log.`,
  validation:{}
}, 
device_id: {
  desc: `Device Id of the newsletter tracking log.`,
  validation:{}
}, 
city_id: {
  desc: `City Id of the newsletter tracking log.`,
  validation:{}
}, 
ip: {
  desc: `IP of the newsletter tracking log.`,
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
const  NewsLetterTrackLogVirtualFieldMeta: EntityMetaCRUDTypeDefinition = {

  fr_newsletters: {
    desc: `Newsletters of NewsLetter Track Log.`,
    validation: {}
  },

  fr_nl_users: {
    desc: `Newsletters users of NewsLetter Track Log.`,
    validation: {}
  },

  fr_devices: {
    desc: `Device of NewsLetter Track Log.`,
    validation: {}
  },

  fr_city:{
    desc: `City of NewsLetter Track Log.`,
    validation: {}
  }
  
} 
export const NewsLetterTrackLogEntityMeta = {...NewsLetterTrackLogEntityFieldMeta, ...NewsLetterTrackLogVirtualFieldMeta};
const meta = NewsLetterTrackLogEntityMeta; // need to use in this file down the line

@ObjectType({ isAbstract: true })
@Directive('@key(fields: "id")')
@Entity({
  name: 'newsletter_track_log',
  engine: 'InnoDB',
})
export class NewsLetterTrackLogEntity implements EntityCRUDTypeDefinition {

    static colprefix: string = `nltracklog_`;
    static uploaddir: string = `newsletter-track-log `;

    static metaname: string = (NewsLetterTrackLogEntity.name).replace(EntitySuffix, '');
    static metadesc: string = 'Provides list of newsletter schedules.';

    @Field(() => Int, {nullable: true, description: meta.id.desc})
    @PrimaryGeneratedColumn({
      name: `${NewsLetterTrackLogEntity.colprefix}id`, 
      type: `int`, 
      unsigned: true, 
      primaryKeyConstraintName: `PRIMARY`,
    })
    id?: number;

    @Field(() => Int, {nullable: true, description: meta.nl_id.desc})
    @Column({
      name: `${NewsLetterTrackLogEntity.colprefix}nl_id`, 
      type: `int`,
      unsigned: true, 
      comment: `FK(newsletter => nl_id)`,
    })
    @IsInt()
    @Index(`${InIndexPrefix}${NewsLetterTrackLogEntity.colprefix}nl_id`, { unique: false })
    @IsNotEmpty()
    nl_id?: number;

    @Field(() => Int, {nullable: true, description: meta.nlu_id.desc})
    @Column({
      name: `${NewsLetterTrackLogEntity.colprefix}nlu_id`, 
      type: `int`,
      unsigned: true, 
      comment: `FK(newsletter_user => nlu_id)`,
    })
    @IsInt()
    @Index(`${InIndexPrefix}${NewsLetterTrackLogEntity.colprefix}nlu_id`, { unique: false })
    @IsNotEmpty()
    nlu_id?: number;

    @Field(() => Int, {nullable: true, description: meta.opens.desc})
    @Column({
      name: `${NewsLetterTrackLogEntity.colprefix}opens`, 
      type: `tinyint`,
      unsigned: true, 
      nullable: false,
      default: 0,
      comment: `Total open count`,
    })
    @IsInt()
    @Index(`${InIndexPrefix}${NewsLetterTrackLogEntity.colprefix}opens`, { unique: false })
    @IsNotEmpty()
    opens?: number;

    @Field(() => Int, {nullable: true, description: meta.clicks.desc})
    @Column({
      name: `${NewsLetterTrackLogEntity.colprefix}clicks`, 
      type: `smallint`,
      unsigned: true, 
      nullable: false,
      default: 0,
      comment: `Total click count`,
    })
    @IsInt()
    @Index(`${InIndexPrefix}${NewsLetterTrackLogEntity.colprefix}clicks`, { unique: false })
    @IsNotEmpty()
    clicks?: number;

    @Field(() => Int, {nullable: true, description: meta.bounces.desc})
    @Column({
      name: `${NewsLetterTrackLogEntity.colprefix}bounces`, 
      type: `tinyint`,
      unsigned: true, 
      nullable: false,
      default: 0,
    })
    @IsInt()
    @Index(`${InIndexPrefix}${NewsLetterTrackLogEntity.colprefix}bounces`, { unique: false })
    @IsNotEmpty()
    bounces?: number;

    @Field(() => BounceTypeEnum, {nullable: true, description: meta.bounce_type.desc})
    @Column({
      name: `${NewsLetterTrackLogEntity.colprefix}bounce_type`, 
      type: `tinyint`,
      unsigned: true, 
      nullable: false,
      default: 0,
      comment: `('soft' => 1, 'hard' => 2)`,
    })
    @IsInt()
    @Index(`${InIndexPrefix}${NewsLetterTrackLogEntity.colprefix}bounce_type`, { unique: false })
    @IsNotEmpty()
    bounce_type?: number;

    @Field(() => String, {nullable: true, description: meta.bounce_reason.desc})
    @Column({
      name: `${NewsLetterTrackLogEntity.colprefix}bounce_reason`, 
      type: `varchar`,
      collation: `utf8mb4_general_ci`,
    })
    @Index(`${InIndexPrefix}${NewsLetterTrackLogEntity.colprefix}bounce_reason`, { unique: false })
    @IsOptional()
    bounce_reason?: string;

    @Field(() => DateTime, {nullable: true, description: meta.unsubscribe.desc})
    @Column({
      name: `${NewsLetterTrackLogEntity.colprefix}unsubscribe`, 
      type: `datetime`,
      comment: `date-time => Yes | null => No`,
    })
    @Index(`${InIndexPrefix}${NewsLetterTrackLogEntity.colprefix}unsubscribe`, { unique: false })
    @IsOptional()
    unsubscribe?: Date;
    
    @Field(() => DateTime, {nullable: true, description: meta.spam.desc})
    @Column({
      name: `${NewsLetterTrackLogEntity.colprefix}spam`, 
      type: `datetime`,
      comment: `date-time => Yes | null => No`,
    })
    @Index(`${InIndexPrefix}${NewsLetterTrackLogEntity.colprefix}spam`, { unique: false }) 
    @IsOptional()
    spam?: Date;

    @Field(() => Int, {nullable: true, description: meta.device_id.desc})
    @Column({
      name: `${NewsLetterTrackLogEntity.colprefix}device_id`, 
      type: `smallint`,
      unsigned: true, 
      nullable: false,
      comment: `FK(device => device_id)`,
    })
    @IsInt()
    @Index(`${InIndexPrefix}${NewsLetterTrackLogEntity.colprefix}device_id`, { unique: false }) 
    @IsNotEmpty()
    device_id?: number;

    @Field(() => Int, {nullable: true, description: meta.city_id.desc})
    @Column({
      name: `${NewsLetterTrackLogEntity.colprefix}city_id`, 
      type: `int`,
      unsigned: true, 
      nullable: false,
      comment: `FK(geo_city => city_id)`,
    })
    @IsInt()
    @Index(`${InIndexPrefix}${NewsLetterTrackLogEntity.colprefix}city_id`, { unique: false }) 
    @IsNotEmpty()
    city_id?: number;

    @Field(() => String, {nullable: true, description: meta.ip.desc})
    @Column({
      name: `${NewsLetterTrackLogEntity.colprefix}ip`, 
      type: `varchar`,
      collation: `utf8mb4_general_ci`,
    })
    @Index(`${InIndexPrefix}${NewsLetterTrackLogEntity.colprefix}ip`, { unique: false })
    @IsNotEmpty()
    ip?: string;
    
    @Field(() => DateTime, {nullable: true, description: meta.created.desc})
    @CreateDateColumn({
      name: `${NewsLetterTrackLogEntity.colprefix}created`, 
      type: `datetime`,
      update: false,
    })
    @Index(`${InIndexPrefix}${NewsLetterTrackLogEntity.colprefix}created`, { unique: false })
    created?: Date;

    @Field(() => DateTime, {nullable: true, description: meta.updated.desc})
    @UpdateDateColumn({
      name: `${NewsLetterTrackLogEntity.colprefix}updated`, 
      type: `datetime`,
      nullable: true,
    })
    @Index(`${InIndexPrefix}${NewsLetterTrackLogEntity.colprefix}updated`, { unique: false })
    @IsOptional()
    updated?: Date;

    @Field(() => DateTime, {nullable: true, description: meta.deleted.desc})
    @DeleteDateColumn({
      name: `${NewsLetterTrackLogEntity.colprefix}deleted`,
      type: `datetime`,
      nullable: true,
      comment: `date-time => Yes | null => No`,
    })
    @Index(`${InIndexPrefix}${NewsLetterTrackLogEntity.colprefix}deleted`, { unique: false })
    @IsOptional()
    deleted?: Date;
 
    // ████ INTERNAL RELATIONS ████████████████████████████████████████████████

    @Field(() => NewsLetterEntity, {nullable: true, description: meta.fr_newsletters.desc})
    @ManyToOne(() => NewsLetterEntity, (entity: NewsLetterEntity) => entity.fr_nl_tracking_log)
    @JoinColumn({ name: `${NewsLetterTrackLogEntity.colprefix}nl_id`})
    fr_newsletters?: NewsLetterEntity;

    @Field(() => NewsLetterUserEntity, {nullable: true, description: meta.fr_nl_users.desc})
    @ManyToOne(() => NewsLetterUserEntity, (entity: NewsLetterUserEntity) => entity.fr_nl_tracking_log_user)
    @JoinColumn({ name: `${NewsLetterTrackLogEntity.colprefix}nlu_id`})
    fr_nl_users?: NewsLetterUserEntity;

    @Field(() => DeviceEntity, {nullable: true, description: meta.fr_devices.desc})
    @ManyToOne(() => DeviceEntity, (entity: DeviceEntity) => entity.fr_newsletter_tracking_logs_info)
    @JoinColumn({ name: `${NewsLetterTrackLogEntity.colprefix}device_id`})
    fr_devices?: DeviceEntity;

    @Field(() => CityEntity, {nullable: true, description: meta.fr_city.desc})
    @ManyToOne(() => CityEntity, (entity: CityEntity) => entity.fr_newsletter_tracking_log_infos)
    @JoinColumn({ name: `${NewsLetterTrackLogEntity.colprefix}city_id`})
    fr_city?: CityEntity;

    // ████ EXTERNAL RELATIONS ████████████████████████████████████████████████
}