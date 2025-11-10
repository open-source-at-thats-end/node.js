import { Module } from '@nestjs/common';
import { SettingCategoryService } from './category.service';
import { SettingCategoryResolver } from './category.resolver';
import { SettingCategoryEntity } from './entities/category.entity';
import { TypeormDriverModule } from '@libs/library-app';
import { SettingCategoryFactory } from './category.factory';

@Module({
  imports: [
    TypeormDriverModule.forFeature([SettingCategoryEntity]),
  ],
  providers: [
    SettingCategoryResolver, 
    SettingCategoryService, 
    SettingCategoryFactory
  ],
  exports : [
    SettingCategoryResolver, 
    SettingCategoryService
  ],
})
export class SettingCategoryModule {}