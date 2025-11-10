import { CreateArtefact, CreateDtoCRUDTypeDefinition, CreateInputCRUDTypeDefinition, CreateOutputCRUDTypeDefinition, CrudDefMetaDesc, DateTime, DeleteArtefact, DeleteDtoCRUDTypeDefinition, DeleteInputCRUDTypeDefinition, DeleteOutputCRUDTypeDefinition, FindArtefact, FindDtoCRUDTypeDefinition, FindInputGroupByCRUDTypeDefinition, FindInputSortOrderCRUDTypeDefinition, FindInputCRUDTypeDefinition, FindInputWhereCRUDTypeDefinition, FindOneByIdArtefact, FindOperatorDto, FindOutputPaginationDto, FindOutputCRUDTypeDefinition, OnlyOneSeachOperatorAllowed, RecordSortDirectionEnum, RestoreArtefact, RestoreDtoCRUDTypeDefinition, RestoreInputCRUDTypeDefinition, SoftDeleteArtefact, SoftDeleteDtoCRUDTypeDefinition, SoftDeleteInputCRUDTypeDefinition, SoftDeleteOutputCRUDTypeDefinition, UpdateArtefact, UpdateDtoCRUDTypeDefinition, UpdateInputSetsCRUDTypeDefinition, UpdateInputCRUDTypeDefinition, UpdateInputWhereCRUDTypeDefinition, UpdateOutputCRUDTypeDefinition, SoftDeleteInputWhereCRUDTypeDefinition, RestoreInputWhereCRUDTypeDefinition, RestoreOutputCRUDTypeDefinition, UpsertDtoCRUDTypeDefinition, UpsertArtefact, UpsertInputCRUDTypeDefinition, UpsertOutputCRUDTypeDefinition, UpsertStatusEnum, SoftRemoveDtoCRUDTypeDefinition, SoftRemoveArtefact, SoftRemoveInputWhereCRUDTypeDefinition, SoftRemoveInputCRUDTypeDefinition, SoftRemoveOutputCRUDTypeDefinition, RemoveDtoCRUDTypeDefinition, RemoveArtefact, RemoveInputCRUDTypeDefinition, RemoveOutputCRUDTypeDefinition, SoftRemoveOutputAffectedRowsCRUDTypeDefinition, FindOutputRowsCRUDTypeDefinition, UpdateOutputAffectedRowsCRUDTypeDefinition, RemoveOutputAffectedRowsCRUDTypeDefinition, RecoverDtoCRUDTypeDefinition, RecoverArtefact, RecoverInputCRUDTypeDefinition, RecoverOutputCRUDTypeDefinition, RecoverInputWhereCRUDTypeDefinition, RecoverOutputAffectedRowsCRUDTypeDefinition, FindInputDtoCRUDTypeDefinition, FindOneByIdInputCRUDTypeDefinition, FindInputPaginationOptionsDto, FindOutputPaginationOptionsDto, IdInputDto, RemoveInputWhereCRUDTypeDefinition, DeleteInputWhereCRUDTypeDefinition, UploadInputDto, UploadOutputDto, UploadDeleteInputDto, UploadDeleteOutputDto, WithDeletedInputDto } from "@libs/library-app";
import { UserSavedSearchEntityMeta as meta, UserSavedSearchEntity } from "../entities/user.saved.search.entity";
import { Directive, Field, InputType, Int, IntersectionType, ObjectType, PartialType } from "@nestjs/graphql";
import { IsNotEmpty, IsNumber, IsOptional, Validate } from "class-validator";
import { FindManyOptions, FindOptionsOrder, FindOptionsWhere } from "typeorm";
import { Exclude } from "class-transformer";
import { CrudAffectedDto, UpsertOutputProcessStatusDto } from "@libs/library-app";
import { UploadArtefact, UploadDeleteArtefact, UploadDeleteDtoCRUDTypeDefinition, UploadDeleteInputArtefactCRUDTypeDefinition, UploadDeleteOutputArtefactCRUDTypeDefinition, UploadDtoCRUDTypeDefinition, UploadInputArtefactCRUDTypeDefinition, UploadOutputArtefactCRUDTypeDefinition } from "@libs/library-app/crud/crud.type";
import { UserSavedSearchUploadRefTypeEnum } from "../user.saved.search.enum";


