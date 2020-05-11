import { Stream } from './Stream';
import { Logger } from '../../ReactLogger/Logger';

export class CompressedCloudStream implements Stream {
  constructor(private stream: Stream, private logger: Logger) {}

  write(data: string): void {
    const compressed = this.compress(data);
    this.stream.write(compressed);
  }

  private compress(data: string): string {
    this.logger.log('Compressing ' + data);
    return data.slice(0, 5);
  }
}
