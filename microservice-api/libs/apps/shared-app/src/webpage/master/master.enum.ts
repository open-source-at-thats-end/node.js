// █████████████████████████████████████████████████████████████████████████████████████████████
// find and replace: WebPageMaster
import { addGrapaphQLExternalResolvers } from "@libs/library-app";
import { registerEnumType } from "@nestjs/graphql";

export enum WebPageMasterUploadFileFieldEnum {
  FILE_ = 'file_',
};

export const WebPageMasterUploadFileFieldEnumResolver: Record<keyof typeof WebPageMasterUploadFileFieldEnum, any> = {
  FILE_: WebPageMasterUploadFileFieldEnum.FILE_,
};

export enum positionEnum {
  TOP = 1,
  MENU = 2,
  FOOTER = 3
};

export const ApiPositionResolver: Record<keyof typeof positionEnum, any> = {
  TOP: positionEnum.TOP,
  MENU: positionEnum.MENU,
  FOOTER: positionEnum.FOOTER,
};

export function registerGraphqlPositionEnum(){
  registerEnumType(positionEnum, {
    name: 'positionEnum', 
    description: 'Used at various place for Top | Menu | Footer value.',
    valuesMap:{
      TOP:{
        description: 'Top.'
      },
      MENU:{
        description: 'Menu.'
      },
      FOOTER:{
        description: 'Footer.'
      }
    }
  });
  addGrapaphQLExternalResolvers({positionEnum: ApiPositionResolver});
}
registerGraphqlPositionEnum();

export enum pgTypeEnum {
  SIMPLE = 1,
  EXTERNALLINK = 2
};

export const ApiPgTypeResolver: Record<keyof typeof pgTypeEnum, any> = {
  SIMPLE: pgTypeEnum.SIMPLE,
  EXTERNALLINK: pgTypeEnum.EXTERNALLINK
};

export function registerGraphqlTypeEnum(){
  registerEnumType(pgTypeEnum, {
    name: 'pgTypeEnum', 
    description: 'Used at various place for Simple | External Link.',
    valuesMap:{
      SIMPLE:{
        description: 'Simple.'
      },
      EXTERNALLINK:{
        description: 'External link.'
      }
    }
  });
  addGrapaphQLExternalResolvers({pgTypeEnum: ApiPgTypeResolver});
}
registerGraphqlTypeEnum();
  
export function registerGraphqlWebPageMasterUploadFileFieldEnum(){
    // register new enum resolver
    registerEnumType(WebPageMasterUploadFileFieldEnum, {
      name: 'WebPageMasterUploadFileFieldEnum', // This registers the enum with GraphQL
      description: 'WebPageMaster upload ref type enum',
      valuesMap:{
        FILE_: {
          //description: `WebPageMaster upload  file. ${meta.file_.validation.validFileFormatMsg} ${meta.file_.validation.maxFileSizeMsg} ${meta.file_.validation.maxCountMsg}`
        },
      }
    });
    // add resolver to graphql
    addGrapaphQLExternalResolvers({WebPageMasterUploadFileFieldEnum: WebPageMasterUploadFileFieldEnumResolver});
}
// call above function to register