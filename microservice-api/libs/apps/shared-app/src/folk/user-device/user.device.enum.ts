// █████████████████████████████████████████████████████████████████████████████████████████████
// find and replace: UserDevice
import { addGrapaphQLExternalResolvers } from "@libs/library-app";
import { registerEnumType } from "@nestjs/graphql";
import { UserDeviceEntityMeta as meta } from "./entities/user.device.entity";

export enum UserDeviceUploadFileFieldEnum {
  FILE_ = 'file_',
};

export const UserDeviceUploadFileFieldEnumResolver: Record<keyof typeof UserDeviceUploadFileFieldEnum, any> = {
  FILE_: UserDeviceUploadFileFieldEnum.FILE_,
};
  
export function registerGraphqlUserDeviceUploadFileFieldEnum(){
    // register new enum resolver
    registerEnumType(UserDeviceUploadFileFieldEnum, {
      name: 'UserDeviceUploadFileFieldEnum', // This registers the enum with GraphQL
      description: 'UserDevice upload ref type enum',
      valuesMap:{
        FILE_: {
          //description: `UserDevice upload  file. ${meta.file_.validation.validFileFormatMsg} ${meta.file_.validation.maxFileSizeMsg} ${meta.file_.validation.maxCountMsg}`
        },
      }
    });
    // add resolver to graphql
    addGrapaphQLExternalResolvers({UserDeviceUploadFileFieldEnum: UserDeviceUploadFileFieldEnumResolver});
}
// call above function to register