import { MyDataStructure } from './myDataStructure';
import { MyReverseIterator } from './myReverseIterator';

const dataStructure = new MyDataStructure();
dataStructure.addItem('A', 'B', 'C', 'D');
const [a, b] = dataStructure;

console.log(a, b);

dataStructure.iterator = new MyReverseIterator(dataStructure);

for (const data of dataStructure) {
  console.log(data);
}
