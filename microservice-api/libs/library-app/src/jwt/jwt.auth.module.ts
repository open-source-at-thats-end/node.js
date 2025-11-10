import { Module } from '@nestjs/common';
import { ConfModule } from '../conf/conf.module';
import { LogModule } from '../log/log.module';
import { LibraryAppService } from '../library.app.service';
import { ApiEndpointAuthJwtService } from './api.endpoint.auth.jwt.service';
import { JwtAuthGuard } from './jwt.auth.guard';
import { JwtAccessTokenServiceProvider, JwtRefreshTokenServiceProvider } from './api.endpoint.auth.jwt.provider';
import { UserAuthenticationJwtService } from './user.auth.jwt.service';
import { JwtUserAuthServiceProvider } from './user.auth.jwt.provider';

@Module({
  imports: [
    ConfModule,
    LogModule
  ],
  providers: [
    JwtAuthGuard,

    JwtAccessTokenServiceProvider,
    JwtRefreshTokenServiceProvider,
    ApiEndpointAuthJwtService,
    
    JwtUserAuthServiceProvider,
    UserAuthenticationJwtService,
    
    LibraryAppService
  ],
  exports: [
    JwtAuthGuard,
  ],
})
export class JwtAuthModule {}
