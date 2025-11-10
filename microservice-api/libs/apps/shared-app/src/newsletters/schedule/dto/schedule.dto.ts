import { UploadDeleteInputDto, UploadDeleteOutputDto, UploadInputDto, UploadOutputDto, UploadArtefact, UploadDtoCRUDTypeDefinition, UploadInputArtefactCRUDTypeDefinition, UploadOutputArtefactCRUDTypeDefinition, UploadDeleteArtefact, UploadDeleteDtoCRUDTypeDefinition, UploadDeleteInputArtefactCRUDTypeDefinition, UploadDeleteOutputArtefactCRUDTypeDefinition, CreateArtefact, CreateDtoCRUDTypeDefinition, CreateInputCRUDTypeDefinition, CreateOutputCRUDTypeDefinition, CrudDefMetaDesc, DateTime, DeleteArtefact, DeleteDtoCRUDTypeDefinition, DeleteInputCRUDTypeDefinition, DeleteOutputCRUDTypeDefinition, FindArtefact, FindDtoCRUDTypeDefinition, FindInputGroupByCRUDTypeDefinition, FindInputSortOrderCRUDTypeDefinition, FindInputCRUDTypeDefinition, FindInputWhereCRUDTypeDefinition, FindOneByIdArtefact, FindOperatorDto, FindOutputPaginationDto, FindOutputCRUDTypeDefinition, OnlyOneSeachOperatorAllowed, RecordSortDirectionEnum, RestoreArtefact, RestoreDtoCRUDTypeDefinition, RestoreInputCRUDTypeDefinition, SoftDeleteArtefact, SoftDeleteDtoCRUDTypeDefinition, SoftDeleteInputCRUDTypeDefinition, SoftDeleteOutputCRUDTypeDefinition, UpdateArtefact, UpdateDtoCRUDTypeDefinition, UpdateInputSetsCRUDTypeDefinition, UpdateInputCRUDTypeDefinition, UpdateInputWhereCRUDTypeDefinition, UpdateOutputCRUDTypeDefinition, SoftDeleteInputWhereCRUDTypeDefinition, RestoreInputWhereCRUDTypeDefinition, RestoreOutputCRUDTypeDefinition, UpsertDtoCRUDTypeDefinition, UpsertArtefact, UpsertInputCRUDTypeDefinition, UpsertOutputCRUDTypeDefinition, UpsertStatusEnum, SoftRemoveDtoCRUDTypeDefinition, SoftRemoveArtefact, SoftRemoveInputWhereCRUDTypeDefinition, SoftRemoveInputCRUDTypeDefinition, SoftRemoveOutputCRUDTypeDefinition, RemoveDtoCRUDTypeDefinition, RemoveArtefact, RemoveInputCRUDTypeDefinition, RemoveOutputCRUDTypeDefinition, SoftRemoveOutputAffectedRowsCRUDTypeDefinition, FindOutputRowsCRUDTypeDefinition, UpdateOutputAffectedRowsCRUDTypeDefinition, RemoveOutputAffectedRowsCRUDTypeDefinition, RecoverDtoCRUDTypeDefinition, RecoverArtefact, RecoverInputCRUDTypeDefinition, RecoverOutputCRUDTypeDefinition, RecoverInputWhereCRUDTypeDefinition, RecoverOutputAffectedRowsCRUDTypeDefinition, FindInputDtoCRUDTypeDefinition, FindOneByIdInputCRUDTypeDefinition, FindInputPaginationOptionsDto, FindOutputPaginationOptionsDto, IdInputDto, DeleteInputWhereCRUDTypeDefinition, RemoveInputWhereCRUDTypeDefinition, WithDeletedInputDto } from "@libs/library-app";
import { NewsLetterScheduleEntityMeta as meta, NewsLetterScheduleEntity } from "../entities/schedule.entity";
import { Directive, Field, Float, InputType, Int, IntersectionType, ObjectType, PartialType } from "@nestjs/graphql";
import { IsNotEmpty, IsNumber, IsOptional, Validate } from "class-validator";
import { FindManyOptions, FindOptionsOrder, FindOptionsWhere } from "typeorm";
import { Exclude } from "class-transformer";
import { IdOrIdsInputDto, CrudAffectedDto, UpsertOutputProcessStatusDto } from "@libs/library-app";
import { NewsLetterScheduleUploadFileFieldEnum } from "../schedule.enum";
import { NewsLetterFindInputWhereDto } from "../../newsletter/dto/newsletter.dto";
import { UserFindInputWhereDto } from "apps/shared-app/src/folk/user/dto/user.dto";
import { UserAuthorisationFindInputWhereDto } from "apps/shared-app/src/folk/user-authorisation/dto/user.authorisation.dto";
import { NewsLetterUserFindInputWhereDto } from "../../user/dto/user.dto";
import { WorkStatusFindInputWhereDto } from "apps/shared-app/src/master/work-status/dto/work.status.dto";


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
export class NewsLetterScheduleDto extends NewsLetterScheduleEntity implements FindInputDtoCRUDTypeDefinition{
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
     declare scheduled?: any;
     declare total_record?: any;
     declare sent_last_rec_no?: any;
     declare completed?: any;
     declare wrkstatus_id?: any;
     declare approval_wrkstatus_id?: any;
     declare created_u_id?: any;
     declare created_ar_id?: any;
     declare active?: any;
     declare created?: any;
     declare updated?: any;
     declare deleted?: any;

