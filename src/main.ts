import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { ConfigService } from '@nestjs/config';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const configService = app.get(ConfigService);

  const swaggerOptions = new DocumentBuilder()
    .setVersion('1.0')
    .build();
  const documentation = SwaggerModule.createDocument(app, swaggerOptions); 
  SwaggerModule.setup('docs', app, documentation);

  await app.listen(configService.get('APP_PORT'));
}
bootstrap();
