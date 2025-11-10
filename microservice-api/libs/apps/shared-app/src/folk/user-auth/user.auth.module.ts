import { Module } from '@nestjs/common';
import { UserAuthenticationService } from './user.auth.service';
import { UserAuthenticationWebmasterResolver } from './user.auth.webmaster.resolver';
import { OtpModule, TypeormDriverModule, JwtUserAuthServiceProvider, UserAuthenticationJwtService } from '@libs/library-app';
import { BulkSmsModule } from '@libs/dynamic-app';
import { UserAuthenticationEntity } from './entities/user.auth.entity';
import { UserAuthenticationWebmasterFactory } from './user.auth.webmaster.factory';
import { UserAuthenticationResolver } from './user.auth.resolver';
import { UserAuthenticationEntitySubscriber } from './entities/user.auth.entity.subscriber';
import { UserModule } from '../user/user.module';
import { UserAuthorisationModule } from '../user-authorisation/user.authorisation.module';
import { MasterModule } from '../../master/master.module';
import { SessionModule } from '../../session/session.module';
import { UserDeviceModule } from '../user-device/user.device.module';
import { QueueModule } from '../../queue/queue.module';

@Module({
  imports: [
    TypeormDriverModule.forFeature([UserAuthenticationEntity]),
    
    OtpModule,
    BulkSmsModule,
    QueueModule,

    MasterModule,
    SessionModule,
    
    UserModule,
    UserAuthorisationModule,
    UserDeviceModule,
    
  ],
  providers: [
    UserAuthenticationResolver,
    UserAuthenticationService,
    UserAuthenticationEntitySubscriber,
    JwtUserAuthServiceProvider,
    UserAuthenticationJwtService,
    
    UserAuthenticationWebmasterResolver, 
    UserAuthenticationWebmasterFactory,
  ],
  exports : [
    UserAuthenticationResolver,
    UserAuthenticationService,
    UserAuthenticationEntitySubscriber,
  ]
})
export class UserAuthenticationModule {}