import { UploadDeleteInputDto, UploadDeleteOutputDto, UploadInputDto, UploadOutputDto, UploadArtefact, UploadDtoCRUDTypeDefinition, UploadInputArtefactCRUDTypeDefinition, UploadOutputArtefactCRUDTypeDefinition, UploadDeleteArtefact, UploadDeleteDtoCRUDTypeDefinition, UploadDeleteInputArtefactCRUDTypeDefinition, UploadDeleteOutputArtefactCRUDTypeDefinition, CreateArtefact, CreateDtoCRUDTypeDefinition, CreateInputCRUDTypeDefinition, CreateOutputCRUDTypeDefinition, CrudDefMetaDesc, DateTime, DeleteArtefact, DeleteDtoCRUDTypeDefinition, DeleteInputCRUDTypeDefinition, DeleteOutputCRUDTypeDefinition, FindArtefact, FindDtoCRUDTypeDefinition, FindInputGroupByCRUDTypeDefinition, FindInputSortOrderCRUDTypeDefinition, FindInputCRUDTypeDefinition, FindInputWhereCRUDTypeDefinition, FindOneByIdArtefact, FindOperatorDto, FindOutputPaginationDto, FindOutputCRUDTypeDefinition, OnlyOneSeachOperatorAllowed, RecordSortDirectionEnum, RestoreArtefact, RestoreDtoCRUDTypeDefinition, RestoreInputCRUDTypeDefinition, SoftDeleteArtefact, SoftDeleteDtoCRUDTypeDefinition, SoftDeleteInputCRUDTypeDefinition, SoftDeleteOutputCRUDTypeDefinition, UpdateArtefact, UpdateDtoCRUDTypeDefinition, UpdateInputSetsCRUDTypeDefinition, UpdateInputCRUDTypeDefinition, UpdateInputWhereCRUDTypeDefinition, UpdateOutputCRUDTypeDefinition, SoftDeleteInputWhereCRUDTypeDefinition, RestoreInputWhereCRUDTypeDefinition, RestoreOutputCRUDTypeDefinition, UpsertDtoCRUDTypeDefinition, UpsertArtefact, UpsertInputCRUDTypeDefinition, UpsertOutputCRUDTypeDefinition, UpsertStatusEnum, SoftRemoveDtoCRUDTypeDefinition, SoftRemoveArtefact, SoftRemoveInputWhereCRUDTypeDefinition, SoftRemoveInputCRUDTypeDefinition, SoftRemoveOutputCRUDTypeDefinition, RemoveDtoCRUDTypeDefinition, RemoveArtefact, RemoveInputCRUDTypeDefinition, RemoveOutputCRUDTypeDefinition, SoftRemoveOutputAffectedRowsCRUDTypeDefinition, FindOutputRowsCRUDTypeDefinition, UpdateOutputAffectedRowsCRUDTypeDefinition, RemoveOutputAffectedRowsCRUDTypeDefinition, RecoverDtoCRUDTypeDefinition, RecoverArtefact, RecoverInputCRUDTypeDefinition, RecoverOutputCRUDTypeDefinition, RecoverInputWhereCRUDTypeDefinition, RecoverOutputAffectedRowsCRUDTypeDefinition, FindInputDtoCRUDTypeDefinition, FindOneByIdInputCRUDTypeDefinition, FindInputPaginationOptionsDto, FindOutputPaginationOptionsDto, IdInputDto, DeleteInputWhereCRUDTypeDefinition, RemoveInputWhereCRUDTypeDefinition, WithDeletedInputDto } from "@libs/library-app";
import { NewsLetterTrackLogEntityMeta as meta, NewsLetterTrackLogEntity } from "../entities/track.log.entity";
import { Directive, Field, Float, InputType, Int, IntersectionType, ObjectType, PartialType } from "@nestjs/graphql";
import { IsNotEmpty, IsNumber, IsOptional, Validate } from "class-validator";
import { FindManyOptions, FindOptionsOrder, FindOptionsWhere } from "typeorm";
import { Exclude } from "class-transformer";
import { IdOrIdsInputDto, CrudAffectedDto, UpsertOutputProcessStatusDto } from "@libs/library-app";
import { BounceTypeEnum, NewsLetterTrackLogUploadFileFieldEnum } from "../track.log.enum";
import { NewsLetterFindInputWhereDto } from "../../newsletter/dto/newsletter.dto";
import { CityFindInputWhereDto } from "apps/shared-app/src/geo/city/dto/city.dto";
import { DeviceFindInputWhereDto } from "apps/shared-app/src/master/device/dto/device.dto";
import { NewsLetterUserFindInputWhereDto } from "../../user/dto/user.dto";


/**
 * █████████████████████████████████████████████████████████████
 * ██ DO NOT CHANGE IN THIS FILE IT WILL CRASH THE APP        ██
 * █████████████████████████████████████████████████████████████
**/

/**
 * # [done] ['../entities/market.type.entity', './dto/market.type.dto'] . Hint: find [ /market.type. => and replace with ] [ /your-module. ] 
 * # [done] do not break some dependences which required this class
 * # [done] module [MarketType]
 * # [done] defination [FindInputDtoCRUDTypeDefinition]
 * # [done] defination [FindInputWhereCRUDTypeDefinition]
 * # [done] defination [FindInputSortOrderCRUDTypeDefinition]
 * # [done] defination [FindInputGroupByCRUDTypeDefinition]
 * # [done] defination [FindOutputRowsCRUDTypeDefinition]
 * # [done] defination [FindOutputCRUDTypeDefinition]
 * # [done] defination [CreateInputCRUDTypeDefinition]
 * # [done] defination [conflictResolveFields]
 * # [done] [FindOutputPagination] is imported from '@libs/library-app' (real location: /libs/library-app/src/crud/dto/standard/crud.pagination.dto)
 **/

