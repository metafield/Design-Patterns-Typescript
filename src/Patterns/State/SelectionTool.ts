import { Tool } from './Tool';
import { CursorType } from './CursorType';

export class SelectionTool implements Tool {
  cursorStyle = CursorType.SELECT;

  mouseDown(): string {
    return 'Starting Selection Tool';
  }
  mouseUp(): string {
    return 'Ending Selection Tool';
  }
}
