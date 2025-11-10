import { BeforeApplicationShutdown, Module, OnApplicationBootstrap, OnApplicationShutdown, OnModuleDestroy, OnModuleInit } from '@nestjs/common';
import { BusinessAppService } from './business.app.service';
import { ConfModule, ConfService, GqlApolloSubgraphModule, LibraryAppModule, LogService, TypeormDriverModule, TypeormDriverMysqlConfig } from '@libs/library-app';
import { BusinessAppRegister } from './business.app.register';
import { DynamicAppModule } from '@libs/dynamic-app';
import { RetsModule } from './rets/rets.module';



const THIS_MICROSERVICE_NAME = 'business-app';

@Module({
  imports: [
    TypeormDriverModule.forRootAsync({
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
    }),
    GqlApolloSubgraphModule,
    LibraryAppModule,
    DynamicAppModule,
    RetsModule,

  ],
  controllers: [],
  providers: [
    BusinessAppService,
    BusinessAppRegister,
    RetsModule,
  ],
  exports: [],
})
export class BusinessAppModule implements OnModuleInit, OnApplicationBootstrap, OnModuleDestroy, BeforeApplicationShutdown, OnApplicationShutdown {
  constructor(
    private readonly businessAppRegister: BusinessAppRegister,
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