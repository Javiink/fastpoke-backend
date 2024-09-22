import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose/dist/common';
import { Model } from 'mongoose';
import { Order, OrderDocument } from './entities/order.entity';

@Injectable()
export class OrdersService {
  constructor(
    @InjectModel('Order') private readonly orderModel: Model<OrderDocument>,
  ) {}

  async findAll(): Promise<Order[]> {
    return await this.orderModel.find().exec();
  }

  findOne(id: string) {
    return this.orderModel.findById(id);
  }

  async create(createOrderDto: Order){
    return this.orderModel.create(createOrderDto);
  }
}
