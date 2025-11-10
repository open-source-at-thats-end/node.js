import { ConfService } from '../conf/conf.service';
import { LogService } from '../log/log.service';
import { BadRequestException, Inject, Injectable } from '@nestjs/common';
import { Mailer, SendEmailInputType } from './email.type';
import { TemplateEngineService } from '../template-engine/template.engine.service';
import * as nodemailer from 'nodemailer';

@Injectable()
export class EmailNodeMailer implements Mailer{
    private transporter;

    constructor(
        private readonly templateEngineService: TemplateEngineService,
        protected readonly confService: ConfService,
        protected readonly logService: LogService,
    ) { 
        this.logService.setContext(EmailNodeMailer.name);

        // set the email transporter
        if(confService.smtpService == '' || confService.smtpService == null) {
            this.transporter = nodemailer.createTransport({
                service: confService.smtpService, // You can use other services like 'yahoo', 'hotmail', etc., or your own SMTP server.
                auth: {
                    user: confService.smtpUser, // Your email
                    pass: `${confService.smtpPass}`, // Your email password or smtp Password confService.smtpUser, // Your email password or App Password for Gmail
                },
            });
        }
        else{
            this.transporter = nodemailer.createTransport({
                host: this.confService.smtpHost,
                port: this.confService.smtpPort,
                secure: this.confService.smtpSecure, // true for 465, false for other ports
                //ignoreTLS: true,
                auth: {
                    user: confService.smtpUser, // Your email
                    pass: `${confService.smtpPass}`, // Your email password or smtp Password 
                },
            });
        }
    }
    async send(input: SendEmailInputType): Promise<any> {
        let html: any; 

        // get the email body from template file or provided template content
        if(input?.template && input.template !== null) {
            html = await this.templateEngineService.renderHtmlTemplateFile(input?.template.filePath, input?.template.fileVar);
        } else if(input?.body && input.body !== null) {
            // in plain content there are chances for content variable
            html = await this.templateEngineService.renderHtmlTemplate(input?.body.content, input?.body.contentVar);
        }

        const mailOptions = {
            from: input.from, // Sender address
            to: input.to, // List of receivers
            subject: input.subject, // Subject line
            html: html, // HTML body 
            sender: input?.sender,
            cc: input?.cc,
            bcc: input?.bcc,
            replyTo: input?.replyTo,
            attachments: input?.attachments,
        };
        try {
            const info = await this.transporter.sendMail(mailOptions);
            this.logService.debug(info, `Email response`);
            return info;
        } catch (err:any) {
            this.logService.info(`html:  ${html}`);
            this.logService.error(`Email error: ${err.message}`);
            throw new BadRequestException(err.message);
        }
    }
}