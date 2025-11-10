import { BeforeApplicationShutdown, MiddlewareConsumer, Module, OnApplicationBootstrap, OnApplicationShutdown, OnModuleDestroy, OnModuleInit } from '@nestjs/common';
import { AppService } from './app.service';
import { GqlApolloSupergraphModule, LibraryAppModule, LogService } from '@libs/library-app';
import { RestAppModule } from 'apps/rest-app/src/rest.app.module';
import { AppRegister } from './app.register';

@Module({
  imports: [
    // GraphQL API and documentation module
    GqlApolloSupergraphModule,
    
    // REST API and documentation module
    RestAppModule,

    LibraryAppModule,
  ],
  controllers: [],
  providers: [AppService, AppRegister],
  exports: [],
})
export class AppModule implements OnModuleInit, OnApplicationBootstrap, OnModuleDestroy, BeforeApplicationShutdown, OnApplicationShutdown {
  constructor(
    private readonly appRegister: AppRegister,
    private readonly logService: LogService,
  ) {
  }
  // 1st Lifecycle Event
  onModuleInit() {
  }
  // 2nd Lifecycle Event
  onApplicationBootstrap() {  
  }
  // 3rd Lifecycle Event
  onModuleDestroy() { 
  }
  // 4th Lifecycle Event
  beforeApplicationShutdown(signal?: string){
    this.logService.warn(signal);
  }
  // 5th Lifecycle Event
  onApplicationShutdown(signal?: string) {
  }
} 