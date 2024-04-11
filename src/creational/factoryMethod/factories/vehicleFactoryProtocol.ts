import { VehicleProtocol } from '../vehicle/vehicleProtocol';

export abstract class VehicleFactoryProtocol {
  abstract createVehicle(vehicleName: string): VehicleProtocol;

  pickUp(customerName: string, vehicleName: string): VehicleProtocol {
    const vehicle = this.createVehicle(vehicleName);
    vehicle.pickUp(customerName);
    return vehicle;
  }
}
