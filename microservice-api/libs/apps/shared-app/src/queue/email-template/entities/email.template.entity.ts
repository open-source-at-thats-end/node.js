import { EntityMetaCRUDTypeDefinition, EntityCRUDTypeDefinition, DateTime, EntitySuffix, InIndexPrefix, UnIndexPrefix, YesNoEnum  } from "@libs/library-app";
import { IsEmail, IsInt, IsJSON, IsMobilePhone, IsNotEmpty, IsOptional, MaxLength, MinLength, ValidateIf } from "class-validator";
import { Column, CreateDateColumn, DeleteDateColumn, Entity, Index, JoinColumn, ManyToOne, OneToMany, OneToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { Directive, Field, Float, Int, ObjectType } from "@nestjs/graphql";
import { NewsLetterEntity } from "apps/shared-app/src/newsletters/newsletter/entities/newsletter.entity";
import { EmailTemplateCategoryEntity } from "../../email-template-category/entities/email.template.category.entity";
 
const  EmailTemplateEntityFieldMeta: EntityMetaCRUDTypeDefinition = {

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
etmplcat_id: {
  desc: `Type of the email template category id.`,
  validation:{}
},
subject: {
  desc: `Subject of the email template.`,
  validation:{
    maxLength: 128,
    maxLengthMsg: `Subject length is only 128 characters.`,
  }
},
body: {
  desc: `Content body of the email template.`,
  validation:{}
},
use_default_header_footer : {
  desc: `Indicates if the email template default or not.`,
  validation:{}
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
const  EmailTemplateVirtualFieldMeta: EntityMetaCRUDTypeDefinition = {
  fr_newsletters:{
      desc: `Email template for this news letter.`,
      validation: {}
  },
  fr_email_template_category: {
        desc: `email template category for the email template.`,
        validation: {}
    },
  
} 
export const EmailTemplateEntityMeta = {...EmailTemplateEntityFieldMeta, ...EmailTemplateVirtualFieldMeta};
const meta = EmailTemplateEntityMeta; // need to use in this file down the line

@ObjectType({ isAbstract: true })
@Directive('@key(fields: "id")')
@Entity({
  name: 'email_template',
  engine: 'InnoDB',
})
export class EmailTemplateEntity implements EntityCRUDTypeDefinition {

    static colprefix: string = `etmpl_`;
    static uploaddir: string = `email-template`;

    static metaname: string = (EmailTemplateEntity.name).replace(EntitySuffix, '');
    static metadesc: string = 'Provides list of email templates.';

    @Field(() => Int, {nullable: true, description: meta.id.desc})
    @PrimaryGeneratedColumn({
      name: `${EmailTemplateEntity.colprefix}id`, 
      type: `int`, 
      unsigned: true, 
      primaryKeyConstraintName: `PRIMARY`,
    })
    id?: number;

    @Field(() => String, {nullable: true, description: meta.title.desc})
    @Column({
      name: `${EmailTemplateEntity.colprefix}title`, 
      type: `varchar`,
      length: meta.title.validation.maxLength,
      collation: `utf8mb4_general_ci`,
    })
    @Index(`${InIndexPrefix}${EmailTemplateEntity.colprefix}title`, { unique: false })
    @MaxLength(meta.title.validation.maxLength as number, {message: meta.title.validation.maxLengthMsg})
    @IsNotEmpty()
    title?: string;

    @Field(() => Int, {nullable: true, description: meta.etmplcat_id.desc})
    @Column({
      name: `${EmailTemplateEntity.colprefix}etmplcat_id`, 
      type: `tinyint`,
      unsigned: true, 
    })
    @IsInt()
    @Index(`${InIndexPrefix}${EmailTemplateEntity.colprefix}etmplcat_id`, { unique: false })
    @IsNotEmpty()
    etmplcat_id?: number;

    @Field(() => String, {nullable: true, description: meta.subject.desc})
    @Column({
      name: `${EmailTemplateEntity.colprefix}subject`, 
      type: `varchar`,
      length: meta.subject.validation.maxLength,
      collation: `utf8mb4_general_ci`,
    })
    @Index(`${InIndexPrefix}${EmailTemplateEntity.colprefix}subject`, { unique: false })
    @MaxLength(meta.subject.validation.maxLength as number, {message: meta.subject.validation.maxLengthMsg})
    @IsNotEmpty()
    subject?: string;

    @Field(() => String, {nullable: true, description: meta.body.desc})
    @Column({
      name: `${EmailTemplateEntity.colprefix}body`, 
      type: `varchar`,
      collation: `utf8mb4_general_ci`,
    })
    @IsNotEmpty()
    body?: string;

    @Field(() => YesNoEnum, {nullable: true, description: meta.use_default_header_footer.desc})
    @Column({
      name: `${EmailTemplateEntity.colprefix}use_default_header_footer`, 
      type: `tinyint`,
      comment: `1 => Yes | 0 => No (If yes it will use default header and footer) `,
      default: 1
    })
    @IsInt()
    @Index(`${InIndexPrefix}${EmailTemplateEntity.colprefix}use_default_header_footer`, { unique: false })
    @IsNotEmpty()
    use_default_header_footer?: number;

    @Field(() => DateTime, {nullable: true, description: meta.active.desc})
    @Column({
      name: `${EmailTemplateEntity.colprefix}active`, 
      type: `datetime`,
      comment: `date-time => No | null => Yes`,
    })
    @Index(`${InIndexPrefix}${EmailTemplateEntity.colprefix}active`, { unique: false })
    @IsOptional()
    active?: Date;

    @Field(() => DateTime, {nullable: true, description: meta.created.desc})
    @CreateDateColumn({
      name: `${EmailTemplateEntity.colprefix}created`, 
      type: `datetime`,
      update: false,
    })
    @Index(`${InIndexPrefix}${EmailTemplateEntity.colprefix}created`, { unique: false })
   created?: Date;

    @Field(() => DateTime, {nullable: true, description: meta.updated.desc})
    @UpdateDateColumn({
      name: `${EmailTemplateEntity.colprefix}updated`, 
      type: `datetime`,
      nullable: true,
    })
    @Index(`${InIndexPrefix}${EmailTemplateEntity.colprefix}updated`, { unique: false })
    @IsOptional()
    updated?: Date;

    @Field(() => DateTime, {nullable: true, description: meta.deleted.desc})
    @DeleteDateColumn({
      name: `${EmailTemplateEntity.colprefix}deleted`,
      type: `datetime`,
      nullable: true,
      comment: `date-time => yes | null => no`,
    })
    @Index(`${InIndexPrefix}${EmailTemplateEntity.colprefix}deleted`, { unique: false })
    @IsOptional()
    deleted?: Date;

    // ████ INTERNAL RELATIONS ████████████████████████████████████████████████

    @Field(() => [NewsLetterEntity], {nullable: true, description: meta.fr_newsletters.desc})
    @OneToMany(() => NewsLetterEntity, (entity: NewsLetterEntity) => entity.fr_email_templates)
    fr_newsletters?: NewsLetterEntity[];

    @Field(() => EmailTemplateCategoryEntity, {nullable: true, description: meta.fr_email_template_category.desc})
    @ManyToOne(() => EmailTemplateCategoryEntity, (entity: EmailTemplateCategoryEntity) => entity.fr_email_templates)
    @JoinColumn({ name: `${EmailTemplateEntity.colprefix}etmplcat_id` })
    fr_email_template_category?: EmailTemplateCategoryEntity; 

    // ████ EXTERNAL RELATIONS ████████████████████████████████████████████████
}