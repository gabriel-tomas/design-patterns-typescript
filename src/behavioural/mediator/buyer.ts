import { SellerProductProtocol } from './interfacesSeller';
import { Mediator } from './mediator';

export class Buyer {
  constructor(private readonly mediator: Mediator) {}

  viewProducts(): readonly SellerProductProtocol[] {
    const finalArray: SellerProductProtocol[] = [];
    this.mediator.sellers.forEach((seller) =>
      finalArray.push(...seller.products),
    );
    return finalArray;
  }

  buy(id: string): void {
    this.mediator.buy(id);
  }
}
