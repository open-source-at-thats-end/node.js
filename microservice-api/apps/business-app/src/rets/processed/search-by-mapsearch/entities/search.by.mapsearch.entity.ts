import { EntityMetaCRUDTypeDefinition, EntityCRUDTypeDefinition, DateTime, EntitySuffix, InIndexPrefix, ResolveGraphFieldRelation, UnIndexPrefix, FtIndexPrefix } from "@libs/library-app";
import { IsInt, IsNotEmpty, IsOptional, MaxLength } from "class-validator";
import { Column, CreateDateColumn, DeleteDateColumn, Double, Entity, Index, OneToMany, OneToOne, JoinColumn, PrimaryGeneratedColumn, Unique, UpdateDateColumn } from "typeorm";
import { Directive, Field, Float, Int, ObjectType } from "@nestjs/graphql";

@ObjectType({ isAbstract: true })
@Directive('@key(fields: "id")')
@Entity({
  name: 'rets_processed_search_by_mapsearch',
  engine: 'InnoDB',
})
@Unique(`${UnIndexPrefix}rpsm_mls_num`,[`mls_num`, `mlsp_id`, `street_number`, `street_direction`, `street_name`, `street_suffix`, `city_name`, `state`, `county`, `zipcode`])
export class ProcessedSearchByMapSearchEntity implements EntityCRUDTypeDefinition {

    static colprefix: string = '';
    static uploaddir: string = '';
    
    static metaname: string = (ProcessedSearchByMapSearchEntity.name).replace(EntitySuffix, '');
    static metadesc: string = 'Provide processed search by mapsearch.';

    @Field(() => Int, {nullable: true, description: meta.id.desc})
    @PrimaryGeneratedColumn({
      name: `${ProcessedSearchByMapSearchEntity.colprefix}id`, 
      type: 'int', 
      unsigned: true, 
      primaryKeyConstraintName: 'PRIMARY',
    })
    id?: number;

    @Field(() => String, {nullable: true, description: meta.mls_num.desc})
    @Column({
      name: `${ProcessedSearchByMapSearchEntity.colprefix}mls_num`, 
      type: 'varchar', 
      length: meta.mls_num.validation.maxLength, 
      collation: 'utf8mb4_general_ci',
      comment: `mls_num of rets listing`
    })
    @IsNotEmpty()
    @Index(`${InIndexPrefix}${ProcessedSearchByMapSearchEntity.colprefix}mls_num`, { unique: false })
    @MaxLength(meta.mls_num.validation.maxLength as number, {message: meta.mls_num.validation.maxLengthMsg})
    mls_num?: string;

    @Field(() => Int, {nullable: true, description: meta.mlsp_id.desc})
    @Column({
      name: `${ProcessedSearchByMapSearchEntity.colprefix}mlsp_id`, 
      type: 'tinyint', 
      unsigned: true,
      comment: `FK(rets_mls_provider => mlsp_id)`
    })
    @IsInt()
    @IsNotEmpty()
    @Index(`${InIndexPrefix}${ProcessedSearchByMapSearchEntity.colprefix}mlsp_id`, { unique: false })
    mlsp_id?: number;

    @Field(() => String, {nullable: true, description: meta.listing_key.desc})
    @Column({
      name: `${ProcessedSearchByMapSearchEntity.colprefix}listing_key`, 
      type: 'varchar', 
      collation: 'utf8mb4_general_ci',
      length: meta.listing_key.validation.maxLength, 
    })
    @IsNotEmpty()
    @Index(`${InIndexPrefix}${ProcessedSearchByMapSearchEntity.colprefix}listing_key`, { unique: false })
    @MaxLength(meta.listing_key.validation.maxLength as number, {message: meta.listing_key.validation.maxLengthMsg})
    listing_key?: string;

    @Field(() => String, {nullable: true, description: meta.agent_id.desc})
    @Column({
      name: `${ProcessedSearchByMapSearchEntity.colprefix}agent_id`, 
      type: 'varchar', 
      collation: 'utf8mb4_general_ci',
      length: meta.agent_id.validation.maxLength, 
    })
    @IsNotEmpty()
    @Index(`${InIndexPrefix}${ProcessedSearchByMapSearchEntity.colprefix}agent_id`, { unique: false })
    @MaxLength(meta.agent_id.validation.maxLength as number, {message: meta.agent_id.validation.maxLengthMsg})
    agent_id?: string;

    @Field(() => String, {nullable: true, description: meta.agent_short_id.desc})
    @Column({
      name: `${ProcessedSearchByMapSearchEntity.colprefix}agent_short_id`, 
      type: 'varchar', 
      collation: 'utf8mb4_general_ci',
      length: meta.agent_short_id.validation.maxLength, 
    })
    @IsOptional()
    @Index(`${InIndexPrefix}${ProcessedSearchByMapSearchEntity.colprefix}agent_short_id`, { unique: false })
    @MaxLength(meta.agent_short_id.validation.maxLength as number, {message: meta.agent_short_id.validation.maxLengthMsg})
    agent_short_id?: string;

    @Field(() => String, {nullable: true, description: meta.co_agent_id.desc})
    @Column({
      name: `${ProcessedSearchByMapSearchEntity.colprefix}co_agent_id`, 
      type: 'varchar', 
      collation: 'utf8mb4_general_ci',
      length: meta.co_agent_id.validation.maxLength, 
    })
    @IsOptional()
    @Index(`${InIndexPrefix}${ProcessedSearchByMapSearchEntity.colprefix}co_agent_id`, { unique: false })
    @MaxLength(meta.co_agent_id.validation.maxLength as number, {message: meta.co_agent_id.validation.maxLengthMsg})
    co_agent_id?: string;

    @Field(() => String, {nullable: true, description: meta.office_id.desc})
    @Column({
      name: `${ProcessedSearchByMapSearchEntity.colprefix}office_id`, 
      type: 'varchar', 
      collation: 'utf8mb4_general_ci',
      length: meta.office_id.validation.maxLength, 
    })
    @IsNotEmpty()
    @Index(`${InIndexPrefix}${ProcessedSearchByMapSearchEntity.colprefix}office_id`, { unique: false })
    @MaxLength(meta.office_id.validation.maxLength as number, {message: meta.office_id.validation.maxLengthMsg})
    office_id?: string;

