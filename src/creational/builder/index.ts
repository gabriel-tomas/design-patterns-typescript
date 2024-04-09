import { MainDishBuilder } from './classes/mainDishBuilder';
import { VeganDishBuilder } from './classes/veganDishBuilder';

const mainDishBuilder = new MainDishBuilder();
mainDishBuilder.makeMeal().makeBeverage();
console.log(mainDishBuilder);
console.log(mainDishBuilder.getMealComposite());
mainDishBuilder.makeDessert();
mainDishBuilder.reset();
console.log(mainDishBuilder.getMealComposite());

const veganDishBuilder = new VeganDishBuilder();
veganDishBuilder.makeMeal();
console.log(veganDishBuilder.getMealComposite());
