import { getRepository } from "typeorm";
import { Product } from "../entities/Product";

export class GetAllProductService {
  async execute() {
    const repo = getRepository(Product);

    const product = await repo.find({
      relations: ["images"],
    });

    return product;
  }
}