     declare fr_newsletters?: any;
     declare fr_users?: any;
     declare fr_authorization_roles?: any;
     declare fr_work_status?:any;
     declare fr_approval_wrkstatus?:any;
     declare fr_nl_user?:any;
}

/**
 * █████████████████████████████████████████████████████████████
 * █ FIND DTO ██████████████████████████████████████████████████
 * █████████████████████████████████████████████████████████████
**/
@ObjectType({ isAbstract: true })
@Directive('@shareable')
export class NewsLetterScheduleFindDto extends NewsLetterScheduleEntity implements FindDtoCRUDTypeDefinition{
    static metaname: string = `${NewsLetterScheduleEntity?.metaname}${FindArtefact}`;
    static metadesc: string = CrudDefMetaDesc.find_metadesc;
}


// ████ FIND INPUT DTO ████████████████████████████████████████████████


@InputType()
export class NewsLetterScheduleFindInputWhereDto extends NewsLetterScheduleDto implements FindInputWhereCRUDTypeDefinition{
  @Field(() => FindOperatorDto, {nullable: true, description: meta?.id.desc})
  @IsOptional()
  declare id?: FindOperatorDto;    

  @Field(() => FindOperatorDto, {nullable: true, description: meta?.nl_id.desc})
  @IsOptional()
  declare nl_id?: FindOperatorDto;

  @Field(() => FindOperatorDto, {nullable: true, description: meta?.scheduled.desc})
  @IsOptional()
  declare scheduled?: FindOperatorDto;

  @Field(() => FindOperatorDto, {nullable: true, description: meta?.total_record.desc})
  @IsOptional()
  declare total_record?: FindOperatorDto;

  @Field(() => FindOperatorDto, {nullable: true, description: meta?.completed.desc})
  @IsOptional()
  declare completed?: FindOperatorDto;

  @Field(() => FindOperatorDto, {nullable: true, description: meta?.wrkstatus_id.desc})
  @IsOptional()
  declare wrkstatus_id?: FindOperatorDto;

  @Field(() => FindOperatorDto, {nullable: true, description: meta?.approval_wrkstatus_id.desc})
  @IsOptional()
  declare approval_wrkstatus_id?: FindOperatorDto;

  @Field(() => FindOperatorDto, {nullable: true, description: meta?.created_u_id.desc})
  @IsOptional()
  declare created_u_id?: FindOperatorDto;

  @Field(() => FindOperatorDto, {nullable: true, description: meta?.created_ar_id.desc})
  @IsOptional()
  declare created_ar_id?: FindOperatorDto;

  @Field(() => FindOperatorDto, {nullable: true, description: meta?.active.desc})
  @IsOptional()
  declare active?: FindOperatorDto;

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

    @Field(() => [UserFindInputWhereDto], {nullable: true, description: meta?.fr_users.desc})
    @IsOptional()
    declare fr_users?: UserFindInputWhereDto[];

    @Field(() => [UserAuthorisationFindInputWhereDto], {nullable: true, description: meta?.fr_authorization_roles.desc})
    @IsOptional()
    declare fr_authorization_roles?: UserAuthorisationFindInputWhereDto[]; 

    @Field(() => [WorkStatusFindInputWhereDto], {nullable: true, description: meta?.fr_work_status.desc})
    @IsOptional()
    declare fr_work_status?: WorkStatusFindInputWhereDto[]; 

    @Field(() => [WorkStatusFindInputWhereDto], {nullable: true, description: meta?.fr_approval_wrkstatus.desc})
    @IsOptional()
    declare fr_approval_wrkstatus?: WorkStatusFindInputWhereDto[]; 

    @Field(() => [NewsLetterUserFindInputWhereDto], {nullable: true, description: meta?.fr_nl_user.desc})
    @IsOptional()
    declare fr_nl_user?: NewsLetterUserFindInputWhereDto[]; 
}

@InputType()
export class NewsLetterScheduleFindInputSortOrderDto implements FindOptionsOrder<NewsLetterScheduleDto>, FindInputSortOrderCRUDTypeDefinition{
    
