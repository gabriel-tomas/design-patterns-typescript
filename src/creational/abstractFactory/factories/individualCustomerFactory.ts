import { IndividualCustomer } from '../customers/individualCustomer';
import { Customer } from '../customers/interfaces/customer';
import { IndividualVehicle } from '../vehicles/individualVehicle';
import { Vehicle } from '../vehicles/interfaces/vehicle';
import { MakeCustomerVehicleFactory } from './interfaces/customerVehicleFactory';

export class MakeIndividualCustomerVehicleFactory
  implements MakeCustomerVehicleFactory
{
  createCustomer(name: string): Customer {
    return new IndividualCustomer(name);
  }
  createVehicle(name: string, customerName: string): Vehicle {
    const customer = new IndividualCustomer(customerName);
    return new IndividualVehicle(name, customer);
  }
}
