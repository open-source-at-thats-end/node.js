import { EntityMetaCRUDTypeDefinition, EntityCRUDTypeDefinition, DateTime, EntitySuffix, InIndexPrefix  } from "@libs/library-app";
import { IsJSON, IsNotEmpty, IsOptional, MaxLength, MinLength } from "class-validator";
import { Column, CreateDateColumn, DeleteDateColumn, Entity, Index, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { Directive, Field, Int, ObjectType } from "@nestjs/graphql";
import { GraphQLJSONObject } from "graphql-scalars";
import { AcademicDegreeEntity } from "../../degree/entities/degree.entity";

const  AcademicFieldEntityFieldMeta: EntityMetaCRUDTypeDefinition = {

  id: {
      desc: `Unique ID of the academicdield, auto generated.`,
      validation: {} 
  },
  title: {
      desc: `Title of the academicdield.`,
      validation:{
        maxLength: 128,
        maxLengthMsg: `Maximum length of title is 128 characters.`
      }
  },
  desc: {
      desc: `Description of the academic field.`,
      validation:{
         maxLength: 255,
         maxLengthMsg: `Maximum length of title is 255 characters.`
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
const  AcademicFieldVirtualFieldMeta: EntityMetaCRUDTypeDefinition = {
  
  fr_academic_degrees: {
     desc: `Provides list of academicd degrees list.`,
     validation: {}
   },
   fr_job_recuriters: {
    desc: `List of jobrecruiters that are associated with this academicdield.`,
    validation:{}
  }
}
export const AcademicFieldEntityMeta = {...AcademicFieldEntityFieldMeta, ...AcademicFieldVirtualFieldMeta};
const meta = AcademicFieldEntityMeta; // need to use in this file down the line

@ObjectType({ isAbstract: true })
@Directive('@key(fields: "id")')
@Entity({
  name: 'academic_field',
  engine: 'InnoDB',
})
export class AcademicFieldEntity implements EntityCRUDTypeDefinition {
    static colprefix = 'acadfield_';
    static uploaddir: string = `academic-field`;

    static metaname: string = (AcademicFieldEntity.name).replace(EntitySuffix, '');
    static metadesc: string = 'Provides list of academic fields in the world.';

    @Field(() => Int, {nullable: true, description: meta.id.desc})
    @PrimaryGeneratedColumn({
      name: `${AcademicFieldEntity.colprefix}id`, 
      type: `smallint`, 
      unsigned: true, 
      primaryKeyConstraintName: `PRIMARY`,
    })
    id?: number;

    @Field(() => String, {nullable: true, description: meta.title.desc})
    @Column({
      name: `${AcademicFieldEntity.colprefix}title`, 
      type: `varchar`, 
      length: meta.title.validation.maxLength, 
      collation: 'utf8mb4_general_ci'
    })
    @IsNotEmpty()
    @Index(`${InIndexPrefix}${AcademicFieldEntity.colprefix}title`, { unique: false })
    @MaxLength(meta.title.validation.maxLength as number, {message: meta.title.validation.maxLengthMsg})
    title?: string;

    @Field(() => String, {nullable: true, description: meta.desc.desc})
    @Column({
      name: `${AcademicFieldEntity.colprefix}desc`, 
      type: `varchar`, 
      nullable: true,
      default: null,
      length: meta.desc.validation.maxLength, 
      collation: 'utf8mb4_general_ci'
    })
    @IsOptional()
    @MaxLength(meta.desc.validation.maxLength as number, {message: meta.desc.validation.maxLengthMsg})
    desc?: string

    @Field(() => DateTime, {nullable: true, description: meta.created.desc})
    @CreateDateColumn({
      name: `${AcademicFieldEntity.colprefix}created`, 
      type: `datetime`,
    })
    @Index(`${InIndexPrefix}${AcademicFieldEntity.colprefix}created`, { unique: false })
    created?: Date;

    @Field(() => DateTime, {nullable: true, description: meta.updated.desc})
    @UpdateDateColumn({
      name: `${AcademicFieldEntity.colprefix}updated`, 
      type: `datetime`,
      nullable: true,
    })
    @Index(`${InIndexPrefix}${AcademicFieldEntity.colprefix}updated`, { unique: false })
    updated?: Date;

    @Field(() => DateTime, {nullable: true, description: meta.deleted.desc})
    @DeleteDateColumn({
      name: `${AcademicFieldEntity.colprefix}deleted`,
      type: `datetime`,
      nullable: true,
      comment: `date-time => Yes | null => No`,
    })
    @Index(`${InIndexPrefix}${AcademicFieldEntity.colprefix}deleted`, { unique: false })
    deleted?: Date;

    // ████ INTERNAL RELATIONS ████████████████████████████████████████████████

    @Field(() => [AcademicDegreeEntity], {nullable: true, description: meta.fr_academic_degrees.desc})
    @OneToMany(() => AcademicDegreeEntity, (entity: AcademicDegreeEntity) => entity.fr_academic_field)
    fr_academic_degrees?: AcademicDegreeEntity[]


    
    // ████ EXTERNAL RELATIONS ████████████████████████████████████████████████
}