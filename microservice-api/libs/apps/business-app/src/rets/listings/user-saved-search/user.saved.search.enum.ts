// █████████████████████████████████████████████████████████████████████████████████████████████
// find and replace: UserSavedSearch
import { addGrapaphQLExternalResolvers } from "@libs/library-app";
import { registerEnumType } from "@nestjs/graphql";

export enum UserSavedSearchUploadRefTypeEnum {
  FILE_ = 'file_',
};

export const UserSavedSearchUploadRefTypeEnumResolver: Record<keyof typeof UserSavedSearchUploadRefTypeEnum, any> = {
  FILE_: UserSavedSearchUploadRefTypeEnum.FILE_,
};
  
export function registerGraphqlUserSavedSearchUploadRefTypeEnum(){
    // register new enum resolver
    registerEnumType(UserSavedSearchUploadRefTypeEnum, {
      name: 'UserSavedSearchUploadRefTypeEnum', // This registers the enum with GraphQL
      description: 'UserSavedSearch upload ref type enum',
      valuesMap:{
        FILE_: {
          //description: `Upload market type file. ${meta.file_.validation.validFileFormatMsg} ${meta.file_.validation.maxFileSizeMsg} ${meta.file_.validation.maxCountMsg}`
        },
      }
    });
    // add resolver to graphql
    addGrapaphQLExternalResolvers({UserSavedSearchUploadRefTypeEnum: UserSavedSearchUploadRefTypeEnumResolver});
}
// call above function to register