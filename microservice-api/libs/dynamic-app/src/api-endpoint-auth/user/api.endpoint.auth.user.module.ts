import { Module } from '@nestjs/common';
import { ApiEndpointAuthUserService } from './api.endpoint.auth.user.service';
import { ApiEndpointAuthUserResolver } from './api.endpoint.auth.user.resolver';
import { ApiEndpointAuthEntity } from '../entities/api.endpoint.auth.entity';
import { TypeormDriverModule, ConfModule, LogModule, LibraryAppService, ApiEndpointAuthJwtService, JwtAccessTokenServiceProvider, JwtRefreshTokenServiceProvider, CrudModule, DataValidationPipe, DataValidationModule } from '@libs/library-app';
import { ApiEndpointAuthEntitySubscriber } from '../entities/api.endpoint.auth.entity.subscriber';

@Module({
  imports: [
    TypeormDriverModule.forFeature([ApiEndpointAuthEntity]),
    CrudModule,
    ConfModule,
    LogModule,
    DataValidationModule,
  ],
  providers: [
    LibraryAppService,
    JwtAccessTokenServiceProvider,
    JwtRefreshTokenServiceProvider,
    ApiEndpointAuthUserResolver, 
    ApiEndpointAuthUserService, 
    ApiEndpointAuthJwtService,
    ApiEndpointAuthEntitySubscriber 
  ],
  exports: [
    ApiEndpointAuthUserResolver, 
    ApiEndpointAuthUserService, 
    ApiEndpointAuthEntitySubscriber
  ],
})
export class ApiEndpointAuthUserModule {}