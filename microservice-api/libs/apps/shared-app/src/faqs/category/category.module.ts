import { Module } from '@nestjs/common';
import { FaqCategoryService } from './category.service';
import { FaqCategoryResolver } from './category.resolver';
import { FaqCategoryEntity } from './entities/category.entity';
import { TypeormDriverModule } from '@libs/library-app';
import { FaqCategoryFactory } from './category.factory';

@Module({
  imports: [
    TypeormDriverModule.forFeature([FaqCategoryEntity]),
  ],
  providers: [
    FaqCategoryResolver, 
    FaqCategoryService, 
    FaqCategoryFactory
  ],
  exports : [
    FaqCategoryResolver, 
    FaqCategoryService
  ],
})
export class FaqCategoryModule {}