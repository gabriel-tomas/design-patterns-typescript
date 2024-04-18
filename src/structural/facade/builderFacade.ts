import { MainDishBuilder } from '../../creational/builder/classes/mainDishBuilder';
import { VeganDishBuilder } from '../../creational/builder/classes/veganDishBuilder';

// façade do src/creational/builder/index.ts
export class BuilderFacade {
  private readonly mainDishBuilder = new MainDishBuilder();
  private readonly veganDishBuilder = new VeganDishBuilder();

  makeMeal1(): void {
    this.mainDishBuilder.makeMeal().makeBeverage();
    console.log(this.mainDishBuilder);
    console.log(this.mainDishBuilder.getMealComposite());
  }

  makeMeal2(): void {
    this.mainDishBuilder.makeDessert();
    this.mainDishBuilder.reset();
    console.log(this.mainDishBuilder.getMealComposite());
  }

  makeMeal3Vegan(): void {
    this.veganDishBuilder.makeMeal();
    console.log(this.veganDishBuilder.getMealComposite());
  }
}
