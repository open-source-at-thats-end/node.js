// █████████████████████████████████████████████████████████████████████████████████████████████
// find and replace: EmailTemplate
import { addGrapaphQLExternalResolvers } from "@libs/library-app";
import { registerEnumType } from "@nestjs/graphql";
import { EmailTemplateEntityMeta as meta } from "./entities/email.template.entity";

export enum EmailTemplateUploadFileFieldEnum {
  FILE_ = 'file_',
};

export const EmailTemplateUploadFileFieldEnumResolver: Record<keyof typeof EmailTemplateUploadFileFieldEnum, any> = {
  FILE_: EmailTemplateUploadFileFieldEnum.FILE_,
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
  addGrapaphQLExternalResolvers({emailTypeEnum: emailTypeEnumResolver});
}
registerGraphqlEnumType();*/

export function registerGraphqlEmailTemplateUploadFileFieldEnum(){
    // register new enum resolver
    registerEnumType(EmailTemplateUploadFileFieldEnum, {
      name: 'EmailTemplateUploadFileFieldEnum', // This registers the enum with GraphQL
      description: 'EmailTemplate upload ref type enum',
      valuesMap:{
        FILE_: {
          //description: `EmailTemplate upload  file. ${meta.file_.validation.validFileFormatMsg} ${meta.file_.validation.maxFileSizeMsg} ${meta.file_.validation.maxCountMsg}`
        },
      }
    });
    // add resolver to graphql
    addGrapaphQLExternalResolvers({EmailTemplateUploadFileFieldEnum: EmailTemplateUploadFileFieldEnumResolver});
}
// call above function to register