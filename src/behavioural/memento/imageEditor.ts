import { ConcreteMemento } from './concreteMemento';
import { Memento } from './memento';

// Originator
export class ImageEditor {
  constructor(
    private filePath: string,
    private fileFormat: string,
  ) {}

  convertFomartTo(format: string) {
    this.fileFormat = format;
    this.filePath = this.filePath.split('.').slice(0, -1).join('');
    this.filePath += `.${format}`;
  }

  saveState(): Readonly<Memento> {
    const date = new Date();

    return new ConcreteMemento(
      date.toISOString(),
      date,
      this.filePath,
      this.fileFormat,
    );
  }

  restoreState(memento: Memento): void {
    const concreteMemento = memento as ConcreteMemento;
    this.filePath = concreteMemento.getFilePath();
    this.fileFormat = concreteMemento.getFileFormat();
  }
}
