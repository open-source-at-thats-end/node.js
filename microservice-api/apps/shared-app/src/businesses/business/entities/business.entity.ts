import { EntityMetaCRUDTypeDefinition, EntityCRUDTypeDefinition, DateTime, EntitySuffix, InIndexPrefix, UnIndexPrefix  } from "@libs/library-app";
import { IsEmail, IsInt, IsJSON, IsMobilePhone, IsNotEmpty, IsOptional, MaxLength, MinLength, ValidateIf } from "class-validator";
import { Column, CreateDateColumn, DeleteDateColumn, Entity, Index, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn, Unique } from "typeorm";
import { Directive, Field, Float, Int, ObjectType } from "@nestjs/graphql";
import { BusinessPrimaryCategoryEntity } from "../../primary-category/entities/primary.category.entity";
import { UserEntity } from "apps/shared-app/src/folk/user/entities/user.entity";
import { BusinessSecondaryCategoryEntity } from "../../secondary-category/entities/secondary.category.entity";
import { CountryEntity } from "apps/shared-app/src/geo/country/entities/country.entity";
import { StateEntity } from "apps/shared-app/src/geo/state/entities/state.entity";
import { CityEntity } from "apps/shared-app/src/geo/city/entities/city.entity";
import { ConnectionSourceEntity } from "apps/shared-app/src/leads/connection/source/entities/source.entity";

@ObjectType({ isAbstract: true })
@Directive('@key(fields: "id")')
@Entity({
  name: 'business',
  engine: 'InnoDB',
})

@Unique(`${UnIndexPrefix}busns_mobile`,[`mobile`, `mobile_cc`])
export class BusinessEntity implements EntityCRUDTypeDefinition {

    static colprefix: string = `busns_`;
    static uploaddir: string = `business`;

    static metaname: string = (BusinessEntity.name).replace(EntitySuffix, '');
    static metadesc: string = 'Provides list of business.';

    @Field(() => Int, {nullable: true, description: meta.id.desc})
    @PrimaryGeneratedColumn({
      name: `${BusinessEntity.colprefix}id`, 
      type: `int`, 
      unsigned: true, 
      primaryKeyConstraintName: `PRIMARY`,
    })
    id?: number;

    @Field(() => Int, { nullable: true, description: meta.connsrc_id.desc })
    @Column({
      name: `${BusinessEntity.colprefix}connsrc_id`,
      type: `smallint`,
      unsigned: true,
      comment: `FK (connection_source => connsrc_id) From where user came and get registered`
    })
    @IsInt()
    @Index(`${InIndexPrefix}${BusinessEntity.colprefix}connsrc_id`, { unique: false })
    @IsOptional()
    connsrc_id?: number;

    @Field(() => Int, { nullable: true, description: meta.owner_u_id.desc })
    @Column({
      name: `${BusinessEntity.colprefix}owner_u_id`,
      type: `int`,
      unsigned: true,
      comment: `FK (_user => u_id)`
    })
    @IsInt()
    @Index(`${InIndexPrefix}${BusinessEntity.colprefix}owner_u_id`, { unique: false })
    @IsOptional()
    owner_u_id?: number;

    @Field(() => String, { nullable: true, description: meta.file_brand_logo.desc })
    @Column({
      name: `${BusinessEntity.colprefix}file_brand_logo`,
      type: `varchar`,
      length: meta.file_brand_logo.validation.maxLength, 
      comment: `Business brand logo, basically image file`
    })
    @IsOptional()
    @MaxLength(meta.file_brand_logo.validation.maxLength as number, {message: meta.file_brand_logo.validation.maxLengthMsg})
    file_brand_logo?: string;

    @Field(() => Int, {nullable: true, description: meta.buspricat_id.desc})
    @Column({
      name: `${BusinessEntity.colprefix}buspricat_id`, 
      type: `smallint`,
      unsigned: true,
      comment: `FK(business_primary_category => buspricat_id)`
    })
    @IsInt()
    @Index(`${InIndexPrefix}${BusinessEntity.colprefix}buspricat_id`, { unique: false })
    @IsNotEmpty()
    buspricat_id?: number;

