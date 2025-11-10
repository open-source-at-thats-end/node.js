// █████████████████████████████████████████████████████████████████████████████████████████████
// find and replace: StaticDataValue
import { addGrapaphQLExternalResolvers } from "@libs/library-app";
import { registerEnumType } from "@nestjs/graphql";
import { StaticDataValueEntityMeta as meta } from "./entities/value.entity";

export enum StaticDataValueUploadFileFieldEnum {
  FILE_ = 'file_',
};

export const StaticDataValueUploadFileFieldEnumResolver: Record<keyof typeof StaticDataValueUploadFileFieldEnum, any> = {
  FILE_: StaticDataValueUploadFileFieldEnum.FILE_,
};
  
export function registerGraphqlStaticDataValueUploadFileFieldEnum(){
    // register new enum resolver
    registerEnumType(StaticDataValueUploadFileFieldEnum, {
      name: 'StaticDataValueUploadFileFieldEnum', // This registers the enum with GraphQL
      description: 'StaticDataValue upload ref type enum',
      valuesMap:{
        FILE_: {
          //description: `StaticDataValue upload  file. ${meta.file_.validation.validFileFormatMsg} ${meta.file_.validation.maxFileSizeMsg} ${meta.file_.validation.maxCountMsg}`
        },
      }
    });
    // add resolver to graphql
    addGrapaphQLExternalResolvers({StaticDataValueUploadFileFieldEnum: StaticDataValueUploadFileFieldEnumResolver});
}
// call above function to register