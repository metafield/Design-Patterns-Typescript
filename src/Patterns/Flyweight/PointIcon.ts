import { PointType } from './PointType';

export class PointIcon {
  constructor(private type: PointType, private icon: ArrayBuffer) {}

  getType(): PointType {
    return this.type;
  }
}
