import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { SidedishSizes } from 'src/enums/sidedish-sizes.type';

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

  @Prop({ type: [{ name: String, price: Number }], _id: false })
  sizes?: {
    name: SidedishSizes;
    price: number;
  }[];
}

export const SidedishSchema = SchemaFactory.createForClass(Sidedish);

SidedishSchema.set('toJSON', {
  virtuals: true,
  transform: function (doc, ret) {
    ret.id = ret._id;
    delete ret._id;
    return ret;
  },
});