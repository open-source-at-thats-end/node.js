import { CreateArtefact, CreateDtoCRUDTypeDefinition, CreateInputCRUDTypeDefinition, CreateOutputCRUDTypeDefinition, CrudDefMetaDesc, DateTime, DeleteArtefact, DeleteDtoCRUDTypeDefinition, DeleteInputCRUDTypeDefinition, DeleteOutputCRUDTypeDefinition, FindArtefact, FindDtoCRUDTypeDefinition, FindInputGroupByCRUDTypeDefinition, FindInputSortOrderCRUDTypeDefinition, FindInputCRUDTypeDefinition, FindInputWhereCRUDTypeDefinition, FindOneByIdArtefact, FindOperatorDto, FindOutputPaginationDto, FindOutputCRUDTypeDefinition, OnlyOneSeachOperatorAllowed, RecordSortDirectionEnum, RestoreArtefact, RestoreDtoCRUDTypeDefinition, RestoreInputCRUDTypeDefinition, SoftDeleteArtefact, SoftDeleteDtoCRUDTypeDefinition, SoftDeleteInputCRUDTypeDefinition, SoftDeleteOutputCRUDTypeDefinition, UpdateArtefact, UpdateDtoCRUDTypeDefinition, UpdateInputSetsCRUDTypeDefinition, UpdateInputCRUDTypeDefinition, UpdateInputWhereCRUDTypeDefinition, UpdateOutputCRUDTypeDefinition, SoftDeleteInputWhereCRUDTypeDefinition, RestoreInputWhereCRUDTypeDefinition, RestoreOutputCRUDTypeDefinition, UpsertDtoCRUDTypeDefinition, UpsertArtefact, UpsertInputCRUDTypeDefinition, UpsertOutputCRUDTypeDefinition, UpsertStatusEnum, SoftRemoveDtoCRUDTypeDefinition, SoftRemoveArtefact, SoftRemoveInputWhereCRUDTypeDefinition, SoftRemoveInputCRUDTypeDefinition, SoftRemoveOutputCRUDTypeDefinition, RemoveDtoCRUDTypeDefinition, RemoveArtefact, RemoveInputCRUDTypeDefinition, RemoveOutputCRUDTypeDefinition, SoftRemoveOutputAffectedRowsCRUDTypeDefinition, FindOutputRowsCRUDTypeDefinition, UpdateOutputAffectedRowsCRUDTypeDefinition, RemoveOutputAffectedRowsCRUDTypeDefinition, RecoverDtoCRUDTypeDefinition, RecoverArtefact, RecoverInputCRUDTypeDefinition, RecoverOutputCRUDTypeDefinition, RecoverInputWhereCRUDTypeDefinition, RecoverOutputAffectedRowsCRUDTypeDefinition, FindInputDtoCRUDTypeDefinition, FindOneByIdInputCRUDTypeDefinition, FindInputPaginationOptionsDto, FindOutputPaginationOptionsDto, IdInputDto, RemoveInputWhereCRUDTypeDefinition, DeleteInputWhereCRUDTypeDefinition, UploadInputDto, UploadOutputDto, UploadDeleteInputDto, UploadDeleteOutputDto, WithDeletedInputDto, YesNoEnum } from "@libs/library-app";
import { RetsMlsProviderEntityMeta as meta, RetsMlsProviderEntity } from "../entities/mls.provider.entity";
import { Directive, Field, InputType, Int, IntersectionType, ObjectType, PartialType } from "@nestjs/graphql";
import { IsNotEmpty, IsNumber, IsOptional, Validate } from "class-validator";
import { FindManyOptions, FindOptionsOrder, FindOptionsWhere } from "typeorm";
import { Exclude } from "class-transformer";
import { CrudAffectedDto, UpsertOutputProcessStatusDto } from "@libs/library-app";
import { UploadArtefact, UploadDeleteArtefact, UploadDeleteDtoCRUDTypeDefinition, UploadDeleteInputArtefactCRUDTypeDefinition, UploadDeleteOutputArtefactCRUDTypeDefinition, UploadDtoCRUDTypeDefinition, UploadInputArtefactCRUDTypeDefinition, UploadOutputArtefactCRUDTypeDefinition } from "@libs/library-app/crud/crud.type";
import { RetsMlsProviderUploadRefTypeEnum } from "../mls.provider.enum";
import { RetsListingFindInputWhereDto } from "../../listing/dto/listing.dto";
import { RetsListingAdditionalInfoFindInputWhereDto } from "../../additional-info/dto/additional.info.dto";
import { RetsListingAgentFindInputWhereDto } from "../../agent/dto/agent.dto";
import { RetsListingOfficeFindInputWhereDto } from "../../office/dto/office.dto";
import { RetsListingOpenHouseFindInputWhereDto } from "../../open-house/dto/open.house.dto";
import { RetsListingPhotosFindInputWhereDto } from "../../photos/dto/photos.dto";
import { RetsListingRoomFindInputWhereDto } from "../../room/dto/room.dto";
import { RetsListingUnitFindInputWhereDto } from "../../unit/dto/unit.dto";
import { RetsListingVirtualToursFindInputWhereDto } from "../../virtual-tours/dto/virtual.tours.dto";
import { UserFavouritePropertyFindInputWhereDto } from "../../user-favorite-property/dto/user.favourite.property.dto";
import { ProcessedSearchByAddressFindInputWhereDto } from "../../../processed/search-by-address/dto/search.by.address.dto";
import { ProcessedSearchByCityFindInputWhereDto } from "../../../processed/search-by-city/dto/search.by.city.dto";
import { ProcessedSearchBySubdivisionFindInputWhereDto } from "../../../processed/search-by-mls-subdivision/dto/search.by.subdivision.dto";
import { ProcessedSearchByZipcodeFindInputWhereDto } from "../../../processed/search-by-mls-zipcode/dto/search.by.zipcode.dto";
import { ProcessedSearchByMlsFindInputWhereDto } from "../../../processed/search-by-mls/dto/search.by.mls.dto";

/**
 * █████████████████████████████████████████████████████████████
 * ██ DO NOT CHANGE IN THIS FILE IT WILL CRASH THE APP        ██
 * █████████████████████████████████████████████████████████████
**/

