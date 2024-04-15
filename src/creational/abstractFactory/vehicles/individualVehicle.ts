import { Customer } from '../customers/interfaces/customer';
import { Vehicle } from './interfaces/vehicle';

export class IndividualVehicle implements Vehicle {
  constructor(
    public name: string,
    private readonly customer: Customer,
  ) {}

  pickUp(): void {
    console.log(
      `individual - ${this.name} está buscando ${this.customer.name}`,
    );
  }
}
