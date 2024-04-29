import { promises } from 'fs';

import { CustomerDataParser } from './customerDataParser';
import { CustomerDataProtocol } from './customerDataProtocol';

export class CustomerDataParserJson extends CustomerDataParser {
  protected async parseData(): Promise<CustomerDataProtocol[]> {
    const customerData: CustomerDataProtocol[] = [];
    const rawData = await promises.readFile(this.filePath);

    const data = JSON.parse(rawData.toString());

    for (const customer of data) {
      const { name, age, cpf } = customer;
      customerData.push({
        name,
        age: Number(age),
        cpf,
      });
    }

    return customerData;
  }
}
