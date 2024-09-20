import { Controller, Get, Param } from '@nestjs/common';
import { BowlsService } from './bowls.service';
import { ValidateMongoId } from 'src/common/pipes/validation/mongo-id.pipe';

@Controller('bowls')
export class BowlsController {
  constructor(private readonly bowlsService: BowlsService) {}

  @Get()
  findAll() {
    return this.bowlsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id', ValidateMongoId) id: string) {
    return this.bowlsService.findOne(id);
  }
}
