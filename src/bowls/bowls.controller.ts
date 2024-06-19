import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { BowlsService } from './bowls.service';
import { CreateBowlDto } from './dto/create-bowl.dto';
import { UpdateBowlDto } from './dto/update-bowl.dto';

@Controller('bowls')
export class BowlsController {
  constructor(private readonly bowlsService: BowlsService) {}

  @Post()
  create(@Body() createBowlDto: CreateBowlDto) {
    return this.bowlsService.create(createBowlDto);
  }

  @Get()
  findAll() {
    return this.bowlsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.bowlsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateBowlDto: UpdateBowlDto) {
    return this.bowlsService.update(+id, updateBowlDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.bowlsService.remove(+id);
  }
}
