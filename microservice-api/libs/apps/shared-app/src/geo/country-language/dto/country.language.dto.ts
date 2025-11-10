import { UploadDeleteInputDto, UploadDeleteOutputDto, UploadInputDto, UploadOutputDto, UploadArtefact, UploadDtoCRUDTypeDefinition, UploadInputArtefactCRUDTypeDefinition, UploadOutputArtefactCRUDTypeDefinition, UploadDeleteArtefact, UploadDeleteDtoCRUDTypeDefinition, UploadDeleteInputArtefactCRUDTypeDefinition, UploadDeleteOutputArtefactCRUDTypeDefinition, CreateArtefact, CreateDtoCRUDTypeDefinition, CreateInputCRUDTypeDefinition, CreateOutputCRUDTypeDefinition, CrudDefMetaDesc, DateTime, DeleteArtefact, DeleteDtoCRUDTypeDefinition, DeleteInputCRUDTypeDefinition, DeleteOutputCRUDTypeDefinition, FindArtefact, FindDtoCRUDTypeDefinition, FindInputGroupByCRUDTypeDefinition, FindInputSortOrderCRUDTypeDefinition, FindInputCRUDTypeDefinition, FindInputWhereCRUDTypeDefinition, FindOneByIdArtefact, FindOperatorDto, FindOutputPaginationDto, FindOutputCRUDTypeDefinition, OnlyOneSeachOperatorAllowed, RecordSortDirectionEnum, RestoreArtefact, RestoreDtoCRUDTypeDefinition, RestoreInputCRUDTypeDefinition, SoftDeleteArtefact, SoftDeleteDtoCRUDTypeDefinition, SoftDeleteInputCRUDTypeDefinition, SoftDeleteOutputCRUDTypeDefinition, UpdateArtefact, UpdateDtoCRUDTypeDefinition, UpdateInputSetsCRUDTypeDefinition, UpdateInputCRUDTypeDefinition, UpdateInputWhereCRUDTypeDefinition, UpdateOutputCRUDTypeDefinition, SoftDeleteInputWhereCRUDTypeDefinition, RestoreInputWhereCRUDTypeDefinition, RestoreOutputCRUDTypeDefinition, UpsertDtoCRUDTypeDefinition, UpsertArtefact, UpsertInputCRUDTypeDefinition, UpsertOutputCRUDTypeDefinition, UpsertStatusEnum, SoftRemoveDtoCRUDTypeDefinition, SoftRemoveArtefact, SoftRemoveInputWhereCRUDTypeDefinition, SoftRemoveInputCRUDTypeDefinition, SoftRemoveOutputCRUDTypeDefinition, RemoveDtoCRUDTypeDefinition, RemoveArtefact, RemoveInputCRUDTypeDefinition, RemoveOutputCRUDTypeDefinition, SoftRemoveOutputAffectedRowsCRUDTypeDefinition, FindOutputRowsCRUDTypeDefinition, UpdateOutputAffectedRowsCRUDTypeDefinition, RemoveOutputAffectedRowsCRUDTypeDefinition, RecoverDtoCRUDTypeDefinition, RecoverArtefact, RecoverInputCRUDTypeDefinition, RecoverOutputCRUDTypeDefinition, RecoverInputWhereCRUDTypeDefinition, RecoverOutputAffectedRowsCRUDTypeDefinition, FindInputDtoCRUDTypeDefinition, FindOneByIdInputCRUDTypeDefinition, FindInputPaginationOptionsDto, FindOutputPaginationOptionsDto, IdInputDto, DeleteInputWhereCRUDTypeDefinition, RemoveInputWhereCRUDTypeDefinition, WithDeletedInputDto } from "@libs/library-app";
import { Directive, Field, Float, InputType, Int, IntersectionType, ObjectType, PartialType } from "@nestjs/graphql";
import { CountryLanguageEntityMeta as meta, CountryLanguageEntity } from "../entities/country.language.entity";
import { IsNotEmpty, IsOptional, Validate } from "class-validator";
import { FindManyOptions, FindOptionsOrder, FindOptionsWhere } from "typeorm";
import { Exclude } from "class-transformer";
import { CrudAffectedDto, UpsertOutputProcessStatusDto } from "@libs/library-app";
import { CountryFindInputWhereDto } from "../../country/dto/country.dto";
import { LanguageFindInputWhereDto } from "../../language/dto/language.dto";
import { CountryLanguageUploadFileFieldEnum } from "../country.language.enum";


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
export class CountryLanguageDto extends CountryLanguageEntity implements FindInputDtoCRUDTypeDefinition{
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
    declare country_id?: any;
    declare lang_id?: any;
    declare created?: any;
    declare updated?: any;
    declare deleted?: any;

