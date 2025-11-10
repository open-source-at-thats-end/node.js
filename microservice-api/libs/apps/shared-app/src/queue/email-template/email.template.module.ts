import { Module } from '@nestjs/common';
import { EmailTemplateService } from './email.template.service';
import { EmailTemplateResolver } from './email.template.resolver';
import { EmailTemplateEntity } from './entities/email.template.entity';
import { TypeormDriverModule } from '@libs/library-app';
import { EmailTemplateFactory } from './email.template.factory';

@Module({
  imports: [
    TypeormDriverModule.forFeature([EmailTemplateEntity]),
  ],
  providers: [
    EmailTemplateResolver, 
    EmailTemplateService, 
    EmailTemplateFactory
  ],
  exports : [
    EmailTemplateResolver, 
    EmailTemplateService
  ],
})
export class EmailTemplateModule {}