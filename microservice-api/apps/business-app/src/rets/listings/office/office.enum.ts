// █████████████████████████████████████████████████████████████████████████████████████████████
// find and replace: RetsListingOffice
import { addGrapaphQLExternalResolvers } from "@libs/library-app";
import { registerEnumType } from "@nestjs/graphql";
import { RetsListingOfficeEntityMeta as meta } from "./entities/office.entity";

export enum RetsListingOfficeUploadRefTypeEnum {
  FILE_ = 'file_',
};

export const RetsListingOfficeUploadRefTypeEnumResolver: Record<keyof typeof RetsListingOfficeUploadRefTypeEnum, any> = {
  FILE_: RetsListingOfficeUploadRefTypeEnum.FILE_,
};
  
export function registerGraphqlRetsListingOfficeUploadRefTypeEnum(){
    // register new enum resolver
    registerEnumType(RetsListingOfficeUploadRefTypeEnum, {
      name: 'RetsListingOfficeUploadRefTypeEnum', // This registers the enum with GraphQL
      description: 'RetsListingOffice upload ref type enum',
      valuesMap:{
        FILE_: {
          //description: `Upload market type file. ${meta.file_.validation.validFileFormatMsg} ${meta.file_.validation.maxFileSizeMsg} ${meta.file_.validation.maxCountMsg}`
        },
      }
    });
    // add resolver to graphql
    addGrapaphQLExternalResolvers({RetsListingOfficeUploadRefTypeEnum: RetsListingOfficeUploadRefTypeEnumResolver});
}
// call above function to register