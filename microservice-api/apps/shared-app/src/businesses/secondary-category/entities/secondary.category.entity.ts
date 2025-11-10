import { EntityMetaCRUDTypeDefinition, EntityCRUDTypeDefinition, DateTime, EntitySuffix, InIndexPrefix, UnIndexPrefix  } from "@libs/library-app";
import { IsEmail, IsJSON, IsMobilePhone, IsNotEmpty, IsOptional, MaxLength, MinLength, ValidateIf, IsInt } from "class-validator";
import { Column, CreateDateColumn, DeleteDateColumn, Entity, Index, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { Directive, Field, Float, Int, ObjectType } from "@nestjs/graphql";
import { BusinessPrimaryCategoryEntity } from "../../primary-category/entities/primary.category.entity";
import { BusinessEntity } from "../../business/entities/business.entity";

const  BusinessSecondaryCategoryEntityFieldMeta: EntityMetaCRUDTypeDefinition = {

id: {
    desc: `Unique ID of the business secondary category, auto generated.`,
    validation: {} 
},
buspricat_id: {
  desc: `Id of the business primary category.`,
  validation:{
    
  }
},
title: {
  desc: `Title of the business secondary category.`,
  validation:{
    maxLength: 128,
    maxLengthMsg: `Maximum length of title is 128 characters.`
  }
},
desc: {
    desc: `Description of the business secondary category.`,
    validation:{
      maxLength: 255,
      maxLengthMsg: `Maximum length of description is 255 characters.`
    }
},
active: {
  desc: `Active of the business secondary category.`,
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
const  BusinessSecondaryCategoryVirtualFieldMeta: EntityMetaCRUDTypeDefinition = {
  fkey_primary_categories: {
    desc: `business primary categories.`,
    validation: {}
  },
  fkey_buiss_sec_categories1: {
    desc: `Businesses related to secondary category 1.`,
    validation: {},
  },
  fkey_buiss_sec_categories2: {
    desc: `Businesses related to secondary category 2.`,
    validation: {},
  },
  fkey_buiss_sec_categories3: {
    desc: `Businesses related to secondary category 3.`,
    validation: {},
  },
  fkey_buiss_sec_categories4: {
    desc: `Businesses related to secondary category 4.`,
    validation: {},
  },
  fkey_buiss_sec_categories5: {
    desc: `Businesses related to secondary category 5.`,
    validation: {},
  },
  fkey_buiss_sec_categories6: {
    desc: `Businesses related to secondary category 6.`,
    validation: {},
  },
  fkey_buiss_sec_categories7: {
    desc: `Businesses related to secondary category 7.`,
    validation: {},
  },
  fkey_buiss_sec_categories8: {
    desc: `Businesses related to secondary category 8.`,
    validation: {},
  },
  fkey_buiss_sec_categories9: {
    desc: `Businesses related to secondary category 9.`,
    validation: {},
  },


} 
export const BusinessSecondaryCategoryEntityMeta = {...BusinessSecondaryCategoryEntityFieldMeta, ...BusinessSecondaryCategoryVirtualFieldMeta};
const meta = BusinessSecondaryCategoryEntityMeta; // need to use in this file down the line

@ObjectType({ isAbstract: true })
@Directive('@key(fields: "id")')
@Entity({
  name: 'business_secondary_category',
  engine: 'InnoDB',
})
export class BusinessSecondaryCategoryEntity implements EntityCRUDTypeDefinition {

    static colprefix: string = `busseccat_`;
    static uploaddir: string = `business-secondary-category`;

    static metaname: string = (BusinessSecondaryCategoryEntity.name).replace(EntitySuffix, '');
    static metadesc: string = 'Provides list of business secondary category.';

    @Field(() => Int, {nullable: true, description: meta.id.desc})
    @PrimaryGeneratedColumn({
      name: `${BusinessSecondaryCategoryEntity.colprefix}id`, 
      type: `int`, 
      unsigned: true, 
      primaryKeyConstraintName: `PRIMARY`,
    })
    id?: number;

    @Field(() => Int, {nullable: true, description: meta.buspricat_id.desc})
    @Column({
      name: `${BusinessSecondaryCategoryEntity.colprefix}buspricat_id`, 
      type: `smallint`,
    })
    @IsInt()
    @Index(`${InIndexPrefix}${BusinessSecondaryCategoryEntity.colprefix}buspricat_id`, { unique: false })
    @IsNotEmpty()
    buspricat_id?: number;

    @Field(() => String, {nullable: true, description: meta.title.desc})
    @Column({
      name: `${BusinessSecondaryCategoryEntity.colprefix}title`, 
      type: `varchar`,
      collation: `utf8mb4_general_ci`,
      length: meta.title.validation.maxLength, 
    })
    @MaxLength(meta.title.validation.maxLength as number, {message: meta.title.validation.maxLengthMsg})
    @Index(`${InIndexPrefix}${BusinessSecondaryCategoryEntity.colprefix}title`, { unique: false })
    @IsNotEmpty()
    title?: string;

    @Field(() => String, {nullable: true, description: meta.desc.desc})
    @Column({
      name: `${BusinessSecondaryCategoryEntity.colprefix}desc`, 
      type: `varchar`,
      collation: `utf8mb4_general_ci`,
      length: meta.desc.validation.maxLength, 
    })
    @MaxLength(meta.desc.validation.maxLength as number, {message: meta.desc.validation.maxLengthMsg})
    @IsOptional()
    desc?: string;

    @Field(() => DateTime, {nullable: true, description: meta.active.desc})
    @Column({
      name: `${BusinessSecondaryCategoryEntity.colprefix}active`, 
      type: `datetime`, 
      comment: `date-time => No | null => Yes`
    })
    @Index(`${InIndexPrefix}${BusinessSecondaryCategoryEntity.colprefix}active`, { unique: false })
    @IsOptional()
    active?: Date;
    
    @Field(() => DateTime, {nullable: true, description: meta.created.desc})
    @CreateDateColumn({
      name: `${BusinessSecondaryCategoryEntity.colprefix}created`, 
      type: `datetime`,
      update: false,
    })
    @Index(`${InIndexPrefix}${BusinessSecondaryCategoryEntity.colprefix}created`, { unique: false })
    created?: Date;

    @Field(() => DateTime, {nullable: true, description: meta.updated.desc})
    @UpdateDateColumn({
      name: `${BusinessSecondaryCategoryEntity.colprefix}updated`, 
      type: `datetime`,
      nullable: true,
    })
    @Index(`${InIndexPrefix}${BusinessSecondaryCategoryEntity.colprefix}updated`, { unique: false })
    @IsOptional()
    updated?: Date;

    @Field(() => DateTime, {nullable: true, description: meta.deleted.desc})
    @DeleteDateColumn({
      name: `${BusinessSecondaryCategoryEntity.colprefix}deleted`,
      type: `datetime`,
      nullable: true,
      comment: `date-time => yes | null => no`,
    })
    @Index(`${InIndexPrefix}${BusinessSecondaryCategoryEntity.colprefix}deleted`, { unique: false })
    @IsOptional()
    deleted?: Date;

    // ████ INTERNAL RELATIONS ████████████████████████████████████████████████

    @Field(() => BusinessPrimaryCategoryEntity, {
        nullable: true, 
        description: meta.fkey_primary_categories.desc,
    })
    @ManyToOne(() => BusinessPrimaryCategoryEntity, (entity: BusinessPrimaryCategoryEntity) => entity.fkey_secondary_categories)
    @JoinColumn({ name: `${BusinessSecondaryCategoryEntity.colprefix}buspricat_id` })
    fkey_primary_categories?: BusinessPrimaryCategoryEntity;

    @Field(() => [BusinessEntity], {nullable: true, description: meta.fkey_buiss_sec_categories1.desc})
    @OneToMany(() => BusinessEntity, (entity: BusinessEntity) => entity.fkey_secondary_categories1)
    fkey_buiss_sec_categories1?: BusinessEntity[];

    @Field(() => [BusinessEntity], {nullable: true, description: meta.fkey_buiss_sec_categories2.desc})
    @OneToMany(() => BusinessEntity, (entity: BusinessEntity) => entity.fkey_secondary_categories2)
    fkey_buiss_sec_categories2?: BusinessEntity[];

    @Field(() => [BusinessEntity], {nullable: true, description: meta.fkey_buiss_sec_categories3.desc})
    @OneToMany(() => BusinessEntity, (entity: BusinessEntity) => entity.fkey_secondary_categories3)
    fkey_buiss_sec_categories3?: BusinessEntity[];

    @Field(() => [BusinessEntity], {nullable: true, description: meta.fkey_buiss_sec_categories4.desc})
    @OneToMany(() => BusinessEntity, (entity: BusinessEntity) => entity.fkey_secondary_categories4)
    fkey_buiss_sec_categories4?: BusinessEntity[];

    @Field(() => [BusinessEntity], {nullable: true, description: meta.fkey_buiss_sec_categories5.desc})
    @OneToMany(() => BusinessEntity, (entity: BusinessEntity) => entity.fkey_secondary_categories5)
    fkey_buiss_sec_categories5?: BusinessEntity[];

    @Field(() => [BusinessEntity], {nullable: true, description: meta.fkey_buiss_sec_categories6.desc})
    @OneToMany(() => BusinessEntity, (entity: BusinessEntity) => entity.fkey_secondary_categories6)
    fkey_buiss_sec_categories6?: BusinessEntity[];

    @Field(() => [BusinessEntity], {nullable: true, description: meta.fkey_buiss_sec_categories7.desc})
    @OneToMany(() => BusinessEntity, (entity: BusinessEntity) => entity.fkey_secondary_categories7)
    fkey_buiss_sec_categories7?: BusinessEntity[];

    @Field(() => [BusinessEntity], {nullable: true, description: meta.fkey_buiss_sec_categories8.desc})
    @OneToMany(() => BusinessEntity, (entity: BusinessEntity) => entity.fkey_secondary_categories8)
    fkey_buiss_sec_categories8?: BusinessEntity[];

    @Field(() => [BusinessEntity], {nullable: true, description: meta.fkey_buiss_sec_categories9.desc})
    @OneToMany(() => BusinessEntity, (entity: BusinessEntity) => entity.fkey_secondary_categories9)
    fkey_buiss_sec_categories9?: BusinessEntity[];

    // ████ EXTERNAL RELATIONS ████████████████████████████████████████████████
}