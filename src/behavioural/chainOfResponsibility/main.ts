import { CEOBudgetHandler } from './ceoBudgetHandler';
import { CustomerBudget } from './customerBudget';
import { DirectorBudgetHandler } from './directorBudgetHandler';
import { ManagerBudgetHandler } from './managerBudgetHandler';
import { SellerBudgetHandler } from './sellerBudgetHandler';

const customerBudget = new CustomerBudget(5200);

const seller = new SellerBudgetHandler();
seller
  .setNext(new ManagerBudgetHandler())
  .setNext(new DirectorBudgetHandler())
  .setNext(new CEOBudgetHandler());

seller.handle(customerBudget);
