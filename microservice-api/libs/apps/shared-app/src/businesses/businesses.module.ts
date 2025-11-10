import { Module } from '@nestjs/common';
import { BuissnessesService } from './businesses.service';
import { BusinessPrimaryCategoryModule } from './primary-category/primary.category.module';
import { BusinessSecondaryCategoryModule } from './secondary-category/secondary.category.module';
import { BusinessModule } from './business/business.module';

@Module({
  imports: [
    BusinessPrimaryCategoryModule,
    BusinessSecondaryCategoryModule,
    BusinessModule
  ],
  providers: [BuissnessesService],
  exports: [
    BusinessPrimaryCategoryModule,
    BusinessSecondaryCategoryModule,
    BusinessModule
  ],
})
export class BusinessesModule {}