/**
 * # [done] ['../entities/mls.provider.entity', './dto/mls.provider.dto'] . Hint: find [ /mls.provider. => and replace with ] [ /your-module. ] 
 * # [done] do not break some dependences which required this class
 * # [done] module [RetsMlsProvider]
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
export class RetsMlsProviderDto extends RetsMlsProviderEntity implements FindInputDtoCRUDTypeDefinition{
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
     declare market_name?: any;
     declare market_title?: any;
     declare market_active?: any;
     declare host?: any;
     declare user?: any;
     declare passwd?: any;
     declare rets_user_agent?: any;
     declare rets_user_agent_pwd?: any;
     declare is_API?: any;
     declare client_id?: any;
     declare client_secret?: any;
     declare server_token?: any;
     declare browser_token?: any;
     declare rets_version?: any;
     declare format?: any;
     declare disclaimer_short?: any;
     declare disclaimer_big?: any;
     declare disclaimer_icon?: any;
     declare is_pic_url_supported?: any;
     declare active?: any;
     declare prop_data_download?: any;
     declare prop_last_run_date?: any;
     declare prop_last_record_date?: any;
     declare id_last_run_date?: any;
     declare id_last_record_date?: any;
     declare prop_data_job_running?: any;
     declare prop_id_job_running?: any;
     declare agent_data_download?: any;
     declare agent_last_run_date?: any;
     declare office_data_download?: any;
     declare office_last_run_date?: any;
     declare pic_data_download?: any;
     declare pic_last_run_datetime?: any;
     declare pic_data_job_running?: any;
     declare log_last_update_date?: any;
     declare data_last_sync_success?: any;
     declare id_last_sync_success?: any;
     declare id_srun_total_count?: any;
     declare id_srun_cur_count?: any;
     declare token_url?: any;
     declare token_expire_time?: any;

     declare fr_user_favourite_mlsp_id?:any; 
     declare fr_search_by_addr_mlsp_id?:any; 
     declare fr_search_by_city_mlsp_id?:any; 
     declare fr_search_by_subdivision_mlsp_id?:any; 
     declare fr_search_by_zipcode_mlsp_id?:any; 
     declare fr_search_by_mls_mlsp_id?:any; 
     declare fr_rets_listing_id?:any; 
     declare fr_rets_lis_addi_info_id?:any; 
     declare fr_rets_list_agent_id?:any; 
     declare fr_rets_list_office_id?:any; 
     declare fr_rets_list_open_house_id?:any; 
     declare fr_rets_list_photos_id?:any; 
     declare fr_rets_list_room_id?:any; 
     declare fr_rets_list_unit_id?:any; 
     declare fr_rets_list_virtual_tours_id?:any; 
}

/**
 * █████████████████████████████████████████████████████████████
 * █ FIND DTO ██████████████████████████████████████████████████
 * █████████████████████████████████████████████████████████████
**/
@ObjectType({ isAbstract: true })
@Directive('@shareable')
export class RetsMlsProviderFindDto extends RetsMlsProviderEntity implements FindDtoCRUDTypeDefinition{
    static metaname: string = `${RetsMlsProviderEntity?.metaname}${FindArtefact}`;
    static metadesc: string = CrudDefMetaDesc.find_metadesc;
}


// ████ FIND INPUT DTO ████████████████████████████████████████████████


@InputType()
export class RetsMlsProviderFindInputWhereDto extends RetsMlsProviderDto implements FindInputWhereCRUDTypeDefinition{
    @Field(() => FindOperatorDto, {nullable: true, description: meta?.id.desc})
    @IsOptional()
    declare id?: FindOperatorDto;    

    @Field(() => FindOperatorDto, {nullable: true, description: meta?.market_name.desc})
    @IsOptional()
    declare market_name?: FindOperatorDto; 

    @Field(() => FindOperatorDto, {nullable: true, description: meta?.market_title.desc})        
    @IsOptional()
    declare market_title?: FindOperatorDto;

    @Field(() => FindOperatorDto, {nullable: true, description: meta?.market_active.desc})        
    @IsOptional()
    declare market_active?: FindOperatorDto;

    @Field(() => FindOperatorDto, {nullable: true, description: meta?.user.desc})        
    @IsOptional()
    declare user?: FindOperatorDto;

    @Field(() => FindOperatorDto, {nullable: true, description: meta?.rets_user_agent.desc})
    @IsOptional()
    declare rets_user_agent?: FindOperatorDto;

    @Field(() => FindOperatorDto, {nullable: true, description: meta?.is_API.desc})
    @IsOptional()
    declare is_API?: FindOperatorDto;    

    @Field(() => FindOperatorDto, {nullable: true, description: meta?.client_id.desc})
    @IsOptional()
    declare client_id?: FindOperatorDto; 

    @Field(() => FindOperatorDto, {nullable: true, description: meta?.client_secret.desc})        
    @IsOptional()
    declare client_secret?: FindOperatorDto;

    @Field(() => FindOperatorDto, {nullable: true, description: meta?.server_token.desc})        
    @IsOptional()
    declare server_token?: FindOperatorDto;   

    @Field(() => FindOperatorDto, {nullable: true, description: meta?.is_pic_url_supported.desc})
    @IsOptional()
    declare is_pic_url_supported?: FindOperatorDto; 

    @Field(() => FindOperatorDto, {nullable: true, description: meta?.active.desc})        
    @IsOptional()
    declare active?: FindOperatorDto;

    @Field(() => FindOperatorDto, {nullable: true, description: meta?.prop_last_run_date.desc})        
    @IsOptional()
    declare prop_last_run_date?: FindOperatorDto;
    
    @Field(() => FindOperatorDto, {nullable: true, description: meta?.prop_last_record_date.desc})        
    @IsOptional()
    declare prop_last_record_date?: FindOperatorDto;

    @Field(() => FindOperatorDto, {nullable: true, description: meta?.id_last_run_date.desc})
    @IsOptional()
    declare id_last_run_date?: FindOperatorDto;

    @Field(() => FindOperatorDto, {nullable: true, description: meta?.id_last_record_date.desc})
    @IsOptional()
    declare id_last_record_date?: FindOperatorDto;

    @Field(() => FindOperatorDto, {nullable: true, description: meta?.prop_data_job_running.desc})
    @IsOptional()
    declare prop_data_job_running?: FindOperatorDto;

    @Field(() => FindOperatorDto, {nullable: true, description: meta?.prop_id_job_running.desc})
    @IsOptional()
    declare prop_id_job_running?: FindOperatorDto;    

    @Field(() => FindOperatorDto, {nullable: true, description: meta?.agent_data_download.desc})
    @IsOptional()
    declare agent_data_download?: FindOperatorDto; 

    @Field(() => FindOperatorDto, {nullable: true, description: meta?.agent_last_run_date.desc})        
    @IsOptional()
    declare agent_last_run_date?: FindOperatorDto;