    @Field(() => Int, { nullable: true, description: meta.busseccat_id_1.desc })
    @Column({
      name: `${BusinessEntity.colprefix}busseccat_id_1`,
      type: `int`,
      unsigned: true,
      comment: `FK (business_secondary_category => busseccat_id)`
    })
    @IsInt()
    @IsOptional()
    @Index(`${InIndexPrefix}${BusinessEntity.colprefix}busseccat_id_1`, { unique: false })
    busseccat_id_1?: number;

    @Field(() => Int, { nullable: true, description: meta.busseccat_id_2.desc })
    @Column({
      name: `${BusinessEntity.colprefix}busseccat_id_2`,
      type: `int`,
      unsigned: true,
      comment: `FK (business_secondary_category => busseccat_id)`
    })
    @IsInt()
    @IsOptional()
    @Index(`${InIndexPrefix}${BusinessEntity.colprefix}busseccat_id_2`, { unique: false })
    busseccat_id_2?: number;

    @Field(() => Int, { nullable: true, description: meta.busseccat_id_3.desc })
    @Column({
      name: `${BusinessEntity.colprefix}busseccat_id_3`,
      type: `int`,
      unsigned: true,
      comment: `FK (business_secondary_category => busseccat_id)`
    })
    @IsInt()
    @IsOptional()
    @Index(`${InIndexPrefix}${BusinessEntity.colprefix}busseccat_id_3`, { unique: false })
    busseccat_id_3?: number;

    @Field(() => Int, { nullable: true, description: meta.busseccat_id_4.desc })
    @Column({
      name: `${BusinessEntity.colprefix}busseccat_id_4`,
      type: `int`,
      unsigned: true,
      comment: `FK (business_secondary_category => busseccat_id)`
    })
    @IsInt()
    @IsOptional()
    @Index(`${InIndexPrefix}${BusinessEntity.colprefix}busseccat_id_4`, { unique: false })
    busseccat_id_4?: number;

    @Field(() => Int, { nullable: true, description: meta.busseccat_id_5.desc })
    @Column({
      name: `${BusinessEntity.colprefix}busseccat_id_5`,
      type: `int`,
      unsigned: true,
      comment: `FK (business_secondary_category => busseccat_id)`
    })
    @IsInt()
    @IsOptional()
    @Index(`${InIndexPrefix}${BusinessEntity.colprefix}busseccat_id_5`, { unique: false })
    busseccat_id_5?: number;

    @Field(() => Int, { nullable: true, description: meta.busseccat_id_6.desc })
    @Column({
      name: `${BusinessEntity.colprefix}busseccat_id_6`,
      type: `int`,
      unsigned: true,
      comment: `FK (business_secondary_category => busseccat_id)`
    })
    @IsInt()
    @IsOptional()
    @Index(`${InIndexPrefix}${BusinessEntity.colprefix}busseccat_id_6`, { unique: false })
    busseccat_id_6?: number;

    @Field(() => Int, { nullable: true, description: meta.busseccat_id_7.desc })
    @Column({
      name: `${BusinessEntity.colprefix}busseccat_id_7`,
      type: `int`,
      unsigned: true,
      comment: `FK (business_secondary_category => busseccat_id)`
    })
    @IsInt()
    @IsOptional()
    @Index(`${InIndexPrefix}${BusinessEntity.colprefix}busseccat_id_7`, { unique: false })
    busseccat_id_7?: number;

    @Field(() => Int, { nullable: true, description: meta.busseccat_id_8.desc })
    @Column({
      name: `${BusinessEntity.colprefix}busseccat_id_8`,
      type: `int`,
      unsigned: true,
      comment: `FK (business_secondary_category => busseccat_id)`
    })
    @IsInt()
    @IsOptional()
    @Index(`${InIndexPrefix}${BusinessEntity.colprefix}busseccat_id_8`, { unique: false })
    busseccat_id_8?: number;

