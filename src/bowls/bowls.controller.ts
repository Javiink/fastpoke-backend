import { Controller, Get, Param } from '@nestjs/common';
import { BowlsService } from './bowls.service';

@Controller('bowls')
export class BowlsController {
  constructor(private readonly bowlsService: BowlsService) {}

  @Get()
  findAll() {
    return this.bowlsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.bowlsService.findOne(+id);
  }
}