    @Field(() => FindOperatorDto, {nullable: true, description: meta?.office_data_download.desc})        
    @IsOptional()
    declare office_data_download?: FindOperatorDto;

    @Field(() => FindOperatorDto, {nullable: true, description: meta?.office_last_run_date.desc})        
    @IsOptional()
    declare office_last_run_date?: FindOperatorDto;
    
    @Field(() => FindOperatorDto, {nullable: true, description: meta?.pic_data_download.desc})        
    @IsOptional()
    declare pic_data_download?: FindOperatorDto;

    @Field(() => FindOperatorDto, {nullable: true, description: meta?.pic_data_job_running.desc})
    @IsOptional()
    declare pic_data_job_running?: FindOperatorDto;

    @Field(() => FindOperatorDto, {nullable: true, description: meta?.data_last_sync_success.desc})        
    @IsOptional()
    declare data_last_sync_success?: FindOperatorDto;

    @Field(() => FindOperatorDto, {nullable: true, description: meta?.id_last_sync_success.desc})        
    @IsOptional()
    declare id_last_sync_success?: FindOperatorDto;

    @Field(() => FindOperatorDto, {nullable: true, description: meta?.token_expire_time.desc})
    @IsOptional()
    declare token_expire_time?: FindOperatorDto;

    @Field(() => FindOperatorDto, {nullable: true, description: meta?.id_srun_total_count.desc})        
    @IsOptional()
    declare id_srun_total_count?: FindOperatorDto;

    @Field(() => FindOperatorDto, {nullable: true, description: meta?.id_srun_cur_count.desc})
    @IsOptional()
    declare id_srun_cur_count?: FindOperatorDto;


    // ████ FR_ WHERE: INTERNAL RELATIONS WHERE ████████████████████████████████████████████████
    
    @Field(() => [UserFavouritePropertyFindInputWhereDto], {nullable: true, description: meta?.fr_user_favourite_mlsp_id.desc})
    @IsOptional()
    declare fr_user_favourite_mlsp_id?: UserFavouritePropertyFindInputWhereDto[];

    @Field(() => [ProcessedSearchByAddressFindInputWhereDto], {nullable: true, description: meta?.fr_search_by_addr_mlsp_id.desc})
    @IsOptional()
    declare fr_search_by_addr_mlsp_id?: ProcessedSearchByAddressFindInputWhereDto[];

    @Field(() => [ProcessedSearchByCityFindInputWhereDto], {nullable: true, description: meta?.fr_search_by_city_mlsp_id.desc})
    @IsOptional()
    declare fr_search_by_city_mlsp_id?: ProcessedSearchByCityFindInputWhereDto[];

    @Field(() => [ProcessedSearchBySubdivisionFindInputWhereDto], {nullable: true, description: meta?.fr_search_by_subdivision_mlsp_id.desc})
    @IsOptional()
    declare fr_search_by_subdivision_mlsp_id?: ProcessedSearchBySubdivisionFindInputWhereDto[];

    @Field(() => [ProcessedSearchByZipcodeFindInputWhereDto], {nullable: true, description: meta?.fr_search_by_zipcode_mlsp_id.desc})
    @IsOptional()
    declare fr_search_by_zipcode_mlsp_id?: ProcessedSearchByZipcodeFindInputWhereDto[];

    @Field(() => [ProcessedSearchByMlsFindInputWhereDto], {nullable: true, description: meta?.fr_search_by_mls_mlsp_id.desc})
    @IsOptional()
    declare fr_search_by_mls_mlsp_id?: ProcessedSearchByMlsFindInputWhereDto[];

    @Field(() => [RetsListingFindInputWhereDto], {nullable: true, description: meta?.fr_rets_listing_id.desc})
    @IsOptional()
    declare fr_rets_listing_id?: RetsListingFindInputWhereDto[];

    @Field(() => [RetsListingAdditionalInfoFindInputWhereDto], {nullable: true, description: meta?.fr_rets_lis_addi_info_id.desc})
    @IsOptional()
    declare fr_rets_lis_addi_info_id?: RetsListingAdditionalInfoFindInputWhereDto[];

    @Field(() => [RetsListingAgentFindInputWhereDto], {nullable: true, description: meta?.fr_rets_list_agent_id.desc})
    @IsOptional()
    declare fr_rets_list_agent_id?: RetsListingAgentFindInputWhereDto[];

    @Field(() => [RetsListingOfficeFindInputWhereDto], {nullable: true, description: meta?.fr_rets_list_office_id.desc})
    @IsOptional()
    declare fr_rets_list_office_id?: RetsListingOfficeFindInputWhereDto[];

    @Field(() => [RetsListingOpenHouseFindInputWhereDto], {nullable: true, description: meta?.fr_rets_list_open_house_id.desc})
    @IsOptional()
    declare fr_rets_list_open_house_id?: RetsListingOpenHouseFindInputWhereDto[];

    @Field(() => [RetsListingPhotosFindInputWhereDto], {nullable: true, description: meta?.fr_rets_list_photos_id.desc})
    @IsOptional()
    declare fr_rets_list_photos_id?: RetsListingPhotosFindInputWhereDto[];

    @Field(() => [RetsListingRoomFindInputWhereDto], {nullable: true, description: meta?.fr_rets_list_room_id.desc})
    @IsOptional()
    declare fr_rets_list_room_id?: RetsListingRoomFindInputWhereDto[];

    @Field(() => [RetsListingUnitFindInputWhereDto], {nullable: true, description: meta?.fr_rets_list_unit_id.desc})
    @IsOptional()
    declare fr_rets_list_unit_id?: RetsListingUnitFindInputWhereDto[];

    @Field(() => [RetsListingVirtualToursFindInputWhereDto], {nullable: true, description: meta?.fr_rets_list_virtual_tours_id.desc})
    @IsOptional()
    declare fr_rets_list_virtual_tours_id?: RetsListingVirtualToursFindInputWhereDto[];

}

@InputType()
export class RetsMlsProviderFindInputSortOrderDto implements FindOptionsOrder<RetsMlsProviderDto>, FindInputSortOrderCRUDTypeDefinition{
    
    @Field(() => RecordSortDirectionEnum, { nullable: true }) 
    @IsOptional()
    id?: RecordSortDirectionEnum;

    @Field(() => RecordSortDirectionEnum, { nullable: true }) 
    @IsOptional()
    market_name?: RecordSortDirectionEnum;

    @Field(() => RecordSortDirectionEnum, { nullable: true }) 
    @IsOptional()
    market_title?: RecordSortDirectionEnum;