/**
 * █████████████████████████████████████████████████████████████
 * ██ DO NOT CHANGE IN THIS FILE IT WILL CRASH THE APP        ██
 * █████████████████████████████████████████████████████████████
**/

/**
 * # [done] ['../entities/user.saved.search.entity', './dto/user.saved.search.dto'] . Hint: find [ /user.saved.search. => and replace with ] [ /your-module. ] 
 * # [done] do not break some dependences which required this class
 * # [done] module [UserSavedSearch]
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
export class UserSavedSearchDto extends UserSavedSearchEntity implements FindInputDtoCRUDTypeDefinition{
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
     declare u_id?: any;
     declare title?: any;
     declare url_slug?: any;
     declare criteria?: any;
     declare result_count?: any;
     declare alertdur_id?: any;
     declare alert_last_sent?: any;
     declare listing_last_updated?: any;
     declare created_u_id?: any;
     declare created_ar_id?: any;

     declare created?: any;
     declare updated?: any;
     declare deleted?: any; 
}

/**
 * █████████████████████████████████████████████████████████████
 * █ FIND DTO ██████████████████████████████████████████████████
 * █████████████████████████████████████████████████████████████
**/
@ObjectType({ isAbstract: true })
@Directive('@shareable')
export class UserSavedSearchFindDto extends UserSavedSearchEntity implements FindDtoCRUDTypeDefinition{
    static metaname: string = `${UserSavedSearchEntity?.metaname}${FindArtefact}`;
    static metadesc: string = CrudDefMetaDesc.find_metadesc;
}


// ████ FIND INPUT DTO ████████████████████████████████████████████████


@InputType()
export class UserSavedSearchFindInputWhereDto extends UserSavedSearchDto implements FindInputWhereCRUDTypeDefinition{
    @Field(() => FindOperatorDto, {nullable: true, description: meta?.id.desc})
    @IsOptional()
    declare id?: FindOperatorDto;    

    @Field(() => FindOperatorDto, {nullable: true, description: meta?.u_id.desc})
    @IsOptional()
    declare u_id?: FindOperatorDto; 

    @Field(() => FindOperatorDto, {nullable: true, description: meta?.title.desc})        
    @IsOptional()
    declare title?: FindOperatorDto;

    @Field(() => FindOperatorDto, {nullable: true, description: meta?.alertdur_id.desc})        
    @IsOptional()
    declare alertdur_id?: FindOperatorDto;

    @Field(() => FindOperatorDto, {nullable: true, description: meta?.created_u_id.desc})        
    @IsOptional()
    declare created_u_id?: FindOperatorDto;
    
    @Field(() => FindOperatorDto, {nullable: true, description: meta?.created_ar_id.desc})        
    @IsOptional()
    declare created_ar_id?: FindOperatorDto;

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
        
    
}

@InputType()
export class UserSavedSearchFindInputSortOrderDto implements FindOptionsOrder<UserSavedSearchDto>, FindInputSortOrderCRUDTypeDefinition{
    
    @Field(() => RecordSortDirectionEnum, { nullable: true }) 
    @IsOptional()
    id?: RecordSortDirectionEnum;

    @Field(() => RecordSortDirectionEnum, { nullable: true }) 
    @IsOptional()
    u_id?: RecordSortDirectionEnum;

    @Field(() => RecordSortDirectionEnum, { nullable: true }) 
    @IsOptional()
    title?: RecordSortDirectionEnum;

    @Field(() => RecordSortDirectionEnum, { nullable: true }) 
    @IsOptional()
    alertdur_id?: RecordSortDirectionEnum;

    @Field(() => RecordSortDirectionEnum, { nullable: true }) 
    @IsOptional()
    created_u_id?: RecordSortDirectionEnum;

    @Field(() => RecordSortDirectionEnum, { nullable: true }) 
    @IsOptional()
    created_ar_id?: RecordSortDirectionEnum;

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
export class UserSavedSearchFindInputGroupByDto implements FindOptionsOrder<UserSavedSearchDto>, FindInputGroupByCRUDTypeDefinition{
  @Field(() => Boolean, { nullable: true })
  @IsOptional()
  u_id?: boolean;

  @Field(() => Boolean, { nullable: true })
  @IsOptional()
  title?: boolean;

  @Field(() => Boolean, { nullable: true })
  @IsOptional()
  alertdur_id?: boolean;

