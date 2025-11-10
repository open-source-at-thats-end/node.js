import { Module } from '@nestjs/common';
import { RetsListingUnitService } from './unit.service';
import { RetsListingUnitResolver } from './unit.resolver';
import { RetsListingUnitEntity } from './entities/unit.entity';
import { TypeormDriverModule } from '@libs/library-app';
import { RetsListingUnitFactory } from './unit.factory';

@Module({
  imports: [
    TypeormDriverModule.forFeature([RetsListingUnitEntity]),
  ],
  providers: [
    RetsListingUnitResolver, 
    RetsListingUnitService, 
    RetsListingUnitFactory
  ],
  exports : [
    RetsListingUnitResolver, 
    RetsListingUnitService
  ],
})
export class RetsListingUnitModule {}