    @Field(() => RecordSortDirectionEnum, { nullable: true }) 
    @IsOptional()
    market_active?: RecordSortDirectionEnum;

    @Field(() => RecordSortDirectionEnum, { nullable: true }) 
    @IsOptional()
    user?: RecordSortDirectionEnum;

    @Field(() => RecordSortDirectionEnum, { nullable: true })
    @IsOptional()
    rets_user_agent?: RecordSortDirectionEnum;

    @Field(() => RecordSortDirectionEnum, { nullable: true }) 
    @IsOptional()
    is_API?: RecordSortDirectionEnum;

    @Field(() => RecordSortDirectionEnum, { nullable: true }) 
    @IsOptional()
    client_id?: RecordSortDirectionEnum;

    @Field(() => RecordSortDirectionEnum, { nullable: true })
    @IsOptional()
    client_secret?: RecordSortDirectionEnum;

    @Field(() => RecordSortDirectionEnum, { nullable: true })
    @IsOptional()
    server_token?: RecordSortDirectionEnum;

    @Field(() => RecordSortDirectionEnum, { nullable: true }) 
    @IsOptional()
    is_pic_url_supported?: RecordSortDirectionEnum;

    @Field(() => RecordSortDirectionEnum, { nullable: true }) 
    @IsOptional()
    active?: RecordSortDirectionEnum;

    @Field(() => RecordSortDirectionEnum, { nullable: true }) 
    @IsOptional()
    prop_last_run_date?: RecordSortDirectionEnum;

    @Field(() => RecordSortDirectionEnum, { nullable: true }) 
    @IsOptional()
    prop_last_record_date?: RecordSortDirectionEnum;

    @Field(() => RecordSortDirectionEnum, { nullable: true })
    @IsOptional()
    id_last_run_date?: RecordSortDirectionEnum;

    @Field(() => RecordSortDirectionEnum, { nullable: true })
    @IsOptional()
    id_last_record_date?: RecordSortDirectionEnum;

    @Field(() => RecordSortDirectionEnum, { nullable: true })
    @IsOptional()
    prop_data_job_running?: RecordSortDirectionEnum;

    @Field(() => RecordSortDirectionEnum, { nullable: true }) 
    @IsOptional()
    prop_id_job_running?: RecordSortDirectionEnum;

    @Field(() => RecordSortDirectionEnum, { nullable: true }) 
    @IsOptional()
    agent_last_run_date?: RecordSortDirectionEnum;

    @Field(() => RecordSortDirectionEnum, { nullable: true }) 
    @IsOptional()
    office_last_run_date?: RecordSortDirectionEnum;

    @Field(() => RecordSortDirectionEnum, { nullable: true })
    @IsOptional()
    pic_last_run_datetime?: RecordSortDirectionEnum;

    @Field(() => RecordSortDirectionEnum, { nullable: true })
    @IsOptional()
    pic_data_job_running?: RecordSortDirectionEnum;

    @Field(() => RecordSortDirectionEnum, { nullable: true })
    @IsOptional()
    data_last_sync_success?: RecordSortDirectionEnum;

    @Field(() => RecordSortDirectionEnum, { nullable: true })
    @IsOptional()
    id_last_sync_success?: RecordSortDirectionEnum;

}

@InputType()
export class RetsMlsProviderFindInputGroupByDto implements FindOptionsOrder<RetsMlsProviderDto>, FindInputGroupByCRUDTypeDefinition{

    @Field(() => Boolean, { nullable: true })
    @IsOptional()
    market_name?: boolean;

    @Field(() => Boolean, { nullable: true })
    @IsOptional()
    market_title?: boolean;

    @Field(() => Boolean, { nullable: true })
    @IsOptional()
    market_active?: boolean;

    @Field(() => Boolean, { nullable: true })
    @IsOptional()
    host?: boolean;

    @Field(() => Boolean, { nullable: true })
    @IsOptional()
    user?: boolean;

    @Field(() => Boolean, { nullable: true })
    @IsOptional()
    rets_user_agent?: boolean;

    @Field(() => Boolean, { nullable: true })
    @IsOptional()
    is_API?: boolean;

    @Field(() => Boolean, { nullable: true })
    @IsOptional()
    rets_version?: boolean;

    @Field(() => Boolean, { nullable: true })
    @IsOptional()
    format?: boolean;

    @Field(() => Boolean, { nullable: true })
    @IsOptional()
    is_pic_url_supported?: boolean;

    @Field(() => Boolean, { nullable: true })
    @IsOptional()
    active?: boolean;

    @Field(() => Boolean, { nullable: true })
    @IsOptional()
    prop_data_download?: boolean;

    @Field(() => Boolean, { nullable: true })
    @IsOptional()
    prop_data_job_running?: boolean;

    @Field(() => Boolean, { nullable: true })
    @IsOptional()
    prop_id_job_running?: boolean;

    @Field(() => Boolean, { nullable: true })
    @IsOptional()
    pic_data_job_running?: boolean;

    @Field(() => Boolean, { nullable: true })
    @IsOptional()
    data_last_sync_success?: boolean;

    @Field(() => Boolean, { nullable: true })
    @IsOptional()
    id_last_sync_success?: boolean;
}

@InputType()
export class RetsMlsProviderFindInputDto extends IntersectionType(FindInputPaginationOptionsDto, WithDeletedInputDto) implements FindManyOptions<RetsMlsProviderDto>, FindInputCRUDTypeDefinition{
    // input layout design for users to perform find with various database options
  
    /**
     * Conditions to be met for the resulting set.
     * also validate the user pass only 1 operator to search for field
     */
    @Field(() => [RetsMlsProviderFindInputWhereDto], { nullable: true, description: CrudDefMetaDesc.find_where })
    @IsOptional()
    @Validate(OnlyOneSeachOperatorAllowed)
    declare where?: FindOptionsWhere<RetsMlsProviderFindInputWhereDto>;
  
  
    /**
     * Specifies how to group the rows returned by the SELECT statement.
     */
    @Field(() => RetsMlsProviderFindInputGroupByDto, { nullable: true, description: CrudDefMetaDesc.find_group_by })
    @IsOptional()
    declare groupBy?: RetsMlsProviderFindInputGroupByDto;
  
    /**
     * Sort the result set by fields using ascending or descending order.
     */
    @Field(() => RetsMlsProviderFindInputSortOrderDto, { nullable: true, description: CrudDefMetaDesc.find_order })
    @IsOptional()
    declare order?: FindOptionsOrder<RetsMlsProviderFindInputSortOrderDto>;
}


