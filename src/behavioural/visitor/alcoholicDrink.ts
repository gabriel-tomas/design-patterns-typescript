import { TaxVisitorProtocol } from './taxVisitorProtocol';
import { VisitableProductProtocol } from './visitableProductProtocol';

export class AlcoholicDrink extends VisitableProductProtocol {
  constructor(protected _price: number) {
    super('AlcoholicDrink', _price);
  }

  getPriceWithTaxes(visitor: TaxVisitorProtocol): number {
    return visitor.calculateTaxForAlcoholicDrink(this);
  }
}