    @Field(() => String, {nullable: true, description: meta.co_office_id.desc})
    @Column({
      name: `${ProcessedSearchByMapSearchEntity.colprefix}co_office_id`, 
      type: 'varchar', 
      collation: 'utf8mb4_general_ci',
      length: meta.co_office_id.validation.maxLength, 
    })
    @IsOptional()
    @Index(`${InIndexPrefix}${ProcessedSearchByMapSearchEntity.colprefix}co_office_id`, { unique: false })
    @MaxLength(meta.co_office_id.validation.maxLength as number, {message: meta.co_office_id.validation.maxLengthMsg})
    co_office_id?: string;

    @Field(() => String, {nullable: true, description: meta.co_agent_short_id.desc})
    @Column({
      name: `${ProcessedSearchByMapSearchEntity.colprefix}co_agent_short_id`, 
      type: 'varchar', 
      collation: 'utf8mb4_general_ci',
      length: meta.co_agent_short_id.validation.maxLength, 
    })
    @IsOptional()
    @Index(`${InIndexPrefix}${ProcessedSearchByMapSearchEntity.colprefix}co_agent_short_id`, { unique: false })
    @MaxLength(meta.co_agent_short_id.validation.maxLength as number, {message: meta.co_agent_short_id.validation.maxLengthMsg})
    co_agent_short_id?: string;

    @Field(() => String, {nullable: true, description: meta.sell_agent_short_id.desc})
    @Column({
      name: `${ProcessedSearchByMapSearchEntity.colprefix}sell_agent_short_id`, 
      type: 'varchar', 
      collation: 'utf8mb4_general_ci',
      length: meta.sell_agent_short_id.validation.maxLength, 
    })
    @IsOptional()
    @Index(`${InIndexPrefix}${ProcessedSearchByMapSearchEntity.colprefix}sell_agent_short_id`, { unique: false })
    @MaxLength(meta.sell_agent_short_id.validation.maxLength as number, {message: meta.sell_agent_short_id.validation.maxLengthMsg})
    sell_agent_short_id?: string;

    @Field(() => String, {nullable: true, description: meta.buy_agent_id.desc})
    @Column({
      name: `${ProcessedSearchByMapSearchEntity.colprefix}buy_agent_id`, 
      type: 'varchar', 
      collation: 'utf8mb4_general_ci',
      length: meta.buy_agent_id.validation.maxLength, 
    })
    @IsOptional()
    @Index(`${InIndexPrefix}${ProcessedSearchByMapSearchEntity.colprefix}buy_agent_id`, { unique: false })
    @MaxLength(meta.buy_agent_id.validation.maxLength as number, {message: meta.buy_agent_id.validation.maxLengthMsg})
    buy_agent_id?: string;

    @Field(() => String, {nullable: true, description: meta.co_buy_agent_id.desc})
    @Column({
      name: `${ProcessedSearchByMapSearchEntity.colprefix}co_buy_agent_id`, 
      type: 'varchar', 
      collation: 'utf8mb4_general_ci',
      length: meta.co_buy_agent_id.validation.maxLength, 
    })
    @IsOptional()
    @Index(`${InIndexPrefix}${ProcessedSearchByMapSearchEntity.colprefix}co_buy_agent_id`, { unique: false })
    @MaxLength(meta.co_buy_agent_id.validation.maxLength as number, {message: meta.co_buy_agent_id.validation.maxLengthMsg})
    co_buy_agent_id?: string;

    @Field(() => String, {nullable: true, description: meta.property_type.desc})
    @Column({
      name: `${ProcessedSearchByMapSearchEntity.colprefix}property_type`, 
      type: 'varchar', 
      collation: 'utf8mb4_general_ci',
      length: meta.property_type.validation.maxLength, 
    })
    @IsNotEmpty()
    @Index(`${InIndexPrefix}${ProcessedSearchByMapSearchEntity.colprefix}property_type`, { unique: false })
    @MaxLength(meta.property_type.validation.maxLength as number, {message: meta.property_type.validation.maxLengthMsg})
    property_type?: string;

    @Field(() => String, {nullable: true, description: meta.property_style.desc})
    @Column({
      name: `${ProcessedSearchByMapSearchEntity.colprefix}property_style`, 
      type: 'varchar', 
      collation: 'utf8mb4_general_ci',
      comment:'Architectural Style',
      length: meta.property_style.validation.maxLength, 
    })
    @IsOptional()
    @MaxLength(meta.property_style.validation.maxLength as number, {message: meta.property_style.validation.maxLengthMsg})
    property_style?: string;

    @Field(() => String, {nullable: true, description: meta.category.desc})
    @Column({
      name: `${ProcessedSearchByMapSearchEntity.colprefix}category`, 
      type: 'varchar', 
      collation: 'utf8mb4_general_ci',
      default: 'For Sale',
      length: meta.category.validation.maxLength, 
    })
    @IsNotEmpty()
    @Index(`${InIndexPrefix}${ProcessedSearchByMapSearchEntity.colprefix}category`, { unique: false })
    @MaxLength(meta.category.validation.maxLength as number, {message: meta.category.validation.maxLengthMsg})
    category?: string;

    @Field(() => String, {nullable: true, description: meta.property_status.desc})
    @Column({
      name: `${ProcessedSearchByMapSearchEntity.colprefix}property_status`, 
      type: 'varchar', 
      collation: 'utf8mb4_general_ci',
      length: meta.property_status.validation.maxLength, 
    })
    @IsNotEmpty()
    @Index(`${InIndexPrefix}${ProcessedSearchByMapSearchEntity.colprefix}property_status`, { unique: false })
    @MaxLength(meta.property_status.validation.maxLength as number, {message: meta.property_status.validation.maxLengthMsg})
    property_status?: string;

