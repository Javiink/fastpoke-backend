import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { Drink } from './entities/drink.entity';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class DrinksService {
  constructor(@InjectModel('Drink') private readonly drinkModel: Model<Drink>) {}

  findAll() {
    return this.drinkModel.find();
  }

  findOne(id: string) {
    return this.drinkModel.findById(id);
  }
}
