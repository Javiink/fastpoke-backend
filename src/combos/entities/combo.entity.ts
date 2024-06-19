import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';
import { Document, ObjectId, SchemaTypes } from 'mongoose';
import { BowlSizes } from 'src/enums/bowl-sizes.type';
import { SidedishSizes } from 'src/enums/sidedish-sizes.type';

export type ComboDocument = Combo & Document;

@Schema()
export class Combo {
  @Prop()
  name: string;

  @Prop()
  description?: string;

  @Prop()
  image: string;

  @Prop({ type: SchemaTypes.ObjectId, ref: 'Bowl' })
  bowl: ObjectId;

  @Prop()
  bowlSize: BowlSizes;

  @Prop({ type: SchemaTypes.ObjectId, ref: 'Sidedish' })
  sidedish: ObjectId;

  @Prop()
  sidedishSize: SidedishSizes;

  @Prop({ type: SchemaTypes.ObjectId, ref: 'Drink' })
  drink: ObjectId;

  @Prop()
  price: number;
}

export const ComboSchema = SchemaFactory.createForClass(Combo);
