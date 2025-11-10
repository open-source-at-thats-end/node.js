// █████████████████████████████████████████████████████████████████████████████████████████████
// find and replace: City
import { addGrapaphQLExternalResolvers } from "@libs/library-app";
import { registerEnumType } from "@nestjs/graphql";
import { CityEntityMeta as meta } from "./entities/city.entity";

export enum CityUploadFileFieldEnum {
  FILE_ = 'file_',
};

export const CityUploadFileFieldEnumResolver: Record<keyof typeof CityUploadFileFieldEnum, any> = {
  FILE_: CityUploadFileFieldEnum.FILE_,
};
  
export function registerGraphqlCityUploadFileFieldEnum(){
    // register new enum resolver
    registerEnumType(CityUploadFileFieldEnum, {
      name: 'CityUploadFileFieldEnum', // This registers the enum with GraphQL
      description: 'City upload ref type enum',
      valuesMap:{
        FILE_: {
          //description: `City upload  file. ${meta.file_.validation.validFileFormatMsg} ${meta.file_.validation.maxFileSizeMsg} ${meta.file_.validation.maxCountMsg}`
        },
      }
    });
    // add resolver to graphql
    addGrapaphQLExternalResolvers({CityUploadFileFieldEnum: CityUploadFileFieldEnumResolver});
}
// call above function to register