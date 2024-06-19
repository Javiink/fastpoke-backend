import { Injectable } from '@nestjs/common';

@Injectable()
export class SideDishesService {
  findAll() {
    return `This action returns all sideDishes`;
  }

  findOne(id: number) {
    return `This action returns a #${id} sideDish`;
  }
}
