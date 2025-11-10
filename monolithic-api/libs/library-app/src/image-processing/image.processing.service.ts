import { Injectable } from "@nestjs/common";
import { ConfService } from "../conf/conf.service";
import { LogService } from "../log/log.service";
import sharp from 'sharp';
import { join } from 'path';
import fs from 'fs-extra';

@Injectable()
export class ImageProcessingService {
    constructor(
        protected readonly confService: ConfService,
        protected readonly logService: LogService,
    ) {
        this.logService.setContext(ImageProcessingService.name);
    }
    public async generateImageThumbnail(inputImagePath: string, outputThumbnailPath: string, width: number, height: number): Promise<string> {
        try {
            // Generate the thumbnail with cropping (using fit: 'cover' to crop)
            await sharp(inputImagePath)
              .resize(width, height, { fit: 'cover', position: sharp.strategy.entropy })
              .toFile(outputThumbnailPath);
      
            this.logService.info(`Thumbnail created: ${outputThumbnailPath}`);

            return outputThumbnailPath;
        } catch (error) {
            this.logService.error('Error generating thumbnail', error);
            throw new Error('Error generating thumbnail');
        }
    }
}