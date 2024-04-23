import { SmartHouseCommandProtocol } from './commandProtocol';
import { SmartHouseLight } from './smartHouseLight';
// concreteCommand
export class LightIntensityCommand implements SmartHouseCommandProtocol {
  constructor(private light: SmartHouseLight) {}
  execute(): void {
    this.light.increaseIntensity();
  }
  undo(): void {
    this.light.decreaseIntensity();
  }
}
