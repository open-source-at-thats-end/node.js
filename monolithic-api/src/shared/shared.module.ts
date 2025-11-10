import { BeforeApplicationShutdown, Module, OnApplicationBootstrap, OnApplicationShutdown, OnModuleDestroy, OnModuleInit } from '@nestjs/common';
import { SharedService } from './shared.service';
import { ConfModule, ConfService, LibraryAppModule, LogService } from '@libs/library-app';
import { DynamicAppModule } from '@libs/dynamic-app'
import { TypeormDriverModule } from '@libs/library-app';
import { TypeormDriverMysqlConfig } from '@libs/library-app';
import { SharedRegister } from './shared.register';
import { ApiEndpointAuthModule } from './api-endpoint-auth/module';


@Module({
  imports: [
    /*TypeormDriverModule.forRootAsync({
      imports: [ConfModule],
      inject: [ConfService],
      useFactory: (confService: ConfService) => {
        const options = {
          subscribers: [
          ],
          migrations: [],
        };
        return TypeormDriverMysqlConfig(options, confService);
      }
    }),*/
    
    LibraryAppModule,
    DynamicAppModule,
    ApiEndpointAuthModule
  ],
  controllers: [],
  providers: [
    SharedService,
    SharedRegister,

  ],
  exports: [
    ApiEndpointAuthModule
  ],
})
export class SharedModule implements OnModuleInit, OnApplicationBootstrap, OnModuleDestroy, BeforeApplicationShutdown, OnApplicationShutdown {
  constructor(
    private readonly sharedAppRegister: SharedRegister,
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