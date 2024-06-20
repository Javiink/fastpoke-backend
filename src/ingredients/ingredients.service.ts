import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Ingredient } from './entities/ingredient.entity';

@Injectable()
export class IngredientsService {
  constructor(@InjectModel('Ingredient') private readonly ingredientModel: Model<Ingredient>) {}

  findAll() {
    return this.ingredientModel.find();
  }

  findOne(id: string) {
    return this.ingredientModel.findById(id);
  }
}
