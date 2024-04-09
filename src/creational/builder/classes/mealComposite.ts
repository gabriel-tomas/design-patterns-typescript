import { MealProtocol } from '../protocols/abstractMeal';
import { MealCompositeProtocol } from '../protocols/mealCompositeProtocol';

export class MealComposite implements MealCompositeProtocol {
  private readonly _meals: MealProtocol[] = [];

  add(...meals: MealProtocol[]): void {
    meals.forEach((meal) => this._meals.push(meal));
  }

  getPrice(): number {
    return this._meals.reduce((acc, meal) => acc + meal.getPrice(), 0);
  }
}
