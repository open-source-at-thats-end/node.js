import { Module } from '@nestjs/common';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';

@Module({
  imports: [
    ServeStaticModule.forRoot({
      rootPath: join(process.cwd(), 'assets'),  // Path to your static assets folder
      serveRoot: '/rest/cdn/assets',  // URL path to serve static files
      serveStaticOptions: {
        setHeaders: (res, path) => {
          res.setHeader('Access-Control-Allow-Origin', process.env.APP_HOST_WEB_DOMAIN ); 
          res.setHeader('cross-origin-resource-policy', 'cross-origin');
        }
      }
    }),
  ],
})
export class CdnModule {}