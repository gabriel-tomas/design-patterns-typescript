import { AlcoholicDrink } from './alcoholicDrink';
import { Cigarette } from './cigarette';
import { Food } from './food';

export interface TaxVisitorProtocol {
  calculateTaxForFood(food: Food): number;
  calculateTaxForAlcoholicDrink(alcoholicDrink: AlcoholicDrink): number;
  calculateTaxForCigarette(cigarette: Cigarette): number;
}
