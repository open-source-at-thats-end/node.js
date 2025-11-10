import { EntityMetaCRUDTypeDefinition, EntityCRUDTypeDefinition, DateTime, EntitySuffix, InIndexPrefix, UnIndexPrefix  } from "@libs/library-app";
import { IsJSON, IsNotEmpty, IsOptional, MaxLength, MinLength } from "class-validator";
import { Column, CreateDateColumn, DeleteDateColumn, Entity, Index, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { Directive, Field, Int, ObjectType } from "@nestjs/graphql";
import { QueueSmsEntity } from "../../sms/entities/sms.entity";
import { QueueWhatsappEntity } from "../../whatsapp/entities/whatsapp.entity";
import { QueueEmailEntity } from "../../email/entities/email.entity";

/*
id?: any;
title?: any;
desc?: any;
created?: any;
updated?: any;
deleted?: any;
*/

const  QueueTypeEntityFieldMeta: EntityMetaCRUDTypeDefinition = {

  id: {
      desc: `Unique ID of the queuetype, auto generated.`,
      validation: {} 
  },
  title: {
      desc: `Title of the queuetype.`,
      validation:{
        isNotEmpty: `Title is required.`,
        maxLength: 128,
        maxLengthMsg: `Maximum length of title is 128 characters.`,
      }
  },
  desc: {
      desc: `Description of the queuetype.`,
      validation:{
        maxLength: 255,
        maxLengthMsg: `Maximum length of description is 255 characters.`,
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
const  QueueTypeVirtualFieldMeta: EntityMetaCRUDTypeDefinition = {

  fr_queue_sms: {
      desc: `Provides list of queuesms of specific queuetype.`,
      validation:{}
  },
  fr_queue_whatsapp: {
    desc: `Provides list of queue whatsapp msg of specific queuetype.`,
    validation:{}
  },
  fr_queue_email: {
    desc: `Provides list of queue whatsapp msg of specific queuetype.`,
    validation:{}
  }

}
export const QueueTypeEntityMeta = {...QueueTypeEntityFieldMeta, ...QueueTypeVirtualFieldMeta};
const meta = QueueTypeEntityMeta; // need to use in this file down the line

@ObjectType({ isAbstract: true })
@Directive('@key(fields: "id")')
@Entity({
  name: 'queue_type',
  engine: 'InnoDB',
})
export class QueueTypeEntity implements EntityCRUDTypeDefinition {

    static colprefix: string = 'quetype_';
    static uploaddir: string = 'queue-type';

    static metaname: string = (QueueTypeEntity.name).replace(EntitySuffix, '');
    static metadesc: string = 'Provides list of queuetypes in the world.';

    @Field(() => Int, {nullable: true, description: meta.id.desc})
    @PrimaryGeneratedColumn({
      name: `${QueueTypeEntity.colprefix}id`, 
      type: `smallint`, 
      unsigned: true, 
      primaryKeyConstraintName: `PRIMARY`,
    })
    id?: number;

    @Field(() => String, {nullable: true, description: meta.title.desc})
    @Column({
      name: `${QueueTypeEntity.colprefix}title`, 
      type: `varchar`, 
      length: meta.title.validation.maxLength, 
      collation: `utf8mb4_general_ci`,
    })
    @IsNotEmpty()
    @Index(`${UnIndexPrefix}${QueueTypeEntity.colprefix}title`, { unique: true })
    @MaxLength(meta.title.validation.maxLength as number, {message: meta.title.validation.maxLengthMsg})
    title?: string;

    @Field(() => String, {nullable: true, description: meta.desc.desc})
    @Column({
      name: `${QueueTypeEntity.colprefix}desc`, 
      type: `varchar`, 
      length: meta.desc.validation.maxLength, 
      collation: `utf8mb4_general_ci`,
      nullable: true,
      default: null,
    })
    @IsOptional()
    @MaxLength(meta.desc.validation.maxLength as number, {message: meta.desc.validation.maxLengthMsg})
    desc?: string;

    @Field(() => DateTime, {nullable: true, description: meta.created.desc})
    @CreateDateColumn({
      name: `${QueueTypeEntity.colprefix}created`, 
      type: `datetime`,
      update: false,
    })
    @Index(`${InIndexPrefix}${QueueTypeEntity.colprefix}created`, { unique: false })
    created?: Date;

    @Field(() => DateTime, {nullable: true, description: meta.updated.desc})
    @UpdateDateColumn({
      name: `${QueueTypeEntity.colprefix}updated`, 
      type: `datetime`,
      nullable: true,
    })
    @Index(`${InIndexPrefix}${QueueTypeEntity.colprefix}updated`, { unique: false })
    updated?: Date;
    
    @Field(() => DateTime, {nullable: true, description: meta.deleted.desc})
    @DeleteDateColumn({
      name: `${QueueTypeEntity.colprefix}deleted`, 
      type: `datetime`,
      nullable: true,
      comment: `date-time => Yes | null => No`,
    })
    @Index(`${InIndexPrefix}${QueueTypeEntity.colprefix}deleted`, { unique: false })
    deleted?: Date;

    // ████ INTERNAL RELATIONS ████████████████████████████████████████████████ 

    @Field(()=>[QueueSmsEntity], {nullable: true, description: meta.fr_queue_sms.desc})
    @OneToMany(() => QueueSmsEntity, (entity: QueueSmsEntity) => entity.fr_queue_type)
    fr_queue_sms?: QueueSmsEntity[]

    @Field(()=>[QueueWhatsappEntity], {nullable: true, description: meta.fr_queue_whatsapp.desc})
    @OneToMany(() => QueueWhatsappEntity, (entity: QueueWhatsappEntity) => entity.fr_queue_type)
    fr_queue_whatsapp?: QueueWhatsappEntity[]

    @Field(()=>[QueueEmailEntity], {nullable: true, description: meta.fr_queue_email.desc})
    @OneToMany(() => QueueEmailEntity, (entity: QueueEmailEntity) => entity.fr_queue_type)
    fr_queue_email?: QueueEmailEntity[]


    // ████ EXTERNAL RELATIONS ████████████████████████████████████████████████

}