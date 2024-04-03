import { User } from '../interfaces/userProtocol';

export const MyDatabaseFunction = (function () {
  let users: User[] = [];

  return {
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
})();
