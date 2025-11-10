// █████████████████████████████████████████████████████████████████████████████████████████████
// find and replace: UserFav
import { addGrapaphQLExternalResolvers } from "@libs/library-app";
import { registerEnumType } from "@nestjs/graphql";

export enum UserFavUploadFileFieldEnum {
  FILE_ = 'file_',
};

export const UserFavUploadFileFieldEnumResolver: Record<keyof typeof UserFavUploadFileFieldEnum, any> = {
  FILE_: UserFavUploadFileFieldEnum.FILE_,
};
  
export function registerGraphqlUserFavUploadFileFieldEnum(){
    // register new enum resolver
    registerEnumType(UserFavUploadFileFieldEnum, {
      name: 'UserFavUploadFileFieldEnum', // This registers the enum with GraphQL
      description: 'UserFav upload ref type enum',
      valuesMap:{
        FILE_: {
          //description: `UserFav upload  file. ${meta.file_.validation.validFileFormatMsg} ${meta.file_.validation.maxFileSizeMsg} ${meta.file_.validation.maxCountMsg}`
        },
      }
    });
    // add resolver to graphql
    addGrapaphQLExternalResolvers({UserFavUploadFileFieldEnum: UserFavUploadFileFieldEnumResolver});
}
// call above function to register