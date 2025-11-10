import { Module } from '@nestjs/common';
import { MeasurementCategoryService } from './category.service';
import { MeasurementCategoryResolver } from './category.resolver';
import { MeasurementCategoryEntity } from './entities/measurement.category.entity';
import { TypeormDriverModule } from '@libs/library-app';
import { MeasurementCategoryFactory } from './category.factory';

@Module({
  imports: [
    TypeormDriverModule.forFeature([MeasurementCategoryEntity]),
  ],
  providers: [
    MeasurementCategoryResolver, 
    MeasurementCategoryService, 
    MeasurementCategoryFactory
  ],
  exports : [
    MeasurementCategoryResolver, 
    MeasurementCategoryService
  ],
})
export class MeasurementCategoryModule {}