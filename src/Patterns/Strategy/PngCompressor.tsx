import { Compressor } from './Compressor';
import { Logger } from './Logger';

export class PngCompressor implements Compressor {
  constructor(private logger: Logger) {}
  compress = (path: string) =>
    this.logger.log(`Compression ${path} with Png Compression is complete!`);
}
