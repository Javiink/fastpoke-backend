import { Injectable } from '@nestjs/common';

@Injectable()
export class IngredientsService {
  findAll() {
    return `This action returns all ingredients`;
  }

  findOne(id: number) {
    return `This action returns a #${id} ingredient`;
  }
}
