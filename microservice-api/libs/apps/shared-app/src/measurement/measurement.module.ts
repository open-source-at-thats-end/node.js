import { Module } from '@nestjs/common';
import { MeasurementUnitModule } from './unit/unit.module';
import { MeasurementCategoryModule } from './category/category.module';

@Module({
  imports: [
    MeasurementUnitModule,
    MeasurementCategoryModule
  ],
  providers: [],
  exports: [
    MeasurementUnitModule,
    MeasurementCategoryModule
  ],
})
export class MeasurementModule {}
