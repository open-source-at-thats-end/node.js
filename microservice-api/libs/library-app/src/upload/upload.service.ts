import { BadRequestException, Injectable } from "@nestjs/common";
import { ConfService } from '../conf/conf.service'
import { LogService } from '../log/log.service'
import { FileUpload, MiddlewareUploadResponse } from "./upload.type";
import { createWriteStream } from 'fs-extra';
import fs from 'fs-extra';
import { LibraryAppService } from "../library.app.service";
import { join } from "path";

@Injectable()
export class UploadService {
    constructor(
        private readonly confService: ConfService,
        private readonly logService: LogService,
    ){
        this.logService.setContext(UploadService.name);
    }
    /**
     * Asynchronously handles file uploads from the Apollo Gateway.
     * When any file upload hit the apollo gateway, it upload it in tmp folder and returns the tmp path to down stream services.
     * SO, before attachment reach to microservice it is already in tmp folder, just finish remain process.
     *
     * @param {Object} params - An object containing the request and context.
     * @param {Object} params.request - The request object.
     * @param {Object} params.context - The context object.
     * @return {Promise<MiddlewareUploadResponse[]>} - A promise that resolves to an array of upload responses.
     * @throws {BadRequestException} - If the attachment is invalid or corrupted, or if the file size exceeds the limit.
     */
    public async middlewareUpload({ request, context }: any): Promise<MiddlewareUploadResponse[]> {

        // check if multi file upload or single file upload
        let attachment = await request?.variables?.attachment;
        let input = await request?.variables?.input;
        let upResponse: MiddlewareUploadResponse[] = [];

        // as single file found convert to array to process this is because we keep same code base for single and multiupload
        if (attachment !== null && !Array.isArray(attachment) && typeof attachment === 'object') {
            attachment = [attachment];
        } 

        try{
            // loop through all files for upload process
            //await Promise.all(attachment.map(async (singleAttachment: any, i: number) => {
            for (let i = 0; i < attachment.length; i++) {
                const singleAttachment: any = await attachment[i];

                if(!singleAttachment.file){
                    //throw new BadRequestException(`Invalid or corrupted attachment(s), please try single file instead of multiple files`);
                    // Log which file index failed and continue processing other files
                    this.logService.warn(`File missing or invalid at index ${i}`);
                    //continue; // Skip to next file if this one is invalid
                }

                // get upload input
                const { createReadStream, filename, fieldName, mimetype }: FileUpload = singleAttachment?.file;

                // create new unique filename
                const id = await LibraryAppService.base64Enc(String(request?.variables?.id || '0'));
                const refId = await LibraryAppService.base64Enc(String(request?.variables?.ref_id * 79));
                const fileField = await LibraryAppService.base64Enc(String(request?.variables?.file_field));
                const ref = await LibraryAppService.base64Enc(`${id}.${refId}.${fileField}`);

                const timestamp = new Date().toISOString().replace(/[:.-]/g, '');
                const randomId = Math.random().toString(36).substring(2);
                const pfn = filename.replace(/[\s~`!@#$%^&*?/\\]+/g, '');
                const newName = `${timestamp}.${randomId}.${ref}+${pfn}`;
                const tmpFilePath = join(this.confService.tmpDirPath, newName);

                // Calculate the total file size from the stream
                let totalSize = 0;
                await new Promise((resolve, reject) => {
                    //start read stream
                    const readStream = createReadStream();
                    readStream
                    .on('data', (chunk) => {
                        totalSize += chunk.length;
                        if (totalSize > this.confService.maxFileSize) {
                            readStream.destroy(); // Stop reading further
                            reject(new Error('File size exceeds the 20 MB limit'));
                        }
                    })
                    .on('end', () => resolve(true))
                    .on('error', (err:any) => { 
                        readStream.destroy(); 
                        reject(err)
                    });
                });
                 
                // start uploading file
                const upload = await new Promise(async (resolve, reject) => {
                    //start read stream
                    const readStream = createReadStream();
                    readStream
                    .pipe(createWriteStream(tmpFilePath))
                    .on('finish', () => {
                        /*
                        // this part is not required here it will be done in gateway config
                        // set new name an path of file with temp location to down stream microservice
                        if(request.variables?.attachment?.file){
                            // if single files
                            request.variables.attachment.file.tmpFileName = upResponse[i].tmpFileName;
                            request.variables.attachment.file.tmpFileSize = upResponse[i].tmpFileSize;
                            request.variables.attachment.file.tmpFilePath = upResponse[i].tmpFilePath;
                        } else if(request.variables?.attachment[i] && request.variables?.attachment[i]?.file){
                            // if multiple files
                            request.variables.attachment[i].file.tmpFileName = upResponse[i].tmpFileName;
                            request.variables.attachment[i].file.tmpFileSize = upResponse[i].tmpFileSize;
                            request.variables.attachment[i].file.tmpFilePath = upResponse[i].tmpFilePath;
                        } else {
                            throw new BadRequestException(`Corrupted attachment(s), please try again`);
                        }
                        */
                        // upload sucessful so set some data in post response
                        upResponse[i] = { tmpFileName: newName, tmpFileSize: 0, tmpFilePath: tmpFilePath };
                        resolve(true);
                        readStream.destroy();
                    })
                    .on('error', (err: any) => {
                        // upload failed
                        readStream.destroy();
                        this.logService.error(err, err.message);
                        reject(err)
                        throw new BadRequestException(err);
                    });
                });
            }    
            //}));
            return await Promise.all(upResponse);
        } catch(err: any) {
            // as upload faild remove tmp file from server and throw error
            if(upResponse.length > 0){
                for(let i = 0; i < upResponse.length; i++){
                    if(upResponse[i].tmpFilePath)
                        await fs.remove(upResponse[i].tmpFilePath);
                }
            }
            throw new BadRequestException(err);
        }
    }
}