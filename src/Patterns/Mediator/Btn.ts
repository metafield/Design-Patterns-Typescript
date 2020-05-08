import { UIControl } from './UIControl';
export class Btn extends UIControl {
  private _isEnabled: boolean = false;

  public get isEnabled(): boolean {
    return this._isEnabled;
  }

  public set isEnabled(value: boolean) {
    this._isEnabled = value;
    this.notifyObservers();
  }
}
