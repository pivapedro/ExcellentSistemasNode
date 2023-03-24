import { getRepository } from "typeorm";
import { Order } from "../entities/Order";

type OrderUpdateRequest = {
  client: string;
  order_id: number;
};

export class UpdateOrderService {
  async execute({ order_id, client }: OrderUpdateRequest) {
    const repo = getRepository(Order);

    const order = await repo.findOne(order_id);

    if (!order) return new Error("Order does not exists!!");

    order.client = client ? client : order.client;

    await repo.save(order);

    return order;
  }
}
