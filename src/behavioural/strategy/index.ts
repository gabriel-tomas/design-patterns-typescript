// context
export interface EcommerceProductProtocol {
  name: string;
  price: number;
}

export class ECommerceShoppingCart {
  private _products: EcommerceProductProtocol[] = [];
  private _discountStrategy: DiscountStrategy = new DiscountStrategy();

  set discount(newDiscountStrategy: DiscountStrategy) {
    this._discountStrategy = newDiscountStrategy;
  }

  get products(): readonly EcommerceProductProtocol[] {
    return this._products;
  }

  addProduct(...products: EcommerceProductProtocol[]): void {
    this._products.push(...products);
  }

  getTotal(): number {
    return this._products.reduce((acc, product) => acc + product.price, 0);
  }

  getTotalWithDiscount(): number {
    return this._discountStrategy.getDiscount(this);
  }
}

export class DiscountStrategy {
  protected _discount: number = 0;

  getDiscount(cart: ECommerceShoppingCart): number {
    return cart.getTotal();
  }
}

export class DefaultDiscount extends DiscountStrategy {
  getDiscount(cart: ECommerceShoppingCart): number {
    const total = cart.getTotal();

    if (total >= 100 && total < 200) {
      this._discount = 0.1;
    } else if (total >= 200 && total < 300) {
      this._discount = 0.2;
    } else if (total >= 300) {
      this._discount = 0.3;
    }

    return total - total * this._discount;
  }
}

export class DecemberDiscount extends DiscountStrategy {
  getDiscount(cart: ECommerceShoppingCart): number {
    const total = cart.getTotal();

    if (total >= 100 && total < 200) {
      this._discount = 0.3;
    } else if (total >= 200 && total < 300) {
      this._discount = 0.4;
    } else if (total >= 300) {
      this._discount = 0.5;
    }

    return total - total * this._discount;
  }
}

const cart = new ECommerceShoppingCart();
cart.discount = new DefaultDiscount();
cart.addProduct({ name: 'Produto 1', price: 100 });
cart.addProduct({ name: 'Produto 2', price: 200 });
cart.addProduct({ name: 'Produto 3', price: 300 });
console.log(cart.getTotal());
console.log(cart.getTotalWithDiscount());
cart.discount = new DecemberDiscount();
console.log(cart.getTotal());
console.log(cart.getTotalWithDiscount());
