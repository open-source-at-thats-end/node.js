import { addGrapaphQLExternalResolvers } from "@libs/library-app";
import { registerEnumType } from "@nestjs/graphql";
import { UserPersonalInfoEntityMeta as meta } from "./entities/user.personal.info.entity";

export enum GenderEnum {
    OTHER = 0,
    MALE = 1,
    FEMALE = 2
  };

  export const GenderEnumResolver: Record<keyof typeof GenderEnum, any> = {
    OTHER: GenderEnum.OTHER,
    MALE: GenderEnum.MALE,
    FEMALE: GenderEnum.FEMALE,
    
  };
  
  export function registerGraphqlEnumGender(){
    // register new enum resolver
    registerEnumType(GenderEnum, {
      name: 'GenderEnum', // This registers the enum with GraphQL
      description: 'Used to set buy and sell rate type.',
      valuesMap:{
        OTHER:{
          description: 'Other'
        },
        MALE:{
          description: 'Male'
        },
        FEMALE:{
          description: 'Female'
        },
      }
    });
    // add resolver to graphql
    addGrapaphQLExternalResolvers({GenderEnum: GenderEnumResolver});
  }
  registerGraphqlEnumGender();
  

// █████████████████████████████████████████████████████████████████████████████████████████████
// find and replace: UserPersonalInfo
export enum UserPersonalInfoUploadFileFieldEnum {
  FILE_ = 'file_',
};

export const UserPersonalInfoUploadFileFieldEnumResolver: Record<keyof typeof UserPersonalInfoUploadFileFieldEnum, any> = {
  FILE_: UserPersonalInfoUploadFileFieldEnum.FILE_,
};
  
export function registerGraphqlUserPersonalInfoUploadFileFieldEnum(){
    // register new enum resolver
    registerEnumType(UserPersonalInfoUploadFileFieldEnum, {
      name: 'UserPersonalInfoUploadFileFieldEnum', // This registers the enum with GraphQL
      description: 'UserPersonalInfo upload ref type enum',
      valuesMap:{
        FILE_: {
          //description: `UserPersonalInfo upload  file. ${meta.file_.validation.validFileFormatMsg} ${meta.file_.validation.maxFileSizeMsg} ${meta.file_.validation.maxCountMsg}`
        },
      }
    });
    // add resolver to graphql
    addGrapaphQLExternalResolvers({UserPersonalInfoUploadFileFieldEnum: UserPersonalInfoUploadFileFieldEnumResolver});
}
// call above function to register