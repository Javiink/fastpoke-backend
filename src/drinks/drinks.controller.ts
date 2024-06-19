import { Controller, Get, Param } from '@nestjs/common';
import { DrinksService } from './drinks.service';
import { ValidateMongoId } from '../pipes/validation/mongo-id.pipe';

@Controller('drinks')
export class DrinksController {
  constructor(private readonly drinksService: DrinksService) {}

  @Get()
  findAll() {
    return this.drinksService.findAll();
  }

  @Get(':id')
  findOne(@Param('id', ValidateMongoId) id: string) {
    return this.drinksService.findOne(id);
  }
}
