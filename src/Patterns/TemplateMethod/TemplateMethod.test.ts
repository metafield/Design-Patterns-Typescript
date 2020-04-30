import { TransferMoneyTask } from './TransferMoneyTask';

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
