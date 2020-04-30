import { ICommand } from './fx/ICommand';
import { CustomerService } from './CustomerService';
export class AddCustomerCommand implements ICommand {
  constructor(private service: CustomerService) {}
  execute(): void {
    this.service.addCustomer();
  }
}