    @Field(() => String, {nullable: true, description: meta.subtype.desc})
    @Column({
      name: `${ProcessedSearchByMapSearchEntity.colprefix}subtype`, 
      type: 'varchar', 
      collation: 'utf8mb4_general_ci',
      length: meta.subtype.validation.maxLength, 
    })
    @IsOptional()
    @Index(`${InIndexPrefix}${ProcessedSearchByMapSearchEntity.colprefix}subtype`, { unique: false })
    @MaxLength(meta.subtype.validation.maxLength as number, {message: meta.subtype.validation.maxLengthMsg})
    subtype?: string;

    @Field(() => Int, {nullable: true, description: meta.baths_full.desc})
    @Column({
      name: `${ProcessedSearchByMapSearchEntity.colprefix}baths_full`, 
      type: 'int', 
      unsigned: true,
      comment:'Total Full Baths',
      default:'0',
    })
    @IsInt()
    @IsOptional()
    @Index(`${InIndexPrefix}${ProcessedSearchByMapSearchEntity.colprefix}baths_full`, { unique: false })
    baths_full?: number;

    @Field(() => Int, {nullable: true, description: meta.baths_half.desc})
    @Column({
      name: `${ProcessedSearchByMapSearchEntity.colprefix}baths_half`, 
      type: 'int', 
      unsigned: true,
      comment:'Total Half Baths',
      default:'0',
    })
    @IsInt()
    @IsNotEmpty()
    @Index(`${InIndexPrefix}${ProcessedSearchByMapSearchEntity.colprefix}baths_half`, { unique: false })
    baths_half?: number;

    @Field(() => Int, {nullable: true, description: meta.baths.desc})
    @Column({
      name: `${ProcessedSearchByMapSearchEntity.colprefix}baths`, 
      type: 'int', 
      unsigned: true,
      default:'0',
    })
    @IsInt()
    @IsNotEmpty()
    @Index(`${InIndexPrefix}${ProcessedSearchByMapSearchEntity.colprefix}baths`, { unique: false })
    baths?: number;

    @Field(() => Int, {nullable: true, description: meta.beds.desc})
    @Column({
      name: `${ProcessedSearchByMapSearchEntity.colprefix}beds`, 
      type: 'int', 
      unsigned: true,
      default:'0',
    })
    @IsInt()
    @IsNotEmpty()
    @Index(`${InIndexPrefix}${ProcessedSearchByMapSearchEntity.colprefix}beds`, { unique: false })
    beds?: number;

    @Field(() => Float, {nullable: true, description: meta.list_price.desc})
    @Column({
      name: `${ProcessedSearchByMapSearchEntity.colprefix}list_price`, 
      type: 'decimal', 
      unsigned: true,
      comment:'List Price/Rent Price',
      default:'0',
      precision: 12,
      scale: 8,
    })
    @IsOptional()
    @Index(`${InIndexPrefix}${ProcessedSearchByMapSearchEntity.colprefix}list_price`, { unique: false })
    list_price?: number;

    @Field(() => Float, {nullable: true, description: meta.original_list_price.desc})
    @Column({
      name: `${ProcessedSearchByMapSearchEntity.colprefix}original_list_price`, 
      type: 'decimal', 
      unsigned: true,
      default:'0',
      precision: 12,
      scale: 8,
    })
    @IsOptional()
    original_list_price?: number;

    @Field(() => Float, {nullable: true, description: meta.sold_price.desc})
    @Column({
      name: `${ProcessedSearchByMapSearchEntity.colprefix}sold_price`, 
      type: 'decimal', 
      precision: 12,
      scale: 8,
      nullable:true
    })
    @IsOptional()
    @Index(`${InIndexPrefix}${ProcessedSearchByMapSearchEntity.colprefix}sold_price`, { unique: false })
    sold_price?: number;

    @Field(() => DateTime, {nullable: true, description: meta.sold_date.desc})
    @Column({
      name: `${ProcessedSearchByMapSearchEntity.colprefix}sold_date`, 
      type: 'date',
    })
    @IsOptional()
    sold_date?: Date;

    @Field(() => Float, {nullable: true, description: meta.sqft.desc})
    @Column({
      name: `${ProcessedSearchByMapSearchEntity.colprefix}sqft`, 
      type: 'decimal', 
      precision: 12,
      scale: 8,
      nullable:true
    })
    @IsOptional()
    @Index(`${InIndexPrefix}${ProcessedSearchByMapSearchEntity.colprefix}sqft`, { unique: false })
    sqft?: number;

    @Field(() => Int, {nullable: true, description: meta.yearbuilt.desc})
    @Column({
      name: `${ProcessedSearchByMapSearchEntity.colprefix}yearbuilt`, 
      type: 'int', 
      unsigned: true,
    })
    @IsInt()
    @IsOptional()
    @Index(`${InIndexPrefix}${ProcessedSearchByMapSearchEntity.colprefix}yearbuilt`, { unique: false })
    yearbuilt?: number;

    @Field(() => Int, {nullable: true, description: meta.total_photos.desc})
    @Column({
      name: `${ProcessedSearchByMapSearchEntity.colprefix}total_photos`, 
      type: 'tinyint', 
      unsigned: true,
      default: 0,
    })
    @IsOptional()
    total_photos?: number;

    @Field(() => Int, {nullable: true, description: meta.main_photo.desc})
    @Column({
      name: `${ProcessedSearchByMapSearchEntity.colprefix}main_photo`, 
      type: 'smallint', 
      unsigned: true,
      default: 1,
    })
    @IsInt()
    @IsOptional()
    main_photo?: number;

    @Field(() => String, {nullable: true, description: meta.main_photo_url.desc})
    @Column({
      name: `${ProcessedSearchByMapSearchEntity.colprefix}main_photo_url`, 
      type: 'text', 
      collation: 'utf8mb4_general_ci',
    })
    @IsOptional()
    @Index(`${FtIndexPrefix}${ProcessedSearchByMapSearchEntity.colprefix}main_photo_url`, { unique: false })
    main_photo_url?: string;

