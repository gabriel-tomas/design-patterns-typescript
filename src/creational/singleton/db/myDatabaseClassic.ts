import { User } from '../interfaces/userProtocol';

export class MyDatabaseClassic {
  private static _instance: MyDatabaseClassic | undefined;
  private users: User[] = [];

  private constructor() {}

  static get instance(): MyDatabaseClassic {
    if (MyDatabaseClassic._instance === undefined) {
      MyDatabaseClassic._instance = new MyDatabaseClassic();
    }

    return MyDatabaseClassic._instance;
  }

  add(user: User): void {
    this.users.push(user);
  }

  remove(id: string): void {
    this.users = this.users.filter((user) => user.id !== id);
  }

  show(): readonly User[] {
    return this.users;
  }
}
