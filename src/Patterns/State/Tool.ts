import { CursorType } from './CursorType';

export interface Tool {
  cursorStyle: CursorType;
  mouseDown(): void;
  mouseUp(): void;
}
