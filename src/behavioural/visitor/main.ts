import { AlcoholicDrink } from './alcoholicDrink';
import { BrazilTaxVisitor } from './brazilTaxVisitor';
import { Cart } from './cart';
import { Cigarette } from './cigarette';
import { Food } from './food';

const cart = new Cart();

const food = new Food(22.33);
const alcoholicDrink = new AlcoholicDrink(13.99);
const cigarette = new Cigarette(4.64);

const brazilTaxVisitor = new BrazilTaxVisitor();

cart.addItem(food, alcoholicDrink, cigarette);
console.log(cart.items);
console.log(cart.itemsTotal);
console.log(cart.totalWithTaxes(brazilTaxVisitor));
