import { Module } from '@nestjs/common';
import { TimezoneService } from './timezone.service';
import { TimezoneResolver } from './timezone.resolver';
import { TimezoneFactory } from './timezone.factory';
import { TimezoneEntity } from './entities/timezone.entity';
import { TypeormDriverModule } from '@libs/library-app';

@Module({
  imports: [
    TypeormDriverModule.forFeature([TimezoneEntity]),
  ],
  providers: [
    TimezoneResolver, 
    TimezoneService, 
    TimezoneFactory
  ],
  exports : [
    TimezoneResolver, 
    TimezoneService
  ],
})
export class TimezoneModule {}
