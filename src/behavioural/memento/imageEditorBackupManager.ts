import { ImageEditor } from './imageEditor';
import { Memento } from './memento';

// Caretaker
export class ImageEditorBackupManager {
  private _mementos: Memento[] = [];

  constructor(private readonly originator: ImageEditor) {}

  backup(): void {
    console.log(`Backup: Salvando o estado de imageEditor`);
    this._mementos.push(this.originator.saveState());
  }

  undo(): void {
    const memento = this._mementos.pop();

    if (!memento) {
      console.log('Não há nada para desfazer');
      return;
    }

    this.originator.restoreState(memento);
    console.log(`Backup: ${memento.getName()} restaurado`);
  }

  get mementos(): readonly Memento[] {
    return this._mementos;
  }
}
