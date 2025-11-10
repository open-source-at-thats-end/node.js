import { Module } from '@nestjs/common';
import { RetsListingOpenHouseService } from './open.house.service';
import { RetsListingOpenHouseResolver } from './open.house.resolver';
import { RetsListingOpenHouseEntity } from './entities/open.house.entity';
import { TypeormDriverModule } from '@libs/library-app';
import { RetsListingOpenHouseFactory } from './open.house.factory';

@Module({
  imports: [
    TypeormDriverModule.forFeature([RetsListingOpenHouseEntity]),
  ],
  providers: [
    RetsListingOpenHouseResolver, 
    RetsListingOpenHouseService, 
    RetsListingOpenHouseFactory
  ],
  exports : [
    RetsListingOpenHouseResolver, 
    RetsListingOpenHouseService
  ],
})
export class RetsListingOpenHouseModule {}