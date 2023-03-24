import { getRepository } from "typeorm";
import { Product } from "../entities/Product";

type ProductUpdateRequest = {
  product_id: number;
  name: string;
  description: string;
  value: number;
  current_inventory: number;
};

export class UpdateProductService {
  async execute({
    product_id,
    name,
    description,
    value,
  }: ProductUpdateRequest) {
    const repo = getRepository(Product);

    const product = await repo.findOne(product_id);

    if (!product) return new Error("Product does not exists!!");

    product.name = name ? name : product.name;
    product.description = description ? description : product.description;
    product.value = value ? value : product.value;
    product.product_id = product_id ? product_id : product.product_id;

    await repo.save(product);

    return product;
  }
}
