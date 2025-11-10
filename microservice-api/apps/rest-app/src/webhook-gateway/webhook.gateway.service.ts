import { ConfService, LogService } from '@libs/library-app';
import { SelfGraphqlMicroserviceService, ThirdPartyPlatformEnum, WebhookResponseUpsertRespDto, BulkSmsConfig, BulkSmsRestWebhookRespDto, BulkSmsService } from "@libs/dynamic-app";
import { Injectable } from '@nestjs/common';
import { Request } from 'express';
import { format } from 'date-fns';

@Injectable()
export class WebhookGatewayService {

    constructor(
        private readonly selfGraphqlMicroservice: SelfGraphqlMicroserviceService,
        private readonly confService: ConfService,
        private readonly logService: LogService
    ) {
        this.logService.setContext(WebhookGatewayService.name);

        // const fullUrl = request.protocol + '://' + request.get('host') + request.originalUrl;
    }

    public async bulksms(post: any | BulkSmsRestWebhookRespDto[], request: Request): Promise<any> {
        // log the response
        this.logService.trace(post, `${BulkSmsService.name} - START: ${BulkSmsConfig.entity}`);

        // WebhookResponseUpsert
        const tppltf_id = ThirdPartyPlatformEnum.BULKSMS_COM;
        const resp_id = post[0].id as any as string;
        const ref_id = post[0].userSuppliedId as any as string;
        const ref_type = BulkSmsConfig.entity as any as string;
        const whresp: WebhookResponseUpsertRespDto = await this.selfGraphqlMicroservice.webhookResponseUpsert(tppltf_id, resp_id, ref_id, ref_type);

        // WebhookResponseDataCreate
        const whresp_id = whresp.WebhookResponseUpsert[0].id as number;
        const raw = JSON.stringify(post) as any as JSON;
        const whrespData = await this.selfGraphqlMicroservice.webhookResponseDataCreate(whresp_id as number, raw);

        // QueueSmsSentStatusUpdate
        const quesms_id = post[0].userSuppliedId as any as number;
        const sent = format(new Date(), this.confService.formatDateTime);
        const smsSentStatus = await this.selfGraphqlMicroservice.queueSmsSentStatusUpdate(quesms_id, whresp_id, sent);

        const out = {...whresp, ...whrespData, ...smsSentStatus};

        this.logService.trace(out, `${BulkSmsService.name} - END: ${BulkSmsConfig.entity}`);

        return out;
    }
}