import { EntityMetaCRUDTypeDefinition, EntityCRUDTypeDefinition, DateTime, EntitySuffix, UnIndexPrefix, InIndexPrefix  } from "@libs/library-app";
import { IsInt, IsJSON, IsNotEmpty, IsOptional, MaxLength, MinLength } from "class-validator";
import { Column, CreateDateColumn, DeleteDateColumn, Entity, Index, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { Field, Int, ObjectType } from "@nestjs/graphql";
import { GraphQLJSONObject } from "graphql-scalars";
import { RegionEntity } from "../../region/entities/region.entity";
import { CountryEntity } from "../../country/entities/country.entity";


const  SubregionEntityFieldMeta: EntityMetaCRUDTypeDefinition = {

  id: {
      desc: `Unique ID of the subregion, auto generated.`,
      validation: {} 
  },
  region_id: {
      desc: `Required to get subregion for specifc region.`,
      validation:{}
  },
  name: {
      desc: `Name of the subregion.`,
      validation:{
        maxLength: 64,
        maxLengthMsg: `Name of the subregion length is only 64 characters.`,
      }
  },
  translations: {
      desc: `Translations of the subregion.`,
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
const  SubregionVirtualFieldMeta: EntityMetaCRUDTypeDefinition = {
  fr_region: {
      desc: `Region info of the subregion.`,
      validation:{}
  },
  fr_countries: {
      desc: `List of countries for this subregion.`,
      validation:{}
  }
}
export const SubregionEntityMeta = {...SubregionEntityFieldMeta, ...SubregionVirtualFieldMeta};
const meta = SubregionEntityMeta; // need to use in this file down the line

@ObjectType({ isAbstract: true })
@Entity({
  name: 'geo_subregion',
  engine: 'InnoDB',
})
export class SubregionEntity implements EntityCRUDTypeDefinition {

    static colprefix: string = 'subregion_';
    static uploaddir: string = 'geo-subregion';

    static metaname: string = (SubregionEntity.name).replace(EntitySuffix, '');
    static metadesc: string = 'Provides list of subregions in the world.';

    @Field(() => Int, {nullable: true, description: meta.id.desc})
    @PrimaryGeneratedColumn({
      name: `${SubregionEntity.colprefix}id`, 
      type: `tinyint`, 
      unsigned: true, 
      primaryKeyConstraintName: `PRIMARY`,
    })
    id?: number;

    @Field(() => Int, {nullable: true, description: meta.region_id.desc})
    @Column({
      name: `${SubregionEntity.colprefix}region_id`, 
      type: `tinyint`,
      unsigned: true,
      comment: `FK (geo_region => region_id)	`,
    })
    @IsInt()
    @IsNotEmpty()
    @Index(`${InIndexPrefix}${SubregionEntity.colprefix}region_id`, { unique: false })
    region_id?: number;

    @Field(() => String, {nullable: true, description: meta.name.desc})
    @Column({
      name: `${SubregionEntity.colprefix}name`, 
      type: `varchar`,
      length: meta.name.validation.maxLength,
      collation: `utf8mb4_general_ci`,
    })
    @Index(`${UnIndexPrefix}${SubregionEntity.colprefix}name`, { unique: true })
    @MaxLength(meta.name.validation.maxLength as number, {message: meta.name.validation.maxLengthMsg})
    @IsNotEmpty()
    name?: string;

    @Field(() => String, {nullable: true, description: meta.translations.desc})
    @Column({
      name: `${SubregionEntity.colprefix}translations`, 
      type: `text`,
      collation: `utf8mb4_general_ci`,
      nullable: true,
      default: null,
    })
    @IsOptional()
    translations?: string;

    @Field(() => DateTime, {nullable: true, description: meta.created.desc})
    @CreateDateColumn({
      name: `${SubregionEntity.colprefix}created`,
      type: `datetime`,
      update: false,
    })
    @Index(`${InIndexPrefix}${SubregionEntity.colprefix}created`, { unique: false })
     created?: Date;

    @Field(() => DateTime, {nullable: true, description: meta.updated.desc})
    @UpdateDateColumn({
      name: `${SubregionEntity.colprefix}updated`, 
      type: `datetime`,
      nullable: true
    })
    @Index(`${InIndexPrefix}${SubregionEntity.colprefix}updated`, { unique: false })
    updated?: Date;

    @Field(() => DateTime, {nullable: true, description: meta.deleted.desc})
    @DeleteDateColumn({
      name: `${SubregionEntity.colprefix}deleted`, 
      type: `datetime`,
      nullable: true,
      comment:`date-time: yes | null: no`,
    })
    @Index(`${InIndexPrefix}${SubregionEntity.colprefix}deleted`, { unique: false })
    deleted?: Date;


    // ████ INTERNAL RELATIONS ████████████████████████████████████████████████

    @Field(() => RegionEntity, {
      nullable: true, 
      description: meta.fr_region.desc,
    })
    @ManyToOne(() => RegionEntity, (entity: RegionEntity) => entity.fr_subregions)
    @JoinColumn({ name: `${SubregionEntity.colprefix}region_id` })
    fr_region?: RegionEntity;

    @Field(() => CountryEntity, {
      nullable: true, 
      description: meta.fr_countries.desc,
    })
    @OneToMany(() => CountryEntity, (entity: CountryEntity) => entity.fr_subregion)  
    fr_countries?: CountryEntity[];


    // ████ EXTERNAL RELATIONS ████████████████████████████████████████████████
      
}