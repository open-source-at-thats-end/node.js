 // █████████████████████████████████████████████████████████████████████████████████████████████
 // find and replace: Country
 import { addGrapaphQLExternalResolvers } from "@libs/library-app";
 import { registerEnumType } from "@nestjs/graphql";

 
 export enum CountryLanguageUploadFileFieldEnum {
   FILE_ = 'file_',
 };
 
 export const CountryLanguageUploadFileFieldEnumResolver: Record<keyof typeof CountryLanguageUploadFileFieldEnum, any> = {
   FILE_: CountryLanguageUploadFileFieldEnum.FILE_,
 };
   
 export function registerGraphqlCountryLanguageUploadFileFieldEnum(){
     // register new enum resolver
     registerEnumType(CountryLanguageUploadFileFieldEnum, {
       name: 'CountryLanguageUploadFileFieldEnum', // This registers the enum with GraphQL
       description: 'Country Language upload ref type enum',
       valuesMap:{
         FILE_: {
           //description: `Country upload  file. ${meta.file_.validation.validFileFormatMsg} ${meta.file_.validation.maxFileSizeMsg} ${meta.file_.validation.maxCountMsg}`
         },
       }
     });
     // add resolver to graphql
     addGrapaphQLExternalResolvers({CountryLanguageUploadFileFieldEnum: CountryLanguageUploadFileFieldEnumResolver});
 }
 // call above function to register