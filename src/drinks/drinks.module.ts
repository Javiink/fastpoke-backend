import { Module } from '@nestjs/common';
import { DrinksService } from './drinks.service';
import { DrinksController } from './drinks.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Drink, DrinkSchema } from './entities/drink.entity';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Drink.name, schema: DrinkSchema },
    ]),
  ],
  controllers: [DrinksController],
  providers: [DrinksService],
})
export class DrinksModule {}
