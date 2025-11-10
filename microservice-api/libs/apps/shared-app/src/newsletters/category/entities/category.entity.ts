import { EntityMetaCRUDTypeDefinition, EntityCRUDTypeDefinition, DateTime, EntitySuffix, InIndexPrefix, UnIndexPrefix, YesNoEnum  } from "@libs/library-app";
import { IsEmail, IsJSON, IsMobilePhone, IsNotEmpty, IsOptional, MaxLength, MinLength, ValidateIf } from "class-validator";
import { Column, CreateDateColumn, DeleteDateColumn, Entity, Index, JoinColumn, ManyToOne, OneToMany, OneToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { Directive, Field, Float, Int, ObjectType } from "@nestjs/graphql";
import { NewsLetterEntity } from "../../newsletter/entities/newsletter.entity";
import { UserNewsLetterSubscriptionEntity } from "../../user-subscription/entities/user.subscription.entity";
 
const  NewsLetterCategoryEntityFieldMeta: EntityMetaCRUDTypeDefinition = {

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
const  NewsLetterCategoryVirtualFieldMeta: EntityMetaCRUDTypeDefinition = {
  	fr_newsletters: {
      desc: `Newsletter categories of the Newsletter.`,
      validation: {}
  },

  fr_user_newsletters_subscriptions: {
      desc: `Newsletter categories of the User Newsletter Subscription.`,
      validation: {}
  },
} 
export const NewsLetterCategoryEntityMeta = {...NewsLetterCategoryEntityFieldMeta, ...NewsLetterCategoryVirtualFieldMeta};
const meta = NewsLetterCategoryEntityMeta; // need to use in this file down the line

@ObjectType({ isAbstract: true })
@Directive('@key(fields: "id")')
@Entity({
  name: 'newsletter_category',
  engine: 'InnoDB',
})
export class NewsLetterCategoryEntity implements EntityCRUDTypeDefinition {

    static colprefix: string = `nlcat_`;
    static uploaddir: string = `newsletter-category`;

    static metaname: string = (NewsLetterCategoryEntity.name).replace(EntitySuffix, '');
    static metadesc: string = 'Provides list of newsletter categories.';

    @Field(() => Int, {nullable: true, description: meta.id.desc})
    @PrimaryGeneratedColumn({
      name: `${NewsLetterCategoryEntity.colprefix}id`, 
      type: `int`, 
      unsigned: true, 
      primaryKeyConstraintName: `PRIMARY`,
    })
    id?: number;

    @Field(() => String, {nullable: true, description: meta.title.desc})
    @Column({
      name: `${NewsLetterCategoryEntity.colprefix}title`, 
      type: `varchar`,
      length: meta.title.validation.maxLength,
      collation: `utf8mb4_general_ci`,
      nullable : false
    })
    @Index(`${InIndexPrefix}${NewsLetterCategoryEntity.colprefix}title`, { unique: false })
    @MaxLength(meta.title.validation.maxLength as number, {message: meta.title.validation.maxLengthMsg})
    @IsNotEmpty()
    title?: string;

    @Field(() => String, {nullable: true, description: meta.desc.desc})
    @Column({
      name: `${NewsLetterCategoryEntity.colprefix}desc`, 
      type: `varchar`,
      length: meta.desc.validation.maxLength,
      collation: `utf8mb4_general_ci`,
      nullable : true
    })
    @MaxLength(meta.desc.validation.maxLength as number, {message: meta.desc.validation.maxLengthMsg})
    @IsOptional()
    desc?: string;

    @Field(() => DateTime, {nullable: true, description: meta.active.desc})
    @Column({
      name: `${NewsLetterCategoryEntity.colprefix}active`, 
      type: `datetime`,
      comment: `date-time => No | null => Yes`,
      nullable:true
    })
    @Index(`${InIndexPrefix}${NewsLetterCategoryEntity.colprefix}active`, { unique: false })
    @IsOptional()
    active?: Date;

    @Field(() => DateTime, {nullable: true, description: meta.created.desc})
    @CreateDateColumn({
      name: `${NewsLetterCategoryEntity.colprefix}created`, 
      type: `datetime`,
      update: false,
    })
    @Index(`${InIndexPrefix}${NewsLetterCategoryEntity.colprefix}created`, { unique: false })
   created?: Date;

    @Field(() => DateTime, {nullable: true, description: meta.updated.desc})
    @UpdateDateColumn({
      name: `${NewsLetterCategoryEntity.colprefix}updated`, 
      type: `datetime`,
      nullable: true,
    })
    @Index(`${InIndexPrefix}${NewsLetterCategoryEntity.colprefix}updated`, { unique: false })
    @IsOptional()
    updated?: Date;

    @Field(() => DateTime, {nullable: true, description: meta.deleted.desc})
    @DeleteDateColumn({
      name: `${NewsLetterCategoryEntity.colprefix}deleted`,
      type: `datetime`,
      nullable: true,
      comment: `date-time => Yes | null => No`,
    })
    @Index(`${InIndexPrefix}${NewsLetterCategoryEntity.colprefix}deleted`, { unique: false })
    @IsOptional()
    deleted?: Date;

    // ████ INTERNAL RELATIONS ████████████████████████████████████████████████

    @Field(() => [NewsLetterEntity], {nullable: true, description: meta.fr_newsletters.desc})
    @OneToMany(() => NewsLetterEntity, (entity: NewsLetterEntity) => entity.fr_nl_category)
    fr_newsletters?: NewsLetterEntity[];

    @Field(() => [UserNewsLetterSubscriptionEntity], {nullable: true, description: meta.fr_user_newsletters_subscriptions.desc})
    @OneToMany(() => UserNewsLetterSubscriptionEntity, (entity: UserNewsLetterSubscriptionEntity) => entity.fr_categories)
    fr_user_newsletters_subscriptions?: UserNewsLetterSubscriptionEntity[];


    
    // ████ EXTERNAL RELATIONS ████████████████████████████████████████████████
}