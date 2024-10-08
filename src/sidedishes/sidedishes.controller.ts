import { Controller, Get, Param } from '@nestjs/common';
import { SideDishesService } from './sidedishes.service';
import { ValidateMongoId } from 'src/common/pipes/validation/mongo-id.pipe';

@Controller('sidedishes')
export class SideDishesController {
  constructor(private readonly sideDishesService: SideDishesService) {}

  @Get()
  findAll() {
    return this.sideDishesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id', ValidateMongoId) id: string) {
    return this.sideDishesService.findOne(id);
  }
}
