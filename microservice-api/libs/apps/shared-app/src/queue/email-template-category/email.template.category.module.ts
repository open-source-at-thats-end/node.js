import { Module } from '@nestjs/common';
import { EmailTemplateCategoryService } from './email.template.category.service';
import { EmailTemplateCategoryResolver } from './email.template.category.resolver';
import { EmailTemplateCategoryEntity } from './entities/email.template.category.entity';
import { TypeormDriverModule } from '@libs/library-app';
import { EmailTemplateCategoryFactory } from './email.template.category.factory';

@Module({
  imports: [
    TypeormDriverModule.forFeature([EmailTemplateCategoryEntity]),
  ],
  providers: [
    EmailTemplateCategoryResolver, 
    EmailTemplateCategoryService, 
    EmailTemplateCategoryFactory
  ],
  exports : [
    EmailTemplateCategoryResolver, 
    EmailTemplateCategoryService
  ],
})
export class EmailTemplateCategoryModule {}