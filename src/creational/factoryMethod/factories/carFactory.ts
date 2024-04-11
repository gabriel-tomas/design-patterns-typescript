import { Car } from '../vehicle/car';
import { VehicleProtocol } from '../vehicle/vehicleProtocol';
import { VehicleFactoryProtocol } from './vehicleFactoryProtocol';

export class CarFactory extends VehicleFactoryProtocol {
  createVehicle(vehicleName: string): VehicleProtocol {
    return new Car(vehicleName);
  }
}