  @Field(() => Boolean, { nullable: true })
  @IsOptional()
  created_u_id?: boolean;

  @Field(() => Boolean, { nullable: true })
  @IsOptional()
  created_ar_id?: boolean;

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
export class UserSavedSearchFindInputDto extends IntersectionType(FindInputPaginationOptionsDto, WithDeletedInputDto) implements FindManyOptions<UserSavedSearchDto>, FindInputCRUDTypeDefinition{
    // input layout design for users to perform find with various database options
  
    /**
     * Conditions to be met for the resulting set.
     * also validate the user pass only 1 operator to search for field
     */
    @Field(() => [UserSavedSearchFindInputWhereDto], { nullable: true, description: CrudDefMetaDesc.find_where })
    @IsOptional()
    @Validate(OnlyOneSeachOperatorAllowed)
    declare where?: FindOptionsWhere<UserSavedSearchFindInputWhereDto>;
  
  
    /**
     * Specifies how to group the rows returned by the SELECT statement.
     */
    @Field(() => UserSavedSearchFindInputGroupByDto, { nullable: true, description: CrudDefMetaDesc.find_group_by })
    @IsOptional()
    declare groupBy?: UserSavedSearchFindInputGroupByDto;
  
    /**
     * Sort the result set by fields using ascending or descending order.
     */
    @Field(() => UserSavedSearchFindInputSortOrderDto, { nullable: true, description: CrudDefMetaDesc.find_order })
    @IsOptional()
    declare order?: FindOptionsOrder<UserSavedSearchFindInputSortOrderDto>;
}


// ████ FIND OUTPUT DTO ████████████████████████████████████████████████

@ObjectType()
@Directive('@shareable')
export class UserSavedSearchFindOutputRowsDto extends UserSavedSearchFindDto implements FindOutputRowsCRUDTypeDefinition{
    // this DTO will be used at many palce for output object, os make sure this is properly developed
}

@ObjectType()
@Directive('@shareable')
export class UserSavedSearchFindOutputDto extends FindOutputPaginationOptionsDto implements FindOutputCRUDTypeDefinition{
    // output layout design for users to get find response

    // we assign any because iin GRAPHQL for requuest body this rows will have fields with boolean value whether to include in response or not
    // this is very crucial to understand this structure and you need to understand how graphQL works
    @Field(() => [UserSavedSearchEntity], {description:CrudDefMetaDesc.find_rows})
    declare rows?: UserSavedSearchEntity | UserSavedSearchEntity[] | any;
}

/**
 * ██████████████████████████████████████████████████████████████████████████████████████████████████████████████████
 * █ FIND ONE BY ID DTO █████████████████████████████████████████████████████████████████████████████████████████████
 * ██████████████████████████████████████████████████████████████████████████████████████████████████████████████████
**/

export class UserSavedSearchFindOneByIdDto extends UserSavedSearchEntity implements FindDtoCRUDTypeDefinition{
    static metaname: string = `${UserSavedSearchEntity.metaname}${FindOneByIdArtefact}`;
    static metadesc: string = CrudDefMetaDesc.findOneById_metadesc;
}

// ████ FIND ONE BY ID INPUT DTO ████████████████████████████████████████████████

@InputType()
export class UserSavedSearchFindOneByIdInputDto extends IntersectionType(IdInputDto, WithDeletedInputDto) implements FindOneByIdInputCRUDTypeDefinition{

}

/**
 * █████████████████████████████████████████████████████████████
 * █ CREATE DTO ████████████████████████████████████████████████
 * █████████████████████████████████████████████████████████████
**/

export class UserSavedSearchCreateDto extends UserSavedSearchEntity implements CreateDtoCRUDTypeDefinition {
    static metaname: string = `${UserSavedSearchEntity.metaname}${CreateArtefact}`;
    static metadesc: string = CrudDefMetaDesc.create_metadesc;
}
// ████ CREATE INPUT DTO ████████████████████████████████████████████████

@InputType()
export class UserSavedSearchCreateInputDto extends  UserSavedSearchCreateDto implements CreateInputCRUDTypeDefinition {

    @Field(() => Int, {nullable: false, description: meta?.u_id.desc}) 
    declare u_id?: number;

    @Field(() => String, {nullable: false, description: meta?.title.desc})  
    declare title?: string;

