import { Device } from './Device';

export class RemoteControl {
  constructor(protected device: Device) {}

  turnOn(): void {
    this.device.turnOn();
  }

  turnOff(): void {
    this.device.turnOff();
  }
}
