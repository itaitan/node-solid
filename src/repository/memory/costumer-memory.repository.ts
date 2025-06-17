import { Customer } from "../../model/Entity/customer.entity";
import { CustomerRepository } from "../interfaceRepository/customer.interface";

export class CustomerMemoryRepository implements CustomerRepository {
  private customerCollection: Array<Customer> = [];

  async save(customer: Customer): Promise<void> {
    this.customerCollection.push(customer);
  }

  async getAll(): Promise<Customer[]> {
    return this.customerCollection;
  }
}
