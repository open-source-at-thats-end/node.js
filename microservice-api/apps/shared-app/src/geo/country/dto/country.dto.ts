import { UploadDeleteInputDto, UploadDeleteOutputDto, UploadInputDto, UploadOutputDto, UploadArtefact, UploadDtoCRUDTypeDefinition, UploadInputArtefactCRUDTypeDefinition, UploadOutputArtefactCRUDTypeDefinition, UploadDeleteArtefact, UploadDeleteDtoCRUDTypeDefinition, UploadDeleteInputArtefactCRUDTypeDefinition, UploadDeleteOutputArtefactCRUDTypeDefinition, CreateArtefact, CreateDtoCRUDTypeDefinition, CreateInputCRUDTypeDefinition, CreateOutputCRUDTypeDefinition, CrudDefMetaDesc, DateTime, DeleteArtefact, DeleteDtoCRUDTypeDefinition, DeleteInputCRUDTypeDefinition, DeleteOutputCRUDTypeDefinition, FindArtefact, FindDtoCRUDTypeDefinition, FindInputGroupByCRUDTypeDefinition, FindInputSortOrderCRUDTypeDefinition, FindInputCRUDTypeDefinition, FindInputWhereCRUDTypeDefinition, FindOneByIdArtefact, FindOperatorDto, FindOutputPaginationDto, FindOutputCRUDTypeDefinition, OnlyOneSeachOperatorAllowed, RecordSortDirectionEnum, RestoreArtefact, RestoreDtoCRUDTypeDefinition, RestoreInputCRUDTypeDefinition, SoftDeleteArtefact, SoftDeleteDtoCRUDTypeDefinition, SoftDeleteInputCRUDTypeDefinition, SoftDeleteOutputCRUDTypeDefinition, UpdateArtefact, UpdateDtoCRUDTypeDefinition, UpdateInputSetsCRUDTypeDefinition, UpdateInputCRUDTypeDefinition, UpdateInputWhereCRUDTypeDefinition, UpdateOutputCRUDTypeDefinition, SoftDeleteInputWhereCRUDTypeDefinition, RestoreInputWhereCRUDTypeDefinition, RestoreOutputCRUDTypeDefinition, UpsertDtoCRUDTypeDefinition, UpsertArtefact, UpsertInputCRUDTypeDefinition, UpsertOutputCRUDTypeDefinition, UpsertStatusEnum, SoftRemoveDtoCRUDTypeDefinition, SoftRemoveArtefact, SoftRemoveInputWhereCRUDTypeDefinition, SoftRemoveInputCRUDTypeDefinition, SoftRemoveOutputCRUDTypeDefinition, RemoveDtoCRUDTypeDefinition, RemoveArtefact, RemoveInputCRUDTypeDefinition, RemoveOutputCRUDTypeDefinition, SoftRemoveOutputAffectedRowsCRUDTypeDefinition, FindOutputRowsCRUDTypeDefinition, UpdateOutputAffectedRowsCRUDTypeDefinition, RemoveOutputAffectedRowsCRUDTypeDefinition, RecoverDtoCRUDTypeDefinition, RecoverArtefact, RecoverInputCRUDTypeDefinition, RecoverOutputCRUDTypeDefinition, RecoverInputWhereCRUDTypeDefinition, RecoverOutputAffectedRowsCRUDTypeDefinition, FindInputDtoCRUDTypeDefinition, FindOneByIdInputCRUDTypeDefinition, FindInputPaginationOptionsDto, FindOutputPaginationOptionsDto, IdInputDto, DeleteInputWhereCRUDTypeDefinition, RemoveInputWhereCRUDTypeDefinition, WithDeletedInputDto } from "@libs/library-app";
import { CountryEntityMeta as meta, CountryEntity } from "../entities/country.entity";
import { Directive, Field, Float, InputType, Int, IntersectionType, ObjectType, PartialType } from "@nestjs/graphql";
import { IsNotEmpty, IsNumber, IsOptional, Validate } from "class-validator";
import { FindManyOptions, FindOptionsOrder, FindOptionsWhere } from "typeorm";
import { Exclude } from "class-transformer";
import { IdOrIdsInputDto, CrudAffectedDto, UpsertOutputProcessStatusDto } from "@libs/library-app";
import { CountryUploadFileFieldEnum } from "../country.enum";
import { StateFindInputWhereDto } from "../../state/dto/state.dto";
import { RegionFindInputWhereDto } from "../../region/dto/region.dto";
import { SubregionFindInputWhereDto } from "../../subregion/dto/subregion.dto";
import { UserAddressFindInputWhereDto } from "apps/shared-app/src/folk/user-address/dto/user.address.dto";
import { UserIdentityCardFindInputWhereDto } from "apps/shared-app/src/folk/user-identity-card/dto/user.identity.card.dto";
import { UserCorporateInfoFindInputWhereDto } from "apps/shared-app/src/folk/user-corporate-info/dto/user.corporate.info.dto";
import { LeadFindInputWhereDto } from "apps/shared-app/src/leads/lead/dto/lead.dto";
import { CountryTimezoneFindInputWhereDto } from "../../country-timezone/dto/country.timezone.dto";
import { CountryLanguageFindInputWhereDto } from "../../country-language/dto/country.language.dto";

@ObjectType({ isAbstract: true })
@Directive('@shareable')
export class CountryDto extends CountryEntity implements FindInputDtoCRUDTypeDefinition{
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
    declare region_id?: any; 
    declare subregion_id?: any; 
    declare name?: any; 
    declare numeric_code?: any; 
    declare iso_iii?: any; 
    declare iso_ii?: any;
    declare fips?: any; 
    declare phone_code?: any; 
    declare subdivision_title?: any; 
    declare capital?: any; 
    declare currency?: any; 
    declare currency_name?: any; 
    declare currency_symbol?: any; 
    declare tld?: any; 
    declare native?: any; 
    declare nationality?: any; 
    declare timezones?: any; 
    declare translations?: any; 
    declare latitude?: any; 
    declare longitude?: any; 
    declare emoji?: any; 
    declare emoji_u?: any; 
    declare created?: any; 
    declare updated?: any; 
    declare deleted?: any;

    declare fkey_states?: any;
    declare fkey_region?: any;
    declare fkey_subregion?: any;
    declare fkey_user_addresses?: any;
    declare fkey_user_identity_cards?: any;
    declare fkey_user_corporate_infos?: any;
    declare fkey_country_languagies?: any;
    declare fkey_country_timezone?: any;
}
