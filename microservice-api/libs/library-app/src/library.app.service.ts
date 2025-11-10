import { BadRequestException, Injectable, Type } from '@nestjs/common';
import { ConfService } from './conf/conf.service';
import { ConfStaticService } from './conf/conf.static.service';
import { LogService } from './log/log.service';
import argon2 from 'argon2';
import { NestFactory } from '@nestjs/core';
import { NestExpressApplication } from '@nestjs/platform-express';
import { Logger, LoggerErrorInterceptor } from 'nestjs-pino';
import { graphqlUploadExpress } from 'graphql-upload-ts';
import helmet from 'helmet';
import expressCompression from 'compression';
import { DataValidationPipe } from './data-validation/data.validation.pipe';
import killPort from 'kill-port';
import cookieParser from 'cookie-parser';
import { ColumnMetadata } from 'typeorm/metadata/ColumnMetadata';
import { CONFPUVAL_APP_NAME, CONFPUVAL_BUSINESS_APP_NAME, CONFPUVAL_SHARED_APP_NAME } from './conf/conf.public';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { SwaggerConfig } from './swagger/swagger.config';
import { LogStaticService } from './log/log.static.service';
import { FileMetadata } from './library.app.type';
import fs from 'fs-extra';
import path, { join } from "path";
import mimeTypes from 'mime-types';
import { SnapshotListDto } from './crud/dto/crud.snapshot.dto';


