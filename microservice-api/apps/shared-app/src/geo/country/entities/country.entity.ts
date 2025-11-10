import { EntityMetaCRUDTypeDefinition, EntityCRUDTypeDefinition, DateTime, EntitySuffix, InIndexPrefix, UnIndexPrefix  } from "@libs/library-app";
import { IsInt, IsLatitude, IsLongitude, IsNotEmpty, IsOptional, MaxLength, MinLength } from "class-validator";
import { Column, CreateDateColumn, DeleteDateColumn, Entity, Index, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn, Unique} from "typeorm";
import { StateEntity } from "../../state/entities/state.entity";
import { Directive, Field, Float, Int, ObjectType } from "@nestjs/graphql";
import { GraphQLLatitude, GraphQLLongitude } from "graphql-scalars";
import { RegionEntity } from "../../region/entities/region.entity";
import { SubregionEntity } from "../../subregion/entities/subregion.entity";
import { UserAddressEntity } from "../../../folk/user-address/entities/user.address.entity";
import { UserIdentityCardEntity } from "../../../folk/user-identity-card/entities/user.identity.card.entity";
import { UserCorporateInfoEntity } from "../../../folk/user-corporate-info/entities/user.corporate.info.entity";
import { CountryLanguageEntity } from "../../country-language/entities/country.language.entity";
import { CountryTimezoneEntity } from "../../country-timezone/entities/country.timezone.entity";
import { TimezoneEntity } from "../../timezone/entities/timezone.entity";
import { LeadEntity } from "apps/shared-app/src/leads/lead/entities/lead.entity";
import { BusinessEntity } from "apps/shared-app/src/businesses/business/entities/business.entity";

@ObjectType({ isAbstract: true })
@Directive('@key(fields: "id")')
@Entity({
  name: '',
  engine: 'InnoDB',
})

export class CountryEntity implements EntityCRUDTypeDefinition {

    static colprefix: string = ``;
    static uploaddir: string = ``;

    static metaname: string = (CountryEntity.name).replace(EntitySuffix, '');
    static metadesc: string = 'Provides list of countries in the world.';

    @Field(() => Int, {nullable: true, description: meta.id.desc})
    @PrimaryGeneratedColumn({
      name: `${CountryEntity.colprefix}id`, 
      type: `smallint`, 
      unsigned: true, 
      primaryKeyConstraintName: `PRIMARY`,
    })
    id?: number;

    @Field(() => Int, {nullable: true, description: meta.region_id.desc})
    @Column({
      name: `${CountryEntity.colprefix}region_id`, 
      type: `tinyint`,
      nullable: true,
      unsigned: true,
      default: null,
      comment: `FK (geo_region => region_id)`,
    })
    @IsInt()
    @IsOptional()
    @Index(`${InIndexPrefix}${CountryEntity.colprefix}region_id`, { unique: false })
    region_id?: number;

    @Field(() => Int, {nullable: true, description: meta.subregion_id.desc})
    @Column({
      name: `${CountryEntity.colprefix}subregion_id`, 
      type: `tinyint`,
      nullable: true,
      unsigned: true,
      default: null,
      comment: `FK (geo_subregion => subregion_id)`,
    })
    @IsInt()
    @IsOptional()
    @Index(`${InIndexPrefix}${CountryEntity.colprefix}subregion_id`, { unique: false })
    subregion_id?: number;

    @Field(() => String, {nullable: true, description: meta.name.desc})
    @Column({
      name: `${CountryEntity.colprefix}name`, 
      type: `varchar`,
      length: meta.name.validation.maxLength,
      collation: `utf8mb4_general_ci`,
    })
    @Index(`${UnIndexPrefix}${CountryEntity.colprefix}name`, { unique: true })
    @MaxLength(meta.name.validation.maxLength as number, {message: meta.name.validation.maxLengthMsg})
    @IsNotEmpty()
    name?: string;

    @Field(() => String, {nullable: true, description: meta.numeric_code.desc})
    @Column({
      name: `${CountryEntity.colprefix}numeric_code`, 
      type: `char`,
      length: meta.numeric_code.validation.maxLength,
      collation: `utf8mb4_general_ci`,
      nullable: true,
      default: null,
    })
    @Index(`${InIndexPrefix}${CountryEntity.colprefix}numeric_code`, { unique: false })
    @MaxLength(meta.numeric_code.validation.maxLength as number, {message: meta.numeric_code.validation.maxLengthMsg})
    @IsOptional()
    numeric_code?: string;

