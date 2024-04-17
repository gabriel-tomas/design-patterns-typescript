import { DeviceImplementation } from './deviceImplementation';

export class Radio implements DeviceImplementation {
  private _volume: number = 50;
  private _powerStatus: boolean = false;
  constructor(private _name: string) {}

  getName(): string {
    return this._name;
  }
  setPower(powerStatus: boolean): void {
    this._powerStatus = powerStatus;
  }
  getPower(): boolean {
    return this._powerStatus;
  }
  setVolume(volume: number): void {
    if (volume < 0 || volume > 100) return;
    this._volume = volume;
  }
  getVolume(): number {
    return this._volume;
  }
}
