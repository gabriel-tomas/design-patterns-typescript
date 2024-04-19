import { DeliveryLocation } from './deliveryLocation';
import {
  DeliveryFlyweightProtocol,
  DeliveryLocationDataProtocol,
  DeliveryLocationDictionaryProtocol,
} from './deliveryProtocols';

export class DeliveryFactory {
  private locations: DeliveryLocationDictionaryProtocol = {};

  private createID(data: DeliveryLocationDataProtocol): string {
    return Object.values(data)
      .map((item) => item.replace(/\s+/g, '').toLowerCase())
      .join('-');
  }

  createLocation(
    sharedData: DeliveryLocationDataProtocol,
  ): DeliveryFlyweightProtocol {
    const id = this.createID(sharedData);
    if (id in this.locations) return this.locations[id];
    this.locations[id] = new DeliveryLocation(sharedData);
    return this.locations[id];
  }

  getLocations(): DeliveryLocationDictionaryProtocol {
    return this.locations;
  }
}
