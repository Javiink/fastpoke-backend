import { Injectable } from '@nestjs/common';
import { CreateSideDishDto } from './dto/create-side-dish.dto';
import { UpdateSideDishDto } from './dto/update-side-dish.dto';

@Injectable()
export class SideDishesService {
  create(createSideDishDto: CreateSideDishDto) {
    return 'This action adds a new sideDish';
  }

  findAll() {
    return `This action returns all sideDishes`;
  }

  findOne(id: number) {
    return `This action returns a #${id} sideDish`;
  }

  update(id: number, updateSideDishDto: UpdateSideDishDto) {
    return `This action updates a #${id} sideDish`;
  }

  remove(id: number) {
    return `This action removes a #${id} sideDish`;
  }
}
