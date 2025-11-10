import { Module } from '@nestjs/common';
import { AlertDurationService } from './alert.duration.service';
import { AlertDurationResolver } from './alert.duration.resolver';
import { AlertDurationEntity } from './entities/alert.duration.entity';
import { TypeormDriverModule } from '@libs/library-app';
import { AlertDurationFactory } from './alert.duration.factory';

@Module({
  imports: [
    TypeormDriverModule.forFeature([AlertDurationEntity]),
  ],
  providers: [
    AlertDurationResolver, 
    AlertDurationService, 
    AlertDurationFactory
  ],
  exports : [
    AlertDurationResolver, 
    AlertDurationService
  ],
})
export class AlertDurationModule {} 