  @Field(() => RecordSortDirectionEnum, { nullable: true }) 
  @IsOptional()
  id?: RecordSortDirectionEnum;

  @Field(() => RecordSortDirectionEnum, { nullable: true })
  @IsOptional()
  nl_id?: RecordSortDirectionEnum;

  @Field(() => RecordSortDirectionEnum, { nullable: true })
  @IsOptional()
  scheduled?: RecordSortDirectionEnum;

  @Field(() => RecordSortDirectionEnum, { nullable: true })
  @IsOptional()
  total_record?: RecordSortDirectionEnum;

  @Field(() => RecordSortDirectionEnum, { nullable: true })
  @IsOptional()
  completed?: RecordSortDirectionEnum;

  @Field(() => RecordSortDirectionEnum, { nullable: true })
  @IsOptional()
  wrkstatus_id?: RecordSortDirectionEnum;

  @Field(() => RecordSortDirectionEnum, { nullable: true })
  @IsOptional()
  approval_wrkstatus_id?: RecordSortDirectionEnum;

  @Field(() => RecordSortDirectionEnum, { nullable: true })
  @IsOptional()
  created_u_id?: RecordSortDirectionEnum;

  @Field(() => RecordSortDirectionEnum, { nullable: true })
  @IsOptional()
  created_ar_id?: RecordSortDirectionEnum;

  @Field(() => RecordSortDirectionEnum, { nullable: true })
  @IsOptional()
  active?: RecordSortDirectionEnum;

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
export class NewsLetterScheduleFindInputGroupByDto implements FindOptionsOrder<NewsLetterScheduleDto>, FindInputGroupByCRUDTypeDefinition{
    
  @Field(() => Boolean, { nullable: true })
  @IsOptional()
  nl_id?: boolean;

  @Field(() => Boolean, { nullable: true })
  @IsOptional()
  scheduled?: boolean;

  @Field(() => Boolean, { nullable: true })
  @IsOptional()
  total_record?: boolean;

  @Field(() => Boolean, { nullable: true })
  @IsOptional()
  completed?: boolean;

  @Field(() => Boolean, { nullable: true })
  @IsOptional()
  wrkstatus_id?: boolean;

  @Field(() => Boolean, { nullable: true })
  @IsOptional()
  approval_wrkstatus_id?: boolean;

  @Field(() => Boolean, { nullable: true })
  @IsOptional()
  created_u_id?: boolean;

  @Field(() => Boolean, { nullable: true })
  @IsOptional()
  created_ar_id?: boolean;

  @Field(() => Boolean, { nullable: true })
  @IsOptional()
  active?: boolean;

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
export class NewsLetterScheduleFindInputDto extends IntersectionType(FindInputPaginationOptionsDto, WithDeletedInputDto) implements FindManyOptions<NewsLetterScheduleDto>, FindInputCRUDTypeDefinition{
    // input layout design for users to perform find with various database options
  
    /**
     * Conditions to be met for the resulting set.
     * also validate the user pass only 1 operator to search for field
     */
    @Field(() => [NewsLetterScheduleFindInputWhereDto], { nullable: true, description: CrudDefMetaDesc.find_where })
    @IsOptional()
    @Validate(OnlyOneSeachOperatorAllowed)
    declare where?: FindOptionsWhere<NewsLetterScheduleFindInputWhereDto>[];
  
  
    /**
     * Specifies how to group the rows returned by the SELECT statement.
     */
    @Field(() => NewsLetterScheduleFindInputGroupByDto, { nullable: true, description: CrudDefMetaDesc.find_group_by })
    @IsOptional()
    declare groupBy?: NewsLetterScheduleFindInputGroupByDto;
  
    /**
     * Sort the result set by fields using ascending or descending order.
     */
    @Field(() => NewsLetterScheduleFindInputSortOrderDto, { nullable: true, description: CrudDefMetaDesc.find_order })
    @IsOptional()
    declare order?: FindOptionsOrder<NewsLetterScheduleFindInputSortOrderDto>;
}


// ████ FIND OUTPUT DTO ████████████████████████████████████████████████

@ObjectType()
@Directive('@shareable')
export class NewsLetterScheduleFindOutputRowsDto extends NewsLetterScheduleFindDto implements FindOutputRowsCRUDTypeDefinition{
    // this DTO will be used at many palce for output object, os make sure this is properly developed
}

@ObjectType()
@Directive('@shareable')
export class NewsLetterScheduleFindOutputDto extends FindOutputPaginationOptionsDto implements FindOutputCRUDTypeDefinition{
    // output layout design for users to get find response

