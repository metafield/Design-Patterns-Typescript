export class AuditTrail<T> {
  public items: T[] = [];

  record(item: T) {
    this.items.push(item);
  }
}

export abstract class Task<T> {
  auditTrail = new AuditTrail<number>();

  execute(action: T) {
    this.doExecute(action);
  }

  protected abstract doExecute(arg1: T): void;
}

export class TransferMoneyTask extends Task<number> {
  protected doExecute(amount: number): void {
    this.auditTrail.record(amount);
  }
}

test('transferring money should create an audit log', () => {
  const task = new TransferMoneyTask();
  const firstAmount = 49.99;
  const secondAmount = 12.34;

  task.execute(firstAmount);
  task.execute(secondAmount);

  const [firstAuditItem, secondAuditItem] = task.auditTrail.items;
  expect(firstAuditItem).toEqual(firstAmount);
  expect(secondAuditItem).toEqual(secondAmount);
});
