import { AuditTrail } from './AuditTrail';
export abstract class Task<T> {
  auditTrail = new AuditTrail<number>();
  execute(action: T) {
    this.doExecute(action);
  }
  protected abstract doExecute(arg1: T): void;
}
