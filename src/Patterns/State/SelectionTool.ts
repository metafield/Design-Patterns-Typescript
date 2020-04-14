import { Tool } from './Tool';
import { CursorType } from './CursorType';

export class SelectionTool implements Tool {
  cursorStyle = CursorType.GRAB;

  mouseDown(): void {
    console.log('Selection icon');
  }
  mouseUp(): void {
    console.log('Draw selection box');
  }
}
