import { User } from '../interfaces/userProtocol';

let users: User[] = [];

export const MyDatabaseModule = {
  add(user: User): void {
    users.push(user);
  },

  remove(id: string): void {
    users = users.filter((user) => user.id !== id);
  },

  show(): readonly User[] {
    return users;
  },
};
