import { ShoppingOrderStateProtocol } from './interfaces';
import { OrderPending } from './orderPending';
import { OrderRejected } from './orderRejected';
import { ShoppingOrder } from './shoppingOrderState';

export class OrderApproved implements ShoppingOrderStateProtocol {
  private name = 'OrderApproved';

  constructor(private order: ShoppingOrder) {}

  getName(): string {
    return this.name;
  }
  approvePayment(): void {
    console.log('Pedido já em estado de pagamento aprovado');
  }
  rejectPayment(): void {
    this.order.state = new OrderRejected(this.order);
  }
  waitPayment(): void {
    this.order.state = new OrderPending(this.order);
  }
  shipOrder(): void {
    console.log('Enviando o pedido para o cliente');
  }
}
