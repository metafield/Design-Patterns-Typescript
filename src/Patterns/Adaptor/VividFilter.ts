import { Logger } from '../../ReactLogger/Logger';
import { Image } from './Image';
import { Filter } from './filter';

export class VividFilter implements Filter {
  constructor(private logger: Logger = console) {}

  apply(image: Image): void {
    this.logger.log(`Applying Vivid filter to ${image.name}`);
  }
}
