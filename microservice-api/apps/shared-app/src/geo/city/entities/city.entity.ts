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

@ObjectType({ isAbstract: true })
@Directive('@key(fields: "id")')
@Entity({
  name: ``,
  engine: `InnoDB`,
})
@Unique(`${UnIndexPrefix}city_state_id`,[`state_id`, `name`, `latitude`])
export class CityEntity implements EntityCRUDTypeDefinition {

    static colprefix: string = ``;
    static uploaddir: string = ``;

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