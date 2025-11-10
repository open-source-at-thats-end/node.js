import { Module } from '@nestjs/common';
import { MeasurementUnitService } from './unit.service';
import { MeasurementUnitResolver } from './unit.resolver';
import { MeasurementUnitEntity } from './entities/unit.entity';
import { TypeormDriverModule } from '@libs/library-app';
import { MeasurementUnitFactory } from './unit.factory';

@Module({
  imports: [
    TypeormDriverModule.forFeature([MeasurementUnitEntity]),
  ],
  providers: [
    MeasurementUnitResolver, 
    MeasurementUnitService, 
    MeasurementUnitFactory
  ],
  exports : [
    MeasurementUnitResolver, 
    MeasurementUnitService
  ],
})
export class MeasurementUnitModule {}