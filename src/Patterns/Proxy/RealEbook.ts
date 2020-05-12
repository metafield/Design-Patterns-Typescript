import { Logger } from '../../ReactLogger/Logger';
import { Ebook } from './Ebook';

export class RealEbook implements Ebook {
  constructor(private fileName: string, private logger: Logger) {
    this.load();
  }

  private load(): void {
    this.logger.log(`loading ebook: "${this.fileName}"`);
  }

  show(): void {
    this.logger.log(`Showing the ebook: "${this.fileName}"`);
  }

  getFileName(): string {
    return this.fileName;
  }
}
