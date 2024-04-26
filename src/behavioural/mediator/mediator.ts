import { SellerProductProtocol } from './interfacesSeller';
import { Seller } from './seller';

export class Mediator {
  private _sellers: Seller[] = [];

  get sellers(): readonly Seller[] {
    return this._sellers;
  }

  addSeller(...sellers: Seller[]): void {
    this._sellers.push(...sellers);
  }

  buy(id: string): SellerProductProtocol | void {
    let product;

    for (let i = 0; i < this._sellers.length; i++) {
      product = this._sellers[i].sell(id);
      if (product) {
        console.log(
          'Produto encontrado',
          product.id,
          product.name,
          product.price,
        );
        return product;
      }
    }

    console.log(`Produto com id: ${id} não encontrado`);
  }
}
