import { Logger } from '../../ReactLogger/Logger';
import { Point } from './Point';
import { PointType } from './PointType';
import { PointIconFactory } from './PointIconFactory';

export class PointService {
  constructor(private iconFactory: PointIconFactory, private logger: Logger) {}

  getPoints(): Point[] {
    const getIcon = this.iconFactory.getPointIcon;

    return [
      new Point(321, 343, getIcon(PointType.CAFE), this.logger),
      new Point(754, 573, getIcon(PointType.HOSPITAL), this.logger),
      new Point(77, 54, getIcon(PointType.CAFE), this.logger),
      new Point(22, 123, getIcon(PointType.RESTAURANT), this.logger),
      new Point(321, 343, getIcon(PointType.CAFE), this.logger),
      new Point(754, 573, getIcon(PointType.HOSPITAL), this.logger),
      new Point(77, 54, getIcon(PointType.CAFE), this.logger),
      new Point(22, 123, getIcon(PointType.RESTAURANT), this.logger),
      new Point(22, 123, getIcon(PointType.RESTAURANT), this.logger),
      new Point(321, 343, getIcon(PointType.CAFE), this.logger),
      new Point(754, 573, getIcon(PointType.HOSPITAL), this.logger),
      new Point(77, 54, getIcon(PointType.CAFE), this.logger),
      new Point(22, 123, getIcon(PointType.RESTAURANT), this.logger),
    ];
  }
}
