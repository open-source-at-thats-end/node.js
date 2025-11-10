// █████████████████████████████████████████████████████████████████████████████████████████████
// find and replace: UserFavCategory
import { addGrapaphQLExternalResolvers } from "@libs/library-app";
import { registerEnumType } from "@nestjs/graphql";

export enum UserFavCategoryUploadFileFieldEnum {
  FILE_ = 'file_',
};

export const UserFavCategoryUploadFileFieldEnumResolver: Record<keyof typeof UserFavCategoryUploadFileFieldEnum, any> = {
  FILE_: UserFavCategoryUploadFileFieldEnum.FILE_,
};
  
export function registerGraphqlUserFavCategoryUploadFileFieldEnum(){
    // register new enum resolver
    registerEnumType(UserFavCategoryUploadFileFieldEnum, {
      name: 'UserFavCategoryUploadFileFieldEnum', // This registers the enum with GraphQL
      description: 'UserFavCategory upload ref type enum',
      valuesMap:{
        FILE_: {
          //description: `UserFavCategory upload  file. ${meta.file_.validation.validFileFormatMsg} ${meta.file_.validation.maxFileSizeMsg} ${meta.file_.validation.maxCountMsg}`
        },
      }
    });
    // add resolver to graphql
    addGrapaphQLExternalResolvers({UserFavCategoryUploadFileFieldEnum: UserFavCategoryUploadFileFieldEnumResolver});
}
// call above function to register