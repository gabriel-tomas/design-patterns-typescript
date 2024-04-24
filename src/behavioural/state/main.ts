import { ShoppingOrder } from './shoppingOrder/shoppingOrderState';

const order = new ShoppingOrder();
order.shipOrder();
order.approvePayment();
order.rejectPayment();
order.rejectPayment();
order.shipOrder();
order.waitPayment();
order.shipOrder();
order.approvePayment();
order.shipOrder();
console.log(order);