    @Field(() => String, {nullable: true, description: meta?.url_slug.desc})  
    declare url_slug?: string;

    @Field(() => String, {nullable: false, description: meta?.criteria.desc})  
    declare criteria?: string;
    
    @Field(() => Int, {nullable: false, description: meta?.result_count.desc})  
    declare result_count?: number;

    @Field(() => Int, {nullable: false, description: meta?.alertdur_id.desc})  
    declare alertdur_id?: number;

    @Field(() => DateTime, {nullable: true, description: meta?.alert_last_sent.desc})  
    declare alert_last_sent?: Date;

    @Field(() => DateTime, {nullable: false, description: meta?.listing_last_updated.desc})  
    declare listing_last_updated?: Date;

    @Field(() => Int, {nullable: true, description: meta?.created_u_id.desc})  
    declare created_u_id?: number;

    @Field(() => Int, {nullable: true, description: meta?.created_ar_id.desc}) 
    declare created_ar_id?: number;
}

// ████ CREATE OUTPUT DTO ████████████████████████████████████████████████

@ObjectType()
@Directive('@shareable')
export class UserSavedSearchCreateOutputDto extends UserSavedSearchFindOutputRowsDto implements CreateOutputCRUDTypeDefinition {
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


export class UserSavedSearchUpdateDto extends UserSavedSearchDto implements UpdateDtoCRUDTypeDefinition{
    static metaname: string = `${UserSavedSearchEntity.metaname}${UpdateArtefact}`;
    static metadesc: string = CrudDefMetaDesc.update_metadesc;
}

// ████ UPDATE INPUT DTO ████████████████████████████████████████████████

@InputType()
export class UserSavedSearchUpdateInputWhereDto extends UserSavedSearchFindInputWhereDto implements UpdateInputWhereCRUDTypeDefinition{
    /**
     * avoiding redundant code
     * considering whatever FindInputWhere ask for input, same apply to UpdateInputWhere so extending class
     * just add what is new or different for UpdateInputWhere, that means it's 100% customisable
     * you can also remove extends *FindInputWhere and define entire custom dto here if needed 
     **/
}

@InputType()
export class UserSavedSearchUpdateInputSetsDto extends PartialType(UserSavedSearchCreateInputDto) implements UpdateInputSetsCRUDTypeDefinition {
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
export class UserSavedSearchUpdateInputDto implements UpdateInputCRUDTypeDefinition{
    // input layout design for users to perform update with various database options
  
    /**
     * Conditions to be met for the resulting set.
     * also validate the user pass only 1 operator to search for field
     */
    @Field(() => [UserSavedSearchUpdateInputWhereDto], { nullable: false, description: CrudDefMetaDesc.update_where })
    @IsNotEmpty()
    @Validate(OnlyOneSeachOperatorAllowed)
    where!: FindOptionsWhere<UserSavedSearchUpdateInputWhereDto>[];

