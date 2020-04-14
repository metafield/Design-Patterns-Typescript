import { EditorState } from './EditorState';

export class History {
  private states: EditorState[] = [];

  public getStates(): EditorState[] {
    return [...this.states];
  }

  public push(state: EditorState): void {
    this.states.push(state);
  }

  public pop(): EditorState | undefined {
    const state = this.states.pop();
    if (state) {
      return state;
    }
  }
}
