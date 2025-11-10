import { IResolvers } from '@graphql-tools/utils';

// external resolvers type
export type GrapaphQLExternalResolversType = IResolvers | Array<IResolvers>;

// external resolvers list, this protected so not exported
let GrapaphQLExternalResolvers: GrapaphQLExternalResolversType = {};

// add external resolvers to list from any where in app context
export function addGrapaphQLExternalResolvers(resolvers: GrapaphQLExternalResolversType){
    GrapaphQLExternalResolvers = {...GrapaphQLExternalResolvers, ...resolvers};
}

// get all external resolvers list from any where in app context
export function getGrapaphQLExternalResolvers(): GrapaphQLExternalResolversType{
    return GrapaphQLExternalResolvers;
}

// reset external resolvers list from any where in app context
export function resetGrapaphQLExternalResolvers(): void{
    GrapaphQLExternalResolvers = {};
}