import { Module } from '@nestjs/common';
import { BowlsService } from './bowls.service';
import { BowlsController } from './bowls.controller';

@Module({
  controllers: [BowlsController],
  providers: [BowlsService],
})
export class BowlsModule {}
