import { Ingredient } from "src/ingredients/entities/ingredient.entity";

export interface CustomBowl {
  id?: number;
  name: string;
  ingredients: Ingredient[];
  image: string;
  size: {
    name: string;
    price: number;
  };
}