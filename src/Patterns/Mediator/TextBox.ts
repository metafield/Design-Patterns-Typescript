import { UIControl } from './UIControl';
export class TextBox extends UIControl {
  private _content: string = '';
  /**
   * Getter content
   * @return {string }
   */
  public get content(): string {
    return this._content;
  }
  /**
   * Setter content
   * @param {string } value
   */
  public set content(value: string) {
    this._content = value;
    this.owner.changed(this);
  }
}
