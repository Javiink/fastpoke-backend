import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { IngredientSlots } from 'src/enums/ingredient-slot.type';

export type IngredientDocument = Ingredient & Document;

@Schema()
export class Ingredient {
  @Prop()
  name: string;

  @Prop({ type: String})
  slot: IngredientSlots;

  @Prop()
  allergens?: string[];

  @Prop()
  description?: string;

  @Prop()
  image: string;

  @Prop()
  price?: number;
}

export const IngredientSchema = SchemaFactory.createForClass(Ingredient);