    // we assign any because iin GRAPHQL for requuest body this rows will have fields with boolean value whether to include in response or not
    // this is very crucial to understand this structure and you need to understand how graphQL works
    @Field(() => [NewsLetterScheduleEntity], {description: CrudDefMetaDesc.find_rows})
    declare rows?: NewsLetterScheduleEntity | NewsLetterScheduleEntity[] | any;
}

/**
 * ██████████████████████████████████████████████████████████████████████████████████████████████████████████████████
 * █ FIND ONE BY ID DTO █████████████████████████████████████████████████████████████████████████████████████████████
 * ██████████████████████████████████████████████████████████████████████████████████████████████████████████████████
**/

export class NewsLetterScheduleFindOneByIdDto extends NewsLetterScheduleEntity implements FindDtoCRUDTypeDefinition{
    static metaname: string = `${NewsLetterScheduleEntity.metaname}${FindOneByIdArtefact}`;
    static metadesc: string = CrudDefMetaDesc.findOneById_metadesc;
}

// ████ FIND ONE BY ID INPUT DTO ████████████████████████████████████████████████

@InputType()
export class NewsLetterScheduleFindOneByIdInputDto extends IntersectionType(IdInputDto, WithDeletedInputDto) implements FindOneByIdInputCRUDTypeDefinition{

}

/**
 * █████████████████████████████████████████████████████████████
 * █ CREATE DTO ████████████████████████████████████████████████
 * █████████████████████████████████████████████████████████████
**/

export class NewsLetterScheduleCreateDto extends NewsLetterScheduleEntity implements CreateDtoCRUDTypeDefinition {
    static metaname: string = `${NewsLetterScheduleEntity.metaname}${CreateArtefact}`;
    static metadesc: string = CrudDefMetaDesc.create_metadesc;
}
// ████ CREATE INPUT DTO ████████████████████████████████████████████████

@InputType()
export class NewsLetterScheduleCreateInputDto extends  NewsLetterScheduleCreateDto implements CreateInputCRUDTypeDefinition {

  @Field(() => Int, {nullable: false, description: meta?.nl_id.desc})
  declare nl_id: number;

  @Field(() => DateTime, {nullable: false, description: meta?.scheduled.desc})
  declare scheduled: Date; 

  @Field(() => Int, {nullable: false, description: meta?.total_record.desc}) 
  declare total_record: number;

  @Field(() => Int, {nullable: false, description: meta?.sent_last_rec_no.desc}) 
  declare sent_last_rec_no: number;

  @Field(() => DateTime, {nullable: true, description: meta?.completed.desc}) 
  declare completed?: Date;

  @Field(() => Int, {nullable: true, description: meta?.wrkstatus_id.desc})
  declare wrkstatus_id?: number;

  @Field(() => Int, {nullable: true, description: meta?.approval_wrkstatus_id.desc}) 
  declare approval_wrkstatus_id?: number;

  @Field(() => Int, {nullable: false, description: meta?.created_u_id.desc})
  declare created_u_id: number; 

  @Field(() => Int, {nullable: false, description: meta?.created_ar_id.desc})
  declare created_ar_id: number; 

  @Field(() => DateTime, {nullable: true, description: meta?.active.desc})
  declare active?: Date; 
}

// ████ CREATE OUTPUT DTO ████████████████████████████████████████████████

@ObjectType()
@Directive('@shareable')
export class NewsLetterScheduleCreateOutputDto extends NewsLetterScheduleFindOutputRowsDto implements CreateOutputCRUDTypeDefinition {
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


export class NewsLetterScheduleUpdateDto extends NewsLetterScheduleDto implements UpdateDtoCRUDTypeDefinition{
    static metaname: string = `${NewsLetterScheduleEntity.metaname}${UpdateArtefact}`;
    static metadesc: string = CrudDefMetaDesc.update_metadesc;
}

// ████ UPDATE INPUT DTO ████████████████████████████████████████████████

@InputType()
export class NewsLetterScheduleUpdateInputWhereDto extends NewsLetterScheduleFindInputWhereDto implements UpdateInputWhereCRUDTypeDefinition{
    /**
     * avoiding redundant code
     * considering whatever FindInputWhere ask for input, same apply to UpdateInputWhere so extending class
     * just add what is new or different for UpdateInputWhere, that means it's 100% customisable
     * you can also remove extends *FindInputWhere and define entire custom dto here if needed 
     **/
}

@InputType()
export class NewsLetterScheduleUpdateInputSetsDto extends PartialType(NewsLetterScheduleCreateInputDto) implements UpdateInputSetsCRUDTypeDefinition {
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
export class NewsLetterScheduleUpdateInputDto implements UpdateInputCRUDTypeDefinition{
    // input layout design for users to perform update with various database options
  
    /**
     * Conditions to be met for the resulting set.
     * also validate the user pass only 1 operator to search for field
     */
    @Field(() => [NewsLetterScheduleUpdateInputWhereDto], { nullable: false, description: CrudDefMetaDesc.update_where })
    @IsNotEmpty()
    @Validate(OnlyOneSeachOperatorAllowed)
    where!: FindOptionsWhere<NewsLetterScheduleUpdateInputWhereDto>[];

