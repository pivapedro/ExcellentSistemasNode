import { getRepository } from "typeorm";
import { Order } from "../entities/Order";

type OrderGetRequest = {
  order_id: string;
};

export class GetOneOrderService {
  async execute({ order_id }: OrderGetRequest) {
    const repo = getRepository(Order);

    const order = await repo.findOne(order_id, {
      relations: ["products"],
    });

    if (!order) return new Error("Order does not exists!!");

    return order;
  }
}
