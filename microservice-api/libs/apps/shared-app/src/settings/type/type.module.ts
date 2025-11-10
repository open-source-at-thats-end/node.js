import { Module } from '@nestjs/common';
import { SettingTypeService } from './type.service';
import { SettingTypeResolver } from './type.resolver';
import { SettingTypeEntity } from './entities/type.entity';
import { TypeormDriverModule } from '@libs/library-app';
import { SettingTypeFactory } from './type.factory';

@Module({
  imports: [
    TypeormDriverModule.forFeature([SettingTypeEntity]),
  ],
  providers: [
    SettingTypeResolver, 
    SettingTypeService, 
    SettingTypeFactory
  ],
  exports : [
    SettingTypeResolver, 
    SettingTypeService
  ],
})
export class SettingTypeModule {}