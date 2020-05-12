import { RemoteControl } from './RemoteControl';

export class AdvancedRemoteControl extends RemoteControl {
  setChannel(num: number): void {
    this.device.setChannel(num);
  }
}