@ObjectType({ isAbstract: true })
@Directive('@shareable')
export class NewsLetterTrackLogDto extends NewsLetterTrackLogEntity implements FindInputDtoCRUDTypeDefinition{
     /**
     * we need to transform filed data type to any because find has complex process
     * this is because every field is defined in entity with specific type which cannot be override directly dure to inhereatance
     * so creating new class in between to make sure call cannot have other filed then defined in entity
     * 
     * in this DTO we need to type cast the fields as we need fields but those will be manipulated differently
     * as we are extending the class we will have issue with the fields types so converting in any
     * this will help other dto to use the fields but they will be typed as required in them
     **/
    
     declare id?: any;
     declare nl_id?: any;
     declare nlu_id?: any;
     declare opens?: any;
     declare clicks?: any;
     declare bounces?: any;
     declare bounce_type?: any;
     declare bounce_reason?: any;
     declare unsubscribe?: any;
     declare spam?: any;
     declare device_id?: any;
     declare city_id?: any;
     declare ip?: any;
     declare created?: any;
     declare updated?: any;
     declare deleted?: any;
 
     declare fr_newsletters?: any;
     declare fr_nl_users?: any;
     declare fr_devices?: any;
     declare fr_city?: any;
}

/**
 * █████████████████████████████████████████████████████████████
 * █ FIND DTO ██████████████████████████████████████████████████
 * █████████████████████████████████████████████████████████████
**/
@ObjectType({ isAbstract: true })
@Directive('@shareable')
export class NewsLetterTrackLogFindDto extends NewsLetterTrackLogEntity implements FindDtoCRUDTypeDefinition{
    static metaname: string = `${NewsLetterTrackLogEntity?.metaname}${FindArtefact}`;
    static metadesc: string = CrudDefMetaDesc.find_metadesc;
}


// ████ FIND INPUT DTO ████████████████████████████████████████████████


@InputType()
export class NewsLetterTrackLogFindInputWhereDto extends NewsLetterTrackLogDto implements FindInputWhereCRUDTypeDefinition{
  @Field(() => FindOperatorDto, {nullable: true, description: meta?.id.desc})
  @IsOptional()
  declare id?: FindOperatorDto;    

  @Field(() => FindOperatorDto, {nullable: true, description: meta?.nl_id.desc})
  @IsOptional()
  declare nl_id?: FindOperatorDto;

  @Field(() => FindOperatorDto, {nullable: true, description: meta?.nlu_id.desc})
  @IsOptional()
  declare nlu_id?: FindOperatorDto;

  @Field(() => FindOperatorDto, {nullable: true, description: meta?.opens.desc})
  @IsOptional()
  declare opens?: FindOperatorDto;

  @Field(() => FindOperatorDto, {nullable: true, description: meta?.clicks.desc})
  @IsOptional()
  declare clicks?: FindOperatorDto;

  @Field(() => FindOperatorDto, {nullable: true, description: meta?.bounces.desc})
  @IsOptional()
  declare bounces?: FindOperatorDto;

  @Field(() => FindOperatorDto, {nullable: true, description: meta?.bounce_type.desc})
  @IsOptional()
  declare bounce_type?: FindOperatorDto;

  @Field(() => FindOperatorDto, {nullable: true, description: meta?.unsubscribe.desc})
  @IsOptional()
  declare unsubscribe?: FindOperatorDto;

  @Field(() => FindOperatorDto, {nullable: true, description: meta?.spam.desc})
  @IsOptional()
  declare spam?: FindOperatorDto;

  @Field(() => FindOperatorDto, {nullable: true, description: meta?.device_id.desc})
  @IsOptional()
  declare device_id?: FindOperatorDto;

  @Field(() => FindOperatorDto, {nullable: true, description: meta?.city_id.desc})
  @IsOptional()
  declare city_id?: FindOperatorDto;

  @Field(() => FindOperatorDto, {nullable: true, description: meta?.ip.desc})
  @IsOptional()
  declare ip?: FindOperatorDto;

  @Field(() => FindOperatorDto, {nullable: true, description: meta?.created.desc})
  @IsOptional()
  declare created?: FindOperatorDto;

  @Field(() => FindOperatorDto, {nullable: true, description: meta?.updated.desc})
  @IsOptional()
  declare updated?: FindOperatorDto;

  @Field(() => FindOperatorDto, {nullable: true, description: meta?.deleted.desc})
  @IsOptional()
  declare deleted?: FindOperatorDto; 

// ████ FR_ WHERE: INTERNAL RELATIONS WHERE ████████████████████████████████████████████████

   @Field(() => [NewsLetterFindInputWhereDto], {nullable: true, description: meta?.fr_newsletters.desc})
   @IsOptional()
   declare fr_newsletters?: NewsLetterFindInputWhereDto[];

   @Field(() => [NewsLetterUserFindInputWhereDto], {nullable: true, description: meta?.fr_nl_users.desc})
   @IsOptional()
   declare fr_nl_users?: NewsLetterUserFindInputWhereDto[];

   @Field(() => [DeviceFindInputWhereDto], {nullable: true, description: meta?.fr_devices.desc})
   @IsOptional()
   declare fr_devices?: DeviceFindInputWhereDto[]; 

   @Field(() => [CityFindInputWhereDto], {nullable: true, description: meta?.fr_city.desc})
   @IsOptional()
   declare fr_city?: CityFindInputWhereDto[]; 
}