    /**
     * What to set for update
     * basically fields list of update
     */
    @Field(() => UserSavedSearchUpdateInputSetsDto, { nullable: false, description: CrudDefMetaDesc.update_sets })
    @IsNotEmpty()
    sets!: UserSavedSearchUpdateInputSetsDto

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
export class UserSavedSearchUpdateOutputAffectedRowsDto extends UserSavedSearchFindOutputRowsDto implements UpdateOutputAffectedRowsCRUDTypeDefinition{
    /**
     * avoiding redundant code
     * considering whatever FindOutputRows return, same apply to UpdateOutputAffectedRows so extending class
     * just add what is new or different for UpdateOutputAffectedRows, that means it's 100% customisable
     * you can also remove extends *FindOutputRows and define entire custom dto here if needed 
     **/
}

@ObjectType()
@Directive('@shareable')
export class UserSavedSearchUpdateOutputDto extends CrudAffectedDto implements UpdateOutputCRUDTypeDefinition{
  @Field(() => [UserSavedSearchEntity], {description: CrudDefMetaDesc.update_affected_rows}) 
  declare affectedRows?: UserSavedSearchEntity[] | any; 
}


/**
 * █████████████████████████████████████████████████████████████
 * █ SOFT DELETE DTO ███████████████████████████████████████████
 * █████████████████████████████████████████████████████████████
**/
// this operation run directly withouth checking the data if exist or not, so it's quick but do not provide more information about operation

// ████ SOFT DELETE INPUT DTO ████████████████████████████████████████████████
export class UserSavedSearchSoftDeleteDto extends UserSavedSearchEntity implements SoftDeleteDtoCRUDTypeDefinition{
  static metaname: string = `${UserSavedSearchEntity.metaname}${SoftDeleteArtefact}`;
  static metadesc: string = CrudDefMetaDesc.softDelete_metadesc;
}

@InputType()
export class UserSavedSearchSoftDeleteInputWhereDto extends UserSavedSearchFindInputWhereDto implements SoftDeleteInputWhereCRUDTypeDefinition{
  /**
   * avoiding redundant code
   * considering whatever FindInputWhere ask for input, same apply to SoftDeleteInputWhere so extending class
   * just add what is new or different for SoftDeleteInputWhere, that means it's 100% customisable
   * you can also remove extends *FindInputWhere and define entire custom dto here if needed 
   **/
}

@InputType()
export class UserSavedSearchSoftDeleteInputDto implements SoftDeleteInputCRUDTypeDefinition{
  @Field(() => [UserSavedSearchSoftDeleteInputWhereDto], {nullable: true, description: CrudDefMetaDesc.softDelete_where})
  @Validate(OnlyOneSeachOperatorAllowed)
  where?: FindOptionsWhere<UserSavedSearchSoftDeleteInputWhereDto>[];
}


// ████ SOFT DELETE OUTPUT DTO ████████████████████████████████████████████████

@ObjectType()
@Directive('@shareable')
export class UserSavedSearchSoftDeleteOutputDto extends CrudAffectedDto implements SoftDeleteOutputCRUDTypeDefinition{
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

export class UserSavedSearchDeleteDto extends UserSavedSearchEntity implements DeleteDtoCRUDTypeDefinition{
  static metaname: string = `${UserSavedSearchEntity.metaname}${DeleteArtefact}`;
  static metadesc: string = CrudDefMetaDesc.delete_metadesc;
}
// ████ DELETE INPUT DTO ████████████████████████████████████████████████

@InputType()
export class UserSavedSearchDeleteInputWhereDto extends UserSavedSearchFindInputWhereDto implements DeleteInputWhereCRUDTypeDefinition{
  /**
   * avoiding redundant code
   * considering whatever FindInputWhere ask for input, same apply to SoftDeleteInputWhere so extending class
   * just add what is new or different for SoftDeleteInputWhere, that means it's 100% customisable
   * you can also remove extends *FindInputWhere and define entire custom dto here if needed 
   **/
}

@InputType()
export class UserSavedSearchDeleteInputDto implements DeleteInputCRUDTypeDefinition{
  @Field(() => [UserSavedSearchDeleteInputWhereDto], {nullable: true, description: CrudDefMetaDesc.delete_where})
  @Validate(OnlyOneSeachOperatorAllowed)
  where?: FindOptionsWhere<UserSavedSearchDeleteInputWhereDto>[];
}


// ████ DELETE OUTPUT DTO ████████████████████████████████████████████████

@ObjectType()
@Directive('@shareable')
export class UserSavedSearchDeleteOutputDto extends CrudAffectedDto implements DeleteOutputCRUDTypeDefinition{
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

export class UserSavedSearchRestoreDto extends UserSavedSearchEntity implements RestoreDtoCRUDTypeDefinition{
    static metaname: string = `${UserSavedSearchEntity.metaname}${RestoreArtefact}`;
    static metadesc: string = CrudDefMetaDesc.restore_metadesc;
}

// ████ RESTORE INPUT DTO ██████████████████████████████████████████████████████

@InputType()
export class UserSavedSearchRestoreInputWhereDto extends UserSavedSearchFindInputWhereDto implements RestoreInputWhereCRUDTypeDefinition{
  /**
   * avoiding redundant code
   * considering whatever FindInputWhere ask for input, same apply to SoftDeleteInputWhere so extending class
   * just add what is new or different for SoftDeleteInputWhere, that means it's 100% customisable
   * you can also remove extends *FindInputWhere and define entire custom dto here if needed 
   **/
}

@InputType()
export class UserSavedSearchRestoreInputDto implements RestoreInputCRUDTypeDefinition{
  @Field(() => [UserSavedSearchRestoreInputWhereDto], {nullable: true, description: CrudDefMetaDesc.restore_where})
  @Validate(OnlyOneSeachOperatorAllowed)
  where?: FindOptionsWhere<UserSavedSearchRestoreInputWhereDto>[];
}
  
// ████ RESTORE OUTPUT DTO ██████████████████████████████████████████████████████
  
@ObjectType()
@Directive('@shareable')
export class UserSavedSearchRestoreOutputDto extends CrudAffectedDto implements RestoreOutputCRUDTypeDefinition{
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

export class UserSavedSearchUpsertDto extends UserSavedSearchEntity implements UpsertDtoCRUDTypeDefinition{
  static metaname: string = `${UserSavedSearchEntity.metaname}${UpsertArtefact}`;
  static metadesc: string = CrudDefMetaDesc.upsert_metadesc;
}

// ████ UPSERT INPUT DTO ██████████████████████████████████████████████████████

@InputType()
export class UserSavedSearchUpsertInputDto extends UserSavedSearchCreateInputDto implements UpsertInputCRUDTypeDefinition{
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
    static conflictResolveFields: (keyof UserSavedSearchUpsertInputDto)[] = ['id'];
}
 
// ████ UPSERT OUTPUT DTO ██████████████████████████████████████████████████████

@ObjectType()
@Directive('@shareable')
export class UserSavedSearchUpsertOutputDto extends IntersectionType(UserSavedSearchCreateOutputDto, UpsertOutputProcessStatusDto) implements UpsertOutputCRUDTypeDefinition{ 
 
}

/**
 * █████████████████████████████████████████████████████████████
 * █ SOFT REMOVE DTO ███████████████████████████████████████████
 * █████████████████████████████████████████████████████████████
**/
// unlike soft delete, this operation first get the data from database and after run the operation, so it's complex but provide more and clear information about operation

// ████ SOFT REMOVE INPUT DTO ████████████████████████████████████████████████
export class UserSavedSearchSoftRemoveDto extends UserSavedSearchEntity implements SoftRemoveDtoCRUDTypeDefinition{
  static metaname: string = `${UserSavedSearchEntity.metaname}${SoftRemoveArtefact}`;
  static metadesc: string = CrudDefMetaDesc.softRemove_metadesc;
}

@InputType()
export class UserSavedSearchSoftRemoveInputWhereDto extends UserSavedSearchFindInputWhereDto implements SoftRemoveInputWhereCRUDTypeDefinition{
  /**
   * avoiding redundant code
   * considering whatever FindInputWhere ask for input, same apply to SoftRemoveInputWhere so extending class
   * just add what is new or different for SoftRemoveInputWhere, that means it's 100% customisable
   * you can also remove extends *FindInputWhere and define entire custom dto here if needed 
   **/
}

@InputType()
export class UserSavedSearchSoftRemoveInputDto implements SoftRemoveInputCRUDTypeDefinition{
  @Field(() => [UserSavedSearchSoftRemoveInputWhereDto], {nullable: true, description: CrudDefMetaDesc.softRemove_where})
  @Validate(OnlyOneSeachOperatorAllowed)
  where?: FindOptionsWhere<UserSavedSearchSoftRemoveInputWhereDto>[];
}


// ████ SOFT REMOVE OUTPUT DTO ████████████████████████████████████████████████

@ObjectType()
@Directive('@shareable')
export class UserSavedSearchSoftRemoveOutputAffectedRowsDto extends UserSavedSearchFindOutputRowsDto implements SoftRemoveOutputAffectedRowsCRUDTypeDefinition{
  /**
   * avoiding redundant code
   * considering whatever FindOutputRows return, same apply to SoftRemoveOutputAffectedRows so extending class
   * just add what is new or different for SoftRemoveOutputAffectedRows, that means it's 100% customisable
   * you can also remove extends FindOutputRows and define entire custom dto here if needed 
   **/
}
@ObjectType()
@Directive('@shareable')
export class UserSavedSearchSoftRemoveOutputDto extends CrudAffectedDto implements SoftRemoveOutputCRUDTypeDefinition{
  /**
   * avoiding redundant code
   * considering whatever AffectedDto return, same apply to SoftRemoveOutput so extending class
   * just add what is new or different for SoftRemoveOutput, that means it's 100% customisable
   * you can also remove extends AffectedDto and define entire custom dto here if needed 
   **/

