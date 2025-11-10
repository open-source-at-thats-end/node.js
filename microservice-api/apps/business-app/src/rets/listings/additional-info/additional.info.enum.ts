// █████████████████████████████████████████████████████████████████████████████████████████████
// find and replace: Listing
import { addGrapaphQLExternalResolvers } from "@libs/library-app";
import { registerEnumType } from "@nestjs/graphql";
import { RetsListingAdditionalInfoEntity as meta } from "./entities/additional.info.entity";

export enum RetsListingAdditionalInfoUploadRefTypeEnum {
  FILE_ = 'file_',
};

export const RetsListingAdditionalInfoUploadRefTypeEnumResolver: Record<keyof typeof RetsListingAdditionalInfoUploadRefTypeEnum, any> = {
  FILE_: RetsListingAdditionalInfoUploadRefTypeEnum.FILE_,
};
  
export function registerGraphqlListingUploadRefTypeEnum(){
    // register new enum resolver
    registerEnumType(RetsListingAdditionalInfoUploadRefTypeEnum, {
      name: 'ListingUploadRefTypeEnum', // This registers the enum with GraphQL
      description: 'Listing upload ref type enum',
      valuesMap:{
        FILE_: {
          //description: `Upload market type file. ${meta.file_.validation.validFileFormatMsg} ${meta.file_.validation.maxFileSizeMsg} ${meta.file_.validation.maxCountMsg}`
        },
      }
    });
    // add resolver to graphql
    addGrapaphQLExternalResolvers({RetsListingAdditionalInfoUploadRefTypeEnum: RetsListingAdditionalInfoUploadRefTypeEnumResolver});
}
// call above function to register