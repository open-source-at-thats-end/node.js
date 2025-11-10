// █████████████████████████████████████████████████████████████████████████████████████████████
// find and replace: User
import { addGrapaphQLExternalResolvers } from "@libs/library-app";
import { registerEnumType } from "@nestjs/graphql";
import { UserEntityMeta as meta } from "./entities/user.entity";

export enum UserUploadFileFieldEnum {
  FILE_PROFILE_PHOTO = 'file_profile_photo',
  FILE_PROFILE_BANNER = 'file_profile_banner',
};

export const UserUploadFileFieldEnumResolver: Record<keyof typeof UserUploadFileFieldEnum, any> = {
    FILE_PROFILE_PHOTO: UserUploadFileFieldEnum.FILE_PROFILE_PHOTO,
    FILE_PROFILE_BANNER: UserUploadFileFieldEnum.FILE_PROFILE_BANNER,
};
  
export function registerGraphqlUserUploadFileFieldEnum(){
    // register new enum resolver
    registerEnumType(UserUploadFileFieldEnum, {
      name: 'UserUploadFileFieldEnum', // This registers the enum with GraphQL
      description: 'User upload ref type enum',
      valuesMap:{
        FILE_PROFILE_PHOTO: {
          description: `Upload user profile photo. ${meta.file_profile_photo.validation.validFileFormatMsg} ${meta.file_profile_photo.validation.maxFileSizeMsg} ${meta.file_profile_photo.validation.maxCountMsg}`
        },
        FILE_PROFILE_BANNER: {
          description: `Upload user profile banner. ${meta.file_profile_banner.validation.validFileFormatMsg} ${meta.file_profile_banner.validation.maxFileSizeMsg} ${meta.file_profile_banner.validation.maxCountMsg}`
        },
      }
    });
    // add resolver to graphql
    addGrapaphQLExternalResolvers({UserUploadFileFieldEnum: UserUploadFileFieldEnumResolver});
}
registerGraphqlUserUploadFileFieldEnum();