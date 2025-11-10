// █████████████████████████████████████████████████████████████████████████████████████████████
// find and replace: Region
import { addGrapaphQLExternalResolvers } from "@libs/library-app";
import { registerEnumType } from "@nestjs/graphql";
import { RegionEntityMeta as meta } from "./entities/region.entity";

export enum RegionUploadFileFieldEnum {
  FILE_ = 'file_',
};

export const RegionUploadFileFieldEnumResolver: Record<keyof typeof RegionUploadFileFieldEnum, any> = {
  FILE_: RegionUploadFileFieldEnum.FILE_,
};
  
export function registerGraphqlRegionUploadFileFieldEnum(){
    // register new enum resolver
    registerEnumType(RegionUploadFileFieldEnum, {
      name: 'RegionUploadFileFieldEnum', // This registers the enum with GraphQL
      description: 'Region upload ref type enum',
      valuesMap:{
        FILE_: {
          //description: `Region upload  file. ${meta.file_.validation.validFileFormatMsg} ${meta.file_.validation.maxFileSizeMsg} ${meta.file_.validation.maxCountMsg}`
        },
      }
    });
    // add resolver to graphql
    addGrapaphQLExternalResolvers({RegionUploadFileFieldEnum: RegionUploadFileFieldEnumResolver});
}
// call above function to register