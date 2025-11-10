import { Module } from '@nestjs/common';
import { RetsListingAdditionalInfoService } from './additional.info.service';
import { RetsListingAdditionalInfoResolver } from './additional.info.resolver';
import { RetsListingAdditionalInfoEntity } from './entities/additional.info.entity';
import { TypeormDriverModule } from '@libs/library-app';
import { RetsListingAdditionalInfoFactory } from './additional.info.factory';

@Module({
  imports: [
    TypeormDriverModule.forFeature([RetsListingAdditionalInfoEntity]),
  ],
  providers: [
    RetsListingAdditionalInfoResolver, 
    RetsListingAdditionalInfoService, 
    RetsListingAdditionalInfoFactory
  ],
  exports : [
    RetsListingAdditionalInfoResolver, 
    RetsListingAdditionalInfoService
  ],
})
export class RetsListingAdditionalInfoModule {}