    declare fr_country?: any;
    declare fr_language?: any;
}

/**
 * █████████████████████████████████████████████████████████████
 * █ FIND DTO ██████████████████████████████████████████████████
 * █████████████████████████████████████████████████████████████
**/
@ObjectType({ isAbstract: true })
@Directive('@shareable')
export class CountryLanguageFindDto extends CountryLanguageEntity implements FindDtoCRUDTypeDefinition{
    static metaname: string = `${CountryLanguageEntity?.metaname}${FindArtefact}`;
    static metadesc: string = CrudDefMetaDesc.find_metadesc;
}

// ████ FIND INPUT DTO ████████████████████████████████████████████████


@InputType()
export class CountryLanguageFindInputWhereDto extends CountryLanguageDto implements FindInputWhereCRUDTypeDefinition{
    @Field(() => FindOperatorDto, {nullable: true, description: meta?.id.desc})
    @IsOptional()
    declare id?: FindOperatorDto;    

    @Field(() => FindOperatorDto, {nullable: true, description: meta?.country_id.desc})
    @IsOptional()
    declare country_id?: FindOperatorDto;

    @Field(() => FindOperatorDto, {nullable: true, description: meta?.lang_id.desc})
    @IsOptional()
    declare lang_id?: FindOperatorDto;

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

    @Field(() => [CountryFindInputWhereDto], {nullable: true, description: meta?.fr_country.desc})
    @IsOptional()
    declare fr_country?: CountryFindInputWhereDto[];

    @Field(() => [LanguageFindInputWhereDto], {nullable: true, description: meta?.fr_language.desc})
    @IsOptional()
    declare fr_language?: LanguageFindInputWhereDto[];

}

@InputType()
export class CountryLanguageFindInputSortOrderDto implements FindOptionsOrder<CountryLanguageDto>, FindInputSortOrderCRUDTypeDefinition{
    
    @Field(() => RecordSortDirectionEnum, { nullable: true }) 
    @IsOptional()
    id?: RecordSortDirectionEnum;

    @Field(() => RecordSortDirectionEnum, {nullable: true, description: meta?.country_id.desc})
    @IsOptional()
    country_id?: RecordSortDirectionEnum;

    @Field(() => RecordSortDirectionEnum, {nullable: true, description: meta?.lang_id.desc})
    @IsOptional()
    lang_id?: RecordSortDirectionEnum;

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
export class CountryLanguageFindInputGroupByDto implements FindOptionsOrder<CountryLanguageDto>, FindInputGroupByCRUDTypeDefinition{
    
    @Field(() => Boolean, { nullable: true })
    @IsOptional()
    country_id?: boolean;

    @Field(() => Boolean, { nullable: true })
    @IsOptional()
    lang_id?: boolean;

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
export class CountryLanguageFindInputDto extends IntersectionType(FindInputPaginationOptionsDto, WithDeletedInputDto) implements FindManyOptions<CountryLanguageDto>, FindInputCRUDTypeDefinition{
    // input layout design for users to perform find with various database options
  
