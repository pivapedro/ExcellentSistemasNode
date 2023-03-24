import { getRepository } from "typeorm";
import { Order } from "../entities/Order";

type OrderRequest = {
  client: string;
};

export class CreateOrderService {
  async execute({ client }: OrderRequest): Promise<Error | Order> {
    const repo = getRepository(Order);

    const order = repo.create({
      client,
    });

    await repo.save(order);

    return order;
  }
}
