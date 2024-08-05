import { Controller, Get, Param } from '@nestjs/common';
import { IngredientsService } from './ingredients.service';
import { ValidateMongoId } from 'src/pipes/validation/mongo-id.pipe';

@Controller('ingredients')
export class IngredientsController {
  constructor(private readonly ingredientService: IngredientsService) {}

  @Get()
  findAll() {
    return this.ingredientService.findAll();
  }

  @Get(':id')
  findOne(@Param('id', ValidateMongoId) id: string) {
    return this.ingredientService.findOne(id);
  }

  @Get('slot/:slot')
  findBySlot(@Param('slot') slot: string) {
    return this.ingredientService.findBySlot(slot);
  }
}
