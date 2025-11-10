// █████████████████████████████████████████████████████████████████████████████████████████████
// find and replace: UserCorporateInfo
import { addGrapaphQLExternalResolvers } from "@libs/library-app";
import { registerEnumType } from "@nestjs/graphql";
import { UserCorporateInfoEntityMeta as meta } from "./entities/user.corporate.info.entity";

export enum UserCorporateInfoUploadFileFieldEnum {
  FILE_COMPANY_LOGO = 'file_company_logo',
};

export const UserCorporateInfoUploadFileFieldEnumResolver: Record<keyof typeof UserCorporateInfoUploadFileFieldEnum, any> = {
  FILE_COMPANY_LOGO: UserCorporateInfoUploadFileFieldEnum.FILE_COMPANY_LOGO,
};
  
export function registerGraphqlUserCorporateInfoUploadFileFieldEnum(){
    // register new enum resolver
    registerEnumType(UserCorporateInfoUploadFileFieldEnum, {
      name: 'UserCorporateInfoUploadFileFieldEnum', // This registers the enum with GraphQL
      description: 'UserCorporateInfo upload ref type enum',
      valuesMap:{
        FILE_COMPANY_LOGO: {
          description: `User company logo upload  file. ${meta.file_company_logo.validation.validFileFormatMsg} ${meta.file_company_logo.validation.maxFileSizeMsg} ${meta.file_company_logo.validation.maxCountMsg}`
        },
      }
    });
    // add resolver to graphql
    addGrapaphQLExternalResolvers({UserCorporateInfoUploadFileFieldEnum: UserCorporateInfoUploadFileFieldEnumResolver});
}

// call above function to register
registerGraphqlUserCorporateInfoUploadFileFieldEnum();