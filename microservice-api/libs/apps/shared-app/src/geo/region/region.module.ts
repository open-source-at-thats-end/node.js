import { Module } from '@nestjs/common';
import { RegionService } from './region.service';
import { RegionResolver } from './region.resolver';
import { RegionEntity } from './entities/region.entity';
import { TypeormDriverModule } from '@libs/library-app';
import { RegionFactory } from './region.factory';

@Module({
  imports: [
    TypeormDriverModule.forFeature([RegionEntity]),
  ],
  providers: [
    RegionResolver, 
    RegionService, 
    RegionFactory
  ],
  exports : [
    RegionResolver, 
    RegionService
  ],
})
export class RegionModule {}