import { MealBuilderProtocol } from '../protocols/mealBuilderProtocol';
import { MealComposite } from './mealComposite';
import { Beans, Rice, Salad } from './meals';

export class VeganDishBuilder implements MealBuilderProtocol {
  private _mealComposite: MealComposite = new MealComposite();

  reset(): this {
    this._mealComposite = new MealComposite();
    return this;
  }

  makeMeal(): this {
    const rice = new Rice('Arroz', 2.32);
    const beans = new Beans('Feijoada', 3.59);
    const salad = new Salad('Salada', 1.54);
    this._mealComposite.add(rice, beans, salad);
    return this;
  }

  getMealComposite(): MealComposite {
    return this._mealComposite;
  }
}
