import { MealCompositeProtocol } from './mealCompositeProtocol';

export abstract class MealProtocol implements MealCompositeProtocol {
  constructor(
    private readonly name: string,
    private readonly _price: number,
  ) {}
  getPrice(): number {
    return this._price;
  }
}