    /**
     * What to set for update
     * basically fields list of update
     */
    @Field(() => NewsLetterScheduleUpdateInputSetsDto, { nullable: false, description: CrudDefMetaDesc.update_sets })
    @IsNotEmpty()
    sets!: NewsLetterScheduleUpdateInputSetsDto

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
export class NewsLetterScheduleUpdateOutputAffectedRowsDto extends NewsLetterScheduleFindOutputRowsDto implements UpdateOutputAffectedRowsCRUDTypeDefinition{
    /**
     * avoiding redundant code
     * considering whatever FindOutputRows return, same apply to UpdateOutputAffectedRows so extending class
     * just add what is new or different for UpdateOutputAffectedRows, that means it's 100% customisable
     * you can also remove extends *FindOutputRows and define entire custom dto here if needed 
     **/
}

@ObjectType()
@Directive('@shareable')
export class NewsLetterScheduleUpdateOutputDto extends CrudAffectedDto implements UpdateOutputCRUDTypeDefinition{
  @Field(() => [NewsLetterScheduleEntity], {description: CrudDefMetaDesc.update_affected_rows}) 
  declare affectedRows?: NewsLetterScheduleEntity[] | any; 
}


/**
 * █████████████████████████████████████████████████████████████
 * █ SOFT DELETE DTO ███████████████████████████████████████████
 * █████████████████████████████████████████████████████████████
**/
// this operation run directly withouth checking the data if exist or not, so it's quick but do not provide more information about operation

// ████ SOFT DELETE INPUT DTO ████████████████████████████████████████████████
export class NewsLetterScheduleSoftDeleteDto extends NewsLetterScheduleEntity implements SoftDeleteDtoCRUDTypeDefinition{
  static metaname: string = `${NewsLetterScheduleEntity.metaname}${SoftDeleteArtefact}`;
  static metadesc: string = CrudDefMetaDesc.softDelete_metadesc;
}

@InputType()
export class NewsLetterScheduleSoftDeleteInputWhereDto extends NewsLetterScheduleFindInputWhereDto implements SoftDeleteInputWhereCRUDTypeDefinition{
  /**
   * avoiding redundant code
   * considering whatever FindInputWhere ask for input, same apply to SoftDeleteInputWhere so extending class
   * just add what is new or different for SoftDeleteInputWhere, that means it's 100% customisable
   * you can also remove extends *FindInputWhere and define entire custom dto here if needed 
   **/
}

@InputType()
export class NewsLetterScheduleSoftDeleteInputDto implements SoftDeleteInputCRUDTypeDefinition{
  @Field(() => [NewsLetterScheduleSoftDeleteInputWhereDto], {nullable: true, description: CrudDefMetaDesc.softDelete_where})
  @Validate(OnlyOneSeachOperatorAllowed)
  where?: FindOptionsWhere<NewsLetterScheduleSoftDeleteInputWhereDto>[];
}


// ████ SOFT DELETE OUTPUT DTO ████████████████████████████████████████████████

@ObjectType()
@Directive('@shareable')
export class NewsLetterScheduleSoftDeleteOutputDto extends CrudAffectedDto implements SoftDeleteOutputCRUDTypeDefinition{
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

export class NewsLetterScheduleDeleteDto extends NewsLetterScheduleEntity implements DeleteDtoCRUDTypeDefinition{
  static metaname: string = `${NewsLetterScheduleEntity.metaname}${DeleteArtefact}`;
  static metadesc: string = CrudDefMetaDesc.delete_metadesc;
}

// ████ DELETE INPUT DTO ████████████████████████████████████████████████

@InputType()
export class NewsLetterScheduleDeleteInputWhereDto extends NewsLetterScheduleFindInputWhereDto implements DeleteInputWhereCRUDTypeDefinition{
  /**
   * avoiding redundant code
   * considering whatever FindInputWhere ask for input, same apply to SoftDeleteInputWhere so extending class
   * just add what is new or different for SoftDeleteInputWhere, that means it's 100% customisable
   * you can also remove extends *FindInputWhere and define entire custom dto here if needed 
   **/
}

@InputType()
export class NewsLetterScheduleDeleteInputDto implements DeleteInputCRUDTypeDefinition{
  @Field(() => [NewsLetterScheduleDeleteInputWhereDto], {nullable: true, description: CrudDefMetaDesc.delete_where})
  @Validate(OnlyOneSeachOperatorAllowed)
  where?: FindOptionsWhere<NewsLetterScheduleDeleteInputWhereDto>[];
}


// ████ DELETE OUTPUT DTO ████████████████████████████████████████████████

@ObjectType()
@Directive('@shareable')
export class NewsLetterScheduleDeleteOutputDto extends CrudAffectedDto implements DeleteOutputCRUDTypeDefinition{
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

export class NewsLetterScheduleRestoreDto extends NewsLetterScheduleEntity implements RestoreDtoCRUDTypeDefinition{
    static metaname: string = `${NewsLetterScheduleEntity.metaname}${RestoreArtefact}`;
    static metadesc: string = CrudDefMetaDesc.restore_metadesc;
}

// ████ RESTORE INPUT DTO ██████████████████████████████████████████████████████

@InputType()
export class NewsLetterScheduleRestoreInputWhereDto extends NewsLetterScheduleFindInputWhereDto implements RestoreInputWhereCRUDTypeDefinition{
  /**
   * avoiding redundant code
   * considering whatever FindInputWhere ask for input, same apply to SoftDeleteInputWhere so extending class
   * just add what is new or different for SoftDeleteInputWhere, that means it's 100% customisable
   * you can also remove extends *FindInputWhere and define entire custom dto here if needed 
   **/
}

@InputType()
export class NewsLetterScheduleRestoreInputDto implements RestoreInputCRUDTypeDefinition{
  @Field(() => [NewsLetterScheduleRestoreInputWhereDto], {nullable: true, description: CrudDefMetaDesc.restore_where})
  @Validate(OnlyOneSeachOperatorAllowed)
  where?: FindOptionsWhere<NewsLetterScheduleRestoreInputWhereDto>[];
}
  
// ████ RESTORE OUTPUT DTO ██████████████████████████████████████████████████████
  
@ObjectType()
@Directive('@shareable')
export class NewsLetterScheduleRestoreOutputDto extends CrudAffectedDto implements RestoreOutputCRUDTypeDefinition{
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

export class NewsLetterScheduleUpsertDto extends NewsLetterScheduleEntity implements UpsertDtoCRUDTypeDefinition{
  static metaname: string = `${NewsLetterScheduleEntity.metaname}${UpsertArtefact}`;
  static metadesc: string = CrudDefMetaDesc.upsert_metadesc;
}

// ████ UPSERT INPUT DTO ██████████████████████████████████████████████████████

@InputType()
export class NewsLetterScheduleUpsertInputDto extends NewsLetterScheduleCreateInputDto implements UpsertInputCRUDTypeDefinition{
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
    static conflictResolveFields: (keyof NewsLetterScheduleUpsertInputDto)[] = ['id'];
}

// ████ UPSERT OUTPUT DTO ██████████████████████████████████████████████████████

@ObjectType()
@Directive('@shareable')
export class NewsLetterScheduleUpsertOutputDto extends IntersectionType(NewsLetterScheduleCreateOutputDto, UpsertOutputProcessStatusDto) implements UpsertOutputCRUDTypeDefinition{ 
 
}

/**
 * █████████████████████████████████████████████████████████████
 * █ SOFT REMOVE DTO ███████████████████████████████████████████
 * █████████████████████████████████████████████████████████████
**/
// unlike soft delete, this operation first get the data from database and after run the operation, so it's complex but provide more and clear information about operation

// ████ SOFT REMOVE INPUT DTO ████████████████████████████████████████████████
export class NewsLetterScheduleSoftRemoveDto extends NewsLetterScheduleEntity implements SoftRemoveDtoCRUDTypeDefinition{
  static metaname: string = `${NewsLetterScheduleEntity.metaname}${SoftRemoveArtefact}`;
  static metadesc: string = CrudDefMetaDesc.softRemove_metadesc;
}

@InputType()
export class NewsLetterScheduleSoftRemoveInputWhereDto extends NewsLetterScheduleFindInputWhereDto implements SoftRemoveInputWhereCRUDTypeDefinition{
  /**
   * avoiding redundant code
   * considering whatever FindInputWhere ask for input, same apply to SoftRemoveInputWhere so extending class
   * just add what is new or different for SoftRemoveInputWhere, that means it's 100% customisable
   * you can also remove extends *FindInputWhere and define entire custom dto here if needed 
   **/
}

@InputType()
export class NewsLetterScheduleSoftRemoveInputDto implements SoftRemoveInputCRUDTypeDefinition{
  @Field(() => [NewsLetterScheduleSoftRemoveInputWhereDto], {nullable: true, description: CrudDefMetaDesc.softRemove_where})
  @Validate(OnlyOneSeachOperatorAllowed)
  where?: FindOptionsWhere<NewsLetterScheduleSoftRemoveInputWhereDto>[];
}


// ████ SOFT REMOVE OUTPUT DTO ████████████████████████████████████████████████

@ObjectType()
@Directive('@shareable')
export class NewsLetterScheduleSoftRemoveOutputAffectedRowsDto extends NewsLetterScheduleFindOutputRowsDto implements SoftRemoveOutputAffectedRowsCRUDTypeDefinition{
  /**
   * avoiding redundant code
   * considering whatever FindOutputRows return, same apply to SoftRemoveOutputAffectedRows so extending class
   * just add what is new or different for SoftRemoveOutputAffectedRows, that means it's 100% customisable
   * you can also remove extends FindOutputRows and define entire custom dto here if needed 
   **/
}
@ObjectType()
@Directive('@shareable')
export class NewsLetterScheduleSoftRemoveOutputDto extends CrudAffectedDto implements SoftRemoveOutputCRUDTypeDefinition{
  /**
   * avoiding redundant code
   * considering whatever AffectedDto return, same apply to SoftRemoveOutput so extending class
   * just add what is new or different for SoftRemoveOutput, that means it's 100% customisable
   * you can also remove extends AffectedDto and define entire custom dto here if needed 
   **/

