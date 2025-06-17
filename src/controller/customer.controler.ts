import { Request, Response } from "express";
import { Customer } from "../model/Entity/customer.entity";
import { CustomerRepository } from "../repository/interfaceRepository/customer.interface";

export class CustomerController {
  constructor(private readonly costumerRepo: CustomerRepository) {}
  async save(request: Request, response: Response) {
    const { name, document } = request.body;
    const customer = Customer.create(name, document);
    this.costumerRepo.save(customer);

    response.status(201).json({
      message: "Customer created successfully",
      customer: customer,
    });
  }

  async getAll(request: Request, response: Response) {
    const customers = await this.costumerRepo.getAll();
    response.status(200).json({
      message: "Customers retrieved successfully",
      customers: customers,
    });
  }
}