    @Field(() => String, {nullable: true, description: meta.display_address.desc})
    @Column({
      name: `${ProcessedSearchByMapSearchEntity.colprefix}display_address`, 
      type: 'char', 
      collation: 'utf8mb4_general_ci',
      default: 'Y',
      length: meta.display_address.validation.maxLength, 
    })
    @IsNotEmpty()
    @Index(`${InIndexPrefix}${ProcessedSearchByMapSearchEntity.colprefix}display_address`, { unique: false })
    @MaxLength(meta.main_photo_url.validation.maxLength as number, {message: meta.main_photo_url.validation.maxLengthMsg})
    display_address?: string;

    @Field(() => DateTime, {nullable: true, description: meta.listing_date.desc})
    @Column({
      name: `${ProcessedSearchByMapSearchEntity.colprefix}listing_date`, 
      type: 'date',
    })
    @IsNotEmpty()
    listing_date?: Date;

    @Field(() => DateTime, {nullable: true, description: meta.last_update_date.desc})
    @Column({
      name: `${ProcessedSearchByMapSearchEntity.colprefix}last_update_date`, 
      type: 'datetime', 
    })
    @IsOptional()
    last_update_date?: Date;

    @Field(() => String, {nullable: true, description: meta.elementary_school.desc})
    @Column({
      name: `${ProcessedSearchByMapSearchEntity.colprefix}elementary_school`, 
      type: 'varchar', 
      collation: 'utf8mb4_general_ci',
      length: meta.elementary_school.validation.maxLength, 
    })
    @IsOptional()
    @Index(`${InIndexPrefix}${ProcessedSearchByMapSearchEntity.colprefix}elementary_school`, { unique: false })
    @MaxLength(meta.elementary_school.validation.maxLength as number, {message: meta.elementary_school.validation.maxLengthMsg})
    elementary_school?: string;

    @Field(() => String, {nullable: true, description: meta.high_school.desc})
    @Column({
      name: `${ProcessedSearchByMapSearchEntity.colprefix}high_school`, 
      type: 'varchar', 
      collation: 'utf8mb4_general_ci',
      length: meta.high_school.validation.maxLength, 
    })
    @IsOptional()
    @Index(`${InIndexPrefix}${ProcessedSearchByMapSearchEntity.colprefix}high_school`, { unique: false })
    @MaxLength(meta.high_school.validation.maxLength as number, {message: meta.high_school.validation.maxLengthMsg})
    high_school?: string;

    @Field(() => String, {nullable: true, description: meta.middle_school.desc})
    @Column({
      name: `${ProcessedSearchByMapSearchEntity.colprefix}middle_school`, 
      type: 'varchar', 
      collation: 'utf8mb4_general_ci',
      length: meta.middle_school.validation.maxLength, 
    })
    @IsOptional()
    @Index(`${InIndexPrefix}${ProcessedSearchByMapSearchEntity.colprefix}middle_school`, { unique: false })
    @MaxLength(meta.middle_school.validation.maxLength as number, {message: meta.middle_school.validation.maxLengthMsg})
    middle_school?: string;

    @Field(() => Float, { nullable: true, description: meta.price_diff.desc })
    @Column({
      name: `${ProcessedSearchByMapSearchEntity.colprefix}price_diff`,
      type: 'decimal',
      default: 0,
      comment:'Last Price Difference',
      precision: 12,
      scale: 8,
    })
    @IsNotEmpty()
    price_diff?: number;

    @Field(() => String, { nullable: true, description: meta.system_name.desc })
    @Column({
      name: `${ProcessedSearchByMapSearchEntity.colprefix}system_name`,
      type: 'varchar',
      collation: 'utf8mb4_general_ci',
      length: meta.system_name.validation.maxLength, 
    })
    @IsNotEmpty()
    @Index(`${InIndexPrefix}${ProcessedSearchByMapSearchEntity.colprefix}system_name`, { unique: false })
    @MaxLength(meta.system_name.validation.maxLength as number, {message: meta.system_name.validation.maxLengthMsg})
    system_name?: string;

    @Field(() => String, { nullable: true, description: meta.address.desc })
    @Column({
      name: `${ProcessedSearchByMapSearchEntity.colprefix}address`,
      type: 'varchar',
      collation: 'utf8mb4_general_ci',
      length: meta.address.validation.maxLength, 
    })
    @IsNotEmpty()
    @Index(`${InIndexPrefix}${ProcessedSearchByMapSearchEntity.colprefix}address`, { unique: false })
    @MaxLength(meta.address.validation.maxLength as number, {message: meta.address.validation.maxLengthMsg})
    address?: string;

    @Field(() => String, { nullable: true, description: meta.area.desc })
    @Column({
      name: `${ProcessedSearchByMapSearchEntity.colprefix}area`,
      type: 'varchar',
      collation: 'utf8mb4_general_ci',
      length: meta.area.validation.maxLength, 
    })
    @IsOptional()
    @Index(`${InIndexPrefix}${ProcessedSearchByMapSearchEntity.colprefix}area`, { unique: false })
    @MaxLength(meta.area.validation.maxLength as number, {message: meta.area.validation.maxLengthMsg})
    area?: string;

    @Field(() => String, { nullable: true, description: meta.subdivision.desc })
    @Column({
      name: `${ProcessedSearchByMapSearchEntity.colprefix}subdivision`,
      type: 'varchar',
      collation: 'utf8mb4_general_ci',
      length: meta.subdivision.validation.maxLength, 
    })
    @IsOptional()
    @Index(`${InIndexPrefix}${ProcessedSearchByMapSearchEntity.colprefix}subdivision`, { unique: false })
    @MaxLength(meta.subdivision.validation.maxLength as number, {message: meta.subdivision.validation.maxLengthMsg})
    subdivision?: string;

    @Field(() => String, { nullable: true, description: meta.unit_no.desc })
    @Column({
      name: `${ProcessedSearchByMapSearchEntity.colprefix}unit_no`,
      type: 'varchar',
      collation: 'utf8mb4_general_ci',
      length: meta.unit_no.validation.maxLength, 
    })
    @IsOptional()
    @MaxLength(meta.unit_no.validation.maxLength as number, {message: meta.unit_no.validation.maxLengthMsg})
    unit_no?: string;