    @Field(() => Int, { nullable: true, description: meta.busseccat_id_9.desc })
    @Column({
      name: `${BusinessEntity.colprefix}busseccat_id_9`,
      type: `int`,
      unsigned: true,
      comment: `FK (business_secondary_category => busseccat_id)`
    })
    @IsInt()
    @IsOptional()
    @Index(`${InIndexPrefix}${BusinessEntity.colprefix}busseccat_id_9`, { unique: false })
    busseccat_id_9?: number;

    @Field(() => String, { nullable: true, description: meta.name.desc })
    @Column({
      name: `${BusinessEntity.colprefix}name`,
      type: `varchar`,
      length: meta.name.validation.maxLength, 
      collation: `utf8mb4_general_ci`,
    })
    @MaxLength(meta.name.validation.maxLength as number, {message: meta.name.validation.maxLengthMsg})
    @Index(`${InIndexPrefix}${BusinessEntity.colprefix}name`, { unique: false })
    @IsOptional()
    name?: string;

    @Field(() => String, { nullable: true, description: meta.about.desc })
    @Column({
      name: `${BusinessEntity.colprefix}about`,
      type: `text`,
      collation: `utf8mb4_general_ci`,
    })
    @IsOptional()
    about?: string;

    @Field(() => String, { nullable: true, description: meta.address.desc })
    @Column({
      name: `${BusinessEntity.colprefix}address`,
      type: `varchar`,
      length: meta.address.validation.maxLength, 
      collation: `utf8mb4_general_ci`,
    })
    @MaxLength(meta.address.validation.maxLength as number, {message: meta.address.validation.maxLengthMsg})
    @Index(`${InIndexPrefix}${BusinessEntity.colprefix}address`, { unique: false })
    @IsOptional()
    address?: string;

    @Field(() => Int, { nullable: true, description: meta.country_id.desc })
    @Column({
      name: `${BusinessEntity.colprefix}country_id`,
      type: `smallint`,
      unsigned: true,
      comment: `FK (geo_country => country_id)`
    })
    @IsInt()
    @IsOptional()
    @Index(`${InIndexPrefix}${BusinessEntity.colprefix}country_id`, { unique: false })
    country_id?: number;

    @Field(() => Int, { nullable: true, description: meta.state_id.desc })
    @Column({
      name: `${BusinessEntity.colprefix}state_id`,
      type: `mediumint`,
      unsigned: true,
      comment: `FK (geo_state => state_id)`
    })
    @IsInt()
    @IsOptional()
    @Index(`${InIndexPrefix}${BusinessEntity.colprefix}state_id`, { unique: false })
    state_id?: number;

    @Field(() => Int, { nullable: true, description: meta.city_id.desc })
    @Column({
      name: `${BusinessEntity.colprefix}city_id`,
      type: `int`,
      unsigned: true,
      comment: `FK (geo_city => city_id)`
    })
    @IsInt()
    @IsOptional()
    @Index(`${InIndexPrefix}${BusinessEntity.colprefix}city_id`, { unique: false })
    city_id?: number;

    @Field(() => String, { nullable: true, description: meta.zipcode.desc })
    @Column({
      name: `${BusinessEntity.colprefix}zipcode`,
      type: `varchar`,
      length: meta.zipcode.validation.maxLength, 
      collation: `utf8mb4_general_ci`,
    })
    @IsOptional()
    @Index(`${InIndexPrefix}${BusinessEntity.colprefix}zipcode`, { unique: false })
    @MaxLength(meta.zipcode.validation.maxLength as number, {message: meta.zipcode.validation.maxLengthMsg})
    zipcode?: string;

    @Field(() => Float, { nullable: true, description: meta.location_latitude.desc })
    @Column({
      name: `${BusinessEntity.colprefix}location_latitude`,
      type: 'decimal',
      precision: 10,
      scale: 8,
    })
    @IsOptional()
    @Index(`${InIndexPrefix}${BusinessEntity.colprefix}location_latitude`, { unique: false })
    location_latitude?: number;

