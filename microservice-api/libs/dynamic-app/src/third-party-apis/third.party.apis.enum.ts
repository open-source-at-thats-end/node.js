import { registerEnumType } from "@nestjs/graphql";
import { addGrapaphQLExternalResolvers } from "@libs/library-app";

// define new enum
// this needs to update when any new record is added in table _third_party_platform
export enum ThirdPartyPlatformEnum {
    SELF_GRAPHQL_MICROSERVICE = 1,
    BULKSMS_COM = 2,
};
  
export const ThirdPartyPlatformEnumResolver: Record<keyof typeof ThirdPartyPlatformEnum, any> = {
    SELF_GRAPHQL_MICROSERVICE: ThirdPartyPlatformEnum.SELF_GRAPHQL_MICROSERVICE,
    BULKSMS_COM: ThirdPartyPlatformEnum.BULKSMS_COM,
};
  
export function registerGraphqlThirdPartyPlatformEnum(){
    // register new enum resolver
    registerEnumType(ThirdPartyPlatformEnum, {
      name: 'ThirdPartyPlatformEnum', // This registers the enum with GraphQL
      description: 'Availabe third party platforms.',
      valuesMap:{
        SELF_GRAPHQL_MICROSERVICE:{
          description: `Own graphql microservice`,
        },
        BULKSMS_COM:{
          description: `Bulk sms service from bulksms.com, allow to send sms.`,
        },
      }
    });
    // add resolver to graphql
    addGrapaphQLExternalResolvers({ThirdPartyPlatformEnum: ThirdPartyPlatformEnumResolver});
}