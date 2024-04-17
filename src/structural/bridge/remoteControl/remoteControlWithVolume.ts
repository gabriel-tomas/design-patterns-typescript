import { RemoteControl } from './remoteControl';

export class RemoteControlWithVolume extends RemoteControl {
  volumeUp(): void {
    const oldValue = this.device.getVolume();
    this.device.setVolume(this.device.getVolume() + 1);
    console.log(
      `${this.device.getName()} tinha o volume ${oldValue} agora tem ${this.device.getVolume()}`,
    );
  }

  volumeDown(): void {
    const oldValue = this.device.getVolume();
    this.device.setVolume(this.device.getVolume() - 1);
    console.log(
      `${this.device.getName()} tinha o volume ${oldValue} agora tem ${this.device.getVolume()}`,
    );
  }
}
