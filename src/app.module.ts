import { join } from 'path';
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ServeStaticModule } from '@nestjs/serve-static';
import { CustomConfigModule } from './common/config/config.module';
import { CustomConfigService } from './common/config/config.service';
import { AppService } from './app.service';
import { AppController } from './app.controller';

import { IngredientsModule } from './ingredients/ingredients.module';
import { DrinksModule } from './drinks/drinks.module';
import { SideDishesModule } from './sidedishes/sidedishes.module';
import { BowlsModule } from './bowls/bowls.module';
import { CombosModule } from './combos/combos.module';
import { ThumbnailService } from './common/services/thumbnail.service';
import { OrdersModule } from './orders/orders.module';

@Module({
  imports: [
    CustomConfigModule,
    MongooseModule.forRootAsync({
      imports: [CustomConfigModule],
      useFactory: async (configService: CustomConfigService) => ({
        uri: configService.database.uri,
      }),
      inject: [CustomConfigService],
    }),
    ServeStaticModule.forRoot(
      {
        rootPath: join(__dirname, '../public'),
        serveRoot: '/public/',
      },
      {
        rootPath: join(__dirname, '../kiosk'),
      }
    ),
    IngredientsModule,
    BowlsModule,
    DrinksModule,
    SideDishesModule,
    CombosModule,
    OrdersModule,
  ],
  controllers: [AppController],
  providers: [AppService, ThumbnailService],
})
export class AppModule {}
