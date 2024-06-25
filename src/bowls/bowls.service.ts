import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Bowl, BowlDocument } from './entities/bowl.entity';

@Injectable()
export class BowlsService {
  constructor(
    @InjectModel('Bowl') private readonly bowlModel: Model<BowlDocument>,
  ) {}

  async findAll(): Promise<Bowl[]> {
    return await this.bowlModel.find().exec();
  }

  findOne(id: string) {
    return this.bowlModel.findById(id).populate('ingredients');
  }
}
