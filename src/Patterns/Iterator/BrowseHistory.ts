import { Iterator } from './Iterator';

export class BrowseHistory {
  private urls = [''];

  public push(url: string): void {
    this.urls.push(url);
  }

  public pop(): string {
    return this.urls.pop() || 'No More History';
  }

  public createIterator() {
    return this.createArrayIterator();

    /* 
      If in the future we change from array to say a list or any other iterable datatype 
      we could just switch this out:
      this.createListIterator();
      The classes that are dependant on this wouldn't know nay different
      */
  }

  /* =============
    We could add a subclass for ListIterator, UserIterator, AnythingIterator here
    Returning an Anonymous class here is the closest thing we have to a inner class in Typescript.
    It's important to realize why we use a nested class here and not just make another file. It's because
    this is coded to an interface: Iterator and while patterns like the state pattern do create separate classes,
    in this case we are only likely to have one iterator on BrowseHistory. We can change it, sure but it really
    makes sense to have it attached as it also needs a reference to BrowserHistory.
  */
  createArrayIterator() {
    return new (class implements Iterator<string> {
      public index: number;

      constructor(private history: BrowseHistory) {
        this.index = 0;
      }

      hasNext(): boolean {
        return this.index < this.history.urls.length;
      }
      current(): string {
        return this.history.urls[this.index];
      }
      next(): void {
        this.index++;
      }
    })(this);
  }

  static initHistory(): BrowseHistory {
    const history = new BrowseHistory();
    history.push('google.com');
    history.push('bingo.com');
    history.push('ask.com');

    return history;
  }
}
