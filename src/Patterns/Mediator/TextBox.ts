import { UIControl } from './UIControl';
export class TextBox extends UIControl {
  private _content: string = '';

  public get content(): string {
    return this._content;
  }

  public set content(value: string) {
    this._content = value;
    this.notifyObservers();
  }
}
