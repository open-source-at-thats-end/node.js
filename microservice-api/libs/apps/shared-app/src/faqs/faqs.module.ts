import { Module } from '@nestjs/common';
import { FaqModule } from './faq/faq.module';
import { FaqCategoryModule } from './category/category.module';
import { FaqsService } from './faqs.service';

@Module({
  imports: [
    FaqModule,
    FaqCategoryModule
  ],
  providers: [FaqsService],
  exports: [
    FaqModule,
    FaqCategoryModule
  ],
})
export class FaqsModule {}