   @Field(() => Float, { nullable: true, description: meta.location_longitude.desc })
    @Column({
      name: `${BusinessEntity.colprefix}location_longitude`,
      type: 'decimal',
      precision: 11,
      scale: 8,
    })
    @IsOptional()
    @Index(`${InIndexPrefix}${BusinessEntity.colprefix}location_longitude`, { unique: false })
    location_longitude?: number;

    @Field(() => String, { nullable: true, description: meta.toll_free_number.desc })
    @Column({
      name: `${BusinessEntity.colprefix}toll_free_number`,
      type: 'varchar',
      length: meta.toll_free_number.validation.maxLength,
      collation: 'utf8mb4_general_ci',
    })
    @IsOptional()
    @Index(`${InIndexPrefix}${BusinessEntity.colprefix}toll_free_number`, { unique: false })
    @MaxLength(meta.toll_free_number.validation.maxLength as number, { message: meta.toll_free_number.validation.maxLengthMsg })
    toll_free_number?: string;

    @Field(() => String, { nullable: true, description: meta.mobile.desc })
    @Column({
      name: `${BusinessEntity.colprefix}mobile`,
      type: 'varchar',
      length: meta.mobile.validation.maxLength,
      collation: 'utf8mb4_general_ci',
    })
    @IsOptional()
    @Index(`${InIndexPrefix}${BusinessEntity.colprefix}mobile`, { unique: false })
    @MaxLength(meta.mobile.validation.maxLength as number, { message: meta.mobile.validation.maxLengthMsg })
    mobile?: string;

    @Field(() => String, { nullable: true, description: meta.mobile_cc.desc })
    @Column({
      name: `${BusinessEntity.colprefix}mobile_cc`,
      type: 'varchar',
      length: meta.mobile_cc.validation.maxLength,
      collation: 'utf8mb4_general_ci',
      comment: 'FK (geo_country => country_mobile_code)',
    })
    @IsOptional()
    @MaxLength(meta.mobile_cc.validation.maxLength as number, { message: meta.mobile_cc.validation.maxLengthMsg })
    mobile_cc?: string;

    @Field(() => String, { nullable: true, description: meta.whatsapp.desc })
    @Column({
      name: `${BusinessEntity.colprefix}whatsapp`,
      type: 'varchar',
      length: meta.whatsapp.validation.maxLength,
      collation: 'utf8mb4_general_ci',
    })
    @IsOptional()
    @Index(`${InIndexPrefix}${BusinessEntity.colprefix}whatsapp`, { unique: false })
    @MaxLength(meta.whatsapp.validation.maxLength as number, { message: meta.whatsapp.validation.maxLengthMsg })
    whatsapp?: string;

    @Field(() => String, { nullable: true, description: meta.whatsapp_cc.desc })
    @Column({
      name: `${BusinessEntity.colprefix}whatsapp_cc`,
      type: 'varchar',
      length: meta.whatsapp_cc.validation.maxLength,
      collation: 'utf8mb4_general_ci',
      comment: 'FK (geo_country => country_mobile_code)',
    })
    @IsOptional()
    @MaxLength(meta.whatsapp_cc.validation.maxLength as number, { message: meta.whatsapp_cc.validation.maxLengthMsg })
    whatsapp_cc?: string;

    @Field(() => String, { nullable: true, description: meta.email.desc })
    @Column({
      name: `${BusinessEntity.colprefix}email`,
      type: 'varchar',
      length: meta.email.validation.maxLength,
      collation: 'utf8mb4_general_ci',
    })
    @IsOptional()
    @IsEmail({}, { message: 'Invalid email format.' })
    @Index(`${InIndexPrefix}${BusinessEntity.colprefix}email`, { unique: true })
    @MaxLength(meta.email.validation.maxLength as number, { message: meta.email.validation.maxLengthMsg })
    email?: string;

