import { EntityMetaCRUDTypeDefinition, EntityCRUDTypeDefinition, DateTime, EntitySuffix, InIndexPrefix, UnIndexPrefix  } from "@libs/library-app";
import { IsEmail, IsJSON, IsMobilePhone, IsNotEmpty, IsOptional, MaxLength, MinLength, ValidateIf } from "class-validator";
import { Column, CreateDateColumn, DeleteDateColumn, Entity, Index, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { Directive, Field, Float, Int, ObjectType } from "@nestjs/graphql";
import { FaqEntity } from "../../faq/entities/faq.entity";

const  FaqCategoryEntityFieldMeta: EntityMetaCRUDTypeDefinition = {

id: {
    desc: `Unique ID of the faq category, auto generated.`,
    validation: {} 
},
title: {
  desc: `Title of the faq category.`,
  validation:{
    maxLength: 64,
    maxLengthMsg: `Maximum length of title is 64 characters.`
  }
},
desc: {
    desc: `Description of the faq category.`,
    validation:{
      maxLength: 255,
      maxLengthMsg: `Maximum length of description is 255 characters.`
    }
},
active: {
  desc: `Active of the faq category.`,
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
const  FaqCategoryVirtualFieldMeta: EntityMetaCRUDTypeDefinition = {
  fr_faq_category: {
    desc: `Faq category of faq category.`,
    validation: {}
  }, 

} 
export const FaqCategoryEntityMeta = {...FaqCategoryEntityFieldMeta, ...FaqCategoryVirtualFieldMeta};
const meta = FaqCategoryEntityMeta; // need to use in this file down the line

@ObjectType({ isAbstract: true })
@Directive('@key(fields: "id")')
@Entity({
  name: 'faq_category',
  engine: 'InnoDB',
})
export class FaqCategoryEntity implements EntityCRUDTypeDefinition {

    static colprefix: string = `faqcat_`;
    static uploaddir: string = `faq-category`;

    static metaname: string = (FaqCategoryEntity.name).replace(EntitySuffix, '');
    static metadesc: string = 'Provides list of faq category.';

    @Field(() => Int, {nullable: true, description: meta.id.desc})
    @PrimaryGeneratedColumn({
      name: `${FaqCategoryEntity.colprefix}id`, 
      type: `int`, 
      unsigned: true, 
      primaryKeyConstraintName: `PRIMARY`,
    })
    id?: number;

    @Field(() => String, {nullable: true, description: meta.title.desc})
    @Column({
      name: `${FaqCategoryEntity.colprefix}title`, 
      type: `varchar`,
      collation: `utf8mb4_general_ci`,
      length: meta.title.validation.maxLength, 
    })
    @MaxLength(meta.title.validation.maxLength as number, {message: meta.title.validation.maxLengthMsg})
    @Index(`${InIndexPrefix}${FaqCategoryEntity.colprefix}title`, { unique: false })
    @IsNotEmpty()
    title?: string;

    @Field(() => String, {nullable: true, description: meta.desc.desc})
    @Column({
      name: `${FaqCategoryEntity.colprefix}desc`, 
      type: `varchar`,
      collation: `utf8mb4_general_ci`,
      length: meta.desc.validation.maxLength, 
    })
    @MaxLength(meta.desc.validation.maxLength as number, {message: meta.desc.validation.maxLengthMsg})
    @IsOptional()
    desc?: string;

    @Field(() => DateTime, {nullable: true, description: meta.active.desc})
    @Column({
      name: `${FaqCategoryEntity.colprefix}active`, 
      type: `datetime`, 
      comment: `date-time => No | null => Yes`
    })
    @Index(`${InIndexPrefix}${FaqCategoryEntity.colprefix}active`, { unique: false })
    @IsOptional()
    active?: Date;
    
    @Field(() => DateTime, {nullable: true, description: meta.created.desc})
    @CreateDateColumn({
      name: `${FaqCategoryEntity.colprefix}created`, 
      type: `datetime`,
      update: false,
    })
    @Index(`${InIndexPrefix}${FaqCategoryEntity.colprefix}created`, { unique: false })
    created?: Date;

    @Field(() => DateTime, {nullable: true, description: meta.updated.desc})
    @UpdateDateColumn({
      name: `${FaqCategoryEntity.colprefix}updated`, 
      type: `datetime`,
      nullable: true,
    })
    @Index(`${InIndexPrefix}${FaqCategoryEntity.colprefix}updated`, { unique: false })
    @IsOptional()
    updated?: Date;

    @Field(() => DateTime, {nullable: true, description: meta.deleted.desc})
    @DeleteDateColumn({
      name: `${FaqCategoryEntity.colprefix}deleted`,
      type: `datetime`,
      nullable: true,
      comment: `date-time => yes | null => no`,
    })
    @Index(`${InIndexPrefix}${FaqCategoryEntity.colprefix}deleted`, { unique: false })
    @IsOptional()
    deleted?: Date;

    // ████ INTERNAL RELATIONS ████████████████████████████████████████████████

    @Field(() => [FaqEntity], {nullable: true, description: meta.fr_faq_category.desc})
    @OneToMany(() => FaqEntity, (entity: FaqEntity) => entity.fr_faq_categories)
    fr_faq_category?: FaqEntity[];

    // ████ EXTERNAL RELATIONS ████████████████████████████████████████████████
}