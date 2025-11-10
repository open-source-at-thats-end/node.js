import { BeforeApplicationShutdown, Module, OnApplicationBootstrap, OnApplicationShutdown, OnModuleDestroy, OnModuleInit } from '@nestjs/common';
import { SharedAppService } from './shared.app.service';
import { ConfModule, ConfService, GqlApolloSubgraphModule, LibraryAppModule, LogService } from '@libs/library-app';
import { ApiEndpointAuthModule, ApiEndpointAuthEntitySubscriber, DynamicAppModule } from '@libs/dynamic-app'
import { TypeormDriverModule } from '@libs/library-app';
import { TypeormDriverMysqlConfig } from '@libs/library-app';
import { SharedAppRegister } from './shared.app.register';
import { GeoModule } from './geo/geo.module';
import { FolkModule } from './folk/folk.module';
import { UserAuthenticationEntitySubscriber } from './folk/user-auth/entities/user.auth.entity.subscriber';
import { MasterModule } from './master/master.module';
import { AcademicModule } from './academic/academic.module';
import { QueueModule } from './queue/queue.module';
import { WebhookModule } from './webhook/webhook.module';
import { SettingsModule } from './settings/settings.module';
import { LeadsModule } from './leads/leads.module';
import { WebPagesModule } from './webpage/webpage.module';
import { NewsLettersModule } from './newsletters/newsletters.module';
import { FaqsModule } from './faqs/faqs.module';
import { MeasurementModule } from './measurement/measurement.module';
import { BusinessesModule } from './businesses/businesses.module';
import { CrawlerModule } from './crawler/crawler.module';

const THIS_MICROSERVICE_NAME = 'shared-app';

@Module({
  imports: [
    TypeormDriverModule.forRootAsync({
      imports: [ConfModule],
      inject: [ConfService],
      useFactory: (confService: ConfService) => {
        const options = {
          subscribers: [
            ApiEndpointAuthEntitySubscriber,
            UserAuthenticationEntitySubscriber,
          ],
          migrations: [],
        };
        return TypeormDriverMysqlConfig(options, confService);
      }
    }),
    
    ApiEndpointAuthModule,
    LibraryAppModule,
    GqlApolloSubgraphModule,
    DynamicAppModule,
    GeoModule,
    MasterModule,
    SettingsModule,
    FolkModule,
    AcademicModule,
    QueueModule,
    WebhookModule,
    LeadsModule,
    WebPagesModule,
    NewsLettersModule,
    FaqsModule,
    MeasurementModule,
    BusinessesModule,
    CrawlerModule
  ],
  controllers: [],
  providers: [
    SharedAppService,
    SharedAppRegister,
  ],
  exports: [],
})
export class SharedAppModule implements OnModuleInit, OnApplicationBootstrap, OnModuleDestroy, BeforeApplicationShutdown, OnApplicationShutdown {
  constructor(
    private readonly sharedAppRegister: SharedAppRegister,
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