import { Compressor } from './Compressor';
import { Filter } from './Filter';
import { Logger } from './Logger';

export class ImageStorage {
  constructor(private logger: Logger) {}
  store(path: string, compressor: Compressor, filter: Filter) {
    this.logger.log('Running Compressor: ');
    compressor.compress(path);
    this.logger.log('Running filter: ');
    filter.apply(path);
  }
}
