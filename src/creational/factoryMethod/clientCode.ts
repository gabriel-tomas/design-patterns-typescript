import { CarFactory } from './factories/carFactory';
import { randomCarAlgorithm } from './randomCar/randomCarAlgorithm';

const carFactory = new CarFactory();

const onix = carFactory.createVehicle('Onix');
onix.pickUp('João');
onix.stop();

const celta = carFactory.createVehicle('Celta');
celta.pickUp('Maria');
celta.stop();

const randomCar = randomCarAlgorithm();
randomCar.pickUp('Bia');
randomCar.stop();
