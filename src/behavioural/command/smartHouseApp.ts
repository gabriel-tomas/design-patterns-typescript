import { SmartHouseCommandProtocol } from './commandProtocol';

// invoker
export class SmartHouseApp {
  private commands: { [k: string]: SmartHouseCommandProtocol } = {};

  addCommand(key: string, command: SmartHouseCommandProtocol): void {
    if (this.checkIfCommandExists(key)) return;
    this.commands[key] = command;
  }

  executeCommand(key: string): void {
    if (!this.checkIfCommandExists(key)) return;
    this.commands[key].execute();
  }

  undoCommand(key: string): void {
    if (!this.checkIfCommandExists(key)) return;
    this.commands[key].undo();
  }

  private checkIfCommandExists(key: string): boolean {
    return key in this.commands;
  }
}
