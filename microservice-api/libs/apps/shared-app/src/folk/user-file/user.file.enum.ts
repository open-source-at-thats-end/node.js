// █████████████████████████████████████████████████████████████████████████████████████████████
// find and replace: UserFile
import { addGrapaphQLExternalResolvers } from "@libs/library-app";
import { registerEnumType } from "@nestjs/graphql";
import { UserFileEntityMeta as meta } from "./entities/user.file.entity";

export enum UserFileUploadFileFieldEnum {
  FILE_USER_ATTACHMENT = 'file',
};

export const UserFileUploadFileFieldEnumResolver: Record<keyof typeof UserFileUploadFileFieldEnum, any> = {
  FILE_USER_ATTACHMENT: UserFileUploadFileFieldEnum.FILE_USER_ATTACHMENT,
};
  
export function registerGraphqlUserFileUploadFileFieldEnum(){
    // register new enum resolver
    registerEnumType(UserFileUploadFileFieldEnum, {
      name: 'UserFileUploadFileFieldEnum', // This registers the enum with GraphQL
      description: 'UserFile upload ref type enum',
      valuesMap:{
        FILE_USER_ATTACHMENT: {
          description: `Upload user file. ${meta.file.validation.validFileFormatMsg} ${meta.file.validation.maxFileSizeMsg} ${meta.file.validation.maxCountMsg}`
        },
      }
    });
    // add resolver to graphql
    addGrapaphQLExternalResolvers({UserFileUploadFileFieldEnum: UserFileUploadFileFieldEnumResolver});
}
registerGraphqlUserFileUploadFileFieldEnum();