    /**
     * Conditions to be met for the resulting set.
     * also validate the user pass only 1 operator to search for field
     */
    @Field(() => [CountryLanguageFindInputWhereDto], { nullable: true, description: CrudDefMetaDesc.find_where })
    @IsOptional()
    @Validate(OnlyOneSeachOperatorAllowed)
    declare where?: FindOptionsWhere<CountryLanguageFindInputWhereDto>[];
  
  
    /**
     * Specifies how to group the rows returned by the SELECT statement.
     */
    @Field(() => CountryLanguageFindInputGroupByDto, { nullable: true, description: CrudDefMetaDesc.find_group_by})
    @IsOptional()
    declare groupBy?: CountryLanguageFindInputGroupByDto;
  
    /**
     * Sort the result set by fields using ascending or descending order.
     */
    @Field(() => CountryLanguageFindInputSortOrderDto, { nullable: true, description: CrudDefMetaDesc.find_order })
    @IsOptional()
    declare order?: FindOptionsOrder<CountryLanguageFindInputSortOrderDto>;
}


// ████ FIND OUTPUT DTO ████████████████████████████████████████████████

@ObjectType()
@Directive('@shareable')
export class CountryLanguageFindOutputRowsDto extends CountryLanguageFindDto implements FindOutputRowsCRUDTypeDefinition{
    // this DTO will be used at many palce for output object, os make sure this is properly developed
}

@ObjectType()
@Directive('@shareable')
export class CountryLanguageFindOutputDto extends FindOutputPaginationOptionsDto implements FindOutputCRUDTypeDefinition{
    // output layout design for users to get find response

    // we assign any because iin GRAPHQL for requuest body this rows will have fields with boolean value whether to include in response or not
    // this is very crucial to understand this structure and you need to understand how graphQL works
    @Field(() => [CountryLanguageEntity], {description: CrudDefMetaDesc.find_rows})
    declare rows?: CountryLanguageEntity[] | any;
}


/**
 * ██████████████████████████████████████████████████████████████████████████████████████████████████████████████████
 * █ FIND ONE BY ID DTO █████████████████████████████████████████████████████████████████████████████████████████████
 * ██████████████████████████████████████████████████████████████████████████████████████████████████████████████████
**/

export class CountryLanguageFindOneByIdDto extends CountryLanguageEntity implements FindDtoCRUDTypeDefinition{
    static metaname: string = `${CountryLanguageEntity.metaname}${FindOneByIdArtefact}`;
    static metadesc: string = CrudDefMetaDesc.findOneById_metadesc;
}

// ████ FIND ONE BY ID INPUT DTO ████████████████████████████████████████████████

@InputType()
export class CountryLanguageFindOneByIdInputDto extends IntersectionType(IdInputDto, WithDeletedInputDto) implements FindOneByIdInputCRUDTypeDefinition{

}

/**
 * █████████████████████████████████████████████████████████████
 * █ CREATE DTO ████████████████████████████████████████████████
 * █████████████████████████████████████████████████████████████
**/

export class CountryLanguageCreateDto extends CountryLanguageEntity implements CreateDtoCRUDTypeDefinition {
    static metaname: string = `${CountryLanguageEntity.metaname}${CreateArtefact}`;
    static metadesc: string = CrudDefMetaDesc.create_metadesc;
}
// ████ CREATE INPUT DTO ████████████████████████████████████████████████

@InputType()
export class CountryLanguageCreateInputDto extends  CountryLanguageCreateDto implements CreateInputCRUDTypeDefinition {
  
    @Field(() => Int, {nullable: false, description: meta?.country_id.desc})
    declare country_id: number;

