import { MyDataStructure } from './myDataStructure';
import { MyIteratorProtocol } from './myIteratorProtocol';

export class MyReverseIterator implements MyIteratorProtocol<string> {
  private index = this.dataStructure.itemsSize;

  constructor(private readonly dataStructure: MyDataStructure) {}

  reset(): void {
    this.index = this.dataStructure.itemsSize;
  }

  next(): IteratorResult<string> {
    const returnValue = this.makeValue(this.dataStructure.items[this.index]);
    returnValue.done = this.index < 0;
    this.index--;
    return returnValue;
  }

  private makeValue(value: string): IteratorResult<string> {
    return { value, done: false };
  }
}
