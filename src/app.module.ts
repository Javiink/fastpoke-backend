import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { CustomConfigModule } from './config/config.module';
import { CustomConfigService } from './config/config.service';
import { BowlsModule } from './bowls/bowls.module';
import { DrinksModule } from './drinks/drinks.module';
import { SideDishesModule } from './side-dishes/side-dishes.module';
import { CombosModule } from './combos/combos.module';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';
import { IngredientsModule } from './ingredients/ingredients.module';

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
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '../public'),
      serveRoot: '/public/',
    }),
    IngredientsModule,
    BowlsModule,
    DrinksModule,
    SideDishesModule,
    CombosModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
