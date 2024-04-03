// eslint-disable-next-line @typescript-eslint/no-var-requires
const { v4: uuid } = require('uuid');

import { MyDatabaseFunction } from './db/myDatabaseFunction';

const id1 = uuid();
const id2 = uuid();

export const instance1 = MyDatabaseFunction;

instance1.add({
  id: id1,
  name: 'Gabriel',
  surename: 'Tomás',
  age: 19,
});
instance1.add({
  id: id2,
  name: 'Tomás',
  surename: 'Gabriel',
  age: 39,
});
