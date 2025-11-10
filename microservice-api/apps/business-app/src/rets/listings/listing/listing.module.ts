import { Module } from '@nestjs/common';
import { RetsListingService } from './listing.service';
import { RetsListingResolver } from './listing.resolver';
import { RetsListingEntity } from './entities/listing.entity';
import { TypeormDriverModule } from '@libs/library-app';
import { RetsListingFactory } from './listing.factory';
import { ThirdPartyPlatformResolver } from './shared.app.resolver';

@Module({
  imports: [
    TypeormDriverModule.forFeature([RetsListingEntity]),
  ],
  providers: [
    RetsListingResolver, 
    RetsListingService, 
    RetsListingFactory,

    ThirdPartyPlatformResolver
  ],
  exports : [
    RetsListingResolver, 
    RetsListingService
  ],
})
export class RetsListingModule {}