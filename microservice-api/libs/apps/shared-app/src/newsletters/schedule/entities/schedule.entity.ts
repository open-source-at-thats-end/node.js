import { EntityMetaCRUDTypeDefinition, EntityCRUDTypeDefinition, DateTime, EntitySuffix, InIndexPrefix, UnIndexPrefix  } from "@libs/library-app";
import { IsEmail, IsInt, IsJSON, IsMobilePhone, IsNotEmpty, IsOptional, MaxLength, MinLength, ValidateIf } from "class-validator";
import { Column, CreateDateColumn, DeleteDateColumn, Entity, Index, JoinColumn, ManyToOne, OneToMany, OneToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { Directive, Field, Float, Int, ObjectType } from "@nestjs/graphql";
import { NewsLetterEntity } from "../../newsletter/entities/newsletter.entity";
import { UserEntity } from "apps/shared-app/src/folk/user/entities/user.entity";
import { AuthorisationEntity } from "apps/shared-app/src/master/authorisation/entities/authorisation.entity";
import { NewsLetterUserEntity } from "../../user/entities/user.entity";
import { WorkStatusEntity } from "apps/shared-app/src/master/work-status/entities/work.status.entity";
 
const  NewsLetterScheduleEntityFieldMeta: EntityMetaCRUDTypeDefinition = {

id: {
    desc: `Unique ID of the newsletter schedule, auto generated.`,
    validation: {} 
},
nl_id: {
    desc: `NewsLetter ID of the newsletter schedule.`,
    validation:{}
},
scheduled: {
    desc: `The scheduled date for when the newsletter is set to be sent.`,
    validation:{}
},
total_record: {
  desc: `The total record associated with this newsletter schedule.`,
  validation:{}
},
sent_last_rec_no: {
  desc: `The record number of the last successfully sent newsletter in this schedule.`,
  validation:{}
},
completed: {
  desc: `Indicates whether the newsletter schedule has been marked as completed.`,
  validation:{}
},
wrkstatus_id: {
  desc: `The current status of the newsletter schedule.`,
  validation:{}
},
approval_wrkstatus_id: {
  desc: `The approval status of the newsletter schedule.`,
  validation:{}
},
created_u_id: {
  desc: `The ID of the user who added the newsletter schedule.`,
  validation:{}
},
created_ar_id: {
  desc: `The type of entity that added the newsletter schedule.`,
  validation:{}
},
active: {
  desc: `Indicates whether the newsletter schedule is currently active.`,
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
const  NewsLetterScheduleVirtualFieldMeta: EntityMetaCRUDTypeDefinition = {
  fr_newsletters: {
    desc: `NewsLetter of Newsletter schedule.`,
    validation: {}
  },
  fr_users: {
    desc: `Users of Newsletter schedule.`,
    validation: {}
  },
  fr_authorization_roles: {
    desc: `Authorization roles of Newsletter schedule.`,
    validation: {}
  },

  fr_nl_user: {
    desc: `Users of Newsletter schedule.`,
    validation: {}
  },
  fr_work_status:{
    desc: `Status of Newsletter schedule.`,
    validation: {}
  },
  fr_approval_wrkstatus:{
    desc: `Approval status of Newsletter schedule.`,
    validation: {}
  }
} 
export const NewsLetterScheduleEntityMeta = {...NewsLetterScheduleEntityFieldMeta, ...NewsLetterScheduleVirtualFieldMeta};
const meta = NewsLetterScheduleEntityMeta; // need to use in this file down the line

@ObjectType({ isAbstract: true })
@Directive('@key(fields: "id")')
@Entity({
  name: 'newsletter_schedule',
  engine: 'InnoDB',
})
export class NewsLetterScheduleEntity implements EntityCRUDTypeDefinition {

    static colprefix: string = `nlsched_`;
    static uploaddir: string = `newsletter-schedule`;

    static metaname: string = (NewsLetterScheduleEntity.name).replace(EntitySuffix, '');
    static metadesc: string = 'Provides list of newsletters.';

    @Field(() => Int, {nullable: true, description: meta.id.desc})
    @PrimaryGeneratedColumn({
      name: `${NewsLetterScheduleEntity.colprefix}id`, 
      type: `int`, 
      unsigned: true, 
      primaryKeyConstraintName: `PRIMARY`,
    })
    id?: number;

    @Field(() => Int, {nullable: true, description: meta.nl_id.desc})
    @Column({
      name: `${NewsLetterScheduleEntity.colprefix}nl_id`, 
      type: `int`,
      unsigned: true, 
      comment: `FK(newsletter => nl_id)`,
    })
    @IsInt()
    @Index(`${InIndexPrefix}${NewsLetterScheduleEntity.colprefix}nl_id`, { unique: false })
    @IsNotEmpty()
    nl_id?: number;

    @Field(() => DateTime, {nullable: true, description: meta.scheduled.desc})
    @CreateDateColumn({
      name: `${NewsLetterScheduleEntity.colprefix}scheduled`, 
      type: `datetime`,
    })
    @Index(`${InIndexPrefix}${NewsLetterScheduleEntity.colprefix}scheduled`, { unique: false })
    @IsNotEmpty()
    scheduled?: Date;
   
    @Field(() => Int, {nullable: true, description: meta.total_record.desc})
    @Column({
      name: `${NewsLetterScheduleEntity.colprefix}total_record`, 
      type: `int`,
      unsigned: true,
      default: 0,
    })
    @IsInt()
    @Index(`${InIndexPrefix}${NewsLetterScheduleEntity.colprefix}total_record`, { unique: false })
    @IsNotEmpty()
    total_record?: number;

    @Field(() => Int, {nullable: true, description: meta.sent_last_rec_no.desc})
    @Column({
      name: `${NewsLetterScheduleEntity.colprefix}sent_last_rec_no`, 
      type: `int`,
      unsigned: true,
      default: 0,
    })
    @IsInt()
    @IsNotEmpty()
    sent_last_rec_no?: number;

    @Field(() => DateTime, {nullable: true, description: meta.completed.desc})
    @Column({
      name: `${NewsLetterScheduleEntity.colprefix}completed`, 
      type: `datetime`,
      comment: `date-time => Yes | null => No`,
    })
    @Index(`${InIndexPrefix}${NewsLetterScheduleEntity.colprefix}completed`, { unique: false })
    @IsOptional()
    completed?: Date;

    @Field(() => Int, {nullable: true, description: meta.wrkstatus_id.desc})
    @Column({
      name: `${NewsLetterScheduleEntity.colprefix}wrkstatus_id`, 
      type: `tinyint`,
      unsigned: true,
      comment: `FK(work_status => nlu_wrkstatus_id)`,
    })
    @IsInt()
    @Index(`${InIndexPrefix}${NewsLetterScheduleEntity.colprefix}wrkstatus_id`, { unique: false })
    @IsOptional()
    wrkstatus_id?: number;

    @Field(() => Int, {nullable: true, description: meta.approval_wrkstatus_id.desc})
    @Column({
      name: `${NewsLetterScheduleEntity.colprefix}approval_wrkstatus_id`, 
      type: `tinyint`,
      unsigned: true,
      comment: `FK(work_status => nlu_wrkstatus_id)`,
    })
    @IsInt()
    @Index(`${InIndexPrefix}${NewsLetterScheduleEntity.colprefix}approval_wrkstatus_id`, { unique: false })
    @IsOptional()
    approval_wrkstatus_id?: number;

    @Field(() => Int, {nullable: true, description: meta.created_u_id.desc})
    @Column({
      name: `${NewsLetterScheduleEntity.colprefix}created_u_id`, 
      type: `int`,
      unsigned: true,
      default: 1,
      comment: `FK(user => u_id)`,
    })
    @IsInt()
    @Index(`${InIndexPrefix}${NewsLetterScheduleEntity.colprefix}created_u_id`, { unique: false })
    @IsNotEmpty()
    created_u_id?: number;

    @Field(() => Int, {nullable: true, description: meta.created_ar_id.desc})
    @Column({
      name: `${NewsLetterScheduleEntity.colprefix}created_ar_id`, 
      type: `smallint`,
      unsigned: true,
      default: 1,
      comment: `FK(authorisation => ar_id)`,
    })
    @IsInt()
    @Index(`${InIndexPrefix}${NewsLetterScheduleEntity.colprefix}created_ar_id`, { unique: false })
    @IsNotEmpty()
    created_ar_id?: number;

    @Field(() => DateTime, {nullable: true, description: meta.active.desc})
    @Column({
      name: `${NewsLetterScheduleEntity.colprefix}active`, 
      type: `datetime`,
      comment: `date-time => No | null => Yes`
    })
    @Index(`${InIndexPrefix}${NewsLetterScheduleEntity.colprefix}active`, { unique: false })
    @IsOptional()
    active?: Date;

    @Field(() => DateTime, {nullable: true, description: meta.created.desc})
    @CreateDateColumn({
      name: `${NewsLetterScheduleEntity.colprefix}created`, 
      type: `datetime`,
      update: false,
    })
    @Index(`${InIndexPrefix}${NewsLetterScheduleEntity.colprefix}created`, { unique: false })
   created?: Date;

    @Field(() => DateTime, {nullable: true, description: meta.updated.desc})
    @UpdateDateColumn({
      name: `${NewsLetterScheduleEntity.colprefix}updated`, 
      type: `datetime`,
      nullable: true,
    })
    @Index(`${InIndexPrefix}${NewsLetterScheduleEntity.colprefix}updated`, { unique: false })
    @IsOptional()
    updated?: Date;

    @Field(() => DateTime, {nullable: true, description: meta.deleted.desc})
    @DeleteDateColumn({
      name: `${NewsLetterScheduleEntity.colprefix}deleted`,
      type: `datetime`,
      nullable: true,
      comment: `date-time => yes | null => no`,
    })
    @Index(`${InIndexPrefix}${NewsLetterScheduleEntity.colprefix}deleted`, { unique: false })
    @IsOptional()
    deleted?: Date;

    // ████ INTERNAL RELATIONS ████████████████████████████████████████████████

    @Field(() => NewsLetterEntity, {nullable: true, description: meta.fr_newsletters.desc})
    @ManyToOne(() => NewsLetterEntity, (entity: NewsLetterEntity) => entity.fr_nl_schedule)
    @JoinColumn({ name: `${NewsLetterScheduleEntity.colprefix}nl_id` })
    fr_newsletters?: NewsLetterEntity;

    @Field(() => UserEntity, {nullable: true, description: meta.fr_users.desc})
    @ManyToOne(() => UserEntity, (entity: UserEntity) => entity.fr_newsletter_schedule_users)
    @JoinColumn({ name: `${NewsLetterScheduleEntity.colprefix}created_u_id` })
    fr_users?: UserEntity;

    @Field(() => AuthorisationEntity, {nullable: true, description: meta.fr_authorization_roles.desc})
    @ManyToOne(() => AuthorisationEntity, (entity: AuthorisationEntity) => entity.fr_newsletter_schedules)
    @JoinColumn({ name: `${NewsLetterScheduleEntity.colprefix}created_ar_id` })
    fr_authorization_roles?: AuthorisationEntity;

    @Field(() => [NewsLetterUserEntity], {nullable: true, description: meta.fr_nl_user.desc})
    @OneToMany(() => NewsLetterUserEntity, (entity: NewsLetterUserEntity) => entity.fr_newsletter_schedules)
    fr_nl_user?: NewsLetterUserEntity[]; 

    @Field(() => WorkStatusEntity, {nullable: true, description: meta.fr_work_status.desc})
    @ManyToOne(() => WorkStatusEntity, (entity: WorkStatusEntity) => entity.fr_nl_schedule_status)
    @JoinColumn({ name: `${NewsLetterScheduleEntity.colprefix}wrkstatus_id`})
    fr_work_status?: WorkStatusEntity;
    
    @Field(() => WorkStatusEntity, {nullable: true, description: meta.fr_approval_wrkstatus.desc})
    @ManyToOne(() => WorkStatusEntity, (entity: WorkStatusEntity) => entity.fr_nl_schedule_approval_status)
    @JoinColumn({ name: `${NewsLetterScheduleEntity.colprefix}approval_wrkstatus_id`})
    fr_approval_wrkstatus?: WorkStatusEntity;
    

    // ████ EXTERNAL RELATIONS ████████████████████████████████████████████████
}