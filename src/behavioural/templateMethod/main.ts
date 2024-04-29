import { resolve } from 'path';
import { CustomerDataParserTxt } from './customerDataParserTxt';
import { CustomerDataParserJson } from './customerDataParserJson';

const filePathTxt = resolve(__dirname, 'files', 'customer.txt');
const customerDataParserTxt = new CustomerDataParserTxt(filePathTxt);
customerDataParserTxt
  .fixCustomerData()
  .then(() => console.log(customerDataParserTxt.customerData));

const filePathJson = resolve(__dirname, 'files', 'customer.json');
const customerDataParserJson = new CustomerDataParserJson(filePathJson);
customerDataParserJson
  .fixCustomerData()
  .then(() => console.log(customerDataParserJson.customerData));
