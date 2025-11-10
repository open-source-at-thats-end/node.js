import { EntityMetaCRUDTypeDefinition, EntityCRUDTypeDefinition, DateTime, EntitySuffix, InIndexPrefix, UnIndexPrefix  } from "@libs/library-app";
import { IsEmail, IsInt, IsJSON, IsMobilePhone, IsNotEmpty, IsOptional, MaxLength, MinLength, ValidateIf } from "class-validator";
import { Column, CreateDateColumn, DeleteDateColumn, Entity, Index, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { Directive, Field, Float, Int, ObjectType } from "@nestjs/graphql";
import { pgTypeEnum, positionEnum } from "../master.enum";
import { WebPageHierarchyEntity } from "../../hierarchy/entities/page.hierarchy.entity";

const  WebPageMasterEntityFieldMeta: EntityMetaCRUDTypeDefinition = {

id: {
    desc: `Unique ID of the webpagemaster, auto generated.`,
    validation: {} 
},
title: {
    desc: `Title of the web page master.`,
    validation:{
      maxLength: 128,
      maxLengthMsg: `Title length is only 128 characters.`,
    }
},
url_slug: {
  desc: `Url slug of the web page master.`,
  validation:{
      maxLength: 255,
      maxLengthMsg: `Url slug length is only 255 characters.`,
  }
},
position: {
  desc: `Position of the web page master.`,
  validation:{}
},
type: {
    desc: `Type of the web page master.`,
    validation:{}
},
content: {
  desc: `Content of the web page master.`,
  validation:{}
},
browser_title: {
  desc: `Browser title of the web page master.`,
  validation:{
    maxLength: 60,
    maxLengthMsg: `Reference type length is only 60 characters.`,
  }
},
meta_keyword: {
  desc: `Meta keyword of the pagemaster.`,
  validation:{
    maxLength: 255,
    maxLengthMsg: `Meta keyword of the web page master is only 255 characters.`,
  }
},
meta_desc: {
  desc: `Meta description of the web page master.`,
  validation:{
    maxLength: 160,
    maxLengthMsg: `Meta description of the web page master is only 160 characters.`,
  }
},
active: {
  desc: `Visible of the web page master.`,
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
const  WebPageMasterVirtualFieldMeta: EntityMetaCRUDTypeDefinition = {
  fr_parent_page: {
    desc: `Parent page of web page master.`,
    validation: {}
  }, 

  fr_child_page: {
    desc: `Child page of web page master.`,
    validation: {}
  }, 
} 
export const WebPageMasterEntityMeta = {...WebPageMasterEntityFieldMeta, ...WebPageMasterVirtualFieldMeta};
const meta = WebPageMasterEntityMeta; // need to use in this file down the line

@ObjectType({ isAbstract: true })
@Directive('@key(fields: "id")')
@Entity({
  name: 'webpage_master',
  engine: 'InnoDB',
})
export class WebPageMasterEntity implements EntityCRUDTypeDefinition {

    static colprefix: string = `webpg_`;
    static uploaddir: string = `webpage-master`;

    static metaname: string = (WebPageMasterEntity.name).replace(EntitySuffix, '');
    static metadesc: string = 'Provides list of web web page master.';

    @Field(() => Int, {nullable: true, description: meta.id.desc})
    @PrimaryGeneratedColumn({
      name: `${WebPageMasterEntity.colprefix}id`, 
      type: `int`, 
      unsigned: true, 
      primaryKeyConstraintName: `PRIMARY`,
    })
    id?: number;

    @Field(() => String, {nullable: true, description: meta.title.desc})
    @Column({
      name: `${WebPageMasterEntity.colprefix}title`, 
      type: `varchar`, 
      length: meta.title.validation.maxLength,
      collation: `utf8mb4_general_ci`,
    })
    @Index(`${InIndexPrefix}${WebPageMasterEntity.colprefix}title`, { unique: false })
    @MaxLength(meta.title.validation.maxLength as number, {message: meta.title.validation.maxLengthMsg})
    @IsNotEmpty()
    title?: string;

    @Field(() => String, {nullable: true, description: meta.url_slug.desc})
    @Column({
      name: `${WebPageMasterEntity.colprefix}url_slug`, 
      type: `varchar`, 
      length: meta.url_slug.validation.maxLength,
      collation: `utf8mb4_general_ci`,
      nullable: true,
    })
    @Index(`${InIndexPrefix}${WebPageMasterEntity.colprefix}url_slug`, { unique: false })
    @MaxLength(meta.url_slug.validation.maxLength as number, {message: meta.url_slug.validation.maxLengthMsg})
    @IsOptional()
    url_slug?: string;

    @Field(() => positionEnum, {nullable: true, description: meta.position.desc})
    @Column({
      name: `${WebPageMasterEntity.colprefix}position`, 
      type: `tinyint`, 
      unsigned: true,
      nullable: false,
      default: 2,
      comment: `1=>Top, 2=>Menu, 3=>Footer`
    })
    @IsInt()
    @Index(`${InIndexPrefix}${WebPageMasterEntity.colprefix}position`, { unique: false })
    @IsNotEmpty()
    position?: number;

    @Field(() => pgTypeEnum, {nullable: true, description: meta.type.desc})
    @Column({
      name: `${WebPageMasterEntity.colprefix}type`, 
      type: `tinyint`, 
      unsigned: true ,
      nullable: false,
      default: 2,
      comment: `1 => Simple | 2 => External Link`
    })
    @IsInt()
    @Index(`${InIndexPrefix}${WebPageMasterEntity.colprefix}type`, { unique: false })
    @IsOptional()
    type?: string;

    @Field(() => String, {nullable: true, description: meta.content.desc})
    @Column({
      name: `${WebPageMasterEntity.colprefix}content`, 
      type: `longtext`, 
      collation: `utf8mb4_general_ci`,
    })
    @IsNotEmpty()
    content?: string;

    @Field(() => String, {nullable: true, description: meta.browser_title.desc})
    @Column({
      name: `${WebPageMasterEntity.colprefix}browser_title`, 
      type: `varchar`, 
      length: meta.browser_title.validation.maxLength,
      collation: `utf8mb4_general_ci`,
    })
    @MaxLength(meta.browser_title.validation.maxLength as number, {message: meta.browser_title.validation.maxLengthMsg})
    @IsNotEmpty()
    browser_title?: string;

    @Field(() => String, {nullable: true, description: meta.meta_keyword.desc})
    @Column({
      name: `${WebPageMasterEntity.colprefix}meta_keyword`, 
      type: `varchar`, 
      length: meta.meta_keyword.validation.maxLength,
      collation: `utf8mb4_general_ci`,
    })
    @MaxLength(meta.meta_keyword.validation.maxLength as number, {message: meta.meta_keyword.validation.maxLengthMsg})
    @IsNotEmpty()
    meta_keyword?: string;

    @Field(() => String, {nullable: true, description: meta.meta_desc.desc})
    @Column({
      name: `${WebPageMasterEntity.colprefix}meta_desc`, 
      type: `varchar`, 
      length: meta.meta_desc.validation.maxLength,
      collation: `utf8mb4_general_ci`,
    })
    @MaxLength(meta.meta_desc.validation.maxLength as number, {message: meta.meta_desc.validation.maxLengthMsg})
    @IsNotEmpty()
    meta_desc?: string;

    @Field(() => DateTime, {nullable: true, description: meta.active.desc})
    @CreateDateColumn({
      name: `${WebPageMasterEntity.colprefix}active`, 
      type: `datetime`,
      comment: `date-time => No | null => Yes`
    })
    @IsOptional()
    @Index(`${InIndexPrefix}${WebPageMasterEntity.colprefix}active`, { unique: false })
    active?: Date;

    @Field(() => DateTime, {nullable: true, description: meta.created.desc})
    @CreateDateColumn({
      name: `${WebPageMasterEntity.colprefix}created`, 
      type: `datetime`,
      update: false,
    })
    @Index(`${InIndexPrefix}${WebPageMasterEntity.colprefix}created`, { unique: false })
   created?: Date;

    @Field(() => DateTime, {nullable: true, description: meta.updated.desc})
    @UpdateDateColumn({
      name: `${WebPageMasterEntity.colprefix}updated`, 
      type: `datetime`,
      nullable: true,
    })
    @Index(`${InIndexPrefix}${WebPageMasterEntity.colprefix}updated`, { unique: false })
    @IsOptional()
    updated?: Date;

    @Field(() => DateTime, {nullable: true, description: meta.deleted.desc})
    @DeleteDateColumn({
      name: `${WebPageMasterEntity.colprefix}deleted`,
      type: `datetime`,
      nullable: true,
      comment: `date-time => Yes | null => No`,
    })
    @Index(`${InIndexPrefix}${WebPageMasterEntity.colprefix}deleted`, { unique: false })
    @IsOptional()
    deleted?: Date;

    // ████ INTERNAL RELATIONS ████████████████████████████████████████████████

    @Field(() => [WebPageHierarchyEntity], {nullable: true, description: meta.fr_parent_page.desc})
    @OneToMany(() => WebPageHierarchyEntity, (entity: WebPageHierarchyEntity) => entity.fr_parent_pages)
    fr_parent_page?: WebPageHierarchyEntity[];

    @Field(() => [WebPageHierarchyEntity], {nullable: true, description: meta.fr_child_page.desc})
    @OneToMany(() => WebPageHierarchyEntity, (entity: WebPageHierarchyEntity) => entity.fr_child_pages)
    fr_child_page?: WebPageHierarchyEntity[];



    // ████ EXTERNAL RELATIONS ████████████████████████████████████████████████
}