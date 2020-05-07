import { UIControl } from './UIControl';
export class Btn extends UIControl {
  private _isEnabled: boolean = false;
  /**
   * Getter isEnabled
   * @return {boolean }
   */
  public get isEnabled(): boolean {
    return this._isEnabled;
  }
  /**
   * Setter isEnabled
   * @param {boolean } value
   */
  public set isEnabled(value: boolean) {
    this._isEnabled = value;
    this.owner.changed(this);
  }
}