@InputType()
export class NewsLetterTrackLogFindInputSortOrderDto implements FindOptionsOrder<NewsLetterTrackLogDto>, FindInputSortOrderCRUDTypeDefinition{
    
  @Field(() => RecordSortDirectionEnum, { nullable: true }) 
  @IsOptional()
  id?: RecordSortDirectionEnum;

  @Field(() => RecordSortDirectionEnum, { nullable: true })
  @IsOptional()
  nl_id?: RecordSortDirectionEnum;

  @Field(() => RecordSortDirectionEnum, { nullable: true })
  @IsOptional()
  nlu_id?: RecordSortDirectionEnum;

  @Field(() => RecordSortDirectionEnum, { nullable: true })
  @IsOptional()
  opens?: RecordSortDirectionEnum;

  @Field(() => RecordSortDirectionEnum, { nullable: true })
  @IsOptional()
  clicks?: RecordSortDirectionEnum;

  @Field(() => RecordSortDirectionEnum, { nullable: true })
  @IsOptional()
  bounces?: RecordSortDirectionEnum;

  @Field(() => RecordSortDirectionEnum, { nullable: true })
  @IsOptional()
  bounce_type?: RecordSortDirectionEnum;

  @Field(() => RecordSortDirectionEnum, { nullable: true })
  @IsOptional()
  unsubscribe?: RecordSortDirectionEnum;

  @Field(() => RecordSortDirectionEnum, { nullable: true })
  @IsOptional()
  spam?: RecordSortDirectionEnum;

  @Field(() => RecordSortDirectionEnum, { nullable: true })
  @IsOptional()
  device_id?: RecordSortDirectionEnum;

  @Field(() => RecordSortDirectionEnum, { nullable: true })
  @IsOptional()
  city_id?: RecordSortDirectionEnum;

  @Field(() => RecordSortDirectionEnum, { nullable: true })
  @IsOptional()
  ip?: RecordSortDirectionEnum;

  @Field(() => RecordSortDirectionEnum, { nullable: true })
  @IsOptional()
  created?: RecordSortDirectionEnum;

  @Field(() => RecordSortDirectionEnum, { nullable: true })
  @IsOptional()
  updated?: RecordSortDirectionEnum;

  @Field(() => RecordSortDirectionEnum, { nullable: true })
  @IsOptional()
  deleted?: RecordSortDirectionEnum;

}

@InputType()
export class NewsLetterTrackLogFindInputGroupByDto implements FindOptionsOrder<NewsLetterTrackLogDto>, FindInputGroupByCRUDTypeDefinition{
    
  @Field(() => Boolean, { nullable: true })
  @IsOptional()
  nl_id?: boolean;

  @Field(() => Boolean, { nullable: true })
  @IsOptional()
  nlu_id?: boolean;

  @Field(() => Boolean, { nullable: true })
  @IsOptional()
  opens?: boolean;

  @Field(() => Boolean, { nullable: true })
  @IsOptional()
  clicks?: boolean;

  @Field(() => Boolean, { nullable: true })
  @IsOptional()
  bounces?: boolean;

  @Field(() => Boolean, { nullable: true })
  @IsOptional()
  bounce_type?: boolean;

  @Field(() => Boolean, { nullable: true })
  @IsOptional()
  unsubscribe?: boolean;

  @Field(() => Boolean, { nullable: true })
  @IsOptional()
  spam?: boolean;

  @Field(() => Boolean, { nullable: true })
  @IsOptional()
  device_id?: boolean;

  @Field(() => Boolean, { nullable: true })
  @IsOptional()
  city_id?: boolean;

  @Field(() => Boolean, { nullable: true })
  @IsOptional()
  ip?: boolean;

  @Field(() => Boolean, { nullable: true })
  @IsOptional()
  created?: boolean;

  @Field(() => Boolean, { nullable: true })
  @IsOptional()
  updated?: boolean;

  @Field(() => Boolean, { nullable: true })
  @IsOptional()
  deleted?: boolean;

}

@InputType()
export class NewsLetterTrackLogFindInputDto extends IntersectionType(FindInputPaginationOptionsDto, WithDeletedInputDto) implements FindManyOptions<NewsLetterTrackLogDto>, FindInputCRUDTypeDefinition{
    // input layout design for users to perform find with various database options
  
    /**
     * Conditions to be met for the resulting set.
     * also validate the user pass only 1 operator to search for field
     */
    @Field(() => [NewsLetterTrackLogFindInputWhereDto], { nullable: true, description: CrudDefMetaDesc.find_where })
    @IsOptional()
    @Validate(OnlyOneSeachOperatorAllowed)
    declare where?: FindOptionsWhere<NewsLetterTrackLogFindInputWhereDto>[];
  
  
    /**
     * Specifies how to group the rows returned by the SELECT statement.
     */
    @Field(() => NewsLetterTrackLogFindInputGroupByDto, { nullable: true, description: CrudDefMetaDesc.find_group_by })
    @IsOptional()
    declare groupBy?: NewsLetterTrackLogFindInputGroupByDto;
  
    /**
     * Sort the result set by fields using ascending or descending order.
     */
    @Field(() => NewsLetterTrackLogFindInputSortOrderDto, { nullable: true, description: CrudDefMetaDesc.find_order })
    @IsOptional()
    declare order?: FindOptionsOrder<NewsLetterTrackLogFindInputSortOrderDto>;
}


// ████ FIND OUTPUT DTO ████████████████████████████████████████████████

@ObjectType()
@Directive('@shareable')
export class NewsLetterTrackLogFindOutputRowsDto extends NewsLetterTrackLogFindDto implements FindOutputRowsCRUDTypeDefinition{
    // this DTO will be used at many palce for output object, os make sure this is properly developed
}

