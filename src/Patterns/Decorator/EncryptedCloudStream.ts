import { Stream } from './Stream';
import { Logger } from '../../ReactLogger/Logger';

export class EncryptedCloudStream implements Stream {
  constructor(private stream: Stream, private logger: Logger) {}

  write(data: string): void {
    const secureData = this.encrypt(data);
    this.stream.write(secureData); // delegation
  }

  private encrypt(data: string): string {
    this.logger.log('Encrypting ' + data);
    return '@#$@#$@%^@#%@!!!#!@#$!@$@!$';
  }
}
