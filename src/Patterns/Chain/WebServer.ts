import { HttpRequest } from './HttpRequest';
import { Handler } from './Handler';

export class WebServer {
  constructor(private handler: Handler) {}

  public handle(request: HttpRequest) {
    this.handler.handle(request);
  }
}
