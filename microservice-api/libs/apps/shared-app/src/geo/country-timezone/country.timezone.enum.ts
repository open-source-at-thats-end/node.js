 // █████████████████████████████████████████████████████████████████████████████████████████████
 // find and replace: Country
 import { addGrapaphQLExternalResolvers } from "@libs/library-app";
 import { registerEnumType } from "@nestjs/graphql";

 
 export enum CountryTimezoneUploadFileFieldEnum {
   FILE_ = 'file_',
 };
 
 export const CountryTimezoneUploadFileFieldEnumResolver: Record<keyof typeof CountryTimezoneUploadFileFieldEnum, any> = {
   FILE_: CountryTimezoneUploadFileFieldEnum.FILE_,
 };
   
 export function registerGraphqlCountryTimezoneUploadFileFieldEnum(){
     // register new enum resolver
     registerEnumType(CountryTimezoneUploadFileFieldEnum, {
       name: 'CountryTimezoneUploadFileFieldEnum', // This registers the enum with GraphQL
       description: 'Country Timezone upload ref type enum',
       valuesMap:{
         FILE_: {
           //description: `Country upload  file. ${meta.file_.validation.validFileFormatMsg} ${meta.file_.validation.maxFileSizeMsg} ${meta.file_.validation.maxCountMsg}`
         },
       }
     });
     // add resolver to graphql
     addGrapaphQLExternalResolvers({CountryTimezoneUploadFileFieldEnum: CountryTimezoneUploadFileFieldEnumResolver});
 }
 // call above function to register