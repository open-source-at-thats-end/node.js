import { Directive, Field, ID, Int, ObjectType } from "@nestjs/graphql";
import { RetsListingEntity } from "../rets/listings/listing/entities/listing.entity";
import { UserFavouritePropertyEntity } from "../rets/listings/user-favorite-property/entities/user.favourite.property.entity";
import { UserSavedSearchEntity } from "../rets/listings/user-saved-search/entities/user.saved.search.entity";

@ObjectType({ isAbstract: true })
export class BusinessAppFr {
    @Field(() => Int)
    id?: number;
}

// TODO: SUPERGRAPH_FOREIGN_RELATION step 3 - add new ThirdPartyPlatformEntity for SharedApp microservice
@ObjectType({ isAbstract: true })
@Directive('@key(fields: "id")')
export class ThirdPartyPlatformEntity extends BusinessAppFr  {
    @Field(() => [RetsListingEntity], { nullable: true })
    fr_rets_listing?: RetsListingEntity[];
}

// TODO: SUPERGRAPH_FOREIGN_RELATION step 3 - add new UserEntity for SharedApp microservice
@ObjectType({ isAbstract: true })
@Directive('@key(fields: "id")')
export class UserEntity  extends BusinessAppFr {

    @Field(() => [UserFavouritePropertyEntity], { nullable: true })
    fr_user_favs?: UserFavouritePropertyEntity[];

    @Field(() => [UserFavouritePropertyEntity], { nullable: true })
    fr_created_user_favs?: UserFavouritePropertyEntity[];

    @Field(() => [UserSavedSearchEntity], { nullable: true })
    fr_user_search?: UserSavedSearchEntity[];

    @Field(() => [UserSavedSearchEntity], { nullable: true })
    fr_created_user_search?: UserSavedSearchEntity[];
}

// TODO: SUPERGRAPH_FOREIGN_RELATION step 3 - add new AuthorisationEntity for SharedApp microservice
@ObjectType({ isAbstract: true })
@Directive('@key(fields: "id")')
export class AuthorisationEntity  extends BusinessAppFr {
    @Field(() => [UserSavedSearchEntity], { nullable: true })
    fr_user_auth_save_search?: UserSavedSearchEntity[];
}

// TODO: SUPERGRAPH_FOREIGN_RELATION step 3 - add new AlertDurationEntity for SharedApp microservice
@ObjectType({ isAbstract: true })
@Directive('@key(fields: "id")')
export class AlertDurationEntity  extends BusinessAppFr {
    @Field(() => [UserSavedSearchEntity], { nullable: true })
    fr_user_save_search?: UserSavedSearchEntity[];
}