  @Field(() => [NewsLetterScheduleEntity]) 
  declare affectedRows?: NewsLetterScheduleEntity[] | any
}

/**
 * █████████████████████████████████████████████████████████████
 * █ REMOVE DTO ████████████████████████████████████████████████
 * █████████████████████████████████████████████████████████████
**/
// unlike soft delete, this operation first get the data from database and after run the operation, so it's complex but provide more and clear information about operation

export class NewsLetterScheduleRemoveDto extends NewsLetterScheduleEntity implements RemoveDtoCRUDTypeDefinition{
  static metaname: string = `${NewsLetterScheduleEntity.metaname}${RemoveArtefact}`;
  static metadesc: string = CrudDefMetaDesc.remove_metadesc;
}

// ████ REMOVE INPUT DTO ████████████████████████████████████████████████

@InputType()
export class NewsLetterScheduleRemoveInputWhereDto extends NewsLetterScheduleFindInputWhereDto implements RemoveInputWhereCRUDTypeDefinition{
  /**
   * avoiding redundant code
   * considering whatever FindInputWhere ask for input, same apply to SoftRemoveInputWhere so extending class
   * just add what is new or different for SoftRemoveInputWhere, that means it's 100% customisable
   * you can also remove extends *FindInputWhere and define entire custom dto here if needed 
   **/
}

@InputType()
export class NewsLetterScheduleRemoveInputDto implements RemoveInputCRUDTypeDefinition{
  @Field(() => [NewsLetterScheduleRemoveInputWhereDto], {nullable: true, description: CrudDefMetaDesc.remove_where})
  @Validate(OnlyOneSeachOperatorAllowed)
  where?: FindOptionsWhere<NewsLetterScheduleRemoveInputWhereDto>[];
}

// ████ REMOVE OUTPUT DTO ████████████████████████████████████████████████

@ObjectType()
@Directive('@shareable')
export class NewsLetterScheduleRemoveOutputAffectedRowsDto extends NewsLetterScheduleFindOutputRowsDto implements RemoveOutputAffectedRowsCRUDTypeDefinition{
  /**
   * avoiding redundant code
   * considering whatever FindOutputRows return, same apply to RemoveOutputAffectedRows so extending class
   * just add what is new or different for RemoveOutputAffectedRows, that means it's 100% customisable
   * you can also remove extends FindOutputRows and define entire custom dto here if needed 
   **/
}
@ObjectType()
@Directive('@shareable')
export class NewsLetterScheduleRemoveOutputDto extends CrudAffectedDto implements RemoveOutputCRUDTypeDefinition{
  /**
   * avoiding redundant code
   * considering whatever AffectedDto return, same apply to RemoveOutput so extending class
   * just add what is new or different for RemoveOutput, that means it's 100% customisable
   * you can also remove extends AffectedDto and define entire custom dto here if needed 
   **/

