import { TaxVisitorProtocol } from './taxVisitorProtocol';
import { VisitableProductProtocol } from './visitableProductProtocol';

export class Cigarette extends VisitableProductProtocol {
  constructor(protected _price: number) {
    super('Cigarette', _price);
  }

  getPriceWithTaxes(visitor: TaxVisitorProtocol): number {
    return visitor.calculateTaxForCigarette(this);
  }
}
