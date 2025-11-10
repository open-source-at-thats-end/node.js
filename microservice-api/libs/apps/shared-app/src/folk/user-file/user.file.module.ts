import { Module } from '@nestjs/common';
import { UserFileService } from './user.file.service';
import { UserFileResolver } from './user.file.resolver';
import { UserFileEntity } from './entities/user.file.entity';
import { ImageProcessingModule, TypeormDriverModule } from '@libs/library-app';
import { UserFileFactory } from './user.file.factory';

@Module({
  imports: [
    TypeormDriverModule.forFeature([UserFileEntity]),
    ImageProcessingModule,
  ],
  providers: [
    UserFileResolver, 
    UserFileService, 
    UserFileFactory
  ],
  exports : [
    UserFileResolver, 
    UserFileService
  ],
})
export class UserFileModule {}