@Injectable()
export class LibraryAppService {
    constructor(
        public readonly confService: ConfService,
        public readonly logService: LogService
    ){
        this.logService.setContext(LibraryAppService.name);
    }
    /**
     * Encodes a string to base64.
     *
     * @param {string} str - The string to encode.
     * @return {Promise<string>} The encoded base64 string.
     */
    public static async base64Enc(str: string | number): Promise<string>{
        return Buffer.from(new String(str)).toString('base64') as string;
    }
    /**
     * Decodes a base64 string to ASCII.
     *
     * @param {sring} base64 - The base64 string to decode.
     * @return {Promise<string>} The decoded ASCII string.
     */
    public static async base64Dec(base64: string): Promise<string>{
        return Buffer.from(new String(base64), 'base64').toString('utf8') as string;
    }
    /**
     * Hashes the input string using argon2 algorithm and returns the base64 encoded hash.
     *
     * @param {string} str - The string to be hashed.
     * @return {Promise<string>} The base64 encoded hash of the input string.
     */
    public static async getHash(str: string): Promise<string>{
        try{
            if(str){
                const hash = await argon2.hash(str, { 
                  type: argon2.argon2id,   
                  timeCost: 3, // from 1 to 10
                  memoryCost: 4096, // from 1,024 KB (1 MB) to 8,192 KB (8 MB) or more
                  parallelism: 1, // from 1 (single-threaded) or a small number (e.g., 2 or 4) for parallel processing
                });
                const base64 = await LibraryAppService.base64Enc(hash);
                return base64;
            }
            throw new BadRequestException('String not found for hashing.');
        } catch (err){
            throw new BadRequestException(`Error hashing your string. Veryfy your string and try again. ${err}`);
        }
    }
    /**
     * A function to match a hash with the input by decoding the hash and verifying it.
     *
     * @param {string} hash - The base64 hash to match.
     * @param {string} input - The input string to match with the hash.
     * @return {Promise<boolean>} A boolean indicating if the hash matches the input.
     */
    public static async matchHash(hash: string, input: string): Promise<boolean>{
        try{
            const argon = await LibraryAppService.base64Dec(hash);
            return await argon2.verify(argon, input);
        } catch (err) {
            return false;
        }
        return false;
    }
    /**
     * Formats the given number of bytes into a human-readable string representation.
     *
     * @param {number} bytes - The number of bytes to format.
     * @return {string} The formatted string representation of the bytes, either in MB or GB.
     */
    public static formatBytes(bytes: number): string {
        const byte = ConfStaticService.conf.oneByteSize;
        const megabytes = bytes / (byte * byte);
        if (megabytes >= byte) {
          const gigabytes = megabytes / byte;
          return `${gigabytes.toFixed(2)} GB`;
        }
        return `${megabytes.toFixed(2)} MB`;
    }
    /**
     * Masks an email address by replacing all characters except the first one of the
     * local part with asterisks.
     *
     * @param {string} email - The email address to mask.
     * @return {string} The masked email address.
     */
    public static maskEmail(email: string): string {
        const [name, domain] = email.split('@');
        const maskedName = name[0] + '*'.repeat(name.length - 1);
        return `${maskedName}@${domain}`;
    }
    /**
     * Masks a mobile number by replacing all characters except the first two and last three with asterisks.
     *
     * @param {string} mobileNumber - The mobile number to mask.
     * @return {string} The masked mobile number.
     */
    public static maskMobileNumber(mobileNumber: string): string {
        return mobileNumber.slice(0, 2) + '*'.repeat(mobileNumber.length - 5) + mobileNumber.slice(-3);
    }
    /**
     * A method to filter keys from an object based on another object.
     * Returns a new object with only the keys present in the reference object.
     *
     * @param {T} input - The object to filter keys from.
     * @param {any} reference - The object to filter keys with.
     * @return {Promise<Partial<T>>} A new object with only the keys present in the reference object.
     */
    public static async filterInputAsReference<T extends object>(input: any, reference: T): Promise<Partial<T>> {
        return Object.keys(input).reduce((acc, key) => {
            if (key in reference) {
                acc[key as keyof T] = input[key as keyof T];
            }
            return acc;
        }, {} as Partial<T>);
    }
    /**
     * Reads file metadata from the given file path.
     *
     * @param {string} filePath - The path to the file
     * @return {Promise<FileMetadata>} A promise with file metadata
     */
    public static async getFileMetadata(filePath: string): Promise<FileMetadata> {
        const stats = fs.statSync(filePath);
        const { base, name, ext } = path.parse(filePath);
        const mimeType = mimeTypes.lookup(filePath) || 'unknown';
        const encoding = mimeTypes.charset(mimeType) || 'utf-8'; 
        
        const resp: FileMetadata = {
            filename: base, // File name with extension
            name: name, // File name without extension
            extension: ext, // File extension
            size: stats.size, // File size in bytes
            created: stats.birthtime, // File creation date
            modified: stats.mtime, // Last modified date
            mimetype: mimeType, // Get mimetype based on extension
            encoding: encoding, // Encoding inferred from mime type
        };

        return resp;
    }
    /**
     * Retrieves an array of entity field names from the given repository.
     *
     * @param {Repository<E>} repo - The repository to retrieve field names from.
     * @return {(keyof E)[]} An array of entity field names.
     */
    public entityFieldsArr<E>(columns: ColumnMetadata[]): (keyof E)[] {
        return (columns.map(col => col.propertyName) as (keyof E)[]);
    }
    /**
     * Merges two SnapshotListDto objects by concatenating their respective arrays.
     *
     * @param {SnapshotListDto} currentSnap - The current snapshot to be merged into.
     * @param {SnapshotListDto} newSnap - The new snapshot whose contents are to be added.
     * @return {SnapshotListDto} The merged snapshot with combined alert, conflict, error,
     *                           imp, info, message, mismatch, notFound, success, result,
     *                           notice, and warning arrays.
     */
    public mergeSnapshot(currentSnap: SnapshotListDto, newSnap: SnapshotListDto): SnapshotListDto {
        currentSnap.alert = [...currentSnap.alert, ...newSnap.alert];
        currentSnap.conflict = [...currentSnap.alert, ...newSnap.alert];
        currentSnap.error = [...currentSnap.error, ...newSnap.error];
        currentSnap.imp = [...currentSnap.imp, ...newSnap.imp];
        currentSnap.info = [...currentSnap.info, ...newSnap.info];
        currentSnap.message = [...currentSnap.message, ...newSnap.message];
        currentSnap.mismatch = [...currentSnap.mismatch, ...newSnap.mismatch];
        currentSnap.notFound = [...currentSnap.notFound, ...newSnap.notFound];
        currentSnap.success = [...currentSnap.success, ...newSnap.success];
        currentSnap.result = [...currentSnap.result, ...newSnap.result];
        currentSnap.notice = [...currentSnap.alert, ...newSnap.alert];
        currentSnap.warning = [...currentSnap.warning, ...newSnap.warning];

        return currentSnap;
    }
    /**
     * A function to initialize a NestFastifyApplication with specified parameters.
     *
     * @param {AM} appModule - The module to create the application with.
     * @param {string} app - The app name to set required configurations.
     */
    public static async initExpressApp<AM extends Type<any>>(appModule: AM, app: string){
        let port: number = 4444;
        // init app
        const httpApp = await NestFactory.create<NestExpressApplication>(appModule, {  
            bufferLogs: true 
        });

        // get config service
        const confService = httpApp.get(ConfService);
        const logService = httpApp.get(LogService);

        // set static service for config and log
        ConfStaticService.initialize(confService);
        LogStaticService.initialize(logService);

        // set required config for app
        switch(app){
            case CONFPUVAL_APP_NAME:
                port = confService.appHttpPortExpress;
                break;
            case CONFPUVAL_SHARED_APP_NAME:
                port = confService.sharedAppHttpPortExpress;
                break;
            case CONFPUVAL_BUSINESS_APP_NAME:
                port = confService.businessAppHttpPortExpress;
                break;
            default:
                break;      
        }
        
        // TODO: this needs to be iintegrated with microservices, important part of application life cycle
        // set all exceptions filter
        //httpApp.useGlobalFilters(new AllExceptionsFilter(httpApp.get(HttpAdapterHost), logService));    
        
        // set logging
        httpApp.useLogger(httpApp.get(Logger));
        httpApp.useGlobalInterceptors(new LoggerErrorInterceptor());

        // Register the middleware
        httpApp.use(graphqlUploadExpress({ 
          maxFileSize: confService.maxFileSize,
          maxFiles: confService.maxFiles,
          overrideSendResponse: true 
        }));
        
        // set validation pipe
        httpApp.useGlobalPipes(new DataValidationPipe(confService, logService));
        
        // set Helmet to control and secure request/response
        httpApp.use(helmet({
            contentSecurityPolicy: {
              directives: {
                formAction: [`'self'`],
                baseUri: [`'none'`],
                upgradeInsecureRequests: [],
                blockAllMixedContent: null,
                //sandbox: [`'allow-scripts'`],
                scriptSrcAttr: [`'self'`, 'unpkg.com', '*.apollographql.com'],
                
                defaultSrc: [`'self'`, 'unpkg.com', '*.apollographql.com'],
                frameSrc: [`'self'`, 'unpkg.com', '*.apollographql.com'],
                connectSrc: [`'self'`, 'unpkg.com', '*.apollographql.com'],
                fontSrc: [`'self'`, 'fonts.gstatic.com', 'data:'],
                imgSrc: [`'self'`, 'data:', 'cdn.jsdelivr.net', '*.apollographql.com'],
                styleSrc: [
                  `'self'`,
                  `'unsafe-inline'`,
                  'cdn.jsdelivr.net',
                  'fonts.googleapis.com',
                  'unpkg.com',
                ],
                scriptSrc: [
                  `'self'`,
                  `https: 'unsafe-inline'`,
                  `cdn.jsdelivr.net`,
                  `'unsafe-eval'`,
                  `'*.apollographql.com'`
                ],
                mediaSrc: [`'none'`],
                objectSrc: [`'none'`],
                workerSrc: [`'none'`],
                childSrc: [`'none'`],
              },
            },
          }));
          
        // enable cors
        httpApp.enableCors({
            origin: [`https://sandbox.embed.apollographql.com`, confService.appLocalWebHostDomain, confService.appHostWebDomain, confService.appHostWebDomain.replace("https://", "https://www.")],
            methods: ['POST'],
            credentials: true,
            maxAge: 3600,
            allowedHeaders: ['Authorization', confService.statefulAuthorizationHeaderName, 'x-apollo-operation-name', 'apollo-require-preflight', 'content-type', 'Access-Control-Allow-Credentials', 'Access-Control-Allow-Origin'],
            preflightContinue: false,
            optionsSuccessStatus: 204
        });
        
        // setup cookie
        // make sure you set with GraphQL
        httpApp.use(cookieParser());

        // setup session
        // # not needed for now, and if you do make sure you set with GraphQL
        
         // apply the compression middleware
        httpApp.use(expressCompression({ 
            encodings: ['gzip', 'deflate'],
            requestEncodings: ['gzip'],
            threshold: confService.oneByteSize, // Only compress if the response body is larger than 1024 bytes
        }));

        // Starts listening for shutdown live lifecycle event hooks 
        httpApp.enableShutdownHooks();

        // enable REST api end point for app, this will be in gateway app only
        if(app === CONFPUVAL_APP_NAME){
            const sconf = new SwaggerConfig(confService, logService);
            
            const sDocConfig = new DocumentBuilder()
            .setTitle(`${confService.projectName} - REST API`)
            .setDescription(`Technical documentation and playground`)
            .setVersion(`1.0`)
            .addBearerAuth()
            .build();
            const document = SwaggerModule.createDocument(httpApp, sDocConfig, sconf.swaggerDocumentOptions());
            SwaggerModule.setup(confService.restSwaggerDocAbsUrl, httpApp, document, sconf.swaggerCustomOptions());
        }
        
        // kill the old port as sometime the port is already in use due to some error and process
        await killPort(port).then(() => {
            console.log(`Port ${port} is already in use, and now killed.`);
        }).catch((e) => {
            console.log(`${e.message} - Port ${port} is free to use, moving forward.`);
        });
        
        // start the app to listen live requrests
        await httpApp.listen(port, confService.appListenHost, () => {
            console.log(`GRAPHQL SERVER IS RUNNING ON: http://${confService.appListenHost}:${port}/${confService.graphqlRootSlug}`);
            
            if(app === CONFPUVAL_APP_NAME){
                console.log(`REST SERVER IS RUNNING ON: http://${confService.appListenHost}:${port}/${confService.restRootSlug}`);
                console.log(`SWAGGER IS RUNNING ON: http://${confService.appListenHost}:${port}/${confService.restSwaggerDocAbsUrl}`);
            }
        });
    }
    public formatTime(seconds: number): string {
        const minute = 60;
        const hour = 60 * minute;
        const day = 24 * hour;
        const year = 365.25 * day; // Account for leap years (average days per year)
        const month = year / 12; // Exact average month duration in seconds
    
        if (seconds >= year) {
            const years = Math.floor(seconds / year);
            const remainingSeconds = seconds % year;
            const months = Math.floor(remainingSeconds / month);
            return `${years} years${months > 0 ? `, ${months} months` : ''}`;
        } else if (seconds >= month) {
            const months = Math.floor(seconds / month);
            const remainingSeconds = seconds % month;
            const days = Math.floor(remainingSeconds / day);
            return `${months} months${days > 0 ? `, ${days} days` : ''}`;
        } else if (seconds >= day) {
            const days = Math.floor(seconds / day);
            const remainingSeconds = seconds % day;
            const hours = Math.floor(remainingSeconds / hour);
            return `${days} days${hours > 0 ? `, ${hours} hours` : ''}`;
        } else if (seconds >= hour) {
            const hours = Math.floor(seconds / hour);
            const remainingSeconds = seconds % hour;
            const minutes = Math.floor(remainingSeconds / minute);
            return `${hours} hours${minutes > 0 ? `, ${minutes} minutes` : ''}`;
        } else if (seconds >= minute) {
            const minutes = Math.floor(seconds / minute);
            const remainingSeconds = seconds % minute;
            return `${minutes} minutes${remainingSeconds > 0 ? `, ${remainingSeconds} seconds` : ''}`;
        } else {
            return `${seconds} seconds`;
        }
    }

}
