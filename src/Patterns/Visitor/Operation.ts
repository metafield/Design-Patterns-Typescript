import { HeadingNode } from './HeadingNode';
import { AnchorNode } from './AnchorNode';

export interface Operation {
  //^ this is the Visitor ^
  apply(heading: HeadingNode): void;
  apply(anchor: AnchorNode): void;
}
