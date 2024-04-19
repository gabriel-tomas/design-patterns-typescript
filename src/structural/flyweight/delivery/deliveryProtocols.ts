import { DeliveryLocation } from './deliveryLocation';

export interface DeliveryFlyweightProtocol {
  deliver(name: string, number: string): void;
}

export interface DeliveryLocationDataProtocol {
  readonly street: string;
  readonly city: string;
}

export interface DeliveryLocationDictionaryProtocol {
  [k: string]: DeliveryLocation;
}
