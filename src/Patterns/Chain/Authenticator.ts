import { HttpRequest } from './HttpRequest';
import { Handler } from './Handler';

export class Authenticator extends Handler {
  protected doHandle(request: HttpRequest): boolean {
    const msg = `Authenticator: Handling Authentication: for user: ${request.getUsername()} pass: ${request.getPassword()}`;
    this.setLog((log) => [...log, msg]);

    const isValidCredentials =
      request.getUsername() === 'admin' && request.getPassword() === '1234';

    const authMsg = `Authenticator: Authentication ${
      isValidCredentials
        ? 'succeeded'
        : 'failed. The processing chain has ended.'
    }`;
    this.setLog((log) => [...log, authMsg]);

    const doneProcessingChain = !isValidCredentials;
    return doneProcessingChain;
  }
}
