import { Logger } from '../../ReactLogger/Logger';
import { Stream } from './Stream';

export class CloudStream implements Stream {
  constructor(protected logger: Logger) {}

  write(data: string) {
    this.logger.log('Storing ' + data);
  }
}
