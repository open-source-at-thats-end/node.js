// █████████████████████████████████████████████████████████████████████████████████████████████
// find and replace: UserAddress
import { addGrapaphQLExternalResolvers } from "@libs/library-app";
import { registerEnumType } from "@nestjs/graphql";
import { UserAddressEntityMeta as meta } from "./entities/user.address.entity";

export enum UserAddressUploadFileFieldEnum {
  FILE_ = 'file_',
};

export const UserAddressUploadFileFieldEnumResolver: Record<keyof typeof UserAddressUploadFileFieldEnum, any> = {
  FILE_: UserAddressUploadFileFieldEnum.FILE_,
};
  
export function registerGraphqlUserAddressUploadFileFieldEnum(){
    // register new enum resolver
    registerEnumType(UserAddressUploadFileFieldEnum, {
      name: 'UserAddressUploadFileFieldEnum', // This registers the enum with GraphQL
      description: 'UserAddress upload ref type enum',
      valuesMap:{
        FILE_: {
          //description: `UserAddress upload  file. ${meta.file_.validation.validFileFormatMsg} ${meta.file_.validation.maxFileSizeMsg} ${meta.file_.validation.maxCountMsg}`
        },
      }
    });
    // add resolver to graphql
    addGrapaphQLExternalResolvers({UserAddressUploadFileFieldEnum: UserAddressUploadFileFieldEnumResolver});
}
// call above function to register