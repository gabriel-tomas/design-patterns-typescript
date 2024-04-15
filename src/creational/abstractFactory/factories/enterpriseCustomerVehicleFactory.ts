import { EnterpriseCustomer } from '../customers/enterpriseCustomer';
import { Customer } from '../customers/interfaces/customer';
import { EnterpriseVehicle } from '../vehicles/enterpriseVehicle';
import { Vehicle } from '../vehicles/interfaces/vehicle';
import { MakeCustomerVehicleFactory } from './interfaces/customerVehicleFactory';

export class MakeEnterpriseCustomerVehicleFactory
  implements MakeCustomerVehicleFactory
{
  createCustomer(name: string): Customer {
    return new EnterpriseCustomer(name);
  }
  createVehicle(name: string, customerName: string): Vehicle {
    const customer = new EnterpriseCustomer(customerName);
    return new EnterpriseVehicle(name, customer);
  }
}
