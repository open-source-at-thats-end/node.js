import { Module } from '@nestjs/common';
import { TypeormDriverModule, ConfModule, LogModule, LibraryAppService, DataValidationPipe, DataValidationModule } from '@libs/library-app';
import { ApiEndpointAuthEntity } from './public/entity';
//import { CrudModule } from '@libs/library-app/crud/crud.module';
import { ApiEndpointAuthPublicResolver } from './public/resolver';
import { ApiEndpointAuthPublicService } from './public/service';

@Module({
  imports: [
    //TypeormDriverModule.forFeature([ApiEndpointAuthEntity]),
    //CrudModule,
    ConfModule,
    LogModule,
    DataValidationModule,
  ],
  providers: [
    LibraryAppService,
    ApiEndpointAuthPublicService,
    ApiEndpointAuthPublicResolver
  ],
  exports: [
    ApiEndpointAuthPublicResolver, 
    ApiEndpointAuthPublicService, 
  ],
})
export class ApiEndpointAuthModule {}