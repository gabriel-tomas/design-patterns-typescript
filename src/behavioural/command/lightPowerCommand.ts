import { SmartHouseCommandProtocol } from './commandProtocol';
import { SmartHouseLight } from './smartHouseLight';
// concreteCommand
export class LightPowerCommand implements SmartHouseCommandProtocol {
  constructor(private light: SmartHouseLight) {}
  execute(): void {
    this.light.on();
  }
  undo(): void {
    this.light.off();
  }
}