    @Field(() => String, { nullable: true, description: meta.street_number.desc })
    @Column({
      name: `${ProcessedSearchByMapSearchEntity.colprefix}street_number`,
      type: 'varchar',
      collation: 'utf8mb4_general_ci',
      length: meta.street_number.validation.maxLength, 
    })
    @IsNotEmpty()
    @Index(`${InIndexPrefix}${ProcessedSearchByMapSearchEntity.colprefix}street_number`, { unique: false })
    @MaxLength(meta.street_number.validation.maxLength as number, {message: meta.street_number.validation.maxLengthMsg})
    street_number?: string;

    @Field(() => String, { nullable: true, description: meta.street_direction.desc })
    @Column({
      name: `${ProcessedSearchByMapSearchEntity.colprefix}street_direction`,
      type: 'varchar',
      collation: 'utf8mb4_general_ci',
      length: meta.street_direction.validation.maxLength, 
    })
    @IsNotEmpty()
    @Index(`${InIndexPrefix}${ProcessedSearchByMapSearchEntity.colprefix}street_direction`, { unique: false })
    @MaxLength(meta.street_direction.validation.maxLength as number, {message: meta.street_direction.validation.maxLengthMsg})
    street_direction?: string;

    @Field(() => String, { nullable: true, description: meta.street_dir_prefix.desc })
    @Column({
      name: `${ProcessedSearchByMapSearchEntity.colprefix}street_dir_prefix`,
      type: 'varchar',
      collation: 'utf8mb4_general_ci',
      length: meta.street_dir_prefix.validation.maxLength, 
    })
    @IsNotEmpty()
    @MaxLength(meta.street_dir_prefix.validation.maxLength as number, {message: meta.street_dir_prefix.validation.maxLengthMsg})
    street_dir_prefix?: string;

    @Field(() => String, { nullable: true, description: meta.street_name.desc })
    @Column({
      name: `${ProcessedSearchByMapSearchEntity.colprefix}street_name`,
      type: 'varchar',
      collation: 'utf8mb4_general_ci',
      length: meta.street_name.validation.maxLength, 
    })
    @IsNotEmpty()
    @Index(`${InIndexPrefix}${ProcessedSearchByMapSearchEntity.colprefix}street_name`, { unique: false })
    @MaxLength(meta.street_name.validation.maxLength as number, {message: meta.street_name.validation.maxLengthMsg})
    street_name?: string;

    @Field(() => String, { nullable: true, description: meta.street_suffix.desc })
    @Column({
      name: `${ProcessedSearchByMapSearchEntity.colprefix}street_suffix`,
      type: 'varchar',
      collation: 'utf8mb4_general_ci',
      length: meta.street_suffix.validation.maxLength, 
    })
    @IsNotEmpty()
    @Index(`${InIndexPrefix}${ProcessedSearchByMapSearchEntity.colprefix}street_suffix`, { unique: false })
    @MaxLength(meta.street_suffix.validation.maxLength as number, {message: meta.street_suffix.validation.maxLengthMsg})
    street_suffix?: string;

    @Field(() => String, { nullable: true, description: meta.street_dir_suffix.desc })
    @Column({
      name: `${ProcessedSearchByMapSearchEntity.colprefix}street_dir_suffix`,
      type: 'varchar',
      collation: 'utf8mb4_general_ci',
      length: meta.street_dir_suffix.validation.maxLength, 
    })
    @IsNotEmpty()
    @MaxLength(meta.street_dir_suffix.validation.maxLength as number, {message: meta.street_dir_suffix.validation.maxLengthMsg})
    street_dir_suffix?: string;

    @Field(() => String, { nullable: true, description: meta.city_name.desc })
    @Column({
      name: `${ProcessedSearchByMapSearchEntity.colprefix}city_name`,
      type: 'varchar',
      collation: 'utf8mb4_general_ci',
      length: meta.city_name.validation.maxLength, 
    })
    @IsNotEmpty()
    @Index(`${InIndexPrefix}${ProcessedSearchByMapSearchEntity.colprefix}city_name`, { unique: false })
    @MaxLength(meta.city_name.validation.maxLength as number, {message: meta.city_name.validation.maxLengthMsg})
    city_name?: string;

    @Field(() => String, { nullable: true, description: meta.state.desc })
    @Column({
      name: `${ProcessedSearchByMapSearchEntity.colprefix}state`,
      type: 'char',
      collation: 'utf8mb4_general_ci',
      length: meta.state.validation.maxLength, 
    })
    @IsNotEmpty()
    @Index(`${InIndexPrefix}${ProcessedSearchByMapSearchEntity.colprefix}state`, { unique: false })
    @MaxLength(meta.state.validation.maxLength as number, {message: meta.state.validation.maxLengthMsg})
    state?: string;

    @Field(() => String, { nullable: true, description: meta.county.desc })
    @Column({
      name: `${ProcessedSearchByMapSearchEntity.colprefix}county`,
      type: 'varchar',
      collation: 'utf8mb4_general_ci',
      length: meta.county.validation.maxLength, 
    })
    @IsNotEmpty()
    @Index(`${InIndexPrefix}${ProcessedSearchByMapSearchEntity.colprefix}county`, { unique: false })
    @MaxLength(meta.county.validation.maxLength as number, {message: meta.county.validation.maxLengthMsg})
    county?: string;

    @Field(() => String, { nullable: true, description: meta.zipcode.desc })
    @Column({
      name: `${ProcessedSearchByMapSearchEntity.colprefix}zipcode`,
      type: 'varchar',
      collation: 'utf8mb4_general_ci',
      length: meta.zipcode.validation.maxLength, 
    })
    @IsNotEmpty()
    @Index(`${InIndexPrefix}${ProcessedSearchByMapSearchEntity.colprefix}zipcode`, { unique: false })
    @MaxLength(meta.zipcode.validation.maxLength as number, {message: meta.zipcode.validation.maxLengthMsg})
    zipcode?: string;