@ObjectType()
@Directive('@shareable')
export class NewsLetterTrackLogFindOutputDto extends FindOutputPaginationOptionsDto implements FindOutputCRUDTypeDefinition{
    // output layout design for users to get find response

    // we assign any because iin GRAPHQL for requuest body this rows will have fields with boolean value whether to include in response or not
    // this is very crucial to understand this structure and you need to understand how graphQL works
    @Field(() => [NewsLetterTrackLogEntity], {description: CrudDefMetaDesc.find_rows})
    declare rows?: NewsLetterTrackLogEntity | NewsLetterTrackLogEntity[] | any;
}

/**
 * ██████████████████████████████████████████████████████████████████████████████████████████████████████████████████
 * █ FIND ONE BY ID DTO █████████████████████████████████████████████████████████████████████████████████████████████
 * ██████████████████████████████████████████████████████████████████████████████████████████████████████████████████
**/

export class NewsLetterTrackLogFindOneByIdDto extends NewsLetterTrackLogEntity implements FindDtoCRUDTypeDefinition{
    static metaname: string = `${NewsLetterTrackLogEntity.metaname}${FindOneByIdArtefact}`;
    static metadesc: string = CrudDefMetaDesc.findOneById_metadesc;
}

// ████ FIND ONE BY ID INPUT DTO ████████████████████████████████████████████████

@InputType()
export class NewsLetterTrackLogFindOneByIdInputDto extends IntersectionType(IdInputDto, WithDeletedInputDto) implements FindOneByIdInputCRUDTypeDefinition{

}

/**
 * █████████████████████████████████████████████████████████████
 * █ CREATE DTO ████████████████████████████████████████████████
 * █████████████████████████████████████████████████████████████
**/

export class NewsLetterTrackLogCreateDto extends NewsLetterTrackLogEntity implements CreateDtoCRUDTypeDefinition {
    static metaname: string = `${NewsLetterTrackLogEntity.metaname}${CreateArtefact}`;
    static metadesc: string = CrudDefMetaDesc.create_metadesc;
}
// ████ CREATE INPUT DTO ████████████████████████████████████████████████

@InputType()
export class NewsLetterTrackLogCreateInputDto extends  NewsLetterTrackLogCreateDto implements CreateInputCRUDTypeDefinition {

  @Field(() => Int, {nullable: false, description: meta?.nl_id.desc})
  declare nl_id: number;

  @Field(() => Int, {nullable: false, description: meta?.nlu_id.desc}) 
  declare nlu_id: number;

  @Field(() => Int, {nullable: false, description: meta?.opens.desc})
  declare opens: number;

  @Field(() => Int, {nullable: false, description: meta?.clicks.desc}) 
  declare clicks: number;

  @Field(() => Int, {nullable: false, description: meta?.bounces.desc})
  declare bounces: number;

  @Field(() => BounceTypeEnum, {nullable: false, description: meta?.bounce_type.desc})
  declare bounce_type: number;

  @Field(() => String, {nullable: true, description: meta?.bounce_reason.desc})
  declare bounce_reason?: string;

  @Field(() => DateTime, {nullable: true, description: meta?.unsubscribe.desc})
  declare unsubscribe?: Date;

  @Field(() => DateTime, {nullable: true, description: meta?.spam.desc})
  declare spam?: Date;

  @Field(() => Int, {nullable: false, description: meta?.device_id.desc})
  declare device_id: number;

  @Field(() => Int, {nullable: false, description: meta?.city_id.desc})
  declare city_id: number;

  @Field(() => String, {nullable: false, description: meta?.ip.desc})
  declare ip: string; 
}

// ████ CREATE OUTPUT DTO ████████████████████████████████████████████████

@ObjectType()
@Directive('@shareable')
export class NewsLetterTrackLogCreateOutputDto extends NewsLetterTrackLogFindOutputRowsDto implements CreateOutputCRUDTypeDefinition {
    /**
     * avoiding redundant code
     * considering whatever FindOutputRows return, same apply to CreateOutput so extending class
     * just add what is new or different for CreateOutput, that means it's 100% customisable
     * you can also remove extends *FindOutputRows and define entire custom dto here if needed 
     **/
}

/**
 * █████████████████████████████████████████████████████████████
 * █ UPDATE DTO ████████████████████████████████████████████████
 * █████████████████████████████████████████████████████████████
**/


export class NewsLetterTrackLogUpdateDto extends NewsLetterTrackLogDto implements UpdateDtoCRUDTypeDefinition{
    static metaname: string = `${NewsLetterTrackLogEntity.metaname}${UpdateArtefact}`;
    static metadesc: string = CrudDefMetaDesc.update_metadesc;
}

// ████ UPDATE INPUT DTO ████████████████████████████████████████████████

@InputType()
export class NewsLetterTrackLogUpdateInputWhereDto extends NewsLetterTrackLogFindInputWhereDto implements UpdateInputWhereCRUDTypeDefinition{
    /**
     * avoiding redundant code
     * considering whatever FindInputWhere ask for input, same apply to UpdateInputWhere so extending class
     * just add what is new or different for UpdateInputWhere, that means it's 100% customisable
     * you can also remove extends *FindInputWhere and define entire custom dto here if needed 
     **/
}

@InputType()
export class NewsLetterTrackLogUpdateInputSetsDto extends PartialType(NewsLetterTrackLogCreateInputDto) implements UpdateInputSetsCRUDTypeDefinition {
    /**
     * we extends using PartialType() because update has all insert fileds but instead of required it is options
     * PartialType() do that for us so we don't have to write duplicate code
     * 
     * avoiding redundant code
     * considering whatever CreateInput ask for input, same apply to UpdateInputSets so extending class
     * just add what is new or different for UpdateInputSets, that means it's 100% customisable
     * you can also remove extends *CreateInput and define entire custom dto here if needed 
     **/
}

