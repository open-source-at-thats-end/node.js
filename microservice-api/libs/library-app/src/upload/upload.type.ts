import { IsNotEmpty, IsOptional } from 'class-validator';
import { ReadStreamOptions, ReadStream, WriteStream } from 'graphql-upload-ts';

/**
 * These are the classes overwrittn with 'graphql-upload-ts'
 * this is bevause global validation pipe required each fileds to have validation rule
 * if it's ot there then it will be removed from request and you will not get user data on server
 * 
 *  httpApp.useGlobalPipes(new ValidationPipe({
 *      whitelist: true,
 *      transform: true,
 *  }));
 * 
 * if we will not overwrite it we need to turn off ValidationPipe at app initialization
 * here we need to make sure that name are identical to 'graphql-upload-ts'
 * 
 * import { FileUpload, Upload } from 'graphql-upload-ts';
 * 
 * this is potential hack to keep both things working together the ValidationPipe and file upload 
 * 
 **/
export class FileUpload {
    @IsNotEmpty()
    filename!: string;

    @IsNotEmpty()
    fieldName!: string;

    @IsOptional()
    mimetype!: string;

    @IsOptional()
    encoding!: string;

    @IsNotEmpty()
    createReadStream!: (options?: ReadStreamOptions) => ReadStream;

    @IsOptional()
    capacitor!: WriteStream;

    // added new as upload is processing in apollo gateway not in federated service
    // used to transfer tmp uploaded file data to microservice
    @IsOptional()
    tmpFileName?: string;

    /**
     * in bytes
     **/
    @IsOptional()
    tmpFileSize?: number;

    @IsOptional()
    tmpFilePath?: string;
}
export class Upload{
    @IsOptional()
    promise!: Promise<FileUpload>;

    @IsOptional()
    resolve!: (file?: FileUpload) => void;

    @IsOptional()
    reject!: (error?: Error | string) => void;

    @IsNotEmpty()
    file!: FileUpload;
}

export interface MiddlewareUploadResponse extends Pick<FileUpload, 'tmpFileName' & 'tmpFileSize' & 'tmpFilePath'> {
    tmpFileName: string;
    tmpFileSize: number;
    tmpFilePath: string;
};