import { DeliveryFactory } from './deliveryFactory';

export const deliveryContext = function (
  factory: DeliveryFactory,
  name: string,
  number: string,
  street: string,
  city: string,
): void {
  const location = factory.createLocation({ street, city });
  location.deliver(name, number);
};