@InputType()
export class NewsLetterTrackLogUpdateInputDto implements UpdateInputCRUDTypeDefinition{
    // input layout design for users to perform update with various database options
  
    /**
     * Conditions to be met for the resulting set.
     * also validate the user pass only 1 operator to search for field
     */
    @Field(() => [NewsLetterTrackLogUpdateInputWhereDto], { nullable: false, description: CrudDefMetaDesc.update_where })
    @IsNotEmpty()
    @Validate(OnlyOneSeachOperatorAllowed)
    where!: FindOptionsWhere<NewsLetterTrackLogUpdateInputWhereDto>[];

    /**
     * What to set for update
     * basically fields list of update
     */
    @Field(() => NewsLetterTrackLogUpdateInputSetsDto, { nullable: false, description: CrudDefMetaDesc.update_sets })
    @IsNotEmpty()
    sets!: NewsLetterTrackLogUpdateInputSetsDto

    /**
     * Set to true if you want to include soft deleted records in result set.
     * Note: soft deleted records are not included by default.
     */
    @Exclude()
    withDeleted: boolean = false;
}

// ████ UPDATE OUTPUT DTO ████████████████████████████████████████████████

@ObjectType()
@Directive('@shareable')
export class NewsLetterTrackLogUpdateOutputAffectedRowsDto extends NewsLetterTrackLogFindOutputRowsDto implements UpdateOutputAffectedRowsCRUDTypeDefinition{
    /**
     * avoiding redundant code
     * considering whatever FindOutputRows return, same apply to UpdateOutputAffectedRows so extending class
     * just add what is new or different for UpdateOutputAffectedRows, that means it's 100% customisable
     * you can also remove extends *FindOutputRows and define entire custom dto here if needed 
     **/
}

@ObjectType()
@Directive('@shareable')
export class NewsLetterTrackLogUpdateOutputDto extends CrudAffectedDto implements UpdateOutputCRUDTypeDefinition{
  @Field(() => [NewsLetterTrackLogEntity], {description: CrudDefMetaDesc.update_affected_rows}) 
  declare affectedRows?: NewsLetterTrackLogEntity[] | any; 
}


/**
 * █████████████████████████████████████████████████████████████
 * █ SOFT DELETE DTO ███████████████████████████████████████████
 * █████████████████████████████████████████████████████████████
**/
// this operation run directly withouth checking the data if exist or not, so it's quick but do not provide more information about operation

// ████ SOFT DELETE INPUT DTO ████████████████████████████████████████████████
export class NewsLetterTrackLogSoftDeleteDto extends NewsLetterTrackLogEntity implements SoftDeleteDtoCRUDTypeDefinition{
  static metaname: string = `${NewsLetterTrackLogEntity.metaname}${SoftDeleteArtefact}`;
  static metadesc: string = CrudDefMetaDesc.softDelete_metadesc;
}

@InputType()
export class NewsLetterTrackLogSoftDeleteInputWhereDto extends NewsLetterTrackLogFindInputWhereDto implements SoftDeleteInputWhereCRUDTypeDefinition{
  /**
   * avoiding redundant code
   * considering whatever FindInputWhere ask for input, same apply to SoftDeleteInputWhere so extending class
   * just add what is new or different for SoftDeleteInputWhere, that means it's 100% customisable
   * you can also remove extends *FindInputWhere and define entire custom dto here if needed 
   **/
}

@InputType()
export class NewsLetterTrackLogSoftDeleteInputDto implements SoftDeleteInputCRUDTypeDefinition{
  @Field(() => [NewsLetterTrackLogSoftDeleteInputWhereDto], {nullable: true, description: CrudDefMetaDesc.softDelete_where})
  @Validate(OnlyOneSeachOperatorAllowed)
  where?: FindOptionsWhere<NewsLetterTrackLogSoftDeleteInputWhereDto>[];
}


// ████ SOFT DELETE OUTPUT DTO ████████████████████████████████████████████████

@ObjectType()
@Directive('@shareable')
export class NewsLetterTrackLogSoftDeleteOutputDto extends CrudAffectedDto implements SoftDeleteOutputCRUDTypeDefinition{
  /**
   * avoiding redundant code
   * considering whatever AffectedDto return, same apply to SoftDeleteOutput so extending class
   * just add what is new or different for SoftDeleteOutput, that means it's 100% customisable
   * you can also remove extends AffectedDto and define entire custom dto here if needed 
   **/
}

/**
 * █████████████████████████████████████████████████████████████
 * █ DELETE DTO ████████████████████████████████████████████████
 * █████████████████████████████████████████████████████████████
**/
// this operation run directly withouth checking the data if exist or not, so it's quick but do not provide more information about operation

export class NewsLetterTrackLogDeleteDto extends NewsLetterTrackLogEntity implements DeleteDtoCRUDTypeDefinition{
  static metaname: string = `${NewsLetterTrackLogEntity.metaname}${DeleteArtefact}`;
  static metadesc: string = CrudDefMetaDesc.delete_metadesc;
}

// ████ DELETE INPUT DTO ████████████████████████████████████████████████

@InputType()
export class NewsLetterTrackLogDeleteInputWhereDto extends NewsLetterTrackLogFindInputWhereDto implements DeleteInputWhereCRUDTypeDefinition{
  /**
   * avoiding redundant code
   * considering whatever FindInputWhere ask for input, same apply to SoftDeleteInputWhere so extending class
   * just add what is new or different for SoftDeleteInputWhere, that means it's 100% customisable
   * you can also remove extends *FindInputWhere and define entire custom dto here if needed 
   **/
}

