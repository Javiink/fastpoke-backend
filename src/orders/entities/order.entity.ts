import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type OrderDocument = Order & Document;

@Schema()
export class Order {
  @Prop([{ type: String, refPath: 'itemTypes' }])
  items: string[];

  @Prop([String])
  itemTypes: string[];

  @Prop()
  total: number;

  @Prop()
  payed: boolean;

  @Prop()
  takeout: boolean;

  @Prop({ default: false })
  served?: boolean;
}

export const OrderSchema = SchemaFactory.createForClass(Order);

OrderSchema.set('toJSON', {
  virtuals: true,
  transform: function (doc, ret) {
    ret.id = ret._id;
    delete ret._id;
    return ret;
  },
});