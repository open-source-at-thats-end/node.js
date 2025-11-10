import { EntityMetaCRUDTypeDefinition, EntityCRUDTypeDefinition, DateTime, EntitySuffix, InIndexPrefix, UnIndexPrefix  } from "@libs/library-app";
import { IsEmail, IsJSON, IsMobilePhone, IsNotEmpty, IsOptional, MaxLength, MinLength, ValidateIf, IsInt } from "class-validator";
import { Column, CreateDateColumn, DeleteDateColumn, Entity, Index, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { Directive, Field, Float, Int, ObjectType } from "@nestjs/graphql";
import { BusinessPrimaryCategoryEntity } from "../../primary-category/entities/primary.category.entity";
import { BusinessEntity } from "../../business/entities/business.entity";

@ObjectType({ isAbstract: true })
@Directive('@key(fields: "id")')
@Entity({
  name: 'business_secondary_category',
  engine: 'InnoDB',
})
export class BusinessSecondaryCategoryEntity implements EntityCRUDTypeDefinition {

    static colprefix: string = ``;
    static uploaddir: string = ``;

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