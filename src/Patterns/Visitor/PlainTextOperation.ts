import { Operation } from './Operation';
import { HeadingNode } from './HeadingNode';
import { AnchorNode } from './AnchorNode';
import { Logger } from './Logger';

export class PlainTextOperation implements Operation {
  constructor(private logger: Logger) {}

  apply(heading: HeadingNode): void;
  apply(anchor: import('./AnchorNode').AnchorNode): void;
  apply(element: any) {
    if (element instanceof HeadingNode) {
      this.logger.log('converting heading node to plain text');
    }
    if (element instanceof AnchorNode) {
      this.logger.log('converting anchor node to plain text');
    }
  }
}
