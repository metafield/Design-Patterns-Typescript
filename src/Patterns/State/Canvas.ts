import { SelectionTool } from './SelectionTool';
import { Tool } from './Tool';

export class Canvas {
  private currentTool = new SelectionTool();

  public mouseDown(): string {
    return this.currentTool.mouseDown();
  }

  public mouseUp(): string {
    return this.currentTool.mouseUp();
  }

  getCurrentTool(): Tool {
    return this.currentTool;
  }

  setCurrentTool(tool: Tool) {
    this.currentTool = tool;
  }
}
