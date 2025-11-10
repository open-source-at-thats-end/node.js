import { UploadDeleteInputDto, UploadDeleteOutputDto, UploadInputDto, UploadOutputDto, UploadArtefact, UploadDtoCRUDTypeDefinition, UploadInputArtefactCRUDTypeDefinition, UploadOutputArtefactCRUDTypeDefinition, UploadDeleteArtefact, UploadDeleteDtoCRUDTypeDefinition, UploadDeleteInputArtefactCRUDTypeDefinition, UploadDeleteOutputArtefactCRUDTypeDefinition, CreateArtefact, CreateDtoCRUDTypeDefinition, CreateInputCRUDTypeDefinition, CreateOutputCRUDTypeDefinition, CrudDefMetaDesc, DateTime, DeleteArtefact, DeleteDtoCRUDTypeDefinition, DeleteInputCRUDTypeDefinition, DeleteOutputCRUDTypeDefinition, FindArtefact, FindDtoCRUDTypeDefinition, FindInputGroupByCRUDTypeDefinition, FindInputSortOrderCRUDTypeDefinition, FindInputCRUDTypeDefinition, FindInputWhereCRUDTypeDefinition, FindOneByIdArtefact, FindOperatorDto, FindOutputPaginationDto, FindOutputCRUDTypeDefinition, OnlyOneSeachOperatorAllowed, RecordSortDirectionEnum, RestoreArtefact, RestoreDtoCRUDTypeDefinition, RestoreInputCRUDTypeDefinition, SoftDeleteArtefact, SoftDeleteDtoCRUDTypeDefinition, SoftDeleteInputCRUDTypeDefinition, SoftDeleteOutputCRUDTypeDefinition, UpdateArtefact, UpdateDtoCRUDTypeDefinition, UpdateInputSetsCRUDTypeDefinition, UpdateInputCRUDTypeDefinition, UpdateInputWhereCRUDTypeDefinition, UpdateOutputCRUDTypeDefinition, SoftDeleteInputWhereCRUDTypeDefinition, RestoreInputWhereCRUDTypeDefinition, RestoreOutputCRUDTypeDefinition, UpsertDtoCRUDTypeDefinition, UpsertArtefact, UpsertInputCRUDTypeDefinition, UpsertOutputCRUDTypeDefinition, UpsertStatusEnum, SoftRemoveDtoCRUDTypeDefinition, SoftRemoveArtefact, SoftRemoveInputWhereCRUDTypeDefinition, SoftRemoveInputCRUDTypeDefinition, SoftRemoveOutputCRUDTypeDefinition, RemoveDtoCRUDTypeDefinition, RemoveArtefact, RemoveInputCRUDTypeDefinition, RemoveOutputCRUDTypeDefinition, SoftRemoveOutputAffectedRowsCRUDTypeDefinition, FindOutputRowsCRUDTypeDefinition, UpdateOutputAffectedRowsCRUDTypeDefinition, RemoveOutputAffectedRowsCRUDTypeDefinition, RecoverDtoCRUDTypeDefinition, RecoverArtefact, RecoverInputCRUDTypeDefinition, RecoverOutputCRUDTypeDefinition, RecoverInputWhereCRUDTypeDefinition, RecoverOutputAffectedRowsCRUDTypeDefinition, FindInputDtoCRUDTypeDefinition, FindOneByIdInputCRUDTypeDefinition, FindInputPaginationOptionsDto, FindOutputPaginationOptionsDto, IdInputDto, DeleteInputWhereCRUDTypeDefinition, RemoveInputWhereCRUDTypeDefinition, WithDeletedInputDto } from "@libs/library-app";
import { BusinessEntityMeta as meta, BusinessEntity } from "../entities/business.entity";
import { Directive, Field, Float, InputType, Int, IntersectionType, ObjectType, PartialType } from "@nestjs/graphql";
import { IsNotEmpty, IsNumber, IsOptional, Validate } from "class-validator";
import { FindManyOptions, FindOptionsOrder, FindOptionsWhere } from "typeorm";
import { Exclude } from "class-transformer";
import { IdOrIdsInputDto, CrudAffectedDto, UpsertOutputProcessStatusDto } from "@libs/library-app";
import { BusinessUploadFileFieldEnum } from "../business.enum";
import { BusinessPrimaryCategoryFindInputWhereDto } from "../../primary-category/dto/primary.category.dto";
import { BusinessSecondaryCategoryFindInputWhereDto } from "../../secondary-category/dto/secondary.category.dto";
import { UserFindInputWhereDto } from "apps/shared-app/src/folk/user/dto/user.dto";
import { CityFindInputWhereDto } from "apps/shared-app/src/geo/city/dto/city.dto";
import { StateFindInputWhereDto } from "apps/shared-app/src/geo/state/dto/state.dto";
import { CountryFindInputWhereDto } from "apps/shared-app/src/geo/country/dto/country.dto";
import { ConnectionSourceFindInputWhereDto } from "apps/shared-app/src/leads/connection/source/dto/source.dto";


@ObjectType({ isAbstract: true })
@Directive('@shareable')
export class BusinessDto extends BusinessEntity implements FindInputDtoCRUDTypeDefinition{
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
     declare connsrc_id?: any;
     declare owner_u_id?: any;
     declare file_brand_logo?: any;
     declare buspricat_id?: any;
     declare busseccat_id_1?: any;
     declare busseccat_id_2?: any;
     declare busseccat_id_3?: any;
     declare busseccat_id_4?: any;
     declare busseccat_id_5?: any;
     declare busseccat_id_6?: any;
     declare busseccat_id_7?: any;
     declare busseccat_id_8?: any;
     declare busseccat_id_9?: any;
     declare name?: any;
     declare about?: any;
     declare address?: any;
     declare country_id?: any;
     declare state_id?: any;
     declare city_id?: any;
     declare zipcode?: any;
     declare location_latitude?: any;
     declare location_longitude?: any;
     declare toll_free_number?: any;
     declare mobile?: any;
     declare mobile_cc?: any;
     declare whatsapp?: any;
     declare whatsapp_cc?: any;
     declare email?: any;
     declare fax?: any;
     declare website_url?: any;
     declare facebook_profile?: any;
     declare instagram_profile?: any;
     declare youtube_profile?: any;
     declare x_profile?: any;
     declare linkedin_profile?: any;
     declare tiktok_profile?: any;
     declare pinterest_profile?: any;
     declare google_my_business_url?: any;
     declare google_map_url?: any;
     declare google_review_url?: any;
     declare registered?: any;
     declare initial_findings?: any;
     declare competitor_findings?: any;
     declare created?: any;
     declare updated?: any;
     declare deleted?: any; 
 
     declare fr_owner_user?: any;
     declare fr_connection_source?: any;
     declare fr_primary_categories?: any;
     declare fr_secondary_categories1?: any;
     declare fr_secondary_categories2?: any;
     declare fr_secondary_categories3?: any;
     declare fr_secondary_categories4?: any;
     declare fr_secondary_categories5?: any;
     declare fr_secondary_categories6?: any;
     declare fr_secondary_categories7?: any;
     declare fr_secondary_categories8?: any;
     declare fr_secondary_categories9?: any;
     declare fr_countries?: any;
     declare fr_state?: any;
     declare fr_city?: any;
}
