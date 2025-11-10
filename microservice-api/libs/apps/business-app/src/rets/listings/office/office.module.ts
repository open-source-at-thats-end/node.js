import { Module } from '@nestjs/common';
import { RetsListingOfficeService } from './office.service';
import { RetsListingOfficeResolver } from './office.resolver';
import { RetsListingOfficeEntity } from './entities/office.entity';
import { TypeormDriverModule } from '@libs/library-app';
import { RetsListingOfficeFactory } from './office.factory';

@Module({
  imports: [
    TypeormDriverModule.forFeature([RetsListingOfficeEntity]),
  ],
  providers: [
    RetsListingOfficeResolver, 
    RetsListingOfficeService, 
    RetsListingOfficeFactory
  ],
  exports : [
    RetsListingOfficeResolver, 
    RetsListingOfficeService
  ],
})
export class RetsListingOfficeModule {}