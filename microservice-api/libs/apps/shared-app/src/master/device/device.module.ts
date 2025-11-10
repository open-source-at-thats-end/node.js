import { Module } from '@nestjs/common';
import { DeviceService } from './device.service';
import { DeviceEntity } from './entities/device.entity';
import { TypeormDriverModule } from '@libs/library-app';
import { DeviceFactory } from './device.factory';
import { DeviceResolver } from './device.resolver';

@Module({
  imports: [
    TypeormDriverModule.forFeature([DeviceEntity]),
  ],
  providers: [
    DeviceService,
    DeviceFactory,
    DeviceResolver
  ],
  exports : [
    DeviceService,
    DeviceResolver
  ],
})
export class DeviceModule {}