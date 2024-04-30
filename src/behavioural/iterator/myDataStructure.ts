import { MyDefaultIterator } from './myDefaultIterator';
import { MyIteratorProtocol } from './myIteratorProtocol';

export class MyDataStructure {
  private _iterator: MyIteratorProtocol<string> = new MyDefaultIterator(this);
  private _items: string[] = [];

  set iterator(iterator: MyIteratorProtocol<string>) {
    this._iterator = iterator;
  }

  get items(): readonly string[] {
    return this._items;
  }

  get itemsSize(): number {
    return this._items.length;
  }

  addItem(...items: string[]) {
    this._items.push(...items);
  }

  [Symbol.iterator](): MyIteratorProtocol<string> {
    this._iterator.reset();
    return this._iterator;
  }
}
