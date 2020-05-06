import { Observer } from './Observer';

export class SpreadSheet implements Observer {
  private _value: number = 0;

  update(value: number): void {
    this.value = value;
  }
  public get value(): number {
    return this._value;
  }
  public set value(newValue: number) {
    this._value = newValue;
  }
}
