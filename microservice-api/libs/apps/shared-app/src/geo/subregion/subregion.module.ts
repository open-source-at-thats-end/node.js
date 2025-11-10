import { Module } from '@nestjs/common';
import { SubregionService } from './subregion.service';
import { SubregionResolver } from './subregion.resolver';
import { SubregionEntity } from './entities/subregion.entity';
import { TypeormDriverModule } from '@libs/library-app';
import { SubregionFactory } from './subregion.factory';

@Module({
  imports: [
    TypeormDriverModule.forFeature([SubregionEntity]),
  ],
  providers: [
    SubregionResolver, 
    SubregionService, 
    SubregionFactory
  ],
  exports : [
    SubregionResolver, 
    SubregionService
  ],
})
export class SubregionModule {}