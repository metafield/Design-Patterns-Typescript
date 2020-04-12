export class Editor<T> {
  private history: T[] = [];

  constructor(private _content: T) {}

  get content(): T {
    return this._content;
  }

  set content(newContent: T) {
    this.history.push(this.content);
    this._content = newContent;
  }

  undo() {
    if (this.history.length) {
      const lastContent = this.history.pop();
      if (lastContent === undefined) {
        return;
      }

      this.content = lastContent;
    }
  }
}