    @Field(() => String, {nullable: true, description: meta.iso_iii.desc})
    @Column({
      name: `${CountryEntity.colprefix}iso_iii`, 
      type: `char`,
      length: meta.iso_iii.validation.maxLength,
      collation: `utf8mb4_general_ci`,
      nullable: true,
      default: null,
    })
    @Index(`${InIndexPrefix}${CountryEntity.colprefix}iso_iii`, { unique: false })
    @MaxLength(meta.iso_iii.validation.maxLength as number, {message: meta.iso_iii.validation.maxLengthMsg})
    @IsOptional()
    iso_iii?: string;

    @Field(() => String, {nullable: true, description: meta.iso_ii.desc})
    @Column({
      name: `${CountryEntity.colprefix}iso_ii`, 
      type: `char`,
      length: meta.iso_ii.validation.maxLength,
      collation: `utf8mb4_general_ci`,
      nullable: true,
      default: null,
    })
    @Index(`${InIndexPrefix}${CountryEntity.colprefix}iso_ii`, { unique: false })
    @MaxLength(meta.iso_ii.validation.maxLength as number, {message: meta.iso_ii.validation.maxLengthMsg})
    @IsOptional()
    iso_ii?: string;

    @Field(() => String, {nullable: true, description: meta.fips.desc})
    @Column({
      name: `${CountryEntity.colprefix}fips`, 
      type: `varchar`,
      length: meta.fips.validation.maxLength,
      collation: `utf8mb4_general_ci`,
      nullable: true,
      default: null,
    })
    @MaxLength(meta.fips.validation.maxLength as number, {message: meta.fips.validation.maxLengthMsg})
    @IsOptional()
    fips?: string;

    @Field(() => String, {nullable: true, description: meta.phone_code.desc})
    @Column({
      name: `${CountryEntity.colprefix}phone_code`, 
      type: `varchar`,
      length: meta.phone_code.validation.maxLength,
      collation: `utf8mb4_general_ci`,
      nullable: true,
      default: null,
    })
    @MaxLength(meta.phone_code.validation.maxLength as number, {message: meta.phone_code.validation.maxLengthMsg})
    @Index(`${InIndexPrefix}${CountryEntity.colprefix}phone_code`, { unique: false })
    @IsOptional()
    phone_code?: string;

    @Field(() => String, {nullable: true, description: meta.subdivision_title.desc})
    @Column({
      name: `${CountryEntity.colprefix}subdivision_title`, 
      type: `varchar`,
      length: meta.subdivision_title.validation.maxLength,
      collation: `utf8mb4_general_ci`,
    })
    @MaxLength(meta.subdivision_title.validation.maxLength as number, {message: meta.subdivision_title.validation.maxLengthMsg})
    @IsNotEmpty()
    subdivision_title?: string;

    @Field(() => String, {nullable: true, description: meta.capital.desc})
    @Column({
      name: `${CountryEntity.colprefix}capital`, 
      type: `varchar`,
      length: meta.capital.validation.maxLength,
      collation: `utf8mb4_general_ci`,
      nullable: true,
      default: null,
    })
    @MaxLength(meta.capital.validation.maxLength as number, {message: meta.capital.validation.maxLengthMsg})
    @Index(`${InIndexPrefix}${CountryEntity.colprefix}capital`, { unique: false })
    @IsOptional()
    capital?: string;

    @Field(() => String, {nullable: true, description: meta.currency.desc})
    @Column({
      name: `${CountryEntity.colprefix}currency`, 
      type: `char`,
      length: meta.currency.validation.maxLength,
      collation: `utf8mb4_general_ci`,
      nullable: true,
      default: null,
    })
    @MaxLength(meta.currency.validation.maxLength as number, {message: meta.currency.validation.maxLengthMsg})
    @IsOptional()
    currency?: string;

