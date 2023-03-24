import { getRepository } from "typeorm";
import { OrderProducts } from "../entities/OrderProducts";

export class DeleteOrderProductService {
  async execute(product_sales_id: string) {
    const repo = getRepository(OrderProducts);

    if (!(await repo.findOne(Number(product_sales_id))))
      return new Error("Product does not exists in this order!");

    return repo.delete(Number(product_sales_id));
  }
}
