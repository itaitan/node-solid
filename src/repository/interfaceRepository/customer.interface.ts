import { Customer } from "../../model/Entity/customer.entity";

export interface CustomerRepository {
  save(customer: Customer): Promise<void>;
  getAll(): Promise<Customer[]>;
}
