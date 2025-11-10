import { Module } from '@nestjs/common';
import { QueueTypeModule } from './type/type.module';
import { QueueSmsModule } from './sms/sms.module';
import { QueueEmailModule } from './email/email.module';
import { QueueWhatsappModule } from './whatsapp/whatsapp.module';
import { EmailTemplateModule } from './email-template/email.template.module';
import { EmailTemplateCategoryModule } from './email-template-category/email.template.category.module';

@Module({
  imports: [
    QueueTypeModule,
    QueueSmsModule,
    QueueEmailModule,
    QueueWhatsappModule,
    EmailTemplateModule,
    EmailTemplateCategoryModule
  ],
  providers: [],
  exports: [
    QueueTypeModule,
    QueueSmsModule,
    QueueEmailModule,
    QueueWhatsappModule,
    EmailTemplateModule,
    EmailTemplateCategoryModule
  ],
})
export class QueueModule {}
