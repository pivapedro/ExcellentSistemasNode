import { getRepository } from "typeorm";
import { OrderProducts } from "../entities/OrderProducts";

export type OrderProductsRequest = {
  product_id: number;
  order_id: number;
  quantity: number;
  value: number;
};

export class CreateOrderProductsService {
  async execute({
    product_id,
    order_id,
    quantity,
    value,
  }: OrderProductsRequest): Promise<Error | OrderProducts> {
    const repo = getRepository(OrderProducts);

    const newOrderProducts = await repo.create({
      order_id,
      quantity,
      value,
      fk_product_id: product_id,
    });

    await repo.save(newOrderProducts);
    if (newOrderProducts) {
      const { fk_product_id, order_id, product_sales_id, quantity, value } =
        newOrderProducts;
      return { fk_product_id, order_id, product_sales_id, quantity, value };
    }

    return newOrderProducts;
  }
}