    @Field(() => Int, {nullable: false, description: meta?.lang_id.desc})
    declare lang_id: number;


}

// ████ CREATE OUTPUT DTO ████████████████████████████████████████████████

@ObjectType()
@Directive('@shareable')
export class CountryLanguageCreateOutputDto extends CountryLanguageFindOutputRowsDto implements CreateOutputCRUDTypeDefinition {
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


export class CountryLanguageUpdateDto extends CountryLanguageDto implements UpdateDtoCRUDTypeDefinition{
    static metaname: string = `${CountryLanguageEntity.metaname}${UpdateArtefact}`;
    static metadesc: string = CrudDefMetaDesc.update_metadesc;
}

// ████ UPDATE INPUT DTO ████████████████████████████████████████████████

@InputType()
export class CountryLanguageUpdateInputWhereDto extends CountryLanguageFindInputWhereDto implements UpdateInputWhereCRUDTypeDefinition{
    /**
     * avoiding redundant code
     * considering whatever FindInputWhere ask for input, same apply to UpdateInputWhere so extending class
     * just add what is new or different for UpdateInputWhere, that means it's 100% customisable
     * you can also remove extends *FindInputWhere and define entire custom dto here if needed 
     **/
}

@InputType()
export class CountryLanguageUpdateInputSetsDto extends PartialType(CountryLanguageCreateInputDto) implements UpdateInputSetsCRUDTypeDefinition {
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
export class CountryLanguageUpdateInputDto implements UpdateInputCRUDTypeDefinition{
    // input layout design for users to perform update with various database options
  
    /**
     * Conditions to be met for the resulting set.
     * also validate the user pass only 1 operator to search for field
     */
    @Field(() => [CountryLanguageUpdateInputWhereDto], { nullable: false, description: CrudDefMetaDesc.update_where })
    @IsNotEmpty()
    @Validate(OnlyOneSeachOperatorAllowed)
    where!: FindOptionsWhere<CountryLanguageUpdateInputWhereDto>[];

