import { CarFactory } from '../factories/carFactory';
import { MotocycleFactory } from '../factories/motocycleFactory';
import { randomNumber } from '../utils/randomNumber';
import { VehicleProtocol } from '../vehicle/vehicleProtocol';

export function randomCarAlgorithm(): VehicleProtocol {
  const carFactory = new CarFactory();
  const motocycleFactory = new MotocycleFactory();

  const car1 = carFactory.createVehicle('Onix');
  const car2 = carFactory.createVehicle('Celta');
  const car3 = carFactory.createVehicle('BMW');
  const car4 = carFactory.createVehicle('Fiat Uno');
  const motocycle1 = motocycleFactory.createVehicle('Fan 160');
  const motocycle2 = motocycleFactory.createVehicle('Titan 160');
  const motocycle3 = motocycleFactory.createVehicle('Fazer 150');
  const motocycle4 = motocycleFactory.createVehicle('Lander 250');

  const vehicles = [
    car1,
    car2,
    car3,
    car4,
    motocycle1,
    motocycle2,
    motocycle3,
    motocycle4,
  ];

  return vehicles[randomNumber(vehicles.length)];
}
