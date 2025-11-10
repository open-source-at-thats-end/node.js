import { Resolver, Query, Mutation, Args, Int, Context, Info, ResolveField, Parent } from '@nestjs/graphql';
import { GraphQLResolveInfo } from 'graphql';
import { RetsListingFactory } from './listing.factory';
import { RetsListingService } from './listing.service';
import { RetsListingEntity } from './entities/listing.entity';
import { ThirdPartyPlatformEntity } from 'apps/business-app/src/shared-app/shared.app.entity';

// TODO: SUPERGRAPH_FOREIGN_RELATION step 6 - set fr_third_party_platform and fr_rets_listing with relation
@Resolver(() => ThirdPartyPlatformEntity)
export class ThirdPartyPlatformResolver
{
  constructor(
    protected readonly factory: RetsListingFactory,
    protected readonly service: RetsListingService,
  ){}

  @ResolveField(() => [RetsListingEntity])
  async fr_rets_listing(
    @Parent() entity: ThirdPartyPlatformEntity,
    @Context() ctx: any,
    @Info() info: GraphQLResolveInfo,
  ): Promise<RetsListingEntity[] | null> {
    const resp = await this.factory.findEngine.resolveField('fr_third_party_platform', 'latlong_tppltf_id', entity, info, ctx);
    return resp;
  }
}