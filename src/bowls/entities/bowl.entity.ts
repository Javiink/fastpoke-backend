import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';
import { Document, ObjectId, SchemaTypes } from 'mongoose';

export type BowlDocument = Bowl & Document;

@Schema()
export class Bowl {
  @Prop()
  name: string;

  @Prop([{ type: SchemaTypes.ObjectId, ref: 'Ingredient' }])
  ingredients: ObjectId[];

  @Prop()
  description?: string;

  @Prop()
  image: string;

  @Prop({ type: { medium: Number, large: Number } })
  price?: {
    medium: number;
    large: number;
  };
}

export const BowlSchema = SchemaFactory.createForClass(Bowl);
