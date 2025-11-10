// █████████████████████████████████████████████████████████████████████████████████████████████
// find and replace: UserHierarchy
import { addGrapaphQLExternalResolvers } from "@libs/library-app";
import { registerEnumType } from "@nestjs/graphql";
import { UserHierarchyEntityMeta as meta } from "./entities/user.hierarchy.entity";

export enum UserHierarchyUploadFileFieldEnum {
  FILE_ = 'file_',
};

export const UserHierarchyUploadFileFieldEnumResolver: Record<keyof typeof UserHierarchyUploadFileFieldEnum, any> = {
  FILE_: UserHierarchyUploadFileFieldEnum.FILE_,
};
  
export function registerGraphqlUserHierarchyUploadFileFieldEnum(){
    // register new enum resolver
    registerEnumType(UserHierarchyUploadFileFieldEnum, {
      name: 'UserHierarchyUploadFileFieldEnum', // This registers the enum with GraphQL
      description: 'UserHierarchy upload ref type enum',
      valuesMap:{
        FILE_: {
          //description: `UserHierarchy upload  file. ${meta.file_.validation.validFileFormatMsg} ${meta.file_.validation.maxFileSizeMsg} ${meta.file_.validation.maxCountMsg}`
        },
      }
    });
    // add resolver to graphql
    addGrapaphQLExternalResolvers({UserHierarchyUploadFileFieldEnum: UserHierarchyUploadFileFieldEnumResolver});
}
// call above function to register