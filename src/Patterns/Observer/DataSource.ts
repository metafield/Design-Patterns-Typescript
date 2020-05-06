import { Observable } from './Observable';
import { Observer } from './Observer';

export class DataSource extends Observable {
  constructor(private _value: number) {
    super();
  }

  public get value(): number {
    return this._value;
  }

  public set value(newValue: number) {
    this._value = newValue;
    this.notify();
  }

  public attach(observer: Observer): void {
    this.observers.push(observer);
    observer.update(this.value);
  }

  public detach(observer: Observer): void {
    const index = this.observers.indexOf(observer);
    if (!index) return;
    this.observers.splice(index);
  }

  protected notify(): void {
    for (const observer of this.observers) {
      observer.update(this.value);
    }
  }
}
