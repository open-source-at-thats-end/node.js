import path from "path";
import { SendEmailInputType } from "./email.type";
import { EmailService } from "./email.service";

class SampleCall {
    constructor(
        private readonly emailService: EmailService
    ){}
    public async sendCall() {
        // send email
        const emailreq: SendEmailInputType = {
            from: '"Sender Name" <testsmtp@google.com>',  // Sender's email and name
            to: "xxx@gmail.com",
            subject: 'Account created',

            // @body or @template - we can pass any one not both
            /*
            // either pass direct html content
            body: {
                content: `<html><body><h1>EMAIL TESTING</h1><div>Tesing has been completed sucessfully for html</div><body></html>`,
                contentVar: {},
            },*/
            // or pass template file
            template: {
                filePath: '/path/to/template/file.hbs',
                fileVar: { name: 'John Doe' }  
            },

            cc: "kk@google.com",
            bcc: "k1@google.com",
            attachments:[
                {
                    "filename": "user.png",
                    "path": path.join(process.cwd(),"assets","upload","user-file","2","20241009T122319174Z.91vrbb06rd.TUE9PS5UbUZPLmRXNWtaV1pwYm1Waw==+home-2.png"),
                    "contentType": "image/png"
                }
            ],
        };
        // use default mailer of the application so use .mailer
        const resp = this.emailService.mailer.send(emailreq);
    }
}