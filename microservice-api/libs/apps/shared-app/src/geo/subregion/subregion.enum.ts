// █████████████████████████████████████████████████████████████████████████████████████████████
// find and replace: Subregion
import { addGrapaphQLExternalResolvers } from "@libs/library-app";
import { registerEnumType } from "@nestjs/graphql";
import { SubregionEntityMeta as meta } from "./entities/subregion.entity";

export enum SubregionUploadFileFieldEnum {
  FILE_ = 'file_',
};

export const SubregionUploadFileFieldEnumResolver: Record<keyof typeof SubregionUploadFileFieldEnum, any> = {
  FILE_: SubregionUploadFileFieldEnum.FILE_,
};
  
export function registerGraphqlSubregionUploadFileFieldEnum(){
    // register new enum resolver
    registerEnumType(SubregionUploadFileFieldEnum, {
      name: 'SubregionUploadFileFieldEnum', // This registers the enum with GraphQL
      description: 'Subregion upload ref type enum',
      valuesMap:{
        FILE_: {
          //description: `Subregion upload  file. ${meta.file_.validation.validFileFormatMsg} ${meta.file_.validation.maxFileSizeMsg} ${meta.file_.validation.maxCountMsg}`
        },
      }
    });
    // add resolver to graphql
    addGrapaphQLExternalResolvers({SubregionUploadFileFieldEnum: SubregionUploadFileFieldEnumResolver});
}
// call above function to register