// █████████████████████████████████████████████████████████████████████████████████████████████
// find and replace: Country
import { addGrapaphQLExternalResolvers } from "@libs/library-app";
import { registerEnumType } from "@nestjs/graphql";
import { CountryEntityMeta as meta } from "./entities/country.entity";

export enum CountryUploadFileFieldEnum {
  FILE_ = 'file_',
};

export const CountryUploadFileFieldEnumResolver: Record<keyof typeof CountryUploadFileFieldEnum, any> = {
  FILE_: CountryUploadFileFieldEnum.FILE_,
};
  
export function registerGraphqlCountryUploadFileFieldEnum(){
    // register new enum resolver
    registerEnumType(CountryUploadFileFieldEnum, {
      name: 'CountryUploadFileFieldEnum', // This registers the enum with GraphQL
      description: 'Country upload ref type enum',
      valuesMap:{
        FILE_: {
          //description: `Country upload  file. ${meta.file_.validation.validFileFormatMsg} ${meta.file_.validation.maxFileSizeMsg} ${meta.file_.validation.maxCountMsg}`
        },
      }
    });
    // add resolver to graphql
    addGrapaphQLExternalResolvers({CountryUploadFileFieldEnum: CountryUploadFileFieldEnumResolver});
}
// call above function to register