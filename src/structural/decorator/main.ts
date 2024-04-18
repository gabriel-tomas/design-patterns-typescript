import { ProductDecorator } from './product/productDecorator';
import { ProductStampDecorator } from './product/productStampDecorator';
import { TShirt } from './product/tShirt';

const tShirt = new TShirt('Camiseta preta', 59.89);
const decoratedTShirt = new ProductDecorator(tShirt);
const decoratedTShirtStamp = new ProductStampDecorator(decoratedTShirt);
const decoratedDecoratedTShirtStamp = new ProductStampDecorator(
  decoratedTShirtStamp,
);

console.log(decoratedDecoratedTShirtStamp.getName());
console.log(decoratedDecoratedTShirtStamp.getPrice());