    /**
     * What to set for update
     * basically fields list of update
     */
    @Field(() => CountryLanguageUpdateInputSetsDto, { nullable: false, description: CrudDefMetaDesc.update_sets})
    @IsNotEmpty()
    sets!: CountryLanguageUpdateInputSetsDto

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
export class CountryLanguageUpdateOutputAffectedRowsDto extends CountryLanguageFindOutputRowsDto implements UpdateOutputAffectedRowsCRUDTypeDefinition{
    /**
     * avoiding redundant code
     * considering whatever FindOutputRows return, same apply to UpdateOutputAffectedRows so extending class
     * just add what is new or different for UpdateOutputAffectedRows, that means it's 100% customisable
     * you can also remove extends *FindOutputRows and define entire custom dto here if needed 
     **/
}

@ObjectType()
@Directive('@shareable')
export class CountryLanguageUpdateOutputDto extends CrudAffectedDto implements UpdateOutputCRUDTypeDefinition{
  @Field(() => [CountryLanguageEntity], {description: CrudDefMetaDesc.update_affected_rows}) 
  declare affectedRows?: CountryLanguageEntity[] | any;
}


/**
 * █████████████████████████████████████████████████████████████
 * █ SOFT DELETE DTO ███████████████████████████████████████████
 * █████████████████████████████████████████████████████████████
**/
// this operation run directly withouth checking the data if exist or not, so it's quick but do not provide more information about operation

// ████ SOFT DELETE INPUT DTO ████████████████████████████████████████████████
export class CountryLanguageSoftDeleteDto extends CountryLanguageEntity implements SoftDeleteDtoCRUDTypeDefinition{
  static metaname: string = `${CountryLanguageEntity.metaname}${SoftDeleteArtefact}`;
  static metadesc: string = CrudDefMetaDesc.softDelete_metadesc;
}

@InputType()
export class CountryLanguageSoftDeleteInputWhereDto extends CountryLanguageFindInputWhereDto implements SoftDeleteInputWhereCRUDTypeDefinition{
  /**
   * avoiding redundant code
   * considering whatever FindInputWhere ask for input, same apply to SoftDeleteInputWhere so extending class
   * just add what is new or different for SoftDeleteInputWhere, that means it's 100% customisable
   * you can also remove extends *FindInputWhere and define entire custom dto here if needed 
   **/
}

@InputType()
export class CountryLanguageSoftDeleteInputDto implements SoftDeleteInputCRUDTypeDefinition{
  @Field(() => [CountryLanguageSoftDeleteInputWhereDto], {nullable: true, description: CrudDefMetaDesc.softDelete_where})
  @Validate(OnlyOneSeachOperatorAllowed)
  where?: FindOptionsWhere<CountryLanguageSoftDeleteInputWhereDto>[];
}


// ████ SOFT DELETE OUTPUT DTO ████████████████████████████████████████████████

@ObjectType()
@Directive('@shareable')
export class CountryLanguageSoftDeleteOutputDto extends CrudAffectedDto implements SoftDeleteOutputCRUDTypeDefinition{
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

export class CountryLanguageDeleteDto extends CountryLanguageEntity implements DeleteDtoCRUDTypeDefinition{
  static metaname: string = `${CountryLanguageEntity.metaname}${DeleteArtefact}`;
  static metadesc: string = CrudDefMetaDesc.delete_metadesc;
}

// ████ DELETE INPUT DTO ████████████████████████████████████████████████

@InputType()
export class CountryLanguageDeleteInputWhereDto extends CountryLanguageFindInputWhereDto implements DeleteInputWhereCRUDTypeDefinition{
  /**
   * avoiding redundant code
   * considering whatever FindInputWhere ask for input, same apply to SoftDeleteInputWhere so extending class
   * just add what is new or different for SoftDeleteInputWhere, that means it's 100% customisable
   * you can also remove extends *FindInputWhere and define entire custom dto here if needed 
   **/
}

@InputType()
export class CountryLanguageDeleteInputDto implements DeleteInputCRUDTypeDefinition{
  @Field(() => [CountryLanguageDeleteInputWhereDto], {nullable: true, description: CrudDefMetaDesc.delete_where})
  @Validate(OnlyOneSeachOperatorAllowed)
  where?: FindOptionsWhere<CountryLanguageDeleteInputWhereDto>[];
}


// ████ DELETE OUTPUT DTO ████████████████████████████████████████████████

@ObjectType()
@Directive('@shareable')
export class CountryLanguageDeleteOutputDto extends CrudAffectedDto implements DeleteOutputCRUDTypeDefinition{
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

export class CountryLanguageRestoreDto extends CountryLanguageEntity implements RestoreDtoCRUDTypeDefinition{
    static metaname: string = `${CountryLanguageEntity.metaname}${RestoreArtefact}`;
    static metadesc: string = CrudDefMetaDesc.restore_metadesc;
}

// ████ RESTORE INPUT DTO ██████████████████████████████████████████████████████

@InputType()
export class CountryLanguageRestoreInputWhereDto extends CountryLanguageFindInputWhereDto implements RestoreInputWhereCRUDTypeDefinition{
  /**
   * avoiding redundant code
   * considering whatever FindInputWhere ask for input, same apply to SoftDeleteInputWhere so extending class
   * just add what is new or different for SoftDeleteInputWhere, that means it's 100% customisable
   * you can also remove extends *FindInputWhere and define entire custom dto here if needed 
   **/
}

@InputType()
export class CountryLanguageRestoreInputDto implements RestoreInputCRUDTypeDefinition{
  @Field(() => [CountryLanguageRestoreInputWhereDto], {nullable: true, description: CrudDefMetaDesc.restore_where})
  @Validate(OnlyOneSeachOperatorAllowed)
  where?: FindOptionsWhere<CountryLanguageRestoreInputWhereDto>[];
}
  
// ████ RESTORE OUTPUT DTO ██████████████████████████████████████████████████████
  
@ObjectType()
@Directive('@shareable')
export class CountryLanguageRestoreOutputDto extends CrudAffectedDto implements RestoreOutputCRUDTypeDefinition{
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

export class CountryLanguageUpsertDto extends CountryLanguageEntity implements UpsertDtoCRUDTypeDefinition{
  static metaname: string = `${CountryLanguageEntity.metaname}${UpsertArtefact}`;
  static metadesc: string = CrudDefMetaDesc.upsert_metadesc;
}

// ████ UPSERT INPUT DTO ██████████████████████████████████████████████████████

@InputType()
export class CountryLanguageUpsertInputDto extends CountryLanguageCreateInputDto implements UpsertInputCRUDTypeDefinition{
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
    static conflictResolveFields: (keyof CountryLanguageUpsertInputDto)[] = ['country_id', 'lang_id'];
}

// ████ UPSERT OUTPUT DTO ██████████████████████████████████████████████████████

@ObjectType()
@Directive('@shareable')
export class CountryLanguageUpsertOutputDto extends IntersectionType(CountryLanguageCreateOutputDto, UpsertOutputProcessStatusDto) implements UpsertOutputCRUDTypeDefinition{ 
    
}

/**
 * █████████████████████████████████████████████████████████████
 * █ SOFT REMOVE DTO ███████████████████████████████████████████
 * █████████████████████████████████████████████████████████████
**/
// unlike soft delete, this operation first get the data from database and after run the operation, so it's complex but provide more and clear information about operation

// ████ SOFT REMOVE INPUT DTO ████████████████████████████████████████████████
export class CountryLanguageSoftRemoveDto extends CountryLanguageEntity implements SoftRemoveDtoCRUDTypeDefinition{
  static metaname: string = `${CountryLanguageEntity.metaname}${SoftRemoveArtefact}`;
  static metadesc: string = CrudDefMetaDesc.softRemove_metadesc;
}

@InputType()
export class CountryLanguageSoftRemoveInputWhereDto extends CountryLanguageFindInputWhereDto implements SoftRemoveInputWhereCRUDTypeDefinition{
  /**
   * avoiding redundant code
   * considering whatever FindInputWhere ask for input, same apply to SoftRemoveInputWhere so extending class
   * just add what is new or different for SoftRemoveInputWhere, that means it's 100% customisable
   * you can also remove extends *FindInputWhere and define entire custom dto here if needed 
   **/
}

@InputType()
export class CountryLanguageSoftRemoveInputDto implements SoftRemoveInputCRUDTypeDefinition{
  @Field(() => [CountryLanguageSoftRemoveInputWhereDto], {nullable: true, description: CrudDefMetaDesc.softRemove_where})
  @Validate(OnlyOneSeachOperatorAllowed)
  where?: FindOptionsWhere<CountryLanguageSoftRemoveInputWhereDto>[];
}


// ████ SOFT REMOVE OUTPUT DTO ████████████████████████████████████████████████

@ObjectType()
@Directive('@shareable')
export class CountryLanguageSoftRemoveOutputAffectedRowsDto extends CountryLanguageFindOutputRowsDto implements SoftRemoveOutputAffectedRowsCRUDTypeDefinition{
  /**
   * avoiding redundant code
   * considering whatever FindOutputRows return, same apply to SoftRemoveOutputAffectedRows so extending class
   * just add what is new or different for SoftRemoveOutputAffectedRows, that means it's 100% customisable
   * you can also remove extends FindOutputRows and define entire custom dto here if needed 
   **/
}
@ObjectType()
@Directive('@shareable')
export class CountryLanguageSoftRemoveOutputDto extends CrudAffectedDto implements SoftRemoveOutputCRUDTypeDefinition{
  /**
   * avoiding redundant code
   * considering whatever AffectedDto return, same apply to SoftRemoveOutput so extending class
   * just add what is new or different for SoftRemoveOutput, that means it's 100% customisable
   * you can also remove extends AffectedDto and define entire custom dto here if needed 
   **/

