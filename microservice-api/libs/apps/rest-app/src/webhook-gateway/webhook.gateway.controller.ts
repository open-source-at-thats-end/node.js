import { Controller, Get, Post, Body, Patch, Param, Delete, Query, UseInterceptors, UploadedFile, Req } from '@nestjs/common';
import { WebhookGatewayService } from './webhook.gateway.service';
import { ApiBody, ApiConsumes, ApiOperation, ApiParam, ApiQuery, ApiTags } from '@nestjs/swagger';
import { BulkSmsRestWebhookRespDto } from '@libs/dynamic-app';
import { Request } from 'express';

@Controller('webhook')
  export class WebhookGatewayController {
    constructor(
      private readonly service: WebhookGatewayService
    ) {}

    @Post('bulksms')
    @ApiBody({
      type: BulkSmsRestWebhookRespDto,
      isArray: true, // Specify that the request body is an array of DTOs
      description: 'Array of BulkSmsRestWebhookRespDto objects',
    })
    async bulksms(@Body() post: BulkSmsRestWebhookRespDto[], @Req() request: Request): Promise<any> {
      return this.service.bulksms(post, request);
    }

  /*
  @Get('bulksms')
  @ApiQuery({ name: 'id', type: 'number', description: 'Input number', example: 123 })
  @ApiQuery({ name: 'name', type: 'string', description: 'Enter name', example: 123 })
  @ApiQuery({ name: 'phone', type: 'number', description: 'Enter phone number', example: 123 })
  async bulksmsget(@Query() data?: any): Promise<any> {
    return {
      success: true,
      message: 'This is sample output of REST API '+data.id+' '+data.name+' '+data.phone,
      
    };
  }
  
    @Post('bulksms')
    @ApiBody({
      description: 'Multipart form data input',
      schema: {
        type: 'object',
        properties: {
          id: { type: 'string', example: '123' },
          name: { type: 'string', example: 'John Doe' },
        },
        required: ['id', 'name'],
      },
    })
    async bulksmspost(
      @Body() post: any, // Access regular form fields
    ): Promise<any> {
      const id = post.id;
      const name = post.name;
      
      return {
        success: true,
        //message: `Received ID: ${id}, Name: ${name}`,
        message: 'Blah blah blah'+id+' '+name,
      };
    }
  */
}