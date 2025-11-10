// █████████████████████████████████████████████████████████████████████████████████████████████
// find and replace: ThirdPartyPlatform
import { addGrapaphQLExternalResolvers } from "@libs/library-app";
import { registerEnumType } from "@nestjs/graphql";
import { ThirdPartyPlatformEntityMeta as meta } from "./entities/third.party.platform.entity";

export enum ThirdPartyPlatformUploadFileFieldEnum {
  FILE_ = 'file_',
};

export const ThirdPartyPlatformUploadFileFieldEnumResolver: Record<keyof typeof ThirdPartyPlatformUploadFileFieldEnum, any> = {
  FILE_: ThirdPartyPlatformUploadFileFieldEnum.FILE_,
};
  
export function registerGraphqlThirdPartyPlatformUploadFileFieldEnum(){
    // register new enum resolver
    registerEnumType(ThirdPartyPlatformUploadFileFieldEnum, {
      name: 'ThirdPartyPlatformUploadFileFieldEnum', // This registers the enum with GraphQL
      description: 'ThirdPartyPlatform upload ref type enum',
      valuesMap:{
        FILE_: {
          //description: `ThirdPartyPlatform upload  file. ${meta.file_.validation.validFileFormatMsg} ${meta.file_.validation.maxFileSizeMsg} ${meta.file_.validation.maxCountMsg}`
        },
      }
    });
    // add resolver to graphql
    addGrapaphQLExternalResolvers({ThirdPartyPlatformUploadFileFieldEnum: ThirdPartyPlatformUploadFileFieldEnumResolver});
}
// call above function to register