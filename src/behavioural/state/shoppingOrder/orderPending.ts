import { ShoppingOrderStateProtocol } from './interfaces';
import { OrderApproved } from './orderApproved';
import { OrderRejected } from './orderRejected';
import { ShoppingOrder } from './shoppingOrderState';

export class OrderPending implements ShoppingOrderStateProtocol {
  private name = 'OrderPending';

  constructor(private order: ShoppingOrder) {}

  getName(): string {
    return this.name;
  }
  approvePayment(): void {
    this.order.state = new OrderApproved(this.order);
  }
  rejectPayment(): void {
    this.order.state = new OrderRejected(this.order);
  }
  waitPayment(): void {
    console.log('Pedido já em estado de pagamento pendente');
  }
  shipOrder(): void {
    console.log('Pagamento pendente, não é possível enviar...');
  }
}
