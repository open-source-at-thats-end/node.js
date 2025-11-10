import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserResolver } from './user.resolver';
import { UserEntity } from './entities/user.entity';
import { ImageProcessingModule, TypeormDriverModule } from '@libs/library-app';
import { UserFactory } from './user.factory';
import { UserEntitySubscriber } from './entities/user.entity.subscriber';
import { UserWs } from './user.ws';

@Module({
  imports: [
    TypeormDriverModule.forFeature([UserEntity]),
    ImageProcessingModule,
  ],
  providers: [
    UserResolver, 
    UserService, 
    UserFactory,
    UserEntitySubscriber,
    UserWs
  ],
  exports : [
    UserResolver, 
    UserService
  ],
})
export class UserModule {}