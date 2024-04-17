import { Radio } from './device/radio';
import { Tv } from './device/tv';
import { RemoteControl } from './remoteControl/remoteControl';
import { RemoteControlWithVolume } from './remoteControl/remoteControlWithVolume';

function clientCode(
  abstraction: RemoteControl | RemoteControlWithVolume,
): void {
  abstraction.togglePower();
  if (!('volumeUp' in abstraction)) return;

  abstraction.volumeUp();
  abstraction.volumeUp();
  abstraction.volumeUp();
  abstraction.volumeUp();
  abstraction.volumeUp();
  abstraction.volumeUp();
  abstraction.volumeUp();

  abstraction.volumeDown();
  abstraction.volumeDown();
  abstraction.volumeDown();
}

const tv1 = new Tv('Samsung 43 inches');
const radio1 = new Radio('Radio');
clientCode(new RemoteControlWithVolume(radio1));
