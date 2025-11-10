import { Resolver, Query, Mutation, Args, Int, Context, Info, ResolveField, Parent } from '@nestjs/graphql';
import { GraphQLResolveInfo } from 'graphql';

import { UserEntity, AlertDurationEntity, AuthorisationEntity } from '../../../shared-app/shared.app.entity';
import { UserSavedSearchEntity } from './entities/user.saved.search.entity';
import { UserSavedSearchFactory } from './user.saved.search.factory';
import { UserSavedSearchService } from './user.saved.search.service';


// TODO: SUPERGRAPH_FOREIGN_RELATION step 6 - set fr_user and fr_save_search with relation
@Resolver(() => UserEntity)
export class UserResolver
{
  constructor(
    protected readonly factory: UserSavedSearchFactory,
    protected readonly service: UserSavedSearchService,
  ){}

  @ResolveField(() => [UserSavedSearchEntity])
  async fr_user_search(
    @Parent() entity: UserEntity,
    @Context() ctx: any,
    @Info() info: GraphQLResolveInfo,
  ): Promise<UserSavedSearchEntity[] | null> {
    const resp = await this.factory.findEngine.resolveField('fr_users', 'u_id', entity, info, ctx);
    return resp;
  }

  @ResolveField(() => [UserSavedSearchEntity])
  async fr_created_user_search(
    @Parent() entity: UserEntity,
    @Context() ctx: any,
    @Info() info: GraphQLResolveInfo,
  ): Promise<UserSavedSearchEntity[] | null> {
    const resp = await this.factory.findEngine.resolveField('fr_created_user', 'created_u_id', entity, info, ctx);
    return resp;
  }
}

// TODO: SUPERGRAPH_FOREIGN_RELATION step 6 - set fr_authorisation and fr_save_search with relation
@Resolver(() => AlertDurationEntity)
export class AlertDurationResolver
{
  constructor(
    protected readonly factory: UserSavedSearchFactory,
    protected readonly service: UserSavedSearchService,
  ){}

  @ResolveField(() => [UserSavedSearchEntity])
  async fr_user_save_search(
    @Parent() entity: AlertDurationEntity,
    @Context() ctx: any,
    @Info() info: GraphQLResolveInfo,
  ): Promise<UserSavedSearchEntity[] | null> {
    const resp = await this.factory.findEngine.resolveField('fr_alert_duration', 'alertdur_id', entity, info, ctx);
    return resp;
  }
}

// TODO: SUPERGRAPH_FOREIGN_RELATION step 6 - set fr_authorisation and fr_save_search with relation
@Resolver(() => AuthorisationEntity)
export class AuthorisationResolver
{
  constructor(
    protected readonly factory: UserSavedSearchFactory,
    protected readonly service: UserSavedSearchService,
  ){}

  @ResolveField(() => [UserSavedSearchEntity])
  async fr_user_auth_save_search(
    @Parent() entity: AuthorisationEntity,
    @Context() ctx: any,
    @Info() info: GraphQLResolveInfo,
  ): Promise<UserSavedSearchEntity[] | null> {
    return await this.factory.findEngine.resolveField('fr_created_authorisation', 'created_ar_id', entity, info, ctx);
  }
}