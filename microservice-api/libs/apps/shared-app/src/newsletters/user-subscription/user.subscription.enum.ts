// █████████████████████████████████████████████████████████████████████████████████████████████
// find and replace: UserNewsLetterSubscription
import { addGrapaphQLExternalResolvers } from "@libs/library-app";
import { registerEnumType } from "@nestjs/graphql";



export enum UserNewsLetterSubscriptionUploadFileFieldEnum {
  FILE_ = 'file_',
};

export const UserNewsLetterSubscriptionUploadFileFieldEnumResolver: Record<keyof typeof UserNewsLetterSubscriptionUploadFileFieldEnum, any> = {
  FILE_: UserNewsLetterSubscriptionUploadFileFieldEnum.FILE_,
};
  
export function registerGraphqlUserNewsLetterSubscriptionUploadFileFieldEnum(){
    // register new enum resolver
    registerEnumType(UserNewsLetterSubscriptionUploadFileFieldEnum, {
      name: 'UserNewsLetterSubscriptionUploadFileFieldEnum', // This registers the enum with GraphQL
      description: 'UserNewsLetterSubscription upload ref type enum',
      valuesMap:{
        FILE_: {
          //description: `UserNewsLetterSubscription upload  file. ${meta.file_.validation.validFileFormatMsg} ${meta.file_.validation.maxFileSizeMsg} ${meta.file_.validation.maxCountMsg}`
        },
      }
    });
    // add resolver to graphql
    addGrapaphQLExternalResolvers({UserNewsLetterSubscriptionUploadFileFieldEnum: UserNewsLetterSubscriptionUploadFileFieldEnumResolver});
}
// call above function to register