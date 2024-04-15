import { Customer } from '../customers/interfaces/customer';
import { Vehicle } from './interfaces/vehicle';

export class EnterpriseVehicle implements Vehicle {
  constructor(
    public name: string,
    private readonly customer: Customer,
  ) {}

  pickUp(): void {
    console.log(
      `enterprise - ${this.name} está buscando ${this.customer.name}`,
    );
  }
}
