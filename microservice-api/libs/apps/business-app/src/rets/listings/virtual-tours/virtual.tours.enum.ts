// █████████████████████████████████████████████████████████████████████████████████████████████
// find and replace: RetsListingVirtualTours
import { addGrapaphQLExternalResolvers } from "@libs/library-app";
import { registerEnumType } from "@nestjs/graphql";
import { RetsListingVirtualToursEntityMeta as meta } from "./entities/virtual.tours.entity";

export enum RetsListingVirtualToursUploadRefTypeEnum {
  FILE_ = 'file_',
};

export const RetsListingVirtualToursUploadRefTypeEnumResolver: Record<keyof typeof RetsListingVirtualToursUploadRefTypeEnum, any> = {
  FILE_: RetsListingVirtualToursUploadRefTypeEnum.FILE_,
};
  
export function registerGraphqlRetsListingVirtualToursUploadRefTypeEnum(){
    // register new enum resolver
    registerEnumType(RetsListingVirtualToursUploadRefTypeEnum, {
      name: 'RetsListingVirtualToursUploadRefTypeEnum', // This registers the enum with GraphQL
      description: 'RetsListingVirtualTours upload ref type enum',
      valuesMap:{
        FILE_: {
          //description: `Upload market type file. ${meta.file_.validation.validFileFormatMsg} ${meta.file_.validation.maxFileSizeMsg} ${meta.file_.validation.maxCountMsg}`
        },
      }
    });
    // add resolver to graphql
    addGrapaphQLExternalResolvers({RetsListingVirtualToursUploadRefTypeEnum: RetsListingVirtualToursUploadRefTypeEnumResolver});
}
// call above function to register