import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { SideDishesService } from './side-dishes.service';
import { CreateSideDishDto } from './dto/create-side-dish.dto';
import { UpdateSideDishDto } from './dto/update-side-dish.dto';

@Controller('side-dishes')
export class SideDishesController {
  constructor(private readonly sideDishesService: SideDishesService) {}

  @Post()
  create(@Body() createSideDishDto: CreateSideDishDto) {
    return this.sideDishesService.create(createSideDishDto);
  }

  @Get()
  findAll() {
    return this.sideDishesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.sideDishesService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateSideDishDto: UpdateSideDishDto) {
    return this.sideDishesService.update(+id, updateSideDishDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.sideDishesService.remove(+id);
  }
}
