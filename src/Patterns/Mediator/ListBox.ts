import { UIControl } from './UIControl';

export class ListBox extends UIControl {
  private _selection: string = '';

  public get selection(): string {
    return this._selection;
  }

  public set selection(selection: string) {
    this._selection = selection;
    this.notifyObservers();
  }
}
