import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';
import { Document, ObjectId } from 'mongoose';

export type BowlDocument = Bowl & Document;

@Schema()
export class Bowl {
  @Prop()
  name: string;

  @Prop()
  ingredients: ObjectId[];

  @Prop()
  description?: string;

  @Prop()
  image: string;

  @Prop()
  price?: {
    medium: number,
    large: number,
  };
}

export const BowlSchema = SchemaFactory.createForClass(Bowl);
