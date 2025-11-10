import { ConfService, LibraryAppService, LogService } from "@libs/library-app";
import { HttpModuleOptions, HttpModuleOptionsFactory } from "@nestjs/axios";
import { Injectable } from "@nestjs/common";

@Injectable()
export class BulkSmsConfig implements HttpModuleOptionsFactory {
    public static readonly entity: string = 'queue_sms';
    public static readonly max_message_characters: number = 156;
    
    constructor(
        private readonly confService: ConfService,
        private readonly logService: LogService
    ){}
    async createHttpOptions(): Promise<HttpModuleOptions> {
        // Base64encode(<token-id>:<token-secret>)
        const token = await LibraryAppService.base64Enc(`${this.confService.bulkSmsTokenId}:${this.confService.bulkSmsTokenSecret}`);

        const config: HttpModuleOptions = {
            timeout: 5000,
            maxRedirects: 5,
            baseURL: this.confService.bulkSmsBaseUrl,
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
                'Authorization': `${this.confService.bulkSmsAuthType} ${token}`
            }
        };
        return config;
    }
}  