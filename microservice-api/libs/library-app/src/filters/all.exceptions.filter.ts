/*
import { Catch, ArgumentsHost, HttpException, HttpStatus } from '@nestjs/common';
import { BaseExceptionFilter } from '@nestjs/core';

@Catch()
export class AllExceptionsFilter extends BaseExceptionFilter {
  catch(exception: unknown, host: ArgumentsHost) {
    super.catch(exception, host);

    const ctx = host.switchToHttp();
    const response = ctx.getResponse();
    const request = ctx.getRequest();
    const status =
      exception instanceof HttpException
        ? exception.getStatus()
        : HttpStatus.INTERNAL_SERVER_ERROR;

    
    // way to control the unhandled exceptation
    if (exception instanceof HttpException && exception.getResponse() === 'your-specific-response-message-to-identify') {
      response.status(HttpStatus.PAYLOAD_TOO_LARGE).json({
        statusCode: HttpStatus.PAYLOAD_TOO_LARGE,
        message: 'File size exceeds the 10MB limit',
        error: 'Payload Too Large',
      });
    } 
  }
}
*/
import {
  ExceptionFilter,
  Catch,
  ArgumentsHost,
  HttpException,
  HttpStatus,
} from '@nestjs/common';
import { BaseExceptionFilter, HttpAdapterHost } from '@nestjs/core';
import { LogService } from '../log/log.service';

@Catch()
export class AllExceptionsFilter extends BaseExceptionFilter {
  constructor(
    readonly httpAdapterHost: HttpAdapterHost,
    readonly logService: LogService
  ) {
    super()
  }
  catch(exception: unknown, host: ArgumentsHost): void {
    super.catch(exception, host);
    // In certain situations `httpAdapter` might not be available in the
    // constructor method, thus we should resolve it here.
    const { httpAdapter } = this.httpAdapterHost;

    const ctx = host.switchToHttp();

    const httpStatus =
      exception instanceof HttpException
        ? exception.getStatus()
        : HttpStatus.INTERNAL_SERVER_ERROR;

    const responseBody = {
      statusCode: httpStatus,
      timestamp: new Date().toISOString(),
      path: httpAdapter.getRequestUrl(ctx.getRequest()),
    };

    this.logService.error(exception);

    httpAdapter.reply(ctx.getResponse(), responseBody, httpStatus);
  }
}