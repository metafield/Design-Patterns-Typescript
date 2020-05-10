import { HtmlNode } from './HtmlNode';
import { Operation } from './Operation';

export class HtmlDocument {
  private nodes: HtmlNode[] = [];

  public add(node: HtmlNode) {
    this.nodes.push(node);
  }

  public execute(operation: Operation): void {
    for (const node of this.nodes) {
      node.execute(operation);
    }
  }
}