    @Field(() => String, { nullable: true, description: meta.fax.desc })
    @Column({
      name: `${BusinessEntity.colprefix}fax`,
      type: 'varchar',
      length: meta.fax.validation.maxLength,
      collation: 'utf8mb4_general_ci',
    })
    @IsOptional()
    @Index(`${InIndexPrefix}${BusinessEntity.colprefix}fax`, { unique: false })
    @MaxLength(meta.fax.validation.maxLength as number, { message: meta.fax.validation.maxLengthMsg })
    fax?: string;

    @Field(() => String, { nullable: true, description: meta.website_url.desc })
    @Column({
      name: `${BusinessEntity.colprefix}website_url`,
      type: 'varchar',
      length: meta.website_url.validation.maxLength,
      collation: 'utf8mb4_general_ci',
    })
    @IsOptional()
    @Index(`${InIndexPrefix}${BusinessEntity.colprefix}website_url`, { unique: false })
    @MaxLength(meta.website_url.validation.maxLength as number, { message: meta.website_url.validation.maxLengthMsg })
    website_url?: string;

    @Field(() => String, { nullable: true, description: meta.facebook_profile.desc })
    @Column({
      name: `${BusinessEntity.colprefix}facebook_profile`,
      type: 'varchar',
      length: meta.facebook_profile.validation.maxLength,
      collation: 'utf8mb4_general_ci',
      comment: 'profile username',
    })
    @IsOptional()
    @Index(`${InIndexPrefix}${BusinessEntity.colprefix}facebook_profile`, { unique: false })
    @MaxLength(meta.facebook_profile.validation.maxLength as number, { message: meta.facebook_profile.validation.maxLengthMsg })
    facebook_profile?: string;

    @Field(() => String, { nullable: true, description: meta.instagram_profile.desc })
    @Column({
      name: `${BusinessEntity.colprefix}instagram_profile`,
      type: 'varchar',
      length: meta.instagram_profile.validation.maxLength,
      collation: 'utf8mb4_general_ci',
      comment: 'profile username',
    })
    @IsOptional()
    @Index(`${InIndexPrefix}${BusinessEntity.colprefix}instagram_profile`, { unique: false })
    @MaxLength(meta.instagram_profile.validation.maxLength as number, { message: meta.instagram_profile.validation.maxLengthMsg })
    instagram_profile?: string;

    @Field(() => String, { nullable: true, description: meta.youtube_profile.desc })
    @Column({
      name: `${BusinessEntity.colprefix}youtube_profile`,
      type: 'varchar',
      length: meta.youtube_profile.validation.maxLength,
      collation: 'utf8mb4_general_ci',
      comment: 'profile username',
    })
    @IsOptional()
    @Index(`${InIndexPrefix}${BusinessEntity.colprefix}youtube_profile`, { unique: false })
    @MaxLength(meta.youtube_profile.validation.maxLength as number, { message: meta.youtube_profile.validation.maxLengthMsg })
    youtube_profile?: string;

    @Field(() => String, { nullable: true, description: meta.x_profile.desc })
    @Column({
      name: `${BusinessEntity.colprefix}x_profile`,
      type: 'varchar',
      length: meta.x_profile.validation.maxLength,
      collation: 'utf8mb4_general_ci',
      comment: 'profile username',
    })
    @IsOptional()
    @Index(`${InIndexPrefix}${BusinessEntity.colprefix}x_profile`, { unique: false })
    @MaxLength(meta.x_profile.validation.maxLength as number, { message: meta.x_profile.validation.maxLengthMsg })
    x_profile?: string;

    @Field(() => String, { nullable: true, description: meta.linkedin_profile.desc })
    @Column({
      name: `${BusinessEntity.colprefix}linkedin_profile`,
      type: 'varchar',
      length: meta.linkedin_profile.validation.maxLength,
      collation: 'utf8mb4_general_ci',
      comment: 'profile username',
    })
    @IsOptional()
    @Index(`${InIndexPrefix}${BusinessEntity.colprefix}linkedin_profile`, { unique: false })
    @MaxLength(meta.linkedin_profile.validation.maxLength as number, { message: meta.linkedin_profile.validation.maxLengthMsg })
    linkedin_profile?: string;

