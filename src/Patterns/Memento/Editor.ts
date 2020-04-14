import { EditorState } from './EditorState';

export class Editor {
  private content = '';

  createState(): EditorState {
    return new EditorState(this.content);
  }

  restore(state: EditorState): void {
    this.content = state.content;
  }

  setContent(content: string) {
    this.content = content;
  }

  getContent(): string {
    return this.content;
  }
}
