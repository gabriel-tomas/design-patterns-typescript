import { Motocycle } from '../vehicle/motocycle';
import { VehicleProtocol } from '../vehicle/vehicleProtocol';
import { VehicleFactoryProtocol } from './vehicleFactoryProtocol';

export class MotocycleFactory extends VehicleFactoryProtocol {
  createVehicle(vehicleName: string): VehicleProtocol {
    return new Motocycle(vehicleName);
  }
}
