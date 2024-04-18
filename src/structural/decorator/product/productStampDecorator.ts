import { ProductDecorator } from './productDecorator';

export class ProductStampDecorator extends ProductDecorator {
  getPrice(): number {
    return this._product.getPrice() + 10;
  }

  getName(): string {
    return this._product.getName() + ' - Stamp';
  }
}
