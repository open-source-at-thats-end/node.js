import { Injectable, NotFoundException } from "@nestjs/common";
import * as jsonfile from 'jsonfile';
import * as fs from 'fs-extra';
import { ConfService } from "../../conf/conf.service";
import { LogService } from "../../log/log.service";
import { LibraryAppService } from "../../library.app.service";

@Injectable()
export class ApplicationLocalStorageService{
    private readonly storage!: string;

    constructor(
        private readonly confService: ConfService,
        private readonly logService: LogService,
    ){
        this.storage = this.confService.applicationLocalStorageFilePath;
        
        // Ensure the storage is exists
        this.ensureStorage();
    }

    private async ensureStorage(): Promise<void> {
        try{
            // check if folder and file is exists
            await fs.ensureDir(this.confService.localStorageDirPath);
            await fs.ensureFile(this.storage);

            // Check if the file is empty or invalid JSON
            const fileContent = fs.readFileSync(this.storage, { encoding: 'utf8' });
            if (fileContent.trim() === "") {
                // Write an empty object if the file is empty
                // await jsonfile.writeFile(this.storage, {}, { spaces: 0 });
            }
        } catch (err: any) {
            throw new NotFoundException(`Error ensuring application local storage: ${this.logService.redactSensitive(err.message)}`);
        }
    }

    // Method to write data to the local storage
    private async write(data: any): Promise<void> {
        try {
            //await jsonfile.writeFile(this.storage, data, { spaces: 0 });
            const jsonString = JSON.stringify(data, null, 0);
            const encData: string = await LibraryAppService.base64Enc(jsonString );
            await fs.writeFile(this.storage, encData as string, { encoding: 'utf8' });
        } catch (err: any) {
            throw new NotFoundException(`Error writing local storage: ${this.logService.redactSensitive(err.message)}`);
        }
    }

    // Method to read full data from the local storage
    public async read(): Promise<any> {
        try {
            //const data = await jsonfile.readFile(this.storage);
            const encData = fs.readFileSync(this.storage, { encoding: 'utf8' });
            if(encData !== '') {
                let data = await LibraryAppService.base64Dec(encData);

                data = await JSON.parse(data);
                return data;
            }
            return null;
        } catch (err: any) {
            this.logService.error(err, err.message);
            
            // make sure the storage is exists
            this.ensureStorage();

            throw new NotFoundException(`Error reading local storage: ${this.logService.redactSensitive(err.message)}`);
        }
    }
    
    // Method to get data for specific key from the local storage
    public async get(key: string): Promise<any> {
        try{
        const data: any = await this.read();
        if(data !== null && data[key]) {
            return data[key];
            }
        } catch (err: any) {
            this.logService.error(err, err.message);
        }
        return null;
    }

    // Method to update/set a specific key in the local storage
    public async set(key: string, value: any): Promise<void> {
        let data: any = {};
        data = await this.read();
        if(data === null) {
            data = {};
        }
        data[key] = value;
        await this.write(data);
    }

    // Method to delete a specific key in the local storage
    public async delete(key: string): Promise<void> {
        const data = await this.read();
        
        if(data && data !== null && data[key]){
        delete data[key];
        await this.write(data);
        }
    }

    // Method to truncate/empty entire local storage
    public async truncate(): Promise<void> {
        await this.write({});
    }
}