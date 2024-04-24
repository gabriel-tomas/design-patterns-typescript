import { ShoppingOrderStateProtocol } from './interfaces';
import { OrderPending } from './orderPending';

export class ShoppingOrder {
  private _state: ShoppingOrderStateProtocol = new OrderPending(this);

  get state(): ShoppingOrderStateProtocol {
    return this._state;
  }

  set state(state: ShoppingOrderStateProtocol) {
    this._state = state;
    console.log(`Estado do pedido: ${state.getName()}`);
  }

  getStateName(): string {
    return this._state.getName();
  }

  approvePayment(): void {
    this._state.approvePayment();
  }

  rejectPayment(): void {
    this._state.rejectPayment();
  }

  waitPayment(): void {
    this._state.waitPayment();
  }

  shipOrder(): void {
    this._state.shipOrder();
  }
}
