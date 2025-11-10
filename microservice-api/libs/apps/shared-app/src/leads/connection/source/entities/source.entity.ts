import { EntityMetaCRUDTypeDefinition, EntityCRUDTypeDefinition, DateTime, EntitySuffix, InIndexPrefix, UnIndexPrefix  } from "@libs/library-app";
import { IsEmail, IsInt, IsJSON, IsMobilePhone, isNotEmpty, IsNotEmpty, IsOptional, MaxLength, MinLength, ValidateIf } from "class-validator";
import { Column, CreateDateColumn, DeleteDateColumn, Entity, Index, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { Directive, Field, Float, Int, ObjectType } from "@nestjs/graphql";
import { ConnectionSourceCategoriesEntity } from "../../source-categories/entities/source.categories.entity";
import { LeadEntity } from "../../../lead/entities/lead.entity";
import { UserEntity } from "apps/shared-app/src/folk/user/entities/user.entity";
import { BusinessEntity } from "apps/shared-app/src/businesses/business/entities/business.entity";

 
const  ConnectionSourceEntityFieldMeta: EntityMetaCRUDTypeDefinition = {

id: {
    desc: `Unique ID of the connection source, auto generated.`,
    validation: {} 
},
connsrccat_id: {
    desc: `Connection source category of the connection source.`,
    validation:{}
},
title: {
  desc: `Title of the connection source.`,
  validation:{
    maxLength: 64,
    maxLengthMsg: `Title length is only 64 characters.`,
  }
},
desc: {
  desc: `Description of the connection source.`,
  validation:{
    maxLength: 255,
    maxLengthMsg: `Description length is only 255 characters.`,
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
const  ConnectionSourceVirtualFieldMeta: EntityMetaCRUDTypeDefinition = {
  fr_connection_source_categories_info: {
    desc: `Connection source of the connection source category.`,
    validation: {}
  },
  fr_user: {
    desc: `User of the connection source category.`,
    validation: {}
  },
  fr_business_connection_source: {
    desc: `Buissness of the connection source category.`,
    validation: {}
  },
} 
export const ConnectionSourceEntityMeta = {...ConnectionSourceEntityFieldMeta, ...ConnectionSourceVirtualFieldMeta};
const meta = ConnectionSourceEntityMeta; // need to use in this file down the line

@ObjectType({ isAbstract: true })
@Directive('@key(fields: "id")')
@Entity({
  name: 'connection_source',
  engine: 'InnoDB',
})
export class ConnectionSourceEntity implements EntityCRUDTypeDefinition {

    static colprefix: string = `connsrc_`;
    static uploaddir: string = `connection-source`;

    static metaname: string = (ConnectionSourceEntity.name).replace(EntitySuffix, '');
    static metadesc: string = 'Provides list of connection sources.';

    @Field(() => Int, {nullable: true, description: meta.id.desc})
    @PrimaryGeneratedColumn({
      name: `${ConnectionSourceEntity.colprefix}id`, 
      type: `int`, 
      unsigned: true, 
      primaryKeyConstraintName: `PRIMARY`,
    })
    id?: number;

    @Field(() => Int, {nullable: true, description: meta.connsrccat_id.desc})
    @Column({
      name: `${ConnectionSourceEntity.colprefix}connsrccat_id`, 
      type: `smallint`,
      unsigned: true, 
      comment: `FK (connection_source_categories => connsrccat_id)`,
    })
    @IsInt()
    @Index(`${InIndexPrefix}${ConnectionSourceEntity.colprefix}connsrccat_id`, { unique: false })
    @IsNotEmpty()
    connsrccat_id?: number;

    @Field(() => String, {nullable: true, description: meta.title.desc})
    @Column({
      name: `${ConnectionSourceEntity.colprefix}title`, 
      type: `varchar`, 
      length: meta.title.validation.maxLength,
      collation: `utf8mb4_general_ci`,
    })
    @Index(`${InIndexPrefix}${ConnectionSourceEntity.colprefix}title`, { unique: false })
    @MaxLength(meta.title.validation.maxLength as number, {message: meta.title.validation.maxLengthMsg})
    @IsNotEmpty()
    title?: string;

    @Field(() => String, {nullable: true, description: meta.desc.desc})
    @Column({
      name: `${ConnectionSourceEntity.colprefix}desc`, 
      type: `varchar`,
      length: meta.desc.validation.maxLength,
      nullable: true,
      default: null,
      collation: `utf8mb4_general_ci`,
    })
    @MaxLength(meta.desc.validation.maxLength as number, {message: meta.desc.validation.maxLengthMsg})
    @IsOptional()
    desc?: string;
    
    @Field(() => DateTime, {nullable: true, description: meta.created.desc})
    @CreateDateColumn({
      name: `${ConnectionSourceEntity.colprefix}created`, 
      type: `datetime`,
      update: false,
    })
    @Index(`${InIndexPrefix}${ConnectionSourceEntity.colprefix}created`, { unique: false })
   created?: Date;

    @Field(() => DateTime, {nullable: true, description: meta.updated.desc})
    @UpdateDateColumn({
      name: `${ConnectionSourceEntity.colprefix}updated`, 
      type: `datetime`,
      nullable: true,
    })
    @Index(`${InIndexPrefix}${ConnectionSourceEntity.colprefix}updated`, { unique: false })
    @IsOptional()
    updated?: Date;

    @Field(() => DateTime, {nullable: true, description: meta.deleted.desc})
    @DeleteDateColumn({
      name: `${ConnectionSourceEntity.colprefix}deleted`,
      type: `datetime`,
      nullable: true,
      comment: `date-time => yes | null => no`,
    })
    @Index(`${InIndexPrefix}${ConnectionSourceEntity.colprefix}deleted`, { unique: false })
    @IsOptional()
    deleted?: Date;

    // ████ INTERNAL RELATIONS ████████████████████████████████████████████████

    @Field(() => ConnectionSourceCategoriesEntity, {
        nullable: true, 
        description: meta.fr_connection_source_categories_info.desc,
    })
    @ManyToOne(() => ConnectionSourceCategoriesEntity, (entity: ConnectionSourceCategoriesEntity) => entity.fr_connection_sources_info)
    @JoinColumn({ name: `${ConnectionSourceEntity.colprefix}connsrccat_id` })
    fr_connection_source_categories_info?: ConnectionSourceCategoriesEntity;

    @Field(() => [UserEntity], {nullable: true, description: meta.fr_user.desc})
    @OneToMany(() => UserEntity, (entity: UserEntity) => entity.fr_connection_source)
    fr_user?: UserEntity[];

    @Field(() => [BusinessEntity], {nullable: true, description: meta.fr_business_connection_source.desc})
    @OneToMany(() => BusinessEntity, (entity: BusinessEntity) => entity.fr_connection_source)
    fr_business_connection_source?: BusinessEntity[];
    

    // ████ EXTERNAL RELATIONS ████████████████████████████████████████████████
}