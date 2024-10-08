import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';
import { Document, SchemaTypes } from 'mongoose';
import { BowlDocument } from 'src/bowls/entities/bowl.entity';
import { DrinkDocument } from 'src/drinks/entities/drink.entity';
import { BowlSizes } from 'src/common/enums/bowl-sizes.type';
import { SidedishSizes } from 'src/common/enums/sidedish-sizes.type';
import { SidedishDocument } from 'src/sidedishes/entities/sidedish.entity';

export type ComboDocument = Combo & Document & {
    allergens: string[];
  };

@Schema()
export class Combo {
  @Prop()
  name: string;

  @Prop()
  description?: string;

  @Prop()
  image: string;

  @Prop({ type: SchemaTypes.ObjectId, ref: 'Bowl' })
  bowl: BowlDocument;

  @Prop({ type: String })
  bowlSize: BowlSizes;

  @Prop({ type: SchemaTypes.ObjectId, ref: 'Sidedish' })
  sidedish?: SidedishDocument;

  @Prop({ type: String })
  sidedishSize?: SidedishSizes;

  @Prop({ type: SchemaTypes.ObjectId, ref: 'Drink' })
  drink: DrinkDocument;

  @Prop()
  price: number;
}

export const ComboSchema = SchemaFactory.createForClass(Combo);

ComboSchema.virtual('allergens').get(function (this: ComboDocument) {
  const allergenSet = new Set<string>();
  this.bowl.allergens.forEach((allergen) => allergenSet.add(allergen));
  this.drink?.allergens.forEach((allergen) => allergenSet.add(allergen));
  this.sidedish?.allergens.forEach((allergen) => allergenSet.add(allergen));

  return Array.from(allergenSet);
});

ComboSchema.set('toJSON', {
  virtuals: true,
  transform: function (doc, ret) {
    ret.id = ret._id;
    delete ret._id;
    delete ret.price.id;
    delete ret.price._id;
    return ret;
  },
});

ComboSchema.pre('find', function (next) {
  this.populate('bowl drink sidedish');
  next();
})

ComboSchema.pre('findOne', function (next) {
  this.populate('bowl drink sidedish');
  next();
})