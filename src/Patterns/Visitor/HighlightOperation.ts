import { HeadingNode } from './HeadingNode';
import { AnchorNode } from './AnchorNode';
import { Logger } from './Logger';
import { Operation } from './Operation';

export class HighlightOperation implements Operation {
  // ^ this is the concrete implementation of visitor

  constructor(private logger: Logger) {}

  apply(heading: HeadingNode): void;
  apply(anchor: AnchorNode): void;
  apply(element: any) {
    if (element instanceof HeadingNode) {
      this.logger.log('highlighting heading node');
    }

    if (element instanceof AnchorNode) {
      this.logger.log('highlighting anchor node');
    }
  }
}
