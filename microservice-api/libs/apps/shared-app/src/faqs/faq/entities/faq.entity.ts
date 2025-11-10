import { EntityMetaCRUDTypeDefinition, EntityCRUDTypeDefinition, DateTime, EntitySuffix, InIndexPrefix, UnIndexPrefix  } from "@libs/library-app";
import { IsEmail, IsInt, IsJSON, IsMobilePhone, IsNotEmpty, IsOptional, Max, MaxLength, Min, MinLength, ValidateIf } from "class-validator";
import { Column, CreateDateColumn, DeleteDateColumn, Entity, Index, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { Directive, Field, Float, Int, ObjectType } from "@nestjs/graphql";
import { FaqCategoryEntity } from "../../category/entities/category.entity";

const FaqEntityFieldMeta: EntityMetaCRUDTypeDefinition = {

id: {
    desc: `Unique ID of the pagemaster, auto generated.`,
    validation: {} 
},
faqcat_id: {
    desc: `Faq category of the faq.`,
    validation:{}
}, 
url_slug: {
  desc: `Url slug of the faq.`,
  validation:{
      maxLength: 255,
      maxLengthMsg: `Url slug length is only 255 characters.`,
  }
},
question: {
  desc: `Question of the faq.`,
  validation:{}
},
answer: {
    desc: `Answer of the faq.`,
    validation:{}
},
active: {
  desc: `Active of the faq.`,
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
const  FaqVirtualFieldMeta: EntityMetaCRUDTypeDefinition = {
  fr_faq_categories: {
    desc: `Faq categories of the faq.`,
    validation: {}
  }
} 
export const FaqEntityMeta = {...FaqEntityFieldMeta, ...FaqVirtualFieldMeta};
const meta = FaqEntityMeta; // need to use in this file down the line

@ObjectType({ isAbstract: true })
@Directive('@key(fields: "id")')
@Entity({
  name: 'faq',
  engine: 'InnoDB',
})
export class FaqEntity implements EntityCRUDTypeDefinition {

    static colprefix: string = `faq_`;
    static uploaddir: string = `faq`;

    static metaname: string = (FaqEntity.name).replace(EntitySuffix, '');
    static metadesc: string = 'Provides list of faq.';

    @Field(() => Int, {nullable: true, description: meta.id.desc})
    @PrimaryGeneratedColumn({
      name: `${FaqEntity.colprefix}id`, 
      type: `int`, 
      unsigned: true, 
      primaryKeyConstraintName: `PRIMARY`,
    })
    id?: number;

    @Field(() => Int, {nullable: true, description: meta.faqcat_id.desc})
    @Column({
      name: `${FaqEntity.colprefix}faqcat_id`, 
      type: `tinyint`,
      unsigned: true, 
      comment: `FK (faq_category => faqcat_id)` 
    })
    @Index(`${InIndexPrefix}${FaqEntity.colprefix}faqcat_id`, { unique: false })
    @IsNotEmpty()
    @IsInt()
    faqcat_id?: number;

    @Field(() => String, {nullable: true, description: meta.url_slug.desc})
    @Column({
      name: `${FaqEntity.colprefix}url_slug`, 
      type: `varchar`, 
      length: meta.url_slug.validation.maxLength,
      collation: `utf8mb4_general_ci`,
    })
    @Index(`${InIndexPrefix}${FaqEntity.colprefix}url_slug`, { unique: false })
    @MaxLength(meta.url_slug.validation.maxLength as number, {message: meta.url_slug.validation.maxLengthMsg})
    @IsNotEmpty()
    url_slug?: string;

    @Field(() => String, {nullable: true, description: meta.question.desc})
    @Column({
      name: `${FaqEntity.colprefix}question`, 
      type: `text`, 
      collation: `utf8mb4_general_ci`,
    })
    @IsNotEmpty()
    question?: string;

    @Field(() => String, {nullable: true, description: meta.answer.desc})
    @Column({
      name: `${FaqEntity.colprefix}answer`, 
      type: `text`, 
      collation: `utf8mb4_general_ci`,
    })
    @IsNotEmpty()
    answer?: string;

    @Field(() => DateTime, {nullable: true, description: meta.active.desc})
    @CreateDateColumn({
      name: `${FaqEntity.colprefix}active`, 
      type: `datetime`,
      comment: `date-time => No | null => Yes`,
    })
    @IsOptional()
    @Index(`${InIndexPrefix}${FaqEntity.colprefix}active`, { unique: false })
    active?: Date;

    @Field(() => DateTime, {nullable: true, description: meta.created.desc})
    @CreateDateColumn({
      name: `${FaqEntity.colprefix}created`, 
      type: `datetime`,
      update: false,
    })
    @Index(`${InIndexPrefix}${FaqEntity.colprefix}created`, { unique: false })
    created?: Date;

    @Field(() => DateTime, {nullable: true, description: meta.updated.desc})
    @UpdateDateColumn({
      name: `${FaqEntity.colprefix}updated`, 
      type: `datetime`,
      nullable: true,
    })
    @Index(`${InIndexPrefix}${FaqEntity.colprefix}updated`, { unique: false })
    @IsOptional()
    updated?: Date;

    @Field(() => DateTime, {nullable: true, description: meta.deleted.desc})
    @DeleteDateColumn({
      name: `${FaqEntity.colprefix}deleted`,
      type: `datetime`,
      nullable: true,
      comment: `date-time => yes | null => no`,
    })
    @Index(`${InIndexPrefix}${FaqEntity.colprefix}deleted`, { unique: false })
    @IsOptional()
    deleted?: Date;

    // ████ INTERNAL RELATIONS ████████████████████████████████████████████████

    @Field(() => FaqCategoryEntity, {
        nullable: true, 
        description: meta.fr_faq_categories.desc,
    })
    @ManyToOne(() => FaqCategoryEntity, (entity: FaqCategoryEntity) => entity.fr_faq_category)
    @JoinColumn({ name: `${FaqEntity.colprefix}faqcat_id` })
    fr_faq_categories?: FaqCategoryEntity;


    // ████ EXTERNAL RELATIONS ████████████████████████████████████████████████
}