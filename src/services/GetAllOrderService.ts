import { getRepository } from "typeorm";
import { Order } from "../entities/Order";

export class GetAllOrderService {
  async execute() {
    const repo = getRepository(Order);

    const order = await repo.find({
      relations: ["products"],
    });

    return order;
  }
}
