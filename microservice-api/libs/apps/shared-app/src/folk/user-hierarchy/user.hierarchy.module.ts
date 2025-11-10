import { Module } from '@nestjs/common';
import { UserHierarchyService } from './user.hierarchy.service';
import { UserHierarchyResolver } from './user.hierarchy.resolver';
import { UserHierarchyEntity } from './entities/user.hierarchy.entity';
import { TypeormDriverModule } from '@libs/library-app';
import { UserHierarchyFactory } from './user.hierarchy.factory';

@Module({
  imports: [
    TypeormDriverModule.forFeature([UserHierarchyEntity]),
  ],
  providers: [
    UserHierarchyResolver, 
    UserHierarchyService, 
    UserHierarchyFactory
  ],
  exports : [
    UserHierarchyResolver, 
    UserHierarchyService
  ],
})
export class UserHierarchyModule {}