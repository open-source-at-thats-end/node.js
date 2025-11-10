// █████████████████████████████████████████████████████████████████████████████████████████████
// find and replace: Listing
import { addGrapaphQLExternalResolvers } from "@libs/library-app";
import { registerEnumType } from "@nestjs/graphql";
import { RetsListingEntity as meta } from "./entities/listing.entity";

export enum RetsListingUploadRefTypeEnum {
  FILE_ = 'file_',
};

export const RetsListingUploadRefTypeEnumResolver: Record<keyof typeof RetsListingUploadRefTypeEnum, any> = {
  FILE_: RetsListingUploadRefTypeEnum.FILE_,
};
  
export function registerGraphqlListingUploadRefTypeEnum(){
    // register new enum resolver
    registerEnumType(RetsListingUploadRefTypeEnum, {
      name: 'ListingUploadRefTypeEnum', // This registers the enum with GraphQL
      description: 'Listing upload ref type enum',
      valuesMap:{
        FILE_: {
          //description: `Upload market type file. ${meta.file_.validation.validFileFormatMsg} ${meta.file_.validation.maxFileSizeMsg} ${meta.file_.validation.maxCountMsg}`
        },
      }
    });
    // add resolver to graphql
    addGrapaphQLExternalResolvers({RetsListingUploadRefTypeEnum: RetsListingUploadRefTypeEnumResolver});
}
// call above function to register


