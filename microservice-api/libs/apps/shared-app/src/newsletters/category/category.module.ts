import { Module } from '@nestjs/common';
import { NewsLetterCategoryService } from './category.service';
import { NewsLetterCategoryResolver } from './category.resolver';
import { NewsLetterCategoryEntity } from './entities/category.entity';
import { TypeormDriverModule } from '@libs/library-app';
import { NewsLetterCategoryFactory } from './category.factory';

@Module({
  imports: [
    TypeormDriverModule.forFeature([NewsLetterCategoryEntity]),
  ],
  providers: [
    NewsLetterCategoryResolver, 
    NewsLetterCategoryService, 
    NewsLetterCategoryFactory
  ],
  exports : [
    NewsLetterCategoryResolver, 
    NewsLetterCategoryService
  ],
})
export class NewsLetterCategoryModule {}