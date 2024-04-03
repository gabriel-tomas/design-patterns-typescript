// eslint-disable-next-line @typescript-eslint/no-var-requires
import { v4 as uuid } from 'uuid';

import { MyDatabaseFunction } from './db/myDatabaseFunction';
import { instance1 as myDatabaseFromModule2 } from './module2';

import './module2';

const id1 = uuid();
const id2 = uuid();

const instance1 = MyDatabaseFunction;

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

instance1.remove(id2);

console.log(instance1.show());

console.log(instance1 === myDatabaseFromModule2);
