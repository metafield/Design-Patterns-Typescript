export class AuditTrail<T> {
  public items: T[] = [];
  record(item: T) {
    this.items.push(item);
  }
}
