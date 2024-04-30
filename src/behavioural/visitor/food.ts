import { TaxVisitorProtocol } from './taxVisitorProtocol';
import { VisitableProductProtocol } from './visitableProductProtocol';

export class Food extends VisitableProductProtocol {
  constructor(protected _price: number) {
    super('Food', _price);
  }

  getPriceWithTaxes(visitor: TaxVisitorProtocol): number {
    return visitor.calculateTaxForFood(this);
  }
}
