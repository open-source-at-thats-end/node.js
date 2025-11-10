import { Module } from '@nestjs/common';
import { QueueEmailResolver } from './email.resolver';
import { QueueEmailEntity } from './entities/email.entity';
import { TypeormDriverModule } from '@libs/library-app';
import { QueueEmailFactory } from './email.factory';
import { QueueEmailService } from './email.service';

@Module({
  imports: [
    TypeormDriverModule.forFeature([QueueEmailEntity]),
    
  ],
  providers: [
    QueueEmailResolver, 
    QueueEmailService, 
    QueueEmailFactory,
  ],
  exports : [
    QueueEmailResolver, 
    QueueEmailService
  ],
})
export class QueueEmailModule {}