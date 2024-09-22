import { Body, Controller, Get, Logger, Param, Post } from '@nestjs/common';
import { OrdersService } from './orders.service';
import { ValidateMongoId } from 'src/common/pipes/validation/mongo-id.pipe';
import { CreateOrderDto } from './dto/create-order.dto';
import { Order } from './entities/order.entity';

@Controller('orders')
export class OrdersController {
  constructor(private readonly ordersService: OrdersService) {}

  @Get()
  findAll() {
    return this.ordersService.findAll();
  }

  @Get(':id')
  findOne(@Param('id', ValidateMongoId) id: string) {
    return this.ordersService.findOne(id);
  }

  @Post()
  create(@Body() createOrderDto: CreateOrderDto) {
    const order: Order = {
      items: createOrderDto.items.map((item) => item.item),
      itemTypes: createOrderDto.items.map((item) => {
        if (item.category != 'custom-bowl') {
          const category = item.category.charAt(0).toUpperCase() + item.category.slice(1);
          return category.replace(/(s|es)$/, '');
        } else{
          return 'CustomBowl';
        }
      }),
      total: createOrderDto.total,
      payed: createOrderDto.payed,
      takeout: createOrderDto.takeout
    };
    return this.ordersService.create(order);
  }
}
