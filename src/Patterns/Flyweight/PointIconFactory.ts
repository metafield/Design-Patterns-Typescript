import { PointType } from './PointType';
import { PointIcon } from './PointIcon';
import { Logger } from '../../ReactLogger/Logger';

export class PointIconFactory {
  constructor(private logger: Logger) {}

  private icons: Map<PointType, PointIcon> = new Map();

  private createIcon(type: PointType): PointIcon {
    const icon = new PointIcon(type, new ArrayBuffer(2));
    this.icons.set(type, icon);
    return icon;
  }

  getPointIcon = (type: PointType): PointIcon => {
    // a nicer way of doing this if we did not have to log
    // return this.icons.get(type) || this.createIcon(type);

    if (this.icons.has(type)) {
      this.logger.log('Icon already existed! We will reuse it!');

      return this.icons.get(type)!;
    } else {
      this.logger.log('Icon does not exist. Caching and returning it');
      return this.createIcon(type);
    }
  };
}
