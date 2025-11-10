import { Module } from '@nestjs/common';

import { TypeormDriverModule } from '@libs/library-app';
import { BusinessEntity } from './entities/business.entity';
import { BusinessResolver } from './business.resolver';
import { BusinessService } from './business.service';
import { BusinessFactory } from './business.factory';


@Module({
  imports: [
    TypeormDriverModule.forFeature([BusinessEntity]),
  ],
  providers: [
    BusinessResolver, 
    BusinessService, 
    BusinessFactory
  ],
  exports : [
    BusinessResolver, 
    BusinessService
  ],
})
export class BusinessModule {}