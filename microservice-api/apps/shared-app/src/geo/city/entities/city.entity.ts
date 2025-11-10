import { EntityMetaCRUDTypeDefinition, EntityCRUDTypeDefinition, DateTime, EntitySuffix, InIndexPrefix, UnIndexPrefix  } from "@libs/library-app";
import { IsInt, IsLatitude, IsLongitude, IsNotEmpty, IsOptional, MaxLength, MinLength } from "class-validator";
import { Column, CreateDateColumn, DeleteDateColumn, Entity, Index, JoinColumn, JoinTable, ManyToMany, ManyToOne, OneToMany, PrimaryGeneratedColumn, TableForeignKey, Unique, UpdateDateColumn } from "typeorm";
import { Directive, Field, Float, Int, ObjectType } from "@nestjs/graphql";
import { StateEntity } from "../../state/entities/state.entity";
import { UserAddressEntity } from "../../../folk/user-address/entities/user.address.entity";
import { UserIdentityCardEntity } from "../../../folk/user-identity-card/entities/user.identity.card.entity";
import { UserCorporateInfoEntity } from "../../../folk/user-corporate-info/entities/user.corporate.info.entity"; 
import { LeadEntity } from "apps/shared-app/src/leads/lead/entities/lead.entity";
import { NewsLetterTrackLogEntity } from "apps/shared-app/src/newsletters/track-log/entities/track.log.entity";
import { BusinessEntity } from "apps/shared-app/src/businesses/business/entities/business.entity";
import { TimezoneEntity } from "../../timezone/entities/timezone.entity";

