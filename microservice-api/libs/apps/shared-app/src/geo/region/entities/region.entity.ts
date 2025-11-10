import { EntityMetaCRUDTypeDefinition, EntityCRUDTypeDefinition, DateTime, EntitySuffix, UnIndexPrefix, InIndexPrefix  } from "@libs/library-app";
import { IsJSON, IsNotEmpty, IsOptional, MaxLength, MinLength } from "class-validator";
import { Column, CreateDateColumn, DeleteDateColumn, Entity, Index, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { Field, Int, ObjectType } from "@nestjs/graphql";
import { GraphQLJSONObject } from "graphql-scalars";
import { SubregionEntity } from "../../subregion/entities/subregion.entity";
import { CountryEntity } from "../../country/entities/country.entity";

const  RegionEntityFieldMeta: EntityMetaCRUDTypeDefinition = {

  id: {
      desc: `Unique ID of the region, auto generated.`,
      validation: {} 
  },
  name: {
      desc: `Name of the region.`,
      validation:{
        maxLength: 64,
        maxLengthMsg: `Name of the region length is only 64 characters.`,
      }
  },
  translations: {
      desc: `Translations of the region.`,
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
const  RegionVirtualFieldMeta: EntityMetaCRUDTypeDefinition = {
  fr_subregions: {
      desc: `List of subregions for this region.`,
      validation:{}
  },
  fr_countries: {
      desc: `List of countries for this region.`,
      validation:{}
  }
}
export const RegionEntityMeta = {...RegionEntityFieldMeta, ...RegionVirtualFieldMeta};
const meta = RegionEntityMeta; // need to use in this file down the line

@ObjectType({ isAbstract: true })
@Entity({
  name: 'geo_region',
  engine: 'InnoDB',
})
export class RegionEntity implements EntityCRUDTypeDefinition {

    static colprefix: string = 'region_';
    static uploaddir: string = 'geo-region';

    static metaname: string = (RegionEntity.name).replace(EntitySuffix, '');
    static metadesc: string = 'Provides list of regions in the world.';

    @Field(() => Int, {nullable: true, description: meta.id.desc})
    @PrimaryGeneratedColumn({
      name: `${RegionEntity.colprefix}id`, 
      type: `tinyint`, 
      unsigned: true, 
      primaryKeyConstraintName: `PRIMARY`,
    })
    id?: number;

    @Field(() => String, {nullable: true, description: meta.name.desc})
    @Column({
      name: `${RegionEntity.colprefix}name`, 
      type: `varchar`,
      length: meta.name.validation.maxLength,
      collation: `utf8mb4_general_ci`,
    })
    @Index(`${UnIndexPrefix}${RegionEntity.colprefix}name`, { unique: true })
    @MaxLength(meta.name.validation.maxLength as number, {message: meta.name.validation.maxLengthMsg})
    @IsNotEmpty()
    name?: string;

    @Field(() => String, {nullable: true, description: meta.translations.desc})
    @Column({
      name: `${RegionEntity.colprefix}translations`, 
      type: `text`,
      collation: `utf8mb4_general_ci`,
      nullable: true,
      default: null,
    })
    @IsOptional()
    translations?: string;

    @Field(() => DateTime, {nullable: true, description: meta.created.desc})
    @CreateDateColumn({
      name: `${RegionEntity.colprefix}created`,
      type: `datetime`,
      update: false,
    })
    @Index(`${InIndexPrefix}${RegionEntity.colprefix}created`, { unique: false })
     created?: Date;

    @Field(() => DateTime, {nullable: true, description: meta.updated.desc})
    @UpdateDateColumn({
      name: `${RegionEntity.colprefix}updated`, 
      type: `datetime`,
      nullable: true
    })
    @Index(`${InIndexPrefix}${RegionEntity.colprefix}updated`, { unique: false })
    updated?: Date;

    @Field(() => DateTime, {nullable: true, description: meta.deleted.desc})
    @DeleteDateColumn({
      name: `${RegionEntity.colprefix}deleted`, 
      type: `datetime`,
      nullable: true,
      comment:`date-tim => Yes | null: No`,
    })
    @Index(`${InIndexPrefix}${RegionEntity.colprefix}deleted`, { unique: false })
    deleted?: Date;



    // ████ INTERNAL RELATIONS ████████████████████████████████████████████████

    @Field(() => [SubregionEntity], {
      nullable: true, 
      description: meta.fr_subregions.desc,
      //complexity: 1
    })
    @OneToMany(() => SubregionEntity, (entity: SubregionEntity) => entity.fr_region) 
    fr_subregions?: SubregionEntity[];

    @Field(() => CountryEntity, {
      nullable: true, 
      description: meta.fr_countries.desc,
    })
    @OneToMany(() => CountryEntity, (entity: CountryEntity) => entity.fr_region)  
    fr_countries?: CountryEntity;


    // ████ EXTERNAL RELATIONS ████████████████████████████████████████████████
      
}