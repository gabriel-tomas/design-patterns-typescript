export interface SystemUserAddress {
  street: string;
  number: string;
}

export interface SystemUserProtocol {
  firstName: string;
  lastName: string;
  getAddresses(): Promise<SystemUserAddress[]>;
}
