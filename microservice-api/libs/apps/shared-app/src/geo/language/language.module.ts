import { Module } from '@nestjs/common';
import { LanguageService } from './language.service';
import { LanguageResolver } from './language.resolver';
import { LanguageFactory } from './language.factory';
import { LanguageEntity } from './entities/language.entity';
import { TypeormDriverModule } from '@libs/library-app';

@Module({
  imports: [
    TypeormDriverModule.forFeature([LanguageEntity]),
  ],
  providers: [
    LanguageResolver, 
    LanguageService, 
    LanguageFactory
  ],
  exports : [
    LanguageResolver, 
    LanguageService
  ],
})
export class LanguageModule {}
