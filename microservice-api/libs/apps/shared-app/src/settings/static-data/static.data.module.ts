import { Module } from '@nestjs/common';
import { StaticDataService } from './static.data.service';
import { StaticDataResolver } from './static.data.resolver';
import { StaticDataEntity } from './entities/static.data.entity';
import { ApplicationLocalStorageModule, TypeormDriverModule } from '@libs/library-app';
import { StaticDataFactory } from './static.data.factory';
import { StaticDataCronjob } from './static.data.cronjob';

@Module({
  imports: [
    TypeormDriverModule.forFeature([StaticDataEntity]),
    ApplicationLocalStorageModule,
    
  ],
  providers: [
    StaticDataResolver, 
    StaticDataService, 
    StaticDataFactory,
    StaticDataCronjob
  ],
  exports : [
    StaticDataResolver, 
    StaticDataService
  ],
})
export class StaticDataModule {}