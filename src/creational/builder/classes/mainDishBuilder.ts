import { MealBuilderProtocol } from '../protocols/mealBuilderProtocol';
import { MealComposite } from './mealComposite';
import { Beans, Beverage, Dessert, Meat, Rice } from './meals';

export class MainDishBuilder implements MealBuilderProtocol {
  private _mealComposite: MealComposite = new MealComposite();

  reset(): this {
    this._mealComposite = new MealComposite();
    return this;
  }

  makeMeal(): this {
    const rice = new Rice('Arroz', 2.32);
    const beans = new Beans('Feijoada', 3.59);
    const meat = new Meat('Bife', 6.23);
    this._mealComposite.add(rice, beans, meat);
    return this;
  }
  makeBeverage(): this {
    const beverage = new Beverage('Suco de laranja', 1.03);
    this._mealComposite.add(beverage);
    return this;
  }
  makeDessert(): this {
    const dessert = new Dessert('Pudim', 8.15);
    this._mealComposite.add(dessert);
    return this;
  }

  getMealComposite(): MealComposite {
    return this._mealComposite;
  }
}
