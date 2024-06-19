import { Injectable } from '@nestjs/common';

@Injectable()
export class CombosService {
  findAll() {
    return `This action returns all combos`;
  }

  findOne(id: number) {
    return `This action returns a #${id} combo`;
  }
}
