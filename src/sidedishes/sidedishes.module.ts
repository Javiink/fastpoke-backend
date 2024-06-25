import { Module } from '@nestjs/common';
import { SideDishesService } from './sidedishes.service';
import { SideDishesController } from './sidedishes.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Sidedish, SidedishSchema } from './entities/sidedish.entity';

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
