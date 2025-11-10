import { Module } from '@nestjs/common';
import { WorkStatusService } from './work.status.service';
import { WorkStatusResolver } from './work.status.resolver';
import { WorkStatusEntity } from './entities/work.status.entity';
import { TypeormDriverModule } from '@libs/library-app';
import { WorkStatusFactory } from './work.status.factory';

@Module({
  imports: [
    TypeormDriverModule.forFeature([WorkStatusEntity]),
  ],
  providers: [
    WorkStatusResolver, 
    WorkStatusService, 
    WorkStatusFactory
  ],
  exports : [
    WorkStatusResolver, 
    WorkStatusService
  ],
})
export class WorkStatusModule {}