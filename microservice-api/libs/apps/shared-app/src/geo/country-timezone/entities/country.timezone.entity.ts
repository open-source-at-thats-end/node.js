import { EntityMetaCRUDTypeDefinition, EntityCRUDTypeDefinition, DateTime, EntitySuffix, InIndexPrefix, UnIndexPrefix} from "@libs/library-app";
import { IsInt, IsLatitude, IsLongitude, IsNotEmpty, IsOptional, MaxLength, MinLength } from "class-validator";
import { Column, CreateDateColumn, DeleteDateColumn, Entity, Index, JoinColumn, JoinTable, ManyToMany, ManyToOne, OneToMany, PrimaryGeneratedColumn, TableForeignKey, Unique, UpdateDateColumn } from "typeorm";
import { Directive, Field, Float, Int, ObjectType } from "@nestjs/graphql";
import { CountryEntity } from "../../country/entities/country.entity";
import { TimezoneEntity } from "../../timezone/entities/timezone.entity";


const CountryTimezoneEntityFieldMeta: EntityMetaCRUDTypeDefinition = {
    id: {
        desc: `Unique ID of the country language, auto generated.`,
        validation: {}
    },
    country_id: {
        desc: `Country of the language.`,
        validation:{}
    },
    tz_id: {
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

const  CountryTimezoneVirtualFieldMeta: EntityMetaCRUDTypeDefinition = {
    fr_country:{
        desc: `Country info for language.`,
        validation:{}
    },
    fr_timezone: {
        desc: `Language info for country.`,
        validation:{}
    },
    
}
export const CountryTimezoneEntityMeta = {...CountryTimezoneEntityFieldMeta, ...CountryTimezoneVirtualFieldMeta};
const meta = CountryTimezoneEntityMeta; 

@ObjectType({ isAbstract: true })
@Directive('@key(fields: "id")')
@Entity({
  name: `geo_country_timezone`,
  engine: `InnoDB`,
})

@Unique(`${UnIndexPrefix}cntrytz_country_id`,[`country_id`, `tz_id`])
export class CountryTimezoneEntity implements EntityCRUDTypeDefinition {

    static colprefix: string = `cntrytz_`;
    static uploaddir: string = `geo_country_timezone`;

    static metaname: string = (CountryTimezoneEntity.name).replace(EntitySuffix, '');
    static metadesc: string = `Country timezone information.`;

    @Field(() => Int, {nullable: true, description: meta.id.desc})
    @PrimaryGeneratedColumn({
        name: `${CountryTimezoneEntity.colprefix}id`, 
        type: `int`, 
        unsigned: true, 
        primaryKeyConstraintName: `PRIMARY`,
    })
    id?: number;

    @Field(() => Int, {nullable: true, description: meta.country_id.desc})
    @Column({
        name: `${CountryTimezoneEntity.colprefix}country_id`, 
        type: `smallint`, 
        unsigned: true,
        comment: `FK (geo_country => country_id)`
    })
    @IsInt()
    @IsNotEmpty()
    @Index(`${InIndexPrefix}${CountryTimezoneEntity.colprefix}country_id`, { unique: false })
    country_id?: number;

    @Field(() => Int, {nullable: true, description: meta.tz_id.desc})
    @Column({
        name: `${CountryTimezoneEntity.colprefix}tz_id`, 
        type: `int`, 
        unsigned: true,
        comment: `FK (geo_time_zone => tz_id)`
    })
    @IsInt()
    @IsNotEmpty()
    @Index(`${InIndexPrefix}${CountryTimezoneEntity.colprefix}tz_id`, { unique: false })
    tz_id?: number;

    @Field(() => DateTime, {nullable: true, description: meta.created.desc})
    @CreateDateColumn({
      name: `${CountryTimezoneEntity.colprefix}created`,
      type: `datetime`,
      update: false,
    })
    @Index(`${InIndexPrefix}${CountryTimezoneEntity.colprefix}created`, { unique: false })
     created?: Date;
  
    @Field(() => DateTime, {nullable: true, description: meta.updated.desc})
    @UpdateDateColumn({
      name: `${CountryTimezoneEntity.colprefix}updated`, 
      type: `datetime`,
      nullable: true
    }) 
    @Index(`${InIndexPrefix}${CountryTimezoneEntity.colprefix}updated`, { unique: false })
    updated?: Date;
  
    @Field(() => DateTime, {nullable: true, description: meta.deleted.desc})
    @DeleteDateColumn({
      name: `${CountryTimezoneEntity.colprefix}deleted`, 
      type: `datetime`,
      nullable: true,
      comment:`date-time: yes | null: no`,
    })
    @Index(`${InIndexPrefix}${CountryTimezoneEntity.colprefix}deleted`, { unique: false })
    deleted?: Date;
    
 
    
    // ████ INTERNAL RELATIONS ████████████████████████████████████████████████

    @Field(() => CountryEntity, {
        nullable: true, 
        description: meta.fr_country.desc,
    })
    @ManyToOne(() => CountryEntity, (entity: CountryEntity) => entity.fr_country_timezone)
    @JoinColumn({ name: `${CountryTimezoneEntity.colprefix}country_id` })
    fr_country?: CountryEntity;
  
    @Field(() => TimezoneEntity, {
        nullable: true, 
        description: meta.fr_timezone.desc,
    })
    @ManyToOne(() => TimezoneEntity, (entity: TimezoneEntity) => entity.fr_country_timezone)
    @JoinColumn({ name: `${CountryTimezoneEntity.colprefix}tz_id` })
    fr_timezone?: TimezoneEntity;


    // ████ EXTERNAL RELATIONS ████████████████████████████████████████████████

}