export interface MakeCustomerVehicleFactory {
  createCustomer(name: string): void;
  createVehicle(name: string, customerName: string): void;
}
