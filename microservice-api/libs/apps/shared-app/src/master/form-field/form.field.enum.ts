// █████████████████████████████████████████████████████████████████████████████████████████████
// find and replace: SettingFormControlType
import { addGrapaphQLExternalResolvers } from "@libs/library-app";
import { registerEnumType } from "@nestjs/graphql";
import { FormFieldEntityMeta as meta } from "./entities/form.field.entity";

export enum FormFieldUploadFileFieldEnum {
  FILE_ = 'file_',
};

export const FormFieldUploadFileFieldEnumResolver: Record<keyof typeof FormFieldUploadFileFieldEnum, any> = {
  FILE_: FormFieldUploadFileFieldEnum.FILE_,
};
  
export function registerGraphqlFormFieldUploadFileFieldEnum(){
    // register new enum resolver
    registerEnumType(FormFieldUploadFileFieldEnum, {
      name: 'FormFieldUploadFileFieldEnum', // This registers the enum with GraphQL
      description: 'FormField upload ref enum',
      valuesMap:{
        FILE_: {
          //description: `FormField upload  file. ${meta.file_.validation.validFileFormatMsg} ${meta.file_.validation.maxFileSizeMsg} ${meta.file_.validation.maxCountMsg}`
        },
      }
    });
    // add resolver to graphql
    addGrapaphQLExternalResolvers({FormFieldUploadFileFieldEnum: FormFieldUploadFileFieldEnumResolver});
}
// call above function to register