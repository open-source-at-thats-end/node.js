import { Module } from '@nestjs/common';
import { UserAddressService } from './user.address.service';
import { UserAddressResolver } from './user.address.resolver';
import { UserAddressEntity } from './entities/user.address.entity';
import { JwtUserAuthServiceProvider, TypeormDriverModule, UserAuthenticationJwtService } from '@libs/library-app';
import { UserAddressFactory } from './user.address.factory';
import { UserAddressEntitySubscriber } from './entities/user.address.entity.subscriber';
import { UserAddressWs } from './user.address.ws';

@Module({
  imports: [
    TypeormDriverModule.forFeature([UserAddressEntity]),
  ],
  providers: [
    UserAddressResolver, 
    UserAddressService, 
    UserAddressFactory,
    UserAddressEntitySubscriber,
    UserAddressWs,
    UserAuthenticationJwtService,
    JwtUserAuthServiceProvider
  ],
  exports : [
    UserAddressResolver, 
    UserAddressService
  ],
})
export class UserAddressModule {}