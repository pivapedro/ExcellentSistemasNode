import { getRepository } from "typeorm";
import { Order } from "../entities/Order";

export class DeleteOrderService {
  async execute(order_id: string) {
    const repo = getRepository(Order);

    if (!(await repo.findOne(Number(order_id))))
      return new Error("Order does not exists!");

    return repo.delete(Number(order_id));
  }
}
