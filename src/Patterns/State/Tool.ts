import { CursorType } from './CursorType';

export interface Tool {
  cursorStyle: CursorType;
  mouseDown(): string;
  mouseUp(): string;
}
