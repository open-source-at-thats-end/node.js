// █████████████████████████████████████████████████████████████████████████████████████████████
// find and replace: UserAuthorisation
import { addGrapaphQLExternalResolvers } from "@libs/library-app";
import { registerEnumType } from "@nestjs/graphql";
import { UserAuthorisationEntityMeta as meta } from "./entities/user.authorisation.entity";

export enum UserAuthorisationUploadFileFieldEnum {
  FILE_ = 'file_',
};

export const UserAuthorisationUploadFileFieldEnumResolver: Record<keyof typeof UserAuthorisationUploadFileFieldEnum, any> = {
  FILE_: UserAuthorisationUploadFileFieldEnum.FILE_,
};
  
export function registerGraphqlUserAuthorisationUploadFileFieldEnum(){
    // register new enum resolver
    registerEnumType(UserAuthorisationUploadFileFieldEnum, {
      name: 'UserAuthorisationUploadFileFieldEnum', // This registers the enum with GraphQL
      description: 'UserAuthorisation upload ref type enum',
      valuesMap:{
        FILE_: {
          //description: `UserAuthorisation upload  file. ${meta.file_.validation.validFileFormatMsg} ${meta.file_.validation.maxFileSizeMsg} ${meta.file_.validation.maxCountMsg}`
        },
      }
    });
    // add resolver to graphql
    addGrapaphQLExternalResolvers({UserAuthorisationUploadFileFieldEnum: UserAuthorisationUploadFileFieldEnumResolver});
}
// call above function to register