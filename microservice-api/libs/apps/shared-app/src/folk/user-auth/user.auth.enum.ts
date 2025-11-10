// █████████████████████████████████████████████████████████████████████████████████████████████
// find and replace: UserAuthentication
import { addGrapaphQLExternalResolvers } from "@libs/library-app";
import { registerEnumType } from "@nestjs/graphql";
import { UserAuthenticationEntityMeta as meta } from "./entities/user.auth.entity";

export enum UserAuthenticationUploadFileFieldEnum {
  FILE_ = 'file_',
};

export const UserAuthenticationUploadFileFieldEnumResolver: Record<keyof typeof UserAuthenticationUploadFileFieldEnum, any> = {
  FILE_: UserAuthenticationUploadFileFieldEnum.FILE_,
};
  
export function registerGraphqlUserAuthenticationUploadFileFieldEnum(){
    // register new enum resolver
    registerEnumType(UserAuthenticationUploadFileFieldEnum, {
      name: 'UserAuthenticationUploadFileFieldEnum', // This registers the enum with GraphQL
      description: 'UserAuthentication upload ref type enum',
      valuesMap:{
        FILE_: {
          //description: `UserAuthentication upload  file. ${meta.file_.validation.validFileFormatMsg} ${meta.file_.validation.maxFileSizeMsg} ${meta.file_.validation.maxCountMsg}`
        },
      }
    });
    // add resolver to graphql
    addGrapaphQLExternalResolvers({UserAuthenticationUploadFileFieldEnum: UserAuthenticationUploadFileFieldEnumResolver});
}
// call above function to register