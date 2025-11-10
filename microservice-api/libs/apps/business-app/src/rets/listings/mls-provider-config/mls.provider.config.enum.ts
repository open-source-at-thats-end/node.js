// █████████████████████████████████████████████████████████████████████████████████████████████
// find and replace: RetsMlsProviderConfig
import { addGrapaphQLExternalResolvers } from "@libs/library-app";
import { registerEnumType } from "@nestjs/graphql";
import { RetsMlsProviderConfigEntityMeta as meta } from "./entities/mls.provider.config.entity";

export enum RetsMlsProviderConfigUploadRefTypeEnum {
  FILE_ = 'file_',
};

export const RetsMlsProviderConfigUploadRefTypeEnumResolver: Record<keyof typeof RetsMlsProviderConfigUploadRefTypeEnum, any> = {
  FILE_: RetsMlsProviderConfigUploadRefTypeEnum.FILE_,
};
  
export function registerGraphqlRetsMlsProviderConfigUploadRefTypeEnum(){
    // register new enum resolver
    registerEnumType(RetsMlsProviderConfigUploadRefTypeEnum, {
      name: 'RetsMlsProviderConfigUploadRefTypeEnum', // This registers the enum with GraphQL
      description: 'RetsMlsProviderConfig upload ref type enum',
      valuesMap:{
        FILE_: {
          //description: `Upload market type file. ${meta.file_.validation.validFileFormatMsg} ${meta.file_.validation.maxFileSizeMsg} ${meta.file_.validation.maxCountMsg}`
        },
      }
    });
    // add resolver to graphql
    addGrapaphQLExternalResolvers({RetsMlsProviderConfigUploadRefTypeEnum: RetsMlsProviderConfigUploadRefTypeEnumResolver});
}
// call above function to register