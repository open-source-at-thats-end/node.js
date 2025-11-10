import { EntityMetaCRUDTypeDefinition, EntityCRUDTypeDefinition, DateTime, EntitySuffix, InIndexPrefix, FrIndexPrefix, UnIndexPrefix  } from "@libs/library-app";
import { IsInt, IsLatitude, IsLongitude, IsNotEmpty, IsOptional, MaxLength } from "class-validator";
import { Column, CreateDateColumn, DeleteDateColumn, Entity, Index, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn, Unique, UpdateDateColumn } from "typeorm";
import { CountryEntity } from "../../country/entities/country.entity";
import { Directive, Field, Float, Int, ObjectType } from "@nestjs/graphql";
import { CityEntity } from "../../city/entities/city.entity";
import { GraphQLLatitude, GraphQLLongitude } from "graphql-scalars";
import { UserAddressEntity } from "../../../folk/user-address/entities/user.address.entity";
import { UserIdentityCardEntity } from "../../../folk/user-identity-card/entities/user.identity.card.entity";
import { UserCorporateInfoEntity } from "../../../folk/user-corporate-info/entities/user.corporate.info.entity";
import { LeadEntity } from "apps/shared-app/src/leads/lead/entities/lead.entity";
import { BusinessEntity } from "apps/shared-app/src/businesses/business/entities/business.entity";

@ObjectType({ isAbstract: true })
@Directive('@key(fields: "id")') // TODO: SUPERGRAPH_FOREIGN_RELATION step 1 - add directive
@Entity({
  name: `geo_state`,
  engine: `InnoDB`,
})
@Unique(`${UnIndexPrefix}state_country_id`,[`country_id`, `name`, `type`])
export class StateEntity implements EntityCRUDTypeDefinition {
    
    static colprefix: string = `state_`;
    static uploaddir: string = `geo-state`;
    
    static metaname: string = (StateEntity.name).replace(EntitySuffix, '');
    static metadesc: string = `Provides list of states for countries.`;

    @Field(() => Int, {nullable: true, description: meta.id.desc})
    @PrimaryGeneratedColumn({
        name: `${StateEntity.colprefix}id`, 
        type: `mediumint`, 
        unsigned: true, 
        primaryKeyConstraintName: `PRIMARY`,
    })
    id?: number;

    @Field(() => Int, {nullable: true, description: meta.country_id.desc})
    @Column({
        name: `${StateEntity.colprefix}country_id`, 
        type: `smallint`,
        unsigned: true,
        comment: `FK (geo_country => country_id)`,
    })
    @IsInt()
    @IsNotEmpty()
    @Index(`${InIndexPrefix}${StateEntity.colprefix}country_id`, { unique: false })
    country_id?: number;
    
    @Field(() => String, {nullable: true, description: meta.name.desc})
    @Column({
      name: `${StateEntity.colprefix}name`, 
      type: `varchar`,
      length: meta.name.validation.maxLength,
      collation: `utf8mb4_general_ci`,
    })
    @Index(`${InIndexPrefix}${StateEntity.colprefix}name`, { unique: false })
    @MaxLength(meta.name.validation.maxLength as number, {message: meta.name.validation.maxLengthMsg})
    @IsNotEmpty()
    name?: string;

    @Field(() => String, {nullable: true, description: meta.type.desc})
    @Column({
      name: `${StateEntity.colprefix}type`, 
      type: `varchar`,
      length: meta.type.validation.maxLength,
      collation: `utf8mb4_general_ci`,
      nullable: true,
      default: null,
    })
    @Index(`${InIndexPrefix}${StateEntity.colprefix}type`, { unique: false })
    @MaxLength(meta.type.validation.maxLength as number, {message: meta.type.validation.maxLengthMsg})
    @IsOptional()
    type?: string;

    @Field(() => String, {nullable: true, description: meta.fips.desc})
    @Column({
      name: `${StateEntity.colprefix}fips`, 
      type: `varchar`,
      length: meta.fips.validation.maxLength,
      collation: `utf8mb4_general_ci`,
      nullable: true,
      default: null,
    })
    @MaxLength(meta.fips.validation.maxLength as number, {message: meta.fips.validation.maxLengthMsg})
    @IsOptional()
    fips?: string;

