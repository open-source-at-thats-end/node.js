import { CreateArtefact, CreateDtoCRUDTypeDefinition, CreateInputCRUDTypeDefinition, CreateOutputCRUDTypeDefinition, CrudDefMetaDesc, DateTime, DeleteArtefact, DeleteDtoCRUDTypeDefinition, DeleteInputCRUDTypeDefinition, DeleteOutputCRUDTypeDefinition, FindArtefact, FindDtoCRUDTypeDefinition, FindInputGroupByCRUDTypeDefinition, FindInputSortOrderCRUDTypeDefinition, FindInputCRUDTypeDefinition, FindInputWhereCRUDTypeDefinition, FindOneByIdArtefact, FindOperatorDto, FindOutputPaginationDto, FindOutputCRUDTypeDefinition, OnlyOneSeachOperatorAllowed, RecordSortDirectionEnum, RestoreArtefact, RestoreDtoCRUDTypeDefinition, RestoreInputCRUDTypeDefinition, SoftDeleteArtefact, SoftDeleteDtoCRUDTypeDefinition, SoftDeleteInputCRUDTypeDefinition, SoftDeleteOutputCRUDTypeDefinition, UpdateArtefact, UpdateDtoCRUDTypeDefinition, UpdateInputSetsCRUDTypeDefinition, UpdateInputCRUDTypeDefinition, UpdateInputWhereCRUDTypeDefinition, UpdateOutputCRUDTypeDefinition, SoftDeleteInputWhereCRUDTypeDefinition, RestoreInputWhereCRUDTypeDefinition, RestoreOutputCRUDTypeDefinition, UpsertDtoCRUDTypeDefinition, UpsertArtefact, UpsertInputCRUDTypeDefinition, UpsertOutputCRUDTypeDefinition, UpsertStatusEnum, SoftRemoveDtoCRUDTypeDefinition, SoftRemoveArtefact, SoftRemoveInputWhereCRUDTypeDefinition, SoftRemoveInputCRUDTypeDefinition, SoftRemoveOutputCRUDTypeDefinition, RemoveDtoCRUDTypeDefinition, RemoveArtefact, RemoveInputCRUDTypeDefinition, RemoveOutputCRUDTypeDefinition, SoftRemoveOutputAffectedRowsCRUDTypeDefinition, FindOutputRowsCRUDTypeDefinition, UpdateOutputAffectedRowsCRUDTypeDefinition, RemoveOutputAffectedRowsCRUDTypeDefinition, RecoverDtoCRUDTypeDefinition, RecoverArtefact, RecoverInputCRUDTypeDefinition, RecoverOutputCRUDTypeDefinition, RecoverInputWhereCRUDTypeDefinition, RecoverOutputAffectedRowsCRUDTypeDefinition, FindInputDtoCRUDTypeDefinition, FindOneByIdInputCRUDTypeDefinition, FindInputPaginationOptionsDto, FindOutputPaginationOptionsDto, IdInputDto, RemoveInputWhereCRUDTypeDefinition, DeleteInputWhereCRUDTypeDefinition, UploadInputDto, UploadOutputDto, UploadDeleteInputDto, UploadDeleteOutputDto, WithDeletedInputDto } from "@libs/library-app";
import { ProcessedSearchByMapSearchEntityMeta as meta, ProcessedSearchByMapSearchEntity } from "../entities/search.by.mapsearch.entity";
import { Directive, Field, Float, InputType, Int, IntersectionType, ObjectType, PartialType } from "@nestjs/graphql";
import { IsNotEmpty, IsNumber, IsOptional, Validate } from "class-validator";
import { FindManyOptions, FindOptionsOrder, FindOptionsWhere } from "typeorm";
import { Exclude } from "class-transformer";
import { CrudAffectedDto, UpsertOutputProcessStatusDto } from "@libs/library-app";
import { UploadArtefact, UploadDeleteArtefact, UploadDeleteDtoCRUDTypeDefinition, UploadDeleteInputArtefactCRUDTypeDefinition, UploadDeleteOutputArtefactCRUDTypeDefinition, UploadDtoCRUDTypeDefinition, UploadInputArtefactCRUDTypeDefinition, UploadOutputArtefactCRUDTypeDefinition } from "@libs/library-app/crud/crud.type";
import { ProcessedSearchByMapSearchUploadRefTypeEnum } from "../search.by.mapsearch.enum";
import { RetsMlsProviderFindInputWhereDto } from "../../../listings/mls-provider/dto/mls.provider.dto";

@ObjectType({ isAbstract: true })
@Directive('@shareable')
export class ProcessedSearchByMapSearchDto extends ProcessedSearchByMapSearchEntity implements FindInputDtoCRUDTypeDefinition{
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
     declare mls_num?: any;
     declare mlsp_id?: any;
     declare listing_key?: any;
     declare agent_id?: any;
     declare agent_short_id?: any;
     declare co_agent_id?: any;
     declare office_id?: any;
     declare co_office_id?: any;
     declare co_agent_short_id?: any;
     declare sell_agent_short_id?: any;
     declare buy_agent_id?: any;
     declare co_buy_agent_id?: any;
     declare property_type?: any;
     declare property_style?: any;
     declare category?: any;
     declare property_status?: any;
     declare subtype?: any;
     declare baths_full?: any;
     declare baths_half?: any;
     declare baths?: any;
     declare beds?: any;
     declare list_price?: any;
     declare original_list_price?: any;
     declare sold_price?: any;
     declare sold_date?: any;
     declare sqft?: any;
     declare yearbuilt?: any;
     declare total_photos?: any;
     declare main_photo?: any;
     declare main_photo_url?: any;
     declare display_address?: any;
     declare listing_date?: any;
     declare last_update_date?: any;
     declare elementary_school?: any;
     declare high_school?: any;
     declare middle_school?: any;
     declare price_diff?: any;
     declare system_name?: any;
     declare address?: any;
     declare area?: any;
     declare subdivision?: any;
     declare unit_no?: any;
     declare street_number?: any;
     declare street_direction?: any;
     declare street_dir_prefix?: any;
     declare street_name?: any;
     declare street_suffix?: any;
     declare street_dir_suffix?: any;
     declare city_name?: any;
     declare state?: any;
     declare county?: any;
     declare zipcode?: any;
     declare latitude?: any;
     declare longitude?: any;
     declare lotsize_sqft?: any;
     declare is_hoa?: any;
     declare is_new?: any;
     declare pool_desc?: any;
     declare pets_allowed?: any;
     declare furnished?: any;
     declare is_waterfront?: any;
     declare waterfront_desc?: any;
     declare horse_yn?: any;
     declare horse_amenities?: any;
     declare security_safety?: any;
     declare membership_required_yn?: any;
     declare membership?: any;
     declare membership_fee?: any;
     declare virtual_tour_url?: any;
     declare description?: any;
     declare exterior_features?: any;
     declare building_features?: any;
     declare construction?: any;
     declare sewer?: any;
     declare water?: any;
     declare zoning?: any;
     declare legal?: any;
     declare fireplace_features?: any;
     declare amenities?: any;
     declare cooling?: any;
     declare appliances?: any;
     declare flooring?: any;
     declare heating?: any;
     declare interior_features?: any;
     declare roof?: any;
     declare spa_features?: any;
     declare community_features?: any;
     declare parking_features?: any;
     declare mls_is_pic_url_supported?: any;
     declare dom?: any;
     declare office_name?: any;

     declare created?: any;
     declare updated?: any;
     declare deleted?: any;  

     declare fkey_mlsp_id?:any;    
}
