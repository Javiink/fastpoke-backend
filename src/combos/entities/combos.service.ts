import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Combo } from './combo.entity';

@Injectable()
export class CombosService {
  constructor(
    @InjectModel('Combo')
    private readonly comboModel: Model<Combo>,
  ) {}

  findAll() {
    return this.comboModel.find();
  }

  findOne(id: string) {
    return this.comboModel.findById(id);
  }
}
