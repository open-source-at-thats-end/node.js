import { Module } from '@nestjs/common';
import { UserPersonalInfoService } from './user.personal.info.service';
import { UserPersonalInfoResolver } from './user.personal.info.resolver';
import { UserPersonalInfoEntity } from './entities/user.personal.info.entity';
import { TypeormDriverModule } from '@libs/library-app';
import { UserPersonalInfoFactory } from './user.personal.info.factory';

@Module({
  imports: [
    TypeormDriverModule.forFeature([UserPersonalInfoEntity]),
  ],
  providers: [
    UserPersonalInfoResolver, 
    UserPersonalInfoService, 
    UserPersonalInfoFactory
  ],
  exports : [
    UserPersonalInfoResolver, 
    UserPersonalInfoService
  ],
})
export class UserPersonalInfoModule {}