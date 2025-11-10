import { Module } from '@nestjs/common';
import { CountryTimezoneService } from './country.timezone.service';
import { CountryTimezoneResolver } from './country.timezone.resolver';
import { CountryTimezoneFactory } from './country.timezone.factory';
import { CountryTimezoneEntity } from './entities/country.timezone.entity';
import { TypeormDriverModule } from '@libs/library-app';

@Module({
  imports: [
    TypeormDriverModule.forFeature([CountryTimezoneEntity]),
  ],
  providers: [
    CountryTimezoneResolver, 
    CountryTimezoneService, 
    CountryTimezoneFactory
  ],
  exports : [
    CountryTimezoneResolver, 
    CountryTimezoneService
  ],
})
export class CountryTimezoneModule {}