    @Field(() => String, {nullable: true, description: meta.iso_ii.desc})
    @Column({
      name: `${StateEntity.colprefix}iso_ii`, 
      type: `varchar`,
      length: meta.iso_ii.validation.maxLength,
      collation: `utf8mb4_general_ci`,
      nullable: true,
      default: null,
    })
    @Index(`${InIndexPrefix}${StateEntity.colprefix}iso_ii`, { unique: false })
    @MaxLength(meta.iso_ii.validation.maxLength as number, {message: meta.iso_ii.validation.maxLengthMsg})
    @IsOptional()
    iso_ii?: string;

    @Field(() => Float, {nullable: true, description: meta.latitude.desc})
    @Column({
        name: `${StateEntity.colprefix}latitude`, 
        type: `decimal`,
        nullable: true,
        precision: 10,
        scale: 8,
        default: null,
    })
    @IsOptional()
    @Index(`${InIndexPrefix}${StateEntity.colprefix}latitude`, { unique: false })
    latitude?: number;

    @Field(() => Float, {nullable: true, description: meta.longitude.desc})
    @Column({
        name: `${StateEntity.colprefix}longitude`, 
        type: `decimal`,
        nullable: true,
        precision: 11,
        scale: 8,
        default: null,
    })
    @IsOptional()
    @Index(`${InIndexPrefix}${StateEntity.colprefix}longitude`, { unique: false })
    longitude?: number;
    
    @Field(() => DateTime, {nullable: true, description: meta.created.desc})
    @CreateDateColumn({
        name: `${StateEntity.colprefix}created`,
        type: `datetime`,
        update: false,
    })
    @Index(`${InIndexPrefix}${StateEntity.colprefix}created`, { unique: false })
     created?: Date;

    @Field(() => DateTime, {nullable: true, description: meta.updated.desc})
    @UpdateDateColumn({
        name: `${StateEntity.colprefix}updated`, 
        type: `datetime`,
        nullable: true
    })
    @Index(`${InIndexPrefix}${StateEntity.colprefix}updated`, { unique: false })
    updated?: Date;

    @Field(() => DateTime, {nullable: true, description: meta.deleted.desc})
    @DeleteDateColumn({
        name: `${StateEntity.colprefix}deleted`, 
        type: `datetime`,
        nullable: true,
        comment:`date-time: yes | null: no`,
    })
    @Index(`${InIndexPrefix}${StateEntity.colprefix}deleted`, { unique: false })
    deleted?: Date;

 

    // ████ INTERNAL RELATIONS ████████████████████████████████████████████████
    
    @Field(() => CountryEntity, { 
        nullable: true, 
        description: meta.fkey_country.desc,
    })
    @ManyToOne(() => CountryEntity, (entity: CountryEntity) => entity.fkey_states)
    @JoinColumn({ name: `${StateEntity.colprefix}country_id` })
    fkey_country?: CountryEntity;

    @Field(() => [CityEntity], {
        nullable: true, 
        description: meta.fkey_cities.desc,
        //complexity: 1
    })
    @OneToMany(() => CityEntity, (entity: CityEntity) => entity.fkey_state) 
    fkey_cities?: CityEntity[];

    @Field(() => [UserAddressEntity], {nullable: true, description: meta.fkey_user_addresses.desc})
    @OneToMany(() => UserAddressEntity, (entity: UserAddressEntity) => entity.fkey_state) 
    fkey_user_addresses?: UserAddressEntity[];

    @Field(() => [UserIdentityCardEntity], {nullable: true, description: meta.fkey_user_identity_cards.desc})
    @OneToMany(() => UserIdentityCardEntity, (entity: UserIdentityCardEntity) => entity.fkey_state)
    fkey_user_identity_cards?: UserIdentityCardEntity[];

    @Field(() => [UserCorporateInfoEntity], {nullable: true, description: meta.fkey_user_corporate_infos.desc})
    @OneToMany(() => UserCorporateInfoEntity, (entity: UserCorporateInfoEntity) => entity.fkey_state)
    fkey_user_corporate_infos?: UserCorporateInfoEntity[];

    @Field(() => [BusinessEntity], {nullable: true, description: meta.fkey_business.desc})
    @OneToMany(() => BusinessEntity, (entity: BusinessEntity) => entity.fkey_state)
    fkey_business?: BusinessEntity[];

    // ████ EXTERNAL RELATIONS ████████████████████████████████████████████████
}