  @Field(() => [UserSavedSearchEntity]) 
  declare affectedRows?: UserSavedSearchEntity[] | any
}

/**
 * █████████████████████████████████████████████████████████████
 * █ REMOVE DTO ███████████████████████████████████████████
 * █████████████████████████████████████████████████████████████
**/
// unlike soft delete, this operation first get the data from database and after run the operation, so it's complex but provide more and clear information about operation

export class UserSavedSearchRemoveDto extends UserSavedSearchEntity implements RemoveDtoCRUDTypeDefinition{
  static metaname: string = `${UserSavedSearchEntity.metaname}${RemoveArtefact}`;
  static metadesc: string = CrudDefMetaDesc.remove_metadesc;
}

// ████ REMOVE INPUT DTO ████████████████████████████████████████████████
@InputType()
export class UserSavedSearchRemoveInputWhereDto extends UserSavedSearchFindInputWhereDto implements RemoveInputWhereCRUDTypeDefinition{
  /**
   * avoiding redundant code
   * considering whatever FindInputWhere ask for input, same apply to SoftRemoveInputWhere so extending class
   * just add what is new or different for SoftRemoveInputWhere, that means it's 100% customisable
   * you can also remove extends *FindInputWhere and define entire custom dto here if needed 
   **/
}

@InputType()
export class UserSavedSearchRemoveInputDto implements RemoveInputCRUDTypeDefinition{
  @Field(() => [UserSavedSearchRemoveInputWhereDto], {nullable: true, description: CrudDefMetaDesc.remove_where})
  @Validate(OnlyOneSeachOperatorAllowed)
  where?: FindOptionsWhere<UserSavedSearchRemoveInputWhereDto>[];
}


// ████ REMOVE OUTPUT DTO ████████████████████████████████████████████████

@ObjectType()
@Directive('@shareable')
export class UserSavedSearchRemoveOutputAffectedRowsDto extends UserSavedSearchFindOutputRowsDto implements RemoveOutputAffectedRowsCRUDTypeDefinition{
  /**
   * avoiding redundant code
   * considering whatever FindOutputRows return, same apply to SoftRemoveOutputAffectedRows so extending class
   * just add what is new or different for SoftRemoveOutputAffectedRows, that means it's 100% customisable
   * you can also remove extends FindOutputRows and define entire custom dto here if needed 
   **/
}
@ObjectType()
@Directive('@shareable')
export class UserSavedSearchRemoveOutputDto extends CrudAffectedDto implements RemoveOutputCRUDTypeDefinition{
  /**
   * avoiding redundant code
   * considering whatever AffectedDto return, same apply to SoftRemoveOutput so extending class
   * just add what is new or different for SoftRemoveOutput, that means it's 100% customisable
   * you can also remove extends AffectedDto and define entire custom dto here if needed 
   **/

