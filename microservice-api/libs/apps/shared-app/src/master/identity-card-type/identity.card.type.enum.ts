// █████████████████████████████████████████████████████████████████████████████████████████████
// find and replace: IdentityCardType
import { addGrapaphQLExternalResolvers } from "@libs/library-app";
import { registerEnumType } from "@nestjs/graphql";
import { IdentityCardTypeEntityMeta as meta } from "./entities/identity.card.type.entity";

export enum IdentityCardTypeUploadFileFieldEnum {
  FILE_ = 'file_',
};

export const IdentityCardTypeUploadFileFieldEnumResolver: Record<keyof typeof IdentityCardTypeUploadFileFieldEnum, any> = {
  FILE_: IdentityCardTypeUploadFileFieldEnum.FILE_,
};
  
export function registerGraphqlIdentityCardTypeUploadFileFieldEnum(){
    // register new enum resolver
    registerEnumType(IdentityCardTypeUploadFileFieldEnum, {
      name: 'IdentityCardTypeUploadFileFieldEnum', // This registers the enum with GraphQL
      description: 'IdentityCardType upload ref type enum',
      valuesMap:{
        FILE_: {
          //description: `IdentityCardType upload  file. ${meta.file_.validation.validFileFormatMsg} ${meta.file_.validation.maxFileSizeMsg} ${meta.file_.validation.maxCountMsg}`
        },
      }
    });
    // add resolver to graphql
    addGrapaphQLExternalResolvers({IdentityCardTypeUploadFileFieldEnum: IdentityCardTypeUploadFileFieldEnumResolver});
}
// call above function to register