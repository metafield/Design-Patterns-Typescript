import { Logger } from '../../ReactLogger/Logger';
import { Device } from './Device';

export class SamsungTV implements Device {
  constructor(private logger: Logger) {}

  setChannel(num: number): void {
    this.logger.log('Samsung - change channel to: ' + num);
  }

  turnOn(): void {
    this.logger.log('Samsung - turn on');
  }

  turnOff(): void {
    this.logger.log('Samsung - turn off');
  }
}