    @Field(() => String, { nullable: true, description: meta.tiktok_profile.desc })
    @Column({
      name: `${BusinessEntity.colprefix}tiktok_profile`,
      type: 'varchar',
      length: meta.tiktok_profile.validation.maxLength,
      collation: 'utf8mb4_general_ci',
      comment: 'profile username',
    })
    @IsOptional()
    @Index(`${InIndexPrefix}${BusinessEntity.colprefix}tiktok_profile`, { unique: false })
    @MaxLength(meta.tiktok_profile.validation.maxLength as number, { message: meta.tiktok_profile.validation.maxLengthMsg })
    tiktok_profile?: string;

    @Field(() => String, { nullable: true, description: meta.pinterest_profile.desc })
    @Column({
      name: `${BusinessEntity.colprefix}pinterest_profile`,
      type: 'varchar',
      length: meta.pinterest_profile.validation.maxLength,
      collation: 'utf8mb4_general_ci',
      comment: 'profile username',
    })
    @IsOptional()
    @Index(`${InIndexPrefix}${BusinessEntity.colprefix}pinterest_profile`, { unique: false })
    @MaxLength(meta.pinterest_profile.validation.maxLength as number, { message: meta.pinterest_profile.validation.maxLengthMsg })
    pinterest_profile?: string;

    @Field(() => String, { nullable: true, description: meta.google_my_business_url.desc })
    @Column({
      name: `${BusinessEntity.colprefix}google_my_business_url`,
      type: 'varchar',
      length: meta.google_my_business_url.validation.maxLength,
      collation: 'utf8mb4_general_ci',
    })
    @IsOptional()
    @MaxLength(meta.google_my_business_url.validation.maxLength as number, { message: meta.google_my_business_url.validation.maxLengthMsg })
    google_my_business_url?: string;

    @Field(() => String, { nullable: true, description: meta.google_map_url.desc })
    @Column({
      name: `${BusinessEntity.colprefix}google_map_url`,
      type: 'varchar',
      length: meta.google_map_url.validation.maxLength,
      collation: 'utf8mb4_general_ci',
    })
    @IsOptional()
    @MaxLength(meta.google_map_url.validation.maxLength as number, { message: meta.google_map_url.validation.maxLengthMsg })
    google_map_url?: string;

    @Field(() => String, { nullable: true, description: meta.google_review_url.desc })
    @Column({
      name: `${BusinessEntity.colprefix}google_review_url`,
      type: 'varchar',
      length: meta.google_review_url.validation.maxLength,
      collation: 'utf8mb4_general_ci',
    })
    @IsOptional()
    @MaxLength(meta.google_review_url.validation.maxLength as number, { message: meta.google_review_url.validation.maxLengthMsg })
    google_review_url?: string;

    @Field(() => DateTime, { nullable: true, description: meta.registered.desc })
    @Column({
      name: `${BusinessEntity.colprefix}registered`,
      type: 'date',
      nullable: true,
      comment: `Legal registration date`,
    })
    @IsOptional()
    registered?: Date;

    @Field(() => String, { nullable: true, description: meta.initial_findings.desc })
    @Column({
      name: `${BusinessEntity.colprefix}initial_findings`,
      type: 'text',
      collation: 'utf8mb4_general_ci',
      comment: `Research performed to know more about business and what we found and understood. Added by back office member.`,
    })
    @IsOptional()
    initial_findings?: string;

    @Field(() => String, { nullable: true, description: meta.competitor_findings.desc })
    @Column({
      name: `${BusinessEntity.colprefix}competitor_findings`,
      type: 'text',
      collation: 'utf8mb4_general_ci',
      comment: `Research performed to know more about business and what we found and understood. Added by back office member.`,
    })
    @IsOptional()
    competitor_findings?: string;

