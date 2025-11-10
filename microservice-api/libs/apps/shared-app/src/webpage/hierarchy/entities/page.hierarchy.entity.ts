import { EntityMetaCRUDTypeDefinition, EntityCRUDTypeDefinition, DateTime, EntitySuffix, InIndexPrefix, UnIndexPrefix  } from "@libs/library-app";
import { IsEmail, IsInt, IsJSON, IsMobilePhone, IsNotEmpty, IsOptional, MaxLength, MinLength, ValidateIf } from "class-validator";
import { Column, CreateDateColumn, DeleteDateColumn, Entity, Index, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { Directive, Field, Float, Int, ObjectType } from "@nestjs/graphql";
import { WebPageMasterEntity } from "../../master/entities/master.entity";

const  WebPageHierarchyEntityFieldMeta: EntityMetaCRUDTypeDefinition = {

id: {
    desc: `Unique ID of the web page hierarchy, auto generated.`,
    validation: {} 
},
parent_page_id: {
  desc: `Parent page id of the web page hierarchy.`,
  validation:{}
},
child_page_id: {
    desc: `Child page Id of the web page hierarchy.`,
    validation:{}
},
order: {
  desc: `Order of the web page hierarchy.`,
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
const  WebPageHierarchyVirtualFieldMeta: EntityMetaCRUDTypeDefinition = {
  fr_parent_pages: {
    desc: `Parent page of the web page hierarchy.`,
    validation: {}
  },
  fr_child_pages: {
    desc: `Child page of the web page hierarchy.`,
    validation: {}
  }
} 
export const WebPageHierarchyEntityMeta = {...WebPageHierarchyEntityFieldMeta, ...WebPageHierarchyVirtualFieldMeta};
const meta = WebPageHierarchyEntityMeta; // need to use in this file down the line

@ObjectType({ isAbstract: true })
@Directive('@key(fields: "id")')
@Entity({
  name: 'webpage_hierarchy',
  engine: 'InnoDB',
})
export class WebPageHierarchyEntity implements EntityCRUDTypeDefinition {

    static colprefix: string = `webpghier_`;
    static uploaddir: string = `webpage-hierarchy`;

    static metaname: string = (WebPageHierarchyEntity.name).replace(EntitySuffix, '');
    static metadesc: string = 'Provides list of web page hierarchy.';

    @Field(() => Int, {nullable: true, description: meta.id.desc})
    @PrimaryGeneratedColumn({
      name: `${WebPageHierarchyEntity.colprefix}id`, 
      type: `int`, 
      unsigned: true, 
      primaryKeyConstraintName: `PRIMARY`,
    })
    id?: number;

    @Field(() => Int, {nullable: true, description: meta.parent_page_id.desc})
    @Column({
      name: `${WebPageHierarchyEntity.colprefix}parent_page_id`, 
      type: `smallint`, 
      unsigned: true, 
      nullable: false,
      comment: `FK(webpage_master=>page_id)`
    })
    @IsInt()
    @Index(`${InIndexPrefix}${WebPageHierarchyEntity.colprefix}parent_page_id`, { unique: false })
    @IsNotEmpty()
    parent_page_id?: number;

    @Field(() => Int, {nullable: true, description: meta.child_page_id.desc})
    @Column({
      name: `${WebPageHierarchyEntity.colprefix}child_page_id`, 
      type: `smallint`, 
      unsigned: true, 
      nullable: false,
      comment: `FK(webpage_master=>page_id)`
    })
    @IsInt()
    @Index(`${InIndexPrefix}${WebPageHierarchyEntity.colprefix}child_page_id`, { unique: false })
    @IsNotEmpty()
    child_page_id?: number;

    @Field(() => Int, {nullable: true, description: meta.order.desc})
    @Column({
      name: `${WebPageHierarchyEntity.colprefix}order`, 
      type: `smallint`, 
      unsigned: true, 
      nullable: false,
    })
    @IsInt()
    @Index(`${InIndexPrefix}${WebPageHierarchyEntity.colprefix}order`, { unique: false })
    @IsNotEmpty()
    order?: number; 
    
    @Field(() => DateTime, {nullable: true, description: meta.created.desc})
    @CreateDateColumn({
      name: `${WebPageHierarchyEntity.colprefix}created`, 
      type: `datetime`,
      update: false,
    })
    @Index(`${InIndexPrefix}${WebPageHierarchyEntity.colprefix}created`, { unique: false })
   created?: Date;

    @Field(() => DateTime, {nullable: true, description: meta.updated.desc})
    @UpdateDateColumn({
      name: `${WebPageHierarchyEntity.colprefix}updated`, 
      type: `datetime`,
      nullable: true,
    })
    @Index(`${InIndexPrefix}${WebPageHierarchyEntity.colprefix}updated`, { unique: false })
    @IsOptional()
    updated?: Date;

    @Field(() => DateTime, {nullable: true, description: meta.deleted.desc})
    @DeleteDateColumn({
      name: `${WebPageHierarchyEntity.colprefix}deleted`,
      type: `datetime`,
      nullable: true,
      comment: `date-time => Yes | null => No`,
    })
    @Index(`${InIndexPrefix}${WebPageHierarchyEntity.colprefix}deleted`, { unique: false })
    @IsOptional()
    deleted?: Date;

    // ████ INTERNAL RELATIONS ████████████████████████████████████████████████

    @Field(() => WebPageMasterEntity, {
        nullable: true, 
        description: meta.fr_parent_pages.desc,
    })
    @ManyToOne(() => WebPageMasterEntity, (entity: WebPageMasterEntity) => entity.fr_parent_page)
    @JoinColumn({ name: `${WebPageHierarchyEntity.colprefix}parent_page_id` })
    fr_parent_pages?: WebPageMasterEntity;

    @Field(() => WebPageMasterEntity, {
      nullable: true, 
      description: meta.fr_child_pages.desc,
    })
    @ManyToOne(() => WebPageMasterEntity, (entity: WebPageMasterEntity) => entity.fr_child_page)
    @JoinColumn({ name: `${WebPageHierarchyEntity.colprefix}child_page_id` })
    fr_child_pages?: WebPageMasterEntity;

    // ████ EXTERNAL RELATIONS ████████████████████████████████████████████████
}