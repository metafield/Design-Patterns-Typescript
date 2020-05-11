import { Logger } from './Logger';

type SetLogFunction = React.Dispatch<React.SetStateAction<string[]>>;

export class ExampleLogger implements Logger {
  constructor(protected setLog: SetLogFunction) {}

  public log(msg: string) {
    this.setLog((log) => [...log, msg]);
  }
}
