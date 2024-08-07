import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type DrinkDocument = Drink & Document;

@Schema()
export class Drink {
  @Prop()
  name: string;

  @Prop()
  description?: string;

  @Prop()
  image: string;

  @Prop()
  allergens?: string[];
  
  @Prop()
  price: number;
}

export const DrinkSchema = SchemaFactory.createForClass(Drink);

DrinkSchema.set('toJSON', {
  virtuals: true,
  transform: function (doc, ret) {
    ret.id = ret._id;
    delete ret._id;
    return ret;
  },
});