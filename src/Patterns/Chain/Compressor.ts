import { HttpRequest } from './HttpRequest';
import { Handler } from './Handler';

export class Compressor extends Handler {
  protected doHandle(request: HttpRequest): boolean {
    const msg = `Compressor: Compressing request...`;
    this.setLog((log) => [...log, msg]);

    return false;
  }
}