    @Field(() => String, {nullable: true, description: meta.currency_name.desc})
    @Column({
      name: `${CountryEntity.colprefix}currency_name`, 
      type: `varchar`,
      length: meta.currency_name.validation.maxLength,
      collation: `utf8mb4_general_ci`,
      nullable: true,
      default: null,
    })
    @MaxLength(meta.currency_name.validation.maxLength as number, {message: meta.currency_name.validation.maxLengthMsg})
    @IsOptional()
    currency_name?: string;

    @Field(() => String, {nullable: true, description: meta.currency_symbol.desc})
    @Column({
      name: `${CountryEntity.colprefix}currency_symbol`, 
      type: `varchar`,
      length: meta.currency_symbol.validation.maxLength,
      collation: `utf8mb4_general_ci`,
      nullable: true,
      default: null,
    })
    @MaxLength(meta.currency_symbol.validation.maxLength as number, {message: meta.currency_symbol.validation.maxLengthMsg})
    @IsOptional()
    currency_symbol?: string;

    @Field(() => String, {nullable: true, description: meta.tld.desc})
    @Column({
      name: `${CountryEntity.colprefix}tld`, 
      type: `varchar`,
      length: meta.tld.validation.maxLength,
      collation: `utf8mb4_general_ci`,
      nullable: true,
      default: null,
    })
    @MaxLength(meta.tld.validation.maxLength as number, {message: meta.tld.validation.maxLengthMsg})
    @IsOptional()
    tld?: string;

    @Field(() => String, {nullable: true, description: meta.native.desc})
    @Column({
      name: `${CountryEntity.colprefix}native`, 
      type: `varchar`,
      length: meta.native.validation.maxLength,
      collation: `utf8mb4_general_ci`,
      nullable: true,
      default: null,
    })
    @MaxLength(meta.native.validation.maxLength as number, {message: meta.native.validation.maxLengthMsg})
    @IsOptional()
    native?: string;

    @Field(() => String, {nullable: true, description: meta.nationality.desc})
    @Column({
      name: `${CountryEntity.colprefix}nationality`, 
      type: `varchar`,
      length: meta.nationality.validation.maxLength,
      collation: `utf8mb4_general_ci`,
      nullable: true,
      default: null,
    })
    @MaxLength(meta.nationality.validation.maxLength as number, {message: meta.nationality.validation.maxLengthMsg})
    @IsOptional()
    nationality?: string;

    @Field(() => String, {nullable: true, description: meta.timezones.desc})
    @Column({
      name: `${CountryEntity.colprefix}timezones`, 
      type: `text`,
      nullable:true,
      default: null,
      collation: `utf8mb4_general_ci`,
    })
    @IsOptional()
    timezones?: string;

    @Field(() => String, {nullable: true, description: meta.translations.desc})
    @Column({
      name: `${CountryEntity.colprefix}translations`, 
      type: `text`,
      nullable: true,
      default: null,
      collation: `utf8mb4_general_ci`,
    })
    @IsOptional()
    translations?: string;

    @Field(() => Float, {nullable: true, description: meta.latitude.desc})
    @Column({
        name: `${CountryEntity.colprefix}latitude`, 
        type: `decimal`,
        nullable: true,
        precision: 10,
        scale: 8,
        default: null,
    })
    @IsOptional()
    @Index(`${InIndexPrefix}${CountryEntity.colprefix}latitude`, { unique: false })
    latitude?: number;

    @Field(() => Float, {nullable: true, description: meta.longitude.desc})
    @Column({
        name: `${CountryEntity.colprefix}longitude`, 
        type: `decimal`,
        nullable: true,
        precision: 11,
        scale: 8,
        default: null,
    })
    @IsOptional()
    @Index(`${InIndexPrefix}${CountryEntity.colprefix}longitude`, { unique: false })
    longitude?: number;

    @Field(() => String, {nullable: true, description: meta.emoji.desc})
    @Column({
      name: `${CountryEntity.colprefix}emoji`, 
      type: `varchar`,
      length: meta.emoji.validation.maxLength,
      collation: `utf8mb4_general_ci`,
      nullable: true,
      default: null,
    })
    @MaxLength(meta.emoji.validation.maxLength as number, {message: meta.emoji.validation.maxLengthMsg})
    @IsOptional()
    emoji?: string;