const CityEntityFieldMeta: EntityMetaCRUDTypeDefinition = {
    id: {
        desc: `Unique ID of the state, auto generated.`,
        validation: {}
    },
    state_id: {
        desc: `State of the city.`,
        validation:{}
    },
    tz_id: {
        desc: `Timezone of the city.`,
        validation:{}
    },
    name: {
        desc: `Name of the city.`,
        validation:{
            maxLength: 128,
            maxLengthMsg: `City name can be 128 characters long.`,
        }
    },
   latitude: {
        desc: `Latitude of the city.`,
        validation:{}
    },
    longitude: {
        desc: `Longitude of the city.`,
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

const  CityVirtualFieldMeta: EntityMetaCRUDTypeDefinition = {
    fkey_state:{
        desc: `State info of the city.`,
        validation:{}
    },
    fkey_timezone:{
        desc: `Timezone info of the city.`,
        validation:{}
    },
    fkey_clients: {
        desc: `List of clients in this city.`,
        validation:{}
    },
    fkey_user_addresses:{
        desc: `List of user address in this city.`,
        validation:{}
    },
    fkey_user_identity_cards:{
        desc: `List of user identity cards for this city.`,
        validation: {}
    },
    fkey_user_corporate_infos:{
        desc: `List of user corporate infos for this city.`,
        validation: {}
    },
    fkey_newsletter_tracking_log_infos:{
        desc: `List of newsletter tracking log for this city.`,
        validation: {}
    },
    fkey_business:{
        desc: `List of business infos for this city.`,
        validation: {}
    },
}
export const CityEntityMeta = {...CityEntityFieldMeta, ...CityVirtualFieldMeta};
const meta = CityEntityMeta; // need to use in this file down the line

@ObjectType({ isAbstract: true })
@Directive('@key(fields: "id")')
@Entity({
  name: `geo_city`,
  engine: `InnoDB`,
})
@Unique(`${UnIndexPrefix}city_state_id`,[`state_id`, `name`, `latitude`])
export class CityEntity implements EntityCRUDTypeDefinition {

    static colprefix: string = `city_`;
    static uploaddir: string = `geo-city`;

    static metaname: string = (CityEntity.name).replace(EntitySuffix, '');
    static metadesc: string = `Provides list of cities for states.`;

    @Field(() => Int, {nullable: true, description: meta.id.desc})
    @PrimaryGeneratedColumn({
        name: `${CityEntity.colprefix}id`, 
        type: `int`, 
        unsigned: true, 
        primaryKeyConstraintName: `PRIMARY`,
    })
    id?: number;

    @Field(() => Int, {nullable: true, description: meta.state_id.desc})
    @Column({
        name: `${CityEntity.colprefix}state_id`, 
        type: `mediumint`, 
        unsigned: true,
        nullable:false
    })
    @IsInt()
    @IsNotEmpty()
    @Index(`${InIndexPrefix}${CityEntity.colprefix}state_id`, { unique: false })
    state_id?: number;

    @Field(() => Int, {nullable: true, description: meta.tz_id.desc})
    @Column({
        name: `${CityEntity.colprefix}tz_id`, 
        type: `int`, 
        unsigned: true,
        nullable:false
    })
    @IsInt()
    @IsOptional()
    @Index(`${InIndexPrefix}${CityEntity.colprefix}tz_id`, { unique: false })
    tz_id?: number;

    @Field(() => String, {nullable: true, description: meta.name.desc})
    @Column({
        name: `${CityEntity.colprefix}name`, 
        type: `varchar`, 
        length: meta.name.validation.maxLength,
        collation: 'utf8mb4_general_ci',
    })
    @MaxLength(meta.name.validation.maxLength as number, { message: meta.name.validation.maxLengthMsg })
    @IsNotEmpty()
    @Index(`${InIndexPrefix}${CityEntity.colprefix}name`, { unique: false })
    name?: string;

    @Field(() => Float, {nullable: true, description: meta.latitude.desc})
    @Column({
        name: `${CityEntity.colprefix}latitude`, 
        type: `decimal`,
        precision: 10,
        scale: 8,
    })
    @IsNotEmpty()
    @Index(`${InIndexPrefix}${CityEntity.colprefix}latitude`, { unique: false })
    latitude?: number; 

    @Field(() => Float, {nullable: true, description: meta.longitude.desc})
    @Column({
        name: `${CityEntity.colprefix}longitude`, 
        type: `decimal`,
        precision: 11,
        scale: 8,
    })
    @IsNotEmpty()
    @Index(`${InIndexPrefix}${CityEntity.colprefix}longitude`, { unique: false })
    longitude?: number; 

    @Field(() => DateTime, {nullable: true, description: meta.created.desc})
    @CreateDateColumn({
      name: `${CityEntity.colprefix}created`,
      type: `datetime`,
      update: false,
    })
    @Index(`${InIndexPrefix}${CityEntity.colprefix}created`, { unique: false })
     created?: Date;
  
    @Field(() => DateTime, {nullable: true, description: meta.updated.desc})
    @UpdateDateColumn({
      name: `${CityEntity.colprefix}updated`, 
      type: `datetime`,
      nullable: true
    })
    @Index(`${InIndexPrefix}${CityEntity.colprefix}updated`, { unique: false })
    updated?: Date;
  
    @Field(() => DateTime, {nullable: true, description: meta.deleted.desc})
    @DeleteDateColumn({
      name: `${CityEntity.colprefix}deleted`, 
      type: `datetime`,
      nullable: true,
      comment:`date-time => Yes | null => No`,
    })
    @Index(`${InIndexPrefix}${CityEntity.colprefix}deleted`, { unique: false })
    deleted?: Date;
     

    
    // ████ INTERNAL RELATIONS ████████████████████████████████████████████████

    @Field(() => StateEntity, {
        nullable: true, 
        description: meta.fkey_state.desc, 
    }) 
    @ManyToOne(() => StateEntity, (entity: StateEntity) => entity.fkey_cities)
    @JoinColumn({ name: `${CityEntity.colprefix}state_id` })
    fkey_state?: StateEntity;

    @Field(() => TimezoneEntity, {
        nullable: true, 
        description: meta.fkey_timezone.desc, 
    }) 
    @ManyToOne(() => TimezoneEntity, (entity: TimezoneEntity) => entity.fkey_cities)
    @JoinColumn({ name: `${CityEntity.colprefix}tz_id` })
    fkey_timezone?: TimezoneEntity;

    @Field(() => [UserAddressEntity], {nullable: true, description: meta.fkey_user_addresses.desc})
    @OneToMany(() => UserAddressEntity, (entity: UserAddressEntity) => entity.fkey_city) 
    fkey_user_addresses?: UserAddressEntity[];

    @Field(() => [UserIdentityCardEntity], {nullable: true, description: meta.fkey_user_identity_cards.desc})
    @OneToMany(() => UserIdentityCardEntity, (entity: UserIdentityCardEntity) => entity.fkey_city)
    fkey_user_identity_cards?: UserIdentityCardEntity[];

    @Field(() => [UserCorporateInfoEntity], {nullable: true, description: meta.fkey_user_corporate_infos.desc})
    @OneToMany(() => UserCorporateInfoEntity, (entity: UserCorporateInfoEntity) => entity.fkey_city)
    fkey_user_corporate_infos?: UserCorporateInfoEntity[];

    @Field(() => [NewsLetterTrackLogEntity], {nullable: true, description: meta.fkey_newsletter_tracking_log_infos.desc})
    @OneToMany(() => NewsLetterTrackLogEntity, (entity: NewsLetterTrackLogEntity) => entity.fkey_city)
    fkey_newsletter_tracking_log_infos?: NewsLetterTrackLogEntity[]; 

    @Field(() => [BusinessEntity], {nullable: true, description: meta.fkey_business.desc})
    @OneToMany(() => BusinessEntity, (entity: BusinessEntity) => entity.fkey_city)
    fkey_business?: BusinessEntity[];

    // ████ EXTERNAL RELATIONS ████████████████████████████████████████████████

}