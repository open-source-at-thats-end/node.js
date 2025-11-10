import { Module } from '@nestjs/common';
import { SettingPreferenceService } from './preference.service';
import { SettingPreferenceResolver } from './preference.resolver';
import { SettingPreferenceEntity } from './entities/preference.entity';
import { ImageProcessingModule, TypeormDriverModule } from '@libs/library-app';
import { SettingPreferenceFactory } from './preference.factory';

@Module({
  imports: [
    TypeormDriverModule.forFeature([SettingPreferenceEntity]),
    ImageProcessingModule,
  ],
  providers: [
    SettingPreferenceResolver, 
    SettingPreferenceService, 
    SettingPreferenceFactory
  ],
  exports : [
    SettingPreferenceResolver, 
    SettingPreferenceService
  ],
})
export class SettingPreferenceModule {}