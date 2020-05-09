import { HttpRequest } from './HttpRequest';

type LogSetter = React.Dispatch<React.SetStateAction<string[]>>;

export abstract class Handler {
  constructor(protected setLog: LogSetter, private next: Handler | null) {}

  public handle(request: HttpRequest): void {
    if (this.doHandle(request)) {
      return;
    }

    if (this.next) {
      this.next.handle(request);
    }
  }

  protected abstract doHandle(request: HttpRequest): boolean;
}
