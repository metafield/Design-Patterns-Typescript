import { Tool } from './Tool';
import { CursorType } from './CursorType';

export class BrushTool implements Tool {
  cursorStyle = CursorType.CROSS;

  mouseDown(): string {
    return 'Starting Brush Tool';
  }
  mouseUp(): string {
    return 'Ending Brush Tool';
  }
}
