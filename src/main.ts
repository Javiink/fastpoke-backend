import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { CustomConfigService } from './common/config/config.service';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const configService = app.get(CustomConfigService);
  app.enableCors({
    optionsSuccessStatus: 200
  });
  app.setGlobalPrefix('api', {exclude: ['kiosk', 'public']});

  const swaggerOptions = new DocumentBuilder()
    .setVersion('1.0')
    .build();
  const documentation = SwaggerModule.createDocument(app, swaggerOptions); 
  SwaggerModule.setup('docs', app, documentation);

  await app.listen(configService.app.port);
}
bootstrap();