  @Field(() => [NewsLetterScheduleEntity]) 
  declare affectedRows?: NewsLetterScheduleEntity[] | any;
}

/**
 * █████████████████████████████████████████████████████████████
 * █ RECOVER DTO ████████████████████████████████████████████████
 * █████████████████████████████████████████████████████████████
**/
// unlike soft delete, this operation first get the data from database and after run the operation, so it's complex but provide more and clear information about operation

export class NewsLetterScheduleRecoverDto extends NewsLetterScheduleEntity implements RecoverDtoCRUDTypeDefinition{
  static metaname: string = `${NewsLetterScheduleEntity.metaname}${RecoverArtefact}`;
  static metadesc: string = CrudDefMetaDesc.recover_metadesc;
}

// ████ RECOVER INPUT DTO ██████████████████████████████████████████████████████

@InputType()
export class NewsLetterScheduleRecoverInputWhereDto extends NewsLetterScheduleFindInputWhereDto implements RecoverInputWhereCRUDTypeDefinition{
/**
 * avoiding redundant code
 * considering whatever FindInputWhere ask for input, same apply to SoftDeleteInputWhere so extending class
 * just add what is new or different for SoftDeleteInputWhere, that means it's 100% customisable
 * you can also remove extends *FindInputWhere and define entire custom dto here if needed 
 **/
}

@InputType()
export class NewsLetterScheduleRecoverInputDto implements RecoverInputCRUDTypeDefinition{
  @Field(() => [NewsLetterScheduleRecoverInputWhereDto], {nullable: true, description: CrudDefMetaDesc.recover_where})
  @Validate(OnlyOneSeachOperatorAllowed)
  where?: FindOptionsWhere<NewsLetterScheduleRecoverInputWhereDto>[];
}

// ████ RECOVER OUTPUT DTO ██████████████████████████████████████████████████████

@ObjectType()
@Directive('@shareable')
export class NewsLetterScheduleRecoverOutputAffectedRowsDto extends NewsLetterScheduleFindOutputRowsDto implements RecoverOutputAffectedRowsCRUDTypeDefinition{
  /**
   * avoiding redundant code
   * considering whatever FindOutputRows return, same apply to RecoverOutputAffectedRows so extending class
   * just add what is new or different for RecoverOutputAffectedRows, that means it's 100% customisable
   * you can also remove extends FindOutputRows and define entire custom dto here if needed 
   **/
}

@ObjectType()
@Directive('@shareable')
export class NewsLetterScheduleRecoverOutputDto extends CrudAffectedDto implements RecoverOutputCRUDTypeDefinition{
  /**
   * avoiding redundant code
   * considering whatever AffectedDto return, same apply to RecoverOutput so extending class
   * just add what is new or different for RecoverOutput, that means it's 100% customisable
   * you can also remove extends AffectedDto and define entire custom dto here if needed 
   **/

