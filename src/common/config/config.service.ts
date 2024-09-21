import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class CustomConfigService {
  constructor(private readonly configService: ConfigService) {}

  get app() {
    return {
      nodeEnv: this.configService.get<string>('NODE_ENV'),
      port: this.configService.get<number>('APP_PORT'),
      corsHost: this.configService.get<string>('CORS_HOST'),
      thumbsPath: this.configService.get<string>('THUMBS_PATH'),
    };
  }

  get database() {
    const db = {
      protocol: this.configService.get<string>('MONGODB_PROTOCOL'),
      username: this.configService.get<string>('MONGODB_USERNAME'),
      password: this.configService.get<string>('MONGODB_PASSWORD'),
      host: this.configService.get<string>('MONGODB_HOST'),
      database: this.configService.get<string>('MONGODB_DATABASE'),
      port: this.configService.get<number>('MONGODB_PORT'),
      params: this.configService.get<string>('MONGODB_PARAMS') || '',
    };
    return {
      ...db,
      uri: `${db.protocol}://${db.username}${db.password ? `:${db.password}` : ''}@${db.host}/${db.database}${db.params ? `?${db.params}` : ''}`,
    };
  }
}
