import { Tool } from './Tool';
import { CursorType } from './CursorType';

export class MoveTool implements Tool {
  cursorStyle = CursorType.MOVE;

  mouseDown(): string {
    return 'Starting Move Tool';
  }
  mouseUp(): string {
    return 'Ending Move Tool';
  }
}
