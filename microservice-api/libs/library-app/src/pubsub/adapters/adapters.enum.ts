
// libs/library-app/pubsub/adapters/adapters.enum.ts
import { addGrapaphQLExternalResolvers } from "@libs/library-app/gql-apollo/gql.apollo.graphql.external.resolvers";
import { registerEnumType } from "@nestjs/graphql";

// ███████Websoket room Enum██████████████████████████████████████████████████████████████████████████████████████

export enum WebsoketRoomEnum {
  AUTH    = 'auth',
  USER    = 'user',
  GROUP   = 'group'
};


export const WebsoketRoomEnumResolver: Record<keyof typeof WebsoketRoomEnum, any> = {
  AUTH: WebsoketRoomEnum.AUTH,
  USER: WebsoketRoomEnum.USER,
  GROUP: WebsoketRoomEnum.GROUP,
};

export function registerGraphqlWebsoketRoomEnum(){
  // register new enum resolver
  registerEnumType(WebsoketRoomEnum, {
    name: 'CurrencyEnum', // This registers the enum with GraphQL
    description: 'Used to set currency.',
    valuesMap:{
      AUTH:{
        description: 'auth roomr'
      },
      USER:{
        description: 'user room'
      },
      GROUP:{
        description: 'group room'
      }
    }
  });
  // add resolver to graphql
  addGrapaphQLExternalResolvers({WebsoketRoomEnum: WebsoketRoomEnumResolver});
}
//registerGraphqlWebsoketRoomEnum();