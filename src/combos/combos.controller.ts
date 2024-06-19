import { Controller, Get, Param } from '@nestjs/common';
import { CombosService } from './combos.service';

@Controller('combos')
export class CombosController {
  constructor(private readonly combosService: CombosService) {}

  @Get()
  findAll() {
    return this.combosService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.combosService.findOne(+id);
  }
}