@InputType()
export class NewsLetterTrackLogDeleteInputDto implements DeleteInputCRUDTypeDefinition{
  @Field(() => [NewsLetterTrackLogDeleteInputWhereDto], {nullable: true, description: CrudDefMetaDesc.delete_where})
  @Validate(OnlyOneSeachOperatorAllowed)
  where?: FindOptionsWhere<NewsLetterTrackLogDeleteInputWhereDto>[];
}


// ████ DELETE OUTPUT DTO ████████████████████████████████████████████████

@ObjectType()
@Directive('@shareable')
export class NewsLetterTrackLogDeleteOutputDto extends CrudAffectedDto implements DeleteOutputCRUDTypeDefinition{
  /**
   * avoiding redundant code
   * considering whatever AffectedDto return, same apply to DeleteOutput so extending class
   * just add what is new or different for DeleteOutput, that means it's 100% customisable
   * you can also remove extends AffectedDto and define entire custom dto here if needed 
   **/
}

/**
 * █████████████████████████████████████████████████████████████
 * █ RESTORE DTO ███████████████████████████████████████████████
 * █████████████████████████████████████████████████████████████
**/
// this operation run directly withouth checking the data if exist or not, so it's quick but do not provide more information about operation

export class NewsLetterTrackLogRestoreDto extends NewsLetterTrackLogEntity implements RestoreDtoCRUDTypeDefinition{
    static metaname: string = `${NewsLetterTrackLogEntity.metaname}${RestoreArtefact}`;
    static metadesc: string = CrudDefMetaDesc.restore_metadesc;
}

// ████ RESTORE INPUT DTO ██████████████████████████████████████████████████████

@InputType()
export class NewsLetterTrackLogRestoreInputWhereDto extends NewsLetterTrackLogFindInputWhereDto implements RestoreInputWhereCRUDTypeDefinition{
  /**
   * avoiding redundant code
   * considering whatever FindInputWhere ask for input, same apply to SoftDeleteInputWhere so extending class
   * just add what is new or different for SoftDeleteInputWhere, that means it's 100% customisable
   * you can also remove extends *FindInputWhere and define entire custom dto here if needed 
   **/
}

@InputType()
export class NewsLetterTrackLogRestoreInputDto implements RestoreInputCRUDTypeDefinition{
  @Field(() => [NewsLetterTrackLogRestoreInputWhereDto], {nullable: true, description: CrudDefMetaDesc.restore_where})
  @Validate(OnlyOneSeachOperatorAllowed)
  where?: FindOptionsWhere<NewsLetterTrackLogRestoreInputWhereDto>[];
}
  
// ████ RESTORE OUTPUT DTO ██████████████████████████████████████████████████████
  
@ObjectType()
@Directive('@shareable')
export class NewsLetterTrackLogRestoreOutputDto extends CrudAffectedDto implements RestoreOutputCRUDTypeDefinition{
  /**
   * avoiding redundant code
   * considering whatever AffectedDto return, same apply to RestoreOutput so extending class
   * just add what is new or different for RestoreOutput, that means it's 100% customisable
   * you can also remove extends AffectedDto and define entire custom dto here if needed 
   **/    
}


/**
 * █████████████████████████████████████████████████████████████
 * █ UPSERT DTO ████████████████████████████████████████████████
 * █████████████████████████████████████████████████████████████
**/

export class NewsLetterTrackLogUpsertDto extends NewsLetterTrackLogEntity implements UpsertDtoCRUDTypeDefinition{
  static metaname: string = `${NewsLetterTrackLogEntity.metaname}${UpsertArtefact}`;
  static metadesc: string = CrudDefMetaDesc.upsert_metadesc;
}

// ████ UPSERT INPUT DTO ██████████████████████████████████████████████████████

@InputType()
export class NewsLetterTrackLogUpsertInputDto extends NewsLetterTrackLogCreateInputDto implements UpsertInputCRUDTypeDefinition{
    @Field(() => Int, {nullable: true, description: `${meta?.id.desc} ${meta?.id.validation.isOptional}`})
    @IsOptional({message: `${meta?.id.validation.isOptional}`})
    declare id?: number;

    /**
     * as upsert work with inser and update based on conflict
     * we need to set whcih field needs to be used to understand conflict by upset
     * that means if record is duplicated then which field will determine whther it is already exist or not
     * so set it to unique field in entity
     * this is known as `conflictPaths` in TypeORM qRunner
     * 
     * this can be set in .service.ts but to make it easy we set it in dto
     * .service.ts file holds complex logic
     **/
    @Exclude()
    static conflictResolveFields: (keyof NewsLetterTrackLogUpsertInputDto)[] = ['id'];
}

// ████ UPSERT OUTPUT DTO ██████████████████████████████████████████████████████

@ObjectType()
@Directive('@shareable')
export class NewsLetterTrackLogUpsertOutputDto extends IntersectionType(NewsLetterTrackLogCreateOutputDto, UpsertOutputProcessStatusDto) implements UpsertOutputCRUDTypeDefinition{ 
 
}

/**
 * █████████████████████████████████████████████████████████████
 * █ SOFT REMOVE DTO ███████████████████████████████████████████
 * █████████████████████████████████████████████████████████████
**/
// unlike soft delete, this operation first get the data from database and after run the operation, so it's complex but provide more and clear information about operation

