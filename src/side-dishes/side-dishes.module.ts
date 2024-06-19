import { Module } from '@nestjs/common';
import { SideDishesService } from './side-dishes.service';
import { SideDishesController } from './side-dishes.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Sidedish, SidedishSchema } from './entities/side-dish.entity';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Sidedish.name, schema: SidedishSchema },
    ]),
  ],
  controllers: [SideDishesController],
  providers: [SideDishesService],
})
export class SideDishesModule {}
