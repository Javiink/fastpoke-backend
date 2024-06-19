import { Module } from '@nestjs/common';
import { BowlsService } from './bowls.service';
import { BowlsController } from './bowls.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Bowl, BowlSchema } from './entities/bowl.entity';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Bowl.name, schema: BowlSchema },
    ]),
  ],
  controllers: [BowlsController],
  providers: [BowlsService],
})
export class BowlsModule {}
