import { Module } from '@nestjs/common';
import { BusinessSecondaryCategoryService } from './secondary.category.service';
import { BusinessSecondaryCategoryResolver } from './secondary.category.resolver';
import { BusinessSecondaryCategoryEntity } from './entities/secondary.category.entity';
import { TypeormDriverModule } from '@libs/library-app';
import { BusinessSecondaryCategoryFactory } from './secondary.category.factory';

@Module({
  imports: [
    TypeormDriverModule.forFeature([BusinessSecondaryCategoryEntity]),
  ],
  providers: [
    BusinessSecondaryCategoryResolver, 
    BusinessSecondaryCategoryService, 
    BusinessSecondaryCategoryFactory
  ],
  exports : [
    BusinessSecondaryCategoryResolver, 
    BusinessSecondaryCategoryService
  ],
})
export class BusinessSecondaryCategoryModule {}