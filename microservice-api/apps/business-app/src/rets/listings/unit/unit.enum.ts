// █████████████████████████████████████████████████████████████████████████████████████████████
// find and replace: RetsListingUnit
import { addGrapaphQLExternalResolvers } from "@libs/library-app";
import { registerEnumType } from "@nestjs/graphql";
import { RetsListingUnitEntityMeta as meta } from "./entities/unit.entity";

export enum RetsListingUnitUploadRefTypeEnum {
  FILE_ = 'file_',
};

export const RetsListingUnitUploadRefTypeEnumResolver: Record<keyof typeof RetsListingUnitUploadRefTypeEnum, any> = {
  FILE_: RetsListingUnitUploadRefTypeEnum.FILE_,
};
  
export function registerGraphqlRetsListingUnitUploadRefTypeEnum(){
    // register new enum resolver
    registerEnumType(RetsListingUnitUploadRefTypeEnum, {
      name: 'RetsListingUnitUploadRefTypeEnum', // This registers the enum with GraphQL
      description: 'RetsListingUnit upload ref type enum',
      valuesMap:{
        FILE_: {
          //description: `Upload market type file. ${meta.file_.validation.validFileFormatMsg} ${meta.file_.validation.maxFileSizeMsg} ${meta.file_.validation.maxCountMsg}`
        },
      }
    });
    // add resolver to graphql
    addGrapaphQLExternalResolvers({RetsListingUnitUploadRefTypeEnum: RetsListingUnitUploadRefTypeEnumResolver});
}
// call above function to register