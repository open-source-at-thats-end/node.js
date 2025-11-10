import { SharedAppModule } from './shared.app.module';
import { CONFPUVAL_SHARED_APP_NAME, LibraryAppService } from '@libs/library-app';

async function bootstrap() {
  await LibraryAppService.initExpressApp(SharedAppModule, CONFPUVAL_SHARED_APP_NAME);
}
bootstrap();
