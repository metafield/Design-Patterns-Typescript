export class CustomerService {
  public log: string[] = [];

  addCustomer() {
    this.log.push(`added customer`);
  }
}