    @Field(() => Float, { nullable: true, description: meta.latitude.desc })
    @Column({
      name: `${ProcessedSearchByMapSearchEntity.colprefix}latitude`,
      type: 'decimal',
      precision: 12,
      scale: 8,
      default: 0.0,
    })
    @IsOptional()
    @Index(`${InIndexPrefix}${ProcessedSearchByMapSearchEntity.colprefix}latitude`, { unique: false })
    latitude?: number;

    @Field(() => Float, { nullable: true, description: meta.longitude.desc })
    @Column({
      name: `${ProcessedSearchByMapSearchEntity.colprefix}longitude`,
      type: 'decimal',
      precision: 12,
      scale: 8,
      default: 0.0,
    })
    @IsOptional()
    @Index(`${InIndexPrefix}${ProcessedSearchByMapSearchEntity.colprefix}longitude`, { unique: false })
    longitude?: number;

    @Field(() => Float, { nullable: true, description: meta.lotsize_sqft.desc })
    @Column({
      name: `${ProcessedSearchByMapSearchEntity.colprefix}lotsize_sqft`,
      type: 'decimal',
      unsigned: true,
      precision: 14,
      scale: 2,
    })
    @IsOptional()
    @Index(`${InIndexPrefix}${ProcessedSearchByMapSearchEntity.colprefix}lotsize_sqft`, { unique: false })
    lotsize_sqft?: number;

    @Field(() => String, { nullable: true, description: meta.is_hoa.desc })
    @Column({
      name: `${ProcessedSearchByMapSearchEntity.colprefix}is_hoa`,
      type: 'char',
      collation: 'utf8mb4_general_ci',
      length: meta.is_hoa.validation.maxLength, 
    })
    @IsOptional()
    @Index(`${InIndexPrefix}${ProcessedSearchByMapSearchEntity.colprefix}is_hoa`, { unique: false })
    @MaxLength(meta.is_hoa.validation.maxLength as number, {message: meta.is_hoa.validation.maxLengthMsg})
    is_hoa?: string;

    @Field(() => String, { nullable: true, description: meta.is_new.desc })
    @Column({
      name: `${ProcessedSearchByMapSearchEntity.colprefix}is_new`,
      type: 'char',
      collation: 'utf8mb4_general_ci',
      length: meta.is_new.validation.maxLength, 
    })
    @IsOptional()
    @Index(`${InIndexPrefix}${ProcessedSearchByMapSearchEntity.colprefix}is_new`, { unique: false })
    @MaxLength(meta.is_new.validation.maxLength as number, {message: meta.is_new.validation.maxLengthMsg})
    is_new?: string;

    @Field(() => String, { nullable: true, description: meta.pool_desc.desc })
    @Column({
      name: `${ProcessedSearchByMapSearchEntity.colprefix}pool_desc`,
      type: 'varchar',
      collation: 'utf8mb4_general_ci',
    })
    @IsOptional()
    pool_desc?: string;

    @Field(() => String, { nullable: true, description: meta.pets_allowed.desc })
    @Column({
      name: `${ProcessedSearchByMapSearchEntity.colprefix}pets_allowed`,
      type: 'text',
      collation: 'utf8mb4_general_ci',
      nullable: true,
    })
    @IsOptional()
    @Index(`${FtIndexPrefix}${ProcessedSearchByMapSearchEntity.colprefix}pets_allowed`, { unique: false })
    pets_allowed?: string;

    @Field(() => String, { nullable: true, description: meta.furnished.desc })
    @Column({
      name: `${ProcessedSearchByMapSearchEntity.colprefix}furnished`,
      type: 'varchar',
      collation: 'utf8mb4_general_ci',
      nullable: true,
      length: meta.furnished.validation.maxLength, 
    })
    @IsOptional()
    @Index(`${InIndexPrefix}${ProcessedSearchByMapSearchEntity.colprefix}furnished`, { unique: false })
    @MaxLength(meta.furnished.validation.maxLength as number, {message: meta.furnished.validation.maxLengthMsg})
    furnished?: string;

    @Field(() => String, { nullable: true, description: meta.is_waterfront.desc })
    @Column({
      name: `${ProcessedSearchByMapSearchEntity.colprefix}is_waterfront`,
      type: 'char',
      collation: 'utf8mb4_general_ci',
      nullable: true,
      length: meta.is_waterfront.validation.maxLength, 
    })
    @IsOptional()
    @Index(`${InIndexPrefix}${ProcessedSearchByMapSearchEntity.colprefix}is_waterfront`, { unique: false })
    @MaxLength(meta.is_waterfront.validation.maxLength as number, {message: meta.is_waterfront.validation.maxLengthMsg})
    is_waterfront?: string;

    @Field(() => String, { nullable: true, description: meta.waterfront_desc.desc })
    @Column({
      name: `${ProcessedSearchByMapSearchEntity.colprefix}waterfront_desc`,
      type: 'text',
      collation: 'utf8mb4_general_ci',
      nullable: true,
    })
    @IsOptional()
    waterfront_desc?: string;

    @Field(() => String, { nullable: true, description: meta.horse_yn.desc })
    @Column({
      name: `${ProcessedSearchByMapSearchEntity.colprefix}horse_yn`,
      type: 'char',
      collation: 'utf8mb4_general_ci',
      nullable: false,  
      length: meta.horse_yn.validation.maxLength, 
    })
    @IsNotEmpty()
    @Index(`${InIndexPrefix}${ProcessedSearchByMapSearchEntity.colprefix}horse_yn`, { unique: false })
    @MaxLength(meta.horse_yn.validation.maxLength as number, {message: meta.horse_yn.validation.maxLengthMsg})
    horse_yn?: string;

    @Field(() => String, { nullable: true, description: meta.horse_amenities.desc })
    @Column({
      name: `${ProcessedSearchByMapSearchEntity.colprefix}horse_amenities`,
      type: 'text',
      collation: 'utf8mb4_general_ci',
      nullable: true,
    })
    @IsOptional()
    horse_amenities?: string;

