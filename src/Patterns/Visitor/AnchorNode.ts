import { HtmlNode } from './HtmlNode';
import { Operation } from './Operation';

export class AnchorNode implements HtmlNode {
  execute(operation: Operation): void {
    operation.apply(this);
    // can read this as:
    // visitor.visits(this)
  }
}
