import { Injectable } from '@nestjs/common';

@Injectable()
export class DrinksService {
  findAll() {
    return `This action returns all drinks`;
  }

  findOne(id: number) {
    return `This action returns a #${id} drink`;
  }
}