    @Field(() => String, { nullable: true, description: meta.security_safety.desc })
    @Column({
      name: `${ProcessedSearchByMapSearchEntity.colprefix}security_safety`,
      type: 'varchar',
      collation: 'utf8mb4_general_ci',
      nullable: true,
    })
    @IsOptional()
    security_safety?: string;

    @Field(() => String, { nullable: true, description: meta.membership_required_yn.desc })
    @Column({
      name: `${ProcessedSearchByMapSearchEntity.colprefix}membership_required_yn`,
      type: 'char',
      collation: 'utf8mb4_general_ci',
      nullable: false,
      length: meta.membership_required_yn.validation.maxLength, 
    })
    @IsNotEmpty()
    @Index(`${InIndexPrefix}${ProcessedSearchByMapSearchEntity.colprefix}membership_required_yn`, { unique: false })
    @MaxLength(meta.membership_required_yn.validation.maxLength as number, {message: meta.membership_required_yn.validation.maxLengthMsg})
    membership_required_yn?: string;

    @Field(() => String, { nullable: true, description: meta.membership.desc })
    @Column({
      name: `${ProcessedSearchByMapSearchEntity.colprefix}membership`,
      type: 'text',
      collation: 'utf8mb4_general_ci',
      nullable: true,
    })
    @IsOptional()
    @Index(`${FtIndexPrefix}${ProcessedSearchByMapSearchEntity.colprefix}membership`, { unique: false })
    membership?: string;

    @Field(() => Float, { nullable: true, description: meta.membership_fee.desc })
    @Column({
      name: `${ProcessedSearchByMapSearchEntity.colprefix}membership_fee`,
      type: 'decimal',
      nullable: true,
      precision: 14,
      scale: 2,
    })
    @IsOptional()
    @Index(`${InIndexPrefix}${ProcessedSearchByMapSearchEntity.colprefix}membership_fee`, { unique: false })
    membership_fee?: number;

    @Field(() => String, { nullable: true, description: meta.virtual_tour_url.desc })
    @Column({
      name: `${ProcessedSearchByMapSearchEntity.colprefix}virtual_tour_url`,
      type: 'longtext',
      collation: 'utf8mb4_general_ci',
      nullable: true,
    })
    @IsOptional()
    virtual_tour_url?: string;

    @Field(() => String, { nullable: true, description: meta.description.desc })
    @Column({
      name: `${ProcessedSearchByMapSearchEntity.colprefix}description`,
      type: 'text',
      collation: 'utf8mb4_general_ci',
      nullable: true,
    })
    @IsOptional()
    description?: string;

    @Field(() => String, { nullable: true, description: meta.exterior_features.desc })
    @Column({
      name: `${ProcessedSearchByMapSearchEntity.colprefix}exterior_features`,
      type: 'text',
      collation: 'utf8mb4_general_ci',
      nullable: true,
    })
    @IsOptional()
    @Index(`${InIndexPrefix}${ProcessedSearchByMapSearchEntity.colprefix}exterior_features`, { unique: false })
    exterior_features?: string;

    @Field(() => String, { nullable: true, description: meta.building_features.desc })
    @Column({
      name: `${ProcessedSearchByMapSearchEntity.colprefix}building_features`,
      type: 'varchar',
      collation: 'utf8mb4_general_ci',
      nullable: true,
    })
    @IsOptional()
    @Index(`${FtIndexPrefix}${ProcessedSearchByMapSearchEntity.colprefix}building_features`, { unique: false })
    building_features?: string;

    @Field(() => String, { nullable: true, description: meta.construction.desc })
    @Column({
      name: `${ProcessedSearchByMapSearchEntity.colprefix}construction`,
      type: 'text',
      collation: 'utf8mb4_general_ci',
      nullable: true,
    })
    @IsOptional()
    construction?: string;

    @Field(() => String, { nullable: true, description: meta.sewer.desc })
    @Column({
      name: `${ProcessedSearchByMapSearchEntity.colprefix}sewer`,
      type: 'text',
      collation: 'utf8mb4_general_ci',
      nullable: true,
    })
    @IsOptional()
    sewer?: string;

    @Field(() => String, { nullable: true, description: meta.water.desc })
    @Column({
      name: `${ProcessedSearchByMapSearchEntity.colprefix}water`,
      type: 'varchar',
      collation: 'utf8mb4_general_ci',
      nullable: true,
      length: meta.water.validation.maxLength, 
    })
    @IsOptional()
    @Index(`${InIndexPrefix}${ProcessedSearchByMapSearchEntity.colprefix}water`, { unique: false })
    @MaxLength(meta.water.validation.maxLength as number, {message: meta.water.validation.maxLengthMsg})
    water?: string;

    @Field(() => String, { nullable: true, description: meta.zoning.desc })
    @Column({
      name: `${ProcessedSearchByMapSearchEntity.colprefix}zoning`,
      type: 'varchar',
      collation: 'utf8mb4_general_ci',
      nullable: true,
      length: meta.zoning.validation.maxLength, 
    })
    @IsOptional()
    @MaxLength(meta.zoning.validation.maxLength as number, {message: meta.water.validation.maxLengthMsg})
    zoning?: string;

    @Field(() => String, { nullable: true, description: meta.legal.desc })
    @Column({
      name: `${ProcessedSearchByMapSearchEntity.colprefix}legal`,
      type: 'text',
      collation: 'utf8mb4_general_ci',
      nullable: true,
    })
    @IsOptional()
    legal?: string;

    @Field(() => String, { nullable: true, description: meta.fireplace_features.desc })
    @Column({
      name: `${ProcessedSearchByMapSearchEntity.colprefix}fireplace_features`,
      type: 'text',
      collation: 'utf8mb4_general_ci',
      nullable: true,
    })
    @IsOptional()
    fireplace_features?: string;

    @Field(() => String, { nullable: true, description: meta.amenities.desc })
    @Column({
      name: `${ProcessedSearchByMapSearchEntity.colprefix}amenities`,
      type: 'text',
      collation: 'utf8mb4_general_ci',
      nullable: true,
    })
    @IsOptional()
    amenities?: string;

