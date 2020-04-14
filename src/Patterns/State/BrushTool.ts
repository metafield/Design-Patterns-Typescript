import { Tool } from './Tool';
import { CursorType } from './CursorType';

export class BrushTool implements Tool {
  cursorStyle = CursorType.CROSS;

  mouseDown(): void {
    console.log('Brush icon');
  }
  mouseUp(): void {
    console.log('Paint a line');
  }
}
