import { VehicleProtocol } from './vehicleProtocol';

export class Motocycle implements VehicleProtocol {
  constructor(private name: string) {}

  pickUp(customerName: string): void {
    console.log(`${this.name} buscou ${customerName}`);
  }
  stop(): void {
    console.log(`${this.name} parou a corrida`);
  }
}
