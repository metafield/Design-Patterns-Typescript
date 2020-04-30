import { Task } from './Task';
export class TransferMoneyTask extends Task<number> {
  protected doExecute(amount: number): void {
    this.auditTrail.record(amount);
  }
}
