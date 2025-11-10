import { Module } from '@nestjs/common';
import { RetsListingVirtualToursService } from './virtual.tours.service';
import { RetsListingVirtualToursResolver } from './virtual.tours.resolver';
import { RetsListingVirtualToursEntity } from './entities/virtual.tours.entity';
import { TypeormDriverModule } from '@libs/library-app';
import { RetsListingVirtualToursFactory } from './virtual.tours.factory';

@Module({
  imports: [
    TypeormDriverModule.forFeature([RetsListingVirtualToursEntity]),
  ],
  providers: [
    RetsListingVirtualToursResolver, 
    RetsListingVirtualToursService, 
    RetsListingVirtualToursFactory
  ],
  exports : [
    RetsListingVirtualToursResolver, 
    RetsListingVirtualToursService
  ],
})
export class RetsListingVirtualToursModule {}