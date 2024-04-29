import { CustomerDataProtocol } from './customerDataProtocol';

export abstract class CustomerDataParser {
  protected _customerData: CustomerDataProtocol[] = [];

  get customerData(): readonly CustomerDataProtocol[] {
    return this._customerData;
  }

  constructor(protected filePath: string) {}

  readonly fixCustomerData = async (): Promise<void> => {
    this._customerData = await this.parseData();
    this._customerData = this.fixCpf();
  };

  private fixCpf(): CustomerDataProtocol[] {
    return this._customerData.map((customer) => ({
      ...customer,
      cpf: customer.cpf.replace(/\D/g, ''),
    }));
  }

  protected abstract parseData(): Promise<CustomerDataProtocol[]>;
}
