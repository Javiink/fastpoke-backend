import { BowlSizes } from "../enums/bowl-sizes.type";
import { SidedishSizes } from "../enums/sidedish-sizes.type";

export type OrderItem = {
  category: ItemCategory;
  item: string;
  size?: BowlSizes & SidedishSizes;
  price?: number;
};

export type ItemCategory =
  | 'bowls'
  | 'combos'
  | 'drinks'
  | 'sidedishes'
  | 'custom-bowl';