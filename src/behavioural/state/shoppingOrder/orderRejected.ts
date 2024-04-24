import { ShoppingOrderStateProtocol } from './interfaces';
import { OrderPending } from './orderPending';
/* import { OrderPending } from './orderPending'; */
import { ShoppingOrder } from './shoppingOrderState';

export class OrderRejected implements ShoppingOrderStateProtocol {
  private name = 'OrderRejected';

  constructor(private order: ShoppingOrder) {}

  getName(): string {
    return this.name;
  }
  approvePayment(): void {
    console.log(
      'Pedido está em estado de pagamento rejeitado, esperar o pagamento...',
    );
  }
  rejectPayment(): void {
    console.log(
      'Pedido já está em estado de pagamento rejeitado, esperar o pagamento...',
    );
  }
  waitPayment(): void {
    this.order.state = new OrderPending(this.order);
  }
  shipOrder(): void {
    console.log(
      'Pedido está em estado de pagamento rejeitado, não é possível enviar',
    );
  }
}
