import { Module } from '@nestjs/common';
import { BusinessPrimaryCategoryService } from './primary.category.service';
import { BusinessPrimaryCategoryResolver } from './primary.category.resolver';
import { BusinessPrimaryCategoryEntity } from './entities/primary.category.entity';
import { TypeormDriverModule } from '@libs/library-app';
import { BusinessPrimaryCategoryFactory } from './primary.category.factory';

@Module({
  imports: [
    TypeormDriverModule.forFeature([BusinessPrimaryCategoryEntity]),
  ],
  providers: [
    BusinessPrimaryCategoryResolver, 
    BusinessPrimaryCategoryService, 
    BusinessPrimaryCategoryFactory
  ],
  exports : [
    BusinessPrimaryCategoryResolver, 
    BusinessPrimaryCategoryService
  ],
})
export class BusinessPrimaryCategoryModule {}