export class ExampleLogger {
  constructor(
    protected setLog: React.Dispatch<React.SetStateAction<string[]>>
  ) {}

  public log(msg: string) {
    this.setLog((log) => [...log, msg]);
  }
}
