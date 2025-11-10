import { EntityMetaCRUDTypeDefinition, EntityCRUDTypeDefinition, DateTime, EntitySuffix, InIndexPrefix  } from "@libs/library-app";
import { IsLatitude, IsLongitude, IsNotEmpty, IsOptional, MaxLength, MinLength } from "class-validator";
import { Column, CreateDateColumn, DeleteDateColumn, Entity, Index, JoinColumn, JoinTable, ManyToMany, ManyToOne, OneToMany, PrimaryGeneratedColumn, TableForeignKey, Unique, UpdateDateColumn } from "typeorm";
import { Directive, Field, Float, Int, ObjectType } from "@nestjs/graphql";
import { CountryLanguageEntity } from "../../country-language/entities/country.language.entity";

const LanguageEntityFieldMeta: EntityMetaCRUDTypeDefinition = {
    id: {
        desc: `Unique ID of the language, auto generated.`,
        validation: {}
    },
    name: {
        desc: `Name of language.`,
        validation:{
            maxLength: 32,
            maxLengthMsg: `Language name can be 32 characters long.`,
        }
    },
    iso_code: {
        desc: `ISO code of the language.`,
        validation:{
            maxLength: 16,
            maxLengthMsg: `ISO code can be 16 characters long.`,
        }
    },
   latitude: {
        desc: `Latitude of the language.`,
        validation:{}
    },
    longitude: {
        desc: `Longitude of the language.`,
        validation:{}
    },
    macroarea: {
        desc: `Macroarea of the language.`,
        validation:{
            maxLength: 64,
            maxLengthMsg: `ISO code can be 64 characters long.`,
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
        desc: `If record is deleted, then date time value will be saved otherwise null to indicate record is not deleted.`,
        validation:{}
    }
};

const  LanguageVirtualFieldMeta: EntityMetaCRUDTypeDefinition = {
    fr_country_languagies:{
        desc: `country language information.`,
        validation: {}
    }
}
export const LanguageEntityMeta = {...LanguageEntityFieldMeta, ...LanguageVirtualFieldMeta};
const meta = LanguageEntityMeta; // need to use in this file down the line

@ObjectType({ isAbstract: true })
@Directive('@key(fields: "id")')
@Entity({
  name: `geo_language`,
  engine: `InnoDB`,
})

export class LanguageEntity implements EntityCRUDTypeDefinition {

    static colprefix: string = `lang_`;
    static uploaddir: string = `geo-language`;

    static metaname: string = (LanguageEntity.name).replace(EntitySuffix, '');
    static metadesc: string = `Provides list of cities for states.`;

    @Field(() => Int, {nullable: true, description: meta.id.desc})
    @PrimaryGeneratedColumn({
        name: `${LanguageEntity.colprefix}id`, 
        type: `int`, 
        unsigned: true, 
        primaryKeyConstraintName: `PRIMARY`,
    })
    id?: number;

    @Field(() => String, {nullable: true, description: meta.name.desc})
    @Column({
        name: `${LanguageEntity.colprefix}name`, 
        type: `varchar`, 
        length: meta.name.validation.maxLength,
        collation: 'utf8mb4_general_ci',
    })
    @MaxLength(meta.name.validation.maxLength as number, { message: meta.name.validation.maxLengthMsg })
    @IsNotEmpty()
    @Index(`${InIndexPrefix}${LanguageEntity.colprefix}name`, { unique: false })
    name?: string;

    @Field(() => String, {nullable: true, description: meta.iso_code.desc})
    @Column({
        name: `${LanguageEntity.colprefix}iso_code`, 
        type: `varchar`, 
        length: meta.iso_code.validation.maxLength,
        collation: 'utf8mb4_general_ci',
        nullable : true
    })
    @MaxLength(meta.iso_code.validation.maxLength as number, { message: meta.iso_code.validation.maxLengthMsg })
    @IsOptional()
    @Index(`${InIndexPrefix}${LanguageEntity.colprefix}iso_code`, { unique: false })
    iso_code?: string;

    @Field(() => Float, {nullable: true, description: meta.latitude.desc})
    @Column({
        name: `${LanguageEntity.colprefix}latitude`, 
        type: `decimal`,
        precision: 11,
        scale: 8,
        nullable : true
    })
    @IsOptional()
    @Index(`${InIndexPrefix}${LanguageEntity.colprefix}latitude`, { unique: false })
    latitude?: number; 

    @Field(() => Float, {nullable: true, description: meta.longitude.desc})
    @Column({
        name: `${LanguageEntity.colprefix}longitude`, 
        type: `decimal`,
        precision: 11,
        scale: 8,
        nullable : true
    })
    @IsOptional()
    @Index(`${InIndexPrefix}${LanguageEntity.colprefix}longitude`, { unique: false })
    longitude?: number; 

    @Field(() => String, {nullable: true, description: meta.macroarea.desc})
    @Column({
        name: `${LanguageEntity.colprefix}macroarea`, 
        type: `varchar`, 
        length: meta.macroarea.validation.maxLength,
        collation: 'utf8mb4_general_ci',
        nullable : true
    })
    @MaxLength(meta.macroarea.validation.maxLength as number, { message: meta.macroarea.validation.maxLengthMsg })
    @IsOptional()
    @Index(`${InIndexPrefix}${LanguageEntity.colprefix}macroarea`, { unique: false })
    macroarea?: string;

    @Field(() => DateTime, {nullable: true, description: meta.created.desc})
    @CreateDateColumn({
      name: `${LanguageEntity.colprefix}created`,
      type: `datetime`,
      update: false,
    })
    @Index(`${InIndexPrefix}${LanguageEntity.colprefix}created`, { unique: false })
     created?: Date;
  
    @Field(() => DateTime, {nullable: true, description: meta.updated.desc})
    @UpdateDateColumn({
      name: `${LanguageEntity.colprefix}updated`, 
      type: `datetime`,
      nullable: true
    })
    @Index(`${InIndexPrefix}${LanguageEntity.colprefix}updated`, { unique: false })
    updated?: Date;
  
    @Field(() => DateTime, {nullable: true, description: meta.deleted.desc})
    @DeleteDateColumn({
      name: `${LanguageEntity.colprefix}deleted`, 
      type: `datetime`,
      nullable: true,
      comment:`date-time: yes | null: no`,
    })
    @Index(`${InIndexPrefix}${LanguageEntity.colprefix}deleted`, { unique: false })
    deleted?: Date;
    
    
    // ████ INTERNAL RELATIONS ████████████████████████████████████████████████

        @Field(() => [CountryLanguageEntity], {nullable: true, description: meta.fr_country_languagies.desc})
        @OneToMany(() => CountryLanguageEntity, (entity: CountryLanguageEntity) => entity.fr_language)
        fr_country_languagies?: CountryLanguageEntity[];

    // ████ EXTERNAL RELATIONS ████████████████████████████████████████████████

} 