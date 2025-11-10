import { Module } from '@nestjs/common';
import {ApiEndpointAuthWebmasterModule} from './webmaster/api.endpoint.auth.webmaster.module';
import {ApiEndpointAuthUserModule} from './user/api.endpoint.auth.user.module';
@Module({
  imports: [
    ApiEndpointAuthWebmasterModule,
    ApiEndpointAuthUserModule
  ],
  providers: [],
  exports: [
    ApiEndpointAuthWebmasterModule,
    ApiEndpointAuthUserModule
  ],
})
export class ApiEndpointAuthModule {}
