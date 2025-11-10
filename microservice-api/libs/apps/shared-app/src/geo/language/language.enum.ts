// █████████████████████████████████████████████████████████████████████████████████████████████
// find and replace: Language
import { addGrapaphQLExternalResolvers } from "@libs/library-app";
import { registerEnumType } from "@nestjs/graphql";
import { LanguageEntityMeta as meta } from "./entities/language.entity";

export enum LanguageUploadFileFieldEnum {
  FILE_ = 'file_',
};

export const LanguageUploadFileFieldEnumResolver: Record<keyof typeof LanguageUploadFileFieldEnum, any> = {
  FILE_: LanguageUploadFileFieldEnum.FILE_,
};
  
export function registerGraphqlLanguageUploadFileFieldEnum(){
    // register new enum resolver
    registerEnumType(LanguageUploadFileFieldEnum, {
      name: 'LanguageUploadFileFieldEnum', // This registers the enum with GraphQL
      description: 'Language upload ref type enum',
      valuesMap:{
        FILE_: {
          //description: `Language upload  file. ${meta.file_.validation.validFileFormatMsg} ${meta.file_.validation.maxFileSizeMsg} ${meta.file_.validation.maxCountMsg}`
        },
      }
    });
    // add resolver to graphql
    addGrapaphQLExternalResolvers({LanguageUploadFileFieldEnum: LanguageUploadFileFieldEnumResolver});
}
// call above function to register