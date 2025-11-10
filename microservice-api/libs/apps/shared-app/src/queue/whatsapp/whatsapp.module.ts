import { Module } from '@nestjs/common';
import { QueueWhatsappResolver } from './whatsapp.resolver';
import { QueueWhatsappEntity } from './entities/whatsapp.entity';
import { /*BulkWhatsappModule, */TypeormDriverModule } from '@libs/library-app';
import { QueueWhatsappFactory } from './whatsapp.factory';
import { QueueWhatsappService } from './whatsapp.service';
import { UserModule } from '../../folk/user/user.module';

@Module({
  imports: [
    TypeormDriverModule.forFeature([QueueWhatsappEntity]),
    UserModule,
    //BulkWhatsappModule,
  ],
  providers: [
    QueueWhatsappResolver, 
    QueueWhatsappService, 
    QueueWhatsappFactory,
    //QueueWhatsappCronjob,
  ],
  exports : [
    QueueWhatsappResolver, 
    QueueWhatsappService
  ],
})
export class QueueWhatsappModule {}