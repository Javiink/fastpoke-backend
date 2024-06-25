import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Sidedish } from './entities/side-dish.entity';

@Injectable()
export class SideDishesService {
  constructor(
    @InjectModel('Sidedish')
    private readonly sidedishModel: Model<Sidedish>,
  ) {}

  findAll() {
    return this.sidedishModel.find();
  }

  findOne(id: string) {
    return this.sidedishModel.findById(id);
  }
}
