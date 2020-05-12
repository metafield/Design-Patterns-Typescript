import { Logger } from '../../ReactLogger/Logger';
import { Device } from './Device';

export class SonyTV implements Device {
  constructor(private logger: Logger) {}

  setChannel(num: number): void {
    this.logger.log('sony - change channel to: ' + num);
  }

  turnOn(): void {
    this.logger.log('sony - turn on');
  }

  turnOff(): void {
    this.logger.log('sony - turn off');
  }
}
