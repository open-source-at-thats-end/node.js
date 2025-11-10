// █████████████████████████████████████████████████████████████████████████████████████████████
// find and replace: RetsListingOpenHouse
import { addGrapaphQLExternalResolvers } from "@libs/library-app";
import { registerEnumType } from "@nestjs/graphql";
import { RetsListingOpenHouseEntityMeta as meta } from "./entities/open.house.entity";

export enum RetsListingOpenHouseUploadRefTypeEnum {
  FILE_ = 'file_',
};

export const RetsListingOpenHouseUploadRefTypeEnumResolver: Record<keyof typeof RetsListingOpenHouseUploadRefTypeEnum, any> = {
  FILE_: RetsListingOpenHouseUploadRefTypeEnum.FILE_,
};
  
export function registerGraphqlRetsListingOpenHouseUploadRefTypeEnum(){
    // register new enum resolver
    registerEnumType(RetsListingOpenHouseUploadRefTypeEnum, {
      name: 'RetsListingOpenHouseUploadRefTypeEnum', // This registers the enum with GraphQL
      description: 'RetsListingOpenHouse upload ref type enum',
      valuesMap:{
        FILE_: {
          //description: `Upload market type file. ${meta.file_.validation.validFileFormatMsg} ${meta.file_.validation.maxFileSizeMsg} ${meta.file_.validation.maxCountMsg}`
        },
      }
    });
    // add resolver to graphql
    addGrapaphQLExternalResolvers({RetsListingOpenHouseUploadRefTypeEnum: RetsListingOpenHouseUploadRefTypeEnumResolver});
}
// call above function to register