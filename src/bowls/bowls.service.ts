import { Injectable } from '@nestjs/common';

@Injectable()
export class BowlsService {
  findAll() {
    return `This action returns all bowls`;
  }

  findOne(id: number) {
    return `This action returns a #${id} bowl`;
  }
}
