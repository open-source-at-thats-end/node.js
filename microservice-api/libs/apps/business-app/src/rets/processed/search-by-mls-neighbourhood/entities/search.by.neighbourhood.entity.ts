import { EntityMetaCRUDTypeDefinition, EntityCRUDTypeDefinition, DateTime, EntitySuffix, InIndexPrefix, ResolveGraphFieldRelation } from "@libs/library-app";
import { IsInt, IsNotEmpty, IsOptional, MaxLength } from "class-validator";
import { Column, CreateDateColumn, DeleteDateColumn, Double, Entity, Index, OneToMany, OneToOne, JoinColumn, PrimaryGeneratedColumn, Unique, UpdateDateColumn } from "typeorm";
import { Directive, Field, Float, Int, ObjectType } from "@nestjs/graphql";

/*
id?: any;
unit_no?: any;
property_type?: any;
subtype?: any;
subdivision?: any;
created?: any;
updated?: any;
deleted?: any;
*/

const  ProcessedSearchByNeighbourhoodEntityFieldMeta: EntityMetaCRUDTypeDefinition = {

    id: {
        desc: 'Unique ID of the processed search by neighbourhood, auto generated.',
        validation: {} 
    },
    unit_no: {
        desc: 'Unit no',
        validation:{
          maxLength:25,
          maxLengthMsg: "Maximum length of unit no is 25 characters.",
        }
    },
    property_type: {
      desc: 'Property type of the processed search by neighbourhood',
      validation:{
        maxLength:20,
        maxLengthMsg: "Maximum length of property type is 20 characters.",
      }
    },
    subtype: {
      desc: 'Sub type of the processed search by neighbourhood',
      validation:{
        maxLength:30,
        maxLengthMsg: "Maximum length of sub type is 30 characters.",
      }
    },
    subdivision: {
      desc: 'Subdivision of the processed search by neighbourhood',
      validation:{
        maxLength:150,
        maxLengthMsg: "Maximum length of subdivision is 150 characters.",
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

const  ProcessedSearchByNeighbourhoodVirtualFieldMeta: EntityMetaCRUDTypeDefinition = {

}

export const ProcessedSearchByNeighbourhoodEntityMeta = {...ProcessedSearchByNeighbourhoodEntityFieldMeta, ...ProcessedSearchByNeighbourhoodVirtualFieldMeta};
const meta = ProcessedSearchByNeighbourhoodEntityMeta; // need to use in this file down the line

@ObjectType({ isAbstract: true })
@Directive('@key(fields: "id")')
@Entity({
  name: 'rets_processed_search_by_neighbourhood',
  engine: 'InnoDB',
})
export class ProcessedSearchByNeighbourhoodEntity implements EntityCRUDTypeDefinition {

    static colprefix: string = 'rpsnbh_';
    static uploaddir: string = 'rets-processed-search-by-neighbourhood';
    
    static metaname: string = (ProcessedSearchByNeighbourhoodEntity.name).replace(EntitySuffix, '');
    static metadesc: string = 'Provide processed search by neighbourhood.';

    @Field(() => Int, {nullable: true, description: meta.id.desc})
    @PrimaryGeneratedColumn({
      name: `${ProcessedSearchByNeighbourhoodEntity.colprefix}id`, 
      type: 'int', 
      unsigned: true, 
      primaryKeyConstraintName: 'PRIMARY',
    })
    id?: number;

    @Field(() => String, {nullable: true, description: meta.unit_no.desc})
    @Column({
      name: `${ProcessedSearchByNeighbourhoodEntity.colprefix}unit_no`, 
      type: 'varchar', 
      length: meta.unit_no.validation.maxLength, 
      collation: 'utf8mb4_general_ci',
      nullable: true
    })
    @IsOptional()
    @Index(`${InIndexPrefix}${ProcessedSearchByNeighbourhoodEntity.colprefix}unit_no`, { unique: false })
    @MaxLength(meta.unit_no.validation.maxLength as number, {message: meta.unit_no.validation.maxLengthMsg})
    unit_no?: string;

    @Field(() => String, {nullable: true, description: meta.property_type.desc})
    @Column({
      name: `${ProcessedSearchByNeighbourhoodEntity.colprefix}property_type`, 
      type: 'varchar', 
      length: meta.property_type.validation.maxLength, 
      collation: 'utf8mb4_general_ci',
    })
    @IsNotEmpty()
    @Index(`${InIndexPrefix}${ProcessedSearchByNeighbourhoodEntity.colprefix}property_type`, { unique: false })
    @MaxLength(meta.property_type.validation.maxLength as number, {message: meta.property_type.validation.maxLengthMsg})
    property_type?: string;

    @Field(() => String, {nullable: true, description: meta.subtype.desc})
    @Column({
      name: `${ProcessedSearchByNeighbourhoodEntity.colprefix}subtype`, 
      type: 'varchar', 
      length: meta.subtype.validation.maxLength, 
      collation: 'utf8mb4_general_ci',
    })
    @IsNotEmpty()
    @Index(`${InIndexPrefix}${ProcessedSearchByNeighbourhoodEntity.colprefix}subtype`, { unique: false })
    @MaxLength(meta.subtype.validation.maxLength as number, {message: meta.subtype.validation.maxLengthMsg})
    subtype?: string;

    @Field(() => String, {nullable: true, description: meta.subdivision.desc})
    @Column({
      name: `${ProcessedSearchByNeighbourhoodEntity.colprefix}subdivision`, 
      type: 'varchar', 
      length: meta.subdivision.validation.maxLength, 
      collation: 'utf8mb4_general_ci',
    })
    @IsNotEmpty()
    @Index(`${InIndexPrefix}${ProcessedSearchByNeighbourhoodEntity.colprefix}subdivision`, { unique: false })
    @MaxLength(meta.subdivision.validation.maxLength as number, {message: meta.subdivision.validation.maxLengthMsg})
    subdivision?: string;

    @Field(() => DateTime, {nullable: true, description: meta.created.desc})
    @CreateDateColumn({
      name: `${ProcessedSearchByNeighbourhoodEntity.colprefix}created`,
      update: false,
    })
    @IsOptional()
    @Index(`${InIndexPrefix}${ProcessedSearchByNeighbourhoodEntity.colprefix}created`, { unique: false })
    created?: Date;
  
    @Field(() => DateTime, {nullable: true, description: meta.updated.desc})
    @UpdateDateColumn({
      name: `${ProcessedSearchByNeighbourhoodEntity.colprefix}updated`, 
      nullable: true
    })
    @Index(`${InIndexPrefix}${ProcessedSearchByNeighbourhoodEntity.colprefix}updated`, { unique: false })
    updated?: Date;
  
    @Field(() => DateTime, {nullable: true, description: meta.deleted.desc})
    @DeleteDateColumn({
      name: `${ProcessedSearchByNeighbourhoodEntity.colprefix}deleted`, 
      nullable: true,
      comment:`date-time: yes | null: no`,
    })
    @Index(`${InIndexPrefix}${ProcessedSearchByNeighbourhoodEntity.colprefix}deleted`, { unique: false })
    deleted?: Date;



    // ████ INTERNAL RELATIONS ████████████████████████████████████████████████
     

  
    // ████ EXTERNAL RELATIONS ████████████████████████████████████████████████
        
}

 
