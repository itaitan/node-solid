import { Request, Response, Router } from "express";
import { CustomerController } from "./controller/customer.controler";
import { CustomerMemoryRepository } from "./repository/memory/costumer-memory.repository";

const router = Router();

const repository = new CustomerMemoryRepository();
const customerCreate = new CustomerController(repository);

router.post("/customer", (req: Request, res: Response) => {
  customerCreate.save(req, res);
});

router.get("/customer", (req: Request, res: Response) => {
  customerCreate.getAll(req, res);
});

export { router };
