import { SystemUserAddress, SystemUserProtocol } from './systemUserProtocol';

export class AdminUser implements SystemUserProtocol {
  constructor(
    public firstName: string,
    public lastName: string,
  ) {}

  async getAddresses(): Promise<SystemUserAddress[]> {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve([
          {
            street: 'Rua 1',
            number: '123',
          },
          {
            street: 'Rua 2',
            number: '456',
          },
        ]);
      }, 1000);
    });
  }
}
