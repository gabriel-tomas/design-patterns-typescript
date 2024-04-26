import { Buyer } from './buyer';
import { generateID } from './generateId';
import { Mediator } from './mediator';
import { Seller } from './seller';

const id1 = generateID();
const id2 = generateID();
const id3 = generateID();

const mediator = new Mediator();
const seller1 = new Seller();
seller1.addProduct(
  { id: id1, name: 'Calça Jeans', price: 45.99 },
  { id: id2, name: 'Camiseta Social', price: 25.39 },
  { id: id3, name: 'Notebook', price: 25.39 },
);

const seller2 = new Seller();

mediator.addSeller(seller1, seller2);

const buyer = new Buyer(mediator);
console.log(buyer.viewProducts());
buyer.buy(id1);

console.log(mediator.sellers);
