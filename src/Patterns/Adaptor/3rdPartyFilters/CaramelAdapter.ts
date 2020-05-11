import { Image } from '../Image';
import { Logger } from '../../../ReactLogger/Logger';
import { Filter } from '../filter';
import { Caramel } from './Caramel';

export class CaramelAdapter implements Filter {
  private caramelOriginal = new Caramel(this.logger);

  constructor(private logger: Logger) {}

  apply(image: Image): void {
    this.logger.log(
      `Calling the 3rd party caramel's original methods from our adaptor`
    );
    this.caramelOriginal.init();
    this.caramelOriginal.render(image);
  }
}