// ████ FIND OUTPUT DTO ████████████████████████████████████████████████

@ObjectType()
@Directive('@shareable')
export class RetsMlsProviderFindOutputRowsDto extends RetsMlsProviderFindDto implements FindOutputRowsCRUDTypeDefinition{
    // this DTO will be used at many palce for output object, os make sure this is properly developed
}

@ObjectType()
@Directive('@shareable')
export class RetsMlsProviderFindOutputDto extends FindOutputPaginationOptionsDto implements FindOutputCRUDTypeDefinition{
    // output layout design for users to get find response

    // we assign any because iin GRAPHQL for requuest body this rows will have fields with boolean value whether to include in response or not
    // this is very crucial to understand this structure and you need to understand how graphQL works
    @Field(() => [RetsMlsProviderEntity], {description:CrudDefMetaDesc.find_rows})
    declare rows?: RetsMlsProviderEntity | RetsMlsProviderEntity[] | any;
}

/**
 * ██████████████████████████████████████████████████████████████████████████████████████████████████████████████████
 * █ FIND ONE BY ID DTO █████████████████████████████████████████████████████████████████████████████████████████████
 * ██████████████████████████████████████████████████████████████████████████████████████████████████████████████████
**/

export class RetsMlsProviderFindOneByIdDto extends RetsMlsProviderEntity implements FindDtoCRUDTypeDefinition{
    static metaname: string = `${RetsMlsProviderEntity.metaname}${FindOneByIdArtefact}`;
    static metadesc: string = CrudDefMetaDesc.findOneById_metadesc;
}

// ████ FIND ONE BY ID INPUT DTO ████████████████████████████████████████████████

@InputType()
export class RetsMlsProviderFindOneByIdInputDto extends IntersectionType(IdInputDto, WithDeletedInputDto) implements FindOneByIdInputCRUDTypeDefinition{

}

/**
 * █████████████████████████████████████████████████████████████
 * █ CREATE DTO ████████████████████████████████████████████████
 * █████████████████████████████████████████████████████████████
**/

export class RetsMlsProviderCreateDto extends RetsMlsProviderEntity implements CreateDtoCRUDTypeDefinition {
    static metaname: string = `${RetsMlsProviderEntity.metaname}${CreateArtefact}`;
    static metadesc: string = CrudDefMetaDesc.create_metadesc;
}
// ████ CREATE INPUT DTO ████████████████████████████████████████████████

@InputType()
export class RetsMlsProviderCreateInputDto extends  RetsMlsProviderCreateDto implements CreateInputCRUDTypeDefinition {

    @Field(() => String, {nullable: false, description: meta?.market_name.desc}) 
    declare market_name?: string;

    @Field(() => String, {nullable: true, description: meta?.market_title.desc})  
    declare market_title?: string;

    @Field(() => YesNoEnum, {nullable: false, description: meta?.market_active.desc})  
    declare market_active?: number;
    
    @Field(() => String, {nullable: false, description: meta?.host.desc})  
    declare host?: string;

    @Field(() => String, {nullable: false, description: meta?.user.desc})  
    declare user?: string;

    @Field(() => String, {nullable: false, description: meta?.passwd.desc}) 
    declare passwd?: string;

    @Field(() => String, {nullable: false, description: meta?.rets_user_agent.desc})  
    declare rets_user_agent?: string;

    @Field(() => String, {nullable: true, description: meta?.rets_user_agent_pwd.desc})  
    declare rets_user_agent_pwd?: string;
    
    @Field(() => YesNoEnum, {nullable: false, description: meta?.is_API.desc})  
    declare is_API?: number;

    @Field(() => String, {nullable: true, description: meta?.client_id.desc})  
    declare client_id?: string;

    @Field(() => String, {nullable: true, description: meta?.client_secret.desc}) 
    declare client_secret?: string;

    @Field(() => String, {nullable: true, description: meta?.server_token.desc})  
    declare server_token?: string;

    @Field(() => String, {nullable: true, description: meta?.browser_token.desc})  
    declare browser_token?: string;
    
    @Field(() => String, {nullable: false, description: meta?.rets_version.desc})  
    declare rets_version?: string;

    @Field(() => String, {nullable: false, description: meta?.format.desc})  
    declare format?: string;

    @Field(() => String, {nullable: true, description: meta?.disclaimer_short.desc}) 
    declare disclaimer_short?: string;

    @Field(() => String, {nullable: true, description: meta?.disclaimer_big.desc})  
    declare disclaimer_big?: string;

    @Field(() => String, {nullable: true, description: meta?.disclaimer_icon.desc})  
    declare disclaimer_icon?: string;
    
    @Field(() => YesNoEnum, {nullable: false, description: meta?.is_pic_url_supported.desc})  
    declare is_pic_url_supported ?: number;

    @Field(() => YesNoEnum, {nullable: false, description: meta?.active.desc})  
    declare active?: number;

    @Field(() => String, {nullable: false, description: meta?.prop_data_download.desc})  
    declare prop_data_download?: string;

    @Field(() => String, {nullable: false, description: meta?.agent_data_download.desc})  
    declare agent_data_download?: string;

    @Field(() => String, {nullable: false, description: meta?.office_data_download.desc})  
    declare office_data_download?: string;

    @Field(() => String, {nullable: false, description: meta?.pic_data_download.desc})  
    declare pic_data_download?: string;
}

// ████ CREATE OUTPUT DTO ████████████████████████████████████████████████

@ObjectType()
@Directive('@shareable')
export class RetsMlsProviderCreateOutputDto extends RetsMlsProviderFindOutputRowsDto implements CreateOutputCRUDTypeDefinition {
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


export class RetsMlsProviderUpdateDto extends RetsMlsProviderDto implements UpdateDtoCRUDTypeDefinition{
    static metaname: string = `${RetsMlsProviderEntity.metaname}${UpdateArtefact}`;
    static metadesc: string = CrudDefMetaDesc.update_metadesc;
}

// ████ UPDATE INPUT DTO ████████████████████████████████████████████████

@InputType()
export class RetsMlsProviderUpdateInputWhereDto extends RetsMlsProviderFindInputWhereDto implements UpdateInputWhereCRUDTypeDefinition{
    /**
     * avoiding redundant code
     * considering whatever FindInputWhere ask for input, same apply to UpdateInputWhere so extending class
     * just add what is new or different for UpdateInputWhere, that means it's 100% customisable
     * you can also remove extends *FindInputWhere and define entire custom dto here if needed 
     **/
}

@InputType()
export class RetsMlsProviderUpdateInputSetsDto extends PartialType(RetsMlsProviderCreateInputDto) implements UpdateInputSetsCRUDTypeDefinition {
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
export class RetsMlsProviderUpdateInputDto implements UpdateInputCRUDTypeDefinition{
    // input layout design for users to perform update with various database options
  
