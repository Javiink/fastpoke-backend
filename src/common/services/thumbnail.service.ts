import { Global, Injectable, Logger, OnApplicationBootstrap, OnModuleInit } from '@nestjs/common';
import { existsSync, mkdirSync, readdirSync, readFileSync, writeFileSync } from 'fs';
import * as path from 'path';
import * as sharp from 'sharp';
import { CustomConfigService } from '../config/config.service';

@Global()
@Injectable()
export class ThumbnailService implements OnModuleInit, OnApplicationBootstrap {
  private static instance: ThumbnailService;
  private readonly logger = new Logger(ThumbnailService.name);

  imagesPath = this.configService.app.imagesPath;

  constructor(private configService: CustomConfigService) {}

  onModuleInit() {
    ThumbnailService.instance = this;
  }

  onApplicationBootstrap() {
    this.generateAllThumbnails();
  }

  static getInstance(): ThumbnailService {
    return ThumbnailService.instance;
  }

  public async getThumbnail(filename: string) {
    if (this.thumbnailExists(filename)) {
      return `thumbs/${filename}`;
    } else {
      return await this.createThumbnail(filename);
    }
  }

  private generateAllThumbnails(){
    const images = this.getImageFilenames();
    
    this.logger.log(`Generating thumbnails for ${images.length} images.`);
    
    images.forEach(image => {
      if (!this.thumbnailExists(image)){
        this.createThumbnail(image);
      }
    });
  }

  private getImageFilenames(){
    const files = readdirSync(this.imagesPath);
    return files.filter((file) =>  path.extname(file).toLowerCase() === '.png')
  }

  private thumbnailExists(filename: string) {
    return existsSync(`${this.imagesPath}/thumbs/${filename}`) ? true : false;
  }

  private async createThumbnail(filename: string) {
    if (!existsSync(`${this.imagesPath}/thumbs`)) {
      mkdirSync(`${this.imagesPath}/thumbs`);
    }

    const originalImage = readFileSync(`${this.imagesPath}/${filename}`);
    const thumbBuffer = await sharp(originalImage).resize(400, 400).toBuffer();

    writeFileSync(`${this.imagesPath}/thumbs/${filename}`, thumbBuffer);
    return `thumbs/${filename}`;
  }
}
