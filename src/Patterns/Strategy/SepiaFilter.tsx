import { Filter } from './Filter';
import { Logger } from './Logger';

export class SepiaFilter implements Filter {
  constructor(private logger: Logger) {}
  apply = (path: string) => this.logger.log('Sepia filter applied to: ' + path);
}
