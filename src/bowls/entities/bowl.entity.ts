import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';
import { Document, SchemaTypes } from 'mongoose';
import { Ingredient, IngredientDocument } from 'src/ingredients/entities/ingredient.entity';

export type BowlDocument = Bowl & Document & {
  allergens: string[];
};

@Schema({ toJSON: { virtuals: true }, toObject: {virtuals: true} })
export class Bowl {
  @Prop()
  name: string;

  @Prop([{ type: SchemaTypes.ObjectId, ref: 'Ingredient' }])
  ingredients: Ingredient[];

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

BowlSchema.virtual('allergens').get(function (this: BowlDocument) {
  const allergenSet = new Set<string>();
  this.ingredients.forEach((ingredient: IngredientDocument) => {
    ingredient.allergens.forEach((allergen) => allergenSet.add(allergen));
  });
  return Array.from(allergenSet);
});

BowlSchema.set('toJSON', {
  virtuals: true,
  transform: function (doc, ret) {
    delete ret._id;
    delete ret.price.id;
    delete ret.price._id;
    return ret;
  },
});

BowlSchema.pre('find', function (next) {
  this.populate('ingredients');
  next();
});

BowlSchema.pre('findOne', function (next) {
  this.populate('ingredients');
  next();
});

