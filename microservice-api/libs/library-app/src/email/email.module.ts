import { Module } from "@nestjs/common";
import { ConfModule } from "../conf/conf.module";
import { LogModule } from "../log/log.module";
import { TemplateEngineModule } from "../template-engine/template.engine.module";
import { EmailService } from "./email.service";
import { EmailNodeMailer } from "./email.node.mailer";


@Module({
  imports: [
    ConfModule,
    LogModule,
    TemplateEngineModule,
  ],
  providers: [
    EmailService,
    EmailNodeMailer
  ],
  exports: [
    EmailService,
    TemplateEngineModule],
})
export class EmailModule
{

}