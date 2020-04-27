import { Logger } from './Logger';
export class StorageLogger implements Logger {
  public entries: string[] = [];
  log(entry: string) {
    this.entries.push(entry);
  }
}