  @Field(() => [UserSavedSearchEntity]) 
  declare affectedRows?: UserSavedSearchEntity[] | any
}

/**
 * █████████████████████████████████████████████████████████████
 * █ RECOVER DTO ████████████████████████████████████████████████
 * █████████████████████████████████████████████████████████████
**/
// unlike soft delete, this operation first get the data from database and after run the operation, so it's complex but provide more and clear information about operation

export class UserSavedSearchRecoverDto extends UserSavedSearchEntity implements RecoverDtoCRUDTypeDefinition{
  static metaname: string = `${UserSavedSearchEntity.metaname}${RecoverArtefact}`;
  static metadesc: string = CrudDefMetaDesc.recover_metadesc;
}

// ████ RECOVER INPUT DTO ██████████████████████████████████████████████████████

@InputType()
export class UserSavedSearchRecoverInputWhereDto extends UserSavedSearchFindInputWhereDto implements RecoverInputWhereCRUDTypeDefinition{
/**
 * avoiding redundant code
 * considering whatever FindInputWhere ask for input, same apply to SoftDeleteInputWhere so extending class
 * just add what is new or different for SoftDeleteInputWhere, that means it's 100% customisable
 * you can also remove extends *FindInputWhere and define entire custom dto here if needed 
 **/
}

@InputType()
export class UserSavedSearchRecoverInputDto implements RecoverInputCRUDTypeDefinition{
  @Field(() => [UserSavedSearchRecoverInputWhereDto], {nullable: true, description: CrudDefMetaDesc.recover_where})
  @Validate(OnlyOneSeachOperatorAllowed)
  where?: FindOptionsWhere<UserSavedSearchRecoverInputWhereDto>[];
}

// ████ RECOVER OUTPUT DTO ██████████████████████████████████████████████████████

@ObjectType()
@Directive('@shareable')
export class UserSavedSearchRecoverOutputAffectedRowsDto extends UserSavedSearchFindOutputRowsDto implements RecoverOutputAffectedRowsCRUDTypeDefinition{
  /**
   * avoiding redundant code
   * considering whatever FindOutputRows return, same apply to RecoverOutputAffectedRows so extending class
   * just add what is new or different for RecoverOutputAffectedRows, that means it's 100% customisable
   * you can also remove extends FindOutputRows and define entire custom dto here if needed 
   **/
}

@ObjectType()
@Directive('@shareable')
export class UserSavedSearchRecoverOutputDto extends CrudAffectedDto implements RecoverOutputCRUDTypeDefinition{
  /**
   * avoiding redundant code
   * considering whatever AffectedDto return, same apply to RecoverOutput so extending class
   * just add what is new or different for RecoverOutput, that means it's 100% customisable
   * you can also remove extends AffectedDto and define entire custom dto here if needed 
   **/

