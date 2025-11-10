import { Module } from '@nestjs/common';
import { WebPageMasterService } from './master.service';
import { WebPageMasterResolver } from './master.resolver';
import { WebPageMasterEntity } from './entities/master.entity';
import { TypeormDriverModule } from '@libs/library-app';
import { WebPageMasterFactory } from './master.factory';

@Module({
  imports: [
    TypeormDriverModule.forFeature([WebPageMasterEntity]),
  ],
  providers: [
    WebPageMasterResolver, 
    WebPageMasterService, 
    WebPageMasterFactory
  ],
  exports : [
    WebPageMasterResolver, 
    WebPageMasterService
  ],
})
export class WebPageMasterModule {}