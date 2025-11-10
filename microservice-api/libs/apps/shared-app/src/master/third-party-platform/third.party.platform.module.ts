import { Module } from '@nestjs/common';
import { ThirdPartyPlatformService } from './third.party.platform.service';
import { ThirdPartyPlatformResolver } from './third.party.platform.resolver';
import { ThirdPartyPlatformEntity } from './entities/third.party.platform.entity';
import { TypeormDriverModule } from '@libs/library-app';
import { ThirdPartyPlatformFactory } from './third.party.platform.factory';

@Module({
  imports: [
    TypeormDriverModule.forFeature([ThirdPartyPlatformEntity]),
  ],
  providers: [
    ThirdPartyPlatformResolver, 
    ThirdPartyPlatformService, 
    ThirdPartyPlatformFactory
  ],
  exports : [
    ThirdPartyPlatformResolver, 
    ThirdPartyPlatformService, 
    ThirdPartyPlatformFactory,
  ],
})
export class ThirdPartyPlatformModule {}