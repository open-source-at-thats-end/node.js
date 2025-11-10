import { forwardRef, Inject, Injectable } from '@nestjs/common';
import { snakeCase } from 'lodash';
import { format } from 'date-fns';
import { Cron, CronExpression } from '@nestjs/schedule';
import { ConfService, LogService } from '@libs/library-app';
import { BulkSmsReqType, BulkSmsService, SelfGraphqlMicroserviceService } from '@libs/dynamic-app';
import { QueueSmsService } from './sms.service';
import { UserService } from '../../folk/user/user.service';

@Injectable()
export class QueueSmsCronjob {

constructor(
    protected readonly queueSmsService: QueueSmsService,
    protected readonly userService: UserService,
    private readonly bulkSmsService: BulkSmsService,

    protected readonly confService: ConfService,
    protected readonly logService: LogService,
) {
    this.logService.setContext(QueueSmsCronjob.name);
}

@Cron(CronExpression.EVERY_HOUR, { name: 'QueueSmsSend' })
public async queueSmsSend(): Promise<void> {
    const cronKey = `CRONJOB - QueueSmsSend`;

    this.logService.trace(`${cronKey}: start at ${format(new Date(), this.confService.formatDateTime)}`);
    try{
        // number of records to prrocess
        const limit = 20;

        // get user resumes from database which has sent as null
        const records = await this.queueSmsService.findNotSentSms(limit);

        if(records && records.length > 0) {
            // create SMS messages object to send
            const smsPayload: BulkSmsReqType[] = [];

            this.logService.trace(`${cronKey}: creating SMS payload object to send.`);

            // loop through each sms to send at destination
            records.map(async (record, key) => {
                // PRECAUTION: to_user - check if mobile number is not empty as its required to send sms
                if(!record.to_mobile && record.to_u_id) {
                    const tuser = await this.userService.findSingleById(record.to_u_id);
                    if(tuser !== null && tuser.primary_mobile != '') {
                        record.to_mobile = tuser.primary_mobile;
                        record.to_mobile_cc = tuser.primary_mobile_cc;
                    }
                }

                // PRECAUTION: from_user - check if mobile number is not empty as its required to send sms
                if(!record.from_mobile && record.from_u_id) {
                    const fuser = await this.userService.findSingleById(record.from_u_id);
                    if(fuser !== null && fuser.primary_mobile != '') {
                        record.from_mobile = fuser.primary_mobile;
                        record.from_mobile_cc = fuser.primary_mobile_cc;
                    }
                }

                if(record.to_mobile && record.to_mobile_cc) {
                    // set SMS message
                    smsPayload[key] = {
                        to: `+${record.to_mobile_cc}${record.to_mobile}`,
                        body: String(record.msg).trim(),
                        userSuppliedId: `${record.id}`,
                    };
                    
                } else {
                    this.logService.trace(`${cronKey}: to_mobile number not found for to_user ${record.to_u_id}.`);
                }
            });

            this.logService.trace(`${cronKey}: sending SMS payload to sms service.`);

            // as all sms are set process to send at destination
            const smsresp = await this.bulkSmsService.sendUniqueMessage(smsPayload);

            this.logService.trace(`${cronKey}: Updating sent status in queue sms.`);

            // check for each messge for response and also update in database
            if(Array.isArray(smsresp) && smsresp.length > 0) {
                // loop through each message
                smsresp.map(async (resp, key) => {
                    if(resp && resp.id && resp.id !== '') {
                        // update sent status and raw data in queue sms for future reference
                        this.queueSmsService.updateRawDataAndSentStatus(Number(resp.userSuppliedId), new Date(), JSON.stringify(resp) as any as JSON);
                        this.logService.trace(`${cronKey}: Updated raw_data and sent status of queue id ${resp.userSuppliedId}.`);
                    } else {
                        // some malicious error so add log
                        this.logService.trace(resp, `${cronKey}: Malicious error. SMS sending processed but confirmation id not found for queue id ${resp.userSuppliedId}.`);    
                    }
                });

                if(smsresp.length === records.length) {
                    this.logService.trace(`${cronKey}: SMS sent successfully.`);
                } else {
                    const conflict: any = { total: records, sucess: smsresp };
                    this.logService.trace(conflict, `${cronKey}: Some SMS sending failed. SMS sent ${smsresp.length} of ${records.length} records.`);
                }
            } else {
                this.logService.trace(records, `${cronKey}: SMS sending failed.`);
            }
        } else {
            this.logService.trace(`${cronKey}: No pending sms queue found.`);
        }
    } catch (err: any) {
        this.logService.trace(err, `${cronKey}: ERROR: ${err.message}`);
    }
    this.logService.trace(`${cronKey}: end at ${format(new Date(), this.confService.formatDateTime)}`);
}
}