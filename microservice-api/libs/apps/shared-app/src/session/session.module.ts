import { Module } from '@nestjs/common';
import { SessionService } from './session.service';
import { SessionEntity } from './entities/session.entity';
import { TypeormDriverModule } from '@libs/library-app';
import { SessionMetaModule } from './meta/session.meta.module';
import { SessionFactory } from './session.factory';
import { SessionResolver } from './session.resolver';

@Module({
  imports: [
    TypeormDriverModule.forFeature([SessionEntity]),
    SessionMetaModule,
  ],
  providers: [
    SessionService,
    SessionFactory,
    SessionResolver
  ],
  exports : [
    SessionService,
    SessionResolver
  ],
})
export class SessionModule {}