import { HttpRequest } from './HttpRequest';
import { Handler } from './Handler';

export class Logger extends Handler {
  protected doHandle(request: HttpRequest): boolean {
    const msg = `Logger: logging request for user: ${request.getUsername()}`;
    this.setLog((log) => [...log, msg]);

    return false;
  }
}
