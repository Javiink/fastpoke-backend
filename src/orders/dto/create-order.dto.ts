import { ApiProperty } from "@nestjs/swagger";
import { OrderItem } from "src/common/types/order-item.type";

export class CreateOrderDto {
  @ApiProperty()
  readonly items: OrderItem[];

  @ApiProperty()
  readonly total: number;

  @ApiProperty()
  readonly payed: boolean;

  @ApiProperty()
  readonly takeout: boolean;
}