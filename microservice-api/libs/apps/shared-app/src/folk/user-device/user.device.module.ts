import { Module } from '@nestjs/common';
import { UserDeviceService } from './user.device.service';
import { UserDeviceEntity } from './entities/user.device.entity';
import { TypeormDriverModule } from '@libs/library-app';
import { DeviceModule } from '../../master/device/device.module';
import { UserDeviceFactory } from './user.device.factory';
import { UserDeviceResolver } from './user.device.resolver';

@Module({
  imports: [
    TypeormDriverModule.forFeature([UserDeviceEntity]),
    
    DeviceModule,
  ],
  providers: [
    UserDeviceService,
    UserDeviceFactory,
    UserDeviceResolver
  ],
  exports : [
    UserDeviceService,
    UserDeviceResolver
  ],
})
export class UserDeviceModule {}