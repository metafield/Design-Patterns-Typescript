import { Logger } from '../../ReactLogger/Logger';
import { RealEbook } from './RealEbook';
import { Ebook } from './Ebook';

export class EbookProxy implements Ebook {
  private ebook: RealEbook | null = null;

  constructor(private fileName: string, private logger: Logger) {}

  show(): void {
    if (this.ebook === null) {
      this.logger.log(
        `filename: "${this.fileName}" has not been loaded before loading from disk`
      );
      this.ebook = new RealEbook(this.fileName, this.logger);
    }
    this.logger.log(
      `in proxy object for filename: "${this.fileName}", real object is made and we are calling show() on it`
    );
    this.ebook.show();
  }

  getFileName(): string {
    return this.fileName;
  }
}
