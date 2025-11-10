import { Module } from '@nestjs/common';
import { QueueSmsResolver } from './sms.resolver';
import { QueueSmsEntity } from './entities/sms.entity';
import { TypeormDriverModule } from '@libs/library-app';
import { BulkSmsModule } from '@libs/dynamic-app';
import { QueueSmsFactory } from './sms.factory';
import { QueueSmsService } from './sms.service';
import { UserModule } from '../../folk/user/user.module';
import { QueueSmsCronjob } from './sms.cronjob';

@Module({
  imports: [
    TypeormDriverModule.forFeature([QueueSmsEntity]),
    UserModule,
    BulkSmsModule,
  ],
  providers: [
    QueueSmsResolver, 
    QueueSmsService, 
    QueueSmsFactory,
    QueueSmsCronjob,
  ],
  exports : [
    QueueSmsResolver, 
    QueueSmsService
  ],
})
export class QueueSmsModule {}