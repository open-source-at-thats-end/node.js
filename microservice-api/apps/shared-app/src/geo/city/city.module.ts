import { Module } from '@nestjs/common';
import { CityService } from './city.service';
import { CityResolver } from './city.resolver';
import { CityFactory } from './city.factory';
import { CityEntity } from './entities/city.entity';
import { TypeormDriverModule } from '@libs/library-app';

@Module({
  imports: [
    TypeormDriverModule.forFeature([CityEntity]),
  ],
  providers: [
    CityResolver, 
    CityService, 
    CityFactory
  ],
  exports : [
    CityResolver, 
    CityService
  ],
})
export class CityModule {}
