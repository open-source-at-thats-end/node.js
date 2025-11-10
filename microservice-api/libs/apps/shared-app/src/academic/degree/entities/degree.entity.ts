import { EntityMetaCRUDTypeDefinition, EntityCRUDTypeDefinition, DateTime, EntitySuffix, InIndexPrefix, UnIndexPrefix  } from "@libs/library-app";
import { IsInt, IsJSON, IsNotEmpty, IsOptional, Max, MaxLength, Min, MinLength } from "class-validator";
import { Column, CreateDateColumn, DeleteDateColumn, Entity, Index, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { Directive, Field, Int, ObjectType } from "@nestjs/graphql";
import { GraphQLJSONObject } from "graphql-scalars";
import { AcademicFieldEntity } from "../../field/entities/field.entity";

const  AcademicDegreeEntityFieldMeta: EntityMetaCRUDTypeDefinition = {

  id: {
      desc: `Unique ID of the academicdegree, auto generated.`,
      validation: {} 
  },
  acadfield_id: {
      desc: `Job nature ID of the academicdegree.`,
      validation:{}
  },
  title: {
      desc: `Title of the academicdegree.`,
      validation:{
        maxLength: 128,
        maxLengthMsg: `Maximum length of title is 128 characters.`
      }
  },
  desc: {
      desc: `Description of the academicdegree.`,
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
      desc: `If record is updated, then date time value will be saved otherwise null to indicate record is not updated.`,
      validation:{}
  },
  deleted: {
      desc: `When record is soft deleted or soft removed, date-time will be saved otherwise null to indicate record is not deleted.`,
      validation:{}
  }
};
const  AcademicDegreeVirtualFieldMeta: EntityMetaCRUDTypeDefinition = {
  fr_academic_field:{
     desc: `Provides academic feild list.`,
     validation: {}
   }
}
export const AcademicDegreeEntityMeta = {...AcademicDegreeEntityFieldMeta, ...AcademicDegreeVirtualFieldMeta};
const meta = AcademicDegreeEntityMeta; // need to use in this file down the line

@ObjectType({ isAbstract: true })
@Directive('@key(fields: "id")') // TODO: FEDERATION step 1 - add directive
@Entity({
  name: 'academic_degree',
  engine: 'InnoDB',
})

export class AcademicDegreeEntity implements EntityCRUDTypeDefinition {
    static colprefix = `acaddeg_`;
    static uploaddir: string = `academic-degree`;

    static metaname: string = (AcademicDegreeEntity.name).replace(EntitySuffix, '');
    static metadesc: string = 'Provides list of academicdegrees in the world.';

    @Field(() => Int, {nullable: true, description: meta.id.desc})
    @PrimaryGeneratedColumn({
      name: `${AcademicDegreeEntity.colprefix}id`, 
      type: `smallint`, 
      unsigned: true, 
      primaryKeyConstraintName: `PRIMARY`,
    })
    id?: number;

    @Field(() => Int, {nullable: true, description: meta.acadfield_id.desc})
    @Column({
      name: `${AcademicDegreeEntity.colprefix}acadfield_id`, 
      type: `smallint`, 
      unsigned: true, 
      comment: `FK(academic_field => acadfield_id)`
    })
    @IsNotEmpty()
    @IsInt()
    acadfield_id?: number;

    @Field(() => String, {nullable: true, description: meta.title.desc})
    @Column({
      name: `${AcademicDegreeEntity.colprefix}title`, 
      type: `varchar`, 
      length: meta.title.validation.maxLength, 
      collation: 'utf8mb4_general_ci'
    })
    @IsNotEmpty()
    @Index(`${InIndexPrefix}${AcademicDegreeEntity.colprefix}title`, { unique: false })
    @MaxLength(meta.title.validation.maxLength as number, {message: meta.title.validation.maxLengthMsg})
    title?: string;

    @Field(() => String, {nullable: true, description: meta.desc.desc})
    @Column({
      name: `${AcademicDegreeEntity.colprefix}desc`, 
      type: `varchar`, 
      nullable: true,
      default: null,
      length: meta.desc.validation.maxLength, 
      collation: 'utf8mb4_general_ci'
    })
    @IsOptional()
    @MaxLength(meta.desc.validation.maxLength as number, {message: meta.desc.validation.maxLengthMsg})
    desc?: string;

    @Field(() => DateTime, {nullable: true, description: meta.created.desc})
    @CreateDateColumn({
      name: `${AcademicDegreeEntity.colprefix}created`, 
      type: `datetime`,
    })
    @Index(`${InIndexPrefix}${AcademicDegreeEntity.colprefix}created`, { unique: false })
    created?: Date;

    @Field(() => DateTime, {nullable: true, description: meta.updated.desc})
    @UpdateDateColumn({
      name: `${AcademicDegreeEntity.colprefix}updated`, 
      type: `datetime`,
      nullable: true,
    })
    @Index(`${InIndexPrefix}${AcademicDegreeEntity.colprefix}updated`, { unique: false })
    updated?: Date;

    @Field(() => DateTime, {nullable: true, description: meta.deleted.desc})
    @DeleteDateColumn({
      name: `${AcademicDegreeEntity.colprefix}deleted`,
      type: `datetime`,
      nullable: true,
      comment: `date-time => Yes | null => No`,
    })
    @Index(`${InIndexPrefix}${AcademicDegreeEntity.colprefix}deleted`, { unique: false })
    deleted?: Date;


    // ████ INTERNAL RELATIONS ████████████████████████████████████████████████

    @Field(() => AcademicFieldEntity, {nullable: true, description: meta.fr_academic_field.desc})
    @ManyToOne(() => AcademicFieldEntity, (entity: AcademicFieldEntity) => entity.fr_academic_degrees)
    @JoinColumn({ name: `${AcademicDegreeEntity.colprefix}acadfield_id` })
    fr_academic_field?: AcademicFieldEntity;


    
    // ████ EXTERNAL RELATIONS ████████████████████████████████████████████████
}