    /**
     * Conditions to be met for the resulting set.
     * also validate the user pass only 1 operator to search for field
     */
    @Field(() => [RetsMlsProviderUpdateInputWhereDto], { nullable: false, description: CrudDefMetaDesc.update_where })
    @IsNotEmpty()
    @Validate(OnlyOneSeachOperatorAllowed)
    where!: FindOptionsWhere<RetsMlsProviderUpdateInputWhereDto>[];

    /**
     * What to set for update
     * basically fields list of update
     */
    @Field(() => RetsMlsProviderUpdateInputSetsDto, { nullable: false, description: CrudDefMetaDesc.update_sets })
    @IsNotEmpty()
    sets!: RetsMlsProviderUpdateInputSetsDto

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
export class RetsMlsProviderUpdateOutputAffectedRowsDto extends RetsMlsProviderFindOutputRowsDto implements UpdateOutputAffectedRowsCRUDTypeDefinition{
    /**
     * avoiding redundant code
     * considering whatever FindOutputRows return, same apply to UpdateOutputAffectedRows so extending class
     * just add what is new or different for UpdateOutputAffectedRows, that means it's 100% customisable
     * you can also remove extends *FindOutputRows and define entire custom dto here if needed 
     **/
}

@ObjectType()
@Directive('@shareable')
export class RetsMlsProviderUpdateOutputDto extends CrudAffectedDto implements UpdateOutputCRUDTypeDefinition{
  @Field(() => [RetsMlsProviderEntity], {description: CrudDefMetaDesc.update_affected_rows}) 
  declare affectedRows?: RetsMlsProviderEntity[] | any; 
}


/**
 * █████████████████████████████████████████████████████████████
 * █ SOFT DELETE DTO ███████████████████████████████████████████
 * █████████████████████████████████████████████████████████████
**/
// this operation run directly withouth checking the data if exist or not, so it's quick but do not provide more information about operation

// ████ SOFT DELETE INPUT DTO ████████████████████████████████████████████████
export class RetsMlsProviderSoftDeleteDto extends RetsMlsProviderEntity implements SoftDeleteDtoCRUDTypeDefinition{
  static metaname: string = `${RetsMlsProviderEntity.metaname}${SoftDeleteArtefact}`;
  static metadesc: string = CrudDefMetaDesc.softDelete_metadesc;
}

@InputType()
export class RetsMlsProviderSoftDeleteInputWhereDto extends RetsMlsProviderFindInputWhereDto implements SoftDeleteInputWhereCRUDTypeDefinition{
  /**
   * avoiding redundant code
   * considering whatever FindInputWhere ask for input, same apply to SoftDeleteInputWhere so extending class
   * just add what is new or different for SoftDeleteInputWhere, that means it's 100% customisable
   * you can also remove extends *FindInputWhere and define entire custom dto here if needed 
   **/
}

@InputType()
export class RetsMlsProviderSoftDeleteInputDto implements SoftDeleteInputCRUDTypeDefinition{
  @Field(() => [RetsMlsProviderSoftDeleteInputWhereDto], {nullable: true, description: CrudDefMetaDesc.softDelete_where})
  @Validate(OnlyOneSeachOperatorAllowed)
  where?: FindOptionsWhere<RetsMlsProviderSoftDeleteInputWhereDto>[];
}


// ████ SOFT DELETE OUTPUT DTO ████████████████████████████████████████████████

@ObjectType()
@Directive('@shareable')
export class RetsMlsProviderSoftDeleteOutputDto extends CrudAffectedDto implements SoftDeleteOutputCRUDTypeDefinition{
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

export class RetsMlsProviderDeleteDto extends RetsMlsProviderEntity implements DeleteDtoCRUDTypeDefinition{
  static metaname: string = `${RetsMlsProviderEntity.metaname}${DeleteArtefact}`;
  static metadesc: string = CrudDefMetaDesc.delete_metadesc;
}
// ████ DELETE INPUT DTO ████████████████████████████████████████████████

@InputType()
export class RetsMlsProviderDeleteInputWhereDto extends RetsMlsProviderFindInputWhereDto implements DeleteInputWhereCRUDTypeDefinition{
  /**
   * avoiding redundant code
   * considering whatever FindInputWhere ask for input, same apply to SoftDeleteInputWhere so extending class
   * just add what is new or different for SoftDeleteInputWhere, that means it's 100% customisable
   * you can also remove extends *FindInputWhere and define entire custom dto here if needed 
   **/
}

@InputType()
export class RetsMlsProviderDeleteInputDto implements DeleteInputCRUDTypeDefinition{
  @Field(() => [RetsMlsProviderDeleteInputWhereDto], {nullable: true, description: CrudDefMetaDesc.delete_where})
  @Validate(OnlyOneSeachOperatorAllowed)
  where?: FindOptionsWhere<RetsMlsProviderDeleteInputWhereDto>[];
}


// ████ DELETE OUTPUT DTO ████████████████████████████████████████████████

@ObjectType()
@Directive('@shareable')
export class RetsMlsProviderDeleteOutputDto extends CrudAffectedDto implements DeleteOutputCRUDTypeDefinition{
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

export class RetsMlsProviderRestoreDto extends RetsMlsProviderEntity implements RestoreDtoCRUDTypeDefinition{
    static metaname: string = `${RetsMlsProviderEntity.metaname}${RestoreArtefact}`;
    static metadesc: string = CrudDefMetaDesc.restore_metadesc;
}

// ████ RESTORE INPUT DTO ██████████████████████████████████████████████████████

@InputType()
export class RetsMlsProviderRestoreInputWhereDto extends RetsMlsProviderFindInputWhereDto implements RestoreInputWhereCRUDTypeDefinition{
  /**
   * avoiding redundant code
   * considering whatever FindInputWhere ask for input, same apply to SoftDeleteInputWhere so extending class
   * just add what is new or different for SoftDeleteInputWhere, that means it's 100% customisable
   * you can also remove extends *FindInputWhere and define entire custom dto here if needed 
   **/
}

@InputType()
export class RetsMlsProviderRestoreInputDto implements RestoreInputCRUDTypeDefinition{
  @Field(() => [RetsMlsProviderRestoreInputWhereDto], {nullable: true, description: CrudDefMetaDesc.restore_where})
  @Validate(OnlyOneSeachOperatorAllowed)
  where?: FindOptionsWhere<RetsMlsProviderRestoreInputWhereDto>[];
}
  
// ████ RESTORE OUTPUT DTO ██████████████████████████████████████████████████████
  
@ObjectType()
@Directive('@shareable')
export class RetsMlsProviderRestoreOutputDto extends CrudAffectedDto implements RestoreOutputCRUDTypeDefinition{
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

export class RetsMlsProviderUpsertDto extends RetsMlsProviderEntity implements UpsertDtoCRUDTypeDefinition{
  static metaname: string = `${RetsMlsProviderEntity.metaname}${UpsertArtefact}`;
  static metadesc: string = CrudDefMetaDesc.upsert_metadesc;
}

// ████ UPSERT INPUT DTO ██████████████████████████████████████████████████████

@InputType()
export class RetsMlsProviderUpsertInputDto extends RetsMlsProviderCreateInputDto implements UpsertInputCRUDTypeDefinition{
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
    static conflictResolveFields: (keyof RetsMlsProviderUpsertInputDto)[] = ['id'];
}

// ████ UPSERT OUTPUT DTO ██████████████████████████████████████████████████████

@ObjectType()
@Directive('@shareable')
export class RetsMlsProviderUpsertOutputDto extends IntersectionType(RetsMlsProviderCreateOutputDto, UpsertOutputProcessStatusDto) implements UpsertOutputCRUDTypeDefinition{ 
 
}

/**
 * █████████████████████████████████████████████████████████████
 * █ SOFT REMOVE DTO ███████████████████████████████████████████
 * █████████████████████████████████████████████████████████████
**/
// unlike soft delete, this operation first get the data from database and after run the operation, so it's complex but provide more and clear information about operation

// ████ SOFT REMOVE INPUT DTO ████████████████████████████████████████████████
export class RetsMlsProviderSoftRemoveDto extends RetsMlsProviderEntity implements SoftRemoveDtoCRUDTypeDefinition{
  static metaname: string = `${RetsMlsProviderEntity.metaname}${SoftRemoveArtefact}`;
  static metadesc: string = CrudDefMetaDesc.softRemove_metadesc;
}

@InputType()
export class RetsMlsProviderSoftRemoveInputWhereDto extends RetsMlsProviderFindInputWhereDto implements SoftRemoveInputWhereCRUDTypeDefinition{
  /**
   * avoiding redundant code
   * considering whatever FindInputWhere ask for input, same apply to SoftRemoveInputWhere so extending class
   * just add what is new or different for SoftRemoveInputWhere, that means it's 100% customisable
   * you can also remove extends *FindInputWhere and define entire custom dto here if needed 
   **/
}

@InputType()
export class RetsMlsProviderSoftRemoveInputDto implements SoftRemoveInputCRUDTypeDefinition{
  @Field(() => [RetsMlsProviderSoftRemoveInputWhereDto], {nullable: true, description: CrudDefMetaDesc.softRemove_where})
  @Validate(OnlyOneSeachOperatorAllowed)
  where?: FindOptionsWhere<RetsMlsProviderSoftRemoveInputWhereDto>[];
}


// ████ SOFT REMOVE OUTPUT DTO ████████████████████████████████████████████████

@ObjectType()
@Directive('@shareable')
export class RetsMlsProviderSoftRemoveOutputAffectedRowsDto extends RetsMlsProviderFindOutputRowsDto implements SoftRemoveOutputAffectedRowsCRUDTypeDefinition{
  /**
   * avoiding redundant code
   * considering whatever FindOutputRows return, same apply to SoftRemoveOutputAffectedRows so extending class
   * just add what is new or different for SoftRemoveOutputAffectedRows, that means it's 100% customisable
   * you can also remove extends FindOutputRows and define entire custom dto here if needed 
   **/
}
@ObjectType()
@Directive('@shareable')
export class RetsMlsProviderSoftRemoveOutputDto extends CrudAffectedDto implements SoftRemoveOutputCRUDTypeDefinition{
  /**
   * avoiding redundant code
   * considering whatever AffectedDto return, same apply to SoftRemoveOutput so extending class
   * just add what is new or different for SoftRemoveOutput, that means it's 100% customisable
   * you can also remove extends AffectedDto and define entire custom dto here if needed 
   **/

