import { Module } from '@nestjs/common';
import { CountryService } from './country.service';
import { CountryResolver } from './country.resolver';
import { CountryEntity } from './entities/country.entity';
import { TypeormDriverModule } from '@libs/library-app';
import { CountryFactory } from './country.factory';

@Module({
  imports: [
    TypeormDriverModule.forFeature([CountryEntity]),
  ],
  providers: [
    CountryResolver, 
    CountryService, 
    CountryFactory
  ],
  exports : [
    CountryResolver, 
    CountryService
  ],
})
export class CountryModule {}