// ████ SOFT REMOVE INPUT DTO ████████████████████████████████████████████████
export class NewsLetterTrackLogSoftRemoveDto extends NewsLetterTrackLogEntity implements SoftRemoveDtoCRUDTypeDefinition{
  static metaname: string = `${NewsLetterTrackLogEntity.metaname}${SoftRemoveArtefact}`;
  static metadesc: string = CrudDefMetaDesc.softRemove_metadesc;
}

@InputType()
export class NewsLetterTrackLogSoftRemoveInputWhereDto extends NewsLetterTrackLogFindInputWhereDto implements SoftRemoveInputWhereCRUDTypeDefinition{
  /**
   * avoiding redundant code
   * considering whatever FindInputWhere ask for input, same apply to SoftRemoveInputWhere so extending class
   * just add what is new or different for SoftRemoveInputWhere, that means it's 100% customisable
   * you can also remove extends *FindInputWhere and define entire custom dto here if needed 
   **/
}

@InputType()
export class NewsLetterTrackLogSoftRemoveInputDto implements SoftRemoveInputCRUDTypeDefinition{
  @Field(() => [NewsLetterTrackLogSoftRemoveInputWhereDto], {nullable: true, description: CrudDefMetaDesc.softRemove_where})
  @Validate(OnlyOneSeachOperatorAllowed)
  where?: FindOptionsWhere<NewsLetterTrackLogSoftRemoveInputWhereDto>[];
}


// ████ SOFT REMOVE OUTPUT DTO ████████████████████████████████████████████████

@ObjectType()
@Directive('@shareable')
export class NewsLetterTrackLogSoftRemoveOutputAffectedRowsDto extends NewsLetterTrackLogFindOutputRowsDto implements SoftRemoveOutputAffectedRowsCRUDTypeDefinition{
  /**
   * avoiding redundant code
   * considering whatever FindOutputRows return, same apply to SoftRemoveOutputAffectedRows so extending class
   * just add what is new or different for SoftRemoveOutputAffectedRows, that means it's 100% customisable
   * you can also remove extends FindOutputRows and define entire custom dto here if needed 
   **/
}
@ObjectType()
@Directive('@shareable')
export class NewsLetterTrackLogSoftRemoveOutputDto extends CrudAffectedDto implements SoftRemoveOutputCRUDTypeDefinition{
  /**
   * avoiding redundant code
   * considering whatever AffectedDto return, same apply to SoftRemoveOutput so extending class
   * just add what is new or different for SoftRemoveOutput, that means it's 100% customisable
   * you can also remove extends AffectedDto and define entire custom dto here if needed 
   **/

  @Field(() => [NewsLetterTrackLogEntity]) 
  declare affectedRows?: NewsLetterTrackLogEntity[] | any
}

/**
 * █████████████████████████████████████████████████████████████
 * █ REMOVE DTO ████████████████████████████████████████████████
 * █████████████████████████████████████████████████████████████
**/
// unlike soft delete, this operation first get the data from database and after run the operation, so it's complex but provide more and clear information about operation

export class NewsLetterTrackLogRemoveDto extends NewsLetterTrackLogEntity implements RemoveDtoCRUDTypeDefinition{
  static metaname: string = `${NewsLetterTrackLogEntity.metaname}${RemoveArtefact}`;
  static metadesc: string = CrudDefMetaDesc.remove_metadesc;
}

// ████ REMOVE INPUT DTO ████████████████████████████████████████████████

@InputType()
export class NewsLetterTrackLogRemoveInputWhereDto extends NewsLetterTrackLogFindInputWhereDto implements RemoveInputWhereCRUDTypeDefinition{
  /**
   * avoiding redundant code
   * considering whatever FindInputWhere ask for input, same apply to SoftRemoveInputWhere so extending class
   * just add what is new or different for SoftRemoveInputWhere, that means it's 100% customisable
   * you can also remove extends *FindInputWhere and define entire custom dto here if needed 
   **/
}

@InputType()
export class NewsLetterTrackLogRemoveInputDto implements RemoveInputCRUDTypeDefinition{
  @Field(() => [NewsLetterTrackLogRemoveInputWhereDto], {nullable: true, description: CrudDefMetaDesc.remove_where})
  @Validate(OnlyOneSeachOperatorAllowed)
  where?: FindOptionsWhere<NewsLetterTrackLogRemoveInputWhereDto>[];
}

// ████ REMOVE OUTPUT DTO ████████████████████████████████████████████████

@ObjectType()
@Directive('@shareable')
export class NewsLetterTrackLogRemoveOutputAffectedRowsDto extends NewsLetterTrackLogFindOutputRowsDto implements RemoveOutputAffectedRowsCRUDTypeDefinition{
  /**
   * avoiding redundant code
   * considering whatever FindOutputRows return, same apply to RemoveOutputAffectedRows so extending class
   * just add what is new or different for RemoveOutputAffectedRows, that means it's 100% customisable
   * you can also remove extends FindOutputRows and define entire custom dto here if needed 
   **/
}
@ObjectType()
@Directive('@shareable')
export class NewsLetterTrackLogRemoveOutputDto extends CrudAffectedDto implements RemoveOutputCRUDTypeDefinition{
  /**
   * avoiding redundant code
   * considering whatever AffectedDto return, same apply to RemoveOutput so extending class
   * just add what is new or different for RemoveOutput, that means it's 100% customisable
   * you can also remove extends AffectedDto and define entire custom dto here if needed 
   **/

  @Field(() => [NewsLetterTrackLogEntity]) 
  declare affectedRows?: NewsLetterTrackLogEntity[] | any;
}

