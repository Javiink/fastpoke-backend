import { Controller, Get, Param } from '@nestjs/common';
import { SideDishesService } from './side-dishes.service';

@Controller('side-dishes')
export class SideDishesController {
  constructor(private readonly sideDishesService: SideDishesService) {}

  @Get()
  findAll() {
    return this.sideDishesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.sideDishesService.findOne(+id);
  }
}
