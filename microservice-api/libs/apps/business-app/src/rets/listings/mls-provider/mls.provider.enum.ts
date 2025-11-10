// █████████████████████████████████████████████████████████████████████████████████████████████
// find and replace: RetsMlsProvider
import { addGrapaphQLExternalResolvers } from "@libs/library-app";
import { registerEnumType } from "@nestjs/graphql";
import { RetsMlsProviderEntityMeta as meta } from "./entities/mls.provider.entity";

export enum RetsMlsProviderUploadRefTypeEnum {
  FILE_ = 'file_',
};

export const RetsMlsProviderUploadRefTypeEnumResolver: Record<keyof typeof RetsMlsProviderUploadRefTypeEnum, any> = {
  FILE_: RetsMlsProviderUploadRefTypeEnum.FILE_,
};
  
export function registerGraphqlRetsMlsProviderUploadRefTypeEnum(){
    // register new enum resolver
    registerEnumType(RetsMlsProviderUploadRefTypeEnum, {
      name: 'RetsMlsProviderUploadRefTypeEnum', // This registers the enum with GraphQL
      description: 'RetsMlsProvider upload ref type enum',
      valuesMap:{
        FILE_: {
          //description: `Upload market type file. ${meta.file_.validation.validFileFormatMsg} ${meta.file_.validation.maxFileSizeMsg} ${meta.file_.validation.maxCountMsg}`
        },
      }
    });
    // add resolver to graphql
    addGrapaphQLExternalResolvers({RetsMlsProviderUploadRefTypeEnum: RetsMlsProviderUploadRefTypeEnumResolver});
}
// call above function to register