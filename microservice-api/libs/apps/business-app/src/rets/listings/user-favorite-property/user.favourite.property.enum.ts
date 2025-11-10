// █████████████████████████████████████████████████████████████████████████████████████████████
// find and replace: UserFavouriteProperty
import { addGrapaphQLExternalResolvers } from "@libs/library-app";
import { registerEnumType } from "@nestjs/graphql";

export enum UserFavouritePropertyUploadRefTypeEnum {
  FILE_ = 'file_',
};

export const UserFavouritePropertyUploadRefTypeEnumResolver: Record<keyof typeof UserFavouritePropertyUploadRefTypeEnum, any> = {
  FILE_: UserFavouritePropertyUploadRefTypeEnum.FILE_,
};
  
export function registerGraphqlUserFavouritePropertyUploadRefTypeEnum(){
    // register new enum resolver
    registerEnumType(UserFavouritePropertyUploadRefTypeEnum, {
      name: 'UserFavouritePropertyUploadRefTypeEnum', // This registers the enum with GraphQL
      description: 'UserFavouriteProperty upload ref type enum',
      valuesMap:{
        FILE_: {
          //description: `Upload market type file. ${meta.file_.validation.validFileFormatMsg} ${meta.file_.validation.maxFileSizeMsg} ${meta.file_.validation.maxCountMsg}`
        },
      }
    });
    // add resolver to graphql
    addGrapaphQLExternalResolvers({UserFavouritePropertyUploadRefTypeEnum: UserFavouritePropertyUploadRefTypeEnumResolver});
}
// call above function to register