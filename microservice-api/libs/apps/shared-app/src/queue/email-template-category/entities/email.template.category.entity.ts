import { EntityMetaCRUDTypeDefinition, EntityCRUDTypeDefinition, DateTime, EntitySuffix, InIndexPrefix, UnIndexPrefix, YesNoEnum  } from "@libs/library-app";
import { IsEmail, IsJSON, IsMobilePhone, IsNotEmpty, IsOptional, MaxLength, MinLength, ValidateIf } from "class-validator";
import { Column, CreateDateColumn, DeleteDateColumn, Entity, Index, JoinColumn, ManyToOne, OneToMany, OneToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { Directive, Field, Float, Int, ObjectType } from "@nestjs/graphql";
import { EmailTemplateEntity } from "../../email-template/entities/email.template.entity";
 
const  EmailTemplateCategoryEntityFieldMeta: EntityMetaCRUDTypeDefinition = {

id: {
    desc: `Unique ID of the email template, auto generated.`,
    validation: {} 
},
title: {
  desc: `Title of the email template.`,
  validation:{
    maxLength: 128,
    maxLengthMsg: `Title length is only 128 characters.`,
  }
},
desc: {
  desc: `Description of the email template.`,
  validation:{
    maxLength: 255,
    maxLengthMsg: `Subject length is only 255 characters.`,
  }
},
active: {
  desc: `Indicates if email template active or not.`,
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
const  EmailTemplateCategoryVirtualFieldMeta: EntityMetaCRUDTypeDefinition = {
  fr_email_templates:{
      desc: `Email template category for email template.`,
      validation: {}
  },
} 
export const EmailTemplateCategoryEntityMeta = {...EmailTemplateCategoryEntityFieldMeta, ...EmailTemplateCategoryVirtualFieldMeta};
const meta = EmailTemplateCategoryEntityMeta; // need to use in this file down the line

@ObjectType({ isAbstract: true })
@Directive('@key(fields: "id")')
@Entity({
  name: 'email_template_category',
  engine: 'InnoDB',
})
export class EmailTemplateCategoryEntity implements EntityCRUDTypeDefinition {

    static colprefix: string = `etmplcat_`;
    static uploaddir: string = `email-template-category`;

    static metaname: string = (EmailTemplateCategoryEntity.name).replace(EntitySuffix, '');
    static metadesc: string = 'Provides list of email template categories.';

    @Field(() => Int, {nullable: true, description: meta.id.desc})
    @PrimaryGeneratedColumn({
      name: `${EmailTemplateCategoryEntity.colprefix}id`, 
      type: `int`, 
      unsigned: true, 
      primaryKeyConstraintName: `PRIMARY`,
    })
    id?: number;

    @Field(() => String, {nullable: true, description: meta.title.desc})
    @Column({
      name: `${EmailTemplateCategoryEntity.colprefix}title`, 
      type: `varchar`,
      length: meta.title.validation.maxLength,
      collation: `utf8mb4_general_ci`,
    })
    @Index(`${InIndexPrefix}${EmailTemplateCategoryEntity.colprefix}title`, { unique: false })
    @MaxLength(meta.title.validation.maxLength as number, {message: meta.title.validation.maxLengthMsg})
    @IsNotEmpty()
    title?: string;

    @Field(() => String, {nullable: true, description: meta.desc.desc})
    @Column({
      name: `${EmailTemplateCategoryEntity.colprefix}desc`, 
      type: `varchar`,
      length: meta.desc.validation.maxLength,
      collation: `utf8mb4_general_ci`,
    })
    @MaxLength(meta.desc.validation.maxLength as number, {message: meta.desc.validation.maxLengthMsg})
    @IsOptional()
    desc?: string;

    @Field(() => DateTime, {nullable: true, description: meta.active.desc})
    @Column({
      name: `${EmailTemplateCategoryEntity.colprefix}active`, 
      type: `datetime`,
      comment: `date-time => No | null => Yes`,
    })
    @Index(`${InIndexPrefix}${EmailTemplateCategoryEntity.colprefix}active`, { unique: false })
    @IsOptional()
    active?: Date;

    @Field(() => DateTime, {nullable: true, description: meta.created.desc})
    @CreateDateColumn({
      name: `${EmailTemplateCategoryEntity.colprefix}created`, 
      type: `datetime`,
      update: false,
    })
    @Index(`${InIndexPrefix}${EmailTemplateCategoryEntity.colprefix}created`, { unique: false })
   created?: Date;

    @Field(() => DateTime, {nullable: true, description: meta.updated.desc})
    @UpdateDateColumn({
      name: `${EmailTemplateCategoryEntity.colprefix}updated`, 
      type: `datetime`,
      nullable: true,
    })
    @Index(`${InIndexPrefix}${EmailTemplateCategoryEntity.colprefix}updated`, { unique: false })
    @IsOptional()
    updated?: Date;

    @Field(() => DateTime, {nullable: true, description: meta.deleted.desc})
    @DeleteDateColumn({
      name: `${EmailTemplateCategoryEntity.colprefix}deleted`,
      type: `datetime`,
      nullable: true,
      comment: `date-time => yes | null => no`,
    })
    @Index(`${InIndexPrefix}${EmailTemplateCategoryEntity.colprefix}deleted`, { unique: false })
    @IsOptional()
    deleted?: Date;

    // ████ INTERNAL RELATIONS ████████████████████████████████████████████████

    @Field(() => [EmailTemplateEntity], {nullable: true, description: meta.fr_email_templates.desc})
    @OneToMany(() => EmailTemplateEntity, (entity: EmailTemplateEntity) => entity.fr_email_template_category)
    fr_email_templates?: EmailTemplateEntity[];
   

    // ████ EXTERNAL RELATIONS ████████████████████████████████████████████████
}