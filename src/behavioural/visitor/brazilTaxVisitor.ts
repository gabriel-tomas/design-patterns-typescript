import { AlcoholicDrink } from './alcoholicDrink';
import { Cigarette } from './cigarette';
import { Food } from './food';
import { TaxVisitorProtocol } from './taxVisitorProtocol';

export class BrazilTaxVisitor implements TaxVisitorProtocol {
  calculateTaxForFood(food: Food): number {
    return food.price + food.price * 0.07;
  }
  calculateTaxForAlcoholicDrink(alcoholicDrink: AlcoholicDrink): number {
    return alcoholicDrink.price + alcoholicDrink.price * 0.5;
  }
  calculateTaxForCigarette(cigarette: Cigarette): number {
    return cigarette.price + cigarette.price * 1.5;
  }
}
