import {
  DeliveryFlyweightProtocol,
  DeliveryLocationDataProtocol,
} from './deliveryProtocols';

export class DeliveryLocation implements DeliveryFlyweightProtocol {
  constructor(private readonly sharedData: DeliveryLocationDataProtocol) {}

  deliver(name: string, number: string): void {
    console.log(`Entrega para ${name}`);
    console.log(`Em ${this.sharedData.street} ${this.sharedData.city}`);
    console.log(`Número ${number}`);
  }
}
