import { Module } from '@nestjs/common';
import { SessionMetaService } from './session.meta.service';
import { SessionMetaEntity } from './entities/session.meta.entity';
import { TypeormDriverModule } from '@libs/library-app';
import { SessionMetaFactory } from './session.meta.factory';
import { SessionMetaResolver } from './session.meta.resolver';

@Module({
  imports: [
    TypeormDriverModule.forFeature([SessionMetaEntity]),
  ],
  providers: [
    SessionMetaService,
    SessionMetaFactory,
    SessionMetaResolver
  ],
  exports : [
    SessionMetaService,
    SessionMetaResolver
  ],
})
export class SessionMetaModule {}