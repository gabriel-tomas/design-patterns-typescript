import { CustomerBudget } from './customerBudget';

export abstract class BaseBudgetHandler {
  protected _next: BaseBudgetHandler | null = null;

  setNext(next: BaseBudgetHandler) {
    this._next = next;
    return next;
  }

  handle(budget: CustomerBudget): CustomerBudget {
    if (this._next) return this._next.handle(budget);
    return budget;
  }
}
