import { SellerProductProtocol } from './interfacesSeller';

export class Seller {
  private readonly _products: SellerProductProtocol[] = [];

  get products(): readonly SellerProductProtocol[] {
    return this._products;
  }

  addProduct(...product: SellerProductProtocol[]): void {
    this._products.push(...product);
  }

  sell(id: string): SellerProductProtocol | void {
    const productIndex = this._products.findIndex(
      (product) => product.id === id,
    );
    if (productIndex === -1) return;
    const product = this._products.splice(productIndex, 1);
    return product[0];
  }
}
