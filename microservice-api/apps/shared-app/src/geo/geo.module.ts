import { Module } from '@nestjs/common';
import { GeoService } from './geo.service';
import { CountryModule } from './country/country.module';
import { StateModule } from './state/state.module';
import { CityModule } from './city/city.module';
import { RegionModule } from './region/region.module';
import { SubregionModule } from './subregion/subregion.module';
import { LanguageModule } from './language/language.module';
import { CountryLanguageModule } from './country-language/country.language.module';
import { TimezoneModule } from './timezone/timezone.module';
import { CountryTimezoneModule } from './country-timezone/country.timezone.module';

@Module({
  imports: [
    RegionModule,
    SubregionModule,
    CountryModule,
    StateModule,
    CityModule,
    LanguageModule,
    CountryLanguageModule,
    TimezoneModule,
    CountryTimezoneModule
  ],
  providers: [GeoService],
  exports: [
    RegionModule,
    SubregionModule,
    CountryModule,
    StateModule,
    CityModule,
    LanguageModule,
    CountryLanguageModule,
    TimezoneModule,
    CountryTimezoneModule
  ],
})
export class GeoModule {}