    @Field(() => String, {nullable: true, description: meta.emoji_u.desc})
    @Column({
      name: `${CountryEntity.colprefix}emoji_u`, 
      type: `varchar`,
      length: meta.emoji_u.validation.maxLength,
      collation: `utf8mb4_general_ci`,
      nullable: true,
      default: null,
    })
    @MaxLength(meta.emoji_u.validation.maxLength as number, {message: meta.emoji_u.validation.maxLengthMsg})
    @IsOptional()
    emoji_u?: string;

    @Field(() => DateTime, {nullable: true, description: meta.created.desc})
    @CreateDateColumn({
      name: `${CountryEntity.colprefix}created`,
      type: `datetime`,
      update: false,
    })
    @Index(`${InIndexPrefix}${CountryEntity.colprefix}created`, { unique: false })
     created?: Date;

    @Field(() => DateTime, {nullable: true, description: meta.updated.desc})
    @UpdateDateColumn({
      name: `${CountryEntity.colprefix}updated`, 
      type: `datetime`,
      nullable: true
    })
    @Index(`${InIndexPrefix}${CountryEntity.colprefix}updated`, { unique: false })
    updated?: Date;

    @Field(() => DateTime, {nullable: true, description: meta.deleted.desc})
    @DeleteDateColumn({
      name: `${CountryEntity.colprefix}deleted`, 
      type: `datetime`,
      nullable: true,
      comment:`date-time: yes | null: no`,
    })
    @Index(`${InIndexPrefix}${CountryEntity.colprefix}deleted`, { unique: false })
    deleted?: Date;


    // ████ INTERNAL RELATIONS ████████████████████████████████████████████████

    @Field(() => [StateEntity], {
      nullable: true, 
      description: meta.fkey_states.desc,
      //complexity: 1
    })
    @OneToMany(() => StateEntity, (entity: StateEntity) => entity.fkey_country) 
    fkey_states?: StateEntity[];

    @Field(() => RegionEntity, {
      nullable: true, 
      description: meta.fkey_region.desc,
    })
    @ManyToOne(() => RegionEntity, (entity: RegionEntity) => entity.fkey_countries)
    @JoinColumn({ name: `${CountryEntity.colprefix}region_id` })
    fkey_region?: RegionEntity;

    @Field(() => SubregionEntity, {
      nullable: true, 
      description: meta.fkey_region.desc,
    })
    @ManyToOne(() => SubregionEntity, (entity: SubregionEntity) => entity.fkey_countries)
    @JoinColumn({ name: `${CountryEntity.colprefix}subregion_id` })
    fkey_subregion?: SubregionEntity;

    @Field(() => [UserAddressEntity], {nullable: true, description: meta.fkey_user_addresses.desc})
    @OneToMany(() => UserAddressEntity, (entity: UserAddressEntity) => entity.fkey_country)
    fkey_user_addresses?: UserAddressEntity[];

    @Field(() => [UserIdentityCardEntity], {nullable: true, description: meta.fkey_user_identity_cards.desc})
    @OneToMany(() => UserIdentityCardEntity, (entity: UserIdentityCardEntity) => entity.fkey_country)
    fkey_user_identity_cards?: UserIdentityCardEntity[];

    @Field(() => [UserCorporateInfoEntity], {nullable: true, description: meta.fkey_user_corporate_infos.desc})
    @OneToMany(() => UserCorporateInfoEntity, (entity: UserCorporateInfoEntity) => entity.fkey_country)
    fkey_user_corporate_infos?: UserCorporateInfoEntity[];

    @Field(() => [CountryLanguageEntity], {nullable: true, description: meta.fkey_country_languagies.desc})
    @OneToMany(() => CountryLanguageEntity, (entity: CountryLanguageEntity) => entity.fkey_country)
    fkey_country_languagies?: CountryLanguageEntity[];

    @Field(() => [CountryTimezoneEntity], {nullable: true, description: meta.fkey_country_timezone.desc})
    @OneToMany(() => CountryTimezoneEntity, (entity: CountryTimezoneEntity) => entity.fkey_country)
    fkey_country_timezone?: CountryTimezoneEntity[];

    @Field(() => [BusinessEntity], {nullable: true, description: meta.fkey_business.desc})
    @OneToMany(() => BusinessEntity, (entity: BusinessEntity) => entity.fkey_countries)
    fkey_business?: BusinessEntity[];
 
    // ████ EXTERNAL RELATIONS ████████████████████████████████████████████████
}