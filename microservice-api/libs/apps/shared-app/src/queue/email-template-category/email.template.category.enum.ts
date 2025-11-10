// █████████████████████████████████████████████████████████████████████████████████████████████
// find and replace: EmailTemplateCategory
import { addGrapaphQLExternalResolvers } from "@libs/library-app";
import { registerEnumType } from "@nestjs/graphql";
import { EmailTemplateCategoryEntityMeta as meta } from "./entities/email.template.category.entity";

export enum EmailTemplateCategoryUploadFileFieldEnum {
  FILE_ = 'file_',
};

export const EmailTemplateCategoryUploadFileFieldEnumResolver: Record<keyof typeof EmailTemplateCategoryUploadFileFieldEnum, any> = {
  FILE_: EmailTemplateCategoryUploadFileFieldEnum.FILE_,
};

/*export enum emailTypeEnum {
  DEFAULT = 1,
  REGISTRATION = 2,
  LOGIN = 3,
  PASSWORDRESET = 4,
  NEWSLETTER = 5
};

export const emailTypeEnumResolver: Record<keyof typeof emailTypeEnum, any> = {
  DEFAULT: emailTypeEnum.DEFAULT,
  REGISTRATION: emailTypeEnum.REGISTRATION,
  LOGIN: emailTypeEnum.LOGIN,
  PASSWORDRESET: emailTypeEnum.PASSWORDRESET,
  NEWSLETTER: emailTypeEnum.NEWSLETTER,
};
export function registerGraphqlEnumType(){
  // register new enum resolver
  registerEnumType(emailTypeEnum, {
    name: 'emailTypeEnum', // This registers the enum with GraphQL
    description: 'Used to define setting send by available for end user or internal use.',
    valuesMap:{
      DEFAULT:{
        description: 'Default'
      },
      REGISTRATION:{
        description: 'Registration'
      },
      LOGIN:{
        description: 'Login'
      },
      PASSWORDRESET:{
        description: 'Password Reset'
      },
      NEWSLETTER:{
        description: 'Newsletter'
      },
    }
  });
  // add resolver to graphql
  //addGrapaphQLExternalResolvers({emailTypeEnum: emailTypeEnumResolver});
}
//registerGraphqlEnumType();*/

export function registerGraphqlEmailTemplateCategoryUploadFileFieldEnum(){
    // register new enum resolver
    registerEnumType(EmailTemplateCategoryUploadFileFieldEnum, {
      name: 'EmailTemplateCategoryUploadFileFieldEnum', // This registers the enum with GraphQL
      description: 'EmailTemplateCategory upload ref type enum',
      valuesMap:{
        FILE_: {
          //description: `EmailTemplateCategory upload  file. ${meta.file_.validation.validFileFormatMsg} ${meta.file_.validation.maxFileSizeMsg} ${meta.file_.validation.maxCountMsg}`
        },
      }
    });
    // add resolver to graphql
    addGrapaphQLExternalResolvers({EmailTemplateCategoryUploadFileFieldEnum: EmailTemplateCategoryUploadFileFieldEnumResolver});
}
// call above function to register