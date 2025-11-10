import { Module } from '@nestjs/common';
import { CountryLanguageService } from './country.language.service';
import { CountryLanguageResolver } from './country.language.resolver';
import { CountryLanguageFactory } from './country.language.factory';
import { CountryLanguageEntity } from './entities/country.language.entity';
import { TypeormDriverModule } from '@libs/library-app';

@Module({
  imports: [
    TypeormDriverModule.forFeature([CountryLanguageEntity]),
  ],
  providers: [
    CountryLanguageResolver, 
    CountryLanguageService, 
    CountryLanguageFactory
  ],
  exports : [
    CountryLanguageResolver, 
    CountryLanguageService
  ],
})
export class CountryLanguageModule {}
