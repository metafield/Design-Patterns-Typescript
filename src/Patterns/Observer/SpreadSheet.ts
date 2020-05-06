import { Observer } from './Observer';
import { DataSource } from './DataSource';

export class SpreadSheet implements Observer {
  constructor(private dataSource: DataSource) {}

  update(): void {
    console.log('an update occurred and this spreadsheet was notified');
  }

  public get value(): number {
    return this.dataSource.value;
  }
}
