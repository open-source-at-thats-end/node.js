import { Module } from '@nestjs/common';
import { StaticDataValueService } from './value.service';
import { StaticDataValueResolver } from './value.resolver';
import { StaticDataValueEntity } from './entities/value.entity';
import { TypeormDriverModule } from '@libs/library-app';
import { StaticDataValueFactory } from './value.factory';
import { StaticDataModule } from '../static.data.module';

@Module({
  imports: [
    TypeormDriverModule.forFeature([StaticDataValueEntity]),

    StaticDataModule,
  ],
  providers: [
    StaticDataValueResolver, 
    StaticDataValueService, 
    StaticDataValueFactory
    
  ],
  exports : [
    StaticDataValueResolver, 
    StaticDataValueService
  ],
})
export class StaticDataValueModule {}