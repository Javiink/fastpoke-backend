import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { CustomConfigModule } from './config/config.module';
import { CustomConfigService } from './config/config.service';
import { BowlsModule } from './bowls/bowls.module';
import { DrinksModule } from './drinks/drinks.module';

@Module({
  imports: [
    CustomConfigModule,
    MongooseModule.forRootAsync({
      imports: [CustomConfigModule],
      useFactory: async (configService: CustomConfigService) => ({
        uri: configService.database.uri
      }),
      inject: [CustomConfigService],
    }),
    BowlsModule,
    DrinksModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