    @Field(() => DateTime, {nullable: true, description: meta.created.desc})
    @CreateDateColumn({
      name: `${BusinessEntity.colprefix}created`, 
      type: `datetime`,
      update: false,
    })
    @Index(`${InIndexPrefix}${BusinessEntity.colprefix}created`, { unique: false })
    created?: Date;

    @Field(() => DateTime, {nullable: true, description: meta.updated.desc})
    @UpdateDateColumn({
      name: `${BusinessEntity.colprefix}updated`, 
      type: `datetime`,
      nullable: true,
    })
    @Index(`${InIndexPrefix}${BusinessEntity.colprefix}updated`, { unique: false })
    @IsOptional()
    updated?: Date;

    @Field(() => DateTime, {nullable: true, description: meta.deleted.desc})
    @DeleteDateColumn({
      name: `${BusinessEntity.colprefix}deleted`,
      type: `datetime`,
      nullable: true,
      comment: `date-time => yes | null => no`,
    })
    @Index(`${InIndexPrefix}${BusinessEntity.colprefix}deleted`, { unique: false })
    @IsOptional()
    deleted?: Date;

    // ████ INTERNAL RELATIONS ████████████████████████████████████████████████

    @Field(() => ConnectionSourceEntity, {
        nullable: true, 
        description: meta.fkey_connection_source.desc,
    })
    @ManyToOne(() => ConnectionSourceEntity, (entity: ConnectionSourceEntity) => entity.fkey_business_connection_source)
    @JoinColumn({ name: `${BusinessEntity.colprefix}connsrc_id` })
    fkey_connection_source?: ConnectionSourceEntity;

    @Field(() => UserEntity, {
        nullable: true, 
        description: meta.fkey_owner_user.desc,
    })
    @ManyToOne(() => UserEntity, (entity: UserEntity) => entity.fkey_business_user)
    @JoinColumn({ name: `${BusinessEntity.colprefix}owner_u_id` })
    fkey_owner_user?: UserEntity;

    @Field(() => BusinessPrimaryCategoryEntity, {
        nullable: true, 
        description: meta.fkey_primary_categories.desc,
    })
    @ManyToOne(() => BusinessPrimaryCategoryEntity, (entity: BusinessPrimaryCategoryEntity) => entity.fkey_secondary_categories)
    @JoinColumn({ name: `${BusinessEntity.colprefix}buspricat_id` })
    fkey_primary_categories?: BusinessPrimaryCategoryEntity;

    @Field(() => BusinessSecondaryCategoryEntity, {
      nullable: true,
      description: meta.fkey_secondary_categories1.desc,
    })
    @ManyToOne(() => BusinessSecondaryCategoryEntity, (entity: BusinessSecondaryCategoryEntity) => entity.fkey_buiss_sec_categories1)
    @JoinColumn({ name: `${BusinessEntity.colprefix}busseccat_id_1` })
    fkey_secondary_categories1?: BusinessSecondaryCategoryEntity;

    @Field(() => BusinessSecondaryCategoryEntity, {
      nullable: true,
      description: meta.fkey_secondary_categories2.desc,
    })
    @ManyToOne(() => BusinessSecondaryCategoryEntity, (entity: BusinessSecondaryCategoryEntity) => entity.fkey_buiss_sec_categories2)
    @JoinColumn({ name: `${BusinessEntity.colprefix}busseccat_id_2` })
    fkey_secondary_categories2?: BusinessSecondaryCategoryEntity;

    @Field(() => BusinessSecondaryCategoryEntity, {
      nullable: true,
      description: meta.fkey_secondary_categories3.desc,
    })
    @ManyToOne(() => BusinessSecondaryCategoryEntity, (entity: BusinessSecondaryCategoryEntity) => entity.fkey_buiss_sec_categories3)
    @JoinColumn({ name: `${BusinessEntity.colprefix}busseccat_id_3` })
    fkey_secondary_categories3?: BusinessSecondaryCategoryEntity;

