import { Module } from '@nestjs/common';
import { UserCorporateInfoService } from './user.corporate.info.service';
import { UserCorporateInfoResolver } from './user.corporate.info.resolver';
import { UserCorporateInfoEntity } from './entities/user.corporate.info.entity';
import { ImageProcessingModule, JwtUserAuthServiceProvider, TypeormDriverModule, UserAuthenticationJwtService } from '@libs/library-app';
import { UserCorporateInfoFactory } from './user.corporate.info.factory';
import { UserCorporateInfoEntitySubscriber } from './entities/user.corporate.info.entity.subscriber';
import { UserCorporateInfoWs } from './user.corporate.info.ws';

@Module({
  imports: [
    TypeormDriverModule.forFeature([UserCorporateInfoEntity]),
    ImageProcessingModule,
  ],
  providers: [
    UserCorporateInfoResolver, 
    UserCorporateInfoService, 
    UserCorporateInfoFactory,
    UserCorporateInfoEntitySubscriber,
    UserCorporateInfoWs,
    UserAuthenticationJwtService,
    JwtUserAuthServiceProvider
  ],
  exports : [
    UserCorporateInfoResolver, 
    UserCorporateInfoService
  ],
})
export class UserCorporateInfoModule {}