  @Field(() => [RetsMlsProviderEntity]) 
  declare affectedRows?: RetsMlsProviderEntity[] | any
}

/**
 * █████████████████████████████████████████████████████████████
 * █ REMOVE DTO ███████████████████████████████████████████
 * █████████████████████████████████████████████████████████████
**/
// unlike soft delete, this operation first get the data from database and after run the operation, so it's complex but provide more and clear information about operation

export class RetsMlsProviderRemoveDto extends RetsMlsProviderEntity implements RemoveDtoCRUDTypeDefinition{
  static metaname: string = `${RetsMlsProviderEntity.metaname}${RemoveArtefact}`;
  static metadesc: string = CrudDefMetaDesc.remove_metadesc;
}

// ████ REMOVE INPUT DTO ████████████████████████████████████████████████
@InputType()
export class RetsMlsProviderRemoveInputWhereDto extends RetsMlsProviderFindInputWhereDto implements RemoveInputWhereCRUDTypeDefinition{
  /**
   * avoiding redundant code
   * considering whatever FindInputWhere ask for input, same apply to SoftRemoveInputWhere so extending class
   * just add what is new or different for SoftRemoveInputWhere, that means it's 100% customisable
   * you can also remove extends *FindInputWhere and define entire custom dto here if needed 
   **/
}

@InputType()
export class RetsMlsProviderRemoveInputDto implements RemoveInputCRUDTypeDefinition{
  @Field(() => [RetsMlsProviderRemoveInputWhereDto], {nullable: true, description: CrudDefMetaDesc.remove_where})
  @Validate(OnlyOneSeachOperatorAllowed)
  where?: FindOptionsWhere<RetsMlsProviderRemoveInputWhereDto>[];
}


// ████ REMOVE OUTPUT DTO ████████████████████████████████████████████████

@ObjectType()
@Directive('@shareable')
export class RetsMlsProviderRemoveOutputAffectedRowsDto extends RetsMlsProviderFindOutputRowsDto implements RemoveOutputAffectedRowsCRUDTypeDefinition{
  /**
   * avoiding redundant code
   * considering whatever FindOutputRows return, same apply to SoftRemoveOutputAffectedRows so extending class
   * just add what is new or different for SoftRemoveOutputAffectedRows, that means it's 100% customisable
   * you can also remove extends FindOutputRows and define entire custom dto here if needed 
   **/
}
@ObjectType()
@Directive('@shareable')
export class RetsMlsProviderRemoveOutputDto extends CrudAffectedDto implements RemoveOutputCRUDTypeDefinition{
  /**
   * avoiding redundant code
   * considering whatever AffectedDto return, same apply to SoftRemoveOutput so extending class
   * just add what is new or different for SoftRemoveOutput, that means it's 100% customisable
   * you can also remove extends AffectedDto and define entire custom dto here if needed 
   **/

