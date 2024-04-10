interface Prototype {
  clone(): Prototype;
}

export class Person implements Prototype {
  public _addresses: Address[] = [];

  constructor(
    public name: string,
    public age: number,
  ) {}

  addAddress(address: Address): void {
    this._addresses.push(address);
  }

  clone(): this {
    const newObj = Object.create(this);
    return newObj;
  }
}

class Address {
  constructor(
    public street: string,
    public number: number,
    public state: string,
  ) {}
}

const address1 = new Address('Rua 2', 4, 'PE');
const person1 = new Person('Gabriel', 19);
person1.addAddress(address1);
person1._addresses[0].street = 'EU alterei';
const person1Clone = person1.clone();

console.log(person1._addresses);
console.log(person1Clone._addresses);
