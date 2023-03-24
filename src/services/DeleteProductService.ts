import { getRepository } from "typeorm";
import { Product } from "../entities/Product";

export class DeleteProductService {
  async execute(product_id: string) {
    const repo = getRepository(Product);

    if (!(await repo.findOne(Number(product_id))))
      return new Error("Product does not exists!");

    return repo.delete(Number(product_id));
  }
}