  @Field(() => [RetsMlsProviderEntity]) 
  declare affectedRows?: RetsMlsProviderEntity[] | any
}

/**
 * █████████████████████████████████████████████████████████████
 * █ RECOVER DTO ████████████████████████████████████████████████
 * █████████████████████████████████████████████████████████████
**/
// unlike soft delete, this operation first get the data from database and after run the operation, so it's complex but provide more and clear information about operation

export class RetsMlsProviderRecoverDto extends RetsMlsProviderEntity implements RecoverDtoCRUDTypeDefinition{
  static metaname: string = `${RetsMlsProviderEntity.metaname}${RecoverArtefact}`;
  static metadesc: string = CrudDefMetaDesc.recover_metadesc;
}

// ████ RECOVER INPUT DTO ██████████████████████████████████████████████████████

@InputType()
export class RetsMlsProviderRecoverInputWhereDto extends RetsMlsProviderFindInputWhereDto implements RecoverInputWhereCRUDTypeDefinition{
/**
 * avoiding redundant code
 * considering whatever FindInputWhere ask for input, same apply to SoftDeleteInputWhere so extending class
 * just add what is new or different for SoftDeleteInputWhere, that means it's 100% customisable
 * you can also remove extends *FindInputWhere and define entire custom dto here if needed 
 **/
}

@InputType()
export class RetsMlsProviderRecoverInputDto implements RecoverInputCRUDTypeDefinition{
  @Field(() => [RetsMlsProviderRecoverInputWhereDto], {nullable: true, description: CrudDefMetaDesc.recover_where})
  @Validate(OnlyOneSeachOperatorAllowed)
  where?: FindOptionsWhere<RetsMlsProviderRecoverInputWhereDto>[];
}

// ████ RECOVER OUTPUT DTO ██████████████████████████████████████████████████████

@ObjectType()
@Directive('@shareable')
export class RetsMlsProviderRecoverOutputAffectedRowsDto extends RetsMlsProviderFindOutputRowsDto implements RecoverOutputAffectedRowsCRUDTypeDefinition{
  /**
   * avoiding redundant code
   * considering whatever FindOutputRows return, same apply to RecoverOutputAffectedRows so extending class
   * just add what is new or different for RecoverOutputAffectedRows, that means it's 100% customisable
   * you can also remove extends FindOutputRows and define entire custom dto here if needed 
   **/
}

@ObjectType()
@Directive('@shareable')
export class RetsMlsProviderRecoverOutputDto extends CrudAffectedDto implements RecoverOutputCRUDTypeDefinition{
  /**
   * avoiding redundant code
   * considering whatever AffectedDto return, same apply to RecoverOutput so extending class
   * just add what is new or different for RecoverOutput, that means it's 100% customisable
   * you can also remove extends AffectedDto and define entire custom dto here if needed 
   **/

  @Field(() => [RetsMlsProviderEntity]) 
  declare affectedRows?: RetsMlsProviderEntity[] | any;
}

/**
 * █████████████████████████████████████████████████████████████
 * █ UPLOAD DTO ████████████████████████████████████████████████
 * █████████████████████████████████████████████████████████████
**/

export class RetsMlsProviderUploadDto extends RetsMlsProviderEntity implements UploadDtoCRUDTypeDefinition {
  static metaname: string = `${RetsMlsProviderEntity?.metaname}${UploadArtefact}`;
  static metadesc: string = CrudDefMetaDesc.upload_metadesc;
}

// ████ UPLOAD INPUT DTO ████████████████████████████████████████████████
@InputType()
export class RetsMlsProviderUploadInputDto extends UploadInputDto implements UploadInputArtefactCRUDTypeDefinition {
@Field(() => RetsMlsProviderUploadRefTypeEnum, {nullable: false, description: CrudDefMetaDesc.upload_ref_type})
@IsNotEmpty()
ref_type!: RetsMlsProviderUploadRefTypeEnum;
}

// ████ UPLOAD OUTPUT DTO ███████████████████████████████████████████████
@ObjectType()
@Directive('@shareable')
export class RetsMlsProviderUploadOutputDto extends UploadOutputDto implements UploadOutputArtefactCRUDTypeDefinition {
@Field(() => RetsMlsProviderUploadRefTypeEnum, {nullable: true, description: CrudDefMetaDesc.upload_ref_type})
ref_type?: RetsMlsProviderUploadRefTypeEnum;
}

/**
* █████████████████████████████████████████████████████████████
* █ UPLOAD DELETE DTO █████████████████████████████████████████
* █████████████████████████████████████████████████████████████
**/

export class RetsMlsProviderUploadDeleteDto extends RetsMlsProviderEntity implements UploadDeleteDtoCRUDTypeDefinition {
static metaname: string = `${RetsMlsProviderEntity?.metaname}${UploadDeleteArtefact}`;
static metadesc: string = CrudDefMetaDesc.upload_delete_metadesc;
}

// ████ UPLOAD DELETE INPUT DTO ████████████████████████████████████████████████
@InputType()
export class RetsMlsProviderUploadDeleteInputDto extends UploadDeleteInputDto implements UploadDeleteInputArtefactCRUDTypeDefinition {
@Field(() => RetsMlsProviderUploadRefTypeEnum, {nullable: false, description: CrudDefMetaDesc.upload_ref_type})
@IsNotEmpty()
ref_type!: RetsMlsProviderUploadRefTypeEnum;
}

// ████ UPLOAD DELETE OUTPUT DTO ███████████████████████████████████████████████
@ObjectType()
@Directive('@shareable')
export class RetsMlsProviderUploadDeleteOutputDto extends UploadDeleteOutputDto implements UploadDeleteOutputArtefactCRUDTypeDefinition {
@Field(() => RetsMlsProviderUploadRefTypeEnum, {nullable: true, description: CrudDefMetaDesc.upload_ref_type})
ref_type?: RetsMlsProviderUploadRefTypeEnum;
}