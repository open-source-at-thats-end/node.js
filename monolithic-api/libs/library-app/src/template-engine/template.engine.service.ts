//import * as hbs from "hbs";
import * as hbs from 'handlebars'; 
import { ConfService } from "../conf/conf.service";
import { LogService } from "../log/log.service";
import { existsSync, readFileSync } from "fs-extra";
import { BadRequestException, Injectable } from "@nestjs/common";
import path, { join } from "path";

@Injectable()
export class TemplateEngineService {
    constructor(
        private readonly confService: ConfService,
        private readonly logService: LogService,
    ) {}


    get templateDirPath(): string {
        return path.join(this.confService.cwd, 'dist', 'libs', 'library-app', 'template-engine', 'templates');
    }

    get emailTemplateDirPath(): string {
        return path.join(this.templateDirPath, 'email');
    }

    get emailHeaderTemplatePath(): string {
        return path.join(this.emailTemplateDirPath, 'header.hbs');
    }

    get emailFooterTemplatePath(): string {
        return path.join(this.emailTemplateDirPath, 'footer.hbs');
    }

    get emailBodyTemplatePath(): string {
        return path.join(this.emailTemplateDirPath, 'body.hbs');
    }

    get emailIndexTemplatePath(): string {
        return path.join(this.emailTemplateDirPath, 'index.hbs');
    }

    /**
     * Render a Handlebars template with the given context.
     * 
     * @param template the Handlebars template to render
     * @param contentVar the context to render the template with
     * @returns the rendered template as a string
     */
    public async renderHtmlTemplate(template: string, contentVar: any): Promise<string> {
        const headerTemplateSource = readFileSync(this.emailHeaderTemplatePath, 'utf8');
        const footerTemplateSource = readFileSync(this.emailFooterTemplatePath, 'utf8');
        const bodyTemplateSource   = readFileSync(this.emailBodyTemplatePath, 'utf8');

        hbs.registerPartial('header', headerTemplateSource);
        hbs.registerPartial('footer', footerTemplateSource);
        hbs.registerPartial('bdoy', bodyTemplateSource);
        const compiledTemplate = hbs.compile(template);
        return compiledTemplate(contentVar);
    }

    /**
     * Render a Handlebars template with the given context from a file.
     * 
     * @param templateFilePath the path to the Handlebars template file to render
     * @param fileVar the context to render the template with
     * @returns the rendered template as a string
     */
    public async renderHtmlTemplateFile(templateFilePath: string, fileVar: any): Promise<string> {
        if (!existsSync(templateFilePath)) {
            throw new BadRequestException(`Template file not found: ${templateFilePath}`);
        }

        const template = readFileSync(templateFilePath, 'utf8');
        return await this.renderHtmlTemplate(template, fileVar);
    }

    public async generateEmail(templateVar: any, bodyTemplatePath: string, headerTemplatePath?: string | false, footerTemplatePath?: string | false ): Promise<string> {
        

        // get the default email template index
        const indexTemplateSource  = readFileSync(this.emailIndexTemplatePath, 'utf8');

        // set body as per the parameter
        const bodyTemplateSource   = readFileSync(bodyTemplatePath, 'utf8');
        hbs.registerPartial('EmailBody', bodyTemplateSource);
        
        // set header as per the parameter
        if(!headerTemplatePath || (headerTemplatePath && typeof headerTemplatePath === 'string')) {
            const headerTemplateSource = readFileSync(headerTemplatePath || this.emailHeaderTemplatePath, 'utf8');
            hbs.registerPartial('EmailHeader', headerTemplateSource);
            templateVar = { ...templateVar, IncludeEmailHeader: true };
        }

        if(!footerTemplatePath || (footerTemplatePath && typeof footerTemplatePath === 'string')) {
            const footerTemplateSource = readFileSync(footerTemplatePath || this.emailFooterTemplatePath, 'utf8');
            hbs.registerPartial('EmailFooter', footerTemplateSource);
            templateVar = { ...templateVar, IncludeEmailHeader: true };
        }
        
        const compiledTemplate = hbs.compile(indexTemplateSource);
        return compiledTemplate(templateVar);
    }
}