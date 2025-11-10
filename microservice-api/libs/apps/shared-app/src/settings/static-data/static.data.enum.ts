// █████████████████████████████████████████████████████████████████████████████████████████████
// find and replace: StaticData
import { addGrapaphQLExternalResolvers } from "@libs/library-app";
import { registerEnumType } from "@nestjs/graphql";
import { StaticDataEntityMeta as meta } from "./entities/static.data.entity";

export enum StaticDataUploadFileFieldEnum {
  FILE_ = 'file_',
};

export const StaticDataUploadFileFieldEnumResolver: Record<keyof typeof StaticDataUploadFileFieldEnum, any> = {
  FILE_: StaticDataUploadFileFieldEnum.FILE_,
};
  
export function registerGraphqlStaticDataUploadFileFieldEnum(){
    // register new enum resolver
    registerEnumType(StaticDataUploadFileFieldEnum, {
      name: 'StaticDataUploadFileFieldEnum', // This registers the enum with GraphQL
      description: 'StaticData upload ref type enum',
      valuesMap:{
        FILE_: {
          //description: `StaticData upload  file. ${meta.file_.validation.validFileFormatMsg} ${meta.file_.validation.maxFileSizeMsg} ${meta.file_.validation.maxCountMsg}`
        },
      }
    });
    // add resolver to graphql
    addGrapaphQLExternalResolvers({StaticDataUploadFileFieldEnum: StaticDataUploadFileFieldEnumResolver});
}
// call above function to register