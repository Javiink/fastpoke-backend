import { Module } from '@nestjs/common';
import { CombosService } from './combos.service';
import { CombosController } from './combos.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Combo, ComboSchema } from './entities/combo.entity';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Combo.name, schema: ComboSchema }]),
  ],
  controllers: [CombosController],
  providers: [CombosService],
})
export class CombosModule {}
