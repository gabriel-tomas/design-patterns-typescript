import { promises } from 'fs';

import { CustomerDataParser } from './customerDataParser';
import { CustomerDataProtocol } from './customerDataProtocol';

export class CustomerDataParserTxt extends CustomerDataParser {
  protected async parseData(): Promise<CustomerDataProtocol[]> {
    const customerData: CustomerDataProtocol[] = [];
    const rawData = await promises.readFile(this.filePath);

    const data = rawData.toString();
    const lines = data.split('\n');

    for (const line of lines) {
      const [name, age, cpf] = line.split('\t');
      customerData.push({
        name,
        age: Number(age),
        cpf,
      });
    }

    return customerData;
  }
}
