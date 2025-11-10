import { BusinessAppModule } from './business.app.module';
import { CONFPUVAL_BUSINESS_APP_NAME, LibraryAppService } from '@libs/library-app';

async function bootstrap() {
  await LibraryAppService.initExpressApp(BusinessAppModule, CONFPUVAL_BUSINESS_APP_NAME);
}
bootstrap();