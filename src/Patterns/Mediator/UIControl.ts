import { EventHandler } from './EventHandler';

export abstract class UIControl {
  private eventHandlers: EventHandler[] = [];

  public addEventHandler(observer: EventHandler) {
    this.eventHandlers.push(observer);
  }

  protected notifyObservers(): void {
    for (const handler of this.eventHandlers) {
      handler.handle();
    }
  }
}