  @Field(() => [CountryLanguageEntity]) 
  declare affectedRows?: CountryLanguageEntity[]
}

/**
 * █████████████████████████████████████████████████████████████
 * █ REMOVE DTO ████████████████████████████████████████████████
 * █████████████████████████████████████████████████████████████
**/
// unlike soft delete, this operation first get the data from database and after run the operation, so it's complex but provide more and clear information about operation

export class CountryLanguageRemoveDto extends CountryLanguageEntity implements RemoveDtoCRUDTypeDefinition{
  static metaname: string = `${CountryLanguageEntity.metaname}${RemoveArtefact}`;
  static metadesc: string = CrudDefMetaDesc.remove_metadesc;
}

// ████ REMOVE INPUT DTO ████████████████████████████████████████████████

@InputType()
export class CountryLanguageRemoveInputWhereDto extends CountryLanguageFindInputWhereDto implements RemoveInputWhereCRUDTypeDefinition{
  /**
   * avoiding redundant code
   * considering whatever FindInputWhere ask for input, same apply to SoftRemoveInputWhere so extending class
   * just add what is new or different for SoftRemoveInputWhere, that means it's 100% customisable
   * you can also remove extends *FindInputWhere and define entire custom dto here if needed 
   **/
}

@InputType()
export class CountryLanguageRemoveInputDto implements RemoveInputCRUDTypeDefinition{
  @Field(() => [CountryLanguageRemoveInputWhereDto], {nullable: true, description: CrudDefMetaDesc.remove_where })
  @Validate(OnlyOneSeachOperatorAllowed)
  where?: FindOptionsWhere<CountryLanguageRemoveInputWhereDto>[];
}

// ████ REMOVE OUTPUT DTO ████████████████████████████████████████████████

@ObjectType()
@Directive('@shareable')
export class CountryLanguageRemoveOutputAffectedRowsDto extends CountryLanguageFindOutputRowsDto implements RemoveOutputAffectedRowsCRUDTypeDefinition{
  /**
   * avoiding redundant code
   * considering whatever FindOutputRows return, same apply to RemoveOutputAffectedRows so extending class
   * just add what is new or different for RemoveOutputAffectedRows, that means it's 100% customisable
   * you can also remove extends FindOutputRows and define entire custom dto here if needed 
   **/
}
@ObjectType()
@Directive('@shareable')
export class CountryLanguageRemoveOutputDto extends CrudAffectedDto implements RemoveOutputCRUDTypeDefinition{
  /**
   * avoiding redundant code
   * considering whatever AffectedDto return, same apply to RemoveOutput so extending class
   * just add what is new or different for RemoveOutput, that means it's 100% customisable
   * you can also remove extends AffectedDto and define entire custom dto here if needed 
   **/
  @Field(() => [CountryLanguageEntity]) 
  declare affectedRows?: CountryLanguageEntity[] | any;
}

/**
 * █████████████████████████████████████████████████████████████
 * █ RECOVER DTO ████████████████████████████████████████████████
 * █████████████████████████████████████████████████████████████
**/
// unlike soft delete, this operation first get the data from database and after run the operation, so it's complex but provide more and clear information about operation

export class CountryLanguageRecoverDto extends CountryLanguageEntity implements RecoverDtoCRUDTypeDefinition{
  static metaname: string = `${CountryLanguageEntity.metaname}${RecoverArtefact}`;
  static metadesc: string = CrudDefMetaDesc.recover_metadesc;
}

// ████ RECOVER INPUT DTO ██████████████████████████████████████████████████████

@InputType()
export class CountryLanguageRecoverInputWhereDto extends CountryLanguageFindInputWhereDto implements RecoverInputWhereCRUDTypeDefinition{
/**
 * avoiding redundant code
 * considering whatever FindInputWhere ask for input, same apply to SoftDeleteInputWhere so extending class
 * just add what is new or different for SoftDeleteInputWhere, that means it's 100% customisable
 * you can also remove extends *FindInputWhere and define entire custom dto here if needed 
 **/
}

@InputType()
export class CountryLanguageRecoverInputDto implements RecoverInputCRUDTypeDefinition{
  @Field(() => [CountryLanguageRecoverInputWhereDto], {nullable: true, description: CrudDefMetaDesc.recover_where})
  @Validate(OnlyOneSeachOperatorAllowed)
  where?: FindOptionsWhere<CountryLanguageRecoverInputWhereDto>[];
}

// ████ RECOVER OUTPUT DTO ██████████████████████████████████████████████████████

@ObjectType()
@Directive('@shareable')
export class CountryLanguageRecoverOutputAffectedRowsDto extends CountryLanguageFindOutputRowsDto implements RecoverOutputAffectedRowsCRUDTypeDefinition{
  /**
   * avoiding redundant code
   * considering whatever FindOutputRows return, same apply to RecoverOutputAffectedRows so extending class
   * just add what is new or different for RecoverOutputAffectedRows, that means it's 100% customisable
   * you can also remove extends FindOutputRows and define entire custom dto here if needed 
   **/
}

@ObjectType()
@Directive('@shareable')
export class CountryLanguageRecoverOutputDto extends CrudAffectedDto implements RecoverOutputCRUDTypeDefinition{
  /**
   * avoiding redundant code
   * considering whatever AffectedDto return, same apply to RecoverOutput so extending class
   * just add what is new or different for RecoverOutput, that means it's 100% customisable
   * you can also remove extends AffectedDto and define entire custom dto here if needed 
   **/
  @Field(() => [CountryLanguageEntity]) 
  declare affectedRows?: CountryLanguageEntity[] | any;
}

/**
 * █████████████████████████████████████████████████████████████
 * █ UPLOAD DTO ████████████████████████████████████████████████
 * █████████████████████████████████████████████████████████████
**/

export class CountryLanguageUploadDto extends CountryLanguageEntity implements UploadDtoCRUDTypeDefinition {
  static metaname: string = `${CountryLanguageEntity?.metaname}${UploadArtefact}`;
  static metadesc: string = CrudDefMetaDesc.upload_metadesc;
}

// ████ UPLOAD REF TYPE DTO ████████████████████████████████████████████████

@InputType()
export class UploadFileFieldInputDto {
@Field(() => CountryLanguageUploadFileFieldEnum, {nullable: false, description: CrudDefMetaDesc.upload_file_field})
@IsNotEmpty()
file_field!: CountryLanguageUploadFileFieldEnum;
}

@ObjectType()
@Directive('@shareable')
export class UploadFileFieldOutputDto extends PartialType(UploadFileFieldInputDto) {

}

// ████ UPLOAD INPUT DTO ████████████████████████████████████████████████
@InputType()
export class CountryLanguageUploadInputDto extends IntersectionType(UploadFileFieldInputDto, UploadInputDto) implements UploadInputArtefactCRUDTypeDefinition {

}

// ████ UPLOAD OUTPUT DTO ███████████████████████████████████████████████
@ObjectType()
@Directive('@shareable')
export class CountryLanguageUploadOutputDto extends IntersectionType(UploadFileFieldOutputDto, UploadOutputDto) implements UploadOutputArtefactCRUDTypeDefinition {

}

/**
* █████████████████████████████████████████████████████████████
* █ UPLOAD DELETE DTO █████████████████████████████████████████
* █████████████████████████████████████████████████████████████
**/

export class CountryLanguageUploadDeleteDto extends CountryLanguageEntity implements UploadDeleteDtoCRUDTypeDefinition {
static metaname: string = `${CountryLanguageEntity?.metaname}${UploadDeleteArtefact}`;
static metadesc: string = CrudDefMetaDesc.upload_delete_metadesc;
}

// ████ UPLOAD DELETE INPUT DTO ████████████████████████████████████████████████
@InputType()
export class CountryLanguageUploadDeleteInputDto extends IntersectionType(UploadFileFieldInputDto, UploadDeleteInputDto) implements UploadDeleteInputArtefactCRUDTypeDefinition {

}

// ████ UPLOAD DELETE OUTPUT DTO ███████████████████████████████████████████████
@ObjectType()
@Directive('@shareable')
export class CountryLanguageUploadDeleteOutputDto extends IntersectionType(UploadFileFieldOutputDto, UploadDeleteOutputDto) implements UploadDeleteOutputArtefactCRUDTypeDefinition {

}