    @Field(() => BusinessSecondaryCategoryEntity, {
      nullable: true,
      description: meta.fkey_secondary_categories4.desc,
    })
    @ManyToOne(() => BusinessSecondaryCategoryEntity, (entity: BusinessSecondaryCategoryEntity) => entity.fkey_buiss_sec_categories4)
    @JoinColumn({ name: `${BusinessEntity.colprefix}busseccat_id_4` })
    fkey_secondary_categories4?: BusinessSecondaryCategoryEntity;

    @Field(() => BusinessSecondaryCategoryEntity, {
      nullable: true,
      description: meta.fkey_secondary_categories5.desc,
    })
    @ManyToOne(() => BusinessSecondaryCategoryEntity, (entity: BusinessSecondaryCategoryEntity) => entity.fkey_buiss_sec_categories5)
    @JoinColumn({ name: `${BusinessEntity.colprefix}busseccat_id_5` })
    fkey_secondary_categories5?: BusinessSecondaryCategoryEntity;

    @Field(() => BusinessSecondaryCategoryEntity, {
      nullable: true,
      description: meta.fkey_secondary_categories6.desc,
    })
    @ManyToOne(() => BusinessSecondaryCategoryEntity, (entity: BusinessSecondaryCategoryEntity) => entity.fkey_buiss_sec_categories6)
    @JoinColumn({ name: `${BusinessEntity.colprefix}busseccat_id_6` })
    fkey_secondary_categories6?: BusinessSecondaryCategoryEntity;

    @Field(() => BusinessSecondaryCategoryEntity, {
      nullable: true,
      description: meta.fkey_secondary_categories7.desc,
    })
    @ManyToOne(() => BusinessSecondaryCategoryEntity, (entity: BusinessSecondaryCategoryEntity) => entity.fkey_buiss_sec_categories7)
    @JoinColumn({ name: `${BusinessEntity.colprefix}busseccat_id_7` })
    fkey_secondary_categories7?: BusinessSecondaryCategoryEntity;

    @Field(() => BusinessSecondaryCategoryEntity, {
      nullable: true,
      description: meta.fkey_secondary_categories8.desc,
    })
    @ManyToOne(() => BusinessSecondaryCategoryEntity, (entity: BusinessSecondaryCategoryEntity) => entity.fkey_buiss_sec_categories8)
    @JoinColumn({ name: `${BusinessEntity.colprefix}busseccat_id_8` })
    fkey_secondary_categories8?: BusinessSecondaryCategoryEntity;

    @Field(() => BusinessSecondaryCategoryEntity, {
      nullable: true,
      description: meta.fkey_secondary_categories9.desc,
    })
    @ManyToOne(() => BusinessSecondaryCategoryEntity, (entity: BusinessSecondaryCategoryEntity) => entity.fkey_buiss_sec_categories9)
    @JoinColumn({ name: `${BusinessEntity.colprefix}busseccat_id_9` })
    fkey_secondary_categories9?: BusinessSecondaryCategoryEntity;

    @Field(() => CountryEntity, {
      nullable: true, 
      description: meta.fkey_countries.desc,
    })
    @ManyToOne(() => CountryEntity, (entity: CountryEntity) => entity.fkey_business)
    @JoinColumn({ name: `${BusinessEntity.colprefix}country_id` })
    fkey_countries?: CountryEntity;

    @Field(() => StateEntity, {
      nullable: true, 
      description: meta.fkey_state.desc,
    })
    @ManyToOne(() => StateEntity, (entity: StateEntity) => entity.fkey_business)
    @JoinColumn({ name: `${BusinessEntity.colprefix}state_id` })
    fkey_state?: StateEntity;

    @Field(() => CityEntity, {
      nullable: true, 
      description: meta.fkey_city.desc,
    })
    @ManyToOne(() => CityEntity, (entity: CityEntity) => entity.fkey_business)
    @JoinColumn({ name: `${BusinessEntity.colprefix}city_id` })
    fkey_city?: CityEntity;

    // ████ EXTERNAL RELATIONS ████████████████████████████████████████████████
}