    @Field(() => String, { nullable: true, description: meta.cooling.desc })
    @Column({
      name: `${ProcessedSearchByMapSearchEntity.colprefix}cooling`,
      type: 'text',
      collation: 'utf8mb4_general_ci',
      nullable: true,
    })
    @IsOptional()
    cooling?: string;

    @Field(() => String, { nullable: true, description: meta.appliances.desc })
    @Column({
      name: `${ProcessedSearchByMapSearchEntity.colprefix}appliances`,
      type: 'text',
      collation: 'utf8mb4_general_ci',
      nullable: true,
    })
    @IsOptional()
    appliances?: string;

    @Field(() => String, { nullable: true, description: meta.flooring.desc })
    @Column({
      name: `${ProcessedSearchByMapSearchEntity.colprefix}flooring`,
      type: 'text',
      collation: 'utf8mb4_general_ci',
      nullable: true,
    })
    @IsOptional()
    flooring?: string;

    @Field(() => String, { nullable: true, description: meta.heating.desc })
    @Column({
      name: `${ProcessedSearchByMapSearchEntity.colprefix}heating`,
      type: 'text',
      collation: 'utf8mb4_general_ci',
      nullable: true,
    })
    @IsOptional()
    heating?: string;

    @Field(() => String, { nullable: true, description: meta.interior_features.desc })
    @Column({
      name: `${ProcessedSearchByMapSearchEntity.colprefix}interior_features`,
      type: 'text',
      collation: 'utf8mb4_general_ci',
      nullable: true,
    })
    @IsOptional()
    interior_features?: string;

    @Field(() => String, { nullable: true, description: meta.roof.desc })
    @Column({
      name: `${ProcessedSearchByMapSearchEntity.colprefix}roof`,
      type: 'text',
      collation: 'utf8mb4_general_ci',
      nullable: true,
    })
    @IsOptional()
    roof?: string;

    @Field(() => String, { nullable: true, description: meta.spa_features.desc })
    @Column({
      name: `${ProcessedSearchByMapSearchEntity.colprefix}spa_features`,
      type: 'varchar',
      collation: 'utf8mb4_general_ci',
      nullable: true,
      length: meta.spa_features.validation.maxLength, 
    })
    @IsOptional()
    @MaxLength(meta.spa_features.validation.maxLength as number, {message: meta.spa_features.validation.maxLengthMsg})
    spa_features?: string;

    @Field(() => String, { nullable: true, description: meta.community_features.desc })
    @Column({
      name: `${ProcessedSearchByMapSearchEntity.colprefix}community_features`,
      type: 'text',
      collation: 'utf8mb4_general_ci',
      nullable: true,
    })
    @IsOptional()
    community_features?: string;

    @Field(() => String, { nullable: true, description: meta.parking_features.desc })
    @Column({
      name: `${ProcessedSearchByMapSearchEntity.colprefix}parking_features`,
      type: 'text',
      collation: 'utf8mb4_general_ci',
      nullable: true,
    })
    @IsOptional()
    parking_features?: string;

    @Field(() => String, { nullable: false, description: meta.mls_is_pic_url_supported.desc })
    @Column({
      name: `${ProcessedSearchByMapSearchEntity.colprefix}mls_is_pic_url_supported`,
      type: 'varchar',
      collation: 'utf8mb4_general_ci',
      nullable: false,
    })
    @IsNotEmpty()
    @Index(`${InIndexPrefix}${ProcessedSearchByMapSearchEntity.colprefix}mls_is_pic_url_supported`, { unique: false })
    @MaxLength(meta.mls_is_pic_url_supported.validation.maxLength as number, {message: meta.mls_is_pic_url_supported.validation.maxLengthMsg})
    mls_is_pic_url_supported?: string;

    @Field(() => Int, { nullable: true, description: meta.dom.desc })
    @Column({
      name: `${ProcessedSearchByMapSearchEntity.colprefix}dom`,
      type: 'int',
      collation: 'utf8mb4_general_ci',
      nullable: true,
    })
    @IsInt()
    @IsOptional()
    dom?: number;

    @Field(() => String, { nullable: true, description: meta.office_name.desc })
    @Column({
      name: `${ProcessedSearchByMapSearchEntity.colprefix}office_name`,
      type: 'varchar',
      collation: 'utf8mb4_general_ci',
      nullable: true,
      length: meta.office_name.validation.maxLength, 
    })
    @IsOptional()
    @Index(`${InIndexPrefix}${ProcessedSearchByMapSearchEntity.colprefix}office_name`, { unique: false })
    @MaxLength(meta.office_name.validation.maxLength as number, {message: meta.office_name.validation.maxLengthMsg})
    office_name?: string;

    @Field(() => DateTime, {nullable: true, description: meta.created.desc})
    @CreateDateColumn({
      name: `${ProcessedSearchByMapSearchEntity.colprefix}created`,
      update: false,
    })
    @Index(`${InIndexPrefix}${ProcessedSearchByMapSearchEntity.colprefix}created`, { unique: false })
    @IsOptional()
    created?: Date;
  
    @Field(() => DateTime, {nullable: true, description: meta.updated.desc})
    @UpdateDateColumn({
      name: `${ProcessedSearchByMapSearchEntity.colprefix}updated`, 
      nullable: true
    })
    @Index(`${InIndexPrefix}${ProcessedSearchByMapSearchEntity.colprefix}updated`, { unique: false })
    updated?: Date;
  
    @Field(() => DateTime, {nullable: true, description: meta.deleted.desc})
    @DeleteDateColumn({
      name: `${ProcessedSearchByMapSearchEntity.colprefix}deleted`, 
      nullable: true,
      comment:`date-time => Yes | null => No`,
    })
    @Index(`${InIndexPrefix}${ProcessedSearchByMapSearchEntity.colprefix}deleted`, { unique: false })
    deleted?: Date;


     // ████ INTERNAL RELATIONS ████████████████████████████████████████████████

  
      // ████ EXTERNAL RELATIONS ████████████████████████████████████████████████
     
        
}

 
