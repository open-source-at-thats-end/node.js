import { Module } from '@nestjs/common';
import { SettingService } from './setting.service';
import { SettingResolver } from './setting.resolver';
import { SettingEntity } from './entities/setting.entity';
import { ApplicationLocalStorageModule, TypeormDriverModule } from '@libs/library-app';
import { SettingFactory } from './setting.factory';
import { SettingCronjob } from './setting.cronjob';

@Module({
  imports: [
    TypeormDriverModule.forFeature([SettingEntity]),
    ApplicationLocalStorageModule
  ],
  providers: [
    SettingResolver, 
    SettingService, 
    SettingFactory,
    SettingCronjob,
  ],
  exports : [
    SettingResolver, 
    SettingService
  ],
})
export class SettingModule {}