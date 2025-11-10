import { EntityMetaCRUDTypeDefinition, EntityCRUDTypeDefinition, DateTime, EntitySuffix, InIndexPrefix  } from "@libs/library-app";
import { IsInt, IsLatitude, IsLongitude, IsNotEmpty, IsOptional, MaxLength, MinLength } from "class-validator";
import { Column, CreateDateColumn, DeleteDateColumn, Entity, Index, JoinColumn, JoinTable, ManyToMany, ManyToOne, OneToMany, PrimaryGeneratedColumn, TableForeignKey, Unique, UpdateDateColumn } from "typeorm";
import { Directive, Field, Float, Int, ObjectType } from "@nestjs/graphql";
import { CountryTimezoneEntity } from "../../country-timezone/entities/country.timezone.entity";
import { CityEntity } from "../../city/entities/city.entity";


const TimezoneEntityFieldMeta: EntityMetaCRUDTypeDefinition = {
    id: {
        desc: `Unique ID of the state, auto generated.`,
        validation: {}
    },
    name: {
        desc: `Name of the timezone.`,
        validation:{
            maxLength: 128,
            maxLengthMsg: `Timezone name can be 128 characters long.`,
        }
    },

    abbreviation: {
        desc: `Abbreviation of the timezone.`,
        validation:{
            maxLength: 16,
            maxLengthMsg: `Timezone abbreviation can be 16 characters long.`,
        }
    },

    timestamp : {
        desc: `Timestamp of the timezone.`,
        validation: {}
    },

    gmt_offset : {
        desc: `Timestamp of the timezone.`,
        validation: {}
    },

    dst : {
        desc: `Timestamp of the timezone.`,
        validation: {}
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

const  TimezoneVirtualFieldMeta: EntityMetaCRUDTypeDefinition = {
    fr_country_timezone:{
        desc: `country timezone information.`,
        validation: {}
    },
    fr_cities:{
        desc: `Cities of timezone information.`,
        validation: {}
    }
}
export const TimezoneEntityMeta = {...TimezoneEntityFieldMeta, ...TimezoneVirtualFieldMeta};
const meta = TimezoneEntityMeta; // need to use in this file down the line

@ObjectType({ isAbstract: true })
@Directive('@key(fields: "id")')
@Entity({
  name: `geo_timezone`,
  engine: `InnoDB`,
})

export class TimezoneEntity implements EntityCRUDTypeDefinition {

    static colprefix: string = `tz_`;
    static uploaddir: string = `geo-timezone`;

    static metaname: string = (TimezoneEntity.name).replace(EntitySuffix, '');
    static metadesc: string = `Provides list of timezones.`;

    @Field(() => Int, {nullable: true, description: meta.id.desc})
    @PrimaryGeneratedColumn({
        name: `${TimezoneEntity.colprefix}id`, 
        type: `int`, 
        unsigned: true, 
        primaryKeyConstraintName: `PRIMARY`,
    })
    id?: number;

    @Field(() => String, {nullable: true, description: meta.name.desc})
    @Column({
        name: `${TimezoneEntity.colprefix}name`, 
        type: `varchar`, 
        length: meta.name.validation.maxLength,
        collation: 'utf8mb4_general_ci',
    })
    @MaxLength(meta.name.validation.maxLength as number, { message: meta.name.validation.maxLengthMsg })
    @IsNotEmpty()
    @Index(`${InIndexPrefix}${TimezoneEntity.colprefix}name`, { unique: false })
    name?: string;

    @Field(() => String, {nullable: true, description: meta.abbreviation.desc})
    @Column({
        name: `${TimezoneEntity.colprefix}abbreviation`, 
        type: `varchar`, 
        length: meta.abbreviation.validation.maxLength,
        collation: 'utf8mb4_general_ci',
    })
    @MaxLength(meta.abbreviation.validation.maxLength as number, { message: meta.abbreviation.validation.maxLengthMsg })
    @IsNotEmpty()
    @Index(`${InIndexPrefix}${TimezoneEntity.colprefix}abbreviation`, { unique: false })
    abbreviation?: string;

    @Field(() => Int, {nullable: true, description: meta.timestamp.desc})
    @Column({
        name: `${TimezoneEntity.colprefix}timestamp`, 
        type: `bigint`,
    })
    @IsInt()
    @IsNotEmpty()
    @Index(`${InIndexPrefix}${TimezoneEntity.colprefix}timestamp`, { unique: false })
    timestamp?: number; 

    @Field(() => Int, {nullable: true, description: meta.gmt_offset.desc})
    @Column({
        name: `${TimezoneEntity.colprefix}gmt_offset`, 
        type: `int`,
    })
    @IsInt()
    @IsNotEmpty()
    @Index(`${InIndexPrefix}${TimezoneEntity.colprefix}gmt_offset`, { unique: false })
    gmt_offset?: number; 

    @Field(() => Int, {nullable: true, description: meta.dst.desc})
    @Column({
        name: `${TimezoneEntity.colprefix}dst`, 
        type: `tinyint`,
        unsigned: true, 
        comment:`Daylight Saving Time`,
    })
    @IsInt()
    @IsNotEmpty()
    @Index(`${InIndexPrefix}${TimezoneEntity.colprefix}dst`, { unique: false })
    dst?: number; 

    @Field(() => DateTime, {nullable: true, description: meta.created.desc})
    @CreateDateColumn({
      name: `${TimezoneEntity.colprefix}created`,
      type: `datetime`,
      update: false,
    })
    @Index(`${InIndexPrefix}${TimezoneEntity.colprefix}created`, { unique: false })
     created?: Date;
  
    @Field(() => DateTime, {nullable: true, description: meta.updated.desc})
    @UpdateDateColumn({
      name: `${TimezoneEntity.colprefix}updated`, 
      type: `datetime`,
      nullable: true
    })
    @Index(`${InIndexPrefix}${TimezoneEntity.colprefix}updated`, { unique: false })
    updated?: Date;
  
    @Field(() => DateTime, {nullable: true, description: meta.deleted.desc})
    @DeleteDateColumn({
      name: `${TimezoneEntity.colprefix}deleted`, 
      type: `datetime`,
      nullable: true,
      comment:`date-time => Yes | null => No`,
    })
    @Index(`${InIndexPrefix}${TimezoneEntity.colprefix}deleted`, { unique: false })
    deleted?: Date;
     
 
    
    // ████ INTERNAL RELATIONS ████████████████████████████████████████████████

    @Field(() => [CountryTimezoneEntity], {nullable: true, description: meta.fr_country_timezone.desc})
    @OneToMany(() => CountryTimezoneEntity, (entity: CountryTimezoneEntity) => entity.fr_timezone)
    fr_country_timezone?: CountryTimezoneEntity[];

    @Field(() => [CityEntity], {nullable: true, description: meta.fr_cities.desc})
    @OneToMany(() => CityEntity, (entity: CityEntity) => entity.fr_timezone)
    fr_cities?: CityEntity[];

    // ████ EXTERNAL RELATIONS ████████████████████████████████████████████████

}