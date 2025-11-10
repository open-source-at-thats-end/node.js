import { EntityMetaCRUDTypeDefinition, EntityCRUDTypeDefinition, DateTime, EntitySuffix, InIndexPrefix, UnIndexPrefix, YesNoEnum  } from "@libs/library-app";
import { IsEmail, IsJSON, IsMobilePhone, IsNotEmpty, IsOptional, MaxLength, MinLength, ValidateIf } from "class-validator";
import { Column, CreateDateColumn, DeleteDateColumn, Entity, Index, JoinColumn, ManyToOne, OneToMany, OneToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { Directive, Field, Float, Int, ObjectType } from "@nestjs/graphql";
import { NewsLetterUserEntity } from "apps/shared-app/src/newsletters/user/entities/user.entity";
import { NewsLetterScheduleEntity } from "apps/shared-app/src/newsletters/schedule/entities/schedule.entity";
 
const  WorkStatusEntityFieldMeta: EntityMetaCRUDTypeDefinition = {

id: {
    desc: `Unique ID of the email template, auto generated.`,
    validation: {} 
},
title: {
  desc: `Title of the email template.`,
  validation:{
    maxLength: 16,
    maxLengthMsg: `Title length is only 16 characters.`,
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
const  WorkStatusVirtualFieldMeta: EntityMetaCRUDTypeDefinition = {
  	 fr_nl_status:{
      desc: `News letter user for work status.`,
      validation: {}
    },
    fr_nl_schedule_status:{
      desc: `News letter user for work status.`,
      validation: {}
    },
    fr_nl_schedule_approval_status:{
      desc: `News letter user for work status.`,
      validation: {}
    }
} 
export const WorkStatusEntityMeta = {...WorkStatusEntityFieldMeta, ...WorkStatusVirtualFieldMeta};
const meta = WorkStatusEntityMeta; // need to use in this file down the line

@ObjectType({ isAbstract: true })
@Directive('@key(fields: "id")')
@Entity({
  name: 'work_status',
  engine: 'InnoDB',
})
export class WorkStatusEntity implements EntityCRUDTypeDefinition {

    static colprefix: string = `wrkstatus_`;
    static uploaddir: string = `work-status`;

    static metaname: string = (WorkStatusEntity.name).replace(EntitySuffix, '');
    static metadesc: string = 'Provides list of work status.';

    @Field(() => Int, {nullable: true, description: meta.id.desc})
    @PrimaryGeneratedColumn({
      name: `${WorkStatusEntity.colprefix}id`, 
      type: `int`, 
      unsigned: true, 
      primaryKeyConstraintName: `PRIMARY`,
    })
    id?: number;

    @Field(() => String, {nullable: true, description: meta.title.desc})
    @Column({
      name: `${WorkStatusEntity.colprefix}title`, 
      type: `varchar`,
      length: meta.title.validation.maxLength,
      collation: `utf8mb4_general_ci`,
      comment: `(1 => Pending, 2 => Success, 3 => Failed , Rejected, Sent, Draft, Review ) etc`,
    })
    @Index(`${InIndexPrefix}${WorkStatusEntity.colprefix}title`, { unique: false })
    @MaxLength(meta.title.validation.maxLength as number, {message: meta.title.validation.maxLengthMsg})
    @IsNotEmpty()
    title?: string;

    @Field(() => DateTime, {nullable: true, description: meta.created.desc})
    @CreateDateColumn({
      name: `${WorkStatusEntity.colprefix}created`, 
      type: `datetime`,
      update: false,
    })
    @Index(`${InIndexPrefix}${WorkStatusEntity.colprefix}created`, { unique: false })
   created?: Date;

    @Field(() => DateTime, {nullable: true, description: meta.updated.desc})
    @UpdateDateColumn({
      name: `${WorkStatusEntity.colprefix}updated`, 
      type: `datetime`,
      nullable: true,
    })
    @Index(`${InIndexPrefix}${WorkStatusEntity.colprefix}updated`, { unique: false })
    @IsOptional()
    updated?: Date;

    @Field(() => DateTime, {nullable: true, description: meta.deleted.desc})
    @DeleteDateColumn({
      name: `${WorkStatusEntity.colprefix}deleted`,
      type: `datetime`,
      nullable: true,
      comment: `date-time => yes | null => no`,
    })
    @Index(`${InIndexPrefix}${WorkStatusEntity.colprefix}deleted`, { unique: false })
    @IsOptional()
    deleted?: Date; 

    // ████ INTERNAL RELATIONS ████████████████████████████████████████████████

    @Field(() => [NewsLetterUserEntity], {nullable: true, description: meta.fr_nl_status.desc})
    @OneToMany(() => NewsLetterUserEntity, (entity: NewsLetterUserEntity) => entity.fr_work_status)
    fr_nl_status?: NewsLetterUserEntity[]; 

    @Field(() => [NewsLetterScheduleEntity], {nullable: true, description: meta.fr_nl_schedule_status.desc})
    @OneToMany(() => NewsLetterScheduleEntity, (entity: NewsLetterScheduleEntity) => entity.fr_work_status)
    fr_nl_schedule_status?: NewsLetterScheduleEntity[]; 

    @Field(() => [NewsLetterScheduleEntity], {nullable: true, description: meta.fr_nl_schedule_approval_status.desc})
    @OneToMany(() => NewsLetterScheduleEntity, (entity: NewsLetterScheduleEntity) => entity.fr_work_status)
    fr_nl_schedule_approval_status?: NewsLetterScheduleEntity[]; 

    
    // ████ EXTERNAL RELATIONS ████████████████████████████████████████████████
}