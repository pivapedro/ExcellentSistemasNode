import { getRepository } from "typeorm";
import { Product } from "../entities/Product";

type ProductRequest = {
  name: string;
  description: string;
  current_inventory: number;
  product_id: number;
  value: number;
};

export class CreateProductService {
  async execute({
    current_inventory,
    description,
    product_id,
    name,
    value,
  }: ProductRequest): Promise<Error | Product> {
    const repo = getRepository(Product);

    const product = repo.create({
      current_inventory,
      description,
      product_id,
      name,
      value,
    });

    await repo.save(product);

    return product;
  }
}
