import { AdminUser } from './adminUser';
import { SystemUserAddress, SystemUserProtocol } from './systemUserProtocol';

export class SystemUserProxy implements SystemUserProtocol {
  private realUser: SystemUserProtocol | null = null;
  private realUserAddresses: SystemUserAddress[] | null = null;

  constructor(
    public firstName: string,
    public lastName: string,
  ) {}

  private createUser(): SystemUserProtocol {
    if (this.realUser === null) {
      this.realUser = new AdminUser(this.firstName, this.lastName);
    }

    return this.realUser;
  }
  async getAddresses(): Promise<SystemUserAddress[]> {
    this.realUser = this.createUser();

    if (!this.realUserAddresses) {
      this.realUserAddresses = await this.realUser.getAddresses();
    }

    return this.realUserAddresses;
  }
}
