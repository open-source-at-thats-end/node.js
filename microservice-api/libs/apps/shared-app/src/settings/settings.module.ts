import { Module } from '@nestjs/common';
import { SettingsService } from './settings.service';
import { SettingTypeModule } from './type/type.module';
import { SettingCategoryModule } from './category/category.module';
import { SettingPreferenceModule } from './preference/preference.module';
import { StaticDataModule } from './static-data/static.data.module';
import { SettingModule } from './setting/setting.module';
import { StaticDataValueModule } from './static-data/value/value.module';

@Module({
  imports: [
    SettingTypeModule,
    SettingCategoryModule,
    StaticDataModule,
    StaticDataValueModule,
    SettingPreferenceModule,
    SettingModule
  ],
  providers: [SettingsService],
  exports: [
    SettingTypeModule,
    SettingCategoryModule,
    StaticDataModule,
    StaticDataValueModule,
    SettingPreferenceModule,
    SettingModule
  ],
})
export class SettingsModule {}