/**
 * █████████████████████████████████████████████████████████████
 * █ RECOVER DTO ████████████████████████████████████████████████
 * █████████████████████████████████████████████████████████████
**/
// unlike soft delete, this operation first get the data from database and after run the operation, so it's complex but provide more and clear information about operation

export class NewsLetterTrackLogRecoverDto extends NewsLetterTrackLogEntity implements RecoverDtoCRUDTypeDefinition{
  static metaname: string = `${NewsLetterTrackLogEntity.metaname}${RecoverArtefact}`;
  static metadesc: string = CrudDefMetaDesc.recover_metadesc;
}

// ████ RECOVER INPUT DTO ██████████████████████████████████████████████████████

@InputType()
export class NewsLetterTrackLogRecoverInputWhereDto extends NewsLetterTrackLogFindInputWhereDto implements RecoverInputWhereCRUDTypeDefinition{
/**
 * avoiding redundant code
 * considering whatever FindInputWhere ask for input, same apply to SoftDeleteInputWhere so extending class
 * just add what is new or different for SoftDeleteInputWhere, that means it's 100% customisable
 * you can also remove extends *FindInputWhere and define entire custom dto here if needed 
 **/
}

@InputType()
export class NewsLetterTrackLogRecoverInputDto implements RecoverInputCRUDTypeDefinition{
  @Field(() => [NewsLetterTrackLogRecoverInputWhereDto], {nullable: true, description: CrudDefMetaDesc.recover_where})
  @Validate(OnlyOneSeachOperatorAllowed)
  where?: FindOptionsWhere<NewsLetterTrackLogRecoverInputWhereDto>[];
}

// ████ RECOVER OUTPUT DTO ██████████████████████████████████████████████████████

@ObjectType()
@Directive('@shareable')
export class NewsLetterTrackLogRecoverOutputAffectedRowsDto extends NewsLetterTrackLogFindOutputRowsDto implements RecoverOutputAffectedRowsCRUDTypeDefinition{
  /**
   * avoiding redundant code
   * considering whatever FindOutputRows return, same apply to RecoverOutputAffectedRows so extending class
   * just add what is new or different for RecoverOutputAffectedRows, that means it's 100% customisable
   * you can also remove extends FindOutputRows and define entire custom dto here if needed 
   **/
}

@ObjectType()
@Directive('@shareable')
export class NewsLetterTrackLogRecoverOutputDto extends CrudAffectedDto implements RecoverOutputCRUDTypeDefinition{
  /**
   * avoiding redundant code
   * considering whatever AffectedDto return, same apply to RecoverOutput so extending class
   * just add what is new or different for RecoverOutput, that means it's 100% customisable
   * you can also remove extends AffectedDto and define entire custom dto here if needed 
   **/

  @Field(() => [NewsLetterTrackLogEntity]) 
  declare affectedRows?: NewsLetterTrackLogEntity[] | any;
}

/**
 * █████████████████████████████████████████████████████████████
 * █ UPLOAD DTO ████████████████████████████████████████████████
 * █████████████████████████████████████████████████████████████
**/

export class NewsLetterTrackLogUploadDto extends NewsLetterTrackLogEntity implements UploadDtoCRUDTypeDefinition {
  static metaname: string = `${NewsLetterTrackLogEntity?.metaname}${UploadArtefact}`;
  static metadesc: string = CrudDefMetaDesc.upload_metadesc;
}

// ████ UPLOAD REF TYPE DTO ████████████████████████████████████████████████

@InputType()
export class UploadFileFieldInputDto {
@Field(() => NewsLetterTrackLogUploadFileFieldEnum, {nullable: false, description: CrudDefMetaDesc.upload_file_field})
@IsNotEmpty()
file_field!: NewsLetterTrackLogUploadFileFieldEnum;
}

@ObjectType()
@Directive('@shareable')
export class UploadFileFieldOutputDto extends PartialType(UploadFileFieldInputDto) {

}

// ████ UPLOAD INPUT DTO ████████████████████████████████████████████████
@InputType()
export class NewsLetterTrackLogUploadInputDto extends IntersectionType(UploadFileFieldInputDto, UploadInputDto) implements UploadInputArtefactCRUDTypeDefinition {

}

// ████ UPLOAD OUTPUT DTO ███████████████████████████████████████████████
@ObjectType()
@Directive('@shareable')
export class NewsLetterTrackLogUploadOutputDto extends IntersectionType(UploadFileFieldOutputDto, UploadOutputDto) implements UploadOutputArtefactCRUDTypeDefinition {

}

/**
* █████████████████████████████████████████████████████████████
* █ UPLOAD DELETE DTO █████████████████████████████████████████
* █████████████████████████████████████████████████████████████
**/

export class NewsLetterTrackLogUploadDeleteDto extends NewsLetterTrackLogEntity implements UploadDeleteDtoCRUDTypeDefinition {
static metaname: string = `${NewsLetterTrackLogEntity?.metaname}${UploadDeleteArtefact}`;
static metadesc: string = CrudDefMetaDesc.upload_delete_metadesc;
}

// ████ UPLOAD DELETE INPUT DTO ████████████████████████████████████████████████
@InputType()
export class NewsLetterTrackLogUploadDeleteInputDto extends IntersectionType(UploadFileFieldInputDto, UploadDeleteInputDto) implements UploadDeleteInputArtefactCRUDTypeDefinition {

}

// ████ UPLOAD DELETE OUTPUT DTO ███████████████████████████████████████████████
@ObjectType()
@Directive('@shareable')
export class NewsLetterTrackLogUploadDeleteOutputDto extends IntersectionType(UploadFileFieldOutputDto, UploadDeleteOutputDto) implements UploadDeleteOutputArtefactCRUDTypeDefinition {

}