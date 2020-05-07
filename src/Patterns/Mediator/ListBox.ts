import { UIControl } from './UIControl';
export class ListBox extends UIControl {
  private _selection: string = '';
  /**
   * Getter selection
   * @return {string}
   */

  public get selection(): string {
    return this._selection;
  }
  /**
   * Setter selection
   * @param {string} selection
   */

  public set selection(selection: string) {
    this._selection = selection;
    this.owner.changed(this);
  }
}
