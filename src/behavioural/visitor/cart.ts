import { TaxVisitorProtocol } from './taxVisitorProtocol';
import { VisitableProductProtocol } from './visitableProductProtocol';

export class Cart {
  private _items: VisitableProductProtocol[] = [];

  get items(): readonly VisitableProductProtocol[] {
    return this._items;
  }

  get itemsTotal(): number {
    return this._items.reduce((acc, item) => acc + item.price, 0);
  }

  totalWithTaxes(visitor: TaxVisitorProtocol): number {
    return this._items.reduce(
      (acc, item) => acc + item.getPriceWithTaxes(visitor),
      0,
    );
  }

  addItem(...item: VisitableProductProtocol[]): void {
    this._items.push(...item);
  }
}
