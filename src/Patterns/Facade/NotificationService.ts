import { Logger } from '../../ReactLogger/Logger';
import { NotificationServer } from './NotificationServer';
import { Message } from './Message';

export class NotificationService {
  constructor(private logger: Logger) {}

  send(message: string, target: string) {
    const server = new NotificationServer(this.logger);
    const connection = server.connect('ip');
    const authToken = server.authenticate('appId', 'key');
    const msg = new Message(message);
    server.send(authToken, msg, target);
    connection.disconnect();
  }
}
