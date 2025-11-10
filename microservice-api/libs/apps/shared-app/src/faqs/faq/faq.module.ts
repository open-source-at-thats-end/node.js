import { Module } from '@nestjs/common';
import { FaqService } from './faq.service';
import { FaqResolver } from './faq.resolver';
import { FaqEntity } from './entities/faq.entity';
import { TypeormDriverModule } from '@libs/library-app';
import { FaqFactory } from './faq.factory';

@Module({
  imports: [
    TypeormDriverModule.forFeature([FaqEntity]),
  ],
  providers: [
    FaqResolver, 
    FaqService, 
    FaqFactory
  ],
  exports : [
    FaqResolver, 
    FaqService
  ],
})
export class FaqModule {}