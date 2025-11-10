import { EntityMetaCRUDTypeDefinition, EntityCRUDTypeDefinition, DateTime, EntitySuffix, InIndexPrefix, UnIndexPrefix} from "@libs/library-app";
import { IsInt, IsLatitude, IsLongitude, IsNotEmpty, IsOptional, MaxLength, MinLength } from "class-validator";
import { Column, CreateDateColumn, DeleteDateColumn, Entity, Index, JoinColumn, JoinTable, ManyToMany, ManyToOne, OneToMany, PrimaryGeneratedColumn, TableForeignKey, Unique, UpdateDateColumn } from "typeorm";
import { Directive, Field, Float, Int, ObjectType } from "@nestjs/graphql";
import { CountryEntity } from "../../country/entities/country.entity";
import { LanguageEntity } from "../../language/entities/language.entity";


const CountryLanguageEntityFieldMeta: EntityMetaCRUDTypeDefinition = {
    id: {
        desc: `Unique ID of the country language, auto generated.`,
        validation: {}
    },
    country_id: {
        desc: `Country of the language.`,
        validation:{}
    },
    lang_id: {
        desc: `Language of the country.`,
        validation:{}
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
 
const  CountryLanguageVirtualFieldMeta: EntityMetaCRUDTypeDefinition = {
    fr_country:{
        desc: `Country info for language.`,
        validation:{}
    },
    fr_language: {
        desc: `Language info for country.`,
        validation:{}
    },
    
}
export const CountryLanguageEntityMeta = {...CountryLanguageEntityFieldMeta, ...CountryLanguageVirtualFieldMeta};
const meta = CountryLanguageEntityMeta; 

@ObjectType({ isAbstract: true })
@Directive('@key(fields: "id")')
@Entity({
  name: `geo_country_language`,
  engine: `InnoDB`,
})
@Unique(`${UnIndexPrefix}cntrylang_country_id`,[`country_id`, `lang_id`])
export class CountryLanguageEntity implements EntityCRUDTypeDefinition {

    static colprefix: string = `cntrylang_`;
    static uploaddir: string = `geo_country_language`;

    static metaname: string = (CountryLanguageEntity.name).replace(EntitySuffix, '');
    static metadesc: string = `Country language information.`;

    @Field(() => Int, {nullable: true, description: meta.id.desc})
    @PrimaryGeneratedColumn({
        name: `${CountryLanguageEntity.colprefix}id`, 
        type: `int`, 
        unsigned: true, 
        primaryKeyConstraintName: `PRIMARY`,
    })
    id?: number;

    @Field(() => Int, {nullable: true, description: meta.country_id.desc})
    @Column({
        name: `${CountryLanguageEntity.colprefix}country_id`, 
        type: `smallint`, 
        unsigned: true,
        nullable : false,
        comment: `FK (geo_country => country_id)`
    })
    @IsInt()
    @IsNotEmpty()
    @Index(`${InIndexPrefix}${CountryLanguageEntity.colprefix}country_id`, { unique: false })
    country_id?: number;

    @Field(() => Int, {nullable: true, description: meta.lang_id.desc})
    @Column({
        name: `${CountryLanguageEntity.colprefix}lang_id`, 
        type: `int`, 
        unsigned: true,
        nullable : false,
        comment: `FK (geo_language => lang_id)`
    })
    @IsInt()
    @IsNotEmpty()
    @Index(`${InIndexPrefix}${CountryLanguageEntity.colprefix}lang_id`, { unique: false })
    lang_id?: number;

    @Field(() => DateTime, {nullable: true, description: meta.created.desc})
    @CreateDateColumn({
      name: `${CountryLanguageEntity.colprefix}created`,
      type: `datetime`,
      update: false,
    })
    @Index(`${InIndexPrefix}${CountryLanguageEntity.colprefix}created`, { unique: false })
     created?: Date;
  
    @Field(() => DateTime, {nullable: true, description: meta.updated.desc})
    @UpdateDateColumn({
      name: `${CountryLanguageEntity.colprefix}updated`, 
      type: `datetime`,
      nullable: true
    })
    @Index(`${InIndexPrefix}${CountryLanguageEntity.colprefix}updated`, { unique: false })
    updated?: Date;
  
    @Field(() => DateTime, {nullable: true, description: meta.deleted.desc})
    @DeleteDateColumn({
      name: `${CountryLanguageEntity.colprefix}deleted`, 
      type: `datetime`,
      nullable: true,
      comment:`date-time => Yes | null => No`,
    })
    @Index(`${InIndexPrefix}${CountryLanguageEntity.colprefix}deleted`, { unique: false })
    deleted?: Date;
    
 
    
    // ████ INTERNAL RELATIONS ████████████████████████████████████████████████

    @Field(() => CountryEntity, {
        nullable: true, 
        description: meta.fr_country.desc,
    })
    @ManyToOne(() => CountryEntity, (entity: CountryEntity) => entity.fr_country_languagies)
    @JoinColumn({ name: `${CountryLanguageEntity.colprefix}country_id` })
    fr_country?: CountryEntity;
 
    @Field(() => LanguageEntity, {
        nullable: true, 
        description: meta.fr_language.desc,
    })
    @ManyToOne(() => LanguageEntity, (entity: LanguageEntity) => entity.fr_country_languagies)
    @JoinColumn({ name: `${CountryLanguageEntity.colprefix}lang_id` })
    fr_language?: LanguageEntity;


    // ████ EXTERNAL RELATIONS ████████████████████████████████████████████████

}