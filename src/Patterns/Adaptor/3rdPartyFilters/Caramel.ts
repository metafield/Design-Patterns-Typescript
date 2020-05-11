import { Image } from '../Image';
import { Logger } from '../../../ReactLogger/Logger';

// a filter in a fake 3rd party library we did not code.
export class Caramel {
  constructor(private logger: Logger) {}
  // init is required to be called in this library for a filter to load. No reason - this is a fake library.
  init() {
    this.logger.log('Calling init in 3rd party Caramel');
  }

  render(image: Image) {
    this.logger.log('applying Caramel filter to: ' + image.name);
  }
}
