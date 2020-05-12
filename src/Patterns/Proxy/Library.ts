import { Ebook } from './Ebook';

export class Library {
  private ebooks = new Map<string, Ebook>();

  add(ebook: Ebook): void {
    this.ebooks.set(ebook.getFileName(), ebook);
  }

  openEbook(fileName: string) {
    const book = this.ebooks.get(fileName);
    if (!book)
      throw new Error('Failed to open book, no such fileName in library');
    book.show();
  }
}
