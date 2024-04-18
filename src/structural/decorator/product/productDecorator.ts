import { ProductProtocol } from './productProtocol';

export class ProductDecorator implements ProductProtocol {
  constructor(protected readonly _product: ProductProtocol) {}
  getName(): string {
    return this._product.getName();
  }
  getPrice(): number {
    return this._product.getPrice();
  }
}
