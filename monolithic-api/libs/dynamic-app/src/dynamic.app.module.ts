import { Global, Module } from '@nestjs/common';
import { DynamicAppService } from './dynamic.app.service';
import { LibraryAppModule } from '@libs/library-app';
import { ThatsendApiModule } from './third-party-apis/thatsend-api/thatsend.api.module';

@Global()
@Module({
  imports:[
    LibraryAppModule
  ],
  providers: [DynamicAppService],
  exports: [
    DynamicAppService
  ],
})
export class DynamicAppModule {}
