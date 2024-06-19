import { Injectable } from '@nestjs/common';
import { CreateBowlDto } from './dto/create-bowl.dto';
import { UpdateBowlDto } from './dto/update-bowl.dto';

@Injectable()
export class BowlsService {
  create(createBowlDto: CreateBowlDto) {
    return 'This action adds a new bowl';
  }

  findAll() {
    return `This action returns all bowls`;
  }

  findOne(id: number) {
    return `This action returns a #${id} bowl`;
  }

  update(id: number, updateBowlDto: UpdateBowlDto) {
    return `This action updates a #${id} bowl`;
  }

  remove(id: number) {
    return `This action removes a #${id} bowl`;
  }
}
