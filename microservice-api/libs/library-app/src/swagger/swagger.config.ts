import { SwaggerCustomOptions, SwaggerDocumentOptions } from "@nestjs/swagger";
import { ConfService } from "../conf/conf.service";
import { LogService } from "../log/log.service";

export class SwaggerConfig {
    constructor(
        private readonly confService: ConfService,
        private readonly logService: LogService
    ){
        this.logService.setContext(SwaggerConfig.name);
    }

    public swaggerDocumentOptions(): SwaggerDocumentOptions{
        const options: SwaggerDocumentOptions = {
            //operationIdFactory: (controllerKey: string, methodKey: string) => methodKey,
        };
        return options;
    }

    public swaggerCustomOptions(): SwaggerCustomOptions {
        const options: SwaggerCustomOptions = {
            swaggerOptions: {
                appName: `${this.confService.projectName} - REST API`,
            },
            explorer: true,
            customSiteTitle: `${this.confService.projectName} - REST API`,
            //customfavIcon: '',
        };
        return options;
    }
}