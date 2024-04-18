import { ProductProtocol } from './productProtocol';

export class TShirt implements ProductProtocol {
  constructor(
    private readonly _name: string,
    private readonly _price: number,
  ) {}
  getName(): string {
    return this._name;
  }
  getPrice(): number {
    return this._price;
  }
}
