// Component
export abstract class ProductComponent {
  abstract getPrice(): number;
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  /* add(product: ProductComponent): void {}
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  remove(product: ProductComponent): void {} */
}

// Leaf
export class ProductLeaf extends ProductComponent {
  constructor(
    public name: string,
    public price: number,
  ) {
    super();
  }

  getPrice(): number {
    return this.price;
  }
}

// Composite
export class ProductComposite extends ProductComponent {
  private children: ProductComponent[] = [];

  add(...product: ProductComponent[]): void {
    this.children.push(...product);
  }
  remove(product: ProductComponent): void {
    const productIndex = this.children.indexOf(product);
    if (productIndex !== -1) this.children.splice(productIndex, 1);
  }

  getPrice(): number {
    return this.children.reduce((acc, child) => acc + child.getPrice(), 0);
  }
}

// Client code
const usbCable = new ProductLeaf('USB Cable 4.0', 15.53);
const bluetoothAdapter = new ProductLeaf('Bluetooth Adapter 4.0', 30.29);
const wirelessMouse = new ProductLeaf('Mouse wireless', 60.4);
const productBox = new ProductComposite();
productBox.add(usbCable, bluetoothAdapter, wirelessMouse);

const usbCCable = new ProductLeaf('USB C Cable', 10.23);
const mechanicalKeyboard = new ProductLeaf('Mechanical Keyboard', 103.99);
const monitor29 = new ProductLeaf('Monitor 29 inches HDMI/DisplayPort', 2000);
const productBox2 = new ProductComposite();
productBox2.add(usbCCable, mechanicalKeyboard, monitor29);
productBox.add(productBox2);

console.log(productBox);
console.log(productBox.getPrice());
