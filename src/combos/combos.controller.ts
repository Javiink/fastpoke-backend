import { Controller, Get, Param } from '@nestjs/common';
import { CombosService } from './entities/combos.service';
import { ValidateMongoId } from 'src/pipes/validation/mongo-id.pipe';

@Controller('combos')
export class CombosController {
  constructor(private readonly combosService: CombosService) {}

  @Get()
  findAll() {
    return this.combosService.findAll();
  }

  @Get(':id')
  findOne(@Param('id', ValidateMongoId) id: string) {
    return this.combosService.findOne(id);
  }
}
