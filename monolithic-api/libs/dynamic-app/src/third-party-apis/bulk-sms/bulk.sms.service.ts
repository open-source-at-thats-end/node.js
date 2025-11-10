//import { ConfService, LogService } from "@libs/library-app";
import { HttpService } from "@nestjs/axios";
import { BadRequestException, Injectable } from "@nestjs/common";
import { AxiosResponse } from "axios";
import { lastValueFrom } from "rxjs";
import { BulkSmsReqType, BulkSmsRespType } from "./bulk.sms.type";
import { ConfService, LogService } from "@libs/library-app";

@Injectable()
export class BulkSmsService{
    constructor(
        private readonly httpService: HttpService,
        private readonly confService: ConfService,
        private readonly logService: LogService
    ){
        // max message characters length: 156
        this.logService.setContext(BulkSmsService.name);
    }
    public async sendUniqueMessage(payload: BulkSmsReqType | BulkSmsReqType[]): Promise<BulkSmsRespType | BulkSmsRespType[]> { //Promise<AxiosResponse<BulkSmsRespType>>
        try {
            const response = await lastValueFrom(
                this.httpService.post('/messages', payload)
            );
            this.logService.debug(response, `BulkSMS API Response`);
            return response.data;
        } catch (err: any) {
            this.logService.error(`BulkSMS API Error: ${err.message}`);
            throw new BadRequestException(err.message);
        }
    }
}
/*
[
    {
        "id": "1415937027307741184",
        "type": "SENT",
        "from": "918759008991",
        "to": "918759008990",
        "body": "This is test SMS from GraphQLApi",
        "encoding": "TEXT",
        "protocolId": 0,
        "messageClass": 0,
        "submission": {
            "id": "2-00000000002516605256",
            "date": "2024-09-12T05:48:14Z"
        },
        "status": {
            "id": "ACCEPTED.null",
            "type": "ACCEPTED",
            "subtype": null
        },
        "relatedSentMessageId": null,
        "userSuppliedId": null,
        "numberOfParts": null,
        "creditCost": null
    }
]


[
    {
        "id": "1415938585344876544",
        "type": "SENT",
        "from": "918759008991",
        "to": "918759008990",
        "body": "This is test SMS from GraphQLApi",
        "encoding": "TEXT",
        "protocolId": 0,
        "messageClass": 0,
        "submission": {
            "id": "2-00000000002516605873",
            "date": "2024-09-12T05:54:25Z"
        },
        "status": {
            "id": "ACCEPTED.null",
            "type": "ACCEPTED",
            "subtype": null
        },
        "relatedSentMessageId": null,
        "userSuppliedId": null,
        "numberOfParts": null,
        "creditCost": null
    }
]


*/