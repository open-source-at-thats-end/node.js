import { Injectable } from "@nestjs/common";
import { ConfService } from "../conf/conf.service";
import { LogService } from "../log/log.service";
import { Mailer } from "./email.type";
import { EmailNodeMailer } from "./email.node.mailer";


@Injectable()
export class EmailService {
    // default email service in 
    public mailer: Mailer;
    constructor(
        public readonly nodeMailer: EmailNodeMailer,
        private readonly confService: ConfService,
        private readonly logService: LogService,
    ) {
        // default mailer
        this.mailer = nodeMailer
    }
}
