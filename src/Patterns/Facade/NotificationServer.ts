import { Logger } from '../../ReactLogger/Logger';
import { Message } from './Message';
import { Connection } from './Connection';
import { AuthToken } from './AuthToken';

export class NotificationServer {
  // connect(): connection
  // authenticate(appID, key): AuthToken
  // send(authToken, message, target)
  // conn. disconnection
  constructor(private logger: Logger) {}

  connect(ip: string): Connection {
    return new Connection();
  }

  authenticate(appID: string, key: string) {
    return new AuthToken();
  }

  send(authToken: AuthToken, message: Message, target: string) {
    this.logger.log('sending a message to ' + target);
  }
}