  @Field(() => [NewsLetterScheduleEntity]) 
  declare affectedRows?: NewsLetterScheduleEntity[] | any;
}

/**
 * █████████████████████████████████████████████████████████████
 * █ UPLOAD DTO ████████████████████████████████████████████████
 * █████████████████████████████████████████████████████████████
**/

export class NewsLetterScheduleUploadDto extends NewsLetterScheduleEntity implements UploadDtoCRUDTypeDefinition {
  static metaname: string = `${NewsLetterScheduleEntity?.metaname}${UploadArtefact}`;
  static metadesc: string = CrudDefMetaDesc.upload_metadesc;
}

// ████ UPLOAD REF TYPE DTO ████████████████████████████████████████████████

@InputType()
export class UploadFileFieldInputDto {
@Field(() => NewsLetterScheduleUploadFileFieldEnum, {nullable: false, description: CrudDefMetaDesc.upload_file_field})
@IsNotEmpty()
file_field!: NewsLetterScheduleUploadFileFieldEnum;
}

@ObjectType()
@Directive('@shareable')
export class UploadFileFieldOutputDto extends PartialType(UploadFileFieldInputDto) {

}

// ████ UPLOAD INPUT DTO ████████████████████████████████████████████████
@InputType()
export class NewsLetterScheduleUploadInputDto extends IntersectionType(UploadFileFieldInputDto, UploadInputDto) implements UploadInputArtefactCRUDTypeDefinition {

}

// ████ UPLOAD OUTPUT DTO ███████████████████████████████████████████████
@ObjectType()
@Directive('@shareable')
export class NewsLetterScheduleUploadOutputDto extends IntersectionType(UploadFileFieldOutputDto, UploadOutputDto) implements UploadOutputArtefactCRUDTypeDefinition {

}

/**
* █████████████████████████████████████████████████████████████
* █ UPLOAD DELETE DTO █████████████████████████████████████████
* █████████████████████████████████████████████████████████████
**/

export class NewsLetterScheduleUploadDeleteDto extends NewsLetterScheduleEntity implements UploadDeleteDtoCRUDTypeDefinition {
static metaname: string = `${NewsLetterScheduleEntity?.metaname}${UploadDeleteArtefact}`;
static metadesc: string = CrudDefMetaDesc.upload_delete_metadesc;
}

// ████ UPLOAD DELETE INPUT DTO ████████████████████████████████████████████████
@InputType()
export class NewsLetterScheduleUploadDeleteInputDto extends IntersectionType(UploadFileFieldInputDto, UploadDeleteInputDto) implements UploadDeleteInputArtefactCRUDTypeDefinition {

}

// ████ UPLOAD DELETE OUTPUT DTO ███████████████████████████████████████████████
@ObjectType()
@Directive('@shareable')
export class NewsLetterScheduleUploadDeleteOutputDto extends IntersectionType(UploadFileFieldOutputDto, UploadDeleteOutputDto) implements UploadDeleteOutputArtefactCRUDTypeDefinition {

}