  @Field(() => [UserSavedSearchEntity]) 
  declare affectedRows?: UserSavedSearchEntity[] | any;
}

/**
 * █████████████████████████████████████████████████████████████
 * █ UPLOAD DTO ████████████████████████████████████████████████
 * █████████████████████████████████████████████████████████████
**/

export class UserSavedSearchUploadDto extends UserSavedSearchEntity implements UploadDtoCRUDTypeDefinition {
  static metaname: string = `${UserSavedSearchEntity?.metaname}${UploadArtefact}`;
  static metadesc: string = CrudDefMetaDesc.upload_metadesc;
}

// ████ UPLOAD INPUT DTO ████████████████████████████████████████████████
@InputType()
export class UserSavedSearchUploadInputDto extends UploadInputDto implements UploadInputArtefactCRUDTypeDefinition {
@Field(() => UserSavedSearchUploadRefTypeEnum, {nullable: false, description: CrudDefMetaDesc.upload_ref_type})
@IsNotEmpty()
ref_type!: UserSavedSearchUploadRefTypeEnum;
}

// ████ UPLOAD OUTPUT DTO ███████████████████████████████████████████████
@ObjectType()
@Directive('@shareable')
export class UserSavedSearchUploadOutputDto extends UploadOutputDto implements UploadOutputArtefactCRUDTypeDefinition {
@Field(() => UserSavedSearchUploadRefTypeEnum, {nullable: true, description: CrudDefMetaDesc.upload_ref_type})
ref_type?: UserSavedSearchUploadRefTypeEnum;
}

/**
* █████████████████████████████████████████████████████████████
* █ UPLOAD DELETE DTO █████████████████████████████████████████
* █████████████████████████████████████████████████████████████
**/

export class UserSavedSearchUploadDeleteDto extends UserSavedSearchEntity implements UploadDeleteDtoCRUDTypeDefinition {
static metaname: string = `${UserSavedSearchEntity?.metaname}${UploadDeleteArtefact}`;
static metadesc: string = CrudDefMetaDesc.upload_delete_metadesc;
}

// ████ UPLOAD DELETE INPUT DTO ████████████████████████████████████████████████
@InputType()
export class UserSavedSearchUploadDeleteInputDto extends UploadDeleteInputDto implements UploadDeleteInputArtefactCRUDTypeDefinition {
@Field(() => UserSavedSearchUploadRefTypeEnum, {nullable: false, description: CrudDefMetaDesc.upload_ref_type})
@IsNotEmpty()
ref_type!: UserSavedSearchUploadRefTypeEnum;
}

// ████ UPLOAD DELETE OUTPUT DTO ███████████████████████████████████████████████
@ObjectType()
@Directive('@shareable')
export class UserSavedSearchUploadDeleteOutputDto extends UploadDeleteOutputDto implements UploadDeleteOutputArtefactCRUDTypeDefinition {
@Field(() => UserSavedSearchUploadRefTypeEnum, {nullable: true, description: CrudDefMetaDesc.upload_ref_type})
ref_type?: UserSavedSearchUploadRefTypeEnum;
}