import { EntityMetaCRUDTypeDefinition, EntityCRUDTypeDefinition, DateTime, EntitySuffix, InIndexPrefix, UnIndexPrefix  } from "@libs/library-app";
import { IsEmail, IsInt, IsJSON, IsMobilePhone, IsNotEmpty, IsOptional, MaxLength, MinLength, ValidateIf } from "class-validator";
import { Column, CreateDateColumn, DeleteDateColumn, Entity, Index, JoinColumn, ManyToOne, OneToMany, OneToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { Directive, Field, Float, Int, ObjectType } from "@nestjs/graphql";
import { NewsLetterEntity } from "../../newsletter/entities/newsletter.entity";
import { UserEntity } from "apps/shared-app/src/folk/user/entities/user.entity";
import { NewsLetterTrackLogEntity } from "../../track-log/entities/track.log.entity";
import { NewsLetterScheduleEntity } from "../../schedule/entities/schedule.entity";
import { WorkStatusEntity } from "apps/shared-app/src/master/work-status/entities/work.status.entity";
 
const  NewsLetterUserEntityFieldMeta: EntityMetaCRUDTypeDefinition = {

id: {
    desc: `Unique ID of the newsletter user, auto generated.`,
    validation: {} 
},
nl_id: {
    desc: `Newsletter Id of the newsletter user.`,
    validation:{}
},
nlsched_id: {
  desc: `Newsletter schedule Id of the newsletter user.`,
  validation:{}
},
u_id: {
  desc: `User Id of the newsletter user.`,
  validation:{}
},
wrkstatus_id: {
  desc: `Sent status of the newsletter user.`,
  validation:{}
},
sent: {
  desc: `Sent of the newsletter user.`,
  validation:{}
}, 
sent_error: {
  desc: `Sent error of the newsletter user.`,
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
const  NewsLetterUserVirtualFieldMeta: EntityMetaCRUDTypeDefinition = {

  fr_newsletters: {
    desc: `Newsletters of newsletter user.`,
    validation: {}
  },

  fr_newsletter_schedules: {
    desc: `Newsletters Schedules of newsletter user.`,
    validation: {}
  },
  fr_users: {
    desc: `Users of the newsletter user.`,
    validation: {}
  },

  fr_nl_tracking_log_user: {
    desc: `Newsletter tracking log of the newsletter user.`,
    validation: {}
  },
  fr_work_status: {
    desc: `Work status of the newsletter user.`,
    validation: {}
  }

} 
export const NewsLetterUserEntityMeta = {...NewsLetterUserEntityFieldMeta, ...NewsLetterUserVirtualFieldMeta};
const meta = NewsLetterUserEntityMeta; // need to use in this file down the line

@ObjectType({ isAbstract: true })
@Directive('@key(fields: "id")')
@Entity({
  name: 'newsletter_user',
  engine: 'InnoDB',
})
export class NewsLetterUserEntity implements EntityCRUDTypeDefinition {

    static colprefix: string = `nlu_`;
    static uploaddir: string = `newsletter-user`;

    static metaname: string = (NewsLetterUserEntity.name).replace(EntitySuffix, '');
    static metadesc: string = 'Provides list of newsletter users.';

    @Field(() => Int, {nullable: true, description: meta.id.desc})
    @PrimaryGeneratedColumn({
      name: `${NewsLetterUserEntity.colprefix}id`, 
      type: `int`, 
      unsigned: true, 
      primaryKeyConstraintName: `PRIMARY`,
    })
    id?: number;

    @Field(() => Int, {nullable: true, description: meta.nl_id.desc})
    @Column({
      name: `${NewsLetterUserEntity.colprefix}nl_id`, 
      type: `int`,
      unsigned: true, 
      comment: `FK(newsletter => nl_id)`,
      default: 0,
    })
    @IsInt()
    @Index(`${InIndexPrefix}${NewsLetterUserEntity.colprefix}nl_id`, { unique: false })
    @IsNotEmpty()
    nl_id?: number;

    @Field(() => Int, {nullable: true, description: meta.nlsched_id.desc})
    @Column({
      name: `${NewsLetterUserEntity.colprefix}nlsched_id`, 
      type: `int`,
      unsigned: true, 
      comment: `FK(newsletter_schedule=>nlsched_id)`,
      default: 0,
    })
    @IsInt()
    @Index(`${InIndexPrefix}${NewsLetterUserEntity.colprefix}nlsched_id`, { unique: false })
    @IsNotEmpty()
    nlsched_id?: number;

    @Field(() => Int, {nullable: true, description: meta.u_id.desc})
    @Column({
      name: `${NewsLetterUserEntity.colprefix}u_id`, 
      type: `int`,
      unsigned: true, 
      comment: `FK(user => u_id)`,
      default: 0,
    })
    @IsInt()
    @Index(`${InIndexPrefix}${NewsLetterUserEntity.colprefix}u_id`, { unique: false })
    @IsNotEmpty()
    u_id?: number;

    @Field(() => Int, {nullable: true, description: meta.wrkstatus_id.desc})
    @Column({
      name: `${NewsLetterUserEntity.colprefix}wrkstatus_id`, 
      type: `tinyint`,
      unsigned: true, 
      nullable: false,
      comment: `FK(work_status => wrkstatus_id)`,
    })
    @IsInt()
    @Index(`${InIndexPrefix}${NewsLetterUserEntity.colprefix}wrkstatus_id`, { unique: false })
    @IsNotEmpty()
    wrkstatus_id?: number;

    @Field(() => DateTime, {nullable: true, description: meta.sent.desc})
    @Column({
      name: `${NewsLetterUserEntity.colprefix}sent`, 
      type: `datetime`,
      comment: `date-time => No | null => Yes`
    })
    @Index(`${InIndexPrefix}${NewsLetterUserEntity.colprefix}sent`, { unique: false })
    @IsOptional()
    sent?: Date;

    @Field(() => String, {nullable: true, description: meta.sent_error.desc})
    @Column({
      name: `${NewsLetterUserEntity.colprefix}sent_error`, 
      type: `varchar`,
      collation: `utf8mb4_general_ci`,
    })
    @IsOptional()
    sent_error?: string;
    
    @Field(() => DateTime, {nullable: true, description: meta.created.desc})
    @CreateDateColumn({
      name: `${NewsLetterUserEntity.colprefix}created`, 
      type: `datetime`,
      update: false,
    })
    @Index(`${InIndexPrefix}${NewsLetterUserEntity.colprefix}created`, { unique: false })
    created?: Date;

    @Field(() => DateTime, {nullable: true, description: meta.updated.desc})
    @UpdateDateColumn({
      name: `${NewsLetterUserEntity.colprefix}updated`, 
      type: `datetime`,
      nullable: true,
    })
    @Index(`${InIndexPrefix}${NewsLetterUserEntity.colprefix}updated`, { unique: false })
    @IsOptional()
    updated?: Date;

    @Field(() => DateTime, {nullable: true, description: meta.deleted.desc})
    @DeleteDateColumn({
      name: `${NewsLetterUserEntity.colprefix}deleted`,
      type: `datetime`,
      nullable: true,
      comment: `date-time => yes | null => no`,
    })
    @Index(`${InIndexPrefix}${NewsLetterUserEntity.colprefix}deleted`, { unique: false })
    @IsOptional()
    deleted?: Date; 

    // ████ INTERNAL RELATIONS ████████████████████████████████████████████████

    @Field(() => NewsLetterEntity, {nullable: true, description: meta.fr_newsletters.desc})
    @ManyToOne(() => NewsLetterEntity, (entity: NewsLetterEntity) => entity.fr_nl_user)
    @JoinColumn({ name: `${NewsLetterUserEntity.colprefix}nl_id`})
    fr_newsletters?: NewsLetterEntity;
 
    @Field(() => NewsLetterScheduleEntity, {nullable: true, description: meta.fr_newsletter_schedules.desc})
    @ManyToOne(() => NewsLetterScheduleEntity, (entity: NewsLetterScheduleEntity) => entity.fr_nl_user)
    @JoinColumn({ name: `${NewsLetterUserEntity.colprefix}nlsched_id`})
    fr_newsletter_schedules?: NewsLetterScheduleEntity;

    @Field(() => UserEntity, {nullable: true, description: meta.fr_users.desc})
    @OneToOne(() => UserEntity, (entity: UserEntity) => entity.fr_news_letter_user_user)
    @JoinColumn({ name: `${NewsLetterUserEntity.colprefix}u_id` })
    fr_users?: UserEntity;

    @Field(() => [NewsLetterTrackLogEntity], {nullable: true, description: meta.fr_nl_tracking_log_user.desc})
    @OneToMany(() => NewsLetterTrackLogEntity, (entity: NewsLetterTrackLogEntity) => entity.fr_nl_users)
    fr_nl_tracking_log_user?: NewsLetterTrackLogEntity[];  

    @Field(() => WorkStatusEntity, {nullable: true, description: meta.fr_work_status.desc})
    @ManyToOne(() => WorkStatusEntity, (entity: WorkStatusEntity) => entity.fr_nl_status)
    @JoinColumn({ name: `${NewsLetterUserEntity.colprefix}wrkstatus_id`})
    fr_work_status?: WorkStatusEntity;
    

    // ████ EXTERNAL RELATIONS ████████████████████████████████████████████████
}