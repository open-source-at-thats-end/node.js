import { Resolver, Query, Mutation, Args, Int, Context, Info, ResolveField, Parent } from '@nestjs/graphql';
import { GraphQLResolveInfo } from 'graphql';
import { UserFavouritePropertyFactory } from './user.favourite.property.factory';
import { UserFavouritePropertyService } from './user.favourite.property.service';
import { UserEntity } from '../../../shared-app/shared.app.entity';
import { UserFavouritePropertyEntity } from './entities/user.favourite.property.entity';

// TODO: SUPERGRAPH_FOREIGN_RELATION step 6 - set fr_user and fr_user_favourites with relation
@Resolver(() => UserEntity)
export class UserResolver
{
  constructor(
    protected readonly factory: UserFavouritePropertyFactory,
    protected readonly service: UserFavouritePropertyService,
  ){}

  @ResolveField(() => [UserFavouritePropertyEntity])
  async fr_user_favs(
    @Parent() entity: UserEntity,
    @Context() ctx: any,
    @Info() info: GraphQLResolveInfo,
  ): Promise<UserFavouritePropertyEntity[] | null> {
    const resp = await this.factory.findEngine.resolveField('fr_users', 'u_id', entity, info, ctx);
    return resp;
  }

  @ResolveField(() => [UserFavouritePropertyEntity])
  async fr_created_user_favs(
    @Parent() entity: UserEntity,
    @Context() ctx: any,
    @Info() info: GraphQLResolveInfo,
  ): Promise<UserFavouritePropertyEntity[] | null> {
    const resp = await this.factory.findEngine.resolveField('fr_created_user', 'created_u_id', entity, info, ctx);
    return resp;
  }
}

