import { EntityMetaCRUDTypeDefinition, EntityCRUDTypeDefinition, DateTime, EntitySuffix, InIndexPrefix, UnIndexPrefix  } from "@libs/library-app";
import { IsEmail, IsJSON, IsMobilePhone, IsNotEmpty, IsOptional, MaxLength, MinLength, ValidateIf } from "class-validator";
import { Column, CreateDateColumn, DeleteDateColumn, Entity, Index, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { Directive, Field, Float, Int, ObjectType } from "@nestjs/graphql";
import { BusinessSecondaryCategoryEntity } from "../../secondary-category/entities/secondary.category.entity";
import { BusinessEntity } from "../../business/entities/business.entity";

@ObjectType({ isAbstract: true })
@Directive('@key(fields: "id")')
@Entity({
  name: 'business_primary_category',
  engine: 'InnoDB',
})
export class BusinessPrimaryCategoryEntity implements EntityCRUDTypeDefinition {

    static colprefix: string = ``;
    static uploaddir: string = ``;

    static metaname: string = (BusinessPrimaryCategoryEntity.name).replace(EntitySuffix, '');
    static metadesc: string = 'Provides list of business primary category.';

    @Field(() => Int, {nullable: true, description: meta.id.desc})
    @PrimaryGeneratedColumn({
      name: `${BusinessPrimaryCategoryEntity.colprefix}id`, 
      type: `int`, 
      unsigned: true, 
      primaryKeyConstraintName: `PRIMARY`,
    })
    id?: number;

    @Field(() => String, {nullable: true, description: meta.title.desc})
    @Column({
      name: `${BusinessPrimaryCategoryEntity.colprefix}title`, 
      type: `varchar`,
      collation: `utf8mb4_general_ci`,
      length: meta.title.validation.maxLength, 
    })
    @MaxLength(meta.title.validation.maxLength as number, {message: meta.title.validation.maxLengthMsg})
    @Index(`${InIndexPrefix}${BusinessPrimaryCategoryEntity.colprefix}title`, { unique: false })
    @IsNotEmpty()
    title?: string;

    @Field(() => String, {nullable: true, description: meta.desc.desc})
    @Column({
      name: `${BusinessPrimaryCategoryEntity.colprefix}desc`, 
      type: `varchar`,
      collation: `utf8mb4_general_ci`,
      length: meta.desc.validation.maxLength, 
    })
    @MaxLength(meta.desc.validation.maxLength as number, {message: meta.desc.validation.maxLengthMsg})
    @IsOptional()
    desc?: string;

    @Field(() => DateTime, {nullable: true, description: meta.active.desc})
    @Column({
      name: `${BusinessPrimaryCategoryEntity.colprefix}active`, 
      type: `datetime`, 
      comment: `date-time => No | null => Yes`
    })
    @Index(`${InIndexPrefix}${BusinessPrimaryCategoryEntity.colprefix}active`, { unique: false })
    @IsOptional()
    active?: Date;
    
    @Field(() => DateTime, {nullable: true, description: meta.created.desc})
    @CreateDateColumn({
      name: `${BusinessPrimaryCategoryEntity.colprefix}created`, 
      type: `datetime`,
      update: false,
    })
    @Index(`${InIndexPrefix}${BusinessPrimaryCategoryEntity.colprefix}created`, { unique: false })
    created?: Date;

    @Field(() => DateTime, {nullable: true, description: meta.updated.desc})
    @UpdateDateColumn({
      name: `${BusinessPrimaryCategoryEntity.colprefix}updated`, 
      type: `datetime`,
      nullable: true,
    })
    @Index(`${InIndexPrefix}${BusinessPrimaryCategoryEntity.colprefix}updated`, { unique: false })
    @IsOptional()
    updated?: Date;

    @Field(() => DateTime, {nullable: true, description: meta.deleted.desc})
    @DeleteDateColumn({
      name: `${BusinessPrimaryCategoryEntity.colprefix}deleted`,
      type: `datetime`,
      nullable: true,
      comment: `date-time => yes | null => no`,
    })
    @Index(`${InIndexPrefix}${BusinessPrimaryCategoryEntity.colprefix}deleted`, { unique: false })
    @IsOptional()
    deleted?: Date;

    // ████ INTERNAL RELATIONS ████████████████████████████████████████████████

    @Field(() => [BusinessSecondaryCategoryEntity], {nullable: true, description: meta.fkey_secondary_categories.desc})
    @OneToMany(() => BusinessSecondaryCategoryEntity, (entity: BusinessSecondaryCategoryEntity) => entity.fkey_primary_categories)
    fkey_secondary_categories?: BusinessSecondaryCategoryEntity[];

    @Field(() => [BusinessEntity], {nullable: true, description: meta.fkey_business_categories.desc})
    @OneToMany(() => BusinessEntity, (entity: BusinessEntity) => entity.fkey_primary_categories)
    fkey_business_categories?: BusinessEntity[];

    // ████ EXTERNAL RELATIONS ████████████████████████████████████████████████
}