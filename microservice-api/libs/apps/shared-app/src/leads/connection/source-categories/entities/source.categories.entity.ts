import { EntityMetaCRUDTypeDefinition, EntityCRUDTypeDefinition, DateTime, EntitySuffix, InIndexPrefix, UnIndexPrefix  } from "@libs/library-app";
import { IsEmail, IsJSON, IsMobilePhone, IsNotEmpty, IsOptional, MaxLength, MinLength, ValidateIf } from "class-validator";
import { Column, CreateDateColumn, DeleteDateColumn, Entity, Index, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { Directive, Field, Float, Int, ObjectType } from "@nestjs/graphql";
import { ConnectionSourceEntity } from "../../source/entities/source.entity";

 
const  ConnectionSourceCategoriesEntityFieldMeta: EntityMetaCRUDTypeDefinition = {

id: {
    desc: `Unique ID of the connection source categories, auto generated.`,
    validation: {} 
},
title: {
    desc: `Title of the connection source categories.`,
    validation: {
      maxLength: 128,
      maxLengthMsg: `Title of the connection source categories length is only 128 characters.`,
    }  
},
desc: {
    desc: `Description of the connection source categories.`,
    validation: {
      maxLength: 255,
      maxLengthMsg: `Description of the connection source categories is only 255 characters.`,
    }  
},
active: {
  desc: `Indicates whether the connection source is currently active or inactive.`,
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
const  ConnectionSourceCategoriesVirtualFieldMeta: EntityMetaCRUDTypeDefinition = {
  fr_connection_sources_info: {
    desc: `Categories of the connection source.`,
    validation: {}
  },
} 
export const ConnectionSourceCategoriesEntityMeta = {...ConnectionSourceCategoriesEntityFieldMeta, ...ConnectionSourceCategoriesVirtualFieldMeta};
const meta = ConnectionSourceCategoriesEntityMeta; // need to use in this file down the line

@ObjectType({ isAbstract: true })
@Directive('@key(fields: "id")')
@Entity({
  name: 'connection_source_category',
  engine: 'InnoDB', 
})
export class ConnectionSourceCategoriesEntity implements EntityCRUDTypeDefinition {

    static colprefix: string = `connsrccat_`;
    static uploaddir: string = `connection-source-category`;

    static metaname: string = (ConnectionSourceCategoriesEntity.name).replace(EntitySuffix, '');
    static metadesc: string = 'Provides list of connection source categories.';

    @Field(() => Int, {nullable: true, description: meta.id.desc})
    @PrimaryGeneratedColumn({
      name: `${ConnectionSourceCategoriesEntity.colprefix}id`, 
      type: `int`, 
      unsigned: true, 
      primaryKeyConstraintName: `PRIMARY`,
    })
    id?: number;

    @Field(() => String, {nullable: true, description: meta.title.desc})
    @Column({
      name: `${ConnectionSourceCategoriesEntity.colprefix}title`, 
      type: `varchar`, 
      length: meta.title.validation.maxLength,
      collation: `utf8mb4_general_ci`,
    })
    @Index(`${InIndexPrefix}${ConnectionSourceCategoriesEntity.colprefix}title`, { unique: false })
    @MaxLength(meta.title.validation.maxLength as number, {message: meta.title.validation.maxLengthMsg})
    @IsNotEmpty()
    title?: string;

    @Field(() => String, {nullable: true, description: meta.desc.desc})
    @Column({
      name: `${ConnectionSourceCategoriesEntity.colprefix}desc`, 
      type: `varchar`, 
      length: meta.desc.validation.maxLength,
      collation: `utf8mb4_general_ci`,
    })
    @MaxLength(meta.desc.validation.maxLength as number, {message: meta.desc.validation.maxLengthMsg})
    @IsOptional()
    desc?: string;

    @Field(() => DateTime, {nullable: true, description: meta.active.desc})
    @Column({
      name: `${ConnectionSourceCategoriesEntity.colprefix}active`, 
      type: `datetime`,
      comment: `date-time => No | null => Yes`,
    })
    @Index(`${InIndexPrefix}${ConnectionSourceCategoriesEntity.colprefix}active`, { unique: false })
    @IsOptional()
    active?: Date;

    @Field(() => DateTime, {nullable: true, description: meta.created.desc})
    @CreateDateColumn({
      name: `${ConnectionSourceCategoriesEntity.colprefix}created`, 
      type: `datetime`,
      update: false,
    })
    @Index(`${InIndexPrefix}${ConnectionSourceCategoriesEntity.colprefix}created`, { unique: false })
   created?: Date;

    @Field(() => DateTime, {nullable: true, description: meta.updated.desc})
    @UpdateDateColumn({
      name: `${ConnectionSourceCategoriesEntity.colprefix}updated`, 
      type: `datetime`,
      nullable: true,
    })
    @Index(`${InIndexPrefix}${ConnectionSourceCategoriesEntity.colprefix}updated`, { unique: false })
    @IsOptional()
    updated?: Date;

    @Field(() => DateTime, {nullable: true, description: meta.deleted.desc})
    @DeleteDateColumn({
      name: `${ConnectionSourceCategoriesEntity.colprefix}deleted`,
      type: `datetime`,
      nullable: true,
      comment: `date-time => yes | null => no`,
    })
    @Index(`${InIndexPrefix}${ConnectionSourceCategoriesEntity.colprefix}deleted`, { unique: false })
    @IsOptional()
    deleted?: Date;

    // ████ INTERNAL RELATIONS ████████████████████████████████████████████████

    @Field(() => [ConnectionSourceEntity], {nullable: true, description: meta.fr_connection_sources_info.desc})
    @OneToMany(() => ConnectionSourceEntity, (entity: ConnectionSourceEntity) => entity.fr_connection_source_categories_info)
    fr_connection_sources_info?: ConnectionSourceEntity[];
    

    // ████ EXTERNAL RELATIONS ████████████████████████████████████████████████
}