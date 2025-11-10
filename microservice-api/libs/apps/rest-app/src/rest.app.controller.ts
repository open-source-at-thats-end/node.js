import { Controller, Get, Post } from '@nestjs/common';
import { RestAppService } from './rest.app.service';
import { CONFPUVAL_REST_ROOT_SLUG, ConfService, LogService } from '@libs/library-app';

@Controller()
export class RestAppController {
  constructor(
    private readonly restAppService: RestAppService,
  ) {

  }
  
  @Post('hello')
  async hello(): Promise<any> {
    return {
      success: true,
      message: `Welcome to REST API`,
    };
  }
}
