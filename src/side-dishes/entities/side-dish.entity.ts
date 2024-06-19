import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type SidedishDocument = Sidedish & Document;

@Schema()
export class Sidedish {
  @Prop()
  name: string;

  @Prop()
  description?: string;

  @Prop()
  image: string;

  @Prop()
  allergens?: string[];

  @Prop({type: {small: Number, medium: Number}})
  price: {
    small: number;
    medium: number;
  };
}

export const SidedishSchema = SchemaFactory.createForClass(Sidedish);
