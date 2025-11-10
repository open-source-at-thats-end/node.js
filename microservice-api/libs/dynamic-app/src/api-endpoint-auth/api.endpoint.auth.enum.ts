import { registerEnumType } from "@nestjs/graphql";
import { addGrapaphQLExternalResolvers } from "@libs/library-app";
import { ApiEndpointAuthEntityMeta as meta } from "./entities/api.endpoint.auth.entity";

// █████████████████████████████████████████████████████████████████████████████████████████████
// define new enum
export enum ApiUserRoleEnum{
    APIUSER = 0,
    APIADMIN = 1
};

// define new enum resolver
export const ApiUserRoleEnumResolver: Record<keyof typeof ApiUserRoleEnum, any> = {
    APIUSER: ApiUserRoleEnum.APIUSER,
    APIADMIN: ApiUserRoleEnum.APIADMIN
};

// hook to register enum in graphql context at specific place, such as in some microservice but not in some microservice
// if you need at glogal level you can call this function in this file and it will become global
// if you go for global call make sure your all microservices will use this enum otherwise it will throw an error
export function registerGraphqlApiUserRoleEnum(){
    // register new enum resolver
    registerEnumType(ApiUserRoleEnum, {
        name: 'ApiUserRoleEnum', // This registers the enum with GraphQL
        description: 'User role enum, and there are only 2 types at this moment',
        valuesMap:{
            APIADMIN:{
                description: 'Administrator user, who has all access to manage application use for API access. This is not application business users, just API access users.'
                //deprecationReason: 'in case when we are going to deprecat the value in  future',
            },
            APIUSER:{
                description: 'Consumer user, who access the API with JWT access token and these users are from client application.'
            }
        }
    });
    // add resolver to graphql
    addGrapaphQLExternalResolvers({ApiUserRoleEnum: ApiUserRoleEnumResolver});
}
registerGraphqlApiUserRoleEnum()


// █████████████████████████████████████████████████████████████████████████████████████████████
// find and replace: ApiEndpointAuth
export enum ApiEndpointAuthUploadFileFieldEnum {
  FILE_ = 'file_',
};

export const ApiEndpointAuthUploadFileFieldEnumResolver: Record<keyof typeof ApiEndpointAuthUploadFileFieldEnum, any> = {
  FILE_: ApiEndpointAuthUploadFileFieldEnum.FILE_,
};
  
export function registerGraphqlApiEndpointAuthUploadFileFieldEnum(){
    // register new enum resolver
    registerEnumType(ApiEndpointAuthUploadFileFieldEnum, {
      name: 'ApiEndpointAuthUploadFileFieldEnum', // This registers the enum with GraphQL
      description: 'ApiEndpointAuth upload ref type enum',
      valuesMap:{
        FILE_: {
          //description: `ApiEndpointAuth upload  file. ${meta.file_.validation.validFileFormatMsg} ${meta.file_.validation.maxFileSizeMsg} ${meta.file_.validation.maxCountMsg}`
        },
      }
    });
    // add resolver to graphql
    addGrapaphQLExternalResolvers({ApiEndpointAuthUploadFileFieldEnum: ApiEndpointAuthUploadFileFieldEnumResolver});
}
//registerGraphqlApiEndpointAuthUploadFileFieldEnum();