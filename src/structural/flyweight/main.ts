import { deliveryContext } from './delivery/deliveryContext';
import { DeliveryFactory } from './delivery/deliveryFactory';

const deliveryFactory = new DeliveryFactory();
deliveryContext(deliveryFactory, 'Gabriel', '120B', 'Rua Algo', 'Cidade 2');
deliveryContext(deliveryFactory, 'João', '123B', 'Rua Algo', 'Cidade 2');
deliveryContext(
  deliveryFactory,
  'João',
  '123B',
  'Rua Something 2',
  'Cidade 25',
);

console.log(deliveryFactory.getLocations());
