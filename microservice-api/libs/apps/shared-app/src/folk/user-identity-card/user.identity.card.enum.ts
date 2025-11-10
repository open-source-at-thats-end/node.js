// █████████████████████████████████████████████████████████████████████████████████████████████
// find and replace: UserIdentityCard
import { addGrapaphQLExternalResolvers } from "@libs/library-app";
import { registerEnumType } from "@nestjs/graphql";
import { UserIdentityCardEntityMeta as meta } from "./entities/user.identity.card.entity";

export enum UserIdentityCardUploadFileFieldEnum {
  FILE_ = 'file_',
};

export const UserIdentityCardUploadFileFieldEnumResolver: Record<keyof typeof UserIdentityCardUploadFileFieldEnum, any> = {
  FILE_: UserIdentityCardUploadFileFieldEnum.FILE_,
};
  
export function registerGraphqlUserIdentityCardUploadFileFieldEnum(){
    // register new enum resolver
    registerEnumType(UserIdentityCardUploadFileFieldEnum, {
      name: 'UserIdentityCardUploadFileFieldEnum', // This registers the enum with GraphQL
      description: 'UserIdentityCard upload ref type enum',
      valuesMap:{
        FILE_: {
          //description: `UserIdentityCard upload  file. ${meta.file_.validation.validFileFormatMsg} ${meta.file_.validation.maxFileSizeMsg} ${meta.file_.validation.maxCountMsg}`
        },
      }
    });
    // add resolver to graphql
    addGrapaphQLExternalResolvers({UserIdentityCardUploadFileFieldEnum: UserIdentityCardUploadFileFieldEnumResolver});
}
// call above function to register