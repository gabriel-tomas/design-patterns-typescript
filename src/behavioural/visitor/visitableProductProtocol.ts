import { TaxVisitorProtocol } from './taxVisitorProtocol';

export abstract class VisitableProductProtocol {
  constructor(
    protected _name: string,
    protected _price: number,
  ) {}

  get name(): string {
    return this._name;
  }

  get price(): number {
    return this._price;
  }

  abstract getPriceWithTaxes(visitor: TaxVisitorProtocol): number;
}
