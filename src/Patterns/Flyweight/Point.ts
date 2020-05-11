import { Logger } from '../../ReactLogger/Logger';
import { PointIcon } from './PointIcon';

export class Point {
  constructor(
    private x: number,
    private y: number,
    private icon: PointIcon,
    private logger: Logger
  ) {}

  draw() {
    this.logger.log(`drawing ${this.icon.getType()} at ${this.x}, ${this.y}`);
  }
}
