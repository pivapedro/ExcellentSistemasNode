import { getRepository } from "typeorm";
import { Product } from "../entities/Product";

type ProductGetRequest = {
  product_id: string;
};

export class GetOneProductService {
  async execute({ product_id }: ProductGetRequest) {
    const repo = getRepository(Product);

    const product = await repo.findOne(product_id, {
      relations: ["images"],
    });

    if (!product) return new Error("Product does not exists!!");

    return product;
  }
}
