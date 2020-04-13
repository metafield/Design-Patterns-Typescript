export class Editor<T> {
  private history: T[] = [];

  constructor(public content: T) {
    console.log('i was constructed');
  }

  setContent(newContent: T) {
    console.log(
      `the history was: -${this.history}- adding this old content: -${this.content}-`
    );

    this.history.push(this.content);
    console.log(
      `setting the curContent which is: -${this.content}- to the new content: -${newContent}-`
    );
    this.content = newContent;

    console.log(`This content is now: -${this.content}`);
  }

  public getHistory(): T[] {
    return this.history;
  }

  public undo() {
    if (this.history.length) {
      const lastContent = this.history.pop();
      if (lastContent === undefined) {
        return;
      }

      this.content = lastContent;
    }
  }
}
