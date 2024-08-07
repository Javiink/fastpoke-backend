import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';
import { Document, SchemaTypes } from 'mongoose';
import { BowlSizes } from 'src/enums/bowl-sizes.type';
import { IngredientDocument } from 'src/ingredients/entities/ingredient.entity';

export type BowlDocument = Bowl & Document & {
  allergens: string[];
};

@Schema({ toJSON: { virtuals: true }, toObject: {virtuals: true} })
export class Bowl {
  @Prop()
  name: string;

  @Prop([{ type: SchemaTypes.ObjectId, ref: 'Ingredient' }])
  ingredients: IngredientDocument[];

  @Prop()
  description?: string;

  @Prop()
  image: string;

  @Prop({ type: [{ name: String, price: Number }], _id: false })
  sizes?: {
    name: BowlSizes;
    price: number;
  }[];

}

export const BowlSchema = SchemaFactory.createForClass(Bowl);

BowlSchema.virtual('allergens').get(function (this: BowlDocument) {
  const allergenSet = new Set<string>();
  this.ingredients.forEach((ingredient) => {
    ingredient.allergens.forEach((allergen) => allergenSet.add(allergen));
  });
  return Array.from(allergenSet);
});

BowlSchema.set('toJSON', {
  virtuals: true,
  transform: function (doc, ret) {
    ret.id = ret._id;
    delete ret._id;
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

