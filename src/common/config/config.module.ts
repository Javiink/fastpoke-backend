import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { configValidationSchema } from './config.schema';
import { CustomConfigService } from './config.service';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: ['.env.development.local', '.env.development', '.env'],
      validationSchema: configValidationSchema,
      isGlobal: true,
      cache: true,
    }),
  ],
  providers: [CustomConfigService],
  exports: [CustomConfigService],
})
export class CustomConfigModule {}
