import { Module } from '@nestjs/common';
import { QueueTypeService } from './type.service';
import { QueueTypeResolver } from './type.resolver';
import { QueueTypeEntity } from './entities/type.entity';
import { TypeormDriverModule } from '@libs/library-app';
import { QueueTypeFactory } from './type.factory';

@Module({
  imports: [
    TypeormDriverModule.forFeature([QueueTypeEntity]),
  ],
  providers: [
    QueueTypeResolver, 
    QueueTypeService, 
    QueueTypeFactory
  ],
  exports : [
    QueueTypeResolver, 
    QueueTypeService
  ],
})
export class QueueTypeModule {}