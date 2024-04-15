import { MakeIndividualCustomerVehicleFactory } from './factories/individualCustomerFactory';
import { MakeEnterpriseCustomerVehicleFactory } from './factories/enterpriseCustomerVehicleFactory';

const individualFactory = new MakeIndividualCustomerVehicleFactory();
const enterpriseFactory = new MakeEnterpriseCustomerVehicleFactory();

const customerIndividual = individualFactory.createCustomer('Laura');
const customerVehicleIndividual = individualFactory.createVehicle(
  'Fusca',
  'Maria',
);
console.log(customerVehicleIndividual);
customerVehicleIndividual.pickUp();

const customerEnterprise = enterpriseFactory.createCustomer('Gabriel');
const customerVehicleEnterprise = enterpriseFactory.createVehicle(
  'Fusca',
  'Alan',
);
console.log(customerVehicleEnterprise);
customerVehicleEnterprise.pickUp();
